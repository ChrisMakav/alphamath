import React from "react";

interface AchievementBadgeProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  unlocked?: boolean;
  rarity?: "common" | "rare" | "epic" | "legendary";
  className?: string;
}

const rarityStyles: Record<string, { border: string; glow: string; label: string; color: string }> = {
  common:    { border: "var(--am-border-strong)", glow: "none",                           label: "Commun",     color: "var(--am-text-secondary)" },
  rare:      { border: "var(--am-blue)",          glow: "0 0 12px rgba(59,130,246,0.35)", label: "Rare",       color: "var(--am-blue)" },
  epic:      { border: "var(--am-purple)",        glow: "0 0 16px rgba(139,92,246,0.4)",  label: "Épique",     color: "var(--am-purple)" },
  legendary: { border: "var(--am-green)",         glow: "var(--am-green-glow)",            label: "Légendaire", color: "var(--am-green)" },
};

export function AchievementBadge({
  icon,
  title,
  description,
  unlocked = true,
  rarity = "common",
  className = "",
}: AchievementBadgeProps) {
  const r = rarityStyles[rarity];
  return (
    <div
      className={`flex flex-col items-center gap-2 text-center ${className}`}
      style={{ opacity: unlocked ? 1 : 0.35 }}
    >
      <div
        className="size-16 rounded-[var(--am-radius-xl)] flex items-center justify-center text-2xl transition-all"
        style={{
          background: unlocked
            ? "linear-gradient(135deg, var(--am-bg-elevated), var(--am-bg-overlay))"
            : "var(--am-bg-card)",
          border: `1.5px solid ${unlocked ? r.border : "var(--am-border)"}`,
          boxShadow: unlocked ? r.glow : "none",
          filter: unlocked ? "none" : "grayscale(1)",
        }}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-[var(--am-text)]">{title}</div>
        {description && (
          <div className="text-[10px] text-[var(--am-text-muted)] mt-0.5">{description}</div>
        )}
        <div
          className="text-[9px] font-semibold tracking-widest uppercase mt-1"
          style={{ color: unlocked ? r.color : "var(--am-text-muted)" }}
        >
          {r.label}
        </div>
      </div>
    </div>
  );
}
