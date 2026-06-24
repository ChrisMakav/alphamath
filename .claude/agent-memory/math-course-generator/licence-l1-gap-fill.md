---
name: licence-l1-gap-fill
description: Batch 2 of lib/licence-courses.ts — 2 new L1 courses (geometrie-l1, info-l1) + 3 enrichment lessons in existing courses, per official L1 programme gaps
metadata:
  type: project
---

Part of a larger gap-fill plan (task list seen in-session: batch 1 done here, batches 2-5 planned for L2/L3 abstract algebra, topology, analyse numérique, Galois, etc. — see [[licence-courses-added]] for the original 9-course baseline).

**New courses added to `lib/licence-courses.ts`:**
1. `geometrie-l1` — slug `geometrie-l1-analytique-vectorielle`, subject "geometrie", L1, isFree: false. 3 lessons: `geo1-l1-1` (droites/plans dans l'espace — équations paramétriques/cartésiennes, positions relatives, distances), `geo1-l1-2` (produit scalaire et orthogonalité — Cauchy-Schwarz prouvé), `geo1-l1-3` (bases orthonormées, Gram-Schmidt, projections orthogonales).
2. `info-l1` — slug `informatique-l1-introduction-python-mathematiques`, subject "informatique", L1, isFree: true. 3 lessons: `info1-l1-1` (variables/types/if/for/while), `info1-l1-2` (fonctions et listes), `info1-l1-3` (recherche séquentielle, tri sélection/insertion, PGCD itératif). Code blocks use `>` blockquote indentation, never triple backticks (would break the template literal).

**Enrichment lessons added to existing courses (found by `grep -n 'id: "<course-id>"'` first, then matched sibling lesson style exactly):**
- `algebre-l1` → new lesson `alg1-l1-0` ("Calcul matriciel : addition, multiplication, transposition") inserted in FIRST position (before `alg1-l1-1`, the Gauss lesson), since matrix ops are a prerequisite. Course now has 4 lessons total.
- `logique-l1` → new lesson `log1-l1-4` ("Ensembles numériques : ℕ,ℤ,ℚ,ℝ,ℂ, valeur absolue, majorants/minorants") appended after `log1-l1-3`. Covers sup/inf axiom of completeness, ℚ not complete, ℂ not ordered.
- `analyse-l2` → new lesson `anal2-l2-4` ("Suites et séries de fonctions : convergence simple et uniforme") appended after `anal2-l2-3`. Covers Cauchy uniforme criterion, normal convergence, classic x^n counterexample.

**All new lessons follow strict 5 debutant / 5 intermediaire / 5 expert exercise split (15 per lesson), verified by hand and via `tsc --noEmit`.**

**Verification done:** `npx tsc --noEmit` clean (zero errors). Checked for id collisions across the entire file (course/lesson/exercise ids only, excluding MCQ option letters A/B/C/D and V/F which are scoped per-exercise) — all unique, no duplicates found.

**Skill status:** `generateur-de-cours-maths` skill invocation failed with "Unknown skill" — 11th consecutive occurrence. It does not exist in this environment; proceeded manually per the fallback instructions in the system prompt.

**How to apply:** File is now ~10510 lines (grew from 8787). When continuing the gap-fill plan (L2 batch: algebre-abstraite-l2, topologie-l2, calcul-diff-l2, statistiques-l2, etc.), append new courses before the final `];`, and for enrichment lessons, locate the target course via `grep -n 'id: "<course-id>"'` and read 1-2 sibling lessons first to match style/id pattern before inserting.
