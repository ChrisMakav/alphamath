import type { createClient } from "./supabase/server";
import type { Database } from "./supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type SupabaseServerClient = Awaited<ReturnType<typeof createClient>>;

export const TRIAL_DAYS = 14;

export type CourseAccess =
  | { kind: "unrestricted" }
  | { kind: "trial"; freeCourseSlug: string | null; daysLeft: number }
  | { kind: "expired" };

/**
 * Modèle d'accès aux cours/exercices :
 * - admin / enseignant → toujours illimité (le périmètre de niveaux qu'ils voient est géré
 *   séparément par getAccessibleLevels, indépendamment de l'abonnement).
 * - élève/parent premium → illimité (dans son niveau, cf. getAccessibleLevels).
 * - élève/parent gratuit, dans les 14 jours suivant l'inscription → un seul cours autorisé,
 *   celui qu'il a commencé en premier.
 * - élève/parent gratuit, après 14 jours → plus aucun accès, doit passer premium.
 */
export async function resolveCourseAccess(
  supabase: SupabaseServerClient,
  userId: string
): Promise<CourseAccess> {
  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("role, is_premium, created_at")
    .eq("id", userId)
    .single();
  const profile = profileRaw as Pick<Profile, "role" | "is_premium" | "created_at"> | null;

  if (profile?.role === "admin" || profile?.role === "teacher" || profile?.is_premium) {
    return { kind: "unrestricted" };
  }

  const createdAtMs = profile?.created_at ? new Date(profile.created_at).getTime() : Date.now();
  const daysSince = (Date.now() - createdAtMs) / 86_400_000;
  if (daysSince >= TRIAL_DAYS) return { kind: "expired" };

  const { data: firstEnrollmentRaw } = await supabase
    .from("enrollments")
    .select("course_slug")
    .eq("user_id", userId)
    .order("enrolled_at", { ascending: true })
    .limit(1)
    .single();
  const freeCourseSlug = (firstEnrollmentRaw as { course_slug: string } | null)?.course_slug ?? null;

  return { kind: "trial", freeCourseSlug, daysLeft: Math.max(0, Math.ceil(TRIAL_DAYS - daysSince)) };
}

export function canAccessCourse(access: CourseAccess, courseSlug: string): boolean {
  if (access.kind === "unrestricted") return true;
  if (access.kind === "expired") return false;
  return access.freeCourseSlug === null || access.freeCourseSlug === courseSlug;
}

/**
 * Verrouille ce cours comme le "cours gratuit" de l'utilisateur s'il n'en a pas encore choisi un
 * (première visite d'un cours ou d'une leçon pendant la période d'essai).
 */
export async function lockInFreeCourseIfNeeded(
  supabase: SupabaseServerClient,
  userId: string,
  courseSlug: string,
  access: CourseAccess
): Promise<void> {
  if (access.kind === "trial" && access.freeCourseSlug === null) {
    await supabase.from("enrollments").insert({ user_id: userId, course_slug: courseSlug } as never);
    access.freeCourseSlug = courseSlug;
  }
}

export function hasPremiumAccess(profile: { role: string | null; is_premium: boolean | null }): boolean {
  return profile.role === "admin" || profile.role === "teacher" || !!profile.is_premium;
}
