"use client";
import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({ value, onChange, placeholder = "Rechercher...", className = "" }: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "var(--am-text-muted)" }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 h-10 rounded-[var(--am-radius-lg)] text-sm outline-none transition-all"
        style={{
          background: "var(--am-bg-raised)",
          border: "1px solid var(--am-border)",
          color: "var(--am-text)",
          fontFamily: "var(--am-font-sans)",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--am-green-dim)";
          e.target.style.boxShadow = "var(--am-green-glow-sm)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "var(--am-border)";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
