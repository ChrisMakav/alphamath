"use client";
import React, { useState } from "react";
import { CONTACT_SUBJECT_LABELS } from "../../../lib/contact";

interface Props {
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  createdAt: string;
  adminReply: string | null;
  repliedAt: string | null;
}

export function ContactMessageModal({ name, email, phone, subject, message, createdAt, adminReply, repliedAt }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-left group w-full"
      >
        <p className="line-clamp-2 text-[var(--am-text-secondary)] group-hover:text-[var(--am-text)] transition-colors">
          {message}
        </p>
        <span className="text-xs mt-0.5 block" style={{ color: "var(--am-blue)" }}>
          Lire le message →
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="w-full max-w-lg rounded-[var(--am-radius-xl)] shadow-2xl overflow-hidden"
            style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
          >
            {/* Header */}
            <div
              className="px-6 py-4 flex items-start justify-between gap-4"
              style={{ borderBottom: "1px solid var(--am-border-subtle)" }}
            >
              <div>
                <p className="font-bold text-[var(--am-text)]">{name}</p>
                <p className="text-sm" style={{ color: "var(--am-text-muted)" }}>{email}</p>
                {phone && <p className="text-sm" style={{ color: "var(--am-text-muted)" }}>{phone}</p>}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-lg leading-none flex-shrink-0"
                style={{ color: "var(--am-text-muted)" }}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "var(--am-bg-elevated)", color: "var(--am-text-secondary)", border: "1px solid var(--am-border)" }}
                >
                  {CONTACT_SUBJECT_LABELS[subject] ?? subject}
                </span>
                <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>
                  {new Date(createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>

              <div
                className="rounded-[var(--am-radius-lg)] p-4 text-sm whitespace-pre-wrap leading-relaxed"
                style={{ background: "var(--am-bg-elevated)", color: "var(--am-text)", border: "1px solid var(--am-border-subtle)" }}
              >
                {message}
              </div>

              {adminReply && (
                <div>
                  <p className="text-xs font-semibold mb-2" style={{ color: "var(--am-text-muted)" }}>
                    Réponse envoyée le {repliedAt ? new Date(repliedAt).toLocaleDateString("fr-FR") : "—"} :
                  </p>
                  <div
                    className="rounded-[var(--am-radius-lg)] p-4 text-sm whitespace-pre-wrap leading-relaxed"
                    style={{ background: "var(--am-green-muted)", color: "var(--am-text)", border: "1px solid var(--am-green)", opacity: 0.9 }}
                  >
                    {adminReply}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              className="px-6 py-4 flex justify-end"
              style={{ borderTop: "1px solid var(--am-border-subtle)" }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm font-medium px-4 py-2 rounded-[var(--am-radius-md)]"
                style={{ background: "var(--am-bg-elevated)", color: "var(--am-text-secondary)", border: "1px solid var(--am-border)" }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
