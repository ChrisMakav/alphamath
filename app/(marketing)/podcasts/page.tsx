import React from "react";
import { PODCAST_EPISODES } from "../../../lib/podcasts-data";

export default function PodcastsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-purple)" }}>
          PODCASTS
        </p>
        <h1 className="text-4xl font-black text-[var(--am-text)] mb-3">AlphaMath, le podcast</h1>
        <p className="text-[var(--am-text-secondary)] max-w-xl mb-3">
          Des discussions de fond sur l&apos;apprentissage des mathématiques : méthode, examens, anxiété
          scolaire. Pour l&apos;instant disponible en version écrite (notes d&apos;épisode complètes) ;
          la version audio arrive prochainement.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {PODCAST_EPISODES.map((ep) => (
          <a key={ep.slug} href={`/podcasts/${ep.slug}`} className="block group">
            <article
              className="rounded-[var(--am-radius-xl)] p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-300 group-hover:-translate-y-0.5"
              style={{
                background: "var(--am-bg-card)",
                border: "1px solid var(--am-border)",
                boxShadow: "var(--am-shadow-card)",
              }}
            >
              <div
                className="size-12 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0"
                style={{ background: "var(--am-purple-muted)", color: "var(--am-purple)" }}
              >
                {ep.episodeNumber}
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-[var(--am-text)] leading-snug mb-1">{ep.title}</h2>
                <p className="text-sm text-[var(--am-text-secondary)] leading-relaxed line-clamp-2 mb-2">{ep.summary}</p>
                <div className="flex items-center gap-2 flex-wrap text-xs" style={{ color: "var(--am-text-muted)" }}>
                  {ep.topics.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full" style={{ background: "var(--am-bg-elevated)", border: "1px solid var(--am-border)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}
