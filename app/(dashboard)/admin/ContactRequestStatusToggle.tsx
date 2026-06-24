"use client";
import React, { useActionState } from "react";
import { setContactRequestStatus } from "../../actions/admin";

const STATUS_LABELS: Record<string, string> = {
  new: "Nouveau",
  treated: "Traité",
};

interface Props {
  id: string;
  currentStatus: string;
}

export function ContactRequestStatusToggle({ id, currentStatus }: Props) {
  const [state, action, isPending] = useActionState(setContactRequestStatus, undefined);

  return (
    <form action={action} className="flex items-center gap-2">
      <input type="hidden" name="id" value={id} />
      <select
        name="status"
        defaultValue={currentStatus}
        disabled={isPending}
        onChange={(e) => e.target.form?.requestSubmit()}
        className="text-xs font-medium px-2 py-1.5 rounded-[var(--am-radius-md)]"
        style={{
          background: currentStatus === "new" ? "var(--am-amber-muted)" : "var(--am-green-muted)",
          border: `1px solid ${currentStatus === "new" ? "var(--am-amber)" : "var(--am-green-dim)"}`,
          color: currentStatus === "new" ? "var(--am-amber)" : "var(--am-green)",
        }}
      >
        {Object.entries(STATUS_LABELS).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
      {state?.error && (
        <span className="text-xs" style={{ color: "#f87171" }}>{state.error}</span>
      )}
    </form>
  );
}
