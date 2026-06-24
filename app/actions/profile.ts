"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";

// "admin" n'est jamais sélectionnable ici — uniquement attribuable via le backoffice.
const SELF_SERVICE_ROLES = ["student", "teacher", "parent"] as const;
type SelfServiceRole = (typeof SELF_SERVICE_ROLES)[number];

export async function updateProfile(_prev: { error?: string } | undefined, formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const name = (formData.get("name") as string)?.trim();
  const school_level = formData.get("school_level") as string;
  const role = formData.get("role") as string | null;

  if (!name || name.length < 2) {
    return { error: "Le prénom doit contenir au moins 2 caractères." };
  }

  const { data: currentProfileRaw } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  const currentRole = (currentProfileRaw as { role: string } | null)?.role;

  // Un compte admin ne propose pas ce champ (cf. SettingsForm) — on ignore toute valeur reçue
  // et on ne permet jamais une auto-rétrogradation accidentelle via ce formulaire.
  let nextRole: string | undefined = currentRole;
  if (currentRole !== "admin") {
    if (!SELF_SERVICE_ROLES.includes(role as SelfServiceRole)) {
      return { error: "Profil invalide." };
    }
    nextRole = role as SelfServiceRole;
  }

  const { error } = await supabase
    .from("profiles")
    .update({ name, school_level: school_level || null, role: nextRole } as never)
    .eq("id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/profile");
  revalidatePath("/settings");
  revalidatePath("/dashboard");

  return { error: undefined };
}
