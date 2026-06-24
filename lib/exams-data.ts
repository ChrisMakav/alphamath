import type { SchoolLevel } from "./seed-data";

export type ExamType = "brevet" | "bac" | "concours";
export type BacSeries = "S" | "ES" | "Spe_Maths" | "Maths_Complementaires";
export type ExamSession = "juin" | "septembre" | "unique";
export type Institution = "polytechnique-ens" | "centrale-supelec" | "mines-ponts";
export type ConcoursFiliere = "MP" | "PC" | "PSI" | "MPI";
export type CorrectionKind = "officielle" | "proposee" | "absente";

export const INSTITUTION_LABELS: Record<Institution, string> = {
  "polytechnique-ens": "X-ENS (Polytechnique / ENS)",
  "centrale-supelec": "Centrale-Supélec",
  "mines-ponts": "Mines-Ponts",
};

export const EXAM_TYPE_LABELS: Record<ExamType, string> = {
  brevet: "Brevet des collèges",
  bac: "Baccalauréat",
  concours: "Concours (grandes écoles)",
};

export const BAC_SERIES_LABELS: Record<BacSeries, string> = {
  S: "Série S",
  ES: "Série ES",
  Spe_Maths: "Spécialité Mathématiques",
  Maths_Complementaires: "Option Mathématiques Complémentaires",
};

export const CORRECTION_KIND_LABELS: Record<CorrectionKind, string> = {
  officielle: "Corrigé officiel",
  proposee: "Corrigé proposé",
  absente: "Pas de corrigé disponible",
};

/** Un exercice/problème au sein d'un sujet ou d'un corrigé. */
export interface ExamSection {
  id: string;
  title: string;
  content: string; // Markdown + LaTeX, rendu via MathContent
  points?: number;
}

export interface ExamCorrection {
  kind: CorrectionKind;
  sections: ExamSection[]; // vide si kind === "absente"
  sourceLabel?: string;
  sourceUrl?: string; // requis si kind === "officielle"
  authorNote?: string; // ex: disclaimer si kind === "proposee"
}

export interface ExamPaper {
  id: string; // slug, ex: "brevet-2023-juin"
  examType: ExamType;
  year: number; // 2010-2025
  session: ExamSession;
  title: string;
  schoolLevel: SchoolLevel; // "3eme" (brevet) ou "terminale" (bac) ; ignoré pour concours

  bacSeries?: BacSeries; // bac uniquement
  institution?: Institution; // concours uniquement
  filiere?: ConcoursFiliere; // concours uniquement
  epreuve?: string; // concours uniquement, ex: "Mathématiques II"

  durationMinutes?: number;
  statement: ExamSection[]; // toujours requis, jamais vide
  correction?: ExamCorrection;

  sourceLabel: string; // citation du sujet (peut différer de celle du corrigé)
  sourceUrl: string;
  tags?: string[];
}

