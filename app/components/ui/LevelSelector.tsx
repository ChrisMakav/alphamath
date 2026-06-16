"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface Level {
  id: string;
  title: string;
  description: string;
  topics: string[];
  featured?: boolean;
}

const LEVELS: Level[] = [
  {
    id: "college",
    title: "Collège",
    description: "Bases solides en calcul, géométrie plane et introduction aux fonctions.",
    topics: ["Nombres et calcul", "Géométrie plane", "Probabilités", "Fonctions linéaires"],
  },
  {
    id: "lycee",
    title: "Lycée",
    description: "Analyse, probabilités et approche mathématique avancée pour le Baccalauréat.",
    topics: ["Dérivées et intégrales", "Suites numériques", "Logique et démonstration", "Géométrie dans l'espace"],
    featured: true,
  },
  {
    id: "superieur",
    title: "Supérieur",
    description: "CPGE, Licence et Master. Algèbre linéaire, Analyse complexe et Topologie.",
    topics: ["Espaces vectoriels", "Intégrales de Lebesgue", "Équations différentielles"],
  },
];

interface LevelSelectorProps {
  onSelect?: (id: string) => void;
  className?: string;
}

export function LevelSelector({ onSelect, className = "" }: LevelSelectorProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  function pick(id: string) {
    setSelected(id);
    if (onSelect) onSelect(id);
    else router.push(`/courses?category=${id}`);
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {LEVELS.map((lvl) => {
        const isSelected = selected === lvl.id;
        const featured = lvl.featured;
        return (
          <div
            key={lvl.id}
            onClick={() => pick(lvl.id)}
            className="rounded-[var(--am-radius-xl)] p-6 flex flex-col gap-4 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: featured
                ? "linear-gradient(160deg, var(--am-purple-muted) 0%, var(--am-bg-card) 100%)"
                : "var(--am-bg-card)",
              border: `1.5px solid ${
                isSelected
                  ? "var(--am-green)"
                  : featured
                  ? "var(--am-purple)"
                  : "var(--am-border)"
              }`,
              boxShadow: isSelected
                ? "var(--am-green-glow)"
                : featured
                ? "var(--am-purple-glow)"
                : "var(--am-shadow-card)",
            }}
          >
            <div className="flex items-start justify-between">
              <div
                className="size-10 rounded-[var(--am-radius-md)] flex items-center justify-center text-lg font-black"
                style={{
                  background: featured ? "var(--am-purple)" : isSelected ? "var(--am-green)" : "var(--am-bg-elevated)",
                  color: featured || isSelected ? "white" : "var(--am-text-secondary)",
                }}
              >
                {lvl.id === "college" ? "𝕃" : lvl.id === "lycee" ? "∑" : "∂"}
              </div>
              {featured && (
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{
                    color: "var(--am-purple)",
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.3)",
                  }}
                >
                  Populaire
                </span>
              )}
            </div>

            <div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: featured ? "var(--am-purple)" : "var(--am-text)" }}
              >
                {lvl.title}
              </h3>
              <p className="text-sm text-[var(--am-text-secondary)] leading-relaxed">
                {lvl.description}
              </p>
            </div>

            <ul className="flex flex-col gap-1.5">
              {lvl.topics.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-[var(--am-text-secondary)]">
                  <span
                    className="size-4 flex-shrink-0 flex items-center justify-center rounded-full text-[10px] font-bold"
                    style={{
                      background: featured ? "var(--am-purple-muted)" : "var(--am-green-muted)",
                      color: featured ? "var(--am-purple)" : "var(--am-green)",
                    }}
                  >
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <Button
              variant={featured ? "secondary" : "outline"}
              size="sm"
              full
            >
              Explorer
            </Button>
          </div>
        );
      })}
    </div>
  );
}
