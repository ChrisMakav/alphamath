import React from "react";
import { Button } from "./Button";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden py-20 md:py-32 px-6 ${className}`}
      style={{
        backgroundImage: "url('/hero-classroom.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,9,14,0.92) 0%, rgba(8,9,14,0.88) 50%, var(--am-bg) 100%)",
        }}
        aria-hidden
      />

      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 10%, rgba(139,92,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(74,254,138,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Math symbols floating */}
      {["∫", "∑", "∂", "∞", "√", "π"].map((sym, i) => (
        <span
          key={i}
          className="pointer-events-none absolute font-black select-none"
          style={{
            fontSize: `${Math.random() * 40 + 20}px`,
            opacity: 0.03 + i * 0.008,
            top: `${[10, 20, 60, 70, 30, 80][i]}%`,
            left: `${[5, 85, 92, 8, 70, 55][i]}%`,
            color: i % 2 === 0 ? "var(--am-green)" : "var(--am-purple)",
          }}
          aria-hidden
        >
          {sym}
        </span>
      ))}

      <div className="relative max-w-3xl">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
          style={{
            color: "var(--am-green)",
            background: "var(--am-green-muted)",
            border: "1px solid var(--am-green-dim)",
          }}
        >
          <span
            className="size-1.5 rounded-full animate-pulse"
            style={{ background: "var(--am-green)" }}
          />
          PLATEFORME ACADÉMIQUE PREMIUM
        </div>

        <h1
          className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6"
          style={{ color: "#f0f2ff" }}
        >
          Maîtrisez les{" "}
          <span
            style={{
              background: "linear-gradient(90deg, var(--am-green) 0%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            mathématiques
          </span>{" "}
          du collège à la licence
        </h1>

        <p className="text-lg max-w-xl mb-8 leading-relaxed" style={{ color: "#c7cbe0" }}>
          Une approche structurée pour surmonter l'anxiété mathématique. Apprenez avec précision grâce à nos
          parcours guidés et nos outils de rendu LaTeX en temps réel.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" href="/register">
            Commencer gratuitement
          </Button>
          <Button variant="outline" size="lg" href="/#methode">
            Découvrir la méthode
          </Button>
        </div>

        <p className="mt-6 text-xs" style={{ color: "#9aa0c4" }}>
          Plus de{" "}
          <span className="font-semibold" style={{ color: "#c7cbe0" }}>
            40 000+
          </span>{" "}
          étudiants font confiance à AlphaMath
        </p>
      </div>
    </section>
  );
}
