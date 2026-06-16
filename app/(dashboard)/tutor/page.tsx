import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { TutorChat } from "../../components/ui/TutorChat";
import type { Database } from "../../../lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function TutorPage({
  searchParams,
}: {
  searchParams: Promise<{ lesson?: string; course?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { lesson, course } = await searchParams;

  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("name, school_level, xp")
    .eq("id", user.id)
    .single();

  const profile = profileRaw as Pick<Profile, "name" | "school_level" | "xp"> | null;
  const name = profile?.name ?? user.email?.split("@")[0] ?? "Étudiant";

  const context = [
    profile?.school_level ? `Niveau : ${profile.school_level}` : null,
    course ? `Cours en cours : ${decodeURIComponent(course)}` : null,
    lesson ? `Leçon en cours : ${decodeURIComponent(lesson)}` : null,
  ]
    .filter(Boolean)
    .join(". ");

  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-4 flex-shrink-0"
        style={{ borderBottom: "1px solid var(--am-border-subtle)", background: "var(--am-bg-raised)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="size-9 rounded-[var(--am-radius-md)] flex items-center justify-center text-lg"
            style={{
              background: "linear-gradient(135deg, var(--am-purple-muted), var(--am-green-muted))",
              border: "1px solid var(--am-purple)",
            }}
          >
            🤖
          </div>
          <div>
            <h1 className="text-base font-bold text-[var(--am-text)]">AlphaBot</h1>
            <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>
              Tuteur IA en mathématiques · alimenté par Claude
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Feature chips */}
          {[
            { label: "LaTeX", color: "var(--am-green)" },
            { label: "Étape par étape", color: "var(--am-purple)" },
            { label: "Toutes niveaux", color: "var(--am-amber)" },
          ].map((chip) => (
            <span
              key={chip.label}
              className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                color: chip.color,
                background: chip.color + "18",
                border: `1px solid ${chip.color}33`,
              }}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      {/* Context banner */}
      {context && (
        <div
          className="px-6 py-2 text-xs flex items-center gap-2 flex-shrink-0"
          style={{
            background: "var(--am-purple-muted)",
            borderBottom: "1px solid rgba(139,92,246,0.2)",
            color: "var(--am-purple)",
          }}
        >
          <span>📍</span>
          <span>{context}</span>
        </div>
      )}

      {/* Main chat */}
      <div className="flex-1 min-h-0">
        <TutorChat context={context || undefined} userName={name} />
      </div>
    </div>
  );
}
