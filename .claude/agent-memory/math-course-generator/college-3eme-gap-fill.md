---
name: college-3eme-gap-fill
description: 2026-06-22 gap-fill for 3ème (cycle 4, dernière année) vs programme officiel — 1 lesson added to equations-3eme-id + 2 new courses (identites-remarquables-3eme, algorithmique-programmation-3eme) in lib/seed-data.ts
metadata:
  type: project
---

Audited all existing `schoolLevel: "3eme"` courses in `lib/seed-data.ts` against the official French collège cycle-4 programme (dernière année). Existing 3ème courses confirmed sufficient and untouched: `thales-3eme-id`, `fonctions-3eme-id`, `racines-3eme-id`, `trig3-id`, `stat3-id`, `esp3-id`, `rev3-id`. Note: `stat3-id` deliberately has no quartiles (lycée topic), `esp3-id` already fully covers ×k/×k²/×k³ scaling effects — neither was touched.

Three gaps filled:

1. **4th lesson added to existing `equations-3eme-id`** course: `eqineq3-4` (slug `systemes-equations`, NOT `eqineq3-l4` — matches this course's existing lesson-id convention of dropping the "l"), inserted right after `eqineq3-3` and before the `// 3ème — Fonctions linéaires et affines` comment. Covers solving a 2×2 linear system by substitution AND by combination/elimination, with mandatory verification in both original equations. Exercise ids use the "l" format per this course's convention: `eqineq3-l4-e1`..`e5`.

2. **`identites-remarquables-3eme`** (slug same — deliberate id===slug pattern per [[college-4eme-gap-fill]] precedent, `subject: "algebre"`, thumbnailEmoji `²`) — the advanced calcul littéral chapter missing everywhere: identités remarquables (never covered; 4ème only had simple distributivité-based dévelopement/factorisation). 2 lessons:
   - `ir3-l1` (`developper-identites-remarquables`): the 3 formulas $(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$, developing.
   - `ir3-l2` (`factoriser-identites-remarquables`): same 3 formulas read backwards to factor, including the "hidden difference of squares" trap (e.g. $4x^2-9$).

3. **`algorithmique-programmation-3eme`** (slug same, `subject: "arithmetique"`, thumbnailEmoji `🐍`) — extends the [[college-4eme-gap-fill]] / [[college-5eme-gap-fill]] / [[college-6eme-gap-fill]] algo progression (6e: grid+simple loops; 5e: variables+counter loops+conditionals; 4e: nested loops+reusable blocks+accumulator sequences). 3 lessons:
   - `algo3-l1` (`boucle-tant-que`): "tant que" loop vs 4e's "répéter n fois" — condition-based repetition, infinite-loop pitfall.
   - `algo3-l2` (`fonctions-parametres-valeur-retour`): functions now take parameters AND return a value (beyond 4e's plain reusable blocks), including a function calling another function.
   - `algo3-l3` (`algorithme-recherche-seuil`): combines "tant que" with the accumulator-sequence pattern from 4e to find the first term of an arithmetic sequence exceeding a threshold; cross-checked against the explicit formula $u_n=u_0+nr$.

Inserted both new courses right before `// 3ème — Révisions générales` (before `rev3-id`), after the *4ème* révisions course `rev4-id` — confirmed via grep that `rev3-id` directly follows `rev4-id` with no other 3ème course in between, so insertion point was correct.

20 new exercises total (5 in eqineq3-4 + 10 in identites-remarquables-3eme + 15 in algorithmique-programmation-3eme... actually 5+10+15=30). All e1-e2 debutant, e3-e4 intermediaire, e5 expert, mixed mcq/true_false/open per style mandate. `npx tsc --noEmit` clean.

**Duplicate-checker note:** transpile-and-require check script needed a tweak this round — `ts.transpileModule` + bare `require()` fails because `seed-data.ts` does `require('./licence-courses')` (extensionless, `.ts`) which Node can't resolve directly. Fix: transpile both `seed-data.ts` and `licence-courses.ts` to a scratch dir (e.g. `/tmp/seedcheck/`) as sibling `.js` files first, then `require()` the scratch copy. Flagged "duplicates" were exactly the same benign `id === slug`-by-design pattern as prior gap-fills (now 10 such pairs total across 6e/5e/4e/3e) plus 4 pre-existing licence-courses entries (`notion-de-vecteur`, `arbres-ponderes-et-probabilites-totales`, `applications-lineaires`, `theoreme-central-limite`) — all confirmed single-course via grep, zero real cross-course collisions.

**Skill availability:** `generateur-de-cours-maths` checked via ToolSearch and Skill tool — confirmed unavailable (5th consecutive time after 2nde/1ère/terminale/4ème). Explicitly disclosed to user before proceeding manually, per system prompt requirement. Content generated manually following the exact style calibrated from `n6-l1` (the canonical `## Exemples` / `### ✅ Exemple simple` / `### 📘 Exemple intermédiaire` / `### 🔴 Exemple avancé` / `## À retenir` template) and the existing `eqineq3-*` lessons for naming-convention fidelity.

Related: [[project-alphamath-seed-data]], [[college-4eme-gap-fill]], [[college-5eme-gap-fill]], [[college-6eme-gap-fill]]. Collège (6e-3e) gap-fill work now appears complete across all 4 cycle-4 levels.
