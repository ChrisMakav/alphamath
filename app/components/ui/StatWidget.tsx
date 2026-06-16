import React from "react";

interface StatWidgetProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: { value: string; up: boolean };
  accent?: "green" | "purple" | "blue" | "amber";
  className?: string;
}

const accents = {
  green:  { color: "var(--am-green)",  bg: "var(--am-green-muted)" },
  purple: { color: "var(--am-purple)", bg: "var(--am-purple-muted)" },
  blue:   { color: "var(--am-blue)",   bg: "var(--am-blue-muted)" },
  amber:  { color: "var(--am-amber)",  bg: "var(--am-amber-muted)" },
};

export function StatWidget({
  value,
  label,
  icon,
  trend,
  accent = "green",
  className = "",
}: StatWidgetProps) {
  const a = accents[accent];
  return (
    <div
      className={`rounded-[var(--am-radius-xl)] p-5 flex flex-col gap-3 ${className}`}
      style={{
        background: "var(--am-bg-card)",
        border: "1px solid var(--am-border)",
        boxShadow: "var(--am-shadow-card)",
      }}
    >
      {icon && (
        <div
          className="size-10 rounded-[var(--am-radius-md)] flex items-center justify-center text-lg"
          style={{ color: a.color, background: a.bg }}
        >
          {icon}
        </div>
      )}
      <div>
        <div
          className="text-3xl font-bold tabular-nums leading-none mb-1"
          style={{ color: a.color }}
        >
          {value}
        </div>
        <div className="text-sm text-[var(--am-text-secondary)]">{label}</div>
      </div>
      {trend && (
        <div
          className="text-xs font-semibold"
          style={{ color: trend.up ? "var(--am-green)" : "#f87171" }}
        >
          {trend.up ? "↑" : "↓"} {trend.value}
        </div>
      )}
    </div>
  );
}
