"use client";
import React from "react";

export function PrintButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`print:hidden px-4 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all hover:opacity-90 ${className}`}
      style={{ background: "var(--am-green)", color: "var(--am-text-inverse)" }}
    >
      🖨️ Imprimer / Enregistrer en PDF
    </button>
  );
}
