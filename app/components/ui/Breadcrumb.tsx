import React from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem { label: string; href?: string }

export function Breadcrumb({ items, className = "" }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav className={`flex items-center gap-1 flex-wrap ${className}`} aria-label="Fil d'Ariane">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <ChevronRight size={12} style={{ color: "var(--am-text-muted)", flexShrink: 0 }} />
          )}
          {item.href ? (
            <a
              href={item.href}
              className="text-xs font-medium transition-colors hover:text-[var(--am-green)]"
              style={{ color: i === items.length - 1 ? "var(--am-text-secondary)" : "var(--am-text-muted)" }}
            >
              {item.label}
            </a>
          ) : (
            <span
              className="text-xs font-medium"
              style={{ color: i === items.length - 1 ? "var(--am-text-secondary)" : "var(--am-text-muted)" }}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
