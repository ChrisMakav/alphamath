import React from "react";
import { notFound } from "next/navigation";
import { getPodcastEpisodeBySlug } from "../../../../lib/podcasts-data";
import { MathContent } from "../../../components/ui/MathContent";
import { Breadcrumb } from "../../../components/ui/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PodcastEpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = getPodcastEpisodeBySlug(slug);
  if (!episode) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Podcasts", href: "/podcasts" },
          { label: episode.title },
        ]}
        className="mb-6"
      />

      <span
        className="text-xs font-semibold w-fit px-2.5 py-0.5 rounded-full"
        style={{ color: "var(--am-purple)", background: "var(--am-purple-muted)", border: "1px solid var(--am-purple-dim)" }}
      >
        Épisode {episode.episodeNumber}
      </span>

      <h1 className="text-3xl font-black text-[var(--am-text)] mt-3 mb-2">{episode.title}</h1>
      <p className="text-xs text-[var(--am-text-muted)] mb-2">
        {new Date(episode.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        {" · "}
        {episode.readingMinutes} min de lecture
      </p>
      <p
        className="text-sm px-4 py-3 rounded-[var(--am-radius-md)] mb-8"
        style={{ color: "var(--am-text-muted)", background: "var(--am-bg-elevated)", border: "1px solid var(--am-border)" }}
      >
        🎙️ Cet épisode est disponible en version écrite ; la version audio arrive prochainement.
      </p>

      <MathContent content={episode.content} />
    </div>
  );
}
