"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Cours",      href: "/courses" },
  { label: "Annales",    href: "/annales" },
  { label: "Pratique",   href: "/practice" },
  { label: "Formules",   href: "/formulas" },
];

interface NavbarProps {
  isAuthenticated?: boolean;
}

export function Navbar({ isAuthenticated = false }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "var(--am-nav-bg)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--am-border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <span
            className="size-7 rounded-lg flex items-center justify-center text-sm font-black"
            style={{ background: "var(--am-green)", color: "var(--am-text-inverse)" }}
          >
            α
          </span>
          <span className="font-bold text-base text-[var(--am-text)] tracking-tight">AlphaMath</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-[var(--am-radius-md)] text-sm font-medium text-[var(--am-text-secondary)] hover:text-[var(--am-text)] hover:bg-[var(--am-bg-elevated)] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {isAuthenticated ? (
            <a href="/dashboard"><Button variant="outline" size="sm">Tableau de bord</Button></a>
          ) : (
            <>
              <a href="/login"><Button variant="ghost" size="sm">Connexion</Button></a>
              <a href="/register"><Button variant="primary" size="sm">S'inscrire</Button></a>
            </>
          )}
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg text-[var(--am-text-secondary)] hover:text-[var(--am-text)] hover:bg-[var(--am-bg-elevated)]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <>
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                  <line x1="2" y1="13" x2="16" y2="13" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--am-border-subtle)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded-[var(--am-radius-md)] text-sm font-medium text-[var(--am-text-secondary)] hover:text-[var(--am-text)] hover:bg-[var(--am-bg-elevated)] transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            {isAuthenticated ? (
              <a href="/dashboard" className="flex-1"><Button variant="outline" size="sm" full>Tableau de bord</Button></a>
            ) : (
              <>
                <a href="/login" className="flex-1"><Button variant="ghost" size="sm" full>Connexion</Button></a>
                <a href="/register" className="flex-1"><Button variant="primary" size="sm" full>S'inscrire</Button></a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
