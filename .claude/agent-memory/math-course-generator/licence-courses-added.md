---
name: licence-courses-added
description: The 9 university-level (L1/L2/L3) courses added to lib/licence-courses.ts and integrated into seed-data.ts via import+push
metadata:
  type: project
---

All 9 university courses were generated inline (skill unavailable) and written to `/Users/rachidemabila/Desktop/alphamath/lib/licence-courses.ts`.

**Courses (in order):**
1. `analyse-l1` — slug `analyse-l1-limites-continuite-derivabilite`, L1, analyse, isFree: true
2. `algebre-l1` — slug `algebre-l1-espaces-vectoriels-systemes`, L1, algebre
3. `proba-l1` — slug `probabilites-l1-espaces-variables-discretes`, L1, probabilites, isFree: true
4. `analyse-l2` — slug `analyse-l2-series-integrales-generalisees`, L2, analyse
5. `algebre-l2` — slug `algebre-l2-matrices-determinants-vp`, L2, algebre
6. `proba-l2` — slug `probabilites-l2-variables-continues-lois-usuelles`, L2, probabilites
7. `analyse-l3` — slug `analyse-l3-fonctions-plusieurs-variables`, L3, analyse
8. `algebre-l3` — slug `algebre-l3-reduction-formes-bilineaires`, L3, algebre
9. `arithmetique-l3` — slug `arithmetique-l3-theorie-des-nombres`, L3, arithmetique

**Structure:** Each course has exactly 3 lessons × 15 exercises (5 debutant + 5 intermediaire + 5 expert) = 45 exercises per course, 405 total.

**Integration:** `lib/seed-data.ts` imports `LICENCE_COURSES` from `./licence-courses` (line 1) and pushes them into the COURSES array (line 16457 after the closing `];`). TypeScript check passes with zero errors.

**Why separate file:** seed-data.ts is 16500+ lines; a separate file avoids risky large-file edits and keeps university content modular.

**How to apply:** When adding more L1/L2/L3 content, append to `lib/licence-courses.ts` before the closing `];`. No changes to seed-data.ts integration are needed.

**Batch 2 (gap-fill, added later — see [[licence-l1-gap-fill]]):** 2 new L1 courses (`geometrie-l1`, `info-l1`) + 4 enrichment lessons added to existing courses (`alg1-l1-0` in algebre-l1, `log1-l1-4` in logique-l1, `anal2-l2-4` in analyse-l2). File grew from ~8787 to ~10510 lines. This memory file's course count (9) and line numbers are now stale — always re-grep `id: "` for current state.
