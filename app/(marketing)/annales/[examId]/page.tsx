import React from "react";
import { notFound } from "next/navigation";
import {
  getExamPaperById,
  getExamLabel,
  CORRECTION_KIND_LABELS,
} from "../../../../lib/exams-data";
import { MathContent } from "../../../components/ui/MathContent";
import { PrintButton } from "../../../components/ui/PrintButton";
import { Breadcrumb } from "../../../components/ui/Breadcrumb";

interface Props {
  params: Promise<{ examId: string }>;
}

export default async function ExamPaperPage({ params }: Props) {
  const { examId } = await params;
  const exam = getExamPaperById(examId);
  if (!exam) notFound();

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
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Annales", href: "/annales" },
            { label: exam.title },
          ]}
        />
        <PrintButton />
      </div>

      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--am-green)" }}>
        {getExamLabel(exam)} · {exam.year}
      </p>
      <h1 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--am-text)" }}>
        {exam.title}
      </h1>
      <p className="text-xs mb-6" style={{ color: "var(--am-text-muted)" }}>
        {exam.session !== "unique" && `Session : ${exam.session === "juin" ? "Juin" : "Septembre"} · `}
        {exam.durationMinutes ? `Durée : ${exam.durationMinutes} min` : null}
      </p>

      <h2 className="text-lg font-bold mb-4" style={{ color: "var(--am-text)" }}>
        Énoncé
      </h2>
      <div className="flex flex-col gap-5 mb-10">
        {exam.statement.map((section) => (
          <div key={section.id} className="rounded-[var(--am-radius-lg)] p-4" style={{ border: "1px solid var(--am-border)" }}>
            <p className="text-sm font-bold mb-2" style={{ color: "var(--am-text)" }}>
              {section.title}
              {section.points ? ` (${section.points} pts)` : ""}
            </p>
            <MathContent content={section.content} />
          </div>
        ))}
      </div>

      {exam.correction ? (
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-1" style={{ color: exam.correction.kind === "officielle" ? "var(--am-green)" : "var(--am-purple)" }}>
            {CORRECTION_KIND_LABELS[exam.correction.kind]}
          </h2>
          {exam.correction.authorNote && (
            <p className="text-xs italic mb-4" style={{ color: "var(--am-text-muted)" }}>
              {exam.correction.authorNote}
            </p>
          )}
          <div className="flex flex-col gap-5">
            {exam.correction.sections.map((section) => (
              <div key={section.id} className="rounded-[var(--am-radius-lg)] p-4" style={{ border: "1px solid var(--am-border)" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--am-text)" }}>
                  {section.title}
                </p>
                <MathContent content={section.content} />
              </div>
            ))}
          </div>
          {exam.correction.sourceUrl && (
            <p className="text-xs mt-4" style={{ color: "var(--am-text-muted)" }}>
              Source du corrigé :{" "}
              <a href={exam.correction.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--am-green)" }}>
                {exam.correction.sourceLabel}
              </a>
            </p>
          )}
        </div>
      ) : (
        <p className="text-sm italic mb-10" style={{ color: "var(--am-text-muted)" }}>
          Aucun corrigé disponible pour ce sujet.
        </p>
      )}

      <p className="text-xs text-center" style={{ color: "var(--am-text-muted)" }}>
        Source du sujet :{" "}
        <a href={exam.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--am-green)" }}>
          {exam.sourceLabel}
        </a>
      </p>
    </div>
  );
}
