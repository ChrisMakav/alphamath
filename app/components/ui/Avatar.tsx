import React from "react";

interface AvatarProps {
  name?: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl";
  level?: string;
  className?: string;
}

const sizes = {
  sm:  { ring: "size-8",  text: "text-xs",  indicator: "text-[10px]" },
  md:  { ring: "size-10", text: "text-sm",  indicator: "text-xs" },
  lg:  { ring: "size-14", text: "text-lg",  indicator: "text-xs" },
  xl:  { ring: "size-20", text: "text-2xl", indicator: "text-sm" },
};

function initials(name = "?"): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export function Avatar({ name, src, size = "md", level, className = "" }: AvatarProps) {
  const s = sizes[size];
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className={`${s.ring} rounded-full flex items-center justify-center overflow-hidden relative flex-shrink-0`}
        style={{
          background: "linear-gradient(135deg, var(--am-purple-muted), var(--am-green-muted))",
          border: "2px solid var(--am-border-strong)",
          boxShadow: "0 0 0 1px var(--am-border-subtle)",
        }}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span
            className={`${s.text} font-bold select-none`}
            style={{ color: "var(--am-green)" }}
          >
            {initials(name)}
          </span>
        )}
      </div>
      {level && (
        <span
          className={`${s.indicator} font-semibold px-2 py-0.5 rounded-full`}
          style={{
            color: "var(--am-purple)",
            background: "var(--am-purple-muted)",
            border: "1px solid rgba(139,92,246,0.2)",
          }}
        >
          {level}
        </span>
      )}
    </div>
  );
}
