import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "../../../lib/supabase/server";
import type { NextRequest } from "next/server";

const SYSTEM = `Tu es AlphaBot, le tuteur IA d'AlphaMath, une plateforme de mathématiques française.
Tu aides les étudiants du collège (6ème) jusqu'à la licence (L3).

Règles absolues :
- Réponds TOUJOURS en français
- Utilise LaTeX : $…$ pour les formules inline, $$…$$ pour les blocs centrés
- Sois pédagogue, patient, encourageant — ne donne jamais la réponse directement, guide vers elle
- Décompose en étapes numérotées quand tu résous un problème
- Pose une question de vérification à la fin de ta réponse
- 3-4 paragraphes maximum pour rester lisible`;

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "Clé API Anthropic manquante — ajoutez ANTHROPIC_API_KEY dans .env.local" }, { status: 503 });
  }

  const { messages, context } = (await req.json()) as {
    messages: { role: "user" | "assistant"; content: string }[];
    context?: string;
  };

  const system = context ? `${SYSTEM}\n\nContexte de l'étudiant : ${context}` : SYSTEM;

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const stream = client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system,
    messages,
  });

  return new Response(
    new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(new TextEncoder().encode(event.delta.text));
            }
          }
        } finally {
          controller.close();
        }
      },
    }),
    { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" } }
  );
}
