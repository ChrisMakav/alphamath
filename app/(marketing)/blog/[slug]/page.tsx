import React from "react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "../../../../lib/blog-data";
import { MathContent } from "../../../components/ui/MathContent";
import { Breadcrumb } from "../../../components/ui/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        className="mb-6"
      />

      <span
        className="text-xs font-semibold w-fit px-2.5 py-0.5 rounded-full"
        style={{ color: "var(--am-green)", background: "var(--am-green-muted)", border: "1px solid var(--am-green-dim)" }}
      >
        {post.category}
      </span>

      <h1 className="text-3xl font-black text-[var(--am-text)] mt-3 mb-2">{post.title}</h1>
      <p className="text-xs text-[var(--am-text-muted)] mb-8">
        {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        {" · "}
        {post.readingMinutes} min de lecture
      </p>

      <MathContent content={post.content} />
    </div>
  );
}
