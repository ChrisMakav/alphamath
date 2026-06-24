"use client";
import React, { useActionState } from "react";
import { setUserRole } from "../../actions/admin";

const ROLE_LABELS: Record<string, string> = {
  student: "Élève",
  teacher: "Enseignant",
  parent: "Parent",
  admin: "Administrateur",
};

interface Props {
  userId: string;
  currentRole: string;
  disabled?: boolean;
}

export function RoleSelect({ userId, currentRole, disabled }: Props) {
  const [state, action, isPending] = useActionState(setUserRole, undefined);

  return (
    <form action={action} className="flex items-center gap-2">
      <input type="hidden" name="userId" value={userId} />
      <select
        name="role"
        defaultValue={currentRole}
        disabled={disabled || isPending}
        onChange={(e) => e.target.form?.requestSubmit()}
        className="text-xs font-medium px-2 py-1.5 rounded-[var(--am-radius-md)]"
        style={{
          background: "var(--am-bg-elevated)",
          border: "1px solid var(--am-border)",
          color: "var(--am-text)",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {Object.entries(ROLE_LABELS).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
      {state?.error && (
        <span className="text-xs" style={{ color: "#f87171" }}>{state.error}</span>
      )}
    </form>
  );
}
