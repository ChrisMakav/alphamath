import React from "react";
import { notFound } from "next/navigation";
import { getCourseBySlug, getLessonBySlug } from "../../../../../../lib/seed-data";
import { MathContent } from "../../../../../components/ui/MathContent";
import { VideoPlayer, VideoPlaceholder } from "../../../../../components/ui/VideoPlayer";
import { ExerciseBlock } from "../../../../../components/ui/ExerciseBlock";
import { Breadcrumb } from "../../../../../components/ui/Breadcrumb";
import { LevelBadge } from "../../../../../components/ui/Badge";
import { ProgressBar } from "../../../../../components/ui/ProgressBar";
import { LessonCompleteButton } from "../../../../../components/ui/LessonCompleteButton";
import { ChevronLeft, ChevronRight, Clock, BookOpen } from "lucide-react";
import { LEVEL_LABELS } from "../../../../../../lib/seed-data";
import { createClient } from "../../../../../../lib/supabase/server";
import type { Database } from "../../../../../../lib/supabase/types";

type ProgressRow = Database["public"]["Tables"]["user_progress"]["Row"];

interface Props {
  params: Promise<{ courseId: string; lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { courseId, lessonId } = await params;
  const course = getCourseBySlug(courseId);
  if (!course) notFound();

  const lesson = getLessonBySlug(course, lessonId);
  if (!lesson) notFound();

  const lessonIndex = course.lessons.findIndex((l) => l.slug === lessonId);
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  // Optional auth — show completion button if logged in
  let isCompleted = false;
  let isAuthenticated = false;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      isAuthenticated = true;
      const { data: progRaw } = await supabase
        .from("user_progress")
        .select("completed")
        .eq("user_id", user.id)
        .eq("course_slug", course.slug)
        .eq("lesson_slug", lesson.slug)
        .single();
      const prog = progRaw as Pick<ProgressRow, "completed"> | null;
      isCompleted = prog?.completed ?? false;
    }
  } catch {
    // Silent — user not authenticated
  }

  return (
    <div className="flex min-h-[calc(100vh-56px)]" style={{ background: "var(--am-bg)" }}>
      {/* ── Sidebar gauche : navigation des leçons ── */}
      <aside
        className="hidden lg:flex flex-col w-72 flex-shrink-0 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto"
        style={{ background: "var(--am-bg-raised)", borderRight: "1px solid var(--am-border-subtle)" }}
      >
        {/* Course header */}
        <div className="p-4" style={{ borderBottom: "1px solid var(--am-border-subtle)" }}>
          <p className="text-xs text-[var(--am-text-muted)] mb-1">CONTENU DU COURS</p>
          <a href={`/courses/${course.slug}`} className="font-bold text-sm text-[var(--am-text)] hover:text-[var(--am-green)] transition-colors leading-snug">
            {course.title}
          </a>
          <ProgressBar
            value={((lessonIndex + 1) / course.lessons.length) * 100}
            size="sm"
            className="mt-3"
          />
          <p className="text-xs text-[var(--am-text-muted)] mt-1">
            {lessonIndex + 1} / {course.lessons.length} leçons
          </p>
        </div>

        {/* Lessons list */}
        <nav className="flex-1 p-2">
          {course.lessons.map((l, idx) => {
            const isActive = l.slug === lessonId;
            const isDone = idx < lessonIndex;
            return (
              <a
                key={l.id}
                href={`/courses/${course.slug}/lesson/${l.slug}`}
                className="flex items-start gap-3 p-3 rounded-[var(--am-radius-md)] mb-1 transition-all"
                style={{
                  background: isActive ? "var(--am-green-muted)" : "transparent",
                  border: `1px solid ${isActive ? "var(--am-green-dim)" : "transparent"}`,
                  color: isActive ? "var(--am-green)" : isDone ? "var(--am-text-secondary)" : "var(--am-text-muted)",
                }}
              >
                <span className="text-xs font-bold mt-0.5 flex-shrink-0 w-5 text-center">
                  {isDone ? "✓" : isActive ? "▶" : idx + 1}
                </span>
                <span className="text-xs font-medium leading-relaxed">{l.title}</span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* ── Zone centrale ── */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            className="mb-6"
            items={[
              { label: "Cours", href: "/courses" },
              { label: course.title, href: `/courses/${course.slug}` },
              { label: lesson.title },
            ]}
          />

          {/* Lesson header */}
          <div className="flex items-start gap-3 flex-wrap mb-6">
            <LevelBadge level={course.schoolLevel as any} />
            <LevelBadge level={course.subject as any} />
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-[var(--am-text)] mb-2 leading-tight">
            {lesson.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-[var(--am-text-muted)] mb-8">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {lesson.durationMinutes} min
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={12} />
              {lesson.exercises.length} exercice{lesson.exercises.length !== 1 ? "s" : ""}
            </span>
            <span>Séquence {lessonIndex + 1}.{lessonIndex + 1} — {LEVEL_LABELS[course.schoolLevel]}</span>
          </div>

          {/* Video */}
          {lesson.videoUrl ? (
            <VideoPlayer url={lesson.videoUrl} title={lesson.title} className="mb-8" />
          ) : (
            <VideoPlaceholder durationMinutes={lesson.durationMinutes} className="mb-8" />
          )}

          {/* Math content */}
          <div
            className="rounded-[var(--am-radius-xl)] p-6 mb-8"
            style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
          >
            <MathContent content={lesson.content} />
          </div>

          {/* Exercises */}
          <ExerciseBlock exercises={lesson.exercises} className="mb-8" />

          {/* Completion CTA */}
          {isAuthenticated ? (
            <div
              className="flex items-center justify-between gap-4 rounded-[var(--am-radius-xl)] p-5 mb-8"
              style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
            >
              <div>
                <p className="text-sm font-semibold text-[var(--am-text)]">Vous avez terminé cette leçon ?</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--am-text-muted)" }}>
                  Marquez-la comme terminée pour gagner +20 XP et suivre votre progression.
                </p>
              </div>
              <LessonCompleteButton
                courseSlug={course.slug}
                lessonSlug={lesson.slug}
                isCompleted={isCompleted}
              />
            </div>
          ) : (
            <div
              className="flex items-center justify-between gap-4 rounded-[var(--am-radius-xl)] p-5 mb-8"
              style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
            >
              <div>
                <p className="text-sm font-semibold text-[var(--am-text)]">Suivez votre progression</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--am-text-muted)" }}>
                  Connectez-vous pour sauvegarder votre avancement et gagner des XP.
                </p>
              </div>
              <a
                href="/login"
                className="flex-shrink-0 px-4 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--am-green)", color: "var(--am-text-inverse)" }}
              >
                Se connecter
              </a>
            </div>
          )}

          {/* Lesson navigation */}
          <div
            className="flex items-center justify-between gap-4 pt-6"
            style={{ borderTop: "1px solid var(--am-border-subtle)" }}
          >
            {prevLesson ? (
              <a
                href={`/courses/${course.slug}/lesson/${prevLesson.slug}`}
                className="flex items-center gap-2 text-sm font-medium transition-colors text-[var(--am-text-secondary)] hover:text-[var(--am-green)]"
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">{prevLesson.title}</span>
                <span className="sm:hidden">Précédent</span>
              </a>
            ) : (
              <a
                href={`/courses/${course.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-[var(--am-text-muted)] hover:text-[var(--am-green)] transition-colors"
              >
                <ChevronLeft size={16} /> Vue d'ensemble
              </a>
            )}

            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                color: "var(--am-text-muted)",
                background: "var(--am-bg-elevated)",
                border: "1px solid var(--am-border)",
              }}
            >
              {lessonIndex + 1} / {course.lessons.length}
            </span>

            {nextLesson ? (
              <a
                href={`/courses/${course.slug}/lesson/${nextLesson.slug}`}
                className="flex items-center gap-2 text-sm font-medium transition-colors text-[var(--am-text-secondary)] hover:text-[var(--am-green)]"
              >
                <span className="hidden sm:inline">{nextLesson.title}</span>
                <span className="sm:hidden">Suivant</span>
                <ChevronRight size={16} />
              </a>
            ) : (
              <a
                href={`/courses/${course.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-[var(--am-green)]"
              >
                Terminer le cours <ChevronRight size={16} />
              </a>
            )}
          </div>
        </div>
      </main>

      {/* ── Sidebar droite : notes & ressources ── */}
      <aside
        className="hidden xl:flex flex-col w-64 flex-shrink-0 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto p-4"
        style={{ borderLeft: "1px solid var(--am-border-subtle)", background: "var(--am-bg-raised)" }}
      >
        {/* Notes */}
        <div className="mb-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-text-muted)" }}>
            📝 PRISE DE NOTES
          </p>
          <div
            className="rounded-[var(--am-radius-lg)] p-1"
            style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
          >
            <textarea
              placeholder="Vos notes sur cette leçon..."
              rows={6}
              className="w-full resize-none text-xs p-3 rounded-[var(--am-radius-md)] outline-none"
              style={{
                background: "transparent",
                color: "var(--am-text-secondary)",
                fontFamily: "var(--am-font-sans)",
              }}
            />
          </div>
        </div>

        {/* Hint */}
        <div
          className="rounded-[var(--am-radius-lg)] p-4 mb-5"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--am-amber)" }}>
            💡 BESOIN D'AIDE ?
          </p>
          <p className="text-xs text-[var(--am-text-secondary)] mb-3">
            Tu as 3 indices disponibles pour cette leçon.
          </p>
          <button
            className="w-full py-2 rounded-[var(--am-radius-md)] text-xs font-semibold transition-all"
            style={{
              background: "var(--am-amber-muted)",
              color: "var(--am-amber)",
              border: "1px solid rgba(245,158,11,0.3)",
            }}
          >
            Utiliser un indice
          </button>
        </div>

        {/* Resources */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-text-muted)" }}>
            📎 RESSOURCES LIÉES
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { icon: "📄", label: "Fiche récapitulative PDF" },
              { icon: "🔗", label: "Démonstration interactive" },
              { icon: "📖", label: "Exercices supplémentaires" },
            ].map((r) => (
              <li key={r.label}>
                <a
                  href="#"
                  className="flex items-center gap-2 text-xs text-[var(--am-text-secondary)] hover:text-[var(--am-green)] transition-colors"
                >
                  <span>{r.icon}</span>
                  <span>{r.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
