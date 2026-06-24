"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import { resolveCourseAccess, canAccessCourse, lockInFreeCourseIfNeeded } from "../../lib/access";
import type { Database } from "../../lib/supabase/types";

type Profile       = Database["public"]["Tables"]["profiles"]["Row"];
type Progress      = Database["public"]["Tables"]["user_progress"]["Row"];
type DailyActivity = Database["public"]["Tables"]["daily_activity"]["Row"];

function yesterday(today: string): string {
  const d = new Date(today + "T12:00:00Z");
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export async function markLessonComplete(courseSlug: string, lessonSlug: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Check if already completed
  const { data: existingRaw } = await supabase
    .from("user_progress")
    .select()
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug)
    .eq("lesson_slug", lessonSlug)
    .single();

  const existing = existingRaw as Progress | null;

  if (existing?.completed) return; // Already done, skip XP award

  if (existing) {
    await supabase
      .from("user_progress")
      .update({ completed: true, completed_at: new Date().toISOString() } as never)
      .eq("user_id", user.id)
      .eq("course_slug", courseSlug)
      .eq("lesson_slug", lessonSlug);
  } else {
    await supabase.from("user_progress").insert({
      user_id: user.id,
      course_slug: courseSlug,
      lesson_slug: lessonSlug,
      completed: true,
      completed_at: new Date().toISOString(),
    } as never);
  }

  const today = new Date().toISOString().split("T")[0];

  // Update profile XP + streak
  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("xp, streak, streak_last_date")
    .eq("id", user.id)
    .single();

  const profile = profileRaw as Pick<Profile, "xp" | "streak" | "streak_last_date"> | null;
  const newXp = (profile?.xp ?? 0) + 20;
  const streakLastDate = profile?.streak_last_date;
  let newStreak = 1;
  if (streakLastDate === today) {
    newStreak = profile?.streak ?? 1;
  } else if (streakLastDate === yesterday(today)) {
    newStreak = (profile?.streak ?? 0) + 1;
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
        minutes_studied: activity.minutes_studied + 10,
        xp_earned: activity.xp_earned + 20,
      } as never)
      .eq("user_id", user.id)
      .eq("date", today);
  } else {
    await supabase.from("daily_activity").insert({
      user_id: user.id,
      date: today,
      minutes_studied: 10,
      xp_earned: 20,
    } as never);
  }

  revalidatePath(`/courses/${courseSlug}/lesson/${lessonSlug}`);
  revalidatePath("/dashboard");
  revalidatePath("/my-courses");
  revalidatePath("/analytics");
}

export async function enrollInCourse(courseSlug: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/login?next=/courses/${courseSlug}`);

  const access = await resolveCourseAccess(supabase, user.id);
  if (access.kind === "trial") {
    await lockInFreeCourseIfNeeded(supabase, user.id, courseSlug, access);
  }
  if (!canAccessCourse(access, courseSlug)) {
    redirect(`/pricing?from=${courseSlug}`);
  }

  const { data: existing } = await supabase
    .from("enrollments")
    .select()
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug)
    .single();

  if (!existing) {
    await supabase.from("enrollments").insert({
      user_id: user.id,
      course_slug: courseSlug,
    } as never);
  }

  revalidatePath(`/courses/${courseSlug}`);
  revalidatePath("/dashboard");
  revalidatePath("/my-courses");
  redirect(`/courses/${courseSlug}`);
}
