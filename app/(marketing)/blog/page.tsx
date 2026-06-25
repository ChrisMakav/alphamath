import React from "react";
import { BLOG_POSTS } from "../../../lib/blog-data";

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-green)" }}>
          BLOG
        </p>
        <h1 className="text-4xl font-black text-[var(--am-text)] mb-3">Méthode & conseils</h1>
        <p className="text-[var(--am-text-secondary)] max-w-xl">
          Des articles pour progresser en mathématiques : méthodes de travail, gestion de l&apos;anxiété
          scolaire, techniques de lecture d&apos;énoncés et conseils de préparation aux examens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {BLOG_POSTS.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article
              className="h-full rounded-[var(--am-radius-xl)] p-5 flex flex-col gap-3 transition-all duration-300 group-hover:-translate-y-0.5"
              style={{
                background: "var(--am-bg-card)",
                border: "1px solid var(--am-border)",
                boxShadow: "var(--am-shadow-card)",
              }}
            >
              <span
                className="text-xs font-semibold w-fit px-2.5 py-0.5 rounded-full"
                style={{ color: "var(--am-green)", background: "var(--am-green-muted)", border: "1px solid var(--am-green-dim)" }}
              >
                {post.category}
              </span>
              <h2 className="text-lg font-bold text-[var(--am-text)] leading-snug">{post.title}</h2>
              <p className="text-sm text-[var(--am-text-secondary)] leading-relaxed line-clamp-3">{post.excerpt}</p>
              <p className="text-xs text-[var(--am-text-muted)] mt-auto pt-2">
                {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                {" · "}
                {post.readingMinutes} min de lecture
              </p>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}
