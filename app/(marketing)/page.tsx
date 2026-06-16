import React from "react";
import { HeroSection } from "../components/ui/HeroSection";
import { LevelSelector } from "../components/ui/LevelSelector";
import { FeatureCard } from "../components/ui/FeatureCard";
import { Button } from "../components/ui/Button";
import { StatWidget } from "../components/ui/StatWidget";
import { CourseCard } from "../components/ui/CourseCard";
import { COURSES } from "../../lib/seed-data";

export default function HomePage() {
  const featured = COURSES.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Stats band */}
      <section
        className="py-10 px-6"
        style={{ background: "var(--am-bg-raised)", borderTop: "1px solid var(--am-border-subtle)", borderBottom: "1px solid var(--am-border-subtle)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatWidget value="40k+" label="Étudiants actifs"    icon="👥" accent="green" />
          <StatWidget value="200+"  label="Cours disponibles"   icon="📚" accent="purple" />
          <StatWidget value="12"    label="Niveaux couverts"    icon="🎯" accent="blue" />
          <StatWidget value="98%"   label="Taux de satisfaction" icon="⭐" accent="amber" />
        </div>
      </section>

      {/* Level selector */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-green)" }}>
              NIVEAUX & PARCOURS
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--am-text)] mb-4">
              Choisissez votre niveau
            </h2>
            <p className="text-[var(--am-text-secondary)] max-w-xl mx-auto">
              Accédez à des contenus spécifiques conçus par des agrégés et des enseignants certifiés.
            </p>
          </div>
          <LevelSelector />
        </div>
      </section>

      {/* Featured courses */}
      <section className="py-20 px-6" style={{ background: "var(--am-bg-raised)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--am-purple)" }}>
                COURS EN VEDETTE
              </p>
              <h2 className="text-3xl font-black text-[var(--am-text)]">Commencez dès aujourd'hui</h2>
            </div>
            <Button variant="outline" size="sm" iconRight={<span>→</span>}>
              <a href="/courses">Voir tous les cours</a>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((course) => (
              <a key={course.id} href={`/courses/${course.slug}`} className="block group">
                <CourseCard
                  title={course.title}
                  description={course.description}
                  level={course.schoolLevel as any}
                  subject={course.subject as any}
                  difficulty={course.difficulty}
                  lessons={course.lessons.length}
                  icon={course.thumbnailEmoji}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why AlphaMath */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-blue)" }}>
              POURQUOI ALPHAMATH ?
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--am-text)] mb-4">
              Une pédagogie qui combine rigueur et code
            </h2>
            <p className="text-[var(--am-text-secondary)] max-w-xl mx-auto">
              MathPath modélisé pour une progression rigoureuse et naturelle.
            </p>
            <a href="/courses">
              <Button variant="secondary" size="sm" className="mt-4">Voir toutes les fonctionnalités →</Button>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon="✏️"
              title="Exercices Interactifs"
              description="Des problèmes adaptatifs qui s'ajustent à votre niveau avec correction immédiate en temps réel."
              accent="green"
            />
            <FeatureCard
              icon="🎬"
              title="Cours en Vidéo"
              description="Des contenus exclusifs réalisés par des enseignants certifiés. Support LaTeX intégré."
              accent="purple"
            />
            <FeatureCard
              icon="✓"
              title="Corrections Détaillées"
              description="Chaque erreur est une leçon. Explications pas à pas avec méthodes alternatives."
              accent="blue"
            />
            <FeatureCard
              icon="📊"
              title="Suivi de Progression"
              description="Visualisez vos lacunes et identifiez les notions à revoir grâce à l'analyse adaptive."
              accent="amber"
            />
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section
        className="py-16 px-6"
        style={{
          background: "linear-gradient(135deg, var(--am-bg-raised) 0%, var(--am-bg) 100%)",
          borderTop: "1px solid var(--am-border-subtle)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "J'ai eu 18 au Bac grâce à AlphaMath. Les corrections détaillées font vraiment la différence.", name: "Léa M.", level: "Terminale S" },
              { quote: "Enfin une plateforme qui rend les maths de Licence accessibles. Le niveau L2 est exceptionnel.", name: "Thomas R.", level: "Licence 2" },
              { quote: "Mes élèves progressent deux fois plus vite depuis que j'utilise AlphaMath en complément.", name: "M. Bernard", level: "Enseignant Lycée" },
            ].map((t) => (
              <div
                key={t.name}
                className="p-5 rounded-[var(--am-radius-xl)] flex flex-col gap-4"
                style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: "var(--am-amber)", fontSize: "0.75rem" }}>★</span>
                  ))}
                </div>
                <p className="text-sm text-[var(--am-text-secondary)] leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-bold text-[var(--am-text)]">{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>{t.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(74,254,138,0.06) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--am-text)] mb-4 leading-tight">
            Prêt à briller en{" "}
            <span
              style={{
                background: "linear-gradient(90deg, var(--am-green), #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              mathématiques ?
            </span>
          </h2>
          <p className="text-[var(--am-text-secondary)] mb-8 text-lg">
            Rejoignez des milliers d'étudiants qui ont fait confiance à notre méthode et notre compréhension.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="primary" size="lg">Commencer l'essai gratuit</Button>
            <Button variant="outline" size="lg">Contacter un conseiller</Button>
          </div>
          <p className="mt-5 text-xs text-[var(--am-text-muted)]">
            Pas de carte bancaire requise · Accès immédiat · Annulation à tout moment
          </p>
        </div>
      </section>
    </div>
  );
}
