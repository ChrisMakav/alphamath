import type { SchoolLevel } from "./seed-data";

export type OlympiadDifficulty = "Intermédiaire" | "Avancé" | "Expert";

export interface OlympiadProblem {
  id: string;
  title: string;
  competition: string;
  year: number;
  level: SchoolLevel | "superieur";
  levelNote?: string;
  domain: string;
  difficulty: OlympiadDifficulty;
  statement: string; // Markdown + LaTeX, rendu via MathContent
  solution: string; // Markdown + LaTeX, rendu via MathContent
  sourceLabel: string;
  sourceUrl: string;
  correctionSourceLabel?: string;
  correctionSourceUrl?: string;
}

export const OLYMPIAD_DIFFICULTY_LABELS: Record<OlympiadDifficulty, string> = {
  "Intermédiaire": "Intermédiaire",
  "Avancé": "Avancé",
  "Expert": "Expert",
};

export const OLYMPIAD_PROBLEMS: OlympiadProblem[] = [
  {
    id: "kangourou-2024-carre-imbrique",
    title: "Le carré et les deux triangles imbriqués",
    competition: "Kangourou des mathématiques — Sujet C (catégorie Cadet)",
    year: 2024,
    level: "3eme",
    levelNote: "4ème – 3ème",
    domain: "Géométrie",
    difficulty: "Intermédiaire",
    statement:
      "La figure du sujet officiel représente un carré grisé et deux triangles rectangles imbriqués (voir le lien source pour le schéma exact). Le triangle $JIK$ est rectangle en $I$, et le triangle $JKL$ est rectangle en $K$ ; le côté $JK$ du premier triangle est aussi un côté du second, et le côté $JL$ du triangle $JKL$ est un côté du carré grisé.\n\nOn donne $IJ = 2$ cm, $IK = 1$ cm et $KL = 2$ cm.\n\nQuelle est l'aire du carré grisé, en cm² ?\n\nA) 6 — B) 7 — C) 8 — D) 9 — E) 11",
    solution:
      "On applique deux fois le théorème de Pythagore, en raisonnant directement sur les carrés des longueurs (pas besoin d'extraire de racine carrée à chaque étape).\n\nDans le triangle $JIK$, rectangle en $I$ :\n$$JK^2 = IJ^2 + IK^2 = 2^2 + 1^2 = 5$$\n\nDans le triangle $JKL$, rectangle en $K$ :\n$$JL^2 = JK^2 + KL^2 = 5 + 2^2 = 9$$\n\nLe côté du carré grisé est $JL$, donc son aire vaut $JL^2 = 9$ cm².\n\n**Réponse : D) 9**",
    sourceLabel: "Sujet officiel Kangourou des mathématiques 2024, Sujet C, question 15",
    sourceUrl: "https://www.mathkang.org/pdf/kangourou2024c.pdf",
    correctionSourceLabel: "Corrigé officiel (réponse D confirmée)",
    correctionSourceUrl: "https://www.mathkang.org/concours/sol2024c.html",
  },
  {
    id: "kangourou-2023-listes-consecutives",
    title: "Les listes d'entiers consécutifs de somme 54",
    competition: "Kangourou des mathématiques — Sujet C (catégorie Cadet)",
    year: 2023,
    level: "3eme",
    levelNote: "3ème – 4ème",
    domain: "Arithmétique",
    difficulty: "Intermédiaire",
    statement:
      "Combien de listes de plusieurs (au moins deux) entiers naturels consécutifs ont pour somme 54 ?",
    solution:
      "Une liste de $k \\geq 2$ entiers consécutifs commençant à $a \\geq 0$ a pour somme\n$$a + (a+1) + \\dots + (a+k-1) = ka + \\frac{k(k-1)}{2}.$$\n\nOn cherche $ka + \\dfrac{k(k-1)}{2} = 54$, soit, en multipliant par 2 :\n$$k(2a + k - 1) = 108.$$\n\nPour chaque diviseur $k \\geq 2$ de 108, on calcule $2a + k - 1 = 108/k$, puis on vérifie que $a = \\dfrac{108/k - k + 1}{2}$ est un entier naturel ($\\geq 0$).\n\n- $k=3$ : $108/3=36$, donc $a = (36-3+1)/2 = 17 \\geq 0$. Liste : $17+18+19=54$. ✓\n- $k=4$ : $108/4=27$, donc $a=(27-4+1)/2=12$. Liste : $12+13+14+15=54$. ✓\n- $k=9$ : $108/9=12$, donc $a=(12-9+1)/2=2$. Liste : $2+3+\\dots+10=54$. ✓\n- Tous les autres diviseurs de 108 (2, 6, 12, 18, 27, 36, 54, 108...) donnent soit un $a$ non entier, soit un $a$ négatif.\n\nIl y a donc exactement **3** listes.",
    sourceLabel: "Sujet officiel Kangourou des mathématiques 2023, Sujet C, question 26",
    sourceUrl: "https://www.mathkang.org/pdf/kangourou2023c.pdf",
    correctionSourceLabel: "Corrigé officiel (réponse « 3 » confirmée)",
    correctionSourceUrl: "https://www.mathkang.org/concours/sol2023c.html",
  },
  {
    id: "olympiades-2023-plus-fort",
    title: "« Plus fort ! » — le score d'une liste de cartes",
    competition: "Olympiades nationales de mathématiques — exercice national 1",
    year: 2023,
    level: "1ere",
    domain: "Combinatoire",
    difficulty: "Avancé",
    statement:
      "Soit $n \\geq 3$ un entier. Un joueur dispose de $n$ cartes numérotées de $1$ à $n$. Il les mélange puis note, dans l'ordre, la suite des numéros obtenue : on appelle cela une *liste* de longueur $n$. Par exemple, avec $n=8$, une liste possible est $L=[2,5,7,6,1,8,4,3]$.\n\nAvec une liste donnée, le joueur marque un point chaque fois que le numéro d'une carte est strictement supérieur à celui de la carte précédente (par exemple, avec $L=[2,5,7,6,1,8,4,3]$, le joueur marque 3 points : aux passages $2\\to5$, $5\\to7$, $1\\to8$). Le nombre de points marqués est appelé le *score* de la liste.\n\nOn note $L_n(k)$ le nombre de listes de longueur $n$ ayant pour score $k$.\n\nCalculer $L_3(k)$, $L_4(k)$ et $L_5(k)$ pour toutes les valeurs possibles de $k$.",
    solution:
      "Le score d'une liste de longueur $n$ vaut entre $0$ (liste strictement décroissante) et $n-1$ (liste strictement croissante), donc $L_n(0)=L_n(n-1)=1$.\n\nPour passer de $n$ à $n+1$, on insère la carte $n+1$ (la plus grande de toutes) à l'une des $n+1$ positions possibles d'une liste de longueur $n$ de score $k$. Comme $n+1$ est toujours strictement supérieure à ce qui la précède, on établit la récurrence suivante (nombres dits « eulériens ») :\n$$L_{n+1}(k) = (k+1) \\cdot L_n(k) + (n+1-k) \\cdot L_n(k-1).$$\n\nEn partant de $L_2(0)=L_2(1)=1$, on obtient :\n\n$$L_3(0)=1, \\quad L_3(1)=4, \\quad L_3(2)=1$$\n$$L_4(0)=1, \\quad L_4(1)=11, \\quad L_4(2)=11, \\quad L_4(3)=1$$\n$$L_5(0)=1, \\quad L_5(1)=26, \\quad L_5(2)=66, \\quad L_5(3)=26, \\quad L_5(4)=1$$\n\nOn vérifie que la somme de chaque ligne vaut bien $n!$ : $1+4+1=6=3!$, $1+11+11+1=24=4!$, $1+26+66+26+1=120=5!$. ✓",
    sourceLabel: "Sujet officiel, Olympiades nationales de mathématiques 2023 (académie de Toulouse)",
    sourceUrl: "https://www.pedagogie.ac-toulouse.fr/mathematiques/system/files/2023-03/Olympiades2023%20Premi%C3%A8re%20partie%20%28nationale%29.pdf",
    correctionSourceLabel: "Corrigé officiel (académie de Nice)",
    correctionSourceUrl: "https://www.pedagogie.ac-nice.fr/mathematiques/wp-content/uploads/sites/30/2023/03/CORRIGE-METROPOLE-2023.pdf",
  },
  {
    id: "olympiades-2023-descente-infinie",
    title: "« Une descente infinie » — l'équation de Markov généralisée",
    competition: "Olympiades nationales de mathématiques — exercice national 2 (spécialité)",
    year: 2023,
    level: "1ere",
    levelNote: "1ère, spécialité mathématiques",
    domain: "Algèbre",
    difficulty: "Expert",
    statement:
      "Soit $\\alpha$ un entier naturel tel que $\\alpha \\geq 4$. On considère l'équation $(E)$, d'inconnue $(x_1,x_2,x_3) \\in \\mathbb{Z}^3$ :\n$$x_1^2 + x_2^2 + x_3^2 = \\alpha\\, x_1 x_2 x_3 \\quad (E)$$\n\nDémontrer que le seul triplet $(x_1,x_2,x_3) \\in \\mathbb{Z}^3$ solution de $(E)$ est $(0,0,0)$.",
    solution:
      "On procède par **descente infinie** (méthode dite du « saut de Vieta »).\n\n**Étape 1 — Réduction aux signes positifs.** Comme $x_1^2+x_2^2+x_3^2 \\geq 0$, on a nécessairement $x_1x_2x_3 \\geq 0$. L'équation $(E)$ est invariante si l'on change simultanément le signe de deux des trois variables. On peut donc supposer $x_1,x_2,x_3 \\geq 0$.\n\n**Étape 2 — Solution minimale.** Supposons qu'il existe une solution non nulle à coordonnées $\\geq 0$. Parmi toutes ces solutions, on en choisit une, notée $(x_1,x_2,x_3)$ avec $x_1 \\leq x_2 \\leq x_3$, qui minimise la somme $x_1+x_2+x_3$. Si $x_1=0$, $(E)$ devient $x_2^2+x_3^2=0$, donc $x_2=x_3=0$ : contradiction. Donc $x_1, x_2, x_3 \\geq 1$.\n\n**Étape 3 — Saut de Vieta.** On fixe $x_1,x_2$ et on considère $(E)$ comme une équation du second degré en la troisième variable $z$ :\n$$z^2 - \\alpha x_1 x_2\\, z + (x_1^2+x_2^2) = 0.$$\n$x_3$ en est une racine. Par les relations de Vieta, l'autre racine $y = \\alpha x_1 x_2 - x_3 = \\dfrac{x_1^2+x_2^2}{x_3}$ est un entier $\\geq 0$.\n\n**Étape 4 — La descente est stricte.** On démontre que $y < x_3$ (ce qui équivaut à $x_3^2 > x_1^2+x_2^2$), en distinguant les cas $x_1=x_2=x_3$, $x_1=x_2\\neq x_3$ et $x_1<x_2\\leq x_3$. Dans chacun de ces cas, l'hypothèse $\\alpha \\geq 4$ est essentielle pour obtenir l'inégalité stricte (elle est mise en défaut pour $\\alpha=3$, où le triplet de Markov $(1,1,1)$ donne $1+1+1=3=3\\times1\\times1\\times1$).\n\n**Étape 5 — Contradiction.** Le triplet $(x_1,x_2,y)$ est aussi solution de $(E)$, avec $x_1+x_2+y < x_1+x_2+x_3$, et il est non nul puisque $x_1 \\geq 1$. Cela contredit la minimalité choisie à l'étape 2.\n\nL'hypothèse d'une solution non nulle est donc absurde : la seule solution est $(0,0,0)$. $\\blacksquare$",
    sourceLabel: "Sujet officiel, Olympiades nationales de mathématiques 2023 (académie de Lille)",
    sourceUrl: "https://pedagogie.ac-lille.fr/mathematiques/wp-content/uploads/sites/51/2023/06/1Sujet_SPE_Maths_compressed.pdf",
    correctionSourceLabel: "Corrigé officiel (académie de Lille)",
    correctionSourceUrl: "https://pedagogie.ac-lille.fr/mathematiques/wp-content/uploads/sites/51/2023/06/1Metropole_Elements_Correction_Spe1_2_NonSpe1-3_compressed.pdf",
  },
  {
    id: "olympiades-2023-entiers-sommables",
    title: "Les entiers « n-sommables »",
    competition: "Olympiades nationales de mathématiques — exercice académique 4",
    year: 2023,
    level: "1ere",
    levelNote: "2nde – 1ère",
    domain: "Théorie des nombres",
    difficulty: "Intermédiaire",
    statement:
      "Soit $n\\geq2$ un entier. On dit qu'un entier relatif $S$ est *$n$-sommable* s'il peut s'écrire $S = 1\\pm2\\pm3\\pm\\cdots\\pm n$ (le premier terme vaut toujours $+1$). Par exemple, $6$ est $4$-sommable car $6=1-2+3+4$.\n\n1. a. Démontrer que $4$ est $4$-sommable.\n   b. Quel est le plus grand entier $4$-sommable ? Le plus petit ?\n   c. Déterminer l'ensemble de tous les entiers $4$-sommables.\n2. Démontrer que deux entiers $n$-sommables ont toujours la même parité.\n3. Démontrer que si $S$ est $n$-sommable, alors $2-S$ l'est aussi.",
    solution:
      "**1.** En testant les $2^3=8$ choix de signes pour $\\pm2,\\pm3,\\pm4$, on obtient les valeurs $\\{-8,-4,-2,0,2,4,6,10\\}$. On trouve bien $4=1+2-3+4$, donc $4$ est $4$-sommable. Le plus grand entier $4$-sommable est $10$ (tous les signes $+$), le plus petit est $-8$ (tous les signes $-$).\n\n**2.** Soit $S = 1+e_2\\cdot2+e_3\\cdot3+\\cdots+e_n\\cdot n$ avec chaque $e_i\\in\\{+1,-1\\}$. Changer un signe $e_k$ en $-e_k$ modifie $S$ d'une quantité $\\mp 2k$, qui est toujours paire. Donc tous les entiers $n$-sommables ont la même parité, celle de $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$ (la valeur obtenue avec tous les signes $+$).\n\n**3.** En notant $S = 1+e_2\\cdot2+\\cdots+e_n\\cdot n$, on inverse tous les signes $e_i$ pour $i\\geq2$ (le premier terme, égal à $1$, reste fixe). On obtient une nouvelle somme :\n$$T = 1 - e_2\\cdot2-\\cdots-e_n\\cdot n = 1-(S-1) = 2-S.$$\nCe changement de signes étant une transformation valide, $T=2-S$ est donc, lui aussi, $n$-sommable.",
    sourceLabel: "Sujet officiel, Olympiades nationales de mathématiques 2023 (académie de Versailles)",
    sourceUrl: "https://euler.ac-versailles.fr/IMG/pdf/academique_2023.pdf",
    correctionSourceLabel: "Corrigé officiel (académie de Versailles)",
    correctionSourceUrl: "https://euler.ac-versailles.fr/IMG/pdf/preparation_academique_corrige_vf_10avril.pdf",
  },
  {
    id: "imo-1988-probleme-6",
    title: "Le problème légendaire de l'IMO 1988",
    competition: "Olympiade Internationale de Mathématiques (IMO) — Problème 6",
    year: 1988,
    level: "superieur",
    levelNote: "Prépa / L1 et plus",
    domain: "Théorie des nombres",
    difficulty: "Expert",
    statement:
      "Soient $a$ et $b$ deux entiers naturels non nuls tels que $ab+1$ divise $a^2+b^2$.\n\nDémontrer que $\\dfrac{a^2+b^2}{ab+1}$ est le carré d'un entier.",
    solution:
      "On utilise la méthode du **saut de Vieta** (descente infinie). Posons $k = \\dfrac{a^2+b^2}{ab+1}$, entier naturel non nul. Supposons par l'absurde que $k$ n'est **pas** un carré parfait.\n\n**Étape 1.** Parmi tous les couples d'entiers naturels non nuls $(A,B)$ vérifiant $\\dfrac{A^2+B^2}{AB+1}=k$ (cet ensemble contient $(a,b)$), on choisit celui qui minimise $A+B$, avec $A \\geq B$.\n\n**Étape 2.** Comme $A^2+B^2=k(AB+1)$, $A$ est racine de l'équation du second degré $x^2 - kBx + (B^2-k) = 0$. Soit $x_1$ l'autre racine. Par les relations de Vieta :\n$$x_1 = kB - A \\qquad \\text{et} \\qquad A\\,x_1 = B^2-k.$$\nLa première égalité montre que $x_1$ est un entier.\n\n**Étape 3 — $x_1 \\geq 0$.** Comme $x_1$ vérifie $x_1^2+B^2=k(Bx_1+1)$, un raisonnement par l'absurde (si $x_1\\leq-1$, le membre de gauche serait positif et le membre de droite négatif ou nul) montre que $x_1\\geq0$.\n\n**Étape 4 — $x_1 < B$.** Si l'on avait $x_1 \\geq B$, alors $Ax_1 \\geq B^2$, donc $B^2-k=Ax_1\\geq B^2$, ce qui donnerait $k\\leq0$ : contradiction. Donc $x_1 < B$.\n\n**Étape 5 — Conclusion.**\n- Si $x_1=0$ : alors $0=Ax_1=B^2-k$, donc $k=B^2$ est un carré parfait, ce qui contredit l'hypothèse de départ.\n- Si $x_1>0$ : le couple $(x_1,B)$ vérifie aussi $\\dfrac{x_1^2+B^2}{x_1B+1}=k$, avec $x_1+B < A+B$ (car $x_1<B\\leq A$), ce qui contredit la minimalité choisie à l'étape 1.\n\nDans les deux cas, on obtient une contradiction. L'hypothèse « $k$ n'est pas un carré parfait » est donc fausse : $k=\\dfrac{a^2+b^2}{ab+1}$ est nécessairement le carré d'un entier. $\\blacksquare$\n\n*Remarque historique : ce problème est resté célèbre pour avoir résisté plusieurs heures à six membres du comité de sélection australien (pays organisateur de l'IMO 1988) avant d'être proposé aux candidats.*",
    sourceLabel: "Archive officielle de l'IMO — IMO 1988",
    sourceUrl: "https://www.imo-official.org/year_info.aspx?year=1988",
    correctionSourceLabel: "Discussion et solutions alternatives (Art of Problem Solving)",
    correctionSourceUrl: "https://artofproblemsolving.com/wiki/index.php/1988_IMO_Problems/Problem_6",
  },
];

export function getOlympiadProblemById(id: string): OlympiadProblem | undefined {
  return OLYMPIAD_PROBLEMS.find((p) => p.id === id);
}
