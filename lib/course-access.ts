import { redirect } from "next/navigation";
import type { createClient } from "./supabase/server";
import { getAccessibleLevels, type SchoolLevel } from "./seed-data";
import type { Database } from "./supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type SupabaseServerClient = Awaited<ReturnType<typeof createClient>>;

/**
 * Bloque l'accès direct par URL à un cours/leçon hors du niveau (ou de la catégorie, pour un
 * enseignant premium) auquel le profil connecté a droit — même règle que le catalogue /courses
 * et l'espace /practice (cf. getAccessibleLevels dans lib/seed-data.ts).
 */
export async function assertCourseLevelAccess(
  supabase: SupabaseServerClient,
  userId: string,
  courseLevel: SchoolLevel
) {
  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("school_level, role, is_premium")
    .eq("id", userId)
    .single();
  const profile = profileRaw as Pick<Profile, "school_level" | "role" | "is_premium"> | null;

  const accessibleLevels = getAccessibleLevels({
    role: profile?.role ?? null,
    school_level: profile?.school_level ?? null,
    is_premium: profile?.is_premium ?? null,
  });

  if (accessibleLevels !== "all" && !accessibleLevels.includes(courseLevel)) {
    redirect("/courses");
  }
}
