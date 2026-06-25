import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";
import { stripe } from "../../../../lib/stripe";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { sendPremiumConfirmationEmail } from "../../../../lib/emails/send-premium-confirmation";
import type { Database } from "../../../../lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const supabase = createAdminClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.supabase_user_id;
      const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id;
      const subscriptionId =
        typeof session.subscription === "string" ? session.subscription : session.subscription?.id;

      if (userId) {
        const { error } = await supabase
          .from("profiles")
          .update({
            stripe_customer_id: customerId ?? null,
            stripe_subscription_id: subscriptionId ?? null,
            is_premium: true,
            premium_status: "active",
          } as never)
          .eq("id", userId);
        if (error) console.error("[webhook] Échec mise à jour profil (checkout.session.completed):", error);
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;
      const isActive = subscription.status === "active" || subscription.status === "trialing";

      const { error } = await supabase
        .from("profiles")
        .update({
          stripe_subscription_id: subscription.id,
          is_premium: isActive,
          premium_status: subscription.status,
        } as never)
        .eq("stripe_customer_id", customerId);
      if (error) console.error("[webhook] Échec mise à jour profil (customer.subscription.updated):", error);
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      // Only the first invoice of a subscription — confirmation email is sent once, not on every renewal.
      if (invoice.billing_reason !== "subscription_create") break;

      const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
      const recipientEmail = invoice.customer_email;
      if (!customerId || !recipientEmail) {
        console.error("[webhook] invoice.payment_succeeded: customerId ou recipientEmail manquant", { customerId, recipientEmail });
        break;
      }

      const { data: profileRaw } = await supabase
        .from("profiles")
        .select("name")
        .eq("stripe_customer_id", customerId)
        .single();
      const profile = profileRaw as Pick<Profile, "name"> | null;

      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";
      try {
        await sendPremiumConfirmationEmail({
          to: recipientEmail,
          name: profile?.name ?? null,
          invoice,
          siteUrl,
        });
      } catch (err) {
        console.error("[webhook] Échec envoi email confirmation premium:", err);
      }
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;

      const { error } = await supabase
        .from("profiles")
        .update({ is_premium: false, premium_status: "canceled" } as never)
        .eq("stripe_customer_id", customerId);
      if (error) console.error("[webhook] Échec mise à jour profil (customer.subscription.deleted):", error);
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
