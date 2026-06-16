import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { COURSES } from "../../../lib/seed-data";
import { StatWidget } from "../../components/ui/StatWidget";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { ActivityGrid } from "../../components/ui/ActivityGrid";
import type { Database } from "../../../lib/supabase/types";

type Profile       = Database["public"]["Tables"]["profiles"]["Row"];
type Progress      = Database["public"]["Tables"]["user_progress"]["Row"];
type Enrollment    = Database["public"]["Tables"]["enrollments"]["Row"];
type DailyActivity = Database["public"]["Tables"]["daily_activity"]["Row"];

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [profileRes, progressRes, enrollRes, activityRes] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).single(),
    supabase.from("user_progress").select("*").eq("user_id", user.id),
    supabase.from("enrollments").select("*").eq("user_id", user.id),
    supabase.from("daily_activity").select("*").eq("user_id", user.id).order("date", { ascending: true }),
  ]);

  const profile       = profileRes.data as Profile | null;
  const progressRows  = (progressRes.data ?? []) as Progress[];
  const enrollRows    = (enrollRes.data ?? []) as Enrollment[];
  const activityRows  = (activityRes.data ?? []) as DailyActivity[];

  const completedLessons  = progressRows.filter((p) => p.completed).length;
  const totalMinutes      = activityRows.reduce((s, a) => s + a.minutes_studied, 0);
  const totalXpEarned     = activityRows.reduce((s, a) => s + a.xp_earned, 0);

  // Heatmap — 26 weeks (half year)
  const WEEKS = 26;
  const heatmapData: number[] = Array.from({ length: WEEKS * 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (WEEKS * 7 - 1 - i));
    const dateStr = d.toISOString().split("T")[0];
    const row = activityRows.find((a) => a.date === dateStr);
    return row ? Math.min(100, row.minutes_studied * 2) : 0;
  });

  // Per-course progress
  const courseStats = enrollRows
    .map((e) => {
      const course = COURSES.find((c) => c.slug === e.course_slug);
      if (!course) return null;
      const total = course.lessons.length;
      const done  = progressRows.filter((p) => p.course_slug === e.course_slug && p.completed).length;
      return { course, pct: total > 0 ? Math.round((done / total) * 100) : 0, done, total };
    })
    .filter(Boolean) as { course: typeof COURSES[0]; pct: number; done: number; total: number }[];

  // Weekly activity (last 8 weeks)
  const weeklyData: { label: string; minutes: number }[] = Array.from({ length: 8 }, (_, i) => {
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - (7 - i) * 7);
    let minutes = 0;
    for (let d = 0; d < 7; d++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + d);
      const dateStr = day.toISOString().split("T")[0];
      const row = activityRows.find((a) => a.date === dateStr);
      if (row) minutes += row.minutes_studied;
    }
    const labels = ["S-7", "S-6", "S-5", "S-4", "S-3", "S-2", "S-1", "Cette sem."];
    return { label: labels[i], minutes };
  });

  const maxWeeklyMinutes = Math.max(...weeklyData.map((w) => w.minutes), 1);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[var(--am-text)]">Analyses</h1>
        <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>
          Suivez votre progression et vos habitudes d'apprentissage.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatWidget
          value={`${profile?.xp ?? 0}`}
          label="Points XP"
          icon="⭐"
          accent="amber"
        />
        <StatWidget
          value={completedLessons.toString()}
          label="Leçons complétées"
          icon="📚"
          accent="green"
        />
        <StatWidget
          value={`${Math.round(totalMinutes / 60 * 10) / 10}h`}
          label="Temps d'étude"
          icon="⏱"
          accent="purple"
        />
        <StatWidget
          value={`${profile?.streak ?? 0}j`}
          label="Série en cours"
          icon="🔥"
          accent="blue"
        />
      </div>

      {/* Activité */}
      <div
        className="rounded-[var(--am-radius-xl)] p-6 mb-6"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-bold text-[var(--am-text)]">Calendrier d'activité</h2>
          <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>26 dernières semaines</span>
        </div>
        <ActivityGrid data={heatmapData} weeks={WEEKS} />
        <p className="text-xs mt-3" style={{ color: "var(--am-text-muted)" }}>
          Total : <strong style={{ color: "var(--am-text-secondary)" }}>{totalMinutes} minutes</strong> étudiées
          · <strong style={{ color: "var(--am-text-secondary)" }}>{totalXpEarned} XP</strong> gagnés
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly bars */}
        <div
          className="rounded-[var(--am-radius-xl)] p-6"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <h2 className="text-base font-bold text-[var(--am-text)] mb-5">Temps hebdomadaire</h2>
          <div className="flex items-end gap-2 h-32">
            {weeklyData.map((w, i) => {
              const pct = Math.round((w.minutes / maxWeeklyMinutes) * 100);
              const isCurrentWeek = i === weeklyData.length - 1;
              return (
                <div key={i} className="flex flex-col items-center gap-1 flex-1">
                  <div className="w-full flex items-end justify-center" style={{ height: "100px" }}>
                    <div
                      className="w-full rounded-t-sm transition-all"
                      style={{
                        height: `${Math.max(pct, 2)}%`,
                        background: isCurrentWeek ? "var(--am-green)" : "var(--am-purple-muted)",
                        border: isCurrentWeek ? "none" : "1px solid var(--am-border)",
                      }}
                    />
                  </div>
                  <span className="text-[10px]" style={{ color: "var(--am-text-muted)" }}>
                    {w.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Per-course progress */}
        <div
          className="rounded-[var(--am-radius-xl)] p-6"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <h2 className="text-base font-bold text-[var(--am-text)] mb-5">Progression par cours</h2>
          {courseStats.length > 0 ? (
            <div className="flex flex-col gap-4">
              {courseStats.map(({ course, pct, done, total }) => (
                <div key={course.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-[var(--am-text-secondary)] flex items-center gap-2">
                      <span>{course.thumbnailEmoji}</span>
                      <span className="truncate max-w-[160px]">{course.title}</span>
                    </span>
                    <span className="text-xs font-semibold" style={{ color: "var(--am-text-muted)" }}>
                      {done}/{total}
                    </span>
                  </div>
                  <ProgressBar
                    value={pct}
                    size="sm"
                    showValue
                    color={pct === 100 ? "green" : "purple"}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-3xl mb-3">📊</p>
              <p className="text-sm" style={{ color: "var(--am-text-muted)" }}>
                Inscrivez-vous à des cours pour voir votre progression.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
