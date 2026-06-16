"use client";
import React, { useState } from "react";
import { MathContent } from "../../components/ui/MathContent";

type Tab = "college" | "lycee" | "superieur";

interface FormulaCard {
  title: string;
  formula: string;
  description?: string;
  tag?: string;
}

interface Section {
  heading: string;
  cards: FormulaCard[];
}

const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: "college",    label: "Collège",    emoji: "📐" },
  { id: "lycee",      label: "Lycée",      emoji: "📊" },
  { id: "superieur",  label: "Supérieur",  emoji: "∫" },
];

const FORMULAS: Record<Tab, Section[]> = {
  college: [
    {
      heading: "Géométrie plane",
      cards: [
        { title: "Théorème de Pythagore", formula: "$$a^2 + b^2 = c^2$$", description: "Triangle rectangle : $c$ est l'hypoténuse", tag: "4ème" },
        { title: "Réciproque de Pythagore", formula: "$$AB^2 = AC^2 + BC^2 \\Rightarrow \\angle C = 90°$$", description: "Vérifie qu'un triangle est rectangle", tag: "4ème" },
        { title: "Théorème de Thalès", formula: "$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$", description: "Droites parallèles et triangles", tag: "3ème" },
        { title: "Trigonométrie", formula: "$$\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}, \\quad \\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}, \\quad \\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$$", tag: "3ème" },
      ],
    },
    {
      heading: "Algèbre & Calcul",
      cards: [
        { title: "Développements remarquables", formula: "$$(a+b)^2 = a^2 + 2ab + b^2$$\n$$(a-b)^2 = a^2 - 2ab + b^2$$\n$$(a+b)(a-b) = a^2 - b^2$$", tag: "3ème" },
        { title: "Puissances", formula: "$$a^m \\times a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{mn}$$", tag: "4ème" },
        { title: "Aires et volumes", formula: "$$\\text{Aire disque} = \\pi r^2, \\quad \\text{Périmètre} = 2\\pi r$$\n$$\\text{Vol sphère} = \\frac{4}{3}\\pi r^3, \\quad \\text{Vol cône} = \\frac{1}{3}\\pi r^2 h$$", tag: "5ème–4ème" },
        { title: "Proportionnalité", formula: "$$\\frac{a}{b} = \\frac{c}{d} \\Leftrightarrow ad = bc$$", description: "Produit en croix", tag: "6ème" },
      ],
    },
  ],
  lycee: [
    {
      heading: "Dérivées",
      cards: [
        { title: "Dérivées usuelles", formula: "$$\\begin{array}{ll}(x^n)' = nx^{n-1} & (e^x)' = e^x \\\\ (\\ln x)' = \\dfrac{1}{x} & (\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}} \\\\ (\\sin x)' = \\cos x & (\\cos x)' = -\\sin x\\end{array}$$", tag: "1ère" },
        { title: "Règles de dérivation", formula: "$$(u+v)' = u'+v'$$\n$$(uv)' = u'v + uv'$$\n$$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$$\n$$(f\\circ g)' = g' \\cdot (f' \\circ g)$$", tag: "1ère" },
      ],
    },
    {
      heading: "Suites",
      cards: [
        { title: "Suite arithmétique", formula: "$$u_n = u_0 + n \\cdot r$$\n$$S_n = \\sum_{k=0}^{n} u_k = (n+1) \\cdot \\frac{u_0 + u_n}{2}$$", description: "Raison $r$, premier terme $u_0$", tag: "1ère" },
        { title: "Suite géométrique", formula: "$$u_n = u_0 \\cdot q^n$$\n$$S_n = u_0 \\cdot \\frac{1-q^{n+1}}{1-q} \\quad (q \\neq 1)$$", description: "Raison $q \\neq 0$, premier terme $u_0$", tag: "1ère" },
      ],
    },
    {
      heading: "Intégration",
      cards: [
        { title: "Primitives usuelles", formula: "$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$\n$$\\int e^x\\,dx = e^x + C, \\quad \\int \\frac{1}{x}\\,dx = \\ln|x| + C$$\n$$\\int \\cos x\\,dx = \\sin x + C, \\quad \\int \\sin x\\,dx = -\\cos x + C$$", tag: "Terminale" },
        { title: "Intégrale définie", formula: "$$\\int_a^b f(x)\\,dx = \\big[F(x)\\big]_a^b = F(b) - F(a)$$", description: "IPP : $\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'$", tag: "Terminale" },
      ],
    },
    {
      heading: "Trigonométrie & Exponentielle",
      cards: [
        { title: "Identités trigonométriques", formula: "$$\\cos^2\\theta + \\sin^2\\theta = 1$$\n$$\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$$\n$$\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$$", tag: "Terminale" },
        { title: "Logarithme & Exponentielle", formula: "$$\\ln(ab) = \\ln a + \\ln b, \\quad \\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$$\n$$\\ln(a^n) = n\\ln a, \\quad e^{a+b} = e^a \\cdot e^b$$", tag: "Terminale" },
        { title: "Probabilités (loi normale)", formula: "$$X \\sim \\mathcal{N}(\\mu,\\sigma^2) \\Rightarrow P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}95$$", tag: "Terminale" },
      ],
    },
  ],
  superieur: [
    {
      heading: "Analyse",
      cards: [
        { title: "Limite — définition (ε-δ)", formula: "$$\\lim_{x \\to a} f(x) = L \\iff \\forall \\varepsilon > 0,\\; \\exists \\delta > 0,\\; |x-a| < \\delta \\Rightarrow |f(x)-L| < \\varepsilon$$", tag: "L1" },
        { title: "Règle de L'Hôpital", formula: "$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$", description: "Si $f(a) = g(a) = 0$ ou $\\pm\\infty$", tag: "L1" },
        { title: "Formule de Taylor-Young", formula: "$$f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + o\\big((x-a)^n\\big)$$", tag: "L2" },
        { title: "Développements limités usuels (en 0)", formula: "$$e^x = 1 + x + \\frac{x^2}{2!} + \\cdots + \\frac{x^n}{n!} + o(x^n)$$\n$$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots + o(x^n)$$\n$$\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^6)$$", tag: "L1" },
      ],
    },
    {
      heading: "Algèbre linéaire",
      cards: [
        { title: "Déterminant 2×2", formula: "$$\\det\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} = ad - bc$$", tag: "L1" },
        { title: "Déterminant 3×3 (Sarrus)", formula: "$$\\det\\begin{pmatrix}a & b & c \\\\ d & e & f \\\\ g & h & i\\end{pmatrix} = aei + bfg + cdh - ceg - afh - bdi$$", tag: "L1" },
        { title: "Valeurs propres", formula: "$$A\\mathbf{v} = \\lambda\\mathbf{v} \\iff \\det(A - \\lambda I) = 0$$", description: "Polynôme caractéristique", tag: "L2" },
        { title: "Inverse d'une matrice 2×2", formula: "$$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$$", description: "Si $\\det A \\neq 0$", tag: "L1" },
      ],
    },
    {
      heading: "Probabilités",
      cards: [
        { title: "Loi normale", formula: "$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$$", tag: "L2" },
        { title: "Théorème central limite", formula: "$$\\bar{X}_n \\xrightarrow{d} \\mathcal{N}\\!\\left(\\mu,\\frac{\\sigma^2}{n}\\right) \\quad (n \\to \\infty)$$", tag: "L2" },
        { title: "Intervalle de confiance (95%)", formula: "$$IC_{95\\%} = \\left[\\bar{x} - 1{,}96\\frac{\\sigma}{\\sqrt{n}},\\; \\bar{x} + 1{,}96\\frac{\\sigma}{\\sqrt{n}}\\right]$$", tag: "L2" },
        { title: "Formule de Bayes", formula: "$$P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$$", tag: "L1" },
      ],
    },
  ],
};

