---
name: college-6eme-gap-fill
description: 6ème curriculum gap-fill — priorités opératoires, cercle/disque, grandeurs et mesures, algorithmique courses added to seed-data.ts
metadata:
  type: project
---

Filled the remaining official 6ème programme gaps identified by audit (2026-06-22), all in `/Users/rachidemabila/Desktop/alphamath/lib/seed-data.ts`:

1. Lesson `n6-l4` (slug `priorites-operatoires`) appended to existing course `nombres-6eme`, right after `n6-l3` — calcul mental/posé, priorités opératoires.
2. Lesson `g6-l4` (slug `cercle-disque-constructions`) appended to existing course `geometrie-6eme`, right after `g6-l3` — vocabulaire cercle/disque, usage règle/équerre/compas/rapporteur (deliberately did not re-cover angle classification from g6-l1 or disk-area formula from aires-perimetres-6eme).
3. New course `grandeurs-mesures-6eme` (emoji 📏, subject `geometrie`) with 3 lessons: `gm6-l1` (longueurs-masses-durees), `gm6-l2` (conversions-unites), `gm6-l3` (mesurer-tracer-angles).
4. New course `algorithmique-6eme` (emoji 🧩, subject `arithmetique` — reused since `Subject` type has no algorithmique category) with 2 lessons: `algo6-l1` (reperage-quadrillage), `algo6-l2` (premiers-pas-programmation, Scratch-like pseudo-blocks).

Both new courses inserted just before the `// 6ème — Révisions générales` comment, keeping all 6ème content grouped. Total: 7 new lessons × 5 exercises = 35 exercises added. `npx tsc --noEmit` clean after.

**Why:** User had already audited the official 6ème programme against existing content themselves and pinpointed exactly these 4 gaps — no need to re-audit other 6ème topics (numbers, fractions, geometry basics, proportionality, symétrie, solides, stats already existed and were correctly identified as complete).

**How to apply:** 6ème is now fully complete against the official programme (nombres-calculs, grandeurs-mesures, géométrie, données-proportionnalité, algorithmique all covered). If asked to audit/extend 6ème again, start from this state rather than re-scanning from scratch.

**Process note:** during generation, a sub-agent run initially used triple-backtick markdown code blocks inside lesson `algo6-l2` content, which collided with the JS template-literal backticks wrapping the `content` string and broke the file — caught by `tsc --noEmit`, fixed by switching to blockquote/italic style instead of triple-backtick fences. Worth flagging to any future generation pass: never use triple-backtick fences inside `content` template literals in seed-data.ts — use blockquote (`>`) style for pseudo-code/algorithm blocks instead.

Related: [[project-alphamath-seed-data]]
