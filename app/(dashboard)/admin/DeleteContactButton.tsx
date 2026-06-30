"use client";
import React, { useActionState, useState } from "react";
import { deleteContactRequest } from "../../actions/admin";

export function DeleteContactButton({ id }: { id: string }) {
  const [confirming, setConfirming] = useState(false);
  const [state, action, isPending] = useActionState(deleteContactRequest, undefined);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="text-xs font-semibold px-2.5 py-1.5 rounded-[var(--am-radius-md)] transition-colors"
        style={{
          background: "rgba(239,68,68,0.08)",
          border: "1px solid rgba(239,68,68,0.3)",
          color: "#f87171",
        }}
      >
        Supprimer
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>Confirmer ?</span>
      <form action={action}>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          disabled={isPending}
          className="text-xs font-semibold px-2 py-1 rounded-[var(--am-radius-md)] disabled:opacity-60"
          style={{ background: "#ef4444", color: "#fff" }}
        >
          {isPending ? "…" : "Oui"}
        </button>
      </form>
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="text-xs px-2 py-1 rounded-[var(--am-radius-md)]"
        style={{ background: "var(--am-bg-elevated)", color: "var(--am-text-muted)", border: "1px solid var(--am-border)" }}
      >
        Non
      </button>
      {state?.error && <p className="text-xs" style={{ color: "#f87171" }}>{state.error}</p>}
    </div>
  );
}
