import React from "react";
import { notFound } from "next/navigation";
import { getOlympiadProblemById } from "../../../../lib/olympiades-data";
import { MathContent } from "../../../components/ui/MathContent";
import { PrintButton } from "../../../components/ui/PrintButton";
import { Breadcrumb } from "../../../components/ui/Breadcrumb";
import { LevelBadge, Tag } from "../../../components/ui/Badge";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function OlympiadProblemPage({ params }: Props) {
  const { id } = await params;
  const problem = getOlympiadProblemById(id);
  if (!problem) notFound();

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
            { label: "Olympiades", href: "/olympiades" },
            { label: problem.title },
          ]}
        />
        <PrintButton />
      </div>

      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--am-amber)" }}>
        {problem.competition} · {problem.year}
      </p>
      <h1 className="text-2xl md:text-3xl font-black mb-3" style={{ color: "var(--am-text)" }}>
        {problem.title}
      </h1>
      <div className="flex items-center gap-2 flex-wrap mb-8">
        <LevelBadge level={problem.level} />
        {problem.levelNote && (
          <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>{problem.levelNote}</span>
        )}
        <Tag>{problem.domain}</Tag>
      </div>

      <h2 className="text-lg font-bold mb-4" style={{ color: "var(--am-text)" }}>
        Énoncé
      </h2>
      <div className="rounded-[var(--am-radius-lg)] p-4 mb-10" style={{ border: "1px solid var(--am-border)" }}>
        <MathContent content={problem.statement} />
      </div>

      <h2 className="text-lg font-bold mb-4" style={{ color: "var(--am-green)" }}>
        Solution
      </h2>
      <div className="rounded-[var(--am-radius-lg)] p-4 mb-10" style={{ border: "1px solid var(--am-border)" }}>
        <MathContent content={problem.solution} />
      </div>

      <div className="flex flex-col gap-1 text-xs text-center" style={{ color: "var(--am-text-muted)" }}>
        <p>
          Source du sujet :{" "}
          <a href={problem.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--am-green)" }}>
            {problem.sourceLabel}
          </a>
        </p>
        {problem.correctionSourceUrl && (
          <p>
            Source du corrigé :{" "}
            <a href={problem.correctionSourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--am-green)" }}>
              {problem.correctionSourceLabel}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
