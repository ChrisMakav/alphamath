"use client";
import React, { useTransition } from "react";
import { markLessonComplete } from "../../actions/progress";

interface Props {
  courseSlug: string;
  lessonSlug: string;
  isCompleted: boolean;
}

export function LessonCompleteButton({ courseSlug, lessonSlug, isCompleted }: Props) {
  const [isPending, startTransition] = useTransition();

  if (isCompleted) {
    return (
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-[var(--am-radius-lg)] text-sm font-semibold"
        style={{
          background: "var(--am-green-muted)",
          border: "1px solid var(--am-green-dim)",
          color: "var(--am-green)",
        }}
      >
        <span>✓</span>
        <span>Leçon complétée</span>
      </div>
    );
  }

  return (
    <button
      onClick={() =>
        startTransition(() => markLessonComplete(courseSlug, lessonSlug))
      }
      disabled={isPending}
      className="flex items-center gap-2 px-4 py-2.5 rounded-[var(--am-radius-lg)] text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60"
      style={{
        background: "var(--am-green)",
        color: "var(--am-text-inverse)",
        boxShadow: "0 0 16px rgba(74,254,138,0.3)",
      }}
    >
      {isPending ? (
        <>
          <span
            className="size-4 rounded-full border-2 border-transparent border-t-current animate-spin"
            style={{ borderTopColor: "currentColor" }}
          />
          <span>Enregistrement…</span>
        </>
      ) : (
        <>
          <span>✓</span>
          <span>Marquer comme terminée</span>
        </>
      )}
    </button>
  );
}
