"use server";
import { createClient } from "../../lib/supabase/server";

export async function submitContactRequest(
  _prev: { error?: string; success?: boolean } | undefined,
  formData: FormData
) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || name.length < 2) {
    return { error: "Le nom doit contenir au moins 2 caractères." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Adresse e-mail invalide." };
  }
  if (!subject) {
    return { error: "Choisissez un sujet." };
  }
  if (!message || message.length < 10) {
    return { error: "Le message doit contenir au moins 10 caractères." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_requests").insert({
    name,
    email,
    phone: phone || null,
    subject,
    message,
  } as never);

  if (error) return { error: "Une erreur est survenue, veuillez réessayer." };

  return { success: true };
}
