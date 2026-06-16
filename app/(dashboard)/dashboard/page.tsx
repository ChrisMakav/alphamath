import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { StatWidget } from "../../components/ui/StatWidget";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { ActivityGrid } from "../../components/ui/ActivityGrid";
import { AchievementBadge } from "../../components/ui/AchievementBadge";
import { Button } from "../../components/ui/Button";
import { COURSES, getDailyChallenge, getSubjectLabel } from "../../../lib/seed-data";
import { LevelBadge } from "../../components/ui/Badge";
import type { Database } from "../../../lib/supabase/types";

type Profile       = Database["public"]["Tables"]["profiles"]["Row"];
type Progress      = Database["public"]["Tables"]["user_progress"]["Row"];
type Enrollment    = Database["public"]["Tables"]["enrollments"]["Row"];
type DailyActivity = Database["public"]["Tables"]["daily_activity"]["Row"];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  const profile = profileRaw as Profile | null;

  const { data: progressRaw } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id);
  const progressRows = (progressRaw ?? []) as Progress[];

  const { data: enrollRaw } = await supabase
    .from("enrollments")
    .select("*")
    .eq("user_id", user.id);
  const enrollRows = (enrollRaw ?? []) as Enrollment[];

  const { data: activityRaw } = await supabase
    .from("daily_activity")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: false })
    .limit(84);
  const activityRows = (activityRaw ?? []) as DailyActivity[];

  const completedLessons = progressRows?.filter((p) => p.completed).length ?? 0;
  const totalLessons = COURSES.reduce((s, c) => s + c.lessons.length, 0);
  const globalProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // XP this week
  const today = new Date().toISOString().split("T")[0];
  const xpThisWeek = activityRows
    .filter((a) => {
      const d = new Date(a.date);
      const now = new Date();
      const diff = (now.getTime() - d.getTime()) / 86_400_000;
      return diff <= 7;
    })
    .reduce((s, a) => s + a.xp_earned, 0);

  const exercisesToday = activityRows.find((a) => a.date === today)?.exercises_done ?? 0;

  const daily = getDailyChallenge(profile?.school_level);

  // Heatmap data (12 weeks × 7 days)
  const heatmapData: number[] = Array.from({ length: 84 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (83 - i));
    const dateStr = d.toISOString().split("T")[0];
    const row = activityRows?.find((a) => a.date === dateStr);
    return row ? Math.min(100, row.minutes_studied * 2) : 0;
  });

  const enrolledCourses = enrollRows?.map((e) => {
    const course = COURSES.find((c) => c.slug === e.course_slug);
    if (!course) return null;
    const lessons = course.lessons.length;
    const done = progressRows?.filter(
      (p) => p.course_slug === e.course_slug && p.completed
    ).length ?? 0;
    return { course, progress: lessons > 0 ? Math.round((done / lessons) * 100) : 0 };
  }).filter(Boolean) as { course: typeof COURSES[0]; progress: number }[];

  const name = profile?.name ?? user.email?.split("@")[0] ?? "Étudiant";

  const LEVEL_ORDER: Record<string, number> = {
    "6eme": 1, "5eme": 2, "4eme": 3, "3eme": 4,
    "2nde": 5, "1ere": 6, "terminale": 7, "L1": 8, "L2": 9, "L3": 10,
  };
  const userLevelRank = LEVEL_ORDER[profile?.school_level ?? ""] ?? 999;
  const unenrolledSlugs = new Set(enrollRows.map((e) => e.course_slug));
  const recommendedCourses = [...COURSES]
    .filter((c) => !unenrolledSlugs.has(c.slug))
    .sort((a, b) => {
      const da = Math.abs((LEVEL_ORDER[a.schoolLevel] ?? 999) - userLevelRank);
      const db = Math.abs((LEVEL_ORDER[b.schoolLevel] ?? 999) - userLevelRank);
      return da - db;
    })
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Greeting */}
      <div className="mb-8">
        <p className="text-sm font-medium mb-1" style={{ color: "var(--am-text-muted)" }}>
          Prêt pour une nouvelle séance de mathématiques aujourd'hui ?
        </p>
        <h1 className="text-3xl font-black text-[var(--am-text)]">
          Bonjour {name} 👋
        </h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatWidget
          value={`${profile?.xp ?? 0}`}
          label="Points XP"
          icon="⭐"
          accent="amber"
          trend={xpThisWeek > 0 ? { value: `+${xpThisWeek} cette semaine`, up: true } : undefined}
        />
        <StatWidget
          value={completedLessons.toString()}
          label="Leçons complétées"
          icon="📚"
          accent="green"
        />
        <StatWidget
          value={`${globalProgress}%`}
          label="Progression globale"
          icon="🎯"
          accent="purple"
        />
        <StatWidget
          value={`${profile?.streak ?? 0}j`}
          label="Série en cours"
          icon="🔥"
          accent="blue"
          trend={profile?.streak ? { value: "Continue comme ça !", up: true } : undefined}
        />
      </div>

      {/* Daily Challenge */}
      <a
        href="/practice"
        className="flex items-center gap-5 rounded-[var(--am-radius-xl)] p-5 mb-8 group transition-all hover:border-[var(--am-purple)] block"
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, var(--am-bg-card) 100%)",
          border: "1px solid var(--am-border)",
        }}
      >
        <div
          className="flex-shrink-0 size-12 rounded-[var(--am-radius-lg)] flex items-center justify-center text-xl font-black"
          style={{ background: "var(--am-purple-muted)", border: "1px solid rgba(139,92,246,0.3)", color: "var(--am-purple)" }}
        >
          ★
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--am-purple)" }}>
              Défi du Jour
            </span>
            <LevelBadge level={daily.schoolLevel} />
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full ml-auto" style={{
              background: "rgba(245,158,11,0.1)", color: "var(--am-amber)", border: "1px solid rgba(245,158,11,0.2)"
            }}>
              +{daily.xpReward} XP
            </span>
          </div>
          <p className="text-sm text-[var(--am-text)] truncate">
            {daily.question.replace(/\$[^$]+\$/g, "[…]").slice(0, 100)}…
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--am-text-muted)" }}>
            {daily.courseTitle} · {getSubjectLabel(daily.subject)}
            {exercisesToday > 0 && ` · ${exercisesToday} exercice${exercisesToday !== 1 ? "s" : ""} fait${exercisesToday !== 1 ? "s" : ""} aujourd'hui`}
          </p>
        </div>
        <span className="text-[var(--am-text-muted)] group-hover:text-[var(--am-purple)] transition-colors flex-shrink-0">→</span>
      </a>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Cours en cours */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-base font-bold text-[var(--am-text)]">
            {enrolledCourses.length > 0 ? "Mes cours en cours" : "Commencer un cours"}
          </h2>

          {enrolledCourses.length > 0 ? (
            enrolledCourses.map(({ course, progress }) => (
              <div
                key={course.id}
                className="rounded-[var(--am-radius-xl)] p-5 flex items-center gap-4"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <div
                  className="size-12 rounded-[var(--am-radius-lg)] flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "var(--am-bg-elevated)", border: "1px solid var(--am-border)" }}
                >
                  {course.thumbnailEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-[var(--am-text)] truncate mb-2">{course.title}</p>
                  <ProgressBar value={progress} size="sm" showValue />
                </div>
                <a href={`/courses/${course.slug}/lesson/${course.lessons[0].slug}`}>
                  <Button variant="primary" size="sm">Reprendre →</Button>
                </a>
              </div>
            ))
          ) : (
            <div
              className="rounded-[var(--am-radius-xl)] p-8 text-center"
              style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)", borderStyle: "dashed" }}
            >
              <p className="text-3xl mb-3">📖</p>
              <p className="font-bold text-[var(--am-text)] mb-1">Aucun cours démarré</p>
              <p className="text-sm text-[var(--am-text-muted)] mb-4">Explorez notre catalogue et commencez dès aujourd'hui.</p>
              <a href="/courses">
                <Button variant="primary" size="sm">Voir les cours →</Button>
              </a>
            </div>
          )}
        </div>

        {/* Recommandations */}
        <div
          className="rounded-[var(--am-radius-xl)] p-5 flex flex-col gap-3"
          style={{
            background: "linear-gradient(160deg, var(--am-purple-muted) 0%, var(--am-bg-card) 100%)",
            border: "1px solid var(--am-purple)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--am-purple)" }}>
            🤖 RECOMMANDÉ
          </p>
          <h3 className="text-sm font-bold text-[var(--am-text)]">Continuer l'apprentissage</h3>
          <div className="flex flex-col gap-2">
            {recommendedCourses.map((c) => (
              <a
                key={c.id}
                href={`/courses/${c.slug}`}
                className="flex items-center justify-between gap-2 p-3 rounded-[var(--am-radius-md)] transition-all hover:bg-white/5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--am-border-subtle)" }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base flex-shrink-0">{c.thumbnailEmoji}</span>
                  <span className="text-xs text-[var(--am-text-secondary)] truncate">{c.title}</span>
                </div>
                <span className="text-xs font-semibold flex-shrink-0" style={{ color: "var(--am-amber)" }}>
                  +{c.lessons.length * 10} XP
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Activité hebdomadaire */}
      <div
        className="rounded-[var(--am-radius-xl)] p-6 mb-8"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-bold text-[var(--am-text)]">Activité hebdomadaire</h2>
          <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>12 dernières semaines</span>
        </div>
        <ActivityGrid data={heatmapData} weeks={12} />
      </div>

      {/* Badges */}
      <div
        className="rounded-[var(--am-radius-xl)] p-6"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <h2 className="text-base font-bold text-[var(--am-text)] mb-5">Accomplissements</h2>
        <div className="flex flex-wrap gap-6">
          <AchievementBadge icon="📐" title="Guru Géomètre"   description="Maîtriser 10 constructions" rarity="rare"      unlocked={completedLessons >= 1} />
          <AchievementBadge icon="∂"  title="Dérivé Maître"   description="100 dérivées sans erreur"  rarity="epic"      unlocked={completedLessons >= 3} />
          <AchievementBadge icon="🔥" title="Série 7j"        description="7 jours consécutifs"       rarity="legendary" unlocked={(profile?.streak ?? 0) >= 7} />
          <AchievementBadge icon="∫"  title="Intégraliste"    description="Finir un module intégral"  rarity="common"    unlocked={completedLessons >= 2} />
          <AchievementBadge icon="π"  title="Score Parfait"   description="100% à un exercice"        rarity="legendary" unlocked={false} />
        </div>
      </div>
    </div>
  );
}
