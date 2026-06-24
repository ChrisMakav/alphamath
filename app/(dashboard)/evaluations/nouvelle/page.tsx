import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../../lib/supabase/server";
import { resolveTeacherAccess } from "../../../../lib/teacher-access";
import { COURSES, LEVEL_LABELS, type SchoolLevel } from "../../../../lib/seed-data";
import { Button } from "../../../components/ui/Button";
import { EvaluationForm } from "./EvaluationForm";

export default async function NewEvaluationPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const access = await resolveTeacherAccess(supabase, user.id);
  if (!access.isTeacher) redirect("/dashboard");

  if (!access.isPremiumTeacher) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10">
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
      </div>
    );
  }

  const levels: SchoolLevel[] =
    access.accessibleLevels === "all"
      ? (Object.keys(LEVEL_LABELS) as SchoolLevel[])
      : access.accessibleLevels;

  const availableCourses = COURSES.filter((c) => levels.includes(c.schoolLevel)).map((c) => ({
    slug: c.slug,
    title: c.title,
    schoolLevel: c.schoolLevel,
    lessons: c.lessons.map((l) => ({ slug: l.slug, title: l.title })),
  }));

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-black text-[var(--am-text)] mb-2">Nouvelle évaluation</h1>
      <p className="text-sm mb-8" style={{ color: "var(--am-text-muted)" }}>
        Choisissez un niveau, puis les notions à évaluer. Le sujet généré contiendra 3 parties
        (débutant, intermédiaire, expert) avec corrigé.
      </p>
      <EvaluationForm levels={levels} courses={availableCourses} />
    </div>
  );
}
