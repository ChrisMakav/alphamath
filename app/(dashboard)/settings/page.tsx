import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { SettingsForm } from "./SettingsForm";
import { signOut } from "../../actions/auth";
import type { Database } from "../../../lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const profile = profileRaw as Profile | null;
  const name = profile?.name ?? user.email?.split("@")[0] ?? "";
  const level = profile?.school_level ?? null;
  const role = profile?.role ?? "student";

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[var(--am-text)]">Paramètres</h1>
        <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>
          Gérez votre profil et vos préférences.
        </p>
      </div>

      {/* Profile settings */}
      <section
        className="rounded-[var(--am-radius-xl)] p-6 mb-6"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <h2 className="text-base font-bold text-[var(--am-text)] mb-5">Informations personnelles</h2>
        <SettingsForm initialName={name} initialLevel={level} initialRole={role} isAdmin={role === "admin"} />
      </section>

      {/* Account */}
      <section
        className="rounded-[var(--am-radius-xl)] p-6 mb-6"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <h2 className="text-base font-bold text-[var(--am-text)] mb-1">Compte</h2>
        <p className="text-sm mb-5" style={{ color: "var(--am-text-muted)" }}>
          Connecté avec <strong style={{ color: "var(--am-text-secondary)" }}>{user.email}</strong>
        </p>
        <form action={signOut}>
          <button
            type="submit"
            className="px-4 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all hover:opacity-80"
            style={{
              background: "rgba(239,68,68,0.1)",
              color: "#f87171",
              border: "1px solid rgba(239,68,68,0.25)",
            }}
          >
            ↩ Se déconnecter
          </button>
        </form>
      </section>

      {/* Notifications (visual only) */}
      <section
        className="rounded-[var(--am-radius-xl)] p-6"
        style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
      >
        <h2 className="text-base font-bold text-[var(--am-text)] mb-5">Notifications</h2>
        <div className="flex flex-col gap-4">
          {[
            { label: "Rappels quotidiens",           desc: "Reçois un rappel pour maintenir ta série", defaultOn: true },
            { label: "Nouveaux cours disponibles",   desc: "Sois informé dès qu'un cours est ajouté",  defaultOn: true },
            { label: "Résumé hebdomadaire",          desc: "Ton bilan d'apprentissage chaque lundi",   defaultOn: false },
          ].map((n) => (
            <label key={n.label} className="flex items-center justify-between gap-4 cursor-pointer">
              <div>
                <p className="text-sm font-medium text-[var(--am-text)]">{n.label}</p>
                <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>{n.desc}</p>
              </div>
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  defaultChecked={n.defaultOn}
                  className="sr-only peer"
                  readOnly
                />
                <div
                  className="w-10 h-5 rounded-full transition-all peer-checked:opacity-100 opacity-40"
                  style={{ background: "var(--am-green)", border: "1px solid var(--am-green-dim)" }}
                />
                <div
                  className="absolute top-0.5 left-0.5 size-4 rounded-full transition-all peer-checked:translate-x-5"
                  style={{ background: "var(--am-text-inverse)" }}
                />
              </div>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
