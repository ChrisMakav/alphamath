---
name: licence-l3-fourier-draft
description: Draft L3 lesson on Fourier series written ONLY to /tmp/l3-fourier.ts, not integrated into the codebase
metadata:
  type: project
---

Wrote a complete L3 lesson "Séries de Fourier" (id `anal3-l3-4`, slug `series-de-fourier`) ONLY to `/tmp/l3-fourier.ts` — no file under `/Users/rachidemabila/Desktop/alphamath` was left modified. Verified via temporary copy into `lib/__tmp_fourier_check.ts` against the project's strict tsconfig (`npx tsc --noEmit -p .` → zero errors), then deleted the copy; confirmed clean with `git status --short lib/`.

**Why this lesson was needed:** the existing `analyse-l3` course (in `lib/licence-courses.ts`) covers differentiability, extrema, and multiple integrals (lessons `anal3-l3-1/2/3`) but had no lesson on Fourier series — a classic, mandatory chapter of the French L3 analysis curriculum. This new lesson is meant to be appended as the 4th lesson of `analyse-l3`.

**Content (9 numbered sections):** periodic functions, trigonometric coefficients $a_n,b_n$ and complex coefficients $c_n$ (with conversion formulas), parity simplifications, worked examples (créneau/dents-de-scie/triangle with full IPP derivations), Dirichlet theorem (pointwise convergence, half-sum at jumps, Leibniz formula as application), Parseval equality with the classical derivation of $\sum 1/n^2=\pi^2/6$ (Basel problem) from the créneau's coefficients, and a recap table.

**15 exercises** (5 débutant / 5 intermédiaire / 5 expert, 3 `open` in the expert band — e11, e12, e15): all numeric coefficients ($b_n$ créneau, dents-de-scie, $a_n$ triangle) and all summation identities ($\sum 1/(2k+1)^2=\pi^2/8$, $\sum 1/(2k+1)^4=\pi^4/96$, $\zeta(2)=\pi^2/6$, $\zeta(4)=\pi^4/90$) were independently verified with `sympy` (symbolic integration + `sp.zeta`) before writing explanations — all matched exactly, no errors found in this pass.

**Bug found and fixed during self-review (this pass):** the original §1 motivating equation used LaTeX double-backtick-quote marks `\\text{``}=\\text{''}\\;` to write a stylized "informally equals" sign. Because the lesson content is a JS template literal, the literal `` ` `` characters (even though escaped only at the LaTeX-string level, not as JS escapes) terminated the template string early, causing `tsc` error TS2349 ("This expression is not callable") at the `content:` line. Fixed by replacing with plain text `\\text{(formellement)}=\\;` (no backtick characters). This is the same general class of bug as the "backtick-in-template-literal pitfall" noted in [[college-6eme-gap-fill]] — confirms this is a recurring risk whenever LaTeX typographic quote marks (`` ` `` or `´`) are used inside template-literal content, not just a one-off.

This is the 11th confirmed occurrence that the `generateur-de-cours-maths` skill is unavailable (explicit "Unknown skill" error). To integrate: copy the `FOURIER_LESSON` object from `/tmp/l3-fourier.ts` into the `lessons` array of the `analyse-l3` course in `lib/licence-courses.ts`, right after lesson `anal3-l3-3` (ends around line 4998-5001 in the version read this pass) — not yet done, per explicit task scope ("écris EXCLUSIVEMENT dans /tmp/l3-fourier.ts").
