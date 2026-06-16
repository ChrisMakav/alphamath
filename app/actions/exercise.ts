"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabase/server";
import { XP_BY_DIFFICULTY } from "../../lib/seed-data";
import type { Database } from "../../lib/supabase/types";

type Profile       = Database["public"]["Tables"]["profiles"]["Row"];
type DailyActivity = Database["public"]["Tables"]["daily_activity"]["Row"];

function yesterday(today: string): string {
  const d = new Date(today + "T12:00:00Z");
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export async function submitExerciseAnswer(
  isCorrect: boolean,
  difficulty: "debutant" | "intermediaire" | "expert"
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const today = new Date().toISOString().split("T")[0];
  const xpGained = isCorrect ? XP_BY_DIFFICULTY[difficulty] : 0;

  // Update profile XP + streak
  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("xp, streak, streak_last_date")
    .eq("id", user.id)
    .single();

  const profile = profileRaw as Pick<Profile, "xp" | "streak" | "streak_last_date"> | null;

  const newXp = (profile?.xp ?? 0) + xpGained;
  const streakLastDate = profile?.streak_last_date;
  let newStreak = profile?.streak ?? 0;

  if (streakLastDate !== today) {
    if (streakLastDate === yesterday(today)) {
      newStreak = (profile?.streak ?? 0) + 1;
    } else {
      newStreak = 1;
    }
  }

  await supabase
    .from("profiles")
    .update({ xp: newXp, streak: newStreak, streak_last_date: today } as never)
    .eq("id", user.id);

  // Update daily_activity
  const { data: activityRaw } = await supabase
    .from("daily_activity")
    .select()
    .eq("user_id", user.id)
    .eq("date", today)
    .single();

  const activity = activityRaw as DailyActivity | null;

  if (activity) {
    await supabase
      .from("daily_activity")
      .update({
        exercises_done: activity.exercises_done + 1,
        xp_earned: activity.xp_earned + xpGained,
        minutes_studied: activity.minutes_studied + 2,
      } as never)
      .eq("user_id", user.id)
      .eq("date", today);
  } else {
    await supabase.from("daily_activity").insert({
      user_id: user.id,
      date: today,
      exercises_done: 1,
      xp_earned: xpGained,
      minutes_studied: 2,
    } as never);
  }

  revalidatePath("/dashboard");
  revalidatePath("/analytics");
  revalidatePath("/profile");
}
