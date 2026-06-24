---
name: licence-l2-algebre-abstraite
description: New L2 course "Algèbre abstraite L2 — Groupes, anneaux et corps" integrated into lib/licence-courses.ts
metadata:
  type: project
---

Wrote and integrated `algebre-abstraite-l2` (slug `algebre-abstraite-l2-groupes-anneaux-corps`, schoolLevel L2, subject `algebre`), 3 lessons, 45 exercises (5/5/5 per lesson), into `lib/licence-courses.ts`. Same integration pass as [[licence-l2-stats-draft]] and [[licence-l2-euclidien-draft]].

- `alg-abs-l2-1` groupes-sous-groupes-morphismes: loi de composition interne, axiomes de groupe, sous-groupe (critère par 3 conditions), morphismes (noyau/image/isomorphisme).
- `alg-abs-l2-2` anneaux-et-ideaux: anneau commutatif unitaire, diviseurs de zéro/intégrité, idéaux (définition + absorption, idéaux principaux), intuition du quotient A/I.
- `alg-abs-l2-3` corps-corps-finis-corps-de-fractions: corps ⇒ intègre, $\mathbb{F}_p$ via Bézout, corps de fractions construit sur le modèle $\mathbb{Z}\to\mathbb{Q}$, théorème "intègre + fini ⇒ corps".

This is the first course in the file covering groups specifically (the pre-existing `arithmetique-l3` only goes as far as rings/ideals at a more advanced arithmetic level — no group theory). Caught and fixed a 5/5/5 difficulty-count violation pre-delivery (lessons 2 and 3 initially skewed toward "expert") via an explicit per-lesson Counter script — same verification pattern used in [[licence-l2-stats-draft]].

**Integration mechanics note:** when appending objects before the final `];` of `LICENCE_COURSES`, check whether the file's last existing course object already ends in `},` before that `];` — if so, do NOT prepend another leading comma to the inserted block, or you get a `},,` syntax error that tsc reports opaquely as "Type 'undefined' is not assignable to type 'Course'" rather than a clear syntax error. Caught this on this pass by grepping for `,\s*,` after a failed tsc run.

The `generateur-de-cours-maths` skill was not invoked for the new course content (not available/applicable in this Bash-driven session); confirms the skill is unreliable across many sessions — see the running count in [[project-alphamath-seed-data]].
