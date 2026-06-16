"use client";
import React, { useState, useRef, useEffect, useTransition } from "react";
import { MathContent } from "./MathContent";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Explique-moi les suites arithmétiques",
  "Comment calculer une dérivée ?",
  "C'est quoi le théorème de Pythagore ?",
  "Aide-moi avec les intégrales",
];

interface Props {
  context?: string;
  userName?: string;
}

export function TutorChat({ context, userName }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || isLoading) return;
    setInput("");
    setError(null);

    const newMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setIsLoading(true);
    setStreaming("");

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, context }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `Erreur ${res.status}`);
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value);
        setStreaming(full);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: full }]);
      setStreaming("");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setIsLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  const isEmpty = messages.length === 0 && !streaming;

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4" style={{ minHeight: 0 }}>

        {/* Welcome state */}
        {isEmpty && (
          <div className="flex flex-col items-center justify-center h-full gap-6 py-8">
            <div
              className="size-16 rounded-[var(--am-radius-xl)] flex items-center justify-center text-3xl"
              style={{
                background: "linear-gradient(135deg, var(--am-purple-muted), var(--am-green-muted))",
                border: "1px solid var(--am-purple)",
                boxShadow: "0 0 30px rgba(139,92,246,0.2)",
              }}
            >
              🤖
            </div>
            <div className="text-center max-w-sm">
              <h3 className="text-lg font-bold text-[var(--am-text)] mb-1">
                Bonjour {userName ? `, ${userName}` : ""}! Je suis AlphaBot
              </h3>
              <p className="text-sm" style={{ color: "var(--am-text-muted)" }}>
                Ton tuteur IA en mathématiques. Pose-moi n'importe quelle question, je suis là pour t'aider !
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-left px-4 py-3 rounded-[var(--am-radius-lg)] text-sm transition-all hover:border-[var(--am-purple)] hover:-translate-y-0.5"
                  style={{
                    background: "var(--am-bg-card)",
                    border: "1px solid var(--am-border)",
                    color: "var(--am-text-secondary)",
                  }}
                >
                  {s} →
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message list */}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div
                className="size-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1"
                style={{ background: "var(--am-purple-muted)", border: "1px solid rgba(139,92,246,0.3)" }}
              >
                🤖
              </div>
            )}
            <div
              className="max-w-[85%] rounded-[var(--am-radius-xl)] px-4 py-3 text-sm"
              style={
                msg.role === "user"
                  ? {
                      background: "var(--am-green)",
                      color: "var(--am-text-inverse)",
                      borderBottomRightRadius: "4px",
                    }
                  : {
                      background: "var(--am-bg-card)",
                      border: "1px solid var(--am-border)",
                      color: "var(--am-text)",
                      borderBottomLeftRadius: "4px",
                    }
              }
            >
              {msg.role === "assistant" ? (
                <MathContent content={msg.content} />
              ) : (
                <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              )}
            </div>
          </div>
        ))}

        {/* Streaming message */}
        {streaming && (
          <div className="flex gap-3 justify-start">
            <div
              className="size-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1"
              style={{ background: "var(--am-purple-muted)", border: "1px solid rgba(139,92,246,0.3)" }}
            >
              🤖
            </div>
            <div
              className="max-w-[85%] rounded-[var(--am-radius-xl)] px-4 py-3 text-sm"
              style={{
                background: "var(--am-bg-card)",
                border: "1px solid var(--am-border)",
                color: "var(--am-text)",
                borderBottomLeftRadius: "4px",
              }}
            >
              <MathContent content={streaming} />
              <span
                className="inline-block size-1.5 rounded-full ml-1 animate-pulse"
                style={{ background: "var(--am-purple)", verticalAlign: "middle" }}
              />
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {isLoading && !streaming && (
          <div className="flex gap-3">
            <div
              className="size-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
              style={{ background: "var(--am-purple-muted)", border: "1px solid rgba(139,92,246,0.3)" }}
            >
              🤖
            </div>
            <div
              className="px-4 py-3 rounded-[var(--am-radius-xl)] flex items-center gap-1.5"
              style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-2 rounded-full animate-bounce"
                  style={{
                    background: "var(--am-purple)",
                    animationDelay: `${i * 150}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            className="px-4 py-3 rounded-[var(--am-radius-lg)] text-sm"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
              color: "#f87171",
            }}
          >
            {error}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div
        className="p-4 flex-shrink-0"
        style={{ borderTop: "1px solid var(--am-border-subtle)", background: "var(--am-bg-raised)" }}
      >
        {messages.length > 0 && (
          <button
            onClick={() => { setMessages([]); setStreaming(""); setError(null); }}
            className="text-xs mb-2 transition-colors hover:text-[var(--am-text)]"
            style={{ color: "var(--am-text-muted)" }}
          >
            ✕ Effacer la conversation
          </button>
        )}
        <div
          className="flex gap-2 rounded-[var(--am-radius-lg)] p-2"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Pose ta question… (Entrée pour envoyer)"
            rows={1}
            disabled={isLoading}
            className="flex-1 resize-none text-sm outline-none bg-transparent py-1.5 px-2"
            style={{
              color: "var(--am-text)",
              fontFamily: "var(--am-font-sans)",
              maxHeight: "120px",
            }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || isLoading}
            className="size-9 rounded-[var(--am-radius-md)] flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40 hover:opacity-90"
            style={{
              background: input.trim() ? "var(--am-green)" : "var(--am-bg-elevated)",
              color: input.trim() ? "var(--am-text-inverse)" : "var(--am-text-muted)",
              boxShadow: input.trim() ? "0 0 12px rgba(74,254,138,0.3)" : "none",
            }}
          >
            ↑
          </button>
        </div>
        <p className="text-[10px] mt-2 text-center" style={{ color: "var(--am-text-muted)" }}>
          AlphaBot peut faire des erreurs. Vérifiez les informations importantes.
        </p>
      </div>
    </div>
  );
}
