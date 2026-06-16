import React from "react";
import { LevelBadge, type Level } from "./Badge";
import { ProgressBar } from "./ProgressBar";
import { Button } from "./Button";

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  subject: string;
  difficulty: "Débutant" | "Intermédiaire" | "Avancé";
  lessons: number;
  progress?: number;
  enrolled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const difficultyColor: Record<string, string> = {
  "Débutant":      "var(--am-green)",
  "Intermédiaire": "var(--am-amber)",
  "Avancé":        "#f87171",
};

export function CourseCard({
  title,
  description,
  level,
  subject,
  difficulty,
  lessons,
  progress,
  enrolled = false,
  icon,
  className = "",
}: CourseCardProps) {
  return (
    <div
      className={`rounded-[var(--am-radius-xl)] overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        background: "var(--am-bg-card)",
        border: "1px solid var(--am-border)",
        boxShadow: "var(--am-shadow-card)",
      }}
    >
      {/* Thumbnail */}
      <div
        className="h-36 flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--am-bg-elevated) 0%, var(--am-bg-overlay) 100%)",
        }}
      >
        <div
          className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
          aria-hidden
        >
          {icon ?? "∫"}
        </div>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(74,254,138,0.06) 0%, transparent 70%)",
          }}
        />
        {enrolled && (
          <div
            className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full"
            style={{
              color: "var(--am-green)",
              background: "var(--am-green-muted)",
              border: "1px solid var(--am-green-dim)",
            }}
          >
            Inscrit
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <LevelBadge level={level} />
          <LevelBadge level={subject} />
        </div>

        <div>
          <h3 className="font-bold text-[var(--am-text)] text-base leading-snug mb-1">{title}</h3>
          <p className="text-sm text-[var(--am-text-secondary)] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-[var(--am-text-muted)]">
          <span style={{ color: difficultyColor[difficulty] }}>● {difficulty}</span>
          <span>{lessons} leçons</span>
        </div>

        {progress !== undefined && (
          <ProgressBar value={progress} size="sm" showValue />
        )}

        <Button
          variant={enrolled && progress !== undefined ? "outline" : "primary"}
          size="sm"
          full
          className="mt-auto"
        >
          {enrolled && progress !== undefined && progress > 0
            ? "Continuer"
            : enrolled
            ? "Commencer"
            : "Démarrer le cours"}
        </Button>
      </div>
    </div>
  );
}
