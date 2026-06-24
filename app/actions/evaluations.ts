"use server";
import { redirect } from "next/navigation";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "../../lib/supabase/server";
import { requirePremiumTeacher, assertLevelInScope } from "../../lib/teacher-access";
import { getCourseBySlug, getSubjectLabel, LEVEL_LABELS, type SchoolLevel } from "../../lib/seed-data";
import { parseEvaluationContent, type GeneratedEvaluation } from "../../lib/evaluations";

const SYSTEM = `Tu rédiges des sujets d'évaluation de mathématiques pour des enseignants français, sur la plateforme AlphaMath.

Règles absolues :
- Réponds en français.
- Utilise LaTeX pour toute notation mathématique : $...$ pour les formules en ligne, $$...$$ pour les blocs centrés.
- Génère exactement 3 parties, dans cet ordre : "debutant", "intermediaire", "expert".
- Chaque partie contient 4 questions originales et inédites portant sur les notions demandées, avec un énoncé clair et un corrigé détaillé (méthode + résultat, pas juste la réponse finale).
- Les questions doivent être adaptées au niveau scolaire indiqué.
- La difficulté doit progresser nettement d'une partie à l'autre (debutant = application directe, intermediaire = plusieurs étapes, expert = raisonnement ou cas non immédiat).
- Attribue à chaque question un nombre de points entier ; les points d'une partie doivent sommer à environ 20.
- Tu DOIS répondre uniquement via l'outil "submit_evaluation" — pas de texte libre en dehors de l'appel d'outil.`;

const SUBMIT_EVALUATION_TOOL: Anthropic.Tool = {
  name: "submit_evaluation",
  description: "Soumet le sujet d'évaluation généré, au format structuré attendu par AlphaMath.",
  input_schema: {
    type: "object",
    required: ["title", "sections"],
    properties: {
      title: {
        type: "string",
        description: "Titre court de l'évaluation, ex: \"Évaluation — Théorème de Pythagore\".",
      },
      sections: {
        type: "array",
        minItems: 3,
        maxItems: 3,
        items: {
          type: "object",
          required: ["difficulty", "title", "questions"],
          properties: {
            difficulty: { type: "string", enum: ["debutant", "intermediaire", "expert"] },
            title: { type: "string" },
            questions: {
              type: "array",
              minItems: 1,
              items: {
                type: "object",
                required: ["statement", "correction", "points"],
                properties: {
                  statement: { type: "string" },
                  correction: { type: "string" },
                  points: { type: "number" },
                },
              },
            },
          },
        },
      },
    },
  },
};

interface GeneratorParams {
  levelLabel: string;
  subjects: string[];
  notions: string[];
}

async function callGenerator(client: Anthropic, params: GeneratorParams): Promise<GeneratedEvaluation> {
  const userPrompt = [
    `Niveau scolaire : ${params.levelLabel}`,
    `Matière(s) : ${params.subjects.join(", ")}`,
    `Notions à évaluer : ${params.notions.join(", ")}`,
    "",
    "Génère un sujet d'évaluation complet sur ces notions, en respectant strictement le format demandé.",
  ].join("\n");

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    system: SYSTEM,
    tools: [SUBMIT_EVALUATION_TOOL],
    tool_choice: { type: "tool", name: "submit_evaluation" },
    messages: [{ role: "user", content: userPrompt }],
  });

  const toolUse = response.content.find(
    (block): block is Anthropic.ToolUseBlock => block.type === "tool_use"
  );
  if (!toolUse) throw new Error("Le modèle n'a pas retourné de sortie structurée.");

  const raw = toolUse.input as { title?: unknown; sections?: unknown };
  if (typeof raw.title !== "string" || !raw.title.trim()) {
    throw new Error("Titre d'évaluation manquant.");
  }

  const sections = parseEvaluationContent(raw.sections);
  return { title: raw.title.trim(), sections };
}

export async function generateEvaluation(
  _prev: { error?: string } | undefined,
  formData: FormData
): Promise<{ error?: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { accessibleLevels } = await requirePremiumTeacher(supabase, user.id);

  const schoolLevel = formData.get("schoolLevel") as SchoolLevel | null;
  const courseSlugs = formData.getAll("courseSlug").map(String);
  const lessonTitles = formData.getAll("lessonTitle").map(String);

  if (!schoolLevel) return { error: "Choisissez un niveau." };

  try {
    assertLevelInScope(accessibleLevels, schoolLevel);
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Niveau invalide." };
  }

  if (!courseSlugs.length || !lessonTitles.length) {
    return { error: "Sélectionnez au moins une notion à évaluer." };
  }

  const courses = courseSlugs.map((slug) => getCourseBySlug(slug)).filter((c) => !!c);
  if (!courses.length) return { error: "Cours introuvable." };
  if (courses.some((c) => c!.schoolLevel !== schoolLevel)) {
    return { error: "Les cours sélectionnés ne correspondent pas au niveau choisi." };
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return { error: "Clé API Anthropic manquante — ajoutez ANTHROPIC_API_KEY dans .env.local" };
  }

  const subjects = Array.from(new Set(courses.map((c) => getSubjectLabel(c!.subject))));
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  let evaluation: GeneratedEvaluation;
  try {
    evaluation = await callGenerator(client, {
      levelLabel: LEVEL_LABELS[schoolLevel],
      subjects,
      notions: lessonTitles,
    });
  } catch {
    return { error: "La génération a échoué, réessayez." };
  }

  const { data: inserted, error } = await supabase
    .from("evaluations")
    .insert({
      user_id: user.id,
      school_level: schoolLevel,
      title: evaluation.title,
      course_slugs: courseSlugs,
      notions: lessonTitles,
      content: evaluation.sections,
    } as never)
    .select("id")
    .single();

  if (error || !inserted) return { error: "Échec de l'enregistrement de l'évaluation." };

  redirect(`/evaluations/${(inserted as { id: string }).id}`);
}
