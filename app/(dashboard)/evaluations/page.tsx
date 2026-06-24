import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { resolveTeacherAccess } from "../../../lib/teacher-access";
import { LEVEL_LABELS, type SchoolLevel } from "../../../lib/seed-data";
import { Button } from "../../components/ui/Button";
import type { Database } from "../../../lib/supabase/types";

type Evaluation = Database["public"]["Tables"]["evaluations"]["Row"];

export default async function EvaluationsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const access = await resolveTeacherAccess(supabase, user.id);
  if (!access.isTeacher) redirect("/dashboard");

  let evaluations: Evaluation[] = [];
  if (access.isPremiumTeacher) {
    const { data } = await supabase
      .from("evaluations")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    evaluations = (data ?? []) as Evaluation[];
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-[var(--am-text)]">Mes évaluations</h1>
          <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>
            Générez des sujets d&apos;évaluation inédits, du débutant à l&apos;expert.
          </p>
        </div>
        {access.isPremiumTeacher && (
          <Button href="/evaluations/nouvelle" variant="primary" size="md">
            + Nouvelle évaluation
          </Button>
        )}
      </div>

      {!access.isPremiumTeacher ? (
        <div
          className="p-8 rounded-[var(--am-radius-xl)] text-center"
          style={{
            background: "linear-gradient(135deg, var(--am-purple-muted), var(--am-bg-card))",
            border: "1px solid var(--am-purple)",
          }}
        >
          <p className="font-bold text-[var(--am-text)] mb-2">🔒 Accès Premium requis</p>
          <p className="text-sm text-[var(--am-text-secondary)] mb-4">
            Le générateur d&apos;évaluations IA est réservé aux enseignants disposant d&apos;un abonnement Premium.
          </p>
          <Button href="/pricing" variant="secondary" size="md">Voir les offres → dès 9,99€/mois</Button>
        </div>
      ) : evaluations.length === 0 ? (
        <div
          className="py-16 text-center rounded-[var(--am-radius-2xl)]"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <p className="text-4xl mb-4">📝</p>
          <p className="font-bold text-[var(--am-text)] mb-2">Aucune évaluation pour l&apos;instant</p>
          <p className="text-sm mb-5" style={{ color: "var(--am-text-muted)" }}>
            Créez votre premier sujet d&apos;évaluation en choisissant un niveau et des notions.
          </p>
          <Button href="/evaluations/nouvelle" variant="primary" size="md">+ Nouvelle évaluation</Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {evaluations.map((ev) => (
            <a
              key={ev.id}
              href={`/evaluations/${ev.id}`}
              className="flex items-center justify-between gap-4 p-4 rounded-[var(--am-radius-xl)] transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
            >
              <div className="min-w-0">
                <p className="font-semibold text-sm text-[var(--am-text)] truncate">{ev.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--am-text-muted)" }}>
                  {LEVEL_LABELS[ev.school_level as SchoolLevel] ?? ev.school_level} ·{" "}
                  {ev.notions.join(", ")}
                </p>
              </div>
              <span className="text-xs flex-shrink-0" style={{ color: "var(--am-text-muted)" }}>
                {new Date(ev.created_at).toLocaleDateString("fr-FR")}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
