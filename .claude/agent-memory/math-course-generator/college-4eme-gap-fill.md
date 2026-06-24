---
name: college-4eme-gap-fill
description: 2026-06-22 gap-fill for 4ème (cycle 4) vs programme officiel — 2 new courses (angles-paralleles-4eme, algorithmique-programmation-4eme) added to lib/seed-data.ts
metadata:
  type: project
---

Audited all existing `schoolLevel: "4eme"` courses in `lib/seed-data.ts` against the official French collège cycle-4 programme. Existing 4ème courses confirmed sufficient and untouched: `pythagore-4eme`, `calcul-litteral-4eme-id`, `puissances-4eme-id`, `cosinus-4eme-id`, `vec4-id` (translations/vecteurs), `stat4-id`, `pyr4-id`, `rev4-id`.

Two gaps filled, inserted right before the `// 4ème — Révisions générales` comment (before `rev4-id`, after the last 5ème course):

1. **`angles-paralleles-4eme`** (slug same, `subject: "geometrie"`, thumbnailEmoji `∥`) — the 4ème geometry chapter that didn't exist anywhere in the file: angle properties from a transversal cutting two lines. 2 lessons:
   - `ang4-l1` (`angles-correspondants-alternes-internes`): defines corresponding angles and alternate-interior angles via a shared transversal; states the direct property (parallel lines ⟹ equal angles).
   - `ang4-l2` (`reciproque-angles-paralleles`): states and applies the converse (equal corresponding/alternate-interior angles ⟹ lines are parallel), teaches writing a short proof of parallelism.

2. **`algorithmique-programmation-4eme`** (slug same, `subject: "arithmetique"`, thumbnailEmoji `⚙️`) — extends [[college-5eme-gap-fill]]'s `algorithmique-programmation-5eme` (variables, counter loops, conditionals) and `algorithmique-6eme`. 3 lessons:
   - `algo4-l1` (`boucles-imbriquees`): nested loops, total repetitions = product of outer×inner, grid/spiral patterns.
   - `algo4-l2` (`fonctions-blocs-reutilisables`): custom blocks/procedures, optionally parameterized (e.g. "draw polygon(n sides)").
   - `algo4-l3` (`algorithme-suites-de-nombres`): accumulator variable to generate an arithmetic sequence, links to calcul littéral formula $u_n = u_0 + n \times r$.

10 lessons total, 50 new exercises (5 per lesson, e1-e2 debutant, e3-e4 intermediaire, e5 expert), all using blockquote (`>`) pseudo-Scratch style per the triple-backtick pitfall in [[project-alphamath-seed-data]]. `npx tsc --noEmit` clean. Duplicate-checker flags `angles-paralleles-4eme` and `algorithmique-programmation-4eme` once each — this is the same benign `id === slug` false-positive pattern already documented for `fractions-6eme`/`proportionnalite-6eme` (course id and slug are identical strings by design per task instructions, not a real cross-course collision; verified each id/slug appears in exactly one course via grep).

**Skill availability:** `generateur-de-cours-maths` was checked via ToolSearch and confirmed unavailable — 4th consecutive time (after 2nde, 1ère, terminale per [[lyc-terminale-courses-added]]). Content generated manually following the exact style calibrated from `cosinus-4eme-id` and `n6-l1`/`algo5-l1` (Introduction → concept sections → `## Exemples` with the 3 titled examples → `## À retenir`).

Related: [[project-alphamath-seed-data]], [[college-5eme-gap-fill]], [[college-6eme-gap-fill]].
