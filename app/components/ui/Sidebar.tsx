"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar } from "./Avatar";
import { signOut } from "../../actions/auth";

const NAV_ITEMS = [
  { label: "Tableau de bord", icon: "⊞",  href: "/dashboard" },
  { label: "Mes Cours",       icon: "📚", href: "/my-courses" },
  { label: "Exercices",       icon: "✏️", href: "/practice" },
  { label: "Tuteur IA",       icon: "🤖", href: "/tutor" },
  { label: "Classement",      icon: "🏆", href: "/leaderboard" },
  { label: "Analyses",        icon: "📊", href: "/analytics" },
  { label: "Paramètres",      icon: "⚙️", href: "/settings" },
];

interface SidebarProps {
  userName?: string;
  userLevel?: string;
  currentCourse?: string;
  isAdmin?: boolean;
  isTeacher?: boolean;
}

export function Sidebar({ userName = "Étudiant", userLevel, currentCourse, isAdmin, isTeacher }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  return (
    <aside
      className="flex flex-col h-full transition-all duration-300 flex-shrink-0"
      style={{
        width: collapsed ? "64px" : "220px",
        background: "var(--am-bg-raised)",
        borderRight: "1px solid var(--am-border-subtle)",
      }}
    >
      {/* User */}
      <div
        className="p-4 flex items-center gap-3 overflow-hidden"
        style={{ borderBottom: "1px solid var(--am-border-subtle)" }}
      >
        <Avatar name={userName} size="sm" className="flex-shrink-0" />
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[var(--am-text)] truncate">{userName}</p>
            <p className="text-xs text-[var(--am-text-muted)] truncate">
              {userLevel ?? "Niveau non défini"}
            </p>
          </div>
        )}
      </div>

      {/* Current Course */}
      {currentCourse && !collapsed && (
        <div
          className="mx-3 mt-3 px-3 py-2 rounded-[var(--am-radius-md)] text-xs"
          style={{
            background: "var(--am-green-muted)",
            border: "1px solid var(--am-green-dim)",
            color: "var(--am-green)",
          }}
        >
          <div className="font-semibold mb-0.5">En cours</div>
          <div className="truncate" style={{ color: "var(--am-text-secondary)" }}>{currentCourse}</div>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 p-2 flex flex-col gap-0.5 mt-2">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--am-radius-md)] transition-all overflow-hidden"
              style={{
                color: active ? "var(--am-green)" : "var(--am-text-secondary)",
                background: active ? "var(--am-green-muted)" : "transparent",
                border: active ? "1px solid var(--am-green-dim)" : "1px solid transparent",
              }}
            >
              <span className="text-base flex-shrink-0 leading-none">{item.icon}</span>
              {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Générateur d'évaluations (enseignant) */}
      {isTeacher && (
        <div className="p-2" style={{ borderTop: "1px solid var(--am-border-subtle)" }}>
          <a
            href="/evaluations"
            className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--am-radius-md)] transition-all overflow-hidden"
            style={{
              color: pathname.startsWith("/evaluations") ? "var(--am-purple)" : "var(--am-text-secondary)",
              background: pathname.startsWith("/evaluations") ? "var(--am-purple-muted)" : "transparent",
              border: pathname.startsWith("/evaluations") ? "1px solid var(--am-purple)" : "1px solid transparent",
            }}
          >
            <span className="text-base flex-shrink-0 leading-none">📝</span>
            {!collapsed && <span className="text-sm font-medium whitespace-nowrap">Générateur d&apos;évaluations</span>}
          </a>
        </div>
      )}

      {/* Administration */}
      {isAdmin && (
        <div className="p-2" style={{ borderTop: "1px solid var(--am-border-subtle)" }}>
          <a
            href="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--am-radius-md)] transition-all overflow-hidden"
            style={{
              color: pathname.startsWith("/admin") ? "var(--am-amber)" : "var(--am-text-secondary)",
              background: pathname.startsWith("/admin") ? "var(--am-amber-muted)" : "transparent",
              border: pathname.startsWith("/admin") ? "1px solid var(--am-amber)" : "1px solid transparent",
            }}
          >
            <span className="text-base flex-shrink-0 leading-none">🛠️</span>
            {!collapsed && <span className="text-sm font-medium whitespace-nowrap">Backoffice</span>}
          </a>
        </div>
      )}

      {/* Bottom */}
      <div className="p-2 flex flex-col gap-0.5" style={{ borderTop: "1px solid var(--am-border-subtle)" }}>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--am-radius-md)] transition-all overflow-hidden"
          style={{ color: "var(--am-text-muted)" }}
        >
          <span className="text-base flex-shrink-0">❓</span>
          {!collapsed && <span className="text-sm font-medium whitespace-nowrap">Centre d'aide</span>}
        </a>

        <form action={signOut}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[var(--am-radius-md)] transition-all overflow-hidden hover:bg-red-500/10"
            style={{ color: "#f87171" }}
          >
            <span className="text-base flex-shrink-0">↩</span>
            {!collapsed && <span className="text-sm font-medium whitespace-nowrap">Déconnexion</span>}
          </button>
        </form>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center gap-3 px-3 py-2.5 rounded-[var(--am-radius-md)] transition-all mt-1"
          style={{ color: "var(--am-text-muted)" }}
        >
          <span className="text-base">{collapsed ? "→" : "←"}</span>
          {!collapsed && <span className="text-sm font-medium">Réduire</span>}
        </button>
      </div>
    </aside>
  );
}
