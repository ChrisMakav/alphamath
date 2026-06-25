import { Resend } from "resend";

// Falls back to a placeholder so the app can build/run before the Resend key exists —
// any real send call will then fail loudly with an auth error instead of crashing at startup.
export const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

// Until a custom domain is verified on Resend, sends must come from this onboarding address.
export const EMAIL_FROM = process.env.EMAIL_FROM || "AlphaMath <onboarding@resend.dev>";
