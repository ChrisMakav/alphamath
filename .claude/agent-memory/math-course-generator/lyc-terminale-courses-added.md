---
name: lyc-terminale-courses-added
description: The 7 "terminale spécialité" courses added to seed-data.ts, their slugs/prefixes, and confirmation the generateur-de-cours-maths skill is consistently unavailable
metadata:
  type: project
---

Added 7 new courses for "terminale" (French 12th grade, spécialité mathématiques) to `lib/seed-data.ts`, each with 3 lessons and exactly 15 exercises, 105 exercises total. COURSES array grew from 52 to 59 (file now ~16.5k lines).

| Prefix | id | slug | subject | difficulty |
|---|---|---|---|---|
| lst1 | lst1-id | limites-de-suites-terminale | analyse | Avancé |
| lcf1 | lcf1-id | limites-et-continuite-terminale | analyse | Avancé |
| cvx1 | cvx1-id | derivation-et-convexite-terminale | analyse | Avancé |
| exp1 | exp1-id | fonction-exponentielle-terminale | analyse | Avancé |
| lnt1 | lnt1-id | fonction-logarithme-terminale | analyse | Avancé |
| pin1 | pin1-id | probabilites-conditionnelles-terminale | probabilites | Avancé |
| vab1 | vab1-id | variables-aleatoires-terminale | probabilites | Avancé |

Per-course exercise difficulty split (each totals exactly 15): lst1 7/5/3, lcf1 7/5/3, cvx1 6/6/3, exp1 6/7/2, lnt1 7/5/3, pin1 8/5/2, vab1 7/5/3 (debutant/intermediaire/expert).

**Why:** Project task #35 (now completed) — third and final wave of the lycée content rollout, after [[lyc-2nde-courses-added]] (task #33) and [[lyc-1ere-courses-added]] (task #34). Task #36 (final cross-check of ALL new lycée content, 2nde+1ère+terminale together) is still pending as of 2026-06-16.

**Confirmed pattern — skill `generateur-de-cours-maths` is reliably unavailable:** tried invoking it again at the start of this session (per the instruction to re-check each time) and got "Unknown skill" again, the third consecutive time across 2nde/1ère/terminale batches. This is no longer a one-off — it should be treated as a standing fact about this environment, not re-investigated each time, though still worth a one-line disclosure to the user before each manual-authoring pass. Proceeded directly to manual authoring following established conventions, as instructed when the skill is confirmed absent.

**Topics covered per course (for future content-gap checks):** lst1 = limites de suites usuelles ($q^n$, suites arithmétiques/géométriques), théorèmes de comparaison/gendarmes, récurrence; lcf1 = limites de fonctions, asymptotes horizontale/verticale, continuité, TVI + corollaire stricte monotonie; cvx1 = dérivée de composée, dérivée seconde, convexité/concavité, point d'inflexion, position courbe/tangente (incl. preuve $e^x\\geqslant x+1$); exp1 = définition $f'=f,f(0)=1$, propriétés algébriques, variations, limites, dérivée de $e^{u(x)}$, croissances comparées; lnt1 = $\\ln$ comme réciproque de $\\exp$, propriétés algébriques, dérivée $1/x$ et $u'/u$, limites usuelles, équations mêlant exp/ln (incl. demi-vie radioactive); pin1 = $P_A(B)$, indépendance $P(A\\cap B)=P(A)P(B)$, arbres pondérés multi-niveaux, probabilités totales (incl. exemple test de dépistage avec $P_T(M)$ contre-intuitif); vab1 = espérance/variance/écart-type (+ König-Huygens), loi binomiale rappel + $E(X)=np$, $V(X)=np(1-p)$, intervalle de fluctuation asymptotique à 95% avec conditions $n\\geqslant30, np\\geqslant5, n(1-p)\\geqslant5$.

**How to apply:** Verification routine identical to prior batches — `npx tsc --noEmit` clean, transpile-and-dup-check script (separate Sets for course id/slug/lesson id/exercise id) showing 0 real duplicates (the 2 known pre-existing id===slug false positives from [[project-alphamath-seed-data]] don't trigger in this version of the script since it doesn't combine id+slug into one set). Both checks passed cleanly on first try for this batch — no TS errors, no duplicates at all (not even the historical false positives, since this script variant separates the sets).
