import React from "react";

export type Level =
  | "demo"
  | "6eme" | "5eme" | "4eme" | "3eme"
  | "2nde" | "1ere" | "terminale"
  | "lycee" | "superieur"
  | "L1" | "L2" | "L3"
  | "algebre" | "algebra" | "geometrie" | "analyse"
  | "probabilites" | "arithmetique";

type LevelCfg = { label: string; color: string; bg: string };

const levelConfig: Record<Level, LevelCfg> = {
  demo:          { label: "Démo",         color: "#94a3b8", bg: "rgba(100,116,139,0.15)" },
  "6eme":        { label: "6ème",         color: "#67e8f9", bg: "rgba(6,182,212,0.10)" },
  "5eme":        { label: "5ème",         color: "#38bdf8", bg: "rgba(14,165,233,0.12)" },
  "4eme":        { label: "4ème",         color: "#22d3ee", bg: "rgba(6,182,212,0.12)" },
  "3eme":        { label: "3ème",         color: "#34d399", bg: "rgba(16,185,129,0.12)" },
  "2nde":        { label: "2nde",         color: "#a78bfa", bg: "rgba(139,92,246,0.12)" },
  "1ere":        { label: "1ère",         color: "#c084fc", bg: "rgba(192,132,252,0.12)" },
  terminale:     { label: "Terminale",    color: "#f472b6", bg: "rgba(236,72,153,0.12)" },
  lycee:         { label: "Lycée",        color: "#a78bfa", bg: "rgba(139,92,246,0.15)" },
  superieur:     { label: "Supérieur",    color: "#c084fc", bg: "rgba(192,132,252,0.12)" },
  L1:            { label: "Licence 1",    color: "#f87171", bg: "rgba(239,68,68,0.10)" },
  L2:            { label: "Licence 2",    color: "#fb923c", bg: "rgba(249,115,22,0.10)" },
  L3:            { label: "Licence 3",    color: "#fbbf24", bg: "rgba(245,158,11,0.10)" },
  algebre:       { label: "Algèbre",      color: "#fbbf24", bg: "rgba(245,158,11,0.12)" },
  algebra:       { label: "Algèbre",      color: "#fbbf24", bg: "rgba(245,158,11,0.12)" },
  geometrie:     { label: "Géométrie",    color: "#f472b6", bg: "rgba(236,72,153,0.12)" },
  analyse:       { label: "Analyse",      color: "#60a5fa", bg: "rgba(59,130,246,0.12)" },
  probabilites:  { label: "Probabilités", color: "#4afe8a", bg: "rgba(74,254,138,0.10)" },
  arithmetique:  { label: "Arithmétique", color: "#e879f9", bg: "rgba(232,121,249,0.10)" },
};

const FALLBACK: LevelCfg = { label: "—", color: "#64748b", bg: "rgba(100,116,139,0.12)" };

interface BadgeProps {
  level: string;
  className?: string;
}

export function LevelBadge({ level, className = "" }: BadgeProps) {
  const cfg = levelConfig[level as Level] ?? FALLBACK;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase ${className}`}
      style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.color}28` }}
    >
      {cfg.label}
    </span>
  );
}

type TagVariant = "default" | "success" | "warning" | "error" | "info";

const tagStyles: Record<TagVariant, string> = {
  default: "bg-[var(--am-bg-elevated)] text-[var(--am-text-secondary)] border-[var(--am-border)]",
  success: "bg-[var(--am-green-muted)] text-[var(--am-green)] border-[var(--am-green-dim)]",
  warning: "bg-[var(--am-amber-muted)] text-[var(--am-amber)] border-amber-800",
  error:   "bg-red-950 text-red-400 border-red-800",
  info:    "bg-[var(--am-blue-muted)] text-[var(--am-blue)] border-blue-800",
};

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

export function Tag({ children, variant = "default", className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium border ${tagStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
