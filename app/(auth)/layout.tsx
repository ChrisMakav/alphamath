import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: "var(--am-bg)" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(74,254,138,0.05) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-10 relative">
        <span
          className="size-9 rounded-xl flex items-center justify-center text-base font-black"
          style={{ background: "var(--am-green)", color: "var(--am-text-inverse)" }}
        >
          α
        </span>
        <span className="font-bold text-lg text-[var(--am-text)] tracking-tight">AlphaMath</span>
      </Link>

      {/* Card */}
      <div
        className="relative w-full max-w-sm rounded-[var(--am-radius-2xl)] p-8"
        style={{
          background: "var(--am-bg-card)",
          border: "1px solid var(--am-border)",
          boxShadow: "var(--am-shadow-xl)",
        }}
      >
        {children}
      </div>

      <p className="mt-6 text-xs relative" style={{ color: "var(--am-text-muted)" }}>
        © {new Date().getFullYear()} AlphaMath · Précision Pédagogique
      </p>
    </div>
  );
}
