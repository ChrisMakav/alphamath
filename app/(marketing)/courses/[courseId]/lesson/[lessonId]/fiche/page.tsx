import React from "react";
import { notFound, redirect } from "next/navigation";
import { getCourseBySlug, getLessonBySlug, LEVEL_LABELS } from "../../../../../../../lib/seed-data";
import { MathContent } from "../../../../../../components/ui/MathContent";
import { PrintButton } from "../../../../../../components/ui/PrintButton";
import { createClient } from "../../../../../../../lib/supabase/server";
import { assertCourseLevelAccess } from "../../../../../../../lib/course-access";
import { resolveCourseAccess, canAccessCourse, lockInFreeCourseIfNeeded } from "../../../../../../../lib/access";

interface Props {
  params: Promise<{ courseId: string; lessonId: string }>;
}

export default async function LessonFichePage({ params }: Props) {
  const { courseId, lessonId } = await params;
  const course = getCourseBySlug(courseId);
  if (!course) notFound();

  const lesson = getLessonBySlug(course, lessonId);
  if (!lesson) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    await assertCourseLevelAccess(supabase, user.id, course.schoolLevel);

    const access = await resolveCourseAccess(supabase, user.id);
    if (access.kind === "trial") {
      await lockInFreeCourseIfNeeded(supabase, user.id, course.slug, access);
    }
    if (!canAccessCourse(access, course.slug)) {
      redirect(`/courses/${course.slug}`);
    }
  }

  return (
    <div
      className="am-fiche-print max-w-3xl mx-auto px-6 py-10"
      style={{
        ["--am-bg" as string]: "#ffffff",
        ["--am-bg-card" as string]: "#ffffff",
        ["--am-bg-elevated" as string]: "#f6f7fb",
        ["--am-bg-raised" as string]: "#ffffff",
        ["--am-border" as string]: "#e2e5ef",
        ["--am-text" as string]: "#14162a",
        ["--am-text-secondary" as string]: "#525872",
        ["--am-text-muted" as string]: "#8d92ab",
        ["--am-green" as string]: "#0ea656",
        ["--am-purple" as string]: "#7c3aed",
        ["--am-purple-muted" as string]: "#f1e8ff",
        ["--am-amber" as string]: "#c2740a",
        ["--am-amber-muted" as string]: "#fef3c7",
        background: "#ffffff",
        color: "#14162a",
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-6 print:hidden">
        <p className="text-sm" style={{ color: "var(--am-text-muted)" }}>
          Fiche récapitulative générée pour impression / export PDF.
        </p>
        <PrintButton />
      </div>

      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--am-green)" }}>
        {LEVEL_LABELS[course.schoolLevel]} · {course.title}
      </p>
      <h1 className="text-2xl md:text-3xl font-black mb-6" style={{ color: "var(--am-text)" }}>
        {lesson.title}
      </h1>

      <MathContent content={lesson.content} />

      {lesson.exercises.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--am-text)" }}>
            Exercices de la leçon
          </h2>
          <div className="flex flex-col gap-5">
            {lesson.exercises.map((ex, idx) => (
              <div
                key={ex.id}
                className="rounded-[var(--am-radius-lg)] p-4"
                style={{ border: "1px solid var(--am-border)" }}
              >
                <p className="text-xs font-bold mb-1" style={{ color: "var(--am-text-muted)" }}>
                  Exercice {idx + 1}
                </p>
                <MathContent content={ex.question} />
                <p className="text-xs font-bold mt-3 mb-1" style={{ color: "var(--am-text-muted)" }}>
                  Corrigé
                </p>
                <MathContent content={ex.explanation} />
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-10 text-xs text-center" style={{ color: "var(--am-text-muted)" }}>
        AlphaMath Académie · {lesson.title} · {course.title}
      </p>
    </div>
  );
}
