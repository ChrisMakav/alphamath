"use client";
import React from "react";
import "katex/dist/katex.min.css";
import katex from "katex";

interface MathContentProps {
  content: string;
  className?: string;
}

function renderMath(text: string): string {
  // KaTeX emits HTML containing literal newlines (e.g. inside SVG path "d"
  // attributes for radical signs). Stash rendered math behind placeholders
  // so the markdown pass below can't mangle that markup with its \n -> <br/>
  // substitution, then splice the real HTML back in at the end.
  const mathChunks: string[] = [];
  function stash(html: string): string {
    // Use a non-whitespace sentinel so table-cell trimming (below) can't
    // strip it before the splice-back at the end of this function.
    const token = `\u0000MATH${mathChunks.length}\u0000`;
    mathChunks.push(html);
    return token;
  }

  // Replace display math $$...$$ first
  let result = text.replace(/\$\$([\s\S]*?)\$\$/g, (_match, latex) => {
    try {
      return stash(`<div class="am-math-display">${katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false })}</div>`);
    } catch {
      return stash(`<div class="am-math-display am-math-error">${latex}</div>`);
    }
  });

  // Replace inline math $...$
  result = result.replace(/\$([^$\n]+?)\$/g, (_match, latex) => {
    try {
      return stash(katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false }));
    } catch {
      return stash(`<span class="am-math-error">${latex}</span>`);
    }
  });

  // Basic Markdown → HTML
  result = result
    .replace(/^### (.+)$/gm, '<h3 class="am-h3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="am-h2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="am-h1">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="am-inline-code">$1</code>')
    .replace(/^> (.+)$/gm, '<blockquote class="am-blockquote">$1</blockquote>')
    .replace(/^⚠ (.+)$/gm, '<div class="am-warning">⚠ $1</div>')
    .replace(/^\| (.+) \|$/gm, (row) => {
      const cells = row.split("|").filter(Boolean).map((c) => c.trim());
      return `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
    })
    .replace(/(<tr>[\s\S]*?<\/tr>\n?)+/g, (rows) => `<div class="am-table-wrap"><table class="am-table">${rows}</table></div>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>");

  // Splice the real KaTeX HTML back in, now that it's safe from mangling.
  result = result.replace(/\u0000MATH(\d+)\u0000/g, (_match, index) => mathChunks[Number(index)]);

  return `<p>${result}</p>`;
}

export function MathContent({ content, className = "" }: MathContentProps) {
  const html = renderMath(content);

  return (
    <>
      <style>{`
        .am-prose { color: var(--am-text); font-family: var(--am-font-sans); line-height: 1.8; }
        .am-prose p { margin: 0 0 1em; }
        .am-h1 { font-size: var(--am-text-3xl); font-weight: 800; color: var(--am-text); margin: 1.5em 0 0.5em; }
        .am-h2 { font-size: var(--am-text-xl); font-weight: 700; color: var(--am-text); margin: 1.5em 0 0.5em; border-bottom: 1px solid var(--am-border); padding-bottom: 0.4em; }
        .am-h3 { font-size: var(--am-text-lg); font-weight: 600; color: var(--am-green); margin: 1.25em 0 0.4em; }
        .am-math-display { overflow-x: auto; padding: 1em 0; text-align: center; }
        .am-math-error { color: #f87171; }
        .am-inline-code { font-family: var(--am-font-mono); font-size: 0.875em; background: var(--am-bg-elevated); border: 1px solid var(--am-border); padding: 0.1em 0.4em; border-radius: var(--am-radius-sm); color: var(--am-green); }
        .am-blockquote { border-left: 3px solid var(--am-purple); padding: 0.75em 1em; background: var(--am-purple-muted); border-radius: 0 var(--am-radius-md) var(--am-radius-md) 0; color: var(--am-text-secondary); margin: 1em 0; font-style: italic; }
        .am-warning { border-left: 3px solid var(--am-amber); padding: 0.75em 1em; background: var(--am-amber-muted); border-radius: 0 var(--am-radius-md) var(--am-radius-md) 0; color: var(--am-amber); margin: 1em 0; }
        .am-table-wrap { overflow-x: auto; margin: 1.5em 0; }
        .am-table { width: 100%; border-collapse: collapse; font-size: 0.875em; }
        .am-table td { padding: 0.6em 1em; border: 1px solid var(--am-border); color: var(--am-text-secondary); }
        .am-table tr:first-child td { background: var(--am-bg-elevated); color: var(--am-text); font-weight: 600; }
        .am-table tr:nth-child(even) td { background: var(--am-bg-raised); }
        strong { color: var(--am-text); font-weight: 700; }
        em { color: var(--am-text-secondary); font-style: italic; }
        .katex { font-size: 1.1em; }
        .katex-display { margin: 0.5em 0; }
      `}</style>
      <div
        className={`am-prose ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
