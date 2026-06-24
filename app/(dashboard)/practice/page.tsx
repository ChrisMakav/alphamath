import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { getAllExercises, getCourseBySlug, getDailyChallenge, getAccessibleLevels, LEVEL_LABELS, getSubjectLabel } from "../../../lib/seed-data";
import { resolveCourseAccess, canAccessCourse } from "../../../lib/access";
import { Button } from "../../components/ui/Button";
import { PracticeEngine } from "../../components/ui/PracticeEngine";
import { LevelBadge } from "../../components/ui/Badge";
import type { Database } from "../../../lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type DailyActivity = Database["public"]["Tables"]["daily_activity"]["Row"];

const DIFF_XP = { debutant: 10, intermediaire: 25, expert: 50 } as const;

interface Props {
  searchParams: Promise<{ course?: string }>;
}

export default async function PracticePage({ searchParams }: Props) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { course: courseSlug } = await searchParams;
  const filterCourse = courseSlug ? getCourseBySlug(courseSlug) : undefined;

  const today = new Date().toISOString().split("T")[0];

  const [profileRes, activityRes] = await Promise.all([
    supabase.from("profiles").select("xp, streak, streak_last_date, school_level, role, is_premium").eq("id", user.id).single(),
    supabase.from("daily_activity").select().eq("user_id", user.id).eq("date", today).single(),
  ]);

  const profile  = profileRes.data  as Pick<Profile, "xp" | "streak" | "streak_last_date" | "school_level" | "role" | "is_premium"> | null;
  const activity = activityRes.data as DailyActivity | null;

  const exercisesToday  = activity?.exercises_done ?? 0;
  const xpToday         = activity?.xp_earned ?? 0;
  const studiedToday    = activity ? activity.date === today : false;
  const streak          = profile?.streak ?? 0;

  // Admin → tous niveaux ; enseignant premium → sa catégorie (collège/lycée/sup) ; sinon → son niveau.
  const accessibleLevels = getAccessibleLevels({
    role: profile?.role ?? null,
    school_level: profile?.school_level ?? null,
    is_premium: profile?.is_premium ?? null,
  });

  // Élève/parent gratuit : exercices limités au cours déjà choisi gratuitement, ou bloqués
  // après 14 jours d'essai. Admin/enseignant/premium → pas de restriction supplémentaire.
  const courseAccess = await resolveCourseAccess(supabase, user.id);

  const allExercises = getAllExercises();
  const exercises = allExercises.filter((e) => {
    if (filterCourse && e.courseSlug !== filterCourse.slug) return false;
    if (accessibleLevels !== "all" && !accessibleLevels.includes(e.schoolLevel)) return false;
    if (!canAccessCourse(courseAccess, e.courseSlug)) return false;
    return true;
  });
  const daily        = getDailyChallenge(profile?.school_level);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-[var(--am-text)]">Espace Pratique</h1>
          <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>
            {exercises.length} exercices · {studiedToday ? `${exercisesToday} fait${exercisesToday !== 1 ? "s" : ""} aujourd'hui · +${xpToday} XP` : "Commencez votre session du jour"}
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm flex-shrink-0">
          {streak > 0 && (
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold"
              style={{
                background: "rgba(245,158,11,0.1)",
                color: "var(--am-amber)",
                border: "1px solid rgba(245,158,11,0.25)",
              }}
            >
              🔥 {streak} jour{streak !== 1 ? "s" : ""} de série
            </div>
          )}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold"
            style={{ background: "var(--am-amber-muted)", color: "var(--am-amber)", border: "1px solid rgba(245,158,11,0.2)" }}
          >
            ⭐ {profile?.xp ?? 0} XP
          </div>
        </div>
      </div>

      {/* ── Alerte essai / accès restreint ── */}
      {courseAccess.kind === "expired" && (
        <div
          className="flex items-center justify-between gap-4 px-5 py-4 rounded-[var(--am-radius-xl)] mb-6 flex-wrap"
          style={{ background: "var(--am-purple-muted)", border: "1px solid var(--am-purple)" }}
        >
          <p className="text-sm text-[var(--am-text)]">
            Votre essai gratuit de 14 jours est terminé. Passez Premium pour continuer à pratiquer.
          </p>
          <Button href="/pricing" variant="secondary" size="sm">Voir les offres →</Button>
        </div>
      )}
      {courseAccess.kind === "trial" && courseAccess.freeCourseSlug === null && (
        <div
          className="flex items-center justify-between gap-4 px-5 py-4 rounded-[var(--am-radius-xl)] mb-6 flex-wrap"
          style={{ background: "var(--am-purple-muted)", border: "1px solid var(--am-purple)" }}
        >
          <p className="text-sm text-[var(--am-text)]">
            Choisissez d&apos;abord un cours dans le catalogue pour débloquer ses exercices
            ({courseAccess.daysLeft} jour{courseAccess.daysLeft !== 1 ? "s" : ""} d&apos;essai restant
            {courseAccess.daysLeft !== 1 ? "s" : ""}).
          </p>
          <Button href="/courses" variant="secondary" size="sm">Voir les cours →</Button>
        </div>
      )}
      {courseAccess.kind === "trial" && courseAccess.freeCourseSlug !== null && (
        <p className="text-xs mb-6" style={{ color: "var(--am-text-muted)" }}>
          Essai gratuit · {courseAccess.daysLeft} jour{courseAccess.daysLeft !== 1 ? "s" : ""} restant
          {courseAccess.daysLeft !== 1 ? "s" : ""} ·{" "}
          <a href="/pricing" className="font-semibold hover:underline" style={{ color: "var(--am-purple)" }}>
            Passer Premium
          </a>
        </p>
      )}

      {/* Filtre par cours */}
      {filterCourse && (
        <div
          className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-[var(--am-radius-md)] text-xs mb-6"
          style={{ background: "var(--am-purple-muted)", border: "1px solid rgba(139,92,246,0.2)", color: "var(--am-purple)" }}
        >
          <span>📍 Exercices supplémentaires · {filterCourse.title}</span>
          <a href="/practice" className="font-semibold hover:underline">Voir tous les exercices</a>
        </div>
      )}

      {/* ── Défi du Jour ── */}
      <div
        className="rounded-[var(--am-radius-xl)] p-6 mb-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, var(--am-bg-card) 100%)",
          border: "1px solid var(--am-purple)",
        }}
      >
        <div
          className="absolute -top-8 -right-8 size-36 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, var(--am-purple) 0%, transparent 70%)" }}
        />
        <div className="relative flex items-start gap-5">
          <div
            className="flex-shrink-0 size-12 rounded-[var(--am-radius-lg)] flex items-center justify-center text-xl font-black"
            style={{ background: "var(--am-purple-muted)", border: "1px solid rgba(139,92,246,0.3)", color: "var(--am-purple)" }}
          >
            ★
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--am-purple)" }}
              >
                Défi du Jour
              </span>
              <LevelBadge level={daily.schoolLevel} />
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  color: "var(--am-amber)",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                +{DIFF_XP[daily.difficulty]} XP
              </span>
            </div>
            <p className="text-sm text-[var(--am-text)] font-medium leading-relaxed mb-1">
              {daily.question.replace(/\$[^$]+\$/g, "[…]").slice(0, 120)}
              {daily.question.length > 120 ? "…" : ""}
            </p>
            <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>
              {daily.courseTitle} · {getSubjectLabel(daily.subject)}
            </p>
          </div>
        </div>
      </div>

      {/* ── Practice Engine ── */}
      <PracticeEngine exercises={exercises} isAuthenticated={true} />
    </div>
  );
}
