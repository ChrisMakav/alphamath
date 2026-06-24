"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import { stripe, PREMIUM_PRICE_EUR_CENTS } from "../../lib/stripe";
import type { Database } from "../../lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

async function getSiteUrl() {
  const h = await headers();
  const origin = h.get("origin");
  if (origin) return origin;
  const host = h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  return host ? `${proto}://${host}` : "http://localhost:3005";
}

export async function createCheckoutSession() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/pricing");

  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("stripe_customer_id, is_premium")
    .eq("id", user.id)
    .single();
  const profile = profileRaw as Pick<Profile, "stripe_customer_id" | "is_premium"> | null;

  if (profile?.is_premium) redirect("/dashboard");

  const siteUrl = await getSiteUrl();

  let customerId = profile?.stripe_customer_id ?? undefined;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { supabase_user_id: user.id },
    });
    customerId = customer.id;
    await supabase
      .from("profiles")
      .update({ stripe_customer_id: customerId } as never)
      .eq("id", user.id);
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    payment_method_types: ["card", "sepa_debit"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          recurring: { interval: "month" },
          unit_amount: PREMIUM_PRICE_EUR_CENTS,
          product_data: {
            name: "AlphaMath Premium",
            description: "Accès illimité à tous les cours, exercices, niveaux et au tuteur IA.",
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${siteUrl}/premium/succes?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/pricing`,
    metadata: { supabase_user_id: user.id },
  });

  if (!session.url) redirect("/pricing");
  redirect(session.url);
}
