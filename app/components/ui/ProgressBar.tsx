import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "green" | "purple" | "blue" | "amber";
  label?: string;
  showValue?: boolean;
  className?: string;
}

const heights = { sm: "h-1", md: "h-1.5", lg: "h-2.5" };

const colors: Record<string, { bar: string; glow: string }> = {
  green:  { bar: "var(--am-green)",  glow: "rgba(74,254,138,0.5)" },
  purple: { bar: "var(--am-purple)", glow: "rgba(139,92,246,0.5)" },
  blue:   { bar: "var(--am-blue)",   glow: "rgba(59,130,246,0.5)" },
  amber:  { bar: "var(--am-amber)",  glow: "rgba(245,158,11,0.5)" },
};

export function ProgressBar({
  value,
  max = 100,
  size = "md",
  color = "green",
  label,
  showValue = false,
  className = "",
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const cfg = colors[color];

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && (
            <span className="text-xs text-[var(--am-text-secondary)] font-medium">{label}</span>
          )}
          {showValue && (
            <span className="text-xs font-semibold tabular-nums" style={{ color: cfg.bar }}>
              {Math.round(pct)}%
            </span>
          )}
        </div>
      )}
      <div
        className={`w-full ${heights[size]} rounded-full overflow-hidden`}
        style={{ background: "var(--am-bg-overlay)" }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={max}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: cfg.bar,
            boxShadow: `0 0 6px ${cfg.glow}`,
          }}
        />
      </div>
    </div>
  );
}
