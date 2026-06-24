import React from "react";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[var(--am-text)] mb-3">Contacter un conseiller</h1>
        <p className="text-[var(--am-text-secondary)]">
          Une question sur nos offres, votre établissement ou un souci technique ? Écrivez-nous, nous vous
          répondons rapidement.
        </p>
      </div>
      <div
        className="p-6 sm:p-8 rounded-[var(--am-radius-xl)]"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <ContactForm />
      </div>
    </div>
  );
}
