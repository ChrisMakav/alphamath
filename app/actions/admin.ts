"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import type { Database } from "../../lib/supabase/types";

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
