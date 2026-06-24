import React from "react";
import { LevelBadge, Tag } from "./Badge";
import { Button } from "./Button";
import {
  type ExamPaper,
  EXAM_TYPE_LABELS,
  CORRECTION_KIND_LABELS,
  getExamLabel,
} from "../../../lib/exams-data";

const TYPE_VARIANT: Record<ExamPaper["examType"], "success" | "info" | "warning"> = {
  brevet: "success",
  bac: "info",
  concours: "warning",
};

interface ExamCardProps {
  exam: ExamPaper;
  className?: string;
}

export function ExamCard({ exam, className = "" }: ExamCardProps) {
  const correctionLabel = exam.correction
    ? CORRECTION_KIND_LABELS[exam.correction.kind]
    : "Sans corrigé";

  return (
    <div
      className={`rounded-[var(--am-radius-xl)] overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        background: "var(--am-bg-card)",
        border: "1px solid var(--am-border)",
        boxShadow: "var(--am-shadow-card)",
      }}
    >
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-3xl font-black leading-none" style={{ color: "var(--am-text)" }}>
            {exam.year}
          </span>
          <Tag variant={TYPE_VARIANT[exam.examType]}>{EXAM_TYPE_LABELS[exam.examType]}</Tag>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {exam.examType !== "concours" && <LevelBadge level={exam.schoolLevel} />}
          <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>
            {getExamLabel(exam)}
          </span>
        </div>

        <h3 className="font-bold text-[var(--am-text)] text-base leading-snug">{exam.title}</h3>

        <div className="flex items-center justify-between gap-2 mt-auto pt-1">
          <Tag variant={exam.correction?.kind === "officielle" ? "success" : "default"}>
            {correctionLabel}
          </Tag>
        </div>

        <Button variant="outline" size="sm" full>
          Consulter le sujet
        </Button>
      </div>
    </div>
  );
}
