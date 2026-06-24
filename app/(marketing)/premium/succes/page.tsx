import React from "react";
import { Button } from "../../../components/ui/Button";

export default function PremiumSuccessPage() {
  return (
    <div className="max-w-lg mx-auto px-6 py-24 text-center">
      <div
        className="size-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
        style={{ background: "var(--am-green-muted)", border: "1px solid var(--am-green-dim)" }}
      >
        ✓
      </div>
      <h1 className="text-2xl font-black text-[var(--am-text)] mb-3">Paiement enregistré 🎉</h1>
      <p className="text-sm text-[var(--am-text-secondary)] mb-2">
        Merci pour ta souscription à AlphaMath Premium.
      </p>
      <p className="text-xs text-[var(--am-text-muted)] mb-8">
        Si tu as payé par carte, ton accès Premium est actif immédiatement. Si tu as choisi le virement
        (prélèvement SEPA), la confirmation de la banque peut prendre quelques jours ouvrés avant
        l&apos;activation de ton compte.
      </p>
      <Button href="/dashboard" variant="primary" size="lg">
        Aller au tableau de bord
      </Button>
    </div>
  );
}
