import React from "react";
import { notFound } from "next/navigation";
import { getCourseBySlug, LEVEL_LABELS, getSubjectLabel } from "../../../../lib/seed-data";
import { LevelBadge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { Breadcrumb } from "../../../components/ui/Breadcrumb";
import { ProgressBar } from "../../../components/ui/ProgressBar";
import Image from "next/image";
import { BookOpen, Clock, CheckCircle, Lock } from "lucide-react";
import { createClient } from "../../../../lib/supabase/server";
import { assertCourseLevelAccess } from "../../../../lib/course-access";
import { enrollInCourse } from "../../../actions/progress";
import type { Database } from "../../../../lib/supabase/types";

type Progress   = Database["public"]["Tables"]["user_progress"]["Row"];
type Enrollment = Database["public"]["Tables"]["enrollments"]["Row"];

interface Props {
  params: Promise<{ courseId: string }>;
}

export default async function CourseDetailPage({ params }: Props) {
  const { courseId } = await params;
  const course = getCourseBySlug(courseId);
  if (!course) notFound();

  const totalMinutes = course.lessons.reduce((s, l) => s + l.durationMinutes, 0);

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    await assertCourseLevelAccess(supabase, user.id, course.schoolLevel);
  }

  // Optional auth
  let isEnrolled = false;
  let progressPct = 0;
  let nextLessonSlug = course.lessons[0]?.slug;
  let completedSlugs = new Set<string>();

  try {
    if (user) {
      const [enrollRes, progressRes] = await Promise.all([
        supabase.from("enrollments").select().eq("user_id", user.id).eq("course_slug", course.slug).single(),
        supabase.from("user_progress").select().eq("user_id", user.id).eq("course_slug", course.slug),
      ]);

      const progressRows = (progressRes.data ?? []) as Progress[];
      isEnrolled = !!enrollRes.data;
      completedSlugs = new Set(progressRows.filter((p) => p.completed).map((p) => p.lesson_slug));

      const done = completedSlugs.size;
      progressPct = course.lessons.length > 0 ? Math.round((done / course.lessons.length) * 100) : 0;
      nextLessonSlug =
        course.lessons.find((l) => !completedSlugs.has(l.slug))?.slug ?? course.lessons[0]?.slug;
    }
  } catch {
    // Silent — not authenticated
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Breadcrumb
        className="mb-6"
        items={[
          { label: "Cours", href: "/courses" },
          { label: LEVEL_LABELS[course.schoolLevel], href: `/courses?level=${course.schoolLevel}` },
          { label: course.title },
        ]}
      />

      {/* Hero du cours */}
      <div
        className="rounded-[var(--am-radius-2xl)] overflow-hidden mb-8"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        {/* Banner */}
        <div
          className="h-40 flex items-center justify-center relative overflow-hidden px-8"
          style={{
            background: "linear-gradient(135deg, var(--am-bg-elevated) 0%, var(--am-bg-overlay) 100%)",
          }}
        >
          {course.thumbnailImage ? (
            <>
              <Image
                src={course.thumbnailImage}
                alt=""
                fill
                className="object-cover opacity-40"
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, var(--am-bg-elevated) 10%, transparent 90%)",
                }}
              />
            </>
          ) : (
            <span className="absolute right-8 text-8xl font-black select-none opacity-10" aria-hidden>
              {course.thumbnailEmoji}
            </span>
          )}
          <div className="relative flex flex-col gap-3">
            <div className="flex gap-2 flex-wrap">
              <LevelBadge level={course.schoolLevel as string} />
              <LevelBadge level={course.subject as string} />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-[var(--am-text)]">{course.title}</h1>
          </div>
        </div>

        {/* Meta */}
        <div className="p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-[var(--am-text-secondary)]">
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} style={{ color: "var(--am-green)" }} />
              {course.lessons.length} leçons
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} style={{ color: "var(--am-purple)" }} />
              {Math.ceil(totalMinutes / 60)}h {totalMinutes % 60}min
            </span>
            <span className="flex items-center gap-1.5">
              <span
                style={{
                  color:
                    course.difficulty === "Débutant"
                      ? "var(--am-green)"
                      : course.difficulty === "Avancé"
                      ? "#f87171"
                      : "var(--am-amber)",
                }}
              >
                ●
              </span>
              {course.difficulty}
            </span>
            {course.isFree && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-bold"
                style={{
                  color: "var(--am-green)",
                  background: "var(--am-green-muted)",
                  border: "1px solid var(--am-green-dim)",
                }}
              >
                GRATUIT
              </span>
            )}
          </div>

          {isEnrolled ? (
            <a href={`/courses/${course.slug}/lesson/${nextLessonSlug}`}>
              <Button variant="primary" size="md">
                {progressPct === 100 ? "Revoir le cours" : "Continuer →"}
              </Button>
            </a>
          ) : (
            <form action={enrollInCourse.bind(null, course.slug)}>
              <Button type="submit" variant="primary" size="md">
                {course.isFree ? "Commencer gratuitement →" : "S'inscrire →"}
              </Button>
            </form>
          )}
        </div>

        <div className="px-6 pb-2">
          <p className="text-[var(--am-text-secondary)] text-sm leading-relaxed">{course.description}</p>
        </div>

        {isEnrolled && (
          <div className="p-6 pt-4">
            <ProgressBar value={progressPct} size="sm" label="Progression du cours" showValue />
          </div>
        )}
      </div>

      {/* Liste des leçons */}
      <h2 className="text-xl font-bold text-[var(--am-text)] mb-4">Contenu du cours</h2>
      <div className="flex flex-col gap-2">
        {course.lessons.map((lesson, idx) => {
          const isLocked = !course.isFree && idx > 0;
          const isDone = completedSlugs.has(lesson.slug);
          const isFirst = idx === 0;

          if (isLocked) {
            return (
              <div
                key={lesson.id}
                className="flex items-center gap-4 p-4 rounded-[var(--am-radius-xl)] opacity-50"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <div
                  className="size-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "var(--am-bg-overlay)", color: "var(--am-text-muted)" }}
                >
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-[var(--am-text)] truncate">{lesson.title}</p>
                  <p className="text-xs text-[var(--am-text-muted)]">
                    {lesson.durationMinutes} min · {lesson.exercises.length} exercice
                    {lesson.exercises.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <Lock size={14} style={{ color: "var(--am-text-muted)", flexShrink: 0 }} />
              </div>
            );
          }

          return (
            <a
              key={lesson.id}
              href={`/courses/${course.slug}/lesson/${lesson.slug}`}
              className="flex items-center gap-4 p-4 rounded-[var(--am-radius-xl)] transition-all duration-200 group hover:-translate-y-0.5"
              style={{
                background: "var(--am-bg-card)",
                border: isDone ? "1px solid var(--am-green-dim)" : "1px solid var(--am-border)",
              }}
            >
              <div
                className="size-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all"
                style={{
                  background: isDone
                    ? "var(--am-green-muted)"
                    : isFirst
                    ? "var(--am-green)"
                    : "var(--am-bg-overlay)",
                  color: isDone
                    ? "var(--am-green)"
                    : isFirst
                    ? "var(--am-text-inverse)"
                    : "var(--am-text-secondary)",
                }}
              >
                {isDone ? <CheckCircle size={14} /> : isFirst ? <CheckCircle size={14} /> : idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-[var(--am-text)] group-hover:text-[var(--am-green)] transition-colors truncate">
                  {lesson.title}
                </p>
                <p className="text-xs text-[var(--am-text-muted)]">
                  {lesson.durationMinutes} min · {lesson.exercises.length} exercice
                  {lesson.exercises.length !== 1 ? "s" : ""}
                  {lesson.videoUrl && " · Vidéo"}
                  {isDone && " · ✓ Terminée"}
                </p>
              </div>
              <span className="text-[var(--am-text-muted)] group-hover:text-[var(--am-green)] transition-colors flex-shrink-0">
                →
              </span>
            </a>
          );
        })}
      </div>

      {!course.isFree && (
        <div
          className="mt-6 p-6 rounded-[var(--am-radius-xl)] text-center"
          style={{
            background: "linear-gradient(135deg, var(--am-purple-muted), var(--am-bg-card))",
            border: "1px solid var(--am-purple)",
          }}
        >
          <p className="font-bold text-[var(--am-text)] mb-2">🔒 Accès Premium requis</p>
          <p className="text-sm text-[var(--am-text-secondary)] mb-4">
            Débloquez toutes les leçons et exercices en souscrivant à un abonnement Premium.
          </p>
          <Button href="/pricing" variant="secondary" size="md">Voir les offres → dès 9,99€/mois</Button>
        </div>
      )}
    </div>
  );
}
