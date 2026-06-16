export type Difficulty = "Débutant" | "Intermédiaire" | "Avancé";
export type SchoolLevel =
  | "6eme" | "5eme" | "4eme" | "3eme"
  | "2nde" | "1ere" | "terminale"
  | "L1" | "L2" | "L3";
export type Subject = "geometrie" | "algebre" | "analyse" | "probabilites" | "arithmetique";

export interface Exercise {
  id: string;
  question: string;
  type: "mcq" | "true_false" | "open";
  options?: { id: string; text: string }[];
  correctId?: string;
  modelAnswer?: string;
  explanation: string;
  difficulty: "debutant" | "intermediaire" | "expert";
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  content: string; // Markdown avec LaTeX entre $...$ et $$...$$
  videoUrl?: string;
  durationMinutes: number;
  exercises: Exercise[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  schoolLevel: SchoolLevel;
  subject: Subject;
  difficulty: Difficulty;
  isFree: boolean;
  thumbnailEmoji: string;
  lessons: Lesson[];
}

export const COURSES: Course[] = [
  // ─────────────────────────────────────────────
  // 4ème — Théorème de Pythagore
  // ─────────────────────────────────────────────
  {
    id: "pythagore-4eme",
    slug: "theoreme-pythagore",
    title: "Théorème de Pythagore",
    description: "Maîtrisez le théorème fondamental de la géométrie du triangle rectangle. Des preuves interactives aux applications pratiques.",
    schoolLevel: "4eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "△",
    lessons: [
      {
        id: "pyth-1",
        slug: "enonce-et-demonstration",
        title: "Énoncé et démonstration",
        durationMinutes: 12,
        videoUrl: "https://www.youtube.com/embed/dFxSmGRImjQ",
        content: `## Le Théorème de Pythagore

Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.

### Énoncé formel

Soit un triangle $ABC$ rectangle en $C$. Alors :

$$AB^2 = AC^2 + BC^2$$

où $AB$ est l'**hypoténuse** (le côté opposé à l'angle droit).

### Réciproque

Si dans un triangle $ABC$ on a $AB^2 = AC^2 + BC^2$, alors le triangle est rectangle en $C$.

### Exemple

Un triangle a pour côtés $AC = 3$ cm, $BC = 4$ cm. Calculons $AB$ :

$$AB^2 = 3^2 + 4^2 = 9 + 16 = 25$$

$$AB = \\sqrt{25} = 5 \\text{ cm}$$

> Le triplet $(3, 4, 5)$ est un **triplet pythagoricien** classique.`,
        exercises: [
          {
            id: "e1",
            question: "Dans un triangle rectangle, les deux côtés de l'angle droit mesurent 6 cm et 8 cm. Quelle est la longueur de l'hypoténuse ?",
            type: "mcq",
            options: [
              { id: "A", text: "10 cm" },
              { id: "B", text: "14 cm" },
              { id: "C", text: "√28 cm" },
              { id: "D", text: "7 cm" },
            ],
            correctId: "A",
            explanation: "$AB^2 = 6^2 + 8^2 = 36 + 64 = 100$, donc $AB = \\sqrt{100} = 10$ cm. Le triplet $(6, 8, 10)$ est un multiple du triplet $(3, 4, 5)$.",
            difficulty: "debutant",
          },
          {
            id: "e2",
            question: "Un triangle a des côtés de longueurs 5, 12 et 13. Est-il rectangle ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, car 5² + 12² = 13²" },
              { id: "B", text: "Non, les calculs ne concordent pas" },
              { id: "C", text: "Oui, car 5 + 12 = 17 > 13" },
              { id: "D", text: "Impossible à déterminer" },
            ],
            correctId: "A",
            explanation: "$5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Par la réciproque du théorème de Pythagore, le triangle est bien rectangle. $(5, 12, 13)$ est un triplet pythagoricien.",
            difficulty: "intermediaire",
          },
          {
            id: "e3",
            question: "La diagonale d'un carré de côté $a$ est égale à :",
            type: "mcq",
            options: [
              { id: "A", text: "$2a$" },
              { id: "B", text: "$a\\sqrt{2}$" },
              { id: "C", text: "$a^2$" },
              { id: "D", text: "$\\sqrt{a}$" },
            ],
            correctId: "B",
            explanation: "La diagonale forme un triangle rectangle isocèle. $d^2 = a^2 + a^2 = 2a^2$, donc $d = a\\sqrt{2}$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "pyth-2",
        slug: "applications",
        title: "Applications et problèmes",
        durationMinutes: 15,
        content: `## Applications du Théorème de Pythagore

### Calcul de distances

Le théorème de Pythagore permet de calculer des distances inaccessibles directement.

**Exemple :** Un mât de 4 m est attaché au sol par un câble de 5 m. À quelle distance du pied du mât est fixé le câble ?

$$d^2 = 5^2 - 4^2 = 25 - 16 = 9 \\implies d = 3 \\text{ m}$$

### Distance entre deux points

Dans un repère, la distance entre $A(x_A, y_A)$ et $B(x_B, y_B)$ est :

$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$

*C'est une application directe du théorème de Pythagore dans le plan cartésien.*`,
        exercises: [
          {
            id: "e4",
            question: "Quelle est la distance entre les points $A(1, 2)$ et $B(4, 6)$ dans un repère orthonormé ?",
            type: "mcq",
            options: [
              { id: "A", text: "5" },
              { id: "B", text: "7" },
              { id: "C", text: "√7" },
              { id: "D", text: "25" },
            ],
            correctId: "A",
            explanation: "$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "pyth-3",
        slug: "triplets-pythagoriciens",
        title: "Triplets pythagoriciens",
        durationMinutes: 10,
        content: `## Triplets Pythagoriciens

Un **triplet pythagoricien** est un ensemble de trois entiers naturels $(a, b, c)$ vérifiant $a^2 + b^2 = c^2$.

### Triplets classiques à connaître

| $a$ | $b$ | $c$ |
|-----|-----|-----|
| 3   | 4   | 5   |
| 5   | 12  | 13  |
| 8   | 15  | 17  |
| 7   | 24  | 25  |

### Formule de génération

Pour tout $m > n > 0$, le triplet suivant est pythagoricien :

$$a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2$$`,
        exercises: [
          {
            id: "e5",
            question: "Avec $m = 3$ et $n = 1$, quel triplet pythagoricien obtient-on ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(6, 8, 10)$" },
              { id: "B", text: "$(8, 6, 10)$" },
              { id: "C", text: "$(4, 3, 5)$" },
              { id: "D", text: "$(8, 6, 10)$" },
            ],
            correctId: "B",
            explanation: "$a = 9-1 = 8$, $b = 2 \\times 3 \\times 1 = 6$, $c = 9+1 = 10$. Vérification : $8^2 + 6^2 = 64 + 36 = 100 = 10^2$. ✓",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 1ère — Suites arithmétiques
  // ─────────────────────────────────────────────
  {
    id: "suites-1ere",
    slug: "suites-arithmetiques",
    title: "Suites arithmétiques",
    description: "Analysez et calculez des suites arithmétiques. De la définition formelle au terme général, en passant par la somme des termes.",
    schoolLevel: "1ere",
    subject: "analyse",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "∑",
    lessons: [
      {
        id: "suite-1",
        slug: "definition-et-terme-general",
        title: "Définition et terme général",
        durationMinutes: 14,
        videoUrl: "https://www.youtube.com/embed/CklyH-mNwOI",
        content: `## Suites arithmétiques

### Définition

Une suite $(u_n)_{n \\in \\mathbb{N}}$ est dite **arithmétique** s'il existe un réel $r$ tel que :

$$\\forall n \\in \\mathbb{N},\\ u_{n+1} = u_n + r$$

Le réel $r$ s'appelle la **raison** de la suite.

### Terme général

Si $(u_n)$ est arithmétique de premier terme $u_0$ et de raison $r$ :

$$\\boxed{u_n = u_0 + n \\cdot r}$$

**Exemple :** $u_0 = 3$, $r = 5$ \\implies $u_n = 3 + 5n$

Vérification : $u_1 = 3 + 5 = 8$, $u_2 = 3 + 10 = 13$... ✓

### Sens de variation

- Si $r > 0$ : la suite est **strictement croissante**
- Si $r < 0$ : la suite est **strictement décroissante**
- Si $r = 0$ : la suite est **constante**`,
        exercises: [
          {
            id: "s1e1",
            question: "La suite $(u_n)$ vérifie $u_0 = 2$ et $r = 3$. Quelle est la valeur de $u_5$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "15" },
              { id: "B", text: "17" },
              { id: "C", text: "12" },
              { id: "D", text: "20" },
            ],
            correctId: "B",
            explanation: "$u_5 = u_0 + 5r = 2 + 5 \\times 3 = 2 + 15 = 17$",
            difficulty: "debutant",
          },
          {
            id: "s1e2",
            question: "Dans une suite arithmétique, $u_3 = 14$ et $u_7 = 30$. Quelle est la raison $r$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$r = 3$" },
              { id: "B", text: "$r = 4$" },
              { id: "C", text: "$r = 5$" },
              { id: "D", text: "$r = 8$" },
            ],
            correctId: "B",
            explanation: "On a $u_7 - u_3 = 4r$, donc $30 - 14 = 4r \\implies r = \\frac{16}{4} = 4$.",
            difficulty: "intermediaire",
          },
          {
            id: "s1e3",
            question: "Soit $(u_n)$ une suite arithmétique telle que $u_2 + u_5 = 21$ et $u_1 = 3$. Quelle est la raison ?",
            type: "mcq",
            options: [
              { id: "A", text: "$r = 2$" },
              { id: "B", text: "$r = 3$" },
              { id: "C", text: "$r = 4$" },
              { id: "D", text: "$r = 5$" },
            ],
            correctId: "B",
            explanation: "$u_2 = u_1 + r = 3 + r$ et $u_5 = u_1 + 4r = 3 + 4r$. Donc $(3+r) + (3+4r) = 21 \\implies 6 + 5r = 21 \\implies r = 3$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "suite-2",
        slug: "somme-des-termes",
        title: "Somme des termes",
        durationMinutes: 12,
        content: `## Somme des termes d'une suite arithmétique

### Formule fondamentale

La somme des $(n+1)$ premiers termes d'une suite arithmétique est :

$$S_n = \\sum_{k=0}^{n} u_k = (n+1) \\cdot \\frac{u_0 + u_n}{2}$$

**Moyen mnémotechnique :** *nombre de termes × moyenne du premier et dernier terme*

### Cas particulier : somme des entiers

$$\\sum_{k=1}^{n} k = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$

**Exemple :** La somme $1 + 2 + \\cdots + 100 = \\dfrac{100 \\times 101}{2} = 5050$

*Anecdote : Gauss a trouvé ce résultat à l'âge de 10 ans !*`,
        exercises: [
          {
            id: "s2e1",
            question: "Calculer la somme $S = 1 + 3 + 5 + \\cdots + 19$ (suite des impairs).",
            type: "mcq",
            options: [
              { id: "A", text: "90" },
              { id: "B", text: "100" },
              { id: "C", text: "110" },
              { id: "D", text: "95" },
            ],
            correctId: "B",
            explanation: "Il y a 10 termes ($u_0 = 1$, $r = 2$, $u_9 = 19$). $S = 10 \\times \\frac{1+19}{2} = 10 \\times 10 = 100$. Remarque : la somme des $n$ premiers impairs vaut toujours $n^2$ !",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "suite-3",
        slug: "suites-geometriques",
        title: "Suites géométriques",
        durationMinutes: 16,
        content: `## Suites géométriques

### Définition

Une suite $(v_n)$ est **géométrique** de raison $q$ si :

$$\\forall n \\in \\mathbb{N},\\ v_{n+1} = q \\cdot v_n \\quad (q \\neq 0)$$

### Terme général

$$\\boxed{v_n = v_0 \\cdot q^n}$$

### Somme des termes géométriques

$$S_n = \\sum_{k=0}^{n} v_k = v_0 \\cdot \\frac{1 - q^{n+1}}{1 - q} \\quad (q \\neq 1)$$

### Comparaison

| | Arithmétique | Géométrique |
|---|---|---|
| Relation | $u_{n+1} = u_n + r$ | $v_{n+1} = q \\cdot v_n$ |
| Terme général | $u_n = u_0 + nr$ | $v_n = v_0 \\cdot q^n$ |
| Croissance | Linéaire | Exponentielle |`,
        exercises: [
          {
            id: "s3e1",
            question: "Une suite géométrique vérifie $v_0 = 2$ et $q = 3$. Quelle est la valeur de $v_4$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "24" },
              { id: "B", text: "54" },
              { id: "C", text: "162" },
              { id: "D", text: "16" },
            ],
            correctId: "C",
            explanation: "$v_4 = v_0 \\cdot q^4 = 2 \\times 3^4 = 2 \\times 81 = 162$",
            difficulty: "debutant",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Terminale — Intégrales définies
  // ─────────────────────────────────────────────
  {
    id: "integrales-terminale",
    slug: "integrales-definies",
    title: "Intégrales définies",
    description: "Des aires sous les courbes aux applications physiques. Maîtrisez le calcul intégral et le théorème fondamental de l'analyse.",
    schoolLevel: "terminale",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "∫",
    lessons: [
      {
        id: "int-1",
        slug: "definition-et-proprietes",
        title: "Définition et propriétés",
        durationMinutes: 18,
        content: `## L'intégrale définie

### Définition (Riemann)

Pour $f$ continue sur $[a, b]$, l'intégrale de $f$ entre $a$ et $b$ est :

$$\\int_a^b f(x)\\, dx = \\lim_{n \\to \\infty} \\sum_{k=0}^{n-1} f\\!\\left(a + k \\cdot \\frac{b-a}{n}\\right) \\cdot \\frac{b-a}{n}$$

**Interprétation géométrique :** C'est l'aire algébrique entre la courbe de $f$ et l'axe des abscisses.

### Propriétés fondamentales

**Linéarité :**
$$\\int_a^b [\\lambda f(x) + \\mu g(x)]\\, dx = \\lambda \\int_a^b f(x)\\, dx + \\mu \\int_a^b g(x)\\, dx$$

**Relation de Chasles :**
$$\\int_a^c f(x)\\, dx = \\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx$$

### Théorème fondamental

Si $F$ est une primitive de $f$ sur $[a, b]$, alors :

$$\\boxed{\\int_a^b f(x)\\, dx = [F(x)]_a^b = F(b) - F(a)}$$`,
        exercises: [
          {
            id: "i1e1",
            question: "Calculer $\\displaystyle\\int_0^2 (3x^2 + 1)\\, dx$",
            type: "mcq",
            options: [
              { id: "A", text: "8" },
              { id: "B", text: "10" },
              { id: "C", text: "12" },
              { id: "D", text: "6" },
            ],
            correctId: "B",
            explanation: "Une primitive est $F(x) = x^3 + x$. Donc $\\int_0^2 = F(2) - F(0) = (8+2) - 0 = 10$.",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "int-2",
        slug: "techniques-de-calcul",
        title: "Techniques de calcul",
        durationMinutes: 20,
        content: `## Techniques de calcul intégral

### Intégration par parties (IPP)

$$\\int_a^b u(x) v'(x)\\, dx = [u(x) v(x)]_a^b - \\int_a^b u'(x) v(x)\\, dx$$

**Exemple :** Calculer $\\int_0^1 x e^x\\, dx$

Posons $u = x$, $v' = e^x$, donc $u' = 1$, $v = e^x$.

$$\\int_0^1 x e^x\\, dx = [xe^x]_0^1 - \\int_0^1 e^x\\, dx = e - [e^x]_0^1 = e - (e - 1) = 1$$

### Changement de variable

Si $x = \\varphi(t)$ avec $\\varphi$ dérivable :

$$\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(x)\\, dx = \\int_{\\alpha}^{\\beta} f(\\varphi(t))\\, \\varphi'(t)\\, dt$$`,
        exercises: [
          {
            id: "i2e1",
            question: "Par IPP, calculer $\\int_0^{\\pi} x \\cos x\\, dx$",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$-2$" },
              { id: "C", text: "$\\pi$" },
              { id: "D", text: "$2$" },
            ],
            correctId: "B",
            explanation: "Avec $u = x$, $v' = \\cos x$ : $[x \\sin x]_0^\\pi - \\int_0^\\pi \\sin x\\, dx = 0 - [-\\cos x]_0^\\pi = -(\\cos\\pi - \\cos 0) = -(-1-1) = -2$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "int-3",
        slug: "aires-et-volumes",
        title: "Aires et volumes",
        durationMinutes: 16,
        content: `## Aires et volumes par intégration

### Aire entre deux courbes

L'aire de la région délimitée par $f$ et $g$ sur $[a, b]$ (avec $f \\geq g$) :

$$\\mathcal{A} = \\int_a^b [f(x) - g(x)]\\, dx$$

### Volume de révolution

Le volume du solide obtenu par rotation de $f$ autour de l'axe Ox sur $[a, b]$ :

$$V = \\pi \\int_a^b [f(x)]^2\\, dx$$

**Exemple :** Volume de la sphère de rayon $R$ (rotation du demi-cercle $f(x) = \\sqrt{R^2 - x^2}$) :

$$V = \\pi \\int_{-R}^{R} (R^2 - x^2)\\, dx = \\pi \\left[R^2 x - \\frac{x^3}{3}\\right]_{-R}^{R} = \\frac{4}{3}\\pi R^3$$`,
        exercises: [
          {
            id: "i3e1",
            question: "L'aire entre $f(x) = x^2$ et $g(x) = x$ sur $[0, 1]$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{6}$" },
              { id: "B", text: "$\\frac{1}{3}$" },
              { id: "C", text: "$\\frac{1}{2}$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "A",
            explanation: "Sur $[0,1]$, $g(x) = x \\geq x^2 = f(x)$. Aire $= \\int_0^1 (x - x^2)\\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
            difficulty: "intermediaire",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // L1 — Algèbre linéaire
  // ─────────────────────────────────────────────
  {
    id: "algebre-lineaire-L1",
    slug: "algebre-lineaire",
    title: "Algèbre linéaire",
    description: "Espaces vectoriels, applications linéaires, matrices et déterminants. Les fondations de toutes les mathématiques modernes.",
    schoolLevel: "L1",
    subject: "algebre",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "⊗",
    lessons: [
      {
        id: "al-1",
        slug: "espaces-vectoriels",
        title: "Espaces vectoriels",
        durationMinutes: 20,
        content: `## Espaces vectoriels

### Définition

Un **espace vectoriel** sur $\\mathbb{R}$ est un ensemble $E$ muni de deux lois :
- Addition : $E \\times E \\to E$, $(u, v) \\mapsto u + v$
- Multiplication scalaire : $\\mathbb{R} \\times E \\to E$, $(\\lambda, v) \\mapsto \\lambda v$

vérifiant 8 axiomes (associativité, commutativité, élément neutre, opposé, distributivité...).

### Exemples fondamentaux

- $\\mathbb{R}^n$ : vecteurs colonnes à $n$ composantes réelles
- $\\mathbb{R}[X]_n$ : polynômes de degré $\\leq n$
- $\\mathcal{C}([a, b])$ : fonctions continues sur $[a, b]$
- $\\mathcal{M}_{m,n}(\\mathbb{R})$ : matrices à $m$ lignes et $n$ colonnes

### Sous-espace vectoriel

$F \\subseteq E$ est un sous-espace vectoriel si :
1. $0_E \\in F$
2. $\\forall u, v \\in F,\\ u + v \\in F$
3. $\\forall \\lambda \\in \\mathbb{R},\\ \\forall u \\in F,\\ \\lambda u \\in F$`,
        exercises: [
          {
            id: "al1e1",
            question: "L'ensemble $F = \\{(x, y) \\in \\mathbb{R}^2 \\mid x + y = 0\\}$ est-il un sous-espace vectoriel de $\\mathbb{R}^2$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, car il vérifie les trois critères" },
              { id: "B", text: "Non, car il ne contient pas $(1, 1)$" },
              { id: "C", text: "Non, car $(0, 0)$ n'appartient pas à $F$" },
              { id: "D", text: "Oui, mais seulement si $x, y \\geq 0$" },
            ],
            correctId: "A",
            explanation: "1. $(0,0)$ vérifie $0+0=0$ ✓. 2. Si $x_1+y_1=0$ et $x_2+y_2=0$, alors $(x_1+x_2)+(y_1+y_2)=0$ ✓. 3. $\\lambda(x+y) = \\lambda \\cdot 0 = 0$ ✓. Donc $F$ est un s.e.v. (c'est une droite vectorielle).",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "al-2",
        slug: "matrices-et-determinants",
        title: "Matrices et déterminants",
        durationMinutes: 22,
        content: `## Matrices et déterminants

### Opérations matricielles

Le **produit** de $A \\in \\mathcal{M}_{m,p}$ et $B \\in \\mathcal{M}_{p,n}$ est $C = AB \\in \\mathcal{M}_{m,n}$ avec :

$$c_{ij} = \\sum_{k=1}^{p} a_{ik} b_{kj}$$

⚠ Le produit matriciel **n'est pas commutatif** en général : $AB \\neq BA$.

### Déterminant 2×2

$$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$

### Déterminant 3×3 (règle de Sarrus)

$$\\det \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = aei + bfg + cdh - ceg - afh - bdi$$

### Inversion

$A$ est inversible $\\iff$ $\\det(A) \\neq 0$, et alors $A^{-1} = \\dfrac{1}{\\det(A)} \\text{Com}(A)^T$.`,
        exercises: [
          {
            id: "al2e1",
            question: "Calculer $\\det\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$11$" },
              { id: "C", text: "$8$" },
              { id: "D", text: "$-1$" },
            ],
            correctId: "A",
            explanation: "$\\det = 2 \\times 4 - 3 \\times 1 = 8 - 3 = 5$",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "al-3",
        slug: "applications-lineaires",
        title: "Applications linéaires",
        durationMinutes: 18,
        content: `## Applications linéaires

### Définition

Une application $f : E \\to F$ entre deux espaces vectoriels est **linéaire** si :
$$\\forall u, v \\in E,\\ \\forall \\lambda \\in \\mathbb{R} : f(u + \\lambda v) = f(u) + \\lambda f(v)$$

### Noyau et image

$$\\ker(f) = \\{u \\in E \\mid f(u) = 0_F\\} \\qquad \\text{Im}(f) = \\{f(u) \\mid u \\in E\\}$$

Ces deux ensembles sont des sous-espaces vectoriels.

### Théorème du rang

$$\\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(E)$$

Autrement dit : **nullité + rang = dimension**.`,
        exercises: [
          {
            id: "al3e1",
            question: "Si $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ est linéaire et $\\dim(\\ker f) = 1$, que vaut $\\text{rang}(f)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "B",
            explanation: "Par le théorème du rang : $\\text{rang}(f) = \\dim(E) - \\dim(\\ker f) = 3 - 1 = 2$.",
            difficulty: "intermediaire",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // L2 — Probabilités avancées
  // ─────────────────────────────────────────────
  {
    id: "probabilites-L2",
    slug: "probabilites-avancees",
    title: "Probabilités avancées",
    description: "Variables aléatoires continues, loi normale, théorème central limite. Les fondements statistiques indispensables en L2.",
    schoolLevel: "L2",
    subject: "probabilites",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "σ",
    lessons: [
      {
        id: "prob-1",
        slug: "variables-aleatoires-continues",
        title: "Variables aléatoires continues",
        durationMinutes: 18,
        content: `## Variables aléatoires continues

### Densité de probabilité

Une variable aléatoire $X$ est **continue** s'il existe une fonction $f \\geq 0$ (densité) telle que :

$$P(a \\leq X \\leq b) = \\int_a^b f(x)\\, dx \\quad \\text{avec} \\quad \\int_{-\\infty}^{+\\infty} f(x)\\, dx = 1$$

### Espérance et variance

$$E(X) = \\int_{-\\infty}^{+\\infty} x f(x)\\, dx$$

$$V(X) = E(X^2) - [E(X)]^2 = \\int_{-\\infty}^{+\\infty} x^2 f(x)\\, dx - \\mu^2$$

### Loi normale $\\mathcal{N}(\\mu, \\sigma^2)$

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$$

Pour la loi normale **standard** $\\mathcal{N}(0, 1)$ : $\\mu = 0$, $\\sigma = 1$.`,
        exercises: [
          {
            id: "p1e1",
            question: "Si $X \\sim \\mathcal{N}(0, 1)$, quelle est la probabilité $P(-1 \\leq X \\leq 1)$ approximativement ?",
            type: "mcq",
            options: [
              { id: "A", text: "$50\\%$" },
              { id: "B", text: "$68\\%$" },
              { id: "C", text: "$95\\%$" },
              { id: "D", text: "$99\\%$" },
            ],
            correctId: "B",
            explanation: "La règle des $68$-$95$-$99.7\\%$ : $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68\\%$. Ici $\\mu = 0$, $\\sigma = 1$, donc $P(-1 \\leq X \\leq 1) \\approx 68\\%$.",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "prob-2",
        slug: "loi-des-grands-nombres",
        title: "Loi des grands nombres",
        durationMinutes: 15,
        content: `## Loi des grands nombres

### Théorème (version faible)

Soit $(X_n)$ une suite de variables aléatoires **indépendantes et identiquement distribuées** (i.i.d.) d'espérance $\\mu$. Alors :

$$\\bar{X}_n = \\frac{X_1 + X_2 + \\cdots + X_n}{n} \\xrightarrow[n \\to \\infty]{P} \\mu$$

La moyenne empirique converge en probabilité vers la vraie moyenne.

### Inégalité de Bienaymé-Chebyshev

Pour toute variable $X$ d'espérance $\\mu$ et de variance $\\sigma^2$ :

$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$`,
        exercises: [
          {
            id: "p2e1",
            question: "Par l'inégalité de Chebyshev, si $\\sigma^2 = 4$ et $\\mu = 10$, majorer $P(|X - 10| \\geq 4)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{4}$" },
              { id: "B", text: "$\\frac{1}{2}$" },
              { id: "C", text: "$\\frac{1}{16}$" },
              { id: "D", text: "$\\frac{1}{8}$" },
            ],
            correctId: "A",
            explanation: "$k = \\frac{4}{\\sigma} = \\frac{4}{2} = 2$. Donc $P(|X-10| \\geq 4) \\leq \\frac{1}{k^2} = \\frac{1}{4}$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "prob-3",
        slug: "theoreme-central-limite",
        title: "Théorème central limite",
        durationMinutes: 16,
        content: `## Théorème central limite (TCL)

### Énoncé

Soit $(X_n)$ i.i.d. avec $E(X_i) = \\mu$ et $V(X_i) = \\sigma^2 < +\\infty$. Alors :

$$\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow[n \\to \\infty]{\\mathcal{L}} \\mathcal{N}(0, 1)$$

**En pratique :** Pour $n \\geq 30$, on peut approcher $\\bar{X}_n$ par une loi normale.

### Intervalles de confiance

Pour estimer $\\mu$ avec un niveau de confiance $95\\%$ :

$$\\bar{X}_n \\pm 1.96 \\frac{\\sigma}{\\sqrt{n}}$$

*Le $1.96$ vient de la loi normale : $P(-1.96 \\leq Z \\leq 1.96) \\approx 95\\%$.*`,
        exercises: [
          {
            id: "p3e1",
            question: "On lance $n = 100$ fois un dé équilibré. L'espérance de la moyenne est $\\mu = 3.5$ et $\\sigma = \\sqrt{35/12}$. Quelle est la largeur approximative de l'IC à $95\\%$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\approx 0.34$" },
              { id: "B", text: "$\\approx 1.96$" },
              { id: "C", text: "$\\approx 0.68$" },
              { id: "D", text: "$\\approx 3.5$" },
            ],
            correctId: "C",
            explanation: "Largeur $= 2 \\times 1.96 \\times \\frac{\\sigma}{\\sqrt{n}} = 2 \\times 1.96 \\times \\frac{\\sqrt{35/12}}{10} \\approx 2 \\times 1.96 \\times 0.17 \\approx 0.68$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // 6ème — Nombres entiers et décimaux
  // ─────────────────────────────────────────────
  {
    id: "nombres-6eme",
    slug: "nombres-entiers-decimaux",
    title: "Nombres entiers et décimaux",
    description: "Maîtrisez la lecture, l'écriture et le calcul avec les grands nombres et les décimaux — la base de toutes les mathématiques au collège.",
    schoolLevel: "6eme",
    subject: "arithmetique",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🔢",
    lessons: [
      {
        id: "n6-l1",
        slug: "grands-nombres",
        title: "Lire et écrire les grands nombres",
        durationMinutes: 20,
        content: `## Introduction

Les grands nombres sont partout : la population mondiale dépasse $8\\,000\\,000\\,000$ habitants, la distance Terre-Soleil est d'environ $150\\,000\\,000$ km. Savoir les lire et les écrire est fondamental.

## Le tableau de numération

Un nombre entier se décompose en **classes de 3 chiffres** en partant de la droite :

| Classe | Centaines | Dizaines | Unités |
|--------|-----------|----------|--------|
| Milliards | Gc | Gd | Gu |
| Millions | Mc | Md | Mu |
| Milliers | kc | kd | ku |
| Unités | c | d | u |

**Exemple :** $4\\,205\\,600 \\rightarrow$ quatre millions deux cent cinq mille six cents

## Décomposer en puissances de 10

$$3\\,407\\,052 = 3 \\times 10^6 + 4 \\times 10^5 + 7 \\times 10^3 + 5 \\times 10 + 2$$

## Comparer deux entiers

> 📌 **Méthode**
> 1. Le nombre avec le **plus grand nombre de chiffres** est le plus grand.
> 2. Si même longueur : comparer **de gauche à droite** chiffre par chiffre.
> 3. S'arrêter au **premier chiffre différent**.

## Exemples

### ✅ Exemple simple — Lire $45\\,300$

$45\\,300 = 45$ milliers $+ 300$ → **quarante-cinq mille trois cents**

*Règle :* « cents » prend un « s » car il termine le nombre.

### 📘 Exemple intermédiaire — Décomposer $3\\,070\\,040$

$$3\\,070\\,040 = 3 \\times 10^6 + 7 \\times 10^4 + 4 \\times 10$$

**Lecture :** trois millions soixante-dix mille quarante

*Remarque :* les classes vides ne s'écrivent pas en lettres.

### 🔴 Exemple avancé — Ordonner trois nombres

Ordonner du plus petit au plus grand : $8\\,450\\,000$ ; $845\\,000$ ; $8\\,045\\,000$

**Étape 1 — Compter les chiffres :**
- $845\\,000$ → 6 chiffres **(le plus petit)**
- $8\\,450\\,000$ et $8\\,045\\,000$ → 7 chiffres chacun

**Étape 2 — Comparer les 7 chiffres :**
- Millions : $8 = 8$ → égaux
- Cent-milliers : $4 > 0$ → $8\\,045\\,000 < 8\\,450\\,000$

$$\\boxed{845\\,000 < 8\\,045\\,000 < 8\\,450\\,000}$$

## À retenir

- **7 chiffres** → dans les millions | **10 chiffres** → dans les milliards
- « mille » est **invariable** (jamais de « s »)
- « vingt » et « cent » prennent « s » **seulement** en fin de nombre
- On peut **décomposer** tout entier en somme de puissances de 10`,
        exercises: [
          {
            id: "n6-l1-e1",
            question: "Dans le nombre $3\\,407\\,852$, quel est le chiffre des dizaines de milliers ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$4$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$7$" },
            ],
            correctId: "C",
            explanation: "On décompose $3\\,407\\,852$ : millions (3), cent-milliers (4), **dizaines de milliers (0)**, milliers (7), centaines (8), dizaines (5), unités (2). Le chiffre des dizaines de milliers est $\\mathbf{0}$.",
            difficulty: "debutant",
          },
          {
            id: "n6-l1-e2",
            question: "$1\\,000\\,000 > 999\\,999$",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$1\\,000\\,000$ a **7 chiffres**, $999\\,999$ n'en a que **6**. Un nombre avec plus de chiffres est toujours plus grand. Affirmation **vraie**.",
            difficulty: "debutant",
          },
          {
            id: "n6-l1-e3",
            question: "Quelle est la bonne décomposition de $4\\,050\\,000$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4 \\times 10^6 + 5 \\times 10^4$" },
              { id: "B", text: "$4 \\times 10^6 + 5 \\times 10^3$" },
              { id: "C", text: "$4 \\times 10^5 + 5 \\times 10^4$" },
              { id: "D", text: "$4 \\times 10^6 + 5 \\times 10^5$" },
            ],
            correctId: "A",
            explanation: "$4\\,050\\,000 = 4\\,000\\,000 + 50\\,000 = 4 \\times 10^6 + 5 \\times 10^4$. Le $5$ est en position des dizaines de milliers ($10^4$), pas des milliers ($10^3$).",
            difficulty: "intermediaire",
          },
          {
            id: "n6-l1-e4",
            question: "Écrire en chiffres : « trois millions deux cent sept mille quatre cent cinquante ».",
            type: "open",
            modelAnswer: "$$\\mathbf{3\\,207\\,450}$$\\n\\n**Méthode étape par étape :**\\n- Trois millions → $3\\,000\\,000$\\n- Deux cent sept mille → $+207\\,000$\\n- Quatre cent cinquante → $+450$\\n\\n$$3\\,000\\,000 + 207\\,000 + 450 = 3\\,207\\,450$$",
            explanation: "On écrit classe par classe : millions (3), milliers (207), unités (450) → $3\\,207\\,450$.",
            difficulty: "intermediaire",
          },
          {
            id: "n6-l1-e5",
            question: "Ordonner du plus petit au plus grand : $5\\,020\\,000$ ; $5\\,200\\,000$ ; $502\\,000$.",
            type: "mcq",
            options: [
              { id: "A", text: "$5\\,200\\,000 < 5\\,020\\,000 < 502\\,000$" },
              { id: "B", text: "$502\\,000 < 5\\,200\\,000 < 5\\,020\\,000$" },
              { id: "C", text: "$502\\,000 < 5\\,020\\,000 < 5\\,200\\,000$" },
              { id: "D", text: "$5\\,020\\,000 < 502\\,000 < 5\\,200\\,000$" },
            ],
            correctId: "C",
            explanation: "$502\\,000$ → 6 chiffres : le plus petit. Entre $5\\,020\\,000$ et $5\\,200\\,000$ (7 chiffres), les millions sont égaux ($5$), les cent-milliers : $0 < 2$. Donc $5\\,020\\,000 < 5\\,200\\,000$. Ordre : $502\\,000 < 5\\,020\\,000 < 5\\,200\\,000$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "n6-l2",
        slug: "decimaux",
        title: "Les nombres décimaux",
        durationMinutes: 20,
        content: `## Introduction

Les nombres décimaux permettent d'exprimer des mesures précises : 1,75 m de hauteur, 0,5 L de lait, 3,99 € de prix. La virgule sépare la partie entière de la **partie décimale**.

## Structure d'un nombre décimal

$$\\underbrace{12}_{\\text{entière}},\\!\\underbrace{4}_{\\text{dix.}}\\underbrace{5}_{\\text{cent.}}\\underbrace{3}_{\\text{mill.}}$$

| Rang | Nom | Valeur |
|------|-----|--------|
| Avant la virgule | Unités, dizaines… | $1, 10, 100\\ldots$ |
| 1er après | Dixièmes | $0{,}1 = \\frac{1}{10}$ |
| 2e après | Centièmes | $0{,}01 = \\frac{1}{100}$ |
| 3e après | Millièmes | $0{,}001 = \\frac{1}{1000}$ |

## Comparer des décimaux

> 📌 **Méthode**
> 1. Comparer les **parties entières** en premier.
> 2. Si égales : comparer les **dixièmes**, puis les **centièmes**…
> 3. Ajouter des zéros à droite ne change pas la valeur : $2{,}5 = 2{,}50 = 2{,}500$.

## Exemples

### ✅ Exemple simple — Comparer $0{,}9$ et $0{,}85$

Parties entières : $0 = 0$ → égales. Dixièmes : $\\mathbf{9 > 8}$.

$$\\boxed{0{,}9 > 0{,}85}$$

### 📘 Exemple intermédiaire — Ordonner 4 décimaux

Ordonner : $0{,}5$ ; $0{,}52$ ; $0{,}509$ ; $0{,}49$

On écrit avec **3 décimales** : $0{,}500$ ; $0{,}520$ ; $0{,}509$ ; $0{,}490$

Comparer les entiers $490 < 500 < 509 < 520$ :

$$\\boxed{0{,}49 < 0{,}5 < 0{,}509 < 0{,}52}$$

### 🔴 Exemple avancé — Encadrer au centième

Encadrer $3{,}527$ entre deux décimaux consécutifs au centième.

Le centième avant : $3{,}52$. Le centième après : $3{,}53$.

$$\\boxed{3{,}52 < 3{,}527 < 3{,}53}$$

*Méthode : on garde les deux premiers chiffres après la virgule et on ajoute/enlève 1 au centième.*

## À retenir

- On peut **ajouter des zéros à droite** sans changer un décimal
- **Aligner les virgules** pour comparer et calculer
- Attention : $0{,}1 > 0{,}09$ car dixièmes $1 > 0$ (même si $1 < 9$ !)`,
        exercises: [
          {
            id: "n6-l2-e1",
            question: "Dans le nombre $12{,}45$, le chiffre $4$ est en position…",
            type: "mcq",
            options: [
              { id: "A", text: "Unités" },
              { id: "B", text: "Dixièmes" },
              { id: "C", text: "Centièmes" },
              { id: "D", text: "Dizaines" },
            ],
            correctId: "B",
            explanation: "Dans $12{,}45$ : partie entière $= 12$. Après la virgule : $4$ est en position des **dixièmes** (valeur $4 \\times 0{,}1 = 0{,}4$), et $5$ est en centièmes.",
            difficulty: "debutant",
          },
          {
            id: "n6-l2-e2",
            question: "$0{,}9 > 0{,}85$",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$0{,}9 = 0{,}90$. Comparer $0{,}90$ et $0{,}85$ : dixièmes $9 > 8$. Donc $0{,}9 > 0{,}85$. Affirmation **vraie**.",
            difficulty: "debutant",
          },
          {
            id: "n6-l2-e3",
            question: "Quel nombre se trouve entre $2{,}3$ et $2{,}4$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$2{,}04$" },
              { id: "B", text: "$2{,}35$" },
              { id: "C", text: "$2{,}41$" },
              { id: "D", text: "$2{,}30$" },
            ],
            correctId: "B",
            explanation: "On cherche $x$ tel que $2{,}3 < x < 2{,}4$. $2{,}35$ vérifie : $2{,}30 < 2{,}35 < 2{,}40$. Les autres : $2{,}04 < 2{,}3$ ; $2{,}41 > 2{,}4$ ; $2{,}30 = 2{,}3$.",
            difficulty: "intermediaire",
          },
          {
            id: "n6-l2-e4",
            question: "Ordonner du plus petit au plus grand : $0{,}5$ ; $0{,}52$ ; $0{,}509$ ; $0{,}49$",
            type: "open",
            modelAnswer: "$$\\boxed{0{,}49 < 0{,}5 < 0{,}509 < 0{,}52}$$\\n\\n**Méthode :** On ajoute des zéros pour avoir 3 décimales :\\n$$0{,}490 \\quad 0{,}500 \\quad 0{,}509 \\quad 0{,}520$$\\n\\nOn compare : $490 < 500 < 509 < 520$, d'où l'ordre.",
            explanation: "En écrivant tous avec 3 décimales : $490 < 500 < 509 < 520$.",
            difficulty: "intermediaire",
          },
          {
            id: "n6-l2-e5",
            question: "Quelle est la valeur du chiffre $5$ dans $3{,}5204$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}5$ (5 dixièmes)" },
              { id: "B", text: "$0{,}05$ (5 centièmes)" },
              { id: "C", text: "$5$ (5 unités)" },
              { id: "D", text: "$0{,}005$ (5 millièmes)" },
            ],
            correctId: "A",
            explanation: "Dans $3{,}5204$, le premier chiffre après la virgule est en position des **dixièmes**. Sa valeur est $5 \\times \\frac{1}{10} = 0{,}5$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "n6-l3",
        slug: "operations-decimaux",
        title: "Opérations sur les décimaux",
        durationMinutes: 25,
        content: `## Introduction

Calculer avec des décimaux est indispensable pour la vie quotidienne : prix, distances, recettes. Deux règles d'or : **aligner les virgules** pour + et −, **compter les décimales** pour ×.

## Addition et soustraction

> 📌 **Méthode**
> 1. Écrire en colonne avec les **virgules alignées**.
> 2. Compléter avec des **zéros** si nécessaire.
> 3. Calculer comme pour les entiers, puis **replacer la virgule**.

$$\\begin{array}{r} 14{,}30 \\\\ +\\; 5{,}75 \\\\ \\hline 20{,}05 \\end{array}$$

## Multiplication

> 📌 **Méthode**
> 1. Calculer sans les virgules.
> 2. Compter le **total de chiffres après virgule** des deux facteurs.
> 3. Placer la virgule dans le résultat en comptant depuis la droite.

**Exemple :** $2{,}3 \\times 1{,}4$
- $23 \\times 14 = 322$
- Total décimales : $1 + 1 = 2$
- Résultat : $3{,}22$

## Division par un décimal

Transformer en division par un **entier** :

$$6{,}3 \\div 0{,}9 \\;\\xrightarrow{\\times 10}\\; 63 \\div 9 = 7$$

## Exemples

### ✅ Exemple simple — $12{,}4 + 3{,}6$

Dixièmes : $4 + 6 = 10$ → on pose $0$, on retient $1$.
Unités : $2 + 3 + 1 = 6$. Dizaines : $1$.

$$\\boxed{12{,}4 + 3{,}6 = 16}$$

### 📘 Exemple intermédiaire — Problème d'achat

Théo achète 4 articles à $3{,}75$€ avec une remise de $2{,}00$€.

**Étape 1 :** $4 \\times 3{,}75 = 15{,}00$€

*($375 \\times 4 = 1500$, puis 2 décimales → $15{,}00$)*

**Étape 2 :** $15{,}00 - 2{,}00 = \\boxed{13{,}00\\text{ €}}$

### 🔴 Exemple avancé — $45{,}2 - 18{,}75$

$$\\begin{array}{r} 45{,}20 \\\\ -\\;18{,}75 \\\\ \\hline 26{,}45 \\end{array}$$

*On complète $45{,}2$ en $45{,}20$ pour avoir le même nombre de décimales.*

## À retenir

- **Toujours aligner les virgules** pour + et −
- Pour × : compter le **total de décimales** puis placer la virgule
- Pour ÷ un décimal : **× les deux termes** pour rendre le diviseur entier`,
        exercises: [
          {
            id: "n6-l3-e1",
            question: "$12{,}4 + 3{,}6 = ?$",
            type: "mcq",
            options: [
              { id: "A", text: "$15{,}10$" },
              { id: "B", text: "$15{,}4$" },
              { id: "C", text: "$16$" },
              { id: "D", text: "$16{,}1$" },
            ],
            correctId: "C",
            explanation: "Dixièmes : $4 + 6 = 10$, on pose $0$ et on retient $1$. Unités : $2 + 3 + 1 = 6$. Dizaines : $1$. Résultat : $\\mathbf{16{,}0 = 16}$.",
            difficulty: "debutant",
          },
          {
            id: "n6-l3-e2",
            question: "$2{,}5 \\times 4 = 10$",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$2{,}5 \\times 4 = 25 \\times 4 \\div 10 = 100 \\div 10 = 10$. Ou : $2 \\times 4 + 0{,}5 \\times 4 = 8 + 2 = 10$. **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "n6-l3-e3",
            question: "$45{,}2 - 18{,}75 = ?$",
            type: "mcq",
            options: [
              { id: "A", text: "$26{,}55$" },
              { id: "B", text: "$26{,}45$" },
              { id: "C", text: "$27{,}45$" },
              { id: "D", text: "$26{,}35$" },
            ],
            correctId: "B",
            explanation: "$45{,}2 = 45{,}20$. Calcul en colonne : $4520 - 1875 = 2645$. Il y avait 2 décimales → $\\mathbf{26{,}45}$.",
            difficulty: "intermediaire",
          },
          {
            id: "n6-l3-e4",
            question: "Un commerçant vend 4 articles à 3,75 € chacun avec une remise de 2,00 €. Quel est le total à payer ?",
            type: "open",
            modelAnswer: "$$4 \\times 3{,}75 - 2{,}00 = 15{,}00 - 2{,}00 = \\boxed{13{,}00\\text{ €}}$$\\n\\n**Étape 1 :** $4 \\times 375 = 1500 \\Rightarrow 4 \\times 3{,}75 = 15{,}00$ €\\n**Étape 2 :** $15{,}00 - 2{,}00 = 13{,}00$ €",
            explanation: "$4 \\times 3{,}75 = 15$ €, puis $15 - 2 = 13$ €.",
            difficulty: "intermediaire",
          },
          {
            id: "n6-l3-e5",
            question: "$6{,}3 \\div 0{,}9 = ?$",
            type: "mcq",
            options: [
              { id: "A", text: "$7$" },
              { id: "B", text: "$0{,}7$" },
              { id: "C", text: "$70$" },
              { id: "D", text: "$0{,}07$" },
            ],
            correctId: "A",
            explanation: "On multiplie les deux termes par $10$ : $6{,}3 \\div 0{,}9 = 63 \\div 9 = 7$. Vérif : $7 \\times 0{,}9 = 6{,}3$ ✓",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // 6ème — Les Fractions
  // ─────────────────────────────────────────────
  {
    id: "fractions-6eme",
    slug: "fractions-6eme",
    title: "Les Fractions",
    description: "Comprenez les fractions de A à Z : écriture, comparaison, fractions équivalentes et passage aux décimaux. Un chapitre clé pour le collège.",
    schoolLevel: "6eme",
    subject: "arithmetique",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "½",
    lessons: [
      {
        id: "f6-l1",
        slug: "intro-fractions",
        title: "Qu'est-ce qu'une fraction ?",
        durationMinutes: 20,
        content: `## Introduction

Une fraction représente une **partie d'un tout**. Si on coupe une pizza en 4 parts égales et qu'on en mange 3, on a mangé $\\frac{3}{4}$ de la pizza.

## Vocabulaire essentiel

$$\\frac{\\overbrace{3}^{\\text{numérateur}}}{\\underbrace{4}_{\\text{dénominateur}}}$$

- **Numérateur** (en haut) : nombre de parts **prises**
- **Dénominateur** (en bas) : nombre de parts **totales**

> ⚠️ Le dénominateur ne peut **jamais** être nul !

## Fractions équivalentes

Deux fractions sont équivalentes si elles représentent **la même quantité** :

$$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$$

> 📌 **Méthode — Trouver une fraction équivalente**
> Multiplier (ou diviser) le numérateur **et** le dénominateur par le **même entier non nul**.

$$\\frac{2}{3} \\xrightarrow{\\times 4} \\frac{8}{12} \\qquad \\frac{6}{9} \\xrightarrow{\\div 3} \\frac{2}{3}$$

## Simplifier une fraction

> 📌 **Méthode — Simplifier**
> Diviser le numérateur et le dénominateur par leur **PGCD** (Plus Grand Commun Diviseur).

$$\\frac{36}{48} \\xrightarrow{\\div 12} \\frac{3}{4} \\quad \\text{car}\\; \\text{PGCD}(36, 48) = 12$$

## Exemples

### ✅ Exemple simple — Lire une fraction

$\\frac{3}{8}$ → **trois huitièmes** → 3 parties sur 8 parts égales.

### 📘 Exemple intermédiaire — Fractions équivalentes

Montrer que $\\frac{4}{6} = \\frac{2}{3}$ :

$$\\frac{4}{6} \\xrightarrow{\\div 2} \\frac{2}{3} \\checkmark$$

Ou montrer que $\\frac{2}{3} = \\frac{10}{15}$ :

$$\\frac{2}{3} \\xrightarrow{\\times 5} \\frac{10}{15} \\checkmark$$

### 🔴 Exemple avancé — Simplifier $\\frac{36}{48}$

**Étape 1 — PGCD(36, 48) :**
- $36 = 2^2 \\times 3^2$
- $48 = 2^4 \\times 3$
- $\\text{PGCD} = 2^2 \\times 3 = 12$

**Étape 2 :**
$$\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}$$

$$\\boxed{\\frac{36}{48} = \\frac{3}{4}}$$

## À retenir

- **Numérateur** = parts prises | **Dénominateur** = parts totales
- On obtient une fraction équivalente en **× ou ÷ par le même nombre**
- La fraction est **irréductible** quand on ne peut plus la simplifier`,
        exercises: [
          {
            id: "f6-l1-e1",
            question: "Dans la fraction $\\frac{5}{9}$, quel est le dénominateur ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$9$" },
              { id: "C", text: "$\\frac{5}{9}$" },
              { id: "D", text: "$45$" },
            ],
            correctId: "B",
            explanation: "Dans $\\frac{5}{9}$ : $5$ est le **numérateur** (en haut) et $\\mathbf{9}$ est le **dénominateur** (en bas). Le dénominateur indique le nombre de parties égales en tout.",
            difficulty: "debutant",
          },
          {
            id: "f6-l1-e2",
            question: "$\\frac{1}{2} = \\frac{2}{4}$",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$\\frac{1}{2} \\xrightarrow{\\times 2} \\frac{2}{4}$. En multipliant numérateur et dénominateur par $2$, on obtient une fraction équivalente. **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "f6-l1-e3",
            question: "Laquelle de ces fractions est équivalente à $\\frac{3}{4}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{6}{7}$" },
              { id: "B", text: "$\\frac{9}{12}$" },
              { id: "C", text: "$\\frac{6}{9}$" },
              { id: "D", text: "$\\frac{4}{5}$" },
            ],
            correctId: "B",
            explanation: "$\\frac{3}{4} \\xrightarrow{\\times 3} \\frac{9}{12}$. Vérif : $\\frac{9}{12} \\div 3 = \\frac{3}{4}$. Les autres : $\\frac{6}{7}$ (numérateur $\\times 2$, dénom $\\times 7/4$ ≠ entier), $\\frac{6}{9} = \\frac{2}{3} \\neq \\frac{3}{4}$.",
            difficulty: "intermediaire",
          },
          {
            id: "f6-l1-e4",
            question: "Donne trois fractions équivalentes à $\\frac{2}{5}$.",
            type: "open",
            modelAnswer: "$$\\frac{2}{5} = \\frac{4}{10} = \\frac{6}{15} = \\frac{8}{20}$$\\n\\n**Méthode :** On multiplie numérateur et dénominateur par $2$, $3$, $4$... :\\n$$\\frac{2}{5} \\xrightarrow{\\times 2} \\frac{4}{10} \\xrightarrow{\\times 3} \\frac{6}{15} \\xrightarrow{\\times 4} \\frac{8}{20}$$\\n\\nTous ces résultats sont valides.",
            explanation: "En multipliant par 2, 3, 4 : $\\frac{4}{10}$, $\\frac{6}{15}$, $\\frac{8}{20}$.",
            difficulty: "intermediaire",
          },
          {
            id: "f6-l1-e5",
            question: "Quelle est la forme simplifiée de $\\frac{36}{48}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{6}{8}$" },
              { id: "B", text: "$\\frac{9}{12}$" },
              { id: "C", text: "$\\frac{3}{4}$" },
              { id: "D", text: "$\\frac{18}{24}$" },
            ],
            correctId: "C",
            explanation: "$\\text{PGCD}(36, 48) = 12$. Donc $\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}$. C'est la forme **irréductible** car $\\text{PGCD}(3, 4) = 1$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "f6-l2",
        slug: "comparer-fractions",
        title: "Comparer et ordonner les fractions",
        durationMinutes: 22,
        content: `## Introduction

Lequel est plus grand : $\\frac{3}{4}$ ou $\\frac{5}{6}$ ? Pour comparer des fractions, on utilise plusieurs techniques selon les cas.

## Cas 1 — Même dénominateur

Si deux fractions ont le **même dénominateur**, on compare directement les **numérateurs**.

$$\\frac{3}{8} < \\frac{5}{8} \\quad \\text{car} \\quad 3 < 5$$

## Cas 2 — Dénominateurs différents

> 📌 **Méthode — Réduire au même dénominateur**
> 1. Trouver le **PPCM** des dénominateurs (plus petit commun multiple).
> 2. Transformer chaque fraction en **fraction équivalente** avec ce dénominateur.
> 3. Comparer les numérateurs.

**Exemple :** Comparer $\\frac{3}{4}$ et $\\frac{5}{6}$

$\\text{PPCM}(4, 6) = 12$

$$\\frac{3}{4} = \\frac{9}{12} \\qquad \\frac{5}{6} = \\frac{10}{12}$$

$$9 < 10 \\implies \\frac{3}{4} < \\frac{5}{6}$$

## Comparer avec des repères

**Repères utiles :** $0$, $\\frac{1}{2}$, $1$

$$\\frac{2}{3} > \\frac{1}{2} \\quad \\text{car} \\quad \\frac{2}{3} = \\frac{4}{6} > \\frac{3}{6} = \\frac{1}{2}$$

## Exemples

### ✅ Exemple simple — Même dénominateur

$\\frac{7}{12}$ et $\\frac{5}{12}$ : $7 > 5$ donc $\\frac{7}{12} > \\frac{5}{12}$.

### 📘 Exemple intermédiaire — Comparer $\\frac{2}{3}$ et $\\frac{3}{5}$

$\\text{PPCM}(3,5) = 15$

$$\\frac{2}{3} = \\frac{10}{15} \\quad ; \\quad \\frac{3}{5} = \\frac{9}{15}$$

$$10 > 9 \\implies \\boxed{\\frac{2}{3} > \\frac{3}{5}}$$

### 🔴 Exemple avancé — Ordonner 4 fractions

Ordonner : $\\frac{1}{2}$, $\\frac{2}{3}$, $\\frac{3}{4}$, $\\frac{5}{6}$

$\\text{PPCM}(2,3,4,6) = 12$

$$\\frac{6}{12} \\quad \\frac{8}{12} \\quad \\frac{9}{12} \\quad \\frac{10}{12}$$

$$\\boxed{\\frac{1}{2} < \\frac{2}{3} < \\frac{3}{4} < \\frac{5}{6}}$$

## À retenir

- **Même dénominateur** → comparer les numérateurs directement
- **Dénominateurs différents** → réduire au même dénominateur (PPCM)
- Utiliser $\\frac{1}{2}$ comme **repère** pour localiser rapidement une fraction`,
        exercises: [
          {
            id: "f6-l2-e1",
            question: "Laquelle de ces fractions est la plus grande ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{3}{11}$" },
              { id: "B", text: "$\\frac{7}{11}$" },
              { id: "C", text: "$\\frac{5}{11}$" },
              { id: "D", text: "$\\frac{2}{11}$" },
            ],
            correctId: "B",
            explanation: "Même dénominateur ($11$) : on compare les numérateurs $3$, $7$, $5$, $2$. Le plus grand est $\\mathbf{7}$, donc $\\frac{7}{11}$ est la plus grande.",
            difficulty: "debutant",
          },
          {
            id: "f6-l2-e2",
            question: "$\\frac{2}{3} > \\frac{1}{2}$",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$\\text{PPCM}(3,2) = 6$ : $\\frac{2}{3} = \\frac{4}{6}$ et $\\frac{1}{2} = \\frac{3}{6}$. Puisque $4 > 3$, on a $\\frac{2}{3} > \\frac{1}{2}$. **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "f6-l2-e3",
            question: "Comparer $\\frac{3}{4}$ et $\\frac{5}{6}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{3}{4} > \\frac{5}{6}$" },
              { id: "B", text: "$\\frac{3}{4} < \\frac{5}{6}$" },
              { id: "C", text: "$\\frac{3}{4} = \\frac{5}{6}$" },
              { id: "D", text: "Impossible à comparer" },
            ],
            correctId: "B",
            explanation: "$\\text{PPCM}(4,6) = 12$. $\\frac{3}{4} = \\frac{9}{12}$ et $\\frac{5}{6} = \\frac{10}{12}$. Puisque $9 < 10$, on a $\\frac{3}{4} < \\frac{5}{6}$.",
            difficulty: "intermediaire",
          },
          {
            id: "f6-l2-e4",
            question: "Ranger dans l'ordre croissant : $\\frac{1}{2}$, $\\frac{2}{3}$, $\\frac{3}{4}$, $\\frac{5}{6}$.",
            type: "open",
            modelAnswer: "$$\\boxed{\\frac{1}{2} < \\frac{2}{3} < \\frac{3}{4} < \\frac{5}{6}}$$\\n\\n**Méthode :** PPCM$(2,3,4,6) = 12$\\n$$\\frac{1}{2} = \\frac{6}{12} \\quad \\frac{2}{3} = \\frac{8}{12} \\quad \\frac{3}{4} = \\frac{9}{12} \\quad \\frac{5}{6} = \\frac{10}{12}$$\\n$$6 < 8 < 9 < 10 \\implies \\frac{1}{2} < \\frac{2}{3} < \\frac{3}{4} < \\frac{5}{6}$$",
            explanation: "PPCM = 12. Numérateurs : 6, 8, 9, 10 → ordre croissant.",
            difficulty: "intermediaire",
          },
          {
            id: "f6-l2-e5",
            question: "Ordonner : $\\frac{7}{12}$, $\\frac{5}{8}$, $\\frac{2}{3}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{7}{12} < \\frac{2}{3} < \\frac{5}{8}$" },
              { id: "B", text: "$\\frac{2}{3} < \\frac{7}{12} < \\frac{5}{8}$" },
              { id: "C", text: "$\\frac{5}{8} < \\frac{2}{3} < \\frac{7}{12}$" },
              { id: "D", text: "$\\frac{7}{12} < \\frac{5}{8} < \\frac{2}{3}$" },
            ],
            correctId: "A",
            explanation: "$\\text{PPCM}(12,8,3) = 24$. $\\frac{7}{12} = \\frac{14}{24}$, $\\frac{5}{8} = \\frac{15}{24}$, $\\frac{2}{3} = \\frac{16}{24}$. Ordre : $14 < 15 < 16$ donc $\\frac{7}{12} < \\frac{5}{8} < \\frac{2}{3}$. *Attention à l'option A : elle dit $\\frac{7}{12} < \\frac{2}{3} < \\frac{5}{8}$, ce n'est pas l'ordre correct.* La bonne réponse est $\\frac{7}{12} < \\frac{5}{8} < \\frac{2}{3}$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "f6-l3",
        slug: "fractions-decimaux",
        title: "Fractions et nombres décimaux",
        durationMinutes: 20,
        content: `## Introduction

Toute fraction peut s'écrire sous forme décimale, et réciproquement. Cette conversion est utile pour comparer, calculer et interpréter des résultats.

## Convertir une fraction en décimal

> 📌 **Méthode**
> Effectuer la **division** du numérateur par le dénominateur.

$$\\frac{3}{4} = 3 \\div 4 = 0{,}75$$

## Fractions usuelles à connaître

| Fraction | Décimal | Pourcentage |
|----------|---------|-------------|
| $\\frac{1}{2}$ | $0{,}5$ | $50\\%$ |
| $\\frac{1}{4}$ | $0{,}25$ | $25\\%$ |
| $\\frac{3}{4}$ | $0{,}75$ | $75\\%$ |
| $\\frac{1}{5}$ | $0{,}2$ | $20\\%$ |
| $\\frac{1}{10}$ | $0{,}1$ | $10\\%$ |
| $\\frac{1}{8}$ | $0{,}125$ | $12{,}5\\%$ |

## Convertir un décimal en fraction

> 📌 **Méthode**
> 1. Écrire le décimal sous la forme $\\frac{\\text{décimal} \\times 10^n}{10^n}$ où $n$ = nombre de décimales.
> 2. Simplifier la fraction obtenue.

$$0{,}625 = \\frac{625}{1000} \\xrightarrow{\\div 125} \\frac{5}{8}$$

## Décimaux finis et infinis

Certaines fractions donnent un décimal **fini** : $\\frac{3}{4} = 0{,}75$

D'autres donnent un décimal **infini périodique** : $\\frac{1}{3} = 0{,}333\\ldots = 0{,}\\overline{3}$

> Une fraction $\\frac{p}{q}$ donne un décimal fini **si et seulement si** $q$ ne contient que des facteurs $2$ et $5$.

## Exemples

### ✅ Exemple simple — $\\frac{7}{10}$

$$\\frac{7}{10} = 7 \\div 10 = \\boxed{0{,}7}$$

### 📘 Exemple intermédiaire — $\\frac{7}{20}$

$$\\frac{7}{20} = \\frac{7 \\times 5}{20 \\times 5} = \\frac{35}{100} = \\boxed{0{,}35}$$

### 🔴 Exemple avancé — $\\frac{1}{3}$ est-il un décimal fini ?

$3 = 3$ (facteur premier $3$, ni $2$ ni $5$) → décimal **infini** :

$$\\frac{1}{3} = 0{,}333\\ldots = 0{,}\\overline{3}$$

En revanche $\\frac{3}{8}$ : $8 = 2^3$ → décimal fini :

$$\\frac{3}{8} = 0{,}375$$

## À retenir

- Fraction → décimal : effectuer la **division**
- Décimal fini → fraction : **numérateur = partie décimale**, **dénominateur = puissance de 10**
- Simplifier jusqu'à la forme **irréductible**`,
        exercises: [
          {
            id: "f6-l3-e1",
            question: "$\\frac{1}{4}$ en écriture décimale donne…",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}14$" },
              { id: "B", text: "$0{,}4$" },
              { id: "C", text: "$0{,}25$" },
              { id: "D", text: "$0{,}50$" },
            ],
            correctId: "C",
            explanation: "$\\frac{1}{4} = 1 \\div 4 = 0{,}25$. Ou : $\\frac{1}{4} = \\frac{25}{100} = 0{,}25$. C'est une fraction usuelle à mémoriser.",
            difficulty: "debutant",
          },
          {
            id: "f6-l3-e2",
            question: "$0{,}75 = \\frac{3}{4}$",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$0{,}75 = \\frac{75}{100} = \\frac{3}{4}$ (en divisant par 25). Ou : $\\frac{3}{4} = 3 \\div 4 = 0{,}75$. **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "f6-l3-e3",
            question: "Convertir $\\frac{7}{20}$ en décimal.",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}7$" },
              { id: "B", text: "$0{,}35$" },
              { id: "C", text: "$3{,}5$" },
              { id: "D", text: "$0{,}72$" },
            ],
            correctId: "B",
            explanation: "$\\frac{7}{20} = \\frac{7 \\times 5}{20 \\times 5} = \\frac{35}{100} = 0{,}35$. Ou : $7 \\div 20 = 0{,}35$.",
            difficulty: "intermediaire",
          },
          {
            id: "f6-l3-e4",
            question: "Écrire $0{,}625$ sous forme de fraction irréductible.",
            type: "open",
            modelAnswer: "$$0{,}625 = \\frac{625}{1000} \\xrightarrow{\\div 125} \\frac{5}{8}$$\\n\\n**Méthode :**\\n- $3$ décimales → dénominateur $= 1000$\\n- $\\text{PGCD}(625, 1000) = 125$\\n- $\\frac{625 \\div 125}{1000 \\div 125} = \\boxed{\\frac{5}{8}}$\\n\\n**Vérif :** $5 \\div 8 = 0{,}625$ ✓",
            explanation: "$0{,}625 = \\frac{625}{1000} = \\frac{5}{8}$ après simplification par 125.",
            difficulty: "intermediaire",
          },
          {
            id: "f6-l3-e5",
            question: "Laquelle de ces fractions donne un décimal **fini** ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{3}$" },
              { id: "B", text: "$\\frac{3}{8}$" },
              { id: "C", text: "$\\frac{2}{7}$" },
              { id: "D", text: "$\\frac{1}{6}$" },
            ],
            correctId: "B",
            explanation: "Un décimal est fini si le dénominateur (simplifié) ne contient que les facteurs $2$ et $5$. $8 = 2^3$ ✓ → $\\frac{3}{8} = 0{,}375$ (fini). Les autres : $3$, $7$, $6 = 2 \\times 3$ contiennent d'autres facteurs → décimaux infinis.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // 6ème — Géométrie plane
  // ─────────────────────────────────────────────
  {
    id: "geometrie-6eme",
    slug: "geometrie-plane-6eme",
    title: "Géométrie plane",
    description: "Explorez les figures géométriques fondamentales : droites, angles, triangles, quadrilatères et calculs de périmètre et d'aire.",
    schoolLevel: "6eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "📐",
    lessons: [
      {
        id: "g6-l1",
        slug: "droites-angles",
        title: "Droites, segments et angles",
        durationMinutes: 22,
        content: `## Introduction

La géométrie commence par les objets les plus simples : points, droites et angles. Ces notions de base serviront dans toute la géométrie du collège et du lycée.

## Points et droites

- Un **point** est une position dans le plan, noté par une lettre majuscule : $A$, $B$, $C$...
- Une **droite** est infinie dans les deux sens, notée $(AB)$ ou $(d)$.
- Un **segment** $[AB]$ a deux extrémités $A$ et $B$.
- Une **demi-droite** $[AB)$ part de $A$ et passe par $B$ indéfiniment.

## Positions relatives de deux droites

| Situation | Description |
|-----------|-------------|
| **Sécantes** | Deux droites qui se coupent en un point |
| **Perpendiculaires** | Sécantes formant un angle de $90°$ |
| **Parallèles** | Droites ne se coupant jamais ($\\parallel$) |

## Les angles

Un **angle** est formé par deux demi-droites ayant la même origine (le **sommet**).

| Nom | Mesure |
|-----|--------|
| Nul | $0°$ |
| **Aigu** | $0° < \\alpha < 90°$ |
| **Droit** | $\\alpha = 90°$ |
| **Obtus** | $90° < \\alpha < 180°$ |
| **Plat** | $\\alpha = 180°$ |
| **Rentrant** | $180° < \\alpha < 360°$ |
| Plein | $\\alpha = 360°$ |

> 📌 **Méthode — Mesurer un angle au rapporteur**
> 1. Placer le **centre** du rapporteur sur le sommet de l'angle.
> 2. Aligner le **zéro** avec l'un des côtés.
> 3. Lire la mesure là où l'autre côté **croise** le rapporteur.

## Angles complémentaires et supplémentaires

- **Complémentaires** : somme $= 90°$ → $\\alpha + \\beta = 90°$
- **Supplémentaires** : somme $= 180°$ → $\\alpha + \\beta = 180°$

## Exemples

### ✅ Exemple simple — Identifier un angle

Un angle de $65°$ est **aigu** car $0° < 65° < 90°$.

### 📘 Exemple intermédiaire — Angle complémentaire

Si $\\alpha = 35°$, son complémentaire $\\beta = 90° - 35° = 55°$.

### 🔴 Exemple avancé — Angles formés par deux droites perpendiculaires

Deux droites perpendiculaires se coupent et forment **4 angles droits** de $90°$ chacun.

Somme des 4 angles : $4 \\times 90° = 360°$ (angle plein) ✓

Si on sait qu'un angle vaut $\\theta$, les angles **opposés par le sommet** valent aussi $\\theta$, et les angles **adjacents** valent $180° - \\theta$.

## À retenir

- Droites **perpendiculaires** → angle de $90°$
- Droites **parallèles** → ne se coupent jamais
- **Aigu** $< 90°$ | **Droit** $= 90°$ | **Obtus** entre $90°$ et $180°$
- Angles **complémentaires** → somme $90°$ | **supplémentaires** → somme $180°$`,
        exercises: [
          {
            id: "g6-l1-e1",
            question: "Un angle de $90°$ s'appelle…",
            type: "mcq",
            options: [
              { id: "A", text: "Aigu" },
              { id: "B", text: "Droit" },
              { id: "C", text: "Obtus" },
              { id: "D", text: "Plat" },
            ],
            correctId: "B",
            explanation: "Par définition, un angle de $90°$ est un **angle droit**. C'est le cas lorsque deux droites sont perpendiculaires.",
            difficulty: "debutant",
          },
          {
            id: "g6-l1-e2",
            question: "Deux droites parallèles ne se croisent jamais.",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "Par définition, deux droites **parallèles** sont dans le même plan et n'ont **aucun point commun** : elles ne se croisent jamais. **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "g6-l1-e3",
            question: "Un angle obtus est un angle…",
            type: "mcq",
            options: [
              { id: "A", text: "Inférieur à $90°$" },
              { id: "B", text: "Égal à $90°$" },
              { id: "C", text: "Compris entre $90°$ et $180°$" },
              { id: "D", text: "Égal à $180°$" },
            ],
            correctId: "C",
            explanation: "Un angle **obtus** vérifie $90° < \\alpha < 180°$. En dessous de $90°$ : aigu. Égal à $90°$ : droit. Égal à $180°$ : plat.",
            difficulty: "intermediaire",
          },
          {
            id: "g6-l1-e4",
            question: "Cite les 4 types d'angles principaux, leurs mesures et donne un exemple concret pour chacun.",
            type: "open",
            modelAnswer: "| Type | Mesure | Exemple |\\n|------|--------|---------|\\n| **Aigu** | $0° < \\alpha < 90°$ | Pointe d'un crayon (~$30°$) |\\n| **Droit** | $\\alpha = 90°$ | Coin d'une feuille |\\n| **Obtus** | $90° < \\alpha < 180°$ | Ouverture d'une porte (~$120°$) |\\n| **Plat** | $\\alpha = 180°$ | Une droite (angle formé par les deux demi-droites opposées) |",
            explanation: "Les 4 types : aigu (<90°), droit (=90°), obtus (90°-180°), plat (=180°).",
            difficulty: "intermediaire",
          },
          {
            id: "g6-l1-e5",
            question: "Deux droites perpendiculaires se coupent. Les quatre angles formés sont tous égaux à…",
            type: "mcq",
            options: [
              { id: "A", text: "$90°$" },
              { id: "B", text: "$45°$" },
              { id: "C", text: "$180°$" },
              { id: "D", text: "$360°$" },
            ],
            correctId: "A",
            explanation: "Deux droites **perpendiculaires** forment par définition des angles de $90°$. Les quatre angles sont tous droits : $4 \\times 90° = 360°$ (angle plein) ✓",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "g6-l2",
        slug: "triangles-quadrilateres",
        title: "Triangles et quadrilatères",
        durationMinutes: 25,
        content: `## Introduction

Les triangles et quadrilatères sont les figures planes les plus courantes. On les retrouve dans l'architecture, l'art et la nature. Connaître leurs propriétés permet de résoudre de nombreux problèmes.

## Les triangles

Un triangle possède **3 côtés** et **3 angles**. Propriété fondamentale :

$$\\boxed{\\text{Somme des angles d'un triangle} = 180°}$$

| Type | Propriété |
|------|-----------|
| **Quelconque** | Aucune propriété particulière |
| **Isocèle** | 2 côtés égaux, 2 angles à la base égaux |
| **Équilatéral** | 3 côtés égaux, 3 angles de $60°$ |
| **Rectangle** | 1 angle droit ($90°$) |

## Les quadrilatères

| Quadrilatère | Propriétés clés |
|--------------|-----------------|
| **Carré** | 4 côtés égaux, 4 angles droits |
| **Rectangle** | 4 angles droits, côtés opposés égaux |
| **Losange** | 4 côtés égaux, angles opposés égaux |
| **Parallélogramme** | Côtés opposés parallèles et égaux |
| **Trapèze** | 1 paire de côtés parallèles |

> 🔑 **Hiérarchie :** Un carré est un rectangle **et** un losange particulier.

## Propriétés des diagonales

| Figure | Diagonales |
|--------|------------|
| Rectangle | Égales |
| Losange | Perpendiculaires |
| **Carré** | Égales **et** perpendiculaires |

## Exemples

### ✅ Exemple simple — Trouver un angle manquant

Triangle avec angles $50°$ et $70°$. Troisième angle ?

$$\\alpha = 180° - 50° - 70° = \\boxed{60°}$$

### 📘 Exemple intermédiaire — Triangle isocèle

Triangle isocèle avec angle au sommet $= 40°$.

Les deux angles à la base sont égaux :

$$\\alpha = \\frac{180° - 40°}{2} = \\frac{140°}{2} = \\boxed{70°}$$

### 🔴 Exemple avancé — Identifier un quadrilatère

Un quadrilatère a ses diagonales qui sont perpendiculaires ET égales. Quel est-il ?

- Diagonales égales → rectangle ou carré
- Diagonales perpendiculaires → losange ou carré
- Les deux → **carré** !

## À retenir

- Somme des angles d'un **triangle** : $180°$
- Triangle **isocèle** : 2 côtés et 2 angles égaux
- Triangle **équilatéral** : 3 angles de $60°$
- **Carré** = rectangle + losange (le plus spécial !)`,
        exercises: [
          {
            id: "g6-l2-e1",
            question: "La somme des angles d'un triangle est…",
            type: "mcq",
            options: [
              { id: "A", text: "$90°$" },
              { id: "B", text: "$270°$" },
              { id: "C", text: "$180°$" },
              { id: "D", text: "$360°$" },
            ],
            correctId: "C",
            explanation: "La somme des trois angles intérieurs d'un triangle est **toujours** $\\mathbf{180°}$. C'est une propriété fondamentale valable pour tout triangle.",
            difficulty: "debutant",
          },
          {
            id: "g6-l2-e2",
            question: "Un carré est un rectangle particulier.",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "Un rectangle a 4 angles droits et des côtés opposés égaux. Un carré vérifie tout cela **et** a ses 4 côtés égaux. Donc un carré est bien un rectangle particulier. **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "g6-l2-e3",
            question: "Dans un triangle isocèle, les deux angles de la base valent $65°$. Que vaut l'angle au sommet ?",
            type: "mcq",
            options: [
              { id: "A", text: "$65°$" },
              { id: "B", text: "$70°$" },
              { id: "C", text: "$50°$" },
              { id: "D", text: "$130°$" },
            ],
            correctId: "C",
            explanation: "Somme des angles $= 180°$. Angle au sommet $= 180° - 65° - 65° = 180° - 130° = \\mathbf{50°}$.",
            difficulty: "intermediaire",
          },
          {
            id: "g6-l2-e4",
            question: "Dans un triangle, deux angles mesurent 50° et 70°. Quel est le troisième ? Ce triangle est-il rectangle, isocèle ou quelconque ?",
            type: "open",
            modelAnswer: "**Troisième angle :** $180° - 50° - 70° = \\mathbf{60°}$\\n\\nLes trois angles sont $50°$, $60°$, $70°$ : tous différents, aucun ne vaut $90°$.\\n\\n→ Le triangle est **quelconque** (scalène) : ni rectangle, ni isocèle, ni équilatéral.",
            explanation: "Troisième angle : $180° - 50° - 70° = 60°$. Trois angles différents → triangle quelconque.",
            difficulty: "intermediaire",
          },
          {
            id: "g6-l2-e5",
            question: "Quel quadrilatère possède des diagonales perpendiculaires ET égales ?",
            type: "mcq",
            options: [
              { id: "A", text: "Carré" },
              { id: "B", text: "Rectangle" },
              { id: "C", text: "Losange" },
              { id: "D", text: "Parallélogramme" },
            ],
            correctId: "A",
            explanation: "Rectangle → diagonales égales. Losange → diagonales perpendiculaires. **Carré** → les deux à la fois : égales ET perpendiculaires. C'est la seule figure qui réunit ces deux propriétés.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "g6-l3",
        slug: "perimetre-aire",
        title: "Périmètre et aire des figures",
        durationMinutes: 25,
        content: `## Introduction

Le **périmètre** mesure le **contour** d'une figure (en m, cm…). L'**aire** mesure la **surface** intérieure (en m², cm²…). Ces deux notions sont très différentes — ne pas les confondre !

## Formules du périmètre

| Figure | Formule |
|--------|---------|
| Carré (côté $c$) | $P = 4c$ |
| Rectangle ($L \\times l$) | $P = 2(L + l)$ |
| Triangle (côtés $a, b, c$) | $P = a + b + c$ |
| Cercle (rayon $r$) | $P = 2\\pi r \\approx 2 \\times 3{,}14 \\times r$ |

## Formules de l'aire

| Figure | Formule |
|--------|---------|
| Carré (côté $c$) | $\\mathcal{A} = c^2$ |
| Rectangle ($L \\times l$) | $\\mathcal{A} = L \\times l$ |
| Triangle (base $b$, hauteur $h$) | $\\mathcal{A} = \\dfrac{b \\times h}{2}$ |
| Disque (rayon $r$) | $\\mathcal{A} = \\pi r^2 \\approx 3{,}14 \\times r^2$ |

> ⚠️ **Attention aux unités !**
> - $1\\text{ m} = 100\\text{ cm}$
> - $1\\text{ m}^2 = 10\\,000\\text{ cm}^2$
> - $1\\text{ km}^2 = 1\\,000\\,000\\text{ m}^2$

## Exemples

### ✅ Exemple simple — Rectangle $6 \\times 4$ cm

$$P = 2(6 + 4) = 2 \\times 10 = \\boxed{20\\text{ cm}}$$

$$\\mathcal{A} = 6 \\times 4 = \\boxed{24\\text{ cm}^2}$$

### 📘 Exemple intermédiaire — Triangle base $8$ cm, hauteur $5$ cm

$$\\mathcal{A} = \\frac{8 \\times 5}{2} = \\frac{40}{2} = \\boxed{20\\text{ cm}^2}$$

### 🔴 Exemple avancé — Jardin avec une mare circulaire

Jardin rectangulaire $12\\text{ m} \\times 8\\text{ m}$ contenant une mare circulaire de rayon $2\\text{ m}$.

**Aire du jardin :** $\\mathcal{A}_{\\text{rect}} = 12 \\times 8 = 96\\text{ m}^2$

**Aire de la mare :** $\\mathcal{A}_{\\text{cercle}} = \\pi \\times 2^2 \\approx 3{,}14 \\times 4 = 12{,}56\\text{ m}^2$

**Aire disponible (sans la mare) :**

$$\\mathcal{A} = 96 - 12{,}56 = \\boxed{83{,}44\\text{ m}^2}$$

## À retenir

- **Périmètre** = longueur du contour (1D) | **Aire** = surface (2D)
- Triangle : $\\mathcal{A} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$
- Disque : $\\mathcal{A} = \\pi r^2$
- Attention aux **conversions d'unités** (m² ≠ m × 100 !)`,
        exercises: [
          {
            id: "g6-l3-e1",
            question: "L'aire d'un rectangle de longueur $6$ cm et de largeur $4$ cm est…",
            type: "mcq",
            options: [
              { id: "A", text: "$10\\text{ cm}^2$" },
              { id: "B", text: "$20\\text{ cm}$" },
              { id: "C", text: "$24\\text{ cm}^2$" },
              { id: "D", text: "$48\\text{ cm}^2$" },
            ],
            correctId: "C",
            explanation: "$\\mathcal{A} = L \\times l = 6 \\times 4 = \\mathbf{24\\text{ cm}^2}$. Attention : le périmètre serait $2(6+4) = 20\\text{ cm}$ (option B), mais on demande l'**aire**.",
            difficulty: "debutant",
          },
          {
            id: "g6-l3-e2",
            question: "Le périmètre d'un carré de côté $5$ cm vaut $20$ cm.",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$P = 4 \\times c = 4 \\times 5 = 20\\text{ cm}$. **Vrai.** (L'aire serait $5^2 = 25\\text{ cm}^2$, différente du périmètre.)",
            difficulty: "debutant",
          },
          {
            id: "g6-l3-e3",
            question: "L'aire d'un triangle de base $8$ cm et de hauteur $5$ cm est…",
            type: "mcq",
            options: [
              { id: "A", text: "$40\\text{ cm}^2$" },
              { id: "B", text: "$20\\text{ cm}^2$" },
              { id: "C", text: "$13\\text{ cm}^2$" },
              { id: "D", text: "$26\\text{ cm}$" },
            ],
            correctId: "B",
            explanation: "$\\mathcal{A} = \\frac{b \\times h}{2} = \\frac{8 \\times 5}{2} = \\frac{40}{2} = \\mathbf{20\\text{ cm}^2}$. Ne pas oublier de diviser par $2$ !",
            difficulty: "intermediaire",
          },
          {
            id: "g6-l3-e4",
            question: "Un jardin rectangulaire mesure $12$ m × $8$ m. Calculer son périmètre et son aire.",
            type: "open",
            modelAnswer: "**Périmètre :**\\n$$P = 2(L + l) = 2(12 + 8) = 2 \\times 20 = \\boxed{40\\text{ m}}$$\\n\\n**Aire :**\\n$$\\mathcal{A} = L \\times l = 12 \\times 8 = \\boxed{96\\text{ m}^2}$$\\n\\n*Attention : le périmètre est en mètres (m) et l'aire en mètres carrés (m²).*",
            explanation: "Périmètre : $2(12+8) = 40$ m. Aire : $12 \\times 8 = 96$ m².",
            difficulty: "intermediaire",
          },
          {
            id: "g6-l3-e5",
            question: "Un cercle a un rayon de $7$ cm. Son aire est approximativement ($\\pi \\approx 3{,}14$)…",
            type: "mcq",
            options: [
              { id: "A", text: "$153{,}86\\text{ cm}^2$" },
              { id: "B", text: "$43{,}96\\text{ cm}$" },
              { id: "C", text: "$21{,}98\\text{ cm}$" },
              { id: "D", text: "$78\\text{ cm}^2$" },
            ],
            correctId: "A",
            explanation: "$\\mathcal{A} = \\pi r^2 \\approx 3{,}14 \\times 7^2 = 3{,}14 \\times 49 = \\mathbf{153{,}86\\text{ cm}^2}$. L'option B ($43{,}96$) correspond au périmètre ($2\\pi r$).",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // 6ème — Proportionnalité
  // ─────────────────────────────────────────────
  {
    id: "proportionnalite-6eme",
    slug: "proportionnalite-6eme",
    title: "Proportionnalité",
    description: "Maîtrisez la proportionnalité, la règle de trois et les pourcentages — des outils essentiels pour les maths et la vie quotidienne.",
    schoolLevel: "6eme",
    subject: "algebre",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "⚖️",
    lessons: [
      {
        id: "p6-l1",
        slug: "situations-proportionnelles",
        title: "Reconnaître la proportionnalité",
        durationMinutes: 20,
        content: `## Introduction

La proportionnalité est partout : le prix d'une quantité de fruits, la vitesse d'une voiture, les recettes de cuisine... Savoir reconnaître une situation proportionnelle est une compétence clé.

## Définition

Deux grandeurs sont **proportionnelles** si leurs valeurs sont liées par une **multiplication par un même nombre** (le coefficient de proportionnalité).

$$\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = \\frac{y_3}{x_3} = k \\quad (\\text{coefficient})$$

## Tableau de proportionnalité

| $x$ | 2 | 5 | 10 |
|-----|---|---|----|
| $y$ | 6 | 15 | 30 |

$\\frac{6}{2} = \\frac{15}{5} = \\frac{30}{10} = 3$ → **coefficient $k = 3$** ✓

## Reconnaître une situation proportionnelle

> 📌 **Méthode**
> 1. Calculer tous les **rapports** $\\frac{y}{x}$.
> 2. Si tous les rapports sont **égaux** → proportionnel.
> 3. Si au moins un diffère → **non** proportionnel.

## Ce qui n'est PAS proportionnel

⚠️ L'âge et la taille d'une personne ne sont **pas** proportionnels.

⚠️ Le prix d'une pizza (coût fixe de fabrication) n'est **pas** proportionnel au nombre de pizzas.

## Exemples

### ✅ Exemple simple — Prix de pommes

| Quantité (kg) | 1 | 2 | 3 | 5 |
|---|---|---|---|---|
| Prix (€) | 2 | 4 | 6 | 10 |

Coefficients : $\\frac{2}{1} = \\frac{4}{2} = \\frac{6}{3} = \\frac{10}{5} = 2$ → **proportionnel**, $k = 2$

### 📘 Exemple intermédiaire — Vérifier la proportionnalité

| $x$ | 3 | 5 | 9 |
|---|---|---|---|
| $y$ | 12 | 20 | 36 |

$\\frac{12}{3} = 4$, $\\frac{20}{5} = 4$, $\\frac{36}{9} = 4$ → **proportionnel**, $k = 4$

### 🔴 Exemple avancé — Contre-exemple

| Personnes | 1 | 2 | 3 |
|---|---|---|---|
| Pizzas commandées | 2 | 3 | 5 |

$\\frac{2}{1} = 2$, $\\frac{3}{2} = 1{,}5$, $\\frac{5}{3} \\approx 1{,}67$ → **pas proportionnel** (les rapports diffèrent)

## À retenir

- Proportionnel → **même rapport** $\\frac{y}{x}$ pour toutes les colonnes
- Le coefficient de proportionnalité $k$ : $y = k \\times x$
- Vérifier **tous** les rapports avant de conclure`,
        exercises: [
          {
            id: "p6-l1-e1",
            question: "Dans un tableau de proportionnalité, le rapport $\\frac{y}{x}$ est…",
            type: "mcq",
            options: [
              { id: "A", text: "Différent pour chaque colonne" },
              { id: "B", text: "Toujours le même (coefficient)" },
              { id: "C", text: "Toujours égal à 1" },
              { id: "D", text: "Toujours supérieur à 1" },
            ],
            correctId: "B",
            explanation: "Dans un tableau de proportionnalité, le rapport $\\frac{y}{x}$ est **constant** pour toutes les colonnes. Ce rapport constant est le **coefficient de proportionnalité** $k$.",
            difficulty: "debutant",
          },
          {
            id: "p6-l1-e2",
            question: "Si 2 kg de pommes coûtent 3 €, alors 6 kg coûtent 9 €.",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "Le coefficient est $k = \\frac{3}{2} = 1{,}5$ (€/kg). Pour 6 kg : $6 \\times 1{,}5 = 9$ €. Vérif : $\\frac{9}{6} = 1{,}5 = k$ ✓ **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "p6-l1-e3",
            question: "Lequel de ces tableaux représente une situation **proportionnelle** ?",
            type: "mcq",
            options: [
              { id: "A", text: "$x: 1, 2, 3$ | $y: 2, 4, 7$" },
              { id: "B", text: "$x: 2, 4, 6$ | $y: 6, 12, 18$" },
              { id: "C", text: "$x: 1, 2, 3$ | $y: 1, 4, 9$" },
              { id: "D", text: "$x: 1, 2, 3$ | $y: 3, 5, 7$" },
            ],
            correctId: "B",
            explanation: "Option B : $\\frac{6}{2} = \\frac{12}{4} = \\frac{18}{6} = 3$ → tous égaux → **proportionnel** ($k=3$). Options A ($\\frac{7}{3} \\neq 2$), C ($\\frac{4}{2} = 2$ mais $\\frac{9}{3} = 3 \\neq 2$), D ($\\frac{5}{2} = 2{,}5 \\neq 3$) ne le sont pas.",
            difficulty: "intermediaire",
          },
          {
            id: "p6-l1-e4",
            question: "Le tableau suivant est-il proportionnel ? $x: 1, 2, 3, 4$ et $y: 3, 6, 9, 12$. Si oui, quel est le coefficient ?",
            type: "open",
            modelAnswer: "**Calcul des rapports :**\\n$$\\frac{3}{1} = 3 \\quad \\frac{6}{2} = 3 \\quad \\frac{9}{3} = 3 \\quad \\frac{12}{4} = 3$$\\n\\nTous les rapports sont égaux à $3$ → le tableau est **proportionnel**.\\n\\n$$\\boxed{k = 3}$$\\n\\nFormule : $y = 3x$",
            explanation: "Tous les rapports $y/x = 3$ → proportionnel, $k = 3$.",
            difficulty: "intermediaire",
          },
          {
            id: "p6-l1-e5",
            question: "Dans un tableau de proportionnalité, $x = 3 \\to y = 12$ et $x = 5 \\to y = 20$. Quelle est la valeur de $y$ quand $x = 9$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$30$" },
              { id: "B", text: "$27$" },
              { id: "C", text: "$36$" },
              { id: "D", text: "$45$" },
            ],
            correctId: "C",
            explanation: "$k = \\frac{12}{3} = 4$. Pour $x = 9$ : $y = 4 \\times 9 = \\mathbf{36}$. Vérif : $\\frac{20}{5} = 4 = k$ ✓",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "p6-l2",
        slug: "regle-trois",
        title: "La règle de trois",
        durationMinutes: 20,
        content: `## Introduction

La règle de trois (ou **produit en croix**) est la technique la plus utilisée pour résoudre les problèmes de proportionnalité. Elle permet de trouver une valeur inconnue quand on en connaît trois autres.

## Principe

Si les grandeurs $x$ et $y$ sont proportionnelles, alors :

$$\\frac{y_1}{x_1} = \\frac{y_2}{x_2} \\implies y_1 \\times x_2 = y_2 \\times x_1 \\quad (\\text{produit en croix})$$

## La méthode en 3 étapes

> 📌 **Méthode — Règle de trois**
> 1. Identifier les deux grandeurs proportionnelles.
> 2. Écrire le tableau de correspondance.
> 3. Calculer par **produit en croix** : $? = \\frac{\\text{valeur connue} \\times \\text{valeur adjacente}}{\\text{valeur opposée}}$

## Exemples

### ✅ Exemple simple — Cahiers

5 cahiers coûtent $10$ €. Combien coûtent 8 cahiers ?

| Cahiers | 5 | 8 |
|---------|---|---|
| Prix (€) | 10 | ? |

$$? = \\frac{10 \\times 8}{5} = \\frac{80}{5} = \\boxed{16\\text{ €}}$$

### 📘 Exemple intermédiaire — Consommation d'essence

Une voiture consomme $7$ L pour $100$ km. Combien consomme-t-elle pour $350$ km ?

| Distance (km) | 100 | 350 |
|---|---|---|
| Essence (L) | 7 | ? |

$$? = \\frac{7 \\times 350}{100} = \\frac{2450}{100} = \\boxed{24{,}5\\text{ L}}$$

### 🔴 Exemple avancé — Recette pour plus de personnes

Une recette pour **6 personnes** nécessite $450$ g de farine. Pour **10 personnes** ?

| Personnes | 6 | 10 |
|---|---|---|
| Farine (g) | 450 | ? |

$$? = \\frac{450 \\times 10}{6} = \\frac{4500}{6} = \\boxed{750\\text{ g}}$$

*Vérification : $\\frac{750}{10} = 75$ g/personne $= \\frac{450}{6} = 75$ g/personne ✓*

## À retenir

- La règle de trois utilise le **produit en croix**
- **Toujours vérifier** que les grandeurs sont bien proportionnelles
- L'inconnu $?$ s'obtient par : $\\dfrac{\\text{produit des termes adjacents}}{\\text{terme opposé}}$`,
        exercises: [
          {
            id: "p6-l2-e1",
            question: "5 cahiers coûtent 10 €. Combien coûtent 8 cahiers ?",
            type: "mcq",
            options: [
              { id: "A", text: "$13$ €" },
              { id: "B", text: "$16$ €" },
              { id: "C", text: "$20$ €" },
              { id: "D", text: "$18$ €" },
            ],
            correctId: "B",
            explanation: "Règle de trois : $? = \\frac{10 \\times 8}{5} = \\frac{80}{5} = \\mathbf{16\\text{ €}}$. Vérif : coefficient $= \\frac{10}{5} = 2$ €/cahier, donc $8 \\times 2 = 16$ €.",
            difficulty: "debutant",
          },
          {
            id: "p6-l2-e2",
            question: "La règle de trois permet de trouver une valeur inconnue dans une situation proportionnelle.",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "**Vrai.** La règle de trois (ou produit en croix) est précisément la technique pour calculer une valeur manquante dans un tableau de proportionnalité.",
            difficulty: "debutant",
          },
          {
            id: "p6-l2-e3",
            question: "Une voiture consomme 7 L pour 100 km. Pour un trajet de 350 km, elle consomme…",
            type: "mcq",
            options: [
              { id: "A", text: "$7$ L" },
              { id: "B", text: "$35$ L" },
              { id: "C", text: "$24{,}5$ L" },
              { id: "D", text: "$2{,}45$ L" },
            ],
            correctId: "C",
            explanation: "$? = \\frac{7 \\times 350}{100} = \\frac{2450}{100} = \\mathbf{24{,}5\\text{ L}}$. $350$ km, c'est $3{,}5$ fois $100$ km, donc $3{,}5 \\times 7 = 24{,}5$ L.",
            difficulty: "intermediaire",
          },
          {
            id: "p6-l2-e4",
            question: "Une recette pour 6 personnes demande 450 g de farine. Quelle quantité pour 10 personnes ?",
            type: "open",
            modelAnswer: "**Tableau de proportionnalité :**\\n| Personnes | 6 | 10 |\\n|---|---|---|\\n| Farine (g) | 450 | ? |\\n\\n**Règle de trois :**\\n$$? = \\frac{450 \\times 10}{6} = \\frac{4500}{6} = \\boxed{750\\text{ g}}$$\\n\\n**Vérification :** $\\frac{750}{10} = 75$ g/pers $= \\frac{450}{6} = 75$ g/pers ✓",
            explanation: "$\\frac{450 \\times 10}{6} = 750$ g.",
            difficulty: "intermediaire",
          },
          {
            id: "p6-l2-e5",
            question: "Si 4 ouvriers font un mur en 6 jours (en travaillant à la même cadence), combien de jours faudrait-il à 6 ouvriers pour faire le même mur ?",
            type: "mcq",
            options: [
              { id: "A", text: "$9$ jours" },
              { id: "B", text: "$4$ jours" },
              { id: "C", text: "$8$ jours" },
              { id: "D", text: "$3$ jours" },
            ],
            correctId: "B",
            explanation: "Situation **inversement** proportionnelle : plus d'ouvriers → moins de jours. Travail total $= 4 \\times 6 = 24$ ouvrier-jours. Avec 6 ouvriers : $\\frac{24}{6} = \\mathbf{4\\text{ jours}}$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "p6-l3",
        slug: "pourcentages",
        title: "Les pourcentages",
        durationMinutes: 22,
        content: `## Introduction

Les pourcentages sont omniprésents : soldes ($-30\\%$), TVA ($+20\\%$), résultats scolaires, sondages... Comprendre et calculer des pourcentages est une compétence quotidienne essentielle.

## Définition

Un pourcentage exprime une quantité **pour cent** :

$$p\\% = \\frac{p}{100}$$

**Exemples :** $25\\% = \\frac{25}{100} = \\frac{1}{4} = 0{,}25$

## Calculer un pourcentage d'une quantité

> 📌 **Méthode — $p\\%$ de $Q$**
> $$p\\% \\text{ de } Q = \\frac{p}{100} \\times Q = Q \\times \\frac{p}{100}$$

$$25\\% \\text{ de } 80 = \\frac{25}{100} \\times 80 = 0{,}25 \\times 80 = 20$$

## Calculer un taux de réduction

> 📌 **Méthode — Prix après réduction de $r\\%$**
> $$\\text{Nouveau prix} = \\text{Prix initial} \\times \\left(1 - \\frac{r}{100}\\right)$$

**Exemple :** $-15\\%$ sur $120$ € : $120 \\times 0{,}85 = 102$ €

## Trouver le prix initial

> 📌 **Méthode — Retrouver le prix avant hausse**
> Si après une hausse de $t\\%$ le prix est $P$ :
> $$\\text{Prix initial} = \\frac{P}{1 + \\frac{t}{100}}$$

## Exprimer un score en pourcentage

$$\\text{Score}\\% = \\frac{\\text{points obtenus}}{\\text{total}} \\times 100$$

$$14{,}5 \\text{ sur } 20 = \\frac{14{,}5}{20} \\times 100 = 72{,}5\\%$$

## Exemples

### ✅ Exemple simple — $25\\%$ de $80$

$$\\frac{25}{100} \\times 80 = 0{,}25 \\times 80 = \\boxed{20}$$

### 📘 Exemple intermédiaire — Soldes

Un article à $120$ € bénéficie d'une réduction de $15\\%$.

$$\\text{Réduction} = 0{,}15 \\times 120 = 18\\text{ €}$$

$$\\text{Nouveau prix} = 120 - 18 = \\boxed{102\\text{ €}}$$

### 🔴 Exemple avancé — Retrouver le prix initial

Après une hausse de $20\\%$, un article coûte $144$ €. Prix initial ?

$$\\text{Prix initial} = \\frac{144}{1{,}20} = \\frac{144}{1{,}2} = \\boxed{120\\text{ €}}$$

*Vérif : $120 \\times 1{,}20 = 144$ € ✓*

## À retenir

- $p\\% = \\frac{p}{100}$ → multiplier par $\\frac{p}{100}$
- Réduction de $r\\%$ → multiplier par $(1 - \\frac{r}{100})$
- Hausse de $t\\%$ → multiplier par $(1 + \\frac{t}{100})$
- Retrouver le prix initial : **diviser** par le coefficient de hausse`,
        exercises: [
          {
            id: "p6-l3-e1",
            question: "$25\\%$ de $80 = ?$",
            type: "mcq",
            options: [
              { id: "A", text: "$40$" },
              { id: "B", text: "$8$" },
              { id: "C", text: "$20$" },
              { id: "D", text: "$25$" },
            ],
            correctId: "C",
            explanation: "$25\\% \\text{ de } 80 = \\frac{25}{100} \\times 80 = 0{,}25 \\times 80 = \\mathbf{20}$. On peut aussi penser : $25\\% = \\frac{1}{4}$, et $\\frac{80}{4} = 20$.",
            difficulty: "debutant",
          },
          {
            id: "p6-l3-e2",
            question: "$50\\%$ est égal à $\\frac{1}{2}$.",
            type: "true_false",
            options: [{ id: "vrai", text: "Vrai" }, { id: "faux", text: "Faux" }],
            correctId: "vrai",
            explanation: "$50\\% = \\frac{50}{100} = \\frac{1}{2}$. C'est une fraction usuelle à mémoriser : $50\\% = \\frac{1}{2} = 0{,}5$. **Vrai.**",
            difficulty: "debutant",
          },
          {
            id: "p6-l3-e3",
            question: "Un article coûte $120$ € avec une réduction de $15\\%$. Son nouveau prix est…",
            type: "mcq",
            options: [
              { id: "A", text: "$105$ €" },
              { id: "B", text: "$102$ €" },
              { id: "C", text: "$18$ €" },
              { id: "D", text: "$115$ €" },
            ],
            correctId: "B",
            explanation: "Réduction : $15\\%$ de $120 = 0{,}15 \\times 120 = 18$ €. Nouveau prix : $120 - 18 = \\mathbf{102}$ €. Ou directement : $120 \\times (1 - 0{,}15) = 120 \\times 0{,}85 = 102$ €.",
            difficulty: "intermediaire",
          },
          {
            id: "p6-l3-e4",
            question: "Un élève a obtenu $14$ points sur $20$ à un contrôle. Quel est son score en pourcentage ?",
            type: "open",
            modelAnswer: "$$\\text{Score}\\% = \\frac{14}{20} \\times 100 = \\frac{1400}{20} = \\boxed{70\\%}$$\\n\\n**Méthode :** On divise les points obtenus par le total et on multiplie par 100.\\n\\n*Vérification :* $70\\%$ de $20 = 0{,}70 \\times 20 = 14$ ✓",
            explanation: "$\\frac{14}{20} \\times 100 = 70\\%$.",
            difficulty: "intermediaire",
          },
          {
            id: "p6-l3-e5",
            question: "Après une hausse de $20\\%$, un prix est $144$ €. Quel était le prix initial ?",
            type: "mcq",
            options: [
              { id: "A", text: "$120$ €" },
              { id: "B", text: "$115{,}20$ €" },
              { id: "C", text: "$124$ €" },
              { id: "D", text: "$100$ €" },
            ],
            correctId: "A",
            explanation: "Une hausse de $20\\%$ correspond au coefficient $1{,}20$. Prix initial $= \\frac{144}{1{,}20} = \\mathbf{120}$ €. Vérif : $120 \\times 1{,}20 = 144$ € ✓",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5ème — Nombres relatifs
  // ─────────────────────────────────────────────
  {
    id: "relatifs-5eme",
    slug: "nombres-relatifs-5eme",
    title: "Nombres relatifs",
    description: "Additionnez, soustrayez et comparez les nombres relatifs grâce à la droite numérique et à des repères concrets (températures, altitudes, comptes bancaires).",
    schoolLevel: "5eme",
    subject: "arithmetique",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "±",
    lessons: [
      {
        id: "rel5-1",
        slug: "addition-soustraction",
        title: "Addition et soustraction de relatifs",
        durationMinutes: 12,
        content: `## Les nombres relatifs

Un **nombre relatif** est un nombre précédé d'un signe $+$ ou $-$. Il est composé d'une **partie numérique** et d'un **signe**.

### Addition de deux relatifs

**Règle 1 — Même signe :** on additionne les parties numériques et on garde le signe commun.

$$(-3) + (-5) = -8 \\qquad (+4) + (+7) = +11$$

**Règle 2 — Signes différents :** on soustrait la plus petite partie numérique de la plus grande, et on garde le signe du nombre qui a la plus grande partie numérique.

$$(+9) + (-4) = +5 \\qquad (-9) + (+4) = -5$$

### Soustraction de relatifs

Soustraire un nombre relatif, c'est ajouter son **opposé** :

$$a - b = a + (-b)$$

**Exemple :** $(+3) - (+8) = (+3) + (-8) = -5$

> Astuce : deux signes identiques côte à côte ($--$ ou $++$) deviennent $+$ ; deux signes différents ($+-$ ou $-+$) deviennent $-$.`,
        exercises: [
          {
            id: "rel5-l1-e1",
            question: "Calculer : $(-7) + (-5)$",
            type: "mcq",
            options: [
              { id: "A", text: "$-12$" },
              { id: "B", text: "$-2$" },
              { id: "C", text: "$12$" },
              { id: "D", text: "$2$" },
            ],
            correctId: "A",
            explanation: "Les deux nombres ont le même signe ($-$). On additionne $7 + 5 = 12$ et on garde le signe $-$ : $(-7)+(-5) = -12$.",
            difficulty: "debutant",
          },
          {
            id: "rel5-l1-e2",
            question: "Calculer : $(+8) + (-3)$",
            type: "mcq",
            options: [
              { id: "A", text: "$11$" },
              { id: "B", text: "$5$" },
              { id: "C", text: "$-5$" },
              { id: "D", text: "$-11$" },
            ],
            correctId: "B",
            explanation: "Signes différents : $8 - 3 = 5$, on garde le signe du plus grand ($+8$), donc le résultat est $+5$.",
            difficulty: "debutant",
          },
          {
            id: "rel5-l1-e3",
            question: "$(-6) - (+9)$ est égal à $(-6) + (-9)$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Soustraire $(+9)$, c'est ajouter son opposé $(-9)$. Donc $(-6) - (+9) = (-6) + (-9) = -15$.",
            difficulty: "intermediaire",
          },
          {
            id: "rel5-l1-e4",
            question: "La température était de $-4°C$ le matin. Elle a augmenté de $9°C$ dans l'après-midi. Quelle est la température finale ?",
            type: "mcq",
            options: [
              { id: "A", text: "$13°C$" },
              { id: "B", text: "$5°C$" },
              { id: "C", text: "$-13°C$" },
              { id: "D", text: "$-5°C$" },
            ],
            correctId: "B",
            explanation: "On calcule $(-4) + (+9)$. Signes différents : $9 - 4 = 5$, on garde le signe du plus grand $(+9)$, donc $+5°C$.",
            difficulty: "intermediaire",
          },
          {
            id: "rel5-l1-e5",
            question: "Calculer et simplifier : $(-12) + (+7) - (-3)$",
            type: "open",
            modelAnswer: "$$(-12) + (+7) - (-3) = (-12) + (+7) + (+3)$$\\n\\nOn additionne dans l'ordre : $(-12) + (+7) = -5$, puis $(-5) + (+3) = -2$.\\n\\n$$\\boxed{-2}$$",
            explanation: "On transforme la soustraction $-(-3)$ en addition $+(+3)$, puis on additionne de gauche à droite.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "rel5-2",
        slug: "comparaison-distance",
        title: "Comparer et ranger les relatifs",
        durationMinutes: 10,
        content: `## Comparer les nombres relatifs

### Sur la droite numérique

Sur une droite numérique graduée, un nombre est **plus grand** qu'un autre s'il est placé **plus à droite**.

$$-5 < -2 < 0 < 3 < 7$$

### Règles de comparaison

- Tout nombre positif est plus grand que tout nombre négatif : $+2 > -100$.
- Entre deux nombres positifs, le plus grand est celui qui a la plus grande partie numérique : $+8 > +3$.
- Entre deux nombres négatifs, le plus grand est celui qui a la **plus petite** partie numérique : $-3 > -8$.

### Distance à zéro

La **distance à zéro** d'un nombre relatif (aussi appelée valeur absolue) est sa partie numérique, notée $|a|$.

$$|-7| = 7 \\qquad |+7| = 7$$

Deux nombres opposés ont la même distance à zéro mais des signes différents : $-7$ et $+7$ sont opposés.`,
        exercises: [
          {
            id: "rel5-l2-e1",
            question: "Lequel de ces nombres est le plus grand ?",
            type: "mcq",
            options: [
              { id: "A", text: "$-9$" },
              { id: "B", text: "$-2$" },
              { id: "C", text: "$-15$" },
              { id: "D", text: "$-100$" },
            ],
            correctId: "B",
            explanation: "Entre nombres négatifs, le plus grand est celui qui a la plus petite partie numérique. $-2$ a la plus petite partie numérique (2), donc $-2$ est le plus grand.",
            difficulty: "debutant",
          },
          {
            id: "rel5-l2-e2",
            question: "$-3 < -8$",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "$-3 > -8$ car $-3$ est plus proche de zéro (et plus à droite sur la droite numérique). L'affirmation est donc fausse.",
            difficulty: "debutant",
          },
          {
            id: "rel5-l2-e3",
            question: "Que vaut $|-12|$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$-12$" },
              { id: "B", text: "$12$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "B",
            explanation: "La distance à zéro (valeur absolue) d'un nombre est toujours positive : $|-12| = 12$.",
            difficulty: "intermediaire",
          },
          {
            id: "rel5-l2-e4",
            question: "Range ces altitudes dans l'ordre croissant : $-430$ m, $48$ m, $-12$ m, $0$ m.",
            type: "mcq",
            options: [
              { id: "A", text: "$-430 < -12 < 0 < 48$" },
              { id: "B", text: "$-12 < -430 < 0 < 48$" },
              { id: "C", text: "$48 < 0 < -12 < -430$" },
              { id: "D", text: "$-430 < 0 < -12 < 48$" },
            ],
            correctId: "A",
            explanation: "Entre les négatifs, $-430$ est plus petit que $-12$ (partie numérique plus grande). On obtient $-430 < -12 < 0 < 48$.",
            difficulty: "intermediaire",
          },
          {
            id: "rel5-l2-e5",
            question: "Deux nombres opposés ont-ils toujours la même distance à zéro ? Justifie.",
            type: "open",
            modelAnswer: "Oui. Deux nombres opposés, comme $a$ et $-a$, ont la même partie numérique mais des signes différents.\\n\\nPar exemple, $+5$ et $-5$ sont opposés : $|+5| = 5$ et $|-5| = 5$.\\n\\n$$|a| = |-a|$$\\n\\nLa distance à zéro ne dépend que de la partie numérique, pas du signe.",
            explanation: "La valeur absolue \"efface\" le signe : deux opposés ont donc la même distance à zéro.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "rel5-3",
        slug: "multiplication-relatifs",
        title: "Multiplication et division de relatifs",
        durationMinutes: 12,
        content: `## Multiplier et diviser des relatifs

### Règle des signes

| Signe de $a$ | Signe de $b$ | Signe de $a \\times b$ |
|-----|-----|-----|
| $+$ | $+$ | $+$ |
| $-$ | $-$ | $+$ |
| $+$ | $-$ | $-$ |
| $-$ | $+$ | $-$ |

**Résumé :** deux signes identiques donnent $+$, deux signes différents donnent $-$.

$$(-4) \\times (-3) = +12 \\qquad (-4) \\times (+3) = -12$$

### Division

La règle des signes pour la division est **identique** à celle de la multiplication :

$$(-15) \\div (-3) = +5 \\qquad (-15) \\div (+3) = -5$$

### Produit de plusieurs facteurs

Pour un produit de plusieurs facteurs relatifs, on compte le nombre de facteurs négatifs :
- nombre **pair** de facteurs négatifs $\\Rightarrow$ résultat positif ;
- nombre **impair** de facteurs négatifs $\\Rightarrow$ résultat négatif.`,
        exercises: [
          {
            id: "rel5-l3-e1",
            question: "Calculer : $(-6) \\times (-4)$",
            type: "mcq",
            options: [
              { id: "A", text: "$-24$" },
              { id: "B", text: "$24$" },
              { id: "C", text: "$-10$" },
              { id: "D", text: "$10$" },
            ],
            correctId: "B",
            explanation: "Deux facteurs négatifs : le résultat est positif. $6 \\times 4 = 24$, donc $(-6) \\times (-4) = +24$.",
            difficulty: "debutant",
          },
          {
            id: "rel5-l3-e2",
            question: "Calculer : $(+8) \\times (-5)$",
            type: "mcq",
            options: [
              { id: "A", text: "$40$" },
              { id: "B", text: "$-40$" },
              { id: "C", text: "$13$" },
              { id: "D", text: "$-13$" },
            ],
            correctId: "B",
            explanation: "Signes différents : le résultat est négatif. $8 \\times 5 = 40$, donc $(+8) \\times (-5) = -40$.",
            difficulty: "debutant",
          },
          {
            id: "rel5-l3-e3",
            question: "$(-36) \\div (-9)$ est un nombre positif.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Deux signes identiques en division donnent un résultat positif : $(-36) \\div (-9) = +4$.",
            difficulty: "intermediaire",
          },
          {
            id: "rel5-l3-e4",
            question: "Quel est le signe du produit $(-2) \\times (-3) \\times (-5)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Positif" },
              { id: "B", text: "Négatif" },
              { id: "C", text: "Nul" },
              { id: "D", text: "Impossible à savoir" },
            ],
            correctId: "B",
            explanation: "Il y a 3 facteurs négatifs, un nombre impair : le produit est donc négatif. $(-2)\\times(-3)\\times(-5) = -30$.",
            difficulty: "intermediaire",
          },
          {
            id: "rel5-l3-e5",
            question: "Sans calculer le résultat complet, explique pourquoi $(-1) \\times (-1) \\times (-1) \\times (-1) \\times (-1)$ est négatif.",
            type: "open",
            modelAnswer: "Le produit contient $5$ facteurs égaux à $-1$, donc $5$ facteurs négatifs.\\n\\n$5$ est un nombre **impair**, donc le produit est négatif.\\n\\n$$(-1)^5 = -1$$\\n\\nRègle générale : $(-1)^n$ est négatif si $n$ est impair, positif si $n$ est pair.",
            explanation: "On compte la parité du nombre de facteurs négatifs : impair $\\Rightarrow$ négatif.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5ème — Fractions : opérations
  // ─────────────────────────────────────────────
  {
    id: "fractions-5eme-id",
    slug: "fractions-5eme",
    title: "Opérations sur les fractions",
    description: "Additionnez, multipliez et divisez des fractions en toute confiance grâce à des méthodes pas à pas et de nombreux exemples concrets.",
    schoolLevel: "5eme",
    subject: "arithmetique",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "⅗",
    lessons: [
      {
        id: "frac5-1",
        slug: "addition-soustraction-fractions",
        title: "Addition et soustraction de fractions",
        durationMinutes: 12,
        content: `## Additionner et soustraire des fractions

### Même dénominateur

Si deux fractions ont le **même dénominateur**, on additionne (ou soustrait) les numérateurs et on garde le dénominateur.

$$\\frac{3}{7} + \\frac{2}{7} = \\frac{3+2}{7} = \\frac{5}{7}$$

### Dénominateurs différents

On doit d'abord rendre les fractions au **même dénominateur** en utilisant un multiple commun.

**Exemple :** $\\dfrac{1}{4} + \\dfrac{1}{6}$. Le plus petit multiple commun de $4$ et $6$ est $12$ :

$$\\frac{1}{4} = \\frac{3}{12} \\qquad \\frac{1}{6} = \\frac{2}{12}$$

$$\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$$

> Astuce simple : si on ne trouve pas le plus petit multiple commun, on peut toujours utiliser le produit des deux dénominateurs.`,
        exercises: [
          {
            id: "frac5-l1-e1",
            question: "Calculer : $\\dfrac{2}{9} + \\dfrac{5}{9}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{7}{9}$" },
              { id: "B", text: "$\\dfrac{7}{18}$" },
              { id: "C", text: "$\\dfrac{10}{9}$" },
              { id: "D", text: "$\\dfrac{3}{9}$" },
            ],
            correctId: "A",
            explanation: "Même dénominateur : on additionne les numérateurs. $\\frac{2}{9} + \\frac{5}{9} = \\frac{2+5}{9} = \\frac{7}{9}$.",
            difficulty: "debutant",
          },
          {
            id: "frac5-l1-e2",
            question: "Calculer : $\\dfrac{3}{4} - \\dfrac{1}{4}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{2}{4} = \\dfrac{1}{2}$" },
              { id: "B", text: "$\\dfrac{2}{8}$" },
              { id: "C", text: "$\\dfrac{4}{4}$" },
              { id: "D", text: "$\\dfrac{1}{4}$" },
            ],
            correctId: "A",
            explanation: "$\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4}$, qui se simplifie en $\\frac{1}{2}$.",
            difficulty: "debutant",
          },
          {
            id: "frac5-l1-e3",
            question: "Pour additionner $\\dfrac{1}{3}$ et $\\dfrac{1}{5}$, on peut utiliser le dénominateur commun $15$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$15$ est un multiple commun de $3$ et $5$ ($3 \\times 5 = 15$), on peut donc l'utiliser comme dénominateur commun.",
            difficulty: "intermediaire",
          },
          {
            id: "frac5-l1-e4",
            question: "Calculer : $\\dfrac{1}{4} + \\dfrac{1}{6}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{5}{12}$" },
              { id: "B", text: "$\\dfrac{2}{10}$" },
              { id: "C", text: "$\\dfrac{1}{12}$" },
              { id: "D", text: "$\\dfrac{2}{24}$" },
            ],
            correctId: "A",
            explanation: "Dénominateur commun $12$ : $\\frac{1}{4} = \\frac{3}{12}$ et $\\frac{1}{6} = \\frac{2}{12}$, donc $\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$.",
            difficulty: "intermediaire",
          },
          {
            id: "frac5-l1-e5",
            question: "Calculer et simplifier le résultat : $\\dfrac{5}{6} - \\dfrac{1}{4}$",
            type: "open",
            modelAnswer: "Dénominateur commun de $6$ et $4$ : $12$.\\n\\n$$\\frac{5}{6} = \\frac{10}{12} \\qquad \\frac{1}{4} = \\frac{3}{12}$$\\n\\n$$\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$$\\n\\n$\\frac{7}{12}$ est déjà irréductible (7 est premier et ne divise pas 12).\\n\\n$$\\boxed{\\dfrac{7}{12}}$$",
            explanation: "On met les deux fractions au dénominateur commun $12$ avant de soustraire les numérateurs.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "frac5-2",
        slug: "multiplication-fractions",
        title: "Multiplication de fractions",
        durationMinutes: 10,
        content: `## Multiplier des fractions

### Règle

Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux :

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Exemple :**

$$\\frac{2}{3} \\times \\frac{5}{7} = \\frac{2 \\times 5}{3 \\times 7} = \\frac{10}{21}$$

### Simplifier avant de multiplier

Il est souvent plus simple de **simplifier en croix** avant de multiplier :

$$\\frac{3}{8} \\times \\frac{4}{9} = \\frac{3 \\times 4}{8 \\times 9} = \\frac{\\cancel{3} \\times \\cancel{4}}{\\cancel{8} \\times \\cancel{9}} = \\frac{1}{6}$$

### Multiplier par un entier

Un entier $n$ peut s'écrire $\\dfrac{n}{1}$ :

$$5 \\times \\frac{2}{3} = \\frac{5}{1} \\times \\frac{2}{3} = \\frac{10}{3}$$`,
        exercises: [
          {
            id: "frac5-l2-e1",
            question: "Calculer : $\\dfrac{2}{5} \\times \\dfrac{3}{7}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{6}{35}$" },
              { id: "B", text: "$\\dfrac{5}{12}$" },
              { id: "C", text: "$\\dfrac{6}{12}$" },
              { id: "D", text: "$\\dfrac{9}{35}$" },
            ],
            correctId: "A",
            explanation: "On multiplie numérateurs et dénominateurs : $\\frac{2 \\times 3}{5 \\times 7} = \\frac{6}{35}$.",
            difficulty: "debutant",
          },
          {
            id: "frac5-l2-e2",
            question: "Calculer : $4 \\times \\dfrac{1}{8}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{2}$" },
              { id: "B", text: "$\\dfrac{4}{8}$" },
              { id: "C", text: "$\\dfrac{1}{32}$" },
              { id: "D", text: "$32$" },
            ],
            correctId: "A",
            explanation: "$4 \\times \\frac{1}{8} = \\frac{4}{8} = \\frac{1}{2}$ après simplification.",
            difficulty: "debutant",
          },
          {
            id: "frac5-l2-e3",
            question: "Pour multiplier deux fractions, il faut d'abord les mettre au même dénominateur.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Contrairement à l'addition, la multiplication de fractions ne nécessite pas de dénominateur commun : on multiplie directement numérateurs entre eux et dénominateurs entre eux.",
            difficulty: "intermediaire",
          },
          {
            id: "frac5-l2-e4",
            question: "Calculer et simplifier : $\\dfrac{3}{8} \\times \\dfrac{4}{9}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{6}$" },
              { id: "B", text: "$\\dfrac{12}{72}$" },
              { id: "C", text: "$\\dfrac{7}{17}$" },
              { id: "D", text: "$\\dfrac{1}{2}$" },
            ],
            correctId: "A",
            explanation: "$\\frac{3}{8} \\times \\frac{4}{9} = \\frac{12}{72}$. En simplifiant par $12$, on obtient $\\frac{1}{6}$.",
            difficulty: "intermediaire",
          },
          {
            id: "frac5-l2-e5",
            question: "Un terrain rectangulaire mesure $\\dfrac{3}{4}$ km de long et $\\dfrac{2}{5}$ km de large. Quelle est son aire en km² ?",
            type: "open",
            modelAnswer: "L'aire d'un rectangle est $\\text{longueur} \\times \\text{largeur}$.\\n\\n$$\\frac{3}{4} \\times \\frac{2}{5} = \\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}$$\\n\\n$$\\boxed{\\dfrac{3}{10} \\text{ km}^2}$$",
            explanation: "On multiplie les deux fractions puis on simplifie $\\frac{6}{20}$ en divisant par $2$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "frac5-3",
        slug: "division-fractions",
        title: "Division de fractions",
        durationMinutes: 10,
        content: `## Diviser des fractions

### L'inverse d'une fraction

L'**inverse** d'une fraction $\\dfrac{a}{b}$ (avec $a \\neq 0$) est $\\dfrac{b}{a}$. Le produit d'une fraction par son inverse vaut $1$ :

$$\\frac{a}{b} \\times \\frac{b}{a} = 1$$

### Règle de division

Diviser par une fraction, c'est multiplier par son inverse :

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

**Exemple :**

$$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$$

> Astuce mnémotechnique : "diviser, c'est multiplier par l'inverse" — on retourne la deuxième fraction et on change le $\\div$ en $\\times$.`,
        exercises: [
          {
            id: "frac5-l3-e1",
            question: "Quel est l'inverse de $\\dfrac{3}{7}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{7}{3}$" },
              { id: "B", text: "$-\\dfrac{3}{7}$" },
              { id: "C", text: "$\\dfrac{3}{7}$" },
              { id: "D", text: "$\\dfrac{1}{21}$" },
            ],
            correctId: "A",
            explanation: "L'inverse de $\\frac{3}{7}$ est $\\frac{7}{3}$ : on inverse numérateur et dénominateur.",
            difficulty: "debutant",
          },
          {
            id: "frac5-l3-e2",
            question: "Calculer : $\\dfrac{1}{2} \\div \\dfrac{1}{4}$",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$\\dfrac{1}{8}$" },
              { id: "C", text: "$8$" },
              { id: "D", text: "$\\dfrac{1}{2}$" },
            ],
            correctId: "A",
            explanation: "$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$.",
            difficulty: "debutant",
          },
          {
            id: "frac5-l3-e3",
            question: "$\\dfrac{2}{3} \\div \\dfrac{4}{5}$ est égal à $\\dfrac{2}{3} \\times \\dfrac{5}{4}$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Diviser par $\\frac{4}{5}$ revient à multiplier par son inverse $\\frac{5}{4}$. L'affirmation est vraie.",
            difficulty: "intermediaire",
          },
          {
            id: "frac5-l3-e4",
            question: "Calculer et simplifier : $\\dfrac{3}{5} \\div \\dfrac{9}{10}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{2}{3}$" },
              { id: "B", text: "$\\dfrac{27}{50}$" },
              { id: "C", text: "$\\dfrac{3}{2}$" },
              { id: "D", text: "$\\dfrac{6}{5}$" },
            ],
            correctId: "A",
            explanation: "$\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$ après simplification par $15$.",
            difficulty: "intermediaire",
          },
          {
            id: "frac5-l3-e5",
            question: "On partage $\\dfrac{4}{5}$ L de jus en parts de $\\dfrac{1}{10}$ L. Combien de parts obtient-on ?",
            type: "open",
            modelAnswer: "On cherche combien de fois $\\frac{1}{10}$ tient dans $\\frac{4}{5}$, donc on calcule $\\frac{4}{5} \\div \\frac{1}{10}$.\\n\\n$$\\frac{4}{5} \\div \\frac{1}{10} = \\frac{4}{5} \\times \\frac{10}{1} = \\frac{40}{5} = 8$$\\n\\n$$\\boxed{8 \\text{ parts}}$$",
            explanation: "Diviser par $\\frac{1}{10}$ revient à multiplier par $10$, puis simplifier.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5ème — Proportionnalité
  // ─────────────────────────────────────────────
  {
    id: "proportionnalite-5eme-id",
    slug: "proportionnalite-5eme",
    title: "Proportionnalité",
    description: "Reconnaissez les situations de proportionnalité et utilisez le coefficient de proportionnalité pour résoudre des problèmes de vitesse, d'échelle et de recettes.",
    schoolLevel: "5eme",
    subject: "algebre",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "⇗",
    lessons: [
      {
        id: "prop5-1",
        slug: "reconnaitre-proportionnalite",
        title: "Reconnaître une situation de proportionnalité",
        durationMinutes: 12,
        content: `## Qu'est-ce que la proportionnalité ?

Deux grandeurs sont **proportionnelles** si on passe de l'une à l'autre en multipliant toujours par le **même nombre**, appelé **coefficient de proportionnalité**.

### Exemple : tableau de proportionnalité

| Nombre de stylos | 2 | 5 | 8 |
|-----|-----|-----|-----|
| Prix (€) | 3 | 7,5 | 12 |

On vérifie que $\\dfrac{3}{2} = \\dfrac{7{,}5}{5} = \\dfrac{12}{8} = 1{,}5$. Le coefficient de proportionnalité est $1{,}5$.

### Tester la proportionnalité

Pour vérifier si un tableau est un tableau de proportionnalité, on calcule le quotient de chaque colonne ($\\dfrac{\\text{ligne du bas}}{\\text{ligne du haut}}$) : si tous les quotients sont égaux, le tableau **est** un tableau de proportionnalité.

### Propriété d'addition

Si deux grandeurs sont proportionnelles, on peut additionner deux colonnes pour obtenir une nouvelle colonne valide : $2 + 5 = 7$ stylos coûteront $3 + 7{,}5 = 10{,}5$ €.`,
        exercises: [
          {
            id: "prop5-l1-e1",
            question: "Un tableau a pour lignes $4, 6, 10$ et $6, 9, 15$. Est-il proportionnel ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, le coefficient est $1{,}5$" },
              { id: "B", text: "Non, les quotients sont différents" },
              { id: "C", text: "Oui, le coefficient est $2$" },
              { id: "D", text: "Impossible à savoir" },
            ],
            correctId: "A",
            explanation: "$\\frac{6}{4} = 1{,}5$, $\\frac{9}{6} = 1{,}5$, $\\frac{15}{10} = 1{,}5$. Les trois quotients sont égaux, donc le tableau est proportionnel de coefficient $1{,}5$.",
            difficulty: "debutant",
          },
          {
            id: "prop5-l1-e2",
            question: "5 baguettes coûtent 4,50 €. Quel est le prix d'une seule baguette (coefficient de proportionnalité) ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}90$ €" },
              { id: "B", text: "$5{,}50$ €" },
              { id: "C", text: "$22{,}50$ €" },
              { id: "D", text: "$9$ €" },
            ],
            correctId: "A",
            explanation: "Le coefficient de proportionnalité (prix d'une baguette) est $4{,}50 \\div 5 = 0{,}90$ €.",
            difficulty: "debutant",
          },
          {
            id: "prop5-l1-e3",
            question: "Si on double une grandeur dans une situation de proportionnalité, l'autre grandeur double aussi.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est la propriété fondamentale de la proportionnalité : multiplier une grandeur par un nombre multiplie l'autre par ce même nombre.",
            difficulty: "intermediaire",
          },
          {
            id: "prop5-l1-e4",
            question: "Le tableau suivant est-il proportionnel ? Ligne 1 : $3, 5, 8$. Ligne 2 : $9, 15, 25$.",
            type: "mcq",
            options: [
              { id: "A", text: "Non" },
              { id: "B", text: "Oui, coefficient 3" },
              { id: "C", text: "Oui, coefficient 5" },
              { id: "D", text: "Oui, coefficient 8" },
            ],
            correctId: "A",
            explanation: "$\\frac{9}{3} = 3$, $\\frac{15}{5} = 3$, mais $\\frac{25}{8} = 3{,}125 \\neq 3$. Les quotients ne sont pas tous égaux, le tableau n'est pas proportionnel.",
            difficulty: "intermediaire",
          },
          {
            id: "prop5-l1-e5",
            question: "3 kg de pommes coûtent 5,40 €. Combien coûtent 7 kg de pommes ? Détaille ta méthode.",
            type: "open",
            modelAnswer: "On calcule le coefficient de proportionnalité (prix d'un kg) :\\n\\n$$5{,}40 \\div 3 = 1{,}80 \\text{ €/kg}$$\\n\\nPour 7 kg :\\n\\n$$1{,}80 \\times 7 = 12{,}60$$\\n\\n$$\\boxed{12{,}60 \\text{ €}}$$",
            explanation: "On trouve le prix d'un kilogramme (coefficient), puis on multiplie par la quantité voulue.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "prop5-2",
        slug: "vitesse-distance-temps",
        title: "Vitesse, distance et temps",
        durationMinutes: 12,
        content: `## Vitesse moyenne

La vitesse moyenne relie trois grandeurs proportionnelles : distance, temps et vitesse.

$$v = \\frac{d}{t}$$

où $v$ est la vitesse, $d$ la distance parcourue et $t$ la durée du trajet.

### Unités

Si $d$ est en km et $t$ en heures, alors $v$ s'exprime en km/h.

### Formules dérivées

$$d = v \\times t \\qquad t = \\frac{d}{v}$$

**Exemple :** Une voiture roule à $90$ km/h pendant $2{,}5$ h. La distance parcourue est :

$$d = 90 \\times 2{,}5 = 225 \\text{ km}$$`,
        exercises: [
          {
            id: "prop5-l2-e1",
            question: "Un cycliste parcourt $60$ km en $3$ h. Quelle est sa vitesse moyenne ?",
            type: "mcq",
            options: [
              { id: "A", text: "$20$ km/h" },
              { id: "B", text: "$180$ km/h" },
              { id: "C", text: "$63$ km/h" },
              { id: "D", text: "$57$ km/h" },
            ],
            correctId: "A",
            explanation: "$v = \\frac{d}{t} = \\frac{60}{3} = 20$ km/h.",
            difficulty: "debutant",
          },
          {
            id: "prop5-l2-e2",
            question: "Une voiture roule à $80$ km/h pendant $1{,}5$ h. Quelle distance parcourt-elle ?",
            type: "mcq",
            options: [
              { id: "A", text: "$120$ km" },
              { id: "B", text: "$81{,}5$ km" },
              { id: "C", text: "$53{,}3$ km" },
              { id: "D", text: "$160$ km" },
            ],
            correctId: "A",
            explanation: "$d = v \\times t = 80 \\times 1{,}5 = 120$ km.",
            difficulty: "debutant",
          },
          {
            id: "prop5-l2-e3",
            question: "La vitesse, la distance et le temps sont liés par une relation de proportionnalité à vitesse constante.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "À vitesse constante, la distance parcourue est proportionnelle au temps écoulé : $d = v \\times t$ avec $v$ fixe.",
            difficulty: "intermediaire",
          },
          {
            id: "prop5-l2-e4",
            question: "Combien de temps faut-il pour parcourir $150$ km à $50$ km/h ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$ h" },
              { id: "B", text: "$2$ h" },
              { id: "C", text: "$7\\,500$ h" },
              { id: "D", text: "$100$ h" },
            ],
            correctId: "A",
            explanation: "$t = \\frac{d}{v} = \\frac{150}{50} = 3$ h.",
            difficulty: "intermediaire",
          },
          {
            id: "prop5-l2-e5",
            question: "Un TGV parcourt 320 km en 1 h 36 min. Calcule sa vitesse moyenne en km/h.",
            type: "open",
            modelAnswer: "On convertit la durée en heures : $1$ h $36$ min $= 1 + \\frac{36}{60} = 1{,}6$ h.\\n\\n$$v = \\frac{d}{t} = \\frac{320}{1{,}6} = 200$$\\n\\n$$\\boxed{200 \\text{ km/h}}$$",
            explanation: "On convertit d'abord les minutes en heures décimales avant d'appliquer la formule $v = d/t$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "prop5-3",
        slug: "echelles-pourcentages",
        title: "Échelles et pourcentages",
        durationMinutes: 10,
        content: `## Échelles

Une **échelle** est un coefficient de proportionnalité entre une longueur sur un plan/une carte et la longueur réelle correspondante.

$$\\text{échelle} = \\frac{\\text{longueur sur le plan}}{\\text{longueur réelle}}$$

**Exemple :** sur une carte à l'échelle $1/25\\,000$, $1$ cm représente $25\\,000$ cm $= 250$ m dans la réalité.

## Pourcentages

Calculer $p\\%$ d'une quantité $N$, c'est calculer :

$$\\frac{p}{100} \\times N$$

**Exemple :** $20\\%$ de $80$ :

$$\\frac{20}{100} \\times 80 = 0{,}2 \\times 80 = 16$$

> Les pourcentages sont une situation de proportionnalité particulière, avec $100$ comme référence.`,
        exercises: [
          {
            id: "prop5-l3-e1",
            question: "Sur un plan à l'échelle $1/1\\,000$, un segment mesure $4$ cm. Quelle est la longueur réelle ?",
            type: "mcq",
            options: [
              { id: "A", text: "$40$ m" },
              { id: "B", text: "$4\\,000$ m" },
              { id: "C", text: "$0{,}4$ m" },
              { id: "D", text: "$400$ m" },
            ],
            correctId: "A",
            explanation: "Longueur réelle $= 4 \\times 1\\,000 = 4\\,000$ cm $= 40$ m.",
            difficulty: "debutant",
          },
          {
            id: "prop5-l3-e2",
            question: "Calculer $25\\%$ de $200$.",
            type: "mcq",
            options: [
              { id: "A", text: "$50$" },
              { id: "B", text: "$25$" },
              { id: "C", text: "$75$" },
              { id: "D", text: "$8$" },
            ],
            correctId: "A",
            explanation: "$\\frac{25}{100} \\times 200 = 0{,}25 \\times 200 = 50$.",
            difficulty: "debutant",
          },
          {
            id: "prop5-l3-e3",
            question: "Une échelle de $1/50\\,000$ signifie que $1$ cm sur la carte représente $500$ m dans la réalité.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$1$ cm $\\times 50\\,000 = 50\\,000$ cm $= 500$ m. L'affirmation est vraie.",
            difficulty: "intermediaire",
          },
          {
            id: "prop5-l3-e4",
            question: "Un article coûte 60 € et bénéficie d'une réduction de $15\\%$. Quel est le nouveau prix ?",
            type: "mcq",
            options: [
              { id: "A", text: "$51$ €" },
              { id: "B", text: "$45$ €" },
              { id: "C", text: "$9$ €" },
              { id: "D", text: "$69$ €" },
            ],
            correctId: "A",
            explanation: "Réduction $= \\frac{15}{100} \\times 60 = 9$ €. Nouveau prix $= 60 - 9 = 51$ €.",
            difficulty: "intermediaire",
          },
          {
            id: "prop5-l3-e5",
            question: "Sur une carte, une distance réelle de $12$ km est représentée par un segment de $6$ cm. Quelle est l'échelle de la carte ?",
            type: "open",
            modelAnswer: "On convertit la distance réelle en cm : $12$ km $= 1\\,200\\,000$ cm.\\n\\n$$\\text{échelle} = \\frac{6}{1\\,200\\,000} = \\frac{1}{200\\,000}$$\\n\\n$$\\boxed{1/200\\,000}$$",
            explanation: "On met les deux longueurs dans la même unité avant de calculer le rapport longueur plan / longueur réelle.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5ème — Symétrie centrale et parallélogramme
  // ─────────────────────────────────────────────
  {
    id: "symetrie-5eme-id",
    slug: "symetrie-parallelogramme-5eme",
    title: "Symétrie centrale et parallélogramme",
    description: "Construisez le symétrique d'une figure par rapport à un point et découvrez les propriétés du parallélogramme.",
    schoolLevel: "5eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "⟳",
    lessons: [
      {
        id: "sym5-1",
        slug: "symetrie-centrale",
        title: "La symétrie centrale",
        durationMinutes: 12,
        content: `## Symétrie centrale

Le symétrique d'un point $A$ par rapport à un point $O$ est le point $A'$ tel que $O$ soit le **milieu** du segment $[AA']$.

### Propriétés conservées

La symétrie centrale conserve :
- les **longueurs** (la figure et son symétrique sont superposables) ;
- les **angles** ;
- les **aires** ;
- le **parallélisme** et l'**alignement**.

### Construction

Pour construire le symétrique d'un point $A$ par rapport à $O$ : on trace la droite $(AO)$, puis on place $A'$ sur cette droite tel que $OA' = OA$, de l'autre côté de $O$.

### Symétrique d'une droite, d'un segment

Le symétrique d'un segment $[AB]$ par rapport à $O$ est un segment $[A'B']$ de **même longueur**, et $(A'B')$ est **parallèle** à $(AB)$.`,
        exercises: [
          {
            id: "sym5-l1-e1",
            question: "$O$ est le milieu de $[AA']$. Que peut-on dire de $A'$ par rapport à $A$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$A'$ est le symétrique de $A$ par rapport à $O$" },
              { id: "B", text: "$A'$ est le symétrique de $A$ par rapport à une droite" },
              { id: "C", text: "$A$ et $A'$ sont confondus" },
              { id: "D", text: "On ne peut rien dire" },
            ],
            correctId: "A",
            explanation: "Par définition, si $O$ est le milieu de $[AA']$, alors $A'$ est le symétrique de $A$ par rapport au point $O$.",
            difficulty: "debutant",
          },
          {
            id: "sym5-l1-e2",
            question: "La symétrie centrale conserve les longueurs.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est une propriété fondamentale : une figure et son symétrique par rapport à un point sont superposables, donc les longueurs sont conservées.",
            difficulty: "debutant",
          },
          {
            id: "sym5-l1-e3",
            question: "$OA = 5$ cm. Si $A'$ est le symétrique de $A$ par rapport à $O$, combien mesure $OA'$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$ cm" },
              { id: "B", text: "$10$ cm" },
              { id: "C", text: "$2{,}5$ cm" },
              { id: "D", text: "On ne peut pas savoir" },
            ],
            correctId: "A",
            explanation: "$O$ est le milieu de $[AA']$, donc $OA = OA' = 5$ cm.",
            difficulty: "intermediaire",
          },
          {
            id: "sym5-l1-e4",
            question: "Le symétrique d'un segment $[AB]$ par rapport à $O$ est un segment $[A'B']$ :",
            type: "mcq",
            options: [
              { id: "A", text: "de même longueur, parallèle à $[AB]$" },
              { id: "B", text: "de longueur différente" },
              { id: "C", text: "perpendiculaire à $[AB]$" },
              { id: "D", text: "deux fois plus long" },
            ],
            correctId: "A",
            explanation: "La symétrie centrale conserve les longueurs et le parallélisme : $[A'B']$ a la même longueur que $[AB]$ et lui est parallèle.",
            difficulty: "intermediaire",
          },
          {
            id: "sym5-l1-e5",
            question: "Explique pourquoi le symétrique d'un cercle de centre $C$ et de rayon $r$, par rapport à un point $O$, est un cercle de même rayon $r$.",
            type: "open",
            modelAnswer: "La symétrie centrale conserve les longueurs (c'est une isométrie).\\n\\nLe cercle de centre $C$ et de rayon $r$ est l'ensemble des points situés à distance $r$ de $C$.\\n\\nSon symétrique par rapport à $O$ est donc l'ensemble des points situés à distance $r$ du symétrique $C'$ de $C$, c'est-à-dire le cercle de centre $C'$ et de rayon $r$.\\n\\n$$\\boxed{\\text{Même rayon } r}$$",
            explanation: "Une symétrie centrale conserve les distances : l'image d'un cercle est donc un cercle de même rayon, centré sur l'image du centre.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "sym5-2",
        slug: "proprietes-parallelogramme",
        title: "Propriétés du parallélogramme",
        durationMinutes: 12,
        content: `## Le parallélogramme

Un **parallélogramme** est un quadrilatère dont les côtés opposés sont parallèles deux à deux.

### Propriétés

Dans un parallélogramme $ABCD$ :
- les côtés opposés sont parallèles **et de même longueur** : $AB = CD$ et $AD = BC$ ;
- les diagonales $[AC]$ et $[BD]$ se coupent en leur **milieu** ;
- les angles opposés sont égaux ;
- le centre du parallélogramme (intersection des diagonales) est un **centre de symétrie**.

### Lien avec la symétrie centrale

Un parallélogramme $ABCD$ est l'image de lui-même par la symétrie centrale de centre $O$ (le point d'intersection des diagonales) : $A$ et $C$ sont symétriques par rapport à $O$, de même que $B$ et $D$.

### Caractérisation

Si dans un quadrilatère $ABCD$ les diagonales $[AC]$ et $[BD]$ ont le **même milieu**, alors $ABCD$ est un parallélogramme.`,
        exercises: [
          {
            id: "sym5-l2-e1",
            question: "Dans un parallélogramme $ABCD$, que peut-on dire des diagonales $[AC]$ et $[BD]$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Elles ont le même milieu" },
              { id: "B", text: "Elles sont perpendiculaires" },
              { id: "C", text: "Elles ont la même longueur" },
              { id: "D", text: "Elles ne se croisent jamais" },
            ],
            correctId: "A",
            explanation: "Une propriété fondamentale du parallélogramme : ses diagonales se coupent en leur milieu commun.",
            difficulty: "debutant",
          },
          {
            id: "sym5-l2-e2",
            question: "Dans un parallélogramme $ABCD$, $AB = 7$ cm. Combien mesure $CD$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$7$ cm" },
              { id: "B", text: "$3{,}5$ cm" },
              { id: "C", text: "$14$ cm" },
              { id: "D", text: "On ne peut pas savoir" },
            ],
            correctId: "A",
            explanation: "Dans un parallélogramme, les côtés opposés ont la même longueur : $CD = AB = 7$ cm.",
            difficulty: "debutant",
          },
          {
            id: "sym5-l2-e3",
            question: "Si les diagonales d'un quadrilatère ont le même milieu, alors ce quadrilatère est un parallélogramme.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est la propriété caractéristique (réciproque) du parallélogramme, très utile pour démontrer qu'un quadrilatère en est un.",
            difficulty: "intermediaire",
          },
          {
            id: "sym5-l2-e4",
            question: "$O$ est le centre d'un parallélogramme $ABCD$. Quelle affirmation est correcte ?",
            type: "mcq",
            options: [
              { id: "A", text: "$A$ et $C$ sont symétriques par rapport à $O$" },
              { id: "B", text: "$A$ et $B$ sont symétriques par rapport à $O$" },
              { id: "C", text: "$O$ est sur le côté $[AB]$" },
              { id: "D", text: "$O$ est un sommet du parallélogramme" },
            ],
            correctId: "A",
            explanation: "$O$, intersection des diagonales, est le milieu de $[AC]$ (et de $[BD]$) : $A$ et $C$ sont donc symétriques par rapport à $O$.",
            difficulty: "intermediaire",
          },
          {
            id: "sym5-l2-e5",
            question: "$ABCD$ est un quadrilatère tel que $(AB) \\parallel (DC)$ et $AB = DC$. Montre que $ABCD$ est un parallélogramme.",
            type: "open",
            modelAnswer: "On utilise la propriété : si un quadrilatère a deux côtés opposés parallèles et de même longueur, alors c'est un parallélogramme.\\n\\nIci $(AB) \\parallel (DC)$ et $AB = DC$ : les conditions sont réunies.\\n\\n$$\\boxed{ABCD \\text{ est un parallélogramme}}$$\\n\\nOn peut aussi le justifier en montrant que $[AC]$ et $[BD]$ ont le même milieu, via un raisonnement sur les translations.",
            explanation: "C'est l'une des propriétés caractéristiques du parallélogramme : deux côtés opposés parallèles et égaux suffisent à le démontrer.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "sym5-3",
        slug: "construire-symetrique",
        title: "Construire des symétriques de figures",
        durationMinutes: 10,
        content: `## Construire le symétrique d'une figure

### Méthode générale

Pour construire le symétrique d'une figure par rapport à un point $O$ :

1. Pour chaque point remarquable de la figure (sommet, extrémité), tracer la droite passant par ce point et $O$.
2. Reporter la même distance de l'autre côté de $O$ sur cette droite.
3. Relier les points obtenus dans le même ordre que la figure initiale.

### Cas particuliers utiles

- Le symétrique d'une droite est une droite **parallèle**.
- Le symétrique d'un segment est un segment de **même longueur**.
- Le symétrique d'un angle a la **même mesure**.
- Le symétrique d'un cercle de rayon $r$ est un cercle de **même rayon**.

### Utiliser le quadrillage

Sur un quadrillage, on compte le nombre de carreaux entre le point et le centre $O$, puis on reporte le même nombre de carreaux de l'autre côté, dans la même direction.`,
        exercises: [
          {
            id: "sym5-l3-e1",
            question: "Pour construire le symétrique d'un point $A$ par rapport à $O$, on trace :",
            type: "mcq",
            options: [
              { id: "A", text: "la droite $(AO)$, puis on reporte $OA$ de l'autre côté de $O$" },
              { id: "B", text: "la perpendiculaire à $(AO)$ passant par $O$" },
              { id: "C", text: "un cercle de centre $A$" },
              { id: "D", text: "la médiatrice de $[AO]$" },
            ],
            correctId: "A",
            explanation: "On trace la droite $(AO)$ puis on place $A'$ tel que $O$ soit le milieu de $[AA']$, donc $OA' = OA$ de l'autre côté.",
            difficulty: "debutant",
          },
          {
            id: "sym5-l3-e2",
            question: "Le symétrique d'un cercle de rayon $4$ cm par rapport à un point est un cercle de rayon :",
            type: "mcq",
            options: [
              { id: "A", text: "$4$ cm" },
              { id: "B", text: "$8$ cm" },
              { id: "C", text: "$2$ cm" },
              { id: "D", text: "On ne peut pas savoir" },
            ],
            correctId: "A",
            explanation: "La symétrie centrale conserve les longueurs : le rayon du cercle symétrique est identique, $4$ cm.",
            difficulty: "debutant",
          },
          {
            id: "sym5-l3-e3",
            question: "Le symétrique d'une droite $(d)$ par rapport à un point $O$ situé sur $(d)$ est $(d)$ elle-même.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Si $O$ appartient à $(d)$, son image par la symétrie est une droite parallèle à $(d)$ passant par $O$ : c'est donc $(d)$ elle-même.",
            difficulty: "intermediaire",
          },
          {
            id: "sym5-l3-e4",
            question: "Sur un quadrillage, $A$ est à $3$ carreaux à gauche de $O$ et $2$ carreaux en haut. Où se trouve $A'$, le symétrique de $A$ par rapport à $O$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$ carreaux à droite de $O$ et $2$ carreaux en bas" },
              { id: "B", text: "$3$ carreaux à gauche de $O$ et $2$ carreaux en bas" },
              { id: "C", text: "Au même endroit que $A$" },
              { id: "D", text: "$2$ carreaux à droite de $O$ et $3$ carreaux en bas" },
            ],
            correctId: "A",
            explanation: "Pour le symétrique par rapport à $O$, on inverse les deux directions : à droite au lieu de à gauche, en bas au lieu d'en haut, en gardant les mêmes distances.",
            difficulty: "intermediaire",
          },
          {
            id: "sym5-l3-e5",
            question: "Pourquoi le symétrique d'un triangle par rapport à un point a-t-il la même aire que le triangle initial ?",
            type: "open",
            modelAnswer: "La symétrie centrale est une **isométrie** : elle conserve toutes les longueurs et tous les angles.\\n\\nLe triangle symétrique a donc des côtés de même longueur et des angles de même mesure que le triangle initial : les deux triangles sont **superposables** (isométriques).\\n\\nDeux figures superposables ont nécessairement la même aire.\\n\\n$$\\boxed{\\text{Même aire, car la symétrie centrale conserve les longueurs et les angles}}$$",
            explanation: "Conserver les longueurs et les angles entraîne que la figure et son image sont superposables, donc de même aire.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4ème — Calcul littéral et équations
  // ─────────────────────────────────────────────
  {
    id: "calcul-litteral-4eme-id",
    slug: "calcul-litteral-4eme",
    title: "Calcul littéral et équations",
    description: "Développez, factorisez et résolvez des équations du premier degré pas à pas, avec des méthodes claires et des vérifications systématiques.",
    schoolLevel: "4eme",
    subject: "algebre",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "𝑥",
    lessons: [
      {
        id: "calc4-1",
        slug: "developper-reduire",
        title: "Développer et réduire une expression",
        durationMinutes: 12,
        content: `## Expressions littérales

Une **expression littérale** contient une ou plusieurs lettres représentant des nombres.

### La distributivité

Pour développer un produit, on utilise la distributivité :

$$k(a + b) = ka + kb \\qquad k(a - b) = ka - kb$$

**Exemple :** $5(x + 3) = 5x + 15$

### Double distributivité

$$(a+b)(c+d) = ac + ad + bc + bd$$

**Exemple :** $(x+2)(x+5) = x^2 + 5x + 2x + 10 = x^2 + 7x + 10$

### Réduire une expression

**Réduire**, c'est regrouper les termes de même nature (mêmes lettres, même puissance) :

$$3x + 5x - 2 = 8x - 2$$

> Attention : $3x$ et $5$ ne sont **pas** de même nature, on ne peut pas les additionner directement.`,
        exercises: [
          {
            id: "calc4-l1-e1",
            question: "Développer : $4(x + 7)$",
            type: "mcq",
            options: [
              { id: "A", text: "$4x + 28$" },
              { id: "B", text: "$4x + 7$" },
              { id: "C", text: "$11x$" },
              { id: "D", text: "$4x + 11$" },
            ],
            correctId: "A",
            explanation: "On distribue : $4 \\times x + 4 \\times 7 = 4x + 28$.",
            difficulty: "debutant",
          },
          {
            id: "calc4-l1-e2",
            question: "Réduire l'expression : $3x + 5 + 2x - 1$",
            type: "mcq",
            options: [
              { id: "A", text: "$5x + 4$" },
              { id: "B", text: "$5x + 6$" },
              { id: "C", text: "$6x + 4$" },
              { id: "D", text: "$10x$" },
            ],
            correctId: "A",
            explanation: "On regroupe les termes en $x$ : $3x + 2x = 5x$, puis les nombres : $5 - 1 = 4$. On obtient $5x + 4$.",
            difficulty: "debutant",
          },
          {
            id: "calc4-l1-e3",
            question: "$3x$ et $3$ sont des termes de même nature, on peut les additionner pour obtenir $6x$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "$3x$ contient la lettre $x$, alors que $3$ est un nombre seul : ce ne sont pas des termes de même nature, on ne peut pas les regrouper.",
            difficulty: "intermediaire",
          },
          {
            id: "calc4-l1-e4",
            question: "Développer : $(x+3)(x+4)$",
            type: "mcq",
            options: [
              { id: "A", text: "$x^2 + 7x + 12$" },
              { id: "B", text: "$x^2 + 12$" },
              { id: "C", text: "$x^2 + 7x$" },
              { id: "D", text: "$2x + 7$" },
            ],
            correctId: "A",
            explanation: "$(x+3)(x+4) = x \\times x + x \\times 4 + 3 \\times x + 3 \\times 4 = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$.",
            difficulty: "intermediaire",
          },
          {
            id: "calc4-l1-e5",
            question: "Développer puis réduire : $3(2x - 1) - 2(x - 4)$",
            type: "open",
            modelAnswer: "On développe chaque parenthèse :\\n\\n$$3(2x-1) = 6x - 3 \\qquad 2(x-4) = 2x - 8$$\\n\\nOn soustrait : $6x - 3 - (2x - 8) = 6x - 3 - 2x + 8$\\n\\nOn réduit : $(6x - 2x) + (-3+8) = 4x + 5$\\n\\n$$\\boxed{4x + 5}$$",
            explanation: "Attention au signe $-$ devant la deuxième parenthèse : il faut changer le signe de chaque terme à l'intérieur.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "calc4-2",
        slug: "factoriser",
        title: "Factoriser une expression",
        durationMinutes: 10,
        content: `## Factoriser

**Factoriser**, c'est transformer une somme en un produit. C'est l'opération inverse du développement.

### Facteur commun

On repère un **facteur commun** à tous les termes :

$$ka + kb = k(a+b)$$

**Exemple :** $6x + 9 = 3(2x + 3)$ car $6x = 3 \\times 2x$ et $9 = 3 \\times 3$.

### Méthode

1. Identifier le facteur commun (le plus grand possible).
2. Diviser chaque terme par ce facteur.
3. Écrire le produit du facteur par la somme obtenue.

**Exemple plus complexe :** $x(x+2) - 5(x+2) = (x+2)(x-5)$, le facteur commun étant $(x+2)$.`,
        exercises: [
          {
            id: "calc4-l2-e1",
            question: "Factoriser : $5x + 10$",
            type: "mcq",
            options: [
              { id: "A", text: "$5(x+2)$" },
              { id: "B", text: "$5(x+10)$" },
              { id: "C", text: "$x(5+10)$" },
              { id: "D", text: "$10(x+5)$" },
            ],
            correctId: "A",
            explanation: "$5x = 5 \\times x$ et $10 = 5 \\times 2$, donc le facteur commun est $5$ : $5x+10 = 5(x+2)$.",
            difficulty: "debutant",
          },
          {
            id: "calc4-l2-e2",
            question: "Quel est le facteur commun dans $7x + 7y$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$7$" },
              { id: "B", text: "$x$" },
              { id: "C", text: "$y$" },
              { id: "D", text: "$xy$" },
            ],
            correctId: "A",
            explanation: "$7x = 7 \\times x$ et $7y = 7 \\times y$ : le facteur commun aux deux termes est $7$.",
            difficulty: "debutant",
          },
          {
            id: "calc4-l2-e3",
            question: "Factoriser et développer sont deux opérations strictement inverses l'une de l'autre.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Développer transforme un produit en somme ; factoriser transforme une somme en produit. Ce sont deux opérations réciproques.",
            difficulty: "intermediaire",
          },
          {
            id: "calc4-l2-e4",
            question: "Factoriser : $x(x+3) + 4(x+3)$",
            type: "mcq",
            options: [
              { id: "A", text: "$(x+3)(x+4)$" },
              { id: "B", text: "$(x+3)(x+3)$" },
              { id: "C", text: "$x(x+7)$" },
              { id: "D", text: "$(x+4)(x+4)$" },
            ],
            correctId: "A",
            explanation: "$(x+3)$ est facteur commun : $x(x+3) + 4(x+3) = (x+3)(x+4)$.",
            difficulty: "intermediaire",
          },
          {
            id: "calc4-l2-e5",
            question: "Factoriser l'expression : $A = (2x+1)(x-3) - 5(2x+1)$",
            type: "open",
            modelAnswer: "Le facteur commun est $(2x+1)$.\\n\\n$$A = (2x+1)(x-3) - 5(2x+1) = (2x+1)\\big[(x-3) - 5\\big]$$\\n\\nOn réduit l'intérieur des crochets : $(x-3) - 5 = x - 8$.\\n\\n$$\\boxed{A = (2x+1)(x-8)}$$",
            explanation: "On factorise par $(2x+1)$, puis on réduit ce qui reste entre crochets.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "calc4-3",
        slug: "resoudre-equations",
        title: "Résoudre une équation du premier degré",
        durationMinutes: 14,
        content: `## Équations du premier degré

Une **équation** est une égalité contenant une inconnue (souvent notée $x$). **Résoudre** une équation, c'est trouver toutes les valeurs de $x$ qui vérifient l'égalité.

### Règles de transformation

On peut, sans changer les solutions :
- ajouter (ou soustraire) le même nombre aux deux membres ;
- multiplier (ou diviser) les deux membres par un même nombre **non nul**.

### Méthode pour $ax + b = c$

$$x = \\frac{c - b}{a}$$

**Exemple :** Résoudre $3x + 5 = 17$

$$3x = 17 - 5 = 12 \\qquad x = \\frac{12}{3} = 4$$

### Vérification

On vérifie toujours en remplaçant $x$ par la solution trouvée dans l'équation initiale : $3 \\times 4 + 5 = 12 + 5 = 17$ ✓`,
        exercises: [
          {
            id: "calc4-l3-e1",
            question: "Résoudre : $x + 7 = 12$",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 5$" },
              { id: "B", text: "$x = 19$" },
              { id: "C", text: "$x = -5$" },
              { id: "D", text: "$x = 84$" },
            ],
            correctId: "A",
            explanation: "On soustrait $7$ aux deux membres : $x = 12 - 7 = 5$.",
            difficulty: "debutant",
          },
          {
            id: "calc4-l3-e2",
            question: "Résoudre : $4x = 20$",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 5$" },
              { id: "B", text: "$x = 16$" },
              { id: "C", text: "$x = 24$" },
              { id: "D", text: "$x = 80$" },
            ],
            correctId: "A",
            explanation: "On divise les deux membres par $4$ : $x = \\frac{20}{4} = 5$.",
            difficulty: "debutant",
          },
          {
            id: "calc4-l3-e3",
            question: "Pour résoudre une équation, on peut multiplier les deux membres par $0$ sans problème.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Multiplier par $0$ transforme l'équation en $0=0$, qui est toujours vraie : on perd toute information sur $x$. C'est interdit.",
            difficulty: "intermediaire",
          },
          {
            id: "calc4-l3-e4",
            question: "Résoudre : $3x - 4 = 2x + 9$",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 13$" },
              { id: "B", text: "$x = 5$" },
              { id: "C", text: "$x = -13$" },
              { id: "D", text: "$x = 1$" },
            ],
            correctId: "A",
            explanation: "On regroupe les $x$ d'un côté : $3x - 2x = 9 + 4$, donc $x = 13$.",
            difficulty: "intermediaire",
          },
          {
            id: "calc4-l3-e5",
            question: "Résoudre l'équation $5(x-2) = 3x + 4$ et vérifier le résultat.",
            type: "open",
            modelAnswer: "On développe : $5x - 10 = 3x + 4$.\\n\\nOn regroupe les $x$ à gauche et les nombres à droite :\\n\\n$$5x - 3x = 4 + 10 \\implies 2x = 14 \\implies x = 7$$\\n\\n**Vérification :** $5(7-2) = 5 \\times 5 = 25$ et $3 \\times 7 + 4 = 21 + 4 = 25$ ✓\\n\\n$$\\boxed{x = 7}$$",
            explanation: "On développe d'abord, puis on isole $x$ en regroupant les termes semblables, et on vérifie en remplaçant dans l'équation de départ.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4ème — Puissances et notation scientifique
  // ─────────────────────────────────────────────
  {
    id: "puissances-4eme-id",
    slug: "puissances-4eme",
    title: "Puissances et notation scientifique",
    description: "Maîtrisez les règles de calcul sur les puissances et apprenez à écrire de très grands ou très petits nombres en notation scientifique.",
    schoolLevel: "4eme",
    subject: "arithmetique",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "10ⁿ",
    lessons: [
      {
        id: "puiss4-1",
        slug: "definition-puissances",
        title: "Définition et puissances de 10",
        durationMinutes: 10,
        content: `## Les puissances

Pour un nombre $a$ et un entier $n > 0$ :

$$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ facteurs}}$$

### Cas particuliers

$$a^0 = 1 \\quad (a \\neq 0) \\qquad a^1 = a \\qquad a^{-n} = \\frac{1}{a^n}$$

### Puissances de 10

$$10^3 = 1\\,000 \\qquad 10^{-2} = \\frac{1}{100} = 0{,}01$$

**Règle pratique :** $10^n$ s'écrit $1$ suivi de $n$ zéros (si $n>0$), et $10^{-n} = \\dfrac{1}{10^n}$ se lit comme un décimal avec $n$ chiffres après la virgule.

| $10^3$ | $10^2$ | $10^1$ | $10^0$ | $10^{-1}$ | $10^{-2}$ |
|-----|-----|-----|-----|-----|-----|
| 1000 | 100 | 10 | 1 | 0,1 | 0,01 |`,
        exercises: [
          {
            id: "puiss4-l1-e1",
            question: "Calculer : $2^4$",
            type: "mcq",
            options: [
              { id: "A", text: "$16$" },
              { id: "B", text: "$8$" },
              { id: "C", text: "$6$" },
              { id: "D", text: "$24$" },
            ],
            correctId: "A",
            explanation: "$2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$.",
            difficulty: "debutant",
          },
          {
            id: "puiss4-l1-e2",
            question: "Que vaut $10^5$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$100\\,000$" },
              { id: "B", text: "$10\\,000$" },
              { id: "C", text: "$50$" },
              { id: "D", text: "$1\\,000\\,000$" },
            ],
            correctId: "A",
            explanation: "$10^5$ s'écrit $1$ suivi de $5$ zéros : $100\\,000$.",
            difficulty: "debutant",
          },
          {
            id: "puiss4-l1-e3",
            question: "Pour tout nombre $a$ non nul, $a^0 = 1$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Par définition (et convention), tout nombre non nul élevé à la puissance $0$ est égal à $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "puiss4-l1-e4",
            question: "Que vaut $10^{-3}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}001$" },
              { id: "B", text: "$-1000$" },
              { id: "C", text: "$1000$" },
              { id: "D", text: "$0{,}1$" },
            ],
            correctId: "A",
            explanation: "$10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} = 0{,}001$.",
            difficulty: "intermediaire",
          },
          {
            id: "puiss4-l1-e5",
            question: "Calculer et simplifier : $(-3)^3$ puis $(-2)^4$. Compare les signes des résultats et explique pourquoi.",
            type: "open",
            modelAnswer: "$(-3)^3 = (-3) \\times (-3) \\times (-3) = 9 \\times (-3) = -27$.\\n\\n$(-2)^4 = (-2) \\times (-2) \\times (-2) \\times (-2) = 4 \\times 4 = 16$.\\n\\nLe premier résultat est négatif (exposant **impair** : 3), le second est positif (exposant **pair** : 4).\\n\\n$$\\boxed{(-3)^3 = -27 \\quad ; \\quad (-2)^4 = 16}$$\\n\\nRègle générale : une puissance d'un nombre négatif est positive si l'exposant est pair, négative s'il est impair.",
            explanation: "Le signe d'une puissance d'un nombre négatif dépend de la parité de l'exposant.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "puiss4-2",
        slug: "regles-calcul-puissances",
        title: "Règles de calcul sur les puissances",
        durationMinutes: 12,
        content: `## Règles de calcul

Pour un nombre $a \\neq 0$ et des entiers $n, m$ :

### Produit de puissances de même base

$$a^n \\times a^m = a^{n+m}$$

### Quotient de puissances de même base

$$\\frac{a^n}{a^m} = a^{n-m}$$

### Puissance d'une puissance

$$(a^n)^m = a^{n \\times m}$$

### Puissance d'un produit

$$(a \\times b)^n = a^n \\times b^n$$

**Exemples :**

$$10^3 \\times 10^5 = 10^{3+5} = 10^8$$

$$\\frac{10^7}{10^2} = 10^{7-2} = 10^5$$

$$(10^2)^3 = 10^{2 \\times 3} = 10^6$$`,
        exercises: [
          {
            id: "puiss4-l2-e1",
            question: "Simplifier : $10^4 \\times 10^3$",
            type: "mcq",
            options: [
              { id: "A", text: "$10^7$" },
              { id: "B", text: "$10^{12}$" },
              { id: "C", text: "$10^1$" },
              { id: "D", text: "$100^7$" },
            ],
            correctId: "A",
            explanation: "On additionne les exposants (même base) : $10^4 \\times 10^3 = 10^{4+3} = 10^7$.",
            difficulty: "debutant",
          },
          {
            id: "puiss4-l2-e2",
            question: "Simplifier : $\\dfrac{10^9}{10^4}$",
            type: "mcq",
            options: [
              { id: "A", text: "$10^5$" },
              { id: "B", text: "$10^{13}$" },
              { id: "C", text: "$10^{2{,}25}$" },
              { id: "D", text: "$10^4$" },
            ],
            correctId: "A",
            explanation: "On soustrait les exposants (même base) : $\\frac{10^9}{10^4} = 10^{9-4} = 10^5$.",
            difficulty: "debutant",
          },
          {
            id: "puiss4-l2-e3",
            question: "$(10^3)^2$ est égal à $10^5$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Pour une puissance de puissance, on multiplie les exposants : $(10^3)^2 = 10^{3 \\times 2} = 10^6$, pas $10^5$.",
            difficulty: "intermediaire",
          },
          {
            id: "puiss4-l2-e4",
            question: "Simplifier : $(2 \\times 10^3)^2$",
            type: "mcq",
            options: [
              { id: "A", text: "$4 \\times 10^6$" },
              { id: "B", text: "$2 \\times 10^6$" },
              { id: "C", text: "$4 \\times 10^9$" },
              { id: "D", text: "$2 \\times 10^9$" },
            ],
            correctId: "A",
            explanation: "$(2 \\times 10^3)^2 = 2^2 \\times (10^3)^2 = 4 \\times 10^6$.",
            difficulty: "intermediaire",
          },
          {
            id: "puiss4-l2-e5",
            question: "Simplifier l'expression $A = \\dfrac{10^5 \\times 10^{-2}}{10^4}$ en détaillant les étapes.",
            type: "open",
            modelAnswer: "On commence par le numérateur : $10^5 \\times 10^{-2} = 10^{5+(-2)} = 10^3$.\\n\\nPuis le quotient : $\\dfrac{10^3}{10^4} = 10^{3-4} = 10^{-1}$.\\n\\n$$\\boxed{A = 10^{-1} = 0{,}1}$$",
            explanation: "On applique d'abord la règle du produit (on additionne les exposants), puis celle du quotient (on soustrait les exposants).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "puiss4-3",
        slug: "notation-scientifique",
        title: "Notation scientifique",
        durationMinutes: 12,
        content: `## La notation scientifique

Un nombre est écrit en **notation scientifique** sous la forme :

$$a \\times 10^n$$

où $1 \\leq a < 10$ et $n$ est un entier (positif, négatif ou nul).

### Pourquoi l'utiliser ?

Elle permet d'écrire de façon compacte des nombres très grands ou très petits, fréquents en sciences.

**Exemples :**

$$320\\,000 = 3{,}2 \\times 10^5 \\qquad 0{,}000\\,047 = 4{,}7 \\times 10^{-5}$$

### Méthode de conversion

Pour écrire un nombre en notation scientifique, on déplace la virgule pour obtenir un nombre $a$ tel que $1 \\leq a < 10$, et l'exposant $n$ correspond au nombre de déplacements (positif vers la gauche, négatif vers la droite).

**Exemple :** $45\\,000 = 4{,}5 \\times 10^4$ (on a déplacé la virgule de $4$ rangs vers la gauche).`,
        exercises: [
          {
            id: "puiss4-l3-e1",
            question: "Écrire $58\\,000$ en notation scientifique.",
            type: "mcq",
            options: [
              { id: "A", text: "$5{,}8 \\times 10^4$" },
              { id: "B", text: "$58 \\times 10^3$" },
              { id: "C", text: "$5{,}8 \\times 10^3$" },
              { id: "D", text: "$0{,}58 \\times 10^5$" },
            ],
            correctId: "A",
            explanation: "On déplace la virgule de $4$ rangs vers la gauche pour obtenir $5{,}8$, un nombre entre $1$ et $10$ : $58\\,000 = 5{,}8 \\times 10^4$.",
            difficulty: "debutant",
          },
          {
            id: "puiss4-l3-e2",
            question: "Écrire $0{,}0032$ en notation scientifique.",
            type: "mcq",
            options: [
              { id: "A", text: "$3{,}2 \\times 10^{-3}$" },
              { id: "B", text: "$3{,}2 \\times 10^{3}$" },
              { id: "C", text: "$32 \\times 10^{-4}$" },
              { id: "D", text: "$0{,}32 \\times 10^{-2}$" },
            ],
            correctId: "A",
            explanation: "On déplace la virgule de $3$ rangs vers la droite : $0{,}0032 = 3{,}2 \\times 10^{-3}$.",
            difficulty: "debutant",
          },
          {
            id: "puiss4-l3-e3",
            question: "Dans l'écriture scientifique $a \\times 10^n$, on doit toujours avoir $1 \\leq a < 10$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est la définition de la notation scientifique : le facteur $a$ doit être compris entre $1$ (inclus) et $10$ (exclu).",
            difficulty: "intermediaire",
          },
          {
            id: "puiss4-l3-e4",
            question: "$45 \\times 10^3$ est-elle une écriture scientifique correcte ?",
            type: "mcq",
            options: [
              { id: "A", text: "Non, car $45 \\geq 10$ ; il faut écrire $4{,}5 \\times 10^4$" },
              { id: "B", text: "Oui, c'est correct" },
              { id: "C", text: "Non, car l'exposant doit être négatif" },
              { id: "D", text: "Non, car $45$ n'est pas un entier" },
            ],
            correctId: "A",
            explanation: "$45$ n'est pas compris entre $1$ et $10$. La forme scientifique correcte est $4{,}5 \\times 10^4$ (en ajustant l'exposant).",
            difficulty: "intermediaire",
          },
          {
            id: "puiss4-l3-e5",
            question: "La masse d'un atome d'hydrogène est environ $0{,}000\\,000\\,000\\,000\\,000\\,000\\,000\\,001\\,67$ g. Écris cette masse en notation scientifique.",
            type: "open",
            modelAnswer: "On déplace la virgule jusqu'à obtenir un nombre entre $1$ et $10$ : on obtient $1{,}67$.\\n\\nOn compte le nombre de rangs déplacés vers la droite : $24$ rangs.\\n\\n$$\\boxed{1{,}67 \\times 10^{-24} \\text{ g}}$$\\n\\nCette écriture est beaucoup plus lisible que la forme décimale complète.",
            explanation: "On repère la première décimale non nulle pour former $a$, puis on compte le nombre de rangs déplacés pour déterminer l'exposant.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4ème — Cosinus dans le triangle rectangle
  // ─────────────────────────────────────────────
  {
    id: "cosinus-4eme-id",
    slug: "cosinus-4eme",
    title: "Cosinus dans le triangle rectangle",
    description: "Découvrez le cosinus d'un angle aigu et utilisez-le pour calculer des longueurs et des angles dans un triangle rectangle.",
    schoolLevel: "4eme",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "◿",
    lessons: [
      {
        id: "cos4-1",
        slug: "definition-cosinus",
        title: "Définition du cosinus",
        durationMinutes: 12,
        content: `## Le cosinus d'un angle aigu

Dans un triangle rectangle, pour un angle aigu $\\widehat{B}$, on définit :

$$\\cos(\\widehat{B}) = \\frac{\\text{côté adjacent à } \\widehat{B}}{\\text{hypoténuse}}$$

### Vocabulaire

Dans un triangle $ABC$ rectangle en $A$, pour l'angle $\\widehat{ABC}$ :
- l'**hypoténuse** est le côté $[BC]$ (opposé à l'angle droit) ;
- le côté **adjacent** à $\\widehat{B}$ est $[AB]$ (qui touche l'angle, mais n'est pas l'hypoténuse).

$$\\cos(\\widehat{B}) = \\frac{AB}{BC}$$

### Propriété importante

Le cosinus d'un angle aigu est toujours compris entre $0$ et $1$ :

$$0 < \\cos(\\widehat{B}) < 1$$

> Le cosinus ne dépend que de la mesure de l'angle, pas de la taille du triangle.`,
        exercises: [
          {
            id: "cos4-l1-e1",
            question: "Dans un triangle $ABC$ rectangle en $A$, quel est le côté adjacent à l'angle $\\widehat{B}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$[AB]$" },
              { id: "B", text: "$[AC]$" },
              { id: "C", text: "$[BC]$" },
              { id: "D", text: "Aucun" },
            ],
            correctId: "A",
            explanation: "Le côté adjacent à $\\widehat{B}$ touche l'angle $\\widehat{B}$ sans être l'hypoténuse : c'est $[AB]$.",
            difficulty: "debutant",
          },
          {
            id: "cos4-l1-e2",
            question: "Le cosinus d'un angle aigu est toujours compris entre :",
            type: "mcq",
            options: [
              { id: "A", text: "$0$ et $1$" },
              { id: "B", text: "$-1$ et $1$" },
              { id: "C", text: "$1$ et $90$" },
              { id: "D", text: "$0$ et $90$" },
            ],
            correctId: "A",
            explanation: "Pour un angle aigu dans un triangle rectangle, le cosinus est toujours strictement compris entre $0$ et $1$.",
            difficulty: "debutant",
          },
          {
            id: "cos4-l1-e3",
            question: "Le cosinus d'un angle dépend de la taille du triangle dans lequel il est mesuré.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Le cosinus ne dépend que de la mesure de l'angle : pour des triangles semblables (même angle), le rapport adjacent/hypoténuse reste constant.",
            difficulty: "intermediaire",
          },
          {
            id: "cos4-l1-e4",
            question: "Dans un triangle $ABC$ rectangle en $A$, $AB = 6$ cm et $BC = 10$ cm. Que vaut $\\cos(\\widehat{B})$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}6$" },
              { id: "B", text: "$0{,}8$" },
              { id: "C", text: "$1{,}67$" },
              { id: "D", text: "$6$" },
            ],
            correctId: "A",
            explanation: "$\\cos(\\widehat{B}) = \\frac{AB}{BC} = \\frac{6}{10} = 0{,}6$.",
            difficulty: "intermediaire",
          },
          {
            id: "cos4-l1-e5",
            question: "Pourquoi le côté adjacent à un angle aigu n'est-il jamais l'hypoténuse ?",
            type: "open",
            modelAnswer: "L'hypoténuse est par définition le côté opposé à l'angle droit, c'est le plus grand côté du triangle rectangle.\\n\\nLe côté adjacent à un angle aigu $\\widehat{B}$ est un côté qui **touche** ce sommet $B$, donc l'un des deux côtés issus de $B$.\\n\\nUn de ces deux côtés est l'hypoténuse elle-même (si $B$ n'est pas le sommet de l'angle droit, l'hypoténuse part bien de $B$), donc par convention on appelle \"côté adjacent\" l'**autre** côté issu de $B$, celui qui n'est pas l'hypoténuse.\\n\\n$$\\boxed{\\text{Par définition, on exclut l'hypoténuse du côté \"adjacent\"}}$$",
            explanation: "La définition du côté adjacent exclut volontairement l'hypoténuse pour distinguer les deux côtés issus du sommet de l'angle.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "cos4-2",
        slug: "calculer-longueurs",
        title: "Calculer une longueur avec le cosinus",
        durationMinutes: 12,
        content: `## Calculer une longueur

Connaissant un angle et l'hypoténuse, on peut calculer le côté adjacent :

$$\\text{adjacent} = \\cos(\\widehat{B}) \\times \\text{hypoténuse}$$

**Exemple :** Dans un triangle rectangle, $BC = 8$ cm et $\\widehat{B} = 60°$. Calculons $AB$ :

$$AB = \\cos(60°) \\times BC = 0{,}5 \\times 8 = 4 \\text{ cm}$$

### Calculer l'hypoténuse

Si on connaît l'angle et le côté adjacent :

$$\\text{hypoténuse} = \\frac{\\text{adjacent}}{\\cos(\\widehat{B})}$$

**Exemple :** $AB = 5$ cm, $\\widehat{B} = 45°$ :

$$BC = \\frac{AB}{\\cos(45°)} = \\frac{5}{0{,}707} \\approx 7{,}07 \\text{ cm}$$`,
        exercises: [
          {
            id: "cos4-l2-e1",
            question: "Dans un triangle rectangle, $BC = 10$ cm et $\\widehat{B} = 60°$ (avec $\\cos(60°) = 0{,}5$). Que vaut $AB$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$ cm" },
              { id: "B", text: "$20$ cm" },
              { id: "C", text: "$10{,}5$ cm" },
              { id: "D", text: "$0{,}5$ cm" },
            ],
            correctId: "A",
            explanation: "$AB = \\cos(\\widehat{B}) \\times BC = 0{,}5 \\times 10 = 5$ cm.",
            difficulty: "debutant",
          },
          {
            id: "cos4-l2-e2",
            question: "Pour calculer le côté adjacent, on utilise la formule :",
            type: "mcq",
            options: [
              { id: "A", text: "adjacent $= \\cos(\\widehat{B}) \\times$ hypoténuse" },
              { id: "B", text: "adjacent $=$ hypoténuse $\\div \\cos(\\widehat{B})$" },
              { id: "C", text: "adjacent $=$ hypoténuse $- \\cos(\\widehat{B})$" },
              { id: "D", text: "adjacent $= \\cos(\\widehat{B}) + $ hypoténuse" },
            ],
            correctId: "A",
            explanation: "Par définition, $\\cos(\\widehat{B}) = \\frac{\\text{adjacent}}{\\text{hypoténuse}}$, donc adjacent $= \\cos(\\widehat{B}) \\times$ hypoténuse.",
            difficulty: "debutant",
          },
          {
            id: "cos4-l2-e3",
            question: "Pour trouver l'hypoténuse à partir du côté adjacent et de l'angle, on multiplie l'adjacent par le cosinus.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Il faut diviser l'adjacent par le cosinus : hypoténuse $= \\frac{\\text{adjacent}}{\\cos(\\widehat{B})}$, pas multiplier.",
            difficulty: "intermediaire",
          },
          {
            id: "cos4-l2-e4",
            question: "$AB = 6$ cm, $\\widehat{B} = 30°$ (avec $\\cos(30°) \\approx 0{,}866$). Calculer $BC$ (au centième).",
            type: "mcq",
            options: [
              { id: "A", text: "$\\approx 6{,}93$ cm" },
              { id: "B", text: "$\\approx 5{,}20$ cm" },
              { id: "C", text: "$\\approx 0{,}14$ cm" },
              { id: "D", text: "$\\approx 6$ cm" },
            ],
            correctId: "A",
            explanation: "$BC = \\frac{AB}{\\cos(\\widehat{B})} = \\frac{6}{0{,}866} \\approx 6{,}93$ cm.",
            difficulty: "intermediaire",
          },
          {
            id: "cos4-l2-e5",
            question: "Une échelle de $4$ m est posée contre un mur et forme un angle de $20°$ avec le mur (vertical). À quelle distance du mur se trouve le pied de l'échelle ? ($\\cos(20°) \\approx 0{,}94$)",
            type: "open",
            modelAnswer: "Le triangle formé par le mur, le sol et l'échelle est rectangle. L'échelle est l'hypoténuse ($4$ m), et l'angle de $20°$ est mesuré entre l'échelle (hypoténuse) et le mur (côté adjacent à cet angle).\\n\\nLa distance au mur est le côté **opposé**, mais on nous donne le cosinus, donc on calcule plutôt la hauteur sur le mur (côté adjacent) :\\n\\n$$\\text{hauteur} = \\cos(20°) \\times 4 \\approx 0{,}94 \\times 4 = 3{,}76 \\text{ m}$$\\n\\n$$\\boxed{\\text{Hauteur sur le mur} \\approx 3{,}76 \\text{ m}}$$",
            explanation: "On identifie l'hypoténuse (l'échelle) et on applique la formule adjacent $= \\cos(\\text{angle}) \\times$ hypoténuse pour trouver la hauteur sur le mur.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "cos4-3",
        slug: "calculer-angles",
        title: "Calculer un angle avec le cosinus",
        durationMinutes: 10,
        content: `## Trouver un angle

Si on connaît le côté adjacent et l'hypoténuse, on calcule d'abord le cosinus, puis on utilise la fonction **arccosinus** (touche $\\cos^{-1}$ de la calculatrice) pour trouver l'angle.

### Méthode

1. Calculer $\\cos(\\widehat{B}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$.
2. Utiliser la calculatrice : $\\widehat{B} = \\cos^{-1}(\\text{valeur trouvée})$.

**Exemple :** $AB = 3$ cm, $BC = 6$ cm.

$$\\cos(\\widehat{B}) = \\frac{3}{6} = 0{,}5$$

$$\\widehat{B} = \\cos^{-1}(0{,}5) = 60°$$

### Vérification

On peut vérifier avec la somme des angles d'un triangle ($180°$) si on connaît les deux autres angles.`,
        exercises: [
          {
            id: "cos4-l3-e1",
            question: "$AB = 4$ cm, $BC = 8$ cm. Que vaut $\\cos(\\widehat{B})$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}5$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$0{,}25$" },
              { id: "D", text: "$32$" },
            ],
            correctId: "A",
            explanation: "$\\cos(\\widehat{B}) = \\frac{AB}{BC} = \\frac{4}{8} = 0{,}5$.",
            difficulty: "debutant",
          },
          {
            id: "cos4-l3-e2",
            question: "Si $\\cos(\\widehat{B}) = 0{,}5$, alors $\\widehat{B}$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$60°$" },
              { id: "B", text: "$30°$" },
              { id: "C", text: "$45°$" },
              { id: "D", text: "$90°$" },
            ],
            correctId: "A",
            explanation: "$\\cos^{-1}(0{,}5) = 60°$, une valeur à connaître par cœur.",
            difficulty: "debutant",
          },
          {
            id: "cos4-l3-e3",
            question: "Pour calculer un angle à partir d'un cosinus connu, on utilise la fonction arccosinus de la calculatrice.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "La touche $\\cos^{-1}$ (arccosinus) de la calculatrice permet de retrouver l'angle à partir de la valeur de son cosinus.",
            difficulty: "intermediaire",
          },
          {
            id: "cos4-l3-e4",
            question: "$AB = 7$ cm, $BC = 10$ cm. Calculer $\\widehat{B}$ au degré près ($\\cos^{-1}(0{,}7) \\approx 45{,}6°$).",
            type: "mcq",
            options: [
              { id: "A", text: "$\\approx 46°$" },
              { id: "B", text: "$\\approx 70°$" },
              { id: "C", text: "$\\approx 17°$" },
              { id: "D", text: "$\\approx 90°$" },
            ],
            correctId: "A",
            explanation: "$\\cos(\\widehat{B}) = \\frac{7}{10} = 0{,}7$, donc $\\widehat{B} = \\cos^{-1}(0{,}7) \\approx 45{,}6° \\approx 46°$.",
            difficulty: "intermediaire",
          },
          {
            id: "cos4-l3-e5",
            question: "Dans un triangle $ABC$ rectangle en $A$, $AB = 5$ cm et $BC = 13$ cm. Calcule l'angle $\\widehat{B}$ au degré près, sachant que $\\cos^{-1}(0{,}385) \\approx 67{,}4°$.",
            type: "open",
            modelAnswer: "On calcule d'abord le cosinus de $\\widehat{B}$ :\\n\\n$$\\cos(\\widehat{B}) = \\frac{AB}{BC} = \\frac{5}{13} \\approx 0{,}385$$\\n\\nOn applique l'arccosinus :\\n\\n$$\\widehat{B} = \\cos^{-1}(0{,}385) \\approx 67{,}4°$$\\n\\n$$\\boxed{\\widehat{B} \\approx 67°}$$",
            explanation: "On calcule le rapport adjacent/hypoténuse, puis on utilise l'arccosinus pour obtenir la mesure de l'angle.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3ème — Théorème de Thalès
  // ─────────────────────────────────────────────
  {
    id: "thales-3eme-id",
    slug: "thales-3eme",
    title: "Théorème de Thalès",
    description: "Repérez les configurations de Thalès, calculez des longueurs manquantes et utilisez la réciproque pour démontrer le parallélisme.",
    schoolLevel: "3eme",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "▷",
    lessons: [
      {
        id: "thales3-1",
        slug: "enonce-thales",
        title: "Énoncé du théorème de Thalès",
        durationMinutes: 14,
        content: `## Le théorème de Thalès

### Configuration

Soient deux droites sécantes en un point $A$, et deux droites $(BC)$ et $(MN)$ parallèles, avec $M$ sur $(AB)$ et $N$ sur $(AC)$.

### Énoncé

Si $(MN) \\parallel (BC)$, alors :

$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$

### Exemple

$AB = 8$ cm, $AM = 3$ cm, $AC = 10$ cm. Comme $(MN) \\parallel (BC)$ :

$$\\frac{AM}{AB} = \\frac{AN}{AC} \\implies \\frac{3}{8} = \\frac{AN}{10} \\implies AN = \\frac{3 \\times 10}{8} = 3{,}75 \\text{ cm}$$

> Astuce : pour ne pas confondre les rapports, on écrit toujours "petit triangle sur grand triangle" du même côté de l'égalité.`,
        exercises: [
          {
            id: "thales3-l1-e1",
            question: "Dans la configuration de Thalès, si $(MN) \\parallel (BC)$, quelle égalité est correcte ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$" },
              { id: "B", text: "$\\dfrac{AM}{AN} = \\dfrac{AB}{MN}$" },
              { id: "C", text: "$AM \\times AB = AN \\times AC$" },
              { id: "D", text: "$AM + AB = AN + AC$" },
            ],
            correctId: "A",
            explanation: "Le théorème de Thalès donne l'égalité des rapports $\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$.",
            difficulty: "debutant",
          },
          {
            id: "thales3-l1-e2",
            question: "Pour appliquer le théorème de Thalès, les droites $(MN)$ et $(BC)$ doivent être :",
            type: "mcq",
            options: [
              { id: "A", text: "parallèles" },
              { id: "B", text: "perpendiculaires" },
              { id: "C", text: "sécantes" },
              { id: "D", text: "de même longueur" },
            ],
            correctId: "A",
            explanation: "Le théorème de Thalès s'applique uniquement si les deux droites $(MN)$ et $(BC)$ sont parallèles.",
            difficulty: "debutant",
          },
          {
            id: "thales3-l1-e3",
            question: "Le théorème de Thalès donne aussi l'égalité des rapports $\\dfrac{MN}{BC}$ avec les deux autres rapports.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "L'énoncé complet du théorème inclut trois rapports égaux : $\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$.",
            difficulty: "intermediaire",
          },
          {
            id: "thales3-l1-e4",
            question: "$AM = 4$ cm, $AB = 6$ cm, $AC = 9$ cm, avec $(MN)\\parallel(BC)$. Calculer $AN$.",
            type: "mcq",
            options: [
              { id: "A", text: "$6$ cm" },
              { id: "B", text: "$5$ cm" },
              { id: "C", text: "$13{,}5$ cm" },
              { id: "D", text: "$4$ cm" },
            ],
            correctId: "A",
            explanation: "$\\frac{AM}{AB} = \\frac{AN}{AC} \\Rightarrow \\frac{4}{6} = \\frac{AN}{9} \\Rightarrow AN = \\frac{4 \\times 9}{6} = 6$ cm.",
            difficulty: "intermediaire",
          },
          {
            id: "thales3-l1-e5",
            question: "$AB = 12$ cm, $AM = 5$ cm, $BC = 9{,}6$ cm, avec $(MN) \\parallel (BC)$. Calcule $MN$ en détaillant ta méthode.",
            type: "open",
            modelAnswer: "On utilise l'égalité des rapports de Thalès :\\n\\n$$\\frac{AM}{AB} = \\frac{MN}{BC}$$\\n\\n$$\\frac{5}{12} = \\frac{MN}{9{,}6}$$\\n\\n$$MN = \\frac{5 \\times 9{,}6}{12} = \\frac{48}{12} = 4$$\\n\\n$$\\boxed{MN = 4 \\text{ cm}}$$",
            explanation: "On isole $MN$ en utilisant le rapport $\\frac{AM}{AB}$, déjà connu, égal à $\\frac{MN}{BC}$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "thales3-2",
        slug: "calculer-longueurs-thales",
        title: "Calculer des longueurs avec Thalès",
        durationMinutes: 12,
        content: `## Appliquer Thalès à des problèmes concrets

### Méthode rédactionnelle

1. Vérifier que les droites portant les côtés "petits" et "grands" sont bien sécantes en un même point.
2. Vérifier (ou admettre comme donnée) que les deux côtés "opposés" sont parallèles.
3. Écrire l'égalité des rapports de Thalès.
4. Substituer les valeurs connues et résoudre.

### Exemple de rédaction

Dans le triangle $AMN$ et $ABC$, les points $A, M, B$ sont alignés, ainsi que $A, N, C$, et $(MN) \\parallel (BC)$.

D'après le théorème de Thalès :

$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$

On utilise alors les valeurs numériques de l'énoncé pour calculer la longueur demandée par un produit en croix.`,
        exercises: [
          {
            id: "thales3-l2-e1",
            question: "Quelle est la première étape pour appliquer le théorème de Thalès dans un exercice ?",
            type: "mcq",
            options: [
              { id: "A", text: "Vérifier l'alignement des points et le parallélisme" },
              { id: "B", text: "Calculer directement les longueurs" },
              { id: "C", text: "Tracer la médiatrice" },
              { id: "D", text: "Mesurer les angles" },
            ],
            correctId: "A",
            explanation: "Avant d'écrire l'égalité des rapports, il faut vérifier les conditions d'application : alignement des points et parallélisme des droites.",
            difficulty: "debutant",
          },
          {
            id: "thales3-l2-e2",
            question: "$AM = 6$, $AB = 10$, $AN = 9$. Quelle est la valeur de $AC$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$15$" },
              { id: "B", text: "$5{,}4$" },
              { id: "C", text: "$13$" },
              { id: "D", text: "$10$" },
            ],
            correctId: "A",
            explanation: "$\\frac{AM}{AB} = \\frac{AN}{AC} \\Rightarrow \\frac{6}{10} = \\frac{9}{AC} \\Rightarrow AC = \\frac{9 \\times 10}{6} = 15$.",
            difficulty: "debutant",
          },
          {
            id: "thales3-l2-e3",
            question: "On peut appliquer Thalès même si les points ne sont pas alignés comme demandé par le théorème.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "L'alignement des points (sur les deux droites sécantes) est une condition indispensable pour appliquer le théorème de Thalès.",
            difficulty: "intermediaire",
          },
          {
            id: "thales3-l2-e4",
            question: "Une échelle de $5$ m est posée contre un mur. Un point situé à $2$ m du sol sur l'échelle projette une ombre sur le mur à $1{,}6$ m. Si le sommet de l'échelle est à $4$ m du sol, quelle relation utiliser ?",
            type: "mcq",
            options: [
              { id: "A", text: "Le théorème de Thalès avec des triangles semblables" },
              { id: "B", text: "Le théorème de Pythagore uniquement" },
              { id: "C", text: "La symétrie centrale" },
              { id: "D", text: "Aucune relation ne s'applique" },
            ],
            correctId: "A",
            explanation: "Deux triangles emboîtés avec des côtés parallèles (le mur et la projection) forment une configuration de Thalès.",
            difficulty: "intermediaire",
          },
          {
            id: "thales3-l2-e5",
            question: "Un poteau de $2$ m projette une ombre de $3$ m. Au même moment, un arbre projette une ombre de $12$ m. Quelle est la hauteur de l'arbre ? (Les rayons du soleil sont parallèles, situation de Thalès.)",
            type: "open",
            modelAnswer: "Les triangles formés par le poteau/son ombre et l'arbre/son ombre sont semblables (configuration de Thalès, rayons parallèles).\\n\\n$$\\frac{\\text{hauteur poteau}}{\\text{ombre poteau}} = \\frac{\\text{hauteur arbre}}{\\text{ombre arbre}}$$\\n\\n$$\\frac{2}{3} = \\frac{h}{12} \\implies h = \\frac{2 \\times 12}{3} = 8$$\\n\\n$$\\boxed{\\text{L'arbre mesure } 8 \\text{ m}}$$",
            explanation: "Les ombres projetées par des rayons parallèles créent des triangles semblables : on applique le rapport hauteur/ombre, identique pour les deux objets.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "thales3-3",
        slug: "reciproque-thales",
        title: "La réciproque du théorème de Thalès",
        durationMinutes: 12,
        content: `## Réciproque du théorème de Thalès

La réciproque permet de **démontrer que deux droites sont parallèles**.

### Énoncé

Si $A, M, B$ sont alignés, $A, N, C$ sont alignés, et si :

$$\\frac{AM}{AB} = \\frac{AN}{AC}$$

alors $(MN) \\parallel (BC)$.

### Méthode

1. Calculer séparément $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$ (sous forme de fractions ou de décimaux).
2. Comparer les deux résultats.
3. S'ils sont **égaux**, conclure que $(MN) \\parallel (BC)$ par la réciproque de Thalès.

### Attention

Si les deux rapports sont différents, on ne peut **rien conclure** sur le parallélisme directement — il faudrait une autre méthode.`,
        exercises: [
          {
            id: "thales3-l3-e1",
            question: "La réciproque du théorème de Thalès permet de démontrer :",
            type: "mcq",
            options: [
              { id: "A", text: "que deux droites sont parallèles" },
              { id: "B", text: "qu'un triangle est rectangle" },
              { id: "C", text: "que deux droites sont perpendiculaires" },
              { id: "D", text: "qu'un point est un milieu" },
            ],
            correctId: "A",
            explanation: "La réciproque de Thalès sert précisément à démontrer le parallélisme de deux droites à partir de l'égalité de rapports de longueurs.",
            difficulty: "debutant",
          },
          {
            id: "thales3-l3-e2",
            question: "$AM = 3$, $AB = 6$, $AN = 4$, $AC = 8$. Les droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, car $\\frac{3}{6} = \\frac{4}{8} = 0{,}5$" },
              { id: "B", text: "Non, les rapports sont différents" },
              { id: "C", text: "On ne peut pas savoir" },
              { id: "D", text: "Oui, car $AM < AB$" },
            ],
            correctId: "A",
            explanation: "$\\frac{AM}{AB} = \\frac{3}{6} = 0{,}5$ et $\\frac{AN}{AC} = \\frac{4}{8} = 0{,}5$. Les rapports sont égaux, donc par la réciproque de Thalès, $(MN) \\parallel (BC)$.",
            difficulty: "debutant",
          },
          {
            id: "thales3-l3-e3",
            question: "Si les rapports $\\frac{AM}{AB}$ et $\\frac{AN}{AC}$ sont différents, alors $(MN)$ et $(BC)$ ne sont certainement pas parallèles.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Par contraposée de la réciproque de Thalès : si les rapports sont différents (et les points bien alignés), les droites ne peuvent pas être parallèles.",
            difficulty: "intermediaire",
          },
          {
            id: "thales3-l3-e4",
            question: "$AM = 2$, $AB = 5$, $AN = 3$, $AC = 7{,}5$. Que peut-on conclure ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(MN) \\parallel (BC)$ car $\\frac{2}{5} = \\frac{3}{7{,}5} = 0{,}4$" },
              { id: "B", text: "$(MN)$ et $(BC)$ ne sont pas parallèles" },
              { id: "C", text: "Impossible à déterminer" },
              { id: "D", text: "$(MN) \\perp (BC)$" },
            ],
            correctId: "A",
            explanation: "$\\frac{2}{5} = 0{,}4$ et $\\frac{3}{7{,}5} = 0{,}4$ : les rapports sont égaux, donc les droites sont parallèles par la réciproque de Thalès.",
            difficulty: "intermediaire",
          },
          {
            id: "thales3-l3-e5",
            question: "$A$, $M$, $B$ alignés avec $AM=4$, $MB=6$ ; $A$, $N$, $C$ alignés avec $AN=6$, $NC=9$. Démontre que $(MN) \\parallel (BC)$.",
            type: "open",
            modelAnswer: "On calcule $AB$ et $AC$ :\\n\\n$$AB = AM + MB = 4+6 = 10 \\qquad AC = AN + NC = 6+9 = 15$$\\n\\nOn calcule les deux rapports :\\n\\n$$\\frac{AM}{AB} = \\frac{4}{10} = 0{,}4 \\qquad \\frac{AN}{AC} = \\frac{6}{15} = 0{,}4$$\\n\\nLes deux rapports sont égaux, et les points sont alignés dans le bon ordre. D'après la **réciproque du théorème de Thalès** :\\n\\n$$\\boxed{(MN) \\parallel (BC)}$$",
            explanation: "On reconstitue $AB$ et $AC$ à partir des segments donnés, puis on compare les deux rapports pour appliquer la réciproque de Thalès.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3ème — Équations et inéquations
  // ─────────────────────────────────────────────
  {
    id: "equations-3eme-id",
    slug: "equations-inequations-3eme",
    title: "Équations et inéquations",
    description: "Résolvez des équations produit-nul, des inéquations du premier degré, et mettez en équation des problèmes concrets.",
    schoolLevel: "3eme",
    subject: "algebre",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "≤",
    lessons: [
      {
        id: "eqineq3-1",
        slug: "equation-produit-nul",
        title: "Équations produit-nul",
        durationMinutes: 12,
        content: `## Équation produit-nul

### Principe

Un produit de facteurs est nul si et seulement si **au moins un** des facteurs est nul :

$$A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0$$

### Méthode

Pour résoudre $(x-2)(x+5) = 0$ :

$$x - 2 = 0 \\quad \\text{ou} \\quad x + 5 = 0$$

$$x = 2 \\quad \\text{ou} \\quad x = -5$$

L'équation a donc **deux solutions** : $2$ et $-5$.

### Pourquoi factoriser ?

Cette méthode est très utile pour résoudre des équations du second degré qu'on ne sait pas résoudre directement, en les transformant d'abord en produit grâce à une factorisation.

**Exemple :** $x^2 - 4 = 0$ se factorise en $(x-2)(x+2) = 0$, donnant $x = 2$ ou $x = -2$.`,
        exercises: [
          {
            id: "eqineq3-l1-e1",
            question: "Résoudre : $(x-3)(x+1) = 0$",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 3$ ou $x = -1$" },
              { id: "B", text: "$x = -3$ ou $x = 1$" },
              { id: "C", text: "$x = 3$ et $x = 1$" },
              { id: "D", text: "$x = 0$" },
            ],
            correctId: "A",
            explanation: "$x - 3 = 0$ donne $x=3$ ; $x+1=0$ donne $x=-1$. Les deux solutions sont $3$ et $-1$.",
            difficulty: "debutant",
          },
          {
            id: "eqineq3-l1-e2",
            question: "Un produit de deux facteurs est nul si :",
            type: "mcq",
            options: [
              { id: "A", text: "au moins un des facteurs est nul" },
              { id: "B", text: "les deux facteurs sont nuls obligatoirement" },
              { id: "C", text: "les deux facteurs sont égaux" },
              { id: "D", text: "aucun facteur n'est nul" },
            ],
            correctId: "A",
            explanation: "C'est la règle du produit-nul : il suffit qu'un seul des deux facteurs soit nul pour que le produit soit nul.",
            difficulty: "debutant",
          },
          {
            id: "eqineq3-l1-e3",
            question: "L'équation $x^2 - 9 = 0$ peut se résoudre en la factorisant en $(x-3)(x+3) = 0$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$x^2 - 9$ est une différence de carrés : $x^2 - 3^2 = (x-3)(x+3)$. C'est une factorisation valide.",
            difficulty: "intermediaire",
          },
          {
            id: "eqineq3-l1-e4",
            question: "Résoudre : $x^2 - 16 = 0$",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 4$ ou $x = -4$" },
              { id: "B", text: "$x = 16$" },
              { id: "C", text: "$x = 8$ ou $x = -8$" },
              { id: "D", text: "Pas de solution" },
            ],
            correctId: "A",
            explanation: "$x^2-16 = (x-4)(x+4) = 0$, donc $x = 4$ ou $x = -4$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqineq3-l1-e5",
            question: "Résoudre l'équation $3x(x-5) = 0$ et explique pourquoi il y a deux solutions distinctes.",
            type: "open",
            modelAnswer: "Le produit $3x(x-5)$ est nul si l'un des facteurs $3x$ ou $(x-5)$ est nul.\\n\\n$$3x = 0 \\implies x = 0$$\\n\\n$$x - 5 = 0 \\implies x = 5$$\\n\\n$$\\boxed{x = 0 \\text{ ou } x = 5}$$\\n\\nIl y a deux solutions car l'équation est un produit de deux facteurs distincts, chacun donnant sa propre solution.",
            explanation: "On annule chaque facteur séparément ; un produit de deux facteurs différents donne en général deux solutions distinctes.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "eqineq3-2",
        slug: "inequations-premier-degre",
        title: "Résoudre une inéquation",
        durationMinutes: 14,
        content: `## Inéquations du premier degré

Une **inéquation** compare deux expressions à l'aide de $<$, $>$, $\\leq$ ou $\\geq$.

### Règles de transformation

- On peut **ajouter ou soustraire** le même nombre des deux côtés sans changer le sens de l'inégalité.
- On peut **multiplier ou diviser** par un nombre **positif** sans changer le sens.
- Si on multiplie ou divise par un nombre **négatif**, il faut **inverser le sens** de l'inégalité.

### Exemple

Résoudre $-2x + 5 \\leq 11$ :

$$-2x \\leq 11 - 5 = 6$$

On divise par $-2$ (négatif) : on inverse le sens !

$$x \\geq -3$$

### Représenter la solution

La solution $x \\geq -3$ se représente par une demi-droite sur l'axe des nombres, partant de $-3$ (inclus) vers la droite.`,
        exercises: [
          {
            id: "eqineq3-l2-e1",
            question: "Résoudre : $x + 3 < 8$",
            type: "mcq",
            options: [
              { id: "A", text: "$x < 5$" },
              { id: "B", text: "$x < 11$" },
              { id: "C", text: "$x > 5$" },
              { id: "D", text: "$x < -5$" },
            ],
            correctId: "A",
            explanation: "On soustrait $3$ des deux côtés (le sens ne change pas) : $x < 8 - 3 = 5$.",
            difficulty: "debutant",
          },
          {
            id: "eqineq3-l2-e2",
            question: "Quand doit-on inverser le sens d'une inégalité ?",
            type: "mcq",
            options: [
              { id: "A", text: "Quand on multiplie ou divise par un nombre négatif" },
              { id: "B", text: "Quand on ajoute un nombre positif" },
              { id: "C", text: "Toujours" },
              { id: "D", text: "Jamais" },
            ],
            correctId: "A",
            explanation: "Multiplier ou diviser les deux membres d'une inégalité par un nombre négatif inverse le sens de l'inégalité.",
            difficulty: "debutant",
          },
          {
            id: "eqineq3-l2-e3",
            question: "L'inéquation $-3x > 9$ a pour solution $x > -3$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "En divisant par $-3$ (négatif), on inverse le sens : $-3x > 9 \\implies x < -3$, pas $x > -3$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqineq3-l2-e4",
            question: "Résoudre : $-4x + 1 \\geq 13$",
            type: "mcq",
            options: [
              { id: "A", text: "$x \\leq -3$" },
              { id: "B", text: "$x \\geq -3$" },
              { id: "C", text: "$x \\leq 3$" },
              { id: "D", text: "$x \\geq 3$" },
            ],
            correctId: "A",
            explanation: "$-4x \\geq 13 - 1 = 12$. On divise par $-4$ (négatif), donc on inverse : $x \\leq \\frac{12}{-4} = -3$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqineq3-l2-e5",
            question: "Résoudre l'inéquation $5(x-1) \\leq 3x + 7$ et représente la solution sur une droite numérique (décris-la).",
            type: "open",
            modelAnswer: "On développe : $5x - 5 \\leq 3x + 7$.\\n\\nOn regroupe les $x$ à gauche : $5x - 3x \\leq 7 + 5$, soit $2x \\leq 12$.\\n\\nOn divise par $2$ (positif, le sens reste inchangé) :\\n\\n$$x \\leq 6$$\\n\\n$$\\boxed{x \\leq 6}$$\\n\\nSur la droite numérique, on représente cette solution par une demi-droite allant de $6$ (inclus, point plein) vers la gauche, vers $-\\infty$.",
            explanation: "On développe, regroupe les termes, puis on divise par un nombre positif (le sens de l'inégalité ne change pas).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "eqineq3-3",
        slug: "mise-en-equation",
        title: "Mettre un problème en équation",
        durationMinutes: 12,
        content: `## Mettre un problème en équation

### Méthode générale

1. **Choisir** l'inconnue et la nommer (souvent $x$).
2. **Traduire** l'énoncé en une égalité (ou inégalité) mathématique.
3. **Résoudre** l'équation obtenue.
4. **Vérifier** que la solution a du sens dans le contexte du problème, puis conclure avec une phrase.

### Exemple

*"Un nombre augmenté de 7 est égal au triple de ce nombre diminué de 5."*

On note $x$ le nombre cherché :

$$x + 7 = 3x - 5$$

$$7 + 5 = 3x - x \\implies 12 = 2x \\implies x = 6$$

**Conclusion :** le nombre cherché est $6$. Vérification : $6+7=13$ et $3\\times 6 - 5 = 13$ ✓`,
        exercises: [
          {
            id: "eqineq3-l3-e1",
            question: "Quelle est la première étape pour résoudre un problème par une équation ?",
            type: "mcq",
            options: [
              { id: "A", text: "Choisir et nommer l'inconnue" },
              { id: "B", text: "Résoudre directement" },
              { id: "C", text: "Vérifier la réponse" },
              { id: "D", text: "Tracer un graphique" },
            ],
            correctId: "A",
            explanation: "On commence toujours par identifier clairement ce que l'on cherche et lui donner un nom (souvent $x$).",
            difficulty: "debutant",
          },
          {
            id: "eqineq3-l3-e2",
            question: "Traduire : \"Le double d'un nombre augmenté de 3 vaut 17\".",
            type: "mcq",
            options: [
              { id: "A", text: "$2x + 3 = 17$" },
              { id: "B", text: "$x + 3 = 17 \\times 2$" },
              { id: "C", text: "$2(x+3) = 17$" },
              { id: "D", text: "$x \\times 3 = 17 \\times 2$" },
            ],
            correctId: "A",
            explanation: "\"Le double d'un nombre\" est $2x$ ; \"augmenté de 3\" donne $2x+3$ ; \"vaut 17\" donne l'égalité $2x+3=17$.",
            difficulty: "debutant",
          },
          {
            id: "eqineq3-l3-e3",
            question: "Il faut toujours vérifier que la solution trouvée a un sens dans le contexte du problème.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Une solution mathématiquement correcte peut être absurde dans le contexte (ex : une longueur négative) ; il faut toujours vérifier sa cohérence.",
            difficulty: "intermediaire",
          },
          {
            id: "eqineq3-l3-e4",
            question: "La somme de deux nombres consécutifs est $35$. Quelle équation permet de les trouver, en notant $x$ le plus petit ?",
            type: "mcq",
            options: [
              { id: "A", text: "$x + (x+1) = 35$" },
              { id: "B", text: "$x + x = 35$" },
              { id: "C", text: "$2x = 35 + 1$" },
              { id: "D", text: "$x \\times (x+1) = 35$" },
            ],
            correctId: "A",
            explanation: "Deux nombres consécutifs s'écrivent $x$ et $x+1$ ; leur somme est $x + (x+1) = 35$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqineq3-l3-e5",
            question: "Un rectangle a un périmètre de $46$ cm. Sa longueur est le triple de sa largeur. Trouve les dimensions du rectangle.",
            type: "open",
            modelAnswer: "On note $x$ la largeur (en cm). La longueur est alors $3x$.\\n\\nLe périmètre d'un rectangle est $2(\\text{longueur} + \\text{largeur})$ :\\n\\n$$2(3x + x) = 46 \\implies 2 \\times 4x = 46 \\implies 8x = 46 \\implies x = 5{,}75$$\\n\\nLa largeur est $5{,}75$ cm, la longueur est $3 \\times 5{,}75 = 17{,}25$ cm.\\n\\n**Vérification :** $2(17{,}25 + 5{,}75) = 2 \\times 23 = 46$ ✓\\n\\n$$\\boxed{\\text{Largeur} = 5{,}75 \\text{ cm}, \\text{ Longueur} = 17{,}25 \\text{ cm}}$$",
            explanation: "On nomme l'inconnue (la largeur), on exprime la longueur en fonction d'elle, puis on traduit le périmètre en équation.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3ème — Fonctions linéaires et affines
  // ─────────────────────────────────────────────
  {
    id: "fonctions-3eme-id",
    slug: "fonctions-3eme",
    title: "Fonctions linéaires et affines",
    description: "Découvrez la notion de fonction, étudiez les fonctions linéaires et affines, et représentez-les graphiquement.",
    schoolLevel: "3eme",
    subject: "analyse",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "ƒ",
    lessons: [
      {
        id: "fonc3-1",
        slug: "notion-de-fonction",
        title: "Notion de fonction",
        durationMinutes: 12,
        content: `## Qu'est-ce qu'une fonction ?

Une **fonction** $f$ est un procédé qui associe à chaque nombre $x$ un unique nombre, noté $f(x)$ et appelé **image** de $x$ par $f$.

### Notation

$$f : x \\mapsto f(x)$$

**Exemple :** $f(x) = 2x + 3$ signifie que pour calculer l'image d'un nombre, on le multiplie par $2$ puis on ajoute $3$.

$$f(4) = 2 \\times 4 + 3 = 11$$

On dit que $11$ est l'image de $4$ par $f$, et que $4$ est un **antécédent** de $11$.

### Calculer une image et un antécédent

- Calculer une **image** : on remplace $x$ par sa valeur dans l'expression de $f(x)$.
- Trouver un **antécédent** de $y$ : on résout l'équation $f(x) = y$.`,
        exercises: [
          {
            id: "fonc3-l1-e1",
            question: "$f(x) = 3x - 2$. Quelle est l'image de $5$ par $f$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$13$" },
              { id: "B", text: "$15$" },
              { id: "C", text: "$17$" },
              { id: "D", text: "$3$" },
            ],
            correctId: "A",
            explanation: "$f(5) = 3 \\times 5 - 2 = 15 - 2 = 13$.",
            difficulty: "debutant",
          },
          {
            id: "fonc3-l1-e2",
            question: "Dans $f(x) = 2x+3$, on dit que $f(x)$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "l'image de $x$ par $f$" },
              { id: "B", text: "l'antécédent de $x$" },
              { id: "C", text: "la fonction elle-même" },
              { id: "D", text: "une équation" },
            ],
            correctId: "A",
            explanation: "$f(x)$ désigne le résultat obtenu en appliquant la fonction $f$ à $x$ : c'est l'image de $x$.",
            difficulty: "debutant",
          },
          {
            id: "fonc3-l1-e3",
            question: "Un nombre peut avoir deux images différentes par une même fonction $f$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Par définition, une fonction associe à chaque nombre une **unique** image : un nombre ne peut pas avoir deux images différentes.",
            difficulty: "intermediaire",
          },
          {
            id: "fonc3-l1-e4",
            question: "$f(x) = 4x - 1$. Quel nombre a pour image $11$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$2{,}5$" },
              { id: "C", text: "$43$" },
              { id: "D", text: "$11$" },
            ],
            correctId: "A",
            explanation: "On résout $4x - 1 = 11 \\implies 4x = 12 \\implies x = 3$.",
            difficulty: "intermediaire",
          },
          {
            id: "fonc3-l1-e5",
            question: "$g(x) = -2x + 5$. Calcule $g(-3)$ et trouve l'antécédent de $9$ par $g$.",
            type: "open",
            modelAnswer: "**Calcul de $g(-3)$ :**\\n\\n$$g(-3) = -2 \\times (-3) + 5 = 6 + 5 = 11$$\\n\\n**Antécédent de $9$ :** on résout $g(x) = 9$.\\n\\n$$-2x + 5 = 9 \\implies -2x = 4 \\implies x = -2$$\\n\\n$$\\boxed{g(-3) = 11 \\quad ; \\quad \\text{antécédent de } 9 \\text{ : } x=-2}$$",
            explanation: "Calculer une image consiste à remplacer $x$ ; trouver un antécédent consiste à résoudre une équation $g(x) = \\text{valeur}$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "fonc3-2",
        slug: "fonctions-lineaires",
        title: "Fonctions linéaires",
        durationMinutes: 12,
        content: `## Fonctions linéaires

Une fonction $f$ est **linéaire** si elle s'écrit sous la forme :

$$f(x) = ax$$

où $a$ est un nombre fixé, appelé **coefficient**.

### Propriétés

- $f(0) = 0$ : la fonction linéaire prend toujours la valeur $0$ en $0$.
- Sa représentation graphique est une **droite passant par l'origine** du repère.
- Une fonction linéaire modélise une situation de **proportionnalité** : $a$ est le coefficient de proportionnalité.

### Exemple

$f(x) = 3x$ représente par exemple le prix de $x$ kg de pommes à $3$ €/kg.

$$f(2) = 6 \\qquad f(5) = 15$$

### Représentation graphique

Pour tracer la droite représentant $f(x) = ax$, il suffit de connaître **un seul point** différent de l'origine (en plus de l'origine $(0,0)$).`,
        exercises: [
          {
            id: "fonc3-l2-e1",
            question: "Quelle est la forme générale d'une fonction linéaire ?",
            type: "mcq",
            options: [
              { id: "A", text: "$f(x) = ax$" },
              { id: "B", text: "$f(x) = ax + b$ avec $b \\neq 0$" },
              { id: "C", text: "$f(x) = x^2$" },
              { id: "D", text: "$f(x) = a$" },
            ],
            correctId: "A",
            explanation: "Une fonction linéaire s'écrit toujours $f(x)=ax$, sans terme constant ajouté.",
            difficulty: "debutant",
          },
          {
            id: "fonc3-l2-e2",
            question: "$f(x) = 5x$. Que vaut $f(0)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$5$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "Indéterminé" },
            ],
            correctId: "A",
            explanation: "Pour toute fonction linéaire, $f(0) = a \\times 0 = 0$.",
            difficulty: "debutant",
          },
          {
            id: "fonc3-l2-e3",
            question: "La représentation graphique d'une fonction linéaire passe toujours par l'origine du repère.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Puisque $f(0) = 0$ pour toute fonction linéaire, le point $(0,0)$ appartient toujours à sa représentation graphique.",
            difficulty: "intermediaire",
          },
          {
            id: "fonc3-l2-e4",
            question: "$f(x) = ax$ et $f(4) = 20$. Quel est le coefficient $a$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$4$" },
              { id: "C", text: "$20$" },
              { id: "D", text: "$0{,}2$" },
            ],
            correctId: "A",
            explanation: "$f(4) = a \\times 4 = 20 \\implies a = \\frac{20}{4} = 5$.",
            difficulty: "intermediaire",
          },
          {
            id: "fonc3-l2-e5",
            question: "Une fonction linéaire $f$ vérifie $f(6) = -18$. Détermine son expression $f(x) = ax$, puis calcule $f(-2)$.",
            type: "open",
            modelAnswer: "On cherche $a$ tel que $f(6) = a \\times 6 = -18$.\\n\\n$$a = \\frac{-18}{6} = -3$$\\n\\nDonc $f(x) = -3x$.\\n\\nOn calcule $f(-2)$ :\\n\\n$$f(-2) = -3 \\times (-2) = 6$$\\n\\n$$\\boxed{f(x) = -3x \\quad ; \\quad f(-2) = 6}$$",
            explanation: "On utilise la valeur connue pour déterminer le coefficient $a$, puis on applique la fonction obtenue à la nouvelle valeur.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "fonc3-3",
        slug: "fonctions-affines",
        title: "Fonctions affines",
        durationMinutes: 12,
        content: `## Fonctions affines

Une fonction $f$ est **affine** si elle s'écrit :

$$f(x) = ax + b$$

où $a$ et $b$ sont des nombres fixés. Une fonction linéaire est un cas particulier de fonction affine, avec $b = 0$.

### Représentation graphique

La représentation graphique d'une fonction affine est une **droite** :
- $a$ est le **coefficient directeur** (la pente de la droite) ;
- $b$ est l'**ordonnée à l'origine** (la valeur de $f(0)$, où la droite coupe l'axe des ordonnées).

### Lire le coefficient directeur

$$a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$$

**Exemple :** $f(x) = 2x + 1$. On a $f(0) = 1$ (ordonnée à l'origine) et $f(1) = 3$, donc la droite "monte" de $2$ quand $x$ augmente de $1$ : $a = 2$.

### Sens de variation

Si $a > 0$, la fonction est **croissante** (la droite monte). Si $a < 0$, elle est **décroissante** (la droite descend).`,
        exercises: [
          {
            id: "fonc3-l3-e1",
            question: "$f(x) = 4x - 7$. Quel est le coefficient directeur ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4$" },
              { id: "B", text: "$-7$" },
              { id: "C", text: "$7$" },
              { id: "D", text: "$-4$" },
            ],
            correctId: "A",
            explanation: "Dans $f(x) = ax + b$, le coefficient directeur est $a$ : ici $a = 4$.",
            difficulty: "debutant",
          },
          {
            id: "fonc3-l3-e2",
            question: "$f(x) = -3x + 5$. Que vaut l'ordonnée à l'origine ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$-3$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$2$" },
            ],
            correctId: "A",
            explanation: "L'ordonnée à l'origine est $b$, la valeur de $f(0)$ : ici $b = 5$.",
            difficulty: "debutant",
          },
          {
            id: "fonc3-l3-e3",
            question: "Si le coefficient directeur $a$ est négatif, la fonction affine est croissante.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Un coefficient directeur négatif correspond à une fonction **décroissante** (la droite descend), pas croissante.",
            difficulty: "intermediaire",
          },
          {
            id: "fonc3-l3-e4",
            question: "Une droite passe par les points $(0, 2)$ et $(3, 11)$. Quel est son coefficient directeur ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$9$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "$11$" },
            ],
            correctId: "A",
            explanation: "$a = \\frac{11-2}{3-0} = \\frac{9}{3} = 3$.",
            difficulty: "intermediaire",
          },
          {
            id: "fonc3-l3-e5",
            question: "Une fonction affine $f$ vérifie $f(1) = 7$ et $f(4) = 16$. Détermine l'expression de $f(x) = ax+b$.",
            type: "open",
            modelAnswer: "On calcule d'abord le coefficient directeur $a$ :\\n\\n$$a = \\frac{f(4)-f(1)}{4-1} = \\frac{16-7}{3} = \\frac{9}{3} = 3$$\\n\\nOn utilise $f(1) = 7$ pour trouver $b$ :\\n\\n$$f(1) = 3 \\times 1 + b = 7 \\implies b = 4$$\\n\\n$$\\boxed{f(x) = 3x + 4}$$\\n\\n**Vérification :** $f(4) = 3\\times4+4 = 16$ ✓",
            explanation: "On calcule $a$ avec la formule du taux de variation entre deux points connus, puis on en déduit $b$ en remplaçant dans l'une des deux égalités.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3ème — Racines carrées
  // ─────────────────────────────────────────────
  {
    id: "racines-3eme-id",
    slug: "racines-carrees-3eme",
    title: "Racines carrées",
    description: "Comprenez la définition de la racine carrée, simplifiez des expressions et apprenez les règles de calcul sur les radicaux.",
    schoolLevel: "3eme",
    subject: "arithmetique",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "√",
    lessons: [
      {
        id: "racine3-1",
        slug: "definition-racine-carree",
        title: "Définition de la racine carrée",
        durationMinutes: 10,
        content: `## La racine carrée

Pour un nombre positif $a$, la **racine carrée** de $a$, notée $\\sqrt{a}$, est l'unique nombre positif dont le carré est égal à $a$ :

$$\\left(\\sqrt{a}\\right)^2 = a$$

### Carrés parfaits à connaître

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |

**Exemples :** $\\sqrt{25} = 5$ car $5^2 = 25$. $\\sqrt{49} = 7$ car $7^2 = 49$.

### Cas particuliers

$$\\sqrt{0} = 0 \\qquad \\sqrt{1} = 1$$

La racine carrée d'un nombre **négatif n'existe pas** (dans l'ensemble des nombres que nous étudions au collège).

> $\\sqrt{a}$ n'est presque jamais égal à $\\frac{a}{2}$ ou à une valeur "simple" : il faut bien retenir les carrés parfaits.`,
        exercises: [
          {
            id: "racine3-l1-e1",
            question: "Que vaut $\\sqrt{36}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$6$" },
              { id: "B", text: "$18$" },
              { id: "C", text: "$72$" },
              { id: "D", text: "$1296$" },
            ],
            correctId: "A",
            explanation: "$6^2 = 36$, donc $\\sqrt{36} = 6$.",
            difficulty: "debutant",
          },
          {
            id: "racine3-l1-e2",
            question: "$\\sqrt{a}$ existe pour :",
            type: "mcq",
            options: [
              { id: "A", text: "tout nombre $a \\geq 0$" },
              { id: "B", text: "tout nombre $a$, y compris négatif" },
              { id: "C", text: "uniquement les carrés parfaits" },
              { id: "D", text: "uniquement les nombres entiers" },
            ],
            correctId: "A",
            explanation: "La racine carrée n'est définie que pour les nombres positifs ou nuls.",
            difficulty: "debutant",
          },
          {
            id: "racine3-l1-e3",
            question: "$\\sqrt{81} = 9$",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$9^2 = 81$, donc $\\sqrt{81} = 9$. L'affirmation est vraie.",
            difficulty: "intermediaire",
          },
          {
            id: "racine3-l1-e4",
            question: "Que vaut $\\left(\\sqrt{17}\\right)^2$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$17$" },
              { id: "B", text: "$\\sqrt{17}$" },
              { id: "C", text: "$289$" },
              { id: "D", text: "$4{,}12$" },
            ],
            correctId: "A",
            explanation: "Par définition de la racine carrée, $\\left(\\sqrt{a}\\right)^2 = a$ pour tout $a \\geq 0$ : ici $\\left(\\sqrt{17}\\right)^2 = 17$.",
            difficulty: "intermediaire",
          },
          {
            id: "racine3-l1-e5",
            question: "Explique pourquoi $\\sqrt{-4}$ n'existe pas (au niveau collège), alors que $\\sqrt{4}$ existe et vaut $2$.",
            type: "open",
            modelAnswer: "La racine carrée d'un nombre $a$ est le nombre positif dont le carré vaut $a$.\\n\\nOr, le carré de n'importe quel nombre réel (positif ou négatif) est **toujours positif ou nul** : $x^2 \\geq 0$ pour tout $x$.\\n\\nIl n'existe donc aucun nombre réel dont le carré soit égal à $-4$ (un nombre négatif), donc $\\sqrt{-4}$ n'existe pas.\\n\\nEn revanche, $2^2 = 4$, donc $\\sqrt{4} = 2$ existe bien.\\n\\n$$\\boxed{\\text{Un carré n'est jamais négatif} \\Rightarrow \\sqrt{\\text{nombre négatif}} \\text{ n'existe pas}}$$",
            explanation: "Le carré d'un nombre réel est toujours positif ou nul, donc aucun nombre ne peut avoir un carré négatif.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "racine3-2",
        slug: "simplifier-racines",
        title: "Simplifier une racine carrée",
        durationMinutes: 12,
        content: `## Simplifier des racines carrées

### Règle du produit

$$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\quad (a \\geq 0, \\, b \\geq 0)$$

Cette règle permet de **simplifier** une racine en faisant apparaître un carré parfait.

**Exemple :** Simplifier $\\sqrt{75}$.

On cherche le plus grand carré parfait qui divise $75$ : $75 = 25 \\times 3$.

$$\\sqrt{75} = \\sqrt{25 \\times 3} = \\sqrt{25} \\times \\sqrt{3} = 5\\sqrt{3}$$

### Règle du quotient

$$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (a \\geq 0, \\, b > 0)$$

**Exemple :** $\\sqrt{\\dfrac{16}{9}} = \\dfrac{\\sqrt{16}}{\\sqrt{9}} = \\dfrac{4}{3}$

### Forme la plus simple

Une racine carrée est sous sa **forme la plus simple** quand le nombre sous le radical ne contient plus aucun facteur carré parfait (autre que $1$).`,
        exercises: [
          {
            id: "racine3-l2-e1",
            question: "Simplifier : $\\sqrt{50}$",
            type: "mcq",
            options: [
              { id: "A", text: "$5\\sqrt{2}$" },
              { id: "B", text: "$25\\sqrt{2}$" },
              { id: "C", text: "$10\\sqrt{5}$" },
              { id: "D", text: "$2\\sqrt{25}$" },
            ],
            correctId: "A",
            explanation: "$50 = 25 \\times 2$, donc $\\sqrt{50} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$.",
            difficulty: "debutant",
          },
          {
            id: "racine3-l2-e2",
            question: "Simplifier : $\\sqrt{\\dfrac{49}{4}}$",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{7}{2}$" },
              { id: "B", text: "$\\dfrac{49}{2}$" },
              { id: "C", text: "$\\dfrac{7}{4}$" },
              { id: "D", text: "$12{,}25$" },
            ],
            correctId: "A",
            explanation: "$\\sqrt{\\frac{49}{4}} = \\frac{\\sqrt{49}}{\\sqrt{4}} = \\frac{7}{2}$.",
            difficulty: "debutant",
          },
          {
            id: "racine3-l2-e3",
            question: "$\\sqrt{12}$ peut se simplifier en $2\\sqrt{3}$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$12 = 4 \\times 3$, donc $\\sqrt{12} = \\sqrt{4}\\times\\sqrt{3} = 2\\sqrt{3}$. L'affirmation est vraie.",
            difficulty: "intermediaire",
          },
          {
            id: "racine3-l2-e4",
            question: "Simplifier : $\\sqrt{98}$",
            type: "mcq",
            options: [
              { id: "A", text: "$7\\sqrt{2}$" },
              { id: "B", text: "$2\\sqrt{7}$" },
              { id: "C", text: "$49\\sqrt{2}$" },
              { id: "D", text: "$14\\sqrt{2}$" },
            ],
            correctId: "A",
            explanation: "$98 = 49 \\times 2$, donc $\\sqrt{98} = \\sqrt{49} \\times \\sqrt{2} = 7\\sqrt{2}$.",
            difficulty: "intermediaire",
          },
          {
            id: "racine3-l2-e5",
            question: "Simplifie $\\sqrt{72}$ puis calcule $\\sqrt{72} \\times \\sqrt{2}$ sous forme la plus simple possible.",
            type: "open",
            modelAnswer: "**Simplification de $\\sqrt{72}$ :**\\n\\n$72 = 36 \\times 2$, donc $\\sqrt{72} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$.\\n\\n**Calcul de $\\sqrt{72} \\times \\sqrt{2}$ :**\\n\\n$$6\\sqrt{2} \\times \\sqrt{2} = 6 \\times \\left(\\sqrt{2}\\right)^2 = 6 \\times 2 = 12$$\\n\\n$$\\boxed{\\sqrt{72} = 6\\sqrt{2} \\quad ; \\quad \\sqrt{72}\\times\\sqrt{2} = 12}$$",
            explanation: "On extrait le plus grand carré parfait possible ($36$), puis on utilise $\\left(\\sqrt{2}\\right)^2 = 2$ pour simplifier le produit final.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "racine3-3",
        slug: "operations-racines",
        title: "Opérations sur les racines carrées",
        durationMinutes: 12,
        content: `## Additionner, soustraire et multiplier des racines

### Addition et soustraction

On ne peut additionner ou soustraire que des racines carrées **identiques** (comme des termes semblables en calcul littéral) :

$$3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$$

$$\\sqrt{2} + \\sqrt{3} \\neq \\sqrt{5} \\quad \\text{(erreur fréquente à éviter !)}$$

### Multiplication

On utilise la règle $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}$ :

$$\\sqrt{3} \\times \\sqrt{12} = \\sqrt{3 \\times 12} = \\sqrt{36} = 6$$

### Combiner simplification et opérations

**Exemple :** $\\sqrt{8} + \\sqrt{18}$

On simplifie d'abord chaque terme : $\\sqrt{8} = 2\\sqrt{2}$ et $\\sqrt{18} = 3\\sqrt{2}$.

$$\\sqrt{8} + \\sqrt{18} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$$`,
        exercises: [
          {
            id: "racine3-l3-e1",
            question: "Calculer : $4\\sqrt{3} + 5\\sqrt{3}$",
            type: "mcq",
            options: [
              { id: "A", text: "$9\\sqrt{3}$" },
              { id: "B", text: "$9\\sqrt{6}$" },
              { id: "C", text: "$20\\sqrt{3}$" },
              { id: "D", text: "$9$" },
            ],
            correctId: "A",
            explanation: "Les deux termes ont la même racine ($\\sqrt{3}$), on additionne les coefficients : $4+5=9$, donc $9\\sqrt{3}$.",
            difficulty: "debutant",
          },
          {
            id: "racine3-l3-e2",
            question: "Calculer : $\\sqrt{5} \\times \\sqrt{20}$",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$\\sqrt{100}$ non simplifié" },
              { id: "C", text: "$100$" },
              { id: "D", text: "$\\sqrt{25}$" },
            ],
            correctId: "A",
            explanation: "$\\sqrt{5} \\times \\sqrt{20} = \\sqrt{5 \\times 20} = \\sqrt{100} = 10$.",
            difficulty: "debutant",
          },
          {
            id: "racine3-l3-e3",
            question: "$\\sqrt{2} + \\sqrt{8}$ peut se simplifier en $3\\sqrt{2}$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$\\sqrt{8} = 2\\sqrt{2}$, donc $\\sqrt{2} + \\sqrt{8} = \\sqrt{2} + 2\\sqrt{2} = 3\\sqrt{2}$. L'affirmation est vraie.",
            difficulty: "intermediaire",
          },
          {
            id: "racine3-l3-e4",
            question: "Simplifier : $\\sqrt{27} + \\sqrt{12}$",
            type: "mcq",
            options: [
              { id: "A", text: "$5\\sqrt{3}$" },
              { id: "B", text: "$\\sqrt{39}$" },
              { id: "C", text: "$7\\sqrt{3}$" },
              { id: "D", text: "$3\\sqrt{5}$" },
            ],
            correctId: "A",
            explanation: "$\\sqrt{27} = 3\\sqrt{3}$ et $\\sqrt{12} = 2\\sqrt{3}$, donc $\\sqrt{27}+\\sqrt{12} = 3\\sqrt{3}+2\\sqrt{3} = 5\\sqrt{3}$.",
            difficulty: "intermediaire",
          },
          {
            id: "racine3-l3-e5",
            question: "Calcule et simplifie au maximum : $A = \\sqrt{45} - \\sqrt{20} + \\sqrt{5}$",
            type: "open",
            modelAnswer: "On simplifie chaque terme séparément :\\n\\n$$\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}$$\\n$$\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}$$\\n\\nOn remplace dans $A$ :\\n\\n$$A = 3\\sqrt{5} - 2\\sqrt{5} + \\sqrt{5} = (3-2+1)\\sqrt{5} = 2\\sqrt{5}$$\\n\\n$$\\boxed{A = 2\\sqrt{5}}$$",
            explanation: "On simplifie chaque racine pour obtenir des termes de même radical ($\\sqrt{5}$), puis on additionne/soustrait les coefficients comme en calcul littéral.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
];

// Helpers
export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getLessonBySlug(course: Course, lessonSlug: string): Lesson | undefined {
  return course.lessons.find((l) => l.slug === lessonSlug);
}

export function getSubjectLabel(subject: Subject): string {
  const map: Record<Subject, string> = {
    geometrie: "Géométrie",
    algebre: "Algèbre",
    analyse: "Analyse",
    probabilites: "Probabilités",
    arithmetique: "Arithmétique",
  };
  return map[subject];
}

export const LEVEL_LABELS: Record<SchoolLevel, string> = {
  "6eme": "6ème",
  "5eme": "5ème",
  "4eme": "4ème",
  "3eme": "3ème",
  "2nde": "2nde",
  "1ere": "1ère",
  terminale: "Terminale",
  L1: "Licence 1",
  L2: "Licence 2",
  L3: "Licence 3",
};

export type LevelCategory = "college" | "lycee" | "superieur";

export const LEVEL_CATEGORIES: Record<LevelCategory, SchoolLevel[]> = {
  college: ["6eme", "5eme", "4eme", "3eme"],
  lycee: ["2nde", "1ere", "terminale"],
  superieur: ["L1", "L2", "L3"],
};

export const LEVEL_CATEGORY_LABELS: Record<LevelCategory, string> = {
  college: "Collège",
  lycee: "Lycée",
  superieur: "Supérieur",
};

export const XP_BY_DIFFICULTY: Record<Exercise["difficulty"], number> = {
  debutant: 10,
  intermediaire: 25,
  expert: 50,
};

export interface FlatExercise extends Exercise {
  courseSlug: string;
  lessonSlug: string;
  courseTitle: string;
  lessonTitle: string;
  schoolLevel: SchoolLevel;
  subject: Subject;
  xpReward: number;
}

export function getAllExercises(): FlatExercise[] {
  return COURSES.flatMap((course) =>
    course.lessons.flatMap((lesson) =>
      lesson.exercises.map((ex) => ({
        ...ex,
        courseSlug: course.slug,
        lessonSlug: lesson.slug,
        courseTitle: course.title,
        lessonTitle: lesson.title,
        schoolLevel: course.schoolLevel,
        subject: course.subject,
        xpReward: XP_BY_DIFFICULTY[ex.difficulty],
      }))
    )
  );
}

export function getDailyChallenge(schoolLevel?: string | null): FlatExercise {
  const all = getAllExercises();
  // Filter by level when provided, fall back to all exercises if no match
  const exercises = schoolLevel
    ? (all.filter((e) => e.schoolLevel === schoolLevel).length > 0
        ? all.filter((e) => e.schoolLevel === schoolLevel)
        : all)
    : all;
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86_400_000
  );
  return exercises[dayOfYear % exercises.length];
}
