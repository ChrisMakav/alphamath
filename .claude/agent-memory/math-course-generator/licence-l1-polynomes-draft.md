---
name: licence-l1-polynomes-draft
description: Draft course on polynomials and rational fractions (L1) written to /tmp/l1-polynomes.ts, not yet integrated into lib/licence-courses.ts
metadata:
  type: project
---

A complete L1 course on **polynômes et fractions rationnelles** (id `polynomes-l1`, slug `polynomes-fractions-rationnelles-l1`) was generated and written EXCLUSIVELY to `/tmp/l1-polynomes.ts` (not in the repo, per explicit user instruction — `lib/seed-data.ts` and `lib/licence-courses.ts` were NOT touched, confirmed via `git diff --stat`).

**Why this gap existed:** despite [[licence-courses-added]] covering 9 L1/L2/L3 courses and [[licence-l1-complexes-draft]] adding complex numbers, no course covered polynomials/rational fractions — another foundational French L1 algebra topic missing from the platform.

**Structure (3 lessons x 15 exercises = 45 total):**
1. `poly1-l1-1` (operations-degre-racines) — 8 sections: définition, opérations/degré, fonction polynomiale, racines, théorème racine-facteur (prouvé), multiplicité (caractérisation par dérivées), exemple résolu (X^3-3X^2+4 → racine double 2), nombre de racines/d'Alembert-Gauss annoncé, synthèse.
2. `poly1-l1-2` (division-euclidienne-factorisation) — 8 sections: division euclidienne (théorème + exemple posé complet), division par (X-a)/Horner, théorème de factorisation, d'Alembert-Gauss + irréductibles sur R (degré 1 ou degré 2 à Δ<0), Viète degré 2, Viète degré n, synthèse.
3. `poly1-l1-3` (fractions-rationnelles-elements-simples) — 9 sections: définition, pôles/ordre, partie entière, théorème de décomposition (cas réel général énoncé), méthode substitution (pôles simples), exemple résolu pôles simples, méthode coefficients indéterminés (pôle multiple), résumé méthode, synthèse.

Each lesson: exactly 5 debutant / 5 intermediaire / 5 expert (verified programmatically via regex scan), 30 mcq + 9 true_false + 6 open total across the course (2 open per lesson among the 5 experts, all with modelAnswer + clean non-hesitant explanation).

**All arithmetic pre-verified with sympy before writing** (`apart`, `factor`, `roots`, `div` on every worked example and every exercise): e.g. X^3-3X^2+4=(X-2)^2(X+1); division of X^4-2X^3+3X-1 by X^2-X+1 → Q=X^2-X-2, R=2X+1; division of X^4+X^3-3X^2-4X-1 by X^2+X-2 → Q=X^2-1, R=-3X-3; partial fractions (3X+5)/((X-1)(X+2)) = 8/3/(X-1)+1/3/(X+2); (4X-2)/((X+1)^2(X-2)) = -2/3/(X+1)+2/(X+1)^2+2/3/(X-2); (2X^2+3X-1)/((X-1)(X+1)(X+2)) = 2/3/(X-1)+1/(X+1)+1/3/(X+2); (5X-1)/(X^2-1)=3/(X+1)+2/(X-1).

**Verification performed before delivery:**
- Regex scan confirmed exactly 5/5/5 difficulty split per lesson and exactly 2 open exercises per lesson among experts.
- Grepped for the literal-`\n`-bug pattern (`\\n` followed by non-letter, i.e. not part of a LaTeX command like `\neq`/`\nmid`) — zero occurrences found.
- Compiled the file in isolation with local `node_modules/.bin/tsc --noEmit --strict` against a hand-written stub of the `Course`/`Lesson`/`Exercise` interfaces — passed cleanly with zero errors.
- Specifically avoided the anti-pattern flagged by the user (a `correctId` contradicting its own explanation's conclusion, with hesitant self-correcting narration) — same anti-pattern found pre-existing in `lib/licence-courses.ts` exercise `anal1-l1-1-e12` (analyse L1, limites lesson) during the reference read for this task; that pre-existing bug was NOT fixed here since the task scope was strictly limited to writing the new file, not editing `lib/licence-courses.ts`. Worth flagging to the user separately if they want it patched.

**Integration not done:** user will review and integrate manually. To integrate later: import `POLYNOMES_L1_COURSE` from this file (or merge its content into `lib/licence-courses.ts`) and push into `LICENCE_COURSES` array, following the pattern in [[licence-courses-added]].

**Note on skill availability:** `generateur-de-cours-maths` skill was not present in this session's available skills list either — generated inline again, consistent with all prior L1/L2/L3 and lycée/college passes (7th consecutive confirmed-unavailable session).

**New finding to flag:** pre-existing bug in `lib/licence-courses.ts`, exercise `anal1-l1-1-e12` (lesson `anal1-l1-1`, "Limites de fonctions") — the explanation text is a live hesitant self-correction ("Reprenons...", "hmm", contradicts itself mid-explanation) and concludes the correct answer is option D (1/3) while `correctId` is set to "C". This is the exact anti-pattern the user described from memory — it was not asked to be fixed in this task, but should be surfaced.
