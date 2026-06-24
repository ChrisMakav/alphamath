---
name: lyc-1ere-courses-added
description: The 7 "1ère spécialité" courses added to seed-data.ts, their slugs/prefixes, and a note that the generateur-de-cours-maths skill was unavailable for this pass
metadata:
  type: project
---

Added 7 new courses for "1ère" (French 11th grade, spécialité mathématiques) to `lib/seed-data.ts`, each with 3 lessons and exactly 15 exercises, 105 exercises total. COURSES array grew from 45 to 52.

| Prefix | id | slug | subject | difficulty |
|---|---|---|---|---|
| sec1 | sec1-id | second-degre-1ere | algebre | Intermédiaire |
| der1 | der1-id | derivation-1ere | analyse | Intermédiaire |
| etf1 | etf1-id | etude-de-fonctions-1ere | analyse | Intermédiaire |
| psc1 | psc1-id | produit-scalaire-1ere | geometrie | Intermédiaire |
| trg1 | trg1-id | trigonometrie-1ere | geometrie | Intermédiaire |
| pco1 | pco1-id | probabilites-conditionnelles-1ere | probabilites | Avancé |
| lbi1 | lbi1-id | loi-binomiale-1ere | probabilites | Avancé |

Per-course exercise difficulty split (not perfectly 5/5/5, but each course has all three levels represented and totals exactly 15): sec1 7/5/3, der1 7/5/3, etf1 5/7/3, psc1 7/5/3, trg1 7/4/4, pco1 6/6/3, lbi1 7/4/4.

**Why:** Project task #34 (now completed) — second wave of the lycée content rollout, after [[lyc-2nde-courses-added]] (task #33). Task #35 (Terminale spécialité) and #36 (final cross-check of all new lycée content) are still pending as of 2026-06-16.

**Important process deviation:** the skill `generateur-de-cours-maths` (which the system prompt mandates be invoked for every course-generation task) was NOT available in this session — `Skill` tool call returned "Unknown skill". This was explicitly flagged to the user before proceeding manually. The course content was authored by hand instead, following the same structure/conventions as prior batches. If a future session also finds this skill missing, flag it again rather than assuming it was a one-off; it may be a deployment/config issue worth raising with the user proactively.

**How to apply:** When generating #35 (Terminale), reuse the same id/slug/prefix pattern, same verification routine (tsc --noEmit clean, transpile-and-dup-check script showing 0 real duplicates plus the 2 known pre-existing false positives from [[project-alphamath-seed-data]]), and re-check skill availability first — try invoking `generateur-de-cours-maths` again and only fall back to manual authoring (with explicit disclosure) if it's still missing.
