---
name: licence-l1-logique-draft
description: Draft course on logic, sets, and proof methods (L1 S1) written to /tmp/l1-logique.ts, not yet integrated into lib/licence-courses.ts
metadata:
  type: project
---

A complete L1 S1 course on **logique, ensembles et raisonnement** (id `logique-l1`, slug `logique-ensembles-raisonnement-l1`) was generated and written EXCLUSIVELY to `/tmp/l1-logique.ts` (not in the repo — `lib/seed-data.ts` and `lib/licence-courses.ts` were NOT touched, confirmed via `git status --short lib/`).

**Why this gap existed:** despite [[licence-courses-added]], [[licence-l1-complexes-draft]], and [[licence-l1-polynomes-draft]] adding L1 content, no course covered the foundational logic/sets/proof-methods chapter — traditionally the very first chapter of French L1 S1, underpinning every proof in every other course.

**Structure (3 lessons x 15 exercises = 45 total, 8 sections per lesson):**
1. `log1-l1-1` (logique-propositionnelle-quantificateurs) — connecteurs, tables de vérité, contraposée/réciproque, De Morgan, quantificateurs, négation simple puis multiple, piège ordre ∀∃ vs ∃∀.
2. `log1-l1-2` (ensembles-relations-applications) — inclusion/égalité, opérations ensemblistes + De Morgan ensembliste + P(E), relations binaires, équivalence, ordre, applications, injection/surjection/bijection, composition/réciproque.
3. `log1-l1-3` (methodes-de-raisonnement) — direct, contraposée, absurde (√2 irrationnel complet), disjonction de cas, récurrence simple (preuve complète Σk), récurrence forte (Fibonacci-like ≤2^n), analyse-synthèse (décomposition paire/impaire complète), tableau de choix de méthode.

Each lesson: exactly 5 debutant / 5 intermediaire / 5 expert (verified programmatically), 2 open exercises per lesson among experts (e11 and e13 each time, with modelAnswer + clean explanation), rest mcq/true_false. true_false uses id "V"/"F" convention throughout (14 instances checked). mcq options strictly A/B/C/D (25 instances). Zero occurrences of the literal-`\n`-bug pattern. `tsc --noEmit --strict` on the isolated file: zero errors.

**Bug found and fixed before delivery:** exercise `log1-l1-3-e14` (récurrence forte, suite définie par u0=1,u1=3,u_{n+2}=3u_{n+1}-2u_n) originally asked to prove `u_n=2^n+1`, which is mathematically FALSE for this recurrence (u_0 would need to be 2, not 1). The explanation also contained the exact forbidden anti-pattern: live hesitant self-correction ("attention, vérifions... en fait..."). Root cause found via sympy: the correct closed form is `u_n=2^{n+1}-1` (sequence 1,3,7,15,31,...). Rewrote the question with the correct formula and a clean, direct, non-hesitant explanation; re-verified the induction step symbolically with sympy (3·u_{n+1} − 2·u_n = u_{n+2} holds exactly). This is now the second instance of this specific anti-pattern found in this codebase's history (first was the pre-existing uncorrected `anal1-l1-1-e12` in production `lib/licence-courses.ts`, see [[licence-l1-polynomes-draft]]) — worth flagging as a recurring failure mode when generating "récurrence forte" exercises with arbitrary linear recurrences without computing the closed form first.

**All other worked examples verified numerically/symbolically before delivery:** Fibonacci-like sequence u_n≤2^n (checked n=0..14), bijection f(x)=(x+1)/(x-2) inverse f⁻¹(y)=(2y+1)/(y-1) (sympy solve), Σk=n(n+1)/2 (checked n=0..9), 4^n−1 divisible by 3 (checked n=0..9), De Morgan/contraposée logic checked by truth table reasoning.

**Integration not done:** user will review and integrate manually. To integrate later: import `LOGIQUE_L1_COURSE` from this file (fix the import path from the absolute `/Users/.../lib/seed-data` to relative `./seed-data` first) and push into `LICENCE_COURSES` array in `lib/licence-courses.ts`, following the pattern in [[licence-courses-added]]. Note this course is conceptually prerequisite to all other L1 courses — if integrated, consider whether course ordering/display logic anywhere in the app assumes a particular sequence.

**Note on skill availability:** `generateur-de-cours-maths` skill was not present in this session's available skills list — generated inline again, consistent with all prior L1/L2/L3 and lycée/college passes (8th consecutive confirmed-unavailable session).
