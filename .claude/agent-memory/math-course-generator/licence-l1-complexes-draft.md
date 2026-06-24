---
name: licence-l1-complexes-draft
description: Draft course on complex numbers (L1 S1) written to /tmp/l1-complexes.ts, not yet integrated into lib/licence-courses.ts
metadata:
  type: project
---

A complete L1 course on **nombres complexes** (id `complexes-l1`, slug `nombres-complexes-l1`) was generated and written EXCLUSIVELY to `/tmp/l1-complexes.ts` (not in the repo, per explicit user instruction — `lib/seed-data.ts` and `lib/licence-courses.ts` were NOT touched).

**Why this gap existed:** despite [[licence-courses-added]] covering 9 L1/L2/L3 courses, none covered complex numbers — a foundational French L1 S1 topic missing entirely from the platform.

**Structure (3 lessons x 15 exercises = 45 total):**
1. `comp1-l1-1` (forme-algebrique-plan-complexe) — 8 sections: construction de C, opérations, conjugué, module, plan complexe, distance/milieu, lieux géométriques, synthèse.
2. `comp1-l1-2` (forme-trigonometrique-exponentielle-moivre) — 9 sections: argument, forme trigo, notation exponentielle, Euler, Moivre, linéarisation, développement cos(nθ), transformations géométriques, synthèse.
3. `comp1-l1-3` (equations-complexes-racines-n-iemes) — 8 sections: racines carrées, équation 2nd degré complexe, racines n-ièmes de l'unité, racines n-ièmes générales, polygones réguliers, factorisation z^n-1, équations bicarrées, synthèse.

Each lesson: 30 mcq total, 6 open (with modelAnswer + explanation proof), 9 true_false (id "V"/"F" convention) across the course; difficulty exactly 5 debutant / 5 intermediaire / 5 expert per lesson (verified programmatically).

**Verified during generation:** all arithmetic checked against Python/cmath before writing (square roots of complex numbers, quadratic equations with complex discriminant, nth roots, Moivre/Euler linearizations). TypeScript compiles clean in isolation (`tsc --noEmit` against a copy with import path fixed to relative).

**Bug found and fixed before delivery:** exercise `comp1-l1-2-e10` (now intermediaire, was mislabeled expert) originally had a live self-correcting/hesitant explanation ("Recalcul...") AND a `correctId` of "B" contradicting its own conclusion of "1" (option A) — exactly the anti-pattern flagged in [[alphamath-licence-conventions]]. Rewritten clean and correctId fixed to "A". This brought lesson 2's difficulty distribution back to 5/5/5 (was 5/4/6 before the fix).

**Integration not done:** user said they will review and integrate manually. To integrate later: add `import { COMPLEXES_L1_COURSE } from "./licence-courses-complexes"` (or merge content into `lib/licence-courses.ts`) and push into `LICENCE_COURSES` array, following the same pattern as [[licence-courses-added]].

**Note on skill availability:** `generateur-de-cours-maths` skill was not present in this session's available skills list either — generated inline again, consistent with prior L1/L2/L3 and lycée/college passes.
