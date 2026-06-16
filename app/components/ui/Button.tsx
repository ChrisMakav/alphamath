"use client";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  full?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold leading-none transition-all cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--am-bg)] disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--am-green)] text-[var(--am-text-inverse)] hover:brightness-110 active:scale-[0.98] focus-visible:ring-[var(--am-green)]",
  secondary:
    "bg-[var(--am-purple)] text-white hover:brightness-110 active:scale-[0.98] focus-visible:ring-[var(--am-purple)]",
  outline:
    "border border-[var(--am-border-strong)] text-[var(--am-text)] hover:border-[var(--am-green)] hover:text-[var(--am-green)] hover:bg-[var(--am-green-muted)] active:scale-[0.98] focus-visible:ring-[var(--am-green)]",
  ghost:
    "text-[var(--am-text-secondary)] hover:text-[var(--am-text)] hover:bg-[var(--am-bg-elevated)] active:scale-[0.98] focus-visible:ring-[var(--am-border-strong)]",
  danger:
    "bg-red-600 text-white hover:bg-red-500 active:scale-[0.98] focus-visible:ring-red-500",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs rounded-[var(--am-radius-md)]",
  md: "h-10 px-5 text-sm rounded-[var(--am-radius-lg)]",
  lg: "h-12 px-7 text-base rounded-[var(--am-radius-xl)]",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  loading = false,
  full = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[base, variants[variant], sizes[size], full ? "w-full" : "", className].join(" ")}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span
          className="size-4 rounded-full border-2 border-current border-t-transparent animate-spin"
          aria-hidden
        />
      ) : (
        icon
      )}
      {children}
      {!loading && iconRight}
    </button>
  );
}
