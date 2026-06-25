import React from "react";

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[var(--am-text)] mb-2">{title}</h1>
      <p className="text-sm text-[var(--am-text-muted)] mb-10">Dernière mise à jour : {updatedAt}</p>
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
}

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[var(--am-text)] mb-3">{title}</h2>
      <div className="flex flex-col gap-3 text-sm text-[var(--am-text-secondary)] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function LegalNote({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-sm px-4 py-3 rounded-[var(--am-radius-md)]"
      style={{
        color: "var(--am-amber)",
        background: "var(--am-amber-muted)",
        border: "1px solid var(--am-amber)",
      }}
    >
      {children}
    </div>
  );
}
