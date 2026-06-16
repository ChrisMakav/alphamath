import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { COURSES, LEVEL_LABELS } from "../../../lib/seed-data";
import { Avatar } from "../../components/ui/Avatar";
import { AchievementBadge } from "../../components/ui/AchievementBadge";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { LevelBadge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import type { Database } from "../../../lib/supabase/types";

type Profile    = Database["public"]["Tables"]["profiles"]["Row"];
type Progress   = Database["public"]["Tables"]["user_progress"]["Row"];
type Enrollment = Database["public"]["Tables"]["enrollments"]["Row"];

const XP_LEVELS = [
  { label: "Novice",      min: 0,    max: 99 },
  { label: "Apprenti",   min: 100,  max: 299 },
  { label: "Disciple",   min: 300,  max: 699 },
  { label: "Expert",     min: 700,  max: 1499 },
  { label: "Maître",     min: 1500, max: 2999 },
  { label: "Légendaire", min: 3000, max: Infinity },
];

function getXpLevel(xp: number) {
  return XP_LEVELS.find((l) => xp >= l.min && xp <= l.max) ?? XP_LEVELS[0];
}

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [profileRes, progressRes, enrollRes] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).single(),
    supabase.from("user_progress").select("*").eq("user_id", user.id),
    supabase.from("enrollments").select("*").eq("user_id", user.id),
  ]);

  const profile     = profileRes.data as Profile | null;
  const progressRows = (progressRes.data ?? []) as Progress[];
  const enrollRows   = (enrollRes.data ?? []) as Enrollment[];

  const name            = profile?.name ?? user.email?.split("@")[0] ?? "Étudiant";
  const xp              = profile?.xp ?? 0;
  const streak          = profile?.streak ?? 0;
  const schoolLevel     = profile?.school_level;
  const completedLessons = progressRows.filter((p) => p.completed).length;
  const totalEnrolled   = enrollRows.length;
  const xpLevel         = getXpLevel(xp);
  const xpToNext        = xpLevel.max === Infinity ? 0 : xpLevel.max - xp + 1;
  const xpPct           = xpLevel.max === Infinity
    ? 100
    : Math.round(((xp - xpLevel.min) / (xpLevel.max - xpLevel.min + 1)) * 100);

  const memberSince = new Date(profile?.created_at ?? user.created_at ?? Date.now())
    .toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  // Achievements
  const achievements = [
    {
      icon: "🎓",
      title: "Première Leçon",
      description: "Compléter 1 leçon",
      rarity: "common" as const,
      unlocked: completedLessons >= 1,
    },
    {
      icon: "📐",
      title: "Guru Géomètre",
      description: "Compléter 3 leçons",
      rarity: "rare" as const,
      unlocked: completedLessons >= 3,
    },
    {
      icon: "∂",
      title: "Maître Dérivé",
      description: "Compléter 6 leçons",
      rarity: "epic" as const,
      unlocked: completedLessons >= 6,
    },
    {
      icon: "🔥",
      title: "Série 7 jours",
      description: "7 jours consécutifs",
      rarity: "legendary" as const,
      unlocked: streak >= 7,
    },
    {
      icon: "∫",
      title: "Intégraliste",
      description: "Finir un module entier",
      rarity: "common" as const,
      unlocked: enrollRows.some((e) => {
        const course = COURSES.find((c) => c.slug === e.course_slug);
        if (!course) return false;
        return course.lessons.every((l) =>
          progressRows.find((p) => p.lesson_slug === l.slug && p.completed)
        );
      }),
    },
    {
      icon: "π",
      title: "Score Parfait",
      description: "100% à un exercice",
      rarity: "legendary" as const,
      unlocked: false,
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Profile header */}
      <div
        className="rounded-[var(--am-radius-2xl)] p-8 mb-6 relative overflow-hidden"
        style={{
          background: "var(--am-bg-card)",
          border: "1px solid var(--am-border)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute -top-10 -right-10 size-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
        />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Avatar name={name} size="xl" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h1 className="text-2xl font-black text-[var(--am-text)]">{name}</h1>
              {schoolLevel && (
                <LevelBadge level={schoolLevel} />
              )}
            </div>
            <p className="text-sm mb-3" style={{ color: "var(--am-text-muted)" }}>
              Membre depuis {memberSince} · {user.email}
            </p>

            {/* XP progress */}
            <div className="max-w-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold" style={{ color: "var(--am-amber)" }}>
                  ⭐ {xp} XP · {xpLevel.label}
                </span>
                {xpLevel.max !== Infinity && (
                  <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>
                    encore {xpToNext} XP
                  </span>
                )}
              </div>
              <ProgressBar value={xpPct} color="amber" size="sm" />
            </div>
          </div>

          <a href="/settings">
            <Button variant="outline" size="sm">✏ Modifier le profil</Button>
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Leçons terminées", value: completedLessons, icon: "📚" },
          { label: "Cours inscrits",   value: totalEnrolled,    icon: "🎯" },
          { label: "Jours de série",   value: `${streak}🔥`,   icon: "⚡" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-[var(--am-radius-xl)] p-5 text-center"
            style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
          >
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className="text-2xl font-black text-[var(--am-text)]">{s.value}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--am-text-muted)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div
        className="rounded-[var(--am-radius-xl)] p-6"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-bold text-[var(--am-text)]">Accomplissements</h2>
          <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{
            background: "var(--am-purple-muted)",
            color: "var(--am-purple)",
            border: "1px solid rgba(139,92,246,0.2)",
          }}>
            {unlockedCount} / {achievements.length} débloqués
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {achievements.map((a) => (
            <AchievementBadge
              key={a.title}
              icon={a.icon}
              title={a.title}
              description={a.description}
              rarity={a.rarity}
              unlocked={a.unlocked}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
