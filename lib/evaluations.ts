import type { Exercise } from "./seed-data";

export type EvalDifficulty = Exercise["difficulty"]; // "debutant" | "intermediaire" | "expert"

export interface EvalQuestion {
  id: string;
  statement: string; // markdown + LaTeX ($...$ / $$...$$), comme le reste du site
  correction: string;
  points: number;
}

export interface EvalSection {
  difficulty: EvalDifficulty;
  title: string;
  questions: EvalQuestion[];
}

export interface GeneratedEvaluation {
  title: string;
  sections: EvalSection[]; // exactement 3, ordonnées debutant -> intermediaire -> expert
}

export const EVAL_DIFFICULTY_ORDER: EvalDifficulty[] = ["debutant", "intermediaire", "expert"];

export const EVAL_DIFFICULTY_LABELS: Record<EvalDifficulty, string> = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  expert: "Expert",
};

export const EVAL_SECTION_TITLES: Record<EvalDifficulty, string> = {
  debutant: "Partie A — Débutant",
  intermediaire: "Partie B — Intermédiaire",
  expert: "Partie C — Expert",
};

/**
 * Valide la forme du contenu lu depuis evaluations.content (jsonb) avant de lui faire confiance —
 * défense en profondeur puisqu'il a traversé une réponse IA puis un stockage JSON.
 */
export function parseEvaluationContent(content: unknown): EvalSection[] {
  if (!Array.isArray(content)) {
    throw new Error("Contenu d'évaluation invalide : tableau de sections attendu.");
  }

  const sections = content.map((raw, index): EvalSection => {
    if (typeof raw !== "object" || raw === null) {
      throw new Error(`Section ${index} invalide.`);
    }
    const section = raw as Record<string, unknown>;
    const difficulty = section.difficulty;
    if (
      difficulty !== "debutant" &&
      difficulty !== "intermediaire" &&
      difficulty !== "expert"
    ) {
      throw new Error(`Difficulté de section invalide à l'index ${index}.`);
    }
    if (typeof section.title !== "string") {
      throw new Error(`Titre de section invalide à l'index ${index}.`);
    }
    if (!Array.isArray(section.questions)) {
      throw new Error(`Liste de questions invalide à l'index ${index}.`);
    }

    const questions = section.questions.map((rawQ, qIndex): EvalQuestion => {
      if (typeof rawQ !== "object" || rawQ === null) {
        throw new Error(`Question ${qIndex} invalide (section ${index}).`);
      }
      const q = rawQ as Record<string, unknown>;
      if (typeof q.statement !== "string" || typeof q.correction !== "string") {
        throw new Error(`Question ${qIndex} incomplète (section ${index}).`);
      }
      return {
        id: typeof q.id === "string" ? q.id : `q${qIndex + 1}`,
        statement: q.statement,
        correction: q.correction,
        points: typeof q.points === "number" ? q.points : 0,
      };
    });

    return { difficulty, title: section.title, questions };
  });

  if (sections.length !== 3 || EVAL_DIFFICULTY_ORDER.some((d, i) => sections[i]?.difficulty !== d)) {
    throw new Error("Une évaluation doit contenir exactement 3 sections, ordonnées débutant/intermédiaire/expert.");
  }

  return sections;
}
