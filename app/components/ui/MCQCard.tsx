"use client";
import React, { useState } from "react";
import { MathContent } from "./MathContent";

interface MCQOption {
  id: string;
  label: string;
  text: string;
}

interface MCQCardProps {
  question: string;
  options: MCQOption[];
  correctId?: string;
  onAnswer?: (id: string, correct: boolean) => void;
}

export function MCQCard({ question, options, correctId, onAnswer }: MCQCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;

  function pick(id: string) {
    if (answered) return;
    setSelected(id);
    onAnswer?.(id, id === correctId);
  }

  function getStyle(id: string): React.CSSProperties {
    if (!answered) return {};
    if (id === correctId)
      return { borderColor: "var(--am-green)", background: "var(--am-green-muted)", color: "var(--am-green)" };
    if (id === selected)
      return { borderColor: "#f87171", background: "rgba(239,68,68,0.1)", color: "#f87171" };
    return { opacity: 0.4 };
  }

  return (
    <div
      className="rounded-[var(--am-radius-xl)] p-6 flex flex-col gap-5"
      style={{
        background: "var(--am-bg-card)",
        border: "1px solid var(--am-border)",
        boxShadow: "var(--am-shadow-card)",
      }}
    >
      <div className="text-[var(--am-text)] font-medium leading-relaxed">
        <MathContent content={question} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => pick(opt.id)}
            disabled={answered}
            className="rounded-[var(--am-radius-lg)] p-4 text-left flex items-center gap-3 transition-all duration-200 group"
            style={{
              background: "var(--am-bg-elevated)",
              border: `1px solid ${selected === opt.id ? "transparent" : "var(--am-border)"}`,
              cursor: answered ? "default" : "pointer",
              ...getStyle(opt.id),
            }}
          >
            <span
              className="size-8 rounded-[var(--am-radius-md)] flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{
                background: "var(--am-bg-overlay)",
                color: "var(--am-text-secondary)",
              }}
            >
              {opt.label}
            </span>
            <span className="text-sm font-medium">
              <MathContent content={opt.text} />
            </span>
          </button>
        ))}
      </div>

      {answered && (
        <p
          className="text-sm font-semibold"
          style={{ color: selected === correctId ? "var(--am-green)" : "#f87171" }}
        >
          {selected === correctId ? "✓ Bonne réponse !" : "✗ Incorrect — la bonne réponse est mise en évidence."}
        </p>
      )}
    </div>
  );
}
