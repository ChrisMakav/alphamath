---
name: licence-l2-edo2-draft
description: Draft L2 lesson on 2nd-order constant-coefficient linear ODEs written to /tmp/l2-edo2.ts, not yet integrated into lib/licence-courses.ts
metadata:
  type: project
---

A complete L2 lesson on **équations différentielles linéaires du second ordre à coefficients constants** (id `anal2-l2-4`, slug `equations-differentielles-second-ordre`) was generated and written EXCLUSIVELY to `/tmp/l2-edo2.ts` (not in the repo — confirmed lib/ untouched). Intended as lesson 4 of the existing `analyse-l2` course (id `analyse-l2` in [[licence-courses-added]]), directly following `anal2-l2-3` (1st-order ODEs).

**Content (8 sections):** equation caractéristique, cas Δ>0/Δ=0/Δ<0 (with worked examples each verified by substitution), second membre (polynomial/exponential non-resonant/résonance simple/résonance double/trigonometric), problème de Cauchy, application oscillateur harmonique (régimes libre/sous-critique/critique/sur-amorti).

**15 exercises** (5 debutant/5 intermediaire/5 expert, 3 open among experts at e11/e13/e15 — within the allowed 2-3 range), mcq A/B/C/D, true_false V/F("Vrai"/"Faux") — all verified by regex script. `tsc --noEmit --strict` clean.

**Verification method:** every characteristic equation, particular solution, and Cauchy-problem constant was checked symbolically with sympy (substitution into the ODE simplifies to exactly 0) before writing the lesson — including a fully symbolic proof of exercise e15 (general proof that $xe^{rx}$ solves $ay''+by'+cy=0$ when $r$ is a double root, verified by substituting $b=-2ar$ and $c=ar^2$ into the simplified expression, yielding 0). No bugs of the "contradicting correctId/explanation" anti-pattern found this time (cross-checked all 10 non-open correctId values against their explanations manually).

**Style note:** followed the denser/more condensed markdown style of `anal2-l2-3` (L2 lessons are noticeably terser than L1 lessons like `anal1-l1-1`/`anal1-l1-suites`) rather than the more verbose L1 style — confirmed appropriate by reading both reference lessons before writing.

**Integration not done:** user will review and integrate manually. To integrate: import `EDO2_LESSON` from this file (fix the import path from absolute `/Users/.../lib/seed-data` to relative `./seed-data` first), then push into the `lessons` array of the `analyse-l2` course in `lib/licence-courses.ts` (after the last existing lesson), following the pattern in [[licence-courses-added]].

**ID COLLISION WARNING (discovered later):** a different lesson — "Suites et séries de fonctions : convergence simple et uniforme" — was integrated into `analyse-l2` using the id `anal2-l2-4` (see [[licence-l1-gap-fill]]), so `analyse-l2` now has 4 lessons (`anal2-l2-1..4`) without this EDO2 draft. Before integrating this draft, rename its lesson id from `anal2-l2-4` to `anal2-l2-5` (and rename the 15 exercise ids `anal2-l2-4-e1..15` to `anal2-l2-5-e1..15` accordingly) to avoid a duplicate id.

**Note on skill availability:** `generateur-de-cours-maths` skill was explicitly attempted via the Skill tool this session and returned "Unknown skill" — confirms unavailability (9th consecutive confirmed-unavailable session across L1/L2/L3 and lycée/college passes, see [[licence-l1-logique-draft]] for the 8th).
