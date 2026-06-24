---
name: lyc-2nde-courses-added
description: The 8 "2nde" (tronc commun) courses added to seed-data.ts, their slugs/prefixes, and the broader lycée content rollout plan
metadata:
  type: project
---

Added 8 new courses for "2nde" (French 10th grade, tronc commun) to `lib/seed-data.ts`, each with 3 lessons and exactly 15 exercises (6 debutant / 6 intermediaire / 3 expert), 120 exercises total:

| Prefix | id | slug | subject |
|---|---|---|---|
| nc2 | nc2-id | nombres-et-calculs-2nde | arithmetique |
| eqi2 | eqi2-id | equations-inequations-2nde | algebre |
| fge2 | fge2-id | generalites-fonctions-2nde | analyse |
| fre2 | fre2-id | fonctions-de-reference-2nde | analyse |
| vec2 | vec2-id | vecteurs-reperage-2nde | geometrie |
| tri2 | tri2-id | trigonometrie-2nde | geometrie |
| sta2 | sta2-id | statistiques-descriptives-2nde | probabilites |
| pro2 | pro2-id | probabilites-2nde | probabilites |

**Why:** Part of a larger lycée content rollout — see project tasks #34 (1ère spécialité courses) and #35 (Terminale spécialité courses), both still pending as of 2026-06-16, plus #36 (final verification of all new lycée content, also pending).

**How to apply:** When generating #34/#35, reuse the same id/slug/prefix pattern (short 3-5 char lowercase prefix + `-id` suffix for course id), same exercise distribution (15 exercises/course, 6/6/3 across debutant/intermediaire/expert, mix of mcq ~40%, true_false ~10%, open ~50%), and same verification routine (tsc --noEmit + transpile-and-dup-check script) described in [[project-alphamath-seed-data]]. Avoid reusing any prefix listed here or in the original AGENTS-supplied collision list.

**Process note:** during authoring, one exercise (eqi2-l1-e5) initially got corrupted text from an editing mistake (leftover placeholder/repeated phrases) — caught immediately by re-reading the inserted block before moving to the next course, and fixed with a clean single edit. Worth always re-reading the last exercise of a freshly inserted lesson before proceeding to the next course, since template-string edits with heavy LaTeX are easy to garble.

**2026-06-22 gap-fill update:** audited the 8 courses above against the official 2nde curriculum and found 4 gaps, now filled:
1. `nc2-l4` (slug `intervalles-de-nombres-reels`) added to `nc2-id`, after `nc2-l3` — interval notation, union/intersection.
2. `pro2-l4` (slug `echantillonnage-et-simulation`) added to `pro2-id`, after `pro2-l3` — sampling/simulation, deliberately NOT using the formal fluctuation-interval formula (reserved for 1ère/Terminale).
3. New course `algorithmique-python-2nde` (id and slug identical), subject `arithmetique`, difficulty `Intermédiaire`, thumbnailEmoji `💻` (vs 🐍 for collège 3ème algo) — 3 lessons `algopy2-l1/l2/l3` (variables/types, loops/conditions, functions), each with real executable Python in ```python code blocks. Inserted right after `pro2-id`.
4. New course `rev2-id` (slug `revisions-2nde`), modeled exactly on `rev3-id`: 1 lesson `rev2-l1` (slug `bilan-progressif-2nde`) with exactly 15 exercises (5 debutant/5 intermediaire/5 expert), difficulty `Avancé`, thumbnailEmoji `🎯`. Inserted as the last 2nde course, right before 1ère content begins (`sec1-id`).

Note the exercise-distribution convention differs between this batch (2/2/1 per normal lesson, 5 exercises total) and the original 8 courses above (6/6/3, 15 exercises total) — this gap-fill batch followed explicit user instructions for a 5-exercise-per-lesson template instead. Don't assume one distribution is "the" standard; check what the current task specifies.

This was confirmed as the final gap-fill needed for 2nde; lycée rollout (2nde/1ère/Terminale, see [[lyc-1ere-courses-added]] and [[lyc-terminale-courses-added]]) is now fully complete including curriculum-gap audits for all three levels.
