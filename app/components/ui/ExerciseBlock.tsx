"use client";
import React, { useState } from "react";
import { MCQCard } from "./MCQCard";
import type { Exercise } from "../../../lib/seed-data";

interface ExerciseBlockProps {
  exercises: Exercise[];
  className?: string;
}

type Tab = "debutant" | "intermediaire" | "expert";

const TAB_CONFIG: Record<Tab, { label: string; color: string; bg: string; border: string }> = {
  debutant:      { label: "🟢 Débutant",      color: "var(--am-green)",  bg: "var(--am-green-muted)",  border: "var(--am-green-dim)" },
  intermediaire: { label: "🟠 Intermédiaire", color: "var(--am-amber)",  bg: "var(--am-amber-muted)",  border: "rgba(245,158,11,0.3)" },
  expert:        { label: "🔴 Expert",         color: "#f87171",           bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.3)" },
};

export function ExerciseBlock({ exercises, className = "" }: ExerciseBlockProps) {
  const [tab, setTab] = useState<Tab>("debutant");

  const filtered = exercises.filter((e) => e.difficulty === tab);

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-5">
        <h3 className="text-base font-bold text-[var(--am-text)]">Exercices</h3>
        <div
          className="flex gap-1 p-1 rounded-[var(--am-radius-lg)]"
          style={{ background: "var(--am-bg-raised)", border: "1px solid var(--am-border)" }}
        >
          {(Object.keys(TAB_CONFIG) as Tab[]).map((t) => {
            const cfg = TAB_CONFIG[t];
            const active = tab === t;
            const count = exercises.filter((e) => e.difficulty === t).length;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-3 py-1.5 rounded-[var(--am-radius-md)] text-xs font-semibold transition-all"
                style={{
                  background: active ? cfg.bg : "transparent",
                  color: active ? cfg.color : "var(--am-text-muted)",
                  border: `1px solid ${active ? cfg.border : "transparent"}`,
                }}
              >
                {cfg.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div
          className="rounded-[var(--am-radius-xl)] p-8 text-center text-sm"
          style={{ color: "var(--am-text-muted)", background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          Aucun exercice disponible à ce niveau pour cette leçon.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((ex) => (
            <MCQCard
              key={ex.id}
              question={ex.question}
              options={(ex.options ?? []).map((o) => ({ id: o.id, label: o.id, text: o.text }))}
              correctId={ex.correctId ?? ""}
            />
          ))}
        </div>
      )}
    </div>
  );
}
