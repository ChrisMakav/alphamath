import React from "react";

interface ActivityGridProps {
  data?: number[];
  weeks?: number;
  className?: string;
}

const DAY_LABELS = ["L", "M", "M", "J", "V", "S", "D"];

function intensity(v: number): string {
  if (v === 0) return "var(--am-bg-overlay)";
  if (v <= 25) return "rgba(74,254,138,0.2)";
  if (v <= 50) return "rgba(74,254,138,0.45)";
  if (v <= 75) return "rgba(74,254,138,0.7)";
  return "var(--am-green)";
}

export function ActivityGrid({ data, weeks = 12, className = "" }: ActivityGridProps) {
  const cells = data ?? Array.from({ length: weeks * 7 }, () => Math.random() > 0.5 ? Math.floor(Math.random() * 100) : 0);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-end gap-1">
        {/* Day labels */}
        <div className="flex flex-col gap-1 mr-1">
          {DAY_LABELS.map((d, i) => (
            <span key={i} className="text-[10px] text-[var(--am-text-muted)] h-3 leading-3 w-3 text-center">
              {i % 2 === 0 ? d : ""}
            </span>
          ))}
        </div>
        {/* Grid */}
        <div className="flex gap-1">
          {Array.from({ length: weeks }).map((_, w) => (
            <div key={w} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, d) => {
                const val = cells[w * 7 + d] ?? 0;
                return (
                  <div
                    key={d}
                    className="size-3 rounded-[2px] transition-all"
                    style={{ background: intensity(val) }}
                    title={`${val} min`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 justify-end">
        <span className="text-[10px] text-[var(--am-text-muted)] mr-1">Moins</span>
        {[0, 25, 50, 75, 100].map((v) => (
          <div key={v} className="size-3 rounded-[2px]" style={{ background: intensity(v) }} />
        ))}
        <span className="text-[10px] text-[var(--am-text-muted)] ml-1">Plus</span>
      </div>
    </div>
  );
}
