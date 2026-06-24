"use client";
import React, { useActionState, useMemo, useState } from "react";
import { Button } from "../../../components/ui/Button";
import { LevelBadge } from "../../../components/ui/Badge";
import { generateEvaluation } from "../../../actions/evaluations";
import type { SchoolLevel } from "../../../../lib/seed-data";

interface CourseOption {
  slug: string;
  title: string;
  schoolLevel: SchoolLevel;
  lessons: { slug: string; title: string }[];
}

interface Props {
  levels: SchoolLevel[];
  courses: CourseOption[];
}

export function EvaluationForm({ levels, courses }: Props) {
  const [state, action, isPending] = useActionState(generateEvaluation, undefined);
  const [level, setLevel] = useState<SchoolLevel | "">(levels.length === 1 ? levels[0] : "");
  const [checkedCourses, setCheckedCourses] = useState<Set<string>>(new Set());
  const [checkedLessons, setCheckedLessons] = useState<Set<string>>(new Set());

  const coursesForLevel = useMemo(
    () => courses.filter((c) => c.schoolLevel === level),
    [courses, level]
  );

  function handleLevelChange(lvl: SchoolLevel) {
    setLevel(lvl);
    setCheckedCourses(new Set());
    setCheckedLessons(new Set());
  }

  function toggleCourse(slug: string) {
    setCheckedCourses((prev) => {
      const next = new Set(prev);
      const course = coursesForLevel.find((c) => c.slug === slug);
      if (next.has(slug)) {
        next.delete(slug);
        if (course) {
          setCheckedLessons((prevLessons) => {
            const nl = new Set(prevLessons);
            course.lessons.forEach((l) => nl.delete(l.title));
            return nl;
          });
        }
      } else {
        next.add(slug);
      }
      return next;
    });
  }

  function toggleLesson(title: string) {
    setCheckedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }

  const selectedCourses = coursesForLevel.filter((c) => checkedCourses.has(c.slug));
  const canSubmit = !!level && selectedCourses.length > 0 && checkedLessons.size > 0 && !isPending;

  return (
    <form action={action} className="flex flex-col gap-8">
      {/* Niveau */}
      <div>
        <p className="text-sm font-semibold mb-3 text-[var(--am-text)]">1. Niveau</p>
        <div className="flex flex-wrap gap-2">
          {levels.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => handleLevelChange(lvl)}
              className="transition-all"
              style={{ opacity: level === lvl ? 1 : 0.5 }}
            >
              <LevelBadge
                level={lvl}
                className={
                  level === lvl
                    ? "ring-2 ring-offset-1 ring-offset-[var(--am-bg-card)] ring-[var(--am-purple)]"
                    : ""
                }
              />
            </button>
          ))}
        </div>
        <input type="hidden" name="schoolLevel" value={level} />
      </div>

      {/* Cours */}
      {level && (
        <div>
          <p className="text-sm font-semibold mb-3 text-[var(--am-text)]">2. Cours</p>
          <div className="flex flex-col gap-2">
            {coursesForLevel.map((course) => (
              <label
                key={course.slug}
                className="flex items-center gap-3 p-3 rounded-[var(--am-radius-md)] cursor-pointer transition-all"
                style={{
                  background: checkedCourses.has(course.slug) ? "var(--am-purple-muted)" : "var(--am-bg-card)",
                  border: `1px solid ${checkedCourses.has(course.slug) ? "var(--am-purple)" : "var(--am-border)"}`,
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedCourses.has(course.slug)}
                  onChange={() => toggleCourse(course.slug)}
                  className="size-4"
                />
                <span className="text-sm font-medium text-[var(--am-text)]">{course.title}</span>
              </label>
            ))}
            {coursesForLevel.length === 0 && (
              <p className="text-sm" style={{ color: "var(--am-text-muted)" }}>
                Aucun cours disponible pour ce niveau.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Notions */}
      {selectedCourses.length > 0 && (
        <div>
          <p className="text-sm font-semibold mb-3 text-[var(--am-text)]">3. Notions à évaluer</p>
          <div className="flex flex-col gap-4">
            {selectedCourses.map((course) => (
              <div key={course.slug}>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--am-text-muted)" }}>
                  {course.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.lessons.map((lesson) => (
                    <label
                      key={lesson.slug}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all"
                      style={{
                        background: checkedLessons.has(lesson.title) ? "var(--am-purple-muted)" : "var(--am-bg-card)",
                        color: checkedLessons.has(lesson.title) ? "var(--am-purple)" : "var(--am-text-muted)",
                        border: `1px solid ${checkedLessons.has(lesson.title) ? "rgba(139,92,246,0.3)" : "var(--am-border)"}`,
                      }}
                    >
                      <input
                        type="checkbox"
                        name="lessonTitle"
                        value={lesson.title}
                        checked={checkedLessons.has(lesson.title)}
                        onChange={() => toggleLesson(lesson.title)}
                        className="size-3.5"
                      />
                      {lesson.title}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {selectedCourses.map((course) => (
            <input key={course.slug} type="hidden" name="courseSlug" value={course.slug} />
          ))}
        </div>
      )}

      {state?.error && (
        <p
          className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
          style={{ color: "#f87171", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
        >
          {state.error}
        </p>
      )}

      <div>
        <Button type="submit" variant="primary" size="lg" loading={isPending} disabled={!canSubmit}>
          {isPending ? "Génération en cours… (10-20s)" : "Générer l'évaluation →"}
        </Button>
      </div>
    </form>
  );
}