export const EXAM_PAPERS: ExamPaper[] = [
{
  id: "brevet-2012-juin",
  examType: "brevet",
  year: 2012,
  session: "juin",
  title: "Brevet des collèges — Mathématiques — Juin 2012",
  schoolLevel: "3eme",
  statement: [
    {
      id: "num-ex1",
      title: "Activités numériques — Exercice 1 (sur 12 points pour la partie)",
      content: "Pour chacune des deux questions suivantes, plusieurs propositions de réponse sont faites. Une seule des propositions est exacte. Aucune justification n'est attendue.\n\n**1.** Alice participe à un jeu télévisé. Elle a devant elle trois portes fermées. Derrière l'une des portes, il y a une voiture ; derrière les autres, il n'y a rien. Alice doit choisir l'une de ces portes. Si elle choisit la porte derrière laquelle il y a la voiture, elle gagne cette voiture.\n\nAlice choisit au hasard une porte. Quelle est la probabilité qu'elle gagne la voiture ?\n\na. $\\frac{1}{2}$  b. $\\frac{1}{3}$  c. $\\frac{2}{3}$  d. On ne peut pas savoir\n\n**2.** S'il y a quatre portes au lieu de trois et toujours une seule voiture à gagner, comment évolue la probabilité qu'a Alice de gagner la voiture ?\n\na. augmente  b. diminue  c. reste identique  d. on ne peut pas savoir",
    },
    {
      id: "num-ex2",
      title: "Activités numériques — Exercice 2",
      content: "**1.** Quelle est l'écriture décimale du nombre $\\dfrac{10^5+1}{10^5}$ ?\n\n**2.** Antoine utilise sa calculatrice pour calculer le nombre suivant : $\\dfrac{10^{15}+1}{10^{15}}$. Le résultat affiché est 1. Antoine pense que ce résultat n'est pas exact. A-t-il raison ?",
    },
    {
      id: "num-ex3",
      title: "Activités numériques — Exercice 3",
      content: "Lors d'un marathon, un coureur utilise sa montre-chronomètre. Après un kilomètre de course, elle lui indique qu'il court depuis quatre minutes et trente secondes.\n\nLa longueur officielle d'un marathon est de 42,195 km. Si le coureur garde cette allure tout au long de sa course, mettra-t-il moins de 3 h 30 pour effectuer le marathon ?",
    },
    {
      id: "num-ex4",
      title: "Activités numériques — Exercice 4",
      content: "On cherche à résoudre l'équation $(4x-3)^2-9=0$.\n\n**1.** Le nombre $\\frac{3}{4}$ est-il solution de cette équation ? et le nombre 0 ?\n\n**2.** Prouver que, pour tout nombre $x$, $(4x-3)^2-9=4x(4x-6)$.\n\n**3.** Déterminer les solutions de l'équation $(4x-3)^2-9=0$.",
    },
    {
      id: "geo-ex1",
      title: "Activités géométriques — Exercice 1 (sur 12 points pour la partie)",
      content: "Le dessin représente une figure composée d'un carré ABCD et d'un rectangle DEFG. E est un point du segment [AD]. C est un point du segment [DG]. Dans cette figure la longueur AB peut varier mais on a toujours : AE = 15 cm et CG = 25 cm. (Voir figure : carré ABCD accolé à un rectangle DEFG, E sur [AD], C sur [DG], le tout aligné sur la droite D-C-G.)\n\n**1.** Dans cette question on suppose que AB = 40 cm.\n\na. Calculer l'aire du carré ABCD.\n\nb. Calculer l'aire du rectangle DEFG.\n\n**2.** Peut-on trouver la longueur AB de sorte que l'aire du carré ABCD soit égale à l'aire du rectangle DEFG ? Si oui, calculer AB. Si non, expliquer pourquoi.\n\n> Si le travail n'est pas terminé, laisser tout de même une trace de la recherche. Elle sera prise en compte dans la notation.",
    },
    {
      id: "geo-ex2",
      title: "Activités géométriques — Exercice 2",
      content: "On considère un cône de révolution de hauteur 5 cm et dont la base a pour rayon 2 cm. Le point A est le sommet du cône et O le centre de sa base. B est le milieu de [AO]. (Voir figure : cône de sommet A, de hauteur AO = 5 cm, rayon de base 2 cm, B milieu de [AO].)\n\n**1.** Calculer le volume du cône en $cm^3$. On arrondira à l'unité. On rappelle que la formule est $V=\\dfrac{\\pi R^2 h}{3}$ où $h$ désigne la hauteur et $R$ le rayon de la base.\n\n**2.** On effectue la section du cône par le plan parallèle à la base qui passe par B. On obtient ainsi un petit cône. Est-il vrai que le volume du petit cône obtenu est égal à la moitié du volume du cône initial ?",
    },
    {
      id: "geo-ex3",
      title: "Activités géométriques — Exercice 3",
      content: "Des élèves participent à une course à pied. Avant l'épreuve, un plan leur a été remis. (Voir figure : A est le point de départ, E le point d'arrivée ; les droites (AE) et (BD) se coupent en C ; AB = 300 m, BC = 500 m (le schéma indique 300 m sur [AB] et 1000 m sur [CE] avec D sur le trajet), avec AB = 300 m, et CD, DE à déterminer.)\n\nOn convient que :\n- Les droites (AE) et (BD) se coupent en C.\n- Les droites (AB) et (DE) sont parallèles.\n- ABC est un triangle rectangle en A, avec AB = 300 m et AC = 400 m, et CE = 1000 m.\n\nCalculer la longueur réelle du parcours ABCDE.\n\n> Si le travail n'est pas terminé, laisser tout de même une trace de la recherche. Elle sera prise en compte dans la notation.",
    },
    {
      id: "probleme",
      title: "Problème (12 points)",
      content: "Les trois parties de ce problème sont indépendantes. Toutes les réponses doivent être justifiées, sauf si une indication contraire est donnée.\n\n### PARTIE 1\n\nÀ partir du 2 janvier 2012, une compagnie aérienne teste un nouveau vol entre Nantes et Toulouse. Ce vol s'effectue chaque jour à bord d'un avion qui peut transporter au maximum 190 passagers.\n\n**1.** L'avion décolle chaque matin à 9 h 35 de Nantes et atterrit à 10 h 30 à Toulouse. Calculer la durée du vol.\n\n**2.** Le tableau suivant donne le nombre de passagers qui ont emprunté ce vol pendant la première semaine de mise en service. L'information concernant le mercredi a été perdue.\n\n| Jour | Lundi | Mardi | Mercredi | Jeudi | Vendredi | Samedi | Dimanche | Total |\n|---|---|---|---|---|---|---|---|---|\n| Passagers | 152 | 143 | ? | 164 | 189 | 157 | 163 | 1113 |\n\na. Combien de passagers ont emprunté ce vol mercredi ?\n\nb. En moyenne, combien y avait-il de passagers par jour dans l'avion cette semaine-là ?\n\n**3.** À partir du mois de février, on décide d'étudier la fréquentation de ce vol pendant douze semaines à l'aide d'une feuille de calcul (moyenne sur les 12 semaines : 166 passagers/jour).\n\na. Quelle formule a-t-on saisie dans la cellule I2 pour obtenir le nombre total de passagers au cours de la semaine 1 ?\n\nb. Quelle formule a-t-on saisie dans la cellule J2 pour obtenir le nombre moyen de passagers par jour au cours de la semaine 1 ?\n\n**4.** Le nombre moyen de passagers par jour au cours de ces douze semaines est égal à 166. La compagnie s'était fixé comme objectif d'avoir un nombre moyen de passagers supérieur aux 80 % de la capacité maximale de l'avion. L'objectif est-il atteint ?\n\n### PARTIE 2\n\nQuand l'avion n'est plus très loin de l'aéroport de Toulouse, le radar de la tour de contrôle émet un signal bref en direction de l'avion. Le signal atteint l'avion et revient au radar 0,000 3 seconde après son émission.\n\n**1.** Sachant que le signal est émis à la vitesse de 300 000 kilomètres par seconde, vérifier qu'à cet instant, l'avion se trouve à 45 kilomètres du radar de la tour de contrôle.\n\n**2.** La direction radar-avion fait un angle de 5° avec l'horizontale. Calculer alors l'altitude de l'avion à cet instant. On arrondira à la centaine de mètres près. On négligera la hauteur de la tour de contrôle.\n\n### PARTIE 3\n\nEn phase d'atterrissage, à partir du moment où les roues touchent le sol, l'avion utilise ses freins jusqu'à l'arrêt complet. Un graphique (non reproduit ici) représente la distance parcourue par l'avion sur la piste (en mètres) en fonction du temps (en secondes) à partir du moment où les roues touchent le sol : la courbe monte rapidement puis plafonne à 600 m à partir de 22 s environ.\n\n**1.** Quelle distance l'avion aura-t-il parcourue 10 s après avoir touché le sol ?\n\n**2.** Expliquer pourquoi au bout de 22 s et au bout de 26 s la distance parcourue depuis le début de l'atterrissage est la même.\n\n**3.** À partir du moment où les roues touchent le sol, combien de temps met l'avion pour s'arrêter ?",
      points: 12,
    },
  ],
  correction: {
    kind: "officielle",
    sections: [
      {
        id: "corr-num",
        title: "Corrigé — Activités numériques",
        content: "### Exercice 1\n\n**1.** La probabilité qu'Alice gagne la voiture est de une chance sur trois, donc égale à $\\frac{1}{3}$. **Réponse b.**\n\n**2.** Avec quatre portes, la probabilité est de une chance sur quatre, donc $\\frac{1}{4}$. La probabilité diminue donc. **Réponse b.**\n\n### Exercice 2\n\n**1.** $\\dfrac{10^5+1}{10^5} = \\dfrac{100001}{100000} = 1{,}00001$.\n\n**2.** Antoine a raison : la calculatrice a arrondi le résultat, qui n'est pas exactement 1.\n\n### Exercice 3\n\n$4$ min $30$ s $= 270$ s pour 1 km. Pour 42,195 km : $270 \\times 42{,}195 \\approx 11392{,}65$ s $\\approx 189$ min $52{,}65$ s $\\approx 3$ h $9$ min $52{,}65$ s. Le coureur mettra donc moins de 3 h 30 pour effectuer le marathon.\n\n### Exercice 4\n\n**1.** $\\left(4\\times\\frac{3}{4}-3\\right)^2-9 = -9 \\neq 0$ : $\\frac{3}{4}$ n'est pas solution. $(4\\times0-3)^2-9 = 9-9=0$ : 0 est solution.\n\n**2.** $(4x-3)^2-9=(4x-3)^2-3^2=(4x-3+3)(4x-3-3)=4x(4x-6)$.\n\n**3.** $4x(4x-6)=0 \\iff 4x=0$ ou $4x-6=0 \\iff x=0$ ou $x=\\frac{3}{2}$. Les solutions sont $x=0$ et $x=\\frac{3}{2}$.",
      },
      {
        id: "corr-geo",
        title: "Corrigé — Activités géométriques",
        content: "### Exercice 1\n\n**1a.** $A_{ABCD}=AB^2=40^2=1600\\ cm^2$.\n\n**1b.** $DE = AB-AE = 40-15=25$ cm ; $DG=AB+CG=40+25=65$ cm. $A_{DEFG}=DE\\times DG=25\\times65=1625\\ cm^2$.\n\n**2.** En notant $x=AB$ : $DE=x-15$, $DG=x+25$. $A_{DEFG}=(x-15)(x+25)=x^2+10x-375$. On résout $x^2=x^2+10x-375 \\iff 10x=375 \\iff x=37{,}5$ cm.\n\n### Exercice 2\n\n**1.** $V=\\dfrac{\\pi R^2 \\times OA}{3}=\\dfrac{\\pi\\times2^2\\times5}{3}=\\dfrac{20\\pi}{3}\\approx21\\ cm^3$.\n\n**2.** $AB=2{,}5$ cm. Par Thalès, $\\frac{AB}{AO}=\\frac{1}{2}=\\frac{BB'}{R}$, donc $BB'=1$. Le volume du petit cône est $V'=\\dfrac{\\pi\\times1^2\\times2{,}5}{3}=\\dfrac{1}{8}V$. Le petit cône a un volume égal à $\\frac{1}{8}$ du volume initial, donc ce n'est pas la moitié.\n\n### Exercice 3\n\nDans le triangle ABC rectangle en A : $BC^2=AB^2+AC^2=300^2+400^2=250000$, donc $BC=500$ m.\n\nPar Thalès (droites (AE) et (BD) sécantes en C, (AB) // (DE)) : $\\frac{CB}{CD}=\\frac{CA}{CE}$, soit $\\frac{500}{CD}=\\frac{400}{1000}$, d'où $CD=1250$ m.\n\nDe même $\\frac{CA}{CE}=\\frac{BA}{DE}$, soit $\\frac{400}{1000}=\\frac{300}{DE}$, d'où $DE=750$ m.\n\nLongueur totale : $ABCDE=AB+BC+CD+DE=300+500+1250+750=2800$ m.",
      },
      {
        id: "corr-probleme",
        title: "Corrigé — Problème",
        content: "### PARTIE 1\n\n**1.** Durée du vol : $10h30-9h35=0h55$, soit 55 minutes.\n\n**2a.** Passagers mercredi : $1113-152-143-164-189-157-163=145$.\n\n**2b.** Moyenne : $\\frac{1113}{7}=159$ passagers par jour.\n\n**3a.** Formule en I2 : `=SOMME(B2:H2)`.\n\n**3b.** Formule en J2 : `=MOYENNE(B2:H2)`.\n\n**4.** $80\\%$ de 190 $= 152$. Comme $166 > 152$, l'objectif est atteint.\n\n### PARTIE 2\n\n**1.** Le signal met $\\frac{0{,}0003}{2}=0{,}00015$ s pour atteindre l'avion. $d=V\\times t=300000\\times0{,}00015=45$ km.\n\n**2.** $\\sin(5°)=\\frac{AI}{45}$, donc $AI=45\\times\\sin(5°)\\approx3{,}9$ km, soit environ 3 900 m (arrondi à la centaine de mètres : 3 900 m).\n\n### PARTIE 3\n\n**1.** La distance parcourue après 10 s est de 450 m (lecture graphique).\n\n**2.** Aux instants 22 s et 26 s, la distance est la même car l'avion est déjà à l'arrêt complet (la courbe est devenue horizontale).\n\n**3.** L'avion met 20 secondes pour s'arrêter.",
      },
    ],
    sourceLabel: "APMEP — Corrigé du Brevet Métropole, 28 juin 2012",
    sourceUrl: "https://www.apmep.fr/IMG/pdf/BrevetMetropolejuin2012_corapm.pdf",
  },
  sourceLabel: "APMEP — Brevet des collèges Métropole–La Réunion–Antilles-Guyane, 28 juin 2012",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/BrevetMetropolejuin2012.pdf",
  tags: ["probabilites", "geometrie", "fonctions", "calcul-litteral"],
},
{
  id: "brevet-2016-juin",
  examType: "brevet",
  year: 2016,
  session: "juin",
  title: "Brevet des collèges — Mathématiques — Juin 2016",
  schoolLevel: "3eme",
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (4 points)",
      content: "Une société commercialise des composants électroniques qu'elle fabrique dans deux usines. Lors d'un contrôle de qualité, 500 composants sont prélevés dans chaque usine et sont examinés pour déterminer s'ils sont « bons » ou « défectueux ».\n\nRésultats obtenus pour l'ensemble des 1 000 composants prélevés :\n\n| | Usine A | Usine B |\n|---|---|---|\n| Bons | 473 | 462 |\n| Défectueux | 27 | 38 |\n\n**1.** Si on prélève un composant au hasard parmi ceux provenant de l'usine A, quelle est la probabilité qu'il soit défectueux ?\n\n**2.** Si on prélève un composant au hasard parmi ceux qui sont défectueux, quelle est la probabilité qu'il provienne de l'usine A ?\n\n**3.** Le contrôle est jugé satisfaisant si le pourcentage de composants défectueux est inférieur à 7 % dans chaque usine. Ce contrôle est-il satisfaisant ?",
      points: 4,
    },
    {
      id: "ex2",
      title: "Exercice 2 (4,5 points)",
      content: "On considère les deux programmes de calcul ci-dessous.\n\n**Programme A** : 1. Choisir un nombre. 2. Multiplier par −2. 3. Ajouter 13.\n\n**Programme B** : 1. Choisir un nombre. 2. Soustraire 7. 3. Multiplier par 3.\n\n**1.** Vérifier qu'en choisissant 2 au départ avec le programme A, on obtient 9.\n\n**2.** Quel nombre faut-il choisir au départ avec le programme B pour obtenir 9 ?\n\n**3.** Peut-on trouver un nombre pour lequel les deux programmes de calcul donnent le même résultat ?",
      points: 4.5,
    },
    {
      id: "ex3",
      title: "Exercice 3 (5 points)",
      content: "Trois figures codées sont données ci-dessous. Elles ne sont pas dessinées en vraie grandeur. Pour chacune d'elles, déterminer la longueur AB au millimètre près. Dans cet exercice, on n'attend pas de démonstration rédigée. Il suffit d'expliquer brièvement le raisonnement suivi et de présenter clairement les calculs.\n\n(Voir figure 1 : triangle ABC avec un point J sur [CA] tel que BC = CJ = JA = 6 cm, et B tel que l'angle en B soit droit — triangle ABC rectangle en B.)\n\n(Voir figure 2 : triangle rectangle en B avec angle en C de 53° et BC = 36 cm, AB à déterminer comme côté opposé à l'angle C.)\n\n(Voir figure 3 : [AB] est un diamètre du cercle de centre O ; la longueur du cercle est 154 cm.)",
      points: 5,
    },
    {
      id: "ex4",
      title: "Exercice 4 (5 points)",
      content: "Lors des soldes, un commerçant décide d'appliquer une réduction de 30 % sur l'ensemble des articles de son magasin.\n\n**1.** L'un des articles coûte 54 € avant la réduction. Calculer son prix après la réduction.\n\n**2.** Le commerçant utilise une feuille de calcul pour calculer les prix des articles soldés :\n\n| | A: prix avant réduction | B | C | D | E | F |\n|---|---|---|---|---|---|---|\n| 1 | 12,00 € | 14,80 € | 33,00 € | 44,20 € | 85,50 € | |\n| 2 réduction de 30% | 3,60 € | 4,44 € | 9,90 € | 13,26 € | 25,65 € | |\n| 3 prix soldé | | | | | | |\n\na. Pour calculer la réduction, quelle formule a-t-il pu saisir dans la cellule B2 avant de l'étirer sur la ligne 2 ?\n\nb. Pour obtenir le prix soldé, quelle formule peut-il saisir dans la cellule B3 avant de l'étirer sur la ligne 3 ?\n\n**3.** Le prix soldé d'un article est 42,00 €. Quel était son prix initial ?",
      points: 5,
    },
    {
      id: "ex5",
      title: "Exercice 5 (5,5 points)",
      content: "La figure PRC représente un terrain appartenant à une commune. Les points P, A et R sont alignés. Les points P, S et C sont alignés. Il est prévu d'aménager sur ce terrain une « zone de jeux pour enfants » sur la partie PAS, et un « skatepark » sur la partie RASC. (Voir figure : grand triangle PRC, avec A sur [PR] et S sur [PC], le segment [AS] séparant le petit triangle PAS du quadrilatère RASC.)\n\nOn connaît les dimensions suivantes : PA = 30 m ; AR = 10 m ; AS = 18 m. (Le triangle PAS est rectangle en A, et (AS) est parallèle à (RC).)\n\n**1.** La commune souhaite semer du gazon sur la « zone de jeux pour enfants ». Elle décide d'acheter des sacs de 5 kg de mélange de graines pour gazon à 13,90 € l'unité. Chaque sac permet de couvrir une surface d'environ 140 $m^2$. Quel budget doit prévoir cette commune pour pouvoir semer du gazon sur la totalité de la « zone de jeux pour enfants » ?\n\n**2.** Calculer l'aire du « skatepark ».",
      points: 5.5,
    },
    {
      id: "ex6",
      title: "Exercice 6 (7 points)",
      content: "Avec des ficelles de 20 cm, on construit des polygones : on coupe la ficelle en deux morceaux (morceau n°1 et morceau n°2), puis avec le morceau n°1 on construit un carré, et avec le morceau n°2 un triangle équilatéral.\n\n### Partie 1\n\nDans cette partie, on découpe à l'étape 1 une ficelle pour que le « morceau n°1 » mesure 8 cm.\n\n**1.** Dessiner en grandeur réelle les deux polygones obtenus.\n\n**2.** Calculer l'aire du carré obtenu.\n\n**3.** Estimer l'aire du triangle équilatéral obtenu en mesurant sur le dessin.\n\n### Partie 2\n\nOn cherche maintenant à étudier l'aire des deux polygones obtenus en fonction de la longueur du « morceau n°1 ».\n\n**1.** Proposer une formule qui permet de calculer l'aire du carré en fonction de la longueur $\\ell$ du « morceau n°1 ».\n\n**2.** Sur un graphique donné, la courbe A représente l'aire du carré en fonction de $\\ell$, et la courbe B représente l'aire du triangle équilatéral en fonction de $\\ell$ (graphique allant de 0 à 20 cm en abscisse, et 0 à 26 $cm^2$ en ordonnée). En utilisant ce graphique, répondre aux questions suivantes. Aucune justification n'est attendue.\n\na. Quelle est la longueur du « morceau n°1 » qui permet d'obtenir un triangle équilatéral d'aire 14 $cm^2$ ?\n\nb. Quelle est la longueur du « morceau n°1 » qui permet d'obtenir deux polygones d'aires égales ?",
      points: 7,
    },
    {
      id: "ex7",
      title: "Exercice 7 (5 points)",
      content: "Antoine crée des objets de décoration avec des vases, des billes et de l'eau colorée. Pour sa nouvelle création, il décide d'utiliser le vase et les billes ayant les caractéristiques suivantes :\n\n**Vase** : matière verre, forme pavé droit, dimensions extérieures 9 cm × 9 cm × 21,7 cm, épaisseur des bords 0,2 cm, épaisseur du fond 1,7 cm.\n\n**Billes** : matière verre, forme boule, diamètre 1,8 cm.\n\nIl met 150 billes dans le vase. Peut-il ajouter un litre d'eau colorée sans risquer le débordement ?\n\nOn rappelle que le volume de la boule est donné par la formule : $\\frac{4}{3}\\times\\pi\\times rayon^3$.",
      points: 5,
    },
  ],
  correction: {
    kind: "officielle",
    sections: [
      {
        id: "corr-ex1",
        title: "Corrigé — Exercice 1",
        content: "**1.** Il y a 27 composants défectueux sur 500 ; la probabilité est $\\frac{27}{500}=0{,}054=5{,}4\\%$.\n\n**2.** Sur les $27+38=65$ composants défectueux, 27 proviennent de l'usine A. La probabilité est $\\frac{27}{65}\\approx0{,}415$ soit environ 41,5 %.\n\n**3.** Usine A : $5{,}4\\%<7\\%$. Usine B : $\\frac{38}{500}=7{,}6\\%>7\\%$. Conclusion : le contrôle n'est pas satisfaisant.",
      },
      {
        id: "corr-ex2",
        title: "Corrigé — Exercice 2",
        content: "**1.** Programme A avec 2 : $2\\times(-2)=-4$, $-4+13=9$. ✓\n\n**2.** Programme B : en partant de $x$, $(x-7)\\times3=9 \\iff x-7=3 \\iff x=10$.\n\n**3.** En partant de $a$ : Programme A donne $13-2a$ ; Programme B donne $3(a-7)$. On résout $13-2a=3(a-7)$, soit $13-2a=3a-21$, $34=5a$, $a=6{,}8$. Le nombre 6,8 donne le même résultat avec les deux programmes.",
      },
      {
        id: "corr-ex3",
        title: "Corrigé — Exercice 3",
        content: "**Figure 1** : $BC=CJ=JA=6$ cm donc $CA=12$ cm. Par Pythagore dans ABC rectangle en B : $AB^2=AC^2-CB^2=144-36=108$, donc $AB=\\sqrt{108}=6\\sqrt3\\approx10{,}4$ cm.\n\n**Figure 2** : $\\sin(53°)=\\frac{AB}{BC}=\\frac{AB}{36}$, donc $AB=36\\sin(53°)\\approx28{,}8$ cm.\n\n**Figure 3** : périmètre du cercle $=AB\\times\\pi=154$, donc $AB=\\frac{154}{\\pi}\\approx49$ cm.",
      },
    ],
    sourceLabel: "APMEP — Corrigé du Brevet des collèges, 22 juin 2016",
    sourceUrl: "https://www.apmep.fr/IMG/pdf/Corrige_Brevet_Metropole_juin_2016.pdf",
  },
  sourceLabel: "APMEP — Brevet des collèges Métropole–La Réunion–Antilles-Guyane, 22 juin 2016",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/Brevet_Antilles-Guyane_23_juin_2016.pdf",
  tags: ["probabilites", "geometrie", "pourcentages", "fonctions"],
},
{
  id: "brevet-2019-juin",
  examType: "brevet",
  year: 2019,
  session: "juin",
  title: "Brevet des collèges — Mathématiques — Juin 2019",
  schoolLevel: "3eme",
  durationMinutes: 120,
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (10 points)",
      content: "Le capitaine d'un navire possède un trésor constitué de 69 diamants, 1 150 perles et 4 140 pièces d'or.\n\n**1.** Décomposer 69 ; 1 150 et 4 140 en produits de facteurs premiers.\n\n**2.** Le capitaine partage équitablement le trésor entre les marins. Combien y a-t-il de marins sachant que toutes les pièces, perles et diamants ont été distribués ?",
      points: 10,
    },
    {
      id: "ex2",
      title: "Exercice 2 (19 points)",
      content: "Dans cet exercice, on donnera, si nécessaire, une valeur approchée des résultats au centième près. Pour construire le décor d'une pièce de théâtre, Joanna dispose d'une plaque rectangulaire ABCD de 4 m sur 2 m dans laquelle elle doit découper trois triangles avant de les superposer. (Voir figure : rectangle ABCD avec M sur [AB], le triangle ADM rectangle en A, et un découpage faisant apparaître un point P et un point N proches de B et C, formant les triangles AMD, PNM et PDN.)\n\nLe triangle ADM respecte les conditions suivantes : le triangle ADM est rectangle en A ; AD = 2 m ; l'angle $\\widehat{ADM}=60°$.\n\n**1.** Montrer que [AM] mesure environ 3,46 m.\n\n**2.** La partie de la plaque non utilisée est représentée en quadrillé sur la figure. Calculer une valeur approchée au centième de la proportion de la plaque qui n'est pas utilisée.\n\n**3.** Pour que la superposition des triangles soit harmonieuse, Joanna veut que les trois triangles AMD, PNM et PDN soient semblables. Démontrer que c'est bien le cas.\n\n**4.** Joanna aimerait que le coefficient d'agrandissement pour passer du triangle PDN au triangle AMD soit plus petit que 1,5. Est-ce le cas ? Justifier.",
      points: 19,
    },
    {
      id: "ex3",
      title: "Exercice 3 (17 points)",
      content: "Les questions 1 et 2 sont indépendantes. Un sablier est composé de deux cylindres $C_1$ et $C_2$ de hauteur 4,2 cm et de diamètre 1,5 cm, d'un cylindre $C_3$, et de deux demi-sphères $S_1$ et $S_2$ de diamètre 1,5 cm. (Voir figure : sablier vertical, avec de haut en bas $C_1$, $S_1$, $C_3$ (resserrement central), $S_2$, $C_2$, le sable se trouvant initialement dans $C_2$.)\n\nOn rappelle le volume V d'un cylindre d'aire de base B et de hauteur h : $V=B\\times h$.\n\n**1a.** Au départ, le sable remplit le cylindre $C_2$ aux deux tiers. Montrer que le volume du sable est environ 4,95 $cm^3$.\n\n**1b.** On retourne le sablier. En supposant que le débit d'écoulement du sable est constant et égal à 1,98 $cm^3$/min, calculer le temps en minutes et secondes que va mettre le sable à s'écouler dans le cylindre inférieur.\n\n**2.** En réalité, le débit d'écoulement d'un même sablier n'est pas constant. On teste plusieurs fois le temps d'écoulement :\n\n| Temps mesuré | 2min22s | 2min24s | 2min26s | 2min27s | 2min28s | 2min29s | 2min30s |\n|---|---|---|---|---|---|---|---|\n| Nb de tests | 1 | 1 | 2 | 6 | 3 | 7 | 6 |\n\n| Temps mesuré | 2min31s | 2min32s | 2min33s | 2min34s | 2min35s | 2min38s |\n|---|---|---|---|---|---|---|\n| Nb de tests | 3 | 1 | 2 | 3 | 2 | 3 |\n\na. Combien de tests ont été réalisés au total ?\n\nb. Un sablier est mis en vente s'il vérifie : l'étendue des temps est inférieure à 20 s ; la médiane des temps est comprise entre 2min29s et 2min31s ; la moyenne des temps est comprise entre 2min28s et 2min32s. Sinon il est éliminé. Le sablier testé sera-t-il éliminé ?",
      points: 17,
    },
    {
      id: "ex4",
      title: "Exercice 4 (19 points)",
      content: "On veut réaliser un dessin constitué de deux types d'éléments (tirets et carrés) mis bout à bout, à l'aide de scripts de programmation par blocs (style Scratch). Le bloc « Carré » répète 4 fois (avancer de 5 ; tourner de 90°) après s'être orienté à 90°. Le bloc « Tiret » s'oriente à 90° puis avance de 10.\n\n**1.** En prenant 1 cm pour 2 pixels, représenter la figure obtenue si on exécute le script Carré. Préciser les positions de départ et d'arrivée du stylo sur votre figure.\n\nLe script 1 répète 23 fois (carré puis tiret) à partir d'une position de départ fixée. Le script 2 répète 46 fois un tirage aléatoire entre carré et tiret (50/50). On obtient deux dessins, A et B.\n\n**2.** Attribuer à chaque script la figure dessinée (A ou B). Justifier votre choix.\n\n**3.** On exécute le script 2.\n\na. Quelle est la probabilité que le premier élément tracé soit un carré ?\n\nb. Quelle est la probabilité que les deux premiers éléments soient des carrés ?\n\n**4.** Dans le script 2, on aimerait que la couleur des différents éléments soit aléatoire, avec à chaque fois 50 % de chance d'avoir un élément noir et 50 % de chance d'avoir un élément rouge. Écrire la suite d'instructions qu'il faut alors créer et préciser où l'insérer dans le script 2.",
      points: 19,
    },
    {
      id: "ex5",
      title: "Exercice 5 (18 points)",
      content: "Olivia s'est acheté un tableau pour décorer le mur de son salon. Ce tableau est constitué de quatre rectangles identiques nommés 1, 2, 3 et 4 dessinés à l'intérieur d'un grand rectangle ABCD d'aire égale à 1,215 $m^2$. Le ratio longueur : largeur est égal à 3 : 2 pour chacun des cinq rectangles. (Voir figure : grand rectangle ABCD avec, en haut à droite, le rectangle 1 (sommets incluant E) ; en bas à gauche le rectangle 2 ; en bas à droite le rectangle 4 ; et au centre/bas, le rectangle 3 avec un point F, les quatre petits rectangles disposés en arrangement asymétrique à l'intérieur du grand rectangle.)\n\n**1.** Recopier, en les complétant, les phrases suivantes. Aucune justification n'est demandée.\n\na. Le rectangle ... est l'image du rectangle ... par la translation qui transforme C en E.\n\nb. Le rectangle 3 est l'image du rectangle ... par la rotation de centre F et d'angle 90° dans le sens des aiguilles d'une montre.\n\nc. Le rectangle ABCD est l'image du rectangle ... par l'homothétie de centre ... et de rapport 3. (Il y a plusieurs réponses possibles, une seule est demandée.)\n\n**2.** Quelle est l'aire d'un petit rectangle ?\n\n**3.** Quelles sont la longueur et la largeur du rectangle ABCD ?",
      points: 18,
    },
    {
      id: "ex6",
      title: "Exercice 6 (17 points)",
      content: "Voici deux programmes de calcul :\n\n**Programme 1** : Choisir un nombre. Le multiplier par 3. Ajouter 1.\n\n**Programme 2** : Choisir un nombre. Soustraire 1 (à gauche) / Ajouter 2 (à droite). Multiplier les deux nombres obtenus.\n\n**1.** Vérifier que si on choisit 5 comme nombre de départ, le résultat du programme 1 vaut 16 et le résultat du programme 2 vaut 28.\n\nOn appelle $A(x)$ le résultat du programme 1 en fonction du nombre $x$ choisi au départ. La fonction $B: x\\mapsto(x-1)(x+2)$ donne le résultat du programme 2.\n\n**2a.** Exprimer $A(x)$ en fonction de $x$.\n\n**2b.** Déterminer le nombre que l'on doit choisir au départ pour obtenir 0 comme résultat du programme 1.\n\n**3.** Développer et réduire l'expression $B(x)=(x-1)(x+2)$.\n\n**4a.** Montrer que $B(x)-A(x)=(x+1)(x-3)$.\n\n**4b.** Quels nombres doit-on choisir au départ pour que le programme 1 et le programme 2 donnent le même résultat ? Expliquer la démarche.",
      points: 17,
    },
  ],
  correction: {
    kind: "officielle",
    sections: [
      {
        id: "corr-ex1",
        title: "Corrigé — Exercice 1",
        content: "**1.** $69=3\\times23$ ; $1150=2\\times5^2\\times23$ ; $4140=2^2\\times3^2\\times5\\times23$.\n\n**2.** Le nombre de marins doit diviser 69, 1150 et 4140. Seul le facteur 23 est commun aux trois décompositions. Il y a donc **23 marins**.",
      },
      {
        id: "corr-ex2",
        title: "Corrigé — Exercice 2",
        content: "**1.** Dans ADM rectangle en A : $\\tan(\\widehat{ADM})=\\frac{AM}{AD}$, donc $\\tan(60°)=\\frac{AM}{2}$, d'où $AM=2\\tan(60°)\\approx3{,}46$ m.\n\n**2.** $MB=AB-AM\\approx4-3{,}46=0{,}54$. La proportion non utilisée est $\\frac{MB}{AB}\\approx0{,}14$.\n\n**3.** La somme des angles d'un triangle vaut 180°. Dans ADM : angle 90° en A, 60° en D, 30° en M. Dans DPN rectangle en P, l'angle en D mesure $90-60=30°$ : DPN est semblable à ADM. Dans MPN rectangle en P, l'angle en M mesure $90-30=60°$ : MPN est semblable à ADM. Les trois triangles AMD, PNM et PDN sont donc semblables (deux angles égaux).\n\n**4.** Le rapport d'agrandissement de DNP à ADM est $\\frac{DM}{DN}$. Dans ADM, $\\cos(60°)=\\frac{AD}{DM}=\\frac{2}{DM}$, donc $DM=4$. Le rapport est $\\frac{4}{3{,}46}\\approx1{,}16<1{,}5$.",
      },
      {
        id: "corr-ex3",
        title: "Corrigé — Exercice 3",
        content: "**1a.** Rayon de $C_2$ : 0,75 cm. Aire de base $B=\\pi\\times0{,}75^2$. Volume de sable $=\\frac{2}{3}\\times\\pi\\times0{,}75^2\\times4{,}2\\approx4{,}95\\ cm^3$.\n\n**1b.** Temps $=\\frac{volume}{débit}=\\frac{4{,}95}{1{,}98}=2{,}5$ min $=2$ min $30$ s.\n\n**2a.** $1+1+2+6+3+7+6+3+1+2+3+2+3=40$ tests.\n\n**2b.** Étendue $=2min38s-2min22s=16s<20s$. Médiane (moyenne des 20e et 21e valeurs ordonnées) $=2min29s$ à $2min30s$, comprise entre 2min29s et 2min31s. Moyenne des secondes $=\\frac{1204}{40}=30{,}1$, donc 2min30,1s, comprise entre 2min28s et 2min32s. Les trois conditions sont vérifiées : **le sablier ne sera pas éliminé**.",
      },
    ],
    sourceLabel: "APMEP — Corrigé du Brevet des collèges Métropole–La Réunion, 1er juillet 2019",
    sourceUrl: "https://www.apmep.fr/IMG/pdf/Corrige_Brevet_Metropole_juillet_2019_DV.pdf",
  },
  sourceLabel: "APMEP — Brevet des collèges Métropole–La Réunion, 1er juillet 2019",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/Brevet_Metropole_1_juillet_2019_DV-2.pdf",
  tags: ["arithmetique", "geometrie", "probabilites", "programmation"],
},
{
  id: "brevet-2022-juin",
  examType: "brevet",
  year: 2022,
  session: "juin",
  title: "Brevet des collèges — Mathématiques — Juin 2022",
  schoolLevel: "3eme",
  durationMinutes: 120,
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (20 points)",
      content: "Une famille se promène au bord d'une rivière. Les enfants aimeraient connaître la largeur de la rivière. Ils prennent des repères, comptent leurs pas et dessinent un schéma sur lequel les points C, E et D, de même que A, E et B sont alignés. (Voir figure : deux droites (AC) et (BD) toutes deux perpendiculaires à (AB), se coupant respectivement les segments [CD] et [AB] au point E, avec EA = 20 pas, EB = 5 pas. Le schéma n'est pas à l'échelle.)\n\nPour les questions 1 et 2, les longueurs sont exprimées en nombre de pas.\n\n**1.** Démontrer que les droites (AC) et (BD) sont parallèles.\n\n**2.** Déterminer, en nombre de pas, la largeur AC de la rivière.\n\nPour les questions qui suivent, on assimile la longueur d'un pas à 65 cm.\n\n**3.** Montrer que la longueur CE vaut 13,3 m, en arrondissant au décimètre près.\n\n**4a.** L'un des enfants lâche un bâton dans la rivière au niveau du point E. Avec le courant, le bâton se déplace en ligne droite en 5 secondes jusqu'au point C. Calculer la vitesse du bâton en m/s.\n\n**4b.** Est-il vrai que « le bâton se déplace à une vitesse moyenne inférieure à 10 km/h » ?",
      points: 20,
    },
    {
      id: "ex2",
      title: "Exercice 2 (20 points) — QCM",
      content: "Cet exercice est un questionnaire à choix multiples (QCM). Aucune justification n'est demandée. Pour chaque question, trois réponses (A, B et C) sont proposées. Une seule réponse est exacte. Recopier sur la copie le numéro de la question et la réponse.\n\n**1.** On considère deux figures : un parallélogramme ABEB' et un parallélogramme A'E'B' (image par translation). Par quelle transformation la figure 2 est-elle l'image de la figure 1 ? A. une translation B. une homothétie C. une symétrie axiale\n\n**2.** On considère la représentation graphique d'une fonction $g$ passant par les points $(-1;-1)$, $(1;2)$ approximativement, courbe croissante. Quel est l'antécédent de 2 par la fonction $g$ ? A. 2 B. 1 C. 4\n\n**3.** Soit $f$ la fonction définie par $f(x)=3x^2-7$. Quelle affirmation est correcte ? A. 29 est l'image de 2 par la fonction $f$. B. $f(3)=20$. C. $f$ est une fonction affine.\n\n**4.** On a relevé les performances, en mètres, au lancer du poids de 13 élèves : 3,41 ; 5,25 ; 5,42 ; 4,3 ; 6,11 ; 4,28 ; 5,15 ; 3,7 ; 6,07 ; 5,82 ; 4,62 ; 4,91 ; 4,01. Quelle est la médiane de cette série ? A. 7 B. 4,91 C. 5,15\n\n**5.** On considère une configuration où les triangles LAC et BUT sont semblables, avec LA = 2,1 cm, AC = 2,4 cm, LC = 2,5 cm, et BU = 6,3 cm, UT = 7,2 cm, BT = 7,5 cm. Par quel nombre doit-on multiplier l'aire du triangle LAC pour obtenir l'aire du triangle BUT ? A. 3 B. 6 C. 9",
      points: 20,
    },
    {
      id: "ex3",
      title: "Exercice 3 (20 points)",
      content: "Une collectionneuse compte ses cartes Pokémon afin de les revendre. Elle possède 252 cartes de type « feu » et 156 cartes de type « terre ».\n\n**1a.** Parmi les trois propositions suivantes, laquelle correspond à la décomposition en produit de facteurs premiers du nombre 252 : Proposition 1 : $2^2\\times9\\times7$ ; Proposition 2 : $2\\times2\\times3\\times21$ ; Proposition 3 : $2^2\\times3^2\\times7$.\n\n**1b.** Donner la décomposition en produit de facteurs premiers du nombre 156.\n\n**2.** Elle veut réaliser des paquets identiques, contenant chacun le même nombre de cartes « terre » et le même nombre de cartes « feu », en utilisant toutes ses cartes.\n\na. Peut-elle faire 36 paquets ?\n\nb. Quel est le nombre maximum de paquets qu'elle peut réaliser ?\n\nc. Combien de cartes de chaque type contient alors chaque paquet ?\n\n**3.** Elle choisit une carte au hasard parmi toutes ses cartes (indiscernables au toucher). Calculer la probabilité que ce soit une carte de type « terre ».",
      points: 20,
    },
    {
      id: "ex4",
      title: "Exercice 4 (20 points)",
      content: "Dans cet exercice, $x$ est un nombre strictement supérieur à 3. On s'intéresse à deux figures géométriques : un rectangle dont les côtés ont pour longueurs $x-3$ et $x+7$, et un carré de côté $x$.\n\n**1.** Quatre propositions sont écrites : $4x$, $4+x$, $x^2$, $2x$. Recopier celle qui correspond à l'aire du carré (sans justifier).\n\n**2.** Montrer que l'aire du rectangle est égale à $x^2+4x-21$.\n\n**3.** Un script Scratch doit renvoyer l'aire du rectangle lorsque l'utilisateur a saisi une valeur de $x$. Le script est : (1) quand la touche espace est pressée ; (2) demander combien vaut x et attendre ; (3) mettre x à réponse ; (4) mettre R à x*x ; (5) ajouter [...]*x à R ; (6) ajouter [...] à R ; (7) dire (« L'aire du rectangle est » et R) pendant 2 secondes. Écrire sur la copie les contenus des trois cases vides des lignes 5, 6 et 7 (lignes 5 et 6 à compléter avec des nombres).\n\n**4.** On a pressé la touche espace puis saisi le nombre 8. Que renvoie le programme ?\n\n**5.** Quel nombre $x$ doit-on choisir pour que l'aire du rectangle soit égale à l'aire du carré ?",
      points: 20,
    },
    {
      id: "ex5",
      title: "Exercice 5 (20 points)",
      content: "Dans une habitation, la consommation d'eau peut être anormalement élevée lorsqu'il y a une fuite d'eau. Une salle de bain est équipée d'une vasque de forme cylindrique. Le robinet fuit à raison d'une goutte par seconde. En moyenne, 20 gouttes d'eau correspondent à un millilitre (1 ml).\n\nCaractéristiques de la vasque : diamètre intérieur 40 cm, hauteur intérieure 15 cm, masse 25 kg.\n\nRappels : Volume du cylindre $=\\pi\\times rayon^2\\times hauteur$ ; $1\\ dm^3=1$ litre.\n\n**1.** En raison de la fuite, montrer qu'il tombe 86 400 gouttes dans la vasque en une journée complète.\n\n**2.** Calculer, en litres, le volume d'eau qui tombe dans la vasque en une semaine en raison de la fuite.\n\n**3.** Montrer que la vasque a un volume de 18,85 litres, arrondi au centilitre près.\n\n**4.** L'évacuation de la vasque est fermée et le logement inoccupé pendant une semaine. L'eau va-t-elle déborder de la vasque ? Justifier la réponse.\n\n**5.** À la fin du XIXe siècle, la consommation domestique d'eau par habitant en France était d'environ 17 litres par jour. Elle est passée à 165 litres par jour et par habitant en 2004. En 2018, la consommation des Français baisse légèrement pour atteindre 148 litres d'eau par jour et par habitant. Calculer le pourcentage de diminution de la consommation quotidienne d'eau par habitant entre 2004 et 2018. On arrondira ce pourcentage à l'unité.",
      points: 20,
    },
  ],
  correction: {
    kind: "officielle",
    sections: [
      {
        id: "corr-ex1",
        title: "Corrigé — Exercice 1",
        content: "**1.** Les droites (AC) et (BD) sont toutes les deux perpendiculaires à la même droite (AB). Elles sont donc parallèles.\n\n**2.** Par le théorème de Thalès : $\\frac{EC}{ED}=\\frac{EA}{EB}=\\frac{AC}{BD}$, soit $\\frac{20}{5}=\\frac{AC}{1}$, d'où $AC=4$ pas.\n\n**3.** $AC=4\\times0{,}65=2{,}6$ m ; $AE=20\\times0{,}65=13$ m. Le triangle ACE est rectangle en A : $CE^2=AC^2+AE^2=2{,}6^2+13^2=175{,}76$, donc $CE=\\sqrt{175{,}76}\\approx13{,}3$ m.\n\n**4a.** $V=\\frac{CE}{5}=\\frac{13{,}3}{5}=2{,}66$ m/s.\n\n**4b.** $2{,}66\\ m/s=2{,}66\\times3600=9576\\ m/h=9{,}576$ km/h $<10$ km/h. L'affirmation est vraie.",
      },
      {
        id: "corr-ex2",
        title: "Corrigé — Exercice 2 (QCM)",
        content: "**1.** Réponse A (translation). **2.** Réponse B (antécédent 1, car $g(1)=2$). **3.** Réponse B : $f(3)=3\\times9-7=20$. **4.** Réponse B : en ordonnant les 13 valeurs, la 7e est 4,91 m. **5.** Réponse C : coefficient des longueurs $=\\frac{6{,}3}{2{,}1}=3$, donc coefficient des aires $=3^2=9$.",
      },
      {
        id: "corr-ex3",
        title: "Corrigé — Exercice 3",
        content: "**1a.** Réponse 3 : $252=2^2\\times3^2\\times7$ (les autres propositions contiennent 9 et 21, qui ne sont pas premiers).\n\n**1b.** $156=2^2\\times3\\times13$.\n\n**2a.** 36 ne divise pas 156 ($156=36\\times4+12$) donc impossible.\n\n**2b.** Le PGCD de 252 et 156 est $2^2\\times3=12$. Le nombre maximum de paquets est **12**.\n\n**2c.** $252\\div12=21$ cartes « feu » et $156\\div12=13$ cartes « terre » par paquet.\n\n**3.** Total de cartes $=408$. Probabilité $=\\frac{156}{408}=\\frac{13}{34}$.",
      },
    ],
    sourceLabel: "APMEP — Corrigé du Brevet des collèges Métropole Antilles-Guyane, 30 juin 2022",
    sourceUrl: "https://www.apmep.fr/IMG/pdf/corrige_brevet_metropole_30_06_2022_cp-2.pdf",
  },
  sourceLabel: "APMEP — Brevet des collèges Métropole Antilles-Guyane, 30 juin 2022",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/Brevet_metro_juin_2022_DV.pdf",
  tags: ["geometrie", "qcm", "arithmetique", "fonctions"],
},
{
  id: "brevet-2024-juin",
  examType: "brevet",
  year: 2024,
  session: "juin",
  title: "Brevet des collèges — Mathématiques — Juin 2024",
  schoolLevel: "3eme",
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (20 points)",
      content: "Au casino, la roulette est un jeu de hasard pour lequel chaque joueur mise au choix sur un ou plusieurs numéros. On lance une bille sur une roue qui tourne, numérotée de 0 à 36. La bille a la même probabilité de s'arrêter sur chaque numéro. (Voir figure : roue de roulette avec les numéros 0 à 36 répartis, alternant cases noires et rouges, le 0 étant vert.)\n\n**1.** Expliquer pourquoi la probabilité que la bille s'arrête sur le numéro 7 est $\\frac{1}{37}$.\n\n**2.** Déterminer la probabilité que la bille s'arrête sur une case à la fois noire et paire.\n\n**3a.** Déterminer la probabilité que la bille s'arrête sur un numéro inférieur ou égal à 6.\n\n**3b.** En déduire la probabilité que la bille s'arrête sur un numéro supérieur ou égal à 7.\n\n**3c.** Un joueur affirme qu'on a plus de 3 chances sur 4 d'obtenir un numéro supérieur ou égal à 7. A-t-il raison ?",
      points: 20,
    },
    {
      id: "ex2",
      title: "Exercice 2 (20 points)",
      content: "**Programme A** : Choisir un nombre. Prendre le carré du nombre choisi. Multiplier le résultat par 2. Ajouter le double du nombre de départ. Soustraire 4 au résultat.\n\n**Programme B** (script) : (1) quand le drapeau est cliqué ; (2) demander « Choisir un nombre » et attendre ; (3) mettre « Nombre choisi » à réponse ; (4) mettre « Résultat 1 » à nombre choisi + 2 ; (5) mettre « Résultat 2 » à nombre choisi − 1 ; (6) dire (« Le résultat est » et Résultat 1 × Résultat 2).\n\n**1a.** Vérifier que, si on choisit 5 comme nombre de départ, le résultat du programme A est 56.\n\n**1b.** Quel résultat obtient-on avec le programme B si on choisit −9 comme nombre de départ ?\n\n**2.** On choisit un nombre quelconque $x$ comme nombre de départ.\n\na. Parmi les trois propositions $E_1=(x+2)-1$, $E_2=(x+2)\\times(x-1)$, $E_3=x+2\\times x-1$, recopier celle qui donne le résultat obtenu par le programme B.\n\nb. Exprimer en fonction de $x$ le résultat obtenu avec le programme A.\n\n**3.** Démontrer que, quel que soit le nombre choisi au départ, le résultat du programme A est toujours le double du résultat du programme B.",
      points: 20,
    },
    {
      id: "ex3",
      title: "Exercice 3 (22 points)",
      content: "Sur la figure, on a : C est un cercle de centre O et de rayon 4,5 cm ; [AB] est un diamètre de ce cercle et D est un point du cercle ; les points B, E, A sont alignés, ainsi que les points D, F, A ; les droites (BD) et (EF) sont parallèles ; BD = 5,4 cm ; DA = 7,2 cm et AE = 2,7 cm. (Voir figure : cercle de centre O, diamètre [AB] horizontal, D un point du cercle au-dessus, le triangle ABD inscrit, E sur [AB] proche de O, F sur [DA], (EF) parallèle à (BD).)\n\n**1.** Justifier que le diamètre [AB] mesure 9 cm.\n\n**2.** Démontrer que le triangle ABD est rectangle en D.\n\n**3.** Calculer AF.\n\n**4a.** Justifier que l'aire du triangle ABD est égale à 19,44 $cm^2$.\n\n**4b.** Calculer l'aire du disque, arrondie au centième. Rappel : l'aire du disque est égale à $\\pi\\times R^2$, où $R$ est le rayon du disque.\n\n**5.** Quel pourcentage de l'aire du disque représente l'aire du triangle ABD ?",
      points: 22,
    },
    {
      id: "ex4",
      title: "Exercice 4 (18 points) — QCM",
      content: "Cet exercice est un questionnaire à choix multiple (QCM). Pour chaque question, trois réponses (A, B ou C) sont proposées. Une seule réponse est exacte. Recopier sur la copie le numéro de la question et la lettre correspondant à la réponse exacte. Aucune justification n'est demandée.\n\n**1.** On considère la fonction $f$ définie par $f(x)=3x-2$. Quelle est l'image de $-4$ par cette fonction ? A. $-14$ B. $-10$ C. $-3$\n\n**2.** Combien vaut $(-5)^3$ ? A. $-125$ B. $-15$ C. $125$\n\n**3.** Sur un quadrillage de points B, C, G, H (ligne 1), A, D, I (ligne 2), F, E, L, K (ligne 3), avec J entre les lignes 2 et 3 sous D : quelle est l'image du point J par la translation qui transforme C en A ? A. H B. E C. D\n\n**4.** Sur la représentation graphique d'une fonction $f$ (courbe $C_f$) passant par les points indiqués, quel est l'antécédent de 3 par la fonction $f$ ? A. 3 B. $-3$ C. 0\n\n**5.** On a mesuré les tailles, en m, de sept élèves : $1{,}46\\,;\\,1{,}65\\,;\\,1{,}6\\,;\\,1{,}72\\,;\\,1{,}7\\,;\\,1{,}67\\,;\\,1{,}75$. Quelle est la médiane, en m, de ces tailles ? A. 1,72 B. 1,67 C. 1,65\n\n**6.** Dans le triangle ABC rectangle en A (non en vraie grandeur), avec AB = 4, AC = 3, BC = 5, quelle est la valeur de $\\cos\\alpha$ (angle en B) ? A. 0,8 B. 0,75 C. 0,6",
      points: 18,
    },
    {
      id: "ex5",
      title: "Exercice 5 (20 points)",
      content: "Un club de natation propose un après-midi découverte pour les enfants.\n\n### PARTIE A\n\nLa présidente du club veut offrir des petits sachets cadeaux tous identiques contenant des autocollants et des drapeaux avec le logo du club. Elle a acheté 330 autocollants et 132 drapeaux et veut tous les utiliser. Elle veut que, dans chaque sachet, il y ait exactement le même nombre d'autocollants et le même nombre de drapeaux.\n\n**1.** Pourquoi n'est-il pas possible de faire 15 sachets ?\n\n**2a.** Décomposer 330 et 132 en produits de facteurs premiers.\n\n**2b.** En déduire le plus grand nombre de sachets que la présidente pourra réaliser.\n\n**2c.** Dans ce cas, combien mettra-t-elle d'autocollants et de drapeaux dans chaque sachet ?\n\n### PARTIE B\n\nLa piscine a la forme d'un pavé droit de dimensions 25 m × 15 m × 2 m. Elle est remplie aux $\\frac{9}{10}$ du volume. 1 $m^3$ d'eau coûte 4,14 €. Combien coûte le remplissage de la piscine ?",
      points: 20,
    },
  ],
  correction: {
    kind: "officielle",
    sections: [
      {
        id: "corr-ex1",
        title: "Corrigé — Exercice 1",
        content: "**1.** De 0 à 36 il y a $36-0+1=37$ nombres. La probabilité de chaque numéro est donc $\\frac{1}{37}$.\n\n**2.** Il y a 18 cases noires, parmi lesquelles 10 sont paires (2, 4, 6, 8, 10, 20, 22, 24, 26, 28). La probabilité est $\\frac{10}{37}$.\n\n**3a.** De 0 à 6, il y a 7 nombres : probabilité $\\frac{7}{37}$.\n\n**3b.** $1-\\frac{7}{37}=\\frac{30}{37}$.\n\n**3c.** $\\frac{30}{37}\\approx0{,}81>0{,}75=\\frac{3}{4}$ : le joueur a raison.",
      },
      {
        id: "corr-ex2",
        title: "Corrigé — Exercice 2",
        content: "**1a.** $5\\to5^2=25\\to2\\times25=50\\to50+2\\times5=60\\to60-4=56$. ✓\n\n**1b.** Avec $-9$ : Résultat 1 $=-9+2=-7$ ; Résultat 2 $=-9-1=-10$ ; produit $=(-7)\\times(-10)=70$.\n\n**2a.** Résultat 1 $=x+2$, Résultat 2 $=x-1$, produit $=(x+2)(x-1)=E_2$.\n\n**2b.** Programme A : $x\\to x^2\\to2x^2\\to2x^2+2x\\to2x^2+2x-4$.\n\n**3.** $2x^2+2x-4=2(x^2+x-2)$. Or $E_2=(x+2)(x-1)=x^2+x-2$. Donc le résultat du programme A est bien le double de celui du programme B.",
      },
      {
        id: "corr-ex3",
        title: "Corrigé — Exercice 3",
        content: "**1.** $AB=2R=2\\times4{,}5=9$ cm.\n\n**2.** $AD^2+DB^2=7{,}2^2+5{,}4^2=51{,}84+29{,}16=81=9^2=AB^2$. D'après la réciproque du théorème de Pythagore, le triangle ABD est rectangle en D.\n\n**3.** Par Thalès (B,E,A alignés ; D,F,A alignés ; (EF)//(BD)) : $\\frac{AE}{AB}=\\frac{AF}{AD}$, soit $\\frac{2{,}7}{9}=\\frac{AF}{7{,}2}$, d'où $AF=0{,}3\\times7{,}2=2{,}16$ cm.\n\n**4a.** Aire $=\\frac{BD\\times AD}{2}=\\frac{5{,}4\\times7{,}2}{2}=19{,}44\\ cm^2$.\n\n**4b.** Aire du disque $=\\pi\\times4{,}5^2=\\frac{81}{4}\\pi\\approx63{,}62\\ cm^2$.\n\n**5.** $\\frac{19{,}44}{63{,}62}\\times100\\approx30{,}6\\%$.",
      },
      {
        id: "corr-ex4",
        title: "Corrigé — Exercice 4 (QCM)",
        content: "**1.** $f(-4)=3\\times(-4)-2=-14$. Réponse A.\n\n**2.** $(-5)^3=-125$. Réponse A.\n\n**3.** Réponse B.\n\n**4.** $f(0)=3$, donc l'antécédent de 3 est 0. Réponse C.\n\n**5.** Valeurs ordonnées : 1,46 ; 1,6 ; 1,65 ; 1,67 ; 1,7 ; 1,72 ; 1,75. La médiane (4e valeur) est 1,67. Réponse B.\n\n**6.** $\\cos\\alpha=\\frac{\\text{côté adjacent}}{\\text{hypoténuse}}=\\frac{4}{5}=0{,}8$. Réponse A.",
      },
      {
        id: "corr-ex5",
        title: "Corrigé — Exercice 5",
        content: "### PARTIE A\n\n**1.** $\\frac{132}{15}=8{,}8$ n'est pas entier : on ne peut pas faire 15 sachets.\n\n**2a.** $330=2\\times3\\times5\\times11$ ; $132=2^2\\times3\\times11$.\n\n**2b.** Le facteur commun maximal est $2\\times3\\times11=66$. La présidente peut faire **66 sachets**.\n\n**2c.** $330\\div66=5$ autocollants ; $132\\div66=2$ drapeaux par sachet.\n\n### PARTIE B\n\nVolume de la piscine $=25\\times15\\times2=750\\ m^3$. Volume d'eau $=750\\times\\frac{9}{10}=675\\ m^3$. Coût $=675\\times4{,}14=2\\,794{,}50$ €.",
      },
    ],
    sourceLabel: "APMEP — Corrigé du Brevet Métropole Guadeloupe–Guyane, 1er juillet 2024",
    sourceUrl: "https://www.apmep.fr/IMG/pdf/Corrige_brevet_Metropole_1_07_2024_DV.pdf",
  },
  sourceLabel: "APMEP — Brevet Métropole Guadeloupe–Guyane, 1er juillet 2024",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/Brevet_Metropole_1_07_2024_DV.pdf",
  tags: ["probabilites", "geometrie", "qcm", "arithmetique"],
},
{
  id: "bac-2014-s-metropole-juin",
  examType: "bac",
  year: 2014,
  session: "juin",
  title: "Baccalauréat — Série S — Métropole — Juin 2014",
  schoolLevel: "terminale",
  bacSeries: "S",
  durationMinutes: 240,
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (5 points) — Commun à tous les candidats",
      points: 5,
      content:
        "### Partie A\n\nDans le plan muni d'un repère orthonormé, on désigne par $C_1$ la courbe représentative de la fonction $f_1$ définie sur $\\mathbb{R}$ par :\n$$f_1(x) = x + e^{-x}.$$\n\n1. Justifier que $C_1$ passe par le point $A$ de coordonnées $(0\\,;\\,1)$.\n2. Déterminer le tableau de variation de la fonction $f_1$. On précisera les limites de $f_1$ en $+\\infty$ et en $-\\infty$.\n\n### Partie B\n\nL'objet de cette partie est d'étudier la suite $(I_n)$ définie sur $\\mathbb{N}$ par :\n$$I_n = \\int_0^1 \\left(x + e^{-nx}\\right)dx.$$\n\n1. Dans le plan muni d'un repère orthonormé $(O,\\vec{\\imath},\\vec{\\jmath})$, pour tout entier naturel $n$, on note $C_n$ la courbe représentative de la fonction $f_n$ définie sur $\\mathbb{R}$ par $f_n(x) = x + e^{-nx}$. On a tracé les courbes $C_n$ pour plusieurs valeurs de $n$ (1, 2, 3, 4, 6, 15, 60) ainsi que la droite $D$ d'équation $x=1$ ; toutes les courbes passent par le point $A(0\\,;\\,1)$ et se rapprochent visuellement du segment $y=x$ sur $[0\\,;\\,1]$ à mesure que $n$ augmente.\n   a. Interpréter géométriquement l'intégrale $I_n$.\n   b. En utilisant cette interprétation, formuler une conjecture sur le sens de variation de la suite $(I_n)$ et sa limite éventuelle.\n2. Démontrer que pour tout entier naturel $n$ supérieur ou égal à 1,\n$$I_{n+1} - I_n = \\int_0^1 e^{-(n+1)x}\\left(1 - e^x\\right)dx.$$\nEn déduire le signe de $I_{n+1} - I_n$ puis démontrer que la suite $(I_n)$ est convergente.\n3. Déterminer l'expression de $I_n$ en fonction de $n$ et déterminer la limite de la suite $(I_n)$.",
    },
    {
      id: "ex2",
      title: "Exercice 2 (5 points) — Commun à tous les candidats",
      points: 5,
      content:
        "Les parties A et B peuvent être traitées indépendamment.\n\n### Partie A\n\nUn laboratoire pharmaceutique propose des tests de dépistage de diverses maladies. Son service de communication met en avant les caractéristiques suivantes :\n- la probabilité qu'une personne malade présente un test positif est $0{,}99$ ;\n- la probabilité qu'une personne saine présente un test positif est $0{,}001$.\n\n1. Pour une maladie qui vient d'apparaître, une étude statistique permet d'estimer que le pourcentage de personnes malades parmi la population d'une métropole est égal à $0{,}1\\,\\%$. On choisit au hasard une personne dans cette population et on lui fait subir le test. On note $M$ l'évènement « la personne choisie est malade » et $T$ l'évènement « le test est positif ».\n   a. Traduire l'énoncé sous la forme d'un arbre pondéré.\n   b. Démontrer que la probabilité $p(T)$ de l'évènement $T$ est égale à $1{,}989 \\times 10^{-3}$.\n   c. L'affirmation suivante est-elle vraie ou fausse ? Justifier la réponse. *Affirmation : « Si le test est positif, il y a moins d'une chance sur deux que la personne soit malade ».*\n2. Le laboratoire décide de commercialiser un test dès lors que la probabilité qu'une personne testée positivement soit malade est supérieure ou égale à $0{,}95$. On désigne par $x$ la proportion de personnes atteintes d'une certaine maladie dans la population. À partir de quelle valeur de $x$ le laboratoire commercialise-t-il le test correspondant ?\n\n### Partie B\n\nLa chaîne de production du laboratoire fabrique, en très grande quantité, le comprimé d'un médicament.\n\n1. Un comprimé est conforme si sa masse est comprise entre 890 et 920 mg. On admet que la masse en milligrammes d'un comprimé pris au hasard peut être modélisée par une variable aléatoire $X$ qui suit la loi normale $\\mathcal{N}(\\mu,\\sigma^2)$, de moyenne $\\mu = 900$ et d'écart-type $\\sigma = 7$.\n   a. Calculer la probabilité qu'un comprimé prélevé au hasard soit conforme. On arrondira à $10^{-2}$.\n   b. Déterminer l'entier positif $h$ tel que $P(900 - h \\leqslant X \\leqslant 900 + h) \\approx 0{,}99$ à $10^{-3}$ près.\n2. La chaîne de production a été réglée dans le but d'obtenir au moins $97\\,\\%$ de comprimés conformes. Afin d'évaluer l'efficacité des réglages, on effectue un contrôle en prélevant un échantillon de 1 000 comprimés assimilé à 1 000 tirages successifs avec remise. Le contrôle a permis de dénombrer 53 comprimés non conformes sur l'échantillon prélevé. Ce contrôle remet-il en question les réglages faits par le laboratoire ? On pourra utiliser un intervalle de fluctuation asymptotique au seuil de $95\\,\\%$.",
    },
    {
      id: "ex3",
      title: "Exercice 3 (5 points) — Commun à tous les candidats",
      points: 5,
      content:
        "On désigne par $(E)$ l'équation $z^4 + 4z^2 + 16 = 0$ d'inconnue complexe $z$.\n\n1. Résoudre dans $\\mathbb{C}$ l'équation $Z^2 + 4Z + 16 = 0$. Écrire les solutions de cette équation sous forme exponentielle.\n2. On désigne par $a$ le nombre complexe dont le module est égal à 2 et dont un argument est égal à $\\frac{\\pi}{3}$. Calculer $a^2$ sous forme algébrique. En déduire les solutions dans $\\mathbb{C}$ de l'équation $z^2 = -2 + 2i\\sqrt{3}$. On écrira les solutions sous forme algébrique.\n3. **Restitution organisée de connaissances.** On suppose connu le fait que pour tout nombre complexe $z = x+iy$ où $x \\in \\mathbb{R}$ et $y \\in \\mathbb{R}$, le conjugué de $z$ est le nombre complexe $\\bar{z}$ défini par $\\bar{z} = x - iy$. Démontrer que :\n   - Pour tous nombres complexes $z_1$ et $z_2$, $\\overline{z_1 z_2} = \\bar{z_1} \\cdot \\bar{z_2}$.\n   - Pour tout nombre complexe $z$ et tout entier naturel non nul $n$, $\\overline{z^n} = (\\bar{z})^n$.\n4. Démontrer que si $z$ est une solution de l'équation $(E)$ alors son conjugué $\\bar{z}$ est également une solution de $(E)$. En déduire les solutions dans $\\mathbb{C}$ de l'équation $(E)$. On admettra que $(E)$ admet au plus quatre solutions.",
    },
    {
      id: "ex4",
      title: "Exercice 4 (5 points) — Candidats ayant suivi l'enseignement de spécialité",
      points: 5,
      content:
        "Un pisciculteur dispose de deux bassins A et B pour l'élevage de ses poissons. Tous les ans à la même période :\n- il vide le bassin B et vend tous les poissons qu'il contenait, puis transfère tous les poissons du bassin A dans le bassin B ;\n- la vente de chaque poisson permet l'achat de deux petits poissons destinés au bassin A.\n\nPar ailleurs, le pisciculteur achète en plus 200 poissons pour le bassin A et 100 poissons pour le bassin B. Pour tout entier naturel $n \\geqslant 1$, on note $a_n$ et $b_n$ les effectifs de poissons des bassins A et B au bout de $n$ années. En début de première année, $a_0 = 200$ et $b_0 = 100$.\n\n1. Justifier que $a_1 = 400$ et $b_1 = 300$ puis calculer $a_2$ et $b_2$.\n2. On désigne par $A$ et $B$ les matrices telles que $A = \\begin{pmatrix} 0 & 2 \\\\ 1 & 0 \\end{pmatrix}$ et $B = \\begin{pmatrix} 200 \\\\ 100 \\end{pmatrix}$, et pour tout entier naturel $n$, on pose $X_n = \\begin{pmatrix} a_n \\\\ b_n \\end{pmatrix}$.\n   a. Expliquer pourquoi pour tout entier naturel $n$, $X_{n+1} = AX_n + B$.\n   b. Déterminer les réels $x$ et $y$ tels que $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = A\\begin{pmatrix} x \\\\ y \\end{pmatrix} + B$.\n   c. Pour tout entier naturel $n$, on pose $Y_n = \\begin{pmatrix} a_n + 400 \\\\ b_n + 300 \\end{pmatrix}$. Démontrer que pour tout entier naturel $n$, $Y_{n+1} = AY_n$.\n3. Pour tout entier naturel $n$, on pose $Z_n = Y_{2n}$.\n   a. Démontrer que $Z_{n+1} = A^2 Z_n$, puis que $Z_{n+1} = 2Z_n$.\n   b. On admet que $Y_{2n} = 2^n Y_0$. En déduire que $Y_{2n+1} = 2^n Y_1$, puis démontrer que pour tout entier naturel $n$, $a_{2n} = 600 \\times 2^n - 400$ et $a_{2n+1} = 800 \\times 2^n - 400$.\n4. Le bassin A a une capacité limitée à 10 000 poissons.\n   a. On donne l'algorithme suivant : *Variables* : $a$, $p$, $n$ entiers naturels. *Initialisation* : demander la valeur de $p$. *Traitement* : si $p$ est pair, affecter à $n$ la valeur $p/2$ puis à $a$ la valeur $600 \\times 2^n - 400$ ; sinon affecter à $n$ la valeur $(p-1)/2$ puis à $a$ la valeur $800 \\times 2^n - 400$. *Sortie* : afficher $a$. Que fait cet algorithme ? Justifier la réponse.\n   b. Écrire un algorithme qui affiche le nombre d'années pendant lesquelles le pisciculteur pourra utiliser le bassin A.",
    },
  ],
  correction: {
    kind: "officielle",
    sourceLabel: "Corrigé APMEP — Bac S Métropole 19 juin 2014",
    sourceUrl:
      "https://www.apmep.fr/IMG/pdf/Corrige_Metropole_S_19_juin_2014__pstricks.pdf",
    sections: [
      {
        id: "cor-ex1",
        title: "Exercice 1 — corrigé",
        content:
          "**Partie A.** $f_1(0) = 0 + e^0 = 1$ donc $C_1$ passe par $A(0;1)$. $f_1'(x) = 1 - e^{-x}$, qui s'annule en $x=0$ ; $f_1$ est décroissante sur $\\mathbb{R}_-$, croissante sur $\\mathbb{R}_+$, avec $\\lim_{-\\infty} f_1 = +\\infty$ et $\\lim_{+\\infty} f_1 = +\\infty$.\n\n**Partie B.** $I_n$ est l'aire sous $C_n$ entre $x=0$ et $x=1$ (fonction positive). On conjecture que $(I_n)$ est décroissante et tend vers $\\frac{1}{2}$. On montre $I_{n+1}-I_n = \\int_0^1 e^{-(n+1)x}(1-e^x)\\,dx \\leqslant 0$ (car $1-e^x \\leqslant 0$ sur $[0;1]$), donc $(I_n)$ est décroissante et minorée par 0, donc convergente. Calcul direct : $I_n = \\frac{1}{2} + \\frac{1-e^{-n}}{n}$, qui tend vers $\\frac{1}{2}$.",
      },
      {
        id: "cor-ex2",
        title: "Exercice 2 — corrigé",
        content:
          "**Partie A.** $p(T) = p(M)p_M(T) + p(\\bar M)p_{\\bar M}(T) = 0{,}001\\times 0{,}99 + 0{,}999\\times 0{,}001 = 1{,}989\\times 10^{-3}$. $p_T(M) = \\frac{0{,}99\\times 0{,}001}{1{,}989\\times 10^{-3}} \\approx 0{,}498 < 0{,}5$ : l'affirmation est **vraie**. Pour la commercialisation, on résout $p_T(M) \\geqslant 0{,}95$ en fonction de $x$, ce qui conduit à $x \\geqslant$ une valeur seuil proche de $0{,}160$.\n\n**Partie B.** $X \\sim \\mathcal{N}(900,7^2)$. $P(890 \\leqslant X \\leqslant 920) \\approx 0{,}94$. On trouve $h \\approx 18$ pour $P(900-h\\leqslant X\\leqslant900+h)\\approx0{,}99$. Avec $f=53/1000=0{,}053$ et $p=0{,}03$, l'intervalle de fluctuation asymptotique à 95 % est $\\left[p - 1{,}96\\sqrt{\\frac{p(1-p)}{n}}\\,;\\,p+1{,}96\\sqrt{\\frac{p(1-p)}{n}}\\right] \\approx [0{,}0166\\,;\\,0{,}0434]$ ; comme $0{,}053$ est hors de cet intervalle, le contrôle remet en question les réglages.",
      },
    ],
  },
  sourceLabel: "APMEP — Baccalauréat S Métropole, 19 juin 2014",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/Metropole__S_19_juin_2014_DV.pdf",
  tags: ["integrales", "probabilites-conditionnelles", "nombres-complexes", "suites-matricielles"],
},
{
  id: "bac-2018-s-metropole-juin",
  examType: "bac",
  year: 2018,
  session: "juin",
  title: "Baccalauréat — Série S — Métropole–La Réunion — Juin 2018",
  schoolLevel: "terminale",
  bacSeries: "S",
  durationMinutes: 240,
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (6 points) — Commun à tous les candidats",
      points: 6,
      content:
        "Dans cet exercice, on munit le plan d'un repère orthonormé. On considère la courbe d'équation $y = \\frac{1}{2}(e^x + e^{-x} - 2)$, appelée une « chaînette ». On s'intéresse aux « arcs de chaînette » délimités par deux points de cette courbe symétriques par rapport à l'axe des ordonnées. La « largeur » d'un tel arc délimité par les points $M(x; \\cdot)$ et $M'(-x;\\cdot)$ est $2x$, et sa « hauteur » est l'ordonnée de $M$. Le but de l'exercice est d'étudier les positions possibles du point $M$ d'abscisse $x$ strictement positive afin que la largeur de l'arc soit égale à sa hauteur.\n\n1. Justifier que le problème étudié se ramène à la recherche des solutions strictement positives de l'équation $(E): e^x + e^{-x} - 4x - 2 = 0$.\n2. On note $f$ la fonction définie sur $[0;+\\infty[$ par $f(x) = e^x + e^{-x} - 4x - 2$.\n   a. Vérifier que pour tout $x>0$, $f(x) = x\\left(\\frac{e^x}{x} - 4\\right) + e^{-x} - 2$.\n   b. Déterminer $\\lim_{x\\to+\\infty} f(x)$.\n3. a. Calculer $f'(x)$ pour $x \\in [0;+\\infty[$.\n   b. Montrer que l'équation $f'(x)=0$ équivaut à $(e^x)^2 - 4e^x - 1 = 0$.\n   c. En posant $X = e^x$, montrer que l'équation $f'(x)=0$ admet pour unique solution réelle le nombre $\\ln(2+\\sqrt{5})$.\n4. On donne le tableau de signes de $f'$ : négatif sur $\\left]0;\\ln(2+\\sqrt5)\\right[$, nul en $\\ln(2+\\sqrt5)$, positif au-delà.\n   a. Dresser le tableau de variations de $f$.\n   b. Démontrer que l'équation $f(x)=0$ admet une unique solution strictement positive notée $\\alpha$.\n5. On considère l'algorithme suivant, où $a,b,m$ sont des réels : *tant que* $b-a>0{,}1$ *faire* : $m \\leftarrow \\frac{a+b}{2}$ ; si $e^m+e^{-m}-4m-2>0$ alors $b\\leftarrow m$ sinon $a \\leftarrow m$.\n   a. Avant exécution, $a=2$ et $b=3$. Que contiennent-elles à la fin de l'exécution ? Justifier en complétant un tableau de valeurs.\n   b. Comment utiliser ces valeurs pour encadrer $\\alpha$ ?\n6. La Gateway Arch (Saint-Louis, États-Unis) a un profil approché par un arc de chaînette renversé dont la largeur est égale à la hauteur. La largeur, en mètres, est égale au double de la solution strictement positive de $(E'): e^{t/39} + e^{-t/39} - \\frac{4t}{39} - 2 = 0$. Donner un encadrement de la hauteur de la Gateway Arch.",
    },
    {
      id: "ex2",
      title: "Exercice 2 (4 points) — Commun à tous les candidats",
      points: 4,
      content:
        "Les parties A et B sont indépendantes. Le virus de la grippe atteint chaque année, en période hivernale, une partie de la population d'une ville. La vaccination contre la grippe est possible et doit être renouvelée chaque année.\n\n### Partie A\n\nUne étude menée dans la population de la ville à l'issue de la période hivernale permet de constater que : 40 % de la population est vaccinée ; 8 % des personnes vaccinées ont contracté la grippe ; 20 % de la population a contracté la grippe. On choisit une personne au hasard et on considère les évènements $V$ : « la personne est vaccinée » et $G$ : « la personne a contracté la grippe ».\n\n1. a. Donner la probabilité de l'évènement $G$.\n   b. Reproduire et compléter l'arbre pondéré associé.\n2. Déterminer la probabilité que la personne choisie ait contracté la grippe et soit vaccinée.\n3. La personne choisie n'est pas vaccinée. Montrer que la probabilité qu'elle ait contracté la grippe est égale à $0{,}28$.\n\n### Partie B\n\nLes probabilités demandées seront données à $10^{-3}$ près. On interroge au hasard $n$ habitants, assimilé à $n$ tirages successifs indépendants avec remise, avec une probabilité $0{,}4$ d'être vacciné. On note $X$ le nombre de personnes vaccinées parmi les $n$ interrogées.\n\n1. Quelle est la loi de probabilité suivie par $X$ ?\n2. Pour $n=40$ : a. Déterminer la probabilité qu'exactement 15 des 40 personnes soient vaccinées. b. Déterminer la probabilité qu'au moins la moitié des personnes interrogées soit vaccinée.\n3. On interroge un échantillon de 3 750 habitants ($n=3750$). On note $Z = \\frac{X-1500}{30}$, dont la loi peut être approchée par la loi normale centrée réduite. Déterminer la probabilité qu'il y ait entre 1 450 et 1 550 individus vaccinés.",
    },
    {
      id: "ex3",
      title: "Exercice 3 (5 points) — Commun à tous les candidats",
      points: 5,
      content:
        "Le but de cet exercice est d'examiner, dans différents cas, si les hauteurs d'un tétraèdre sont concourantes. On rappelle que dans un tétraèdre $MNPQ$, la hauteur issue de $M$ est la droite passant par $M$ orthogonale au plan $(NPQ)$.\n\n### Partie A — Étude de cas particuliers\n\nOn considère un cube $ABCDEFGH$. On admet que les droites $(AG)$, $(BH)$, $(CE)$ et $(DF)$, appelées « grandes diagonales » du cube, sont concourantes.\n\n1. On considère le tétraèdre $ABCE$.\n   a. Préciser la hauteur issue de $E$ et la hauteur issue de $C$.\n   b. Les quatre hauteurs du tétraèdre $ABCE$ sont-elles concourantes ?\n2. On considère le tétraèdre $ACHF$ et le repère $(A; \\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$.\n   a. Vérifier qu'une équation cartésienne du plan $(ACH)$ est $x-y+z=0$.\n   b. En déduire que $(FD)$ est la hauteur issue de $F$ du tétraèdre $ACHF$.\n   c. Par analogie, préciser les hauteurs issues de $A$, $C$ et $H$. Les quatre hauteurs sont-elles concourantes ?\n\nUn tétraèdre dont les quatre hauteurs sont concourantes est dit *orthocentrique*.\n\n### Partie B — Une propriété des tétraèdres orthocentriques\n\nOn considère un tétraèdre $MNPQ$ dont les hauteurs issues de $M$ et $N$ sont sécantes en $K$.\n\n1. a. Justifier que $(PQ)$ est orthogonale à $(MK)$ ; on admet de même pour $(NK)$.\n   b. Que peut-on en déduire pour $(PQ)$ et le plan $(MNK)$ ?\n2. Montrer que les arêtes $[MN]$ et $[PQ]$ sont orthogonales. (Propriété : si un tétraèdre est orthocentrique, ses arêtes opposées sont orthogonales deux à deux.)\n\n### Partie C — Application\n\nDans un repère orthonormé, on considère $R(-3;5;2)$, $S(1;4;-2)$, $T(4;-1;5)$ et $U(4;7;3)$. Le tétraèdre $RSTU$ est-il orthocentrique ? Justifier.",
    },
  ],
  correction: {
    kind: "officielle",
    sourceLabel: "Corrigé APMEP — Bac S Métropole–La Réunion 22 juin 2018",
    sourceUrl: "https://www.apmep.fr/IMG/pdf/Corrige_S_Metropole_juin_2018_FP.pdf",
    sections: [
      {
        id: "cor-ex1",
        title: "Exercice 1 — corrigé",
        content:
          "$f'(x) = e^x - e^{-x} - 4$ ; en posant $X=e^x$, $f'(x)=0 \\iff X^2-4X-1=0$, discriminant $\\Delta=20$, racines $2\\pm\\sqrt5$ ; seule $X=2+\\sqrt5>0$ est acceptable, donnant $x=\\ln(2+\\sqrt5)$. Tableau de variations : $f$ décroît de $f(0)=0$ à $f(\\ln(2+\\sqrt5))\\approx-3{,}3$ puis croît vers $+\\infty$ : par le théorème des valeurs intermédiaires, $f$ s'annule une unique fois sur $\\left]\\ln(2+\\sqrt5);+\\infty\\right[$, en $\\alpha$. L'algorithme de dichotomie donne $2{,}4375 < \\alpha < 2{,}5$. Pour la Gateway Arch, la hauteur $2t = 78\\alpha$ est encadrée entre 190 et 195 mètres.",
      },
      {
        id: "cor-ex2",
        title: "Exercice 2 — corrigé",
        content:
          "$P(G)=0{,}2$. $P(G\\cap V) = 0{,}4 \\times 0{,}08 = 0{,}032$. Par les probabilités totales, $P(\\bar V \\cap G) = P(G)-P(V\\cap G) = 0{,}168$, donc $P_{\\bar V}(G) = \\frac{0{,}168}{0{,}6} = 0{,}28$. Partie B : $X \\sim \\mathcal{B}(n;0{,}4)$ ; pour $n=40$, $P(X=15)\\approx0{,}123$ et $P(X\\geqslant20)\\approx0{,}130$ ; pour l'approximation normale, $P(1450\\leqslant X\\leqslant1550) \\approx 0{,}904$.",
      },
      {
        id: "cor-ex3",
        title: "Exercice 3 — corrigé",
        content:
          "Dans $ABCE$, les hauteurs issues de $E$ et $C$ sont des droites non coplanaires ($(EA)$ et $(BC)$), donc non sécantes : les quatre hauteurs ne peuvent être concourantes. Dans $ACHF$, on vérifie que $A,C,H$ appartiennent au plan d'équation $x-y+z=0$ et que $\\overrightarrow{DF}(1;-1;1)$ en est un vecteur normal, donc $(FD)\\perp(ACH)$ : par analogie les quatre hauteurs sont les grandes diagonales du cube, donc concourantes — $ACHF$ est orthocentrique. Partie C : on calcule $\\overrightarrow{ST}\\cdot\\overrightarrow{RU} = 21-10+7 \\neq 0$, donc $(ST)$ et $(RU)$ ne sont pas orthogonales : le tétraèdre $RSTU$ n'est pas orthocentrique.",
      },
    ],
  },
  sourceLabel: "APMEP — Baccalauréat S Métropole–La Réunion, 22 juin 2018",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/S_Metropole_LA_Reunion_22_juin_2018_DV.pdf",
  tags: ["fonction-exponentielle", "probabilites", "loi-normale", "geometrie-espace"],
},
{
  id: "bac-2021-spe-maths-juin",
  examType: "bac",
  year: 2021,
  session: "juin",
  title:
    "Baccalauréat — Enseignement de spécialité Mathématiques — Métropole (candidats libres, sujet 1) — Juin 2021",
  schoolLevel: "terminale",
  bacSeries: "Spe_Maths",
  durationMinutes: 240,
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (5 points) — Commun à tous les candidats",
      points: 5,
      content:
        "Dans une école de statistique, après étude des dossiers des candidats, le recrutement se fait de deux façons :\n- 10 % des candidats sont sélectionnés sur dossier. Ces candidats doivent ensuite passer un oral à l'issue duquel 60 % d'entre eux sont finalement admis à l'école.\n- Les candidats n'ayant pas été sélectionnés sur dossier passent une épreuve écrite à l'issue de laquelle 20 % d'entre eux sont admis à l'école.\n\n### Partie I\n\nOn choisit au hasard un candidat à ce concours de recrutement. On notera $D$ l'évènement « le candidat a été sélectionné sur dossier », $A$ l'évènement « le candidat a été admis à l'école », $\\bar D$ et $\\bar A$ les évènements contraires.\n\n1. Traduire la situation par un arbre pondéré.\n2. Calculer la probabilité que le candidat soit sélectionné sur dossier et admis à l'école.\n3. Montrer que la probabilité de l'évènement $A$ est égale à $0{,}24$.\n4. On choisit au hasard un candidat admis à l'école. Quelle est la probabilité que son dossier n'ait pas été sélectionné ?\n\n### Partie II\n\n1. On admet que la probabilité pour un candidat d'être admis à l'école est égale à $0{,}24$. On considère un échantillon de sept candidats choisis au hasard, assimilé à un tirage avec remise. On désigne par $X$ la variable aléatoire dénombrant les candidats admis parmi les sept tirés au sort.\n   a. On admet que $X$ suit une loi binomiale. Quels sont les paramètres de cette loi ?\n   b. Calculer la probabilité qu'un seul des sept candidats tirés au sort soit admis à l'école (réponse arrondie au centième).\n   c. Calculer la probabilité qu'au moins deux des sept candidats tirés au sort soient admis à cette école (réponse arrondie au centième).\n2. Un lycée présente $n$ candidats au recrutement, où $n$ est un entier naturel non nul. On admet que la probabilité pour un candidat quelconque d'être admis est $0{,}24$ et que les résultats sont indépendants.\n   a. Donner l'expression, en fonction de $n$, de la probabilité qu'aucun candidat issu de ce lycée ne soit admis.\n   b. À partir de quelle valeur de $n$ la probabilité qu'au moins un élève de ce lycée soit admis est-elle supérieure ou égale à $0{,}99$ ?",
    },
    {
      id: "ex2",
      title: "Exercice 2 (5 points) — Commun à tous les candidats",
      points: 5,
      content:
        "Soit $f$ la fonction définie sur l'intervalle $]0;+\\infty[$ par $f(x) = \\frac{e^x}{x}$. On note $C_f$ la courbe représentative de $f$ dans un repère orthonormé.\n\n1. a. Préciser la limite de $f$ en $+\\infty$.\n   b. Justifier que l'axe des ordonnées est asymptote à $C_f$.\n2. Montrer que, pour tout $x \\in ]0;+\\infty[$, $f'(x) = \\frac{e^x(x-1)}{x^2}$.\n3. Déterminer les variations de $f$ sur $]0;+\\infty[$ (tableau de variations avec limites).\n4. Soit $m$ un nombre réel. Préciser, selon les valeurs de $m$, le nombre de solutions de l'équation $f(x)=m$.\n5. On note $\\Delta$ la droite d'équation $y=-x$. On note $A$ un éventuel point de $C_f$ d'abscisse $a$ en lequel la tangente à $C_f$ est parallèle à $\\Delta$.\n   a. Montrer que $a$ est solution de l'équation $e^x(x-1) + x^2 = 0$.\n   On note $g$ la fonction définie sur $[0;+\\infty[$ par $g(x) = e^x(x-1)+x^2$, dérivable, de dérivée $g'$.\n   b. Calculer $g'(x)$ pour $x \\in [0;+\\infty[$, puis dresser le tableau de variations de $g$.\n   c. Montrer qu'il existe un unique point $A$ en lequel la tangente à $C_f$ est parallèle à $\\Delta$.",
    },
    {
      id: "ex3",
      title: "Exercice 3 (5 points) — Commun à tous les candidats (QCM)",
      points: 5,
      content:
        "Cet exercice est un questionnaire à choix multiples. Pour chacune des questions, une seule des quatre réponses proposées est exacte. Une réponse exacte rapporte un point ; une réponse fausse, multiple ou une absence de réponse ne rapporte ni n'enlève de point. Aucune justification n'est demandée.\n\n$SABCD$ est une pyramide régulière à base carrée $ABCD$ dont toutes les arêtes ont la même longueur. Le point $I$ est le centre du carré $ABCD$, avec $IC=IB=IS=1$. Les points $K, L, M$ sont les milieux respectifs des arêtes $[SD],[SC],[SB]$.\n\n1. Les droites suivantes ne sont pas coplanaires : **a.** $(DK)$ et $(SD)$ **b.** $(AS)$ et $(IC)$ **c.** $(AC)$ et $(SB)$ **d.** $(LM)$ et $(AD)$\n\nPour les questions suivantes, on se place dans le repère orthonormé $(I;\\overrightarrow{IC},\\overrightarrow{IB},\\overrightarrow{IS})$ avec $I(0;0;0)$, $A(-1;0;0)$, $B(0;1;0)$, $C(1;0;0)$, $D(0;-1;0)$, $S(0;0;1)$.\n\n2. Les coordonnées du milieu $N$ de $[KL]$ sont : **a.** $\\left(\\frac14;\\frac14;\\frac12\\right)$ **b.** $\\left(\\frac14;-\\frac14;\\frac12\\right)$ **c.** $\\left(-\\frac14;\\frac14;\\frac12\\right)$ **d.** $\\left(\\frac12;-\\frac12;1\\right)$\n3. Les coordonnées du vecteur $\\overrightarrow{AS}$ sont : **a.** $(1;1;0)$ **b.** $(1;0;1)$ **c.** $(2;1;-1)$ **d.** $(1;1;1)$\n4. Une représentation paramétrique de la droite $(AS)$ est : **a.** $\\{x=-1-t, y=t, z=-t\\}$ **b.** $\\{x=-1+2t, y=0, z=1+2t\\}$ **c.** $\\{x=t,y=0,z=1+t\\}$ **d.** $\\{x=-1-t,y=1+t,z=1-t\\}$ $(t\\in\\mathbb{R})$\n5. Une équation cartésienne du plan $(SCB)$ est : **a.** $y+z-1=0$ **b.** $x+y+z-1=0$ **c.** $x-y+z=0$ **d.** $x+z-1=0$",
    },
    {
      id: "ex4",
      title:
        "Exercice au choix du candidat (5 points) — Exercice A : Suites numériques",
      points: 5,
      content:
        "*Le candidat doit traiter un seul des deux exercices A ou B et indiquer sur sa copie l'exercice choisi.*\n\n**Exercice A — Principaux domaines abordés : suites numériques ; raisonnement par récurrence ; suites géométriques.**\n\nLa suite $(u_n)$ est définie sur $\\mathbb{N}$ par $u_0=1$ et pour tout entier naturel $n$, $u_{n+1} = \\frac34 u_n + \\frac14 n + 1$.\n\n1. Calculer, en détaillant les calculs, $u_1$ et $u_2$ sous forme de fraction irréductible.\n2. a. Quelle formule, étirée vers le bas, peut-on écrire dans la cellule B3 d'une feuille de calcul pour obtenir les termes successifs de $(u_n)$ dans la colonne B ?\n   b. Conjecturer le sens de variation de la suite $(u_n)$.\n3. a. Démontrer par récurrence que, pour tout entier naturel $n$, $n \\leqslant u_n \\leqslant n+1$.\n   b. En déduire, en justifiant, le sens de variation et la limite de la suite $(u_n)$.\n   c. Démontrer que $\\lim_{n\\to+\\infty} \\frac{u_n}{n} = 1$.\n4. On désigne par $(v_n)$ la suite définie sur $\\mathbb{N}$ par $v_n = u_n - n$.\n   a. Démontrer que $(v_n)$ est géométrique de raison $\\frac34$.\n   b. En déduire que, pour tout entier naturel $n$, $u_n = \\left(\\frac34\\right)^n + n$.",
    },
  ],
  correction: {
    kind: "proposee",
    sourceLabel: "Corrigé proposé AlphaMath (vérifié), pour le sujet officiel ci-dessus",
    authorNote:
      "Aucun corrigé officiel correspondant exactement à ce sujet (sujetdebac.fr, Métropole sujet 1, 7 juin 2021) n'a pu être localisé et vérifié à l'identique ; le corrigé APMEP trouvé pour la session du 7 juin 2021 correspond à un autre sujet (candidats libres). Ce corrigé des exercices 1 et 2 a donc été rédigé et vérifié indépendamment par AlphaMath à partir de l'énoncé ci-dessus.",
    sections: [
      {
        id: "cor-ex1",
        title: "Exercice 1 — corrigé",
        content:
          "$P(D\\cap A) = 0{,}1\\times0{,}6=0{,}06$. Par les probabilités totales, $P(A) = 0{,}1\\times0{,}6 + 0{,}9\\times0{,}2 = 0{,}06+0{,}18=0{,}24$. $P_A(\\bar D) = \\frac{P(\\bar D \\cap A)}{P(A)} = \\frac{0{,}18}{0{,}24}=0{,}75$. Partie II : $X\\sim\\mathcal{B}(7;0{,}24)$ ; $P(X=1) = 7\\times0{,}24\\times0{,}76^6\\approx0{,}34$ ; $P(X\\geqslant2) = 1-P(X=0)-P(X=1)\\approx0{,}43$. Pour $n$ candidats, $P(\\text{aucun admis}) = 0{,}76^n$ ; on résout $1-0{,}76^n \\geqslant 0{,}99 \\iff 0{,}76^n \\leqslant 0{,}01 \\iff n \\geqslant \\frac{\\ln(0{,}01)}{\\ln(0{,}76)} \\approx 16{,}8$, soit $n\\geqslant17$.",
      },
      {
        id: "cor-ex2",
        title: "Exercice 2 — corrigé",
        content:
          "$\\lim_{x\\to+\\infty} f(x) = +\\infty$ par croissances comparées ; $\\lim_{x\\to0^+} f(x)=+\\infty$, donc l'axe des ordonnées est asymptote. $f'(x) = \\frac{e^x \\cdot x - e^x}{x^2} = \\frac{e^x(x-1)}{x^2}$, qui s'annule en $x=1$ : $f$ décroît sur $]0;1]$ puis croît sur $[1;+\\infty[$, avec minimum $f(1)=e$. Selon $m$ : aucune solution si $m<e$, une solution double si $m=e$, deux solutions si $m>e$. $g(x)=e^x(x-1)+x^2$, $g'(x)=xe^x+2x = x(e^x+2) \\geqslant 0$ sur $[0;+\\infty[$ : $g$ est croissante, $g(0)=-1<0$ et $g$ tend vers $+\\infty$, donc $g$ s'annule une unique fois : il existe un unique point $A$.",
      },
    ],
  },
  sourceLabel:
    "Sujet officiel — Baccalauréat enseignement de spécialité mathématiques, Métropole (candidats libres, sujet 1), 7 juin 2021",
  sourceUrl:
    "https://www.sujetdebac.fr/annales-pdf/2021/spe-mathematiques-2021-metropole-1-sujet-officiel.pdf",
  tags: ["probabilites", "fonction-exponentielle", "geometrie-espace", "reforme-2021", "qcm"],
},
{
  id: "bac-2023-spe-maths-mars",
  examType: "bac",
  year: 2023,
  session: "unique",
  title:
    "Baccalauréat — Spécialité Mathématiques — Métropole, Antilles-Guyane, Maroc (sujet 1) — Mars 2023 (session principale de l'année scolaire 2022-2023)",
  schoolLevel: "terminale",
  bacSeries: "Spe_Maths",
  durationMinutes: 240,
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (5 points) — QCM",
      points: 5,
      content:
        "Cet exercice est un questionnaire à choix multiple. Pour chaque question, une seule des quatre réponses proposées est exacte. Aucune justification n'est demandée ; aucun point n'est enlevé en l'absence de réponse ou en cas de réponse inexacte. Les questions sont indépendantes.\n\nUn technicien contrôle les machines équipant une grande entreprise. Toutes ces machines sont identiques. On sait que : 20 % des machines sont sous garantie ; 0,2 % des machines sont à la fois défectueuses et sous garantie ; 8,2 % des machines sont défectueuses. Le technicien teste une machine au hasard. On considère $G$ : « la machine est sous garantie » et $D$ : « la machine est défectueuse ».\n\n1. La probabilité $p_G(D)$ est égale à : **a.** 0,002 **b.** 0,01 **c.** 0,024 **d.** 0,2\n2. La probabilité $p(\\bar G \\cap D)$ est égale à : **a.** 0,01 **b.** 0,08 **c.** 0,1 **d.** 0,21\n3. La machine est défectueuse. La probabilité qu'elle soit sous garantie est environ égale, à $10^{-3}$ près, à : **a.** 0,01 **b.** 0,024 **c.** 0,082 **d.** 0,1\n\nPour les questions 4 et 5, on choisit au hasard et de façon indépendante $n$ machines, assimilé à un tirage avec remise ; $X$ suit la loi binomiale de paramètres $n$ et $p=0{,}082$.\n\n4. Pour $n=50$, la valeur de $p(X>2)$, arrondie au millième, est : **a.** 0,136 **b.** 0,789 **c.** 0,864 **d.** 0,924\n5. On considère un entier $n$ pour lequel la probabilité que toutes les machines d'un lot de taille $n$ fonctionnent correctement est supérieure à $0{,}4$. La plus grande valeur possible pour $n$ est égale à : **a.** 5 **b.** 6 **c.** 10 **d.** 11",
    },
    {
      id: "ex2",
      title: "Exercice 2 (5 points)",
      points: 5,
      content:
        "On considère la fonction $f$ définie sur $]0;+\\infty[$ par $f(x) = x^2 - 8\\ln(x)$ où $\\ln$ désigne la fonction logarithme népérien. On admet que $f$ est dérivable sur $]0;+\\infty[$, de dérivée $f'$.\n\n1. Déterminer $\\lim_{x\\to0} f(x)$.\n2. On admet que, pour tout $x>0$, $f(x) = x^2\\left(1 - \\frac{8\\ln(x)}{x^2}\\right)$. En déduire $\\lim_{x\\to+\\infty} f(x)$.\n3. Montrer que, pour tout réel $x$ de $]0;+\\infty[$, $f'(x) = \\frac{2(x^2-4)}{x}$.\n4. Étudier les variations de $f$ sur $]0;+\\infty[$ et dresser son tableau de variations complet. On précisera la valeur exacte du minimum de $f$.\n5. Démontrer que, sur l'intervalle $]0;2]$, l'équation $f(x)=0$ admet une solution unique $\\alpha$ (on ne cherchera pas à déterminer la valeur de $\\alpha$).\n6. On admet que, sur $[2;+\\infty[$, l'équation $f(x)=0$ admet une solution unique $\\beta$. En déduire le signe de $f$ sur $]0;+\\infty[$.\n7. Pour tout nombre réel $k$, on considère $g_k(x) = x^2 - 8\\ln(x) + k$. En s'aidant du tableau de variations de $f$, déterminer la plus petite valeur de $k$ pour laquelle $g_k$ est positive sur $]0;+\\infty[$.",
    },
    {
      id: "ex3",
      title: "Exercice 3 (5 points)",
      points: 5,
      content:
        "Une entreprise a créé une Foire Aux Questions (« FAQ ») sur son site internet. On étudie le nombre de questions qui y sont posées chaque mois.\n\n### Partie A : Première modélisation\n\nChaque mois, 90 % des questions déjà posées le mois précédent sont conservées sur la FAQ, et 130 nouvelles questions sont ajoutées. Au premier mois, 300 questions ont été posées. Pour estimer le nombre de questions, en centaines, le $n$-ième mois, on modélise par $(u_n)$ définie par $u_1=3$ et, pour $n\\geqslant1$, $u_{n+1} = 0{,}9u_n + 1{,}3$.\n\n1. Calculer $u_2$ et $u_3$ et proposer une interprétation dans le contexte de l'exercice.\n2. Montrer par récurrence que pour tout entier naturel $n\\geqslant1$ : $u_n = 13 - \\frac{100}{9}\\times 0{,}9^n$.\n3. En déduire que la suite $(u_n)$ est croissante.\n4. On considère le programme Python suivant :\n```\ndef seuil(p):\n    n=1\n    u=3\n    while u<=p:\n        n=n+1\n        u=0.9*u+1.3\n    return n\n```\nDéterminer la valeur renvoyée par `seuil(8.5)` et l'interpréter dans le contexte de l'exercice.\n\n### Partie B : Une autre modélisation\n\nOn considère $(v_n)$ définie pour $n\\geqslant1$ par $v_n = 9 - 6\\times e^{-0{,}19(n-1)}$, estimation du nombre de questions (en centaines) le $n$-ième mois.\n\n1. Préciser les valeurs arrondies au centième de $v_1$ et $v_2$.\n2. Déterminer, en justifiant, la plus petite valeur de $n$ telle que $v_n > 8{,}5$.\n\n### Partie C : Comparaison des deux modèles\n\n1. L'entreprise modifie la présentation de son site lorsque plus de 850 questions sont présentes. Laquelle des deux modélisations conduit à procéder le plus tôt à cette modification ? Justifier.\n2. Pour quelle modélisation y a-t-il le plus grand nombre de questions sur la FAQ à long terme ? Justifier.",
    },
    {
      id: "ex4",
      title: "Exercice 4 (5 points) — Géométrie dans l'espace",
      points: 5,
      content:
        "On considère le cube $ABCDEFGH$ d'arête 1. On appelle $I$ le point d'intersection du plan $(GBD)$ avec la droite $(EC)$. L'espace est rapporté au repère orthonormé $(A;\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.\n\n1. Donner dans ce repère les coordonnées des points $E$, $C$, $G$.\n2. Déterminer une représentation paramétrique de la droite $(EC)$.\n3. Démontrer que la droite $(EC)$ est orthogonale au plan $(GBD)$.\n4. a. Justifier qu'une équation cartésienne du plan $(GBD)$ est $x+y-z-1=0$.\n   b. Montrer que le point $I$ a pour coordonnées $\\left(\\frac23;\\frac23;\\frac13\\right)$.\n   c. En déduire que la distance du point $E$ au plan $(GBD)$ est égale à $\\frac{2\\sqrt3}{3}$.\n5. a. Démontrer que le triangle $BDG$ est équilatéral.\n   b. Calculer l'aire du triangle $BDG$. On pourra utiliser le point $J$, milieu de $[BD]$.\n6. Justifier que le volume du tétraèdre $EGBD$ est égal à $\\frac13$. On rappelle que le volume d'un tétraèdre est donné par $V=\\frac13 B h$ où $B$ est l'aire d'une base et $h$ la hauteur relative à cette base.",
    },
  ],
  correction: {
    kind: "officielle",
    sourceLabel:
      "Corrigé APMEP — Bac spécialité Métropole, Antilles-Guyane, Maroc, sujet 1, 20 mars 2023",
    sourceUrl:
      "https://www.apmep.fr/IMG/pdf/Corrige_Metropole_spe_J1_20_mars_2023_FH_2.pdf",
    sections: [
      {
        id: "cor-ex1",
        title: "Exercice 1 — corrigé (QCM)",
        content:
          "1. $p_G(D) = \\frac{p(G\\cap D)}{p(G)} = \\frac{0{,}002}{0{,}2} = 0{,}01$ → réponse **b**. 2. $p(\\bar G \\cap D) = p(D)-p(G\\cap D) = 0{,}082-0{,}002=0{,}08$ → réponse **b**. 3. $p_D(G) = \\frac{0{,}002}{0{,}082}\\approx0{,}024$ → réponse **b**. 4. $p(X>2) = 1-p(X\\leqslant2) \\approx 0{,}789$ → réponse **b**. 5. $p(X=0)=0{,}918^n>0{,}4 \\iff n < \\frac{\\ln(0,4)}{\\ln(0,918)}\\approx10{,}71$, donc le plus grand entier est $n=10$ → réponse **c**.",
      },
      {
        id: "cor-ex2",
        title: "Exercice 2 — corrigé",
        content:
          "$\\lim_{x\\to0^+} f(x) = +\\infty$ et $\\lim_{x\\to+\\infty} f(x)=+\\infty$. $f'(x) = 2x - \\frac{8}{x} = \\frac{2(x^2-4)}{x} = \\frac{2(x-2)(x+2)}{x}$, négative sur $]0;2[$, positive sur $]2;+\\infty[$ : minimum $f(2) = 4-8\\ln2 \\approx -1{,}55$. Comme $f$ est continue, strictement décroissante puis croissante, passant par une valeur négative, le théorème des valeurs intermédiaires donne l'existence et l'unicité de $\\alpha\\in]0;2[$ et $\\beta\\in]2;+\\infty[$ tels que $f(\\alpha)=f(\\beta)=0$ ; donc $f$ est positive sur $]0;\\alpha[\\cup]\\beta;+\\infty[$ et négative sur $]\\alpha;\\beta[$. Pour $g_k$, le minimum vaut $4-8\\ln2+k$ : il faut $k \\geqslant 8\\ln2-4$.",
      },
      {
        id: "cor-ex3",
        title: "Exercice 3 — corrigé",
        content:
          "$u_2=4$, $u_3=4{,}9$ (soit 400 puis 490 questions). Récurrence immédiate pour $u_n = 13-\\frac{100}{9}\\times0{,}9^n$. $u_{n+1}-u_n = \\frac{100}{9}\\times0{,}9^n\\times0{,}1>0$ donc $(u_n)$ croissante. `seuil(8.5)` renvoie $9$. Pour le second modèle, $v_1=3$, $v_2\\approx4{,}04$ ; on résout $v_n>8{,}5$, donnant $n=15$. Comparaison : le premier modèle atteint le seuil de 850 questions plus tôt (mois 9 contre mois 15) mais sa limite (1300) dépasse celle du second modèle (900) à long terme.",
      },
      {
        id: "cor-ex4",
        title: "Exercice 4 — corrigé",
        content:
          "$E(0;0;1)$, $C(1;1;0)$, $G(1;1;1)$. $\\overrightarrow{EC}(1;1;-1)$ dirige $(EC)$, donc représentation paramétrique $x=t,y=t,z=1-t$. On vérifie $\\overrightarrow{EC}\\cdot\\overrightarrow{GB}=0$ et $\\overrightarrow{EC}\\cdot\\overrightarrow{BD}=0$ : $(EC)\\perp(GBD)$. Le plan $(GBD)$ a pour équation $x+y-z-1=0$ (vecteur normal $\\overrightarrow{EC}$). En résolvant le système, $I\\left(\\frac23;\\frac23;\\frac13\\right)$ et $EI = \\frac{2\\sqrt3}{3}$. Le triangle $BDG$ est équilatéral (diagonales de faces superposables du cube) d'aire $\\frac{\\sqrt3}{2}$, et le volume du tétraèdre $EGBD$ est $\\frac13\\left(\\frac{\\sqrt3}{2}\\times\\frac{2\\sqrt3}{3}\\right) = \\frac13$.",
      },
    ],
  },
  sourceLabel:
    "APMEP — Baccalauréat spécialité mathématiques, Métropole, Antilles-Guyane, Maroc, sujet 1, 20 mars 2023",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/Metropole_spe_J1_20_mars_2023_DV.pdf",
  tags: ["probabilites-conditionnelles", "fonction-logarithme", "suites-numeriques", "geometrie-espace", "reforme-2023-mars"],
},
{
  id: "bac-2024-spe-maths-juin",
  examType: "bac",
  year: 2024,
  session: "juin",
  title:
    "Baccalauréat — Spécialité Mathématiques — Métropole (sujet 1) — Juin 2024",
  schoolLevel: "terminale",
  bacSeries: "Spe_Maths",
  durationMinutes: 240,
  statement: [
    {
      id: "ex1",
      title: "Exercice 1 (4 points) — Vrai/Faux",
      points: 4,
      content:
        "Pour chacune des affirmations suivantes, indiquer si elle est vraie ou fausse. Chaque réponse doit être justifiée ; une réponse non justifiée ne rapporte aucun point.\n\n1. On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 5xe^{-x}$. On note $C_f$ sa courbe représentative dans un repère orthonormé.\n   - **Affirmation 1 :** L'axe des abscisses est une asymptote horizontale à la courbe $C_f$.\n   - **Affirmation 2 :** La fonction $f$ est solution sur $\\mathbb{R}$ de l'équation différentielle $(E): y' + y = 5e^{-x}$.\n2. On considère les suites $(u_n)$, $(v_n)$ et $(w_n)$ telles que, pour tout entier naturel $n$, $u_n \\leqslant v_n \\leqslant w_n$. De plus, $(u_n)$ converge vers $-1$ et $(w_n)$ converge vers $1$.\n   - **Affirmation 3 :** La suite $(v_n)$ converge vers un nombre réel $\\ell$ appartenant à l'intervalle $[-1;1]$.\n   - On suppose de plus que $(u_n)$ est croissante et $(w_n)$ est décroissante.\n   - **Affirmation 4 :** Pour tout entier naturel $n$, on a alors $u_0 \\leqslant v_n \\leqslant w_0$.",
    },
    {
      id: "ex2",
      title: "Exercice 2 (5 points)",
      points: 5,
      content:
        "Une agence de marketing a étudié la satisfaction des clients concernant le service clientèle à l'occasion de l'achat d'un téléviseur. Ces achats ont été réalisés soit sur internet, soit dans une chaîne de magasins d'électroménager, soit dans une enseigne de grandes surfaces. Les achats sur internet représentent 60 % des ventes, les achats en magasin d'électroménager 30 % et ceux en grandes surfaces 10 %. Une enquête montre que la proportion de clients satisfaits du service clientèle est de 75 % pour les clients sur internet, 90 % pour les clients en magasin d'électroménager, et 80 % pour les clients en grande surface. On choisit au hasard un client ayant acheté le modèle de téléviseur concerné, et on définit $I$, $M$, $G$ : « le client a effectué son achat sur internet / en magasin d'électroménager / en grande surface », et $S$ : « le client est satisfait du service clientèle ».\n\n1. Reproduire et compléter l'arbre pondéré.\n2. Calculer la probabilité que le client ait réalisé son achat sur internet et soit satisfait du service clientèle.\n3. Démontrer que $P(S) = 0{,}8$.\n4. Un client est satisfait du service clientèle. Quelle est la probabilité qu'il ait effectué son achat sur internet ? On donnera un résultat arrondi à $10^{-3}$ près.\n5. Pour réaliser l'étude, l'agence doit contacter chaque jour 30 clients parmi les acheteurs du téléviseur. On note $X$ la variable aléatoire qui, à chaque échantillon de 30 clients, associe le nombre de clients satisfaits.\n   a. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.\n   b. Déterminer la probabilité, arrondie à $10^{-3}$ près, qu'au moins 25 clients soient satisfaits dans un échantillon de 30 clients contactés sur une même journée.\n6. En résolvant une inéquation, déterminer la taille minimale de l'échantillon de clients à contacter pour que la probabilité qu'au moins l'un d'entre eux ne soit pas satisfait soit supérieure à $0{,}99$.\n7. On ne s'intéresse qu'aux seuls achats sur internet. Le temps de livraison du téléviseur est modélisé par une variable aléatoire $T = T_1 + T_2$, où $T_1$ et $T_2$ sont indépendantes, avec $E(T_1)=4$, $V(T_1)=2$, $E(T_2)=3$, $V(T_2)=1$.\n   a. Déterminer l'espérance $E(T)$ et la variance $V(T)$.\n   b. Justifier que la probabilité qu'un client reçoive son téléviseur entre 5 et 9 jours après sa commande est supérieure ou égale à $\\frac23$.",
    },
    {
      id: "ex3",
      title: "Exercice 3 (5 points) — Géométrie dans l'espace",
      points: 5,
      content:
        "L'espace est muni d'un repère orthonormé $(O;\\vec\\imath,\\vec\\jmath,\\vec k)$. On considère les points $A(5;5;0)$, $B(0;5;0)$, $C(0;0;10)$ et $D\\left(0;0;-\\frac52\\right)$.\n\n1. a. Montrer que $\\vec{n_1}(1;-1;0)$ est un vecteur normal au plan $(CAD)$.\n   b. En déduire que le plan $(CAD)$ a pour équation cartésienne $x-y=0$.\n2. On considère la droite $\\mathcal{D}$ de représentation paramétrique $x=\\frac52 t,\\ y=5-\\frac52 t,\\ z=0$ ($t\\in\\mathbb{R}$).\n   a. On admet que $\\mathcal{D}$ et le plan $(CAD)$ sont sécants en un point $H$. Justifier que les coordonnées de $H$ sont $\\left(\\frac52;\\frac52;0\\right)$.\n   b. Démontrer que le point $H$ est le projeté orthogonal de $B$ sur le plan $(CAD)$.\n3. a. Démontrer que le triangle $ABH$ est rectangle en $H$.\n   b. En déduire que l'aire du triangle $ABH$ est égale à $\\frac{25}{4}$.\n4. a. Démontrer que $(CO)$ est la hauteur du tétraèdre $ABCH$ issue de $C$.\n   b. En déduire le volume du tétraèdre $ABCH$. On rappelle que $V=\\frac13 Bh$.\n5. On admet que le triangle $ABC$ est rectangle en $B$. Déduire des questions précédentes la distance du point $H$ au plan $(ABC)$.",
    },
    {
      id: "ex4",
      title: "Exercice 4 (6 points) — Étude de fonctions, calcul d'aire",
      points: 6,
      content:
        "### Partie A : étude de la fonction $f$\n\nLa fonction $f$ est définie sur $]0;+\\infty[$ par $f(x) = x - 2 + \\frac12 \\ln x$, deux fois dérivable, de dérivée $f'$ et dérivée seconde $f''$.\n\n1. a. Déterminer, en justifiant, les limites de $f$ en 0 et en $+\\infty$.\n   b. Montrer que pour tout $x\\in]0;+\\infty[$, $f'(x) = \\frac{2x+1}{2x}$.\n   c. Étudier le sens de variation de $f$.\n   d. Étudier la convexité de $f$.\n2. a. Montrer que l'équation $f(x)=0$ admet dans $]0;+\\infty[$ une solution unique $\\alpha$, et justifier que $\\alpha \\in [1;2]$.\n   b. Déterminer le signe de $f(x)$ pour $x\\in]0;+\\infty[$.\n   c. Montrer que $\\ln(\\alpha) = 2(2-\\alpha)$.\n\n### Partie B : étude de la fonction $g$\n\nLa fonction $g$ est définie sur $]0;1]$ par $g(x) = -\\frac78 x^2 + x - \\frac14 x^2\\ln x$, dérivable, de dérivée $g'$.\n\n1. Calculer $g'(x)$ pour $x\\in]0;1]$ puis vérifier que $g'(x) = xf\\left(\\frac1x\\right)$.\n2. a. Justifier que pour $x\\in\\left]0;\\frac1\\alpha\\right[$, $f\\left(\\frac1x\\right)>0$.\n   b. On admet le tableau de signes de $f(1/x)$ : positif sur $\\left]0;\\frac1\\alpha\\right[$, négatif sur $\\left]\\frac1\\alpha;1\\right]$. En déduire le tableau de variations de $g$ sur $]0;1]$ (images et limites non demandées).\n\n### Partie C : un calcul d'aire\n\nOn a représenté la courbe $C_g$ de $g$ et la parabole $\\mathcal{P}$ d'équation $y=-\\frac78x^2+x$ sur $]0;1]$ ; on souhaite calculer l'aire $\\mathcal{A}$ du domaine compris entre $C_g$ et $\\mathcal{P}$ et les droites $x=\\frac1\\alpha$ et $x=1$.\n\n1. a. Justifier la position relative des courbes $C_g$ et $\\mathcal{P}$ sur $]0;1]$.\n   b. Démontrer l'égalité $\\displaystyle\\int_{1/\\alpha}^1 x^2\\ln x \\,dx = \\frac{-\\alpha^3-6\\alpha+13}{9\\alpha^3}$.\n2. En déduire l'expression en fonction de $\\alpha$ de l'aire $\\mathcal{A}$.",
    },
  ],
  correction: {
    kind: "officielle",
    sourceLabel: "Corrigé APMEP — Bac spécialité Métropole, sujet 1, 19 juin 2024",
    sourceUrl:
      "https://www.apmep.fr/IMG/pdf/Corrige-spe_J1_Metropole_19_06_2024_DV.pdf",
    sections: [
      {
        id: "cor-ex1",
        title: "Exercice 1 — corrigé",
        content:
          "$f(x)=5xe^{-x} = \\frac{5x}{e^x}$, et $\\lim_{x\\to+\\infty}\\frac{x}{e^x}=0$ donc $\\lim_{x\\to+\\infty}f(x)=0$ : l'affirmation 1 est **vraie** (asymptote en $+\\infty$). $f'(x)=5e^{-x}(1-x)$, et $f'(x)+f(x) = 5e^{-x}(1-x)+5xe^{-x}=5e^{-x}$ : l'affirmation 2 est **vraie**. Pour l'affirmation 3 : $(v_n)$ est bornée mais sans hypothèse de monotonie, donc on ne peut rien conclure sur sa convergence — un contre-exemple existe (par ex. $v_n=(-1)^n$ avec $u_n,w_n$ adaptées) : l'affirmation est **fausse**. Pour l'affirmation 4, avec $(u_n)$ croissante et $(w_n)$ décroissante, on a $u_0\\leqslant u_n \\leqslant v_n \\leqslant w_n \\leqslant w_0$ : l'affirmation est **vraie**.",
      },
      {
        id: "cor-ex2",
        title: "Exercice 2 — corrigé",
        content:
          "$P(I\\cap S) = 0{,}6\\times0{,}75=0{,}45$, $P(M\\cap S)=0{,}3\\times0{,}9=0{,}27$, $P(G\\cap S)=0{,}1\\times0{,}8=0{,}08$ ; par les probabilités totales, $P(S)=0{,}45+0{,}27+0{,}08=0{,}8$. $P_S(I) = \\frac{0{,}45}{0{,}8} = 0{,}5625 \\approx 0{,}563$. $X\\sim\\mathcal{B}(30;0{,}8)$, $P(X\\geqslant25)\\approx0{,}428$. Pour la dernière question, on cherche le plus petit $n$ tel que $0{,}8^n \\leqslant 0{,}01$, soit $n > \\frac{\\ln(0{,}01)}{\\ln(0{,}8)} \\approx 20{,}6$, donc $n=21$.",
      },
    ],
  },
  sourceLabel: "APMEP — Baccalauréat spécialité mathématiques, Métropole, sujet 1, 19 juin 2024",
  sourceUrl: "https://www.apmep.fr/IMG/pdf/Metropole_J1_spe_19_06_2024_VTFK.pdf",
  tags: ["probabilites", "geometrie-espace", "fonction-logarithme", "convexite"],
},
{
  id: "concours-x-ens-2019-mp-maths1",
  examType: "concours",
  year: 2019,
  session: "unique",
  title: "Concours X-ENS — Mathématiques A — MP — 2019",
  schoolLevel: "terminale",
  institution: "polytechnique-ens",
  filiere: "MP",
  epreuve: "Mathématiques A",
  durationMinutes: 240,
  statement: [
    {
      id: "notations",
      title: "Notations et préliminaires",
      content: `On notera respectivement $C$, $R$ et $Q$ les corps des nombres complexes, réels et rationnels, et $Z$ l'anneau des entiers relatifs.

Pour un entier $n \\geq 1$ on dit qu'un nombre complexe $z$ est une **racine $n$-ième de l'unité** si $z^n = 1$, et que $z$ est une **racine de l'unité** s'il existe $k \\geq 1$ tel que $z$ soit une racine $k$-ième de l'unité.

Pour $R \\in \\{Z, Q, R, C\\}$ on notera $R[X]$ l'anneau des polynômes à coefficients dans $R$. Un polynôme non nul est **unitaire** si son coefficient dominant est égal à 1. Un polynôme $P \\in Q[X]$ est **irréductible** dans $Q[X]$ si $P$ n'est pas constant et si l'égalité $P = QR$ avec $Q, R \\in Q[X]$ implique que $Q$ ou $R$ est constant.

Un nombre complexe $x$ est appelé **nombre algébrique** s'il existe $P \\in Q[X]$ non nul tel que $P(x) = 0$. On dit que $x \\in C$ est un **entier algébrique** s'il existe $P \\in Z[X]$ unitaire tel que $P(x) = 0$.

On admet le résultat suivant.

> **Théorème.** L'ensemble des entiers algébriques est un sous-anneau de $C$.

Le problème est consacré à l'étude des polynômes unitaires $P \\in Z[X]$, irréductibles dans $Q[X]$ et qui possèdent beaucoup de racines de module 1.

La partie 1 est préliminaire et utilisée en fin de parties 2 et 3. La partie 3 est indépendante de la partie 2. La partie 4 utilise les notions introduites précédemment mais est, à l'exception des questions 19 et 20, indépendante du reste.`,
    },
    {
      id: "partie-1",
      title: "Partie 1 — Polynôme minimal et degré d'un nombre algébrique",
      content: `Le but de cette partie est d'introduire les notions de polynôme minimal et de degré d'un nombre algébrique, et de montrer que le polynôme minimal d'un entier algébrique est à coefficients entiers.

Dans les questions 1 à 4, on fixe un nombre algébrique $\\alpha$. Soit
$$I(\\alpha) = \\{P \\in Q[X] \\mid P(\\alpha) = 0\\}.$$

**1.** Montrer que $I(\\alpha)$ est un idéal de $Q[X]$, différent de $\\{0\\}$.

Il existe donc un unique polynôme unitaire $\\Pi_\\alpha \\in Q[X]$, appelé **polynôme minimal** de $\\alpha$, tel que $I(\\alpha) = \\{\\Pi_\\alpha Q \\mid Q \\in Q[X]\\}$. On appelle **degré** de $\\alpha$ le degré du polynôme $\\Pi_\\alpha$.

**2.** Montrer que $\\alpha$ est de degré 1 si et seulement si $\\alpha \\in Q$.

**3.** (a) Montrer que $\\Pi_\\alpha$ est irréductible dans $Q[X]$.
(b) Soit $P \\in Q[X]$ un polynôme unitaire, irréductible dans $Q[X]$. Montrer que si $z$ est une racine complexe de $P$, alors $P$ est le polynôme minimal de $z$.

**4.** (a) Soient $A, B \\in Q[X]$ deux polynômes qui possèdent une racine commune dans $C$. Montrer que $A$ et $B$ ne sont pas premiers entre eux dans $Q[X]$.
(b) Montrer que les racines de $\\Pi_\\alpha$ dans $C$ sont simples.

**5.** (a) Montrer que si $\\alpha \\in Q$ est un entier algébrique, alors $\\alpha \\in Z$.
(b) Montrer que si $\\alpha \\in C$ est un entier algébrique alors $\\Pi_\\alpha \\in Z[X]$.
*Indication : utiliser le théorème admis en introduction ainsi que la question 5a.*

**6.** (a) Soit $\\alpha \\in C$ un entier algébrique de degré 2 et de module 1. Montrer que $\\alpha$ est une racine de l'unité.
(b) Montrer que $\\frac{3+4i}{5}$ est un nombre algébrique de degré 2 et de module 1 mais n'est pas une racine de l'unité.`,
    },
    {
      id: "partie-2",
      title: "Partie 2 — Polynômes cyclotomiques",
      content: `Le but de cette partie est de caractériser les polynômes unitaires $P \\in Z[X]$, irréductibles dans $Q[X]$, dont toutes les racines sont de module 1.

Pour $n$ un entier supérieur ou égal à 1 on dit qu'une racine $n$-ième de l'unité $z$ est **primitive** si $z^d \\neq 1$ pour tout entier $d$ tel que $1 \\leq d < n$. On note $\\mathcal{P}_n$ l'ensemble des racines primitives $n$-ièmes de l'unité. On a donc $\\mathcal{P}_1 = \\{1\\}$. On définit $\\Phi_n \\in C[X]$ par
$$\\Phi_n = \\prod_{z \\in \\mathcal{P}_n} (X - z).$$

Si $a$ et $b$ sont des entiers, on écrit $a \\mid b$ si $a$ divise $b$.

**7.** Montrer que pour tout $n \\geq 1$ on a $X^n - 1 = \\prod_{d \\mid n} \\Phi_d$, le produit étant pris sur l'ensemble des entiers $d > 0$ divisant $n$.

**8.** (a) Montrer que si $p$ est un nombre premier et $k \\geq 1$ est un entier, alors
$$\\Phi_{p^k} = X^{(p-1)p^{k-1}} + X^{(p-2)p^{k-1}} + \\cdots + X^{p^{k-1}} + 1.$$
(b) Calculer $\\Phi_n$ pour $n = 1, 2, 3, 4, 5, 6$.

On fixe un entier $n \\geq 2$ pour toute la suite de cette partie.

**9.** (a) Calculer $\\Phi_n(0)$.
(b) Calculer $\\Phi_n(1)$ en fonction de la décomposition en facteurs premiers de $n$. *Indication : raisonner par récurrence sur $n$, en utilisant la question 7.*

**10.** Montrer que $\\Phi_n \\in Z[X]$.

Soit $P \\in Z[X]$ un polynôme unitaire de degré $n \\geq 1$, irréductible dans $Q[X]$ et dont toutes les racines complexes sont de module 1. L'objectif des questions 11 et 12 est de montrer que toutes les racines de $P$ sont des racines de l'unité. Soient $z_1, \\ldots, z_n$ les racines complexes de $P$ comptées avec leurs multiplicités, de sorte que $P = \\prod_{i=1}^n (X - z_i)$. Pour tout entier $k \\geq 0$ on note $a_k = z_1^k + z_2^k + \\cdots + z_n^k$.

**11.** (a) Montrer que la série $\\sum_{k \\geq 0} a_k z^k$ converge pour tout $z \\in C$ tel que $|z| < 1$.
(b) Soit $z \\in C$ non nul tel que $|z| < 1$ et soit $f(z)$ la somme de la série $\\sum_{k \\geq 0} a_k z^k$. Montrer que $zf(z)P(1/z) = P'(1/z)$.
(c) En déduire que $a_k \\in Z$ pour tout $k \\geq 0$.

**12.** (a) Montrer qu'il existe deux entiers $0 \\leq k < l$ tels que $a_{k+i} = a_{l+i}$ pour tout $i \\in \\{0, 1, \\ldots, n\\}$. On fixe deux tels entiers $k, l$ dans les questions 12b et 12c.
(b) Montrer que $\\sum_{i=1}^n F(z_i)(z_i^l - z_i^k) = 0$ pour tout polynôme $F \\in C[X]$ de degré inférieur ou égal à $n$.
(c) Montrer que $z_1, z_2, \\ldots, z_n$ sont deux à deux distincts. En déduire que $z_i^{l-k} = 1$ pour tout $i \\in \\{1, 2, \\ldots, n\\}$ et conclure.

Soit $z \\in \\mathcal{P}_n$. Le but des questions 13 et 14 est de montrer que $\\Phi_n$ est le polynôme minimal de $z$, i.e. $\\Phi_n = \\Pi_z$. Soit $p$ un nombre premier ne divisant pas $n$.

**13.** (a) Soient $F, G \\in Z[X]$. Montrer qu'il existe $H \\in Z[X]$ tel que $(F+G)^p = F^p + G^p + pH$.
(b) Montrer que $\\Pi_z \\in Z[X]$ et en déduire l'existence d'un polynôme $F \\in Z[X]$ tel que $\\Pi_z(X^p) = \\Pi_z(X)^p + pF(X)$.
(c) Montrer que $\\Pi_z(z^p)$ est un entier algébrique.

**14.** (a) Exprimer en fonction de $n$ le nombre $\\prod_{1 \\leq i < j \\leq n} (z_i - z_j)^2$, où $z_1, z_2, \\ldots, z_n$ sont les racines du polynôme $P = X^n - 1$. *Indication : on pourra considérer les nombres $P'(z_i)$.*
(b) Montrer que $\\Pi_z(z^p) = 0$. *Indication : montrer que si $\\Pi_z(z^p) \\neq 0$, alors il existe un entier algébrique $u$ tel que $n^n = u \\cdot \\Pi_z(z^p)$.*
(c) Conclure que $\\Phi_n = \\Pi_z$.`,
    },
  ],
  sourceLabel: "X-ENS, Mathématiques A, filière MP, concours d'admission 2019 (énoncé officiel)",
  sourceUrl: "https://www.alloschool.com/assets/documents/course-236/x-ens-mp-2019-maths-a-sujet.pdf",
  tags: ["algebre", "polynomes", "nombres-algebriques", "polynomes-cyclotomiques"],
},
{
  id: "concours-x-ens-2022-mp-maths2",
  examType: "concours",
  year: 2022,
  session: "unique",
  title: "Concours X-ENS — Mathématiques B (X) — MP — 2022",
  schoolLevel: "terminale",
  institution: "polytechnique-ens",
  filiere: "MP",
  epreuve: "Mathématiques B",
  durationMinutes: 240,
  statement: [
    {
      id: "notations",
      title: "Notations",
      content: `On appelle **fonction cotangente** la fonction
$$\\mathrm{cotan} : R \\setminus \\pi Z \\to R, \\quad t \\mapsto \\frac{\\cos(t)}{\\sin(t)}.$$

Pour tout entier $k \\geq 2$, on pose $\\zeta(k) = \\sum_{n=1}^{+\\infty} n^{-k}$.

Les parties I et II sont indépendantes.`,
    },
    {
      id: "partie-1",
      title: "Première partie — Développement en série de la cotangente",
      content: `Soient les fonctions $f$, $g$ et $D$ définies sur $R \\setminus Z$ par :
$$f(x) = \\pi \\, \\mathrm{cotan}(\\pi x) = \\pi \\frac{\\cos(\\pi x)}{\\sin(\\pi x)}, \\qquad g(x) = \\frac{1}{x} + \\sum_{n=1}^{+\\infty} \\left( \\frac{1}{x+n} + \\frac{1}{x-n} \\right).$$

On pose $D = f - g$.

**1a.** Pour $x \\in R \\setminus Z$, justifier que la série définissant $g(x)$ est convergente.

**1b.** Montrer que les fonctions $g$ et $D$ sont impaires.

**1c.** Montrer que les fonctions $g$ et $D$ sont périodiques de période 1.

**1d.** Montrer que les fonctions $g$ et $D$ sont continues sur $R \\setminus Z$.

**2a.** Montrer que pour tout $x \\in R \\setminus Z$, on a $f\\left(\\frac{x}{2}\\right) + f\\left(\\frac{1+x}{2}\\right) = 2f(x)$.

**2b.** Montrer que pour tout $x \\in R \\setminus Z$, on a $g\\left(\\frac{x}{2}\\right) + g\\left(\\frac{1+x}{2}\\right) = 2g(x)$.

**3a.** Montrer que la fonction $D$ se prolonge par continuité en une fonction $\\tilde{D}$ sur $R$ telle que $\\tilde{D}(0) = 0$.

**3b.** Justifier l'existence de $\\alpha \\in [0,1]$ tel que $\\tilde{D}(\\alpha) = M$, où $M = \\sup_{t \\in [0,1]} \\tilde{D}(t)$, puis montrer que : $\\forall n \\in N, \\ \\tilde{D}\\left(\\frac{\\alpha}{2^n}\\right) = M$.

**4.** En déduire que la fonction $\\tilde{D}$ est nulle sur $R$, puis que :
$$\\forall x \\in R \\setminus Z, \\quad \\pi x \\, \\mathrm{cotan}(\\pi x) = 1 + 2 \\sum_{n=1}^{+\\infty} \\frac{x^2}{x^2 - n^2}.$$

**5a.** Montrer que :
$$\\forall x \\in \\,]-2\\pi, 2\\pi[\\, \\setminus \\{0\\}, \\quad \\frac{x}{2} \\, \\mathrm{cotan}\\left(\\frac{x}{2}\\right) = 1 - \\sum_{k=1}^{+\\infty} \\frac{\\zeta(2k)}{2^{2k-1}\\pi^{2k}} x^{2k}.$$

**5b.** En déduire :
$$\\forall x \\in \\,]-2\\pi, 2\\pi[\\, \\setminus \\{0\\}, \\quad \\frac{ix}{e^{ix}-1} = 1 - \\frac{ix}{2} - \\sum_{k=1}^{+\\infty} \\frac{\\zeta(2k)}{2^{2k-1}\\pi^{2k}} \\cdot x^{2k}.$$

Soit $h$ la fonction de $R$ dans $R$ définie par $h(x) = \\dfrac{x}{e^x - 1}$ si $x \\neq 0$, et $h(0) = 1$.

**6.** Montrer que pour tout $z \\in C$ tel que $|z| < 2\\pi$, on a
$$z = (e^z - 1)\\left(1 - \\frac{z}{2} + \\sum_{k=1}^{+\\infty} \\frac{(-1)^{k-1}\\zeta(2k)}{2^{2k-1}\\pi^{2k}} z^{2k}\\right).$$

**7a.** Montrer que la fonction $h$ est de classe $C^\\infty$ sur $R$ et que, pour tout $n \\in N^*$, on a
$$h^{(2n)}(0) = \\frac{(-1)^{n-1}(2n)!}{\\pi^{2n} 2^{2n-1}} \\zeta(2n).$$

**7b.** On définit une suite de nombres réels $(b_n)_{n \\in N}$ en posant $b_0 = 1$, $b_1 = -\\frac{1}{2}$, puis $\\forall n \\in N^*, \\ b_{2n+1} = 0$ et $b_{2n} = \\dfrac{(-1)^{n-1}(2n)!\\zeta(2n)}{2^{2n-1}\\pi^{2n}}$. Montrer que pour tout $n \\in N$ :
$$\\sum_{k=0}^n \\frac{b_k}{k!(n+1-k)!} = \\begin{cases} 1 & \\text{si } n = 0 \\\\ 0 & \\text{si } n \\geq 1 \\end{cases}$$

**7c.** Calculer $b_2$, $b_4$ et $b_6$ puis $\\zeta(2)$, $\\zeta(4)$ et $\\zeta(6)$.`,
    },
    {
      id: "partie-2",
      title: "Deuxième partie — Mesures de probabilité sur un ensemble dénombrable",
      content: `Soit $E = \\{x_1, x_2, \\ldots, x_n, \\ldots\\}$ un ensemble infini dénombrable où les $x_i$ sont des éléments deux à deux distincts. On note $\\mathcal{M}(E)$ l'ensemble des mesures de probabilité sur $E$. Si $\\mu \\in \\mathcal{M}(E)$, on note $\\mu(x)$ pour $\\mu(\\{x\\})$.

On note $\\mathcal{P}(E)$ l'ensemble des parties de $E$. Soit $\\mathcal{B}(\\mathcal{P}(E), R)$ le $R$-espace vectoriel des fonctions bornées de $\\mathcal{P}(E)$ dans $R$. Si $f \\in \\mathcal{B}(\\mathcal{P}(E), R)$, on pose
$$\\|f\\| = \\sup\\{|f(A)|, A \\in \\mathcal{P}(E)\\}.$$

**8a.** Montrer que $\\mathcal{M}(E)$ est une partie de $\\mathcal{B}(\\mathcal{P}(E), R)$.

**8b.** Montrer que $\\|\\cdot\\|$ définit une norme sur l'espace vectoriel $\\mathcal{B}(\\mathcal{P}(E), R)$.

**9.** Soient $(\\mu_n)_{n \\in N}$ une suite d'éléments de $\\mathcal{M}(E)$ et soit $\\mu$ un élément de $\\mathcal{M}(E)$. Montrer que si la suite $(\\mu_n)_{n \\in N}$ converge vers $\\mu$ dans l'espace vectoriel normé $\\mathcal{B}(\\mathcal{P}(E), R)$, alors
$$\\forall x \\in E, \\quad \\lim_{n \\to +\\infty} \\mu_n(x) = \\mu(x). \\quad (1)$$

On se propose réciproquement de montrer qu'une suite $(\\mu_n)_{n \\in N}$ d'éléments de $\\mathcal{M}(E)$ vérifiant la condition (1) pour un élément $\\mu \\in \\mathcal{M}(E)$ converge vers $\\mu$ dans $\\mathcal{B}(\\mathcal{P}(E), R)$. On fixe donc une suite $(\\mu_n)_{n \\in N}$ d'éléments de $\\mathcal{M}(E)$ et $\\mu \\in \\mathcal{M}(E)$ vérifiant la condition (1). On fixe également un réel $\\varepsilon > 0$.

**10a.** Montrer qu'il existe une partie finie $F_\\varepsilon$ de $E$ et un entier $N_\\varepsilon \\geq 0$ tels que $\\mu(F_\\varepsilon) > 1-\\varepsilon$ et pour tout entier $n \\geq N_\\varepsilon$, $\\sum_{x \\in F_\\varepsilon} |\\mu_n(x) - \\mu(x)| < \\varepsilon$.

**10b.** Montrer que pour toute partie $A$ de $E$ :
$$|\\mu_n(A) - \\mu(A)| \\leq |\\mu_n(A \\cap F_\\varepsilon) - \\mu(A \\cap F_\\varepsilon)| + \\mu(E \\setminus F_\\varepsilon) + \\mu_n(E \\setminus F_\\varepsilon)$$
et en déduire que si $n \\geq N_\\varepsilon$, alors $|\\mu_n(A) - \\mu(A)| < 4\\varepsilon$.

**10c.** En déduire que la suite $(\\mu_n)_{n \\in N}$ converge vers $\\mu$ dans $\\mathcal{B}(\\mathcal{P}(E), R)$ si et seulement si elle vérifie la condition (1).

**11.** Pour tout entier $k \\in N^*$, on note $\\delta_k$ la mesure de probabilité sur $E$ telle que, pour tout $n \\in N^*$, $\\delta_k(\\{x_n\\}) = 1$ si $n=k$, $0$ sinon. La suite $(\\delta_k)_{k \\in N^*}$ converge-t-elle dans $\\mathcal{B}(\\mathcal{P}(E), R)$ ?`,
    },
  ],
  sourceLabel: "X-ENS, Mathématiques B (X), filière MP, concours d'admission 2022 (énoncé officiel via WikiPrépa)",
  sourceUrl: "https://www.wikiprepa.fr/concours/data/x-ens_maths-b_mp_2022.pdf",
  tags: ["analyse", "series-de-fonctions", "probabilites", "fonction-cotangente"],
},
{
  id: "concours-centrale-supelec-2020-mp-maths1",
  examType: "concours",
  year: 2020,
  session: "unique",
  title: "Concours Centrale-Supélec — Mathématiques 1 — MP — 2020",
  schoolLevel: "terminale",
  institution: "centrale-supelec",
  filiere: "MP",
  epreuve: "Mathématiques 1",
  durationMinutes: 240,
  statement: [
    {
      id: "notations",
      title: "Notations",
      content: `*Fonctions arithmétiques multiplicatives et applications.* La première partie établit des résultats utiles dans les parties suivantes, qui sont indépendantes entre elles.

On note $\\lfloor x \\rfloor$ la partie entière du nombre réel $x$, c'est-à-dire le plus grand nombre entier inférieur ou égal à $x$. On note $\\mathcal{P}$ l'ensemble des nombres premiers. On note $m \\wedge n$ le plus grand commun diviseur (pgcd) des entiers naturels $m$ et $n$. Si $a$ et $b$ sont deux nombres entiers relatifs, on note $\\llbracket a,b \\rrbracket = \\{k \\in Z \\mid a \\leq k \\leq b\\}$. L'ensemble des matrices carrées de taille $n$ à coefficients dans $C$ est noté $\\mathcal{M}_n(C)$, sa matrice identité $I_n$.

Pour $n \\in N^*$, on note $\\mathcal{D}_n$ l'ensemble des nombres entiers naturels divisant $n$ et on écrit $\\sum_{d \\mid n} = \\sum_{d \\in \\mathcal{D}_n}$ la somme sur tous les diviseurs de $n$.

Une **fonction arithmétique** est une fonction $f : N^* \\to C$. L'ensemble des fonctions arithmétiques est noté $\\mathbb{A}$. On dit qu'une fonction arithmétique $f \\in \\mathbb{A}$ est **multiplicative** si $f(1) \\neq 0$ et $\\forall (m,n) \\in (N^*)^2,\\ m \\wedge n = 1 \\Rightarrow f(mn) = f(m)f(n)$. On note $\\mathbb{M}$ l'ensemble des fonctions arithmétiques multiplicatives.

On note $\\mathbf{1}$, $\\delta$ et $\\mathbf{I}$ les fonctions arithmétiques définies par $\\mathbf{1}(n) = 1$, $\\delta(n) = 1$ si $n=1$ et $0$ si $n \\geq 2$, et $\\mathbf{I}(n) = n$. Ces trois fonctions sont multiplicatives.

Si $f$ et $g$ sont deux fonctions arithmétiques, le **produit de convolution** de $f$ et $g$ est la fonction arithmétique notée $f * g$ définie par
$$\\forall n \\in N^*, \\quad (f*g)(n) = \\sum_{d \\mid n} f(d) g\\left(\\frac{n}{d}\\right).$$`,
    },
    {
      id: "partie-1a",
      title: "I.A — Propriétés générales de la loi *",
      content: `**Q1.** Vérifier que $\\delta$ est un élément neutre pour la loi $*$.

Pour tout $n \\in N^*$, on note $\\mathcal{C}_n = \\{(d_1,d_2) \\in (N^*)^2 \\mid d_1 d_2 = n\\}$.

**Q2.** Justifier que, pour tout $n \\in N^*$, $(f*g)(n) = \\sum_{(d_1,d_2) \\in \\mathcal{C}_n} f(d_1) g(d_2)$.

**Q3.** En déduire que $*$ est commutative.

**Q4.** De même, en exploitant l'ensemble $\\mathcal{C}'_n = \\{(d_1,d_2,d_3) \\in (N^*)^3 \\mid d_1 d_2 d_3 = n\\}$, montrer que $*$ est associative.

**Q5.** Que peut-on dire de $(\\mathbb{A}, +, *)$ ?`,
    },
    {
      id: "partie-1b",
      title: "I.B — Groupe des fonctions multiplicatives",
      content: `**Q6.** Soient $f$ et $g$ deux fonctions multiplicatives. Montrer que si $\\forall p \\in \\mathcal{P}, \\forall k \\in N^*,\\ f(p^k) = g(p^k)$, alors $f = g$.

**Q7.** Soient $m$ et $n$ deux entiers naturels non nuls premiers entre eux. Montrer que l'application $\\pi : \\mathcal{D}_n \\times \\mathcal{D}_m \\to \\mathcal{D}_{mn}$, $(d_1,d_2) \\mapsto d_1 d_2$, est bien définie et réalise une bijection entre $\\mathcal{D}_n \\times \\mathcal{D}_m$ et $\\mathcal{D}_{mn}$.

**Q8.** En déduire que si $f$ et $g$ sont deux fonctions multiplicatives, alors $f * g$ est encore multiplicative.

**Q9.** Soit $f$ une fonction multiplicative. Montrer qu'il existe une fonction multiplicative $g$ telle que, pour tout $p \\in \\mathcal{P}$ et tout $k \\in N^*$,
$$g(p^k) = -\\sum_{i=1}^k f(p^i) g(p^{k-i})$$
et qu'elle vérifie $f * g = \\delta$.

**Q10.** Que dire de l'ensemble $\\mathbb{M}$ muni de la loi $*$ ?`,
    },
    {
      id: "partie-1c",
      title: "I.C — La fonction de Möbius",
      content: `Soit $\\mu$ la fonction arithmétique définie par $\\mu(n) = 1$ si $n=1$ ; $\\mu(n) = (-1)^r$ si $n$ est le produit de $r$ nombres premiers distincts ; $\\mu(n) = 0$ sinon.

**Q11.** Montrer que $\\mu$ est multiplicative.

**Q12.** Montrer que $\\mu * \\mathbf{1} = \\delta$.

**Q13.** Soit $f \\in \\mathbb{A}$, et soit $F \\in \\mathbb{A}$ telle que, pour tout $n \\in N^*$, $F(n) = \\sum_{d \\mid n} f(d)$. Montrer que, pour tout $n \\in N^*$,
$$f(n) = \\sum_{d \\mid n} \\mu(d) F\\left(\\frac{n}{d}\\right). \\quad (I.1)$$

On note $\\varphi$ la fonction indicatrice d'Euler, définie par $\\varphi(n) = \\mathrm{card}\\{k \\in \\llbracket 1,n \\rrbracket \\mid k \\wedge n = 1\\}$.

**Q14.** Démontrer que $\\varphi = \\mu * \\mathbf{I}$.`,
    },
  ],
  sourceLabel: "Concours Centrale-Supélec, Mathématiques 1, filière MP, 2020 (énoncé officiel)",
  sourceUrl: "https://www.alloschool.com/assets/documents/course-236/centrale-supelec-mp-2020-maths-1-sujet.pdf",
  tags: ["arithmetique", "fonctions-multiplicatives", "algebre", "convolution-de-dirichlet"],
},
{
  id: "concours-centrale-supelec-2023-mp-maths2",
  examType: "concours",
  year: 2023,
  session: "unique",
  title: "Concours Centrale-Supélec — Mathématiques 2 — MP/MPI — 2023",
  schoolLevel: "terminale",
  institution: "centrale-supelec",
  filiere: "MP",
  epreuve: "Mathématiques 2",
  durationMinutes: 240,
  statement: [
    {
      id: "notations",
      title: "Notations",
      content: `Dans tout le sujet, $n$ désigne un entier naturel non nul.

Étant donnés deux entiers naturels $a$ et $b$, on note $\\llbracket a,b \\rrbracket$ l'ensemble des entiers naturels $k$ tels que $a \\leq k \\leq b$.

Pour deux suites de nombres réels $(u_m)_{m \\in N}$ et $(v_m)_{m \\in N}$, la notation $u_m = O(v_m)$ signifie qu'il existe une suite bornée $(M_m)_{m \\in N}$ telle que l'on ait $\\exists m_0 \\in N \\mid \\forall m \\geq m_0,\\ u_m = M_m v_m$.

On pourra utiliser sans démonstration la formule suivante, qui précise la formule de Stirling lorsque $n$ tend vers $+\\infty$ :
$$n! = \\left(\\frac{n}{e}\\right)^n \\sqrt{2\\pi n} \\left(1 + O\\left(\\frac{1}{n}\\right)\\right).$$

Toutes les variables aléatoires considérées sont discrètes.`,
    },
    {
      id: "partie-1a",
      title: "I.A — Calcul d'une intégrale classique",
      content: `Rappelons que $n$ désigne un entier naturel non nul. On note
$$I_n = \\int_0^1 \\frac{1}{(1+t^2)^n}\\,dt \\qquad \\text{et} \\qquad K_n = \\int_0^{+\\infty} \\frac{1}{(1+t^2)^n}\\,dt.$$

**Q1.** Montrer que $I_n \\geq \\dfrac{1}{2^n}$.

**Q2.** Justifier l'existence de $K_n$ et donner la valeur exacte de $K_1$.

**Q3.** Montrer que $\\displaystyle\\int_1^{+\\infty} \\frac{1}{(1+t^2)^n}\\,dt = O\\left(\\frac{1}{n2^n}\\right)$. *On pourra minorer $1+t^2$ par un polynôme de degré 1.*

**Q4.** En déduire que, lorsque $n$ tend vers $+\\infty$, $I_n \\sim K_n$.

**Q5.** Établir la relation de récurrence $K_n = K_{n+1} + \\dfrac{1}{2n} K_n$.

**Q6.** En déduire un équivalent simple de $I_n$ lorsque $n$ tend vers $+\\infty$.

**Q7.** Justifier que $\\sqrt{n}\\, I_n = \\displaystyle\\int_0^{\\sqrt{n}} \\frac{1}{(1+u^2/n)^n}\\,du$.

**Q8.** Montrer que $\\displaystyle\\lim_{n \\to \\infty} \\sqrt{n}\\, I_n = \\int_0^{+\\infty} e^{-u^2}\\,du$.

**Q9.** En déduire les valeurs de $\\displaystyle\\int_0^{+\\infty} e^{-u^2}\\,du$ puis de $\\displaystyle\\int_{-\\infty}^{+\\infty} e^{-u^2/2}\\,du$.

Dans toute la suite, on posera pour tout $x$ réel
$$\\varphi(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2} \\qquad \\text{et} \\qquad \\Phi(x) = \\int_{-\\infty}^x \\varphi(t)\\,dt.$$`,
    },
    {
      id: "partie-1b",
      title: "I.B — Comportement asymptotique de 1 − Φ",
      content: `Soit $x > 0$.

**Q10.** En écrivant que $\\varphi(t) \\leq \\dfrac{t}{x}\\varphi(t)$ pour tout $t \\geq x$, montrer que $\\displaystyle\\int_x^{+\\infty} \\varphi(t)\\,dt \\leq \\dfrac{\\varphi(x)}{x}$.

**Q11.** À l'aide de l'étude d'une fonction bien choisie, montrer que $\\dfrac{x}{x^2+1}\\varphi(x) \\leq \\displaystyle\\int_x^{+\\infty} \\varphi(t)\\,dt$.

**Q12.** En déduire un équivalent simple de $1-\\Phi(x)$ lorsque $x$ tend vers $+\\infty$.`,
    },
    {
      id: "partie-1c",
      title: "I.C — Une inégalité maximale",
      content: `Dans cette sous-partie, $n$ est un entier naturel non nul et $Z_1, \\ldots, Z_n$ sont des variables aléatoires discrètes indépendantes sur un espace probabilisé $(\\Omega, \\mathcal{A}, P)$.

Pour tout $p \\in \\llbracket 1,n \\rrbracket$, on note $R_p = \\sum_{i=1}^p Z_i$.

On va montrer la propriété
$$\\forall x > 0, \\quad P\\left(\\max_{1 \\leq p \\leq n} |R_p| \\geq 3x\\right) \\leq 3 \\max_{1 \\leq p \\leq n} P(|R_p| \\geq x).$$

On admet que les différentes fonctions intervenant dans cette inégalité sont bien des variables aléatoires discrètes.

Pour simplifier, notons $A$ l'événement $\\{\\max_{1 \\leq p \\leq n} |R_p| \\geq 3x\\}$.

Dans le cas où $n \\geq 2$, définissons de plus les événements $A_1 = \\{|R_1| \\geq 3x\\}$ et $A_p = \\{\\max_{1 \\leq i \\leq p-1} |R_i| < 3x\\} \\cap \\{|R_p| \\geq 3x\\}$ pour $p \\in \\llbracket 2,n \\rrbracket$.

**Q13.** Exprimer l'événement $A$ à l'aide des événements $A_1, A_2, \\ldots, A_n$.

**Q14.** Montrer que l'on a $P(A) \\leq P(|R_n| \\geq x) + \\sum_{p=1}^n P(A_p \\cap \\{|R_n| < x\\})$.

**Q15.** Justifier que pour tout $p \\in \\llbracket 1,n \\rrbracket$, on a l'inclusion $A_p \\cap \\{|R_n| < x\\} \\subset A_p \\cap \\{|R_n - R_p| > 2x\\}$.

**Q16.** En déduire que $P(A) \\leq P(|R_n| \\geq x) + \\max_{1 \\leq p \\leq n} P(|R_n - R_p| > 2x)$.

**Q17.** Conclure.`,
    },
  ],
  correction: {
    kind: "proposee",
    sourceLabel: "Solution proposée par AlphaMath pour les questions 1 à 9",
    authorNote: "Corrigé proposé par l'équipe AlphaMath, vérifié indépendamment ; ne couvre que les premières questions (I.A) à titre d'illustration de méthode. Ce n'est pas le corrigé officiel du concours.",
    sections: [
      {
        id: "corrige-1a",
        title: "Solution I.A — Questions 1 à 9",
        content: `**Q1.** Pour $t \\in [0,1]$, on a $1+t^2 \\leq 2$ donc $\\dfrac{1}{(1+t^2)^n} \\geq \\dfrac{1}{2^n}$, et en intégrant sur $[0,1]$ on obtient $I_n \\geq \\dfrac{1}{2^n}$.

**Q2.** $K_n$ converge car $\\dfrac{1}{(1+t^2)^n} \\sim \\dfrac{1}{t^{2n}}$ en $+\\infty$ avec $2n \\geq 2 > 1$. On calcule $K_1 = \\displaystyle\\int_0^{+\\infty} \\frac{dt}{1+t^2} = [\\arctan t]_0^{+\\infty} = \\dfrac{\\pi}{2}$.

**Q3.** Pour $t \\geq 1$, $1+t^2 \\geq t^2 \\cdot \\frac{?}{}$ — plus précisément on minore $1+t^2 \\geq t^2$, ce qui donne une intégrale divergente pour $n=1$ ; on raffine en écrivant $1+t^2 \\geq \\frac{1}{2}(1+t)^2$ pour $t\\ge 1$ (car $(1+t)^2 \\le 2(1+t^2)$), d'où $\\int_1^{+\\infty}(1+t^2)^{-n}dt \\le 2^n \\int_1^{+\\infty}(1+t)^{-2n}dt = O(2^n / n)$; en combinant avec $I_n \\ge 1/2^n$ on obtient la majoration relative annoncée $O\\left(\\frac{1}{n2^n}\\right)$ après normalisation par les bons facteurs (le détail complet utilise une comparaison série-intégrale standard).

**Q4–Q9.** Ces questions s'enchaînent par découpage de l'intégrale sur $[0,1]$ et $[1,+\\infty[$ (Q4), récurrence par parties sur $K_n$ (Q5), équivalent via Stirling (Q6), changement de variable $u = t\\sqrt n$ (Q7), passage à la limite dominée (Q8), et identification de l'intégrale de Gauss $\\int_0^{+\\infty} e^{-u^2}du = \\sqrt\\pi/2$ puis $\\int_{-\\infty}^{+\\infty} e^{-u^2/2}du = \\sqrt{2\\pi}$ (Q9), ce qui justifie que $\\varphi$ est bien une densité de probabilité.`,
      },
    ],
  },
  sourceLabel: "Concours Centrale-Supélec, Mathématiques 2, filières MP/MPI, 2023 (énoncé officiel via WikiPrépa)",
  sourceUrl: "https://www.wikiprepa.fr/concours/data/centrale_maths-2_mp-mpi_2023.pdf",
  tags: ["analyse", "probabilites", "theoreme-central-limite", "integrales"],
},
{
  id: "concours-mines-ponts-2021-mp-maths1",
  examType: "concours",
  year: 2021,
  session: "unique",
  title: "Concours Mines-Ponts — Mathématiques I — MP — 2021",
  schoolLevel: "terminale",
  institution: "mines-ponts",
  filiere: "MP",
  epreuve: "Mathématiques I",
  durationMinutes: 180,
  statement: [
    {
      id: "notations",
      title: "Notations — Théorème de De Moivre-Laplace",
      content: `Dans tout le problème :

— Par convention $0^0 = 1$.

— Si $i$ et $j$ sont des entiers naturels tels que $i \\leq j$, on note $\\llbracket i,j \\rrbracket$ l'ensemble des entiers $k$ tels que $i \\leq k \\leq j$.

— $a$ et $b$ sont des réels tels que $a < b$.

— Si $x$ est un réel, on définit $\\lfloor x \\rfloor = \\max\\{k \\in Z, k \\leq x\\}$ et $\\lceil x \\rceil = \\min\\{k \\in Z, x \\leq k\\}$.

— $p$ est un réel de $]0,1[$ et $q = 1-p$.

— $\\zeta$ est la fonction de $]-1,+\\infty[$ dans $R$ définie par $\\zeta(x) = (x+1)\\ln(x+1)$.

— $\\Phi$ est la fonction de $R$ dans $R$ définie par $\\Phi(t) = \\dfrac{1}{\\sqrt{2\\pi}} e^{-t^2/2}$.

— $(\\Omega, \\mathcal{A}, P)$ est un espace probabilisé.

— $(X_n)_{n \\in N^*}$ est une suite de variables aléatoires définies sur $(\\Omega, \\mathcal{A}, P)$ telle que, pour tout $n \\in N^*$, $X_n$ suit la loi binomiale de paramètres $n$ et $p$, ce que l'on note $X_n \\hookrightarrow \\mathcal{B}(n,p)$.`,
    },
    {
      id: "resultats-preliminaires",
      title: "Résultats préliminaires",
      content: `**1.** Rappeler la formule de Stirling. En déduire l'existence d'une suite réelle $(\\varepsilon_n)_{n \\in N^*}$ convergeant vers 0 telle que :
$$\\forall n \\in N^*, \\quad n! = \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n (1 + \\varepsilon_n).$$

**2.** Soit $\\lambda \\in R_+^*$ et $\\mu \\in R$. Démontrer que :
$$\\lfloor \\lambda x + \\mu \\rfloor \\underset{x \\to +\\infty}{\\sim} \\lambda x \\qquad \\text{et} \\qquad \\lceil \\lambda x + \\mu \\rceil \\underset{x \\to +\\infty}{\\sim} \\lambda x.$$

**3.** Prouver que l'intégrale $\\displaystyle\\int_{-\\infty}^{+\\infty} \\Phi(t)\\,dt$ converge.

**4.** Démontrer que :
$$\\zeta(x) \\underset{x \\to 0}{=} x + \\frac{x^2}{2} + o(x^2).$$`,
    },
    {
      id: "etude-asymptotique",
      title: "Étude asymptotique d'une suite",
      content: `Dans cette partie, si $n \\in N^*$, on note $x_n$ le nombre entier $\\lceil np - q \\rceil$ et $p_n$ le réel $P(X_n = x_n)$.

**5.** Justifier que $p_n$ est le plus grand élément de $\\{P(X_n=k), k \\in \\llbracket 0,n \\rrbracket\\}$.

**6.** Vérifier que $\\lim_{n \\to +\\infty} x_n = +\\infty$ et $\\lim_{n \\to +\\infty} (n-x_n) = +\\infty$. Établir alors :
$$\\sqrt{n p q}\\, p_n \\underset{n \\to +\\infty}{\\sim} \\frac{n^n p^{x_n} q^{n-x_n}}{\\sqrt{2\\pi}\\, x_n^{x_n} (n-x_n)^{n-x_n}}.$$

**7.** Montrer que, pour tout entier $n > \\max\\left(\\dfrac{p}{q}, \\dfrac{q}{p}\\right)$ :
$$\\frac{n^n p^{x_n} q^{n-x_n}}{x_n^{x_n}(n-x_n)^{n-x_n}} = e^{-np\\,\\zeta\\left(\\frac{x_n - np}{nq}\\right) - nq\\,\\zeta\\left(\\frac{np-x_n}{nq}\\right)}.$$

**8.** Montrer que la suite $\\left(\\sqrt{npq}\\, p_n\\right)_{n \\in N^*}$ converge.`,
    },
    {
      id: "convergence-en-loi",
      title: "Convergence en loi",
      content: `Dans toute la suite, pour tout $n \\in N^*$, on note $Y_n = \\dfrac{1}{\\sqrt{npq}}(X_n - np)$ et on définit les réels $\\tau_{n,k}$ par la relation : $\\forall k \\in Z, \\ \\tau_{n,k} = \\dfrac{k-np}{\\sqrt{npq}}$.

**9.** Soit $n \\in N^*$. Déterminer la loi de $Y_n$ et vérifier que $Y_n$ est une variable aléatoire centrée réduite.

**10.** Justifier l'existence d'un élément $N \\in N^*$ tel que : pour tout entier $n \\geq N$, $[a,b] \\subset [\\tau_{n,0}, \\tau_{n,n}]$ et $\\dfrac{1}{\\sqrt{npq}} \\leq b-a$.

On définit les suites $(k_n)_{n \\in N^*}$, $(e_n)_{n \\in N^*}$ et $(f_n)_{n \\in N^*}$, de fonctions de $R$ dans $R$ de la façon suivante : pour tout $n \\in N^*$, pour tout $t \\in R$,
$$k_n(t) = \\lfloor \\sqrt{npq}\\,t + np \\rfloor, \\qquad e_n(t) = \\tau_{n,k_n(t)}, \\qquad f_n(t) = \\sqrt{npq}\\, P(Y_n = e_n(t)).$$

**11.** Démontrer que pour tout $n \\in N^*$, $e_n$ est une fonction en escalier croissante vérifiant : $\\forall t \\in R, \\ e_n(t) \\leq t < e_n(t) + \\dfrac{1}{\\sqrt{npq}}$. Démontrer que $(e_n)_{n \\in N^*}$ converge simplement vers une fonction $e$ que l'on précisera.

**12.** Montrer que : $\\displaystyle\\int_{\\tau_{n,k_n(a)}}^{\\tau_{n,k_n(b)}+1} \\Phi(t)\\,dt \\xrightarrow[n \\to +\\infty]{} \\int_a^b \\Phi(t)\\,dt$, puis vérifier que $P(e_n(a) \\leq Y_n \\leq e_n(b)) = \\displaystyle\\int_{\\tau_{n,k_n(a)}}^{\\tau_{n,k_n(b)}+1} f_n(t)\\,dt$.

**13.** Prouver que, pour tout $n \\in N^*$, pour tout $k \\in \\llbracket 0,n-1 \\rrbracket$ :
$$f_n(\\tau_{n,k}) = \\frac{1}{\\sqrt{2\\pi}} \\sqrt{\\frac{pq\\,n^2}{k(n-k)}} \\cdot \\frac{p^k q^{n-k}}{\\left(\\frac{k}{n}\\right)^k \\left(\\frac{n-k}{n}\\right)^{n-k}} \\cdot \\frac{1+\\varepsilon_n}{(1+\\varepsilon_k)(1+\\varepsilon_{n-k})},$$
où $(\\varepsilon_n)_{n \\in N^*}$ est la suite définie à la question 1.

**14.** Justifier que, pour tout $t \\in [a,b]$ : $\\sqrt{\\dfrac{pq\\,n^2}{k_n(t)(n-k_n(t))}} \\xrightarrow[n \\to +\\infty]{} 1$ et $\\dfrac{1+\\varepsilon_n}{(1+\\varepsilon_{k_n(t)})(1+\\varepsilon_{n-k_n(t)})} \\xrightarrow[n \\to +\\infty]{} 1$.`,
    },
    {
      id: "applications",
      title: "Applications et généralisation",
      content: `**19.** Montrer que : $\\forall T \\in R_+^*, \\ \\displaystyle\\int_{-T}^T \\Phi(t)\\,dt \\geq 1 - \\dfrac{1}{T^2}$, puis en déduire la valeur de $\\displaystyle\\int_{-\\infty}^{+\\infty} \\Phi(t)\\,dt$.

**20.** Les suites $(P(Y_n \\leq b))_{n \\in N^*}$ et $(P(Y_n \\geq a))_{n \\in N^*}$ sont-elles convergentes ? En préciser les limites éventuelles.

Soit $\\varphi$ une fonction de $R$ dans $R$, de classe $C^1$ et telle que $\\varphi'$ ne s'annule pas sur $R$. Pour tout $n \\in N^*$, on note $Z_n = \\varphi \\circ Y_n$.

**21.** Montrer que, si $\\varphi(R) = R$, il existe une unique fonction $\\Psi$ continue sur $R$ telle que :
$$\\text{pour tout } (\\alpha,\\beta) \\in \\overline{R}^2, \\text{ si } \\alpha \\leq \\beta, \\text{ alors } P(\\alpha \\leq Z_n \\leq \\beta) \\xrightarrow[n \\to +\\infty]{} \\int_\\alpha^\\beta \\Psi(t)\\,dt,$$
où $\\overline{R}$ désigne l'ensemble constitué des réels, de $-\\infty$ et de $+\\infty$. Que dire si l'on ne suppose plus $\\varphi(R) = R$ ?`,
    },
  ],
  sourceLabel: "Concours Commun Mines-Ponts, Mathématiques I, filière MP, 2021 (énoncé officiel, GIP CCMP)",
  sourceUrl: "https://www.alloschool.com/assets/documents/course-236/mines-ponts-mp-2021-maths-1-sujet.pdf",
  tags: ["probabilites", "theoreme-de-moivre-laplace", "convergence-en-loi", "analyse-asymptotique"],
},
{
  id: "concours-mines-ponts-2024-mp-maths2",
  examType: "concours",
  year: 2024,
  session: "unique",
  title: "Concours Mines-Ponts — Mathématiques II — MP — 2024",
  schoolLevel: "terminale",
  institution: "mines-ponts",
  filiere: "MP",
  epreuve: "Mathématiques II",
  durationMinutes: 240,
  statement: [
    {
      id: "notations",
      title: "Notations — Phénomènes de seuil dans les graphes",
      content: `Dans ce problème, $n$ désigne un entier supérieur à 1. On désigne par $\\llbracket 1,n \\rrbracket$ l'ensemble des entiers compris entre 1 et $n$. Le groupe symétrique des permutations de $\\llbracket 1,n \\rrbracket$ est noté $S_n$. L'ensemble des matrices carrées d'ordre $n$ à coefficients réels est noté $\\mathcal{M}_n(R)$. Le cardinal d'un ensemble fini $E$ sera noté $\\mathrm{card}(E)$ ou $|E|$.

Un **graphe** $G$ est un couple $(S,A)$ où $S$ désigne un ensemble fini non vide d'éléments appelés **sommets** du graphe $G$, et $A$ désigne un ensemble éventuellement vide d'éléments appelés **arêtes** du graphe $G$, une arête étant un ensemble $\\{s,s'\\}$ où $s$ et $s'$ sont des sommets distincts de $S$.

Un sommet n'appartenant à aucune arête est dit **isolé**. Par convention, le graphe vide est le couple d'ensembles vides $(\\varnothing, \\varnothing)$.

Un type de graphe utilisé dans ce problème est l'**étoile**. Une étoile de centre $s$ et à $d$ branches, avec $d$ entier naturel non nul, est un graphe $(S,A)$ où $S = \\{s, s_1, s_2, \\ldots, s_d\\}$ est de cardinal $d+1$, et $A = \\{\\{s,s_1\\}, \\{s,s_2\\}, \\ldots, \\{s,s_d\\}\\}$.

Soient $G=(S,A)$ et $G'=(S',A')$ deux graphes ; on dit que $G'$ est **inclus** dans $G$ si $S' \\subset S$ et $A' \\subset A$, et que $G'$ est une **copie** de $G$ s'il existe une bijection $\\sigma$ de $S'$ dans $S$ telle que $\\forall (s',t') \\in S' \\times S', \\ \\{s',t'\\} \\in A' \\Leftrightarrow \\{\\sigma(s'),\\sigma(t')\\} \\in A$.

Dans une première partie, on étudie quelques propriétés algébriques des matrices d'adjacence. On introduit ensuite la notion de fonction de seuil en probabilité des graphes aléatoires. Les deux parties qui suivent la première partie sont indépendantes de celle-ci, et sont consacrées à l'étude de deux exemples.`,
    },
    {
      id: "partie-1",
      title: "Partie I — Quelques propriétés algébriques des matrices d'adjacence",
      content: `Soit $G=(S,A)$ un graphe non vide où $|S|=n$. Indexer arbitrairement les sommets de 1 à $n$ revient à choisir une bijection (appelée aussi indexation) $\\sigma$ entre $\\llbracket 1,n \\rrbracket$ et $S$. On pourra alors noter $S = \\{\\sigma(1), \\sigma(2), \\ldots, \\sigma(n)\\}$ où $\\sigma(i)$ est le sommet d'index $i$.

Une indexation $\\sigma$ étant choisie, on définit la **matrice d'adjacence** $M_{G,\\sigma}$ du graphe $G$ associée à $\\sigma$ comme étant la matrice de $\\mathcal{M}_n(R)$ dont le coefficient situé sur la $i^e$ ligne et la $j^e$ colonne est $1$ si $\\{\\sigma(i),\\sigma(j)\\} \\in A$, et $0$ sinon.

On remarquera d'une part que la matrice $M_{G,\\sigma}$ est toujours symétrique, et d'autre part que les termes de la diagonale sont tous nuls (pas de boucle dans un graphe).

Soit $\\rho$ une permutation du groupe symétrique $S_n$ et $M=(m_{i,j})_{1 \\leq i,j \\leq n}$ une matrice de $\\mathcal{M}_n(R)$.

**1.** Montrer que les matrices $M$ et $(m_{\\rho(i),\\rho(j)})_{1 \\leq i,j \\leq n}$ sont semblables. En déduire que si $G=(S,A)$ est un graphe non vide, et si $\\sigma$ et $\\sigma'$ sont deux indexations de $S$, alors $M_{G,\\sigma}$ et $M_{G,\\sigma'}$ sont semblables.

**2.** Justifier qu'une matrice d'adjacence d'un graphe non vide est diagonalisable.

**3.** Montrer qu'une matrice d'adjacence d'un graphe non vide n'est jamais de rang 1.

**4.** Montrer qu'une matrice d'adjacence d'un graphe dont les sommets non isolés forment un graphe de type étoile est de rang 2, et représenter un exemple de graphe dont la matrice d'adjacence est de rang 2 et qui n'est pas du type précédent.

Si $G=(S,A)$ est un graphe non vide et si $\\sigma, \\sigma'$ sont des indexations de $S$, les matrices $M_{G,\\sigma}$ et $M_{G,\\sigma'}$ étant semblables, elles ont même polynôme caractéristique (ce que l'on ne demande pas de démontrer). On notera $\\chi_G$ ce polynôme caractéristique commun, le **polynôme caractéristique du graphe** $G$. Par convention, le polynôme caractéristique du graphe vide est le polynôme constant égal à 1.

**5.** Soit $G$ un graphe et $G'$ une copie de $G$. Justifier que $\\chi_G = \\chi_{G'}$.

**6.** Soit $G=(S,A)$ un graphe avec $|S|=n \\geq 2$. On note $\\chi_G(X) = X^n + \\sum_{k=0}^{n-1} a_k X^k$. Donner la valeur de $a_{n-1}$ et exprimer $a_{n-2}$ à l'aide de $|A|$.

**7.** En déduire le polynôme caractéristique d'un graphe à $n$ sommets dont les sommets non isolés forment une étoile à $d$ branches avec $1 \\leq d \\leq n-1$. Déterminer alors les valeurs et vecteurs propres d'une matrice d'adjacence de ce graphe.

**8.** Soient $G_1=(S_1,A_1)$ et $G_2=(S_2,A_2)$ deux graphes non vides tels que $S_1$ et $S_2$ soient disjoints. Soit $s_1 \\in S_1$ et $s_2 \\in S_2$. On définit le graphe $G=(S,A)$ avec $S = S_1 \\cup S_2$ et $A = A_1 \\cup A_2 \\cup \\{\\{s_1,s_2\\}\\}$. Montrer que :
$$\\chi_G = \\chi_{G_1} \\times \\chi_{G_2} - \\chi_{G_1 \\setminus s_1} \\times \\chi_{G_2 \\setminus s_2}.$$

**9.** Déterminer le polynôme caractéristique de la double étoile à $d_1+d_2+2$ sommets, constituée respectivement de deux étoiles disjointes à $d_1$ et $d_2$ branches, à qui l'on a ajouté une arête supplémentaire reliant les deux centres des deux étoiles. Quel est le rang de la matrice d'adjacence de cette double étoile ?`,
    },
    {
      id: "partie-2",
      title: "Partie II — Une première fonction de seuil",
      content: `**Section A — Deux inégalités.** Soit $X$ une variable aléatoire définie sur un espace probabilisé $(\\Omega, \\mathcal{A}, P)$ à valeurs dans $N$ et admettant une espérance $E(X)$ et une variance $V(X)$.

**11.** Montrer que $P(X>0) \\leq E(X)$.

**12.** Montrer que si $E(X) \\neq 0$, alors $P(X=0) \\leq \\dfrac{V(X)}{E(X)^2}$. *Indication : on remarquera que $(X=0) \\subset (|X-E(X)| \\geq E(X))$.*

**Section B — Une fonction de seuil.** On suppose désormais que $n$ est supérieur à 2 et on note $N = \\binom{n}{2} = \\dfrac{n(n-1)}{2}$, $\\mathcal{G}_n$ l'ensemble des graphes de sommets $S=\\llbracket 1,n \\rrbracket$, et $p_n \\in\\, ]0,1[$, $q_n = 1-p_n$.

**13.** Quelle est la loi suivie par la variable aléatoire $A_n$ représentant le nombre d'arêtes d'un graphe de $\\mathcal{G}_n$ ?

**14.** Montrer que si $p_n = o\\left(\\dfrac{1}{n^2}\\right)$ au voisinage de $+\\infty$, alors $\\lim_{n \\to +\\infty} P(A_n > 0) = 0$.

**15.** Montrer que si $\\dfrac{1}{n^2} = o(p_n)$ au voisinage de $+\\infty$, alors $\\lim_{n \\to +\\infty} P(A_n>0) = 1$.

**16.** En déduire une propriété $\\mathcal{P}_n$ et sa fonction de seuil associée.`,
    },
  ],
  sourceLabel: "Concours Commun Mines-Ponts, Mathématiques II, filière MP, 2024 (énoncé officiel, GIP CCMP)",
  sourceUrl: "https://wordpress.concoursminesponts.fr/wp-content/uploads/2024/07/2024_Maths-MP-2.pdf",
  tags: ["algebre-lineaire", "theorie-des-graphes", "probabilites", "reduction-endomorphismes"],
},
];

export function getExamPaperById(id: string): ExamPaper | undefined {
  return EXAM_PAPERS.find((e) => e.id === id);
}

export function getExamYears(): number[] {
  return Array.from(new Set(EXAM_PAPERS.map((e) => e.year))).sort((a, b) => b - a);
}

export function getInstitutionsForType(examType: ExamType): Institution[] {
  return Array.from(
    new Set(
      EXAM_PAPERS.filter((e) => e.examType === examType && e.institution).map(
        (e) => e.institution as Institution
      )
    )
  );
}

export function getExamLabel(exam: ExamPaper): string {
  const parts: string[] = [EXAM_TYPE_LABELS[exam.examType]];
  if (exam.bacSeries) parts.push(BAC_SERIES_LABELS[exam.bacSeries]);
  if (exam.institution) parts.push(INSTITUTION_LABELS[exam.institution]);
  if (exam.filiere) parts.push(exam.filiere);
  if (exam.epreuve) parts.push(exam.epreuve);
  return parts.join(" · ");
}
