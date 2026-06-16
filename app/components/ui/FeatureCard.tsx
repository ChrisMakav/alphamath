import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: "green" | "purple" | "blue" | "amber";
  className?: string;
}

const accents = {
  green:  { color: "var(--am-green)",  bg: "var(--am-green-muted)",  border: "var(--am-green-dim)" },
  purple: { color: "var(--am-purple)", bg: "var(--am-purple-muted)", border: "rgba(139,92,246,0.3)" },
  blue:   { color: "var(--am-blue)",   bg: "var(--am-blue-muted)",   border: "rgba(59,130,246,0.3)" },
  amber:  { color: "var(--am-amber)",  bg: "var(--am-amber-muted)",  border: "rgba(245,158,11,0.3)" },
};

export function FeatureCard({ icon, title, description, accent = "green", className = "" }: FeatureCardProps) {
  const a = accents[accent];
  return (
    <div
      className={`rounded-[var(--am-radius-xl)] p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 group ${className}`}
      style={{
        background: "var(--am-bg-card)",
        border: "1px solid var(--am-border)",
        boxShadow: "var(--am-shadow-card)",
      }}
    >
      <div
        className="size-12 rounded-[var(--am-radius-lg)] flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
        style={{ color: a.color, background: a.bg, border: `1px solid ${a.border}` }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[var(--am-text)] mb-2">{title}</h3>
        <p className="text-sm text-[var(--am-text-secondary)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
