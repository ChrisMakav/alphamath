"use client";
import React, { useActionState, useEffect, useState } from "react";
import { completeOnboarding } from "../../actions/onboarding";
import { createClient } from "../../../lib/supabase/client";
import { LevelBadge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";

const ROLES = [
  { id: "student", label: "Élève",      icon: "🎓", desc: "J'apprends les maths" },
  { id: "parent",  label: "Parent",     icon: "👪", desc: "Je suis le progrès de mon enfant" },
  { id: "teacher", label: "Enseignant", icon: "📝", desc: "J'enseigne les maths" },
] as const;

const LEVELS = [
  { id: "6eme", label: "6ème" }, { id: "5eme", label: "5ème" },
  { id: "4eme", label: "4ème" }, { id: "3eme", label: "3ème" },
  { id: "2nde", label: "2nde" }, { id: "1ere", label: "1ère" },
  { id: "terminale", label: "Terminale" }, { id: "L1", label: "Licence 1" },
  { id: "L2", label: "Licence 2" }, { id: "L3", label: "Licence 3" },
];

export default function OnboardingPage() {
  const [state, action, isPending] = useActionState<{ error?: string } | undefined, FormData>(completeOnboarding, undefined);
  const [role, setRole] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // Pré-rempli le nom depuis les métadonnées Google
    createClient().auth.getUser().then(({ data: { user } }) => {
      const googleName = user?.user_metadata?.full_name ?? user?.user_metadata?.name ?? "";
      if (googleName) setName(googleName);
    });
  }, []);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[var(--am-text)] mb-1">Bienvenue ! 👋</h1>
        <p className="text-sm text-[var(--am-text-secondary)]">
          Dites-nous en plus sur vous pour personnaliser votre expérience.
        </p>
      </div>

      <form action={action} className="flex flex-col gap-5">
        {/* Nom */}
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--am-text-secondary)" }}>
            Votre prénom
          </label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex"
            required
            minLength={2}
            className="w-full text-sm px-3 py-2.5 rounded-[var(--am-radius-md)] outline-none transition-all"
            style={{
              background: "var(--am-bg-raised)",
              border: "1px solid var(--am-border)",
              color: "var(--am-text)",
            }}
          />
        </div>

        {/* Rôle */}
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: "var(--am-text-secondary)" }}>
            Vous êtes
          </p>
          <div className="flex flex-col gap-2">
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                className="flex items-center gap-3 px-4 py-3 rounded-[var(--am-radius-lg)] text-left transition-all"
                style={{
                  background: role === r.id ? "var(--am-purple-muted)" : "var(--am-bg-raised)",
                  border: `1px solid ${role === r.id ? "var(--am-purple)" : "var(--am-border)"}`,
                }}
              >
                <span className="text-xl">{r.icon}</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: role === r.id ? "var(--am-purple)" : "var(--am-text)" }}>
                    {r.label}
                  </p>
                  <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>{r.desc}</p>
                </div>
              </button>
            ))}
          </div>
          <input type="hidden" name="role" value={role} />
        </div>

        {/* Niveau (affiché uniquement pour élève) */}
        {role === "student" && (
          <div>
            <p className="text-sm font-medium mb-2" style={{ color: "var(--am-text-secondary)" }}>
              Votre niveau actuel
            </p>
            <div className="flex flex-wrap gap-2">
              {LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setLevel(lvl.id)}
                  className="transition-all"
                  style={{ opacity: level === lvl.id ? 1 : 0.55 }}
                >
                  <LevelBadge
                    level={lvl.id}
                    className={level === lvl.id ? "ring-2 ring-offset-1 ring-offset-[var(--am-bg-card)]" : ""}
                  />
                </button>
              ))}
            </div>
            <input type="hidden" name="school_level" value={level} />
          </div>
        )}

        {state?.error && (
          <p className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
            style={{ color: "#f87171", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
            {state.error}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          full
          loading={isPending}
          disabled={!role || !name}
        >
          Accéder à la plateforme
        </Button>
      </form>
    </>
  );
}
