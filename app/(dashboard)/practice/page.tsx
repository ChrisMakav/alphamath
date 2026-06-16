import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { getAllExercises, getDailyChallenge, LEVEL_LABELS, getSubjectLabel } from "../../../lib/seed-data";
import { PracticeEngine } from "../../components/ui/PracticeEngine";
import { LevelBadge } from "../../components/ui/Badge";
import type { Database } from "../../../lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type DailyActivity = Database["public"]["Tables"]["daily_activity"]["Row"];

const DIFF_XP = { debutant: 10, intermediaire: 25, expert: 50 } as const;

export default async function PracticePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const today = new Date().toISOString().split("T")[0];

  const [profileRes, activityRes] = await Promise.all([
    supabase.from("profiles").select("xp, streak, streak_last_date, school_level").eq("id", user.id).single(),
    supabase.from("daily_activity").select().eq("user_id", user.id).eq("date", today).single(),
  ]);

  const profile  = profileRes.data  as Pick<Profile, "xp" | "streak" | "streak_last_date" | "school_level"> | null;
  const activity = activityRes.data as DailyActivity | null;

  const exercisesToday  = activity?.exercises_done ?? 0;
  const xpToday         = activity?.xp_earned ?? 0;
  const studiedToday    = activity ? activity.date === today : false;
  const streak          = profile?.streak ?? 0;

  const allExercises = getAllExercises();
  const daily        = getDailyChallenge(profile?.school_level);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-[var(--am-text)]">Espace Pratique</h1>
          <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>
            {allExercises.length} exercices · {studiedToday ? `${exercisesToday} fait${exercisesToday !== 1 ? "s" : ""} aujourd'hui · +${xpToday} XP` : "Commencez votre session du jour"}
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

      {/* ── XP per difficulty legend ── */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {([
          { id: "debutant",      label: "Débutant",      xp: 10,  color: "var(--am-green)",  bg: "var(--am-green-muted)",  border: "var(--am-green-dim)" },
          { id: "intermediaire", label: "Intermédiaire", xp: 25,  color: "var(--am-amber)",  bg: "var(--am-amber-muted)",  border: "rgba(245,158,11,0.3)" },
          { id: "expert",        label: "Expert",        xp: 50,  color: "#f87171",           bg: "rgba(239,68,68,0.1)",    border: "rgba(239,68,68,0.25)" },
        ] as const).map((d) => {
          const count = allExercises.filter((e) => e.difficulty === d.id).length;
          return (
            <div
              key={d.id}
              className="rounded-[var(--am-radius-xl)] p-4 flex flex-col gap-1"
              style={{ background: d.bg, border: `1px solid ${d.border}` }}
            >
              <span className="text-xs font-bold" style={{ color: d.color }}>{d.label}</span>
              <span className="text-xl font-black" style={{ color: d.color }}>+{d.xp} XP</span>
              <span className="text-xs" style={{ color: d.color, opacity: 0.7 }}>{count} exercices</span>
            </div>
          );
        })}
      </div>

      {/* ── Practice Engine ── */}
      <PracticeEngine exercises={allExercises} isAuthenticated={true} />
    </div>
  );
}
