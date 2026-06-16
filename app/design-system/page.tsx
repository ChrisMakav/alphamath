import React from "react";
import { Button } from "../components/ui/Button";
import { LevelBadge, Tag } from "../components/ui/Badge";
import { ProgressBar } from "../components/ui/ProgressBar";
import { Avatar } from "../components/ui/Avatar";
import { StatWidget } from "../components/ui/StatWidget";
import { CourseCard } from "../components/ui/CourseCard";
import { MCQCard } from "../components/ui/MCQCard";
import { ActivityGrid } from "../components/ui/ActivityGrid";
import { AchievementBadge } from "../components/ui/AchievementBadge";
import { Navbar } from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/Sidebar";
import { LevelSelector } from "../components/ui/LevelSelector";
import { FeatureCard } from "../components/ui/FeatureCard";
import { HeroSection } from "../components/ui/HeroSection";
import { Toggle, ThemeToggle } from "../components/ui/Toggle";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <h2
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--am-text-muted)" }}
        >
          {title}
        </h2>
        <div className="flex-1 h-px" style={{ background: "var(--am-border-subtle)" }} />
      </div>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div style={{ background: "var(--am-bg)", minHeight: "100vh", fontFamily: "var(--am-font-sans)" }}>
      {/* Navbar preview */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              color: "var(--am-green)",
              background: "var(--am-green-muted)",
              border: "1px solid var(--am-green-dim)",
              letterSpacing: "0.15em",
            }}
          >
            ◈ SYSTÈME DE DESIGN
          </div>
          <h1
            className="text-5xl font-black tracking-tight mb-3"
            style={{ color: "var(--am-text)" }}
          >
            AlphaMath UI
          </h1>
          <p style={{ color: "var(--am-text-secondary)", fontSize: "var(--am-text-lg)" }}>
            Composants, tokens et patterns pour la plateforme mathématique.
          </p>
        </div>

        {/* ── COLOR TOKENS ── */}
        <Section title="Tokens — Couleurs">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "bg",          val: "var(--am-bg)" },
              { name: "bg-raised",   val: "var(--am-bg-raised)" },
              { name: "bg-card",     val: "var(--am-bg-card)" },
              { name: "bg-elevated", val: "var(--am-bg-elevated)" },
              { name: "bg-overlay",  val: "var(--am-bg-overlay)" },
              { name: "border",      val: "var(--am-border)" },
              { name: "green",       val: "var(--am-green)" },
              { name: "green-dim",   val: "var(--am-green-dim)" },
              { name: "green-muted", val: "var(--am-green-muted)" },
              { name: "purple",      val: "var(--am-purple)" },
              { name: "purple-dim",  val: "var(--am-purple-dim)" },
              { name: "blue",        val: "var(--am-blue)" },
              { name: "amber",       val: "var(--am-amber)" },
              { name: "text",        val: "var(--am-text)" },
              { name: "text-sec",    val: "var(--am-text-secondary)" },
              { name: "text-muted",  val: "var(--am-text-muted)" },
            ].map((token) => (
              <div key={token.name} className="flex flex-col gap-2">
                <div
                  className="h-12 rounded-[var(--am-radius-md)]"
                  style={{
                    background: token.val,
                    border: "1px solid var(--am-border)",
                  }}
                />
                <div>
                  <p className="text-xs font-mono font-semibold" style={{ color: "var(--am-text-secondary)" }}>
                    --am-{token.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── TYPOGRAPHY ── */}
        <Section title="Typographie">
          <div className="flex flex-col gap-4">
            {[
              { size: "var(--am-text-5xl)", weight: "900", label: "Display / H1", text: "Maîtrisez les mathématiques" },
              { size: "var(--am-text-4xl)", weight: "800", label: "H2",           text: "Choisissez votre niveau" },
              { size: "var(--am-text-3xl)", weight: "700", label: "H3",           text: "Calcul Intégral" },
              { size: "var(--am-text-2xl)", weight: "600", label: "H4",           text: "Théorème des Gendarmes" },
              { size: "var(--am-text-xl)",  weight: "600", label: "H5",           text: "Suite numérique convergente" },
              { size: "var(--am-text-base)",weight: "400", label: "Body",         text: "Le théorème d'encadrement, familièrement appelé Théorème des Gendarmes, est un outil fondamental." },
              { size: "var(--am-text-sm)",  weight: "400", label: "Small",        text: "Apprenez avec précision grâce à nos parcours guidés." },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-4">
                <span
                  className="w-20 flex-shrink-0 text-xs font-mono"
                  style={{ color: "var(--am-text-muted)" }}
                >
                  {t.label}
                </span>
                <span
                  style={{
                    fontSize: t.size,
                    fontWeight: t.weight,
                    color: "var(--am-text)",
                    lineHeight: "1.1",
                    fontFamily: "var(--am-font-sans)",
                  }}
                >
                  {t.text}
                </span>
              </div>
            ))}
            <div className="flex items-baseline gap-4">
              <span className="w-20 flex-shrink-0 text-xs font-mono" style={{ color: "var(--am-text-muted)" }}>Mono</span>
              <code
                className="text-sm"
                style={{
                  fontFamily: "var(--am-font-mono)",
                  color: "var(--am-green)",
                  background: "var(--am-green-muted)",
                  padding: "2px 8px",
                  borderRadius: "var(--am-radius-sm)",
                }}
              >
                f(x) = x² - 2x + g(x) = x
              </code>
            </div>
          </div>
        </Section>

        {/* ── BUTTONS ── */}
        <Section title="Boutons">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs text-[var(--am-text-muted)] mb-3 font-mono">Variantes</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary">Commencer</Button>
                <Button variant="secondary">Explorer</Button>
                <Button variant="outline">Découvrir</Button>
                <Button variant="ghost">Connexion</Button>
                <Button variant="danger">Supprimer</Button>
                <Button variant="primary" loading>Chargement</Button>
                <Button variant="primary" disabled>Désactivé</Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-[var(--am-text-muted)] mb-3 font-mono">Tailles</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary" size="sm">Petit</Button>
                <Button variant="primary" size="md">Moyen</Button>
                <Button variant="primary" size="lg">Grand</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── BADGES ── */}
        <Section title="Badges & Tags">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs text-[var(--am-text-muted)] mb-3 font-mono">Niveaux</p>
              <div className="flex flex-wrap gap-2">
                {(["demo","5eme","4eme","3eme","lycee","algebra","geometrie","analyse"] as const).map((l) => (
                  <LevelBadge key={l} level={l} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-[var(--am-text-muted)] mb-3 font-mono">Tags état</p>
              <div className="flex flex-wrap gap-2">
                <Tag>Défaut</Tag>
                <Tag variant="success">✓ Complété</Tag>
                <Tag variant="warning">En cours</Tag>
                <Tag variant="error">Erreur</Tag>
                <Tag variant="info">Info</Tag>
              </div>
            </div>
          </div>
        </Section>

        {/* ── PROGRESS BARS ── */}
        <Section title="Barres de progression">
          <div className="max-w-md flex flex-col gap-4">
            <ProgressBar value={72} label="Calcul Intégral" showValue />
            <ProgressBar value={45} color="purple" label="Algèbre Linéaire" showValue />
            <ProgressBar value={88} color="blue"   label="Probabilités" showValue />
            <ProgressBar value={30} color="amber"  label="Géométrie" showValue />
            <div className="flex flex-col gap-2">
              <p className="text-xs text-[var(--am-text-muted)] font-mono">Tailles</p>
              <ProgressBar value={60} size="sm" />
              <ProgressBar value={60} size="md" />
              <ProgressBar value={60} size="lg" />
            </div>
          </div>
        </Section>

        {/* ── AVATARS ── */}
        <Section title="Avatars">
          <div className="flex flex-wrap items-end gap-8">
            <Avatar name="Alex Mercer" size="sm" />
            <Avatar name="Alex Mercer" size="md" />
            <Avatar name="Alex Mercer" size="lg" />
            <Avatar name="Alex Mercer" size="xl" level="Université" />
            <Avatar name="Sara Dupont" size="lg" level="Lycée" />
          </div>
        </Section>

        {/* ── STAT WIDGETS ── */}
        <Section title="Widgets statistiques">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatWidget value="142h" label="Temps d'étude" icon="⏱" accent="green"
              trend={{ value: "+12h ce mois", up: true }} />
            <StatWidget value="12"   label="Cours complétés" icon="📚" accent="purple"
              trend={{ value: "+3 cette semaine", up: true }} />
            <StatWidget value="88%"  label="Score moyen"    icon="🎯" accent="blue" />
            <StatWidget value="14j"  label="Série en cours" icon="🔥" accent="amber"
              trend={{ value: "Record battu!", up: true }} />
          </div>
        </Section>

        {/* ── COURSE CARDS ── */}
        <Section title="Cartes de cours">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CourseCard
              title="Fondations Euclidiennes"
              description="Les espaces vectoriels déterminent notre espace physique. Explorez les bases de la géométrie différentielle."
              level="lycee"
              subject="geometrie"
              difficulty="Intermédiaire"
              lessons={24}
              icon="△"
            />
            <CourseCard
              title="Limites & Dérivées"
              description="Maîtrisez les concepts du changement infinitésimal. De la définition formelle aux applications pratiques."
              level="lycee"
              subject="analyse"
              difficulty="Avancé"
              lessons={31}
              enrolled
              progress={68}
              icon="∂"
            />
            <CourseCard
              title="Calcul Intégral"
              description="Surfaces, volumes et accumulation totale. La dualité fondamentale du calcul."
              level="superieur"
              subject="analyse"
              difficulty="Avancé"
              lessons={28}
              enrolled
              progress={100}
              icon="∫"
            />
          </div>
        </Section>

        {/* ── MCQ ── */}
        <Section title="Question à choix multiples">
          <div className="max-w-2xl">
            <MCQCard
              question="Trouvez l'aire de la région délimitée par f(x) = x² - 2x et g(x) = x."
              correctId="B"
              options={[
                { id: "A", label: "A", text: "4,5 unités carrées" },
                { id: "B", label: "B", text: "3,0 unités carrées" },
                { id: "C", label: "C", text: "1,5 unités carrées" },
                { id: "D", label: "D", text: "6,25 unités carrées" },
              ]}
            />
          </div>
        </Section>

        {/* ── ACTIVITY GRID ── */}
        <Section title="Grille d'activité">
          <div
            className="inline-block p-5 rounded-[var(--am-radius-xl)]"
            style={{
              background: "var(--am-bg-card)",
              border: "1px solid var(--am-border)",
            }}
          >
            <p className="text-sm font-semibold text-[var(--am-text)] mb-4">
              Activité hebdomadaire — 12 semaines
            </p>
            <ActivityGrid weeks={12} />
          </div>
        </Section>

        {/* ── ACHIEVEMENTS ── */}
        <Section title="Badges & Accomplissements">
          <div className="flex flex-wrap gap-6">
            <AchievementBadge icon="📐" title="Guru Géomètre" description="Maîtriser 10 constructions" rarity="rare" unlocked />
            <AchievementBadge icon="∂"  title="Dérivé Maître"  description="100 dérivées sans erreur"  rarity="epic" unlocked />
            <AchievementBadge icon="🔥" title="Série 16j"      description="16 jours consécutifs"      rarity="legendary" unlocked />
            <AchievementBadge icon="∫"  title="Intégraliste"   description="Finir le module intégral"  rarity="common" unlocked />
            <AchievementBadge icon="π"  title="Pi Award"       description="Obtenir un score parfait"  rarity="legendary" unlocked={false} />
          </div>
        </Section>

        {/* ── TOGGLES ── */}
        <Section title="Interrupteurs">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-6 items-center">
              <Toggle label="Notifications de cours" />
              <Toggle label="Mises à jour" checked />
              <Toggle label="Rappels" size="sm" />
              <Toggle label="Désactivé" disabled />
            </div>
            <div>
              <p className="text-xs text-[var(--am-text-muted)] mb-3 font-mono">Sélecteur de thème</p>
              <ThemeToggle />
            </div>
          </div>
        </Section>

        {/* ── SIDEBAR ── */}
        <Section title="Barre latérale">
          <div
            className="rounded-[var(--am-radius-xl)] overflow-hidden"
            style={{ height: 420, border: "1px solid var(--am-border)", display: "flex" }}
          >
            <Sidebar userName="Alex Mercer" userLevel="Licence 1" currentCourse="Calcul II — Intégration multiple" />
            <div
              className="flex-1 p-8 flex items-center justify-center text-sm"
              style={{ color: "var(--am-text-muted)" }}
            >
              Zone de contenu principale
            </div>
          </div>
        </Section>

        {/* ── LEVEL SELECTOR ── */}
        <Section title="Sélecteur de niveau">
          <LevelSelector />
        </Section>

        {/* ── FEATURE CARDS ── */}
        <Section title="Cartes de fonctionnalités">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon="✏️"
              title="Exercices Interactifs"
              description="Des problèmes adaptatifs qui s'ajustent à votre niveau en temps réel."
              accent="green"
            />
            <FeatureCard
              icon="🎬"
              title="Cours en Vidéo"
              description="Des contenus exclusifs réalisés par des enseignants de qualité."
              accent="purple"
            />
            <FeatureCard
              icon="✓"
              title="Corrections Détaillées"
              description="Chaque erreur vous enseigne — pas seulement la bonne réponse."
              accent="blue"
            />
            <FeatureCard
              icon="📊"
              title="Suivi de Progression"
              description="Visualisez vos progrès et identifiez vos lacunes."
              accent="amber"
            />
          </div>
        </Section>

        {/* ── HERO ── */}
        <Section title="Section héro">
          <div
            className="rounded-[var(--am-radius-2xl)] overflow-hidden"
            style={{ border: "1px solid var(--am-border)" }}
          >
            <HeroSection />
          </div>
        </Section>

        {/* Footer */}
        <footer
          className="mt-8 pt-8 text-center text-xs"
          style={{
            color: "var(--am-text-muted)",
            borderTop: "1px solid var(--am-border-subtle)",
          }}
        >
          AlphaMath Design System · {new Date().getFullYear()} ·{" "}
          <span style={{ fontFamily: "var(--am-font-mono)" }}>DM Sans + DM Mono</span>
        </footer>
      </div>
    </div>
  );
}