function Card({ card }: { card: FormulaCard }) {
  return (
    <div
      className="rounded-[var(--am-radius-xl)] p-5 flex flex-col gap-3 h-full"
      style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-[var(--am-text)] leading-snug">{card.title}</h3>
        {card.tag && (
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
            style={{
              background: "var(--am-purple-muted)",
              color: "var(--am-purple)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            {card.tag}
          </span>
        )}
      </div>
      <div
        className="rounded-[var(--am-radius-md)] px-3 py-2 overflow-x-auto"
        style={{ background: "var(--am-bg-elevated)", border: "1px solid var(--am-border-subtle)" }}
      >
        <MathContent content={card.formula} />
      </div>
      {card.description && (
        <p className="text-xs leading-relaxed" style={{ color: "var(--am-text-muted)" }}>
          {card.description}
        </p>
      )}
    </div>
  );
}

export default function FormulasPage() {
  const [activeTab, setActiveTab] = useState<Tab>("college");
  const sections = FORMULAS[activeTab];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-[var(--am-text)] mb-3">
          Fiche de{" "}
          <span style={{ color: "var(--am-green)" }}>formules</span>
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "var(--am-text-secondary)" }}>
          Toutes les formules essentielles, du collège à la licence. Référence rapide pour vos révisions.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex gap-2 p-1.5 rounded-[var(--am-radius-xl)] mb-10 w-fit mx-auto"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-[var(--am-radius-lg)] text-sm font-semibold transition-all"
            style={{
              background: activeTab === tab.id ? "var(--am-green)" : "transparent",
              color: activeTab === tab.id ? "var(--am-text-inverse)" : "var(--am-text-muted)",
              boxShadow: activeTab === tab.id ? "0 0 16px rgba(74,254,138,0.3)" : "none",
            }}
          >
            <span>{tab.emoji}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2
              className="text-base font-bold mb-5 pb-2"
              style={{
                color: "var(--am-text)",
                borderBottom: "1px solid var(--am-border)",
              }}
            >
              {section.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.cards.map((card) => (
                <Card key={card.title} card={card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
