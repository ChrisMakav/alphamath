import React from "react";

interface VideoPlayerProps {
  url: string;
  title?: string;
  className?: string;
}

export function VideoPlayer({ url, title = "Vidéo pédagogique", className = "" }: VideoPlayerProps) {
  return (
    <div
      className={`rounded-[var(--am-radius-xl)] overflow-hidden ${className}`}
      style={{ border: "1px solid var(--am-border)" }}
    >
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ background: "var(--am-bg)" }}
        />
      </div>
    </div>
  );
}

export function VideoPlaceholder({ durationMinutes, className = "" }: { durationMinutes: number; className?: string }) {
  return (
    <div
      className={`rounded-[var(--am-radius-xl)] overflow-hidden flex items-center justify-center ${className}`}
      style={{
        background: "var(--am-bg-elevated)",
        border: "1px solid var(--am-border)",
        aspectRatio: "16/9",
      }}
    >
      <div className="flex flex-col items-center gap-3 text-center px-6">
        <div
          className="size-16 rounded-full flex items-center justify-center text-2xl"
          style={{ background: "var(--am-bg-overlay)", border: "2px solid var(--am-border-strong)" }}
        >
          ▶
        </div>
        <p className="text-sm text-[var(--am-text-secondary)]">Vidéo disponible dans la version Premium</p>
        <p className="text-xs text-[var(--am-text-muted)]">Durée : {durationMinutes} min</p>
      </div>
    </div>
  );
}
