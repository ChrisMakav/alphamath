"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";

const VALID_ROLES = ["student", "teacher", "parent"] as const;
type Role = (typeof VALID_ROLES)[number];

export async function completeOnboarding(_prev: { error?: string } | undefined, formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const name = (formData.get("name") as string)?.trim();
  const role = formData.get("role") as string;
  const school_level = (formData.get("school_level") as string) || null;

  if (!name || name.length < 2) return { error: "Le prénom doit contenir au moins 2 caractères." };
  if (!VALID_ROLES.includes(role as Role)) return { error: "Veuillez choisir un profil." };

  const { error } = await supabase
    .from("profiles")
    .update({ name, role, school_level } as never)
    .eq("id", user.id);

  if (error) return { error: error.message };

  redirect("/dashboard");
}
