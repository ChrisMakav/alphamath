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

interface Props {
  initialName: string;
  initialLevel: string | null;
}

export function SettingsForm({ initialName, initialLevel }: Props) {
  const [state, action, isPending] = useActionState(updateProfile, undefined);
  const [selectedLevel, setSelectedLevel] = React.useState(initialLevel ?? "");

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
