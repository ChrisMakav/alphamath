"use client";
import React from "react";

interface Option { id: string; label: string }

interface FilterBarProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}

export function FilterBar({ label, options, value, onChange, className = "" }: FilterBarProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--am-text-muted)" }}>
          {label}
        </span>
      )}
      <div
        className="flex items-center flex-wrap gap-1 p-1 rounded-[var(--am-radius-xl)]"
        style={{ background: "var(--am-bg-raised)", border: "1px solid var(--am-border)" }}
      >
        {options.map((opt) => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className="px-3 py-1.5 rounded-[var(--am-radius-lg)] text-sm font-medium transition-all duration-150"
              style={{
                background: active ? "var(--am-green-muted)" : "transparent",
                color: active ? "var(--am-green)" : "var(--am-text-secondary)",
                border: `1px solid ${active ? "var(--am-green-dim)" : "transparent"}`,
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
