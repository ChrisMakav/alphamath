import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "../../components/ui/Button";

interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  cta: string;
  href: string;
  highlight?: boolean;
  features: { label: string; included: boolean }[];
}

const PLANS: Plan[] = [
  {
    name: "Gratuit",
    price: "0€",
    description: "Pour découvrir la plateforme et ses premiers cours.",
    cta: "Commencer gratuitement",
    href: "/register",
    features: [
      { label: "Accès aux cours et exercices gratuits", included: true },
      { label: "Suivi de progression de base", included: true },
      { label: "Toutes les leçons et exercices Premium", included: false },
      { label: "Tuteur IA illimité", included: false },
      { label: "Téléchargement des corrigés en PDF", included: false },
    ],
  },
  {
    name: "Premium",
    price: "9,99€",
    period: "/mois",
    description: "L'accès complet à tous les niveaux, du collège au supérieur.",
    cta: "Souscrire à Premium",
    href: "/register",
    highlight: true,
    features: [
      { label: "Accès illimité à tous les cours et exercices", included: true },
      { label: "Suivi de progression détaillé et statistiques", included: true },
      { label: "Tous les niveaux, du collège au supérieur", included: true },
      { label: "Tuteur IA illimité", included: true },
      { label: "Téléchargement des corrigés en PDF", included: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-purple)" }}>
          TARIFS
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-[var(--am-text)] mb-4">
          Choisissez votre offre
        </h1>
        <p className="text-[var(--am-text-secondary)] max-w-xl mx-auto">
          Débloquez l'ensemble des cours, exercices et outils AlphaMath avec un abonnement Premium,
          sans engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="rounded-[var(--am-radius-2xl)] p-8 flex flex-col"
            style={{
              background: plan.highlight
                ? "linear-gradient(135deg, var(--am-purple-muted), var(--am-bg-card))"
                : "var(--am-bg-card)",
              border: plan.highlight ? "1px solid var(--am-purple)" : "1px solid var(--am-border)",
            }}
          >
            <h2 className="text-xl font-bold text-[var(--am-text)] mb-1">{plan.name}</h2>
            <p className="text-sm text-[var(--am-text-secondary)] mb-6">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-black text-[var(--am-text)]">{plan.price}</span>
              {plan.period && (
                <span className="text-[var(--am-text-secondary)] text-sm">{plan.period}</span>
              )}
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f.label} className="flex items-start gap-2.5 text-sm">
                  {f.included ? (
                    <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--am-green)" }} />
                  ) : (
                    <X size={16} className="mt-0.5 flex-shrink-0 text-[var(--am-text-muted)]" />
                  )}
                  <span className={f.included ? "text-[var(--am-text)]" : "text-[var(--am-text-muted)]"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              href={plan.href}
              variant={plan.highlight ? "secondary" : "outline"}
              size="lg"
              full
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-[var(--am-text-muted)] mt-10">
        Abonnement sans engagement, annulable à tout moment.
      </p>
    </div>
  );
}
