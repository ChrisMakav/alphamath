---
name: project-alphamath-seed-data
description: Structure and conventions of lib/seed-data.ts, the single source of truth for AlphaMath course content, plus known pre-existing data issues
metadata:
  type: project
---

`/Users/rachidemabila/Desktop/alphamath/lib/seed-data.ts` holds the entire `COURSES: Course[]` array (~16.5k lines, 59 courses, after the 2nde+1ère+terminale lycée rollout). Schema: `Course` (id, slug, title, description, schoolLevel, subject, difficulty, isFree, thumbnailEmoji, lessons) → `Lesson` (id, slug, title, content markdown+LaTeX, durationMinutes, exercises) → `Exercise` (id, question, type mcq/true_false/open, options, correctId, modelAnswer, explanation, difficulty debutant/intermediaire/expert).

**Why:** This is the only data file for the e-learning content; there's no DB-backed CMS for lessons yet, so all course authoring is direct edits to this TS file.

**How to apply:** When adding courses, follow the exact id/slug naming convention already used throughout: course id `"<prefix>-id"`, lesson id `"<prefix>-l<N>"`, exercise id `"<prefix>-l<N>-e<M>"`. French decimal commas inside LaTeX math must be escaped as `{,}` (e.g. `0{,}5`). Insert new courses via Edit targeting the anchor `"  },\n];\n\n// Helpers"` right before `export function getCourseBySlug`.

**Known pre-existing data issue (not introduced by recent work) — CORRECTED COUNT (2026-06-23): 16 false positives, not 2.** Re-running the duplicate checker against the full 99/102-course catalog (not just licence-courses.ts) surfaces 16 pre-existing false positives, confirmed via `git stash` to exist identically before any of this session's edits:
- 10 courses with `id === slug` literally (no `-id`/`-l3` suffix pattern): `fractions-6eme`, `proportionnalite-6eme`, `grandeurs-mesures-6eme`, `algorithmique-6eme`, `donnees-statistiques-5eme`, `algorithmique-programmation-5eme`, `angles-paralleles-4eme`, `algorithmique-programmation-4eme`, `identites-remarquables-3eme`, `algorithmique-programmation-3eme`, `algorithmique-python-2nde`, `algorithmique-python-1ere` (12 total of this kind, not 2 — the original "2" count only checked licence-courses.ts in isolation, missing the lycée/collège gap-fill courses added in other sessions).
- 4 cross-course **lesson slug** collisions (same lesson `slug` string reused in two different courses — NOT an id collision, just a human-readable slug that happens to coincide; functionally harmless since lessons are addressed by id, not slug, in app code): `notion-de-vecteur` (vec2-id vs vec4-id), `arbres-ponderes-et-probabilites-totales` (pin1-id vs pco1-id), `applications-lineaires` (algebre-l1 vs algebre-lineaire-L1), `theoreme-central-limite` (proba-l2 vs probabilites-L2).
None of these are actual id collisions; all are either id===slug self-matches or harmless lesson-slug reuse across unrelated courses. Safe to ignore for any single-course addition task — do not "fix" by guessing; confirm with the user before renaming since other code may reference these ids/slugs.

**Verification routine for any seed-data.ts or licence-courses.ts change:**
1. `cd /Users/rachidemabila/Desktop/alphamath && npx tsc --noEmit` must be clean.
2. Transpile-and-require duplicate check script, run against the **full compiled catalog** (`COURSES` from `seed-data.ts`, which pulls in `LICENCE_COURSES` via import+push) — not just `licence-courses.ts` in isolation, to catch cross-file collisions. Pattern: monkey-patch `Module._resolveFilename` to redirect `./licence-courses` to the absolute `.ts` path, register a custom `require.extensions['.ts']` that runs `ts.transpileModule`, then `require()` the seed-data path directly. Expect the 16 pre-existing false positives above and zero others.
3. 5/5/5 split check should run against the **compiled** `COURSES` array too (via the same require trick), not just regex over the raw source — this catches any drift introduced during the JSON-into-template-literal splicing step, not only authoring-time drift.

Related: [[lyc-2nde-courses-added]] for the 8 "2nde" courses, [[lyc-1ere-courses-added]] for the 7 "1ère spécialité" courses, [[lyc-terminale-courses-added]] for the 7 "terminale spécialité" courses (lycée rollout now complete: 23 new courses across the 3 levels), and [[college-6eme-gap-fill]] for the 2026-06-22 6ème programme gap-fill (2 lessons added to existing courses + 2 new courses).

**Pitfall confirmed 2026-06-22:** triple-backtick markdown code fences (```) inside a lesson's `content` template literal can break the JS template literal parsing in this file. Use blockquote style (`>`) instead for "code-like" displayed blocks (e.g. pseudo-Scratch instruction sequences), consistent with the rest of the file's existing style.
