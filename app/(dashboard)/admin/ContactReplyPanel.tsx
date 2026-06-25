"use client";
import React, { useActionState, useState } from "react";
import { replyToContactRequest } from "../../actions/admin";

interface Props {
  id: string;
  adminReply: string | null;
  repliedAt: string | null;
}

export function ContactReplyPanel({ id, adminReply, repliedAt }: Props) {
  const [open, setOpen] = useState(false);
  const [state, action, isPending] = useActionState(replyToContactRequest, undefined);
  const justSent = state !== undefined && !state.error && !isPending;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-xs font-semibold px-2.5 py-1.5 rounded-[var(--am-radius-md)]"
        style={{
          background: "var(--am-blue-muted)",
          border: "1px solid var(--am-blue)",
          color: "var(--am-blue)",
        }}
      >
        {open ? "Fermer" : adminReply ? "Répondre à nouveau" : "Répondre"}
      </button>

      {open && (
        <div className="mt-3 w-72">
          {adminReply && (
            <div
              className="text-xs rounded-[var(--am-radius-md)] p-2.5 mb-2"
              style={{ background: "var(--am-bg-elevated)", border: "1px solid var(--am-border)", color: "var(--am-text-secondary)" }}
            >
              <p className="mb-1" style={{ color: "var(--am-text-muted)" }}>
                Réponse envoyée le {repliedAt ? new Date(repliedAt).toLocaleDateString("fr-FR") : "—"} :
              </p>
              <p className="whitespace-pre-wrap">{adminReply}</p>
            </div>
          )}
          {justSent && (
            <p className="text-xs mb-2" style={{ color: "var(--am-green)" }}>
              Réponse envoyée avec succès ✓
            </p>
          )}
          <form action={action} className="flex flex-col gap-2">
            <input type="hidden" name="id" value={id} />
            <textarea
              key={justSent ? "sent" : "draft"}
              name="reply"
              rows={4}
              required
              minLength={3}
              placeholder="Votre réponse à envoyer par e-mail..."
              className="w-full text-sm outline-none transition-all p-2.5 resize-none rounded-[var(--am-radius-md)]"
              style={{ background: "var(--am-bg-raised)", border: "1px solid var(--am-border)", color: "var(--am-text)" }}
            />
            {state?.error && <p className="text-xs" style={{ color: "#f87171" }}>{state.error}</p>}
            <button
              type="submit"
              disabled={isPending}
              className="text-xs font-semibold px-3 py-2 rounded-[var(--am-radius-md)] self-start disabled:opacity-60"
              style={{ background: "var(--am-green)", color: "#08090e" }}
            >
              {isPending ? "Envoi..." : "Envoyer la réponse"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
