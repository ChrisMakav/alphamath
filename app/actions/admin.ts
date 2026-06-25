"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import type { Database } from "../../lib/supabase/types";
import { CONTACT_SUBJECT_LABELS } from "../../lib/contact";
import { sendContactReplyEmail } from "../../lib/emails/send-contact-reply";

type Role = Database["public"]["Tables"]["profiles"]["Row"]["role"];
const ROLES: Role[] = ["student", "teacher", "parent", "admin"];

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  const profile = profileRaw as { role: Role } | null;
  if (profile?.role !== "admin") redirect("/dashboard");

  return { supabase, userId: user.id };
}

export async function setUserRole(_prev: { error?: string } | undefined, formData: FormData) {
  const { supabase, userId } = await requireAdmin();

  const targetId = formData.get("userId") as string;
  const role = formData.get("role") as Role;

  if (!ROLES.includes(role)) {
    return { error: "Rôle invalide." };
  }
  if (targetId === userId && role !== "admin") {
    return { error: "Vous ne pouvez pas retirer votre propre rôle administrateur." };
  }

  const { error } = await supabase
    .from("profiles")
    .update({ role } as never)
    .eq("id", targetId);

  if (error) return { error: error.message };

  revalidatePath("/admin");
  return { error: undefined };
}

export async function replyToContactRequest(_prev: { error?: string } | undefined, formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = formData.get("id") as string;
  const reply = (formData.get("reply") as string)?.trim();

  if (!reply) return { error: "La réponse ne peut pas être vide." };

  const { data: requestRaw } = await supabase
    .from("contact_requests")
    .select("*")
    .eq("id", id)
    .single();
  const request = requestRaw as Database["public"]["Tables"]["contact_requests"]["Row"] | null;
  if (!request) return { error: "Demande introuvable." };

  try {
    await sendContactReplyEmail({
      to: request.email,
      name: request.name,
      subjectLabel: CONTACT_SUBJECT_LABELS[request.subject] ?? request.subject,
      originalMessage: request.message,
      reply,
    });
  } catch (err) {
    console.error("replyToContactRequest: échec envoi email", err);
    return { error: "L'email n'a pas pu être envoyé. Réessayez." };
  }

  const { error } = await supabase
    .from("contact_requests")
    .update({ admin_reply: reply, replied_at: new Date().toISOString(), status: "treated" } as never)
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin");
  return { error: undefined };
}

export async function setContactRequestStatus(_prev: { error?: string } | undefined, formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = formData.get("id") as string;
  const status = formData.get("status") as Database["public"]["Tables"]["contact_requests"]["Row"]["status"];

  if (status !== "new" && status !== "treated") {
    return { error: "Statut invalide." };
  }

  const { error } = await supabase
    .from("contact_requests")
    .update({ status } as never)
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin");
  return { error: undefined };
}
