"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";

export async function updateProfile(_prev: { error?: string } | undefined, formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const name = (formData.get("name") as string)?.trim();
  const school_level = formData.get("school_level") as string;

  if (!name || name.length < 2) {
    return { error: "Le prénom doit contenir au moins 2 caractères." };
  }

  const { error } = await supabase
    .from("profiles")
    .update({ name, school_level: school_level || null } as never)
    .eq("id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/profile");
  revalidatePath("/settings");
  revalidatePath("/dashboard");

  return { error: undefined };
}
