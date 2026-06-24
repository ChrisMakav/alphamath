import React from "react";
import { notFound, redirect } from "next/navigation";
import { createClient } from "../../../../lib/supabase/server";
import { LEVEL_LABELS, type SchoolLevel } from "../../../../lib/seed-data";
import { parseEvaluationContent, EVAL_SECTION_TITLES } from "../../../../lib/evaluations";
import { MathContent } from "../../../components/ui/MathContent";
import { PrintButton } from "../../../components/ui/PrintButton";
import type { Database } from "../../../../lib/supabase/types";

type Evaluation = Database["public"]["Tables"]["evaluations"]["Row"];

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EvaluationDetailPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: evalRaw } = await supabase
    .from("evaluations")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  const evaluation = evalRaw as Evaluation | null;
  if (!evaluation) notFound();

  let sections;
  try {
    sections = parseEvaluationContent(evaluation.content);
  } catch {
    notFound();
  }

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
        <a href="/evaluations" className="text-sm" style={{ color: "var(--am-text-muted)" }}>
          ← Mes évaluations
        </a>
        <PrintButton />
      </div>

      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--am-green)" }}>
        {LEVEL_LABELS[evaluation.school_level as SchoolLevel] ?? evaluation.school_level}
      </p>
      <h1 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--am-text)" }}>
        {evaluation.title}
      </h1>
      <p className="text-xs mb-8" style={{ color: "var(--am-text-muted)" }}>
        Notions évaluées : {evaluation.notions.join(", ")}
      </p>

      {sections.map((section) => (
        <div key={section.difficulty} className="mb-10">
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--am-text)" }}>
            {EVAL_SECTION_TITLES[section.difficulty]}
          </h2>
          <div className="flex flex-col gap-5">
            {section.questions.map((q, idx) => (
              <div key={q.id} className="rounded-[var(--am-radius-lg)] p-4" style={{ border: "1px solid var(--am-border)" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--am-text)" }}>
                  Question {idx + 1}
                  {q.points ? ` (${q.points} pts)` : ""}
                </p>
                <MathContent content={q.statement} />
                <p className="text-xs font-bold mt-3 mb-1" style={{ color: "var(--am-text-muted)" }}>
                  Corrigé
                </p>
                <MathContent content={q.correction} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <p className="mt-10 text-xs text-center" style={{ color: "var(--am-text-muted)" }}>
        AlphaMath Académie · Évaluation générée le {new Date(evaluation.created_at).toLocaleDateString("fr-FR")}
      </p>
    </div>
  );
}
