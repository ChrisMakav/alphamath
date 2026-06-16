import React from "react";
import { Navbar } from "../components/ui/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer
        className="mt-20 py-12 px-6"
        style={{ borderTop: "1px solid var(--am-border-subtle)", background: "var(--am-bg-raised)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="size-7 rounded-lg flex items-center justify-center text-sm font-black"
                  style={{ background: "var(--am-green)", color: "var(--am-text-inverse)" }}
                >
                  α
                </span>
                <span className="font-bold text-base text-[var(--am-text)]">AlphaMath</span>
              </div>
              <p className="text-sm text-[var(--am-text-muted)] leading-relaxed max-w-xs">
                L'excellence académique à portée de clic. Des parcours guidés et des outils de rendu LaTeX
                en temps réel pour tous les niveaux.
              </p>
            </div>
            {[
              { title: "Plateforme", links: ["Cours", "Pratique", "Formules", "Outils"] },
              { title: "Ressources", links: ["Blog", "Podcasts", "Olympiades", "Téléchargements"] },
              { title: "Légal", links: ["CGU", "Confidentialité", "Accessibilité"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-text-muted)" }}>
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[var(--am-text-secondary)] hover:text-[var(--am-green)] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderTop: "1px solid var(--am-border-subtle)", color: "var(--am-text-muted)" }}
          >
            <span>© {new Date().getFullYear()} AlphaMath Académie · Précision Pédagogique · Progression Structurée</span>
            <span>
              <a href="/design-system" className="hover:text-[var(--am-green)] transition-colors">
                Design System
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
