"use client";
import React, { useState } from "react";

interface ToggleProps {
  checked?: boolean;
  onChange?: (v: boolean) => void;
  label?: string;
  size?: "sm" | "md";
  disabled?: boolean;
}

export function Toggle({ checked, onChange, label, size = "md", disabled = false }: ToggleProps) {
  const [internal, setInternal] = useState(false);
  const isOn = checked !== undefined ? checked : internal;

  function toggle() {
    if (disabled) return;
    const next = !isOn;
    setInternal(next);
    onChange?.(next);
  }

  const w = size === "sm" ? 32 : 42;
  const h = size === "sm" ? 18 : 24;
  const dot = size === "sm" ? 12 : 16;
  const offset = size === "sm" ? 3 : 4;
  const translate = isOn ? w - dot - offset : offset;

  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none" style={{ opacity: disabled ? 0.5 : 1 }}>
      <button
        role="switch"
        aria-checked={isOn}
        onClick={toggle}
        className="relative flex-shrink-0 rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--am-green)]"
        style={{
          width: w,
          height: h,
          background: isOn ? "var(--am-green)" : "var(--am-bg-overlay)",
          border: "1px solid",
          borderColor: isOn ? "var(--am-green)" : "var(--am-border-strong)",
          boxShadow: isOn ? "var(--am-green-glow-sm)" : "none",
        }}
      >
        <span
          className="absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
          style={{
            width: dot,
            height: dot,
            left: translate,
            background: isOn ? "var(--am-text-inverse)" : "var(--am-text-muted)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        />
      </button>
      {label && (
        <span className="text-sm text-[var(--am-text-secondary)]">{label}</span>
      )}
    </label>
  );
}

/* Theme toggle specifically */
export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  return (
    <div
      className="inline-flex items-center gap-1 p-1 rounded-[var(--am-radius-lg)]"
      style={{ background: "var(--am-bg-elevated)", border: "1px solid var(--am-border)" }}
    >
      {(["light", "dark"] as const).map((theme) => {
        const active = (theme === "dark") === dark;
        return (
          <button
            key={theme}
            onClick={() => setDark(theme === "dark")}
            className="px-3 py-1.5 rounded-[var(--am-radius-md)] text-xs font-semibold transition-all"
            style={{
              background: active ? "var(--am-bg-overlay)" : "transparent",
              color: active ? "var(--am-text)" : "var(--am-text-muted)",
            }}
          >
            {theme === "light" ? "☀ Clair" : "◑ Sombre"}
          </button>
        );
      })}
    </div>
  );
}
