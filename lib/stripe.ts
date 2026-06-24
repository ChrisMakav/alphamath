import Stripe from "stripe";

export const PREMIUM_PRICE_EUR_CENTS = 999;
export const PREMIUM_PRICE_LABEL = "9,99€";

// Falls back to a placeholder so the app can build/run before Stripe keys exist —
// any real API call will then fail loudly with an auth error instead of crashing at startup.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2026-05-27.dahlia",
});
