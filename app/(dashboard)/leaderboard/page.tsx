import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { Avatar } from "../../components/ui/Avatar";
import { LevelBadge } from "../../components/ui/Badge";
import { ActivityGrid } from "../../components/ui/ActivityGrid";
import { LEVEL_LABELS } from "../../../lib/seed-data";
import type { Database } from "../../../lib/supabase/types";

type Profile       = Database["public"]["Tables"]["profiles"]["Row"];
type DailyActivity = Database["public"]["Tables"]["daily_activity"]["Row"];

interface LeaderboardRow {
  rank: number;
  name: string;
  xp: number;
  streak: number;
  school_level: string | null;
}

const MEDALS: Record<number, { emoji: string; color: string; bg: string }> = {
  1: { emoji: "🥇", color: "#FFD700", bg: "rgba(255,215,0,0.1)" },
  2: { emoji: "🥈", color: "#C0C0C0", bg: "rgba(192,192,192,0.1)" },
  3: { emoji: "🥉", color: "#CD7F32", bg: "rgba(205,127,50,0.1)" },
};

export default async function LeaderboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [profileRes, leaderboardRes, activityRes] = await Promise.all([
    supabase.from("profiles").select("name, xp, school_level, streak").eq("id", user.id).single(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.rpc as any)("get_leaderboard", { lim: 20 }),
    supabase
      .from("daily_activity")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(28),
  ]);

  const profile        = profileRes.data as Pick<Profile, "name" | "xp" | "school_level" | "streak"> | null;
  const board          = ((leaderboardRes.data ?? []) as LeaderboardRow[]).slice(0, 20);
  const activityRows   = ((activityRes.data ?? []) as DailyActivity[]);

  const myName = profile?.name ?? user.email?.split("@")[0] ?? "Étudiant";
  const myXp   = profile?.xp ?? 0;

  // Find current user's position in leaderboard (match by name + xp)
  const myEntry = board.find((r) => r.xp === myXp && r.name === myName);
  const myRank  = myEntry?.rank ?? null;

  // Heatmap — 4 weeks
  const heatmap: number[] = Array.from({ length: 28 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (27 - i));
    const dateStr = d.toISOString().split("T")[0];
    const row = activityRows.find((a) => a.date === dateStr);
    return row ? Math.min(100, row.minutes_studied * 2) : 0;
  });

  const thisWeekXp = activityRows
    .filter((a) => {
      const diff = (Date.now() - new Date(a.date).getTime()) / 86_400_000;
      return diff <= 7;
    })
    .reduce((s, a) => s + a.xp_earned, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[var(--am-text)]">Classement</h1>
        <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>
          Top 20 étudiants par points XP cumulés
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard */}
        <div className="lg:col-span-2">
          {/* Podium top 3 */}
          <div className="flex items-end justify-center gap-4 mb-6">
            {[board[1], board[0], board[2]].map((entry, podiumIdx) => {
              if (!entry) return null;
              const actualRank = podiumIdx === 1 ? 1 : podiumIdx === 0 ? 2 : 3;
              const heights = { 0: "h-24", 1: "h-32", 2: "h-20" };
              const medal = MEDALS[actualRank];
              const isMe = entry.xp === myXp && entry.name === myName;
              return (
                <div key={entry.name} className="flex flex-col items-center gap-2">
                  <span className="text-2xl">{medal.emoji}</span>
                  <Avatar name={entry.name} size="md" />
                  <p className="text-xs font-bold text-[var(--am-text)] text-center max-w-[80px] truncate">
                    {entry.name}{isMe ? " (moi)" : ""}
                  </p>
                  <p className="text-xs font-semibold tabular-nums" style={{ color: medal.color }}>
                    {entry.xp.toLocaleString("fr-FR")} XP
                  </p>
                  <div
                    className={`w-20 rounded-t-lg flex items-center justify-center ${heights[podiumIdx as keyof typeof heights]}`}
                    style={{ background: medal.bg, border: `1px solid ${medal.color}30` }}
                  >
                    <span className="text-xl font-black" style={{ color: medal.color }}>
                      {actualRank}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full list 4-20 */}
          <div
            className="rounded-[var(--am-radius-xl)] overflow-hidden"
            style={{ border: "1px solid var(--am-border)" }}
          >
            {board.slice(3).map((entry) => {
              const isMe = entry.xp === myXp && entry.name === myName;
              return (
                <div
                  key={`${entry.name}-${entry.rank}`}
                  className="flex items-center gap-4 px-5 py-3 transition-all"
                  style={{
                    background: isMe ? "var(--am-green-muted)" : "var(--am-bg-card)",
                    borderBottom: "1px solid var(--am-border-subtle)",
                    borderLeft: isMe ? "3px solid var(--am-green)" : "3px solid transparent",
                  }}
                >
                  <span
                    className="w-6 text-sm font-bold tabular-nums text-center flex-shrink-0"
                    style={{ color: "var(--am-text-muted)" }}
                  >
                    {entry.rank}
                  </span>
                  <Avatar name={entry.name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--am-text)] truncate">
                      {entry.name}{isMe ? " (vous)" : ""}
                    </p>
                    {entry.school_level && (
                      <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>
                        {LEVEL_LABELS[entry.school_level as keyof typeof LEVEL_LABELS] ?? entry.school_level}
                      </p>
                    )}
                  </div>
                  {entry.streak > 0 && (
                    <span className="text-xs flex-shrink-0" style={{ color: "var(--am-amber)" }}>
                      🔥 {entry.streak}j
                    </span>
                  )}
                  <span
                    className="text-sm font-black tabular-nums flex-shrink-0"
                    style={{ color: isMe ? "var(--am-green)" : "var(--am-text-secondary)" }}
                  >
                    {entry.xp.toLocaleString("fr-FR")} XP
                  </span>
                </div>
              );
            })}

            {/* User rank if outside top 20 */}
            {!myEntry && profile && (
              <>
                <div
                  className="px-5 py-2 text-center text-xs"
                  style={{ color: "var(--am-text-muted)", background: "var(--am-bg-elevated)" }}
                >
                  ···
                </div>
                <div
                  className="flex items-center gap-4 px-5 py-3"
                  style={{
                    background: "var(--am-green-muted)",
                    borderLeft: "3px solid var(--am-green)",
                  }}
                >
                  <span className="w-6 text-sm font-bold text-center" style={{ color: "var(--am-green)" }}>
                    {myRank ?? "?"}
                  </span>
                  <Avatar name={myName} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: "var(--am-green)" }}>
                      {myName} (vous)
                    </p>
                  </div>
                  <span className="text-sm font-black tabular-nums" style={{ color: "var(--am-green)" }}>
                    {myXp.toLocaleString("fr-FR")} XP
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right panel: my stats */}
        <div className="flex flex-col gap-4">
          {/* My card */}
          <div
            className="rounded-[var(--am-radius-xl)] p-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--am-green-muted), var(--am-bg-card))",
              border: "1px solid var(--am-green-dim)",
            }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-green)" }}>
              Mon rang
            </p>
            <div className="flex items-center gap-3 mb-4">
              <Avatar name={myName} size="lg" />
              <div>
                <p className="font-bold text-[var(--am-text)]">{myName}</p>
                {profile?.school_level && (
                  <LevelBadge level={profile.school_level} />
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="rounded-[var(--am-radius-md)] p-3 text-center"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <p className="text-xl font-black" style={{ color: "var(--am-green)" }}>
                  #{myRank ?? "–"}
                </p>
                <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>Classement</p>
              </div>
              <div
                className="rounded-[var(--am-radius-md)] p-3 text-center"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <p className="text-xl font-black" style={{ color: "var(--am-amber)" }}>
                  {myXp.toLocaleString("fr-FR")}
                </p>
                <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>XP total</p>
              </div>
              <div
                className="rounded-[var(--am-radius-md)] p-3 text-center"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <p className="text-xl font-black" style={{ color: "var(--am-amber)" }}>
                  +{thisWeekXp}
                </p>
                <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>XP cette semaine</p>
              </div>
              <div
                className="rounded-[var(--am-radius-md)] p-3 text-center"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <p className="text-xl font-black" style={{ color: "var(--am-amber)" }}>
                  {profile?.streak ?? 0}🔥
                </p>
                <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>Jours de série</p>
              </div>
            </div>
          </div>

          {/* Mini activity */}
          <div
            className="rounded-[var(--am-radius-xl)] p-5"
            style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
          >
            <p className="text-xs font-bold text-[var(--am-text)] mb-3">Activité (4 semaines)</p>
            <ActivityGrid data={heatmap} weeks={4} />
          </div>

          {/* Tip */}
          <div
            className="rounded-[var(--am-radius-xl)] p-4"
            style={{
              background: "linear-gradient(135deg, var(--am-purple-muted), var(--am-bg-card))",
              border: "1px solid var(--am-purple)",
            }}
          >
            <p className="text-xs font-bold" style={{ color: "var(--am-purple)" }}>💡 Conseil</p>
            <p className="text-xs mt-1" style={{ color: "var(--am-text-secondary)" }}>
              Faites des exercices quotidiennement pour monter dans le classement.
              Les exercices experts rapportent <strong>+50 XP</strong> chacun !
            </p>
            <a
              href="/practice"
              className="inline-block mt-2 text-xs font-semibold"
              style={{ color: "var(--am-purple)" }}
            >
              Pratiquer maintenant →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
