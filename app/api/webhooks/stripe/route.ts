import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";
import { stripe } from "../../../../lib/stripe";
import { createAdminClient } from "../../../../lib/supabase/admin";

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
        await supabase
          .from("profiles")
          .update({
            stripe_customer_id: customerId ?? null,
            stripe_subscription_id: subscriptionId ?? null,
            is_premium: true,
            premium_status: "active",
          } as never)
          .eq("id", userId);
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;
      const isActive = subscription.status === "active" || subscription.status === "trialing";

      await supabase
        .from("profiles")
        .update({
          stripe_subscription_id: subscription.id,
          is_premium: isActive,
          premium_status: subscription.status,
        } as never)
        .eq("stripe_customer_id", customerId);
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;

      await supabase
        .from("profiles")
        .update({ is_premium: false, premium_status: "canceled" } as never)
        .eq("stripe_customer_id", customerId);
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
