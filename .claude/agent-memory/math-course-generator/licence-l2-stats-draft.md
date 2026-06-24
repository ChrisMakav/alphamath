---
name: licence-l2-stats-draft
description: L2 course on statistical inference (estimation + hypothesis testing) — INTEGRATED into lib/licence-courses.ts (subject corrected to "statistiques")
metadata:
  type: project
---

**UPDATE — INTEGRATED:** this course was copied into `lib/licence-courses.ts` (in `LICENCE_COURSES`), with `subject` corrected from `"probabilites"` to `"statistiques"` (the dedicated subject category for this kind of course, added after this draft was first written). Integrated alongside [[licence-l2-euclidien-draft]] and a newly written `algebre-abstraite-l2` course (groupes/anneaux/corps) in the same pass. `tsc --noEmit` clean afterward. The `/tmp/l2-stats.ts` draft file was deleted post-integration.

Wrote a complete L2 course "Statistique : estimation et tests d'hypothèses" (id `stats-l2`, slug `statistique-estimation-tests-l2`) ONLY to `/tmp/l2-stats.ts` — no file under `/Users/rachidemabila/Desktop/alphamath` was modified or left behind. Verified via temporary copy+delete into `lib/` against the project's strict tsconfig (no errors), then removed the copy; confirmed clean with `git status --short`.

**Why this course was needed:** the existing `proba-l2` course (in `lib/licence-courses.ts`) covers continuous random variables, usual laws, and the CLT, but only mentions confidence intervals in a single bare formula with zero exercises. There was no L2 course at all on estimation theory or hypothesis testing — both standard, mandatory chapters of the French L2 math curriculum.

**Content:** 3 lessons, 45 exercises total (15 each, exactly 5 débutant / 5 intermédiaire / 5 expert per lesson, 2 `open` exercises in the expert band per lesson):
- `stat-l2-1` échantillonnage-et-estimateurs: estimator bias/convergence, biased vs corrected (n-1) sample variance, EQM bias-variance decomposition.
- `stat-l2-2` intervalles-de-confiance: CI for mean (known/unknown variance, Student), CI for proportion, sample-size determination.
- `stat-l2-3` tests-d-hypotheses: H0/H1, test statistic, rejection region, type I/II errors, p-value, one-sample and two-sample (Welch) Student tests, CI/test duality.

**Bug found and fixed during self-review (this pass):** in lesson 3, exercises e6-e10 were initially miscounted — e10 was tagged `difficulty: "expert"` while only being basic plug-in-the-formula algebra (computing one square root for a Welch standard error), leaving only 4 "intermediaire" and 6 "expert" exercises instead of the required 5/5/5 split. Fixed by retagging e10 to `"intermediaire"` (content-appropriate) before delivery — caught by an explicit per-exercise difficulty-count script, not by visual inspection.

All numeric examples (CIs, t-stats, p-values) were independently verified with `scipy.stats` (norm.ppf, t.ppf, t.cdf) before writing the explanations — e.g. z_0.025=1.960, t_0.025,15=2.131, t_0.025,24=2.064, Welch df≈66.5/tcrit≈1.996, etc. — so no hand-arithmetic-only verification was used for this draft, unlike some earlier ones.

This is the 10th confirmed occurrence that the `generateur-de-cours-maths` skill is unavailable (see [[project-alphamath-seed-data]] index for the running count). To integrate this course, copy the `STATS_L2_COURSE` object into `lib/licence-courses.ts` (add to the `LICENCE_COURSES` array) — not yet done, per explicit task scope ("ne touche à AUCUN autre fichier").
