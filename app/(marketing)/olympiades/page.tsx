import React from "react";
import { LevelBadge, Tag } from "../../components/ui/Badge";
import { OLYMPIAD_PROBLEMS, OLYMPIAD_DIFFICULTY_LABELS, type OlympiadDifficulty } from "../../../lib/olympiades-data";

const DIFFICULTY_VARIANT: Record<OlympiadDifficulty, "success" | "warning" | "error"> = {
  "Intermédiaire": "success",
  "Avancé": "warning",
  "Expert": "error",
};

export default function OlympiadesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-amber)" }}>
          OLYMPIADES
        </p>
        <h1 className="text-4xl font-black text-[var(--am-text)] mb-3">Problèmes d&apos;olympiades</h1>
        <p className="text-[var(--am-text-secondary)] max-w-xl">
          Une sélection de vrais problèmes de compétitions mathématiques (Kangourou des mathématiques,
          Olympiades nationales, Olympiade Internationale de Mathématiques), du collège au niveau
          prépa, avec des solutions détaillées et leurs sources officielles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {OLYMPIAD_PROBLEMS.map((problem) => (
          <a key={problem.id} href={`/olympiades/${problem.id}`} className="block group">
            <article
              className="h-full rounded-[var(--am-radius-xl)] p-5 flex flex-col gap-3 transition-all duration-300 group-hover:-translate-y-0.5"
              style={{
                background: "var(--am-bg-card)",
                border: "1px solid var(--am-border)",
                boxShadow: "var(--am-shadow-card)",
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold" style={{ color: "var(--am-text-muted)" }}>
                  {problem.competition} · {problem.year}
                </p>
                <Tag variant={DIFFICULTY_VARIANT[problem.difficulty]}>{OLYMPIAD_DIFFICULTY_LABELS[problem.difficulty]}</Tag>
              </div>

              <h2 className="text-lg font-bold text-[var(--am-text)] leading-snug">{problem.title}</h2>

              <div className="flex items-center gap-2 flex-wrap mt-auto pt-1">
                <LevelBadge level={problem.level} />
                <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>
                  {problem.levelNote ?? ""}
                </span>
                <Tag>{problem.domain}</Tag>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}
