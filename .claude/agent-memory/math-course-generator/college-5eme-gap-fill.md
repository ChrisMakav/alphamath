---
name: college-5eme-gap-fill
description: 5ème curriculum gap-fill — patrons prisme/cylindre, données-statistiques (moyenne pondérée), algorithmique-programmation courses added to seed-data.ts
metadata:
  type: project
---

Filled the 3 official 5ème programme gaps the user had already identified by self-audit (2026-06-22), all in `/Users/rachidemabila/Desktop/alphamath/lib/seed-data.ts`:

1. Lesson `aire5-l4` (slug `patrons-prisme-cylindre`) appended to existing course `aire5-id` (Aires et volumes prismes/cylindres), right after `aire5-l3` ("Le cylindre de révolution") — vocabulaire faces/arêtes/sommets/bases, perspective cavalière, reconnaître un patron valide pour prisme droit et cylindre (longueur du rectangle latéral = 2πr).
2. New course `donnees-statistiques-5eme` (emoji 📈, subject `probabilites`) with 2 lessons: `stat5-l1` (tableaux-effectifs-frequences — effectifs cumulés, fréquences en %, lien angle/fréquence en diagramme circulaire) and `stat5-l2` (moyenne-ponderee — LA notion clé 5e vs 6e, formule Σ(valeur×poids)/Σ(poids), exemples notes à coefficients et tableaux d'effectifs).
3. New course `algorithmique-programmation-5eme` (emoji 🔁, subject `arithmetique`, prolonge `algorithmique-6eme`) with 3 lessons: `algo5-l1` (reperage-nombres-relatifs — repère à 4 quadrants, lien explicite avec le cours `relatifs-5eme`), `algo5-l2` (variables-et-boucles — variable comme compteur, boucle "répéter n fois" avec n variable), `algo5-l3` (tests-conditionnels — si/alors et si/alors/sinon, y compris combiné à une boucle).

Both new courses inserted just before the `// 5ème — Révisions générales` comment (before `rev5-id`), keeping all 5ème content grouped — same pattern as the 6ème gap-fill. Total: 6 new lessons × 5 exercises = 30 exercises added. `npx tsc --noEmit` clean after (no errors).

**Why:** User had already audited the official 5ème (cycle 4) programme against existing content and pinpointed exactly these 3 gaps — no need to re-audit other 5ème topics (relatifs, fractions, proportionnalité, symétrie/parallélogramme, calcul littéral, triangles, aires/volumes-without-patrons already existed and were correctly identified as complete except the patron sub-topic).

**How to apply:** 5ème is now complete against the official programme pending this gap-fill (nombres-calculs incl. relatifs, géométrie incl. solides+patrons, données-statistiques incl. moyenne pondérée, algorithmique-programmation incl. relatifs/variables/conditions all covered). If asked to audit/extend 5ème again, start from this state.

**Process note confirmed again:** avoided triple-backtick fences inside lesson `content` template literals (used `>` blockquote style for pseudo-code, e.g. in algo5-l2/l3) — this is the same pitfall flagged in [[college-6eme-gap-fill]] for the 6ème pass; still holds.

Related: [[project-alphamath-seed-data]], [[college-6eme-gap-fill]]
