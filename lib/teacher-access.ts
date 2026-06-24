import { redirect } from "next/navigation";
import type { createClient } from "./supabase/server";
import { getAccessibleLevels, type SchoolLevel } from "./seed-data";
import type { Database } from "./supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type SupabaseServerClient = Awaited<ReturnType<typeof createClient>>;

export interface TeacherAccess {
  isTeacher: boolean;
  isPremiumTeacher: boolean;
  accessibleLevels: SchoolLevel[] | "all";
}

async function getProfileForTeacherAccess(supabase: SupabaseServerClient, userId: string) {
  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("role, is_premium, school_level")
    .eq("id", userId)
    .single();
  return profileRaw as Pick<Profile, "role" | "is_premium" | "school_level"> | null;
}

/**
 * Lecture seule, sans redirect — pilote l'affichage (ex: bannière "Premium requis" plutôt
 * qu'un blocage total) sur les pages /evaluations.
 */
export async function resolveTeacherAccess(
  supabase: SupabaseServerClient,
  userId: string
): Promise<TeacherAccess> {
  const profile = await getProfileForTeacherAccess(supabase, userId);
  const isTeacher = profile?.role === "teacher" || profile?.role === "admin";
  // Le paywall de cette fonctionnalité est volontairement plus strict que hasPremiumAccess()
  // (lib/access.ts) : celle-ci traite tout enseignant comme "premium-équivalent" pour l'accès
  // aux niveaux/cours, mais ici un enseignant doit avoir réellement souscrit pour générer.
  const isPremiumTeacher = profile?.role === "admin" || (profile?.role === "teacher" && !!profile?.is_premium);

  return {
    isTeacher,
    isPremiumTeacher,
    accessibleLevels: getAccessibleLevels({
      role: profile?.role ?? null,
      school_level: profile?.school_level ?? null,
      is_premium: profile?.is_premium ?? null,
    }),
  };
}

/**
 * Garde stricte pour l'action serveur de génération : redirige si le rôle n'est pas
 * enseignant/admin, ou si l'enseignant n'est pas premium.
 */
export async function requirePremiumTeacher(
  supabase: SupabaseServerClient,
  userId: string
): Promise<{ accessibleLevels: SchoolLevel[] | "all" }> {
  const access = await resolveTeacherAccess(supabase, userId);
  if (!access.isTeacher) redirect("/dashboard");
  if (!access.isPremiumTeacher) redirect("/pricing?from=evaluations");
  return { accessibleLevels: access.accessibleLevels };
}

export function assertLevelInScope(accessibleLevels: SchoolLevel[] | "all", level: SchoolLevel) {
  if (accessibleLevels !== "all" && !accessibleLevels.includes(level)) {
    throw new Error("Ce niveau n'est pas dans votre périmètre d'enseignement.");
  }
}
