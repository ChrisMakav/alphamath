---
name: licence-l2-topo-diff-numerique
description: Three new L2 analyse courses integrated — topologie-l2, calcul-diff-l2, analyse-numerique-l2
metadata:
  type: project
---

Integrated three new courses into `lib/licence-courses.ts` (subject: "analyse", schoolLevel: "L2"), each with 3 lessons of exactly 15 exercises (5 debutant/5 intermediaire/5 expert):

- **topologie-l2** (slug `topologie-l2-espaces-metriques`) — lessons `topo-l2-1` (Distances et normes — content reused verbatim from the abandoned `/tmp/l3-topologie.ts` draft, id renamed `topo-l3-1`→`topo-l2-1`, exercises written fresh since the draft had `exercises: []`), `topo-l2-2` (Ouverts, fermés et voisinages), `topo-l2-3` (Compacité et connexité, séquentielle + Heine-Borel admis).
- **calcul-diff-l2** (slug `calcul-diff-l2-fonctions-plusieurs-variables`) — lessons `cd-l2-1` (Dérivées partielles et gradient), `cd-l2-2` (Matrice hessienne, Schwarz), `cd-l2-3` (Extrema libres et liés, multiplicateurs de Lagrange). Deliberately overlaps in topic with the existing `analyse-l3` lesson `extrema-points-critiques` (same gradient/hessienne/Lagrange concepts) — this is intentional spiral-curriculum overlap per the task brief; examples/exercises were varied (different functions, more elementary computational focus) to avoid being a copy.
- **analyse-numerique-l2** (slug `analyse-numerique-l2-methodes-approximation`) — lessons `an-l2-1` (Interpolation de Lagrange, erreur d'interpolation, phénomène de Runge), `an-l2-2` (Dichotomie vs Newton, convergence linéaire/quadratique), `an-l2-3` (Erreurs numériques, cancellation catastrophique, conditionnement vs stabilité). This was the first numerical-analysis course in the licence catalog.

**Pitfall hit and fixed:** when first drafting exercise difficulty (debutant/intermediaire/expert) by hand across 9 lessons × 15 exercises, 6 of the 9 lessons drifted from the required 5/5/5 split (e.g. ended up 5/3/7 or 6/4/5). Caught via a Python regex pass over the file counting `difficulty:` per exercise id, then fixed with a second Python pass that surgically patches specific exercise ids' difficulty field by locating `id: "<eid>"` and replacing the next `difficulty: "..."` occurrence in a bounded window after it. Lesson: **always programmatically verify the 5/5/5 split after writing exercises by hand** — manual counting while writing is unreliable at this volume.

**Process note on concurrent editing:** during this session, `lib/licence-courses.ts` had uncommitted git changes from another concurrent process/agent (task list showed batches #3-#8 for L2/L3 gap-filling, claiming topologie-l2/calcul-diff-l2 already "completed" — but grep proved they were NOT in the file when I started). Mitigated risk by: drafting all lesson content to `/tmp` files first (never directly in the live file), then re-grepping the live file for id collisions immediately before each integration step, and using Python (reads fresh from disk every invocation) rather than the Edit tool (which caches file state and throws "modified since read" errors under concurrent writes) for the final splice into `licence-courses.ts`.

See also [[licence-courses-added]], [[licence-l2-algebre-abstraite]], [[licence-l2-euclidien-draft]] for prior L2 batches and conventions.
