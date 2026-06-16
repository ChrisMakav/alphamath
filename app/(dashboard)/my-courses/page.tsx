import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { COURSES, LEVEL_LABELS } from "../../../lib/seed-data";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { Button } from "../../components/ui/Button";
import { LevelBadge } from "../../components/ui/Badge";
import type { Database } from "../../../lib/supabase/types";

type Enrollment = Database["public"]["Tables"]["enrollments"]["Row"];
type Progress   = Database["public"]["Tables"]["user_progress"]["Row"];

export default async function MyCoursesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: enrollRaw } = await supabase
    .from("enrollments")
    .select("*")
    .eq("user_id", user.id)
    .order("enrolled_at", { ascending: false });

  const { data: progressRaw } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id);

  const enrollments = (enrollRaw ?? []) as Enrollment[];
  const progress    = (progressRaw ?? []) as Progress[];

  const enrolledCourses = enrollments
    .map((e) => {
      const course = COURSES.find((c) => c.slug === e.course_slug);
      if (!course) return null;
      const totalLessons = course.lessons.length;
      const done = progress.filter(
        (p) => p.course_slug === e.course_slug && p.completed
      ).length;
      const pct = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0;
      const nextLesson = course.lessons.find(
        (l) => !progress.find((p) => p.lesson_slug === l.slug && p.completed)
      );
      return { course, pct, done, totalLessons, nextLesson };
    })
    .filter(Boolean) as {
      course: typeof COURSES[0];
      pct: number;
      done: number;
      totalLessons: number;
      nextLesson: typeof COURSES[0]["lessons"][0] | undefined;
    }[];

  const enrolledSlugs = new Set(enrollments.map((e) => e.course_slug));
  const suggestedCourses = COURSES.filter((c) => !enrolledSlugs.has(c.slug)).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[var(--am-text)]">Mes cours</h1>
        <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>
          {enrolledCourses.length} cours inscrit{enrolledCourses.length !== 1 ? "s" : ""}
        </p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="flex flex-col gap-4 mb-12">
          {enrolledCourses.map(({ course, pct, done, totalLessons, nextLesson }) => (
            <div
              key={course.id}
              className="rounded-[var(--am-radius-xl)] p-6 flex flex-col sm:flex-row sm:items-center gap-4"
              style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
            >
              {/* Emoji + info */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div
                  className="size-14 rounded-[var(--am-radius-lg)] flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "var(--am-bg-elevated)", border: "1px solid var(--am-border)" }}
                >
                  {course.thumbnailEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-base text-[var(--am-text)]">{course.title}</span>
                    <LevelBadge level={course.schoolLevel} />
                  </div>
                  <p className="text-xs mb-3" style={{ color: "var(--am-text-muted)" }}>
                    {done} / {totalLessons} leçons complétées
                  </p>
                  <ProgressBar value={pct} size="sm" showValue color={pct === 100 ? "green" : "purple"} />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 flex-shrink-0">
                {pct === 100 ? (
                  <div
                    className="px-4 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold"
                    style={{
                      background: "var(--am-green-muted)",
                      color: "var(--am-green)",
                      border: "1px solid var(--am-green-dim)",
                    }}
                  >
                    ✓ Terminé
                  </div>
                ) : nextLesson ? (
                  <a href={`/courses/${course.slug}/lesson/${nextLesson.slug}`}>
                    <Button variant="primary" size="sm">Continuer →</Button>
                  </a>
                ) : (
                  <a href={`/courses/${course.slug}`}>
                    <Button variant="outline" size="sm">Voir le cours</Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="rounded-[var(--am-radius-xl)] p-12 text-center mb-12"
          style={{
            background: "var(--am-bg-card)",
            border: "1px dashed var(--am-border)",
          }}
        >
          <p className="text-4xl mb-4">📚</p>
          <h2 className="text-xl font-bold text-[var(--am-text)] mb-2">Aucun cours démarré</h2>
          <p className="text-sm mb-6" style={{ color: "var(--am-text-muted)" }}>
            Explorez notre catalogue et inscrivez-vous à votre premier cours.
          </p>
          <a href="/courses">
            <Button variant="primary">Voir les cours →</Button>
          </a>
        </div>
      )}

      {/* Suggestions */}
      {suggestedCourses.length > 0 && (
        <div>
          <h2 className="text-base font-bold text-[var(--am-text)] mb-4">Cours recommandés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {suggestedCourses.map((course) => (
              <a
                key={course.id}
                href={`/courses/${course.slug}`}
                className="rounded-[var(--am-radius-xl)] p-5 flex flex-col gap-3 transition-all hover:border-[var(--am-border-strong)]"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{course.thumbnailEmoji}</span>
                  <LevelBadge level={course.schoolLevel} />
                </div>
                <p className="text-sm font-semibold text-[var(--am-text)] leading-snug">{course.title}</p>
                <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>
                  {course.lessons.length} leçons · +{course.lessons.length * 20} XP
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
