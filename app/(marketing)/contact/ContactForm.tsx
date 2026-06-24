"use client";
import React, { useActionState } from "react";
import { Mail, User, Phone } from "lucide-react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { submitContactRequest } from "../../actions/contact";

const SUBJECTS = [
  { id: "inscription", label: "Inscription & abonnements" },
  { id: "etablissement", label: "Offre établissement / groupe" },
  { id: "technique", label: "Problème technique" },
  { id: "autre", label: "Autre demande" },
];

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactRequest, undefined);
  const [selectedSubject, setSelectedSubject] = React.useState(SUBJECTS[0].id);

  if (state?.success) {
    return (
      <div
        className="text-center px-6 py-12 rounded-[var(--am-radius-xl)]"
        style={{ background: "var(--am-green-muted)", border: "1px solid var(--am-green-dim)" }}
      >
        <p className="text-2xl mb-2">✓</p>
        <p className="font-semibold text-[var(--am-text)] mb-1">Merci, votre message a bien été envoyé.</p>
        <p className="text-sm text-[var(--am-text-secondary)]">
          Un conseiller AlphaMath vous répondra par e-mail dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      <Input label="Nom" name="name" icon={<User size={16} />} placeholder="Votre nom" required minLength={2} />
      <Input
        label="E-mail"
        name="email"
        type="email"
        icon={<Mail size={16} />}
        placeholder="vous@exemple.com"
        required
      />
      <Input
        label="Téléphone (facultatif)"
        name="phone"
        type="tel"
        icon={<Phone size={16} />}
        placeholder="06 12 34 56 78"
      />

      <div>
        <p className="text-sm font-medium mb-3" style={{ color: "var(--am-text-secondary)" }}>
          Sujet
        </p>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSubject(s.id)}
              className="px-3 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all"
              style={{
                background: selectedSubject === s.id ? "var(--am-purple-muted)" : "var(--am-bg-card)",
                color: selectedSubject === s.id ? "var(--am-purple)" : "var(--am-text-secondary)",
                border: `1px solid ${selectedSubject === s.id ? "var(--am-purple)" : "var(--am-border)"}`,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="subject" value={selectedSubject} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--am-text-secondary)" }}>
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          placeholder="Décrivez votre demande..."
          className="w-full rounded-[var(--am-radius-lg)] text-sm outline-none transition-all p-3 resize-none"
          style={{
            background: "var(--am-bg-raised)",
            border: "1px solid var(--am-border)",
            color: "var(--am-text)",
          }}
        />
      </div>

      {state?.error && (
        <p
          className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
          style={{ color: "#f87171", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
        >
          {state.error}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" loading={isPending} full>
        Envoyer ma demande
      </Button>
    </form>
  );
}
