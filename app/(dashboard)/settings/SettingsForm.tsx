"use client";
import React, { useActionState } from "react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { LevelBadge } from "../../components/ui/Badge";
import { updateProfile } from "../../actions/profile";

const LEVELS = [
  { id: "6eme",      label: "6ème" },
  { id: "5eme",      label: "5ème" },
  { id: "4eme",      label: "4ème" },
  { id: "3eme",      label: "3ème" },
  { id: "2nde",      label: "2nde" },
  { id: "1ere",      label: "1ère" },
  { id: "terminale", label: "Terminale" },
  { id: "L1",        label: "Licence 1" },
  { id: "L2",        label: "Licence 2" },
  { id: "L3",        label: "Licence 3" },
];

// "admin" n'est jamais proposé ici — uniquement attribuable via le backoffice.
const ROLES = [
  { id: "student", label: "Élève",      icon: "🎓" },
  { id: "parent",  label: "Parent",     icon: "👪" },
  { id: "teacher", label: "Enseignant", icon: "📝" },
] as const;

interface Props {
  initialName: string;
  initialLevel: string | null;
  initialRole: string;
  isAdmin?: boolean;
}

export function SettingsForm({ initialName, initialLevel, initialRole, isAdmin }: Props) {
  const [state, action, isPending] = useActionState(updateProfile, undefined);
  const [selectedLevel, setSelectedLevel] = React.useState(initialLevel ?? "");
  const [selectedRole, setSelectedRole] = React.useState(initialRole);

  return (
    <form action={action} className="flex flex-col gap-6">
      <Input
        label="Prénom / Nom affiché"
        name="name"
        defaultValue={initialName}
        placeholder="Votre prénom"
        required
        minLength={2}
      />

      {!isAdmin && (
        <div>
          <p className="text-sm font-medium mb-3" style={{ color: "var(--am-text-secondary)" }}>
            Vous êtes
          </p>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRole(r.id)}
                className="flex items-center gap-2 px-3 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all"
                style={{
                  background: selectedRole === r.id ? "var(--am-purple-muted)" : "var(--am-bg-card)",
                  color: selectedRole === r.id ? "var(--am-purple)" : "var(--am-text-secondary)",
                  border: `1px solid ${selectedRole === r.id ? "var(--am-purple)" : "var(--am-border)"}`,
                }}
              >
                <span>{r.icon}</span>
                {r.label}
              </button>
            ))}
          </div>
          <input type="hidden" name="role" value={selectedRole} />
        </div>
      )}

      <div>
        <p className="text-sm font-medium mb-3" style={{ color: "var(--am-text-secondary)" }}>
          Niveau scolaire
        </p>
        <div className="flex flex-wrap gap-2">
          {LEVELS.map((lvl) => (
            <button
              key={lvl.id}
              type="button"
              onClick={() => setSelectedLevel(lvl.id)}
              className="transition-all"
              style={{ opacity: selectedLevel === lvl.id ? 1 : 0.5 }}
            >
              <LevelBadge
                level={lvl.id}
                className={
                  selectedLevel === lvl.id
                    ? "ring-2 ring-offset-1 ring-offset-[var(--am-bg-card)] ring-[var(--am-purple)]"
                    : ""
                }
              />
            </button>
          ))}
        </div>
        <input type="hidden" name="school_level" value={selectedLevel} />
      </div>

      {state?.error && (
        <p
          className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
          style={{
            color: "#f87171",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          {state.error}
        </p>
      )}

      {state && !state.error && (
        <p
          className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
          style={{
            color: "var(--am-green)",
            background: "var(--am-green-muted)",
            border: "1px solid var(--am-green-dim)",
          }}
        >
          ✓ Profil mis à jour avec succès.
        </p>
      )}

      <div>
        <Button type="submit" variant="primary" loading={isPending}>
          Enregistrer les modifications
        </Button>
      </div>
    </form>
  );
}
