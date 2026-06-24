import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { StatWidget } from "../../components/ui/StatWidget";
import { COURSES, LEVEL_LABELS } from "../../../lib/seed-data";
import type { Database } from "../../../lib/supabase/types";
import { RoleSelect } from "./RoleSelect";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profilesRaw } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });
  const profiles = (profilesRaw ?? []) as Profile[];

  if (profiles.find((p) => p.id === user.id)?.role !== "admin") {
    redirect("/dashboard");
  }

  const { count: enrollmentsCount } = await supabase
    .from("enrollments")
    .select("*", { count: "exact", head: true });

  const { count: completedLessonsCount } = await supabase
    .from("user_progress")
    .select("*", { count: "exact", head: true })
    .eq("completed", true);

  const adminCount = profiles.filter((p) => p.role === "admin").length;
  const totalLessons = COURSES.reduce((s, c) => s + c.lessons.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium mb-1" style={{ color: "var(--am-text-muted)" }}>
          Backoffice
        </p>
        <h1 className="text-3xl font-black text-[var(--am-text)]">
          Administration de la plateforme 🛠️
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatWidget value={profiles.length} label="Utilisateurs" icon="👥" accent="green" />
        <StatWidget value={enrollmentsCount ?? 0} label="Inscriptions aux cours" icon="📚" accent="blue" />
        <StatWidget value={completedLessonsCount ?? 0} label="Leçons complétées" icon="✅" accent="purple" />
        <StatWidget value={`${COURSES.length} / ${totalLessons}`} label="Cours / Leçons publiés" icon="🗂️" accent="amber" />
      </div>

      <div
        className="rounded-[var(--am-radius-xl)] overflow-hidden"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <div className="p-5 flex items-center justify-between" style={{ borderBottom: "1px solid var(--am-border-subtle)" }}>
          <h2 className="text-base font-bold text-[var(--am-text)]">Utilisateurs ({profiles.length})</h2>
          <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>
            {adminCount} administrateur{adminCount !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--am-border-subtle)" }}>
                {["Nom", "Niveau", "XP", "Série", "Rôle", "Inscrit le"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "var(--am-text-muted)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {profiles.map((p) => (
                <tr key={p.id} style={{ borderBottom: "1px solid var(--am-border-subtle)" }}>
                  <td className="px-5 py-3 font-medium text-[var(--am-text)]">{p.name ?? "—"}</td>
                  <td className="px-5 py-3 text-[var(--am-text-secondary)]">
                    {p.school_level ? (LEVEL_LABELS[p.school_level as keyof typeof LEVEL_LABELS] ?? p.school_level) : "—"}
                  </td>
                  <td className="px-5 py-3 text-[var(--am-text-secondary)]">{p.xp}</td>
                  <td className="px-5 py-3 text-[var(--am-text-secondary)]">{p.streak}j</td>
                  <td className="px-5 py-3">
                    <RoleSelect userId={p.id} currentRole={p.role} disabled={p.id === user.id} />
                  </td>
                  <td className="px-5 py-3 text-[var(--am-text-muted)]">
                    {new Date(p.created_at).toLocaleDateString("fr-FR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
