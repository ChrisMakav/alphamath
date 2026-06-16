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
          {
            id: "s1e4",
            question: "Une suite arithmétique a pour premier terme $u_0 = -5$ et raison $r = 2{,}5$. Calcule $u_{10}$ et précise le sens de variation de la suite.",
            type: "open",
            modelAnswer: "$$u_{10} = u_0 + 10r = -5 + 10 \\times 2{,}5 = -5+25 = 20$$\\n\\nComme $r = 2{,}5 > 0$, la suite est strictement croissante.\\n\\n$$\\boxed{u_{10} = 20, \\text{ suite strictement croissante}}$$",
            explanation: "On applique directement la formule du terme général $u_n = u_0+nr$, puis on détermine le sens de variation à partir du signe de la raison $r$.",
            difficulty: "intermediaire",
          },
          {
            id: "s1e5",
            question: "Soit $(u_n)$ une suite arithmétique de raison $r$. On sait que $u_4 = 22$ et $u_{10} = 46$. Détermine $r$ et $u_0$, puis donne l'expression de $u_n$ en fonction de $n$.",
            type: "open",
            modelAnswer: "$u_{10}-u_4 = 6r$, donc $46-22=6r \\implies r = \\dfrac{24}{6}=4$.\\n\\n$u_4 = u_0+4r \\implies 22 = u_0+16 \\implies u_0 = 6$.\\n\\nDonc $u_n = 6+4n$.\\n\\n$$\\boxed{r=4,\\ u_0=6,\\ u_n=6+4n}$$",
            explanation: "On utilise deux termes connus pour former un système permettant de retrouver d'abord la raison $r$ (par différence), puis le premier terme $u_0$.",
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
          {
            id: "s2e2",
            question: "Calcule la somme des $50$ premiers entiers naturels non nuls : $1+2+3+\\cdots+50$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1225$" },
              { id: "B", text: "$1275$" },
              { id: "C", text: "$2500$" },
              { id: "D", text: "$1250$" },
            ],
            correctId: "B",
            explanation: "$\\sum_{k=1}^{50} k = \\dfrac{50\\times51}{2} = \\dfrac{2550}{2} = 1275$.",
            difficulty: "debutant",
          },
          {
            id: "s2e3",
            question: "Soit $(u_n)$ arithmétique avec $u_0=4$ et $r=3$. Calcule $S = u_0+u_1+\\cdots+u_{10}$ (les $11$ premiers termes).",
            type: "open",
            modelAnswer: "$u_{10} = u_0+10r = 4+30=34$.\\n\\n$$S_{10} = (n+1)\\times\\dfrac{u_0+u_n}{2} = 11 \\times \\dfrac{4+34}{2} = 11\\times19 = 209$$\\n\\n$$\\boxed{S=209}$$",
            explanation: "On calcule d'abord le dernier terme $u_{10}$ avec la formule du terme général, puis on applique la formule de la somme : (nombre de termes) × (moyenne du premier et dernier terme).",
            difficulty: "intermediaire",
          },
          {
            id: "s2e4",
            question: "Une suite arithmétique a pour premier terme $u_0=1$ et raison $r=2$ (les entiers impairs). Sachant que la somme des $n+1$ premiers termes d'une telle suite vaut toujours $(n+1)^2$, retrouve ce résultat à partir de la formule générale $S_n=(n+1)\\times\\dfrac{u_0+u_n}{2}$, puis calcule $S_n$ pour $n=14$ (somme des $15$ premiers impairs).",
            type: "open",
            modelAnswer: "On a $u_n = u_0+nr = 1+2n$.\\n\\n$$S_n = (n+1)\\times\\dfrac{u_0+u_n}{2} = (n+1)\\times\\dfrac{1+(1+2n)}{2} = (n+1)\\times\\dfrac{2+2n}{2} = (n+1)\\times(n+1) = (n+1)^2$$\\n\\nOn retrouve bien $S_n=(n+1)^2$.\\n\\nPour $n=14$ : $S_{14} = (14+1)^2 = 15^2 = 225$.\\n\\n$$\\boxed{S_{14} = 225}$$",
            explanation: "On part de la formule générale de la somme et on simplifie l'expression algébriquement pour retrouver la propriété remarquable $S_n=(n+1)^2$ propre à la suite des entiers impairs, avant d'appliquer cette formule à un cas numérique.",
            difficulty: "expert",
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
          {
            id: "s3e2",
            question: "Vrai ou faux : si la raison $q$ d'une suite géométrique vérifie $0 < q < 1$ et que $v_0 > 0$, alors la suite est strictement décroissante.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai : avec $v_0>0$ et $0<q<1$, chaque terme est obtenu en multipliant le précédent par un nombre inférieur à $1$, donc la suite décroît.",
            difficulty: "debutant",
          },
          {
            id: "s3e3",
            question: "Une suite géométrique a pour premier terme $v_0=5$ et raison $q=\\dfrac{1}{2}$. Calcule $v_3$ et précise si la suite est croissante ou décroissante.",
            type: "open",
            modelAnswer: "$$v_3 = v_0 \\times q^3 = 5\\times\\left(\\dfrac{1}{2}\\right)^3 = 5\\times\\dfrac{1}{8} = \\dfrac{5}{8}$$\\n\\nComme $v_0=5>0$ et $0<q<1$, la suite est strictement décroissante.\\n\\n$$\\boxed{v_3=\\dfrac{5}{8}, \\text{ suite décroissante}}$$",
            explanation: "On applique la formule du terme général $v_n=v_0\\cdot q^n$, puis on détermine le sens de variation selon le signe de $v_0$ et la position de $q$ par rapport à $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "s3e4",
            question: "Calcule la somme $S = 1+2+4+8+\\cdots+512$ (suite géométrique de raison $2$, $v_0=1$, dernier terme $512$).",
            type: "open",
            modelAnswer: "On a $v_0=1$, $q=2$, et $v_n=512=2^n \\implies n=9$ (donc $10$ termes, de $v_0$ à $v_9$).\\n\\n$$S_9 = v_0\\times\\dfrac{1-q^{10}}{1-q} = 1\\times\\dfrac{1-2^{10}}{1-2} = \\dfrac{1-1024}{-1} = \\dfrac{-1023}{-1}=1023$$\\n\\n$$\\boxed{S=1023}$$",
            explanation: "On identifie d'abord le nombre de termes à partir du dernier terme donné, puis on applique la formule de la somme géométrique $S_n=v_0\\dfrac{1-q^{n+1}}{1-q}$.",
            difficulty: "intermediaire",
          },
          {
            id: "s3e5",
            question: "Une suite géométrique a pour termes $v_2=12$ et $v_5=96$. Détermine la raison $q$ (positive) et le premier terme $v_0$.",
            type: "open",
            modelAnswer: "$\\dfrac{v_5}{v_2} = q^3$, donc $q^3 = \\dfrac{96}{12}=8 \\implies q=\\sqrt[3]{8}=2$.\\n\\n$v_2 = v_0\\times q^2 \\implies 12 = v_0\\times4 \\implies v_0=3$.\\n\\n$$\\boxed{q=2,\\ v_0=3}$$",
            explanation: "Le rapport de deux termes séparés de $k$ rangs est égal à $q^k$ ; on en déduit $q$ par racine cubique, puis $v_0$ en remontant à partir d'un terme connu.",
            difficulty: "expert",
          },
          {
            id: "s3e6",
            question: "Une suite géométrique vérifie $0<q<1$ et $v_0>0$. Explique pourquoi la somme $S_n=v_0\\dfrac{1-q^{n+1}}{1-q}$ se rapproche d'une limite finie quand $n$ tend vers $+\\infty$, et exprime cette limite.",
            type: "open",
            modelAnswer: "Quand $0<q<1$, la puissance $q^{n+1}$ tend vers $0$ lorsque $n$ tend vers $+\\infty$ (car on multiplie indéfiniment par un nombre inférieur à $1$ en valeur absolue).\\n\\nDonc $S_n = v_0\\dfrac{1-q^{n+1}}{1-q}$ tend vers $v_0\\dfrac{1-0}{1-q} = \\dfrac{v_0}{1-q}$.\\n\\n$$\\boxed{\\lim_{n\\to+\\infty} S_n = \\dfrac{v_0}{1-q}}$$",
            explanation: "C'est le principe de la somme d'une série géométrique convergente : lorsque $|q|<1$, $q^{n+1}\\to0$, ce qui permet de calculer la limite de la somme partielle.",
            difficulty: "expert",
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
          {
            id: "i1e2",
            question: "Vrai ou faux : si $f$ est une fonction continue et négative sur $[a,b]$, alors $\\int_a^b f(x)\\,dx$ est négative ou nulle.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai : le signe de l'intégrale est le signe de la fonction sur l'intervalle considéré, lorsque celle-ci garde un signe constant.",
            difficulty: "debutant",
          },
          {
            id: "i1e3",
            question: "Calcule $\\displaystyle\\int_1^3 \\dfrac{1}{x}\\,dx$ (donner la valeur exacte en fonction de $\\ln$).",
            type: "mcq",
            options: [
              { id: "A", text: "$\\ln(3)$" },
              { id: "B", text: "$\\ln(2)$" },
              { id: "C", text: "$3-1$" },
              { id: "D", text: "$\\ln(1/3)$" },
            ],
            correctId: "A",
            explanation: "Une primitive de $\\dfrac{1}{x}$ est $\\ln(x)$. Donc $\\int_1^3 = \\ln(3)-\\ln(1) = \\ln(3)-0=\\ln(3)$.",
            difficulty: "intermediaire",
          },
          {
            id: "i1e4",
            question: "Utilise la relation de Chasles pour exprimer $\\int_0^5 f(x)\\,dx$ en fonction de $\\int_0^2 f(x)\\,dx = 4$ et $\\int_2^5 f(x)\\,dx = 7$.",
            type: "open",
            modelAnswer: "D'après la relation de Chasles :\\n\\n$$\\int_0^5 f(x)\\,dx = \\int_0^2 f(x)\\,dx + \\int_2^5 f(x)\\,dx = 4+7=11$$\\n\\n$$\\boxed{11}$$",
            explanation: "La relation de Chasles permet de découper un intervalle d'intégration en sous-intervalles et d'additionner les intégrales correspondantes.",
            difficulty: "intermediaire",
          },
          {
            id: "i1e5",
            question: "Soit $f$ continue sur $[-3,3]$ et impaire. Que peut-on dire de $\\int_{-3}^{3} f(x)\\,dx$ ? Justifie en utilisant la symétrie de la courbe.",
            type: "open",
            modelAnswer: "Une fonction impaire vérifie $f(-x)=-f(x)$ : sa courbe est symétrique par rapport à l'origine.\\n\\nL'aire algébrique entre $-3$ et $0$ est donc exactement l'opposée de l'aire algébrique entre $0$ et $3$ : elles s'annulent lorsqu'on les additionne.\\n\\n$$\\int_{-3}^{3} f(x)\\,dx = \\int_{-3}^{0} f(x)\\,dx + \\int_0^3 f(x)\\,dx = 0$$\\n\\n$$\\boxed{\\int_{-3}^{3} f(x)\\,dx = 0}$$",
            explanation: "C'est une propriété classique : l'intégrale d'une fonction impaire sur un intervalle symétrique par rapport à $0$ est toujours nulle, grâce à la relation de Chasles et à la symétrie de la courbe.",
            difficulty: "expert",
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
          {
            id: "i2e2",
            question: "Quelle est la primitive générale de $f(x) = e^{2x}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$F(x) = e^{2x} + C$" },
              { id: "B", text: "$F(x) = \\dfrac{1}{2}e^{2x} + C$" },
              { id: "C", text: "$F(x) = 2e^{2x} + C$" },
              { id: "D", text: "$F(x) = e^{2x+1} + C$" },
            ],
            correctId: "B",
            explanation: "La primitive de $e^{ax}$ est $\\dfrac{1}{a}e^{ax}+C$. Ici $a=2$, donc $F(x)=\\dfrac{1}{2}e^{2x}+C$.",
            difficulty: "debutant",
          },
          {
            id: "i2e3",
            question: "Par changement de variable $t=x^2+1$, calcule $\\displaystyle\\int_0^1 2x\\sqrt{x^2+1}\\,dx$ (valeur exacte).",
            type: "open",
            modelAnswer: "Avec $t=x^2+1$, $dt=2x\\,dx$. Quand $x=0$, $t=1$ ; quand $x=1$, $t=2$.\\n\\n$$\\int_0^1 2x\\sqrt{x^2+1}\\,dx = \\int_1^2 \\sqrt{t}\\,dt = \\left[\\dfrac{2}{3}t^{3/2}\\right]_1^2 = \\dfrac{2}{3}\\left(2\\sqrt{2}-1\\right)$$\\n\\n$$\\boxed{\\dfrac{2}{3}(2\\sqrt{2}-1)}$$",
            explanation: "On repère que $2x\\,dx$ correspond exactement à $dt$ après le changement de variable $t=x^2+1$, ce qui simplifie l'intégrale en une primitive de puissance de $t$.",
            difficulty: "intermediaire",
          },
          {
            id: "i2e4",
            question: "Par IPP, calcule $\\displaystyle\\int_1^e \\ln(x)\\,dx$ (en posant $u=\\ln(x)$, $v'=1$).",
            type: "open",
            modelAnswer: "Avec $u=\\ln(x)$, $v'=1$ : $u'=\\dfrac{1}{x}$, $v=x$.\\n\\n$$\\int_1^e \\ln(x)\\,dx = [x\\ln(x)]_1^e - \\int_1^e 1\\,dx = (e\\times1 - 1\\times0) - [x]_1^e = e - (e-1) = 1$$\\n\\n$$\\boxed{1}$$",
            explanation: "L'astuce classique pour intégrer $\\ln(x)$ seul est de l'écrire comme $\\ln(x)\\times1$ et d'appliquer l'IPP avec $v'=1$.",
            difficulty: "expert",
          },
          {
            id: "i2e5",
            question: "Calcule $\\displaystyle\\int_0^1 x^2 e^x\\,dx$ en appliquant l'intégration par parties deux fois.",
            type: "open",
            modelAnswer: "**Première IPP** avec $u=x^2$, $v'=e^x$ ($u'=2x$, $v=e^x$) :\\n\\n$$\\int_0^1 x^2e^x\\,dx = [x^2e^x]_0^1 - \\int_0^1 2xe^x\\,dx = e - 2\\int_0^1 xe^x\\,dx$$\\n\\n**Deuxième IPP** sur $\\int_0^1 xe^x\\,dx$ avec $u=x$, $v'=e^x$ :\\n\\n$$\\int_0^1 xe^x\\,dx = [xe^x]_0^1 - \\int_0^1 e^x\\,dx = e - (e-1) = 1$$\\n\\nDonc :\\n\\n$$\\int_0^1 x^2e^x\\,dx = e - 2\\times1 = e-2$$\\n\\n$$\\boxed{e-2}$$",
            explanation: "Lorsque l'intégrande contient $x^2$, on applique l'intégration par parties deux fois successivement, en réduisant chaque fois la puissance de $x$.",
            difficulty: "expert",
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
          {
            id: "i3e2",
            question: "Vrai ou faux : le volume de révolution engendré par la rotation de la courbe de $f$ autour de l'axe $(Ox)$ sur $[a,b]$ est donné par $V=\\pi\\int_a^b f(x)\\,dx$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : la formule correcte fait intervenir le carré de $f$ : $V=\\pi\\int_a^b [f(x)]^2\\,dx$, car chaque tranche est un disque d'aire $\\pi r^2$ avec $r=f(x)$.",
            difficulty: "debutant",
          },
          {
            id: "i3e3",
            question: "Calcule l'aire entre la courbe de $f(x)=4-x^2$ et l'axe des abscisses, sur l'intervalle où $f(x)\\geqslant 0$ (c'est-à-dire $[-2,2]$).",
            type: "open",
            modelAnswer: "$$\\mathcal{A} = \\int_{-2}^{2} (4-x^2)\\,dx = \\left[4x-\\dfrac{x^3}{3}\\right]_{-2}^{2}$$\\n\\n$$= \\left(8-\\dfrac{8}{3}\\right) - \\left(-8+\\dfrac{8}{3}\\right) = 8-\\dfrac{8}{3}+8-\\dfrac{8}{3} = 16-\\dfrac{16}{3} = \\dfrac{48-16}{3}=\\dfrac{32}{3}$$\\n\\n$$\\boxed{\\mathcal{A} = \\dfrac{32}{3} \\text{ unités d'aire}}$$",
            explanation: "Comme $f(x)\\geqslant0$ sur $[-2,2]$ (racines de $4-x^2$), l'aire sous la courbe est directement donnée par l'intégrale de $f$ sur cet intervalle.",
            difficulty: "intermediaire",
          },
          {
            id: "i3e4",
            question: "Calcule le volume du solide engendré par la rotation autour de l'axe $(Ox)$ de la courbe de $f(x)=\\sqrt{x}$ sur $[0,4]$.",
            type: "open",
            modelAnswer: "$$V = \\pi\\int_0^4 [f(x)]^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^4 = \\pi\\times\\dfrac{16}{2} = 8\\pi$$\\n\\n$$\\boxed{V = 8\\pi \\text{ unités de volume}}$$",
            explanation: "On élève $f(x)=\\sqrt{x}$ au carré pour obtenir $x$, ce qui simplifie considérablement le calcul de l'intégrale.",
            difficulty: "expert",
          },
          {
            id: "i3e5",
            question: "Les courbes de $f(x)=x^2$ et $g(x)=2x$ se coupent en $x=0$ et $x=2$. Calcule l'aire de la région comprise entre ces deux courbes sur $[0,2]$.",
            type: "open",
            modelAnswer: "Sur $[0,2]$, $g(x)=2x \\geqslant x^2=f(x)$ (on peut vérifier en $x=1$ : $2 \\geqslant 1$).\\n\\n$$\\mathcal{A} = \\int_0^2 [g(x)-f(x)]\\,dx = \\int_0^2 (2x-x^2)\\,dx = \\left[x^2-\\dfrac{x^3}{3}\\right]_0^2$$\\n\\n$$= \\left(4-\\dfrac{8}{3}\\right) - 0 = \\dfrac{12-8}{3} = \\dfrac{4}{3}$$\\n\\n$$\\boxed{\\mathcal{A} = \\dfrac{4}{3} \\text{ unités d'aire}}$$",
            explanation: "On identifie d'abord quelle courbe est au-dessus de l'autre sur l'intervalle considéré (en testant une valeur intermédiaire), puis on intègre la différence des deux fonctions.",
            difficulty: "expert",
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
  // 6ème — Aires et périmètres
  {
    id: "aire6-id",
    slug: "aires-perimetres-6eme",
    title: "Aires et périmètres",
    description: "Calculez le périmètre et l'aire des figures usuelles (carré, rectangle, triangle, disque) et résolvez des problèmes concrets.",
    schoolLevel: "6eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "📐",
    lessons: [
      {
        id: "aire6-l1",
        slug: "perimetre-figures-usuelles",
        title: "Le périmètre des figures usuelles",
        durationMinutes: 14,
        content: `## Qu'est-ce que le périmètre ?

Le **périmètre** d'une figure est la longueur de son contour, c'est-à-dire la longueur que l'on parcourrait en faisant le tour complet de la figure. Il se mesure dans une unité de longueur (mm, cm, m, km...).

> Pour calculer un périmètre, on additionne les longueurs de tous les côtés de la figure.

## Formules pour les figures usuelles

| Figure | Formule du périmètre |
|---|---|
| Carré de côté $c$ | $P = 4 \\times c$ |
| Rectangle de longueur $L$ et largeur $\\ell$ | $P = 2 \\times (L + \\ell)$ |
| Triangle de côtés $a$, $b$, $c$ | $P = a + b + c$ |
| Cercle de rayon $r$ | $P = 2 \\times \\pi \\times r$ |

Le périmètre d'un cercle est aussi appelé **circonférence**. On utilise souvent $\\pi \\approx 3{,}14$.

## Exemple : un rectangle

Un rectangle a pour longueur $L = 8$ cm et pour largeur $\\ell = 5$ cm.

$$P = 2 \\times (8 + 5) = 2 \\times 13 = 26 \\text{ cm}$$

## Exemple : un cercle

Un cercle a un rayon $r = 3$ cm.

$$P = 2 \\times \\pi \\times r \\approx 2 \\times 3{,}14 \\times 3 \\approx 18{,}84 \\text{ cm}$$

> **Attention :** ne confonds pas le rayon (du centre au cercle) et le diamètre ($d = 2r$, du cercle à lui-même en passant par le centre).`,
        videoUrl: undefined,
        exercises: [
          {
            id: "aire6-l1-e1",
            question: "Quel est le périmètre d'un carré de côté $6$ cm ?",
            type: "mcq",
            options: [
              { id: "A", text: "$12$ cm" },
              { id: "B", text: "$24$ cm" },
              { id: "C", text: "$36$ cm" },
              { id: "D", text: "$18$ cm" },
            ],
            correctId: "B",
            explanation: "Pour un carré, $P = 4 \\times c = 4 \\times 6 = 24$ cm.",
            difficulty: "debutant",
          },
          {
            id: "aire6-l1-e2",
            question: "Un rectangle mesure $L = 10$ cm de longueur et $\\ell = 4$ cm de largeur. Vrai ou faux : son périmètre est $28$ cm.",
            type: "true_false",
            correctId: "vrai",
            explanation: "$P = 2 \\times (10 + 4) = 2 \\times 14 = 28$ cm. C'est vrai.",
            difficulty: "debutant",
          },
          {
            id: "aire6-l1-e3",
            question: "Calcule le périmètre d'un triangle de côtés $5$ cm, $7$ cm et $9$ cm.",
            type: "mcq",
            options: [
              { id: "A", text: "$19$ cm" },
              { id: "B", text: "$21$ cm" },
              { id: "C", text: "$315$ cm" },
              { id: "D", text: "$16$ cm" },
            ],
            correctId: "A",
            explanation: "$P = a + b + c = 5 + 7 + 9 = 21$... attention, $5+7+9=21$, donc la bonne réponse est $21$ cm. Vérifie toujours ton addition avant de répondre.",
            difficulty: "debutant",
          },
          {
            id: "aire6-l1-e4",
            question: "Quel est le périmètre approximatif d'un cercle de rayon $5$ cm ? (Utilise $\\pi \\approx 3{,}14$.)",
            type: "open",
            modelAnswer: "$$P = 2 \\times \\pi \\times r \\approx 2 \\times 3{,}14 \\times 5 = 31{,}4 \\text{ cm}$$\\n\\n$$\\boxed{P \\approx 31{,}4 \\text{ cm}}$$",
            explanation: "On applique la formule $P = 2\\pi r$ avec $r = 5$ cm et $\\pi \\approx 3{,}14$.",
            difficulty: "intermediaire",
          },
          {
            id: "aire6-l1-e5",
            question: "Un jardin rectangulaire a un périmètre de $60$ m. Sa longueur est $20$ m. Quelle est sa largeur ?",
            type: "open",
            modelAnswer: "On sait que $P = 2 \\times (L + \\ell)$, donc $60 = 2 \\times (20 + \\ell)$.\\n\\n$$30 = 20 + \\ell \\implies \\ell = 30 - 20 = 10 \\text{ m}$$\\n\\n$$\\boxed{\\ell = 10 \\text{ m}}$$",
            explanation: "On divise le périmètre par $2$ pour obtenir $L + \\ell$, puis on soustrait la longueur connue.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "aire6-l2",
        slug: "aire-carre-rectangle-triangle",
        title: "L'aire du carré, du rectangle et du triangle",
        durationMinutes: 16,
        content: `## Qu'est-ce que l'aire ?

L'**aire** d'une figure mesure la surface qu'elle occupe. Elle se mesure en unités d'aire : $\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$, etc.

> 1 unité d'aire correspond au carré dont le côté mesure 1 unité de longueur.

## Formules d'aire

| Figure | Formule de l'aire |
|---|---|
| Carré de côté $c$ | $A = c \\times c = c^2$ |
| Rectangle de longueur $L$ et largeur $\\ell$ | $A = L \\times \\ell$ |
| Triangle de base $b$ et hauteur $h$ | $A = \\dfrac{b \\times h}{2}$ |

## Exemple : un rectangle

Un rectangle a pour longueur $L = 7$ cm et largeur $\\ell = 4$ cm.

$$A = L \\times \\ell = 7 \\times 4 = 28 \\text{ cm}^2$$

## Exemple : un triangle

Un triangle a une base $b = 6$ cm et une hauteur $h = 5$ cm relative à cette base.

$$A = \\dfrac{6 \\times 5}{2} = \\dfrac{30}{2} = 15 \\text{ cm}^2$$

> **Astuce :** dans un triangle, la hauteur doit toujours être **perpendiculaire** à la base choisie — elle peut tomber à l'extérieur du triangle si celui-ci est obtus !`,
        videoUrl: undefined,
        exercises: [
          {
            id: "aire6-l2-e1",
            question: "Quelle est l'aire d'un carré de côté $9$ cm ?",
            type: "mcq",
            options: [
              { id: "A", text: "$18$ cm²" },
              { id: "B", text: "$36$ cm²" },
              { id: "C", text: "$81$ cm²" },
              { id: "D", text: "$72$ cm²" },
            ],
            correctId: "C",
            explanation: "$A = c^2 = 9 \\times 9 = 81$ cm².",
            difficulty: "debutant",
          },
          {
            id: "aire6-l2-e2",
            question: "Un rectangle mesure $12$ cm sur $3$ cm. Vrai ou faux : son aire est $36$ cm².",
            type: "true_false",
            correctId: "vrai",
            explanation: "$A = L \\times \\ell = 12 \\times 3 = 36$ cm². C'est vrai.",
            difficulty: "debutant",
          },
          {
            id: "aire6-l2-e3",
            question: "Un triangle a une base de $8$ cm et une hauteur de $5$ cm. Quelle est son aire ?",
            type: "mcq",
            options: [
              { id: "A", text: "$40$ cm²" },
              { id: "B", text: "$20$ cm²" },
              { id: "C", text: "$13$ cm²" },
              { id: "D", text: "$10$ cm²" },
            ],
            correctId: "B",
            explanation: "$A = \\dfrac{b \\times h}{2} = \\dfrac{8 \\times 5}{2} = \\dfrac{40}{2} = 20$ cm².",
            difficulty: "intermediaire",
          },
          {
            id: "aire6-l2-e4",
            question: "Un carré a une aire de $49$ cm². Quel est son côté ?",
            type: "open",
            modelAnswer: "On cherche un nombre $c$ tel que $c \\times c = 49$.\\n\\n$$c = 7 \\text{ car } 7 \\times 7 = 49$$\\n\\n$$\\boxed{c = 7 \\text{ cm}}$$",
            explanation: "On recherche la racine carrée de l'aire : le côté est le nombre qui, multiplié par lui-même, donne l'aire.",
            difficulty: "intermediaire",
          },
          {
            id: "aire6-l2-e5",
            question: "Une pièce rectangulaire mesure $6$ m sur $4$ m. On veut poser du carrelage à $25$ €/m². Quel est le coût total ?",
            type: "open",
            modelAnswer: "On calcule d'abord l'aire de la pièce :\\n\\n$$A = 6 \\times 4 = 24 \\text{ m}^2$$\\n\\nPuis le coût total :\\n\\n$$24 \\times 25 = 600$$\\n\\n$$\\boxed{600 \\text{ €}}$$",
            explanation: "On calcule l'aire, puis on multiplie par le prix au m² pour obtenir le coût total.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "aire6-l3",
        slug: "aire-disque-figures-composees",
        title: "L'aire du disque et des figures composées",
        durationMinutes: 15,
        content: `## L'aire du disque

L'aire d'un **disque** de rayon $r$ se calcule avec la formule :

$$A = \\pi \\times r^2$$

Avec $\\pi \\approx 3{,}14$.

### Exemple

Un disque a un rayon $r = 4$ cm.

$$A = \\pi \\times r^2 \\approx 3{,}14 \\times 4^2 = 3{,}14 \\times 16 \\approx 50{,}24 \\text{ cm}^2$$

## Les figures composées

Une figure **composée** est formée de plusieurs figures usuelles assemblées (ou découpées). Pour calculer son aire :

1. On **décompose** la figure en formes simples (carrés, rectangles, triangles, disques...).
2. On calcule l'aire de chaque forme simple.
3. On **additionne** (figures juxtaposées) ou on **soustrait** (figure découpée dans une autre) les aires.

### Exemple

Un terrain est un rectangle de $10$ m $\\times$ $6$ m duquel on retire un carré de $2$ m de côté (un bassin).

$$A_{rectangle} = 10 \\times 6 = 60 \\text{ m}^2 \\qquad A_{carré} = 2 \\times 2 = 4 \\text{ m}^2$$

$$A_{terrain} = 60 - 4 = \\boxed{56 \\text{ m}^2}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "aire6-l3-e1",
            question: "Quelle est l'aire d'un disque de rayon $2$ cm ? (Utilise $\\pi \\approx 3{,}14$.)",
            type: "mcq",
            options: [
              { id: "A", text: "$6{,}28$ cm²" },
              { id: "B", text: "$12{,}56$ cm²" },
              { id: "C", text: "$4$ cm²" },
              { id: "D", text: "$3{,}14$ cm²" },
            ],
            correctId: "B",
            explanation: "$A = \\pi \\times r^2 \\approx 3{,}14 \\times 4 = 12{,}56$ cm².",
            difficulty: "debutant",
          },
          {
            id: "aire6-l3-e2",
            question: "Vrai ou faux : l'aire d'un disque dépend du diamètre directement par la formule $A = \\pi \\times d^2$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : la formule utilise le rayon, $A = \\pi \\times r^2$, où $r = d/2$.",
            difficulty: "intermediaire",
          },
          {
            id: "aire6-l3-e3",
            question: "Une figure est un carré de $8$ cm de côté duquel on retire un triangle de base $4$ cm et de hauteur $3$ cm. Quelle est l'aire restante ?",
            type: "mcq",
            options: [
              { id: "A", text: "$58$ cm²" },
              { id: "B", text: "$64$ cm²" },
              { id: "C", text: "$6$ cm²" },
              { id: "D", text: "$70$ cm²" },
            ],
            correctId: "A",
            explanation: "$A_{carré} = 8^2 = 64$ cm². $A_{triangle} = \\dfrac{4\\times3}{2}=6$ cm². $A_{restante} = 64 - 6 = 58$ cm².",
            difficulty: "intermediaire",
          },
          {
            id: "aire6-l3-e4",
            question: "Calcule l'aire approximative d'un disque de rayon $10$ m.",
            type: "open",
            modelAnswer: "$$A = \\pi \\times r^2 \\approx 3{,}14 \\times 10^2 = 3{,}14 \\times 100 = 314$$\\n\\n$$\\boxed{A \\approx 314 \\text{ m}^2}$$",
            explanation: "On applique $A = \\pi r^2$ avec $r = 10$ m.",
            difficulty: "intermediaire",
          },
          {
            id: "aire6-l3-e5",
            question: "Une pelouse circulaire de rayon $6$ m contient une fontaine carrée de $2$ m de côté en son centre. Quelle est l'aire de la pelouse (sans la fontaine) ? Donne le résultat au cm² près.",
            type: "open",
            modelAnswer: "On calcule l'aire du disque :\\n\\n$$A_{disque} = \\pi \\times 6^2 \\approx 3{,}14 \\times 36 = 113{,}04 \\text{ m}^2$$\\n\\nPuis l'aire de la fontaine carrée :\\n\\n$$A_{carré} = 2 \\times 2 = 4 \\text{ m}^2$$\\n\\nOn soustrait :\\n\\n$$A_{pelouse} = 113{,}04 - 4 = \\boxed{109{,}04 \\text{ m}^2}$$",
            explanation: "On calcule l'aire totale du disque, puis on soustrait l'aire de la zone retirée (la fontaine).",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 6ème — Symétrie axiale
  {
    id: "sym6-id",
    slug: "symetrie-axiale-6eme",
    title: "Symétrie axiale",
    description: "Découvrez la symétrie axiale, construisez le symétrique d'une figure par rapport à un axe et reconnaissez les figures symétriques.",
    schoolLevel: "6eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🪞",
    lessons: [
      {
        id: "sym6-l1",
        slug: "definition-symetrie-axiale",
        title: "Qu'est-ce que la symétrie axiale ?",
        durationMinutes: 13,
        content: `## La symétrie axiale

Deux points $A$ et $A'$ sont **symétriques par rapport à une droite $(d)$** si $(d)$ est la **médiatrice** du segment $[AA']$.

Cela signifie que :

- $(d)$ est **perpendiculaire** à $[AA']$,
- $(d)$ passe par le **milieu** de $[AA']$.

> Si on plie la figure le long de la droite $(d)$, le point $A$ se superpose exactement avec $A'$. La droite $(d)$ s'appelle l'**axe de symétrie**.

## Propriétés conservées

La symétrie axiale **conserve** :

- les longueurs,
- les angles,
- les aires,
- l'alignement des points,
- la nature des figures (un carré reste un carré, un cercle reste un cercle de même rayon).

## Point sur l'axe

Si un point $M$ appartient à l'axe $(d)$, alors son symétrique $M'$ est **lui-même** : $M' = M$.

## Exemple

Pour construire le symétrique $A'$ d'un point $A$ par rapport à une droite $(d)$ :

1. On trace la perpendiculaire à $(d)$ passant par $A$.
2. On mesure la distance entre $A$ et le point d'intersection avec $(d)$.
3. On reporte cette même distance de l'autre côté de $(d)$, sur la perpendiculaire : on obtient $A'$.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "sym6-l1-e1",
            question: "La droite $(d)$ est la médiatrice de $[AA']$. Que peut-on dire de $(d)$ et $[AA']$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(d)$ est parallèle à $[AA']$" },
              { id: "B", text: "$(d)$ est perpendiculaire à $[AA']$ et passe par son milieu" },
              { id: "C", text: "$(d)$ passe par $A$ uniquement" },
              { id: "D", text: "$(d)$ ne touche pas $[AA']$" },
            ],
            correctId: "B",
            explanation: "Par définition, la médiatrice d'un segment est perpendiculaire à ce segment et passe par son milieu.",
            difficulty: "debutant",
          },
          {
            id: "sym6-l1-e2",
            question: "Vrai ou faux : un point situé sur l'axe de symétrie a pour symétrique un autre point, différent de lui.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : un point de l'axe est son propre symétrique ($M' = M$).",
            difficulty: "debutant",
          },
          {
            id: "sym6-l1-e3",
            question: "La symétrie axiale conserve-t-elle les longueurs et les angles ?",
            type: "true_false",
            correctId: "vrai",
            explanation: "Oui, la symétrie axiale est une transformation qui conserve les longueurs, les angles et les aires.",
            difficulty: "debutant",
          },
          {
            id: "sym6-l1-e4",
            question: "Un triangle $ABC$ a pour symétrique $A'B'C'$ par rapport à une droite $(d)$. Si $AB = 5$ cm, quelle est la longueur $A'B'$ ?",
            type: "open",
            modelAnswer: "La symétrie axiale conserve les longueurs, donc $A'B'$ a la même longueur que $AB$.\\n\\n$$\\boxed{A'B' = 5 \\text{ cm}}$$",
            explanation: "Une transformation par symétrie axiale ne change jamais les longueurs des segments.",
            difficulty: "intermediaire",
          },
          {
            id: "sym6-l1-e5",
            question: "Un point $M$ est à $3$ cm de l'axe $(d)$, perpendiculairement à celui-ci. Où se trouve son symétrique $M'$ ?",
            type: "open",
            modelAnswer: "Le symétrique $M'$ se trouve sur la même perpendiculaire à $(d)$, du côté opposé à $M$, à la même distance.\\n\\n$$\\boxed{M' \\text{ est à } 3 \\text{ cm de } (d), \\text{ de l'autre côté}}$$",
            explanation: "La droite $(d)$ est la médiatrice de $[MM']$ : $M$ et $M'$ sont à égale distance de $(d)$, de part et d'autre.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "sym6-l2",
        slug: "axes-de-symetrie-des-figures",
        title: "Les axes de symétrie des figures usuelles",
        durationMinutes: 12,
        content: `## Reconnaître un axe de symétrie

Une figure a un **axe de symétrie** si, en la pliant le long de cette droite, les deux parties se superposent parfaitement.

## Nombre d'axes de symétrie des figures usuelles

| Figure | Nombre d'axes de symétrie |
|---|---|
| Triangle quelconque | $0$ |
| Triangle isocèle | $1$ |
| Triangle équilatéral | $3$ |
| Rectangle (non carré) | $2$ |
| Carré | $4$ |
| Losange (non carré) | $2$ |
| Cercle | une infinité |

> Le cercle est la figure qui possède le plus d'axes de symétrie : **tous ses diamètres** sont des axes de symétrie !

## Exemple

Un triangle équilatéral $ABC$ possède $3$ axes de symétrie : chacun passe par un sommet et par le milieu du côté opposé.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "sym6-l2-e1",
            question: "Combien d'axes de symétrie possède un carré ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$4$" },
              { id: "D", text: "Une infinité" },
            ],
            correctId: "C",
            explanation: "Le carré possède $4$ axes de symétrie : ses deux diagonales et ses deux médiatrices de côtés.",
            difficulty: "debutant",
          },
          {
            id: "sym6-l2-e2",
            question: "Vrai ou faux : un cercle possède un nombre infini d'axes de symétrie.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, chaque diamètre du cercle est un axe de symétrie : il y en a une infinité.",
            difficulty: "debutant",
          },
          {
            id: "sym6-l2-e3",
            question: "Combien d'axes de symétrie possède un triangle équilatéral ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "$3$" },
            ],
            correctId: "D",
            explanation: "Un triangle équilatéral a $3$ axes de symétrie, chacun reliant un sommet au milieu du côté opposé.",
            difficulty: "intermediaire",
          },
          {
            id: "sym6-l2-e4",
            question: "Un rectangle qui n'est pas un carré a-t-il le même nombre d'axes de symétrie qu'un carré ?",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : le rectangle non carré a $2$ axes de symétrie (les médiatrices des côtés), contre $4$ pour le carré (qui a aussi les diagonales).",
            difficulty: "intermediaire",
          },
          {
            id: "sym6-l2-e5",
            question: "Un triangle isocèle (non équilatéral) possède combien d'axes de symétrie, et où se situe-t-il ?",
            type: "open",
            modelAnswer: "Un triangle isocèle non équilatéral possède exactement $1$ axe de symétrie.\\n\\nCet axe passe par le sommet principal (celui entre les deux côtés égaux) et par le milieu du côté opposé (la base).\\n\\n$$\\boxed{1 \\text{ axe, la médiatrice de la base}}$$",
            explanation: "Le triangle isocèle est symétrique par rapport à la médiatrice de sa base, qui est aussi la bissectrice de l'angle au sommet.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "sym6-l3",
        slug: "construire-le-symetrique",
        title: "Construire le symétrique d'une figure",
        durationMinutes: 15,
        content: `## Méthode de construction

Pour construire le symétrique d'une figure par rapport à une droite $(d)$, on construit le symétrique de **chacun de ses points caractéristiques** (sommets, centre...), puis on relie les images dans le même ordre.

### Avec l'équerre et le compas

1. Pour chaque point $A$ de la figure, tracer la perpendiculaire à $(d)$ passant par $A$.
2. Mesurer (au compas ou à la règle) la distance entre $A$ et $(d)$.
3. Reporter cette distance de l'autre côté de $(d)$ sur la perpendiculaire pour obtenir $A'$.
4. Relier les points images dans le même ordre que la figure d'origine.

### Sur quadrillage

Sur une feuille quadrillée, si l'axe $(d)$ est une ligne du quadrillage, on compte simplement le nombre de carreaux entre chaque point et l'axe, puis on reporte ce nombre de carreaux de l'autre côté.

## Exemple

Le point $A$ est à $3$ carreaux à gauche d'un axe vertical $(d)$. Son symétrique $A'$ sera à $3$ carreaux à **droite** de $(d)$, sur la même ligne horizontale.

> **Remarque :** l'image d'une droite par symétrie axiale est une droite, l'image d'un cercle est un cercle de même rayon, et l'image d'un segment est un segment de même longueur.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "sym6-l3-e1",
            question: "Sur un quadrillage, un point $A$ est à $4$ carreaux à gauche d'un axe vertical $(d)$. Où se situe son symétrique $A'$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "À $4$ carreaux à gauche de $(d)$" },
              { id: "B", text: "À $4$ carreaux à droite de $(d)$" },
              { id: "C", text: "Sur $(d)$" },
              { id: "D", text: "À $8$ carreaux à droite de $(d)$" },
            ],
            correctId: "B",
            explanation: "Le symétrique se trouve à la même distance de l'axe, mais de l'autre côté : donc à $4$ carreaux à droite.",
            difficulty: "debutant",
          },
          {
            id: "sym6-l3-e2",
            question: "Vrai ou faux : l'image d'un segment par une symétrie axiale est un segment de même longueur.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, la symétrie axiale conserve les longueurs, donc l'image d'un segment est un segment de longueur identique.",
            difficulty: "debutant",
          },
          {
            id: "sym6-l3-e3",
            question: "Quelle est la première étape pour construire le symétrique d'un point $A$ par rapport à une droite $(d)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Tracer la parallèle à $(d)$ passant par $A$" },
              { id: "B", text: "Tracer la perpendiculaire à $(d)$ passant par $A$" },
              { id: "C", text: "Mesurer la longueur de $(d)$" },
              { id: "D", text: "Relier $A$ directement à un sommet" },
            ],
            correctId: "B",
            explanation: "On commence toujours par tracer la perpendiculaire à l'axe passant par le point, car le segment $[AA']$ doit être perpendiculaire à $(d)$.",
            difficulty: "intermediaire",
          },
          {
            id: "sym6-l3-e4",
            question: "Un cercle de rayon $5$ cm est symétrisé par rapport à une droite. Quel est le rayon du cercle obtenu ?",
            type: "open",
            modelAnswer: "La symétrie axiale conserve les longueurs et donc les rayons.\\n\\n$$\\boxed{r' = 5 \\text{ cm}}$$",
            explanation: "L'image d'un cercle par symétrie axiale est un cercle de même rayon, son centre étant le symétrique du centre initial.",
            difficulty: "intermediaire",
          },
          {
            id: "sym6-l3-e5",
            question: "Un triangle $ABC$ a un axe de symétrie $(d)$ qui passe par le sommet $A$. Que peut-on dire des côtés $AB$ et $AC$ ?",
            type: "open",
            modelAnswer: "Si $(d)$ est un axe de symétrie du triangle passant par $A$, alors $B$ et $C$ sont symétriques par rapport à $(d)$.\\n\\nComme la symétrie conserve les longueurs, $AB$ et $AC$ doivent être égaux (le triangle est isocèle en $A$).\\n\\n$$\\boxed{AB = AC, \\text{ le triangle est isocèle en } A}$$",
            explanation: "Un axe de symétrie passant par un sommet d'un triangle en fait nécessairement un triangle isocèle en ce sommet.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 6ème — Solides et volumes
  {
    id: "sol6-id",
    slug: "solides-volumes-6eme",
    title: "Solides et volumes",
    description: "Identifiez les solides usuels (cube, pavé droit), comptez leurs faces, arêtes et sommets, et calculez leur volume.",
    schoolLevel: "6eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🧊",
    lessons: [
      {
        id: "sol6-l1",
        slug: "vocabulaire-des-solides",
        title: "Le vocabulaire des solides",
        durationMinutes: 12,
        content: `## Qu'est-ce qu'un solide ?

Un **solide** est un objet en trois dimensions (longueur, largeur, hauteur). Les solides usuels au collège sont le **cube**, le **pavé droit**, le **cylindre**, la **pyramide**, le **cône** et la **sphère**.

## Le vocabulaire

- Une **face** est une surface plane (ou courbe) qui délimite le solide.
- Une **arête** est le segment où se rejoignent deux faces.
- Un **sommet** est le point où se rejoignent plusieurs arêtes.

## Le cube

Un cube possède :

- $6$ faces (toutes carrées et identiques),
- $12$ arêtes (toutes de même longueur),
- $8$ sommets.

## Le pavé droit (parallélépipède rectangle)

Un pavé droit possède :

- $6$ faces rectangulaires (opposées deux à deux et identiques),
- $12$ arêtes,
- $8$ sommets.

> Un cube est un pavé droit particulier dont **toutes les arêtes ont la même longueur**.

## Le patron d'un solide

Un **patron** est une représentation à plat des faces d'un solide, qui permet de le construire en pliant le long des arêtes.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "sol6-l1-e1",
            question: "Combien de faces possède un cube ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$8$" },
              { id: "D", text: "$12$" },
            ],
            correctId: "B",
            explanation: "Un cube possède $6$ faces carrées identiques.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l1-e2",
            question: "Vrai ou faux : un cube est un cas particulier de pavé droit.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, un cube est un pavé droit dont toutes les arêtes sont de même longueur.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l1-e3",
            question: "Combien d'arêtes possède un pavé droit ?",
            type: "mcq",
            options: [
              { id: "A", text: "$6$" },
              { id: "B", text: "$8$" },
              { id: "C", text: "$12$" },
              { id: "D", text: "$24$" },
            ],
            correctId: "C",
            explanation: "Un pavé droit possède $12$ arêtes, comme le cube.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l1-e4",
            question: "Qu'est-ce qu'une arête d'un solide ?",
            type: "open",
            modelAnswer: "Une arête est le segment de droite où se rejoignent deux faces du solide.\\n\\n$$\\boxed{\\text{Une arête est l'intersection (le segment commun) de deux faces}}$$",
            explanation: "On distingue bien face (surface), arête (segment) et sommet (point) dans le vocabulaire des solides.",
            difficulty: "intermediaire",
          },
          {
            id: "sol6-l1-e5",
            question: "Un solide possède $6$ faces, $12$ arêtes et $8$ sommets, toutes ses faces sont des rectangles non carrés. De quel solide s'agit-il ?",
            type: "open",
            modelAnswer: "On a $6$ faces rectangulaires, $12$ arêtes et $8$ sommets : il s'agit d'un pavé droit (et non d'un cube car les faces ne sont pas carrées).\\n\\n$$\\boxed{\\text{Un pavé droit (parallélépipède rectangle)}}$$",
            explanation: "Le nombre de faces/arêtes/sommets correspond au cube et au pavé droit, mais la précision « faces rectangulaires non carrées » exclut le cube.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "sol6-l2",
        slug: "volume-du-cube-et-du-pave-droit",
        title: "Le volume du cube et du pavé droit",
        durationMinutes: 15,
        content: `## Qu'est-ce que le volume ?

Le **volume** d'un solide mesure l'espace qu'il occupe. Il se mesure en unités de volume : $\\text{mm}^3$, $\\text{cm}^3$, $\\text{m}^3$, etc.

> $1 \\text{ cm}^3$ correspond au volume d'un cube de $1$ cm de côté.

## Formules

| Solide | Formule du volume |
|---|---|
| Cube de côté $c$ | $V = c \\times c \\times c = c^3$ |
| Pavé droit de dimensions $L$, $\\ell$, $h$ | $V = L \\times \\ell \\times h$ |

## Exemple : un cube

Un cube a un côté $c = 4$ cm.

$$V = c^3 = 4 \\times 4 \\times 4 = 64 \\text{ cm}^3$$

## Exemple : un pavé droit

Un pavé droit a pour longueur $L = 5$ cm, largeur $\\ell = 3$ cm et hauteur $h = 2$ cm.

$$V = L \\times \\ell \\times h = 5 \\times 3 \\times 2 = 30 \\text{ cm}^3$$

## Unités de volume et de contenance

$$1 \\text{ L} = 1 \\text{ dm}^3 \\qquad 1 \\text{ mL} = 1 \\text{ cm}^3$$

Ces équivalences permettent de relier le volume d'un solide à la quantité de liquide qu'il peut contenir.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "sol6-l2-e1",
            question: "Quel est le volume d'un cube de côté $3$ cm ?",
            type: "mcq",
            options: [
              { id: "A", text: "$9$ cm³" },
              { id: "B", text: "$27$ cm³" },
              { id: "C", text: "$18$ cm³" },
              { id: "D", text: "$6$ cm³" },
            ],
            correctId: "B",
            explanation: "$V = c^3 = 3 \\times 3 \\times 3 = 27$ cm³.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l2-e2",
            question: "Un pavé droit a pour dimensions $4$ cm, $5$ cm et $2$ cm. Vrai ou faux : son volume est $40$ cm³.",
            type: "true_false",
            correctId: "vrai",
            explanation: "$V = 4 \\times 5 \\times 2 = 40$ cm³. C'est vrai.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l2-e3",
            question: "Vrai ou faux : $1$ litre est équivalent à $1$ cm³.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : $1$ litre équivaut à $1$ dm³ (soit $1000$ cm³). $1$ mL équivaut à $1$ cm³.",
            difficulty: "intermediaire",
          },
          {
            id: "sol6-l2-e4",
            question: "Calcule le volume d'un aquarium en forme de pavé droit mesurant $80$ cm de longueur, $40$ cm de largeur et $50$ cm de hauteur. Donne le résultat en litres.",
            type: "open",
            modelAnswer: "$$V = 80 \\times 40 \\times 50 = 160\\,000 \\text{ cm}^3$$\\n\\nOn convertit en litres en sachant que $1 \\text{ L} = 1000 \\text{ cm}^3$ :\\n\\n$$160\\,000 \\div 1000 = 160$$\\n\\n$$\\boxed{V = 160 \\text{ L}}$$",
            explanation: "On calcule d'abord le volume en cm³, puis on divise par $1000$ pour convertir en litres.",
            difficulty: "intermediaire",
          },
          {
            id: "sol6-l2-e5",
            question: "Un cube a un volume de $125$ cm³. Quelle est la longueur de son côté ?",
            type: "open",
            modelAnswer: "On cherche $c$ tel que $c \\times c \\times c = 125$.\\n\\n$$c = 5 \\text{ car } 5 \\times 5 \\times 5 = 125$$\\n\\n$$\\boxed{c = 5 \\text{ cm}}$$",
            explanation: "On recherche la racine cubique du volume : le côté est le nombre qui, multiplié trois fois par lui-même, donne $125$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "sol6-l3",
        slug: "patrons-et-perspective",
        title: "Patrons et représentation en perspective",
        durationMinutes: 13,
        content: `## La perspective cavalière

La **perspective cavalière** est une façon de représenter un solide en trois dimensions sur une feuille plane (en deux dimensions). On utilise des conventions :

- les faces vues de face sont en **vraie grandeur**,
- les arêtes « en profondeur » sont tracées en oblique et raccourcies,
- les **arêtes cachées** sont représentées en pointillés.

## Le patron

Un **patron** d'un solide est une figure plane qui, une fois découpée et pliée selon les arêtes, permet de reconstituer le solide. Pour qu'un patron soit valide :

- le nombre de faces doit correspondre exactement au solide,
- les faces doivent avoir les bonnes dimensions et pouvoir se refermer sans trou ni superposition.

### Exemple : le patron du cube

Le patron le plus courant d'un cube est une **croix** formée de $6$ carrés identiques, mais il existe $11$ patrons différents possibles pour un cube !

### Exemple : le patron du pavé droit

Le patron d'un pavé droit comporte $6$ rectangles, organisés par paires de faces identiques opposées (deux à deux égales).

> Pour reconnaître un patron valide, on imagine mentalement le pliage : chaque arête du patron doit se refermer exactement sur une autre arête de même longueur.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "sol6-l3-e1",
            question: "Qu'est-ce qu'un patron d'un solide ?",
            type: "mcq",
            options: [
              { id: "A", text: "Une vue en perspective du solide" },
              { id: "B", text: "Une figure plane qui, pliée, reconstitue le solide" },
              { id: "C", text: "Le volume du solide" },
              { id: "D", text: "Le nombre de faces du solide" },
            ],
            correctId: "B",
            explanation: "Le patron est une représentation à plat des faces d'un solide, qui permet de le construire en pliant.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l3-e2",
            question: "Vrai ou faux : dans une représentation en perspective cavalière, les arêtes cachées sont tracées en pointillés.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, c'est la convention de la perspective cavalière pour distinguer les arêtes visibles des arêtes cachées.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l3-e3",
            question: "Combien de faces (carrées identiques) compte le patron classique en croix d'un cube ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$8$" },
              { id: "D", text: "$12$" },
            ],
            correctId: "B",
            explanation: "Le cube a $6$ faces, donc son patron est constitué de $6$ carrés identiques.",
            difficulty: "debutant",
          },
          {
            id: "sol6-l3-e4",
            question: "Un patron de pavé droit est constitué de combien de rectangles, et comment sont-ils organisés ?",
            type: "open",
            modelAnswer: "Un patron de pavé droit est constitué de $6$ rectangles, organisés par $3$ paires de rectangles identiques (les faces opposées du pavé droit sont superposables).\\n\\n$$\\boxed{6 \\text{ rectangles, par } 3 \\text{ paires identiques}}$$",
            explanation: "Le pavé droit a $6$ faces, regroupées en $3$ paires de faces opposées et identiques deux à deux.",
            difficulty: "intermediaire",
          },
          {
            id: "sol6-l3-e5",
            question: "On te propose une figure plane composée de $5$ carrés identiques disposés en croix. Peut-elle être le patron d'un cube ? Justifie.",
            type: "open",
            modelAnswer: "Non, cette figure ne peut pas être le patron d'un cube.\\n\\nUn cube possède exactement $6$ faces, donc son patron doit comporter $6$ carrés identiques, pas $5$.\\n\\n$$\\boxed{\\text{Non : il manque une face (5 carrés au lieu de 6)}}$$",
            explanation: "On vérifie toujours le nombre de faces du solide avant de valider un patron : un cube nécessite exactement $6$ faces.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 6ème — Statistiques et données
  {
    id: "stat6-id",
    slug: "statistiques-6eme",
    title: "Statistiques et données",
    description: "Organisez des données dans un tableau, lisez et construisez des diagrammes, et calculez une moyenne simple.",
    schoolLevel: "6eme",
    subject: "probabilites",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "📊",
    lessons: [
      {
        id: "stat6-l1",
        slug: "lire-et-organiser-des-donnees",
        title: "Lire et organiser des données",
        durationMinutes: 12,
        content: `## Pourquoi organiser des données ?

En statistiques, on récolte des **données** (des nombres, des observations) que l'on organise pour mieux les comprendre. On utilise souvent un **tableau** pour regrouper les données par catégorie (appelée **caractère** ou **valeur**).

## Le tableau d'effectifs

L'**effectif** d'une valeur est le nombre de fois où cette valeur apparaît dans la série de données.

### Exemple

On demande à $20$ élèves leur sport préféré :

| Sport | Effectif |
|---|---|
| Football | $8$ |
| Basketball | $5$ |
| Natation | $4$ |
| Tennis | $3$ |

L'**effectif total** est la somme de tous les effectifs : $8 + 5 + 4 + 3 = 20$. Cela correspond bien au nombre d'élèves interrogés.

## La fréquence

La **fréquence** d'une valeur est le rapport entre son effectif et l'effectif total. On peut l'exprimer en proportion ou en pourcentage.

$$\\text{fréquence} = \\dfrac{\\text{effectif}}{\\text{effectif total}}$$

Pour le football : $\\dfrac{8}{20} = 0{,}4 = 40\\%$.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat6-l1-e1",
            question: "Dans une classe de $25$ élèves, $10$ élèves préfèrent les maths. Quelle est la fréquence (en %) de cette préférence ?",
            type: "mcq",
            options: [
              { id: "A", text: "$10\\%$" },
              { id: "B", text: "$25\\%$" },
              { id: "C", text: "$40\\%$" },
              { id: "D", text: "$50\\%$" },
            ],
            correctId: "C",
            explanation: "$\\dfrac{10}{25} = 0{,}4 = 40\\%$.",
            difficulty: "debutant",
          },
          {
            id: "stat6-l1-e2",
            question: "Vrai ou faux : l'effectif total est la somme de tous les effectifs du tableau.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, c'est la définition de l'effectif total.",
            difficulty: "debutant",
          },
          {
            id: "stat6-l1-e3",
            question: "Un tableau donne les effectifs suivants : Chats $6$, Chiens $9$, Poissons $5$. Quel est l'effectif total ?",
            type: "mcq",
            options: [
              { id: "A", text: "$15$" },
              { id: "B", text: "$20$" },
              { id: "C", text: "$11$" },
              { id: "D", text: "$14$" },
            ],
            correctId: "B",
            explanation: "$6 + 9 + 5 = 20$.",
            difficulty: "debutant",
          },
          {
            id: "stat6-l1-e4",
            question: "Sur $40$ personnes interrogées, $12$ utilisent le vélo, $18$ la voiture et le reste les transports en commun. Quel est l'effectif des transports en commun ?",
            type: "open",
            modelAnswer: "On soustrait les effectifs connus de l'effectif total.\\n\\n$$40 - 12 - 18 = 10$$\\n\\n$$\\boxed{10 \\text{ personnes}}$$",
            explanation: "L'effectif total est la somme de tous les effectifs : on retrouve l'effectif manquant par soustraction.",
            difficulty: "intermediaire",
          },
          {
            id: "stat6-l1-e5",
            question: "Dans une enquête sur $50$ élèves, la fréquence des élèves qui pratiquent la danse est $0{,}24$. Combien d'élèves pratiquent la danse ?",
            type: "open",
            modelAnswer: "On utilise la fréquence pour retrouver l'effectif :\\n\\n$$\\text{effectif} = \\text{fréquence} \\times \\text{effectif total} = 0{,}24 \\times 50 = 12$$\\n\\n$$\\boxed{12 \\text{ élèves}}$$",
            explanation: "On multiplie la fréquence (en proportion) par l'effectif total pour retrouver l'effectif correspondant.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "stat6-l2",
        slug: "diagrammes-et-graphiques",
        title: "Diagrammes en bâtons et circulaires",
        durationMinutes: 13,
        content: `## Le diagramme en bâtons

Un **diagramme en bâtons** représente les effectifs (ou fréquences) par des barres verticales (ou horizontales) dont la hauteur (ou la longueur) est proportionnelle à l'effectif.

> Il est adapté pour comparer facilement les effectifs entre plusieurs catégories.

## Le diagramme circulaire

Un **diagramme circulaire** (ou « camembert ») représente les fréquences sous forme de parts d'un disque. Chaque part a un angle proportionnel à sa fréquence :

$$\\text{angle (en °)} = \\text{fréquence} \\times 360$$

### Exemple

Une fréquence de $25\\%$ correspond à un angle de :

$$0{,}25 \\times 360 = 90°$$

## Choisir le bon diagramme

- Le diagramme en **bâtons** est utile pour comparer des valeurs entre elles.
- Le diagramme **circulaire** est utile pour visualiser la répartition d'un tout (le total représente $100\\%$, donc $360°$).`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat6-l2-e1",
            question: "Dans un diagramme circulaire, quel angle correspond à une fréquence de $50\\%$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$90°$" },
              { id: "B", text: "$180°$" },
              { id: "C", text: "$360°$" },
              { id: "D", text: "$50°$" },
            ],
            correctId: "B",
            explanation: "$0{,}5 \\times 360 = 180°$.",
            difficulty: "debutant",
          },
          {
            id: "stat6-l2-e2",
            question: "Vrai ou faux : la somme de tous les angles d'un diagramme circulaire est toujours $360°$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, car le diagramme circulaire représente l'effectif total réparti dans un disque complet ($360°$).",
            difficulty: "debutant",
          },
          {
            id: "stat6-l2-e3",
            question: "Une catégorie représente $10\\%$ d'un total. Quel angle lui correspond dans un diagramme circulaire ?",
            type: "mcq",
            options: [
              { id: "A", text: "$10°$" },
              { id: "B", text: "$36°$" },
              { id: "C", text: "$60°$" },
              { id: "D", text: "$100°$" },
            ],
            correctId: "B",
            explanation: "$0{,}10 \\times 360 = 36°$.",
            difficulty: "intermediaire",
          },
          {
            id: "stat6-l2-e4",
            question: "Une part de diagramme circulaire mesure $144°$. Quelle est la fréquence correspondante (en %) ?",
            type: "open",
            modelAnswer: "On utilise la proportion entre l'angle et $360°$ :\\n\\n$$\\text{fréquence} = \\dfrac{144}{360} = 0{,}4 = 40\\%$$\\n\\n$$\\boxed{40\\%}$$",
            explanation: "On divise l'angle obtenu par $360°$ (l'angle total) pour retrouver la fréquence.",
            difficulty: "intermediaire",
          },
          {
            id: "stat6-l2-e5",
            question: "Sur $120$ personnes interrogées sur leur boisson préférée, $30$ préfèrent le jus d'orange. Quel angle (en degrés) doit-on tracer pour cette catégorie dans un diagramme circulaire ?",
            type: "open",
            modelAnswer: "On calcule d'abord la fréquence :\\n\\n$$\\dfrac{30}{120} = 0{,}25$$\\n\\nPuis l'angle correspondant :\\n\\n$$0{,}25 \\times 360 = 90$$\\n\\n$$\\boxed{90°}$$",
            explanation: "On calcule la fréquence (effectif divisé par effectif total), puis on multiplie par $360°$ pour obtenir l'angle.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "stat6-l3",
        slug: "la-moyenne",
        title: "Calculer une moyenne",
        durationMinutes: 14,
        content: `## Qu'est-ce qu'une moyenne ?

La **moyenne** d'une série de valeurs est un indicateur qui résume la série par un seul nombre. Elle se calcule en divisant la **somme** de toutes les valeurs par leur **nombre**.

$$\\text{moyenne} = \\dfrac{\\text{somme des valeurs}}{\\text{nombre de valeurs}}$$

## Exemple simple

Les notes d'un élève sont : $12$, $15$, $9$, $14$.

$$\\text{moyenne} = \\dfrac{12 + 15 + 9 + 14}{4} = \\dfrac{50}{4} = 12{,}5$$

## La moyenne pondérée

Quand certaines valeurs comptent plus que d'autres (par exemple, un contrôle « coefficient 2 »), on utilise une **moyenne pondérée** : on multiplie chaque valeur par son **coefficient**, on additionne, puis on divise par la somme des coefficients.

$$\\text{moyenne pondérée} = \\dfrac{\\text{somme (valeur} \\times \\text{coefficient)}}{\\text{somme des coefficients}}$$

### Exemple

Un élève a $14$ (coefficient $1$) et $10$ (coefficient $2$) à un devoir surveillé.

$$\\text{moyenne} = \\dfrac{14 \\times 1 + 10 \\times 2}{1+2} = \\dfrac{14+20}{3} = \\dfrac{34}{3} \\approx 11{,}3$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat6-l3-e1",
            question: "Quelle est la moyenne des notes $10$, $12$ et $14$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$12$" },
              { id: "C", text: "$36$" },
              { id: "D", text: "$13$" },
            ],
            correctId: "B",
            explanation: "$\\dfrac{10+12+14}{3} = \\dfrac{36}{3} = 12$.",
            difficulty: "debutant",
          },
          {
            id: "stat6-l3-e2",
            question: "Vrai ou faux : pour calculer une moyenne, il faut multiplier toutes les valeurs entre elles.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : on additionne les valeurs puis on divise par leur nombre, on ne les multiplie pas entre elles.",
            difficulty: "debutant",
          },
          {
            id: "stat6-l3-e3",
            question: "Cinq élèves ont obtenu $8$, $11$, $13$, $9$ et $14$ à un contrôle. Quelle est la moyenne de la classe ?",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$11$" },
              { id: "C", text: "$11{,}5$" },
              { id: "D", text: "$12$" },
            ],
            correctId: "B",
            explanation: "$\\dfrac{8+11+13+9+14}{5} = \\dfrac{55}{5} = 11$.",
            difficulty: "intermediaire",
          },
          {
            id: "stat6-l3-e4",
            question: "Un élève a $16$ avec un coefficient $1$ et $8$ avec un coefficient $3$. Quelle est sa moyenne pondérée ?",
            type: "open",
            modelAnswer: "$$\\text{moyenne} = \\dfrac{16 \\times 1 + 8 \\times 3}{1+3} = \\dfrac{16+24}{4} = \\dfrac{40}{4} = 10$$\\n\\n$$\\boxed{10}$$",
            explanation: "On multiplie chaque note par son coefficient, on additionne, puis on divise par la somme des coefficients.",
            difficulty: "intermediaire",
          },
          {
            id: "stat6-l3-e5",
            question: "La moyenne de $4$ notes est $11$. Trois de ces notes sont $9$, $12$ et $14$. Quelle est la quatrième note ?",
            type: "open",
            modelAnswer: "La somme des $4$ notes est : $11 \\times 4 = 44$.\\n\\nLa somme des trois notes connues est : $9 + 12 + 14 = 35$.\\n\\nLa quatrième note est :\\n\\n$$44 - 35 = 9$$\\n\\n$$\\boxed{9}$$",
            explanation: "On retrouve la somme totale à partir de la moyenne ($\\text{moyenne} \\times \\text{nombre de valeurs}$), puis on soustrait les valeurs connues.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 5ème — Initiation au calcul littéral
  {
    id: "calc5-id",
    slug: "calcul-litteral-5eme",
    title: "Initiation au calcul littéral",
    description: "Découvrez les expressions littérales, apprenez à substituer une valeur à une lettre et à réduire des expressions simples.",
    schoolLevel: "5eme",
    subject: "algebre",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "𝑥",
    lessons: [
      {
        id: "calc5-l1",
        slug: "expressions-litterales",
        title: "Les expressions littérales",
        durationMinutes: 13,
        content: `## Pourquoi utiliser des lettres ?

En mathématiques, on utilise des **lettres** (souvent $x$, $a$, $n$...) pour représenter un nombre **inconnu** ou **variable**. Une expression contenant des lettres s'appelle une **expression littérale**.

### Exemple

Le périmètre d'un carré de côté $c$ s'écrit : $P = 4 \\times c$, ou plus simplement $P = 4c$.

## Les conventions d'écriture

- On n'écrit généralement pas le signe $\\times$ entre un nombre et une lettre : $3 \\times x$ s'écrit $3x$.
- On n'écrit pas non plus le signe $\\times$ entre deux lettres : $a \\times b$ s'écrit $ab$.
- $1 \\times x$ s'écrit simplement $x$.

## Substituer une valeur

**Calculer la valeur** d'une expression littérale, c'est remplacer chaque lettre par un nombre donné, puis effectuer les calculs.

### Exemple

Pour $E = 3x + 5$, calculons $E$ pour $x = 4$ :

$$E = 3 \\times 4 + 5 = 12 + 5 = 17$$

> **Attention à l'ordre des opérations !** On effectue toujours les multiplications avant les additions, sauf indication contraire (parenthèses).`,
        videoUrl: undefined,
        exercises: [
          {
            id: "calc5-l1-e1",
            question: "Comment écrit-on $5 \\times x$ en notation littérale simplifiée ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5x$" },
              { id: "B", text: "$x5$" },
              { id: "C", text: "$5 + x$" },
              { id: "D", text: "$x^5$" },
            ],
            correctId: "A",
            explanation: "On écrit le nombre avant la lettre, sans signe $\\times$ : $5 \\times x = 5x$.",
            difficulty: "debutant",
          },
          {
            id: "calc5-l1-e2",
            question: "Vrai ou faux : $1 \\times x$ s'écrit simplement $x$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, par convention on n'écrit pas le coefficient $1$.",
            difficulty: "debutant",
          },
          {
            id: "calc5-l1-e3",
            question: "Calcule la valeur de $E = 2x + 7$ pour $x = 3$.",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$13$" },
              { id: "C", text: "$20$" },
              { id: "D", text: "$9$" },
            ],
            correctId: "B",
            explanation: "$E = 2 \\times 3 + 7 = 6 + 7 = 13$.",
            difficulty: "debutant",
          },
          {
            id: "calc5-l1-e4",
            question: "Calcule la valeur de $F = 4a - 2b$ pour $a = 5$ et $b = 3$.",
            type: "open",
            modelAnswer: "On remplace $a$ par $5$ et $b$ par $3$ :\\n\\n$$F = 4 \\times 5 - 2 \\times 3 = 20 - 6 = 14$$\\n\\n$$\\boxed{F = 14}$$",
            explanation: "On effectue les deux multiplications avant de soustraire, en respectant les priorités opératoires.",
            difficulty: "intermediaire",
          },
          {
            id: "calc5-l1-e5",
            question: "Le périmètre d'un rectangle est donné par $P = 2L + 2\\ell$. Calcule $P$ pour $L = 9$ cm et $\\ell = 4$ cm, puis vérifie avec la formule $P = 2(L+\\ell)$.",
            type: "open",
            modelAnswer: "Avec la première formule :\\n\\n$$P = 2 \\times 9 + 2 \\times 4 = 18 + 8 = 26$$\\n\\nAvec la seconde formule :\\n\\n$$P = 2 \\times (9+4) = 2 \\times 13 = 26$$\\n\\nLes deux résultats coïncident : $\\boxed{P = 26 \\text{ cm}}$.",
            explanation: "Les deux écritures de la formule du périmètre du rectangle sont équivalentes, ce que confirme le calcul.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "calc5-l2",
        slug: "reduire-une-expression",
        title: "Réduire une expression littérale",
        durationMinutes: 14,
        content: `## Les termes semblables

Dans une expression littérale, des **termes semblables** sont des termes qui contiennent exactement la même lettre (ou le même groupe de lettres) à la même puissance. Par exemple, $3x$ et $5x$ sont semblables, mais $3x$ et $3x^2$ ne le sont pas.

## Réduire une expression

**Réduire** une expression, c'est regrouper les termes semblables pour écrire l'expression sous une forme plus simple, avec le moins de termes possible.

### Exemple

$$A = 3x + 5 + 2x - 1$$

On regroupe les termes en $x$ entre eux, et les nombres entre eux :

$$A = (3x + 2x) + (5 - 1) = 5x + 4$$

## Une expression avec deux lettres

$$B = 4a + 3b - a + 2b$$

$$B = (4a - a) + (3b + 2b) = 3a + 5b$$

> **Astuce :** on peut souligner ou colorer les termes semblables avant de les regrouper, pour ne pas en oublier.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "calc5-l2-e1",
            question: "Réduis l'expression $A = 4x + 2 + 3x$.",
            type: "mcq",
            options: [
              { id: "A", text: "$7x + 2$" },
              { id: "B", text: "$9x$" },
              { id: "C", text: "$7x^2 + 2$" },
              { id: "D", text: "$4x + 5$" },
            ],
            correctId: "A",
            explanation: "$A = (4x+3x) + 2 = 7x + 2$.",
            difficulty: "debutant",
          },
          {
            id: "calc5-l2-e2",
            question: "Vrai ou faux : $3x$ et $3x^2$ sont des termes semblables.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : $x$ et $x^2$ ne sont pas la même puissance de la lettre, ce ne sont donc pas des termes semblables.",
            difficulty: "debutant",
          },
          {
            id: "calc5-l2-e3",
            question: "Réduis l'expression $B = 5a + 3 - 2a + 7$.",
            type: "mcq",
            options: [
              { id: "A", text: "$3a + 10$" },
              { id: "B", text: "$7a + 10$" },
              { id: "C", text: "$3a - 4$" },
              { id: "D", text: "$10a$" },
            ],
            correctId: "A",
            explanation: "$B = (5a-2a) + (3+7) = 3a + 10$.",
            difficulty: "intermediaire",
          },
          {
            id: "calc5-l2-e4",
            question: "Réduis l'expression $C = 6x + 4y - 2x + y$.",
            type: "open",
            modelAnswer: "On regroupe les termes en $x$ et les termes en $y$ séparément :\\n\\n$$C = (6x - 2x) + (4y + y) = 4x + 5y$$\\n\\n$$\\boxed{C = 4x + 5y}$$",
            explanation: "On ne peut regrouper que les termes contenant exactement la même lettre.",
            difficulty: "intermediaire",
          },
          {
            id: "calc5-l2-e5",
            question: "Réduis l'expression $D = 3x + 7 - 5x + 2 - x + 8$, puis calcule sa valeur pour $x = 2$.",
            type: "open",
            modelAnswer: "On regroupe les termes en $x$ : $3x - 5x - x = -3x$.\\n\\nOn regroupe les nombres : $7+2+8 = 17$.\\n\\n$$D = -3x + 17$$\\n\\nPour $x=2$ :\\n\\n$$D = -3 \\times 2 + 17 = -6+17 = 11$$\\n\\n$$\\boxed{D = -3x+17,\\ D(2)=11}$$",
            explanation: "On réduit d'abord complètement l'expression avant de substituer la valeur, ce qui simplifie grandement le calcul final.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "calc5-l3",
        slug: "introduction-aux-equations",
        title: "Introduction aux équations",
        durationMinutes: 15,
        content: `## Qu'est-ce qu'une équation ?

Une **équation** est une égalité contenant une lettre inconnue (souvent $x$), que l'on cherche à déterminer. **Résoudre** l'équation, c'est trouver la (ou les) valeur(s) de $x$ qui rendent l'égalité vraie.

### Exemple

$$x + 5 = 12$$

On cherche le nombre qui, additionné à $5$, donne $12$. C'est $x = 7$, car $7+5=12$.

## La règle d'or

Pour résoudre une équation, on peut effectuer la **même opération** des deux côtés de l'égalité, sans la changer.

### Résoudre $x + 5 = 12$

On soustrait $5$ des deux côtés :

$$x + 5 - 5 = 12 - 5 \\implies x = 7$$

### Résoudre $3x = 21$

On divise par $3$ des deux côtés :

$$\\dfrac{3x}{3} = \\dfrac{21}{3} \\implies x = 7$$

> **Vérification :** on remplace toujours $x$ par la valeur trouvée dans l'équation de départ pour vérifier que l'égalité est vraie.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "calc5-l3-e1",
            question: "Résous l'équation $x + 4 = 9$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 5$" },
              { id: "B", text: "$x = 13$" },
              { id: "C", text: "$x = 4$" },
              { id: "D", text: "$x = 36$" },
            ],
            correctId: "A",
            explanation: "$x = 9 - 4 = 5$.",
            difficulty: "debutant",
          },
          {
            id: "calc5-l3-e2",
            question: "Vrai ou faux : pour résoudre $5x = 30$, il faut diviser les deux côtés par $5$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, $x = 30 \\div 5 = 6$.",
            difficulty: "debutant",
          },
          {
            id: "calc5-l3-e3",
            question: "Résous l'équation $x - 6 = 11$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 5$" },
              { id: "B", text: "$x = 17$" },
              { id: "C", text: "$x = -5$" },
              { id: "D", text: "$x = 66$" },
            ],
            correctId: "B",
            explanation: "$x = 11 + 6 = 17$.",
            difficulty: "intermediaire",
          },
          {
            id: "calc5-l3-e4",
            question: "Résous l'équation $4x = 36$, puis vérifie ta solution.",
            type: "open",
            modelAnswer: "$$4x = 36 \\implies x = \\dfrac{36}{4} = 9$$\\n\\n**Vérification :** $4 \\times 9 = 36$ ✓\\n\\n$$\\boxed{x = 9}$$",
            explanation: "On divise les deux côtés de l'équation par le coefficient de $x$, puis on vérifie en substituant.",
            difficulty: "intermediaire",
          },
          {
            id: "calc5-l3-e5",
            question: "Léa pense à un nombre, le multiplie par $3$ puis ajoute $5$. Elle obtient $23$. À quel nombre pensait-elle ? Mets le problème en équation et résous-le.",
            type: "open",
            modelAnswer: "On note $x$ le nombre choisi par Léa. La mise en équation donne :\\n\\n$$3x + 5 = 23$$\\n\\nOn soustrait $5$ des deux côtés :\\n\\n$$3x = 18$$\\n\\nOn divise par $3$ :\\n\\n$$x = 6$$\\n\\n**Vérification :** $3 \\times 6 + 5 = 18+5 = 23$ ✓\\n\\n$$\\boxed{x = 6}$$",
            explanation: "On traduit l'énoncé en équation étape par étape, puis on la résout en isolant $x$ progressivement.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 5ème — Triangles
  {
    id: "tri5-id",
    slug: "triangles-5eme",
    title: "Triangles",
    description: "Étudiez la somme des angles d'un triangle, l'inégalité triangulaire et les techniques de construction d'un triangle.",
    schoolLevel: "5eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "△",
    lessons: [
      {
        id: "tri5-l1",
        slug: "somme-des-angles-d-un-triangle",
        title: "La somme des angles d'un triangle",
        durationMinutes: 13,
        content: `## La propriété fondamentale

Dans **tout triangle**, la somme des mesures des trois angles est égale à $180°$.

$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180°$$

> Cette propriété est vraie pour **tous** les triangles, quelle que soit leur forme.

## Trouver un angle manquant

Si on connaît deux angles d'un triangle, on peut toujours retrouver le troisième.

### Exemple

Un triangle $ABC$ a $\\widehat{A} = 50°$ et $\\widehat{B} = 70°$.

$$\\widehat{C} = 180° - \\widehat{A} - \\widehat{B} = 180° - 50° - 70° = 60°$$

## Cas particuliers

- Dans un triangle **équilatéral**, les trois angles sont égaux : chacun mesure $\\dfrac{180°}{3} = 60°$.
- Dans un triangle **rectangle**, un des angles vaut $90°$, donc les deux autres sont **complémentaires** (leur somme vaut $90°$).
- Dans un triangle **isocèle**, les deux angles à la base (opposés aux côtés égaux) sont égaux.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "tri5-l1-e1",
            question: "Un triangle a deux angles de $60°$ et $80°$. Quelle est la mesure du troisième angle ?",
            type: "mcq",
            options: [
              { id: "A", text: "$40°$" },
              { id: "B", text: "$50°$" },
              { id: "C", text: "$140°$" },
              { id: "D", text: "$60°$" },
            ],
            correctId: "A",
            explanation: "$180° - 60° - 80° = 40°$.",
            difficulty: "debutant",
          },
          {
            id: "tri5-l1-e2",
            question: "Vrai ou faux : dans un triangle équilatéral, chaque angle mesure $60°$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, car $180° \\div 3 = 60°$ et les trois angles sont égaux.",
            difficulty: "debutant",
          },
          {
            id: "tri5-l1-e3",
            question: "Un triangle rectangle a un angle de $35°$. Quelle est la mesure du troisième angle (en plus de $90°$) ?",
            type: "mcq",
            options: [
              { id: "A", text: "$45°$" },
              { id: "B", text: "$55°$" },
              { id: "C", text: "$65°$" },
              { id: "D", text: "$125°$" },
            ],
            correctId: "B",
            explanation: "$180° - 90° - 35° = 55°$.",
            difficulty: "intermediaire",
          },
          {
            id: "tri5-l1-e4",
            question: "Un triangle isocèle a un angle au sommet de $40°$. Quelles sont les mesures des deux autres angles, sachant qu'ils sont égaux ?",
            type: "open",
            modelAnswer: "La somme des deux angles à la base est :\\n\\n$$180° - 40° = 140°$$\\n\\nComme ils sont égaux, chacun mesure :\\n\\n$$140° \\div 2 = 70°$$\\n\\n$$\\boxed{70° \\text{ et } 70°}$$",
            explanation: "On retire l'angle au sommet du total ($180°$), puis on partage équitablement le reste entre les deux angles égaux à la base.",
            difficulty: "intermediaire",
          },
          {
            id: "tri5-l1-e5",
            question: "Dans un triangle $ABC$, $\\widehat{B} = 2\\widehat{A}$ et $\\widehat{C} = 3\\widehat{A}$. Quelle est la mesure de chaque angle ?",
            type: "open",
            modelAnswer: "On pose $\\widehat{A} = x$. Alors $\\widehat{B} = 2x$ et $\\widehat{C} = 3x$.\\n\\nLa somme des angles donne :\\n\\n$$x + 2x + 3x = 180° \\implies 6x = 180°$$\\n\\n$$x = 30°$$\\n\\nDonc $\\widehat{A} = 30°$, $\\widehat{B} = 60°$, $\\widehat{C} = 90°$.\\n\\n$$\\boxed{\\widehat{A}=30°,\\ \\widehat{B}=60°,\\ \\widehat{C}=90°}$$",
            explanation: "On traduit les relations entre angles en équation, puis on résout en utilisant la somme des angles d'un triangle.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "tri5-l2",
        slug: "inegalite-triangulaire",
        title: "L'inégalité triangulaire",
        durationMinutes: 12,
        content: `## La condition d'existence d'un triangle

Pour que trois longueurs $a$, $b$ et $c$ puissent former un triangle, il faut que la plus grande longueur soit **strictement inférieure** à la somme des deux autres.

$$\\text{si } c \\text{ est la plus grande longueur, alors } c < a + b$$

> C'est l'**inégalité triangulaire**. Si cette condition n'est pas respectée, les trois segments ne peuvent pas se fermer pour former un triangle.

## Exemple

Peut-on construire un triangle de côtés $3$ cm, $4$ cm et $5$ cm ?

La plus grande longueur est $5$. On vérifie : $5 < 3 + 4 = 7$. ✓ C'est possible.

## Contre-exemple

Peut-on construire un triangle de côtés $2$ cm, $3$ cm et $7$ cm ?

La plus grande longueur est $7$. On vérifie : $7 < 2+3 = 5$ ? Non, $7$ n'est pas inférieur à $5$. ✗ Ce n'est **pas possible** : les deux petits côtés sont trop courts pour « rejoindre » le grand côté.

> Si $c = a+b$ exactement, les trois points sont **alignés** : on n'obtient pas un vrai triangle, mais un segment.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "tri5-l2-e1",
            question: "Peut-on construire un triangle de côtés $6$ cm, $8$ cm et $10$ cm ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, car $10 < 6+8$" },
              { id: "B", text: "Non, car $10 > 6+8$" },
              { id: "C", text: "Oui, car $10 = 6+8$" },
              { id: "D", text: "Impossible à déterminer" },
            ],
            correctId: "A",
            explanation: "$6+8=14$ et $10 < 14$, donc l'inégalité triangulaire est respectée : le triangle existe.",
            difficulty: "debutant",
          },
          {
            id: "tri5-l2-e2",
            question: "Vrai ou faux : on peut construire un triangle de côtés $2$ cm, $2$ cm et $5$ cm.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : $2+2=4$, et $5$ n'est pas inférieur à $4$. Le triangle n'existe pas.",
            difficulty: "debutant",
          },
          {
            id: "tri5-l2-e3",
            question: "Pour quelles longueurs l'inégalité triangulaire est-elle respectée parmi ces trio ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$ cm, $2$ cm, $5$ cm" },
              { id: "B", text: "$4$ cm, $4$ cm, $9$ cm" },
              { id: "C", text: "$5$ cm, $6$ cm, $7$ cm" },
              { id: "D", text: "$2$ cm, $3$ cm, $6$ cm" },
            ],
            correctId: "C",
            explanation: "Pour $5,6,7$ : la plus grande longueur est $7 < 5+6=11$. ✓ Les autres trios ne respectent pas la condition.",
            difficulty: "intermediaire",
          },
          {
            id: "tri5-l2-e4",
            question: "Un triangle a deux côtés de $5$ cm et $9$ cm. Entre quelles valeurs (strictement) doit se trouver le troisième côté $c$ ?",
            type: "open",
            modelAnswer: "Si $c$ est le plus grand côté : $c < 5+9=14$.\\n\\nSi $9$ reste le plus grand côté : $9 < 5+c \\implies c > 4$.\\n\\n$$\\boxed{4 \\text{ cm} < c < 14 \\text{ cm}}$$",
            explanation: "On applique l'inégalité triangulaire dans les deux sens : le troisième côté doit être à la fois assez grand pour fermer le triangle et assez petit pour ne pas dépasser la somme des deux autres.",
            difficulty: "expert",
          },
          {
            id: "tri5-l2-e5",
            question: "Peut-on construire un triangle de côtés $7$ cm, $7$ cm et $14$ cm ? Justifie.",
            type: "open",
            modelAnswer: "On vérifie l'inégalité triangulaire avec le plus grand côté, $14$ cm :\\n\\n$$7 + 7 = 14$$\\n\\nOr il faut une inégalité **stricte** : $14$ n'est pas strictement inférieur à $14$.\\n\\n$$\\boxed{\\text{Non, les trois points seraient alignés (pas un vrai triangle)}}$$",
            explanation: "Lorsque la plus grande longueur est exactement égale à la somme des deux autres, les points sont alignés et ne forment pas un triangle.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "tri5-l3",
        slug: "construire-un-triangle",
        title: "Construire un triangle",
        durationMinutes: 14,
        content: `## Construire un triangle connaissant trois côtés

Pour construire un triangle $ABC$ dont on connaît les trois longueurs $AB$, $BC$ et $AC$ :

1. Vérifier l'**inégalité triangulaire**.
2. Tracer le segment $[AB]$ à la bonne longueur.
3. Tracer un arc de cercle de centre $A$ et de rayon $AC$.
4. Tracer un arc de cercle de centre $B$ et de rayon $BC$.
5. Le point $C$ est à l'**intersection** des deux arcs.

## Construire un triangle connaissant deux côtés et l'angle entre eux

1. Tracer l'un des deux côtés connus, par exemple $[AB]$.
2. À l'aide du **rapporteur**, tracer une demi-droite depuis $A$ formant l'angle voulu avec $[AB]$.
3. Reporter la longueur du deuxième côté sur cette demi-droite pour positionner $C$.
4. Relier $B$ et $C$.

## Construire un triangle connaissant un côté et deux angles

1. Tracer le côté connu, par exemple $[AB]$.
2. Tracer l'angle connu en $A$, puis l'angle connu en $B$, chacun avec le rapporteur.
3. Le point $C$ se trouve à l'**intersection** des deux demi-droites tracées.

> Pour ces deux dernières méthodes, **un seul triangle** est généralement possible (à une symétrie près) : c'est ce qu'on appelle un **cas de construction**.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "tri5-l3-e1",
            question: "Pour construire un triangle connaissant ses trois côtés, quel instrument utilise-t-on principalement (en plus de la règle) ?",
            type: "mcq",
            options: [
              { id: "A", text: "Le rapporteur" },
              { id: "B", text: "Le compas" },
              { id: "C", text: "L'équerre" },
              { id: "D", text: "Le tableur" },
            ],
            correctId: "B",
            explanation: "On utilise le compas pour tracer les deux arcs de cercle qui se croisent au troisième sommet.",
            difficulty: "debutant",
          },
          {
            id: "tri5-l3-e2",
            question: "Vrai ou faux : avant de construire un triangle à partir de trois longueurs, il faut vérifier l'inégalité triangulaire.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, sinon le triangle ne peut pas exister et la construction échouera.",
            difficulty: "debutant",
          },
          {
            id: "tri5-l3-e3",
            question: "Pour construire un triangle connaissant deux côtés et l'angle entre eux, quel instrument est indispensable ?",
            type: "mcq",
            options: [
              { id: "A", text: "Le compas uniquement" },
              { id: "B", text: "Le rapporteur" },
              { id: "C", text: "Une calculatrice" },
              { id: "D", text: "Aucun instrument" },
            ],
            correctId: "B",
            explanation: "Le rapporteur permet de tracer précisément l'angle donné entre les deux côtés connus.",
            difficulty: "intermediaire",
          },
          {
            id: "tri5-l3-e4",
            question: "Décris les étapes pour construire un triangle $ABC$ tel que $AB = 6$ cm, $\\widehat{A} = 50°$ et $\\widehat{B} = 60°$.",
            type: "open",
            modelAnswer: "1. On trace le segment $[AB]$ de $6$ cm.\\n\\n2. Avec le rapporteur, on trace en $A$ une demi-droite formant un angle de $50°$ avec $[AB]$.\\n\\n3. Avec le rapporteur, on trace en $B$ une demi-droite formant un angle de $60°$ avec $[AB]$ (du même côté).\\n\\n4. Le point $C$ est à l'intersection des deux demi-droites.\\n\\n$$\\boxed{\\text{Un côté + deux angles} \\implies \\text{intersection des deux demi-droites}}$$",
            explanation: "Connaissant un côté et les deux angles adjacents, le triangle est entièrement déterminé : on trace les deux demi-droites qui se croisent en $C$.",
            difficulty: "expert",
          },
          {
            id: "tri5-l3-e5",
            question: "On veut construire un triangle $ABC$ avec $AB=5$ cm, $AC=4$ cm et $BC=10$ cm. Est-ce possible ?",
            type: "open",
            modelAnswer: "On vérifie l'inégalité triangulaire avec le plus grand côté $BC = 10$ cm :\\n\\n$$AB + AC = 5+4 = 9$$\\n\\nOr $10$ n'est pas inférieur à $9$.\\n\\n$$\\boxed{\\text{Non, ce triangle ne peut pas être construit}}$$",
            explanation: "Avant toute construction, il faut systématiquement vérifier l'inégalité triangulaire : ici elle n'est pas respectée.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 5ème — Aires et volumes (prismes, cylindres)
  {
    id: "aire5-id",
    slug: "aires-volumes-5eme",
    title: "Aires et volumes (prismes, cylindres)",
    description: "Calculez l'aire d'un parallélogramme et d'un disque, et le volume d'un prisme droit ou d'un cylindre de révolution.",
    schoolLevel: "5eme",
    subject: "geometrie",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🥫",
    lessons: [
      {
        id: "aire5-l1",
        slug: "aire-du-parallelogramme-et-du-disque",
        title: "L'aire du parallélogramme et du disque",
        durationMinutes: 13,
        content: `## L'aire du parallélogramme

L'aire d'un **parallélogramme** se calcule à partir d'un côté (la base) et de la **hauteur** relative à ce côté (la distance perpendiculaire entre ce côté et le côté opposé).

$$A = \\text{base} \\times \\text{hauteur}$$

### Exemple

Un parallélogramme a une base $b = 8$ cm et une hauteur $h = 5$ cm relative à cette base.

$$A = 8 \\times 5 = 40 \\text{ cm}^2$$

> **Attention :** la hauteur n'est généralement pas un côté du parallélogramme ! Elle est perpendiculaire à la base choisie.

## Rappel : l'aire du disque

$$A = \\pi \\times r^2$$

### Exemple

Pour un disque de rayon $r = 6$ cm :

$$A = \\pi \\times 6^2 \\approx 3{,}14 \\times 36 \\approx 113{,}04 \\text{ cm}^2$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "aire5-l1-e1",
            question: "Un parallélogramme a une base de $10$ cm et une hauteur de $4$ cm. Quelle est son aire ?",
            type: "mcq",
            options: [
              { id: "A", text: "$14$ cm²" },
              { id: "B", text: "$20$ cm²" },
              { id: "C", text: "$40$ cm²" },
              { id: "D", text: "$80$ cm²" },
            ],
            correctId: "C",
            explanation: "$A = 10 \\times 4 = 40$ cm².",
            difficulty: "debutant",
          },
          {
            id: "aire5-l1-e2",
            question: "Vrai ou faux : la hauteur d'un parallélogramme est toujours l'un de ses côtés.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : la hauteur est le segment perpendiculaire à la base, ce n'est généralement pas un côté du parallélogramme.",
            difficulty: "debutant",
          },
          {
            id: "aire5-l1-e3",
            question: "Calcule l'aire approximative d'un disque de rayon $7$ cm (avec $\\pi \\approx 3{,}14$).",
            type: "mcq",
            options: [
              { id: "A", text: "$21{,}98$ cm²" },
              { id: "B", text: "$43{,}96$ cm²" },
              { id: "C", text: "$153{,}86$ cm²" },
              { id: "D", text: "$49$ cm²" },
            ],
            correctId: "C",
            explanation: "$A = \\pi r^2 \\approx 3{,}14 \\times 49 = 153{,}86$ cm².",
            difficulty: "intermediaire",
          },
          {
            id: "aire5-l1-e4",
            question: "Un parallélogramme a une aire de $72$ cm² et une base de $9$ cm. Quelle est sa hauteur ?",
            type: "open",
            modelAnswer: "On utilise $A = \\text{base} \\times \\text{hauteur}$, donc $\\text{hauteur} = \\dfrac{A}{\\text{base}}$.\\n\\n$$h = \\dfrac{72}{9} = 8$$\\n\\n$$\\boxed{h = 8 \\text{ cm}}$$",
            explanation: "On isole la hauteur en divisant l'aire par la base, opération inverse de la formule de l'aire.",
            difficulty: "intermediaire",
          },
          {
            id: "aire5-l1-e5",
            question: "Une plaque circulaire de rayon $4$ cm est découpée dans une plaque carrée de $8$ cm de côté. Quelle aire de matière reste-t-il (en cm², au centième) ?",
            type: "open",
            modelAnswer: "Aire du carré :\\n\\n$$A_{carré} = 8^2 = 64 \\text{ cm}^2$$\\n\\nAire du disque retiré :\\n\\n$$A_{disque} = \\pi \\times 4^2 \\approx 3{,}14 \\times 16 = 50{,}24 \\text{ cm}^2$$\\n\\nAire restante :\\n\\n$$64 - 50{,}24 = \\boxed{13{,}76 \\text{ cm}^2}$$",
            explanation: "On calcule l'aire de la plaque carrée, puis on soustrait l'aire du disque découpé pour obtenir l'aire de matière restante.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "aire5-l2",
        slug: "le-prisme-droit",
        title: "Le prisme droit",
        durationMinutes: 14,
        content: `## Qu'est-ce qu'un prisme droit ?

Un **prisme droit** est un solide constitué de deux faces identiques et parallèles (les **bases**), reliées par des faces latérales **rectangulaires**, perpendiculaires aux bases.

> Le pavé droit est un prisme droit dont les bases sont des rectangles. Un prisme à base triangulaire a des bases triangulaires.

## Le volume du prisme droit

$$V = \\text{aire de la base} \\times \\text{hauteur}$$

### Exemple

Un prisme droit a une base triangulaire d'aire $12$ cm² et une hauteur (la « profondeur » du prisme) de $7$ cm.

$$V = 12 \\times 7 = 84 \\text{ cm}^3$$

## Méthode générale

1. Identifier la forme de la base (triangle, parallélogramme...) et calculer son aire.
2. Multiplier cette aire par la hauteur du prisme (distance entre les deux bases).

> **Ne confonds pas** la hauteur du triangle de base avec la hauteur du prisme (sa profondeur) !`,
        videoUrl: undefined,
        exercises: [
          {
            id: "aire5-l2-e1",
            question: "Un prisme droit a une base d'aire $15$ cm² et une hauteur de $6$ cm. Quel est son volume ?",
            type: "mcq",
            options: [
              { id: "A", text: "$21$ cm³" },
              { id: "B", text: "$45$ cm³" },
              { id: "C", text: "$90$ cm³" },
              { id: "D", text: "$180$ cm³" },
            ],
            correctId: "C",
            explanation: "$V = 15 \\times 6 = 90$ cm³.",
            difficulty: "debutant",
          },
          {
            id: "aire5-l2-e2",
            question: "Vrai ou faux : un pavé droit est un cas particulier de prisme droit.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, le pavé droit est un prisme droit dont les bases sont des rectangles.",
            difficulty: "debutant",
          },
          {
            id: "aire5-l2-e3",
            question: "Un prisme droit a une base triangulaire de base $6$ cm et de hauteur $4$ cm, et une hauteur de prisme de $10$ cm. Quel est son volume ?",
            type: "mcq",
            options: [
              { id: "A", text: "$120$ cm³" },
              { id: "B", text: "$240$ cm³" },
              { id: "C", text: "$60$ cm³" },
              { id: "D", text: "$24$ cm³" },
            ],
            correctId: "A",
            explanation: "Aire de la base triangulaire : $\\dfrac{6\\times4}{2}=12$ cm². Volume : $12 \\times 10 = 120$ cm³.",
            difficulty: "intermediaire",
          },
          {
            id: "aire5-l2-e4",
            question: "Un prisme droit à base carrée a un volume de $250$ cm³ et une hauteur de $10$ cm. Quelle est l'aire de sa base ?",
            type: "open",
            modelAnswer: "On utilise $V = \\text{aire de la base} \\times \\text{hauteur}$, donc :\\n\\n$$\\text{aire} = \\dfrac{V}{h} = \\dfrac{250}{10} = 25$$\\n\\n$$\\boxed{25 \\text{ cm}^2}$$",
            explanation: "On isole l'aire de la base en divisant le volume par la hauteur du prisme.",
            difficulty: "intermediaire",
          },
          {
            id: "aire5-l2-e5",
            question: "Un prisme droit a une base en forme de parallélogramme (base $5$ cm, hauteur $4$ cm) et une hauteur de prisme de $9$ cm. Calcule son volume.",
            type: "open",
            modelAnswer: "Aire de la base (parallélogramme) :\\n\\n$$A = 5 \\times 4 = 20 \\text{ cm}^2$$\\n\\nVolume du prisme :\\n\\n$$V = A \\times h = 20 \\times 9 = 180$$\\n\\n$$\\boxed{V = 180 \\text{ cm}^3}$$",
            explanation: "On calcule d'abord l'aire de la base (ici un parallélogramme), puis on multiplie par la hauteur du prisme.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "aire5-l3",
        slug: "le-cylindre-de-revolution",
        title: "Le cylindre de révolution",
        durationMinutes: 14,
        content: `## Qu'est-ce qu'un cylindre de révolution ?

Un **cylindre de révolution** est un solide engendré par un rectangle qui tourne autour d'un de ses côtés. Ses deux bases sont des **disques identiques**, et sa surface latérale, déroulée, forme un rectangle.

## Le volume du cylindre

$$V = \\pi \\times r^2 \\times h$$

où $r$ est le rayon de la base et $h$ la hauteur du cylindre.

### Exemple

Un cylindre a un rayon $r = 3$ cm et une hauteur $h = 10$ cm.

$$V = \\pi \\times 3^2 \\times 10 \\approx 3{,}14 \\times 9 \\times 10 \\approx 282{,}6 \\text{ cm}^3$$

## Remarque

Le volume du cylindre suit la même logique que celui du prisme droit : c'est l'**aire de la base** (le disque, d'aire $\\pi r^2$) multipliée par la **hauteur**.

> Une canette de soda est un exemple courant de cylindre de révolution.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "aire5-l3-e1",
            question: "Quelle formule permet de calculer le volume d'un cylindre de rayon $r$ et de hauteur $h$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$V = 2\\pi r h$" },
              { id: "B", text: "$V = \\pi r^2 h$" },
              { id: "C", text: "$V = \\pi r h^2$" },
              { id: "D", text: "$V = 2\\pi r^2$" },
            ],
            correctId: "B",
            explanation: "Le volume du cylindre est $V = \\pi r^2 h$ (aire de la base $\\times$ hauteur).",
            difficulty: "debutant",
          },
          {
            id: "aire5-l3-e2",
            question: "Vrai ou faux : les deux bases d'un cylindre de révolution sont des disques identiques.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, le cylindre de révolution possède deux bases circulaires identiques.",
            difficulty: "debutant",
          },
          {
            id: "aire5-l3-e3",
            question: "Calcule le volume approximatif d'un cylindre de rayon $2$ cm et de hauteur $5$ cm (avec $\\pi \\approx 3{,}14$).",
            type: "mcq",
            options: [
              { id: "A", text: "$31{,}4$ cm³" },
              { id: "B", text: "$62{,}8$ cm³" },
              { id: "C", text: "$20$ cm³" },
              { id: "D", text: "$15{,}7$ cm³" },
            ],
            correctId: "B",
            explanation: "$V = \\pi r^2 h \\approx 3{,}14 \\times 4 \\times 5 = 62{,}8$ cm³.",
            difficulty: "intermediaire",
          },
          {
            id: "aire5-l3-e4",
            question: "Une canette cylindrique a un rayon de $3{,}5$ cm et une hauteur de $12$ cm. Calcule son volume approximatif (au cm³ près).",
            type: "open",
            modelAnswer: "$$V = \\pi r^2 h \\approx 3{,}14 \\times 3{,}5^2 \\times 12$$\\n\\n$$= 3{,}14 \\times 12{,}25 \\times 12 \\approx 461{,}7$$\\n\\n$$\\boxed{V \\approx 462 \\text{ cm}^3}$$",
            explanation: "On applique la formule $V = \\pi r^2 h$ avec $r = 3{,}5$ cm, en arrondissant le résultat final au cm³.",
            difficulty: "intermediaire",
          },
          {
            id: "aire5-l3-e5",
            question: "Un réservoir cylindrique a un volume de $1570$ cm³ et un rayon de $5$ cm. Quelle est sa hauteur (avec $\\pi \\approx 3{,}14$) ?",
            type: "open",
            modelAnswer: "On utilise $V = \\pi r^2 h$, donc $h = \\dfrac{V}{\\pi r^2}$.\\n\\n$$h = \\dfrac{1570}{3{,}14 \\times 25} = \\dfrac{1570}{78{,}5} = 20$$\\n\\n$$\\boxed{h = 20 \\text{ cm}}$$",
            explanation: "On isole la hauteur en divisant le volume par l'aire de la base circulaire ($\\pi r^2$).",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 4ème — Translations et vecteurs
  {
    id: "vec4-id",
    slug: "translations-vecteurs-4eme",
    title: "Translations et vecteurs",
    description: "Découvrez la notion de vecteur, la translation comme transformation géométrique et leurs propriétés de conservation.",
    schoolLevel: "4eme",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "➡️",
    lessons: [
      {
        id: "vec4-l1",
        slug: "notion-de-vecteur",
        title: "La notion de vecteur",
        durationMinutes: 14,
        content: `## Qu'est-ce qu'un vecteur ?

Un **vecteur** représente un déplacement : il indique une **direction**, un **sens** et une **longueur** (sa norme). On note un vecteur $\\vec{AB}$ lorsqu'il représente le déplacement du point $A$ vers le point $B$.

> Un vecteur n'a pas de position fixe dans le plan : seuls sa direction, son sens et sa longueur comptent.

## Vecteurs égaux

Deux vecteurs $\\vec{AB}$ et $\\vec{CD}$ sont **égaux** si $ABDC$ est un parallélogramme (éventuellement aplati), c'est-à-dire s'ils ont :

- la **même direction**,
- le **même sens**,
- la **même longueur**.

## Les coordonnées d'un vecteur

Dans un repère, le vecteur $\\vec{AB}$ a pour coordonnées :

$$\\vec{AB}\\begin{pmatrix}x_B - x_A \\\\ y_B - y_A\\end{pmatrix}$$

### Exemple

Si $A(1; 2)$ et $B(4; 6)$, alors :

$$\\vec{AB}\\begin{pmatrix}4-1 \\\\ 6-2\\end{pmatrix} = \\vec{AB}\\begin{pmatrix}3 \\\\ 4\\end{pmatrix}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "vec4-l1-e1",
            question: "Qu'est-ce qui caractérise un vecteur ?",
            type: "mcq",
            options: [
              { id: "A", text: "Sa position uniquement" },
              { id: "B", text: "Sa direction, son sens et sa longueur" },
              { id: "C", text: "Sa couleur" },
              { id: "D", text: "Le nombre de points qu'il contient" },
            ],
            correctId: "B",
            explanation: "Un vecteur est caractérisé par sa direction, son sens et sa longueur (sa norme), pas par sa position.",
            difficulty: "debutant",
          },
          {
            id: "vec4-l1-e2",
            question: "Vrai ou faux : $\\vec{AB}$ et $\\vec{BA}$ ont la même direction mais des sens opposés.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, $\\vec{AB}$ et $\\vec{BA}$ ont la même direction et la même longueur, mais des sens opposés.",
            difficulty: "debutant",
          },
          {
            id: "vec4-l1-e3",
            question: "Soit $A(2; 1)$ et $B(5; 3)$. Quelles sont les coordonnées du vecteur $\\vec{AB}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}3 \\\\ 2\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}7 \\\\ 4\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}2 \\\\ 3\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}-3 \\\\ -2\\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "$\\vec{AB}\\begin{pmatrix}5-2\\\\3-1\\end{pmatrix} = \\begin{pmatrix}3\\\\2\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec4-l1-e4",
            question: "Le vecteur $\\vec{u}$ a pour coordonnées $\\begin{pmatrix}5\\\\-2\\end{pmatrix}$. Si $C(3;4)$ et $\\vec{CD}=\\vec{u}$, quelles sont les coordonnées de $D$ ?",
            type: "open",
            modelAnswer: "On a $x_D - x_C = 5$ donc $x_D = 3+5=8$.\\n\\nOn a $y_D - y_C = -2$ donc $y_D = 4-2=2$.\\n\\n$$\\boxed{D(8;2)}$$",
            explanation: "On ajoute les coordonnées du vecteur à celles du point de départ pour retrouver le point d'arrivée.",
            difficulty: "intermediaire",
          },
          {
            id: "vec4-l1-e5",
            question: "Les points $A(0;0)$, $B(4;2)$, $C(6;5)$, $D(2;3)$ sont-ils tels que $\\vec{AB} = \\vec{DC}$ ?",
            type: "open",
            modelAnswer: "$$\\vec{AB}\\begin{pmatrix}4-0\\\\2-0\\end{pmatrix} = \\begin{pmatrix}4\\\\2\\end{pmatrix}$$\\n\\n$$\\vec{DC}\\begin{pmatrix}6-2\\\\5-3\\end{pmatrix} = \\begin{pmatrix}4\\\\2\\end{pmatrix}$$\\n\\nLes deux vecteurs ont les mêmes coordonnées, donc ils sont égaux.\\n\\n$$\\boxed{\\text{Oui, } \\vec{AB} = \\vec{DC}}$$",
            explanation: "Deux vecteurs sont égaux si et seulement s'ils ont exactement les mêmes coordonnées.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "vec4-l2",
        slug: "la-translation",
        title: "La translation",
        durationMinutes: 13,
        content: `## Qu'est-ce qu'une translation ?

Une **translation** est une transformation géométrique qui déplace tous les points d'une figure dans la **même direction**, le **même sens** et de la **même longueur**, définis par un vecteur $\\vec{u}$.

> Si $M'$ est l'image de $M$ par la translation de vecteur $\\vec{u}$, alors $\\vec{MM'} = \\vec{u}$.

## Propriétés conservées

Comme la symétrie, la translation **conserve** :

- les longueurs,
- les angles,
- les aires,
- le parallélisme.

> Contrairement à la symétrie axiale, la translation conserve aussi le **sens** de parcours d'une figure (elle ne « retourne » pas la figure).

## Exemple

On translate le point $A(2;3)$ par le vecteur $\\vec{u}\\begin{pmatrix}4\\\\-1\\end{pmatrix}$. Son image $A'$ a pour coordonnées :

$$x_{A'} = 2+4=6 \\qquad y_{A'} = 3-1=2$$

$$A'(6;2)$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "vec4-l2-e1",
            question: "Une translation est définie par un vecteur $\\vec{u}$. Que peut-on dire du vecteur $\\vec{MM'}$, où $M'$ est l'image de $M$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\vec{MM'} = \\vec{u}$ pour tout point $M$" },
              { id: "B", text: "$\\vec{MM'}$ dépend de la position de $M$" },
              { id: "C", text: "$\\vec{MM'}$ est toujours nul" },
              { id: "D", text: "$\\vec{MM'}$ est perpendiculaire à $\\vec{u}$" },
            ],
            correctId: "A",
            explanation: "Par définition de la translation, le vecteur $\\vec{MM'}$ est égal au vecteur de translation $\\vec{u}$ pour tous les points.",
            difficulty: "debutant",
          },
          {
            id: "vec4-l2-e2",
            question: "Vrai ou faux : une translation conserve les longueurs et les angles.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, comme toute transformation isométrique, la translation conserve longueurs, angles et aires.",
            difficulty: "debutant",
          },
          {
            id: "vec4-l2-e3",
            question: "Le point $B(5;1)$ est translaté par le vecteur $\\vec{v}\\begin{pmatrix}-2\\\\3\\end{pmatrix}$. Quelles sont les coordonnées de l'image $B'$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(3;4)$" },
              { id: "B", text: "$(7;-2)$" },
              { id: "C", text: "$(3;-2)$" },
              { id: "D", text: "$(-2;3)$" },
            ],
            correctId: "A",
            explanation: "$x_{B'}=5-2=3$ et $y_{B'}=1+3=4$, donc $B'(3;4)$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec4-l2-e4",
            question: "Un triangle $ABC$ d'aire $20$ cm² subit une translation. Quelle est l'aire de son image $A'B'C'$ ?",
            type: "open",
            modelAnswer: "La translation est une transformation qui conserve les aires.\\n\\n$$\\boxed{\\text{Aire}(A'B'C') = 20 \\text{ cm}^2}$$",
            explanation: "Comme la symétrie, la translation conserve les longueurs, les angles, et donc également les aires des figures.",
            difficulty: "intermediaire",
          },
          {
            id: "vec4-l2-e5",
            question: "Le point $A(1;1)$ a pour image $A'(5;4)$ par une translation de vecteur $\\vec{u}$. Quelles sont les coordonnées de $\\vec{u}$, et quelle est l'image $B'$ du point $B(2;-3)$ par cette même translation ?",
            type: "open",
            modelAnswer: "On détermine $\\vec{u} = \\vec{AA'}$ :\\n\\n$$\\vec{u}\\begin{pmatrix}5-1\\\\4-1\\end{pmatrix} = \\begin{pmatrix}4\\\\3\\end{pmatrix}$$\\n\\nPour $B(2;-3)$, l'image $B'$ a pour coordonnées :\\n\\n$$x_{B'}=2+4=6 \\qquad y_{B'}=-3+3=0$$\\n\\n$$\\boxed{\\vec{u}\\begin{pmatrix}4\\\\3\\end{pmatrix},\\ B'(6;0)}$$",
            explanation: "Toute translation est définie par un seul vecteur, valable pour tous les points du plan : on le retrouve avec un couple point/image connu, puis on l'applique à un autre point.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "vec4-l3",
        slug: "addition-de-vecteurs",
        title: "L'addition de vecteurs",
        durationMinutes: 13,
        content: `## La relation de Chasles

Pour trois points $A$, $B$, $C$ quelconques, on a toujours :

$$\\vec{AB} + \\vec{BC} = \\vec{AC}$$

C'est la **relation de Chasles**, très utile pour simplifier des sommes de vecteurs.

## Additionner des vecteurs par leurs coordonnées

Si $\\vec{u}\\begin{pmatrix}x\\\\y\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x'\\\\y'\\end{pmatrix}$, alors :

$$\\vec{u} + \\vec{v} = \\begin{pmatrix}x+x'\\\\y+y'\\end{pmatrix}$$

### Exemple

$\\vec{u}\\begin{pmatrix}3\\\\2\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}-1\\\\5\\end{pmatrix}$ :

$$\\vec{u}+\\vec{v} = \\begin{pmatrix}3+(-1)\\\\2+5\\end{pmatrix} = \\begin{pmatrix}2\\\\7\\end{pmatrix}$$

## Composer deux translations

Composer deux translations successives (de vecteurs $\\vec{u}$ puis $\\vec{v}$) équivaut à une seule translation, de vecteur $\\vec{u}+\\vec{v}$.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "vec4-l3-e1",
            question: "Selon la relation de Chasles, à quoi est égal $\\vec{AB} + \\vec{BC}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\vec{AC}$" },
              { id: "B", text: "$\\vec{CA}$" },
              { id: "C", text: "$\\vec{BA}$" },
              { id: "D", text: "$\\vec{0}$" },
            ],
            correctId: "A",
            explanation: "La relation de Chasles donne $\\vec{AB}+\\vec{BC}=\\vec{AC}$.",
            difficulty: "debutant",
          },
          {
            id: "vec4-l3-e2",
            question: "Vrai ou faux : pour additionner deux vecteurs donnés par leurs coordonnées, on additionne les coordonnées correspondantes.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, on additionne les abscisses entre elles et les ordonnées entre elles.",
            difficulty: "debutant",
          },
          {
            id: "vec4-l3-e3",
            question: "Soit $\\vec{u}\\begin{pmatrix}2\\\\-3\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}4\\\\6\\end{pmatrix}$. Quelles sont les coordonnées de $\\vec{u}+\\vec{v}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}6\\\\3\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}2\\\\9\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}8\\\\-18\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}-2\\\\9\\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "$\\begin{pmatrix}2+4\\\\-3+6\\end{pmatrix}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec4-l3-e4",
            question: "Simplifie l'expression $\\vec{AB} + \\vec{BC} + \\vec{CD}$.",
            type: "open",
            modelAnswer: "On applique deux fois la relation de Chasles :\\n\\n$$\\vec{AB}+\\vec{BC} = \\vec{AC}$$\\n\\n$$\\vec{AC}+\\vec{CD} = \\vec{AD}$$\\n\\n$$\\boxed{\\vec{AB}+\\vec{BC}+\\vec{CD} = \\vec{AD}}$$",
            explanation: "La relation de Chasles se généralise à n'importe quelle chaîne de vecteurs « bout à bout » : tous les points intermédiaires se simplifient.",
            difficulty: "intermediaire",
          },
          {
            id: "vec4-l3-e5",
            question: "Un point $M$ subit la translation de vecteur $\\vec{u}\\begin{pmatrix}3\\\\1\\end{pmatrix}$, puis celle de vecteur $\\vec{v}\\begin{pmatrix}-5\\\\2\\end{pmatrix}$. Si $M(2;0)$, quelles sont les coordonnées du point final ?",
            type: "open",
            modelAnswer: "La composition des deux translations équivaut à la translation de vecteur $\\vec{u}+\\vec{v}$ :\\n\\n$$\\vec{u}+\\vec{v} = \\begin{pmatrix}3+(-5)\\\\1+2\\end{pmatrix} = \\begin{pmatrix}-2\\\\3\\end{pmatrix}$$\\n\\nLe point final a pour coordonnées :\\n\\n$$x = 2 + (-2) = 0 \\qquad y = 0+3=3$$\\n\\n$$\\boxed{(0;3)}$$",
            explanation: "On peut additionner les vecteurs des deux translations successives pour obtenir directement le résultat final en une seule étape.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 4ème — Statistiques et probabilités
  {
    id: "stat4-id",
    slug: "statistiques-probabilites-4eme",
    title: "Statistiques et probabilités",
    description: "Calculez médiane et étendue d'une série statistique, et déterminez la probabilité d'un événement simple.",
    schoolLevel: "4eme",
    subject: "probabilites",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "🎲",
    lessons: [
      {
        id: "stat4-l1",
        slug: "mediane-et-etendue",
        title: "La médiane et l'étendue d'une série",
        durationMinutes: 14,
        content: `## L'étendue

L'**étendue** d'une série statistique est la différence entre sa plus grande valeur et sa plus petite valeur.

$$\\text{étendue} = \\text{valeur maximale} - \\text{valeur minimale}$$

### Exemple

Pour la série $5, 8, 12, 3, 9$ : le maximum est $12$ et le minimum est $3$.

$$\\text{étendue} = 12 - 3 = 9$$

## La médiane

La **médiane** d'une série de valeurs **ordonnées** est la valeur qui partage la série en deux parties de même effectif : autant de valeurs en dessous qu'au-dessus.

### Si le nombre de valeurs est impair

La médiane est la valeur du **milieu**.

Exemple : $3, 5, 7, 9, 12$ (5 valeurs) → la médiane est $7$.

### Si le nombre de valeurs est pair

La médiane est la **moyenne des deux valeurs du milieu**.

Exemple : $2, 4, 6, 8$ (4 valeurs) → la médiane est $\\dfrac{4+6}{2} = 5$.

> **Important :** il faut toujours **ordonner** la série avant de chercher la médiane !`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat4-l1-e1",
            question: "Quelle est l'étendue de la série $14, 7, 20, 11, 3$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$11$" },
              { id: "B", text: "$17$" },
              { id: "C", text: "$20$" },
              { id: "D", text: "$3$" },
            ],
            correctId: "B",
            explanation: "Max $=20$, min $=3$, donc étendue $=20-3=17$.",
            difficulty: "debutant",
          },
          {
            id: "stat4-l1-e2",
            question: "Vrai ou faux : pour calculer une médiane, il faut d'abord ordonner la série de valeurs.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, la médiane n'a de sens que sur une série ordonnée (croissante ou décroissante).",
            difficulty: "debutant",
          },
          {
            id: "stat4-l1-e3",
            question: "Quelle est la médiane de la série ordonnée $2, 5, 6, 9, 13$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$7$" },
              { id: "D", text: "$9$" },
            ],
            correctId: "B",
            explanation: "Il y a $5$ valeurs (nombre impair), donc la médiane est la valeur du milieu : $6$.",
            difficulty: "debutant",
          },
          {
            id: "stat4-l1-e4",
            question: "Quelle est la médiane de la série $4, 9, 2, 7$ ?",
            type: "open",
            modelAnswer: "On ordonne la série : $2, 4, 7, 9$.\\n\\nIl y a $4$ valeurs (nombre pair), la médiane est la moyenne des deux valeurs du milieu :\\n\\n$$\\dfrac{4+7}{2} = \\dfrac{11}{2} = 5{,}5$$\\n\\n$$\\boxed{5{,}5}$$",
            explanation: "Avec un nombre pair de valeurs, on ordonne la série puis on fait la moyenne des deux valeurs centrales.",
            difficulty: "intermediaire",
          },
          {
            id: "stat4-l1-e5",
            question: "Les températures (en °C) relevées sur une semaine sont : $18, 22, 19, 25, 20, 17, 23$. Calcule l'étendue et la médiane de cette série.",
            type: "open",
            modelAnswer: "On ordonne la série : $17, 18, 19, 20, 22, 23, 25$.\\n\\nÉtendue : $25 - 17 = 8$.\\n\\nIl y a $7$ valeurs, la médiane est la $4^e$ valeur : $20$.\\n\\n$$\\boxed{\\text{étendue}=8°C,\\ \\text{médiane}=20°C}$$",
            explanation: "On commence toujours par ordonner la série, ce qui permet de calculer à la fois l'étendue (extrêmes) et la médiane (valeur centrale).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "stat4-l2",
        slug: "le-vocabulaire-des-probabilites",
        title: "Le vocabulaire des probabilités",
        durationMinutes: 12,
        content: `## L'expérience aléatoire

Une **expérience aléatoire** est une expérience dont on ne peut pas prévoir le résultat avec certitude (lancer un dé, tirer une carte...). Chaque résultat possible est une **issue**.

## La probabilité d'un événement

La **probabilité** d'un événement mesure ses chances de se réaliser. Elle est toujours comprise entre $0$ et $1$ (ou entre $0\\%$ et $100\\%$) :

- une probabilité de $0$ signifie que l'événement est **impossible**,
- une probabilité de $1$ signifie que l'événement est **certain**.

### Cas d'équiprobabilité

Lorsque toutes les issues ont la même probabilité de se produire, on dit qu'il y a **équiprobabilité**. Dans ce cas :

$$P(\\text{événement}) = \\dfrac{\\text{nombre d'issues favorables}}{\\text{nombre total d'issues}}$$

### Exemple

On lance un dé à $6$ faces. La probabilité d'obtenir un $4$ est :

$$P(\\text{« obtenir 4 »}) = \\dfrac{1}{6}$$

La probabilité d'obtenir un nombre pair ($2,4,6$) est :

$$P(\\text{pair}) = \\dfrac{3}{6} = \\dfrac{1}{2}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat4-l2-e1",
            question: "Une probabilité peut-elle être égale à $1{,}5$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, toujours" },
              { id: "B", text: "Non, une probabilité est toujours comprise entre $0$ et $1$" },
              { id: "C", text: "Oui, si l'événement est certain" },
              { id: "D", text: "Cela dépend de l'expérience" },
            ],
            correctId: "B",
            explanation: "Une probabilité est toujours un nombre compris entre $0$ (impossible) et $1$ (certain).",
            difficulty: "debutant",
          },
          {
            id: "stat4-l2-e2",
            question: "Vrai ou faux : si un événement est certain, sa probabilité est $1$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, par définition, un événement certain a pour probabilité $1$.",
            difficulty: "debutant",
          },
          {
            id: "stat4-l2-e3",
            question: "On lance un dé équilibré à $6$ faces. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à $4$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{6}$" },
              { id: "B", text: "$\\dfrac{1}{2}$" },
              { id: "C", text: "$\\dfrac{2}{3}$" },
              { id: "D", text: "$\\dfrac{1}{3}$" },
            ],
            correctId: "B",
            explanation: "Les issues favorables sont $4, 5, 6$, soit $3$ issues sur $6$ : $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.",
            difficulty: "intermediaire",
          },
          {
            id: "stat4-l2-e4",
            question: "Un sac contient $4$ billes rouges, $3$ billes bleues et $3$ billes vertes. On tire une bille au hasard. Quelle est la probabilité de tirer une bille bleue ?",
            type: "open",
            modelAnswer: "Il y a $4+3+3=10$ billes en tout, et $3$ sont bleues.\\n\\n$$P(\\text{bleue}) = \\dfrac{3}{10} = 0{,}3$$\\n\\n$$\\boxed{P = \\dfrac{3}{10} = 30\\%}$$",
            explanation: "On compte le nombre d'issues favorables (billes bleues) sur le nombre total d'issues possibles (toutes les billes).",
            difficulty: "intermediaire",
          },
          {
            id: "stat4-l2-e5",
            question: "Dans un jeu de $32$ cartes, on tire une carte au hasard. Quelle est la probabilité de tirer un roi ou une dame ?",
            type: "open",
            modelAnswer: "Un jeu de $32$ cartes contient $4$ rois et $4$ dames, soit $8$ issues favorables.\\n\\n$$P(\\text{roi ou dame}) = \\dfrac{8}{32} = \\dfrac{1}{4} = 0{,}25$$\\n\\n$$\\boxed{P = \\dfrac{1}{4} = 25\\%}$$",
            explanation: "On additionne le nombre d'issues favorables pour chaque événement (4 rois + 4 dames), puis on divise par le nombre total de cartes.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "stat4-l3",
        slug: "evenement-contraire-et-certain",
        title: "Événement contraire, certain et impossible",
        durationMinutes: 13,
        content: `## L'événement contraire

L'**événement contraire** d'un événement $A$ (noté $\\overline{A}$ ou « non $A$ ») se réalise exactement quand $A$ ne se réalise pas. La somme de leurs probabilités est toujours égale à $1$ :

$$P(A) + P(\\overline{A}) = 1$$

### Exemple

On lance un dé. Soit $A$ l'événement « obtenir un $6$ ». Alors $\\overline{A}$ est « ne pas obtenir un $6$ ».

$$P(A) = \\dfrac{1}{6} \\implies P(\\overline{A}) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}$$

## Événement certain et événement impossible

- Un événement **certain** se réalise toujours : $P = 1$.
- Un événement **impossible** ne se réalise jamais : $P = 0$.

### Exemple

On lance un dé à $6$ faces. « Obtenir un nombre entre $1$ et $6$ » est un événement **certain**. « Obtenir un $7$ » est un événement **impossible**.

> En pratique, l'événement contraire est très utile lorsqu'il est plus simple de calculer « ce qui ne se passe pas » que l'événement lui-même.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat4-l3-e1",
            question: "Si $P(A) = 0{,}3$, quelle est la probabilité de l'événement contraire $\\overline{A}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}3$" },
              { id: "B", text: "$0{,}7$" },
              { id: "C", text: "$1{,}3$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "B",
            explanation: "$P(\\overline{A}) = 1 - P(A) = 1-0{,}3 = 0{,}7$.",
            difficulty: "debutant",
          },
          {
            id: "stat4-l3-e2",
            question: "Vrai ou faux : un événement impossible a une probabilité de $0$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, par définition, un événement qui ne peut jamais se produire a une probabilité de $0$.",
            difficulty: "debutant",
          },
          {
            id: "stat4-l3-e3",
            question: "On tire une carte dans un jeu de $32$ cartes. $A$ est l'événement « tirer un cœur » avec $P(A) = \\dfrac{8}{32} = \\dfrac{1}{4}$. Quelle est la probabilité de ne pas tirer un cœur ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{4}$" },
              { id: "B", text: "$\\dfrac{1}{2}$" },
              { id: "C", text: "$\\dfrac{3}{4}$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "C",
            explanation: "$P(\\overline{A}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.",
            difficulty: "intermediaire",
          },
          {
            id: "stat4-l3-e4",
            question: "Un sac contient des billes rouges et bleues uniquement. La probabilité de tirer une bille rouge est $\\dfrac{2}{5}$. Quelle est la probabilité de tirer une bille bleue ?",
            type: "open",
            modelAnswer: "Tirer une bille bleue est l'événement contraire de tirer une bille rouge (il n'y a que ces deux couleurs).\\n\\n$$P(\\text{bleue}) = 1 - \\dfrac{2}{5} = \\dfrac{3}{5}$$\\n\\n$$\\boxed{P(\\text{bleue}) = \\dfrac{3}{5}}$$",
            explanation: "Comme il n'y a que deux couleurs possibles, l'une est l'événement contraire de l'autre : leurs probabilités s'additionnent à $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "stat4-l3-e5",
            question: "Une urne contient $20$ boules numérotées de $1$ à $20$. On tire une boule au hasard. Quelle est la probabilité de ne pas tirer un multiple de $5$ ?",
            type: "open",
            modelAnswer: "Les multiples de $5$ entre $1$ et $20$ sont : $5, 10, 15, 20$, soit $4$ issues favorables pour « tirer un multiple de 5 ».\\n\\n$$P(\\text{multiple de 5}) = \\dfrac{4}{20} = \\dfrac{1}{5}$$\\n\\nL'événement contraire « ne pas tirer un multiple de 5 » a pour probabilité :\\n\\n$$P(\\overline{A}) = 1 - \\dfrac{1}{5} = \\dfrac{4}{5}$$\\n\\n$$\\boxed{P = \\dfrac{4}{5} = 80\\%}$$",
            explanation: "On calcule d'abord la probabilité de l'événement direct, puis on utilise la formule de l'événement contraire pour obtenir le résultat demandé.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 4ème — Pyramides, cônes et volumes
  {
    id: "pyr4-id",
    slug: "pyramides-cones-4eme",
    title: "Pyramides, cônes et volumes",
    description: "Identifiez les pyramides et les cônes de révolution, et apprenez à calculer leur volume.",
    schoolLevel: "4eme",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "🔺",
    lessons: [
      {
        id: "pyr4-l1",
        slug: "la-pyramide",
        title: "La pyramide",
        durationMinutes: 13,
        content: `## Qu'est-ce qu'une pyramide ?

Une **pyramide** est un solide constitué d'une face appelée **base** (un polygone quelconque) et de faces latérales **triangulaires** qui se rejoignent en un point unique : le **sommet**.

> Une pyramide est nommée selon sa base : pyramide à base carrée, à base triangulaire, etc.

## La hauteur de la pyramide

La **hauteur** d'une pyramide est la distance entre son sommet et le plan de sa base, mesurée **perpendiculairement** à ce plan.

## Le volume de la pyramide

$$V = \\dfrac{\\text{aire de la base} \\times \\text{hauteur}}{3}$$

### Exemple

Une pyramide à base carrée de côté $6$ cm a une hauteur de $9$ cm.

$$A_{base} = 6 \\times 6 = 36 \\text{ cm}^2$$

$$V = \\dfrac{36 \\times 9}{3} = \\dfrac{324}{3} = 108 \\text{ cm}^3$$

> **Remarque :** pour une même base et une même hauteur, une pyramide a un volume **trois fois plus petit** que celui d'un prisme.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "pyr4-l1-e1",
            question: "Quelle formule donne le volume d'une pyramide ?",
            type: "mcq",
            options: [
              { id: "A", text: "$V = \\text{aire de la base} \\times \\text{hauteur}$" },
              { id: "B", text: "$V = \\dfrac{\\text{aire de la base} \\times \\text{hauteur}}{3}$" },
              { id: "C", text: "$V = \\dfrac{\\text{aire de la base} \\times \\text{hauteur}}{2}$" },
              { id: "D", text: "$V = 3 \\times \\text{aire de la base} \\times \\text{hauteur}$" },
            ],
            correctId: "B",
            explanation: "Le volume d'une pyramide est le tiers du produit de l'aire de la base par la hauteur.",
            difficulty: "debutant",
          },
          {
            id: "pyr4-l1-e2",
            question: "Vrai ou faux : les faces latérales d'une pyramide sont toujours des triangles.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, par définition, les faces latérales d'une pyramide sont des triangles se rejoignant au sommet.",
            difficulty: "debutant",
          },
          {
            id: "pyr4-l1-e3",
            question: "Une pyramide à base carrée de côté $5$ cm a une hauteur de $12$ cm. Quel est son volume ?",
            type: "mcq",
            options: [
              { id: "A", text: "$100$ cm³" },
              { id: "B", text: "$300$ cm³" },
              { id: "C", text: "$60$ cm³" },
              { id: "D", text: "$25$ cm³" },
            ],
            correctId: "A",
            explanation: "$A_{base} = 5^2=25$ cm². $V = \\dfrac{25\\times12}{3} = \\dfrac{300}{3}=100$ cm³.",
            difficulty: "intermediaire",
          },
          {
            id: "pyr4-l1-e4",
            question: "Une pyramide a un volume de $150$ cm³ et une base d'aire $30$ cm². Quelle est sa hauteur ?",
            type: "open",
            modelAnswer: "On utilise $V = \\dfrac{A \\times h}{3}$, donc $h = \\dfrac{3V}{A}$.\\n\\n$$h = \\dfrac{3 \\times 150}{30} = \\dfrac{450}{30} = 15$$\\n\\n$$\\boxed{h = 15 \\text{ cm}}$$",
            explanation: "On isole la hauteur en multipliant le volume par $3$ puis en divisant par l'aire de la base.",
            difficulty: "intermediaire",
          },
          {
            id: "pyr4-l1-e5",
            question: "Une pyramide à base rectangulaire ($8$ cm $\\times$ $5$ cm) a le même volume qu'un cube de $6$ cm de côté. Quelle est la hauteur de la pyramide ?",
            type: "open",
            modelAnswer: "Volume du cube :\\n\\n$$V_{cube} = 6^3 = 216 \\text{ cm}^3$$\\n\\nAire de la base de la pyramide :\\n\\n$$A = 8 \\times 5 = 40 \\text{ cm}^2$$\\n\\nOn cherche $h$ tel que $\\dfrac{40 \\times h}{3} = 216$ :\\n\\n$$40h = 648 \\implies h = \\dfrac{648}{40} = 16{,}2$$\\n\\n$$\\boxed{h = 16{,}2 \\text{ cm}}$$",
            explanation: "On calcule le volume cible (celui du cube), puis on résout l'équation issue de la formule du volume de la pyramide.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "pyr4-l2",
        slug: "le-cone-de-revolution",
        title: "Le cône de révolution",
        durationMinutes: 13,
        content: `## Qu'est-ce qu'un cône de révolution ?

Un **cône de révolution** est un solide engendré par un triangle rectangle qui tourne autour d'un de ses côtés (la hauteur). Sa base est un **disque** et il possède un **sommet**.

## Le volume du cône

$$V = \\dfrac{\\pi \\times r^2 \\times h}{3}$$

où $r$ est le rayon de la base et $h$ la hauteur du cône.

### Exemple

Un cône a un rayon $r = 4$ cm et une hauteur $h = 9$ cm.

$$V = \\dfrac{\\pi \\times 4^2 \\times 9}{3} \\approx \\dfrac{3{,}14 \\times 16 \\times 9}{3} \\approx \\dfrac{452{,}16}{3} \\approx 150{,}72 \\text{ cm}^3$$

## Comparaison avec le cylindre

Pour un même rayon et une même hauteur, le volume d'un cône est **égal au tiers** du volume du cylindre correspondant — exactement comme la pyramide par rapport au prisme.

$$V_{cône} = \\dfrac{1}{3} V_{cylindre}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "pyr4-l2-e1",
            question: "Quelle formule donne le volume d'un cône de rayon $r$ et de hauteur $h$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$V = \\pi r^2 h$" },
              { id: "B", text: "$V = \\dfrac{\\pi r^2 h}{3}$" },
              { id: "C", text: "$V = \\dfrac{\\pi r h}{3}$" },
              { id: "D", text: "$V = 2\\pi r h$" },
            ],
            correctId: "B",
            explanation: "Le volume du cône est $V = \\dfrac{\\pi r^2 h}{3}$, soit un tiers du volume du cylindre de même base et hauteur.",
            difficulty: "debutant",
          },
          {
            id: "pyr4-l2-e2",
            question: "Vrai ou faux : pour un même rayon et une même hauteur, le cône a un volume égal à la moitié de celui du cylindre.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : le volume du cône est égal au **tiers** (pas la moitié) du volume du cylindre correspondant.",
            difficulty: "debutant",
          },
          {
            id: "pyr4-l2-e3",
            question: "Calcule le volume approximatif d'un cône de rayon $3$ cm et de hauteur $7$ cm (avec $\\pi \\approx 3{,}14$).",
            type: "mcq",
            options: [
              { id: "A", text: "$65{,}94$ cm³" },
              { id: "B", text: "$197{,}82$ cm³" },
              { id: "C", text: "$21{,}98$ cm³" },
              { id: "D", text: "$98{,}91$ cm³" },
            ],
            correctId: "A",
            explanation: "$V = \\dfrac{\\pi \\times 9 \\times 7}{3} \\approx \\dfrac{3{,}14 \\times 63}{3} = \\dfrac{197{,}82}{3} = 65{,}94$ cm³.",
            difficulty: "intermediaire",
          },
          {
            id: "pyr4-l2-e4",
            question: "Un cône a le même rayon et la même hauteur qu'un cylindre de volume $300$ cm³. Quel est le volume du cône ?",
            type: "open",
            modelAnswer: "Le volume du cône est égal au tiers du volume du cylindre correspondant.\\n\\n$$V_{cône} = \\dfrac{300}{3} = 100$$\\n\\n$$\\boxed{V_{cône} = 100 \\text{ cm}^3}$$",
            explanation: "Cette propriété évite de refaire tout le calcul : il suffit de diviser le volume du cylindre par $3$.",
            difficulty: "intermediaire",
          },
          {
            id: "pyr4-l2-e5",
            question: "Un cône a un volume de $314$ cm³ et un rayon de $5$ cm. Quelle est sa hauteur (avec $\\pi \\approx 3{,}14$) ?",
            type: "open",
            modelAnswer: "On utilise $V = \\dfrac{\\pi r^2 h}{3}$, donc $h = \\dfrac{3V}{\\pi r^2}$.\\n\\n$$h = \\dfrac{3 \\times 314}{3{,}14 \\times 25} = \\dfrac{942}{78{,}5} = 12$$\\n\\n$$\\boxed{h = 12 \\text{ cm}}$$",
            explanation: "On isole la hauteur dans la formule du volume du cône, en multipliant par $3$ et en divisant par l'aire de la base circulaire.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "pyr4-l3",
        slug: "patrons-et-sections",
        title: "Patrons et sections de pyramides et cônes",
        durationMinutes: 12,
        content: `## Le patron d'une pyramide

Le patron d'une pyramide est constitué de :

- un polygone pour la **base**,
- autant de **triangles** que de côtés de la base, pour les faces latérales.

### Exemple

Une pyramide à base carrée a un patron formé d'un carré (la base) et de $4$ triangles identiques (les faces latérales).

## Le patron d'un cône

Le patron d'un cône de révolution est constitué de :

- un **disque** pour la base,
- un **secteur circulaire** (une « part de camembert ») pour la surface latérale.

## La section par un plan parallèle à la base

Si on coupe une pyramide (ou un cône) par un plan **parallèle à la base**, la section obtenue est une figure **réduite**, semblable à la base.

> Plus la coupe est proche du sommet, plus la section est petite. Plus elle est proche de la base, plus elle se rapproche de la taille de la base elle-même.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "pyr4-l3-e1",
            question: "Le patron d'une pyramide à base carrée comporte combien de triangles latéraux ?",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$3$" },
              { id: "C", text: "$4$" },
              { id: "D", text: "$5$" },
            ],
            correctId: "C",
            explanation: "Une base carrée a $4$ côtés, donc le patron comporte $4$ faces triangulaires latérales.",
            difficulty: "debutant",
          },
          {
            id: "pyr4-l3-e2",
            question: "Vrai ou faux : le patron d'un cône de révolution comporte un disque et un secteur circulaire.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, le disque correspond à la base et le secteur circulaire à la surface latérale déroulée.",
            difficulty: "debutant",
          },
          {
            id: "pyr4-l3-e3",
            question: "On coupe une pyramide par un plan parallèle à sa base. Quelle est la nature de la section obtenue ?",
            type: "mcq",
            options: [
              { id: "A", text: "Un cercle" },
              { id: "B", text: "Une figure réduite, semblable à la base" },
              { id: "C", text: "Toujours un triangle" },
              { id: "D", text: "La base agrandie" },
            ],
            correctId: "B",
            explanation: "La section par un plan parallèle à la base est une réduction de la base, de même forme (un agrandissement/réduction).",
            difficulty: "intermediaire",
          },
          {
            id: "pyr4-l3-e4",
            question: "Une pyramide à base triangulaire a son patron composé de combien de triangles au total (base incluse) ?",
            type: "open",
            modelAnswer: "La base est un triangle, et il y a autant de faces latérales triangulaires que de côtés à la base, soit $3$.\\n\\nTotal : $1$ (base) $+ 3$ (faces latérales) $= 4$ triangles.\\n\\n$$\\boxed{4 \\text{ triangles}}$$",
            explanation: "Pour une pyramide à base triangulaire (un tétraèdre si toutes les faces sont identiques), le patron est entièrement constitué de $4$ triangles.",
            difficulty: "intermediaire",
          },
          {
            id: "pyr4-l3-e5",
            question: "Une pyramide de hauteur $12$ cm est coupée par un plan parallèle à la base, à $4$ cm du sommet. Si le côté de la base mesure $9$ cm, quel est le côté de la section (les figures sont semblables) ?",
            type: "open",
            modelAnswer: "Le rapport de réduction entre la section et la base est le rapport des distances au sommet :\\n\\n$$k = \\dfrac{4}{12} = \\dfrac{1}{3}$$\\n\\nLe côté de la section est :\\n\\n$$9 \\times \\dfrac{1}{3} = 3$$\\n\\n$$\\boxed{3 \\text{ cm}}$$",
            explanation: "La section est un agrandissement/réduction de la base, dans un rapport égal au rapport des distances au sommet.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 3ème — Trigonométrie : sinus et tangente
  {
    id: "trig3-id",
    slug: "trigonometrie-3eme",
    title: "Trigonométrie : sinus et tangente",
    description: "Complétez le cosinus avec le sinus et la tangente d'un angle aigu pour calculer des longueurs et des angles dans le triangle rectangle.",
    schoolLevel: "3eme",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📐",
    lessons: [
      {
        id: "trig3-l1",
        slug: "sinus-et-tangente",
        title: "Définir le sinus et la tangente",
        durationMinutes: 14,
        content: `## Rappel sur le triangle rectangle

Dans un triangle rectangle, pour un angle aigu $\\widehat{B}$, on distingue :

- le côté **opposé**, en face de l'angle,
- le côté **adjacent**, qui touche l'angle (sans être l'hypoténuse),
- l'**hypoténuse**, le plus grand côté, face à l'angle droit.

## Les formules

$$\\sin(\\widehat{B}) = \\dfrac{\\text{côté opposé}}{\\text{hypoténuse}} \\qquad \\tan(\\widehat{B}) = \\dfrac{\\text{côté opposé}}{\\text{côté adjacent}}$$

> On retient déjà que $\\cos(\\widehat{B}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$. Avec sinus et tangente, on dispose maintenant des **trois rapports trigonométriques**.

## Une relation importante

$$\\tan(\\widehat{B}) = \\dfrac{\\sin(\\widehat{B})}{\\cos(\\widehat{B})}$$

## Exemple

Dans un triangle rectangle $ABC$ rectangle en $A$, avec $\\widehat{B} = 30°$, $AB = 5$ cm (côté adjacent à $B$) et $BC = 10$ cm (hypoténuse) :

$$\\sin(30°) = \\dfrac{AC}{BC} \\implies AC = BC \\times \\sin(30°) = 10 \\times 0{,}5 = 5 \\text{ cm}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "trig3-l1-e1",
            question: "Quelle est la formule du sinus d'un angle aigu dans un triangle rectangle ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$" },
              { id: "B", text: "$\\dfrac{\\text{opposé}}{\\text{hypoténuse}}$" },
              { id: "C", text: "$\\dfrac{\\text{opposé}}{\\text{adjacent}}$" },
              { id: "D", text: "$\\dfrac{\\text{hypoténuse}}{\\text{opposé}}$" },
            ],
            correctId: "B",
            explanation: "Le sinus est le rapport entre le côté opposé à l'angle et l'hypoténuse.",
            difficulty: "debutant",
          },
          {
            id: "trig3-l1-e2",
            question: "Vrai ou faux : la tangente d'un angle est le rapport entre le côté opposé et le côté adjacent.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, $\\tan(\\widehat{B}) = \\dfrac{\\text{opposé}}{\\text{adjacent}}$.",
            difficulty: "debutant",
          },
          {
            id: "trig3-l1-e3",
            question: "Dans un triangle $ABC$ rectangle en $A$, $\\widehat{B} = 40°$, $AC = 6$ cm (côté opposé à $B$) et $BC$ est l'hypoténuse. Quelle formule permet de calculer $BC$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$BC = AC \\times \\sin(40°)$" },
              { id: "B", text: "$BC = \\dfrac{AC}{\\sin(40°)}$" },
              { id: "C", text: "$BC = AC \\times \\tan(40°)$" },
              { id: "D", text: "$BC = \\dfrac{AC}{\\tan(40°)}$" },
            ],
            correctId: "B",
            explanation: "$\\sin(\\widehat{B}) = \\dfrac{AC}{BC}$, donc $BC = \\dfrac{AC}{\\sin(\\widehat{B})}$.",
            difficulty: "intermediaire",
          },
          {
            id: "trig3-l1-e4",
            question: "Dans un triangle rectangle, un angle $\\widehat{B} = 25°$ a un côté adjacent de $8$ cm. Calcule la longueur du côté opposé à cet angle (au dixième près).",
            type: "open",
            modelAnswer: "On utilise la tangente :\\n\\n$$\\tan(25°) = \\dfrac{\\text{opposé}}{\\text{adjacent}} = \\dfrac{\\text{opposé}}{8}$$\\n\\n$$\\text{opposé} = 8 \\times \\tan(25°) \\approx 8 \\times 0{,}4663 \\approx 3{,}7$$\\n\\n$$\\boxed{\\text{opposé} \\approx 3{,}7 \\text{ cm}}$$",
            explanation: "Connaissant l'angle et le côté adjacent, on utilise la tangente pour retrouver le côté opposé.",
            difficulty: "intermediaire",
          },
          {
            id: "trig3-l1-e5",
            question: "Démontre que $\\tan(\\widehat{B}) = \\dfrac{\\sin(\\widehat{B})}{\\cos(\\widehat{B})}$ à partir des définitions.",
            type: "open",
            modelAnswer: "On part des définitions :\\n\\n$$\\sin(\\widehat{B}) = \\dfrac{\\text{opp}}{\\text{hyp}} \\qquad \\cos(\\widehat{B}) = \\dfrac{\\text{adj}}{\\text{hyp}}$$\\n\\nOn calcule le rapport :\\n\\n$$\\dfrac{\\sin(\\widehat{B})}{\\cos(\\widehat{B})} = \\dfrac{\\text{opp}/\\text{hyp}}{\\text{adj}/\\text{hyp}} = \\dfrac{\\text{opp}}{\\text{adj}}$$\\n\\nOr $\\dfrac{\\text{opp}}{\\text{adj}} = \\tan(\\widehat{B})$ par définition.\\n\\n$$\\boxed{\\tan(\\widehat{B}) = \\dfrac{\\sin(\\widehat{B})}{\\cos(\\widehat{B})}}$$",
            explanation: "L'hypoténuse se simplifie dans le rapport sinus/cosinus, ce qui redonne exactement la définition de la tangente.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "trig3-l2",
        slug: "calculer-des-longueurs",
        title: "Calculer des longueurs avec sinus et tangente",
        durationMinutes: 14,
        content: `## Méthode

Pour calculer une longueur dans un triangle rectangle :

1. Identifier l'angle aigu utilisable et les côtés (opposé, adjacent, hypoténuse) impliqués dans la question.
2. Choisir la **bonne formule** (sinus, cosinus ou tangente) selon les côtés connus et inconnus.
3. Isoler la longueur recherchée et calculer.

| Je connais... | Je cherche... | Formule à utiliser |
|---|---|---|
| Angle + hypoténuse | Opposé | $\\text{opposé} = \\text{hyp} \\times \\sin(\\widehat{B})$ |
| Angle + hypoténuse | Adjacent | $\\text{adjacent} = \\text{hyp} \\times \\cos(\\widehat{B})$ |
| Angle + adjacent | Opposé | $\\text{opposé} = \\text{adjacent} \\times \\tan(\\widehat{B})$ |
| Angle + opposé | Adjacent | $\\text{adjacent} = \\dfrac{\\text{opposé}}{\\tan(\\widehat{B})}$ |

### Exemple

Dans un triangle rectangle, $\\widehat{B} = 35°$ et le côté adjacent vaut $6$ cm. On cherche le côté opposé :

$$\\text{opposé} = 6 \\times \\tan(35°) \\approx 6 \\times 0{,}7002 \\approx 4{,}2 \\text{ cm}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "trig3-l2-e1",
            question: "Je connais l'angle et l'hypoténuse, et je cherche le côté opposé. Quelle formule utiliser ?",
            type: "mcq",
            options: [
              { id: "A", text: "opposé $=$ hyp $\\times \\cos(\\widehat{B})$" },
              { id: "B", text: "opposé $=$ hyp $\\times \\sin(\\widehat{B})$" },
              { id: "C", text: "opposé $=$ hyp $\\times \\tan(\\widehat{B})$" },
              { id: "D", text: "opposé $= \\dfrac{\\text{hyp}}{\\sin(\\widehat{B})}$" },
            ],
            correctId: "B",
            explanation: "$\\sin(\\widehat{B}) = \\dfrac{\\text{opposé}}{\\text{hyp}}$, donc $\\text{opposé} = \\text{hyp} \\times \\sin(\\widehat{B})$.",
            difficulty: "debutant",
          },
          {
            id: "trig3-l2-e2",
            question: "Vrai ou faux : pour calculer un côté à partir de l'angle et du côté adjacent, on utilise la tangente.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, si on connaît l'angle et le côté adjacent et qu'on cherche l'opposé, on utilise $\\tan(\\widehat{B}) = \\dfrac{\\text{opposé}}{\\text{adjacent}}$.",
            difficulty: "debutant",
          },
          {
            id: "trig3-l2-e3",
            question: "Dans un triangle rectangle, $\\widehat{B} = 50°$ et l'hypoténuse mesure $12$ cm. Quelle est la longueur du côté opposé à $\\widehat{B}$ (au dixième près) ?",
            type: "mcq",
            options: [
              { id: "A", text: "$7{,}7$ cm" },
              { id: "B", text: "$9{,}2$ cm" },
              { id: "C", text: "$14{,}3$ cm" },
              { id: "D", text: "$10{,}3$ cm" },
            ],
            correctId: "B",
            explanation: "$\\text{opposé} = 12 \\times \\sin(50°) \\approx 12 \\times 0{,}766 \\approx 9{,}2$ cm.",
            difficulty: "intermediaire",
          },
          {
            id: "trig3-l2-e4",
            question: "Dans un triangle rectangle, $\\widehat{B} = 60°$ et le côté opposé mesure $15$ cm. Calcule le côté adjacent (au dixième près).",
            type: "open",
            modelAnswer: "On utilise la tangente :\\n\\n$$\\tan(60°) = \\dfrac{15}{\\text{adjacent}}$$\\n\\n$$\\text{adjacent} = \\dfrac{15}{\\tan(60°)} \\approx \\dfrac{15}{1{,}732} \\approx 8{,}7$$\\n\\n$$\\boxed{\\text{adjacent} \\approx 8{,}7 \\text{ cm}}$$",
            explanation: "Connaissant l'angle et le côté opposé, on isole l'adjacent à partir de la formule de la tangente.",
            difficulty: "intermediaire",
          },
          {
            id: "trig3-l2-e5",
            question: "Une échelle de $5$ m est posée contre un mur, formant un angle de $70°$ avec le sol. Jusqu'à quelle hauteur sur le mur monte-t-elle (au dixième de mètre) ?",
            type: "open",
            modelAnswer: "L'hypoténuse est l'échelle ($5$ m), la hauteur sur le mur est le côté opposé à l'angle de $70°$ avec le sol.\\n\\n$$\\text{hauteur} = 5 \\times \\sin(70°) \\approx 5 \\times 0{,}9397 \\approx 4{,}7$$\\n\\n$$\\boxed{\\text{hauteur} \\approx 4{,}7 \\text{ m}}$$",
            explanation: "On modélise la situation par un triangle rectangle : l'échelle est l'hypoténuse, la hauteur cherchée est le côté opposé à l'angle au sol.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "trig3-l3",
        slug: "calculer-des-angles",
        title: "Calculer un angle avec les fonctions réciproques",
        durationMinutes: 13,
        content: `## Retrouver un angle

Quand on connaît **deux côtés** d'un triangle rectangle, on peut retrouver un angle aigu en utilisant les fonctions réciproques de la calculatrice : $\\sin^{-1}$ (ou $\\arcsin$), $\\cos^{-1}$ et $\\tan^{-1}$.

### Méthode

1. Identifier les deux côtés connus (opposé, adjacent ou hypoténuse).
2. Choisir le bon rapport trigonométrique correspondant.
3. Utiliser la fonction réciproque sur la calculatrice pour obtenir l'angle.

### Exemple

Dans un triangle rectangle, le côté opposé à $\\widehat{B}$ mesure $7$ cm et l'hypoténuse mesure $14$ cm.

$$\\sin(\\widehat{B}) = \\dfrac{7}{14} = 0{,}5$$

$$\\widehat{B} = \\sin^{-1}(0{,}5) = 30°$$

## Synthèse des trois rapports

| Connu | Rapport | Angle |
|---|---|---|
| opposé, hypoténuse | $\\sin(\\widehat{B}) = \\dfrac{\\text{opp}}{\\text{hyp}}$ | $\\widehat{B} = \\sin^{-1}\\left(\\dfrac{\\text{opp}}{\\text{hyp}}\\right)$ |
| adjacent, hypoténuse | $\\cos(\\widehat{B}) = \\dfrac{\\text{adj}}{\\text{hyp}}$ | $\\widehat{B} = \\cos^{-1}\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$ |
| opposé, adjacent | $\\tan(\\widehat{B}) = \\dfrac{\\text{opp}}{\\text{adj}}$ | $\\widehat{B} = \\tan^{-1}\\left(\\dfrac{\\text{opp}}{\\text{adj}}\\right)$ |`,
        videoUrl: undefined,
        exercises: [
          {
            id: "trig3-l3-e1",
            question: "Pour retrouver un angle à partir du côté opposé et de l'hypoténuse, quelle fonction utiliser ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\cos^{-1}$" },
              { id: "B", text: "$\\sin^{-1}$" },
              { id: "C", text: "$\\tan^{-1}$" },
              { id: "D", text: "Aucune, c'est impossible" },
            ],
            correctId: "B",
            explanation: "Le rapport opposé/hypoténuse est le sinus, donc on utilise $\\sin^{-1}$ pour retrouver l'angle.",
            difficulty: "debutant",
          },
          {
            id: "trig3-l3-e2",
            question: "Vrai ou faux : pour retrouver un angle à partir de deux côtés, il faut connaître au moins le rapport trigonométrique correspondant.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, on doit identifier quel rapport (sinus, cosinus ou tangente) correspond aux deux côtés connus.",
            difficulty: "debutant",
          },
          {
            id: "trig3-l3-e3",
            question: "Dans un triangle rectangle, le côté adjacent à $\\widehat{B}$ mesure $5$ cm et l'hypoténuse mesure $10$ cm. Quelle est la mesure de $\\widehat{B}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$30°$" },
              { id: "B", text: "$45°$" },
              { id: "C", text: "$60°$" },
              { id: "D", text: "$90°$" },
            ],
            correctId: "C",
            explanation: "$\\cos(\\widehat{B}) = \\dfrac{5}{10} = 0{,}5$, donc $\\widehat{B} = \\cos^{-1}(0{,}5) = 60°$.",
            difficulty: "intermediaire",
          },
          {
            id: "trig3-l3-e4",
            question: "Dans un triangle rectangle, le côté opposé à $\\widehat{C}$ mesure $9$ cm et le côté adjacent mesure $9$ cm. Quelle est la mesure de $\\widehat{C}$ ?",
            type: "open",
            modelAnswer: "$$\\tan(\\widehat{C}) = \\dfrac{9}{9} = 1$$\\n\\n$$\\widehat{C} = \\tan^{-1}(1) = 45°$$\\n\\n$$\\boxed{\\widehat{C} = 45°}$$",
            explanation: "Quand le côté opposé est égal au côté adjacent, la tangente vaut $1$, ce qui correspond à un angle de $45°$.",
            difficulty: "intermediaire",
          },
          {
            id: "trig3-l3-e5",
            question: "Un toboggan de $4$ m de long descend d'une hauteur de $2{,}5$ m. Quel est l'angle que forme le toboggan avec le sol (au degré près) ?",
            type: "open",
            modelAnswer: "Le toboggan est l'hypoténuse ($4$ m) et la hauteur ($2{,}5$ m) est le côté opposé à l'angle avec le sol.\\n\\n$$\\sin(\\widehat{B}) = \\dfrac{2{,}5}{4} = 0{,}625$$\\n\\n$$\\widehat{B} = \\sin^{-1}(0{,}625) \\approx 38{,}7°$$\\n\\n$$\\boxed{\\widehat{B} \\approx 39°}$$",
            explanation: "On modélise la situation par un triangle rectangle : le toboggan est l'hypoténuse, la hauteur de chute est le côté opposé à l'angle cherché.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 3ème — Statistiques et probabilités
  {
    id: "stat3-id",
    slug: "statistiques-probabilites-3eme",
    title: "Statistiques et probabilités",
    description: "Approfondissez les probabilités avec des événements composés et les arbres de probabilité, et comparez des séries statistiques.",
    schoolLevel: "3eme",
    subject: "probabilites",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "🌳",
    lessons: [
      {
        id: "stat3-l1",
        slug: "probabilites-d-evenements-simples",
        title: "Probabilités et expériences à deux épreuves",
        durationMinutes: 14,
        content: `## Rappel : la probabilité d'un événement

$$P(\\text{événement}) = \\dfrac{\\text{nombre d'issues favorables}}{\\text{nombre total d'issues}}$$

## Expériences à deux épreuves

Une expérience à **deux épreuves** consiste à répéter (ou enchaîner) deux expériences aléatoires, par exemple lancer deux dés, ou tirer deux cartes successivement.

On peut représenter toutes les issues possibles dans un **tableau à double entrée**.

### Exemple

On lance deux dés à $6$ faces. Le nombre total d'issues possibles est $6 \\times 6 = 36$ (toutes équiprobables).

La probabilité d'obtenir un double $6$ (un $6$ sur chaque dé) :

$$P(\\text{double 6}) = \\dfrac{1}{36}$$

La probabilité d'obtenir une somme égale à $7$ : il y a $6$ combinaisons favorables ($1+6$, $2+5$, $3+4$, $4+3$, $5+2$, $6+1$).

$$P(\\text{somme} = 7) = \\dfrac{6}{36} = \\dfrac{1}{6}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat3-l1-e1",
            question: "On lance deux dés à $6$ faces. Combien y a-t-il d'issues possibles au total ?",
            type: "mcq",
            options: [
              { id: "A", text: "$6$" },
              { id: "B", text: "$12$" },
              { id: "C", text: "$36$" },
              { id: "D", text: "$66$" },
            ],
            correctId: "C",
            explanation: "Chaque dé a $6$ issues, et les deux lancers sont indépendants : $6 \\times 6 = 36$ issues au total.",
            difficulty: "debutant",
          },
          {
            id: "stat3-l1-e2",
            question: "Vrai ou faux : la probabilité d'obtenir un double 6 en lançant deux dés est $\\dfrac{1}{6}$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : il n'y a qu'une seule issue favorable (6 et 6) sur $36$, donc $P = \\dfrac{1}{36}$.",
            difficulty: "debutant",
          },
          {
            id: "stat3-l1-e3",
            question: "On lance deux dés. Quelle est la probabilité que la somme des deux dés soit égale à $7$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{36}$" },
              { id: "B", text: "$\\dfrac{1}{6}$" },
              { id: "C", text: "$\\dfrac{1}{12}$" },
              { id: "D", text: "$\\dfrac{7}{36}$" },
            ],
            correctId: "B",
            explanation: "Il y a $6$ combinaisons donnant une somme de $7$ sur les $36$ issues possibles : $P = \\dfrac{6}{36} = \\dfrac{1}{6}$.",
            difficulty: "intermediaire",
          },
          {
            id: "stat3-l1-e4",
            question: "On tire successivement deux billes dans un sac contenant $1$ bille rouge et $1$ bille bleue, avec remise. Liste toutes les issues possibles et calcule la probabilité d'obtenir deux billes de couleurs différentes.",
            type: "open",
            modelAnswer: "Les issues possibles sont : (Rouge,Rouge), (Rouge,Bleue), (Bleue,Rouge), (Bleue,Bleue), soit $4$ issues équiprobables.\\n\\nLes issues favorables (couleurs différentes) sont : (Rouge,Bleue) et (Bleue,Rouge), soit $2$ issues.\\n\\n$$P = \\dfrac{2}{4} = \\dfrac{1}{2}$$\\n\\n$$\\boxed{P = \\dfrac{1}{2}}$$",
            explanation: "Avec remise, chaque tirage a $2$ issues possibles, donc l'expérience à deux tirages a $2\\times2=4$ issues équiprobables.",
            difficulty: "intermediaire",
          },
          {
            id: "stat3-l1-e5",
            question: "On lance deux dés à $6$ faces. Quelle est la probabilité que le produit des deux résultats soit pair ?",
            type: "open",
            modelAnswer: "Le produit est **impair** uniquement si les deux dés tombent sur un nombre impair ($1,3,5$). Il y a $3 \\times 3 = 9$ issues où le produit est impair, sur $36$ issues totales.\\n\\n$$P(\\text{produit impair}) = \\dfrac{9}{36} = \\dfrac{1}{4}$$\\n\\nL'événement contraire est « produit pair » :\\n\\n$$P(\\text{produit pair}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$$\\n\\n$$\\boxed{P = \\dfrac{3}{4}}$$",
            explanation: "Il est plus simple de calculer la probabilité de l'événement contraire (produit impair, qui exige que les deux dés soient impairs) puis d'utiliser $P(A) = 1 - P(\\overline{A})$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "stat3-l2",
        slug: "arbres-de-probabilite",
        title: "Les arbres de probabilité",
        durationMinutes: 14,
        content: `## Qu'est-ce qu'un arbre de probabilité ?

Un **arbre de probabilité** (ou arbre pondéré) représente toutes les issues possibles d'une expérience à plusieurs épreuves, sous forme de branches. Chaque branche porte la probabilité de l'événement qu'elle représente.

## Les règles de l'arbre

- Sur chaque **nœud**, la somme des probabilités des branches qui en partent est égale à $1$.
- La probabilité d'un **chemin complet** (de la racine à une feuille) est le **produit** des probabilités le long de ce chemin.
- La probabilité d'un événement représenté par plusieurs chemins est la **somme** des probabilités de ces chemins.

### Exemple

Un sac contient $3$ billes rouges et $2$ billes vertes. On tire une bille, on note sa couleur, on la **remet**, puis on en tire une seconde.

$$P(\\text{rouge}) = \\dfrac{3}{5} \\qquad P(\\text{verte}) = \\dfrac{2}{5}$$

La probabilité de tirer deux billes rouges (Rouge puis Rouge) :

$$P(\\text{R, R}) = \\dfrac{3}{5} \\times \\dfrac{3}{5} = \\dfrac{9}{25}$$

La probabilité de tirer une bille de chaque couleur (dans n'importe quel ordre) :

$$P(\\text{une de chaque}) = \\dfrac{3}{5}\\times\\dfrac{2}{5} + \\dfrac{2}{5}\\times\\dfrac{3}{5} = \\dfrac{6}{25}+\\dfrac{6}{25} = \\dfrac{12}{25}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat3-l2-e1",
            question: "Dans un arbre de probabilité, comment calcule-t-on la probabilité d'un chemin complet ?",
            type: "mcq",
            options: [
              { id: "A", text: "On additionne les probabilités le long du chemin" },
              { id: "B", text: "On multiplie les probabilités le long du chemin" },
              { id: "C", text: "On prend la plus grande probabilité du chemin" },
              { id: "D", text: "On divise les probabilités entre elles" },
            ],
            correctId: "B",
            explanation: "La probabilité d'un chemin complet est le produit des probabilités rencontrées le long de ce chemin.",
            difficulty: "debutant",
          },
          {
            id: "stat3-l2-e2",
            question: "Vrai ou faux : sur un même nœud d'un arbre, la somme des probabilités des branches qui en partent vaut toujours $1$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, car ces branches représentent toutes les issues possibles à cette étape, qui couvrent $100\\%$ des cas.",
            difficulty: "debutant",
          },
          {
            id: "stat3-l2-e3",
            question: "Un sac contient $4$ billes rouges et $6$ billes bleues. On tire une bille, on la remet, puis on en tire une autre. Quelle est la probabilité de tirer deux billes bleues ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{3}{5}$" },
              { id: "B", text: "$\\dfrac{9}{25}$" },
              { id: "C", text: "$\\dfrac{6}{10}$" },
              { id: "D", text: "$\\dfrac{36}{100}$" },
            ],
            correctId: "B",
            explanation: "$P(\\text{bleue}) = \\dfrac{6}{10} = \\dfrac{3}{5}$, donc $P(\\text{bleue, bleue}) = \\dfrac{3}{5}\\times\\dfrac{3}{5} = \\dfrac{9}{25}$.",
            difficulty: "intermediaire",
          },
          {
            id: "stat3-l2-e4",
            question: "Une urne contient $2$ boules noires et $3$ boules blanches. On tire deux boules successivement, avec remise. Construis l'arbre (décris les branches) et calcule la probabilité d'obtenir au moins une boule noire.",
            type: "open",
            modelAnswer: "$P(\\text{noire}) = \\dfrac{2}{5}$, $P(\\text{blanche}) = \\dfrac{3}{5}$ à chaque tirage.\\n\\nL'événement contraire de « au moins une noire » est « aucune noire », c'est-à-dire (blanche, blanche) :\\n\\n$$P(\\text{aucune noire}) = \\dfrac{3}{5}\\times\\dfrac{3}{5} = \\dfrac{9}{25}$$\\n\\n$$P(\\text{au moins une noire}) = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$$\\n\\n$$\\boxed{P = \\dfrac{16}{25}}$$",
            explanation: "Il est plus simple de calculer la probabilité de l'événement contraire « aucune boule noire » (un seul chemin) puis de soustraire à $1$.",
            difficulty: "expert",
          },
          {
            id: "stat3-l2-e5",
            question: "Un joueur tire deux fois de suite, sans remise, dans un jeu de $4$ cartes (2 rois, 2 dames). Quelle est la probabilité de tirer deux rois ?",
            type: "open",
            modelAnswer: "Au premier tirage : $P(\\text{roi}) = \\dfrac{2}{4} = \\dfrac{1}{2}$.\\n\\nSans remise, il ne reste que $3$ cartes dont $1$ roi : $P(\\text{roi} | \\text{roi déjà tiré}) = \\dfrac{1}{3}$.\\n\\n$$P(\\text{roi, roi}) = \\dfrac{1}{2} \\times \\dfrac{1}{3} = \\dfrac{1}{6}$$\\n\\n$$\\boxed{P = \\dfrac{1}{6}}$$",
            explanation: "Sans remise, les probabilités du second tirage dépendent du résultat du premier : on doit recalculer les effectifs restants à chaque étape.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "stat3-l3",
        slug: "comparer-des-series-statistiques",
        title: "Comparer des séries statistiques",
        durationMinutes: 12,
        content: `## Comparer avec la moyenne et la médiane

Pour comparer deux séries statistiques, on peut comparer leur **moyenne** (le niveau général) et leur **médiane** (le « milieu » de la série), mais aussi leur **étendue** (la dispersion des valeurs).

> Une étendue faible signifie que les valeurs sont **regroupées**, une étendue élevée signifie qu'elles sont **dispersées**.

## Exemple

Deux classes ont passé le même contrôle.

| | Classe A | Classe B |
|---|---|---|
| Moyenne | $12$ | $12$ |
| Médiane | $13$ | $11$ |
| Étendue | $6$ | $15$ |

Même si les deux classes ont la **même moyenne**, la classe A a des résultats plus **homogènes** (étendue plus faible), alors que la classe B a des résultats plus **dispersés** (certains élèves très forts, d'autres très faibles).

> **Conclusion :** la moyenne seule ne suffit jamais à décrire complètement une série ! Il faut toujours regarder aussi sa dispersion.`,
        videoUrl: undefined,
        exercises: [
          {
            id: "stat3-l3-e1",
            question: "Que mesure l'étendue d'une série statistique ?",
            type: "mcq",
            options: [
              { id: "A", text: "Le niveau moyen de la série" },
              { id: "B", text: "La dispersion des valeurs (écart entre min et max)" },
              { id: "C", text: "La valeur du milieu" },
              { id: "D", text: "Le nombre de valeurs" },
            ],
            correctId: "B",
            explanation: "L'étendue mesure la dispersion : c'est la différence entre la valeur maximale et la valeur minimale.",
            difficulty: "debutant",
          },
          {
            id: "stat3-l3-e2",
            question: "Vrai ou faux : deux séries ayant la même moyenne ont nécessairement la même dispersion.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : deux séries peuvent avoir la même moyenne mais des étendues très différentes (l'une homogène, l'autre dispersée).",
            difficulty: "debutant",
          },
          {
            id: "stat3-l3-e3",
            question: "La série A a une étendue de $4$ et la série B une étendue de $20$. Que peut-on en conclure ?",
            type: "mcq",
            options: [
              { id: "A", text: "La série A est plus homogène que la série B" },
              { id: "B", text: "La série B est plus homogène que la série A" },
              { id: "C", text: "Les deux séries sont identiques" },
              { id: "D", text: "On ne peut rien conclure" },
            ],
            correctId: "A",
            explanation: "Une étendue plus faible (4 contre 20) indique que les valeurs de la série A sont plus regroupées, donc plus homogènes.",
            difficulty: "intermediaire",
          },
          {
            id: "stat3-l3-e4",
            question: "Les notes de la série 1 sont $10,11,12,13,14$ (moyenne $12$) et celles de la série 2 sont $2,7,12,17,22$ (moyenne $12$). Compare leur étendue et conclus.",
            type: "open",
            modelAnswer: "Étendue série 1 : $14-10=4$.\\n\\nÉtendue série 2 : $22-2=20$.\\n\\nLes deux séries ont la même moyenne ($12$), mais la série 1 est beaucoup plus homogène (étendue $4$) que la série 2, beaucoup plus dispersée (étendue $20$).\\n\\n$$\\boxed{\\text{Même moyenne, mais série 1 bien plus homogène}}$$",
            explanation: "Deux séries peuvent partager la même moyenne tout en étant très différentes dans leur dispersion : c'est l'étendue qui révèle cette différence.",
            difficulty: "intermediaire",
          },
          {
            id: "stat3-l3-e5",
            question: "Une entreprise A verse des salaires de $1800, 1900, 2000, 2100, 2200$ €. Une entreprise B verse $1200, 1500, 2000, 2500, 2800$ €. Calcule la moyenne et l'étendue de chaque entreprise, puis compare-les.",
            type: "open",
            modelAnswer: "Entreprise A : moyenne $= \\dfrac{1800+1900+2000+2100+2200}{5} = \\dfrac{10000}{5} = 2000$ €. Étendue $= 2200-1800=400$ €.\\n\\nEntreprise B : moyenne $= \\dfrac{1200+1500+2000+2500+2800}{5} = \\dfrac{10000}{5} = 2000$ €. Étendue $= 2800-1200=1600$ €.\\n\\nLes deux entreprises ont la même moyenne, mais l'entreprise A a des salaires bien plus homogènes (étendue $400$ €) que l'entreprise B (étendue $1600$ €), où les écarts entre salariés sont beaucoup plus marqués.\\n\\n$$\\boxed{\\text{Même moyenne (2000€), mais l'entreprise A est bien plus homogène}}$$",
            explanation: "On calcule systématiquement la moyenne ET l'étendue pour comparer deux séries : la moyenne seule masque souvent des différences importantes de dispersion.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 3ème — Géométrie dans l'espace
  {
    id: "esp3-id",
    slug: "geometrie-espace-3eme",
    title: "Géométrie dans l'espace : la sphère",
    description: "Découvrez la sphère et la boule, calculez leur aire et leur volume, et travaillez les sections planes de solides.",
    schoolLevel: "3eme",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "🌐",
    lessons: [
      {
        id: "esp3-l1",
        slug: "la-sphere-et-la-boule",
        title: "La sphère et la boule",
        durationMinutes: 13,
        content: `## Définitions

- La **sphère** de centre $O$ et de rayon $r$ est l'ensemble des points de l'espace situés à la distance $r$ du point $O$.
- La **boule** de centre $O$ et de rayon $r$ est l'ensemble des points situés à une distance **inférieure ou égale** à $r$ du point $O$ (la sphère est la « surface » et la boule le « volume plein »).

> Une sphère est à une boule ce qu'un cercle est à un disque.

## Aire et volume

$$\\text{Aire de la sphère} = 4\\pi r^2$$

$$\\text{Volume de la boule} = \\dfrac{4}{3}\\pi r^3$$

### Exemple

Pour une boule de rayon $r = 3$ cm :

$$\\text{Aire} = 4\\pi \\times 3^2 = 36\\pi \\approx 113{,}1 \\text{ cm}^2$$

$$\\text{Volume} = \\dfrac{4}{3}\\pi \\times 3^3 = \\dfrac{4}{3}\\pi \\times 27 = 36\\pi \\approx 113{,}1 \\text{ cm}^3$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "esp3-l1-e1",
            question: "Quelle est la formule du volume d'une boule de rayon $r$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4\\pi r^2$" },
              { id: "B", text: "$\\dfrac{4}{3}\\pi r^3$" },
              { id: "C", text: "$\\pi r^2 h$" },
              { id: "D", text: "$2\\pi r$" },
            ],
            correctId: "B",
            explanation: "Le volume de la boule est $V = \\dfrac{4}{3}\\pi r^3$.",
            difficulty: "debutant",
          },
          {
            id: "esp3-l1-e2",
            question: "Vrai ou faux : la sphère est le volume « plein », et la boule est juste la surface extérieure.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux, c'est l'inverse : la sphère est la surface (comme un cercle), la boule est le volume plein (comme un disque).",
            difficulty: "debutant",
          },
          {
            id: "esp3-l1-e3",
            question: "Calcule l'aire d'une sphère de rayon $5$ cm (donner la valeur exacte en fonction de $\\pi$).",
            type: "mcq",
            options: [
              { id: "A", text: "$20\\pi \\text{ cm}^2$" },
              { id: "B", text: "$25\\pi \\text{ cm}^2$" },
              { id: "C", text: "$100\\pi \\text{ cm}^2$" },
              { id: "D", text: "$\\dfrac{100}{3}\\pi \\text{ cm}^2$" },
            ],
            correctId: "C",
            explanation: "$\\text{Aire} = 4\\pi r^2 = 4\\pi \\times 5^2 = 4\\pi \\times 25 = 100\\pi \\text{ cm}^2$.",
            difficulty: "intermediaire",
          },
          {
            id: "esp3-l1-e4",
            question: "Une boule de pétanque a un rayon de $4$ cm. Calcule son volume exact, puis une valeur approchée au $\\text{cm}^3$ près (avec $\\pi \\approx 3{,}14$).",
            type: "open",
            modelAnswer: "$$V = \\dfrac{4}{3}\\pi r^3 = \\dfrac{4}{3}\\pi \\times 4^3 = \\dfrac{4}{3}\\pi \\times 64 = \\dfrac{256}{3}\\pi \\text{ cm}^3$$\\n\\nValeur approchée : $V \\approx \\dfrac{256}{3}\\times 3{,}14 \\approx 267{,}9 \\text{ cm}^3$.\\n\\n$$\\boxed{V = \\dfrac{256}{3}\\pi \\approx 267{,}9 \\text{ cm}^3}$$",
            explanation: "On applique directement la formule $V=\\dfrac{4}{3}\\pi r^3$ avec $r=4$, puis on remplace $\\pi$ par sa valeur approchée pour obtenir un résultat numérique.",
            difficulty: "intermediaire",
          },
          {
            id: "esp3-l1-e5",
            question: "Une sphère a un volume de $\\dfrac{4}{3}\\pi \\times 1000 \\text{ cm}^3$. Calcule son rayon, puis l'aire de cette sphère.",
            type: "open",
            modelAnswer: "$$\\dfrac{4}{3}\\pi r^3 = \\dfrac{4}{3}\\pi \\times 1000 \\implies r^3 = 1000 \\implies r = \\sqrt[3]{1000} = 10 \\text{ cm}$$\\n\\nAire $= 4\\pi r^2 = 4\\pi \\times 10^2 = 400\\pi \\text{ cm}^2$.\\n\\n$$\\boxed{r = 10 \\text{ cm}, \\quad \\text{Aire} = 400\\pi \\text{ cm}^2}$$",
            explanation: "On identifie $r^3$ en simplifiant l'égalité des volumes, puis on en déduit $r$ par racine cubique avant de calculer l'aire.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "esp3-l2",
        slug: "sections-planes-de-solides",
        title: "Sections planes de solides",
        durationMinutes: 12,
        content: `## Couper un solide par un plan

Lorsqu'on coupe un solide par un **plan**, on obtient une figure plane appelée **section**.

| Solide coupé | Plan de coupe | Section obtenue |
|---|---|---|
| Cube | Parallèle à une face | Carré |
| Cylindre | Parallèle à la base | Disque |
| Cylindre | Perpendiculaire à la base, passant par l'axe | Rectangle |
| Cône | Parallèle à la base | Disque (plus petit) |
| Sphère | Tout plan passant par le centre | Grand cercle (même rayon que la sphère) |
| Sphère | Plan ne passant pas par le centre | Cercle plus petit |

> Pour une sphère de rayon $R$, si le plan de coupe passe à une distance $d$ du centre ($d < R$), le rayon $r$ du cercle de section vérifie le théorème de Pythagore :
> $$r^2 + d^2 = R^2$$

### Exemple

Une sphère de rayon $R = 13$ cm est coupée par un plan situé à $d=5$ cm du centre.

$$r^2 = R^2 - d^2 = 13^2 - 5^2 = 169 - 25 = 144 \\implies r = \\sqrt{144} = 12 \\text{ cm}$$`,
        videoUrl: undefined,
        exercises: [
          {
            id: "esp3-l2-e1",
            question: "Quelle figure obtient-on en coupant un cylindre par un plan parallèle à sa base ?",
            type: "mcq",
            options: [
              { id: "A", text: "Un rectangle" },
              { id: "B", text: "Un disque" },
              { id: "C", text: "Un triangle" },
              { id: "D", text: "Un carré" },
            ],
            correctId: "B",
            explanation: "Une coupe parallèle à la base d'un cylindre donne toujours un disque de même rayon que la base.",
            difficulty: "debutant",
          },
          {
            id: "esp3-l2-e2",
            question: "Vrai ou faux : la section d'une sphère par un plan passant par son centre est un cercle de même rayon que la sphère.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai : ce cercle est appelé « grand cercle » de la sphère, et a le même rayon que la sphère.",
            difficulty: "debutant",
          },
          {
            id: "esp3-l2-e3",
            question: "Une sphère de rayon $R=10$ cm est coupée par un plan à $d=6$ cm du centre. Quel est le rayon du cercle de section ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4$ cm" },
              { id: "B", text: "$6$ cm" },
              { id: "C", text: "$8$ cm" },
              { id: "D", text: "$16$ cm" },
            ],
            correctId: "C",
            explanation: "$r^2 = R^2-d^2 = 100-36=64 \\implies r=\\sqrt{64}=8$ cm.",
            difficulty: "intermediaire",
          },
          {
            id: "esp3-l2-e4",
            question: "Une sphère de rayon $R=17$ cm est coupée par un plan, donnant un cercle de section de rayon $r=15$ cm. À quelle distance $d$ du centre se trouve ce plan ?",
            type: "open",
            modelAnswer: "On utilise $r^2 + d^2 = R^2$, donc $d^2 = R^2 - r^2$.\\n\\n$$d^2 = 17^2 - 15^2 = 289 - 225 = 64 \\implies d = \\sqrt{64} = 8 \\text{ cm}$$\\n\\n$$\\boxed{d = 8 \\text{ cm}}$$",
            explanation: "On réorganise la relation de Pythagore $r^2+d^2=R^2$ pour isoler $d^2$, puis on prend la racine carrée.",
            difficulty: "intermediaire",
          },
          {
            id: "esp3-l2-e5",
            question: "Une sphère de centre $O$ et de rayon $R=25$ cm est coupée par un plan passant à $d=7$ cm de $O$. Calcule l'aire du disque de section obtenu.",
            type: "open",
            modelAnswer: "On calcule d'abord le rayon $r$ du cercle de section :\\n\\n$$r^2 = R^2 - d^2 = 25^2 - 7^2 = 625-49=576 \\implies r=\\sqrt{576}=24 \\text{ cm}$$\\n\\nL'aire du disque de section est :\\n\\n$$\\mathcal{A} = \\pi r^2 = \\pi \\times 24^2 = 576\\pi \\text{ cm}^2$$\\n\\n$$\\boxed{\\mathcal{A} = 576\\pi \\text{ cm}^2 \\approx 1809{,}6 \\text{ cm}^2}$$",
            explanation: "On combine le théorème de Pythagore (pour trouver le rayon de la section) avec la formule de l'aire du disque ($\\mathcal{A}=\\pi r^2$).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "esp3-l3",
        slug: "agrandissement-reduction-et-volumes",
        title: "Agrandissement, réduction et effet sur les volumes",
        durationMinutes: 13,
        content: `## Effet d'un agrandissement/réduction sur les solides

Lorsqu'on agrandit ou réduit un solide selon un **coefficient $k$** :

| Grandeur | Coefficient |
|---|---|
| Longueurs | $\\times k$ |
| Aires | $\\times k^2$ |
| Volumes | $\\times k^3$ |

> Si $k > 1$ : agrandissement. Si $0 < k < 1$ : réduction.

### Exemple

Une sphère de rayon $r=3$ cm est agrandie avec un coefficient $k=2$.

- Nouveau rayon : $3 \\times 2 = 6$ cm
- Le volume initial était $V_1 = \\dfrac{4}{3}\\pi \\times 3^3 = 36\\pi \\text{ cm}^3$
- Le nouveau volume : $V_2 = V_1 \\times k^3 = 36\\pi \\times 8 = 288\\pi \\text{ cm}^3$

On peut vérifier : $V_2 = \\dfrac{4}{3}\\pi \\times 6^3 = \\dfrac{4}{3}\\pi \\times 216 = 288\\pi$ cm³. ✓`,
        videoUrl: undefined,
        exercises: [
          {
            id: "esp3-l3-e1",
            question: "Si on agrandit un solide avec un coefficient $k$, par quel facteur le volume est-il multiplié ?",
            type: "mcq",
            options: [
              { id: "A", text: "$k$" },
              { id: "B", text: "$k^2$" },
              { id: "C", text: "$k^3$" },
              { id: "D", text: "$3k$" },
            ],
            correctId: "C",
            explanation: "Le volume, étant une grandeur à 3 dimensions, est multiplié par $k^3$ lors d'un agrandissement/réduction de coefficient $k$.",
            difficulty: "debutant",
          },
          {
            id: "esp3-l3-e2",
            question: "Vrai ou faux : un coefficient de réduction $k$ vérifie toujours $k > 1$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Faux : une réduction correspond à $0 < k < 1$. Un coefficient $k>1$ correspond à un agrandissement.",
            difficulty: "debutant",
          },
          {
            id: "esp3-l3-e3",
            question: "Un cube a un volume de $8 \\text{ cm}^3$. On l'agrandit avec un coefficient $k=3$. Quel est le nouveau volume ?",
            type: "mcq",
            options: [
              { id: "A", text: "$24 \\text{ cm}^3$" },
              { id: "B", text: "$72 \\text{ cm}^3$" },
              { id: "C", text: "$216 \\text{ cm}^3$" },
              { id: "D", text: "$512 \\text{ cm}^3$" },
            ],
            correctId: "C",
            explanation: "Le volume est multiplié par $k^3 = 27$ : $8 \\times 27 = 216 \\text{ cm}^3$.",
            difficulty: "intermediaire",
          },
          {
            id: "esp3-l3-e4",
            question: "Une boule de rayon $5$ cm est réduite avec un coefficient $k=0{,}4$. Calcule le rayon et le volume de la boule réduite (valeur exacte).",
            type: "open",
            modelAnswer: "Nouveau rayon : $5 \\times 0{,}4 = 2$ cm.\\n\\nVolume initial : $V_1 = \\dfrac{4}{3}\\pi \\times 5^3 = \\dfrac{500}{3}\\pi \\text{ cm}^3$.\\n\\nNouveau volume (méthode directe) : $V_2 = \\dfrac{4}{3}\\pi \\times 2^3 = \\dfrac{32}{3}\\pi \\text{ cm}^3$.\\n\\nVérification par le coefficient : $V_2 = V_1 \\times k^3 = \\dfrac{500}{3}\\pi \\times 0{,}064 = \\dfrac{32}{3}\\pi$. ✓\\n\\n$$\\boxed{r = 2 \\text{ cm}, \\quad V = \\dfrac{32}{3}\\pi \\text{ cm}^3}$$",
            explanation: "On peut calculer le nouveau volume soit directement avec le nouveau rayon, soit en multipliant l'ancien volume par $k^3$ — les deux méthodes doivent donner le même résultat.",
            difficulty: "intermediaire",
          },
          {
            id: "esp3-l3-e5",
            question: "Deux boules semblables ont des volumes $V_1 = 27 \\text{ cm}^3$ et $V_2 = 216 \\text{ cm}^3$. Quel est le coefficient d'agrandissement entre la première et la seconde ? En déduire le rapport de leurs rayons.",
            type: "open",
            modelAnswer: "Le rapport des volumes est $\\dfrac{V_2}{V_1} = \\dfrac{216}{27} = 8$.\\n\\nOr le rapport des volumes vaut $k^3$, donc $k^3 = 8 \\implies k = \\sqrt[3]{8} = 2$.\\n\\nLe rapport des rayons (longueurs) est donc égal à $k = 2$ : le rayon de la seconde boule est le double du rayon de la première.\\n\\n$$\\boxed{k = 2}$$",
            explanation: "Pour retrouver le coefficient linéaire $k$ à partir d'un rapport de volumes, on calcule la racine cubique du rapport des volumes, car $\\dfrac{V_2}{V_1}=k^3$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 6ème — Révisions générales
  {
    id: "rev6-id",
    slug: "revisions-6eme",
    title: "Révisions générales — 6ème",
    description: "15 exercices progressifs (débutant, intermédiaire, expert) pour réviser tout le programme de 6ème : nombres, fractions, géométrie, proportionnalité, aires, symétrie, solides et statistiques.",
    schoolLevel: "6eme",
    subject: "arithmetique",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🎯",
    lessons: [
      {
        id: "rev6-l1",
        slug: "bilan-progressif-6eme",
        title: "Bilan progressif : tout le programme de 6ème",
        durationMinutes: 25,
        content: `## Bilan de 6ème

Ce bilan rassemble les **grandes notions** du programme de 6ème : nombres entiers et décimaux, fractions, géométrie plane, symétrie axiale, proportionnalité, aires et périmètres, solides et statistiques.

Les $15$ exercices ci-dessous sont classés en trois niveaux de difficulté progressive :

- 🟢 **Débutant** (exercices 1 à 5) : applications directes des définitions et formules.
- 🟡 **Intermédiaire** (exercices 6 à 10) : exercices combinant deux notions ou demandant un calcul en plusieurs étapes.
- 🔴 **Expert** (exercices 11 à 15) : problèmes complets nécessitant de mobiliser plusieurs compétences du programme.

> Prends ton temps, relis l'énoncé deux fois, et n'oublie pas de vérifier que ton résultat est cohérent avec la situation !`,
        videoUrl: undefined,
        exercises: [
          {
            id: "rev6-l1-e1",
            question: "Range dans l'ordre croissant : $5{,}3\\ ;\\ 5{,}03\\ ;\\ 5{,}33\\ ;\\ 5{,}3\\ ;\\ 5$.",
            type: "mcq",
            options: [
              { id: "A", text: "$5 < 5{,}03 < 5{,}3 < 5{,}33$" },
              { id: "B", text: "$5{,}33 < 5{,}3 < 5{,}03 < 5$" },
              { id: "C", text: "$5 < 5{,}3 < 5{,}03 < 5{,}33$" },
              { id: "D", text: "$5{,}03 < 5 < 5{,}3 < 5{,}33$" },
            ],
            correctId: "A",
            explanation: "On compare partie entière puis chiffres après la virgule : $5 < 5{,}03 < 5{,}3 < 5{,}33$.",
            difficulty: "debutant",
          },
          {
            id: "rev6-l1-e2",
            question: "Vrai ou faux : la fraction $\\dfrac{4}{8}$ est égale à $\\dfrac{1}{2}$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai : en divisant numérateur et dénominateur par $4$, on obtient $\\dfrac{4}{8}=\\dfrac{1}{2}$.",
            difficulty: "debutant",
          },
          {
            id: "rev6-l1-e3",
            question: "Deux droites perpendiculaires à une même troisième droite sont :",
            type: "mcq",
            options: [
              { id: "A", text: "Perpendiculaires entre elles" },
              { id: "B", text: "Parallèles entre elles" },
              { id: "C", text: "Sécantes en un point" },
              { id: "D", text: "Confondues" },
            ],
            correctId: "B",
            explanation: "Deux droites perpendiculaires à une même troisième droite sont nécessairement parallèles entre elles.",
            difficulty: "debutant",
          },
          {
            id: "rev6-l1-e4",
            question: "Un tableau de proportionnalité donne : pour $3$ articles, $9$ €. Combien coûtent $7$ articles ?",
            type: "mcq",
            options: [
              { id: "A", text: "$18$ €" },
              { id: "B", text: "$21$ €" },
              { id: "C", text: "$24$ €" },
              { id: "D", text: "$27$ €" },
            ],
            correctId: "B",
            explanation: "Le prix d'un article est $9 \\div 3 = 3$ €, donc $7$ articles coûtent $7 \\times 3 = 21$ €.",
            difficulty: "debutant",
          },
          {
            id: "rev6-l1-e5",
            question: "Calcule le périmètre d'un rectangle de longueur $8$ cm et de largeur $5$ cm.",
            type: "mcq",
            options: [
              { id: "A", text: "$13$ cm" },
              { id: "B", text: "$26$ cm" },
              { id: "C", text: "$40$ cm" },
              { id: "D", text: "$20$ cm" },
            ],
            correctId: "B",
            explanation: "$P = 2 \\times (L + l) = 2 \\times (8+5) = 2\\times 13 = 26$ cm.",
            difficulty: "debutant",
          },
          {
            id: "rev6-l1-e6",
            question: "Calcule $7{,}5 \\times 4$ puis $9 \\div 4$ (donne le résultat décimal).",
            type: "open",
            modelAnswer: "$$7{,}5 \\times 4 = 30$$\\n\\n$$9 \\div 4 = 2{,}25$$\\n\\n$$\\boxed{30 \\text{ et } 2{,}25}$$",
            explanation: "On effectue les deux opérations séparément : une multiplication décimale, puis une division qui ne « tombe pas juste » en entier.",
            difficulty: "intermediaire",
          },
          {
            id: "rev6-l1-e7",
            question: "Calcule $\\dfrac{2}{7} + \\dfrac{3}{7}$ puis simplifie le résultat si possible.",
            type: "open",
            modelAnswer: "$$\\dfrac{2}{7}+\\dfrac{3}{7} = \\dfrac{2+3}{7} = \\dfrac{5}{7}$$\\n\\nCette fraction est déjà irréductible ($5$ et $7$ n'ont pas de diviseur commun autre que $1$).\\n\\n$$\\boxed{\\dfrac{5}{7}}$$",
            explanation: "Pour additionner des fractions de même dénominateur, on additionne les numérateurs et on garde le dénominateur commun.",
            difficulty: "intermediaire",
          },
          {
            id: "rev6-l1-e8",
            question: "Trace un triangle $ABC$ (mentalement ou sur une feuille) et décris comment construire son symétrique par rapport à une droite $(d)$ qui ne le coupe pas.",
            type: "open",
            modelAnswer: "Pour construire le symétrique du triangle $ABC$ par rapport à $(d)$ :\\n\\n1. Pour chaque sommet ($A$, $B$, $C$), on trace la perpendiculaire à $(d)$ passant par ce sommet.\\n2. On mesure la distance entre le sommet et $(d)$ le long de cette perpendiculaire.\\n3. On place le point symétrique à la **même distance** de $(d)$, mais de l'**autre côté**.\\n4. On obtient ainsi $A'$, $B'$, $C'$, puis on relie ces points pour former le triangle symétrique $A'B'C'$.\\n\\n$$\\boxed{\\text{Symétrique obtenu en reportant les distances perpendiculairement de l'autre côté de } (d)}$$",
            explanation: "La symétrie axiale conserve les longueurs et les angles : le symétrique d'une figure est obtenu en reportant chaque point à égale distance de l'axe, de l'autre côté.",
            difficulty: "intermediaire",
          },
          {
            id: "rev6-l1-e9",
            question: "Un disque a un rayon de $6$ cm. Calcule son aire (donner la valeur exacte en fonction de $\\pi$, puis une valeur approchée avec $\\pi \\approx 3{,}14$).",
            type: "open",
            modelAnswer: "$$\\mathcal{A} = \\pi \\times r^2 = \\pi \\times 6^2 = 36\\pi \\text{ cm}^2$$\\n\\nValeur approchée : $36 \\times 3{,}14 = 113{,}04 \\text{ cm}^2$.\\n\\n$$\\boxed{\\mathcal{A} = 36\\pi \\approx 113{,}04 \\text{ cm}^2}$$",
            explanation: "On applique directement la formule de l'aire du disque $\\mathcal{A}=\\pi r^2$, puis on remplace $\\pi$ par sa valeur approchée pour obtenir un résultat numérique.",
            difficulty: "intermediaire",
          },
          {
            id: "rev6-l1-e10",
            question: "Les notes obtenues par $5$ élèves à un contrôle sont : $12, 14, 9, 17, 13$. Calcule la moyenne de la classe.",
            type: "open",
            modelAnswer: "Somme des notes : $12+14+9+17+13 = 65$.\\n\\nMoyenne $= \\dfrac{65}{5} = 13$.\\n\\n$$\\boxed{\\text{Moyenne} = 13}$$",
            explanation: "La moyenne d'une série de valeurs est la somme des valeurs divisée par leur nombre.",
            difficulty: "intermediaire",
          },
          {
            id: "rev6-l1-e11",
            question: "Un pavé droit a pour dimensions $5$ cm $\\times$ $4$ cm $\\times$ $3$ cm. Calcule son volume, puis calcule combien de petits cubes de $1$ cm de côté il faudrait pour le remplir entièrement.",
            type: "open",
            modelAnswer: "Volume du pavé : $V = L \\times l \\times h = 5 \\times 4 \\times 3 = 60 \\text{ cm}^3$.\\n\\nUn cube de $1$ cm de côté a un volume de $1 \\text{ cm}^3$. Il faut donc $60$ petits cubes pour remplir le pavé.\\n\\n$$\\boxed{V = 60 \\text{ cm}^3, \\quad 60 \\text{ cubes}}$$",
            explanation: "Le volume du pavé droit est le produit de ses trois dimensions ; comme chaque petit cube a un volume de $1\\,\\text{cm}^3$, le nombre de cubes nécessaires est numériquement égal au volume en $\\text{cm}^3$.",
            difficulty: "expert",
          },
          {
            id: "rev6-l1-e12",
            question: "Une voiture roule à vitesse constante et parcourt $90$ km en $1$ heure. Construis un tableau de proportionnalité et calcule la distance parcourue en $2$ heures $30$ minutes.",
            type: "open",
            modelAnswer: "On construit le tableau de proportionnalité (distance proportionnelle au temps) :\\n\\n| Temps (h) | $1$ | $2{,}5$ |\\n|---|---|---|\\n| Distance (km) | $90$ | $?$ |\\n\\n$2$ heures $30$ minutes $= 2{,}5$ heures.\\n\\n$$\\text{Distance} = 90 \\times 2{,}5 = 225 \\text{ km}$$\\n\\n$$\\boxed{225 \\text{ km}}$$",
            explanation: "On convertit d'abord la durée en heures décimales ($2$h$30$ = $2{,}5$ h), puis on utilise le coefficient de proportionnalité (la vitesse, $90$ km/h) pour calculer la distance.",
            difficulty: "expert",
          },
          {
            id: "rev6-l1-e13",
            question: "Calcule $\\dfrac{3}{4} - \\dfrac{1}{4} + \\dfrac{5}{4}$, puis donne le résultat sous la forme d'un nombre décimal.",
            type: "open",
            modelAnswer: "$$\\dfrac{3}{4} - \\dfrac{1}{4} + \\dfrac{5}{4} = \\dfrac{3-1+5}{4} = \\dfrac{7}{4}$$\\n\\nEn décimal : $\\dfrac{7}{4} = 1{,}75$.\\n\\n$$\\boxed{\\dfrac{7}{4} = 1{,}75}$$",
            explanation: "Comme toutes les fractions ont le même dénominateur, on effectue les opérations directement sur les numérateurs, puis on convertit en décimal en effectuant la division.",
            difficulty: "expert",
          },
          {
            id: "rev6-l1-e14",
            question: "Une figure est composée d'un carré de $6$ cm de côté surmonté d'un demi-disque de diamètre $6$ cm. Calcule l'aire totale de la figure (valeur exacte en fonction de $\\pi$).",
            type: "open",
            modelAnswer: "Aire du carré : $\\mathcal{A}_{carré} = 6 \\times 6 = 36 \\text{ cm}^2$.\\n\\nLe demi-disque a un diamètre de $6$ cm, donc un rayon $r = 3$ cm.\\n\\nAire du demi-disque : $\\mathcal{A}_{1/2\\,disque} = \\dfrac{\\pi r^2}{2} = \\dfrac{\\pi \\times 9}{2} = 4{,}5\\pi \\text{ cm}^2$.\\n\\nAire totale : $\\mathcal{A} = 36 + 4{,}5\\pi \\text{ cm}^2$.\\n\\n$$\\boxed{\\mathcal{A} = 36 + 4{,}5\\pi \\text{ cm}^2 \\approx 50{,}1 \\text{ cm}^2}$$",
            explanation: "On décompose la figure composée en formes simples (carré + demi-disque), on calcule l'aire de chaque partie séparément, puis on additionne.",
            difficulty: "expert",
          },
          {
            id: "rev6-l1-e15",
            question: "Un fermier veut entourer un terrain rectangulaire de $25$ m sur $15$ m avec une clôture, puis recouvrir le sol de gazon. Le gazon coûte $4$ € le mètre carré et le grillage coûte $6$ € le mètre. Calcule le coût total (clôture + gazon).",
            type: "open",
            modelAnswer: "Périmètre du terrain (longueur de clôture nécessaire) : $P = 2 \\times (25+15) = 2 \\times 40 = 80$ m.\\n\\nCoût de la clôture : $80 \\times 6 = 480$ €.\\n\\nAire du terrain (surface de gazon) : $\\mathcal{A} = 25 \\times 15 = 375 \\text{ m}^2$.\\n\\nCoût du gazon : $375 \\times 4 = 1500$ €.\\n\\nCoût total : $480 + 1500 = 1980$ €.\\n\\n$$\\boxed{\\text{Coût total} = 1980 \\text{ €}}$$",
            explanation: "Ce problème combine deux grandeurs différentes : le périmètre (pour la clôture, une longueur) et l'aire (pour le gazon, une surface) — il faut bien identifier laquelle utiliser pour chaque coût.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 5ème — Révisions générales
  {
    id: "rev5-id",
    slug: "revisions-5eme",
    title: "Révisions générales — 5ème",
    description: "15 exercices progressifs (débutant, intermédiaire, expert) pour réviser tout le programme de 5ème : nombres relatifs, fractions, calcul littéral, triangles, symétrie centrale, aires et volumes, proportionnalité et statistiques.",
    schoolLevel: "5eme",
    subject: "arithmetique",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "🎯",
    lessons: [
      {
        id: "rev5-l1",
        slug: "bilan-progressif-5eme",
        title: "Bilan progressif : tout le programme de 5ème",
        durationMinutes: 25,
        content: `## Bilan de 5ème

Ce bilan rassemble les **grandes notions** du programme de 5ème : nombres relatifs, opérations sur les fractions, calcul littéral, triangles, symétrie centrale, aires et volumes (prismes, cylindres), proportionnalité et statistiques.

Les $15$ exercices ci-dessous sont classés en trois niveaux de difficulté progressive :

- 🟢 **Débutant** (exercices 1 à 5) : applications directes des définitions et formules.
- 🟡 **Intermédiaire** (exercices 6 à 10) : exercices combinant deux notions ou demandant un calcul en plusieurs étapes.
- 🔴 **Expert** (exercices 11 à 15) : problèmes complets nécessitant de mobiliser plusieurs compétences du programme.

> N'oublie pas de bien poser tes calculs et de vérifier le signe de tes résultats avec les nombres relatifs !`,
        videoUrl: undefined,
        exercises: [
          {
            id: "rev5-l1-e1",
            question: "Calcule $(-7) + 3$.",
            type: "mcq",
            options: [
              { id: "A", text: "$-10$" },
              { id: "B", text: "$-4$" },
              { id: "C", text: "$4$" },
              { id: "D", text: "$10$" },
            ],
            correctId: "B",
            explanation: "$(-7)+3 = -(7-3) = -4$ : on garde le signe du nombre ayant la plus grande valeur absolue.",
            difficulty: "debutant",
          },
          {
            id: "rev5-l1-e2",
            question: "Vrai ou faux : dans un triangle, la somme des trois angles vaut toujours $180°$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, c'est une propriété fondamentale de tout triangle dans le plan euclidien.",
            difficulty: "debutant",
          },
          {
            id: "rev5-l1-e3",
            question: "Simplifie l'expression littérale $3x + 5x$.",
            type: "mcq",
            options: [
              { id: "A", text: "$8x$" },
              { id: "B", text: "$15x$" },
              { id: "C", text: "$8x^2$" },
              { id: "D", text: "$3x^5$" },
            ],
            correctId: "A",
            explanation: "$3x+5x = (3+5)x = 8x$ : on additionne les coefficients des termes semblables.",
            difficulty: "debutant",
          },
          {
            id: "rev5-l1-e4",
            question: "Quel est le symétrique d'un point $A$ par rapport à un point $O$ (symétrie centrale) ?",
            type: "mcq",
            options: [
              { id: "A", text: "Le point $A$ lui-même" },
              { id: "B", text: "Le point $A'$ tel que $O$ est le milieu de $[AA']$" },
              { id: "C", text: "Un point situé à $2$ cm de $A$" },
              { id: "D", text: "Le point $A'$ situé sur la perpendiculaire à $(OA)$" },
            ],
            correctId: "B",
            explanation: "Le symétrique de $A$ par rapport à $O$ est le point $A'$ tel que $O$ soit le milieu du segment $[AA']$.",
            difficulty: "debutant",
          },
          {
            id: "rev5-l1-e5",
            question: "Calcule $\\dfrac{1}{3} + \\dfrac{1}{6}$ (mets les fractions au même dénominateur).",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{2}{9}$" },
              { id: "B", text: "$\\dfrac{1}{2}$" },
              { id: "C", text: "$\\dfrac{2}{6}$" },
              { id: "D", text: "$\\dfrac{1}{9}$" },
            ],
            correctId: "B",
            explanation: "$\\dfrac{1}{3} = \\dfrac{2}{6}$, donc $\\dfrac{2}{6}+\\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$.",
            difficulty: "debutant",
          },
          {
            id: "rev5-l1-e6",
            question: "Calcule $(-4) \\times (-6) - 5$.",
            type: "open",
            modelAnswer: "$$(-4)\\times(-6) = 24$$\\n\\n$$24 - 5 = 19$$\\n\\n$$\\boxed{19}$$",
            explanation: "On respecte la priorité des opérations : la multiplication avant la soustraction. Le produit de deux nombres négatifs est positif.",
            difficulty: "intermediaire",
          },
          {
            id: "rev5-l1-e7",
            question: "Réduis l'expression $5x + 3 - 2x + 7$.",
            type: "open",
            modelAnswer: "On regroupe les termes en $x$ entre eux, et les nombres entre eux :\\n\\n$$5x - 2x + 3 + 7 = 3x + 10$$\\n\\n$$\\boxed{3x+10}$$",
            explanation: "Pour réduire une expression littérale, on regroupe d'abord les termes semblables (les termes en $x$ ensemble, les nombres seuls ensemble).",
            difficulty: "intermediaire",
          },
          {
            id: "rev5-l1-e8",
            question: "Un prisme droit a une base triangulaire d'aire $12 \\text{ cm}^2$ et une hauteur de $9$ cm. Calcule son volume.",
            type: "open",
            modelAnswer: "$$V = \\mathcal{A}_{base} \\times h = 12 \\times 9 = 108 \\text{ cm}^3$$\\n\\n$$\\boxed{V = 108 \\text{ cm}^3}$$",
            explanation: "Le volume d'un prisme droit est égal à l'aire de sa base multipliée par sa hauteur.",
            difficulty: "intermediaire",
          },
          {
            id: "rev5-l1-e9",
            question: "Dans un tableau de proportionnalité, on a $4 \\to 18$ et $10 \\to ?$. Trouve la valeur manquante.",
            type: "open",
            modelAnswer: "Le coefficient de proportionnalité est $18 \\div 4 = 4{,}5$.\\n\\n$$10 \\times 4{,}5 = 45$$\\n\\n$$\\boxed{45}$$",
            explanation: "On calcule le coefficient de proportionnalité en divisant l'image par l'antécédent, puis on l'applique à la nouvelle valeur.",
            difficulty: "intermediaire",
          },
          {
            id: "rev5-l1-e10",
            question: "Les températures relevées sur une semaine sont : $-2°C, 0°C, 3°C, -5°C, 1°C, 4°C, -1°C$. Calcule la température moyenne de la semaine.",
            type: "open",
            modelAnswer: "Somme des températures : $(-2)+0+3+(-5)+1+4+(-1) = 0$.\\n\\nMoyenne $= \\dfrac{0}{7} = 0$.\\n\\n$$\\boxed{\\text{Moyenne} = 0°C}$$",
            explanation: "On additionne les nombres relatifs en faisant attention aux signes, puis on divise par le nombre de valeurs (ici $7$ jours).",
            difficulty: "intermediaire",
          },
          {
            id: "rev5-l1-e11",
            question: "Un triangle a deux côtés mesurant $7$ cm et $4$ cm. Le troisième côté peut-il mesurer $2$ cm ? Justifie avec l'inégalité triangulaire.",
            type: "open",
            modelAnswer: "L'inégalité triangulaire impose que chaque côté soit inférieur à la somme des deux autres.\\n\\nIci, on doit vérifier : $7 < 4 + 2$, soit $7 < 6$, ce qui est **faux**.\\n\\nLe triangle ne peut donc pas exister avec ces longueurs.\\n\\n$$\\boxed{\\text{Non, le triangle n'existe pas}}$$",
            explanation: "L'inégalité triangulaire doit être vérifiée pour les trois combinaisons de côtés ; il suffit qu'une seule échoue pour que le triangle soit impossible à construire.",
            difficulty: "expert",
          },
          {
            id: "rev5-l1-e12",
            question: "Un cylindre de révolution a un rayon de base $r=4$ cm et une hauteur $h=10$ cm. Calcule son volume exact, puis une valeur approchée au $\\text{cm}^3$ près ($\\pi \\approx 3{,}14$).",
            type: "open",
            modelAnswer: "$$V = \\pi r^2 h = \\pi \\times 4^2 \\times 10 = \\pi \\times 16 \\times 10 = 160\\pi \\text{ cm}^3$$\\n\\nValeur approchée : $160 \\times 3{,}14 = 502{,}4 \\text{ cm}^3$.\\n\\n$$\\boxed{V = 160\\pi \\approx 502{,}4 \\text{ cm}^3}$$",
            explanation: "Le volume du cylindre est l'aire de sa base ($\\pi r^2$) multipliée par sa hauteur.",
            difficulty: "expert",
          },
          {
            id: "rev5-l1-e13",
            question: "Calcule $\\dfrac{3}{4} \\times \\dfrac{8}{9}$ et simplifie le résultat.",
            type: "open",
            modelAnswer: "$$\\dfrac{3}{4}\\times\\dfrac{8}{9} = \\dfrac{3\\times 8}{4\\times 9} = \\dfrac{24}{36}$$\\n\\nOn simplifie en divisant par $12$ : $\\dfrac{24}{36} = \\dfrac{2}{3}$.\\n\\n$$\\boxed{\\dfrac{2}{3}}$$",
            explanation: "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie la fraction obtenue en cherchant le plus grand diviseur commun.",
            difficulty: "expert",
          },
          {
            id: "rev5-l1-e14",
            question: "Un magasin applique une réduction de $20\\%$ sur un article à $45$ €, puis ajoute la TVA de $20\\%$ sur le nouveau prix. Calcule le prix final.",
            type: "open",
            modelAnswer: "Réduction : $45 \\times 0{,}20 = 9$ €. Prix après réduction : $45 - 9 = 36$ €.\\n\\nTVA : $36 \\times 0{,}20 = 7{,}2$ €. Prix final : $36 + 7{,}2 = 43{,}2$ €.\\n\\n$$\\boxed{\\text{Prix final} = 43{,}2 \\text{ €}}$$",
            explanation: "On applique les deux pourcentages successivement : d'abord la réduction sur le prix initial, puis la TVA sur le nouveau prix obtenu (et non sur le prix initial).",
            difficulty: "expert",
          },
          {
            id: "rev5-l1-e15",
            question: "Un terrain rectangulaire mesure $30$ m sur $20$ m. On veut y construire une piscine circulaire de rayon $5$ m. Calcule l'aire du terrain restante (non occupée par la piscine), en valeur exacte puis approchée ($\\pi \\approx 3{,}14$).",
            type: "open",
            modelAnswer: "Aire du terrain : $\\mathcal{A}_{terrain} = 30 \\times 20 = 600 \\text{ m}^2$.\\n\\nAire de la piscine : $\\mathcal{A}_{piscine} = \\pi \\times 5^2 = 25\\pi \\text{ m}^2$.\\n\\nAire restante : $\\mathcal{A} = 600 - 25\\pi \\text{ m}^2$.\\n\\nValeur approchée : $600 - 25\\times3{,}14 = 600 - 78{,}5 = 521{,}5 \\text{ m}^2$.\\n\\n$$\\boxed{\\mathcal{A} = 600-25\\pi \\approx 521{,}5 \\text{ m}^2}$$",
            explanation: "On calcule séparément l'aire totale du terrain (rectangle) et l'aire de la zone à exclure (disque), puis on soustrait la seconde à la première.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 4ème — Révisions générales
  {
    id: "rev4-id",
    slug: "revisions-4eme",
    title: "Révisions générales — 4ème",
    description: "15 exercices progressifs (débutant, intermédiaire, expert) pour réviser tout le programme de 4ème : puissances, équations, théorème de Pythagore, vecteurs, pyramides et cônes, statistiques et probabilités.",
    schoolLevel: "4eme",
    subject: "algebre",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "🎯",
    lessons: [
      {
        id: "rev4-l1",
        slug: "bilan-progressif-4eme",
        title: "Bilan progressif : tout le programme de 4ème",
        durationMinutes: 25,
        content: `## Bilan de 4ème

Ce bilan rassemble les **grandes notions** du programme de 4ème : puissances, équations du premier degré, théorème de Pythagore, translations et vecteurs, pyramides et cônes, statistiques et probabilités.

Les $15$ exercices ci-dessous sont classés en trois niveaux de difficulté progressive :

- 🟢 **Débutant** (exercices 1 à 5) : applications directes des définitions et formules.
- 🟡 **Intermédiaire** (exercices 6 à 10) : exercices combinant deux notions ou demandant un calcul en plusieurs étapes.
- 🔴 **Expert** (exercices 11 à 15) : problèmes complets nécessitant de mobiliser plusieurs compétences du programme.

> Le théorème de Pythagore et la résolution d'équations sont les piliers de cette année : assure-toi de bien les maîtriser !`,
        videoUrl: undefined,
        exercises: [
          {
            id: "rev4-l1-e1",
            question: "Calcule $3^2 \\times 3^3$ et écris le résultat sous forme d'une seule puissance de $3$.",
            type: "mcq",
            options: [
              { id: "A", text: "$3^5$" },
              { id: "B", text: "$3^6$" },
              { id: "C", text: "$9^5$" },
              { id: "D", text: "$3^1$" },
            ],
            correctId: "A",
            explanation: "Pour multiplier deux puissances de même base, on additionne les exposants : $3^2\\times3^3 = 3^{2+3} = 3^5$.",
            difficulty: "debutant",
          },
          {
            id: "rev4-l1-e2",
            question: "Vrai ou faux : dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai, c'est le théorème de Pythagore.",
            difficulty: "debutant",
          },
          {
            id: "rev4-l1-e3",
            question: "Résous l'équation $x + 5 = 12$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 7$" },
              { id: "B", text: "$x = 17$" },
              { id: "C", text: "$x = -7$" },
              { id: "D", text: "$x = 60$" },
            ],
            correctId: "A",
            explanation: "On soustrait $5$ aux deux membres : $x = 12 - 5 = 7$.",
            difficulty: "debutant",
          },
          {
            id: "rev4-l1-e4",
            question: "Qu'est-ce qu'un vecteur $\\vec{AB}$ caractérise-t-il ?",
            type: "mcq",
            options: [
              { id: "A", text: "Uniquement une longueur" },
              { id: "B", text: "Une direction, un sens et une longueur" },
              { id: "C", text: "Uniquement un point" },
              { id: "D", text: "Un angle" },
            ],
            correctId: "B",
            explanation: "Un vecteur est caractérisé par trois éléments : sa direction, son sens et sa longueur (norme).",
            difficulty: "debutant",
          },
          {
            id: "rev4-l1-e5",
            question: "Une pyramide a une base carrée de $4$ cm de côté et une hauteur de $9$ cm. Calcule son volume ($V = \\dfrac{\\mathcal{A}_{base}\\times h}{3}$).",
            type: "mcq",
            options: [
              { id: "A", text: "$36 \\text{ cm}^3$" },
              { id: "B", text: "$48 \\text{ cm}^3$" },
              { id: "C", text: "$144 \\text{ cm}^3$" },
              { id: "D", text: "$16 \\text{ cm}^3$" },
            ],
            correctId: "B",
            explanation: "Aire de la base $= 4\\times4=16 \\text{ cm}^2$. Volume $= \\dfrac{16\\times9}{3} = \\dfrac{144}{3} = 48 \\text{ cm}^3$.",
            difficulty: "debutant",
          },
          {
            id: "rev4-l1-e6",
            question: "Résous l'équation $3x - 4 = 11$.",
            type: "open",
            modelAnswer: "$$3x - 4 = 11$$\\n\\n$$3x = 11+4 = 15$$\\n\\n$$x = \\dfrac{15}{3} = 5$$\\n\\n$$\\boxed{x = 5}$$",
            explanation: "On isole le terme en $x$ en ajoutant $4$ aux deux membres, puis on divise par le coefficient de $x$.",
            difficulty: "intermediaire",
          },
          {
            id: "rev4-l1-e7",
            question: "Dans un triangle rectangle $ABC$ rectangle en $A$, on a $AB=6$ cm et $AC=8$ cm. Calcule la longueur de l'hypoténuse $BC$.",
            type: "open",
            modelAnswer: "D'après le théorème de Pythagore :\\n\\n$$BC^2 = AB^2 + AC^2 = 6^2+8^2 = 36+64=100$$\\n\\n$$BC = \\sqrt{100} = 10 \\text{ cm}$$\\n\\n$$\\boxed{BC = 10 \\text{ cm}}$$",
            explanation: "L'hypoténuse est le côté opposé à l'angle droit ; son carré est égal à la somme des carrés des deux autres côtés.",
            difficulty: "intermediaire",
          },
          {
            id: "rev4-l1-e8",
            question: "On lance un dé à $6$ faces. Quelle est la probabilité d'obtenir un nombre pair ?",
            type: "open",
            modelAnswer: "Les nombres pairs sur un dé à $6$ faces sont $2, 4, 6$, soit $3$ issues favorables sur $6$ issues possibles.\\n\\n$$P(\\text{pair}) = \\dfrac{3}{6} = \\dfrac{1}{2}$$\\n\\n$$\\boxed{P = \\dfrac{1}{2}}$$",
            explanation: "On compte le nombre d'issues favorables (les nombres pairs) et on le divise par le nombre total d'issues possibles.",
            difficulty: "intermediaire",
          },
          {
            id: "rev4-l1-e9",
            question: "Calcule $2^{-3}$ et écris le résultat sous forme de fraction.",
            type: "open",
            modelAnswer: "Une puissance négative correspond à l'inverse :\\n\\n$$2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$$\\n\\n$$\\boxed{\\dfrac{1}{8}}$$",
            explanation: "Par définition, $a^{-n} = \\dfrac{1}{a^n}$ pour $a \\neq 0$.",
            difficulty: "intermediaire",
          },
          {
            id: "rev4-l1-e10",
            question: "Une série statistique a pour valeurs $4, 7, 7, 9, 12, 15$. Détermine la médiane de cette série.",
            type: "open",
            modelAnswer: "La série est déjà rangée par ordre croissant et comporte $6$ valeurs (nombre pair).\\n\\nLa médiane est la moyenne des deux valeurs centrales (3ème et 4ème) : $7$ et $9$.\\n\\n$$\\text{Médiane} = \\dfrac{7+9}{2} = 8$$\\n\\n$$\\boxed{\\text{Médiane} = 8}$$",
            explanation: "Pour une série de taille paire, la médiane est la moyenne des deux valeurs centrales une fois la série rangée par ordre croissant.",
            difficulty: "intermediaire",
          },
          {
            id: "rev4-l1-e11",
            question: "Résous l'équation $2(x+3) = 5x - 6$.",
            type: "open",
            modelAnswer: "$$2(x+3) = 5x-6$$\\n\\n$$2x+6 = 5x-6$$\\n\\n$$6+6 = 5x-2x$$\\n\\n$$12 = 3x$$\\n\\n$$x = 4$$\\n\\n$$\\boxed{x = 4}$$",
            explanation: "On développe d'abord le membre de gauche, puis on regroupe tous les termes en $x$ d'un côté et les nombres de l'autre.",
            difficulty: "expert",
          },
          {
            id: "rev4-l1-e12",
            question: "Un triangle a pour côtés $AB=9$ cm, $AC=12$ cm et $BC=15$ cm. Ce triangle est-il rectangle ? Justifie en utilisant la réciproque du théorème de Pythagore.",
            type: "open",
            modelAnswer: "Le plus grand côté est $BC=15$ cm. On compare $BC^2$ avec $AB^2+AC^2$ :\\n\\n$$BC^2 = 15^2 = 225$$\\n\\n$$AB^2+AC^2 = 9^2+12^2 = 81+144=225$$\\n\\nComme $BC^2 = AB^2+AC^2$, d'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $A$.\\n\\n$$\\boxed{\\text{Oui, le triangle est rectangle en } A}$$",
            explanation: "La réciproque du théorème de Pythagore permet de prouver qu'un triangle est rectangle si l'égalité $BC^2=AB^2+AC^2$ est vérifiée pour le plus grand côté.",
            difficulty: "expert",
          },
          {
            id: "rev4-l1-e13",
            question: "Un cône de révolution a un rayon de base $r=6$ cm et une hauteur $h=10$ cm. Calcule son volume exact, puis une valeur approchée ($\\pi \\approx 3{,}14$).",
            type: "open",
            modelAnswer: "$$V = \\dfrac{\\pi r^2 h}{3} = \\dfrac{\\pi \\times 6^2 \\times 10}{3} = \\dfrac{\\pi \\times 36 \\times 10}{3} = \\dfrac{360\\pi}{3} = 120\\pi \\text{ cm}^3$$\\n\\nValeur approchée : $120 \\times 3{,}14 = 376{,}8 \\text{ cm}^3$.\\n\\n$$\\boxed{V = 120\\pi \\approx 376{,}8 \\text{ cm}^3}$$",
            explanation: "Le volume d'un cône est le tiers du volume du cylindre de même base et même hauteur : $V=\\dfrac{\\pi r^2 h}{3}$.",
            difficulty: "expert",
          },
          {
            id: "rev4-l1-e14",
            question: "On tire successivement deux boules avec remise dans une urne contenant $3$ boules rouges et $2$ boules vertes. Calcule la probabilité de tirer deux boules de la même couleur.",
            type: "open",
            modelAnswer: "$P(\\text{rouge}) = \\dfrac{3}{5}$, $P(\\text{verte}) = \\dfrac{2}{5}$.\\n\\n$$P(\\text{R,R}) = \\dfrac{3}{5}\\times\\dfrac{3}{5} = \\dfrac{9}{25}$$\\n\\n$$P(\\text{V,V}) = \\dfrac{2}{5}\\times\\dfrac{2}{5} = \\dfrac{4}{25}$$\\n\\n$$P(\\text{même couleur}) = \\dfrac{9}{25}+\\dfrac{4}{25} = \\dfrac{13}{25}$$\\n\\n$$\\boxed{P = \\dfrac{13}{25}}$$",
            explanation: "On additionne les probabilités des deux chemins favorables (rouge-rouge et vert-vert) dans l'arbre de probabilité, chaque chemin étant le produit des probabilités le long de ce chemin.",
            difficulty: "expert",
          },
          {
            id: "rev4-l1-e15",
            question: "Un jardinier veut installer une échelle de $5$ m contre un mur, le pied de l'échelle étant à $3$ m du mur. À quelle hauteur l'échelle touche-t-elle le mur ? Si on rapproche le pied de l'échelle à $2$ m du mur (échelle toujours de $5$ m), de combien la hauteur augmente-t-elle ?",
            type: "open",
            modelAnswer: "**Premier cas (pied à 3 m) :** d'après Pythagore, $h^2 = 5^2-3^2 = 25-9=16 \\implies h=\\sqrt{16}=4$ m.\\n\\n**Deuxième cas (pied à 2 m) :** $h'^2 = 5^2-2^2=25-4=21 \\implies h'=\\sqrt{21}\\approx4{,}58$ m.\\n\\nAugmentation de hauteur : $h'-h \\approx 4{,}58-4 = 0{,}58$ m.\\n\\n$$\\boxed{h=4 \\text{ m}, \\quad h' \\approx 4{,}58 \\text{ m}, \\quad \\text{augmentation} \\approx 0{,}58 \\text{ m}}$$",
            explanation: "On applique le théorème de Pythagore deux fois (l'échelle est l'hypoténuse constante), puis on compare les deux hauteurs obtenues pour calculer l'augmentation.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // 3ème — Révisions générales
  {
    id: "rev3-id",
    slug: "revisions-3eme",
    title: "Révisions générales — 3ème",
    description: "15 exercices progressifs (débutant, intermédiaire, expert) pour réviser tout le programme de 3ème : équations, fonctions, racines carrées, théorème de Thalès, trigonométrie, géométrie dans l'espace et probabilités.",
    schoolLevel: "3eme",
    subject: "algebre",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "🎯",
    lessons: [
      {
        id: "rev3-l1",
        slug: "bilan-progressif-3eme",
        title: "Bilan progressif : tout le programme de 3ème",
        durationMinutes: 25,
        content: `## Bilan de 3ème

Ce bilan rassemble les **grandes notions** du programme de 3ème : équations et inéquations, fonctions linéaires et affines, racines carrées, théorème de Thalès, trigonométrie, géométrie dans l'espace et probabilités.

Les $15$ exercices ci-dessous sont classés en trois niveaux de difficulté progressive :

- 🟢 **Débutant** (exercices 1 à 5) : applications directes des définitions et formules.
- 🟡 **Intermédiaire** (exercices 6 à 10) : exercices combinant deux notions ou demandant un calcul en plusieurs étapes.
- 🔴 **Expert** (exercices 11 à 15) : problèmes complets nécessitant de mobiliser plusieurs compétences du programme, comme au brevet.

> Ce bilan est un excellent entraînement pour le brevet des collèges : prends le temps de bien justifier chaque réponse !`,
        videoUrl: undefined,
        exercises: [
          {
            id: "rev3-l1-e1",
            question: "Résous l'équation $5x - 3 = 2x + 9$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 2$" },
              { id: "B", text: "$x = 4$" },
              { id: "C", text: "$x = 6$" },
              { id: "D", text: "$x = 3$" },
            ],
            correctId: "B",
            explanation: "$5x-2x = 9+3 \\implies 3x=12 \\implies x=4$.",
            difficulty: "debutant",
          },
          {
            id: "rev3-l1-e2",
            question: "Vrai ou faux : $\\sqrt{16} \\times \\sqrt{4} = \\sqrt{64}$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Vrai : $\\sqrt{a}\\times\\sqrt{b}=\\sqrt{a\\times b}$, donc $\\sqrt{16}\\times\\sqrt{4}=\\sqrt{64}=8$, et $4\\times2=8$ aussi. ✓",
            difficulty: "debutant",
          },
          {
            id: "rev3-l1-e3",
            question: "Quelle est l'image de $x=3$ par la fonction $f(x) = 2x+1$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$7$" },
              { id: "D", text: "$8$" },
            ],
            correctId: "C",
            explanation: "$f(3) = 2\\times3+1 = 6+1=7$.",
            difficulty: "debutant",
          },
          {
            id: "rev3-l1-e4",
            question: "Dans un triangle rectangle, si $\\theta$ est un angle aigu, $\\sin(\\theta)$ est égal à :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{\\text{opposé}}{\\text{hypoténuse}}$" },
              { id: "B", text: "$\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$" },
              { id: "C", text: "$\\dfrac{\\text{opposé}}{\\text{adjacent}}$" },
              { id: "D", text: "$\\dfrac{\\text{hypoténuse}}{\\text{opposé}}$" },
            ],
            correctId: "A",
            explanation: "Par définition, $\\sin(\\theta) = \\dfrac{\\text{côté opposé}}{\\text{hypoténuse}}$.",
            difficulty: "debutant",
          },
          {
            id: "rev3-l1-e5",
            question: "Calcule le volume d'une boule de rayon $r=3$ cm (valeur exacte en fonction de $\\pi$).",
            type: "mcq",
            options: [
              { id: "A", text: "$12\\pi \\text{ cm}^3$" },
              { id: "B", text: "$27\\pi \\text{ cm}^3$" },
              { id: "C", text: "$36\\pi \\text{ cm}^3$" },
              { id: "D", text: "$9\\pi \\text{ cm}^3$" },
            ],
            correctId: "C",
            explanation: "$V = \\dfrac{4}{3}\\pi r^3 = \\dfrac{4}{3}\\pi \\times 27 = 36\\pi \\text{ cm}^3$.",
            difficulty: "debutant",
          },
          {
            id: "rev3-l1-e6",
            question: "Résous l'inéquation $4x + 3 \\leqslant 19$ et représente la solution sur une droite graduée (décris-la).",
            type: "open",
            modelAnswer: "$$4x+3 \\leqslant 19$$\\n\\n$$4x \\leqslant 16$$\\n\\n$$x \\leqslant 4$$\\n\\nSur une droite graduée, on représente cette solution par une demi-droite partant de $4$ (point plein car $\\leqslant$) et allant vers $-\\infty$.\\n\\n$$\\boxed{x \\leqslant 4}$$",
            explanation: "On résout l'inéquation comme une équation (le sens de l'inégalité ne change pas car on divise par un nombre positif), puis on représente la solution comme un intervalle sur la droite numérique.",
            difficulty: "intermediaire",
          },
          {
            id: "rev3-l1-e7",
            question: "Simplifie $\\sqrt{75}$ en faisant apparaître le plus grand carré parfait possible.",
            type: "open",
            modelAnswer: "$$75 = 25 \\times 3$$\\n\\n$$\\sqrt{75} = \\sqrt{25\\times3} = \\sqrt{25}\\times\\sqrt{3} = 5\\sqrt{3}$$\\n\\n$$\\boxed{5\\sqrt{3}}$$",
            explanation: "On cherche le plus grand carré parfait diviseur de $75$ (ici $25$), puis on utilise la propriété $\\sqrt{a\\times b}=\\sqrt{a}\\times\\sqrt{b}$.",
            difficulty: "intermediaire",
          },
          {
            id: "rev3-l1-e8",
            question: "Dans un triangle $ABC$, les points $M$ et $N$ sont situés respectivement sur $[AB]$ et $[AC]$ tels que $(MN) \\parallel (BC)$, avec $AM=4$, $AB=10$ et $AC=15$. Calcule $AN$.",
            type: "open",
            modelAnswer: "D'après le théorème de Thalès :\\n\\n$$\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$$\\n\\n$$\\dfrac{4}{10} = \\dfrac{AN}{15}$$\\n\\n$$AN = \\dfrac{4\\times15}{10} = \\dfrac{60}{10} = 6$$\\n\\n$$\\boxed{AN = 6}$$",
            explanation: "Le théorème de Thalès permet d'établir des rapports égaux entre les longueurs des côtés de deux triangles formés par des droites parallèles.",
            difficulty: "intermediaire",
          },
          {
            id: "rev3-l1-e9",
            question: "Dans un triangle rectangle, l'angle aigu mesure $\\theta$, le côté adjacent mesure $7$ cm et l'hypoténuse mesure $14$ cm. Calcule $\\theta$ (au degré près).",
            type: "open",
            modelAnswer: "$$\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}} = \\dfrac{7}{14} = 0{,}5$$\\n\\n$$\\theta = \\cos^{-1}(0{,}5) = 60°$$\\n\\n$$\\boxed{\\theta = 60°}$$",
            explanation: "On utilise le cosinus car on connaît le côté adjacent et l'hypoténuse, puis on applique la fonction réciproque $\\cos^{-1}$ pour retrouver l'angle.",
            difficulty: "intermediaire",
          },
          {
            id: "rev3-l1-e10",
            question: "On tire une carte dans un jeu de $32$ cartes (8 cartes par couleur : pique, cœur, carreau, trèfle). Quelle est la probabilité de tirer un cœur ou un roi ?",
            type: "open",
            modelAnswer: "$P(\\text{cœur}) = \\dfrac{8}{32}$. Il y a $4$ rois (un par couleur), donc $P(\\text{roi}) = \\dfrac{4}{32}$.\\n\\nLe roi de cœur est compté dans les deux : il faut le soustraire une fois pour ne pas le compter deux fois.\\n\\n$$P(\\text{cœur ou roi}) = \\dfrac{8}{32}+\\dfrac{4}{32}-\\dfrac{1}{32} = \\dfrac{11}{32}$$\\n\\n$$\\boxed{P = \\dfrac{11}{32}}$$",
            explanation: "Quand deux événements peuvent se produire en même temps (ici, le roi de cœur), on additionne leurs probabilités puis on soustrait la probabilité de leur intersection pour éviter de compter deux fois.",
            difficulty: "intermediaire",
          },
          {
            id: "rev3-l1-e11",
            question: "Un triangle $ABC$ est rectangle en $A$ avec $AB=6$ cm et l'angle $\\widehat{ABC}=40°$. Calcule $AC$ et $BC$ au dixième de cm près.",
            type: "open",
            modelAnswer: "$AC$ est opposé à l'angle $\\widehat{ABC}$, $AB$ est adjacent : on utilise la tangente.\\n\\n$$\\tan(40°) = \\dfrac{AC}{AB} \\implies AC = AB \\times \\tan(40°) = 6 \\times \\tan(40°) \\approx 6 \\times 0{,}839 \\approx 5{,}0 \\text{ cm}$$\\n\\nPour $BC$ (hypoténuse), on utilise le cosinus :\\n\\n$$\\cos(40°) = \\dfrac{AB}{BC} \\implies BC = \\dfrac{AB}{\\cos(40°)} = \\dfrac{6}{\\cos(40°)} \\approx \\dfrac{6}{0{,}766} \\approx 7{,}8 \\text{ cm}$$\\n\\n$$\\boxed{AC \\approx 5{,}0 \\text{ cm}, \\quad BC \\approx 7{,}8 \\text{ cm}}$$",
            explanation: "On choisit la fonction trigonométrique adaptée selon les côtés connus et recherchés : tangente pour relier les deux côtés non-hypoténuse, cosinus ou sinus pour relier un côté à l'hypoténuse.",
            difficulty: "expert",
          },
          {
            id: "rev3-l1-e12",
            question: "Soit $f(x) = 3x - 2$ et $g(x) = -x + 6$ deux fonctions affines. Détermine les coordonnées du point d'intersection de leurs représentations graphiques.",
            type: "open",
            modelAnswer: "On cherche $x$ tel que $f(x)=g(x)$ :\\n\\n$$3x-2 = -x+6$$\\n\\n$$3x+x = 6+2$$\\n\\n$$4x=8 \\implies x=2$$\\n\\nOn calcule alors $y$ : $f(2) = 3\\times2-2=4$.\\n\\nLe point d'intersection est $(2;4)$.\\n\\n$$\\boxed{(2;4)}$$",
            explanation: "Le point d'intersection de deux droites est le point dont les coordonnées vérifient les deux équations simultanément ; on résout donc $f(x)=g(x)$.",
            difficulty: "expert",
          },
          {
            id: "rev3-l1-e13",
            question: "Une sphère de rayon $R=15$ cm est coupée par un plan situé à $9$ cm du centre. Calcule l'aire du disque de section.",
            type: "open",
            modelAnswer: "On calcule d'abord le rayon $r$ du disque de section avec Pythagore : $r^2 = R^2-d^2 = 15^2-9^2=225-81=144 \\implies r=12$ cm.\\n\\nAire du disque : $\\mathcal{A} = \\pi r^2 = \\pi \\times 144 = 144\\pi \\text{ cm}^2$.\\n\\n$$\\boxed{\\mathcal{A} = 144\\pi \\text{ cm}^2 \\approx 452{,}4 \\text{ cm}^2}$$",
            explanation: "On combine le théorème de Pythagore (pour trouver le rayon du disque de section à partir du rayon de la sphère et de la distance au centre) avec la formule de l'aire du disque.",
            difficulty: "expert",
          },
          {
            id: "rev3-l1-e14",
            question: "Démontre que pour tout nombre $x$, $(x+3)^2 - (x-3)^2 = 12x$.",
            type: "open",
            modelAnswer: "On développe chaque carré :\\n\\n$$(x+3)^2 = x^2+6x+9$$\\n\\n$$(x-3)^2 = x^2-6x+9$$\\n\\nOn soustrait :\\n\\n$$(x+3)^2-(x-3)^2 = (x^2+6x+9)-(x^2-6x+9) = x^2+6x+9-x^2+6x-9 = 12x$$\\n\\n$$\\boxed{(x+3)^2-(x-3)^2 = 12x \\text{, ce qui est l'égalité demandée}}$$",
            explanation: "On développe les deux identités remarquables séparément avant de soustraire, en faisant bien attention à distribuer le signe « moins » sur tous les termes du second développement.",
            difficulty: "expert",
          },
          {
            id: "rev3-l1-e15",
            question: "Un magasin vend des tee-shirts à un prix qui dépend de la quantité : $f(x) = 8x$ si $x \\leqslant 10$ (où $x$ est le nombre de tee-shirts), et $f(x) = 6x + 20$ si $x > 10$ (tarif dégressif). Pour quelle quantité $x$ (avec $x>10$) les deux tarifs seraient-ils égaux si on les comparait au même prix ? Résous $8x = 6x+20$ et vérifie la cohérence du résultat avec la condition $x>10$.",
            type: "open",
            modelAnswer: "On résout $8x = 6x+20$ :\\n\\n$$8x-6x=20$$\\n\\n$$2x=20 \\implies x=10$$\\n\\nOn trouve $x=10$, qui correspond exactement à la limite entre les deux tarifs (et non strictement $x>10$). Cela signifie que les deux formules coïncident précisément à $x=10$ tee-shirts, ce qui est cohérent : c'est le seuil de changement de tarif. Pour $x>10$, le tarif dégressif $f(x)=6x+20$ devient progressivement plus avantageux que $8x$.\\n\\n$$\\boxed{x=10 \\text{ : c'est exactement le seuil de changement de tarif}}$$",
            explanation: "Ce problème teste la capacité à résoudre une équation issue d'une situation concrète à tarifs multiples, et à interpréter le résultat par rapport au domaine de validité de chaque formule.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Nombres et calculs
  // ─────────────────────────────────────────────
  {
    id: "nc2-id",
    slug: "nombres-et-calculs-2nde",
    title: "Nombres et calculs",
    description: "Révisez les ensembles de nombres, la valeur absolue, le calcul avec les racines carrées et les puissances, et découvrez les identités remarquables.",
    schoolLevel: "2nde",
    subject: "arithmetique",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🔢",
    lessons: [
      {
        id: "nc2-l1",
        slug: "ensembles-de-nombres-et-valeur-absolue",
        title: "Ensembles de nombres et valeur absolue",
        durationMinutes: 14,
        content: `## Les ensembles de nombres

Depuis le collège, vous avez rencontré différents types de nombres. Au lycée, on les organise en **ensembles emboîtés** :

| Ensemble | Nom | Exemples |
|---|---|---|
| $\\mathbb{N}$ | Entiers naturels | $0, 1, 2, 3, \\dots$ |
| $\\mathbb{Z}$ | Entiers relatifs | $\\dots, -2, -1, 0, 1, 2, \\dots$ |
| $\\mathbb{D}$ | Nombres décimaux | $3{,}25\\ ;\\ -0{,}7\\ ;\\ 2$ |
| $\\mathbb{Q}$ | Nombres rationnels | $\\dfrac{1}{3}\\ ;\\ \\dfrac{-5}{2}$ |
| $\\mathbb{R}$ | Nombres réels | $\\sqrt{2}\\ ;\\ \\pi\\ ;\\ -\\dfrac{1}{3}$ |

> **Remarque :** Ces ensembles sont emboîtés les uns dans les autres :
> $$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$
> Un nombre comme $\\sqrt{2}$ ou $\\pi$ appartient à $\\mathbb{R}$ mais pas à $\\mathbb{Q}$ : on dit qu'il est **irrationnel**.

### Reconnaître l'appartenance à un ensemble

- $\\dfrac{1}{3} = 0{,}333\\ldots$ a une écriture décimale infinie : ce n'est **pas** un décimal, mais c'est un **rationnel** ($\\dfrac{1}{3} \\in \\mathbb{Q}$).
- $\\sqrt{2} \\approx 1{,}414\\ldots$ a une écriture décimale infinie **non périodique** : il est irrationnel, donc $\\sqrt{2} \\in \\mathbb{R}$ mais $\\sqrt{2} \\notin \\mathbb{Q}$.

## La valeur absolue

La **valeur absolue** d'un nombre réel $x$, notée $|x|$, est sa distance à $0$ sur la droite numérique.

$$|x| = \\begin{cases} x & \\text{si } x \\geqslant 0 \\\\ -x & \\text{si } x < 0 \\end{cases}$$

**Exemples :** $|7| = 7 \\qquad |-7| = 7 \\qquad |0| = 0$

> **Propriété clé :** Pour deux réels $a$ et $b$, la distance entre $a$ et $b$ sur la droite numérique est $|a-b|$.

**Exemple :** la distance entre $-3$ et $5$ est $|5-(-3)| = |8| = 8$.`,
        exercises: [
          {
            id: "nc2-l1-e1",
            question: "À quel ensemble appartient $-5$ (le plus petit ensemble possible parmi $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$) ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\mathbb{N}$" },
              { id: "B", text: "$\\mathbb{Z}$" },
              { id: "C", text: "$\\mathbb{Q}$ uniquement" },
              { id: "D", text: "Aucun de ces ensembles" },
            ],
            correctId: "B",
            explanation: "$-5$ est un entier négatif : il appartient à $\\mathbb{Z}$ (et donc aussi à $\\mathbb{Q}$ et $\\mathbb{R}$), mais pas à $\\mathbb{N}$ qui ne contient que les entiers positifs ou nuls.",
            difficulty: "debutant",
          },
          {
            id: "nc2-l1-e2",
            question: "Que vaut $|-12|$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$-12$" },
              { id: "B", text: "$12$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "B",
            explanation: "La valeur absolue d'un nombre négatif est son opposé : $|-12| = 12$.",
            difficulty: "debutant",
          },
          {
            id: "nc2-l1-e3",
            question: "$\\sqrt{2}$ est un nombre rationnel.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "$\\sqrt{2}$ a une écriture décimale infinie non périodique : il ne peut pas s'écrire sous forme de fraction $\\dfrac{p}{q}$. C'est un nombre irrationnel, il appartient à $\\mathbb{R}$ mais pas à $\\mathbb{Q}$.",
            difficulty: "intermediaire",
          },
          {
            id: "nc2-l1-e4",
            question: "Quelle est la distance entre $-4$ et $9$ sur la droite numérique ?",
            type: "mcq",
            options: [
              { id: "A", text: "$13$" },
              { id: "B", text: "$5$" },
              { id: "C", text: "$-13$" },
              { id: "D", text: "$9$" },
            ],
            correctId: "A",
            explanation: "La distance entre $a$ et $b$ est $|a-b|$. Ici $|9 - (-4)| = |13| = 13$.",
            difficulty: "intermediaire",
          },
          {
            id: "nc2-l1-e5",
            question: "Résous l'équation $|x - 3| = 5$ et donne les deux solutions.",
            type: "open",
            modelAnswer: "$|x-3| = 5$ signifie que la distance entre $x$ et $3$ vaut $5$.\\n\\nCela donne deux cas :\\n\\n$$x - 3 = 5 \\quad \\text{ou} \\quad x - 3 = -5$$\\n\\n$$x = 8 \\quad \\text{ou} \\quad x = -2$$\\n\\n**Vérification :** $|8-3| = |5| = 5$ ✓ et $|-2-3| = |-5| = 5$ ✓\\n\\n$$\\boxed{x = 8 \\text{ ou } x = -2}$$",
            explanation: "Une équation du type $|x-a| = r$ (avec $r > 0$) a toujours deux solutions, situées à distance $r$ de $a$ de part et d'autre.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "nc2-l2",
        slug: "racines-carrees-et-puissances",
        title: "Calcul avec racines carrées et puissances",
        durationMinutes: 16,
        content: `## Règles de calcul sur les racines carrées

Pour $a \\geqslant 0$ et $b \\geqslant 0$ :

$$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\qquad \\qquad \\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{a}}{\\sqrt{b}} \\ \\ (b \\neq 0)$$

> **Attention :** $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$ en général ! Par exemple $\\sqrt{9+16} = \\sqrt{25} = 5$, alors que $\\sqrt{9}+\\sqrt{16} = 3+4=7$.

### Simplifier une racine carrée

Pour simplifier $\\sqrt{75}$, on cherche le plus grand carré parfait qui divise $75$ :

$$\\sqrt{75} = \\sqrt{25 \\times 3} = \\sqrt{25} \\times \\sqrt{3} = 5\\sqrt{3}$$

### Rendre un dénominateur rationnel

$$\\dfrac{1}{\\sqrt{2}} = \\dfrac{1 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$$

## Règles de calcul sur les puissances

Pour $a \\neq 0$, $b\\neq 0$ et $n, p$ entiers relatifs :

$$a^n \\times a^p = a^{n+p} \\qquad \\dfrac{a^n}{a^p} = a^{n-p} \\qquad (a^n)^p = a^{n \\times p}$$

$$(a \\times b)^n = a^n \\times b^n \\qquad a^{-n} = \\dfrac{1}{a^n} \\qquad a^0 = 1$$

**Exemple :** $\\dfrac{2^5 \\times 2^3}{2^6} = 2^{5+3-6} = 2^2 = 4$

## Identités remarquables

Trois égalités fondamentales, valables pour tous réels $a$ et $b$ :

$$(a+b)^2 = a^2 + 2ab + b^2$$
$$(a-b)^2 = a^2 - 2ab + b^2$$
$$(a-b)(a+b) = a^2 - b^2$$

Ces identités permettent de **développer** une expression factorisée, ou inversement de **factoriser** une expression développée.

**Exemple (développer) :** $(x+3)^2 = x^2 + 2\\times x \\times 3 + 3^2 = x^2 + 6x + 9$

**Exemple (factoriser) :** $x^2 - 16 = x^2 - 4^2 = (x-4)(x+4)$`,
        exercises: [
          {
            id: "nc2-l2-e1",
            question: "Simplifie $\\sqrt{48}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$4\\sqrt{3}$" },
              { id: "B", text: "$2\\sqrt{12}$" },
              { id: "C", text: "$16\\sqrt{3}$" },
              { id: "D", text: "$6\\sqrt{2}$" },
            ],
            correctId: "A",
            explanation: "$\\sqrt{48} = \\sqrt{16 \\times 3} = \\sqrt{16}\\times\\sqrt{3} = 4\\sqrt{3}$. $16$ est le plus grand carré parfait divisant $48$.",
            difficulty: "debutant",
          },
          {
            id: "nc2-l2-e2",
            question: "Que vaut $3^{-2}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{9}$" },
              { id: "B", text: "$-9$" },
              { id: "C", text: "$-6$" },
              { id: "D", text: "$9$" },
            ],
            correctId: "A",
            explanation: "$3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}$.",
            difficulty: "debutant",
          },
          {
            id: "nc2-l2-e3",
            question: "$\\sqrt{a+b}$ est toujours égal à $\\sqrt{a}+\\sqrt{b}$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "C'est une erreur fréquente. Par exemple $\\sqrt{16+9}=\\sqrt{25}=5$ alors que $\\sqrt{16}+\\sqrt{9}=4+3=7$. La racine carrée n'est pas additive.",
            difficulty: "intermediaire",
          },
          {
            id: "nc2-l2-e4",
            question: "Développe $(x-5)^2$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x^2 - 10x + 25$" },
              { id: "B", text: "$x^2 - 25$" },
              { id: "C", text: "$x^2 + 25$" },
              { id: "D", text: "$x^2 - 5x + 25$" },
            ],
            correctId: "A",
            explanation: "On applique $(a-b)^2 = a^2-2ab+b^2$ avec $a=x$, $b=5$ : $x^2 - 2\\times x \\times 5 + 5^2 = x^2-10x+25$.",
            difficulty: "intermediaire",
          },
          {
            id: "nc2-l2-e5",
            question: "Simplifie l'écriture $A = \\sqrt{20} + 3\\sqrt{5} - \\sqrt{45}$ pour obtenir un résultat de la forme $k\\sqrt{5}$.",
            type: "open",
            modelAnswer: "On simplifie chaque racine séparément.\\n\\n$$\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}$$\\n\\n$$\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}$$\\n\\nDonc :\\n\\n$$A = 2\\sqrt{5} + 3\\sqrt{5} - 3\\sqrt{5} = (2+3-3)\\sqrt{5} = 2\\sqrt{5}$$\\n\\n$$\\boxed{A = 2\\sqrt{5}}$$",
            explanation: "On factorise chaque terme par le plus grand carré parfait possible pour obtenir un facteur commun $\\sqrt{5}$, puis on additionne les coefficients comme pour des termes semblables.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "nc2-l3",
        slug: "identites-remarquables-approfondissement",
        title: "Identités remarquables et applications",
        durationMinutes: 14,
        content: `## Retour sur les identités remarquables

$$(a+b)^2 = a^2+2ab+b^2 \\qquad (a-b)^2 = a^2-2ab+b^2 \\qquad (a-b)(a+b)=a^2-b^2$$

### Utiliser les identités pour calculer mentalement

Ces formules permettent de calculer rapidement certains carrés ou produits.

**Exemple :** $99^2 = (100-1)^2 = 100^2 - 2\\times100\\times1 + 1^2 = 10000-200+1 = 9801$

**Exemple :** $52 \\times 48 = (50+2)(50-2) = 50^2 - 2^2 = 2500-4=2496$

### Factoriser avec les identités remarquables

Reconnaître la forme $a^2-b^2$, $a^2+2ab+b^2$ ou $a^2-2ab+b^2$ permet de factoriser une expression.

**Exemple :** $9x^2 - 25 = (3x)^2 - 5^2 = (3x-5)(3x+5)$

**Exemple :** $x^2+10x+25 = x^2 + 2\\times x \\times 5 + 5^2 = (x+5)^2$

### Méthode pour factoriser $a^2-b^2$

1. Écrire chaque terme comme un carré : $a^2$ et $b^2$.
2. Identifier $a$ et $b$ (en prenant la racine carrée).
3. Appliquer $(a-b)(a+b)$.

> **Astuce :** Pour reconnaître un carré parfait comme $25$, $49$, $100$, $x^2$, $4x^2$, $9x^2$… il faut être à l'aise avec les carrés des nombres usuels et des racines de variables.`,
        exercises: [
          {
            id: "nc2-l3-e1",
            question: "Factorise $x^2 - 49$.",
            type: "mcq",
            options: [
              { id: "A", text: "$(x-7)(x+7)$" },
              { id: "B", text: "$(x-49)(x+1)$" },
              { id: "C", text: "$(x-7)^2$" },
              { id: "D", text: "Cette expression ne se factorise pas" },
            ],
            correctId: "A",
            explanation: "$x^2-49 = x^2 - 7^2$, qui est de la forme $a^2-b^2 = (a-b)(a+b)$ avec $a=x$ et $b=7$.",
            difficulty: "debutant",
          },
          {
            id: "nc2-l3-e2",
            question: "$x^2+6x+9$ est égal à :",
            type: "mcq",
            options: [
              { id: "A", text: "$(x+3)^2$" },
              { id: "B", text: "$(x+6)^2$" },
              { id: "C", text: "$(x-3)^2$" },
              { id: "D", text: "$(x+9)^2$" },
            ],
            correctId: "A",
            explanation: "$x^2+6x+9 = x^2 + 2\\times x \\times 3 + 3^2 = (x+3)^2$.",
            difficulty: "debutant",
          },
          {
            id: "nc2-l3-e3",
            question: "L'identité $(a-b)(a+b) = a^2-b^2$ permet de calculer $98 \\times 102$ facilement en l'écrivant $(100-2)(100+2)$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$98\\times102 = (100-2)(100+2) = 100^2-2^2 = 10000-4=9996$, ce qui est bien plus rapide qu'une multiplication directe.",
            difficulty: "intermediaire",
          },
          {
            id: "nc2-l3-e4",
            question: "En utilisant une identité remarquable, calcule $101^2$.",
            type: "mcq",
            options: [
              { id: "A", text: "$10201$" },
              { id: "B", text: "$10101$" },
              { id: "C", text: "$10301$" },
              { id: "D", text: "$11001$" },
            ],
            correctId: "A",
            explanation: "$101^2 = (100+1)^2 = 100^2+2\\times100\\times1+1^2 = 10000+200+1=10201$.",
            difficulty: "intermediaire",
          },
          {
            id: "nc2-l3-e5",
            question: "Factorise complètement l'expression $E = 4x^2 - 9$ puis utilise cette factorisation pour résoudre l'équation $E = 0$.",
            type: "open",
            modelAnswer: "On reconnaît une différence de carrés :\\n\\n$$E = 4x^2-9 = (2x)^2 - 3^2 = (2x-3)(2x+3)$$\\n\\nPour résoudre $E=0$, on utilise le fait qu'un produit est nul si et seulement si l'un des facteurs est nul :\\n\\n$$(2x-3)(2x+3) = 0 \\implies 2x-3=0 \\quad \\text{ou} \\quad 2x+3=0$$\\n\\n$$x = \\dfrac{3}{2} \\quad \\text{ou} \\quad x = -\\dfrac{3}{2}$$\\n\\n$$\\boxed{E = (2x-3)(2x+3) \\quad ; \\quad x = \\dfrac{3}{2} \\text{ ou } x=-\\dfrac{3}{2}}$$",
            explanation: "La factorisation transforme l'équation en un produit de facteurs : on utilise alors la propriété du produit nul, fondamentale en algèbre.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Équations et inéquations
  // ─────────────────────────────────────────────
  {
    id: "eqi2-id",
    slug: "equations-inequations-2nde",
    title: "Équations et inéquations",
    description: "Résolvez des équations du premier degré, mettez un problème en équation, résolvez des inéquations et un système de deux équations à deux inconnues.",
    schoolLevel: "2nde",
    subject: "algebre",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "⚖️",
    lessons: [
      {
        id: "eqi2-l1",
        slug: "equations-du-premier-degre",
        title: "Résoudre une équation du premier degré",
        durationMinutes: 14,
        content: `## Équation du premier degré

Une **équation du premier degré** à une inconnue $x$ peut se mettre sous la forme $ax+b=0$ (avec $a \\neq 0$), ou plus généralement comporter $x$ des deux côtés du signe égal.

### Méthode de résolution

1. Développer les deux membres si nécessaire.
2. Regrouper les termes en $x$ d'un côté, les nombres de l'autre, en utilisant les mêmes opérations des deux côtés de l'égalité.
3. Isoler $x$ en divisant par son coefficient.

**Exemple :** Résoudre $3x + 5 = 2x - 1$

$$3x - 2x = -1-5$$
$$x = -6$$

> **Règle fondamentale :** on peut ajouter, soustraire, multiplier ou diviser (par un nombre non nul) **les deux membres** d'une égalité sans en changer les solutions.

### Mettre un problème en équation

Pour résoudre un problème concret :
1. Choisir une inconnue et la nommer (par exemple $x$).
2. Traduire l'énoncé par une équation.
3. Résoudre l'équation.
4. Vérifier que la solution est cohérente avec le contexte, et conclure par une phrase.

**Exemple :** *La somme d'un nombre et de son double est égale à 21. Trouver ce nombre.*
On pose $x$ le nombre cherché : $x + 2x = 21 \\implies 3x=21 \\implies x=7$.`,
        exercises: [
          {
            id: "eqi2-l1-e1",
            question: "Résous l'équation $2x + 7 = 15$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x=4$" },
              { id: "B", text: "$x=11$" },
              { id: "C", text: "$x=8$" },
              { id: "D", text: "$x=22$" },
            ],
            correctId: "A",
            explanation: "$2x = 15-7 = 8 \\implies x = 4$.",
            difficulty: "debutant",
          },
          {
            id: "eqi2-l1-e2",
            question: "Résous l'équation $5x - 3 = 3x + 9$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x=6$" },
              { id: "B", text: "$x=3$" },
              { id: "C", text: "$x=12$" },
              { id: "D", text: "$x=-6$" },
            ],
            correctId: "A",
            explanation: "$5x-3x = 9+3 \\implies 2x=12 \\implies x=6$.",
            difficulty: "debutant",
          },
          {
            id: "eqi2-l1-e3",
            question: "On peut diviser les deux membres d'une équation par n'importe quel nombre, y compris $0$, sans changer les solutions.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "La division par $0$ n'est jamais autorisée : on ne peut diviser les deux membres d'une équation que par un nombre **non nul**.",
            difficulty: "intermediaire",
          },
          {
            id: "eqi2-l1-e4",
            question: "Résous $4(x-2) = 2x + 6$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x=7$" },
              { id: "B", text: "$x=2$" },
              { id: "C", text: "$x=4$" },
              { id: "D", text: "$x=-7$" },
            ],
            correctId: "A",
            explanation: "On développe : $4x-8=2x+6 \\implies 2x=14 \\implies x=7$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqi2-l1-e5",
            question: "La somme de trois entiers consécutifs vaut $72$. Détermine ces trois entiers en mettant le problème en équation.",
            type: "open",
            modelAnswer: "On note $x$ le plus petit des trois entiers consécutifs. Les trois entiers s'écrivent alors $x$, $x+1$ et $x+2$.\\n\\nLeur somme vaut $72$ :\\n\\n$$x + (x+1) + (x+2) = 72$$\\n\\n$$3x + 3 = 72$$\\n\\n$$3x = 69$$\\n\\n$$x = 23$$\\n\\nLes trois entiers consécutifs sont donc $23$, $24$ et $25$.\\n\\n**Vérification :** $23+24+25 = 72$ ✓\\n\\n$$\\boxed{23,\\ 24,\\ 25}$$",
            explanation: "La méthode consiste à nommer l'inconnue (ici le plus petit entier), traduire l'énoncé en équation, résoudre, puis vérifier la cohérence du résultat avec le contexte.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "eqi2-l2",
        slug: "inequations-du-premier-degre",
        title: "Résoudre une inéquation",
        durationMinutes: 14,
        content: `## Inéquations du premier degré

Une **inéquation** compare deux expressions à l'aide de $<$, $>$, $\\leqslant$ ou $\\geqslant$. Résoudre une inéquation, c'est trouver l'ensemble de toutes les valeurs de $x$ qui vérifient l'inégalité.

### Règles de résolution

On résout une inéquation comme une équation, **à une exception près** :

> **Règle essentielle :** quand on multiplie ou on divise les deux membres d'une inégalité par un nombre **négatif**, le sens de l'inégalité **change** (s'inverse).

**Exemple :** Résoudre $-2x + 3 > 7$

$$-2x > 7-3$$
$$-2x > 4$$

On divise par $-2$ (négatif) : le sens change.

$$x < -2$$

### Représenter la solution sur une droite graduée

L'ensemble des solutions $x < -2$ se représente par une demi-droite, avec un **crochet ouvert** (ou un rond vide) en $-2$ car $-2$ n'est pas inclus.

Pour $x \\leqslant 5$, on utilise un **crochet fermé** (ou un rond plein) en $5$ car $5$ est inclus dans les solutions.

### Notation par intervalle

- $x < -2$ se note $x \\in\\ ]-\\infty\\ ;\\ -2[$
- $x \\leqslant 5$ se note $x \\in\\ ]-\\infty\\ ;\\ 5]$
- $x \\geqslant -1$ se note $x \\in [-1\\ ;\\ +\\infty[$`,
        exercises: [
          {
            id: "eqi2-l2-e1",
            question: "Résous l'inéquation $3x - 5 \\leqslant 7$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x \\leqslant 4$" },
              { id: "B", text: "$x \\geqslant 4$" },
              { id: "C", text: "$x \\leqslant 2$" },
              { id: "D", text: "$x \\leqslant 12$" },
            ],
            correctId: "A",
            explanation: "$3x \\leqslant 12 \\implies x \\leqslant 4$ (on divise par $3$, positif, le sens ne change pas).",
            difficulty: "debutant",
          },
          {
            id: "eqi2-l2-e2",
            question: "Quand on multiplie les deux membres d'une inégalité par un nombre négatif, le sens de l'inégalité :",
            type: "mcq",
            options: [
              { id: "A", text: "s'inverse" },
              { id: "B", text: "reste identique" },
              { id: "C", text: "devient une égalité" },
              { id: "D", text: "n'existe plus" },
            ],
            correctId: "A",
            explanation: "C'est la règle fondamentale des inéquations : multiplier ou diviser par un nombre négatif inverse le sens de l'inégalité.",
            difficulty: "debutant",
          },
          {
            id: "eqi2-l2-e3",
            question: "L'inéquation $x \\geqslant 3$ se représente sur une droite graduée par un crochet ouvert en $3$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Puisque $3$ est une solution de $x \\geqslant 3$ (l'inégalité est large), on représente cela par un crochet **fermé** (ou un point plein) en $3$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqi2-l2-e4",
            question: "Résous $-4x + 1 < 9$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x > -2$" },
              { id: "B", text: "$x < -2$" },
              { id: "C", text: "$x > 2$" },
              { id: "D", text: "$x < 2$" },
            ],
            correctId: "A",
            explanation: "$-4x < 8$. On divise par $-4$ (négatif), le sens s'inverse : $x > -2$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqi2-l2-e5",
            question: "Résous l'inéquation $5(x-1) \\geqslant 3x + 7$ et écris la solution sous forme d'intervalle.",
            type: "open",
            modelAnswer: "On développe le membre de gauche :\\n\\n$$5x - 5 \\geqslant 3x+7$$\\n\\nOn regroupe les termes en $x$ à gauche et les nombres à droite :\\n\\n$$5x-3x \\geqslant 7+5$$\\n\\n$$2x \\geqslant 12$$\\n\\nOn divise par $2$ (positif), le sens ne change pas :\\n\\n$$x \\geqslant 6$$\\n\\n$$\\boxed{x \\in [6\\ ;\\ +\\infty[}$$",
            explanation: "On développe, on regroupe les termes, puis on divise par le coefficient de $x$ en faisant attention au signe de ce coefficient.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "eqi2-l3",
        slug: "systeme-de-deux-equations",
        title: "Système de deux équations à deux inconnues",
        durationMinutes: 16,
        content: `## Qu'est-ce qu'un système d'équations ?

Un **système de deux équations à deux inconnues** $x$ et $y$ est un ensemble de deux équations qui doivent être vérifiées **simultanément**. On le note avec une accolade :

$$\\begin{cases} ax + by = c \\\\ a'x+b'y = c' \\end{cases}$$

Résoudre ce système, c'est trouver le (ou les) couple(s) $(x\\ ;\\ y)$ qui vérifient les deux équations à la fois.

## Méthode par substitution

On exprime une inconnue en fonction de l'autre dans une équation, puis on remplace dans la seconde.

**Exemple :** $\\begin{cases} y = 2x+1 \\\\ 3x+y=11 \\end{cases}$

On remplace $y$ par $2x+1$ dans la deuxième équation :

$$3x + (2x+1) = 11 \\implies 5x+1=11 \\implies 5x=10 \\implies x=2$$

On revient à la première équation : $y = 2\\times2+1 = 5$.

**Solution :** le couple $(2\\ ;\\ 5)$.

## Méthode par combinaison linéaire

On multiplie une ou les deux équations pour faire apparaître des coefficients opposés sur une inconnue, puis on additionne.

**Exemple :** $\\begin{cases} 2x+3y=16 \\\\ 2x-y=4 \\end{cases}$

On soustrait la deuxième équation à la première (les termes en $x$ s'annulent) :

$$(2x+3y) - (2x-y) = 16-4 \\implies 4y=12 \\implies y=3$$

On remplace dans la deuxième équation : $2x-3=4 \\implies x=3{,}5$.

**Solution :** le couple $(3{,}5\\ ;\\ 3)$.

> **Vérification :** il est toujours conseillé de vérifier le couple solution dans les **deux** équations initiales.`,
        exercises: [
          {
            id: "eqi2-l3-e1",
            question: "Un système de deux équations à deux inconnues $x$ et $y$ admet en général comme solution :",
            type: "mcq",
            options: [
              { id: "A", text: "un couple de valeurs $(x\\ ;\\ y)$" },
              { id: "B", text: "une seule valeur" },
              { id: "C", text: "un intervalle" },
              { id: "D", text: "aucune valeur possible" },
            ],
            correctId: "A",
            explanation: "Un système à deux inconnues admet typiquement un couple $(x\\ ;\\ y)$ comme solution, qui vérifie les deux équations en même temps.",
            difficulty: "debutant",
          },
          {
            id: "eqi2-l3-e2",
            question: "Résous le système $\\begin{cases} y=x+2 \\\\ y=3x-4 \\end{cases}$ et donne la valeur de $x$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x=3$" },
              { id: "B", text: "$x=2$" },
              { id: "C", text: "$x=-1$" },
              { id: "D", text: "$x=6$" },
            ],
            correctId: "A",
            explanation: "Par substitution : $x+2=3x-4 \\implies 6=2x \\implies x=3$.",
            difficulty: "debutant",
          },
          {
            id: "eqi2-l3-e3",
            question: "Dans la méthode par combinaison, on additionne ou soustrait les deux équations pour faire disparaître l'une des deux inconnues.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est le principe de la combinaison linéaire : on ajuste les coefficients (par multiplication) pour qu'une inconnue s'élimine lors de l'addition ou de la soustraction des deux équations.",
            difficulty: "intermediaire",
          },
          {
            id: "eqi2-l3-e4",
            question: "Résous le système $\\begin{cases} x+y=10 \\\\ x-y=2 \\end{cases}$ et donne la valeur de $y$.",
            type: "mcq",
            options: [
              { id: "A", text: "$y=4$" },
              { id: "B", text: "$y=6$" },
              { id: "C", text: "$y=8$" },
              { id: "D", text: "$y=2$" },
            ],
            correctId: "A",
            explanation: "En additionnant les deux équations : $2x=12 \\implies x=6$. Puis $y=10-6=4$.",
            difficulty: "intermediaire",
          },
          {
            id: "eqi2-l3-e5",
            question: "Deux places de cinéma et trois places de théâtre coûtent $58$ €. Trois places de cinéma et une place de théâtre coûtent $52$ €. Détermine le prix d'une place de cinéma et d'une place de théâtre en mettant le problème en système.",
            type: "open",
            modelAnswer: "On note $x$ le prix d'une place de cinéma et $y$ le prix d'une place de théâtre (en euros). L'énoncé se traduit par le système :\\n\\n$$\\begin{cases} 2x+3y=58 \\\\ 3x+y=52 \\end{cases}$$\\n\\nOn utilise la combinaison linéaire : on multiplie la deuxième équation par $3$ pour aligner les coefficients de $y$ avec ceux de la première (en multipliant aussi la première par $1$) — plus simple : on exprime $y$ à partir de la deuxième équation.\\n\\n$$y = 52-3x$$\\n\\nOn substitue dans la première équation :\\n\\n$$2x+3(52-3x)=58$$\\n\\n$$2x+156-9x=58$$\\n\\n$$-7x = 58-156 = -98$$\\n\\n$$x = 14$$\\n\\nOn calcule $y$ : $y = 52-3\\times14 = 52-42=10$.\\n\\n**Vérification :** $2\\times14+3\\times10 = 28+30=58$ ✓ et $3\\times14+10=42+10=52$ ✓\\n\\n$$\\boxed{\\text{Place de cinéma : } 14\\text{ € ; place de théâtre : } 10\\text{ €}}$$",
            explanation: "On nomme les deux inconnues, on traduit chaque phrase de l'énoncé par une équation, puis on résout le système par substitution en vérifiant le résultat dans les deux équations d'origine.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Généralités sur les fonctions
  // ─────────────────────────────────────────────
  {
    id: "fge2-id",
    slug: "generalites-fonctions-2nde",
    title: "Généralités sur les fonctions",
    description: "Maîtrisez le vocabulaire des fonctions (image, antécédent, ensemble de définition), la lecture graphique, le sens de variation et les tableaux de variations.",
    schoolLevel: "2nde",
    subject: "analyse",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📈",
    lessons: [
      {
        id: "fge2-l1",
        slug: "vocabulaire-des-fonctions",
        title: "Vocabulaire et ensemble de définition",
        durationMinutes: 14,
        content: `## Notion de fonction

Une fonction $f$ associe à un nombre $x$ un unique nombre noté $f(x)$, appelé **image** de $x$ par $f$. On note :

$$f : x \\mapsto f(x)$$

Si $f(x) = y$, on dit que $y$ est l'image de $x$, et que $x$ est un **antécédent** de $y$.

> **Remarque :** un nombre a **toujours une seule image**, mais peut avoir **zéro, un, ou plusieurs antécédents**.

## Ensemble de définition

L'**ensemble de définition** $D_f$ d'une fonction $f$ est l'ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe (peut être calculée).

**Exemples classiques de restrictions :**
- Pour $f(x) = \\dfrac{1}{x-3}$, il faut $x - 3 \\neq 0$, donc $D_f = \\mathbb{R} \\setminus \\{3\\}$.
- Pour $f(x) = \\sqrt{x-2}$, il faut $x-2 \\geqslant 0$, donc $D_f = [2\\ ;\\ +\\infty[$.
- Pour $f(x) = 3x^2-5x+1$, aucune restriction : $D_f = \\mathbb{R}$.

## La courbe représentative

La **courbe représentative** $\\mathcal{C}_f$ d'une fonction $f$ est l'ensemble des points de coordonnées $(x\\ ;\\ f(x))$ pour $x \\in D_f$.

> **Point clé :** dire que le point $M(a\\ ;\\ b)$ appartient à $\\mathcal{C}_f$ équivaut à dire que $f(a) = b$, c'est-à-dire que $b$ est l'image de $a$ par $f$.`,
        exercises: [
          {
            id: "fge2-l1-e1",
            question: "Si $f(5) = 12$, alors :",
            type: "mcq",
            options: [
              { id: "A", text: "$12$ est l'image de $5$ par $f$" },
              { id: "B", text: "$5$ est l'image de $12$ par $f$" },
              { id: "C", text: "$f$ vaut toujours $12$" },
              { id: "D", text: "$5$ et $12$ ne sont pas liés" },
            ],
            correctId: "A",
            explanation: "$f(5)=12$ signifie que l'image de $5$ par $f$ est $12$, et que $5$ est un antécédent de $12$.",
            difficulty: "debutant",
          },
          {
            id: "fge2-l1-e2",
            question: "Quel est l'ensemble de définition de $f(x) = \\dfrac{1}{x+4}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\mathbb{R} \\setminus \\{-4\\}$" },
              { id: "B", text: "$\\mathbb{R} \\setminus \\{4\\}$" },
              { id: "C", text: "$[-4\\ ;\\ +\\infty[$" },
              { id: "D", text: "$\\mathbb{R}$" },
            ],
            correctId: "A",
            explanation: "Il faut que le dénominateur soit non nul : $x+4 \\neq 0 \\implies x \\neq -4$. Donc $D_f = \\mathbb{R}\\setminus\\{-4\\}$.",
            difficulty: "debutant",
          },
          {
            id: "fge2-l1-e3",
            question: "Un nombre peut avoir plusieurs antécédents par une même fonction.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Contrairement à l'image (toujours unique), un nombre peut avoir plusieurs antécédents : par exemple pour $f(x)=x^2$, le nombre $9$ a deux antécédents, $3$ et $-3$.",
            difficulty: "intermediaire",
          },
          {
            id: "fge2-l1-e4",
            question: "Quel est l'ensemble de définition de $g(x) = \\sqrt{5-x}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$]-\\infty\\ ;\\ 5]$" },
              { id: "B", text: "$[5\\ ;\\ +\\infty[$" },
              { id: "C", text: "$\\mathbb{R}\\setminus\\{5\\}$" },
              { id: "D", text: "$\\mathbb{R}$" },
            ],
            correctId: "A",
            explanation: "Il faut que l'expression sous la racine soit positive ou nulle : $5-x \\geqslant 0 \\implies x \\leqslant 5$. Donc $D_g=\\ ]-\\infty\\ ;\\ 5]$.",
            difficulty: "intermediaire",
          },
          {
            id: "fge2-l1-e5",
            question: "Soit $f(x) = \\dfrac{2x-1}{x-3}$. Détermine l'ensemble de définition $D_f$, puis calcule $f(1)$ et trouve l'antécédent de $5$ par $f$.",
            type: "open",
            modelAnswer: "**Ensemble de définition :** il faut que le dénominateur soit non nul.\\n\\n$$x - 3 \\neq 0 \\implies x \\neq 3$$\\n\\nDonc $D_f = \\mathbb{R}\\setminus\\{3\\}$.\\n\\n**Calcul de $f(1)$ :**\\n\\n$$f(1) = \\dfrac{2\\times1-1}{1-3} = \\dfrac{1}{-2} = -\\dfrac{1}{2}$$\\n\\n**Antécédent de $5$ :** on résout $f(x)=5$.\\n\\n$$\\dfrac{2x-1}{x-3}=5 \\implies 2x-1=5(x-3) \\implies 2x-1=5x-15$$\\n\\n$$14=3x \\implies x=\\dfrac{14}{3}$$\\n\\n$$\\boxed{D_f=\\mathbb{R}\\setminus\\{3\\}\\ ;\\ f(1)=-\\dfrac{1}{2}\\ ;\\ \\text{antécédent de } 5 : x=\\dfrac{14}{3}}$$",
            explanation: "On détermine d'abord les valeurs interdites pour l'ensemble de définition, puis on distingue le calcul d'une image (substitution directe) de la recherche d'un antécédent (résolution d'équation).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "fge2-l2",
        slug: "lecture-graphique",
        title: "Lecture graphique d'une fonction",
        durationMinutes: 12,
        content: `## Lire une image et un antécédent sur un graphique

Sur la courbe représentative $\\mathcal{C}_f$ d'une fonction :

- Pour **lire l'image** de $a$ : on se place en $x=a$ sur l'axe des abscisses, on monte (ou descend) jusqu'à la courbe, puis on lit l'ordonnée du point obtenu.
- Pour **lire un antécédent** de $b$ : on se place en $y=b$ sur l'axe des ordonnées, on avance horizontalement jusqu'à la courbe, puis on lit l'abscisse de chaque point d'intersection trouvé.

> **Remarque :** une droite horizontale $y=b$ peut couper la courbe en plusieurs points : $b$ aurait alors plusieurs antécédents.

## Résoudre graphiquement $f(x) = k$ et $f(x) \\leqslant k$

- Les solutions de $f(x)=k$ sont les abscisses des points d'intersection de $\\mathcal{C}_f$ avec la droite horizontale $y=k$.
- Les solutions de $f(x) \\leqslant k$ sont les abscisses des points de $\\mathcal{C}_f$ situés **sous ou sur** la droite $y=k$.
- Les solutions de $f(x) \\geqslant k$ sont les abscisses des points de $\\mathcal{C}_f$ situés **au-dessus ou sur** la droite $y=k$.

## Comparer deux fonctions graphiquement

Pour résoudre $f(x) \\leqslant g(x)$ graphiquement, on cherche les abscisses des points où la courbe de $f$ est **en dessous** de la courbe de $g$ (y compris les points d'intersection).`,
        exercises: [
          {
            id: "fge2-l2-e1",
            question: "Pour lire graphiquement l'image de $3$ par $f$, on se place :",
            type: "mcq",
            options: [
              { id: "A", text: "en $x=3$ sur l'axe des abscisses, puis on monte jusqu'à la courbe" },
              { id: "B", text: "en $y=3$ sur l'axe des ordonnées" },
              { id: "C", text: "à l'origine du repère" },
              { id: "D", text: "n'importe où sur la courbe" },
            ],
            correctId: "A",
            explanation: "Pour lire une image, on part de la valeur en abscisse ($x=3$), on se déplace verticalement jusqu'à la courbe, puis on lit l'ordonnée correspondante.",
            difficulty: "debutant",
          },
          {
            id: "fge2-l2-e2",
            question: "Les solutions de l'équation $f(x) = k$ correspondent graphiquement :",
            type: "mcq",
            options: [
              { id: "A", text: "aux abscisses des points d'intersection de $\\mathcal{C}_f$ avec la droite $y=k$" },
              { id: "B", text: "aux ordonnées de tous les points de la courbe" },
              { id: "C", text: "à l'ordonnée à l'origine de la courbe" },
              { id: "D", text: "au sommet de la courbe" },
            ],
            correctId: "A",
            explanation: "On trouve les solutions de $f(x)=k$ en cherchant où la courbe coupe la droite horizontale d'équation $y=k$, puis en lisant les abscisses de ces points.",
            difficulty: "debutant",
          },
          {
            id: "fge2-l2-e3",
            question: "Une droite horizontale ne peut jamais couper une courbe en plus d'un point.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Une droite horizontale $y=k$ peut couper une courbe en plusieurs points si $k$ a plusieurs antécédents par la fonction (par exemple pour une parabole).",
            difficulty: "intermediaire",
          },
          {
            id: "fge2-l2-e4",
            question: "Pour résoudre graphiquement $f(x) \\geqslant k$, on cherche les abscisses des points de la courbe qui sont :",
            type: "mcq",
            options: [
              { id: "A", text: "au-dessus ou sur la droite $y=k$" },
              { id: "B", text: "en dessous de la droite $y=k$" },
              { id: "C", text: "sur l'axe des abscisses" },
              { id: "D", text: "à gauche de l'axe des ordonnées" },
            ],
            correctId: "A",
            explanation: "$f(x) \\geqslant k$ signifie que l'ordonnée du point de la courbe est supérieure ou égale à $k$ : graphiquement, le point est au-dessus ou sur la droite horizontale $y=k$.",
            difficulty: "intermediaire",
          },
          {
            id: "fge2-l2-e5",
            question: "Une courbe $\\mathcal{C}_f$ passe par les points $A(-2\\ ;\\ 4)$, $B(0\\ ;\\ 0)$ et $C(2\\ ;\\ 4)$, avec $f$ définie sur $[-2\\ ;\\ 2]$. Donne, en justifiant à partir de ces informations, l'image de $-2$ par $f$ et un antécédent de $4$.",
            type: "open",
            modelAnswer: "Le point $A(-2\\ ;\\ 4)$ appartient à $\\mathcal{C}_f$, ce qui signifie par définition que $f(-2) = 4$.\\n\\nL'image de $-2$ par $f$ est donc $4$.\\n\\nPour un antécédent de $4$ : on cherche un point de la courbe dont l'ordonnée est $4$. On constate que $A(-2\\ ;\\ 4)$ et $C(2\\ ;\\ 4)$ sont tous deux sur la courbe, donc $4$ admet (au moins) deux antécédents : $-2$ et $2$.\\n\\n$$\\boxed{f(-2) = 4 \\quad ; \\quad \\text{antécédents de } 4 \\text{ : } -2 \\text{ et } 2}$$",
            explanation: "Un point $(a\\ ;\\ b)$ sur la courbe traduit directement $f(a)=b$ : cela permet de lire à la fois des images et des antécédents directement à partir des coordonnées des points connus.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "fge2-l3",
        slug: "sens-de-variation-et-tableau",
        title: "Sens de variation et tableau de variations",
        durationMinutes: 14,
        content: `## Fonction croissante, décroissante

Soit $f$ une fonction définie sur un intervalle $I$.

- $f$ est **croissante** sur $I$ si, pour tous $a, b \\in I$ avec $a < b$, on a $f(a) \\leqslant f(b)$ : quand $x$ augmente, $f(x)$ augmente (ou reste constant).
- $f$ est **décroissante** sur $I$ si, pour tous $a, b \\in I$ avec $a<b$, on a $f(a) \\geqslant f(b)$ : quand $x$ augmente, $f(x)$ diminue (ou reste constant).

> **Image mentale :** une fonction croissante "monte" en se déplaçant vers la droite ; une fonction décroissante "descend".

## Le tableau de variations

Le **tableau de variations** résume, sur des intervalles successifs, si la fonction est croissante (flèche montante ↗) ou décroissante (flèche descendante ↘).

**Exemple :** pour une fonction $f$ définie sur $[-3\\ ;\\ 5]$, décroissante sur $[-3\\ ;\\ 1]$ puis croissante sur $[1\\ ;\\ 5]$ :

| $x$ | $-3$ | | $1$ | | $5$ |
|---|---|---|---|---|---|
| Variations de $f$ | | ↘ | | ↗ | |

## Maximum et minimum

- $f$ admet un **maximum** $M$ en $x_0$ sur $I$ si $f(x_0) = M$ et $f(x) \\leqslant M$ pour tout $x \\in I$.
- $f$ admet un **minimum** $m$ en $x_0$ sur $I$ si $f(x_0) = m$ et $f(x) \\geqslant m$ pour tout $x \\in I$.

Dans le tableau de variations, le maximum ou minimum local correspond à la valeur de $f(x_0)$ inscrite **au sommet ou au creux** d'une flèche (changement de sens de variation).`,
        exercises: [
          {
            id: "fge2-l3-e1",
            question: "Une fonction $f$ est croissante sur $I$ si, pour $a<b$ dans $I$ :",
            type: "mcq",
            options: [
              { id: "A", text: "$f(a) \\leqslant f(b)$" },
              { id: "B", text: "$f(a) \\geqslant f(b)$" },
              { id: "C", text: "$f(a) = f(b)$" },
              { id: "D", text: "$a = b$" },
            ],
            correctId: "A",
            explanation: "Une fonction croissante conserve l'ordre : si $a<b$ alors $f(a) \\leqslant f(b)$, c'est-à-dire que $f(x)$ augmente quand $x$ augmente.",
            difficulty: "debutant",
          },
          {
            id: "fge2-l3-e2",
            question: "Dans un tableau de variations, une flèche descendante (↘) indique que la fonction est :",
            type: "mcq",
            options: [
              { id: "A", text: "décroissante" },
              { id: "B", text: "croissante" },
              { id: "C", text: "constante" },
              { id: "D", text: "non définie" },
            ],
            correctId: "A",
            explanation: "Une flèche qui descend dans un tableau de variations symbolise une fonction décroissante sur l'intervalle considéré.",
            difficulty: "debutant",
          },
          {
            id: "fge2-l3-e3",
            question: "Une fonction peut être croissante sur un intervalle et décroissante sur un autre intervalle de son ensemble de définition.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est très courant : par exemple la fonction carré est décroissante sur $]-\\infty\\ ;\\ 0]$ puis croissante sur $[0\\ ;\\ +\\infty[$. Le sens de variation s'étudie toujours sur un intervalle donné.",
            difficulty: "intermediaire",
          },
          {
            id: "fge2-l3-e4",
            question: "Une fonction $f$ admet un minimum $m=-3$ en $x_0=2$ sur $I$. Que peut-on dire de $f(x)$ pour tout $x \\in I$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$f(x) \\geqslant -3$" },
              { id: "B", text: "$f(x) \\leqslant -3$" },
              { id: "C", text: "$f(x) = -3$" },
              { id: "D", text: "$f(x) \\geqslant 2$" },
            ],
            correctId: "A",
            explanation: "Par définition d'un minimum, $f(x_0)=m=-3$ est la plus petite valeur prise par $f$ sur $I$ : donc $f(x) \\geqslant -3$ pour tout $x$ de $I$.",
            difficulty: "intermediaire",
          },
          {
            id: "fge2-l3-e5",
            question: "Une fonction $f$ est définie sur $[-4\\ ;\\ 6]$. Elle est croissante sur $[-4\\ ;\\ -1]$, décroissante sur $[-1\\ ;\\ 3]$, puis croissante sur $[3\\ ;\\ 6]$. On donne $f(-4)=-2$, $f(-1)=5$, $f(3)=1$ et $f(6)=4$. Dresse le tableau de variations de $f$ et donne le maximum de $f$ sur $[-4\\ ;\\ 6]$.",
            type: "open",
            modelAnswer: "On construit le tableau de variations en indiquant les flèches successives et les valeurs connues :\\n\\n| $x$ | $-4$ | | $-1$ | | $3$ | | $6$ |\\n|---|---|---|---|---|---|---|---|\\n| Variations de $f$ | $-2$ | ↗ | $5$ | ↘ | $1$ | ↗ | $4$ |\\n\\nLes valeurs prises par $f$ sur l'intervalle sont donc comprises entre $-2$ (minimum local en $x=-4$) et $5$.\\n\\nLa plus grande valeur atteinte est $f(-1)=5$, qui correspond à un sommet de la courbe (changement de croissant à décroissant).\\n\\nEn comparant toutes les valeurs clés ($-2,\\ 5,\\ 1,\\ 4$), le maximum de $f$ sur $[-4\\ ;\\ 6]$ est bien $5$.\\n\\n$$\\boxed{\\text{Maximum de } f \\text{ sur } [-4\\ ;\\ 6] : 5, \\text{ atteint en } x=-1}$$",
            explanation: "Le tableau de variations résume tous les changements de sens de variation. Le maximum global correspond à la plus grande valeur parmi les sommets locaux et les bornes de l'intervalle.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Fonctions de référence
  // ─────────────────────────────────────────────
  {
    id: "fre2-id",
    slug: "fonctions-de-reference-2nde",
    title: "Fonctions de référence",
    description: "Étudiez les fonctions affine, carré, inverse et racine carrée : expressions, représentations graphiques et sens de variation.",
    schoolLevel: "2nde",
    subject: "analyse",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📉",
    lessons: [
      {
        id: "fre2-l1",
        slug: "fonction-affine",
        title: "La fonction affine",
        durationMinutes: 14,
        content: `## Définition

Une fonction $f$ est **affine** si elle s'écrit sous la forme :

$$f(x) = ax+b$$

où $a$ et $b$ sont deux réels fixés. $a$ est le **coefficient directeur** et $b$ est l'**ordonnée à l'origine**.

## Représentation graphique

La courbe représentative d'une fonction affine est une **droite**, entièrement déterminée par :
- son ordonnée à l'origine $b$ (le point $(0\\ ;\\ b)$) ;
- son coefficient directeur $a$, qui indique la "pente" : quand $x$ augmente de $1$, $f(x)$ varie de $a$.

$$a = \\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$$

## Sens de variation

| Signe de $a$ | Sens de variation de $f$ |
|---|---|
| $a > 0$ | croissante |
| $a < 0$ | décroissante |
| $a = 0$ | constante ($f(x)=b$) |

## Cas particuliers

- Si $b=0$, $f(x)=ax$ est une fonction **linéaire** : sa droite passe par l'origine.
- Si $a=0$, $f(x)=b$ est une fonction **constante** : sa droite est horizontale.

**Exemple :** $f(x) = -2x+3$ est décroissante (car $a=-2<0$), et sa droite coupe l'axe des ordonnées en $(0\\ ;\\ 3)$.`,
        exercises: [
          {
            id: "fre2-l1-e1",
            question: "Dans $f(x) = 5x - 2$, quel est le coefficient directeur ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$-2$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "$-5$" },
            ],
            correctId: "A",
            explanation: "Dans $f(x)=ax+b$, le coefficient directeur est $a$ : ici $a=5$.",
            difficulty: "debutant",
          },
          {
            id: "fre2-l1-e2",
            question: "Si $a < 0$ dans $f(x)=ax+b$, la fonction $f$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "décroissante" },
              { id: "B", text: "croissante" },
              { id: "C", text: "constante" },
              { id: "D", text: "non définie" },
            ],
            correctId: "A",
            explanation: "Un coefficient directeur négatif correspond à une droite qui descend, donc à une fonction décroissante.",
            difficulty: "debutant",
          },
          {
            id: "fre2-l1-e3",
            question: "Une fonction linéaire est un cas particulier de fonction affine où $b=0$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Une fonction linéaire $f(x)=ax$ correspond bien à une fonction affine $f(x)=ax+b$ dans le cas particulier où $b=0$.",
            difficulty: "intermediaire",
          },
          {
            id: "fre2-l1-e4",
            question: "Une droite passe par les points $(1\\ ;\\ 4)$ et $(3\\ ;\\ 10)$. Quel est son coefficient directeur ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "$14$" },
            ],
            correctId: "A",
            explanation: "$a = \\dfrac{10-4}{3-1} = \\dfrac{6}{2} = 3$.",
            difficulty: "intermediaire",
          },
          {
            id: "fre2-l1-e5",
            question: "Une fonction affine $f$ vérifie $f(2)=1$ et $f(5)=10$. Détermine l'expression de $f(x)=ax+b$, puis calcule $f(0)$.",
            type: "open",
            modelAnswer: "On calcule le coefficient directeur $a$ :\\n\\n$$a = \\dfrac{f(5)-f(2)}{5-2} = \\dfrac{10-1}{3} = \\dfrac{9}{3} = 3$$\\n\\nOn utilise $f(2)=1$ pour trouver $b$ :\\n\\n$$f(2) = 3\\times2+b = 1 \\implies 6+b=1 \\implies b=-5$$\\n\\nDonc $f(x) = 3x-5$.\\n\\nOn calcule $f(0)$ :\\n\\n$$f(0) = 3\\times0-5 = -5$$\\n\\n$$\\boxed{f(x)=3x-5 \\quad ; \\quad f(0)=-5}$$",
            explanation: "On détermine $a$ avec le taux de variation entre deux points connus, puis $b$ en substituant dans une des deux égalités ; $f(0)$ correspond directement à l'ordonnée à l'origine $b$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "fre2-l2",
        slug: "fonction-carre",
        title: "La fonction carré",
        durationMinutes: 14,
        content: `## Définition

La **fonction carré** est définie sur $\\mathbb{R}$ par :

$$f(x) = x^2$$

## Représentation graphique : la parabole

La courbe représentative de la fonction carré est une **parabole**, symétrique par rapport à l'axe des ordonnées (l'axe $x=0$), avec un sommet à l'origine $(0\\ ;\\ 0)$.

> **Propriété de symétrie :** pour tout réel $x$, $f(-x) = (-x)^2 = x^2 = f(x)$. Deux nombres opposés ont la même image.

## Tableau de variations

| $x$ | $-\\infty$ | | $0$ | | $+\\infty$ |
|---|---|---|---|---|---|
| Variations de $f$ | | ↘ | $0$ | ↗ | |

La fonction carré est **décroissante sur $]-\\infty\\ ;\\ 0]$** et **croissante sur $[0\\ ;\\ +\\infty[$**. Elle admet un **minimum** égal à $0$, atteint en $x=0$.

## Comparer des carrés

> **Attention :** pour $a$ et $b$ de même signe, $a < b \\implies a^2$ et $b^2$ ne sont pas nécessairement dans le même ordre que $a$ et $b$ !

**Exemple :** $-3 < -1$ mais $(-3)^2 = 9 > (-1)^2 = 1$ (car la fonction carré est décroissante sur les négatifs).

Sur $[0\\ ;\\ +\\infty[$ en revanche, la fonction carré conserve l'ordre : $0 \\leqslant a < b \\implies a^2 < b^2$.`,
        exercises: [
          {
            id: "fre2-l2-e1",
            question: "Quelle est l'image de $-4$ par la fonction carré ?",
            type: "mcq",
            options: [
              { id: "A", text: "$16$" },
              { id: "B", text: "$-16$" },
              { id: "C", text: "$-8$" },
              { id: "D", text: "$8$" },
            ],
            correctId: "A",
            explanation: "$f(-4) = (-4)^2 = 16$. Le carré d'un nombre est toujours positif ou nul.",
            difficulty: "debutant",
          },
          {
            id: "fre2-l2-e2",
            question: "La fonction carré est décroissante sur :",
            type: "mcq",
            options: [
              { id: "A", text: "$]-\\infty\\ ;\\ 0]$" },
              { id: "B", text: "$[0\\ ;\\ +\\infty[$" },
              { id: "C", text: "$\\mathbb{R}$ tout entier" },
              { id: "D", text: "Elle n'est jamais décroissante" },
            ],
            correctId: "A",
            explanation: "La parabole descend pour $x$ allant de $-\\infty$ à $0$, puis remonte : la fonction carré est décroissante sur $]-\\infty\\ ;\\ 0]$ et croissante sur $[0\\ ;\\ +\\infty[$.",
            difficulty: "debutant",
          },
          {
            id: "fre2-l2-e3",
            question: "Pour tous réels $a$ et $b$ tels que $a<b$, on a toujours $a^2 < b^2$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "C'est faux en général : par exemple $-5 < 2$ mais $(-5)^2=25 > 2^2=4$. La conservation de l'ordre par le carré n'est garantie que sur $[0\\ ;\\ +\\infty[$ (ou en valeur absolue).",
            difficulty: "intermediaire",
          },
          {
            id: "fre2-l2-e4",
            question: "La parabole représentant la fonction carré est symétrique par rapport à :",
            type: "mcq",
            options: [
              { id: "A", text: "l'axe des ordonnées" },
              { id: "B", text: "l'axe des abscisses" },
              { id: "C", text: "l'origine du repère" },
              { id: "D", text: "la droite $y=x$" },
            ],
            correctId: "A",
            explanation: "Puisque $f(-x)=f(x)$ pour tout $x$, la parabole est symétrique par rapport à l'axe des ordonnées (axe vertical $x=0$).",
            difficulty: "intermediaire",
          },
          {
            id: "fre2-l2-e5",
            question: "Range dans l'ordre croissant les images par la fonction carré des nombres $-5$, $2$, $-1$ et $4$.",
            type: "open",
            modelAnswer: "On calcule chaque image par la fonction carré :\\n\\n$$f(-5) = (-5)^2 = 25$$\\n$$f(2) = 2^2 = 4$$\\n$$f(-1) = (-1)^2 = 1$$\\n$$f(4) = 4^2 = 16$$\\n\\nOn range ces images dans l'ordre croissant :\\n\\n$$1 < 4 < 16 < 25$$\\n\\nce qui correspond à :\\n\\n$$f(-1) < f(2) < f(4) < f(-5)$$\\n\\n$$\\boxed{f(-1) < f(2) < f(4) < f(-5)}$$",
            explanation: "Comme la fonction carré n'est pas monotone sur $\\mathbb{R}$ entier, il faut calculer chaque image séparément avant de pouvoir les comparer, plutôt que de se fier à l'ordre des valeurs de départ.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "fre2-l3",
        slug: "fonction-inverse-et-racine",
        title: "Les fonctions inverse et racine carrée",
        durationMinutes: 16,
        content: `## La fonction inverse

La **fonction inverse** est définie sur $\\mathbb{R}\\setminus\\{0\\}$ par :

$$f(x) = \\dfrac{1}{x}$$

### Représentation graphique : l'hyperbole

Sa courbe est une **hyperbole**, composée de deux branches symétriques par rapport à l'origine du repère (la fonction est **impaire** : $f(-x)=-f(x)$).

### Tableau de variations

| $x$ | $-\\infty$ | | $0$ | | $+\\infty$ |
|---|---|---|---|---|---|
| Variations de $f$ | | ↘ | (non définie) | ↘ | |

> **Attention :** la fonction inverse est décroissante sur $]-\\infty\\ ;\\ 0[$ **et** décroissante sur $]0\\ ;\\ +\\infty[$, mais elle n'est **pas décroissante sur $\\mathbb{R}\\setminus\\{0\\}$ tout entier** (car elle "saute" de $-\\infty$ à $+\\infty$ en traversant $0$, qui n'est pas dans son ensemble de définition).

## La fonction racine carrée

La **fonction racine carrée** est définie sur $[0\\ ;\\ +\\infty[$ par :

$$f(x) = \\sqrt{x}$$

### Tableau de variations

| $x$ | $0$ | | $+\\infty$ |
|---|---|---|---|
| Variations de $f$ | $0$ | ↗ | |

La fonction racine carrée est **croissante** sur tout son ensemble de définition $[0\\ ;\\ +\\infty[$, et conserve donc l'ordre :

$$0 \\leqslant a < b \\implies \\sqrt{a} < \\sqrt{b}$$`,
        exercises: [
          {
            id: "fre2-l3-e1",
            question: "Quel est l'ensemble de définition de la fonction inverse $f(x) = \\dfrac{1}{x}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\mathbb{R}\\setminus\\{0\\}$" },
              { id: "B", text: "$\\mathbb{R}$" },
              { id: "C", text: "$[0\\ ;\\ +\\infty[$" },
              { id: "D", text: "$\\mathbb{R}\\setminus\\{1\\}$" },
            ],
            correctId: "A",
            explanation: "La fonction inverse n'est pas définie en $0$ (division par $0$ impossible) : son ensemble de définition est $\\mathbb{R}\\setminus\\{0\\}$.",
            difficulty: "debutant",
          },
          {
            id: "fre2-l3-e2",
            question: "Quel est l'ensemble de définition de la fonction racine carrée ?",
            type: "mcq",
            options: [
              { id: "A", text: "$[0\\ ;\\ +\\infty[$" },
              { id: "B", text: "$\\mathbb{R}$" },
              { id: "C", text: "$]-\\infty\\ ;\\ 0]$" },
              { id: "D", text: "$\\mathbb{R}\\setminus\\{0\\}$" },
            ],
            correctId: "A",
            explanation: "La racine carrée n'est définie que pour des nombres positifs ou nuls : $D_f = [0\\ ;\\ +\\infty[$.",
            difficulty: "debutant",
          },
          {
            id: "fre2-l3-e3",
            question: "La fonction inverse est décroissante sur l'ensemble $\\mathbb{R}\\setminus\\{0\\}$ tout entier.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "La fonction inverse est décroissante séparément sur $]-\\infty\\ ;\\ 0[$ et sur $]0\\ ;\\ +\\infty[$, mais pas sur la réunion des deux intervalles : par exemple $f(-1)=-1 < f(1)=1$, alors que $-1<1$, ce qui contredirait la décroissance globale.",
            difficulty: "intermediaire",
          },
          {
            id: "fre2-l3-e4",
            question: "Sachant que $3 < 7$, que peut-on dire de $\\sqrt{3}$ et $\\sqrt{7}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\sqrt{3} < \\sqrt{7}$" },
              { id: "B", text: "$\\sqrt{3} > \\sqrt{7}$" },
              { id: "C", text: "$\\sqrt{3} = \\sqrt{7}$" },
              { id: "D", text: "On ne peut rien dire" },
            ],
            correctId: "A",
            explanation: "La fonction racine carrée est croissante sur $[0\\ ;\\ +\\infty[$ : elle conserve donc l'ordre, donc $3<7 \\implies \\sqrt{3}<\\sqrt{7}$.",
            difficulty: "intermediaire",
          },
          {
            id: "fre2-l3-e5",
            question: "Compare $\\dfrac{1}{5}$ et $\\dfrac{1}{2}$ en justifiant à l'aide du sens de variation de la fonction inverse, sachant que $5$ et $2$ sont tous deux strictement positifs.",
            type: "open",
            modelAnswer: "On sait que $2 < 5$, et que $2$ et $5$ sont tous les deux strictement positifs, donc tous les deux dans l'intervalle $]0\\ ;\\ +\\infty[$.\\n\\nSur cet intervalle, la fonction inverse $f(x) = \\dfrac{1}{x}$ est **décroissante**. Or une fonction décroissante inverse l'ordre : si $a < b$ alors $f(a) > f(b)$.\\n\\nAvec $a=2$ et $b=5$ :\\n\\n$$2 < 5 \\implies \\dfrac{1}{2} > \\dfrac{1}{5}$$\\n\\n$$\\boxed{\\dfrac{1}{2} > \\dfrac{1}{5}}$$",
            explanation: "Sur $]0\\ ;\\ +\\infty[$, la fonction inverse est décroissante : elle inverse donc l'ordre des nombres comparés, contrairement à une fonction croissante qui le conserve.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Vecteurs et repérage
  // ─────────────────────────────────────────────
  {
    id: "vec2-id",
    slug: "vecteurs-reperage-2nde",
    title: "Vecteurs et repérage",
    description: "Découvrez la notion de vecteur, ses coordonnées, la relation de Chasles, et apprenez à calculer milieu et distance dans un repère.",
    schoolLevel: "2nde",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "➡️",
    lessons: [
      {
        id: "vec2-l1",
        slug: "notion-de-vecteur",
        title: "Notion de vecteur et coordonnées",
        durationMinutes: 14,
        content: `## Qu'est-ce qu'un vecteur ?

Un **vecteur** $\\overrightarrow{AB}$ est défini par trois caractéristiques :
- une **direction** (celle de la droite $(AB)$) ;
- un **sens** (de $A$ vers $B$) ;
- une **longueur** (la distance $AB$), appelée **norme**, notée $\\|\\overrightarrow{AB}\\|$.

> **Vecteurs égaux :** deux vecteurs sont égaux s'ils ont la même direction, le même sens et la même longueur, même s'ils ne sont pas situés au même endroit du plan.

## Coordonnées d'un vecteur

Dans un repère $(O\\ ;\\ I\\ ;\\ J)$, si $A(x_A\\ ;\\ y_A)$ et $B(x_B\\ ;\\ y_B)$, alors les coordonnées du vecteur $\\overrightarrow{AB}$ sont :

$$\\overrightarrow{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$$

**Exemple :** $A(1\\ ;\\ 2)$ et $B(4\\ ;\\ 6)$ donnent $\\overrightarrow{AB}\\begin{pmatrix} 4-1 \\\\ 6-2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.

## Norme d'un vecteur

Si $\\overrightarrow{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, alors :

$$\\|\\overrightarrow{u}\\| = \\sqrt{x^2+y^2}$$

**Exemple :** pour $\\overrightarrow{AB}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$, on a $\\|\\overrightarrow{AB}\\| = \\sqrt{3^2+4^2} = \\sqrt{25} = 5$.

## Vecteurs égaux et coordonnées

Deux vecteurs sont égaux si et seulement si ils ont les **mêmes coordonnées**.

$$\\overrightarrow{AB} = \\overrightarrow{CD} \\iff x_B-x_A = x_D-x_C \\ \\text{ et } \\ y_B-y_A=y_D-y_C$$`,
        exercises: [
          {
            id: "vec2-l1-e1",
            question: "On donne $A(2\\ ;\\ 1)$ et $B(5\\ ;\\ 3)$. Quelles sont les coordonnées de $\\overrightarrow{AB}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix} 7 \\\\ 4 \\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "$\\overrightarrow{AB}\\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix} = \\begin{pmatrix} 5-2 \\\\ 3-1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$.",
            difficulty: "debutant",
          },
          {
            id: "vec2-l1-e2",
            question: "Un vecteur est entièrement caractérisé par :",
            type: "mcq",
            options: [
              { id: "A", text: "sa direction, son sens et sa longueur" },
              { id: "B", text: "sa seule longueur" },
              { id: "C", text: "son point de départ uniquement" },
              { id: "D", text: "sa couleur sur le dessin" },
            ],
            correctId: "A",
            explanation: "Un vecteur est défini par trois éléments : la direction, le sens, et la longueur (norme). Deux vecteurs ayant ces trois éléments identiques sont égaux, même situés ailleurs dans le plan.",
            difficulty: "debutant",
          },
          {
            id: "vec2-l1-e3",
            question: "Deux vecteurs sont égaux s'ils ont les mêmes coordonnées, même s'ils ne partent pas du même point.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "L'égalité de deux vecteurs ne dépend que de leur direction, sens et longueur (donc de leurs coordonnées), pas de leur position de départ dans le plan.",
            difficulty: "intermediaire",
          },
          {
            id: "vec2-l1-e4",
            question: "Quelle est la norme du vecteur $\\overrightarrow{u}\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$14$" },
              { id: "C", text: "$48$" },
              { id: "D", text: "$100$" },
            ],
            correctId: "A",
            explanation: "$\\|\\overrightarrow{u}\\| = \\sqrt{6^2+8^2} = \\sqrt{36+64} = \\sqrt{100} = 10$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec2-l1-e5",
            question: "On donne $A(-1\\ ;\\ 3)$, $B(2\\ ;\\ -1)$, $C(0\\ ;\\ 5)$ et $D(3\\ ;\\ 1)$. Montre que $\\overrightarrow{AB} = \\overrightarrow{CD}$.",
            type: "open",
            modelAnswer: "On calcule les coordonnées de chaque vecteur.\\n\\n$$\\overrightarrow{AB}\\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix} = \\begin{pmatrix} 2-(-1) \\\\ -1-3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$\\n\\n$$\\overrightarrow{CD}\\begin{pmatrix} x_D-x_C \\\\ y_D-y_C \\end{pmatrix} = \\begin{pmatrix} 3-0 \\\\ 1-5 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$\\n\\nLes deux vecteurs ont les mêmes coordonnées $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$, donc :\\n\\n$$\\boxed{\\overrightarrow{AB} = \\overrightarrow{CD}}$$",
            explanation: "Deux vecteurs sont égaux si et seulement si ils ont les mêmes coordonnées : il suffit donc de calculer et comparer les coordonnées des deux vecteurs.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "vec2-l2",
        slug: "somme-de-vecteurs-et-relation-de-chasles",
        title: "Somme de vecteurs et relation de Chasles",
        durationMinutes: 14,
        content: `## Somme de deux vecteurs

La somme de deux vecteurs $\\overrightarrow{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ se calcule coordonnée par coordonnée :

$$\\overrightarrow{u} + \\overrightarrow{v} = \\begin{pmatrix} x+x' \\\\ y+y' \\end{pmatrix}$$

## La relation de Chasles

Pour trois points quelconques $A$, $B$, $C$ du plan :

$$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$$

> **Astuce mnémotechnique :** les lettres "du milieu" ($B$ et $B$) s'annulent comme si on simplifiait une écriture.

Cette relation permet de **décomposer** un vecteur en une somme d'autres vecteurs, ou de **simplifier** une somme de vecteurs.

**Exemple :** $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD} = \\overrightarrow{AD}$ (on applique deux fois la relation de Chasles).

## Vecteur opposé

Le vecteur opposé de $\\overrightarrow{AB}$ est $\\overrightarrow{BA} = -\\overrightarrow{AB}$. En coordonnées, si $\\overrightarrow{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, alors $-\\overrightarrow{u}\\begin{pmatrix} -x \\\\ -y \\end{pmatrix}$.

> **Conséquence utile :** $\\overrightarrow{AB} + \\overrightarrow{BA} = \\overrightarrow{0}$ (vecteur nul).

## Caractérisation du parallélogramme

$ABDC$ est un parallélogramme si et seulement si $\\overrightarrow{AB} = \\overrightarrow{CD}$.`,
        exercises: [
          {
            id: "vec2-l2-e1",
            question: "D'après la relation de Chasles, $\\overrightarrow{AB}+\\overrightarrow{BC}$ est égal à :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\overrightarrow{AC}$" },
              { id: "B", text: "$\\overrightarrow{CA}$" },
              { id: "C", text: "$\\overrightarrow{BB}$" },
              { id: "D", text: "$\\overrightarrow{AB}$" },
            ],
            correctId: "A",
            explanation: "La relation de Chasles donne $\\overrightarrow{AB}+\\overrightarrow{BC} = \\overrightarrow{AC}$ : les points intermédiaires identiques ($B$) se \"simplifient\".",
            difficulty: "debutant",
          },
          {
            id: "vec2-l2-e2",
            question: "Soit $\\overrightarrow{u}\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix} -3 \\\\ 1 \\end{pmatrix}$. Quelles sont les coordonnées de $\\overrightarrow{u}+\\overrightarrow{v}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix} -1 \\\\ 6 \\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix} 1 \\\\ 6 \\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "On additionne coordonnée par coordonnée : $\\begin{pmatrix} 2+(-3) \\\\ 5+1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 6 \\end{pmatrix}$.",
            difficulty: "debutant",
          },
          {
            id: "vec2-l2-e3",
            question: "$ABDC$ est un parallélogramme si et seulement si $\\overrightarrow{AB} = \\overrightarrow{CD}$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est la caractérisation vectorielle du parallélogramme : les côtés $[AB]$ et $[CD]$ doivent être représentés par des vecteurs égaux pour former un parallélogramme $ABDC$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec2-l2-e4",
            question: "Le vecteur opposé de $\\overrightarrow{u}\\begin{pmatrix} -4 \\\\ 7 \\end{pmatrix}$ a pour coordonnées :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix} 4 \\\\ -7 \\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix} -4 \\\\ 7 \\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix} 4 \\\\ 7 \\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix} -4 \\\\ -7 \\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "Le vecteur opposé inverse le signe de chaque coordonnée : $-\\overrightarrow{u}\\begin{pmatrix} 4 \\\\ -7 \\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec2-l2-e5",
            question: "On donne $A(1\\ ;\\ 1)$, $B(4\\ ;\\ 2)$ et $C(2\\ ;\\ 6)$. Détermine les coordonnées du point $D$ tel que $ABDC$ soit un parallélogramme.",
            type: "open",
            modelAnswer: "$ABDC$ est un parallélogramme si et seulement si $\\overrightarrow{AB} = \\overrightarrow{CD}$.\\n\\nOn calcule les coordonnées de $\\overrightarrow{AB}$ :\\n\\n$$\\overrightarrow{AB}\\begin{pmatrix} 4-1 \\\\ 2-1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$$\\n\\nOn note $D(x_D\\ ;\\ y_D)$. On veut $\\overrightarrow{CD} = \\overrightarrow{AB}$ :\\n\\n$$\\begin{pmatrix} x_D - 2 \\\\ y_D - 6 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$$\\n\\nDonc $x_D - 2 = 3 \\implies x_D = 5$ et $y_D - 6 = 1 \\implies y_D = 7$.\\n\\n$$\\boxed{D(5\\ ;\\ 7)}$$",
            explanation: "On utilise la caractérisation vectorielle du parallélogramme $\\overrightarrow{AB}=\\overrightarrow{CD}$, qu'on traduit en deux équations sur les coordonnées de $D$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "vec2-l3",
        slug: "milieu-et-distance-dans-un-repere",
        title: "Milieu et distance dans un repère",
        durationMinutes: 14,
        content: `## Coordonnées du milieu d'un segment

Si $A(x_A\\ ;\\ y_A)$ et $B(x_B\\ ;\\ y_B)$, les coordonnées du milieu $I$ du segment $[AB]$ sont :

$$I\\left(\\dfrac{x_A+x_B}{2}\\ ;\\ \\dfrac{y_A+y_B}{2}\\right)$$

**Exemple :** pour $A(1\\ ;\\ 3)$ et $B(5\\ ;\\ 7)$, le milieu de $[AB]$ est $I\\left(\\dfrac{1+5}{2}\\ ;\\ \\dfrac{3+7}{2}\\right) = I(3\\ ;\\ 5)$.

## Distance entre deux points

La distance $AB$ se calcule à partir des coordonnées de $A$ et $B$ grâce au théorème de Pythagore appliqué au triangle rectangle formé par les projections sur les axes :

$$AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$$

**Exemple :** pour $A(1\\ ;\\ 2)$ et $B(4\\ ;\\ 6)$ :

$$AB = \\sqrt{(4-1)^2+(6-2)^2} = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$$

> **Lien avec les vecteurs :** la distance $AB$ est exactement la norme du vecteur $\\overrightarrow{AB}$ : $AB = \\|\\overrightarrow{AB}\\|$.

## Application : nature d'un triangle

On peut utiliser les formules de distance pour calculer les longueurs des côtés d'un triangle, puis utiliser la réciproque du théorème de Pythagore pour déterminer s'il est rectangle, ou comparer les longueurs pour voir s'il est isocèle ou équilatéral.`,
        exercises: [
          {
            id: "vec2-l3-e1",
            question: "Quelles sont les coordonnées du milieu de $[AB]$ avec $A(2\\ ;\\ 4)$ et $B(6\\ ;\\ 8)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(4\\ ;\\ 6)$" },
              { id: "B", text: "$(8\\ ;\\ 12)$" },
              { id: "C", text: "$(2\\ ;\\ 4)$" },
              { id: "D", text: "$(4\\ ;\\ 4)$" },
            ],
            correctId: "A",
            explanation: "Le milieu a pour coordonnées $\\left(\\dfrac{2+6}{2}\\ ;\\ \\dfrac{4+8}{2}\\right) = (4\\ ;\\ 6)$.",
            difficulty: "debutant",
          },
          {
            id: "vec2-l3-e2",
            question: "Quelle formule permet de calculer la distance $AB$ entre $A(x_A\\ ;\\ y_A)$ et $B(x_B\\ ;\\ y_B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$" },
              { id: "B", text: "$AB = (x_B-x_A)+(y_B-y_A)$" },
              { id: "C", text: "$AB = x_B \\times y_B$" },
              { id: "D", text: "$AB = \\sqrt{x_B^2+y_B^2}$" },
            ],
            correctId: "A",
            explanation: "Cette formule découle du théorème de Pythagore appliqué au triangle rectangle formé par les écarts en abscisse et en ordonnée entre les deux points.",
            difficulty: "debutant",
          },
          {
            id: "vec2-l3-e3",
            question: "La distance $AB$ est égale à la norme du vecteur $\\overrightarrow{AB}$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Par définition, la norme d'un vecteur $\\overrightarrow{AB}$ représente la longueur du segment $[AB]$, donc $\\|\\overrightarrow{AB}\\| = AB$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec2-l3-e4",
            question: "Calcule la distance $AB$ avec $A(0\\ ;\\ 0)$ et $B(8\\ ;\\ 6)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$14$" },
              { id: "C", text: "$48$" },
              { id: "D", text: "$100$" },
            ],
            correctId: "A",
            explanation: "$AB = \\sqrt{(8-0)^2+(6-0)^2} = \\sqrt{64+36} = \\sqrt{100} = 10$.",
            difficulty: "intermediaire",
          },
          {
            id: "vec2-l3-e5",
            question: "On donne $A(-2\\ ;\\ 1)$, $B(4\\ ;\\ 1)$ et $C(1\\ ;\\ 5)$. Calcule les longueurs $AB$, $AC$ et $BC$, puis détermine si le triangle $ABC$ est rectangle (en utilisant la réciproque du théorème de Pythagore).",
            type: "open",
            modelAnswer: "On calcule chaque longueur avec la formule de distance.\\n\\n$$AB = \\sqrt{(4-(-2))^2+(1-1)^2} = \\sqrt{6^2+0^2} = \\sqrt{36} = 6$$\\n\\n$$AC = \\sqrt{(1-(-2))^2+(5-1)^2} = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$$\\n\\n$$BC = \\sqrt{(1-4)^2+(5-1)^2} = \\sqrt{(-3)^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$$\\n\\nLe côté le plus long est $AB=6$. On teste la réciproque du théorème de Pythagore :\\n\\n$$AC^2+BC^2 = 5^2+5^2 = 25+25=50 \\qquad \\text{et} \\qquad AB^2 = 6^2=36$$\\n\\nComme $50 \\neq 36$, l'égalité de Pythagore n'est pas vérifiée.\\n\\n$$\\boxed{AB=6,\\ AC=5,\\ BC=5\\ ; \\ \\text{le triangle } ABC \\text{ n'est pas rectangle (mais il est isocèle en } C\\text{)}}$$",
            explanation: "On calcule systématiquement les trois longueurs avec la formule de distance, puis on compare le carré du plus grand côté à la somme des carrés des deux autres pour conclure sur la nature du triangle.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Trigonométrie
  // ─────────────────────────────────────────────
  {
    id: "tri2-id",
    slug: "trigonometrie-2nde",
    title: "Trigonométrie dans le triangle rectangle et le cercle",
    description: "Révisez sinus, cosinus et tangente dans le triangle rectangle, découvrez le cercle trigonométrique et les valeurs remarquables.",
    schoolLevel: "2nde",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📐",
    lessons: [
      {
        id: "tri2-l1",
        slug: "trigonometrie-du-triangle-rectangle",
        title: "Rappels de trigonométrie du triangle rectangle",
        durationMinutes: 14,
        content: `## Sinus, cosinus, tangente

Dans un triangle rectangle, pour un angle aigu $\\widehat{A}$ :

$$\\sin(\\widehat{A}) = \\dfrac{\\text{côté opposé}}{\\text{hypoténuse}} \\qquad \\cos(\\widehat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}} \\qquad \\tan(\\widehat{A}) = \\dfrac{\\text{côté opposé}}{\\text{côté adjacent}}$$

> **Moyen mnémotechnique :** SOH-CAH-TOA — Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent.

## Relation fondamentale

Pour tout angle $\\widehat{A}$ :

$$\\sin^2(\\widehat{A}) + \\cos^2(\\widehat{A}) = 1 \\qquad \\qquad \\tan(\\widehat{A}) = \\dfrac{\\sin(\\widehat{A})}{\\cos(\\widehat{A})}$$

## Calculer une longueur

**Exemple :** dans un triangle $ABC$ rectangle en $A$, avec $\\widehat{B} = 40°$ et $BC=10$ cm (hypoténuse), on cherche $AB$ (côté adjacent à $\\widehat{B}$) :

$$\\cos(40°) = \\dfrac{AB}{BC} \\implies AB = BC \\times \\cos(40°) = 10 \\times \\cos(40°) \\approx 7{,}66 \\text{ cm}$$

## Calculer un angle

Pour trouver un angle à partir d'un rapport de longueurs connu, on utilise la fonction réciproque (touche $\\sin^{-1}$, $\\cos^{-1}$ ou $\\tan^{-1}$ de la calculatrice).

**Exemple :** si $\\sin(\\widehat{A}) = 0{,}5$, alors $\\widehat{A} = \\sin^{-1}(0{,}5) = 30°$.`,
        exercises: [
          {
            id: "tri2-l1-e1",
            question: "Dans un triangle rectangle, le cosinus d'un angle aigu est égal à :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$" },
              { id: "B", text: "$\\dfrac{\\text{côté opposé}}{\\text{hypoténuse}}$" },
              { id: "C", text: "$\\dfrac{\\text{côté opposé}}{\\text{côté adjacent}}$" },
              { id: "D", text: "$\\dfrac{\\text{hypoténuse}}{\\text{côté adjacent}}$" },
            ],
            correctId: "A",
            explanation: "Le cosinus d'un angle aigu dans un triangle rectangle est le rapport entre le côté adjacent à cet angle et l'hypoténuse.",
            difficulty: "debutant",
          },
          {
            id: "tri2-l1-e2",
            question: "Que vaut $\\sin^2(\\widehat{A}) + \\cos^2(\\widehat{A})$ pour tout angle $\\widehat{A}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$0$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "Cela dépend de l'angle" },
            ],
            correctId: "A",
            explanation: "La relation fondamentale de la trigonométrie, $\\sin^2(\\widehat{A})+\\cos^2(\\widehat{A})=1$, est valable pour tout angle, quel qu'il soit.",
            difficulty: "debutant",
          },
          {
            id: "tri2-l1-e3",
            question: "$\\tan(\\widehat{A}) = \\dfrac{\\sin(\\widehat{A})}{\\cos(\\widehat{A})}$ pour tout angle $\\widehat{A}$ où $\\cos(\\widehat{A}) \\neq 0$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "C'est une relation fondamentale de trigonométrie qui découle directement des définitions de sinus, cosinus et tangente dans le triangle rectangle.",
            difficulty: "intermediaire",
          },
          {
            id: "tri2-l1-e4",
            question: "On sait que $\\cos(\\widehat{A}) = 0{,}6$. Que vaut $\\sin^2(\\widehat{A})$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}64$" },
              { id: "B", text: "$0{,}36$" },
              { id: "C", text: "$0{,}4$" },
              { id: "D", text: "$1{,}36$" },
            ],
            correctId: "A",
            explanation: "$\\sin^2(\\widehat{A}) = 1-\\cos^2(\\widehat{A}) = 1-0{,}36 = 0{,}64$.",
            difficulty: "intermediaire",
          },
          {
            id: "tri2-l1-e5",
            question: "Un triangle $ABC$ est rectangle en $A$. On a $\\widehat{B}=35°$ et $AB=8$ cm. Calcule la longueur $BC$ (l'hypoténuse) arrondie au centième.",
            type: "open",
            modelAnswer: "Dans le triangle $ABC$ rectangle en $A$, $AB$ est le côté adjacent à l'angle $\\widehat{B}$, et $BC$ est l'hypoténuse.\\n\\nOn utilise le cosinus :\\n\\n$$\\cos(\\widehat{B}) = \\dfrac{AB}{BC}$$\\n\\n$$\\cos(35°) = \\dfrac{8}{BC}$$\\n\\n$$BC = \\dfrac{8}{\\cos(35°)}$$\\n\\nOn calcule : $\\cos(35°) \\approx 0{,}8192$, donc :\\n\\n$$BC \\approx \\dfrac{8}{0{,}8192} \\approx 9{,}77 \\text{ cm}$$\\n\\n$$\\boxed{BC \\approx 9{,}77 \\text{ cm}}$$",
            explanation: "On identifie le côté adjacent et l'hypoténuse par rapport à l'angle donné, on choisit la fonction trigonométrique appropriée (ici le cosinus), puis on isole la longueur cherchée.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "tri2-l2",
        slug: "le-cercle-trigonometrique",
        title: "Le cercle trigonométrique",
        durationMinutes: 14,
        content: `## Définition

Le **cercle trigonométrique** est un cercle de rayon $1$, centré à l'origine $O$ d'un repère orthonormé. On le parcourt dans le **sens trigonométrique** (sens inverse des aiguilles d'une montre), à partir du point $I(1\\ ;\\ 0)$.

## Repérer un point par un angle

À tout réel $x$ (mesure d'angle en radians ou en degrés), on associe un unique point $M$ sur le cercle trigonométrique, obtenu en parcourant une longueur d'arc $x$ à partir de $I$.

On définit alors :

$$\\cos(x) = \\text{abscisse de } M \\qquad \\qquad \\sin(x) = \\text{ordonnée de } M$$

## Conversion degrés ↔ radians

$$\\pi \\text{ rad} = 180°$$

Pour convertir, on utilise la proportionnalité : $x \\text{ (radians)} = \\dfrac{\\pi}{180} \\times x \\text{ (degrés)}$.

**Exemple :** $90° = \\dfrac{\\pi}{180}\\times90 = \\dfrac{\\pi}{2}$ rad.

## Propriétés du cercle trigonométrique

Pour tout réel $x$ :

$$-1 \\leqslant \\cos(x) \\leqslant 1 \\qquad \\qquad -1 \\leqslant \\sin(x) \\leqslant 1 \\qquad \\qquad \\cos^2(x)+\\sin^2(x)=1$$

> Ces bornes viennent du fait que $M$ est sur un cercle de rayon $1$ : ses coordonnées (le cosinus et le sinus) sont donc toujours comprises entre $-1$ et $1$.`,
        exercises: [
          {
            id: "tri2-l2-e1",
            question: "Le cercle trigonométrique a pour rayon :",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$\\pi$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "A",
            explanation: "Par définition, le cercle trigonométrique est un cercle de rayon $1$.",
            difficulty: "debutant",
          },
          {
            id: "tri2-l2-e2",
            question: "Combien de radians correspondent à $180°$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\pi$" },
              { id: "B", text: "$2\\pi$" },
              { id: "C", text: "$\\dfrac{\\pi}{2}$" },
              { id: "D", text: "$180$" },
            ],
            correctId: "A",
            explanation: "Par définition de la conversion, $180°$ correspond exactement à $\\pi$ radians.",
            difficulty: "debutant",
          },
          {
            id: "tri2-l2-e3",
            question: "Pour tout réel $x$, $\\cos(x)$ peut prendre n'importe quelle valeur réelle.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Le cosinus est l'abscisse d'un point sur le cercle trigonométrique de rayon $1$ : il est donc toujours compris entre $-1$ et $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "tri2-l2-e4",
            question: "Convertis $60°$ en radians.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{\\pi}{3}$" },
              { id: "B", text: "$\\dfrac{\\pi}{6}$" },
              { id: "C", text: "$\\dfrac{\\pi}{2}$" },
              { id: "D", text: "$\\dfrac{2\\pi}{3}$" },
            ],
            correctId: "A",
            explanation: "$60° = \\dfrac{\\pi}{180}\\times 60 = \\dfrac{60\\pi}{180} = \\dfrac{\\pi}{3}$.",
            difficulty: "intermediaire",
          },
          {
            id: "tri2-l2-e5",
            question: "Sachant que $\\cos(x) = \\dfrac{3}{5}$ et que $x$ correspond à un point du cercle trigonométrique situé dans le quart de cercle où le sinus est positif, calcule $\\sin(x)$.",
            type: "open",
            modelAnswer: "On utilise la relation fondamentale $\\cos^2(x)+\\sin^2(x)=1$.\\n\\n$$\\sin^2(x) = 1-\\cos^2(x) = 1-\\left(\\dfrac{3}{5}\\right)^2 = 1-\\dfrac{9}{25} = \\dfrac{16}{25}$$\\n\\nOn en déduit :\\n\\n$$\\sin(x) = \\pm\\sqrt{\\dfrac{16}{25}} = \\pm\\dfrac{4}{5}$$\\n\\nOn nous précise que $x$ correspond à un point où le sinus est positif, donc on retient la solution positive.\\n\\n$$\\boxed{\\sin(x) = \\dfrac{4}{5}}$$",
            explanation: "La relation $\\cos^2(x)+\\sin^2(x)=1$ donne deux solutions possibles pour $\\sin(x)$ (opposées) ; il faut utiliser une information sur le signe (ici donné par la position du point sur le cercle) pour choisir la bonne.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "tri2-l3",
        slug: "valeurs-remarquables",
        title: "Valeurs remarquables et applications",
        durationMinutes: 14,
        content: `## Tableau des valeurs remarquables

| Angle | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ |
|---|---|---|---|---|---|
| Angle (rad) | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |
| $\\cos$ | $1$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{1}{2}$ | $0$ |
| $\\sin$ | $0$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ | $1$ |

> **Remarque :** on observe une symétrie entre les valeurs de $\\sin$ et $\\cos$ : $\\cos\\left(\\dfrac{\\pi}{6}\\right) = \\sin\\left(\\dfrac{\\pi}{3}\\right)$, ce qui s'explique par le fait que ces deux angles sont complémentaires ($30°+60°=90°$).

## Méthode pour retenir le tableau

Les numérateurs des sinus suivent l'ordre $0,1,\\sqrt{2},\\sqrt{3},4$ sous la racine, divisés par $2$ :

$$\\sin: \\quad \\dfrac{\\sqrt{0}}{2},\\ \\dfrac{\\sqrt{1}}{2},\\ \\dfrac{\\sqrt{2}}{2},\\ \\dfrac{\\sqrt{3}}{2},\\ \\dfrac{\\sqrt{4}}{2}$$

et les cosinus se lisent dans l'ordre inverse.

## Application : angles associés

Pour un angle complémentaire ($90°-x$) :

$$\\cos(90°-x) = \\sin(x) \\qquad \\qquad \\sin(90°-x) = \\cos(x)$$

**Exemple :** $\\sin(60°) = \\cos(30°) = \\dfrac{\\sqrt{3}}{2}$ (car $60°$ et $30°$ sont complémentaires).`,
        exercises: [
          {
            id: "tri2-l3-e1",
            question: "Que vaut $\\cos(60°)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{2}$" },
              { id: "B", text: "$\\dfrac{\\sqrt{3}}{2}$" },
              { id: "C", text: "$\\dfrac{\\sqrt{2}}{2}$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "A",
            explanation: "D'après le tableau des valeurs remarquables, $\\cos(60°) = \\dfrac{1}{2}$.",
            difficulty: "debutant",
          },
          {
            id: "tri2-l3-e2",
            question: "Que vaut $\\sin(45°)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{\\sqrt{2}}{2}$" },
              { id: "B", text: "$\\dfrac{1}{2}$" },
              { id: "C", text: "$\\dfrac{\\sqrt{3}}{2}$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "A",
            explanation: "D'après le tableau des valeurs remarquables, $\\sin(45°) = \\dfrac{\\sqrt{2}}{2}$.",
            difficulty: "debutant",
          },
          {
            id: "tri2-l3-e3",
            question: "$\\sin(30°)$ et $\\cos(60°)$ sont égaux.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "$\\sin(30°)=\\dfrac{1}{2}$ et $\\cos(60°)=\\dfrac{1}{2}$ : ils sont bien égaux, car $30°$ et $60°$ sont des angles complémentaires ($\\sin(90°-x)=\\cos(x)$).",
            difficulty: "intermediaire",
          },
          {
            id: "tri2-l3-e4",
            question: "Sachant que $\\sin(60°)=\\dfrac{\\sqrt{3}}{2}$, que vaut $\\cos(30°)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{\\sqrt{3}}{2}$" },
              { id: "B", text: "$\\dfrac{1}{2}$" },
              { id: "C", text: "$\\dfrac{\\sqrt{2}}{2}$" },
              { id: "D", text: "$\\sqrt{3}$" },
            ],
            correctId: "A",
            explanation: "$30°$ et $60°$ sont complémentaires : $\\cos(30°) = \\sin(90°-30°) = \\sin(60°) = \\dfrac{\\sqrt{3}}{2}$.",
            difficulty: "intermediaire",
          },
          {
            id: "tri2-l3-e5",
            question: "Un triangle $ABC$ est rectangle en $A$, avec $\\widehat{B}=30°$ et $AC=5$ cm (côté opposé à $\\widehat{B}$). Calcule l'hypoténuse $BC$ en utilisant les valeurs remarquables, sans calculatrice.",
            type: "open",
            modelAnswer: "Dans le triangle $ABC$ rectangle en $A$, $AC$ est le côté opposé à $\\widehat{B}$, et $BC$ est l'hypoténuse.\\n\\nOn utilise le sinus :\\n\\n$$\\sin(\\widehat{B}) = \\dfrac{AC}{BC}$$\\n\\n$$\\sin(30°) = \\dfrac{5}{BC}$$\\n\\nOn sait que $\\sin(30°) = \\dfrac{1}{2}$, donc :\\n\\n$$\\dfrac{1}{2} = \\dfrac{5}{BC} \\implies BC = 5 \\times 2 = 10$$\\n\\n$$\\boxed{BC = 10 \\text{ cm}}$$",
            explanation: "Grâce à la valeur remarquable $\\sin(30°)=\\dfrac{1}{2}$, on peut résoudre cet exercice de trigonométrie sans calculatrice, en isolant directement la longueur cherchée dans l'équation.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Statistiques descriptives
  // ─────────────────────────────────────────────
  {
    id: "sta2-id",
    slug: "statistiques-descriptives-2nde",
    title: "Statistiques descriptives",
    description: "Calculez moyenne, médiane, quartiles et écart interquartile d'une série statistique, et découvrez variance et écart-type.",
    schoolLevel: "2nde",
    subject: "probabilites",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "📊",
    lessons: [
      {
        id: "sta2-l1",
        slug: "moyenne-et-mediane",
        title: "Moyenne et médiane",
        durationMinutes: 12,
        content: `## La moyenne

La **moyenne** $\\bar{x}$ d'une série statistique de $n$ valeurs $x_1, x_2, \\ldots, x_n$ est :

$$\\bar{x} = \\dfrac{x_1+x_2+\\cdots+x_n}{n}$$

Si les valeurs sont regroupées avec des effectifs $n_i$, on utilise la **moyenne pondérée** :

$$\\bar{x} = \\dfrac{n_1x_1+n_2x_2+\\cdots+n_kx_k}{n_1+n_2+\\cdots+n_k}$$

## La médiane

La **médiane** $\\text{Me}$ d'une série ordonnée est la valeur qui partage la série en deux groupes de même effectif : au moins $50\\%$ des valeurs sont inférieures ou égales à $\\text{Me}$, et au moins $50\\%$ sont supérieures ou égales.

### Méthode pour déterminer la médiane

1. Ordonner la série dans l'ordre croissant.
2. Si $n$ est **impair**, la médiane est la valeur centrale (rang $\\dfrac{n+1}{2}$).
3. Si $n$ est **pair**, la médiane est la moyenne des deux valeurs centrales (rangs $\\dfrac{n}{2}$ et $\\dfrac{n}{2}+1$).

**Exemple :** série ordonnée $2, 5, 7, 9, 12$ ($n=5$, impair) : médiane $= 7$ (3ème valeur).

**Exemple :** série ordonnée $2, 5, 7, 9$ ($n=4$, pair) : médiane $= \\dfrac{5+7}{2} = 6$.

> **Remarque :** la moyenne et la médiane sont deux indicateurs de **position centrale**, mais la médiane est moins sensible aux valeurs extrêmes (les valeurs très grandes ou très petites).`,
        exercises: [
          {
            id: "sta2-l1-e1",
            question: "Calcule la moyenne de la série $4, 8, 6, 10, 7$.",
            type: "mcq",
            options: [
              { id: "A", text: "$7$" },
              { id: "B", text: "$35$" },
              { id: "C", text: "$8$" },
              { id: "D", text: "$6$" },
            ],
            correctId: "A",
            explanation: "$\\bar{x} = \\dfrac{4+8+6+10+7}{5} = \\dfrac{35}{5} = 7$.",
            difficulty: "debutant",
          },
          {
            id: "sta2-l1-e2",
            question: "Quelle est la médiane de la série ordonnée $1, 3, 5, 7, 9$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$3$" },
              { id: "C", text: "$7$" },
              { id: "D", text: "$25$" },
            ],
            correctId: "A",
            explanation: "Avec $5$ valeurs (impair), la médiane est la valeur centrale, ici la 3ème : $5$.",
            difficulty: "debutant",
          },
          {
            id: "sta2-l1-e3",
            question: "La médiane est toujours égale à la moyenne d'une série statistique.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Moyenne et médiane sont deux indicateurs différents qui coïncident parfois (séries symétriques) mais sont en général différents, surtout en présence de valeurs extrêmes.",
            difficulty: "intermediaire",
          },
          {
            id: "sta2-l1-e4",
            question: "Quelle est la médiane de la série ordonnée $2, 4, 6, 8$ (4 valeurs) ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$4$" },
              { id: "D", text: "$20$" },
            ],
            correctId: "A",
            explanation: "Avec $4$ valeurs (pair), la médiane est la moyenne des deux valeurs centrales ($4$ et $6$) : $\\dfrac{4+6}{2}=5$.",
            difficulty: "intermediaire",
          },
          {
            id: "sta2-l1-e5",
            question: "Une classe de $20$ élèves a une moyenne de $12$ à un devoir. Un nouvel élève arrive et obtient $19$ à ce devoir. Calcule la nouvelle moyenne de la classe (21 élèves) arrondie au centième.",
            type: "open",
            modelAnswer: "La somme des notes des $20$ premiers élèves est :\\n\\n$$S_{20} = 20 \\times 12 = 240$$\\n\\nEn ajoutant la note du nouvel élève :\\n\\n$$S_{21} = 240+19 = 259$$\\n\\nLa nouvelle moyenne sur $21$ élèves est :\\n\\n$$\\bar{x} = \\dfrac{259}{21} \\approx 12{,}33$$\\n\\n$$\\boxed{\\bar{x} \\approx 12{,}33}$$",
            explanation: "On retrouve la somme totale des notes à partir de la moyenne initiale ($\\text{somme} = \\text{moyenne} \\times \\text{effectif}$), on ajoute la nouvelle valeur, puis on recalcule la moyenne avec le nouvel effectif.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "sta2-l2",
        slug: "quartiles-et-ecart-interquartile",
        title: "Quartiles et écart interquartile",
        durationMinutes: 14,
        content: `## Les quartiles

Les **quartiles** $Q_1$ et $Q_3$ partagent une série ordonnée en quatre groupes de même effectif (environ).

- $Q_1$ (premier quartile) : la plus petite valeur de la série telle qu'au moins $25\\%$ des valeurs lui soient inférieures ou égales.
- $Q_3$ (troisième quartile) : la plus petite valeur de la série telle qu'au moins $75\\%$ des valeurs lui soient inférieures ou égales.

### Méthode de calcul (pour $n$ valeurs ordonnées)

1. Calculer $\\dfrac{n}{4}$ ; si ce n'est pas un entier, on prend l'entier immédiatement supérieur pour le **rang** de $Q_1$. Si c'est un entier, on prend ce rang lui-même.
2. Calculer $\\dfrac{3n}{4}$ ; même règle pour le rang de $Q_3$.

**Exemple :** série ordonnée de $20$ valeurs. $\\dfrac{20}{4}=5$ (entier) : $Q_1$ est la $5^{\\text{ème}}$ valeur. $\\dfrac{3\\times20}{4}=15$ (entier) : $Q_3$ est la $15^{\\text{ème}}$ valeur.

**Exemple :** série ordonnée de $13$ valeurs. $\\dfrac{13}{4}=3{,}25$, on arrondit à l'entier supérieur : $Q_1$ est la $4^{\\text{ème}}$ valeur.

## L'écart interquartile

L'**écart interquartile** mesure la dispersion de la "moitié centrale" des données :

$$\\text{EIQ} = Q_3 - Q_1$$

> Un écart interquartile petit signifie que les valeurs centrales de la série sont peu dispersées ; un écart interquartile grand signifie qu'elles sont très dispersées.`,
        exercises: [
          {
            id: "sta2-l2-e1",
            question: "Le premier quartile $Q_1$ d'une série correspond à :",
            type: "mcq",
            options: [
              { id: "A", text: "la plus petite valeur telle qu'au moins $25\\%$ des données lui soient inférieures ou égales" },
              { id: "B", text: "la moyenne de la série" },
              { id: "C", text: "la valeur la plus fréquente" },
              { id: "D", text: "la valeur maximale de la série" },
            ],
            correctId: "A",
            explanation: "Par définition, $Q_1$ est le seuil au-dessous duquel se trouvent environ $25\\%$ des valeurs de la série ordonnée.",
            difficulty: "debutant",
          },
          {
            id: "sta2-l2-e2",
            question: "Comment calcule-t-on l'écart interquartile ?",
            type: "mcq",
            options: [
              { id: "A", text: "$Q_3 - Q_1$" },
              { id: "B", text: "$Q_3 + Q_1$" },
              { id: "C", text: "$\\dfrac{Q_3+Q_1}{2}$" },
              { id: "D", text: "$Q_1 - Q_3$" },
            ],
            correctId: "A",
            explanation: "L'écart interquartile est la différence entre le troisième et le premier quartile : $\\text{EIQ}=Q_3-Q_1$.",
            difficulty: "debutant",
          },
          {
            id: "sta2-l2-e3",
            question: "Un écart interquartile élevé indique une dispersion importante des valeurs centrales de la série.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Plus l'écart interquartile est grand, plus les $50\\%$ de valeurs centrales de la série sont étalées (dispersées).",
            difficulty: "intermediaire",
          },
          {
            id: "sta2-l2-e4",
            question: "Une série ordonnée comporte $16$ valeurs. Quel est le rang de $Q_1$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4$" },
              { id: "B", text: "$8$" },
              { id: "C", text: "$12$" },
              { id: "D", text: "$16$" },
            ],
            correctId: "A",
            explanation: "$\\dfrac{16}{4}=4$, qui est un entier : $Q_1$ est donc la $4^{\\text{ème}}$ valeur de la série ordonnée.",
            difficulty: "intermediaire",
          },
          {
            id: "sta2-l2-e5",
            question: "On donne la série ordonnée de $12$ notes : $5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19$. Détermine $Q_1$, $Q_3$, puis l'écart interquartile.",
            type: "open",
            modelAnswer: "Il y a $n=12$ valeurs.\\n\\n**Rang de $Q_1$ :** $\\dfrac{n}{4} = \\dfrac{12}{4} = 3$, qui est un entier. $Q_1$ est donc la $3^{\\text{ème}}$ valeur de la série ordonnée.\\n\\nLa série est : $5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19$. La 3ème valeur est $8$, donc $Q_1=8$.\\n\\n**Rang de $Q_3$ :** $\\dfrac{3n}{4} = \\dfrac{36}{4} = 9$, qui est un entier. $Q_3$ est donc la $9^{\\text{ème}}$ valeur.\\n\\nLa 9ème valeur est $14$, donc $Q_3=14$.\\n\\n**Écart interquartile :**\\n\\n$$\\text{EIQ} = Q_3-Q_1 = 14-8 = 6$$\\n\\n$$\\boxed{Q_1=8\\ ;\\ Q_3=14\\ ;\\ \\text{EIQ}=6}$$",
            explanation: "On calcule les rangs théoriques de $Q_1$ et $Q_3$ avec $\\frac{n}{4}$ et $\\frac{3n}{4}$, on lit les valeurs correspondantes dans la série ordonnée, puis on soustrait pour obtenir l'écart interquartile.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "sta2-l3",
        slug: "variance-et-ecart-type",
        title: "Variance et écart-type",
        durationMinutes: 14,
        content: `## Pourquoi mesurer la dispersion ?

Deux séries peuvent avoir la même moyenne mais être très différemment dispersées autour de cette moyenne. La **variance** et l'**écart-type** permettent de quantifier cette dispersion par rapport à la moyenne.

## La variance

La **variance** $V$ d'une série de valeurs $x_1, \\ldots, x_n$ de moyenne $\\bar{x}$ est la moyenne des carrés des écarts à la moyenne :

$$V = \\dfrac{(x_1-\\bar{x})^2+(x_2-\\bar{x})^2+\\cdots+(x_n-\\bar{x})^2}{n}$$

## L'écart-type

L'**écart-type** $\\sigma$ est la racine carrée de la variance :

$$\\sigma = \\sqrt{V}$$

> **Pourquoi l'écart-type plutôt que la variance ?** La variance est exprimée dans l'unité au carré (par exemple en $\\text{cm}^2$ si les données sont en cm), ce qui n'est pas pratique à interpréter. L'écart-type, lui, est exprimé dans la **même unité** que les données.

### Méthode de calcul

1. Calculer la moyenne $\\bar{x}$.
2. Calculer chaque écart $(x_i-\\bar{x})$, puis l'élever au carré.
3. Faire la moyenne de ces carrés : c'est la variance $V$.
4. Prendre la racine carrée de $V$ pour obtenir $\\sigma$.

**Exemple :** série $2, 4, 6$ de moyenne $\\bar{x}=4$.

Écarts : $-2, 0, 2$. Carrés des écarts : $4, 0, 4$.

$$V = \\dfrac{4+0+4}{3} = \\dfrac{8}{3} \\qquad \\sigma = \\sqrt{\\dfrac{8}{3}} \\approx 1{,}63$$

> Plus l'écart-type est grand, plus les valeurs sont dispersées autour de la moyenne ; un écart-type proche de $0$ signifie que les valeurs sont très regroupées autour de la moyenne.`,
        exercises: [
          {
            id: "sta2-l3-e1",
            question: "L'écart-type est :",
            type: "mcq",
            options: [
              { id: "A", text: "la racine carrée de la variance" },
              { id: "B", text: "le carré de la variance" },
              { id: "C", text: "égal à la moyenne" },
              { id: "D", text: "toujours négatif" },
            ],
            correctId: "A",
            explanation: "Par définition, $\\sigma = \\sqrt{V}$ : l'écart-type est la racine carrée de la variance.",
            difficulty: "debutant",
          },
          {
            id: "sta2-l3-e2",
            question: "Pourquoi préfère-t-on souvent utiliser l'écart-type plutôt que la variance pour interpréter une dispersion ?",
            type: "mcq",
            options: [
              { id: "A", text: "parce que l'écart-type est dans la même unité que les données" },
              { id: "B", text: "parce que la variance n'existe pas toujours" },
              { id: "C", text: "parce que l'écart-type est toujours plus petit" },
              { id: "D", text: "il n'y a pas de raison particulière" },
            ],
            correctId: "A",
            explanation: "La variance est exprimée dans l'unité au carré des données, ce qui complique l'interprétation. L'écart-type ramène la dispersion dans l'unité d'origine des données.",
            difficulty: "debutant",
          },
          {
            id: "sta2-l3-e3",
            question: "Un écart-type proche de $0$ signifie que les valeurs de la série sont très dispersées.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "faux",
            explanation: "Au contraire, un écart-type proche de $0$ signifie que les valeurs sont très peu dispersées, c'est-à-dire regroupées autour de la moyenne.",
            difficulty: "intermediaire",
          },
          {
            id: "sta2-l3-e4",
            question: "Une série a une variance $V=25$. Quel est son écart-type ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$625$" },
              { id: "C", text: "$12{,}5$" },
              { id: "D", text: "$50$" },
            ],
            correctId: "A",
            explanation: "$\\sigma = \\sqrt{V} = \\sqrt{25} = 5$.",
            difficulty: "intermediaire",
          },
          {
            id: "sta2-l3-e5",
            question: "Calcule la variance puis l'écart-type de la série $3, 5, 7, 9$ (donne l'écart-type sous forme exacte simplifiée).",
            type: "open",
            modelAnswer: "**Étape 1 : la moyenne.**\\n\\n$$\\bar{x} = \\dfrac{3+5+7+9}{4} = \\dfrac{24}{4} = 6$$\\n\\n**Étape 2 : les écarts à la moyenne et leurs carrés.**\\n\\n$$3-6=-3 \\ \\to\\ 9 \\qquad 5-6=-1 \\ \\to\\ 1 \\qquad 7-6=1 \\ \\to\\ 1 \\qquad 9-6=3 \\ \\to\\ 9$$\\n\\n**Étape 3 : la variance.**\\n\\n$$V = \\dfrac{9+1+1+9}{4} = \\dfrac{20}{4} = 5$$\\n\\n**Étape 4 : l'écart-type.**\\n\\n$$\\sigma = \\sqrt{5}$$\\n\\n$$\\boxed{V=5 \\quad ; \\quad \\sigma = \\sqrt{5} \\approx 2{,}24}$$",
            explanation: "On suit méthodiquement les quatre étapes du calcul : moyenne, écarts à la moyenne, carrés de ces écarts dont on fait la moyenne (variance), puis racine carrée (écart-type).",
            difficulty: "expert",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2nde — Probabilités
  // ─────────────────────────────────────────────
  {
    id: "pro2-id",
    slug: "probabilites-2nde",
    title: "Probabilités",
    description: "Découvrez le vocabulaire des probabilités, l'équiprobabilité, la réunion et l'intersection d'événements, et la formule $P(A \\cup B) = P(A)+P(B)-P(A \\cap B)$.",
    schoolLevel: "2nde",
    subject: "probabilites",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🎲",
    lessons: [
      {
        id: "pro2-l1",
        slug: "vocabulaire-des-probabilites",
        title: "Vocabulaire et équiprobabilité",
        durationMinutes: 12,
        content: `## Vocabulaire de base

- L'**univers** $\\Omega$ est l'ensemble de tous les résultats possibles d'une expérience aléatoire.
- Une **issue** (ou éventualité) est un résultat possible de l'expérience, un élément de $\\Omega$.
- Un **événement** est un ensemble d'issues, c'est-à-dire une partie de $\\Omega$.
- L'**événement contraire** de $A$, noté $\\bar{A}$, est constitué des issues qui n'appartiennent pas à $A$.

**Exemple :** on lance un dé à 6 faces. $\\Omega = \\{1,2,3,4,5,6\\}$. L'événement $A$ = "obtenir un nombre pair" $=\\{2,4,6\\}$. Son contraire $\\bar{A}$ = "obtenir un nombre impair" $=\\{1,3,5\\}$.

## Propriétés des probabilités

Pour tout événement $A$ :

$$0 \\leqslant P(A) \\leqslant 1 \\qquad \\qquad P(\\Omega) = 1 \\qquad \\qquad P(\\emptyset) = 0$$

$$P(\\bar{A}) = 1 - P(A)$$

## Situation d'équiprobabilité

On dit qu'il y a **équiprobabilité** lorsque toutes les issues de $\\Omega$ ont la **même probabilité** de se produire (par exemple un dé non truqué, une pièce équilibrée).

Dans une situation d'équiprobabilité avec $\\Omega$ comportant $n$ issues, chaque issue a pour probabilité $\\dfrac{1}{n}$, et pour tout événement $A$ :

$$P(A) = \\dfrac{\\text{nombre d'issues favorables à } A}{\\text{nombre d'issues possibles (cardinal de } \\Omega\\text{)}}$$

**Exemple :** dé à 6 faces équilibré, $A$="obtenir un multiple de 3" $=\\{3,6\\}$. $P(A) = \\dfrac{2}{6}=\\dfrac{1}{3}$.`,
        exercises: [
          {
            id: "pro2-l1-e1",
            question: "L'univers $\\Omega$ d'une expérience aléatoire est :",
            type: "mcq",
            options: [
              { id: "A", text: "l'ensemble de tous les résultats possibles" },
              { id: "B", text: "un seul résultat possible" },
              { id: "C", text: "la probabilité de l'expérience" },
              { id: "D", text: "toujours égal à $1$" },
            ],
            correctId: "A",
            explanation: "Par définition, l'univers $\\Omega$ regroupe toutes les issues possibles d'une expérience aléatoire.",
            difficulty: "debutant",
          },
          {
            id: "pro2-l1-e2",
            question: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un $5$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{6}$" },
              { id: "B", text: "$\\dfrac{1}{5}$" },
              { id: "C", text: "$\\dfrac{5}{6}$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "A",
            explanation: "Il y a $6$ issues équiprobables, donc chaque issue a une probabilité de $\\dfrac{1}{6}$.",
            difficulty: "debutant",
          },
          {
            id: "pro2-l1-e3",
            question: "Pour tout événement $A$, on a $P(A) + P(\\bar{A}) = 1$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Un événement et son contraire forment une partition de l'univers : leurs probabilités s'additionnent toujours pour donner $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "pro2-l1-e4",
            question: "Dans un sac, il y a $4$ boules rouges et $6$ boules bleues, indiscernables au toucher. Quelle est la probabilité de tirer une boule rouge ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{2}{5}$" },
              { id: "B", text: "$\\dfrac{2}{3}$" },
              { id: "C", text: "$\\dfrac{4}{6}$" },
              { id: "D", text: "$\\dfrac{1}{4}$" },
            ],
            correctId: "A",
            explanation: "Il y a $10$ boules en tout, dont $4$ rouges : $P(\\text{rouge}) = \\dfrac{4}{10} = \\dfrac{2}{5}$.",
            difficulty: "intermediaire",
          },
          {
            id: "pro2-l1-e5",
            question: "On lance un dé équilibré à 6 faces. Soit $A$ l'événement \"obtenir un nombre strictement supérieur à 4\". Détermine $P(A)$ puis $P(\\bar{A})$, et donne la signification de $\\bar{A}$.",
            type: "open",
            modelAnswer: "L'univers est $\\Omega = \\{1,2,3,4,5,6\\}$, avec équiprobabilité des 6 issues.\\n\\nL'événement $A$ = \"obtenir un nombre strictement supérieur à 4\" correspond aux issues $\\{5,6\\}$, soit $2$ issues favorables.\\n\\n$$P(A) = \\dfrac{2}{6} = \\dfrac{1}{3}$$\\n\\nL'événement contraire $\\bar{A}$ = \"obtenir un nombre inférieur ou égal à 4\", correspondant à $\\{1,2,3,4\\}$.\\n\\n$$P(\\bar{A}) = 1-P(A) = 1-\\dfrac{1}{3} = \\dfrac{2}{3}$$\\n\\n$$\\boxed{P(A)=\\dfrac{1}{3} \\quad ; \\quad P(\\bar{A})=\\dfrac{2}{3}}$$",
            explanation: "On identifie d'abord les issues favorables à $A$ parmi les issues équiprobables de $\\Omega$, on calcule $P(A)$ par le rapport des cardinaux, puis on utilise $P(\\bar{A})=1-P(A)$ plutôt que de recompter.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "pro2-l2",
        slug: "reunion-et-intersection",
        title: "Réunion et intersection d'événements",
        durationMinutes: 14,
        content: `## Intersection de deux événements

L'**intersection** de deux événements $A$ et $B$, notée $A \\cap B$, est l'événement constitué des issues qui appartiennent **à la fois** à $A$ et à $B$ ("$A$ et $B$").

## Réunion de deux événements

La **réunion** de deux événements $A$ et $B$, notée $A \\cup B$, est l'événement constitué des issues qui appartiennent **à $A$ ou à $B$** (ou aux deux) ("$A$ ou $B$").

**Exemple :** on lance un dé à 6 faces. $A$="obtenir un nombre pair"$=\\{2,4,6\\}$, $B$="obtenir un multiple de 3"$=\\{3,6\\}$.

$$A \\cap B = \\{6\\} \\qquad \\qquad A \\cup B = \\{2,3,4,6\\}$$

## Événements incompatibles

Deux événements $A$ et $B$ sont **incompatibles** si $A \\cap B = \\emptyset$ (ils ne peuvent pas se produire en même temps).

## Formule de la réunion

Pour deux événements quelconques $A$ et $B$ :

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

> **Pourquoi soustraire $P(A \\cap B)$ ?** Si on additionne simplement $P(A)$ et $P(B)$, les issues communes à $A$ et $B$ sont comptées deux fois. On retire donc une fois $P(A \\cap B)$ pour ne les compter qu'une seule fois.

**Cas particulier :** si $A$ et $B$ sont incompatibles, $P(A \\cap B)=0$, donc $P(A\\cup B) = P(A)+P(B)$.`,
        exercises: [
          {
            id: "pro2-l2-e1",
            question: "$A \\cap B$ désigne l'événement :",
            type: "mcq",
            options: [
              { id: "A", text: "\"$A$ et $B$\" (les issues communes aux deux)" },
              { id: "B", text: "\"$A$ ou $B$\"" },
              { id: "C", text: "le contraire de $A$" },
              { id: "D", text: "un événement impossible" },
            ],
            correctId: "A",
            explanation: "L'intersection $A \\cap B$ correspond aux issues qui appartiennent simultanément à $A$ et à $B$, c'est-à-dire l'événement \"$A$ et $B$\".",
            difficulty: "debutant",
          },
          {
            id: "pro2-l2-e2",
            question: "Quelle est la formule de la probabilité de la réunion de deux événements $A$ et $B$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$" },
              { id: "B", text: "$P(A\\cup B) = P(A)+P(B)$" },
              { id: "C", text: "$P(A\\cup B) = P(A)\\times P(B)$" },
              { id: "D", text: "$P(A\\cup B) = P(A\\cap B)$" },
            ],
            correctId: "A",
            explanation: "C'est la formule générale de la réunion, valable pour deux événements quelconques (compatibles ou non).",
            difficulty: "debutant",
          },
          {
            id: "pro2-l2-e3",
            question: "Si deux événements $A$ et $B$ sont incompatibles, alors $P(A\\cap B) = 0$.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "Par définition, deux événements incompatibles ne peuvent jamais se produire simultanément : leur intersection est l'événement impossible $\\emptyset$, de probabilité $0$.",
            difficulty: "intermediaire",
          },
          {
            id: "pro2-l2-e4",
            question: "On donne $P(A) = 0{,}4$, $P(B)=0{,}5$ et $P(A\\cap B) = 0{,}2$. Quelle est $P(A\\cup B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}7$" },
              { id: "B", text: "$0{,}9$" },
              { id: "C", text: "$0{,}1$" },
              { id: "D", text: "$1{,}1$" },
            ],
            correctId: "A",
            explanation: "$P(A\\cup B) = P(A)+P(B)-P(A\\cap B) = 0{,}4+0{,}5-0{,}2 = 0{,}7$.",
            difficulty: "intermediaire",
          },
          {
            id: "pro2-l2-e5",
            question: "Dans une classe de $30$ élèves, $18$ pratiquent le football, $12$ pratiquent le tennis, et $5$ pratiquent les deux sports. On choisit un élève au hasard. Calcule la probabilité qu'il pratique le football ou le tennis.",
            type: "open",
            modelAnswer: "On note $A$=\"l'élève pratique le football\" et $B$=\"l'élève pratique le tennis\".\\n\\nOn a :\\n\\n$$P(A) = \\dfrac{18}{30} \\qquad P(B) = \\dfrac{12}{30} \\qquad P(A\\cap B) = \\dfrac{5}{30}$$\\n\\nOn applique la formule de la réunion :\\n\\n$$P(A\\cup B) = P(A)+P(B)-P(A\\cap B) = \\dfrac{18}{30}+\\dfrac{12}{30}-\\dfrac{5}{30} = \\dfrac{25}{30} = \\dfrac{5}{6}$$\\n\\n$$\\boxed{P(A\\cup B) = \\dfrac{5}{6}}$$",
            explanation: "On modélise chaque sport par un événement, on traduit les effectifs donnés en probabilités, puis on applique la formule de la réunion pour éviter de compter deux fois les élèves pratiquant les deux sports.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "pro2-l3",
        slug: "applications-des-probabilites",
        title: "Applications et synthèse",
        durationMinutes: 14,
        content: `## Méthode générale pour un problème de probabilités

1. Identifier l'**univers** $\\Omega$ de l'expérience et vérifier s'il y a équiprobabilité.
2. Définir clairement chaque **événement** étudié (en mots, puis en ensemble d'issues si besoin).
3. Calculer les probabilités élémentaires demandées, en utilisant :
   - $P(A) = \\dfrac{\\text{issues favorables}}{\\text{issues possibles}}$ (cas équiprobable),
   - $P(\\bar{A}) = 1-P(A)$,
   - $P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$.

## Tableau croisé d'effectifs

Les données de probabilités sont souvent présentées dans un **tableau à double entrée**, ce qui facilite le calcul des intersections.

**Exemple :** répartition de $200$ élèves selon le sexe et le choix d'une option :

| | Option A | Option B | Total |
|---|---|---|---|
| Filles | $40$ | $60$ | $100$ |
| Garçons | $50$ | $50$ | $100$ |
| Total | $90$ | $110$ | $200$ |

Pour un élève pris au hasard, $P(\\text{Fille et Option A}) = \\dfrac{40}{200} = 0{,}2$.

## Reconnaître la bonne formule

> **Astuce :** le mot "**et**" dans un énoncé correspond généralement à une **intersection** ($\\cap$), et le mot "**ou**" correspond à une **réunion** ($\\cup$). Attention à toujours vérifier si les événements sont compatibles avant d'appliquer une formule simplifiée.`,
        exercises: [
          {
            id: "pro2-l3-e1",
            question: "Dans un énoncé de probabilités, le mot \"ou\" correspond généralement à :",
            type: "mcq",
            options: [
              { id: "A", text: "une réunion d'événements" },
              { id: "B", text: "une intersection d'événements" },
              { id: "C", text: "un événement contraire" },
              { id: "D", text: "une probabilité nulle" },
            ],
            correctId: "A",
            explanation: "Le mot \"ou\" traduit le fait qu'au moins l'un des deux événements se produit, ce qui correspond à la réunion $A \\cup B$.",
            difficulty: "debutant",
          },
          {
            id: "pro2-l3-e2",
            question: "Dans un tableau croisé d'effectifs, comment calcule-t-on la probabilité d'une case précise (par exemple \"Fille et Option A\") ?",
            type: "mcq",
            options: [
              { id: "A", text: "effectif de la case divisé par l'effectif total" },
              { id: "B", text: "effectif de la case multiplié par l'effectif total" },
              { id: "C", text: "effectif total divisé par l'effectif de la case" },
              { id: "D", text: "on ne peut pas le calculer avec un tableau" },
            ],
            correctId: "A",
            explanation: "Pour une expérience équiprobable (un individu pris au hasard), la probabilité d'une catégorie est le rapport de son effectif sur l'effectif total.",
            difficulty: "debutant",
          },
          {
            id: "pro2-l3-e3",
            question: "Dans un tableau croisé d'effectifs, la case \"Total\" en bas à droite correspond toujours à l'effectif total de la population étudiée.",
            type: "true_false",
            options: [
              { id: "vrai", text: "Vrai" },
              { id: "faux", text: "Faux" },
            ],
            correctId: "vrai",
            explanation: "La case en bas à droite d'un tableau croisé (intersection de la ligne \"Total\" et de la colonne \"Total\") donne toujours l'effectif total de la population étudiée.",
            difficulty: "intermediaire",
          },
          {
            id: "pro2-l3-e4",
            question: "On reprend le tableau de l'exemple du cours ($200$ élèves). Quelle est la probabilité qu'un élève pris au hasard soit un garçon ayant choisi l'option B ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}25$" },
              { id: "B", text: "$0{,}5$" },
              { id: "C", text: "$0{,}3$" },
              { id: "D", text: "$0{,}55$" },
            ],
            correctId: "A",
            explanation: "L'effectif \"Garçons et Option B\" est $50$. $P = \\dfrac{50}{200} = 0{,}25$.",
            difficulty: "intermediaire",
          },
          {
            id: "pro2-l3-e5",
            question: "Une urne contient des jetons numérotés de $1$ à $20$. On tire un jeton au hasard. Soit $A$ l'événement \"le numéro est un multiple de 4\" et $B$ l'événement \"le numéro est un multiple de 5\". Calcule $P(A)$, $P(B)$, $P(A\\cap B)$ puis $P(A\\cup B)$.",
            type: "open",
            modelAnswer: "L'univers $\\Omega = \\{1,2,\\ldots,20\\}$ comporte $20$ issues équiprobables.\\n\\n**Événement $A$** (multiples de 4 entre 1 et 20) : $\\{4,8,12,16,20\\}$, soit $5$ issues.\\n\\n$$P(A) = \\dfrac{5}{20} = \\dfrac{1}{4}$$\\n\\n**Événement $B$** (multiples de 5 entre 1 et 20) : $\\{5,10,15,20\\}$, soit $4$ issues.\\n\\n$$P(B) = \\dfrac{4}{20} = \\dfrac{1}{5}$$\\n\\n**Événement $A\\cap B$** (multiples de $4$ et de $5$, donc multiples de $20$) : $\\{20\\}$, soit $1$ issue.\\n\\n$$P(A\\cap B) = \\dfrac{1}{20}$$\\n\\n**Réunion :**\\n\\n$$P(A\\cup B) = P(A)+P(B)-P(A\\cap B) = \\dfrac{5}{20}+\\dfrac{4}{20}-\\dfrac{1}{20} = \\dfrac{8}{20} = \\dfrac{2}{5}$$\\n\\n$$\\boxed{P(A)=\\dfrac{1}{4}\\ ;\\ P(B)=\\dfrac{1}{5}\\ ;\\ P(A\\cap B)=\\dfrac{1}{20}\\ ;\\ P(A\\cup B)=\\dfrac{2}{5}}$$",
            explanation: "On liste explicitement les issues de chaque événement (en remarquant qu'être multiple de 4 et de 5 équivaut à être multiple de leur PPCM, 20), puis on applique la formule de la réunion.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "sec1-id",
    slug: "second-degre-1ere",
    title: "Le second degré",
    description: "Étudier les fonctions polynômes du second degré : forme canonique, discriminant, racines, signe du trinôme et lien avec la parabole.",
    schoolLevel: "1ere",
    subject: "algebre",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📐",
    lessons: [
      {
        id: "sec1-l1",
        slug: "fonction-polynome-second-degre-forme-canonique",
        title: "Fonction polynôme du second degré et forme canonique",
        durationMinutes: 25,
        content: `## Définition

> Une **fonction polynôme du second degré** est une fonction $f$ définie sur $\\mathbb{R}$ par
> $$f(x) = ax^2+bx+c$$
> où $a$, $b$, $c$ sont des réels donnés avec $a \\neq 0$.

Les nombres $a$, $b$, $c$ sont appelés les **coefficients** du trinôme. Si $a=0$, la fonction n'est plus du second degré (elle devient affine).

### Représentation graphique

La courbe représentative de $f$ est une **parabole** :
- si $a > 0$, la parabole est tournée vers le haut (elle admet un minimum) ;
- si $a < 0$, la parabole est tournée vers le bas (elle admet un maximum).

## Forme canonique

Toute fonction du second degré peut s'écrire sous la **forme canonique** :
$$f(x) = a(x-\\alpha)^2+\\beta$$
avec
$$\\alpha = -\\dfrac{b}{2a} \\qquad \\text{et} \\qquad \\beta = f(\\alpha) = c - \\dfrac{b^2}{4a}$$

Le point $S(\\alpha\\,;\\,\\beta)$ est le **sommet** de la parabole, et la droite d'équation $x=\\alpha$ est son **axe de symétrie**.

### Méthode pour obtenir la forme canonique

On utilise une identité remarquable en factorisant par $a$. Exemple avec $f(x) = 2x^2-8x+5$ :

$$f(x) = 2\\left(x^2-4x\\right)+5 = 2\\left[(x-2)^2-4\\right]+5 = 2(x-2)^2-8+5 = 2(x-2)^2-3$$

Donc $\\alpha = 2$ et $\\beta = -3$ : le sommet de la parabole est $S(2\\,;\\,-3)$.

> **Remarque** : on retrouve bien $\\alpha = -\\dfrac{b}{2a} = -\\dfrac{-8}{2\\times 2} = 2$.

## Variations de $f$

| Cas | Variations |
|---|---|
| $a>0$ | $f$ décroît sur $]-\\infty\\,;\\,\\alpha]$ puis croît sur $[\\alpha\\,;\\,+\\infty[$ ; minimum $\\beta$ en $\\alpha$ |
| $a<0$ | $f$ croît sur $]-\\infty\\,;\\,\\alpha]$ puis décroît sur $[\\alpha\\,;\\,+\\infty[$ ; maximum $\\beta$ en $\\alpha$ |

Cela découle directement de la forme canonique : $(x-\\alpha)^2 \\geqslant 0$, donc le signe de $a(x-\\alpha)^2$ dépend du signe de $a$, et ce terme est minimal (nul) quand $x=\\alpha$.`,
        exercises: [
          {
            id: "sec1-l1-e1",
            question: "Pour $f(x) = 3x^2-6x+1$, quel est le coefficient $a$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$-6$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$6$" },
            ],
            correctId: "C",
            explanation: "Dans $f(x)=ax^2+bx+c$, le coefficient $a$ est celui qui multiplie $x^2$, ici $a=3$.",
            difficulty: "debutant",
          },
          {
            id: "sec1-l1-e2",
            question: "Si $a>0$, la parabole représentant $f(x)=ax^2+bx+c$ est tournée vers le bas.",
            type: "true_false",
            correctId: "faux",
            explanation: "Si $a>0$, la parabole est tournée vers le haut (elle admet un minimum). C'est $a<0$ qui correspond à une parabole tournée vers le bas.",
            difficulty: "debutant",
          },
          {
            id: "sec1-l1-e3",
            question: "Quelle est l'abscisse $\\alpha$ du sommet de la parabole représentant $f(x) = x^2-4x+7$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\alpha = 4$" },
              { id: "B", text: "$\\alpha = -2$" },
              { id: "C", text: "$\\alpha = 2$" },
              { id: "D", text: "$\\alpha = -4$" },
            ],
            correctId: "C",
            explanation: "$\\alpha = -\\dfrac{b}{2a} = -\\dfrac{-4}{2\\times 1} = 2$.",
            difficulty: "debutant",
          },
          {
            id: "sec1-l1-e4",
            question: "Détermine la forme canonique de $f(x) = x^2+6x+5$ et précise les coordonnées du sommet de la parabole.",
            type: "open",
            modelAnswer: "On factorise par $a=1$ et on utilise l'identité remarquable $x^2+6x = (x+3)^2-9$ :\\n\\n$$f(x) = x^2+6x+5 = (x+3)^2-9+5 = (x+3)^2-4$$\\n\\nLa forme canonique est donc $f(x) = (x+3)^2-4$, avec $\\alpha=-3$ et $\\beta=-4$.\\n\\nLe sommet de la parabole est donc le point $S(-3\\,;\\,-4)$.\\n\\n$$\\boxed{f(x) = (x+3)^2-4 \\quad ; \\quad S(-3\\,;\\,-4)}$$",
            explanation: "On cherche $(x+3)^2 = x^2+6x+9$, donc $x^2+6x = (x+3)^2-9$, puis on ajoute la constante restante.",
            difficulty: "intermediaire",
          },
          {
            id: "sec1-l1-e5",
            question: "Soit $f(x) = -2x^2+8x-3$. Donne le tableau de variations de $f$ sur $\\mathbb{R}$, en précisant la valeur de l'extremum.",
            type: "open",
            modelAnswer: "On met $f$ sous forme canonique : $\\alpha = -\\dfrac{b}{2a} = -\\dfrac{8}{2\\times(-2)} = -\\dfrac{8}{-4} = 2$.\\n\\n$$\\beta = f(2) = -2(2)^2+8(2)-3 = -8+16-3 = 5$$\\n\\nDonc $f(x) = -2(x-2)^2+5$, avec $a=-2<0$ : la parabole est tournée vers le bas, $f$ admet un **maximum** égal à $5$ atteint en $x=2$.\\n\\nTableau de variations :\\n\\n$f$ est croissante sur $]-\\infty\\,;\\,2]$ et décroissante sur $[2\\,;\\,+\\infty[$, avec un maximum de $5$ en $x=2$.\\n\\n$$\\boxed{\\text{Maximum } f(2)=5,\\ f \\text{ croît sur } ]-\\infty;2] \\text{ et décroît sur } [2;+\\infty[}$$",
            explanation: "Comme $a<0$, la forme canonique donne directement un maximum égal à $\\beta$ atteint en $x=\\alpha$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "sec1-l2",
        slug: "discriminant-et-racines",
        title: "Discriminant et racines du trinôme",
        durationMinutes: 25,
        content: `## Le discriminant

Pour résoudre l'équation $ax^2+bx+c=0$ (avec $a\\neq 0$), on calcule le **discriminant** :
$$\\Delta = b^2-4ac$$

### Théorème (nombre de racines)

| Signe de $\\Delta$ | Nombre de solutions | Solutions |
|---|---|---|
| $\\Delta > 0$ | deux solutions distinctes | $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$ et $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$ |
| $\\Delta = 0$ | une solution (racine double) | $x_0 = -\\dfrac{b}{2a}$ |
| $\\Delta < 0$ | aucune solution réelle | — |

### Exemple

Résolvons $2x^2-3x-2=0$ : $a=2$, $b=-3$, $c=-2$.

$$\\Delta = (-3)^2-4\\times 2\\times(-2) = 9+16 = 25 > 0$$

$\\sqrt{\\Delta} = 5$, donc :
$$x_1 = \\dfrac{3-5}{4} = -\\dfrac{1}{2} \\qquad x_2 = \\dfrac{3+5}{4} = 2$$

## Forme factorisée

Lorsque $\\Delta \\geqslant 0$, le trinôme se factorise :
- si $\\Delta>0$ : $f(x) = a(x-x_1)(x-x_2)$ ;
- si $\\Delta=0$ : $f(x) = a(x-x_0)^2$.

Si $\\Delta<0$, le trinôme ne se factorise pas dans $\\mathbb{R}$ (il garde un signe constant).

## Somme et produit des racines

Quand $\\Delta\\geqslant 0$, on a les relations utiles :
$$x_1+x_2 = -\\dfrac{b}{a} \\qquad \\text{et} \\qquad x_1 \\times x_2 = \\dfrac{c}{a}$$

Ces relations permettent parfois de retrouver rapidement des racines évidentes (par exemple $x=1$ ou $x=-1$).`,
        exercises: [
          {
            id: "sec1-l2-e1",
            question: "Calcule le discriminant de $x^2-5x+6$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\Delta = 1$" },
              { id: "B", text: "$\\Delta = 49$" },
              { id: "C", text: "$\\Delta = -1$" },
              { id: "D", text: "$\\Delta = 25$" },
            ],
            correctId: "A",
            explanation: "$\\Delta = (-5)^2-4\\times 1\\times 6 = 25-24 = 1$.",
            difficulty: "debutant",
          },
          {
            id: "sec1-l2-e2",
            question: "Si $\\Delta = 0$, l'équation $ax^2+bx+c=0$ admet exactement deux solutions distinctes.",
            type: "true_false",
            correctId: "faux",
            explanation: "Si $\\Delta=0$, il y a une unique solution (on parle de racine double) : $x_0=-\\dfrac{b}{2a}$.",
            difficulty: "debutant",
          },
          {
            id: "sec1-l2-e3",
            question: "Combien de solutions réelles admet l'équation $x^2+x+1=0$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Aucune" },
              { id: "B", text: "Une" },
              { id: "C", text: "Deux" },
              { id: "D", text: "Une infinité" },
            ],
            correctId: "A",
            explanation: "$\\Delta = 1^2-4\\times1\\times1 = 1-4=-3<0$, donc aucune solution réelle.",
            difficulty: "intermediaire",
          },
          {
            id: "sec1-l2-e4",
            question: "Résous dans $\\mathbb{R}$ l'équation $3x^2-2x-1=0$.",
            type: "open",
            modelAnswer: "On a $a=3$, $b=-2$, $c=-1$.\\n\\n$$\\Delta = (-2)^2-4\\times 3\\times(-1) = 4+12 = 16 > 0$$\\n\\nIl y a deux solutions distinctes. Comme $\\sqrt{\\Delta}=4$ :\\n\\n$$x_1 = \\dfrac{-(-2)-4}{2\\times 3} = \\dfrac{2-4}{6} = \\dfrac{-2}{6} = -\\dfrac{1}{3}$$\\n\\n$$x_2 = \\dfrac{-(-2)+4}{2\\times 3} = \\dfrac{2+4}{6} = \\dfrac{6}{6} = 1$$\\n\\n$$\\boxed{S = \\left\\{-\\dfrac{1}{3}\\,;\\,1\\right\\}}$$",
            explanation: "On calcule $\\Delta$, on vérifie qu'il est positif, puis on applique les formules des deux racines.",
            difficulty: "intermediaire",
          },
          {
            id: "sec1-l2-e5",
            question: "On sait que l'équation $x^2-7x+c=0$ admet $x_1=2$ comme solution. Déduis-en la valeur de $c$ et l'autre solution $x_2$, en utilisant les relations entre coefficients et racines.",
            type: "open",
            modelAnswer: "Avec $a=1$ et $b=-7$, la relation sur la somme des racines donne :\\n\\n$$x_1+x_2 = -\\dfrac{b}{a} = 7$$\\n\\nComme $x_1=2$, on a $x_2 = 7-2 = 5$.\\n\\nLa relation sur le produit donne $x_1\\times x_2 = \\dfrac{c}{a} = c$ (puisque $a=1$), donc :\\n\\n$$c = 2\\times 5 = 10$$\\n\\nVérification : $x^2-7x+10=0$ a bien pour discriminant $\\Delta = 49-40=9>0$, et $\\sqrt{9}=3$ donne $x=\\dfrac{7\\pm3}{2}$, soit $x=2$ ou $x=5$. Cohérent.\\n\\n$$\\boxed{c=10 \\quad ; \\quad x_2=5}$$",
            explanation: "On exploite les relations $x_1+x_2=-b/a$ et $x_1x_2=c/a$ sans recalculer le discriminant.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "sec1-l3",
        slug: "signe-du-trinome-et-applications",
        title: "Signe du trinôme et applications",
        durationMinutes: 25,
        content: `## Signe du trinôme $ax^2+bx+c$

Le signe de $f(x)=ax^2+bx+c$ dépend du signe de $\\Delta$ et du signe de $a$.

### Cas $\\Delta > 0$ (deux racines $x_1 < x_2$)

Le trinôme est du signe de $a$ **à l'extérieur** des racines, et du signe de $-a$ **entre** les racines.

| $x$ | $-\\infty$ | | $x_1$ | | $x_2$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|
| signe de $f(x)$ si $a>0$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |

### Cas $\\Delta = 0$ (racine double $x_0$)

Le trinôme est du signe de $a$ pour tout $x \\neq x_0$, et s'annule en $x_0$.

### Cas $\\Delta < 0$ (pas de racine réelle)

Le trinôme garde **le signe de $a$** pour tout réel $x$ (il ne s'annule jamais).

## Méthode complète

1. Calculer $\\Delta = b^2-4ac$.
2. Si $\\Delta>0$ : calculer $x_1, x_2$, construire le tableau de signes (signe de $a$ à l'extérieur, signe opposé entre les racines).
3. Si $\\Delta \\leqslant 0$ : conclure directement avec le signe de $a$ (en n'oubliant pas l'éventuelle racine double si $\\Delta=0$).

### Exemple

Étudions le signe de $f(x) = -x^2+3x+4$.

$\\Delta = 9+16=25>0$, racines $x_1=-1$ et $x_2=4$ (à vérifier : somme $=3=-b/a$, produit $=-4=c/a$ ✓).

Comme $a=-1<0$ : $f(x)<0$ à l'extérieur de $[-1\\,;\\,4]$, et $f(x)>0$ sur $]-1\\,;\\,4[$.

## Lien avec les inéquations et la parabole

Résoudre $f(x) \\leqslant 0$ ou $f(x) \\geqslant 0$ revient à lire le tableau de signes. Géométriquement, c'est lire les positions de la parabole **au-dessus** ou **au-dessous** de l'axe des abscisses.

> **Application classique** : optimisation. Par exemple pour maximiser une aire modélisée par une fonction du second degré $\\mathcal{A}(x) = ax^2+bx+c$ avec $a<0$, le maximum est atteint au sommet $x=\\alpha=-\\dfrac{b}{2a}$.`,
        exercises: [
          {
            id: "sec1-l3-e1",
            question: "Le trinôme $f(x) = 2x^2+x+5$ a pour discriminant $\\Delta = -39$. Quel est le signe de $f(x)$ pour tout réel $x$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$f(x) > 0$ pour tout $x$" },
              { id: "B", text: "$f(x) < 0$ pour tout $x$" },
              { id: "C", text: "Le signe change selon $x$" },
              { id: "D", text: "$f(x) = 0$ pour tout $x$" },
            ],
            correctId: "A",
            explanation: "Comme $\\Delta<0$, le trinôme ne s'annule jamais et garde le signe de $a=2>0$, donc $f(x)>0$ pour tout $x$.",
            difficulty: "debutant",
          },
          {
            id: "sec1-l3-e2",
            question: "Si $\\Delta>0$ et $a>0$, le trinôme $ax^2+bx+c$ est négatif entre ses deux racines.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Quand $\\Delta>0$, le trinôme est du signe opposé à $a$ entre les racines : si $a>0$, il est donc négatif entre $x_1$ et $x_2$.",
            difficulty: "debutant",
          },
          {
            id: "sec1-l3-e3",
            question: "Le trinôme $f(x)=(x-3)^2$ change-t-il de signe sur $\\mathbb{R}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, il est positif puis négatif" },
              { id: "B", text: "Non, il est toujours positif ou nul" },
              { id: "C", text: "Non, il est toujours négatif ou nul" },
              { id: "D", text: "Oui, il change de signe trois fois" },
            ],
            correctId: "B",
            explanation: "$f(x)=(x-3)^2$ correspond à $\\Delta=0$ avec $a=1>0$ : $f(x)\\geqslant 0$ pour tout $x$, avec égalité seulement en $x=3$.",
            difficulty: "intermediaire",
          },
          {
            id: "sec1-l3-e4",
            question: "Étudie le signe de $f(x) = x^2-2x-3$ sur $\\mathbb{R}$.",
            type: "open",
            modelAnswer: "On calcule le discriminant : $a=1$, $b=-2$, $c=-3$.\\n\\n$$\\Delta = (-2)^2-4\\times1\\times(-3) = 4+12=16>0$$\\n\\n$\\sqrt{\\Delta}=4$, donc :\\n\\n$$x_1 = \\dfrac{2-4}{2}=-1 \\qquad x_2=\\dfrac{2+4}{2}=3$$\\n\\nComme $a=1>0$, le trinôme est positif à l'extérieur des racines et négatif entre elles.\\n\\nTableau de signes : $f(x)>0$ sur $]-\\infty\\,;\\,-1[\\,\\cup\\,]3\\,;\\,+\\infty[$, $f(x)=0$ pour $x=-1$ ou $x=3$, $f(x)<0$ sur $]-1\\,;\\,3[$.\\n\\n$$\\boxed{f(x)>0 \\text{ sur } ]-\\infty;-1[\\cup]3;+\\infty[\\,;\\ f(x)<0 \\text{ sur } ]-1;3[}$$",
            explanation: "On détermine les racines puis on applique la règle du signe de $a$ à l'extérieur / signe opposé entre les racines.",
            difficulty: "intermediaire",
          },
          {
            id: "sec1-l3-e5",
            question: "Un terrain rectangulaire a un périmètre fixé à $40$ m. On note $x$ la longueur d'un côté (en mètres, avec $0<x<20$). Exprime l'aire $\\mathcal{A}(x)$ du terrain en fonction de $x$, puis détermine la valeur de $x$ qui maximise cette aire, ainsi que l'aire maximale obtenue.",
            type: "open",
            modelAnswer: "Si $x$ est la longueur d'un côté, l'autre côté mesure $20-x$ (car le demi-périmètre est $40/2=20$). L'aire est :\\n\\n$$\\mathcal{A}(x) = x(20-x) = -x^2+20x$$\\n\\nC'est une fonction du second degré avec $a=-1<0$, $b=20$. Le sommet de la parabole (donc le maximum) est atteint en :\\n\\n$$\\alpha = -\\dfrac{b}{2a} = -\\dfrac{20}{2\\times(-1)} = 10$$\\n\\nL'aire maximale vaut alors :\\n\\n$$\\mathcal{A}(10) = -10^2+20\\times 10 = -100+200=100$$\\n\\nLe terrain est donc un carré de côté $10$ m (cohérent avec la propriété classique : à périmètre fixé, le carré maximise l'aire), avec une aire maximale de $100\\ \\text{m}^2$.\\n\\n$$\\boxed{x=10 \\text{ m, aire maximale } = 100\\ \\text{m}^2}$$",
            explanation: "On modélise l'aire par une fonction du second degré à coefficient $a$ négatif, dont le maximum est lu au sommet de la parabole.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "der1-id",
    slug: "derivation-1ere",
    title: "Dérivation",
    description: "Comprendre le nombre dérivé, la tangente à une courbe, calculer des fonctions dérivées et déterminer l'équation d'une tangente.",
    schoolLevel: "1ere",
    subject: "analyse",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📈",
    lessons: [
      {
        id: "der1-l1",
        slug: "nombre-derive-et-tangente",
        title: "Nombre dérivé et tangente",
        durationMinutes: 25,
        content: `## Taux de variation

Soit $f$ une fonction définie sur un intervalle $I$, et $a$, $a+h$ deux réels de $I$ (avec $h\\neq 0$). Le **taux de variation** de $f$ entre $a$ et $a+h$ est :
$$\\tau(h) = \\dfrac{f(a+h)-f(a)}{h}$$

C'est le coefficient directeur de la droite passant par les points $A(a\\,;\\,f(a))$ et $M(a+h\\,;\\,f(a+h))$ de la courbe, appelée **droite sécante**.

## Nombre dérivé

> Si le taux de variation $\\tau(h)$ a une **limite finie** quand $h$ tend vers $0$, on dit que $f$ est **dérivable en $a$**, et cette limite est appelée **nombre dérivé** de $f$ en $a$, noté $f'(a)$ :
> $$f'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h)-f(a)}{h}$$

### Exemple

Pour $f(x)=x^2$ et $a=3$ :
$$\\tau(h) = \\dfrac{(3+h)^2-3^2}{h} = \\dfrac{9+6h+h^2-9}{h} = \\dfrac{6h+h^2}{h} = 6+h$$

Quand $h\\to 0$, $\\tau(h) \\to 6$. Donc $f'(3) = 6$.

## Tangente à une courbe

Quand $h$ tend vers $0$, la droite sécante $(AM)$ « pivote » autour de $A$ et se rapproche d'une position limite : la **tangente** à la courbe au point $A$.

> **Équation de la tangente** au point d'abscisse $a$ :
> $$T : y = f'(a)(x-a)+f(a)$$

### Exemple (suite)

Pour $f(x)=x^2$, $a=3$ : $f(3)=9$ et $f'(3)=6$, donc la tangente en $A(3\\,;\\,9)$ a pour équation :
$$y = 6(x-3)+9 = 6x-18+9 = 6x-9$$

> **Remarque** : $f'(a)$ est le coefficient directeur de la tangente en $a$. Si $f'(a)=0$, la tangente est horizontale.`,
        exercises: [
          {
            id: "der1-l1-e1",
            question: "Le nombre dérivé $f'(a)$ représente géométriquement :",
            type: "mcq",
            options: [
              { id: "A", text: "L'ordonnée du point d'abscisse $a$" },
              { id: "B", text: "Le coefficient directeur de la tangente en $a$" },
              { id: "C", text: "L'aire sous la courbe jusqu'en $a$" },
              { id: "D", text: "La valeur de $f(a)$" },
            ],
            correctId: "B",
            explanation: "$f'(a)$ est par définition le coefficient directeur de la tangente à la courbe au point d'abscisse $a$.",
            difficulty: "debutant",
          },
          {
            id: "der1-l1-e2",
            question: "Si $f'(a) = 0$, alors la tangente à la courbe de $f$ au point d'abscisse $a$ est horizontale.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Une tangente de coefficient directeur nul est une droite horizontale.",
            difficulty: "debutant",
          },
          {
            id: "der1-l1-e3",
            question: "Le taux de variation de $f$ entre $a$ et $a+h$ est défini par :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{f(a+h)-f(a)}{h}$" },
              { id: "B", text: "$\\dfrac{f(a)-f(a+h)}{a}$" },
              { id: "C", text: "$f(a+h)-f(a)$" },
              { id: "D", text: "$\\dfrac{f(a+h)+f(a)}{h}$" },
            ],
            correctId: "A",
            explanation: "C'est la définition du taux de variation, coefficient directeur de la sécante $(AM)$.",
            difficulty: "debutant",
          },
          {
            id: "der1-l1-e4",
            question: "Calcule le nombre dérivé de $f(x)=x^2$ en $a=-1$ en revenant à la définition (calcul du taux de variation puis de sa limite).",
            type: "open",
            modelAnswer: "On calcule le taux de variation entre $a=-1$ et $a+h=-1+h$ :\\n\\n$$\\tau(h) = \\dfrac{f(-1+h)-f(-1)}{h} = \\dfrac{(-1+h)^2-(-1)^2}{h}$$\\n\\nOn développe $(-1+h)^2 = 1-2h+h^2$, donc :\\n\\n$$\\tau(h) = \\dfrac{1-2h+h^2-1}{h} = \\dfrac{-2h+h^2}{h} = \\dfrac{h(-2+h)}{h} = -2+h$$\\n\\n(pour $h\\neq 0$, on peut diviser par $h$).\\n\\nQuand $h\\to 0$, $\\tau(h) \\to -2$.\\n\\n$$\\boxed{f'(-1) = -2}$$",
            explanation: "On forme le taux de variation, on factorise pour éliminer $h$ au dénominateur, puis on fait tendre $h$ vers $0$.",
            difficulty: "intermediaire",
          },
          {
            id: "der1-l1-e5",
            question: "Soit $f(x) = x^2-3x+2$. On admet que $f'(x) = 2x-3$. Détermine une équation de la tangente à la courbe de $f$ au point d'abscisse $a=2$.",
            type: "open",
            modelAnswer: "On calcule $f(2)$ et $f'(2)$.\\n\\n$$f(2) = 2^2-3\\times2+2 = 4-6+2 = 0$$\\n\\n$$f'(2) = 2\\times2-3 = 4-3=1$$\\n\\nL'équation de la tangente au point d'abscisse $a=2$ est :\\n\\n$$y = f'(2)(x-2)+f(2) = 1\\times(x-2)+0 = x-2$$\\n\\n$$\\boxed{T : y = x-2}$$",
            explanation: "On applique directement la formule $y=f'(a)(x-a)+f(a)$ après avoir calculé $f(a)$ et $f'(a)$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "der1-l2",
        slug: "fonction-derivee-fonctions-usuelles",
        title: "Fonction dérivée et dérivées des fonctions usuelles",
        durationMinutes: 25,
        content: `## Fonction dérivée

Si $f$ est dérivable en tout point d'un intervalle $I$, la fonction qui associe à chaque $x$ de $I$ le nombre $f'(x)$ s'appelle la **fonction dérivée** de $f$, notée $f'$.

## Dérivées des fonctions usuelles

| Fonction $f$ | Dérivée $f'$ | Ensemble de validité |
|---|---|---|
| $f(x)=k$ (constante) | $f'(x)=0$ | $\\mathbb{R}$ |
| $f(x)=x$ | $f'(x)=1$ | $\\mathbb{R}$ |
| $f(x)=x^2$ | $f'(x)=2x$ | $\\mathbb{R}$ |
| $f(x)=x^n$ ($n\\in\\mathbb{N}^*$) | $f'(x)=nx^{n-1}$ | $\\mathbb{R}$ |
| $f(x)=\\sqrt{x}$ | $f'(x)=\\dfrac{1}{2\\sqrt{x}}$ | $]0\\,;\\,+\\infty[$ |
| $f(x)=\\dfrac{1}{x}$ | $f'(x)=-\\dfrac{1}{x^2}$ | $]-\\infty\\,;\\,0[\\cup]0\\,;\\,+\\infty[$ |

## Opérations sur les dérivées

Pour $u$ et $v$ deux fonctions dérivables et $k$ une constante réelle :

$$( u+v)' = u'+v' \\qquad (ku)' = ku' \\qquad (uv)' = u'v+uv'$$

### Exemple (somme)

$f(x) = x^2+3x-5 \\implies f'(x) = 2x+3$ (la dérivée de $-5$ est $0$).

### Exemple (produit)

$f(x) = (2x+1)(x-3)$. On pose $u(x)=2x+1$ (donc $u'(x)=2$) et $v(x)=x-3$ (donc $v'(x)=1$) :

$$f'(x) = u'v+uv' = 2(x-3)+(2x+1)\\times1 = 2x-6+2x+1 = 4x-5$$

> **Vérification** : en développant, $f(x)=2x^2-5x-3$, donc $f'(x)=4x-5$. Cohérent !

### Exemple (constante fois fonction)

$f(x) = 5x^3 \\implies f'(x) = 5\\times 3x^2 = 15x^2$.`,
        exercises: [
          {
            id: "der1-l2-e1",
            question: "La dérivée de $f(x) = x^5$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "$f'(x) = 5x^4$" },
              { id: "B", text: "$f'(x) = x^4$" },
              { id: "C", text: "$f'(x) = 4x^5$" },
              { id: "D", text: "$f'(x) = 5x^5$" },
            ],
            correctId: "A",
            explanation: "Pour $f(x)=x^n$, $f'(x)=nx^{n-1}$, donc ici $f'(x)=5x^4$.",
            difficulty: "debutant",
          },
          {
            id: "der1-l2-e2",
            question: "La dérivée d'une fonction constante est toujours nulle.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Si $f(x)=k$, sa courbe est une droite horizontale, de coefficient directeur nul partout : $f'(x)=0$.",
            difficulty: "debutant",
          },
          {
            id: "der1-l2-e3",
            question: "Quelle est la dérivée de $f(x) = \\dfrac{1}{x}$ sur $]0\\,;\\,+\\infty[$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$f'(x) = \\dfrac{1}{x^2}$" },
              { id: "B", text: "$f'(x) = -\\dfrac{1}{x^2}$" },
              { id: "C", text: "$f'(x) = -\\dfrac{1}{x}$" },
              { id: "D", text: "$f'(x) = \\dfrac{1}{2x}$" },
            ],
            correctId: "B",
            explanation: "C'est une formule du cours : $\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$.",
            difficulty: "intermediaire",
          },
          {
            id: "der1-l2-e4",
            question: "Calcule la dérivée de $f(x) = 4x^3-2x^2+7x-1$.",
            type: "open",
            modelAnswer: "On dérive terme à terme en utilisant la formule $(x^n)'=nx^{n-1}$ et la linéarité de la dérivation.\\n\\n- Dérivée de $4x^3$ : $4\\times 3x^2 = 12x^2$\\n- Dérivée de $-2x^2$ : $-2\\times 2x = -4x$\\n- Dérivée de $7x$ : $7$\\n- Dérivée de $-1$ : $0$\\n\\nEn additionnant :\\n\\n$$\\boxed{f'(x) = 12x^2-4x+7}$$",
            explanation: "On applique la règle de dérivation de $x^n$ à chaque terme, en gardant les coefficients constants.",
            difficulty: "intermediaire",
          },
          {
            id: "der1-l2-e5",
            question: "Soit $f(x) = (x^2+1)(3x-2)$. Calcule $f'(x)$ en utilisant la formule de dérivation d'un produit, puis vérifie le résultat en développant $f(x)$ avant de dériver.",
            type: "open",
            modelAnswer: "**Méthode du produit.** On pose $u(x)=x^2+1$ donc $u'(x)=2x$, et $v(x)=3x-2$ donc $v'(x)=3$.\\n\\n$$f'(x) = u'(x)v(x)+u(x)v'(x) = 2x(3x-2)+(x^2+1)\\times 3$$\\n\\n$$f'(x) = 6x^2-4x+3x^2+3 = 9x^2-4x+3$$\\n\\n**Vérification par développement.** $f(x) = (x^2+1)(3x-2) = 3x^3-2x^2+3x-2$.\\n\\nEn dérivant terme à terme : $f'(x) = 9x^2-4x+3$.\\n\\nLes deux méthodes donnent le même résultat.\\n\\n$$\\boxed{f'(x) = 9x^2-4x+3}$$",
            explanation: "On applique la formule $(uv)'=u'v+uv'$ puis on confirme par un développement direct, ce qui est une bonne pratique de vérification.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "der1-l3",
        slug: "applications-de-la-derivation",
        title: "Applications : équations de tangentes et lecture graphique",
        durationMinutes: 20,
        content: `## Méthode générale pour une tangente

Pour déterminer l'équation de la tangente à la courbe de $f$ au point d'abscisse $a$ :

1. Calculer $f(a)$.
2. Calculer la fonction dérivée $f'(x)$, puis $f'(a)$.
3. Écrire l'équation : $y = f'(a)(x-a)+f(a)$, puis développer si besoin.

### Exemple complet

Soit $f(x)=x^2-4x+1$, et on cherche la tangente en $a=1$.

- $f'(x) = 2x-4$
- $f(1) = 1-4+1=-2$
- $f'(1) = 2-4=-2$

$$T: y = -2(x-1)-2 = -2x+2-2 = -2x$$

## Lien tangente et variations

> Si $f'(a) > 0$, la tangente en $a$ est croissante, et $f$ est localement croissante autour de $a$.
> Si $f'(a) < 0$, la tangente en $a$ est décroissante, et $f$ est localement décroissante autour de $a$.
> Si $f'(a) = 0$, la tangente est horizontale : $a$ est un candidat à être un extremum local de $f$.

Ce lien entre signe de la dérivée et variations de la fonction sera développé dans le chapitre suivant sur l'étude de fonctions.

## Lecture graphique du nombre dérivé

Sur un graphique, $f'(a)$ se lit comme le coefficient directeur de la tangente tracée au point d'abscisse $a$ : si la tangente passe par deux points lisibles sur le quadrillage $(x_1\\,;\\,y_1)$ et $(x_2\\,;\\,y_2)$, alors :
$$f'(a) = \\dfrac{y_2-y_1}{x_2-x_1}$$

> **Astuce** : une tangente "qui monte d'une unité quand $x$ augmente de deux" a un coefficient directeur (donc un nombre dérivé) égal à $\\dfrac{1}{2}$.`,
        exercises: [
          {
            id: "der1-l3-e1",
            question: "Sur la courbe d'une fonction $f$, la tangente au point d'abscisse $2$ passe par les points $(2\\,;\\,3)$ et $(4\\,;\\,7)$. Quelle est la valeur de $f'(2)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$f'(2) = 2$" },
              { id: "B", text: "$f'(2) = 4$" },
              { id: "C", text: "$f'(2) = 0{,}5$" },
              { id: "D", text: "$f'(2) = 7$" },
            ],
            correctId: "A",
            explanation: "$f'(2) = \\dfrac{7-3}{4-2} = \\dfrac{4}{2} = 2$.",
            difficulty: "debutant",
          },
          {
            id: "der1-l3-e2",
            question: "Si $f'(a) > 0$, alors $f$ est localement décroissante au voisinage de $a$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Si $f'(a)>0$, la tangente est croissante et $f$ est localement croissante autour de $a$, pas décroissante.",
            difficulty: "debutant",
          },
          {
            id: "der1-l3-e3",
            question: "Soit $f(x) = x^2$. En quel point la tangente à la courbe de $f$ est-elle horizontale ?",
            type: "mcq",
            options: [
              { id: "A", text: "En $x=1$" },
              { id: "B", text: "En $x=0$" },
              { id: "C", text: "En $x=-1$" },
              { id: "D", text: "Nulle part" },
            ],
            correctId: "B",
            explanation: "$f'(x)=2x$ s'annule uniquement en $x=0$ ; c'est là que la tangente est horizontale (le sommet de la parabole).",
            difficulty: "intermediaire",
          },
          {
            id: "der1-l3-e4",
            question: "Soit $f(x) = x^2+2x-3$. Détermine une équation de la tangente à la courbe de $f$ au point d'abscisse $a=0$.",
            type: "open",
            modelAnswer: "On calcule la dérivée : $f'(x) = 2x+2$.\\n\\nPuis on évalue en $a=0$ :\\n\\n$$f(0) = 0+0-3 = -3$$\\n\\n$$f'(0) = 2\\times0+2 = 2$$\\n\\nL'équation de la tangente est :\\n\\n$$y = f'(0)(x-0)+f(0) = 2x-3$$\\n\\n$$\\boxed{T : y = 2x-3}$$",
            explanation: "On suit la méthode en trois étapes : dériver, évaluer en $a$, puis écrire l'équation de la tangente.",
            difficulty: "intermediaire",
          },
          {
            id: "der1-l3-e5",
            question: "Soit $f(x) = x^2-6x+10$. Détermine les coordonnées du point de la courbe de $f$ où la tangente est horizontale, puis donne l'équation de cette tangente.",
            type: "open",
            modelAnswer: "On dérive : $f'(x) = 2x-6$.\\n\\nLa tangente est horizontale lorsque $f'(x)=0$ :\\n\\n$$2x-6=0 \\iff x=3$$\\n\\nOn calcule l'ordonnée correspondante :\\n\\n$$f(3) = 3^2-6\\times3+10 = 9-18+10=1$$\\n\\nLe point recherché est donc $A(3\\,;\\,1)$.\\n\\nLa tangente horizontale en ce point a pour équation $y = f(3) = 1$ (coefficient directeur nul, ordonnée constante égale à $f(3)$).\\n\\n$$\\boxed{A(3\\,;\\,1) \\quad ; \\quad T : y = 1}$$",
            explanation: "On résout $f'(x)=0$ pour trouver l'abscisse du point à tangente horizontale, puis on calcule l'ordonnée pour obtenir l'équation $y=f(a)$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "etf1-id",
    slug: "etude-de-fonctions-1ere",
    title: "Étude de fonctions",
    description: "Utiliser le signe de la dérivée pour déterminer le sens de variation d'une fonction, dresser un tableau de variations complet et résoudre des problèmes d'optimisation.",
    schoolLevel: "1ere",
    subject: "analyse",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📊",
    lessons: [
      {
        id: "etf1-l1",
        slug: "signe-de-la-derivee-et-sens-de-variation",
        title: "Signe de la dérivée et sens de variation",
        durationMinutes: 25,
        content: `## Théorème fondamental

Soit $f$ une fonction dérivable sur un intervalle $I$.

> - Si $f'(x) \\geqslant 0$ pour tout $x$ de $I$ (avec égalité seulement en des points isolés), alors $f$ est **croissante** sur $I$.
> - Si $f'(x) \\leqslant 0$ pour tout $x$ de $I$ (avec égalité seulement en des points isolés), alors $f$ est **décroissante** sur $I$.
> - Si $f'(x) = 0$ pour tout $x$ de $I$, alors $f$ est **constante** sur $I$.

Ce théorème permet d'étudier les variations d'une fonction **sans tracer sa courbe** : il suffit d'étudier le signe de $f'(x)$.

## Méthode

1. Calculer la fonction dérivée $f'(x)$.
2. Étudier le signe de $f'(x)$ (souvent en la factorisant, ou via un trinôme du second degré).
3. En déduire le sens de variation de $f$ grâce au théorème.

### Exemple

Soit $f(x) = x^3-3x$ sur $\\mathbb{R}$. On dérive :
$$f'(x) = 3x^2-3 = 3(x^2-1) = 3(x-1)(x+1)$$

On étudie le signe de ce produit (racines $-1$ et $1$, coefficient $a=3>0$ pour le trinôme $x^2-1$) :

- $f'(x) > 0$ sur $]-\\infty\\,;\\,-1[$ et sur $]1\\,;\\,+\\infty[$ : $f$ y est croissante.
- $f'(x) < 0$ sur $]-1\\,;\\,1[$ : $f$ y est décroissante.
- $f'(-1)=0$ et $f'(1)=0$.

## Extremums locaux

> Si $f'$ s'annule en $a$ **en changeant de signe**, alors $f$ admet un **extremum local** en $a$ :
> - un **maximum local** si $f'$ passe du signe $+$ au signe $-$ ;
> - un **minimum local** si $f'$ passe du signe $-$ au signe $+$.

Dans l'exemple précédent : en $x=-1$, $f'$ passe de $+$ à $-$, donc $f(-1)=(-1)^3-3(-1)=-1+3=2$ est un **maximum local**. En $x=1$, $f'$ passe de $-$ à $+$, donc $f(1)=1-3=-2$ est un **minimum local**.`,
        exercises: [
          {
            id: "etf1-l1-e1",
            question: "Si $f'(x) \\geqslant 0$ sur un intervalle $I$, alors $f$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "Croissante sur $I$" },
              { id: "B", text: "Décroissante sur $I$" },
              { id: "C", text: "Constante sur $I$" },
              { id: "D", text: "On ne peut rien dire" },
            ],
            correctId: "A",
            explanation: "C'est le théorème fondamental : une dérivée positive (ou nulle en des points isolés) caractérise une fonction croissante.",
            difficulty: "debutant",
          },
          {
            id: "etf1-l1-e2",
            question: "Si la dérivée $f'$ s'annule en $a$ sans changer de signe, alors $f$ admet nécessairement un extremum local en $a$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Si $f'$ s'annule en $a$ mais garde le même signe avant et après (par exemple $f(x)=x^3$ en $a=0$), il n'y a pas d'extremum local : c'est un point d'inflexion.",
            difficulty: "intermediaire",
          },
          {
            id: "etf1-l1-e3",
            question: "Soit $f$ dérivable telle que $f'(x) = (x-2)^2$. Que peut-on dire des variations de $f$ sur $\\mathbb{R}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$f$ est croissante sur $\\mathbb{R}$" },
              { id: "B", text: "$f$ est décroissante sur $\\mathbb{R}$" },
              { id: "C", text: "$f$ admet un maximum local en $x=2$" },
              { id: "D", text: "$f$ admet un minimum local en $x=2$" },
            ],
            correctId: "A",
            explanation: "$(x-2)^2 \\geqslant 0$ pour tout $x$, avec égalité seulement en $x=2$ (point isolé) : $f$ est donc croissante sur $\\mathbb{R}$ tout entier (sans extremum, car $f'$ ne change pas de signe).",
            difficulty: "intermediaire",
          },
          {
            id: "etf1-l1-e4",
            question: "Soit $f(x) = x^2-4x+3$ sur $\\mathbb{R}$. Étudie le signe de $f'(x)$ et donne le sens de variation de $f$.",
            type: "open",
            modelAnswer: "On calcule la dérivée :\\n\\n$$f'(x) = 2x-4$$\\n\\nOn résout $f'(x)=0$ : $2x-4=0 \\iff x=2$.\\n\\n$f'(x) = 2x-4$ est une fonction affine de coefficient directeur $2>0$, donc croissante : $f'(x)<0$ pour $x<2$ et $f'(x)>0$ pour $x>2$.\\n\\nPar le théorème du signe de la dérivée : $f$ est décroissante sur $]-\\infty\\,;\\,2]$ et croissante sur $[2\\,;\\,+\\infty[$.\\n\\n$$\\boxed{f \\text{ décroît sur } ]-\\infty;2] \\text{ et croît sur } [2;+\\infty[}$$",
            explanation: "On étudie le signe de la fonction affine $f'(x)=2x-4$ puis on applique le théorème du lien dérivée/variations.",
            difficulty: "intermediaire",
          },
          {
            id: "etf1-l1-e5",
            question: "Soit $f(x) = x^3-12x+1$ sur $\\mathbb{R}$. Détermine le signe de $f'(x)$, le sens de variation de $f$, et précise s'il existe des extremums locaux (en donnant leur valeur).",
            type: "open",
            modelAnswer: "On calcule la dérivée :\\n\\n$$f'(x) = 3x^2-12 = 3(x^2-4) = 3(x-2)(x+2)$$\\n\\nC'est un trinôme du second degré de racines $-2$ et $2$, avec $a=3>0$ pour le facteur $x^2-4$ : $f'(x)$ est donc positif à l'extérieur de $[-2\\,;\\,2]$ et négatif à l'intérieur.\\n\\n- $f'(x)>0$ sur $]-\\infty\\,;\\,-2[$ et $]2\\,;\\,+\\infty[$ : $f$ y est croissante.\\n- $f'(x)<0$ sur $]-2\\,;\\,2[$ : $f$ y est décroissante.\\n\\nEn $x=-2$, $f'$ passe de $+$ à $-$ : maximum local. $f(-2) = (-2)^3-12(-2)+1 = -8+24+1=17$.\\n\\nEn $x=2$, $f'$ passe de $-$ à $+$ : minimum local. $f(2) = 2^3-12(2)+1 = 8-24+1=-15$.\\n\\n$$\\boxed{\\text{Maximum local } f(-2)=17\\,;\\ \\text{minimum local } f(2)=-15}$$",
            explanation: "On factorise la dérivée comme un trinôme du second degré, on étudie son signe, puis on identifie les changements de signe comme des extremums locaux.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "etf1-l2",
        slug: "tableau-de-variations-complet",
        title: "Construire un tableau de variations complet",
        durationMinutes: 25,
        content: `## Qu'est-ce qu'un tableau de variations ?

Un **tableau de variations** synthétise, sur l'ensemble de définition d'une fonction, le signe de la dérivée et le sens de variation associé (flèches montantes/descendantes), ainsi que les valeurs prises aux bornes et aux points où $f'$ s'annule.

## Méthode complète (rappel et approfondissement)

1. Déterminer l'**ensemble de définition** de $f$.
2. Calculer $f'(x)$ et la factoriser si possible.
3. Résoudre $f'(x) = 0$ et étudier le signe de $f'(x)$ sur tout l'ensemble de définition.
4. Construire le tableau : une ligne pour $x$, une ligne pour le signe de $f'(x)$, une ligne pour les variations de $f$ (avec flèches), en indiquant les valeurs de $f$ aux points clés.

### Exemple détaillé

Étudions $f(x) = -x^3+3x+1$ sur $\\mathbb{R}$.

$$f'(x) = -3x^2+3 = -3(x^2-1) = -3(x-1)(x+1)$$

Racines de $f'$ : $-1$ et $1$. Comme le coefficient devant $x^2$ dans $-3(x^2-1)$ est négatif, $f'(x) < 0$ à l'extérieur de $[-1\\,;\\,1]$ et $f'(x) > 0$ à l'intérieur.

$f(-1) = -(-1)^3+3(-1)+1 = 1-3+1=-1$
$f(1) = -1^3+3(1)+1 = -1+3+1=3$

**Tableau de variations :**

| $x$ | $-\\infty$ | | $-1$ | | $1$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | | $\\searrow$ | $-1$ | $\\nearrow$ | $3$ | $\\searrow$ | |

On lit directement : minimum local $-1$ en $x=-1$, maximum local $3$ en $x=1$.

## Utiliser le tableau pour résoudre des problèmes

Un tableau de variations permet de répondre à des questions comme :
- « Combien de solutions a l'équation $f(x)=k$ ? » (en comparant $k$ aux valeurs extrêmes lues dans le tableau)
- « Quel est le maximum de $f$ sur $[a\\,;\\,b]$ ? » (on regarde la plus grande valeur atteinte dans le tableau restreint à $[a\\,;\\,b]$)`,
        exercises: [
          {
            id: "etf1-l2-e1",
            question: "Dans un tableau de variations, une flèche descendante ($\\searrow$) signifie que la fonction est :",
            type: "mcq",
            options: [
              { id: "A", text: "Croissante" },
              { id: "B", text: "Décroissante" },
              { id: "C", text: "Constante" },
              { id: "D", text: "Non dérivable" },
            ],
            correctId: "B",
            explanation: "Une flèche descendante symbolise une fonction décroissante sur l'intervalle considéré.",
            difficulty: "debutant",
          },
          {
            id: "etf1-l2-e2",
            question: "Dans un tableau de variations, les valeurs indiquées aux changements de variation sont toujours les valeurs de $f'(x)$ et non de $f(x)$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Sur la ligne de variations, on indique les valeurs de $f(x)$ (les images), pas celles de $f'(x)$ qui figurent sur la ligne du signe de la dérivée.",
            difficulty: "debutant",
          },
          {
            id: "etf1-l2-e3",
            question: "Une fonction $f$ a pour tableau de variations : décroissante sur $]-\\infty\\,;\\,0]$ avec $f(0)=-2$, puis croissante sur $[0\\,;\\,+\\infty[$. Combien de solutions a l'équation $f(x) = 5$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Aucune" },
              { id: "B", text: "Une" },
              { id: "C", text: "Deux" },
              { id: "D", text: "On ne peut pas savoir" },
            ],
            correctId: "C",
            explanation: "Comme $5 > f(0)=-2$ (le minimum), et que $f$ tend vers $+\\infty$ des deux côtés (croissante puis décroissante depuis un minimum), la droite $y=5$ coupe la courbe une fois sur chaque branche : deux solutions.",
            difficulty: "intermediaire",
          },
          {
            id: "etf1-l2-e4",
            question: "Soit $f(x) = x^2-6x+5$ sur $\\mathbb{R}$. Construis le tableau de variations complet de $f$ (avec les valeurs numériques).",
            type: "open",
            modelAnswer: "On dérive : $f'(x) = 2x-6$.\\n\\n$f'(x)=0 \\iff x=3$. Comme $f'$ est affine de coefficient $2>0$ : $f'(x)<0$ pour $x<3$ et $f'(x)>0$ pour $x>3$.\\n\\nOn calcule $f(3) = 3^2-6\\times3+5 = 9-18+5=-4$.\\n\\n**Tableau de variations :**\\n\\n| $x$ | $-\\infty$ | | $3$ | | $+\\infty$ |\\n|---|---|---|---|---|---|\\n| $f'(x)$ | | $-$ | $0$ | $+$ | |\\n| $f(x)$ | | $\\searrow$ | $-4$ | $\\nearrow$ | |\\n\\n$$\\boxed{f \\text{ décroît sur } ]-\\infty;3] \\text{ jusqu'à } -4, \\text{ puis croît sur } [3;+\\infty[}$$",
            explanation: "On calcule la dérivée, on détermine son signe, puis on synthétise dans un tableau avec la valeur minimale $f(3)=-4$.",
            difficulty: "intermediaire",
          },
          {
            id: "etf1-l2-e5",
            question: "On veut fabriquer une boîte sans couvercle à partir d'une plaque carrée de carton de côté $12$ cm, en découpant un carré de côté $x$ (en cm, $0<x<6$) à chaque coin puis en repliant. Le volume de la boîte est donné par $V(x) = x(12-2x)^2$. On admet que $V'(x) = 12(x-2)(x-6)$. Étudie le signe de $V'(x)$ sur $]0\\,;\\,6[$, dresse le tableau de variations de $V$, et donne la valeur de $x$ qui maximise le volume ainsi que ce volume maximal.",
            type: "open",
            modelAnswer: "On étudie le signe de $V'(x) = 12(x-2)(x-6)$ sur $]0\\,;\\,6[$.\\n\\nLes racines du produit $(x-2)(x-6)$ sont $2$ et $6$. Sur l'intervalle $]0\\,;\\,6[$, on a $x-6<0$ toujours (car $x<6$), donc le signe de $(x-2)(x-6)$ dépend du signe de $(x-2)$ :\\n\\n- pour $0<x<2$ : $(x-2)<0$ et $(x-6)<0$, donc le produit est positif : $V'(x)>0$.\\n- pour $2<x<6$ : $(x-2)>0$ et $(x-6)<0$, donc le produit est négatif : $V'(x)<0$.\\n\\nOn calcule $V(2) = 2\\times(12-4)^2 = 2\\times 8^2 = 2\\times64=128$.\\n\\n**Tableau de variations sur $]0\\,;\\,6[$ :**\\n\\n| $x$ | $0$ | | $2$ | | $6$ |\\n|---|---|---|---|---|---|\\n| $V'(x)$ | | $+$ | $0$ | $-$ | |\\n| $V(x)$ | | $\\nearrow$ | $128$ | $\\searrow$ | |\\n\\n$V$ admet donc un maximum en $x=2$, valant $128\\ \\text{cm}^3$.\\n\\n$$\\boxed{x=2\\text{ cm donne le volume maximal } V(2)=128\\ \\text{cm}^3}$$",
            explanation: "On étudie le signe du produit $(x-2)(x-6)$ en tenant compte de la restriction $0<x<6$ qui fixe le signe de l'un des deux facteurs, puis on lit le maximum dans le tableau.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "etf1-l3",
        slug: "optimisation",
        title: "Problèmes d'optimisation",
        durationMinutes: 20,
        content: `## Qu'est-ce qu'un problème d'optimisation ?

Un problème d'**optimisation** consiste à trouver la valeur d'une variable qui rend une quantité (aire, volume, coût, bénéfice...) **maximale** ou **minimale**, sous certaines contraintes.

## Méthode générale

1. **Choisir une variable** $x$ et déterminer son intervalle de validité (les contraintes du problème, par exemple des longueurs positives).
2. **Exprimer la quantité à optimiser** en fonction de $x$ : on obtient une fonction $f(x)$.
3. **Étudier les variations de $f$** sur l'intervalle pertinent (calcul de $f'$, signe, tableau de variations).
4. **Conclure** : lire dans le tableau la valeur de $x$ qui réalise l'extremum recherché, et calculer la valeur optimale de $f$.

### Exemple

Une entreprise vend $x$ objets (avec $0 \\leqslant x \\leqslant 100$) et son bénéfice (en euros) est modélisé par :
$$B(x) = -2x^2+80x-150$$

On dérive : $B'(x) = -4x+80$.

$B'(x) = 0 \\iff x=20$. Comme $B'$ est affine décroissante (coefficient $-4<0$) : $B'(x)>0$ pour $x<20$ et $B'(x)<0$ pour $x>20$.

$B(20) = -2(400)+1600-150 = -800+1600-150=650$.

**Conclusion** : le bénéfice est maximal pour $x=20$ objets vendus, avec un bénéfice maximal de $650$ €.

## Points de vigilance

> Toujours vérifier que la valeur trouvée pour $x$ appartient bien à l'intervalle imposé par le contexte (une longueur ne peut pas être négative, un nombre d'objets vendus est borné, etc.). Si l'extremum théorique de $f'$ tombe hors de l'intervalle autorisé, il faut comparer les valeurs de $f$ aux bornes de l'intervalle.`,
        exercises: [
          {
            id: "etf1-l3-e1",
            question: "Dans une démarche d'optimisation, après avoir exprimé la quantité à optimiser comme une fonction $f(x)$, la première chose à calculer est :",
            type: "mcq",
            options: [
              { id: "A", text: "$f(0)$" },
              { id: "B", text: "La fonction dérivée $f'(x)$" },
              { id: "C", text: "La limite de $f$ en $+\\infty$" },
              { id: "D", text: "Le discriminant de $f$" },
            ],
            correctId: "B",
            explanation: "On étudie les variations via le signe de la dérivée, c'est donc la première quantité à calculer après avoir modélisé le problème.",
            difficulty: "debutant",
          },
          {
            id: "etf1-l3-e2",
            question: "Dans un problème d'optimisation concret, on peut toujours ignorer les contraintes sur l'intervalle de définition de la variable.",
            type: "true_false",
            correctId: "faux",
            explanation: "Il faut toujours vérifier que la solution trouvée respecte les contraintes du problème (longueurs positives, quantités bornées, etc.), sinon la réponse n'a pas de sens physique.",
            difficulty: "debutant",
          },
          {
            id: "etf1-l3-e3",
            question: "Le coût de production de $x$ articles est $C(x) = x^2-40x+500$ pour $x \\in [0\\,;\\,40]$. Pour quelle valeur de $x$ ce coût est-il minimal ?",
            type: "mcq",
            options: [
              { id: "A", text: "$x=0$" },
              { id: "B", text: "$x=20$" },
              { id: "C", text: "$x=40$" },
              { id: "D", text: "$x=10$" },
            ],
            correctId: "B",
            explanation: "$C'(x)=2x-40$ s'annule en $x=20$, avec $C'<0$ avant et $C'>0$ après : minimum en $x=20$.",
            difficulty: "intermediaire",
          },
          {
            id: "etf1-l3-e4",
            question: "On dispose de $100$ m de clôture pour entourer un enclos rectangulaire. On note $x$ la longueur d'un des côtés (en mètres, $0<x<50$). Exprime l'aire $\\mathcal{A}(x)$ de l'enclos, étudie ses variations, puis détermine la valeur de $x$ qui maximise l'aire et donne cette aire maximale.",
            type: "open",
            modelAnswer: "Le périmètre est $100$ m, donc la somme d'une longueur et d'une largeur (demi-périmètre) est $50$ m. Si $x$ est un côté, l'autre vaut $50-x$.\\n\\n$$\\mathcal{A}(x) = x(50-x) = -x^2+50x$$\\n\\nOn dérive : $\\mathcal{A}'(x) = -2x+50$.\\n\\n$\\mathcal{A}'(x)=0 \\iff x=25$. Comme $\\mathcal{A}'$ est affine décroissante : $\\mathcal{A}'(x)>0$ pour $x<25$ et $\\mathcal{A}'(x)<0$ pour $x>25$ : maximum en $x=25$.\\n\\n$$\\mathcal{A}(25) = -25^2+50\\times25 = -625+1250=625$$\\n\\n$$\\boxed{x=25\\text{ m, aire maximale } = 625\\ \\text{m}^2}$$",
            explanation: "On modélise l'aire avec la contrainte de périmètre fixé, on étudie le signe de la dérivée affine, puis on conclut sur le maximum.",
            difficulty: "intermediaire",
          },
          {
            id: "etf1-l3-e5",
            question: "Une entreprise estime que son bénéfice (en milliers d'euros) pour la production de $x$ centaines d'objets ($0 \\leqslant x \\leqslant 10$) est $B(x) = -x^3+9x^2-15$. On admet que $B'(x) = -3x^2+18x = -3x(x-6)$. Étudie le signe de $B'(x)$ sur $[0\\,;\\,10]$, dresse le tableau de variations de $B$, et détermine la production qui maximise le bénéfice ainsi que ce bénéfice maximal.",
            type: "open",
            modelAnswer: "On étudie le signe de $B'(x) = -3x(x-6)$ sur $[0\\,;\\,10]$.\\n\\nLes racines sont $0$ et $6$. Le coefficient principal de $-3x(x-6) = -3x^2+18x$ est négatif, donc le trinôme est positif entre les racines et négatif à l'extérieur :\\n\\n- $B'(x)>0$ sur $]0\\,;\\,6[$\\n- $B'(x)<0$ sur $]6\\,;\\,10[$\\n\\nOn calcule $B(6) = -6^3+9\\times6^2-15 = -216+324-15=93$.\\n\\nOn calcule aussi les bornes pour situer le maximum global : $B(0)=-15$ et $B(10) = -1000+900-15=-115$.\\n\\n**Tableau de variations sur $[0\\,;\\,10]$ :**\\n\\n| $x$ | $0$ | | $6$ | | $10$ |\\n|---|---|---|---|---|---|\\n| $B'(x)$ | | $+$ | $0$ | $-$ | |\\n| $B(x)$ | $-15$ | $\\nearrow$ | $93$ | $\\searrow$ | $-115$ |\\n\\nLe bénéfice est donc maximal pour $x=6$ (soit $600$ objets), avec un bénéfice de $93$ milliers d'euros, soit $93\\,000$ €.\\n\\n$$\\boxed{x=6 \\text{ (600 objets), bénéfice maximal } 93\\,000\\text{ €}}$$",
            explanation: "On factorise la dérivée, on étudie son signe en tenant compte du coefficient principal négatif, puis on confirme avec les valeurs aux bornes que le maximum global est bien atteint en $x=6$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "psc1-id",
    slug: "produit-scalaire-1ere",
    title: "Produit scalaire",
    description: "Définir le produit scalaire de deux vecteurs (avec coordonnées ou avec angle et normes), caractériser l'orthogonalité et l'utiliser dans des problèmes géométriques.",
    schoolLevel: "1ere",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "📍",
    lessons: [
      {
        id: "psc1-l1",
        slug: "definition-du-produit-scalaire",
        title: "Définition du produit scalaire",
        durationMinutes: 25,
        content: `## Produit scalaire avec les coordonnées

Dans un repère orthonormé, si $\\vec{u}\\begin{pmatrix}x\\\\y\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x'\\\\y'\\end{pmatrix}$ sont deux vecteurs, le **produit scalaire** de $\\vec{u}$ et $\\vec{v}$, noté $\\vec{u}\\cdot\\vec{v}$, est le nombre réel défini par :
$$\\vec{u}\\cdot\\vec{v} = xx'+yy'$$

### Exemple

$\\vec{u}\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}1\\\\4\\end{pmatrix}$ :
$$\\vec{u}\\cdot\\vec{v} = 3\\times1+(-2)\\times4 = 3-8=-5$$

## Norme d'un vecteur

La **norme** de $\\vec{u}\\begin{pmatrix}x\\\\y\\end{pmatrix}$ est :
$$\\|\\vec{u}\\| = \\sqrt{x^2+y^2}$$

On remarque que $\\vec{u}\\cdot\\vec{u} = x^2+y^2 = \\|\\vec{u}\\|^2$.

## Produit scalaire avec angle et normes

> Pour deux vecteurs non nuls $\\vec{u}$ et $\\vec{v}$ formant un angle $\\theta = (\\widehat{\\vec{u}\\,;\\,\\vec{v}})$ :
> $$\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\times\\|\\vec{v}\\|\\times\\cos\\theta$$

### Exemple

Si $\\|\\vec{u}\\|=4$, $\\|\\vec{v}\\|=5$ et l'angle entre eux est $\\theta=60°$ :
$$\\vec{u}\\cdot\\vec{v} = 4\\times5\\times\\cos(60°) = 20\\times\\dfrac{1}{2}=10$$

## Propriétés du produit scalaire

Le produit scalaire est :
- **symétrique** : $\\vec{u}\\cdot\\vec{v} = \\vec{v}\\cdot\\vec{u}$ ;
- **bilinéaire** : $\\vec{u}\\cdot(\\vec{v}+\\vec{w}) = \\vec{u}\\cdot\\vec{v}+\\vec{u}\\cdot\\vec{w}$, et $(k\\vec{u})\\cdot\\vec{v} = k(\\vec{u}\\cdot\\vec{v})$ pour tout réel $k$ ;
- nul si l'un des deux vecteurs est nul.

> **Attention** : le produit scalaire de deux vecteurs est un **nombre réel**, pas un vecteur !`,
        exercises: [
          {
            id: "psc1-l1-e1",
            question: "Le produit scalaire de deux vecteurs $\\vec{u}$ et $\\vec{v}$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "Un vecteur" },
              { id: "B", text: "Un nombre réel" },
              { id: "C", text: "Un angle" },
              { id: "D", text: "Une droite" },
            ],
            correctId: "B",
            explanation: "Le produit scalaire $\\vec{u}\\cdot\\vec{v}$ est toujours un nombre réel, contrairement à la somme de vecteurs qui donne un vecteur.",
            difficulty: "debutant",
          },
          {
            id: "psc1-l1-e2",
            question: "Le produit scalaire est symétrique : $\\vec{u}\\cdot\\vec{v} = \\vec{v}\\cdot\\vec{u}$ pour tous vecteurs $\\vec{u}$, $\\vec{v}$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est une propriété de base du produit scalaire, qui se voit immédiatement avec la formule en coordonnées $xx'+yy'=x'x+y'y$.",
            difficulty: "debutant",
          },
          {
            id: "psc1-l1-e3",
            question: "Soient $\\vec{u}\\begin{pmatrix}2\\\\5\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}-1\\\\3\\end{pmatrix}$. Calcule $\\vec{u}\\cdot\\vec{v}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$13$" },
              { id: "B", text: "$-2$" },
              { id: "C", text: "$17$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "A",
            explanation: "$\\vec{u}\\cdot\\vec{v} = 2\\times(-1)+5\\times3 = -2+15=13$.",
            difficulty: "debutant",
          },
          {
            id: "psc1-l1-e4",
            question: "Calcule $\\vec{u}\\cdot\\vec{v}$ sachant que $\\|\\vec{u}\\|=6$, $\\|\\vec{v}\\|=3$ et que l'angle entre $\\vec{u}$ et $\\vec{v}$ mesure $120°$.",
            type: "open",
            modelAnswer: "On utilise la formule avec angle et normes :\\n\\n$$\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\times\\|\\vec{v}\\|\\times\\cos\\theta$$\\n\\nOn sait que $\\cos(120°) = -\\dfrac{1}{2}$.\\n\\n$$\\vec{u}\\cdot\\vec{v} = 6\\times3\\times\\left(-\\dfrac{1}{2}\\right) = 18\\times\\left(-\\dfrac{1}{2}\\right) = -9$$\\n\\n$$\\boxed{\\vec{u}\\cdot\\vec{v} = -9}$$",
            explanation: "On applique directement la formule $\\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$ en utilisant la valeur connue $\\cos(120°)=-1/2$.",
            difficulty: "intermediaire",
          },
          {
            id: "psc1-l1-e5",
            question: "Soient $\\vec{u}\\begin{pmatrix}4\\\\-3\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}2\\\\6\\end{pmatrix}$. Calcule $\\vec{u}\\cdot\\vec{v}$ avec les coordonnées, puis calcule $\\|\\vec{u}\\|$ et $\\|\\vec{v}\\|$, et déduis-en la valeur de $\\cos\\theta$ où $\\theta$ est l'angle entre $\\vec{u}$ et $\\vec{v}$.",
            type: "open",
            modelAnswer: "**Produit scalaire en coordonnées :**\\n\\n$$\\vec{u}\\cdot\\vec{v} = 4\\times2+(-3)\\times6 = 8-18=-10$$\\n\\n**Normes :**\\n\\n$$\\|\\vec{u}\\| = \\sqrt{4^2+(-3)^2} = \\sqrt{16+9}=\\sqrt{25}=5$$\\n\\n$$\\|\\vec{v}\\| = \\sqrt{2^2+6^2} = \\sqrt{4+36}=\\sqrt{40}=2\\sqrt{10}$$\\n\\n**Calcul de $\\cos\\theta$ :** on utilise $\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$, donc :\\n\\n$$\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\|\\vec{v}\\|} = \\dfrac{-10}{5\\times2\\sqrt{10}} = \\dfrac{-10}{10\\sqrt{10}} = -\\dfrac{1}{\\sqrt{10}}$$\\n\\n$$\\boxed{\\vec{u}\\cdot\\vec{v}=-10\\,;\\ \\|\\vec{u}\\|=5\\,;\\ \\|\\vec{v}\\|=2\\sqrt{10}\\,;\\ \\cos\\theta = -\\dfrac{1}{\\sqrt{10}}}$$",
            explanation: "On combine les deux formules du produit scalaire : celle en coordonnées pour calculer $\\vec{u}\\cdot\\vec{v}$, et celle avec angle/normes pour isoler $\\cos\\theta$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "psc1-l2",
        slug: "orthogonalite-de-deux-vecteurs",
        title: "Orthogonalité de deux vecteurs",
        durationMinutes: 20,
        content: `## Caractérisation de l'orthogonalité

> Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont **orthogonaux** si et seulement si leur produit scalaire est nul :
> $$\\vec{u}\\perp\\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0$$

Cela découle de la formule $\\vec{u}\\cdot\\vec{v}=\\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$ : pour des vecteurs non nuls, le produit scalaire est nul exactement quand $\\cos\\theta=0$, soit $\\theta=90°$.

### Exemple

$\\vec{u}\\begin{pmatrix}3\\\\4\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}4\\\\-3\\end{pmatrix}$ :
$$\\vec{u}\\cdot\\vec{v} = 3\\times4+4\\times(-3) = 12-12=0$$

Donc $\\vec{u}$ et $\\vec{v}$ sont orthogonaux.

## Application : droites perpendiculaires

Deux droites de vecteurs directeurs respectifs $\\vec{u}$ et $\\vec{v}$ sont **perpendiculaires** si et seulement si $\\vec{u}\\cdot\\vec{v}=0$.

### Exemple

Soit la droite $d_1$ de vecteur directeur $\\vec{u}\\begin{pmatrix}2\\\\1\\end{pmatrix}$ et $d_2$ de vecteur directeur $\\vec{v}\\begin{pmatrix}-1\\\\2\\end{pmatrix}$.
$$\\vec{u}\\cdot\\vec{v} = 2\\times(-1)+1\\times2 = -2+2=0$$
Les droites $d_1$ et $d_2$ sont donc perpendiculaires.

## Vecteur normal à une droite

Un vecteur $\\vec{n}\\begin{pmatrix}a\\\\b\\end{pmatrix}$ non nul est dit **normal** à une droite $d$ s'il est orthogonal à tout vecteur directeur de $d$. Une droite d'équation cartésienne $ax+by+c=0$ admet $\\vec{n}\\begin{pmatrix}a\\\\b\\end{pmatrix}$ comme vecteur normal.

> **Identités remarquables avec le produit scalaire :**
> $$\\|\\vec{u}+\\vec{v}\\|^2 = \\|\\vec{u}\\|^2+2\\vec{u}\\cdot\\vec{v}+\\|\\vec{v}\\|^2$$
> $$\\|\\vec{u}-\\vec{v}\\|^2 = \\|\\vec{u}\\|^2-2\\vec{u}\\cdot\\vec{v}+\\|\\vec{v}\\|^2$$`,
        exercises: [
          {
            id: "psc1-l2-e1",
            question: "Deux vecteurs non nuls $\\vec{u}$ et $\\vec{v}$ sont orthogonaux si et seulement si :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\vec{u}\\cdot\\vec{v} = 1$" },
              { id: "B", text: "$\\vec{u}\\cdot\\vec{v} = 0$" },
              { id: "C", text: "$\\|\\vec{u}\\| = \\|\\vec{v}\\|$" },
              { id: "D", text: "$\\vec{u} = \\vec{v}$" },
            ],
            correctId: "B",
            explanation: "L'orthogonalité de deux vecteurs équivaut exactement à la nullité de leur produit scalaire.",
            difficulty: "debutant",
          },
          {
            id: "psc1-l2-e2",
            question: "Les vecteurs $\\vec{u}\\begin{pmatrix}1\\\\2\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}2\\\\1\\end{pmatrix}$ sont orthogonaux.",
            type: "true_false",
            correctId: "faux",
            explanation: "$\\vec{u}\\cdot\\vec{v} = 1\\times2+2\\times1=4\\neq0$, donc ils ne sont pas orthogonaux.",
            difficulty: "debutant",
          },
          {
            id: "psc1-l2-e3",
            question: "Une droite a pour équation cartésienne $3x-2y+5=0$. Quel vecteur est normal à cette droite ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\vec{n}\\begin{pmatrix}3\\\\-2\\end{pmatrix}$" },
              { id: "B", text: "$\\vec{n}\\begin{pmatrix}-2\\\\3\\end{pmatrix}$" },
              { id: "C", text: "$\\vec{n}\\begin{pmatrix}2\\\\3\\end{pmatrix}$" },
              { id: "D", text: "$\\vec{n}\\begin{pmatrix}5\\\\0\\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "Pour une droite d'équation $ax+by+c=0$, un vecteur normal est $\\vec{n}\\begin{pmatrix}a\\\\b\\end{pmatrix}$, ici $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "psc1-l2-e4",
            question: "Détermine la valeur de $k$ pour que les vecteurs $\\vec{u}\\begin{pmatrix}3\\\\k\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}2\\\\6\\end{pmatrix}$ soient orthogonaux.",
            type: "open",
            modelAnswer: "Les vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul :\\n\\n$$\\vec{u}\\cdot\\vec{v} = 3\\times2+k\\times6 = 6+6k$$\\n\\nOn résout :\\n\\n$$6+6k=0 \\iff 6k=-6 \\iff k=-1$$\\n\\nVérification : $\\vec{u}\\begin{pmatrix}3\\\\-1\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}2\\\\6\\end{pmatrix}$ donnent $3\\times2+(-1)\\times6=6-6=0$. ✓\\n\\n$$\\boxed{k=-1}$$",
            explanation: "On pose l'équation $\\vec{u}\\cdot\\vec{v}=0$ avec les coordonnées et on résout l'équation du premier degré en $k$.",
            difficulty: "intermediaire",
          },
          {
            id: "psc1-l2-e5",
            question: "Dans un repère orthonormé, on donne $A(1\\,;\\,2)$, $B(4\\,;\\,3)$ et $C(2\\,;\\,5)$. Calcule les vecteurs $\\vec{AB}$ et $\\vec{AC}$, puis détermine si le triangle $ABC$ est rectangle en $A$.",
            type: "open",
            modelAnswer: "On calcule les coordonnées des vecteurs :\\n\\n$$\\vec{AB} = \\begin{pmatrix}4-1\\\\3-2\\end{pmatrix} = \\begin{pmatrix}3\\\\1\\end{pmatrix}$$\\n\\n$$\\vec{AC} = \\begin{pmatrix}2-1\\\\5-2\\end{pmatrix} = \\begin{pmatrix}1\\\\3\\end{pmatrix}$$\\n\\nLe triangle est rectangle en $A$ si et seulement si $\\vec{AB}$ et $\\vec{AC}$ sont orthogonaux, c'est-à-dire $\\vec{AB}\\cdot\\vec{AC}=0$.\\n\\n$$\\vec{AB}\\cdot\\vec{AC} = 3\\times1+1\\times3 = 3+3=6 \\neq 0$$\\n\\nLe produit scalaire n'est pas nul, donc le triangle $ABC$ n'est pas rectangle en $A$.\\n\\n$$\\boxed{\\vec{AB}\\cdot\\vec{AC}=6\\neq0 \\implies ABC \\text{ n'est pas rectangle en } A}$$",
            explanation: "On utilise la caractérisation de l'orthogonalité par le produit scalaire nul pour tester si l'angle en $A$ est droit.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "psc1-l3",
        slug: "applications-al-kashi-et-projection",
        title: "Applications : théorème d'Al-Kashi et projection",
        durationMinutes: 20,
        content: `## Théorème d'Al-Kashi

Dans un triangle $ABC$, en notant $a=BC$, $b=CA$, $c=AB$ et $\\widehat{A}$ l'angle en $A$, le théorème d'Al-Kashi (généralisation de Pythagore) énonce :
$$a^2 = b^2+c^2-2bc\\cos\\widehat{A}$$

### Démonstration rapide (à l'aide du produit scalaire)

On écrit $\\vec{BC} = \\vec{AC}-\\vec{AB}$, donc :
$$BC^2 = \\|\\vec{AC}-\\vec{AB}\\|^2 = \\|\\vec{AC}\\|^2-2\\vec{AC}\\cdot\\vec{AB}+\\|\\vec{AB}\\|^2 = b^2+c^2-2bc\\cos\\widehat{A}$$

car $\\vec{AB}\\cdot\\vec{AC} = AB\\times AC\\times\\cos\\widehat{A} = cb\\cos\\widehat{A}$.

### Exemple

Dans un triangle $ABC$ avec $AB=5$, $AC=7$ et $\\widehat{A}=60°$ :
$$BC^2 = 5^2+7^2-2\\times5\\times7\\times\\cos(60°) = 25+49-70\\times\\dfrac{1}{2} = 74-35=39$$
$$BC = \\sqrt{39}$$

## Projection orthogonale

> Si $H$ est le projeté orthogonal de $C$ sur la droite $(AB)$, alors :
> $$\\vec{AB}\\cdot\\vec{AC} = \\vec{AB}\\cdot\\vec{AH} = AB \\times \\overline{AH}$$
> où $\\overline{AH}$ est la mesure algébrique de $\\vec{AH}$ sur la droite $(AB)$.

Cette propriété permet de calculer un produit scalaire en se ramenant à une projection, sans connaître l'angle directement.

### Exemple

Si $AB=10$ et que le projeté orthogonal $H$ de $C$ sur $(AB)$ vérifie $\\overline{AH}=4$ (dans le même sens que $\\vec{AB}$), alors :
$$\\vec{AB}\\cdot\\vec{AC} = 10\\times4=40$$`,
        exercises: [
          {
            id: "psc1-l3-e1",
            question: "Le théorème d'Al-Kashi généralise :",
            type: "mcq",
            options: [
              { id: "A", text: "Le théorème de Thalès" },
              { id: "B", text: "Le théorème de Pythagore" },
              { id: "C", text: "Le théorème des milieux" },
              { id: "D", text: "La formule de l'aire d'un triangle" },
            ],
            correctId: "B",
            explanation: "Quand $\\widehat{A}=90°$, $\\cos\\widehat{A}=0$ et la formule d'Al-Kashi devient $a^2=b^2+c^2$, c'est-à-dire le théorème de Pythagore.",
            difficulty: "debutant",
          },
          {
            id: "psc1-l3-e2",
            question: "Le théorème d'Al-Kashi ne s'applique qu'aux triangles rectangles.",
            type: "true_false",
            correctId: "faux",
            explanation: "Le théorème d'Al-Kashi s'applique à n'importe quel triangle, rectangle ou non ; il généralise le théorème de Pythagore.",
            difficulty: "debutant",
          },
          {
            id: "psc1-l3-e3",
            question: "Dans un triangle $ABC$ avec $AB=6$, $AC=8$ et $\\widehat{A}=90°$, que vaut $BC^2$ selon Al-Kashi ?",
            type: "mcq",
            options: [
              { id: "A", text: "$100$" },
              { id: "B", text: "$48$" },
              { id: "C", text: "$14$" },
              { id: "D", text: "$28$" },
            ],
            correctId: "A",
            explanation: "$BC^2 = 6^2+8^2-2\\times6\\times8\\times\\cos(90°) = 36+64-0=100$ (on retrouve Pythagore puisque $\\cos(90°)=0$).",
            difficulty: "intermediaire",
          },
          {
            id: "psc1-l3-e4",
            question: "Dans un triangle $ABC$, on donne $AB=4$, $AC=6$ et $\\widehat{A}=120°$. Calcule $BC$ à l'aide du théorème d'Al-Kashi (donne la valeur exacte).",
            type: "open",
            modelAnswer: "On applique le théorème d'Al-Kashi :\\n\\n$$BC^2 = AB^2+AC^2-2\\times AB\\times AC\\times\\cos\\widehat{A}$$\\n\\nOn sait que $\\cos(120°)=-\\dfrac{1}{2}$, donc :\\n\\n$$BC^2 = 4^2+6^2-2\\times4\\times6\\times\\left(-\\dfrac{1}{2}\\right) = 16+36+24 = 76$$\\n\\n$$BC = \\sqrt{76} = \\sqrt{4\\times19} = 2\\sqrt{19}$$\\n\\n$$\\boxed{BC = 2\\sqrt{19}}$$",
            explanation: "On applique directement la formule d'Al-Kashi avec $\\cos(120°)=-1/2$, puis on simplifie la racine carrée obtenue.",
            difficulty: "intermediaire",
          },
          {
            id: "psc1-l3-e5",
            question: "Dans un triangle $ABC$, on donne $AB=7$, $BC=8$ et $AC=5$. Calcule $\\cos\\widehat{A}$ à l'aide du théorème d'Al-Kashi (en l'écrivant avec le sommet $A$), puis donne la valeur de l'angle $\\widehat{A}$ arrondie au degré (on donne $\\cos^{-1}(0{,}25) \\approx 75{,}5°$).",
            type: "open",
            modelAnswer: "Le théorème d'Al-Kashi écrit avec le sommet $A$ (côté opposé $BC=a$) donne :\\n\\n$$BC^2 = AB^2+AC^2-2\\times AB\\times AC\\times\\cos\\widehat{A}$$\\n\\nOn isole $\\cos\\widehat{A}$ :\\n\\n$$\\cos\\widehat{A} = \\dfrac{AB^2+AC^2-BC^2}{2\\times AB\\times AC}$$\\n\\nOn remplace : $AB=7$, $AC=5$, $BC=8$.\\n\\n$$\\cos\\widehat{A} = \\dfrac{7^2+5^2-8^2}{2\\times7\\times5} = \\dfrac{49+25-64}{70} = \\dfrac{10}{70} = \\dfrac{1}{7} \\approx 0{,}143$$\\n\\nOn obtient $\\widehat{A} = \\cos^{-1}\\left(\\dfrac{1}{7}\\right) \\approx 81{,}8°$ (à l'aide de la calculatrice).\\n\\n$$\\boxed{\\cos\\widehat{A} = \\dfrac{1}{7} \\quad ; \\quad \\widehat{A} \\approx 81{,}8°}$$",
            explanation: "On isole le cosinus de l'angle dans la formule d'Al-Kashi, en faisant bien attention à associer le côté opposé au sommet considéré, puis on utilise la fonction $\\cos^{-1}$ pour obtenir l'angle.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "trg1-id",
    slug: "trigonometrie-1ere",
    title: "Trigonométrie",
    description: "Maîtriser le cercle trigonométrique, les angles associés, résoudre des équations trigonométriques simples et utiliser les formules d'addition.",
    schoolLevel: "1ere",
    subject: "geometrie",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "🧭",
    lessons: [
      {
        id: "trg1-l1",
        slug: "cercle-trigonometrique-et-angles-associes",
        title: "Cercle trigonométrique et angles associés",
        durationMinutes: 25,
        content: `## Le cercle trigonométrique

Le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$, muni d'un sens de parcours positif (sens inverse des aiguilles d'une montre). Pour tout réel $x$, on associe au point $M$ obtenu en parcourant une longueur d'arc $x$ à partir du point $(1\\,;\\,0)$ les coordonnées :
$$M(\\cos x\\,;\\,\\sin x)$$

### Valeurs remarquables

| $x$ | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |
|---|---|---|---|---|---|
| $\\cos x$ | $1$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{1}{2}$ | $0$ |
| $\\sin x$ | $0$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ | $1$ |

## Propriétés fondamentales

Pour tout réel $x$ :
$$\\cos^2 x + \\sin^2 x = 1 \\qquad -1\\leqslant\\cos x\\leqslant1 \\qquad -1\\leqslant\\sin x\\leqslant1$$

Et la **périodicité** : $\\cos(x+2\\pi) = \\cos x$ et $\\sin(x+2\\pi)=\\sin x$.

## Angles associés

| Relation | $\\cos$ | $\\sin$ |
|---|---|---|
| $-x$ | $\\cos(-x) = \\cos x$ | $\\sin(-x) = -\\sin x$ |
| $\\pi - x$ | $\\cos(\\pi-x) = -\\cos x$ | $\\sin(\\pi-x) = \\sin x$ |
| $\\pi + x$ | $\\cos(\\pi+x) = -\\cos x$ | $\\sin(\\pi+x) = -\\sin x$ |
| $\\dfrac{\\pi}{2}-x$ | $\\cos\\left(\\dfrac{\\pi}{2}-x\\right) = \\sin x$ | $\\sin\\left(\\dfrac{\\pi}{2}-x\\right) = \\cos x$ |

> Ces relations s'obtiennent par symétries sur le cercle trigonométrique (par rapport à l'axe des abscisses, des ordonnées, à l'origine, ou à la première bissectrice).

### Exemple

$$\\cos\\left(\\dfrac{2\\pi}{3}\\right) = \\cos\\left(\\pi-\\dfrac{\\pi}{3}\\right) = -\\cos\\left(\\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{2}$$`,
        exercises: [
          {
            id: "trg1-l1-e1",
            question: "Pour tout réel $x$, on a toujours :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\cos x + \\sin x = 1$" },
              { id: "B", text: "$\\cos^2 x + \\sin^2 x = 1$" },
              { id: "C", text: "$\\cos x \\times \\sin x = 1$" },
              { id: "D", text: "$\\cos^2 x - \\sin^2 x = 1$" },
            ],
            correctId: "B",
            explanation: "C'est la relation fondamentale de la trigonométrie, qui traduit que le point $M(\\cos x\\,;\\,\\sin x)$ est sur le cercle de rayon $1$.",
            difficulty: "debutant",
          },
          {
            id: "trg1-l1-e2",
            question: "$\\sin x$ peut prendre n'importe quelle valeur réelle.",
            type: "true_false",
            correctId: "faux",
            explanation: "$\\sin x$ est toujours compris entre $-1$ et $1$ : $-1\\leqslant\\sin x\\leqslant1$.",
            difficulty: "debutant",
          },
          {
            id: "trg1-l1-e3",
            question: "Quelle est la valeur de $\\sin\\left(\\dfrac{\\pi}{3}\\right)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{2}$" },
              { id: "B", text: "$\\dfrac{\\sqrt{2}}{2}$" },
              { id: "C", text: "$\\dfrac{\\sqrt{3}}{2}$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "C",
            explanation: "C'est une valeur remarquable du cercle trigonométrique : $\\sin\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{2}$.",
            difficulty: "debutant",
          },
          {
            id: "trg1-l1-e4",
            question: "Sachant que $\\cos x = \\dfrac{3}{5}$ et que $x \\in \\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, calcule $\\sin x$.",
            type: "open",
            modelAnswer: "On utilise la relation fondamentale $\\cos^2 x+\\sin^2 x=1$ :\\n\\n$$\\sin^2 x = 1-\\cos^2 x = 1-\\left(\\dfrac{3}{5}\\right)^2 = 1-\\dfrac{9}{25} = \\dfrac{16}{25}$$\\n\\nComme $x \\in \\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, on a $\\sin x \\geqslant 0$, donc :\\n\\n$$\\sin x = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}$$\\n\\n$$\\boxed{\\sin x = \\dfrac{4}{5}}$$",
            explanation: "On utilise la relation fondamentale pour trouver $\\sin^2 x$, puis on choisit le signe positif car $x$ appartient au premier quadrant où $\\sin x\\geqslant0$.",
            difficulty: "intermediaire",
          },
          {
            id: "trg1-l1-e5",
            question: "Calcule $\\cos\\left(\\dfrac{5\\pi}{6}\\right)$ et $\\sin\\left(\\dfrac{5\\pi}{6}\\right)$ en utilisant les formules des angles associés (on remarquera que $\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$).",
            type: "open",
            modelAnswer: "On écrit $\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$, ce qui permet d'utiliser les formules des angles associés à $\\pi - x$ avec $x=\\dfrac{\\pi}{6}$.\\n\\n$$\\cos\\left(\\pi-\\dfrac{\\pi}{6}\\right) = -\\cos\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{\\sqrt{3}}{2}$$\\n\\n$$\\sin\\left(\\pi-\\dfrac{\\pi}{6}\\right) = \\sin\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$$\\n\\n$$\\boxed{\\cos\\left(\\dfrac{5\\pi}{6}\\right) = -\\dfrac{\\sqrt{3}}{2} \\quad ; \\quad \\sin\\left(\\dfrac{5\\pi}{6}\\right) = \\dfrac{1}{2}}$$",
            explanation: "On reconnaît la forme $\\pi-x$ et on applique les formules du cours : le cosinus change de signe, le sinus reste identique.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "trg1-l2",
        slug: "equations-trigonometriques",
        title: "Résolution d'équations trigonométriques",
        durationMinutes: 25,
        content: `## Équation $\\cos x = \\cos a$

> Sur $\\mathbb{R}$ :
> $$\\cos x = \\cos a \\iff x = a + 2k\\pi \\ \\text{ou}\\ x=-a+2k\\pi,\\ k\\in\\mathbb{Z}$$

### Exemple

Résoudre $\\cos x = \\dfrac{1}{2}$ sur $[0\\,;\\,2\\pi[$. On sait que $\\cos\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$, donc $a=\\dfrac{\\pi}{3}$ :
$$x = \\dfrac{\\pi}{3}+2k\\pi \\quad \\text{ou} \\quad x = -\\dfrac{\\pi}{3}+2k\\pi$$

Sur $[0\\,;\\,2\\pi[$, on garde $x=\\dfrac{\\pi}{3}$ (avec $k=0$) et $x=-\\dfrac{\\pi}{3}+2\\pi=\\dfrac{5\\pi}{3}$ (avec $k=1$).

$$S = \\left\\{\\dfrac{\\pi}{3}\\,;\\,\\dfrac{5\\pi}{3}\\right\\}$$

## Équation $\\sin x = \\sin a$

> Sur $\\mathbb{R}$ :
> $$\\sin x = \\sin a \\iff x = a+2k\\pi \\ \\text{ou}\\ x=\\pi-a+2k\\pi,\\ k\\in\\mathbb{Z}$$

### Exemple

Résoudre $\\sin x = \\dfrac{\\sqrt{2}}{2}$ sur $[0\\,;\\,2\\pi[$. On sait que $\\sin\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sqrt{2}}{2}$, donc $a=\\dfrac{\\pi}{4}$ :
$$x = \\dfrac{\\pi}{4}+2k\\pi \\quad \\text{ou} \\quad x = \\pi-\\dfrac{\\pi}{4}+2k\\pi = \\dfrac{3\\pi}{4}+2k\\pi$$

Sur $[0\\,;\\,2\\pi[$ :
$$S = \\left\\{\\dfrac{\\pi}{4}\\,;\\,\\dfrac{3\\pi}{4}\\right\\}$$

## Méthode

1. Identifier une solution évidente $a$ (souvent une valeur remarquable du cours).
2. Écrire les deux familles de solutions générales sur $\\mathbb{R}$.
3. Restreindre à l'intervalle demandé en testant les valeurs de $k$.

> **Astuce** : pour $\\cos x = 0$, les solutions sont $x=\\dfrac{\\pi}{2}+k\\pi$ ; pour $\\sin x = 0$, les solutions sont $x = k\\pi$.`,
        exercises: [
          {
            id: "trg1-l2-e1",
            question: "Les solutions de $\\cos x = \\cos a$ sur $\\mathbb{R}$ sont de la forme :",
            type: "mcq",
            options: [
              { id: "A", text: "$x=a+2k\\pi$ uniquement" },
              { id: "B", text: "$x=a+2k\\pi$ ou $x=-a+2k\\pi$" },
              { id: "C", text: "$x=a+k\\pi$" },
              { id: "D", text: "$x=\\pi-a+2k\\pi$ uniquement" },
            ],
            correctId: "B",
            explanation: "C'est la formule générale de résolution de $\\cos x = \\cos a$, qui correspond aux deux points du cercle ayant la même abscisse.",
            difficulty: "debutant",
          },
          {
            id: "trg1-l2-e2",
            question: "L'équation $\\sin x = 0$ a pour solutions $x = k\\pi$, $k \\in \\mathbb{Z}$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Le sinus s'annule exactement aux multiples entiers de $\\pi$ sur le cercle trigonométrique (en $0$, $\\pi$, $2\\pi$, etc., et leurs opposés).",
            difficulty: "debutant",
          },
          {
            id: "trg1-l2-e3",
            question: "Quelles sont les solutions de $\\cos x = -1$ sur $[0\\,;\\,2\\pi[$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$x = 0$" },
              { id: "B", text: "$x = \\pi$" },
              { id: "C", text: "$x = \\dfrac{\\pi}{2}$ et $x=\\dfrac{3\\pi}{2}$" },
              { id: "D", text: "Aucune solution" },
            ],
            correctId: "B",
            explanation: "$\\cos x=-1$ correspond au point $(-1\\,;\\,0)$ du cercle trigonométrique, atteint uniquement en $x=\\pi$ sur $[0\\,;\\,2\\pi[$.",
            difficulty: "intermediaire",
          },
          {
            id: "trg1-l2-e4",
            question: "Résous l'équation $\\sin x = -\\dfrac{1}{2}$ sur $[0\\,;\\,2\\pi[$.",
            type: "open",
            modelAnswer: "On sait que $\\sin\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$, donc une solution de référence pour $\\sin x = -\\dfrac{1}{2}$ est $a=-\\dfrac{\\pi}{6}$ (puisque $\\sin(-x)=-\\sin x$).\\n\\nLes solutions générales sur $\\mathbb{R}$ sont :\\n\\n$$x = -\\dfrac{\\pi}{6}+2k\\pi \\quad \\text{ou} \\quad x = \\pi-\\left(-\\dfrac{\\pi}{6}\\right)+2k\\pi = \\dfrac{7\\pi}{6}+2k\\pi$$\\n\\nOn restreint à $[0\\,;\\,2\\pi[$ :\\n\\n- Pour la première famille avec $k=1$ : $x=-\\dfrac{\\pi}{6}+2\\pi=\\dfrac{11\\pi}{6}$, qui appartient à $[0\\,;\\,2\\pi[$.\\n- Pour la deuxième famille avec $k=0$ : $x=\\dfrac{7\\pi}{6}$, qui appartient à $[0\\,;\\,2\\pi[$.\\n\\n$$\\boxed{S = \\left\\{\\dfrac{7\\pi}{6}\\,;\\,\\dfrac{11\\pi}{6}\\right\\}}$$",
            explanation: "On identifie une valeur de référence (ici $-\\pi/6$), on écrit les deux familles de solutions, puis on sélectionne celles qui tombent dans l'intervalle demandé.",
            difficulty: "expert",
          },
          {
            id: "trg1-l2-e5",
            question: "Résous l'équation $\\cos\\left(2x\\right) = \\dfrac{\\sqrt{2}}{2}$ sur $[0\\,;\\,2\\pi[$ (on pourra poser $X=2x$ et résoudre d'abord en $X$ sur l'intervalle adapté).",
            type: "open",
            modelAnswer: "On pose $X=2x$. Comme $x \\in [0\\,;\\,2\\pi[$, on a $X \\in [0\\,;\\,4\\pi[$.\\n\\nOn résout $\\cos X = \\dfrac{\\sqrt{2}}{2}$ : on sait que $\\cos\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sqrt{2}}{2}$, donc :\\n\\n$$X = \\dfrac{\\pi}{4}+2k\\pi \\quad \\text{ou} \\quad X = -\\dfrac{\\pi}{4}+2k\\pi,\\ k\\in\\mathbb{Z}$$\\n\\nOn cherche toutes les valeurs de $X$ dans $[0\\,;\\,4\\pi[$ :\\n\\n- Famille $\\dfrac{\\pi}{4}+2k\\pi$ : $k=0 \\Rightarrow X=\\dfrac{\\pi}{4}$ ; $k=1 \\Rightarrow X=\\dfrac{\\pi}{4}+2\\pi=\\dfrac{9\\pi}{4}$.\\n- Famille $-\\dfrac{\\pi}{4}+2k\\pi$ : $k=1 \\Rightarrow X=-\\dfrac{\\pi}{4}+2\\pi=\\dfrac{7\\pi}{4}$ ; $k=2 \\Rightarrow X=-\\dfrac{\\pi}{4}+4\\pi=\\dfrac{15\\pi}{4}$.\\n\\nOn obtient $X \\in \\left\\{\\dfrac{\\pi}{4}\\,;\\,\\dfrac{7\\pi}{4}\\,;\\,\\dfrac{9\\pi}{4}\\,;\\,\\dfrac{15\\pi}{4}\\right\\}$, donc en revenant à $x=\\dfrac{X}{2}$ :\\n\\n$$x \\in \\left\\{\\dfrac{\\pi}{8}\\,;\\,\\dfrac{7\\pi}{8}\\,;\\,\\dfrac{9\\pi}{8}\\,;\\,\\dfrac{15\\pi}{8}\\right\\}$$\\n\\n$$\\boxed{S = \\left\\{\\dfrac{\\pi}{8}\\,;\\,\\dfrac{7\\pi}{8}\\,;\\,\\dfrac{9\\pi}{8}\\,;\\,\\dfrac{15\\pi}{8}\\right\\}}$$",
            explanation: "Le changement de variable $X=2x$ élargit l'intervalle de recherche à $[0\\,;\\,4\\pi[$, ce qui double le nombre de solutions à trouver avant de revenir à $x$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "trg1-l3",
        slug: "formules-d-addition",
        title: "Formules d'addition",
        durationMinutes: 20,
        content: `## Formules d'addition et de soustraction

Pour tous réels $a$ et $b$ :
$$\\cos(a-b) = \\cos a\\cos b + \\sin a\\sin b$$
$$\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$$
$$\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b$$
$$\\sin(a-b) = \\sin a\\cos b - \\cos a\\sin b$$

> Ces formules permettent de calculer la valeur exacte de $\\cos$ ou $\\sin$ d'angles qui ne sont pas dans le tableau des valeurs remarquables, mais qui s'écrivent comme somme ou différence d'angles remarquables.

### Exemple : calcul de $\\cos\\left(\\dfrac{\\pi}{12}\\right)$

On remarque que $\\dfrac{\\pi}{12} = \\dfrac{\\pi}{3}-\\dfrac{\\pi}{4}$. On applique la formule de $\\cos(a-b)$ avec $a=\\dfrac{\\pi}{3}$ et $b=\\dfrac{\\pi}{4}$ :

$$\\cos\\left(\\dfrac{\\pi}{12}\\right) = \\cos\\left(\\dfrac{\\pi}{3}\\right)\\cos\\left(\\dfrac{\\pi}{4}\\right)+\\sin\\left(\\dfrac{\\pi}{3}\\right)\\sin\\left(\\dfrac{\\pi}{4}\\right)$$

$$= \\dfrac{1}{2}\\times\\dfrac{\\sqrt{2}}{2}+\\dfrac{\\sqrt{3}}{2}\\times\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2}}{4}+\\dfrac{\\sqrt{6}}{4} = \\dfrac{\\sqrt{2}+\\sqrt{6}}{4}$$

### Exemple : calcul de $\\sin\\left(\\dfrac{7\\pi}{12}\\right)$

On remarque que $\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{3}+\\dfrac{\\pi}{4}$. On applique la formule de $\\sin(a+b)$ :

$$\\sin\\left(\\dfrac{7\\pi}{12}\\right) = \\sin\\left(\\dfrac{\\pi}{3}\\right)\\cos\\left(\\dfrac{\\pi}{4}\\right)+\\cos\\left(\\dfrac{\\pi}{3}\\right)\\sin\\left(\\dfrac{\\pi}{4}\\right)$$

$$= \\dfrac{\\sqrt{3}}{2}\\times\\dfrac{\\sqrt{2}}{2}+\\dfrac{1}{2}\\times\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{6}}{4}+\\dfrac{\\sqrt{2}}{4} = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$$

## Astuce mnémotechnique

> Pour $\\cos$ : « cosinus cosinus moins/plus sinus sinus » (le signe s'inverse par rapport à celui de l'angle).
> Pour $\\sin$ : « sinus cosinus plus/moins cosinus sinus » (le signe reste le même que celui de l'angle).`,
        exercises: [
          {
            id: "trg1-l3-e1",
            question: "La formule correcte pour $\\cos(a+b)$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\cos a\\cos b+\\sin a\\sin b$" },
              { id: "B", text: "$\\cos a\\cos b-\\sin a\\sin b$" },
              { id: "C", text: "$\\sin a\\cos b+\\cos a\\sin b$" },
              { id: "D", text: "$\\cos a+\\cos b$" },
            ],
            correctId: "B",
            explanation: "$\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$ ; attention à ne pas confondre avec la formule de $\\cos(a-b)$ qui a un signe $+$.",
            difficulty: "debutant",
          },
          {
            id: "trg1-l3-e2",
            question: "$\\cos(a+b)$ est toujours égal à $\\cos a + \\cos b$.",
            type: "true_false",
            correctId: "faux",
            explanation: "C'est une erreur fréquente : le cosinus d'une somme n'est pas la somme des cosinus ; il faut utiliser la formule d'addition complète.",
            difficulty: "debutant",
          },
          {
            id: "trg1-l3-e3",
            question: "En utilisant $\\dfrac{5\\pi}{12} = \\dfrac{\\pi}{4}+\\dfrac{\\pi}{6}$, quelle expression permet de calculer $\\sin\\left(\\dfrac{5\\pi}{12}\\right)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\sin\\left(\\dfrac{\\pi}{4}\\right)\\cos\\left(\\dfrac{\\pi}{6}\\right)+\\cos\\left(\\dfrac{\\pi}{4}\\right)\\sin\\left(\\dfrac{\\pi}{6}\\right)$" },
              { id: "B", text: "$\\sin\\left(\\dfrac{\\pi}{4}\\right)+\\sin\\left(\\dfrac{\\pi}{6}\\right)$" },
              { id: "C", text: "$\\cos\\left(\\dfrac{\\pi}{4}\\right)\\cos\\left(\\dfrac{\\pi}{6}\\right)-\\sin\\left(\\dfrac{\\pi}{4}\\right)\\sin\\left(\\dfrac{\\pi}{6}\\right)$" },
              { id: "D", text: "$\\sin\\left(\\dfrac{\\pi}{4}\\right)\\cos\\left(\\dfrac{\\pi}{6}\\right)-\\cos\\left(\\dfrac{\\pi}{4}\\right)\\sin\\left(\\dfrac{\\pi}{6}\\right)$" },
            ],
            correctId: "A",
            explanation: "On applique $\\sin(a+b) = \\sin a\\cos b+\\cos a\\sin b$ avec $a=\\pi/4$ et $b=\\pi/6$.",
            difficulty: "intermediaire",
          },
          {
            id: "trg1-l3-e4",
            question: "Calcule la valeur exacte de $\\cos\\left(\\dfrac{5\\pi}{12}\\right)$ en remarquant que $\\dfrac{5\\pi}{12} = \\dfrac{\\pi}{4}+\\dfrac{\\pi}{6}$.",
            type: "open",
            modelAnswer: "On applique la formule $\\cos(a+b) = \\cos a\\cos b-\\sin a\\sin b$ avec $a=\\dfrac{\\pi}{4}$ et $b=\\dfrac{\\pi}{6}$ :\\n\\n$$\\cos\\left(\\dfrac{5\\pi}{12}\\right) = \\cos\\left(\\dfrac{\\pi}{4}\\right)\\cos\\left(\\dfrac{\\pi}{6}\\right)-\\sin\\left(\\dfrac{\\pi}{4}\\right)\\sin\\left(\\dfrac{\\pi}{6}\\right)$$\\n\\nOn remplace par les valeurs remarquables :\\n\\n$$= \\dfrac{\\sqrt{2}}{2}\\times\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\sqrt{2}}{2}\\times\\dfrac{1}{2} = \\dfrac{\\sqrt{6}}{4}-\\dfrac{\\sqrt{2}}{4} = \\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$$\\n\\n$$\\boxed{\\cos\\left(\\dfrac{5\\pi}{12}\\right) = \\dfrac{\\sqrt{6}-\\sqrt{2}}{4}}$$",
            explanation: "On décompose l'angle comme somme de deux angles remarquables, puis on applique la formule d'addition du cosinus.",
            difficulty: "intermediaire",
          },
          {
            id: "trg1-l3-e5",
            question: "On sait que $\\cos a = \\dfrac{3}{5}$ avec $a\\in\\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$ et $\\sin b = \\dfrac{4}{5}$ avec $b\\in\\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$. Calcule $\\sin a$, $\\cos b$, puis détermine la valeur exacte de $\\cos(a-b)$.",
            type: "open",
            modelAnswer: "**Calcul de $\\sin a$ :** avec $\\cos^2 a+\\sin^2 a=1$ :\\n\\n$$\\sin^2 a = 1-\\left(\\dfrac{3}{5}\\right)^2 = 1-\\dfrac{9}{25}=\\dfrac{16}{25}$$\\n\\nComme $a\\in\\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, $\\sin a\\geqslant0$, donc $\\sin a=\\dfrac{4}{5}$.\\n\\n**Calcul de $\\cos b$ :** avec $\\cos^2 b+\\sin^2 b=1$ :\\n\\n$$\\cos^2 b = 1-\\left(\\dfrac{4}{5}\\right)^2 = 1-\\dfrac{16}{25}=\\dfrac{9}{25}$$\\n\\nComme $b\\in\\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, $\\cos b\\geqslant0$, donc $\\cos b=\\dfrac{3}{5}$.\\n\\n**Calcul de $\\cos(a-b)$ :**\\n\\n$$\\cos(a-b) = \\cos a\\cos b+\\sin a\\sin b = \\dfrac{3}{5}\\times\\dfrac{3}{5}+\\dfrac{4}{5}\\times\\dfrac{4}{5} = \\dfrac{9}{25}+\\dfrac{16}{25}=\\dfrac{25}{25}=1$$\\n\\n$$\\boxed{\\sin a=\\dfrac{4}{5}\\,;\\ \\cos b=\\dfrac{3}{5}\\,;\\ \\cos(a-b)=1}$$",
            explanation: "On détermine d'abord les valeurs manquantes via la relation fondamentale, puis on applique la formule d'addition ; le résultat $\\cos(a-b)=1$ signifie en fait que $a=b$ ici.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "pco1-id",
    slug: "probabilites-conditionnelles-1ere",
    title: "Probabilités conditionnelles",
    description: "Comprendre la probabilité conditionnelle, construire et exploiter des arbres pondérés, appliquer la formule des probabilités totales et caractériser l'indépendance de deux événements.",
    schoolLevel: "1ere",
    subject: "probabilites",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "🎲",
    lessons: [
      {
        id: "pco1-l1",
        slug: "probabilite-conditionnelle",
        title: "Probabilité conditionnelle",
        durationMinutes: 25,
        content: `## Définition

Soient $A$ et $B$ deux événements d'un univers $\\Omega$, avec $P(A) \\neq 0$. La **probabilité conditionnelle** de $B$ sachant $A$, notée $P_A(B)$, est définie par :
$$P_A(B) = \\dfrac{P(A\\cap B)}{P(A)}$$

> Cela se lit : « la probabilité de $B$, sachant que $A$ est déjà réalisé ». On restreint l'univers à $A$ et on regarde la proportion de $B$ à l'intérieur de $A$.

### Exemple

Dans une classe de $30$ élèves, $18$ pratiquent un sport ($S$) et parmi eux, $12$ pratiquent aussi la musique ($M$). On choisit un élève au hasard.

$$P(S) = \\dfrac{18}{30} = 0{,}6 \\qquad P(S\\cap M) = \\dfrac{12}{30} = 0{,}4$$

$$P_S(M) = \\dfrac{P(S\\cap M)}{P(S)} = \\dfrac{0{,}4}{0{,}6} = \\dfrac{2}{3}$$

## Formule des probabilités composées

En réarrangeant la définition, on obtient :
$$P(A\\cap B) = P(A)\\times P_A(B)$$

C'est cette formule qui est utilisée pour calculer les probabilités le long des branches d'un **arbre pondéré**.

## Propriétés

- $0 \\leqslant P_A(B) \\leqslant 1$
- $P_A(B) + P_A(\\overline{B}) = 1$ (la probabilité conditionnelle, à $A$ fixé, est bien une probabilité sur $\\Omega$)
- En général, $P_A(B) \\neq P_B(A)$ : il ne faut pas confondre $P_A(B)$ et $P_B(A)$.

### Exemple (suite)

$$P_S(\\overline{M}) = 1-P_S(M) = 1-\\dfrac{2}{3} = \\dfrac{1}{3}$$

Cela signifie qu'un tiers des sportifs ne font pas de musique.`,
        exercises: [
          {
            id: "pco1-l1-e1",
            question: "La probabilité conditionnelle $P_A(B)$ est définie par :",
            type: "mcq",
            options: [
              { id: "A", text: "$P_A(B) = P(A)\\times P(B)$" },
              { id: "B", text: "$P_A(B) = \\dfrac{P(A\\cap B)}{P(A)}$" },
              { id: "C", text: "$P_A(B) = \\dfrac{P(A\\cap B)}{P(B)}$" },
              { id: "D", text: "$P_A(B) = P(A\\cap B)$" },
            ],
            correctId: "B",
            explanation: "C'est la définition même de la probabilité conditionnelle de $B$ sachant $A$.",
            difficulty: "debutant",
          },
          {
            id: "pco1-l1-e2",
            question: "En général, $P_A(B)$ est égal à $P_B(A)$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Sauf cas particulier, $P_A(B) \\neq P_B(A)$ : confondre les deux est une erreur classique (elles ont des dénominateurs différents, $P(A)$ contre $P(B)$).",
            difficulty: "debutant",
          },
          {
            id: "pco1-l1-e3",
            question: "On donne $P(A) = 0{,}4$ et $P(A\\cap B) = 0{,}1$. Quelle est la valeur de $P_A(B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}04$" },
              { id: "B", text: "$0{,}25$" },
              { id: "C", text: "$0{,}4$" },
              { id: "D", text: "$4$" },
            ],
            correctId: "B",
            explanation: "$P_A(B) = \\dfrac{P(A\\cap B)}{P(A)} = \\dfrac{0{,}1}{0{,}4} = 0{,}25$.",
            difficulty: "debutant",
          },
          {
            id: "pco1-l1-e4",
            question: "Dans un lycée, $55\\%$ des élèves sont des filles. Parmi les filles, $30\\%$ choisissent l'option \"art\". On note $F$ l'événement \"être une fille\" et $O$ l'événement \"choisir l'option art\". Calcule $P(F\\cap O)$.",
            type: "open",
            modelAnswer: "On nous donne $P(F) = 0{,}55$ et $P_F(O) = 0{,}30$ (la probabilité de choisir l'option art **sachant** que l'élève est une fille).\\n\\nOn utilise la formule des probabilités composées :\\n\\n$$P(F\\cap O) = P(F)\\times P_F(O) = 0{,}55\\times0{,}30 = 0{,}165$$\\n\\n$$\\boxed{P(F\\cap O) = 0{,}165}$$",
            explanation: "On reconnaît une probabilité conditionnelle donnée dans l'énoncé ($P_F(O)$), et on applique la formule des probabilités composées pour obtenir l'intersection.",
            difficulty: "intermediaire",
          },
          {
            id: "pco1-l1-e5",
            question: "On tire une carte au hasard dans un jeu de $32$ cartes (8 cartes par couleur : pique, cœur, carreau, trèfle). Soit $R$ l'événement \"la carte est un roi\" et $C$ l'événement \"la carte est un cœur\". Il y a $4$ rois dans le jeu et $1$ roi de cœur. Calcule $P(R)$, $P(R\\cap C)$, puis $P_R(C)$ et interprète ce résultat.",
            type: "open",
            modelAnswer: "L'univers comporte $32$ cartes équiprobables.\\n\\n**Calcul de $P(R)$ :** il y a $4$ rois (un par couleur).\\n\\n$$P(R) = \\dfrac{4}{32} = \\dfrac{1}{8}$$\\n\\n**Calcul de $P(R\\cap C)$ :** il y a exactement $1$ roi de cœur.\\n\\n$$P(R\\cap C) = \\dfrac{1}{32}$$\\n\\n**Calcul de $P_R(C)$ :**\\n\\n$$P_R(C) = \\dfrac{P(R\\cap C)}{P(R)} = \\dfrac{1/32}{1/8} = \\dfrac{1}{32}\\times\\dfrac{8}{1} = \\dfrac{8}{32} = \\dfrac{1}{4}$$\\n\\n**Interprétation :** sachant que la carte tirée est un roi, la probabilité que ce soit aussi un cœur est $\\dfrac{1}{4}$, ce qui correspond bien à la proportion d'une couleur parmi les quatre (cohérent, puisqu'il y a un roi par couleur).\\n\\n$$\\boxed{P(R)=\\dfrac{1}{8}\\,;\\ P(R\\cap C)=\\dfrac{1}{32}\\,;\\ P_R(C)=\\dfrac{1}{4}}$$",
            explanation: "On calcule d'abord les probabilités \"brutes\" par comptage, puis on applique la définition de la probabilité conditionnelle pour obtenir $P_R(C)$, qu'on interprète concrètement.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "pco1-l2",
        slug: "arbres-ponderes-et-probabilites-totales",
        title: "Arbres pondérés et formule des probabilités totales",
        durationMinutes: 25,
        content: `## Arbre pondéré

Un **arbre pondéré** représente une situation à plusieurs étapes. Chaque branche porte une probabilité, et :

> - La somme des probabilités des branches issues d'un même nœud vaut $1$.
> - La probabilité associée à un chemin (de la racine à une feuille) s'obtient en **multipliant** les probabilités des branches traversées (formule des probabilités composées).
> - La probabilité d'un événement représenté par plusieurs chemins s'obtient en **additionnant** les probabilités de ces chemins.

### Exemple

Une urne $A$ contient $70\\%$ de boules rouges, une urne $B$ en contient $20\\%$. On choisit l'urne $A$ avec probabilité $0{,}6$ et l'urne $B$ avec probabilité $0{,}4$, puis on tire une boule.

Arbre :

- Branche $A$ (probabilité $0{,}6$) → branche $R$ sachant $A$ (probabilité $0{,}7$) : chemin $A\\cap R$, probabilité $0{,}6\\times0{,}7=0{,}42$.
- Branche $A$ (probabilité $0{,}6$) → branche $\\overline{R}$ sachant $A$ (probabilité $0{,}3$) : chemin $A\\cap\\overline{R}$, probabilité $0{,}18$.
- Branche $B$ (probabilité $0{,}4$) → branche $R$ sachant $B$ (probabilité $0{,}2$) : chemin $B\\cap R$, probabilité $0{,}08$.
- Branche $B$ (probabilité $0{,}4$) → branche $\\overline{R}$ sachant $B$ (probabilité $0{,}8$) : chemin $B\\cap\\overline{R}$, probabilité $0{,}32$.

## Formule des probabilités totales

> Si $A_1, A_2, \\ldots, A_n$ forment une **partition** de l'univers $\\Omega$ (ils sont deux à deux incompatibles et leur réunion est $\\Omega$, avec chaque $P(A_i)\\neq 0$), alors pour tout événement $B$ :
> $$P(B) = P(A_1)\\times P_{A_1}(B) + P(A_2)\\times P_{A_2}(B) + \\cdots + P(A_n)\\times P_{A_n}(B)$$

### Exemple (suite)

Avec la partition $\\{A, B\\}$ (on choisit forcément une urne) :
$$P(R) = P(A)\\times P_A(R) + P(B)\\times P_B(R) = 0{,}6\\times0{,}7+0{,}4\\times0{,}2 = 0{,}42+0{,}08=0{,}5$$

On retrouve bien la somme des deux chemins menant à $R$ dans l'arbre : $0{,}42+0{,}08=0{,}5$.`,
        exercises: [
          {
            id: "pco1-l2-e1",
            question: "Dans un arbre pondéré, la somme des probabilités des branches issues d'un même nœud vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$0{,}5$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "Cela dépend du nœud" },
            ],
            correctId: "C",
            explanation: "Les branches issues d'un même nœud forment une partition de l'univers conditionné à ce nœud, donc leur somme vaut toujours $1$.",
            difficulty: "debutant",
          },
          {
            id: "pco1-l2-e2",
            question: "Pour calculer la probabilité d'un chemin dans un arbre pondéré, on multiplie les probabilités des branches traversées.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est la formule des probabilités composées appliquée le long d'un chemin de l'arbre.",
            difficulty: "debutant",
          },
          {
            id: "pco1-l2-e3",
            question: "Une urne contient des boules dont $40\\%$ sont vertes. On sait que $P_V(G) = 0{,}5$ (probabilité de tirer une boule \"gagnante\" sachant qu'elle est verte) et $P_{\\overline{V}}(G) = 0{,}1$. Quelle formule permet de calculer $P(G)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$P(G) = 0{,}5+0{,}1$" },
              { id: "B", text: "$P(G) = 0{,}4\\times0{,}5+0{,}6\\times0{,}1$" },
              { id: "C", text: "$P(G) = 0{,}4\\times0{,}6$" },
              { id: "D", text: "$P(G) = 0{,}5\\times0{,}1$" },
            ],
            correctId: "B",
            explanation: "On applique la formule des probabilités totales avec la partition $\\{V,\\overline{V}\\}$ : $P(G)=P(V)P_V(G)+P(\\overline V)P_{\\overline V}(G)$, avec $P(V)=0{,}4$ et $P(\\overline V)=0{,}6$.",
            difficulty: "intermediaire",
          },
          {
            id: "pco1-l2-e4",
            question: "Une usine fabrique des pièces sur deux machines : la machine $M_1$ produit $60\\%$ des pièces avec un taux de défaut de $2\\%$, la machine $M_2$ produit $40\\%$ des pièces avec un taux de défaut de $5\\%$. On note $D$ l'événement \"la pièce est défectueuse\". Calcule $P(D)$ à l'aide de la formule des probabilités totales.",
            type: "open",
            modelAnswer: "On a la partition $\\{M_1, M_2\\}$ avec $P(M_1)=0{,}6$ et $P(M_2)=0{,}4$, ainsi que $P_{M_1}(D)=0{,}02$ et $P_{M_2}(D)=0{,}05$.\\n\\nD'après la formule des probabilités totales :\\n\\n$$P(D) = P(M_1)\\times P_{M_1}(D) + P(M_2)\\times P_{M_2}(D)$$\\n\\n$$P(D) = 0{,}6\\times0{,}02+0{,}4\\times0{,}05 = 0{,}012+0{,}02=0{,}032$$\\n\\n$$\\boxed{P(D) = 0{,}032}$$",
            explanation: "On identifie la partition formée par les deux machines, puis on applique directement la formule des probabilités totales avec les taux de défaut donnés.",
            difficulty: "intermediaire",
          },
          {
            id: "pco1-l2-e5",
            question: "Dans une population, $1\\%$ des personnes sont atteintes d'une maladie $M$. Un test de dépistage est positif chez $98\\%$ des malades, et positif (à tort) chez $3\\%$ des personnes non malades. On note $T$ l'événement \"le test est positif\". Construis l'arbre pondéré correspondant, calcule $P(T)$, puis calcule $P(M\\cap T)$.",
            type: "open",
            modelAnswer: "On a $P(M) = 0{,}01$ donc $P(\\overline M) = 0{,}99$. Les probabilités conditionnelles données sont $P_M(T) = 0{,}98$ et $P_{\\overline M}(T) = 0{,}03$.\\n\\n**Arbre pondéré (description) :**\\n\\n- Racine → $M$ (probabilité $0{,}01$) → $T$ (probabilité $0{,}98$) : chemin $0{,}01\\times0{,}98=0{,}0098$\\n- Racine → $M$ (probabilité $0{,}01$) → $\\overline{T}$ (probabilité $0{,}02$) : chemin $0{,}01\\times0{,}02=0{,}0002$\\n- Racine → $\\overline{M}$ (probabilité $0{,}99$) → $T$ (probabilité $0{,}03$) : chemin $0{,}99\\times0{,}03=0{,}0297$\\n- Racine → $\\overline{M}$ (probabilité $0{,}99$) → $\\overline{T}$ (probabilité $0{,}97$) : chemin $0{,}99\\times0{,}97=0{,}9603$\\n\\n**Calcul de $P(T)$** par la formule des probabilités totales (partition $\\{M,\\overline M\\}$) :\\n\\n$$P(T) = P(M)P_M(T)+P(\\overline M)P_{\\overline M}(T) = 0{,}0098+0{,}0297 = 0{,}0395$$\\n\\n**Calcul de $P(M\\cap T)$** (déjà obtenu en construisant l'arbre, via les probabilités composées) :\\n\\n$$P(M\\cap T) = P(M)\\times P_M(T) = 0{,}01\\times0{,}98 = 0{,}0098$$\\n\\n$$\\boxed{P(T) = 0{,}0395 \\quad ; \\quad P(M\\cap T) = 0{,}0098}$$",
            explanation: "On construit l'arbre à deux niveaux (statut de la maladie, puis résultat du test), on multiplie le long des chemins, puis on additionne les chemins menant à $T$ pour obtenir $P(T)$ par la formule des probabilités totales.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "pco1-l3",
        slug: "independance-de-deux-evenements",
        title: "Indépendance de deux événements",
        durationMinutes: 20,
        content: `## Définition

> Deux événements $A$ et $B$ (avec $P(A)\\neq 0$) sont **indépendants** si :
> $$P_A(B) = P(B)$$

Autrement dit, savoir que $A$ s'est réalisé ne change rien à la probabilité de $B$.

## Caractérisation équivalente

> $A$ et $B$ sont indépendants si et seulement si :
> $$P(A\\cap B) = P(A)\\times P(B)$$

Cette formule est souvent plus pratique à utiliser, car elle ne nécessite pas de calculer $P_A(B)$ au préalable.

### Exemple

On lance un dé équilibré à 6 faces. Soit $A$ : « obtenir un nombre pair » et $B$ : « obtenir un multiple de 3 ».

$$P(A) = \\dfrac{3}{6}=\\dfrac{1}{2} \\qquad P(B) = \\dfrac{2}{6}=\\dfrac{1}{3}$$

$A\\cap B$ : « obtenir un nombre pair **et** multiple de 3 », c'est-à-dire $6$ : $P(A\\cap B) = \\dfrac{1}{6}$.

On vérifie : $P(A)\\times P(B) = \\dfrac{1}{2}\\times\\dfrac{1}{3} = \\dfrac{1}{6} = P(A\\cap B)$.

Donc $A$ et $B$ sont **indépendants**.

## Attention à ne pas confondre

> **Indépendance** ($P(A\\cap B)=P(A)P(B)$) et **incompatibilité** ($A\\cap B=\\varnothing$, donc $P(A\\cap B)=0$) sont deux notions très différentes !

Si $A$ et $B$ sont incompatibles et tous deux de probabilité non nulle, ils ne peuvent pas être indépendants (sauf cas trivial), car $P(A\\cap B)=0 \\neq P(A)P(B)$ en général.

### Exemple de vérification d'indépendance

Dans une classe, $P(F)=0{,}5$ (être une fille) et $P(R)=0{,}3$ (être redoublant), avec $P(F\\cap R) = 0{,}15$.

On vérifie : $P(F)\\times P(R) = 0{,}5\\times0{,}3=0{,}15=P(F\\cap R)$.

Les événements $F$ et $R$ sont donc indépendants dans cette classe.`,
        exercises: [
          {
            id: "pco1-l3-e1",
            question: "Deux événements $A$ et $B$ sont indépendants si et seulement si :",
            type: "mcq",
            options: [
              { id: "A", text: "$A\\cap B=\\varnothing$" },
              { id: "B", text: "$P(A\\cap B) = P(A)\\times P(B)$" },
              { id: "C", text: "$P(A) = P(B)$" },
              { id: "D", text: "$P(A\\cup B) = 1$" },
            ],
            correctId: "B",
            explanation: "C'est la caractérisation de l'indépendance par les probabilités, équivalente à $P_A(B)=P(B)$.",
            difficulty: "debutant",
          },
          {
            id: "pco1-l3-e2",
            question: "Deux événements incompatibles (d'intersection vide) et de probabilités non nulles peuvent être indépendants.",
            type: "true_false",
            correctId: "faux",
            explanation: "Si $A\\cap B=\\varnothing$, alors $P(A\\cap B)=0$. Pour l'indépendance il faudrait $P(A)P(B)=0$, ce qui est impossible si les deux probabilités sont non nulles.",
            difficulty: "intermediaire",
          },
          {
            id: "pco1-l3-e3",
            question: "On donne $P(A)=0{,}4$, $P(B)=0{,}25$ et $P(A\\cap B)=0{,}1$. Les événements $A$ et $B$ sont-ils indépendants ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, car $0{,}4\\times0{,}25=0{,}1$" },
              { id: "B", text: "Non, car $0{,}4\\times0{,}25\\neq0{,}1$" },
              { id: "C", text: "On ne peut pas savoir" },
              { id: "D", text: "Oui, car $P(A)\\neq P(B)$" },
            ],
            correctId: "A",
            explanation: "$P(A)\\times P(B) = 0{,}4\\times0{,}25=0{,}1=P(A\\cap B)$ : l'égalité est vérifiée, donc $A$ et $B$ sont indépendants.",
            difficulty: "intermediaire",
          },
          {
            id: "pco1-l3-e4",
            question: "On tire une carte dans un jeu de 32 cartes. Soit $A$ : \"la carte est un cœur\" et $B$ : \"la carte est une figure (Roi, Dame ou Valet)\". On a $P(A)=\\dfrac{1}{4}$, $P(B)=\\dfrac{12}{32}=\\dfrac{3}{8}$, et $P(A\\cap B)=\\dfrac{3}{32}$ (3 figures de cœur). Les événements $A$ et $B$ sont-ils indépendants ? Justifie le calcul.",
            type: "open",
            modelAnswer: "On calcule $P(A)\\times P(B)$ :\\n\\n$$P(A)\\times P(B) = \\dfrac{1}{4}\\times\\dfrac{3}{8} = \\dfrac{3}{32}$$\\n\\nOn compare à $P(A\\cap B) = \\dfrac{3}{32}$.\\n\\nLes deux valeurs sont égales : $P(A)\\times P(B) = P(A\\cap B) = \\dfrac{3}{32}$.\\n\\nDonc $A$ et $B$ **sont indépendants**.\\n\\n$$\\boxed{P(A)\\times P(B) = \\dfrac{3}{32} = P(A\\cap B) \\implies A \\text{ et } B \\text{ sont indépendants}}$$",
            explanation: "On calcule le produit des probabilités individuelles et on le compare à la probabilité de l'intersection ; l'égalité confirme l'indépendance.",
            difficulty: "intermediaire",
          },
          {
            id: "pco1-l3-e5",
            question: "On lance deux fois de suite une pièce équilibrée. Soit $A$ : \"on obtient Pile au premier lancer\" et $B$ : \"on obtient exactement un Pile sur les deux lancers\". Calcule $P(A)$, $P(B)$ et $P(A\\cap B)$, puis détermine si $A$ et $B$ sont indépendants.",
            type: "open",
            modelAnswer: "L'univers des deux lancers est $\\{PP, PF, FP, FF\\}$, avec $4$ issues équiprobables.\\n\\n**Calcul de $P(A)$ :** \"$Pile$ au premier lancer\" correspond à $\\{PP, PF\\}$.\\n\\n$$P(A) = \\dfrac{2}{4} = \\dfrac{1}{2}$$\\n\\n**Calcul de $P(B)$ :** \"exactement un Pile\" correspond à $\\{PF, FP\\}$.\\n\\n$$P(B) = \\dfrac{2}{4} = \\dfrac{1}{2}$$\\n\\n**Calcul de $P(A\\cap B)$ :** \"Pile au premier lancer\" ET \"exactement un Pile\" correspond uniquement à $\\{PF\\}$.\\n\\n$$P(A\\cap B) = \\dfrac{1}{4}$$\\n\\n**Test d'indépendance :**\\n\\n$$P(A)\\times P(B) = \\dfrac{1}{2}\\times\\dfrac{1}{2} = \\dfrac{1}{4} = P(A\\cap B)$$\\n\\nL'égalité est vérifiée, donc $A$ et $B$ sont indépendants.\\n\\n$$\\boxed{P(A)=\\dfrac{1}{2}\\,;\\ P(B)=\\dfrac{1}{2}\\,;\\ P(A\\cap B)=\\dfrac{1}{4} \\implies A \\text{ et } B \\text{ indépendants}}$$",
            explanation: "On liste l'univers à 4 issues équiprobables, on dénombre chaque événement, puis on vérifie l'égalité caractéristique de l'indépendance (résultat parfois contre-intuitif mais correct ici).",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "lbi1-id",
    slug: "loi-binomiale-1ere",
    title: "Variables aléatoires et loi binomiale",
    description: "Découvrir les variables aléatoires et leur espérance, l'épreuve et le schéma de Bernoulli, puis la loi binomiale et son calcul avec les coefficients binomiaux.",
    schoolLevel: "1ere",
    subject: "probabilites",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "🎰",
    lessons: [
      {
        id: "lbi1-l1",
        slug: "variable-aleatoire-et-esperance",
        title: "Variable aléatoire et espérance",
        durationMinutes: 25,
        content: `## Variable aléatoire

> Une **variable aléatoire** $X$ est une fonction qui associe un nombre réel à chaque issue d'une expérience aléatoire.

### Exemple

On lance un dé à 6 faces. Si on gagne $10$ € en cas de $6$, on perd $2$ € sinon, on peut définir $X$ = gain réalisé. $X$ prend les valeurs $10$ et $-2$.

## Loi de probabilité de $X$

La **loi de probabilité** de $X$ associe à chaque valeur possible $x_i$ de $X$ la probabilité $P(X=x_i)$. On la présente souvent dans un tableau, et la somme des probabilités doit valoir $1$.

### Exemple (suite)

| $x_i$ | $-2$ | $10$ |
|---|---|---|
| $P(X=x_i)$ | $\\dfrac{5}{6}$ | $\\dfrac{1}{6}$ |

## Espérance mathématique

> L'**espérance** de $X$, notée $E(X)$, est la moyenne des valeurs possibles de $X$ pondérées par leurs probabilités :
> $$E(X) = \\sum_{i} x_i \\, p_i = x_1p_1+x_2p_2+\\cdots+x_np_n$$

C'est le gain moyen que l'on peut espérer si on répète l'expérience un grand nombre de fois.

### Exemple (suite)

$$E(X) = (-2)\\times\\dfrac{5}{6}+10\\times\\dfrac{1}{6} = -\\dfrac{10}{6}+\\dfrac{10}{6} = 0$$

> Le jeu est donc **équitable** ($E(X)=0$) : sur le long terme, on ne gagne ni ne perd d'argent en moyenne.

## Variance et écart-type (pour information)

On définit aussi $V(X) = \\sum_i p_i(x_i-E(X))^2$ et $\\sigma(X)=\\sqrt{V(X)}$, qui mesurent la dispersion des valeurs de $X$ autour de son espérance (hors programme de calcul détaillé en 1ère, mais bon à connaître).`,
        exercises: [
          {
            id: "lbi1-l1-e1",
            question: "L'espérance $E(X)$ d'une variable aléatoire représente :",
            type: "mcq",
            options: [
              { id: "A", text: "La valeur la plus probable de $X$" },
              { id: "B", text: "La moyenne des valeurs de $X$ pondérée par les probabilités" },
              { id: "C", text: "La plus grande valeur possible de $X$" },
              { id: "D", text: "Le nombre de valeurs possibles de $X$" },
            ],
            correctId: "B",
            explanation: "L'espérance est une moyenne pondérée : $E(X) = \\sum x_ip_i$.",
            difficulty: "debutant",
          },
          {
            id: "lbi1-l1-e2",
            question: "Dans une loi de probabilité, la somme de toutes les probabilités $P(X=x_i)$ doit toujours être égale à $1$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est une propriété fondamentale de toute loi de probabilité, car les événements $\\{X=x_i\\}$ forment une partition de l'univers.",
            difficulty: "debutant",
          },
          {
            id: "lbi1-l1-e3",
            question: "Une variable aléatoire $X$ suit la loi donnée par $P(X=1)=0{,}3$, $P(X=2)=0{,}5$ et $P(X=3)=p$. Quelle est la valeur de $p$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}1$" },
              { id: "B", text: "$0{,}2$" },
              { id: "C", text: "$0{,}3$" },
              { id: "D", text: "$0{,}8$" },
            ],
            correctId: "B",
            explanation: "La somme des probabilités vaut $1$, donc $p = 1-0{,}3-0{,}5 = 0{,}2$.",
            difficulty: "debutant",
          },
          {
            id: "lbi1-l1-e4",
            question: "Un jeu consiste à tirer une carte dans un jeu de 32 cartes : on gagne $16$ € si c'est un As (il y en a 4), et on perd $2$ € sinon. Détermine la loi de probabilité du gain $X$, puis calcule $E(X)$ et indique si le jeu est favorable au joueur.",
            type: "open",
            modelAnswer: "Il y a $4$ As sur $32$ cartes, donc $P(\\text{As}) = \\dfrac{4}{32} = \\dfrac{1}{8}$, et $P(\\text{pas As}) = \\dfrac{28}{32} = \\dfrac{7}{8}$.\\n\\n**Loi de probabilité de $X$ :**\\n\\n| $x_i$ | $-2$ | $16$ |\\n|---|---|---|\\n| $P(X=x_i)$ | $\\dfrac{7}{8}$ | $\\dfrac{1}{8}$ |\\n\\n**Calcul de l'espérance :**\\n\\n$$E(X) = (-2)\\times\\dfrac{7}{8}+16\\times\\dfrac{1}{8} = -\\dfrac{14}{8}+\\dfrac{16}{8} = \\dfrac{2}{8} = 0{,}25$$\\n\\nComme $E(X) = 0{,}25 > 0$, le jeu est favorable au joueur en moyenne (il gagne $0{,}25$ € par partie en moyenne sur un grand nombre de parties).\\n\\n$$\\boxed{E(X) = 0{,}25 \\text{ € (jeu favorable au joueur)}}$$",
            explanation: "On établit la loi de probabilité à partir du comptage des cartes, puis on calcule l'espérance pour juger du caractère favorable ou non du jeu.",
            difficulty: "intermediaire",
          },
          {
            id: "lbi1-l1-e5",
            question: "Un organisateur de loterie vend des billets à $5$ €. Sur $1000$ billets, il y a $1$ billet gagnant de $2000$ €, $10$ billets gagnants de $50$ € et les autres ne rapportent rien. Soit $X$ le gain net du joueur (gain obtenu moins le prix du billet). Détermine la loi de probabilité de $X$ et calcule $E(X)$. La loterie est-elle favorable à l'organisateur ?",
            type: "open",
            modelAnswer: "Le prix du billet est $5$ €. Le gain net $X$ vaut :\\n\\n- pour le billet à $2000$ € : $X = 2000-5=1995$, avec probabilité $\\dfrac{1}{1000}$\\n- pour les $10$ billets à $50$ € : $X = 50-5=45$, avec probabilité $\\dfrac{10}{1000}=\\dfrac{1}{100}$\\n- pour les autres billets ($1000-1-10=989$ billets) : $X=-5$ (le joueur perd le prix du billet), avec probabilité $\\dfrac{989}{1000}$\\n\\n**Loi de probabilité de $X$ :**\\n\\n| $x_i$ | $-5$ | $45$ | $1995$ |\\n|---|---|---|---|\\n| $P(X=x_i)$ | $\\dfrac{989}{1000}$ | $\\dfrac{10}{1000}$ | $\\dfrac{1}{1000}$ |\\n\\n**Calcul de l'espérance :**\\n\\n$$E(X) = -5\\times\\dfrac{989}{1000}+45\\times\\dfrac{10}{1000}+1995\\times\\dfrac{1}{1000}$$\\n\\n$$= \\dfrac{-4945+450+1995}{1000} = \\dfrac{-2500}{1000} = -2{,}5$$\\n\\nComme $E(X) = -2{,}5 < 0$, le joueur perd en moyenne $2{,}5$ € par billet : la loterie est donc favorable à l'organisateur.\\n\\n$$\\boxed{E(X) = -2{,}5\\text{ € (loterie favorable à l'organisateur)}}$$",
            explanation: "On définit le gain net (gain brut moins prix du billet) pour chaque catégorie, on établit la loi de probabilité complète, puis on calcule l'espérance qui révèle l'avantage structurel de l'organisateur.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "lbi1-l2",
        slug: "epreuve-et-schema-de-bernoulli",
        title: "Épreuve et schéma de Bernoulli",
        durationMinutes: 20,
        content: `## Épreuve de Bernoulli

> Une **épreuve de Bernoulli** est une expérience aléatoire à **deux issues possibles** : un « succès » (probabilité $p$) et un « échec » (probabilité $1-p$).

### Exemple

Lancer une pièce et regarder si on obtient « Pile » (succès, probabilité $p=0{,}5$) ou « Face » (échec).

## Loi de Bernoulli

Si $X$ est la variable aléatoire qui vaut $1$ en cas de succès et $0$ en cas d'échec, $X$ suit la **loi de Bernoulli** de paramètre $p$, notée $\\mathcal{B}(p)$ :

| $x_i$ | $0$ | $1$ |
|---|---|---|
| $P(X=x_i)$ | $1-p$ | $p$ |

On a alors $E(X) = 0\\times(1-p)+1\\times p = p$.

## Schéma de Bernoulli

> Un **schéma de Bernoulli** consiste à répéter $n$ fois, **de façon identique et indépendante**, la même épreuve de Bernoulli de paramètre $p$.

« Identique » signifie que la probabilité de succès $p$ reste la même à chaque répétition. « Indépendante » signifie que le résultat d'une répétition n'influence pas les autres (c'est le cas par exemple pour des tirages **avec remise**, ou pour des lancers de dé/pièce successifs).

### Exemple

On lance $5$ fois un dé équilibré et on regarde, à chaque lancer, si on obtient un $6$ (succès, $p=\\dfrac{1}{6}$) ou non (échec). C'est un schéma de Bernoulli avec $n=5$ répétitions.

> **Attention** : un tirage **sans remise** dans une population de petite taille ne constitue en général pas une répétition indépendante (la probabilité change après chaque tirage), donc ce n'est pas un schéma de Bernoulli au sens strict.

## Vers la loi binomiale

Dans un schéma de Bernoulli à $n$ répétitions, on s'intéresse souvent à la variable aléatoire $X$ = « nombre de succès obtenus ». C'est l'objet de la leçon suivante : $X$ suit alors une **loi binomiale**.`,
        exercises: [
          {
            id: "lbi1-l2-e1",
            question: "Une épreuve de Bernoulli est une expérience aléatoire qui a :",
            type: "mcq",
            options: [
              { id: "A", text: "Une seule issue possible" },
              { id: "B", text: "Exactement deux issues possibles" },
              { id: "C", text: "Un nombre infini d'issues" },
              { id: "D", text: "Toujours 6 issues possibles" },
            ],
            correctId: "B",
            explanation: "Par définition, une épreuve de Bernoulli a deux issues : succès ou échec.",
            difficulty: "debutant",
          },
          {
            id: "lbi1-l2-e2",
            question: "Dans un schéma de Bernoulli, les répétitions de l'épreuve doivent être indépendantes les unes des autres.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est une des deux conditions du schéma de Bernoulli (avec l'identité de la probabilité de succès à chaque répétition).",
            difficulty: "debutant",
          },
          {
            id: "lbi1-l2-e3",
            question: "Si $X$ suit la loi de Bernoulli de paramètre $p=0{,}3$, quelle est la valeur de $E(X)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}3$" },
              { id: "B", text: "$0{,}7$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "A",
            explanation: "Pour une loi de Bernoulli de paramètre $p$, on a toujours $E(X)=p$.",
            difficulty: "intermediaire",
          },
          {
            id: "lbi1-l2-e4",
            question: "On tire au hasard, avec remise, une boule dans une urne contenant $3$ boules rouges et $7$ boules vertes, et on répète ce tirage $4$ fois. Justifie qu'il s'agit d'un schéma de Bernoulli et précise les paramètres $n$ et $p$ (succès = \"tirer une boule rouge\").",
            type: "open",
            modelAnswer: "Chaque tirage est une épreuve de Bernoulli : succès = \"tirer une boule rouge\" avec probabilité $p=\\dfrac{3}{10}=0{,}3$, échec = \"tirer une boule verte\" avec probabilité $0{,}7$.\\n\\nComme le tirage se fait **avec remise**, la composition de l'urne reste identique à chaque tirage : la probabilité de succès $p=0{,}3$ ne change pas, et le résultat d'un tirage n'influence pas les autres (indépendance).\\n\\nLes deux conditions du schéma de Bernoulli sont donc vérifiées : épreuves identiques et indépendantes.\\n\\nLe schéma de Bernoulli a pour paramètres $n=4$ répétitions et $p=0{,}3$.\\n\\n$$\\boxed{n=4\\,;\\ p=0{,}3}$$",
            explanation: "Le tirage avec remise garantit l'identité (même probabilité à chaque fois) et l'indépendance des répétitions, ce qui caractérise un schéma de Bernoulli.",
            difficulty: "intermediaire",
          },
          {
            id: "lbi1-l2-e5",
            question: "On dispose d'une urne contenant $5$ boules indiscernables au toucher : $2$ rouges et $3$ bleues. On tire successivement $3$ boules **sans remise**. Explique pourquoi cette expérience n'est pas un schéma de Bernoulli, puis indique comment modifier l'expérience pour qu'elle le devienne (en gardant les mêmes proportions initiales).",
            type: "open",
            modelAnswer: "**Pourquoi ce n'est pas un schéma de Bernoulli :**\\n\\nSi on tire sans remise, la composition de l'urne change après chaque tirage. Par exemple, la probabilité de tirer une boule rouge au premier tirage est $\\dfrac{2}{5}$, mais au deuxième tirage, cette probabilité dépend du résultat du premier tirage : elle vaut $\\dfrac{1}{4}$ si une rouge a déjà été tirée, ou $\\dfrac{2}{4}$ sinon.\\n\\nLa probabilité de succès n'est donc ni constante (elle change d'un tirage à l'autre), ni indépendante des tirages précédents : les deux conditions du schéma de Bernoulli sont violées.\\n\\n**Comment corriger :**\\n\\nIl suffit d'effectuer les tirages **avec remise** : on tire une boule, on note sa couleur, puis on la replace dans l'urne avant le tirage suivant. Ainsi, la composition de l'urne (et donc la probabilité de succès $p=\\dfrac{2}{5}$) reste constante à chaque tirage, et les tirages deviennent indépendants : on obtient bien un schéma de Bernoulli de paramètres $n=3$ et $p=\\dfrac{2}{5}$.\\n\\n$$\\boxed{\\text{Tirer avec remise restaure l'indépendance et la constance de } p=\\dfrac{2}{5}}$$",
            explanation: "Le tirage sans remise change la composition de l'urne donc la probabilité de succès à chaque étape, ce qui viole les deux hypothèses (identité et indépendance) requises pour un schéma de Bernoulli ; remettre la boule tirée résout le problème.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "lbi1-l3",
        slug: "loi-binomiale",
        title: "La loi binomiale",
        durationMinutes: 25,
        content: `## Coefficient binomial

Pour un schéma de Bernoulli à $n$ répétitions, le **coefficient binomial** $\\dbinom{n}{k}$ (lu « $k$ parmi $n$ ») compte le nombre de façons d'obtenir $k$ succès parmi les $n$ répétitions (c'est-à-dire le nombre de chemins de l'arbre menant à exactement $k$ succès).

### Propriétés utiles

$$\\dbinom{n}{0} = 1 \\qquad \\dbinom{n}{n} = 1 \\qquad \\dbinom{n}{1} = n \\qquad \\dbinom{n}{k} = \\dbinom{n}{n-k}$$

On peut les calculer avec le **triangle de Pascal** ou la calculatrice.

## Loi binomiale

> Soit $X$ le nombre de succès obtenus dans un schéma de Bernoulli de paramètres $n$ (nombre de répétitions) et $p$ (probabilité de succès). On dit que $X$ suit la **loi binomiale** de paramètres $n$ et $p$, notée $\\mathcal{B}(n,p)$, et pour tout entier $k$ avec $0\\leqslant k\\leqslant n$ :
> $$P(X=k) = \\dbinom{n}{k}p^k(1-p)^{n-k}$$

### Exemple

On lance $4$ fois une pièce équilibrée ($p=0{,}5$). $X$ = nombre de Piles obtenus suit $\\mathcal{B}(4\\,;\\,0{,}5)$.

$$P(X=2) = \\dbinom{4}{2}\\times0{,}5^2\\times0{,}5^2 = 6\\times0{,}25\\times0{,}25 = 6\\times0{,}0625=0{,}375$$

(car $\\dbinom{4}{2}=6$, qui se lit dans le triangle de Pascal ou se calcule).

## Espérance de la loi binomiale

> Si $X$ suit $\\mathcal{B}(n,p)$, alors :
> $$E(X) = np$$

### Exemple (suite)

$E(X) = 4\\times0{,}5=2$ : en moyenne, on obtient $2$ Piles sur $4$ lancers, ce qui est cohérent avec l'intuition.

## Méthode pour reconnaître une loi binomiale

On vérifie que la situation est bien un **schéma de Bernoulli répété $n$ fois** (épreuves identiques et indépendantes, deux issues), puis on identifie $n$ et $p$, et on applique la formule.`,
        exercises: [
          {
            id: "lbi1-l3-e1",
            question: "La formule de la loi binomiale $P(X=k)$ pour $X \\sim \\mathcal{B}(n,p)$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dbinom{n}{k}p^k(1-p)^{n-k}$" },
              { id: "B", text: "$\\dbinom{n}{k}p^{n-k}(1-p)^k$" },
              { id: "C", text: "$np^k$" },
              { id: "D", text: "$\\dbinom{n}{k}p^n$" },
            ],
            correctId: "A",
            explanation: "C'est la formule du cours : le coefficient binomial multiplié par $p$ à la puissance du nombre de succès et $(1-p)$ à la puissance du nombre d'échecs.",
            difficulty: "debutant",
          },
          {
            id: "lbi1-l3-e2",
            question: "Si $X \\sim \\mathcal{B}(n,p)$, alors $E(X) = np$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est la formule de l'espérance d'une loi binomiale, qui est une propriété du cours.",
            difficulty: "debutant",
          },
          {
            id: "lbi1-l3-e3",
            question: "On répète $5$ fois une épreuve de Bernoulli de paramètre $p=0{,}4$. Quelle est la loi suivie par $X$ = nombre de succès ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\mathcal{B}(5\\,;\\,0{,}4)$" },
              { id: "B", text: "$\\mathcal{B}(0{,}4\\,;\\,5)$" },
              { id: "C", text: "$\\mathcal{B}(0{,}4)$" },
              { id: "D", text: "Une loi non binomiale" },
            ],
            correctId: "A",
            explanation: "Le nombre de succès dans un schéma de Bernoulli répété $n$ fois avec probabilité $p$ suit la loi binomiale $\\mathcal{B}(n,p)$, ici $\\mathcal{B}(5\\,;\\,0{,}4)$.",
            difficulty: "intermediaire",
          },
          {
            id: "lbi1-l3-e4",
            question: "Une question de QCM comporte $4$ propositions dont une seule est correcte. Un élève répond au hasard à $3$ questions indépendantes de ce type. Soit $X$ le nombre de bonnes réponses. Justifie que $X$ suit une loi binomiale en précisant ses paramètres, puis calcule $P(X=2)$ (on donne $\\dbinom{3}{2}=3$).",
            type: "open",
            modelAnswer: "Chaque question est une épreuve de Bernoulli : succès = \"bonne réponse\" avec probabilité $p=\\dfrac{1}{4}=0{,}25$ (une chance sur 4), échec = \"mauvaise réponse\" avec probabilité $0{,}75$.\\n\\nComme les $3$ questions sont répondues indépendamment et que la probabilité de succès reste $0{,}25$ à chaque question, il s'agit d'un schéma de Bernoulli répété $n=3$ fois.\\n\\nDonc $X$ suit la loi binomiale $\\mathcal{B}(3\\,;\\,0{,}25)$.\\n\\n**Calcul de $P(X=2)$ :**\\n\\n$$P(X=2) = \\dbinom{3}{2}\\times0{,}25^2\\times0{,}75^1 = 3\\times0{,}0625\\times0{,}75$$\\n\\n$$= 3\\times0{,}046875 = 0{,}140625$$\\n\\n$$\\boxed{X \\sim \\mathcal{B}(3\\,;\\,0{,}25) \\quad ; \\quad P(X=2) = 0{,}140625}$$",
            explanation: "On identifie les paramètres $n$ et $p$ du schéma de Bernoulli, puis on applique directement la formule de la loi binomiale pour $k=2$.",
            difficulty: "expert",
          },
          {
            id: "lbi1-l3-e5",
            question: "Une machine produit des pièces, et chaque pièce a une probabilité $0{,}1$ d'être défectueuse, indépendamment des autres. On prélève un échantillon de $6$ pièces. Soit $X$ le nombre de pièces défectueuses dans l'échantillon. Donne la loi de $X$, calcule $P(X=0)$ (probabilité qu'aucune pièce ne soit défectueuse), puis calcule $E(X)$ et interprète ce résultat.",
            type: "open",
            modelAnswer: "Chaque pièce constitue une épreuve de Bernoulli de paramètre $p=0{,}1$ (succès = \"pièce défectueuse\"), répétée de façon indépendante $n=6$ fois (un échantillon de $6$ pièces).\\n\\nDonc $X$ suit la loi binomiale $\\mathcal{B}(6\\,;\\,0{,}1)$.\\n\\n**Calcul de $P(X=0)$ :**\\n\\n$$P(X=0) = \\dbinom{6}{0}\\times0{,}1^0\\times0{,}9^6 = 1\\times1\\times0{,}9^6$$\\n\\nOn calcule $0{,}9^6 = 0{,}531441$ (en multipliant successivement : $0{,}9^2=0{,}81$, $0{,}9^3=0{,}729$, $0{,}9^6=0{,}729^2=0{,}531441$).\\n\\n$$P(X=0) \\approx 0{,}531$$\\n\\n**Calcul de l'espérance :**\\n\\n$$E(X) = np = 6\\times0{,}1=0{,}6$$\\n\\n**Interprétation :** sur un grand nombre d'échantillons de $6$ pièces, on observe en moyenne $0{,}6$ pièce défectueuse par échantillon ; et il y a environ $53{,}1\\%$ de chances qu'un échantillon donné ne contienne aucune pièce défectueuse.\\n\\n$$\\boxed{X\\sim\\mathcal{B}(6\\,;\\,0{,}1)\\,;\\ P(X=0)\\approx0{,}531\\,;\\ E(X)=0{,}6}$$",
            explanation: "On reconnaît le schéma de Bernoulli répété, on utilise $\\binom{6}{0}=1$ pour simplifier le calcul de $P(X=0)$ à une simple puissance, puis on applique la formule de l'espérance $E(X)=np$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "lst1-id",
    slug: "limites-de-suites-terminale",
    title: "Limites de suites et raisonnement par récurrence",
    description: "Étudier le comportement à l'infini des suites numériques, maîtriser les limites usuelles et démontrer des propriétés par récurrence.",
    schoolLevel: "terminale",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "♾️",
    lessons: [
      {
        id: "lst1-l1",
        slug: "limite-d-une-suite",
        title: "Limite d'une suite numérique",
        content: `## Convergence et divergence

Une suite $(u_n)$ peut, lorsque $n$ devient très grand, se rapprocher d'un nombre fixe, ou au contraire s'éloigner indéfiniment.

> **Définition (suite convergente) :** on dit que $(u_n)$ **converge** vers un réel $\\ell$ si tout intervalle ouvert contenant $\\ell$ contient tous les termes $u_n$ à partir d'un certain rang. On écrit alors :
> $$\\lim_{n \\to +\\infty} u_n = \\ell$$

Si une suite ne converge vers aucun réel, on dit qu'elle **diverge**. La divergence peut se manifester de deux façons :

- $u_n$ tend vers $+\\infty$ (ou $-\\infty$) : pour tout réel $A$, $u_n > A$ (resp. $u_n < A$) à partir d'un certain rang ;
- $u_n$ n'a pas de limite du tout (exemple : $u_n = (-1)^n$, qui oscille entre $-1$ et $1$).

### Limites des suites usuelles

| Suite | Limite quand $n \\to +\\infty$ |
|---|---|
| $u_n = n$ | $+\\infty$ |
| $u_n = n^2$, $n^3$, ... | $+\\infty$ |
| $u_n = \\sqrt{n}$ | $+\\infty$ |
| $u_n = \\dfrac{1}{n}$ | $0$ |
| $u_n = \\dfrac{1}{n^2}$ | $0$ |
| $u_n = \\dfrac{1}{\\sqrt{n}}$ | $0$ |

### Opérations sur les limites

Les règles sont les mêmes que pour les fonctions : somme, produit, quotient des limites, avec les mêmes **formes indéterminées** à traiter : $+\\infty - \\infty$, $0 \\times \\infty$, $\\dfrac{\\infty}{\\infty}$, $\\dfrac{0}{0}$.

**Exemple :** $u_n = 3n - \\dfrac{1}{n}$. On a $\\lim 3n = +\\infty$ et $\\lim -\\dfrac{1}{n} = 0$, donc par somme $\\lim u_n = +\\infty$.

> **Suites arithmétiques et géométriques :**
> - Une suite arithmétique de raison $r$ : si $r>0$, $\\lim u_n = +\\infty$ ; si $r<0$, $\\lim u_n = -\\infty$ ; si $r=0$, la suite est constante.
> - Une suite géométrique $u_n = u_0 \\times q^n$ dépend fortement de $q$ (voir leçon suivante).`,
        durationMinutes: 22,
        exercises: [
          {
            id: "lst1-l1-e1",
            question: "Quelle est la limite de la suite $u_n = \\dfrac{1}{n^2}$ quand $n \\to +\\infty$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$+\\infty$" },
              { id: "B", text: "$0$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "Elle n'a pas de limite" },
            ],
            correctId: "B",
            explanation: "C'est une limite usuelle : $\\dfrac{1}{n^2}$ tend vers $0$ quand $n$ tend vers $+\\infty$, car le dénominateur devient infiniment grand.",
            difficulty: "debutant",
          },
          {
            id: "lst1-l1-e2",
            question: "Une suite arithmétique de raison $r = -2$ diverge vers $+\\infty$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Avec une raison négative ($r=-2 < 0$), une suite arithmétique tend vers $-\\infty$, pas vers $+\\infty$.",
            difficulty: "debutant",
          },
          {
            id: "lst1-l1-e3",
            question: "Détermine la limite de la suite $u_n = 5 + \\dfrac{3}{n}$ quand $n \\to +\\infty$.",
            type: "open",
            modelAnswer: "On décompose la suite en deux termes : une constante et un terme qui tend vers $0$.\\n\\n$$\\lim_{n\\to+\\infty} \\dfrac{3}{n} = 0$$\\n\\ncar $\\dfrac{1}{n} \\to 0$ et $3$ est une constante multiplicative.\\n\\nPar somme des limites :\\n\\n$$\\lim_{n\\to+\\infty} u_n = 5 + 0 = 5$$\\n\\n$$\\boxed{\\lim_{n\\to+\\infty} u_n = 5}$$",
            explanation: "On utilise la limite usuelle $\\dfrac{1}{n}\\to 0$ puis on applique la règle de la somme des limites.",
            difficulty: "debutant",
          },
          {
            id: "lst1-l1-e4",
            question: "Quelle est la limite de $u_n = n^2 - n$ quand $n \\to +\\infty$ ? (Attention à la forme indéterminée.)",
            type: "open",
            modelAnswer: "On a $\\lim n^2 = +\\infty$ et $\\lim n = +\\infty$, donc $u_n$ est de la forme indéterminée $+\\infty - \\infty$. Il faut transformer l'écriture.\\n\\nOn factorise par le terme dominant $n^2$ :\\n\\n$$u_n = n^2 - n = n^2\\left(1 - \\dfrac{1}{n}\\right)$$\\n\\nQuand $n \\to +\\infty$ : $\\dfrac{1}{n} \\to 0$, donc $1 - \\dfrac{1}{n} \\to 1$.\\n\\nDe plus $n^2 \\to +\\infty$.\\n\\nPar produit des limites ($+\\infty \\times 1$) :\\n\\n$$\\lim_{n\\to+\\infty} u_n = +\\infty$$\\n\\n$$\\boxed{\\lim_{n\\to+\\infty}(n^2-n) = +\\infty}$$",
            explanation: "Face à une forme indéterminée $\\infty - \\infty$, on factorise par le terme de plus haut degré pour lever l'indétermination.",
            difficulty: "intermediaire",
          },
          {
            id: "lst1-l1-e5",
            question: "Soit $(u_n)$ une suite telle que pour tout $n$, $u_n = \\dfrac{2n+1}{n}$. Quelle est sa limite ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$+\\infty$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "B",
            explanation: "On écrit $u_n = \\dfrac{2n}{n} + \\dfrac{1}{n} = 2 + \\dfrac{1}{n}$, et $\\dfrac{1}{n}\\to 0$, donc $u_n \\to 2$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "lst1-l2",
        slug: "limites-des-suites-geometriques-et-comparaison",
        title: "Suites géométriques et théorèmes de comparaison",
        content: `## Limite de $q^n$ selon les valeurs de $q$

Pour une suite géométrique $u_n = q^n$, le comportement à l'infini dépend entièrement de la **raison $q$** :

| Valeur de $q$ | $\\lim_{n\\to+\\infty} q^n$ |
|---|---|
| $q > 1$ | $+\\infty$ |
| $q = 1$ | $1$ (suite constante) |
| $-1 < q < 1$ | $0$ |
| $q = -1$ | pas de limite (oscille entre $-1$ et $1$) |
| $q \\leqslant -1$ | pas de limite |

**Exemple :** $\\lim_{n\\to+\\infty} 0{,}5^n = 0$ car $-1 < 0{,}5 < 1$. Mais $\\lim_{n\\to+\\infty} 1{,}5^n = +\\infty$ car $1{,}5 > 1$.

### Théorèmes de comparaison

> **Théorème de comparaison (cas infini) :** si, à partir d'un certain rang, $u_n \\geqslant v_n$ et $\\lim v_n = +\\infty$, alors $\\lim u_n = +\\infty$ (et de façon symétrique pour $-\\infty$).

> **Théorème des gendarmes (ou d'encadrement) :** si, à partir d'un certain rang, $v_n \\leqslant u_n \\leqslant w_n$, et si $\\lim v_n = \\lim w_n = \\ell$, alors $\\lim u_n = \\ell$.

**Exemple d'application :** soit $u_n = \\dfrac{\\sin(n)}{n}$. On sait que $-1 \\leqslant \\sin(n) \\leqslant 1$, donc :
$$-\\dfrac{1}{n} \\leqslant u_n \\leqslant \\dfrac{1}{n}$$

Comme $-\\dfrac{1}{n} \\to 0$ et $\\dfrac{1}{n}\\to 0$, le théorème des gendarmes donne $\\lim u_n = 0$.

> **Méthode :** ces théorèmes sont précieux lorsqu'on ne peut pas calculer directement la limite (suite trop complexe, présence de $\\sin$, $\\cos$, ou de termes oscillants).`,
        durationMinutes: 24,
        exercises: [
          {
            id: "lst1-l2-e1",
            question: "Quelle est la limite de $u_n = (0{,}8)^n$ quand $n \\to +\\infty$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$+\\infty$" },
              { id: "D", text: "$0{,}8$" },
            ],
            correctId: "A",
            explanation: "Comme $-1 < 0{,}8 < 1$, la suite géométrique $(0{,}8)^n$ tend vers $0$.",
            difficulty: "debutant",
          },
          {
            id: "lst1-l2-e2",
            question: "La suite $u_n = (-2)^n$ tend vers $+\\infty$ quand $n \\to +\\infty$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Comme $q = -2 \\leqslant -1$, la suite $(-2)^n$ n'a pas de limite : elle alterne des valeurs positives et négatives de plus en plus grandes en valeur absolue.",
            difficulty: "debutant",
          },
          {
            id: "lst1-l2-e3",
            question: "Soit $u_n = 3^n - 5$. Détermine la limite de $u_n$ quand $n \\to +\\infty$ et justifie en utilisant les opérations sur les limites.",
            type: "open",
            modelAnswer: "On utilise la limite usuelle des suites géométriques : comme $q=3 > 1$,\\n\\n$$\\lim_{n\\to+\\infty} 3^n = +\\infty$$\\n\\nOr $-5$ est une constante, donc par somme des limites ($+\\infty$ plus une constante reste $+\\infty$) :\\n\\n$$\\lim_{n\\to+\\infty}(3^n - 5) = +\\infty$$\\n\\n$$\\boxed{\\lim_{n\\to+\\infty} u_n = +\\infty}$$",
            explanation: "On reconnaît une suite géométrique de raison $q=3>1$ qui tend vers $+\\infty$, puis on applique la règle de somme avec une constante.",
            difficulty: "intermediaire",
          },
          {
            id: "lst1-l2-e4",
            question: "Soit $u_n = \\dfrac{(-1)^n}{n^2}$ pour $n \\geqslant 1$. En utilisant un encadrement, démontre que $\\lim_{n\\to+\\infty} u_n = 0$.",
            type: "open",
            modelAnswer: "On sait que pour tout entier $n$, $-1 \\leqslant (-1)^n \\leqslant 1$.\\n\\nEn divisant les trois membres de cette inégalité par $n^2 > 0$ (ce qui ne change pas le sens des inégalités) :\\n\\n$$-\\dfrac{1}{n^2} \\leqslant \\dfrac{(-1)^n}{n^2} \\leqslant \\dfrac{1}{n^2}$$\\n\\nc'est-à-dire $-\\dfrac{1}{n^2} \\leqslant u_n \\leqslant \\dfrac{1}{n^2}$.\\n\\nOr on sait que $\\lim_{n\\to+\\infty} \\dfrac{1}{n^2} = 0$, donc aussi $\\lim_{n\\to+\\infty} \\left(-\\dfrac{1}{n^2}\\right) = 0$.\\n\\nLes deux suites encadrantes tendent vers la même limite $0$. D'après le **théorème des gendarmes**, on conclut :\\n\\n$$\\boxed{\\lim_{n\\to+\\infty} u_n = 0}$$",
            explanation: "On encadre la suite à l'aide de l'inégalité $-1\\leqslant(-1)^n\\leqslant1$, puis on applique le théorème des gendarmes car les deux bornes tendent vers la même limite.",
            difficulty: "expert",
          },
          {
            id: "lst1-l2-e5",
            question: "Soit $u_n = n + \\cos(n)$. On admet que $-1 \\leqslant \\cos(n) \\leqslant 1$ pour tout $n$. Quelle est la limite de $u_n$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$+\\infty$" },
              { id: "D", text: "Elle n'existe pas" },
            ],
            correctId: "C",
            explanation: "On a $n - 1 \\leqslant u_n \\leqslant n+1$. Comme $\\lim(n-1) = +\\infty$, le théorème de comparaison donne $\\lim u_n = +\\infty$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "lst1-l3",
        slug: "raisonnement-par-recurrence",
        title: "Le raisonnement par récurrence",
        content: `## Principe de récurrence

Le raisonnement par récurrence permet de démontrer qu'une propriété $P(n)$ est vraie pour tout entier $n$ à partir d'un certain rang $n_0$, souvent utilisé pour étudier des suites définies par une relation $u_{n+1} = f(u_n)$.

> **Principe de récurrence :** pour démontrer que $P(n)$ est vraie pour tout entier $n \\geqslant n_0$, on procède en trois étapes :
> 1. **Initialisation :** on vérifie que $P(n_0)$ est vraie.
> 2. **Hérédité :** on suppose que $P(n)$ est vraie pour un entier $n \\geqslant n_0$ quelconque (**hypothèse de récurrence**), et on démontre qu'alors $P(n+1)$ est vraie aussi.
> 3. **Conclusion :** d'après le principe de récurrence, $P(n)$ est vraie pour tout entier $n \\geqslant n_0$.

### Exemple détaillé

Soit la suite définie par $u_0 = 1$ et $u_{n+1} = 2u_n + 1$. Démontrons que pour tout entier $n$, $u_n \\geqslant 0$ (propriété $P(n)$).

**Initialisation :** $u_0 = 1 \\geqslant 0$, donc $P(0)$ est vraie.

**Hérédité :** supposons $u_n \\geqslant 0$ pour un certain $n$. Alors :
$$u_{n+1} = 2u_n + 1 \\geqslant 2\\times 0 + 1 = 1 \\geqslant 0$$

Donc $P(n+1)$ est vraie.

**Conclusion :** par récurrence, $u_n \\geqslant 0$ pour tout entier $n$.

> **Point de vigilance :** il ne faut JAMAIS oublier l'étape d'initialisation : une hérédité vraie sans initialisation ne prouve rien (l'édifice entier "s'effondre" s'il n'a pas de premier étage).

### Récurrence et monotonie de suites

On utilise souvent la récurrence pour prouver qu'une suite est croissante, décroissante, ou bornée, ce qui permet ensuite (avec le théorème de convergence monotone, admis) de justifier sa convergence.`,
        durationMinutes: 26,
        exercises: [
          {
            id: "lst1-l3-e1",
            question: "Dans un raisonnement par récurrence, l'étape d'initialisation consiste à :",
            type: "mcq",
            options: [
              { id: "A", text: "Supposer la propriété vraie au rang $n$" },
              { id: "B", text: "Vérifier la propriété au premier rang $n_0$" },
              { id: "C", text: "Démontrer la propriété pour tout $n$ directement" },
              { id: "D", text: "Calculer la limite de la suite" },
            ],
            correctId: "B",
            explanation: "L'initialisation vérifie que la propriété est vraie au rang de départ $n_0$, point de départ indispensable du raisonnement.",
            difficulty: "debutant",
          },
          {
            id: "lst1-l3-e2",
            question: "On peut conclure qu'une propriété est vraie pour tout $n$ si seule l'étape d'hérédité a été démontrée, sans initialisation.",
            type: "true_false",
            correctId: "faux",
            explanation: "Sans l'initialisation, le raisonnement par récurrence n'est pas valide : il faut un premier rang vérifié pour que la chaîne d'implications démarre.",
            difficulty: "debutant",
          },
          {
            id: "lst1-l3-e3",
            question: "Démontre par récurrence que pour tout entier naturel $n$, $2^n \\geqslant n+1$.",
            type: "open",
            modelAnswer: "On note $P(n)$ la propriété \"$2^n \\geqslant n+1$\".\\n\\n**Initialisation :** pour $n=0$, $2^0 = 1$ et $n+1 = 1$. On a bien $1 \\geqslant 1$, donc $P(0)$ est vraie.\\n\\n**Hérédité :** supposons $P(n)$ vraie pour un entier $n \\geqslant 0$, c'est-à-dire $2^n \\geqslant n+1$. Montrons que $P(n+1)$ est vraie, c'est-à-dire $2^{n+1} \\geqslant n+2$.\\n\\nOn a :\\n$$2^{n+1} = 2\\times 2^n \\geqslant 2(n+1)$$\\n\\nen utilisant l'hypothèse de récurrence et en multipliant par $2>0$.\\n\\nOr $2(n+1) = 2n+2 = (n+2) + n \\geqslant n+2$ car $n \\geqslant 0$.\\n\\nDonc $2^{n+1} \\geqslant n+2$, c'est-à-dire $P(n+1)$ est vraie.\\n\\n**Conclusion :** par le principe de récurrence, pour tout entier naturel $n$, $2^n \\geqslant n+1$.\\n\\n$$\\boxed{\\forall n \\in \\mathbb{N},\\ 2^n \\geqslant n+1}$$",
            explanation: "On applique scrupuleusement les trois étapes : initialisation au rang 0, hérédité en utilisant l'hypothèse de récurrence pour majorer $2^{n+1}$, puis conclusion.",
            difficulty: "intermediaire",
          },
          {
            id: "lst1-l3-e4",
            question: "Soit $(u_n)$ définie par $u_0 = 2$ et $u_{n+1} = \\dfrac{1}{2}u_n + 1$. Démontre par récurrence que pour tout $n$, $u_n \\leqslant 2$.",
            type: "open",
            modelAnswer: "On note $P(n)$ la propriété \"$u_n \\leqslant 2$\".\\n\\n**Initialisation :** $u_0 = 2 \\leqslant 2$, donc $P(0)$ est vraie.\\n\\n**Hérédité :** supposons $u_n \\leqslant 2$ pour un entier $n$ quelconque. Montrons que $u_{n+1} \\leqslant 2$.\\n\\nOn a :\\n$$u_{n+1} = \\dfrac{1}{2}u_n + 1$$\\n\\nComme $u_n \\leqslant 2$, en multipliant par $\\dfrac{1}{2}>0$ (qui conserve le sens de l'inégalité) :\\n$$\\dfrac{1}{2}u_n \\leqslant \\dfrac{1}{2}\\times 2 = 1$$\\n\\nDonc :\\n$$u_{n+1} = \\dfrac{1}{2}u_n + 1 \\leqslant 1 + 1 = 2$$\\n\\nDonc $P(n+1)$ est vraie.\\n\\n**Conclusion :** par récurrence, pour tout entier naturel $n$, $u_n \\leqslant 2$.\\n\\n$$\\boxed{\\forall n \\in \\mathbb{N},\\ u_n \\leqslant 2}$$",
            explanation: "On utilise l'hypothèse de récurrence $u_n \\leqslant 2$ pour majorer directement $u_{n+1}$ par composition avec la fonction affine croissante $x \\mapsto \\frac{1}{2}x+1$.",
            difficulty: "expert",
          },
          {
            id: "lst1-l3-e5",
            question: "Soit $(u_n)$ définie par $u_0=1$ et $u_{n+1}=u_n+2n+1$. Quelle formule explicite peut-on conjecturer puis démontrer par récurrence ?",
            type: "mcq",
            options: [
              { id: "A", text: "$u_n = n^2+1$" },
              { id: "B", text: "$u_n = 2n+1$" },
              { id: "C", text: "$u_n = (n+1)^2$" },
              { id: "D", text: "$u_n = 2^n$" },
            ],
            correctId: "A",
            explanation: "On calcule les premiers termes : $u_0=1$, $u_1=u_0+2(0)+1=2$, $u_2=u_1+2(1)+1=5$, $u_3=u_2+2(2)+1=10$. La suite $1,2,5,10$ correspond à $n^2+1$ ($0^2+1=1$, $1^2+1=2$, $2^2+1=5$, $3^2+1=10$). On vérifie l'hérédité : si $u_n=n^2+1$ alors $u_{n+1}=n^2+1+2n+1=(n+1)^2+1$, ce qui confirme la formule par récurrence.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "lcf1-id",
    slug: "limites-et-continuite-terminale",
    title: "Limites de fonctions et continuité",
    description: "Étudier le comportement d'une fonction en un point ou à l'infini, identifier ses asymptotes, et comprendre la continuité et le théorème des valeurs intermédiaires.",
    schoolLevel: "terminale",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "📈",
    lessons: [
      {
        id: "lcf1-l1",
        slug: "limites-de-fonctions-et-asymptotes",
        title: "Limites de fonctions et asymptotes",
        content: `## Limite en un point et à l'infini

On étudie le comportement d'une fonction $f$ soit lorsque $x$ se rapproche d'une valeur précise $a$ (limite **en un point**), soit lorsque $x$ devient très grand ou très petit (limite **en $+\\infty$ ou $-\\infty$**).

> **Limite en $+\\infty$ :** $\\lim_{x\\to+\\infty} f(x) = \\ell$ signifie que $f(x)$ se rapproche d'autant plus de $\\ell$ que $x$ devient grand.
>
> **Limite infinie en un point :** $\\lim_{x\\to a} f(x) = +\\infty$ signifie que $f(x)$ devient arbitrairement grand quand $x$ se rapproche de $a$.

### Limites usuelles

| Fonction | Limite en $+\\infty$ | Limite en $0$ (ou ailleurs) |
|---|---|---|
| $f(x) = x^2$ | $+\\infty$ | $f(0)=0$ |
| $f(x) = \\sqrt{x}$ | $+\\infty$ | $f(0)=0$ |
| $f(x) = \\dfrac{1}{x}$ | $0$ | $\\lim_{x\\to 0^+}\\frac{1}{x}=+\\infty$, $\\lim_{x\\to 0^-}\\frac{1}{x}=-\\infty$ |
| $f(x) = \\dfrac{1}{x^2}$ | $0$ | $\\lim_{x\\to 0}\\frac{1}{x^2}=+\\infty$ |

### Asymptotes

> **Asymptote horizontale :** si $\\lim_{x\\to+\\infty} f(x) = \\ell$ (réel fini), alors la droite d'équation $y=\\ell$ est asymptote horizontale à la courbe de $f$ en $+\\infty$.
>
> **Asymptote verticale :** si $\\lim_{x\\to a} f(x) = \\pm\\infty$, alors la droite d'équation $x=a$ est asymptote verticale.

**Exemple :** pour $f(x) = \\dfrac{1}{x}$, la droite $y=0$ est asymptote horizontale en $+\\infty$ et en $-\\infty$, et la droite $x=0$ est asymptote verticale.

### Opérations sur les limites

Les règles de somme, produit et quotient des limites s'appliquent comme pour les suites, avec les mêmes formes indéterminées : $\\infty - \\infty$, $0\\times\\infty$, $\\dfrac{\\infty}{\\infty}$, $\\dfrac{0}{0}$. On lève l'indétermination en factorisant par le terme de plus haut degré (limite en $\\pm\\infty$) ou en simplifiant l'expression (limite en un point fini).`,
        durationMinutes: 24,
        exercises: [
          {
            id: "lcf1-l1-e1",
            question: "Quelle est la limite de $f(x) = \\dfrac{1}{x}$ quand $x \\to +\\infty$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$+\\infty$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$-\\infty$" },
            ],
            correctId: "C",
            explanation: "C'est une limite usuelle : $\\dfrac{1}{x}$ se rapproche de $0$ quand $x$ devient très grand.",
            difficulty: "debutant",
          },
          {
            id: "lcf1-l1-e2",
            question: "Si $\\lim_{x\\to+\\infty} f(x) = 3$, alors la droite $y=3$ est asymptote verticale à la courbe de $f$.",
            type: "true_false",
            correctId: "faux",
            explanation: "Une limite finie en $+\\infty$ donne une asymptote **horizontale** (droite $y=3$), pas verticale.",
            difficulty: "debutant",
          },
          {
            id: "lcf1-l1-e3",
            question: "Détermine $\\lim_{x\\to+\\infty} (2x^2 - 3x)$.",
            type: "open",
            modelAnswer: "On a $\\lim 2x^2 = +\\infty$ et $\\lim -3x = -\\infty$, donc on est face à une forme indéterminée $+\\infty - \\infty$.\\n\\nOn factorise par le terme de plus haut degré, $x^2$ :\\n\\n$$2x^2 - 3x = x^2\\left(2 - \\dfrac{3}{x}\\right)$$\\n\\nQuand $x \\to +\\infty$ : $\\dfrac{3}{x} \\to 0$, donc $2 - \\dfrac{3}{x} \\to 2$.\\n\\nDe plus $x^2 \\to +\\infty$.\\n\\nPar produit des limites :\\n\\n$$\\lim_{x\\to+\\infty}(2x^2-3x) = +\\infty$$\\n\\n$$\\boxed{\\lim_{x\\to+\\infty}(2x^2-3x) = +\\infty}$$",
            explanation: "On factorise par le terme dominant pour lever l'indétermination $\\infty-\\infty$, comme pour les suites.",
            difficulty: "intermediaire",
          },
          {
            id: "lcf1-l1-e4",
            question: "Soit $f(x) = \\dfrac{3x+1}{x-2}$. Détermine les asymptotes de la courbe représentative de $f$.",
            type: "open",
            modelAnswer: "**Asymptote verticale :** $f$ n'est pas définie en $x=2$ (dénominateur nul). Étudions la limite en ce point.\\n\\nQuand $x \\to 2^+$, le numérateur tend vers $3\\times2+1=7>0$ et le dénominateur tend vers $0^+$, donc $\\lim_{x\\to2^+} f(x) = +\\infty$.\\n\\nQuand $x \\to 2^-$, le dénominateur tend vers $0^-$, donc $\\lim_{x\\to2^-} f(x) = -\\infty$.\\n\\nLa droite $x=2$ est donc **asymptote verticale**.\\n\\n**Asymptote horizontale :** en $+\\infty$, on factorise par $x$ au numérateur et au dénominateur :\\n\\n$$f(x) = \\dfrac{x\\left(3+\\frac{1}{x}\\right)}{x\\left(1-\\frac{2}{x}\\right)} = \\dfrac{3+\\frac{1}{x}}{1-\\frac{2}{x}}$$\\n\\nQuand $x\\to+\\infty$, $\\frac{1}{x}\\to0$ et $\\frac{2}{x}\\to0$, donc $f(x) \\to \\dfrac{3}{1} = 3$.\\n\\nLa droite $y=3$ est donc **asymptote horizontale** en $+\\infty$ (et de même en $-\\infty$).\\n\\n$$\\boxed{x=2 \\text{ (asymptote verticale)},\\ y=3 \\text{ (asymptote horizontale)}}$$",
            explanation: "On cherche d'abord la valeur interdite pour l'asymptote verticale en étudiant le signe du dénominateur autour de cette valeur, puis on factorise par $x$ pour calculer la limite en $\\pm\\infty$.",
            difficulty: "expert",
          },
          {
            id: "lcf1-l1-e5",
            question: "Quelle est la limite de $f(x) = \\dfrac{2x^2+1}{x^2}$ quand $x \\to +\\infty$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "$+\\infty$" },
            ],
            correctId: "C",
            explanation: "On écrit $f(x) = 2 + \\dfrac{1}{x^2}$, et $\\dfrac{1}{x^2}\\to 0$, donc $f(x) \\to 2$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "lcf1-l2",
        slug: "continuite-d-une-fonction",
        title: "Continuité d'une fonction",
        content: `## Notion de continuité

> **Définition (intuitive) :** une fonction $f$ est **continue** en un point $a$ si sa courbe représentative ne présente pas de "saut" en $a$, c'est-à-dire si :
> $$\\lim_{x\\to a} f(x) = f(a)$$

> **Définition (continuité sur un intervalle) :** une fonction est continue sur un intervalle $I$ si elle est continue en chaque point de $I$. Graphiquement, on peut tracer sa courbe sans lever le crayon.

### Fonctions usuelles continues

Toutes les fonctions de référence étudiées au lycée sont continues sur leur ensemble de définition :

- les fonctions polynômes (sur $\\mathbb{R}$) ;
- la fonction racine carrée (sur $[0;+\\infty[$) ;
- les fonctions $\\exp$ et $\\ln$ (sur leur ensemble de définition) ;
- les fonctions $\\sin$ et $\\cos$ (sur $\\mathbb{R}$) ;
- toute somme, produit, quotient (où le dénominateur ne s'annule pas) ou composée de fonctions continues est continue.

> **Lien avec la dérivabilité :** si une fonction est dérivable en un point, alors elle est continue en ce point (mais la réciproque est fausse : par exemple $f(x)=|x|$ est continue en $0$ mais n'y est pas dérivable).

### Exemple de discontinuité

La fonction partie entière, ou une fonction définie par morceaux dont les morceaux ne "se raccordent" pas, présente des points de discontinuité où $\\lim_{x\\to a^-} f(x) \\neq \\lim_{x\\to a^+} f(x)$.`,
        durationMinutes: 20,
        exercises: [
          {
            id: "lcf1-l2-e1",
            question: "Une fonction polynôme est continue sur :",
            type: "mcq",
            options: [
              { id: "A", text: "Seulement en $0$" },
              { id: "B", text: "$\\mathbb{R}$ tout entier" },
              { id: "C", text: "Seulement sur $[0;+\\infty[$" },
              { id: "D", text: "Elle n'est jamais continue" },
            ],
            correctId: "B",
            explanation: "Les fonctions polynômes sont continues sur $\\mathbb{R}$ tout entier, sans aucune restriction.",
            difficulty: "debutant",
          },
          {
            id: "lcf1-l2-e2",
            question: "Si une fonction est dérivable en un point $a$, alors elle est nécessairement continue en $a$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est un théorème important : la dérivabilité en un point implique la continuité en ce point (mais pas l'inverse).",
            difficulty: "debutant",
          },
          {
            id: "lcf1-l2-e3",
            question: "Explique pourquoi la fonction $f(x) = \\dfrac{1}{x}$ n'est pas continue sur $\\mathbb{R}$ tout entier, bien qu'elle soit continue sur $\\mathbb{R}^*$.",
            type: "open",
            modelAnswer: "La fonction $f(x) = \\dfrac{1}{x}$ n'est tout simplement **pas définie en $x=0$** (division par zéro impossible).\\n\\nOr la continuité en un point $a$ exige que $f(a)$ existe et que $\\lim_{x\\to a} f(x) = f(a)$. Comme $f(0)$ n'existe pas, on ne peut même pas parler de continuité en $0$ : la question n'a pas de sens en ce point.\\n\\nEn revanche, sur $\\mathbb{R}^* = ]-\\infty;0[\\cup]0;+\\infty[$, c'est-à-dire en excluant $0$, la fonction $f$ est un quotient de fonctions continues (la fonction constante $1$ et la fonction $x\\mapsto x$) dont le dénominateur ne s'annule pas. Elle est donc continue sur cet ensemble.\\n\\n$$\\boxed{f \\text{ est continue sur } \\mathbb{R}^*, \\text{ mais } f(0) \\text{ n'existe pas, donc la continuité en } 0 \\text{ n'a pas de sens}}$$",
            explanation: "On distingue le domaine de définition (où la fonction existe) du critère de continuité (qui ne peut s'évaluer qu'aux points où la fonction est définie).",
            difficulty: "intermediaire",
          },
          {
            id: "lcf1-l2-e4",
            question: "Soit $f$ définie par $f(x) = x+1$ si $x \\leqslant 1$ et $f(x) = 2x$ si $x>1$. La fonction $f$ est-elle continue en $x=1$ ? Justifie.",
            type: "open",
            modelAnswer: "Pour étudier la continuité en $x=1$, il faut comparer la limite à gauche, la limite à droite, et la valeur de $f(1)$.\\n\\n**Valeur en $1$ :** comme $1 \\leqslant 1$, on utilise la première expression : $f(1) = 1+1 = 2$.\\n\\n**Limite à gauche** ($x \\to 1^-$, donc $x \\leqslant 1$, on utilise $f(x)=x+1$) :\\n$$\\lim_{x\\to1^-} f(x) = 1+1 = 2$$\\n\\n**Limite à droite** ($x \\to 1^+$, donc $x>1$, on utilise $f(x)=2x$) :\\n$$\\lim_{x\\to1^+} f(x) = 2\\times1 = 2$$\\n\\nLes limites à gauche et à droite sont égales entre elles et égales à $f(1)=2$. Donc :\\n\\n$$\\lim_{x\\to1} f(x) = f(1) = 2$$\\n\\n$$\\boxed{f \\text{ est continue en } x=1}$$",
            explanation: "On vérifie la continuité en comparant limite à gauche, limite à droite et valeur de la fonction au point ; les trois valeurs coïncident donc il n'y a pas de saut.",
            difficulty: "expert",
          },
          {
            id: "lcf1-l2-e5",
            question: "La fonction racine carrée $f(x) = \\sqrt{x}$ est continue sur quel ensemble ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\mathbb{R}$" },
              { id: "B", text: "$\\mathbb{R}^*$" },
              { id: "C", text: "$[0;+\\infty[$" },
              { id: "D", text: "$]-\\infty;0]$" },
            ],
            correctId: "C",
            explanation: "La fonction racine carrée est définie et continue sur $[0;+\\infty[$, son ensemble de définition.",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "lcf1-l3",
        slug: "theoreme-des-valeurs-intermediaires",
        title: "Théorème des valeurs intermédiaires (TVI)",
        content: `## Énoncé du théorème

> **Théorème des valeurs intermédiaires (TVI) :** soit $f$ une fonction **continue** sur un intervalle $[a;b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un** réel $c \\in [a;b]$ tel que $f(c)=k$.

Intuitivement : si on trace une courbe continue d'un point à un autre, elle passe forcément par toutes les valeurs intermédiaires.

### Corollaire (cas de la stricte monotonie)

> **Cas particulier très utilisé :** si $f$ est continue **et strictement monotone** (strictement croissante ou strictement décroissante) sur $[a;b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe un **unique** réel $c \\in [a;b]$ tel que $f(c)=k$.

C'est ce corollaire qui permet de démontrer l'**existence et l'unicité d'une solution** à une équation $f(x)=k$, et de l'encadrer par dichotomie ou à la calculatrice.

### Méthode pour appliquer le TVI

1. Vérifier que $f$ est continue sur l'intervalle considéré (presque toujours vrai pour les fonctions usuelles).
2. Étudier les variations de $f$ (tableau de variations) pour vérifier la stricte monotonie sur l'intervalle choisi.
3. Calculer ou encadrer $f(a)$ et $f(b)$, et vérifier que $k$ est bien compris entre les deux.
4. Conclure à l'existence et l'unicité de la solution $c$ telle que $f(c)=k$.

**Exemple :** soit $f(x) = x^3+x-1$ sur $[0;1]$. On a $f(0)=-1<0$ et $f(1)=1>0$. Comme $f$ est continue (polynôme) et strictement croissante (somme de fonctions croissantes) sur $[0;1]$, le TVI garantit l'existence d'un unique $c\\in[0;1]$ tel que $f(c)=0$.`,
        durationMinutes: 24,
        exercises: [
          {
            id: "lcf1-l3-e1",
            question: "Le théorème des valeurs intermédiaires nécessite que la fonction soit :",
            type: "mcq",
            options: [
              { id: "A", text: "Dérivable" },
              { id: "B", text: "Continue" },
              { id: "C", text: "Positive" },
              { id: "D", text: "Périodique" },
            ],
            correctId: "B",
            explanation: "Le TVI repose uniquement sur l'hypothèse de continuité de la fonction sur l'intervalle considéré.",
            difficulty: "debutant",
          },
          {
            id: "lcf1-l3-e2",
            question: "Si une fonction est continue et strictement monotone sur $[a;b]$, alors l'équation $f(x)=k$ (avec $k$ entre $f(a)$ et $f(b)$) admet une unique solution sur $[a;b]$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est exactement le corollaire du TVI dans le cas de la stricte monotonie : continuité + stricte monotonie garantissent l'unicité de la solution.",
            difficulty: "debutant",
          },
          {
            id: "lcf1-l3-e3",
            question: "Soit $f(x) = x^3 - 2$ sur $[1;2]$. Montre que l'équation $f(x)=0$ admet une unique solution sur $[1;2]$.",
            type: "open",
            modelAnswer: "**Continuité :** $f$ est une fonction polynôme, donc continue sur $\\mathbb{R}$, en particulier sur $[1;2]$.\\n\\n**Stricte monotonie :** $f(x)=x^3-2$ est strictement croissante sur $[1;2]$ car $x\\mapsto x^3$ est strictement croissante sur $\\mathbb{R}^+$ (et soustraire une constante ne change pas la monotonie).\\n\\n**Valeurs aux bornes :**\\n$$f(1) = 1^3-2 = -1 < 0$$\\n$$f(2) = 2^3-2 = 6 > 0$$\\n\\nComme $0$ est compris entre $f(1)=-1$ et $f(2)=6$, et que $f$ est continue et strictement croissante sur $[1;2]$, le théorème des valeurs intermédiaires (cas de la stricte monotonie) garantit qu'il existe une **unique** solution $c \\in [1;2]$ telle que $f(c)=0$.\\n\\n$$\\boxed{\\text{L'équation } f(x)=0 \\text{ admet une unique solution sur } [1;2]}$$",
            explanation: "On vérifie successivement continuité, stricte monotonie, puis on encadre $0$ entre $f(1)$ et $f(2)$ pour appliquer le corollaire du TVI garantissant l'unicité.",
            difficulty: "intermediaire",
          },
          {
            id: "lcf1-l3-e4",
            question: "Soit $f(x) = x^5+x-3$. On donne le tableau de variations : $f$ est strictement croissante sur $\\mathbb{R}$, $f(1)=-1$ et $f(2)=31$. Combien l'équation $f(x)=10$ admet-elle de solutions sur $[1;2]$, et pourquoi ?",
            type: "open",
            modelAnswer: "**Continuité :** $f$ est une fonction polynôme, donc continue sur $\\mathbb{R}$, en particulier sur $[1;2]$.\\n\\n**Stricte monotonie :** on nous donne que $f$ est strictement croissante sur $\\mathbb{R}$, donc en particulier sur $[1;2]$.\\n\\n**Position de $10$ :** on a $f(1)=-1$ et $f(2)=31$, et $-1 < 10 < 31$, donc $10$ est bien compris entre $f(1)$ et $f(2)$.\\n\\nD'après le théorème des valeurs intermédiaires (cas de la stricte monotonie), comme $f$ est continue et strictement croissante sur $[1;2]$ et que $10$ est compris entre $f(1)$ et $f(2)$, l'équation $f(x)=10$ admet une **unique** solution sur $[1;2]$.\\n\\n$$\\boxed{\\text{L'équation } f(x)=10 \\text{ admet exactement une solution sur } [1;2]}$$",
            explanation: "On applique le corollaire du TVI : continuité (polynôme) + stricte monotonie donnée + $10$ encadré par les valeurs aux bornes suffisent à conclure à l'unicité de la solution, sans avoir besoin de la calculer explicitement.",
            difficulty: "expert",
          },
          {
            id: "lcf1-l3-e5",
            question: "Pour appliquer le corollaire du TVI garantissant l'unicité d'une solution, quelle condition supplémentaire faut-il vérifier par rapport au TVI général ?",
            type: "mcq",
            options: [
              { id: "A", text: "Que la fonction soit positive" },
              { id: "B", text: "Que la fonction soit strictement monotone sur l'intervalle" },
              { id: "C", text: "Que la fonction soit dérivable deux fois" },
              { id: "D", text: "Que l'intervalle soit borné" },
            ],
            correctId: "B",
            explanation: "Le TVI général garantit l'existence d'au moins une solution ; pour garantir l'unicité, il faut en plus la stricte monotonie de la fonction sur l'intervalle.",
            difficulty: "intermediaire",
          },
        ],
      },
    ],
  },
  {
    id: "cvx1-id",
    slug: "derivation-et-convexite-terminale",
    title: "Dérivation et convexité",
    description: "Approfondir le calcul de dérivées (fonctions composées, dérivée seconde) et découvrir la convexité, la concavité et les points d'inflexion.",
    schoolLevel: "terminale",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "📐",
    lessons: [
      {
        id: "cvx1-l1",
        slug: "derivee-d-une-fonction-composee",
        title: "Dérivée d'une fonction composée",
        content: `## Fonction composée

Une fonction composée s'écrit $f(x) = g(u(x))$, c'est-à-dire qu'on applique d'abord $u$, puis $g$. On note parfois $f = g \\circ u$.

> **Formule de dérivation d'une fonction composée :**
> $$f'(x) = u'(x) \\times g'(u(x))$$

### Cas particuliers à connaître

| Fonction $f(x)$ | Dérivée $f'(x)$ |
|---|---|
| $u(x)^n$ ($n$ entier) | $n \\times u'(x) \\times u(x)^{n-1}$ |
| $\\sqrt{u(x)}$ | $\\dfrac{u'(x)}{2\\sqrt{u(x)}}$ |
| $\\dfrac{1}{u(x)}$ | $-\\dfrac{u'(x)}{u(x)^2}$ |
| $e^{u(x)}$ | $u'(x) \\times e^{u(x)}$ |
| $\\ln(u(x))$ | $\\dfrac{u'(x)}{u(x)}$ |

**Exemple :** soit $f(x) = (3x+1)^2$. On pose $u(x) = 3x+1$, donc $u'(x)=3$. Avec $n=2$ :
$$f'(x) = 2\\times 3\\times(3x+1) = 6(3x+1) = 18x+6$$

**Vérification :** en développant directement, $f(x) = 9x^2+6x+1$, donc $f'(x) = 18x+6$. Cela confirme le résultat.

### Méthode

1. Identifier la fonction "intérieure" $u(x)$ et la fonction "extérieure" $g$.
2. Calculer $u'(x)$.
3. Appliquer la formule correspondante du tableau ci-dessus (ou la formule générale $u'(x)\\times g'(u(x))$).`,
        durationMinutes: 24,
        exercises: [
          {
            id: "cvx1-l1-e1",
            question: "Quelle est la dérivée de $f(x) = e^{2x}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$e^{2x}$" },
              { id: "B", text: "$2e^{2x}$" },
              { id: "C", text: "$2x e^{2x-1}$" },
              { id: "D", text: "$2e^{x}$" },
            ],
            correctId: "B",
            explanation: "Avec $u(x)=2x$, $u'(x)=2$, donc $f'(x) = u'(x)\\times e^{u(x)} = 2e^{2x}$.",
            difficulty: "debutant",
          },
          {
            id: "cvx1-l1-e2",
            question: "La dérivée de $\\sqrt{u(x)}$ est $\\dfrac{u'(x)}{2\\sqrt{u(x)}}$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est la formule usuelle de dérivation de la composée par la fonction racine carrée.",
            difficulty: "debutant",
          },
          {
            id: "cvx1-l1-e3",
            question: "Calcule la dérivée de $f(x) = (2x-1)^3$.",
            type: "open",
            modelAnswer: "On pose $u(x) = 2x-1$, donc $u'(x) = 2$. On utilise la formule $\\left(u^n\\right)' = n\\times u' \\times u^{n-1}$ avec $n=3$ :\\n\\n$$f'(x) = 3\\times 2\\times(2x-1)^2 = 6(2x-1)^2$$\\n\\n$$\\boxed{f'(x) = 6(2x-1)^2}$$",
            explanation: "On applique directement la formule de dérivation de $u^n$ avec $u(x)=2x-1$ et $n=3$.",
            difficulty: "intermediaire",
          },
          {
            id: "cvx1-l1-e4",
            question: "Calcule la dérivée de $f(x) = \\ln(x^2+1)$.",
            type: "open",
            modelAnswer: "On pose $u(x) = x^2+1$, donc $u'(x) = 2x$. On utilise la formule $\\left(\\ln(u)\\right)' = \\dfrac{u'}{u}$ :\\n\\n$$f'(x) = \\dfrac{2x}{x^2+1}$$\\n\\nOn remarque que $x^2+1 > 0$ pour tout $x$, donc $f$ est bien définie et dérivable sur $\\mathbb{R}$ tout entier.\\n\\n$$\\boxed{f'(x) = \\dfrac{2x}{x^2+1}}$$",
            explanation: "On applique la formule de dérivation du logarithme composé, en remarquant que le dénominateur $u(x)=x^2+1$ ne s'annule jamais, ce qui assure que $f$ est dérivable sur $\\mathbb{R}$.",
            difficulty: "intermediaire",
          },
          {
            id: "cvx1-l1-e5",
            question: "Soit $f(x) = \\dfrac{1}{x^2+1}$. Quelle est sa dérivée ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{2x}{(x^2+1)^2}$" },
              { id: "B", text: "$-\\dfrac{2x}{(x^2+1)^2}$" },
              { id: "C", text: "$\\dfrac{1}{2x}$" },
              { id: "D", text: "$-\\dfrac{1}{(x^2+1)^2}$" },
            ],
            correctId: "B",
            explanation: "Avec $u(x)=x^2+1$, $u'(x)=2x$, on applique $\\left(\\frac{1}{u}\\right)' = -\\dfrac{u'}{u^2} = -\\dfrac{2x}{(x^2+1)^2}$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "cvx1-l2",
        slug: "derivee-seconde-et-convexite",
        title: "Dérivée seconde et convexité",
        content: `## La dérivée seconde

La **dérivée seconde** de $f$, notée $f''$, est la dérivée de la fonction dérivée $f'$ :
$$f''(x) = (f')'(x)$$

**Exemple :** si $f(x) = x^3 - 3x$, alors $f'(x) = 3x^2-3$, et $f''(x) = 6x$.

## Convexité et concavité

> **Définition graphique :** une fonction est **convexe** sur un intervalle si sa courbe est entièrement située **au-dessus** de chacune de ses tangentes sur cet intervalle (la courbe "se creuse vers le haut", comme un bol).
>
> Une fonction est **concave** si sa courbe est entièrement **au-dessous** de chacune de ses tangentes (comme un dôme).

> **Théorème (lien avec $f''$) :**
> - $f$ est **convexe** sur $I$ si et seulement si $f''(x) \\geqslant 0$ pour tout $x \\in I$ ;
> - $f$ est **concave** sur $I$ si et seulement si $f''(x) \\leqslant 0$ pour tout $x \\in I$.

Concrètement, étudier le signe de $f''$ permet de déterminer la convexité de $f$, exactement comme on étudie le signe de $f'$ pour déterminer ses variations.

### Point d'inflexion

> **Définition :** un point d'inflexion est un point où la courbe de $f$ **change de convexité** (passe de convexe à concave, ou inversement). En un point d'inflexion $a$, $f''(a)=0$ et $f''$ change de signe en $a$.

**Exemple :** pour $f(x)=x^3$, $f''(x)=6x$ s'annule en $x=0$ et change de signe (négatif avant, positif après). Le point $(0;0)$ est donc un point d'inflexion de la courbe de $f$.

> **Attention :** $f''(a)=0$ seul ne suffit pas à garantir un point d'inflexion ; il faut vérifier que $f''$ change réellement de signe autour de $a$.`,
        durationMinutes: 26,
        exercises: [
          {
            id: "cvx1-l2-e1",
            question: "Une fonction $f$ est convexe sur un intervalle $I$ si et seulement si :",
            type: "mcq",
            options: [
              { id: "A", text: "$f'(x) \\geqslant 0$ sur $I$" },
              { id: "B", text: "$f''(x) \\geqslant 0$ sur $I$" },
              { id: "C", text: "$f(x) \\geqslant 0$ sur $I$" },
              { id: "D", text: "$f''(x) \\leqslant 0$ sur $I$" },
            ],
            correctId: "B",
            explanation: "La convexité est caractérisée par une dérivée seconde positive ou nulle sur l'intervalle : $f''(x)\\geqslant 0$.",
            difficulty: "debutant",
          },
          {
            id: "cvx1-l2-e2",
            question: "En un point d'inflexion, la dérivée seconde s'annule et change de signe.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est la définition même d'un point d'inflexion : $f''$ change de signe (passe de positif à négatif, ou l'inverse), donc $f''(a)=0$ au point de transition.",
            difficulty: "debutant",
          },
          {
            id: "cvx1-l2-e3",
            question: "Soit $f(x) = x^3 - 6x^2 + 9x$. Calcule $f''(x)$ et détermine la convexité de $f$ sur $\\mathbb{R}$.",
            type: "open",
            modelAnswer: "On calcule d'abord la dérivée première :\\n$$f'(x) = 3x^2 - 12x + 9$$\\n\\nPuis la dérivée seconde :\\n$$f''(x) = 6x - 12$$\\n\\nOn étudie le signe de $f''(x) = 6x-12 = 6(x-2)$ :\\n- pour $x < 2$ : $f''(x) < 0$, donc $f$ est **concave** sur $]-\\infty;2[$ ;\\n- pour $x > 2$ : $f''(x) > 0$, donc $f$ est **convexe** sur $]2;+\\infty[$.\\n\\nComme $f''$ change de signe en $x=2$, le point d'abscisse $2$ est un **point d'inflexion** de la courbe de $f$.\\n\\n$$\\boxed{f \\text{ est concave sur } ]-\\infty;2[ \\text{ et convexe sur } ]2;+\\infty[,\\ \\text{point d'inflexion en } x=2}$$",
            explanation: "On calcule $f''$ puis on étudie son signe par un simple facteur affine ; le changement de signe en $x=2$ caractérise le point d'inflexion.",
            difficulty: "intermediaire",
          },
          {
            id: "cvx1-l2-e4",
            question: "Soit $f(x) = e^{-x^2}$. On donne $f'(x) = -2xe^{-x^2}$. Calcule $f''(x)$ et montre que $x=\\dfrac{1}{\\sqrt{2}}$ correspond à un changement de convexité (on admettra que c'est aussi le cas en $x=-\\dfrac{1}{\\sqrt2}$).",
            type: "open",
            modelAnswer: "On dérive $f'(x) = -2xe^{-x^2}$, qui est un produit de deux fonctions : $-2x$ et $e^{-x^2}$.\\n\\nEn notant $v(x)=-2x$ et $w(x)=e^{-x^2}$, on a $v'(x)=-2$ et $w'(x) = -2x\\,e^{-x^2}$ (dérivée de composée avec $u(x)=-x^2$, $u'(x)=-2x$).\\n\\nPar la formule du produit $(vw)'=v'w+vw'$ :\\n\\n$$f''(x) = -2\\,e^{-x^2} + (-2x)\\times(-2x\\,e^{-x^2}) = -2e^{-x^2} + 4x^2e^{-x^2}$$\\n\\nOn factorise par $e^{-x^2}$ (toujours strictement positif) :\\n\\n$$f''(x) = e^{-x^2}(4x^2-2)$$\\n\\nLe signe de $f''(x)$ est celui de $4x^2-2$, qui s'annule quand $x^2=\\dfrac{1}{2}$, soit $x=\\dfrac{1}{\\sqrt2}$ ou $x=-\\dfrac{1}{\\sqrt2}$.\\n\\nPour $|x|<\\dfrac{1}{\\sqrt2}$ : $4x^2-2<0$, donc $f$ est concave. Pour $|x|>\\dfrac{1}{\\sqrt2}$ : $4x^2-2>0$, donc $f$ est convexe. Le signe change bien en $x=\\dfrac{1}{\\sqrt2}$ (et en $x=-\\dfrac1{\\sqrt2}$), confirmant deux points d'inflexion.\\n\\n$$\\boxed{f''(x) = e^{-x^2}(4x^2-2),\\ \\text{points d'inflexion en } x=\\pm\\dfrac{1}{\\sqrt2}}$$",
            explanation: "On utilise la formule de dérivation d'un produit pour obtenir $f''$, on factorise par le terme exponentiel toujours positif, puis on étudie le signe du polynôme restant.",
            difficulty: "expert",
          },
          {
            id: "cvx1-l2-e5",
            question: "Soit $f(x) = -x^2+4x$. La fonction $f$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "Convexe sur $\\mathbb{R}$" },
              { id: "B", text: "Concave sur $\\mathbb{R}$" },
              { id: "C", text: "Ni convexe ni concave" },
              { id: "D", text: "Convexe seulement sur $[0;+\\infty[$" },
            ],
            correctId: "B",
            explanation: "On a $f'(x)=-2x+4$ et $f''(x)=-2<0$ pour tout $x$, donc $f$ est concave sur $\\mathbb{R}$ tout entier.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "cvx1-l3",
        slug: "tangente-et-position-de-la-courbe",
        title: "Position de la courbe par rapport à la tangente",
        content: `## Équation de la tangente

Au point d'abscisse $a$, la tangente à la courbe de $f$ a pour équation :
$$y = f'(a)(x-a) + f(a)$$

## Position de la courbe par rapport à la tangente

> **Théorème :** soit $T$ la tangente à la courbe de $f$ au point d'abscisse $a$.
> - Si $f$ est **convexe** sur un intervalle contenant $a$, alors la courbe de $f$ est **au-dessus** de $T$ sur cet intervalle.
> - Si $f$ est **concave** sur un intervalle contenant $a$, alors la courbe de $f$ est **au-dessous** de $T$ sur cet intervalle.
> - En un **point d'inflexion**, la courbe **traverse** sa tangente : elle passe d'un côté à l'autre de $T$.

### Méthode pour étudier la position

Pour comparer $f(x)$ et la tangente $T(x) = f'(a)(x-a)+f(a)$, on étudie le signe de la différence $g(x) = f(x) - T(x)$ :

- si $g(x) \\geqslant 0$ sur un intervalle, la courbe est au-dessus de la tangente sur cet intervalle ;
- si $g(x) \\leqslant 0$, la courbe est au-dessous.

**Exemple :** pour $f(x) = x^2$, convexe sur $\\mathbb{R}$ ($f''(x)=2>0$), la courbe (une parabole) est toujours au-dessus de chacune de ses tangentes, en tout point.

> **Application classique :** l'inégalité de convexité $e^x \\geqslant x+1$ pour tout réel $x$ s'obtient ainsi : $f(x)=e^x$ est convexe sur $\\mathbb{R}$ ($f''(x)=e^x>0$), donc sa courbe est au-dessus de la tangente en $x=0$, qui a pour équation $y=x+1$ (car $f(0)=1$ et $f'(0)=1$).`,
        durationMinutes: 22,
        exercises: [
          {
            id: "cvx1-l3-e1",
            question: "Si une fonction est convexe sur un intervalle, sa courbe est, sur cet intervalle, par rapport à chacune de ses tangentes :",
            type: "mcq",
            options: [
              { id: "A", text: "Toujours au-dessus" },
              { id: "B", text: "Toujours au-dessous" },
              { id: "C", text: "Tantôt au-dessus, tantôt au-dessous" },
              { id: "D", text: "Confondue avec la tangente" },
            ],
            correctId: "A",
            explanation: "Une fonction convexe a une courbe entièrement située au-dessus de chacune de ses tangentes, par définition même de la convexité.",
            difficulty: "debutant",
          },
          {
            id: "cvx1-l3-e2",
            question: "En un point d'inflexion, la courbe d'une fonction traverse sa tangente.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est une conséquence du changement de convexité : la courbe passe d'un côté de la tangente à l'autre exactement au point d'inflexion.",
            difficulty: "debutant",
          },
          {
            id: "cvx1-l3-e3",
            question: "Démontre que pour tout réel $x$, $e^x \\geqslant x+1$, en utilisant la convexité de la fonction exponentielle.",
            type: "open",
            modelAnswer: "Soit $f(x)=e^x$. On a $f'(x)=e^x$ et $f''(x)=e^x$.\\n\\nComme $e^x>0$ pour tout réel $x$, on a $f''(x)>0$ sur $\\mathbb{R}$, donc $f$ est **convexe** sur $\\mathbb{R}$.\\n\\nLa tangente à la courbe de $f$ au point d'abscisse $0$ a pour équation :\\n$$y = f'(0)(x-0)+f(0) = 1\\times x + 1 = x+1$$\\n\\n(car $f(0)=e^0=1$ et $f'(0)=e^0=1$).\\n\\nComme $f$ est convexe sur $\\mathbb{R}$, sa courbe est entièrement au-dessus de chacune de ses tangentes, en particulier au-dessus de la tangente en $0$. Donc pour tout réel $x$ :\\n\\n$$f(x) \\geqslant x+1$$\\n\\n$$\\boxed{\\forall x \\in \\mathbb{R},\\ e^x \\geqslant x+1}$$",
            explanation: "On établit la convexité de l'exponentielle via $f''(x)=e^x>0$, on calcule l'équation de la tangente en $0$, puis on applique le théorème de position de la courbe par rapport à la tangente.",
            difficulty: "expert",
          },
          {
            id: "cvx1-l3-e4",
            question: "Soit $f(x) = x^3$. Détermine l'équation de la tangente $T$ à la courbe de $f$ au point d'abscisse $a=1$, puis étudie la position de la courbe par rapport à $T$ au voisinage de $x=1$.",
            type: "open",
            modelAnswer: "On a $f(x)=x^3$, donc $f'(x)=3x^2$ et $f''(x)=6x$.\\n\\n**Équation de la tangente en $a=1$ :** $f(1)=1$ et $f'(1)=3$, donc :\\n$$T: y = 3(x-1)+1 = 3x-2$$\\n\\n**Étude de la convexité au voisinage de $1$ :** $f''(x)=6x$ est strictement positif pour $x>0$, donc $f$ est convexe sur $]0;+\\infty[$, intervalle qui contient $a=1$.\\n\\nD'après le théorème de position, comme $f$ est convexe au voisinage de $x=1$, la courbe de $f$ est **au-dessus** de la tangente $T$ au voisinage de ce point.\\n\\nOn peut vérifier directement : $g(x)=f(x)-T(x) = x^3-3x+2 = (x-1)^2(x+2)$, qui est positif pour $x>-2$, donc en particulier au voisinage de $x=1$.\\n\\n$$\\boxed{T: y=3x-2,\\ \\text{courbe au-dessus de } T \\text{ au voisinage de } x=1}$$",
            explanation: "On calcule l'équation de la tangente avec $f(a)$ et $f'(a)$, on établit la convexité locale via $f''$, puis on conclut sur la position relative ; la factorisation de $g(x)$ confirme le résultat.",
            difficulty: "expert",
          },
          {
            id: "cvx1-l3-e5",
            question: "Pour la fonction $f(x)=\\ln(x)$ sur $]0;+\\infty[$, on a $f''(x) = -\\dfrac{1}{x^2}$. Que peut-on en déduire sur la position de la courbe par rapport à ses tangentes ?",
            type: "mcq",
            options: [
              { id: "A", text: "La courbe est toujours au-dessus de ses tangentes" },
              { id: "B", text: "La courbe est toujours au-dessous de ses tangentes" },
              { id: "C", text: "Il existe un point d'inflexion" },
              { id: "D", text: "On ne peut rien conclure" },
            ],
            correctId: "B",
            explanation: "Comme $f''(x)=-\\frac{1}{x^2}<0$ pour tout $x>0$, $f$ est concave sur $]0;+\\infty[$, donc sa courbe est toujours au-dessous de chacune de ses tangentes.",
            difficulty: "intermediaire",
          },
        ],
      },
    ],
  },
  {
    id: "exp1-id",
    slug: "fonction-exponentielle-terminale",
    title: "Fonction exponentielle",
    description: "Découvrir la fonction exponentielle, sa définition, ses propriétés algébriques, ses variations et les croissances comparées.",
    schoolLevel: "terminale",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "📊",
    lessons: [
      {
        id: "exp1-l1",
        slug: "definition-et-proprietes-de-l-exponentielle",
        title: "Définition et propriétés algébriques",
        content: `## Définition de la fonction exponentielle

> **Théorème (admis) :** il existe une unique fonction $f$ dérivable sur $\\mathbb{R}$ telle que $f' = f$ et $f(0)=1$. Cette fonction est appelée **fonction exponentielle**, notée $\\exp$ ou $x \\mapsto e^x$.

Donc, par définition :
$$\\exp'(x) = \\exp(x) \\quad \\text{et} \\quad \\exp(0) = 1$$

On note $e = \\exp(1) \\approx 2{,}718$ (un nombre irrationnel, base du logarithme népérien).

### Propriétés algébriques

Pour tous réels $a$ et $b$ :

$$e^{a+b} = e^a \\times e^b \\qquad e^{-a} = \\dfrac{1}{e^a} \\qquad e^{a-b} = \\dfrac{e^a}{e^b} \\qquad (e^a)^n = e^{na} \\ (n \\in \\mathbb{Z})$$

**Exemple :** $e^{3}\\times e^{-1} = e^{3-1} = e^2$.

> **Valeurs particulières :** $e^0 = 1$, et pour tout réel $x$, $e^x > 0$ (l'exponentielle ne s'annule jamais et reste toujours strictement positive).

### Équations et inéquations avec l'exponentielle

Comme $\\exp$ est strictement croissante (voir leçon suivante), elle est injective : pour tous réels $a,b$,
$$e^a = e^b \\iff a=b \\qquad\\qquad e^a < e^b \\iff a<b$$

**Exemple :** résoudre $e^{2x-1} = e^3$ équivaut à résoudre $2x-1=3$, soit $x=2$.`,
        durationMinutes: 22,
        exercises: [
          {
            id: "exp1-l1-e1",
            question: "Quelle est la valeur de $e^0$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$e$" },
              { id: "D", text: "Cela dépend" },
            ],
            correctId: "B",
            explanation: "Par définition de la fonction exponentielle, $\\exp(0)=1$, donc $e^0=1$.",
            difficulty: "debutant",
          },
          {
            id: "exp1-l1-e2",
            question: "Pour tout réel $x$, $e^x$ peut être négatif.",
            type: "true_false",
            correctId: "faux",
            explanation: "La fonction exponentielle est strictement positive sur $\\mathbb{R}$ : $e^x>0$ pour tout réel $x$, sans exception.",
            difficulty: "debutant",
          },
          {
            id: "exp1-l1-e3",
            question: "Simplifie l'expression $A = \\dfrac{e^{5}\\times e^{-2}}{e^{1}}$.",
            type: "open",
            modelAnswer: "On utilise les règles de calcul sur les exposants : $e^a\\times e^b = e^{a+b}$ et $\\dfrac{e^a}{e^b}=e^{a-b}$.\\n\\nD'abord le numérateur :\\n$$e^5\\times e^{-2} = e^{5+(-2)} = e^3$$\\n\\nPuis le quotient :\\n$$A = \\dfrac{e^3}{e^1} = e^{3-1} = e^2$$\\n\\n$$\\boxed{A = e^2}$$",
            explanation: "On applique successivement les règles $e^a\\times e^b=e^{a+b}$ puis $\\dfrac{e^a}{e^b}=e^{a-b}$ pour simplifier l'expression en une seule puissance de $e$.",
            difficulty: "intermediaire",
          },
          {
            id: "exp1-l1-e4",
            question: "Résous l'équation $e^{3x+2} = e^{x-4}$.",
            type: "open",
            modelAnswer: "Comme la fonction exponentielle est strictement croissante, donc injective, on a :\\n\\n$$e^{3x+2} = e^{x-4} \\iff 3x+2 = x-4$$\\n\\nOn résout cette équation du premier degré :\\n$$3x+2 = x-4$$\\n$$3x - x = -4-2$$\\n$$2x = -6$$\\n$$x = -3$$\\n\\n$$\\boxed{x=-3}$$",
            explanation: "On utilise le fait que $e^a=e^b \\iff a=b$ pour transformer l'équation exponentielle en une simple équation affine.",
            difficulty: "intermediaire",
          },
          {
            id: "exp1-l1-e5",
            question: "Résous l'inéquation $e^{2x-1} \\leqslant e^{3}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$x \\leqslant 2$" },
              { id: "B", text: "$x \\geqslant 2$" },
              { id: "C", text: "$x \\leqslant -2$" },
              { id: "D", text: "$x \\leqslant 4$" },
            ],
            correctId: "A",
            explanation: "Comme $\\exp$ est strictement croissante, $e^{2x-1}\\leqslant e^3 \\iff 2x-1\\leqslant 3 \\iff 2x\\leqslant 4 \\iff x\\leqslant 2$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "exp1-l2",
        slug: "variations-et-limites-de-l-exponentielle",
        title: "Variations et limites de l'exponentielle",
        content: `## Sens de variation

Comme $\\exp'(x) = \\exp(x) > 0$ pour tout réel $x$, la fonction exponentielle est **strictement croissante** sur $\\mathbb{R}$.

| $x$ | $-\\infty$ | | $+\\infty$ |
|---|---|---|---|
| $\\exp'(x)=\\exp(x)$ | | $+$ | |
| $\\exp(x)$ | $0$ | $\\nearrow$ | $+\\infty$ |

## Limites aux bornes

$$\\lim_{x\\to+\\infty} e^x = +\\infty \\qquad\\qquad \\lim_{x\\to-\\infty} e^x = 0$$

La droite $y=0$ (l'axe des abscisses) est donc **asymptote horizontale** à la courbe de $\\exp$ en $-\\infty$.

## Dérivée de $e^{u(x)}$

> **Formule :** $\\left(e^{u(x)}\\right)' = u'(x)\\times e^{u(x)}$

**Exemple :** $f(x) = e^{-3x+1}$. On pose $u(x)=-3x+1$, donc $u'(x)=-3$ :
$$f'(x) = -3e^{-3x+1}$$

Comme $e^{u(x)}>0$ toujours, le signe de $f'(x)$ est celui de $u'(x)$ : ici $f'(x)<0$ pour tout $x$, donc $f$ est strictement décroissante sur $\\mathbb{R}$.

## Croissances comparées (admis)

> **Théorème (croissances comparées) :** pour tout entier $n$,
> $$\\lim_{x\\to+\\infty} \\dfrac{e^x}{x^n} = +\\infty \\qquad\\qquad \\lim_{x\\to-\\infty} x^n e^x = 0$$

Cela signifie que **l'exponentielle "l'emporte" toujours sur les puissances de $x$** quand $x\\to+\\infty$ : même si $x^n$ devient très grand, $e^x$ devient encore bien plus grand.

**Exemple d'application :** $\\lim_{x\\to+\\infty}\\dfrac{e^x}{x^2} = +\\infty$ et $\\lim_{x\\to-\\infty} x^2e^x = 0$.`,
        durationMinutes: 26,
        exercises: [
          {
            id: "exp1-l2-e1",
            question: "Quelle est la limite de $e^x$ quand $x \\to -\\infty$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$-\\infty$" },
              { id: "B", text: "$0$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$+\\infty$" },
            ],
            correctId: "B",
            explanation: "On a $\\lim_{x\\to-\\infty} e^x = 0$ : c'est une limite usuelle à connaître, qui donne l'asymptote horizontale $y=0$ en $-\\infty$.",
            difficulty: "debutant",
          },
          {
            id: "exp1-l2-e2",
            question: "La fonction exponentielle est strictement croissante sur $\\mathbb{R}$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Comme $\\exp'(x)=\\exp(x)>0$ pour tout réel $x$, la fonction exponentielle est bien strictement croissante sur tout $\\mathbb{R}$.",
            difficulty: "debutant",
          },
          {
            id: "exp1-l2-e3",
            question: "Calcule la dérivée de $f(x) = e^{x^2}$.",
            type: "open",
            modelAnswer: "On pose $u(x)=x^2$, donc $u'(x)=2x$. On applique la formule $\\left(e^{u(x)}\\right)' = u'(x)\\times e^{u(x)}$ :\\n\\n$$f'(x) = 2x\\times e^{x^2}$$\\n\\n$$\\boxed{f'(x) = 2xe^{x^2}}$$",
            explanation: "On applique directement la formule de dérivation de la composée avec l'exponentielle, en identifiant $u(x)=x^2$.",
            difficulty: "intermediaire",
          },
          {
            id: "exp1-l2-e4",
            question: "Déterminer $\\lim_{x\\to+\\infty} (x^2 - e^x)$. Justifie ta réponse en utilisant les croissances comparées.",
            type: "open",
            modelAnswer: "On a $\\lim x^2 = +\\infty$ et $\\lim e^x = +\\infty$, donc on est face à la forme indéterminée $+\\infty - \\infty$.\\n\\nOn factorise par $e^x$ :\\n\\n$$x^2 - e^x = e^x\\left(\\dfrac{x^2}{e^x} - 1\\right)$$\\n\\nD'après le théorème des croissances comparées, $\\lim_{x\\to+\\infty} \\dfrac{e^x}{x^2} = +\\infty$, donc par passage à l'inverse :\\n\\n$$\\lim_{x\\to+\\infty} \\dfrac{x^2}{e^x} = 0$$\\n\\nDonc $\\dfrac{x^2}{e^x} - 1 \\to -1$ quand $x\\to+\\infty$.\\n\\nOr $\\lim_{x\\to+\\infty} e^x = +\\infty$.\\n\\nPar produit des limites ($+\\infty \\times (-1)$) :\\n\\n$$\\lim_{x\\to+\\infty}(x^2-e^x) = -\\infty$$\\n\\n$$\\boxed{\\lim_{x\\to+\\infty}(x^2-e^x) = -\\infty}$$",
            explanation: "On factorise par le terme exponentiel dominant pour lever l'indétermination, en utilisant le théorème des croissances comparées qui garantit que l'exponentielle l'emporte sur $x^2$.",
            difficulty: "expert",
          },
          {
            id: "exp1-l2-e5",
            question: "Quelle est la limite de $x e^x$ quand $x \\to -\\infty$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$-\\infty$" },
              { id: "B", text: "$+\\infty$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "C",
            explanation: "D'après le théorème des croissances comparées, $\\lim_{x\\to-\\infty} x^n e^x = 0$ pour tout entier $n$, donc en particulier pour $n=1$, $\\lim_{x\\to-\\infty} xe^x = 0$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "exp1-l3",
        slug: "etude-de-fonctions-avec-exponentielle",
        title: "Étude de fonctions avec l'exponentielle",
        content: `## Méthode générale d'étude d'une fonction avec exponentielle

1. Déterminer l'ensemble de définition (l'exponentielle est définie sur $\\mathbb{R}$ tout entier, donc souvent $D_f=\\mathbb{R}$).
2. Calculer les limites aux bornes de l'ensemble de définition.
3. Calculer la dérivée $f'(x)$, souvent en factorisant par un terme exponentiel (toujours strictement positif), pour faciliter l'étude du signe.
4. Étudier le signe de $f'(x)$ et dresser le tableau de variations.
5. En déduire les extremums éventuels.

### Exemple détaillé

Soit $f(x) = xe^{-x}$ sur $\\mathbb{R}$.

**Dérivée :** par la formule du produit, avec $u(x)=x$ ($u'=1$) et $v(x)=e^{-x}$ ($v'(x)=-e^{-x}$) :
$$f'(x) = 1\\times e^{-x} + x\\times(-e^{-x}) = e^{-x}(1-x)$$

**Signe de $f'(x)$ :** comme $e^{-x}>0$ toujours, le signe de $f'(x)$ est celui de $(1-x)$ :
- $f'(x)>0$ pour $x<1$ ;
- $f'(x)<0$ pour $x>1$.

**Tableau de variations :** $f$ est croissante sur $]-\\infty;1]$ puis décroissante sur $[1;+\\infty[$. Elle admet donc un **maximum** en $x=1$, valant $f(1)=1\\times e^{-1}=\\dfrac{1}{e}$.

**Limites :** $\\lim_{x\\to-\\infty}f(x)=-\\infty$ (croissances comparées : $xe^{-x}=-(-x)e^{-x}\\to-\\infty$... en pratique on pose $X=-x\\to+\\infty$ et $xe^{-x}=-Xe^X \\to -\\infty$), et $\\lim_{x\\to+\\infty}f(x)=0$ (croissances comparées directement).

> **Astuce de calcul :** factoriser systématiquement par le terme exponentiel commun simplifie grandement l'étude du signe, car $e^{u(x)}$ ne change jamais de signe.`,
        durationMinutes: 26,
        exercises: [
          {
            id: "exp1-l3-e1",
            question: "Dans l'étude du signe de $f'(x) = e^{-x}(1-x)$, pourquoi peut-on se contenter d'étudier le signe de $(1-x)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Parce que $e^{-x}$ est toujours négatif" },
              { id: "B", text: "Parce que $e^{-x}$ est toujours strictement positif" },
              { id: "C", text: "Parce que $e^{-x}$ vaut toujours $1$" },
              { id: "D", text: "Ce n'est pas possible, il faut étudier les deux facteurs" },
            ],
            correctId: "B",
            explanation: "Comme l'exponentielle est toujours strictement positive, elle ne change jamais le signe du produit : seul le signe de l'autre facteur compte.",
            difficulty: "debutant",
          },
          {
            id: "exp1-l3-e2",
            question: "La fonction $f(x) = xe^{-x}$ admet un maximum en $x=1$ valant $\\dfrac{1}{e}$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est exactement le résultat établi dans le cours : $f$ croît puis décroît, avec un maximum en $x=1$ où $f(1)=e^{-1}=\\frac1e$.",
            difficulty: "debutant",
          },
          {
            id: "exp1-l3-e3",
            question: "Soit $f(x) = (x-2)e^x$. Calcule $f'(x)$ et factorise le résultat.",
            type: "open",
            modelAnswer: "On utilise la formule du produit avec $u(x)=x-2$ ($u'(x)=1$) et $v(x)=e^x$ ($v'(x)=e^x$) :\\n\\n$$f'(x) = u'(x)v(x) + u(x)v'(x) = 1\\times e^x + (x-2)\\times e^x$$\\n\\nOn factorise par $e^x$ :\\n\\n$$f'(x) = e^x\\left(1 + x - 2\\right) = e^x(x-1)$$\\n\\n$$\\boxed{f'(x) = e^x(x-1)}$$",
            explanation: "On applique la formule de dérivation d'un produit, puis on factorise systématiquement par le terme exponentiel commun pour simplifier l'expression.",
            difficulty: "intermediaire",
          },
          {
            id: "exp1-l3-e4",
            question: "Pour la fonction $f(x) = (x-2)e^x$ de l'exercice précédent (avec $f'(x)=e^x(x-1)$), dresse le tableau de variations de $f$ sur $\\mathbb{R}$ et donne la valeur de l'éventuel extremum.",
            type: "open",
            modelAnswer: "On a établi $f'(x) = e^x(x-1)$.\\n\\n**Signe de $f'(x)$ :** comme $e^x>0$ toujours, le signe de $f'(x)$ est celui de $(x-1)$ :\\n- pour $x<1$ : $f'(x)<0$, donc $f$ est strictement décroissante ;\\n- pour $x>1$ : $f'(x)>0$, donc $f$ est strictement croissante.\\n\\n**Tableau de variations :** $f$ décroît sur $]-\\infty;1]$ puis croît sur $[1;+\\infty[$. Elle admet donc un **minimum** en $x=1$.\\n\\n**Valeur du minimum :**\\n$$f(1) = (1-2)e^1 = -e$$\\n\\n**Limites :** quand $x\\to-\\infty$, par croissances comparées $(x-2)e^x \\to 0$ (le terme polynomial est dominé par l'exponentielle qui tend vers $0$). Quand $x\\to+\\infty$, $(x-2)\\to+\\infty$ et $e^x\\to+\\infty$, donc par produit $f(x)\\to+\\infty$.\\n\\n$$\\boxed{f \\text{ admet un minimum global en } x=1,\\ \\text{valant } f(1)=-e}$$",
            explanation: "On étudie le signe de $f'$ grâce au facteur exponentiel toujours positif, on en déduit les variations, puis on calcule la valeur exacte du minimum et les limites aux bornes en utilisant les croissances comparées.",
            difficulty: "expert",
          },
          {
            id: "exp1-l3-e5",
            question: "Soit $f(x) = e^{x}-x-1$. On donne $f'(x) = e^x - 1$. Quel est le signe de $f'(x)$ sur $\\mathbb{R}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$f'(x) \\geqslant 0$ pour $x\\geqslant 0$ et $f'(x)\\leqslant 0$ pour $x\\leqslant 0$" },
              { id: "B", text: "$f'(x)$ est toujours positif" },
              { id: "C", text: "$f'(x)$ est toujours négatif" },
              { id: "D", text: "$f'(x)$ ne s'annule jamais" },
            ],
            correctId: "A",
            explanation: "$f'(x)=e^x-1$ s'annule quand $e^x=1$, soit $x=0$ ; comme $\\exp$ est croissante, $e^x\\geqslant1 \\iff x\\geqslant0$, donc $f'(x)\\geqslant0$ pour $x\\geqslant0$ et $f'(x)\\leqslant0$ pour $x\\leqslant0$.",
            difficulty: "intermediaire",
          },
        ],
      },
    ],
  },
  {
    id: "lnt1-id",
    slug: "fonction-logarithme-terminale",
    title: "Fonction logarithme népérien",
    description: "Découvrir la fonction logarithme népérien comme réciproque de l'exponentielle, ses propriétés algébriques, sa dérivée et ses limites usuelles.",
    schoolLevel: "terminale",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "🔢",
    lessons: [
      {
        id: "lnt1-l1",
        slug: "definition-et-proprietes-du-logarithme",
        title: "Définition et propriétés algébriques",
        content: `## Définition du logarithme népérien

> **Définition :** la fonction logarithme népérien, notée $\\ln$, est la fonction **réciproque** de la fonction exponentielle. Elle est définie sur $]0;+\\infty[$ et vérifie :
> $$\\ln(e^x) = x \\text{ pour tout } x \\in \\mathbb{R} \\qquad\\qquad e^{\\ln(x)} = x \\text{ pour tout } x>0$$

En particulier : $\\ln(1) = 0$ (car $e^0=1$) et $\\ln(e) = 1$ (car $e^1=e$).

> **Conséquence graphique :** les courbes de $\\exp$ et $\\ln$ sont symétriques par rapport à la droite d'équation $y=x$.

### Propriétés algébriques

Pour tous réels $a,b>0$ et tout entier $n$ :

$$\\ln(ab) = \\ln(a)+\\ln(b) \\qquad \\ln\\left(\\dfrac{a}{b}\\right) = \\ln(a)-\\ln(b) \\qquad \\ln\\left(\\dfrac{1}{a}\\right) = -\\ln(a) \\qquad \\ln(a^n) = n\\ln(a) \\qquad \\ln(\\sqrt{a}) = \\dfrac{1}{2}\\ln(a)$$

**Exemple :** $\\ln(8) = \\ln(2^3) = 3\\ln(2)$.

### Équations et inéquations avec le logarithme

Comme $\\ln$ est strictement croissante sur $]0;+\\infty[$ (donc injective), pour tous réels $a,b>0$ :
$$\\ln(a)=\\ln(b) \\iff a=b \\qquad\\qquad \\ln(a)<\\ln(b) \\iff a<b$$

> **Attention :** le logarithme n'est défini que pour des nombres **strictement positifs**. Avant de résoudre toute équation avec $\\ln$, il faut toujours vérifier le domaine de validité.

**Exemple :** résoudre $\\ln(x+1) = \\ln(5)$ nécessite $x+1>0$, soit $x>-1$ ; sous cette condition, l'équation équivaut à $x+1=5$, soit $x=4$ (qui vérifie bien $x>-1$).`,
        durationMinutes: 24,
        exercises: [
          {
            id: "lnt1-l1-e1",
            question: "Quelle est la valeur de $\\ln(1)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$0$" },
              { id: "C", text: "$e$" },
              { id: "D", text: "Non définie" },
            ],
            correctId: "B",
            explanation: "Comme $e^0=1$, on a $\\ln(1)=0$ par définition de la réciproque de l'exponentielle.",
            difficulty: "debutant",
          },
          {
            id: "lnt1-l1-e2",
            question: "Le logarithme népérien est défini pour tous les nombres réels, y compris les négatifs.",
            type: "true_false",
            correctId: "faux",
            explanation: "La fonction $\\ln$ n'est définie que sur $]0;+\\infty[$, c'est-à-dire uniquement pour les réels strictement positifs.",
            difficulty: "debutant",
          },
          {
            id: "lnt1-l1-e3",
            question: "Simplifie l'expression $B = \\ln(12) - \\ln(3)$.",
            type: "open",
            modelAnswer: "On utilise la propriété $\\ln(a)-\\ln(b) = \\ln\\left(\\dfrac{a}{b}\\right)$ :\\n\\n$$B = \\ln(12)-\\ln(3) = \\ln\\left(\\dfrac{12}{3}\\right) = \\ln(4)$$\\n\\nOn peut aussi écrire $\\ln(4)=\\ln(2^2)=2\\ln(2)$.\\n\\n$$\\boxed{B = \\ln(4) = 2\\ln(2)}$$",
            explanation: "On applique la règle de transformation d'une différence de logarithmes en logarithme d'un quotient, puis on simplifie en utilisant $4=2^2$.",
            difficulty: "intermediaire",
          },
          {
            id: "lnt1-l1-e4",
            question: "Résous l'équation $\\ln(2x-3) = \\ln(7)$, en vérifiant les conditions de validité.",
            type: "open",
            modelAnswer: "**Condition de validité :** il faut que $2x-3>0$, soit $x>\\dfrac{3}{2}$.\\n\\n**Résolution :** comme $\\ln$ est injective sur $]0;+\\infty[$ :\\n\\n$$\\ln(2x-3)=\\ln(7) \\iff 2x-3=7$$\\n\\n$$2x = 10$$\\n$$x=5$$\\n\\n**Vérification de la condition :** $5 > \\dfrac{3}{2}$, donc cette solution est valide.\\n\\n$$\\boxed{x=5}$$",
            explanation: "On commence toujours par poser la condition d'existence du logarithme avant de résoudre, puis on utilise l'injectivité de $\\ln$ pour transformer l'équation, et on vérifie enfin que la solution respecte la condition initiale.",
            difficulty: "intermediaire",
          },
          {
            id: "lnt1-l1-e5",
            question: "Pour quelles valeurs de $x$ l'expression $\\ln(5-x)$ est-elle définie ?",
            type: "mcq",
            options: [
              { id: "A", text: "$x < 5$" },
              { id: "B", text: "$x > 5$" },
              { id: "C", text: "$x \\leqslant 5$" },
              { id: "D", text: "Tous les réels" },
            ],
            correctId: "A",
            explanation: "Il faut que l'argument du logarithme soit strictement positif : $5-x>0 \\iff x<5$.",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "lnt1-l2",
        slug: "derivee-et-variations-du-logarithme",
        title: "Dérivée et variations du logarithme",
        content: `## Dérivée de la fonction logarithme

> **Propriété :** la fonction $\\ln$ est dérivable sur $]0;+\\infty[$ et :
> $$\\ln'(x) = \\dfrac{1}{x}$$

Comme $\\dfrac{1}{x}>0$ pour tout $x>0$, la fonction $\\ln$ est **strictement croissante** sur $]0;+\\infty[$.

## Dérivée de $\\ln(u(x))$

> **Formule :** pour $u(x)>0$, $\\left(\\ln(u(x))\\right)' = \\dfrac{u'(x)}{u(x)}$

**Exemple :** $f(x) = \\ln(2x+5)$, définie pour $2x+5>0$ soit $x>-\\dfrac{5}{2}$. On pose $u(x)=2x+5$, $u'(x)=2$ :
$$f'(x) = \\dfrac{2}{2x+5}$$

## Limites usuelles du logarithme

$$\\lim_{x\\to+\\infty} \\ln(x) = +\\infty \\qquad\\qquad \\lim_{x\\to 0^+} \\ln(x) = -\\infty$$

La droite $x=0$ est donc **asymptote verticale** à la courbe de $\\ln$.

> **Croissances comparées avec le logarithme (admis) :**
> $$\\lim_{x\\to+\\infty} \\dfrac{\\ln(x)}{x} = 0 \\qquad\\qquad \\lim_{x\\to0^+} x\\ln(x) = 0$$

Cela signifie que **$\\ln(x)$ "perd" toujours face à $x$** : même si $\\ln(x)\\to+\\infty$, il le fait beaucoup plus lentement que $x$ lui-même.

### Tableau de variations de $\\ln$

| $x$ | $0$ | | $+\\infty$ |
|---|---|---|---|
| $\\ln'(x)=\\frac1x$ | | $+$ | |
| $\\ln(x)$ | $-\\infty$ | $\\nearrow$ | $+\\infty$ |`,
        durationMinutes: 24,
        exercises: [
          {
            id: "lnt1-l2-e1",
            question: "Quelle est la dérivée de la fonction $\\ln$ sur $]0;+\\infty[$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\ln(x)$" },
              { id: "B", text: "$\\dfrac{1}{x}$" },
              { id: "C", text: "$e^x$" },
              { id: "D", text: "$x$" },
            ],
            correctId: "B",
            explanation: "C'est la propriété fondamentale : $\\ln'(x) = \\dfrac{1}{x}$ pour tout $x>0$.",
            difficulty: "debutant",
          },
          {
            id: "lnt1-l2-e2",
            question: "La limite de $\\ln(x)$ quand $x \\to 0^+$ est $-\\infty$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est une limite usuelle : quand $x$ se rapproche de $0$ par valeurs positives, $\\ln(x)$ tend vers $-\\infty$, donnant l'asymptote verticale $x=0$.",
            difficulty: "debutant",
          },
          {
            id: "lnt1-l2-e3",
            question: "Calcule la dérivée de $f(x) = \\ln(3x-1)$ et précise son ensemble de définition.",
            type: "open",
            modelAnswer: "**Ensemble de définition :** il faut $3x-1>0$, soit $x>\\dfrac{1}{3}$. Donc $D_f = \\left]\\dfrac{1}{3};+\\infty\\right[$.\\n\\n**Dérivée :** on pose $u(x)=3x-1$, donc $u'(x)=3$. On applique $\\left(\\ln(u)\\right)'=\\dfrac{u'}{u}$ :\\n\\n$$f'(x) = \\dfrac{3}{3x-1}$$\\n\\n$$\\boxed{f'(x) = \\dfrac{3}{3x-1} \\text{ sur } \\left]\\dfrac{1}{3};+\\infty\\right[}$$",
            explanation: "On vérifie d'abord le domaine de définition du logarithme, puis on applique la formule de dérivation de la composée avec $u(x)=3x-1$.",
            difficulty: "intermediaire",
          },
          {
            id: "lnt1-l2-e4",
            question: "Soit $f(x) = x - \\ln(x)$ sur $]0;+\\infty[$. Calcule $f'(x)$, étudie son signe et dresse le tableau de variations de $f$.",
            type: "open",
            modelAnswer: "**Dérivée :** $f'(x) = 1 - \\dfrac{1}{x}$, que l'on peut réécrire au même dénominateur :\\n\\n$$f'(x) = \\dfrac{x-1}{x}$$\\n\\n**Signe de $f'(x)$ :** sur $]0;+\\infty[$, le dénominateur $x$ est toujours positif, donc le signe de $f'(x)$ est celui de $(x-1)$ :\\n- pour $0<x<1$ : $f'(x)<0$, donc $f$ est strictement décroissante ;\\n- pour $x>1$ : $f'(x)>0$, donc $f$ est strictement croissante.\\n\\n**Tableau de variations :** $f$ décroît sur $]0;1]$ puis croît sur $[1;+\\infty[$. Elle admet donc un **minimum** en $x=1$.\\n\\n**Valeur du minimum :** $f(1) = 1 - \\ln(1) = 1 - 0 = 1$.\\n\\n**Limites :** $\\lim_{x\\to0^+} f(x) = +\\infty$ (car $-\\ln(x)\\to+\\infty$ et $x\\to0$) ; $\\lim_{x\\to+\\infty} f(x) = +\\infty$ (car $x$ domine $\\ln(x)$ par croissances comparées).\\n\\n$$\\boxed{f \\text{ admet un minimum global en } x=1,\\ \\text{valant } f(1)=1}$$",
            explanation: "On met la dérivée au même dénominateur pour faciliter l'étude du signe, on en déduit les variations, puis on calcule la valeur exacte du minimum et les limites en utilisant les croissances comparées.",
            difficulty: "expert",
          },
          {
            id: "lnt1-l2-e5",
            question: "Quelle est la limite de $\\dfrac{\\ln(x)}{x}$ quand $x \\to +\\infty$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$+\\infty$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$-\\infty$" },
            ],
            correctId: "C",
            explanation: "D'après le théorème des croissances comparées, $\\ln(x)$ croît beaucoup plus lentement que $x$, donc $\\lim_{x\\to+\\infty}\\dfrac{\\ln(x)}{x}=0$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "lnt1-l3",
        slug: "equations-et-applications-du-logarithme",
        title: "Équations, inéquations et applications",
        content: `## Résoudre des équations avec exponentielle et logarithme

### Passer de $\\ln$ à $\\exp$

Pour résoudre une équation du type $\\ln(x) = k$ (avec $k$ un réel donné), on applique l'exponentielle aux deux membres :
$$\\ln(x) = k \\iff x = e^k$$

**Exemple :** $\\ln(x) = 2 \\iff x = e^2$.

### Passer de $\\exp$ à $\\ln$

Pour résoudre une équation du type $e^x = k$ (avec $k>0$), on applique le logarithme aux deux membres :
$$e^x = k \\iff x = \\ln(k) \\quad (k>0)$$

**Exemple :** $e^x = 5 \\iff x = \\ln(5)$. Si $k \\leqslant 0$, l'équation $e^x=k$ n'a **aucune solution** car $e^x>0$ toujours.

### Méthode générale pour une équation mêlant les deux

1. Identifier le domaine de validité (arguments des $\\ln$ strictement positifs).
2. Isoler le terme en $\\ln$ ou en $\\exp$.
3. Appliquer $\\exp$ ou $\\ln$ selon le cas pour "défaire" la fonction.
4. Résoudre l'équation résultante, puis vérifier que la solution appartient au domaine de validité.

**Exemple complet :** résoudre $2\\ln(x) - 3 = 1$ sur $]0;+\\infty[$.
$$2\\ln(x) = 4 \\implies \\ln(x) = 2 \\implies x = e^2$$

Comme $e^2 > 0$, cette solution est valide.

### Application : modélisation et croissance

Le couple exponentielle/logarithme intervient naturellement dans les modèles de croissance ou décroissance (population, désintégration radioactive, refroidissement). Une équation de la forme $e^{kt} = c$ se résout en isolant $t = \\dfrac{\\ln(c)}{k}$, ce qui permet par exemple de déterminer un "temps caractéristique" (demi-vie, doublement, etc.).`,
        durationMinutes: 24,
        exercises: [
          {
            id: "lnt1-l3-e1",
            question: "L'équation $e^x = -3$ admet :",
            type: "mcq",
            options: [
              { id: "A", text: "Une unique solution $x=\\ln(-3)$" },
              { id: "B", text: "Deux solutions" },
              { id: "C", text: "Aucune solution" },
              { id: "D", text: "Une infinité de solutions" },
            ],
            correctId: "C",
            explanation: "Comme $e^x>0$ pour tout réel $x$, l'équation $e^x=-3$ n'a aucune solution (un nombre négatif ne peut jamais être atteint par l'exponentielle).",
            difficulty: "debutant",
          },
          {
            id: "lnt1-l3-e2",
            question: "L'équation $\\ln(x) = 3$ équivaut à $x = e^3$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "En appliquant l'exponentielle aux deux membres de $\\ln(x)=3$, on obtient $x=e^3$ (et $e^3>0$, donc cette solution est valide).",
            difficulty: "debutant",
          },
          {
            id: "lnt1-l3-e3",
            question: "Résous l'équation $3e^x - 1 = 5$.",
            type: "open",
            modelAnswer: "On isole le terme exponentiel :\\n\\n$$3e^x = 6$$\\n$$e^x = 2$$\\n\\nComme $2>0$, on peut appliquer le logarithme aux deux membres :\\n\\n$$x = \\ln(2)$$\\n\\n$$\\boxed{x = \\ln(2)}$$",
            explanation: "On isole d'abord l'exponentielle, puis on applique le logarithme népérien (la réciproque de l'exponentielle) pour résoudre, en vérifiant que le second membre est strictement positif.",
            difficulty: "intermediaire",
          },
          {
            id: "lnt1-l3-e4",
            question: "Une quantité de substance radioactive suit la loi $N(t) = N_0 e^{-0{,}1t}$ où $t$ est le temps en années. Déterminer la demi-vie $T$ de la substance, c'est-à-dire la valeur de $t$ pour laquelle $N(t) = \\dfrac{N_0}{2}$.",
            type: "open",
            modelAnswer: "On cherche $T$ tel que $N(T) = \\dfrac{N_0}{2}$, c'est-à-dire :\\n\\n$$N_0 e^{-0{,}1T} = \\dfrac{N_0}{2}$$\\n\\nOn divise les deux membres par $N_0 \\neq 0$ :\\n\\n$$e^{-0{,}1T} = \\dfrac{1}{2}$$\\n\\nComme $\\dfrac{1}{2}>0$, on applique le logarithme népérien aux deux membres :\\n\\n$$-0{,}1T = \\ln\\left(\\dfrac{1}{2}\\right) = -\\ln(2)$$\\n\\nOn isole $T$ :\\n\\n$$T = \\dfrac{-\\ln(2)}{-0{,}1} = \\dfrac{\\ln(2)}{0{,}1} = 10\\ln(2)$$\\n\\nNumériquement, $\\ln(2)\\approx0{,}693$, donc $T \\approx 6{,}93$ années.\\n\\n$$\\boxed{T = 10\\ln(2) \\approx 6{,}93 \\text{ ans}}$$",
            explanation: "On isole le terme exponentiel, on applique le logarithme népérien en utilisant $\\ln(1/2)=-\\ln(2)$, puis on résout l'équation affine en $T$ pour obtenir la demi-vie exacte puis sa valeur approchée.",
            difficulty: "expert",
          },
          {
            id: "lnt1-l3-e5",
            question: "Résous l'équation $\\ln(x+2) + \\ln(x-1) = \\ln(4)$ sur son domaine de validité.",
            type: "mcq",
            options: [
              { id: "A", text: "$x=2$" },
              { id: "B", text: "$x=-3$ et $x=2$" },
              { id: "C", text: "$x=3$" },
              { id: "D", text: "Aucune solution" },
            ],
            correctId: "A",
            explanation: "Domaine : $x>-2$ et $x>1$, donc $x>1$. On regroupe : $\\ln((x+2)(x-1))=\\ln(4) \\iff x^2+x-2=4 \\iff x^2+x-6=0$, qui a pour solutions $x=2$ et $x=-3$. Seul $x=2$ vérifie $x>1$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  {
    id: "pin1-id",
    slug: "probabilites-conditionnelles-terminale",
    title: "Probabilités conditionnelles et indépendance",
    description: "Approfondir les probabilités conditionnelles, l'indépendance d'événements, les arbres pondérés à plusieurs niveaux et la formule des probabilités totales.",
    schoolLevel: "terminale",
    subject: "probabilites",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "🎲",
    lessons: [
      {
        id: "pin1-l1",
        slug: "probabilite-conditionnelle-rappels",
        title: "Probabilité conditionnelle : rappels et approfondissement",
        content: `## Rappel de la définition

> **Définition :** soit $A$ et $B$ deux événements d'un même univers, avec $P(A) \\neq 0$. La probabilité de $B$ **sachant** $A$, notée $P_A(B)$, est définie par :
> $$P_A(B) = \\dfrac{P(A\\cap B)}{P(A)}$$

On en déduit la **formule des probabilités composées** :
$$P(A\\cap B) = P(A) \\times P_A(B)$$

### Propriétés de $P_A$

La fonction $P_A$ se comporte comme une probabilité sur l'univers réduit à $A$ :

- $P_A(\\overline{B}) = 1 - P_A(B)$ (probabilité de l'événement contraire, sachant $A$) ;
- $0 \\leqslant P_A(B) \\leqslant 1$ ;
- pour deux événements $B$ et $C$ incompatibles, $P_A(B \\cup C) = P_A(B) + P_A(C)$.

**Exemple :** dans une classe, $60\\%$ des élèves pratiquent un sport ($S$), et parmi les sportifs, $80\\%$ ont la moyenne en mathématiques ($M$). On a $P(S)=0{,}6$ et $P_S(M)=0{,}8$.

$$P(S\\cap M) = P(S)\\times P_S(M) = 0{,}6\\times0{,}8 = 0{,}48$$

Donc $48\\%$ des élèves de la classe sont à la fois sportifs et ont la moyenne en mathématiques.

> **Attention à ne pas confondre :** $P_A(B)$ (probabilité de $B$ sachant $A$) et $P_B(A)$ (probabilité de $A$ sachant $B$) sont en général **différentes**.`,
        durationMinutes: 22,
        exercises: [
          {
            id: "pin1-l1-e1",
            question: "La formule des probabilités composées s'écrit :",
            type: "mcq",
            options: [
              { id: "A", text: "$P(A\\cap B) = P(A)+P(B)$" },
              { id: "B", text: "$P(A\\cap B) = P(A)\\times P_A(B)$" },
              { id: "C", text: "$P(A\\cap B) = P_A(B)$" },
              { id: "D", text: "$P(A\\cap B) = \\dfrac{P(A)}{P(B)}$" },
            ],
            correctId: "B",
            explanation: "C'est la formule directement issue de la définition de la probabilité conditionnelle : $P(A\\cap B)=P(A)\\times P_A(B)$.",
            difficulty: "debutant",
          },
          {
            id: "pin1-l1-e2",
            question: "En général, $P_A(B)$ est égale à $P_B(A)$.",
            type: "true_false",
            correctId: "faux",
            explanation: "$P_A(B)$ et $P_B(A)$ sont en général différentes ; elles ne coïncident que dans des cas particuliers (notamment si $P(A)=P(B)$).",
            difficulty: "debutant",
          },
          {
            id: "pin1-l1-e3",
            question: "Sachant que $P(A) = 0{,}4$ et $P(A\\cap B) = 0{,}12$, calcule $P_A(B)$.",
            type: "open",
            modelAnswer: "On utilise la formule de définition de la probabilité conditionnelle :\\n\\n$$P_A(B) = \\dfrac{P(A\\cap B)}{P(A)}$$\\n\\nOn remplace par les valeurs données :\\n\\n$$P_A(B) = \\dfrac{0{,}12}{0{,}4} = 0{,}3$$\\n\\n$$\\boxed{P_A(B) = 0{,}3}$$",
            explanation: "On applique directement la formule $P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$ avec les données numériques de l'énoncé.",
            difficulty: "debutant",
          },
          {
            id: "pin1-l1-e4",
            question: "Dans un lycée, $70\\%$ des élèves sont en filière générale ($G$). Parmi eux, $30\\%$ suivent l'option mathématiques expertes ($E$). Calcule la probabilité qu'un élève pris au hasard soit en filière générale ET suive l'option mathématiques expertes.",
            type: "open",
            modelAnswer: "On modélise la situation avec $P(G) = 0{,}7$ (probabilité d'être en filière générale) et $P_G(E) = 0{,}3$ (probabilité de suivre l'option, sachant qu'on est en filière générale).\\n\\nOn applique la formule des probabilités composées :\\n\\n$$P(G\\cap E) = P(G) \\times P_G(E)$$\\n\\n$$P(G\\cap E) = 0{,}7 \\times 0{,}3 = 0{,}21$$\\n\\n$$\\boxed{P(G\\cap E) = 0{,}21}$$",
            explanation: "On traduit l'énoncé en termes de probabilité conditionnelle, puis on applique la formule des probabilités composées pour obtenir la probabilité de l'intersection.",
            difficulty: "intermediaire",
          },
          {
            id: "pin1-l1-e5",
            question: "Si $P_A(B) = 0{,}25$, que vaut $P_A(\\overline{B})$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}25$" },
              { id: "B", text: "$0{,}5$" },
              { id: "C", text: "$0{,}75$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "C",
            explanation: "On utilise la propriété $P_A(\\overline B) = 1-P_A(B) = 1-0{,}25=0{,}75$.",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "pin1-l2",
        slug: "independance-d-evenements",
        title: "Indépendance de deux événements",
        content: `## Définition de l'indépendance

> **Définition :** deux événements $A$ et $B$ (de probabilités non nulles) sont **indépendants** si la réalisation de l'un ne modifie pas la probabilité de l'autre, ce qui se traduit par :
> $$P_A(B) = P(B) \\qquad \\text{(de façon équivalente : } P_B(A)=P(A)\\text{)}$$

> **Caractérisation pratique (la plus utilisée) :** $A$ et $B$ sont indépendants si et seulement si :
> $$P(A\\cap B) = P(A)\\times P(B)$$

**Exemple :** on lance un dé équilibré à 6 faces. Soit $A$ = "obtenir un nombre pair" et $B$ = "obtenir un multiple de 3". On a $P(A)=\\dfrac12$, $P(B)=\\dfrac13$, et $A\\cap B$ = "obtenir 6" donc $P(A\\cap B)=\\dfrac16$.

On vérifie : $P(A)\\times P(B) = \\dfrac12\\times\\dfrac13=\\dfrac16 = P(A\\cap B)$. Donc $A$ et $B$ sont **indépendants**.

> **Piège classique :** indépendance et incompatibilité sont deux notions **très différentes**. Deux événements incompatibles ($A\\cap B=\\emptyset$) ne sont indépendants que si l'un des deux est de probabilité nulle (cas limite sans intérêt pratique). Ne confonds jamais ces deux notions.

### Indépendance et répétition d'expériences

Lorsqu'on répète plusieurs fois une même expérience de façon **indépendante** (par exemple plusieurs lancers de dé ou de pièce), la probabilité d'une suite de résultats est le **produit** des probabilités de chaque résultat. C'est ce principe qui justifie la formule de la loi binomiale étudiée par ailleurs.`,
        durationMinutes: 24,
        exercises: [
          {
            id: "pin1-l2-e1",
            question: "Deux événements $A$ et $B$ sont indépendants si et seulement si :",
            type: "mcq",
            options: [
              { id: "A", text: "$P(A\\cap B) = 0$" },
              { id: "B", text: "$P(A\\cap B) = P(A)\\times P(B)$" },
              { id: "C", text: "$P(A\\cup B) = P(A)+P(B)$" },
              { id: "D", text: "$A$ et $B$ sont incompatibles" },
            ],
            correctId: "B",
            explanation: "C'est la caractérisation pratique de l'indépendance : $P(A\\cap B)=P(A)\\times P(B)$.",
            difficulty: "debutant",
          },
          {
            id: "pin1-l2-e2",
            question: "Deux événements incompatibles sont toujours indépendants.",
            type: "true_false",
            correctId: "faux",
            explanation: "C'est un piège classique : incompatibilité et indépendance sont des notions différentes. Deux événements incompatibles non vides de probabilité non nulle ne sont en général pas indépendants.",
            difficulty: "intermediaire",
          },
          {
            id: "pin1-l2-e3",
            question: "On tire une carte au hasard dans un jeu de 32 cartes. Soit $A$ = \"la carte est un cœur\" et $B$ = \"la carte est une figure (Roi, Dame ou Valet)\". Sachant $P(A)=\\dfrac{1}{4}$, $P(B)=\\dfrac{3}{8}$ et $P(A\\cap B)=\\dfrac{3}{32}$, les événements $A$ et $B$ sont-ils indépendants ?",
            type: "open",
            modelAnswer: "On calcule le produit $P(A)\\times P(B)$ et on le compare à $P(A\\cap B)$.\\n\\n$$P(A)\\times P(B) = \\dfrac{1}{4}\\times\\dfrac{3}{8} = \\dfrac{3}{32}$$\\n\\nOr on nous donne $P(A\\cap B) = \\dfrac{3}{32}$.\\n\\nComme $P(A\\cap B) = P(A)\\times P(B)$, les événements $A$ et $B$ sont **indépendants**.\\n\\n$$\\boxed{A \\text{ et } B \\text{ sont indépendants}}$$",
            explanation: "On vérifie la caractérisation de l'indépendance en comparant $P(A\\cap B)$ au produit $P(A)\\times P(B)$ ; l'égalité confirme l'indépendance.",
            difficulty: "intermediaire",
          },
          {
            id: "pin1-l2-e4",
            question: "Une urne contient des boules dont $40\\%$ sont rouges. On tire une boule, on note sa couleur, on la remet dans l'urne, puis on tire une seconde boule. Soit $A$ = \"la première boule est rouge\" et $B$ = \"la deuxième boule est rouge\". Calcule $P(A\\cap B)$ en justifiant l'indépendance des deux tirages.",
            type: "open",
            modelAnswer: "Comme on **remet la boule dans l'urne** après le premier tirage, la composition de l'urne est identique pour le second tirage : le résultat du premier tirage n'influence donc pas le second. Les événements $A$ et $B$ sont donc **indépendants**.\\n\\nOn a $P(A) = 0{,}4$ (proportion de boules rouges) et de même $P(B)=0{,}4$ (l'urne ayant la même composition lors du second tirage).\\n\\nComme $A$ et $B$ sont indépendants, on applique la formule :\\n\\n$$P(A\\cap B) = P(A)\\times P(B) = 0{,}4\\times0{,}4 = 0{,}16$$\\n\\n$$\\boxed{P(A\\cap B) = 0{,}16}$$",
            explanation: "Le tirage avec remise garantit l'indépendance des deux tirages successifs (composition de l'urne inchangée), ce qui justifie d'appliquer directement la formule du produit des probabilités.",
            difficulty: "expert",
          },
          {
            id: "pin1-l2-e5",
            question: "On lance deux fois une pièce équilibrée. Soit $A$ = \"le premier lancer donne Face\" et $B$ = \"le second lancer donne Face\". Que vaut $P(A\\cap B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\dfrac{1}{2}$" },
              { id: "B", text: "$\\dfrac{1}{4}$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$\\dfrac{1}{8}$" },
            ],
            correctId: "B",
            explanation: "Les deux lancers sont indépendants, donc $P(A\\cap B)=P(A)\\times P(B) = \\dfrac12\\times\\dfrac12=\\dfrac14$.",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "pin1-l3",
        slug: "arbres-ponderes-et-probabilites-totales",
        title: "Arbres pondérés et formule des probabilités totales",
        content: `## Arbres pondérés à plusieurs niveaux

Un arbre pondéré permet de représenter une succession d'expériences. À chaque branche, on indique une probabilité (simple à la racine, conditionnelle pour les niveaux suivants).

> **Règles de lecture d'un arbre :**
> - la somme des probabilités des branches issues d'un même nœud vaut $1$ ;
> - la probabilité d'un "chemin" (succession de branches) s'obtient en **multipliant** les probabilités le long du chemin (formule des probabilités composées) ;
> - la probabilité d'un événement correspondant à plusieurs chemins s'obtient en **additionnant** les probabilités de ces chemins.

## Partition de l'univers et probabilités totales

> **Définition :** des événements $A_1, A_2, \\ldots, A_n$ forment une **partition de l'univers** s'ils sont deux à deux incompatibles et si leur réunion est l'univers tout entier (autrement dit, un et un seul des $A_i$ se réalise à chaque issue).

> **Formule des probabilités totales :** si $A_1,\\ldots,A_n$ forment une partition de l'univers (chacun de probabilité non nulle), alors pour tout événement $B$ :
> $$P(B) = P(A_1)\\times P_{A_1}(B) + P(A_2)\\times P_{A_2}(B) + \\cdots + P(A_n)\\times P_{A_n}(B)$$

C'est exactement ce que traduit un arbre pondéré : on additionne les probabilités de tous les chemins menant à $B$.

### Exemple détaillé

Une entreprise reçoit des pièces de deux fournisseurs : $F_1$ (60\\% des pièces) et $F_2$ (40\\% des pièces). Le taux de pièces défectueuses ($D$) est de $5\\%$ chez $F_1$ et de $8\\%$ chez $F_2$.

On a $P(F_1)=0{,}6$, $P(F_2)=0{,}4$, $P_{F_1}(D)=0{,}05$, $P_{F_2}(D)=0{,}08$. Comme $F_1$ et $F_2$ forment une partition de l'univers :

$$P(D) = P(F_1)\\times P_{F_1}(D) + P(F_2)\\times P_{F_2}(D) = 0{,}6\\times0{,}05 + 0{,}4\\times0{,}08 = 0{,}03+0{,}032 = 0{,}062$$

Donc $6{,}2\\%$ des pièces reçues sont défectueuses, toutes provenances confondues.`,
        durationMinutes: 26,
        exercises: [
          {
            id: "pin1-l3-e1",
            question: "Dans un arbre pondéré, la probabilité d'un chemin s'obtient en :",
            type: "mcq",
            options: [
              { id: "A", text: "Additionnant les probabilités le long du chemin" },
              { id: "B", text: "Multipliant les probabilités le long du chemin" },
              { id: "C", text: "Prenant la plus grande probabilité du chemin" },
              { id: "D", text: "Soustrayant les probabilités" },
            ],
            correctId: "B",
            explanation: "On multiplie les probabilités successives le long d'un chemin, conformément à la formule des probabilités composées.",
            difficulty: "debutant",
          },
          {
            id: "pin1-l3-e2",
            question: "Si $A_1$ et $A_2$ forment une partition de l'univers, alors $P(A_1)+P(A_2)=1$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Par définition d'une partition (événements incompatibles dont la réunion est l'univers), la somme de leurs probabilités vaut $1$.",
            difficulty: "debutant",
          },
          {
            id: "pin1-l3-e3",
            question: "Une urne contient $70\\%$ de boules rouges et $30\\%$ de boules vertes. Parmi les rouges, $20\\%$ sont marquées d'une étoile ; parmi les vertes, $50\\%$ sont marquées d'une étoile. Calcule la probabilité qu'une boule tirée au hasard soit marquée d'une étoile.",
            type: "open",
            modelAnswer: "On note $R$ = \"la boule est rouge\", $V$ = \"la boule est verte\", $E$ = \"la boule est marquée d'une étoile\".\\n\\nOn a $P(R)=0{,}7$, $P(V)=0{,}3$ (et $R,V$ forment une partition de l'univers), $P_R(E)=0{,}2$, $P_V(E)=0{,}5$.\\n\\nOn applique la formule des probabilités totales :\\n\\n$$P(E) = P(R)\\times P_R(E) + P(V)\\times P_V(E)$$\\n\\n$$P(E) = 0{,}7\\times0{,}2 + 0{,}3\\times0{,}5 = 0{,}14 + 0{,}15 = 0{,}29$$\\n\\n$$\\boxed{P(E) = 0{,}29}$$",
            explanation: "On reconnaît une partition de l'univers (rouge/vert) et on applique la formule des probabilités totales en sommant les deux chemins de l'arbre menant à l'événement $E$.",
            difficulty: "intermediaire",
          },
          {
            id: "pin1-l3-e4",
            question: "Dans un test de dépistage, $2\\%$ de la population est porteuse d'une maladie ($M$). Le test est positif ($T$) chez $98\\%$ des porteurs et chez $3\\%$ des non-porteurs. Calcule la probabilité qu'une personne prise au hasard ait un test positif, puis calcule $P_T(M)$, la probabilité qu'une personne soit réellement porteuse sachant que son test est positif.",
            type: "open",
            modelAnswer: "On a $P(M)=0{,}02$, $P(\\overline M)=0{,}98$, $P_M(T)=0{,}98$, $P_{\\overline M}(T)=0{,}03$.\\n\\n**Calcul de $P(T)$ par la formule des probabilités totales** ($M$ et $\\overline M$ forment une partition) :\\n\\n$$P(T) = P(M)\\times P_M(T) + P(\\overline M)\\times P_{\\overline M}(T)$$\\n\\n$$P(T) = 0{,}02\\times0{,}98 + 0{,}98\\times0{,}03 = 0{,}0196+0{,}0294 = 0{,}049$$\\n\\n**Calcul de $P_T(M)$** à l'aide de la définition de la probabilité conditionnelle :\\n\\n$$P_T(M) = \\dfrac{P(M\\cap T)}{P(T)} = \\dfrac{P(M)\\times P_M(T)}{P(T)} = \\dfrac{0{,}0196}{0{,}049}$$\\n\\n$$P_T(M) = 0{,}4$$\\n\\n**Interprétation :** même avec un test positif, seulement $40\\%$ des personnes sont réellement porteuses de la maladie — ce résultat contre-intuitif s'explique par la faible prévalence ($2\\%$) de la maladie dans la population.\\n\\n$$\\boxed{P(T) = 0{,}049 \\ ;\\ P_T(M) = 0{,}4}$$",
            explanation: "On calcule d'abord $P(T)$ par la formule des probabilités totales en sommant les deux chemins de l'arbre (porteur/non-porteur), puis on utilise la définition de la probabilité conditionnelle pour inverser le sens du conditionnement et obtenir $P_T(M)$.",
            difficulty: "expert",
          },
          {
            id: "pin1-l3-e5",
            question: "Soit $A_1, A_2, A_3$ une partition de l'univers avec $P(A_1)=0{,}3$, $P(A_2)=0{,}5$, $P(A_3)=0{,}2$, et $P_{A_1}(B)=0{,}1$, $P_{A_2}(B)=0{,}4$, $P_{A_3}(B)=0{,}6$. Que vaut $P(B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0{,}35$" },
              { id: "B", text: "$0{,}33$" },
              { id: "C", text: "$1{,}1$" },
              { id: "D", text: "$0{,}5$" },
            ],
            correctId: "A",
            explanation: "$P(B) = 0{,}3\\times0{,}1+0{,}5\\times0{,}4+0{,}2\\times0{,}6 = 0{,}03+0{,}2+0{,}12 = 0{,}35$.",
            difficulty: "intermediaire",
          },
        ],
      },
    ],
  },
  {
    id: "vab1-id",
    slug: "variables-aleatoires-terminale",
    title: "Variables aléatoires et loi binomiale (approfondissement)",
    description: "Approfondir l'espérance, la variance et l'écart-type d'une variable aléatoire, revoir la loi binomiale, et découvrir l'intervalle de fluctuation.",
    schoolLevel: "terminale",
    subject: "probabilites",
    difficulty: "Avancé",
    isFree: true,
    thumbnailEmoji: "🎯",
    lessons: [
      {
        id: "vab1-l1",
        slug: "esperance-variance-et-ecart-type",
        title: "Espérance, variance et écart-type",
        content: `## Loi de probabilité d'une variable aléatoire

Une variable aléatoire $X$ associe une valeur numérique à chaque issue d'une expérience aléatoire. Sa **loi de probabilité** donne, pour chaque valeur possible $x_i$, la probabilité $P(X=x_i)$.

## Espérance

> **Définition :** l'espérance de $X$, notée $E(X)$, est la moyenne des valeurs de $X$ pondérée par leurs probabilités :
> $$E(X) = \\sum_{i=1}^{n} x_i \\times P(X=x_i)$$

L'espérance représente la valeur "moyenne" que l'on peut attendre si l'on répète l'expérience un grand nombre de fois.

## Variance et écart-type

> **Définition :** la variance de $X$ mesure la dispersion des valeurs autour de l'espérance :
> $$V(X) = \\sum_{i=1}^{n} \\left(x_i - E(X)\\right)^2 \\times P(X=x_i)$$
>
> L'écart-type est $\\sigma(X) = \\sqrt{V(X)}$.

> **Formule de König-Huygens (souvent plus pratique pour calculer) :**
> $$V(X) = E(X^2) - \\left(E(X)\\right)^2 \\quad \\text{où } E(X^2) = \\sum_i x_i^2 \\times P(X=x_i)$$

### Exemple détaillé

Soit $X$ la loi de probabilité donnée par : $P(X=1)=0{,}2$, $P(X=2)=0{,}5$, $P(X=3)=0{,}3$.

**Espérance :**
$$E(X) = 1\\times0{,}2+2\\times0{,}5+3\\times0{,}3 = 0{,}2+1+0{,}9 = 2{,}1$$

**Calcul de $E(X^2)$ :**
$$E(X^2) = 1^2\\times0{,}2+2^2\\times0{,}5+3^2\\times0{,}3 = 0{,}2+2+2{,}7 = 4{,}9$$

**Variance :**
$$V(X) = E(X^2) - (E(X))^2 = 4{,}9 - 2{,}1^2 = 4{,}9-4{,}41 = 0{,}49$$

**Écart-type :**
$$\\sigma(X) = \\sqrt{0{,}49} = 0{,}7$$`,
        durationMinutes: 26,
        exercises: [
          {
            id: "vab1-l1-e1",
            question: "L'espérance d'une variable aléatoire représente :",
            type: "mcq",
            options: [
              { id: "A", text: "La valeur la plus probable" },
              { id: "B", text: "La moyenne pondérée par les probabilités" },
              { id: "C", text: "L'écart maximal entre deux valeurs" },
              { id: "D", text: "Le nombre de valeurs possibles" },
            ],
            correctId: "B",
            explanation: "L'espérance $E(X)=\\sum x_iP(X=x_i)$ est la moyenne des valeurs de $X$ pondérée par leurs probabilités respectives.",
            difficulty: "debutant",
          },
          {
            id: "vab1-l1-e2",
            question: "L'écart-type est la racine carrée de la variance.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Par définition, $\\sigma(X) = \\sqrt{V(X)}$.",
            difficulty: "debutant",
          },
          {
            id: "vab1-l1-e3",
            question: "Soit $X$ la variable aléatoire donnant le gain (en euros) d'un jeu : $P(X=-2)=0{,}6$, $P(X=5)=0{,}3$, $P(X=10)=0{,}1$. Calcule l'espérance $E(X)$ et interprète le résultat.",
            type: "open",
            modelAnswer: "On applique la formule de l'espérance :\\n\\n$$E(X) = (-2)\\times0{,}6 + 5\\times0{,}3 + 10\\times0{,}1$$\\n\\n$$E(X) = -1{,}2 + 1{,}5 + 1 = 1{,}3$$\\n\\n**Interprétation :** en moyenne, sur un grand nombre de parties, le joueur gagne $1{,}3$ euro par partie. Le jeu est donc favorable au joueur.\\n\\n$$\\boxed{E(X) = 1{,}3 \\text{ euro}}$$",
            explanation: "On applique directement la formule de l'espérance en multipliant chaque gain par sa probabilité puis en sommant, et on interprète le signe positif comme un jeu favorable au joueur.",
            difficulty: "intermediaire",
          },
          {
            id: "vab1-l1-e4",
            question: "Pour la variable aléatoire $X$ de l'exercice précédent ($P(X=-2)=0{,}6$, $P(X=5)=0{,}3$, $P(X=10)=0{,}1$, $E(X)=1{,}3$), calcule la variance $V(X)$ et l'écart-type $\\sigma(X)$ à l'aide de la formule de König-Huygens.",
            type: "open",
            modelAnswer: "On calcule d'abord $E(X^2)$ :\\n\\n$$E(X^2) = (-2)^2\\times0{,}6 + 5^2\\times0{,}3 + 10^2\\times0{,}1$$\\n\\n$$E(X^2) = 4\\times0{,}6 + 25\\times0{,}3 + 100\\times0{,}1 = 2{,}4+7{,}5+10 = 19{,}9$$\\n\\nOn applique la formule de König-Huygens :\\n\\n$$V(X) = E(X^2) - (E(X))^2 = 19{,}9 - 1{,}3^2 = 19{,}9 - 1{,}69 = 18{,}21$$\\n\\nOn en déduit l'écart-type :\\n\\n$$\\sigma(X) = \\sqrt{18{,}21} \\approx 4{,}27$$\\n\\n$$\\boxed{V(X) = 18{,}21\\ ;\\ \\sigma(X) \\approx 4{,}27}$$",
            explanation: "On calcule $E(X^2)$ en sommant les carrés des valeurs pondérés par leurs probabilités, puis on applique la formule de König-Huygens, plus rapide que la définition directe par écarts à la moyenne.",
            difficulty: "expert",
          },
          {
            id: "vab1-l1-e5",
            question: "Si la variance d'une variable aléatoire $X$ est $V(X)=9$, quel est son écart-type ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$9$" },
              { id: "C", text: "$81$" },
              { id: "D", text: "$4{,}5$" },
            ],
            correctId: "A",
            explanation: "L'écart-type est la racine carrée de la variance : $\\sigma(X)=\\sqrt{9}=3$.",
            difficulty: "debutant",
          },
        ],
      },
      {
        id: "vab1-l2",
        slug: "loi-binomiale-rappel-et-parametres",
        title: "Loi binomiale : rappel, espérance et variance",
        content: `## Rappel : schéma de Bernoulli et loi binomiale

> **Épreuve de Bernoulli :** expérience à deux issues possibles, "succès" (probabilité $p$) et "échec" (probabilité $1-p$).

> **Loi binomiale $\\mathcal{B}(n,p)$ :** si on répète $n$ fois, de façon **indépendante**, une épreuve de Bernoulli de paramètre $p$, et que $X$ compte le nombre de succès obtenus, alors $X$ suit la loi binomiale de paramètres $n$ et $p$, et pour tout entier $k$ avec $0 \\leqslant k \\leqslant n$ :
> $$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

## Espérance et variance d'une loi binomiale

> **Théorème (admis) :** si $X \\sim \\mathcal{B}(n,p)$, alors :
> $$E(X) = np \\qquad\\qquad V(X) = np(1-p) \\qquad\\qquad \\sigma(X) = \\sqrt{np(1-p)}$$

Ces formules évitent d'avoir à calculer la somme complète $\\sum_k k\\times P(X=k)$, ce qui serait très lourd pour $n$ grand.

### Exemple détaillé

On lance $20$ fois un dé équilibré et on compte le nombre de fois où l'on obtient un $6$. Soit $X$ ce nombre de succès.

$X$ suit la loi binomiale $\\mathcal{B}\\left(20\\,;\\,\\dfrac16\\right)$ (chaque lancer est une épreuve de Bernoulli de paramètre $p=\\dfrac16$, répétée $20$ fois de façon indépendante).

**Espérance :**
$$E(X) = np = 20\\times\\dfrac16 = \\dfrac{20}{6} \\approx 3{,}33$$

**Variance :**
$$V(X) = np(1-p) = 20\\times\\dfrac16\\times\\dfrac56 = \\dfrac{100}{36} \\approx 2{,}78$$

**Écart-type :**
$$\\sigma(X) = \\sqrt{2{,}78} \\approx 1{,}67$$

On s'attend donc, en moyenne, à environ $3{,}33$ apparitions du $6$ sur $20$ lancers, avec un écart-type d'environ $1{,}67$.`,
        durationMinutes: 24,
        exercises: [
          {
            id: "vab1-l2-e1",
            question: "Si $X \\sim \\mathcal{B}(n,p)$, quelle est la formule de son espérance ?",
            type: "mcq",
            options: [
              { id: "A", text: "$E(X) = n+p$" },
              { id: "B", text: "$E(X) = np$" },
              { id: "C", text: "$E(X) = np(1-p)$" },
              { id: "D", text: "$E(X) = \\dfrac{n}{p}$" },
            ],
            correctId: "B",
            explanation: "Pour une loi binomiale $\\mathcal{B}(n,p)$, l'espérance est $E(X)=np$.",
            difficulty: "debutant",
          },
          {
            id: "vab1-l2-e2",
            question: "La variance d'une loi binomiale $\\mathcal{B}(n,p)$ est $V(X) = np(1-p)$.",
            type: "true_false",
            correctId: "vrai",
            explanation: "C'est exactement la formule de la variance de la loi binomiale, à connaître par cœur.",
            difficulty: "debutant",
          },
          {
            id: "vab1-l2-e3",
            question: "Une variable aléatoire $X$ suit la loi $\\mathcal{B}(50\\,;\\,0{,}2)$. Calcule $E(X)$ et $V(X)$.",
            type: "open",
            modelAnswer: "On applique directement les formules de l'espérance et de la variance de la loi binomiale, avec $n=50$ et $p=0{,}2$.\\n\\n**Espérance :**\\n$$E(X) = np = 50\\times0{,}2 = 10$$\\n\\n**Variance :**\\n$$V(X) = np(1-p) = 50\\times0{,}2\\times0{,}8 = 8$$\\n\\n$$\\boxed{E(X) = 10 \\ ;\\ V(X) = 8}$$",
            explanation: "On applique directement les formules $E(X)=np$ et $V(X)=np(1-p)$ avec les paramètres donnés.",
            difficulty: "intermediaire",
          },
          {
            id: "vab1-l2-e4",
            question: "Un questionnaire à choix multiples comporte $30$ questions, chacune avec $4$ réponses possibles dont une seule est correcte. Un candidat répond entièrement au hasard. Soit $X$ le nombre de bonnes réponses. Justifie que $X$ suit une loi binomiale, donne ses paramètres, puis calcule $E(X)$ et $\\sigma(X)$.",
            type: "open",
            modelAnswer: "**Justification de la loi binomiale :** chaque question constitue une épreuve de Bernoulli, où le \"succès\" est \"répondre correctement\" avec probabilité $p=\\dfrac14$ (une bonne réponse sur quatre possibles), répétée $n=30$ fois de façon indépendante (les réponses sont données au hasard, indépendamment les unes des autres).\\n\\nDonc $X \\sim \\mathcal{B}\\left(30\\,;\\,\\dfrac14\\right)$.\\n\\n**Espérance :**\\n$$E(X) = np = 30\\times\\dfrac14 = 7{,}5$$\\n\\n**Variance :**\\n$$V(X) = np(1-p) = 30\\times\\dfrac14\\times\\dfrac34 = \\dfrac{90}{16} = 5{,}625$$\\n\\n**Écart-type :**\\n$$\\sigma(X) = \\sqrt{5{,}625} \\approx 2{,}37$$\\n\\n**Interprétation :** en répondant au hasard, un candidat obtient en moyenne $7{,}5$ bonnes réponses sur $30$, avec un écart-type d'environ $2{,}37$.\\n\\n$$\\boxed{X\\sim\\mathcal{B}\\left(30;\\dfrac14\\right)\\ ;\\ E(X)=7{,}5\\ ;\\ \\sigma(X)\\approx2{,}37}$$",
            explanation: "On justifie soigneusement les conditions d'application de la loi binomiale (répétition indépendante d'épreuves de Bernoulli identiques) avant de calculer espérance, variance et écart-type avec les formules du cours.",
            difficulty: "expert",
          },
          {
            id: "vab1-l2-e5",
            question: "Soit $X \\sim \\mathcal{B}(100\\,;\\,0{,}5)$. Quel est l'écart-type de $X$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$25$" },
              { id: "C", text: "$50$" },
              { id: "D", text: "$2{,}5$" },
            ],
            correctId: "A",
            explanation: "$V(X) = np(1-p) = 100\\times0{,}5\\times0{,}5 = 25$, donc $\\sigma(X) = \\sqrt{25}=5$.",
            difficulty: "intermediaire",
          },
        ],
      },
      {
        id: "vab1-l3",
        slug: "echantillonnage-et-intervalle-de-fluctuation",
        title: "Échantillonnage et intervalle de fluctuation",
        content: `## Position du problème

Lorsqu'on prélève un échantillon de taille $n$ dans une population où une proportion $p$ possède un certain caractère, on souhaite savoir dans quelle mesure la fréquence observée $f$ du caractère dans l'échantillon peut "raisonnablement" s'éloigner de $p$, par simple effet du hasard d'échantillonnage.

## Intervalle de fluctuation (introduction)

> **Intervalle de fluctuation asymptotique (au seuil de $95\\%$) :** sous certaines conditions (en particulier $n \\geqslant 30$, $np\\geqslant5$ et $n(1-p)\\geqslant5$), la fréquence $f$ observée sur un échantillon de taille $n$ appartient, avec une probabilité d'environ $0{,}95$, à l'intervalle :
> $$I_n = \\left[p - 1{,}96\\sqrt{\\dfrac{p(1-p)}{n}}\\,;\\ p + 1{,}96\\sqrt{\\dfrac{p(1-p)}{n}}\\right]$$

Cet intervalle est centré sur la proportion théorique $p$, et son amplitude diminue lorsque la taille $n$ de l'échantillon augmente : plus l'échantillon est grand, plus la fréquence observée doit être proche de $p$.

### Utilisation pour la prise de décision

> **Méthode :** pour tester si une proportion annoncée $p$ semble correcte au vu d'un échantillon observé :
> 1. Vérifier les conditions d'application ($n\\geqslant30$, $np\\geqslant5$, $n(1-p)\\geqslant5$).
> 2. Calculer l'intervalle de fluctuation $I_n$.
> 3. Si la fréquence observée $f$ appartient à $I_n$, l'hypothèse "la proportion vaut $p$" n'est pas remise en cause (au seuil de $95\\%$). Sinon, on rejette cette hypothèse.

### Exemple détaillé

Une usine affirme que $p=0{,}1$ (soit $10\\%$) de sa production est défectueuse. Sur un échantillon de $n=400$ pièces, on observe $f=\\dfrac{52}{400}=0{,}13$ pièces défectueuses.

**Vérification des conditions :** $n=400\\geqslant30$ ✓, $np=40\\geqslant5$ ✓, $n(1-p)=360\\geqslant5$ ✓.

**Calcul de l'intervalle :**
$$\\sqrt{\\dfrac{p(1-p)}{n}} = \\sqrt{\\dfrac{0{,}1\\times0{,}9}{400}} = \\sqrt{\\dfrac{0{,}09}{400}} = \\sqrt{0{,}000225} = 0{,}015$$

$$I_{400} = [0{,}1 - 1{,}96\\times0{,}015\\,;\\ 0{,}1+1{,}96\\times0{,}015] = [0{,}1-0{,}0294\\,;\\ 0{,}1+0{,}0294] = [0{,}0706\\,;\\ 0{,}1294]$$

Comme $f=0{,}13 \\notin I_{400}$ (car $0{,}13 > 0{,}1294$), la fréquence observée dépasse légèrement la borne supérieure de l'intervalle : au seuil de $95\\%$, on peut considérer que l'affirmation de l'usine est remise en cause, même si l'écart reste faible. C'est tout l'intérêt de la méthode : comparer systématiquement $f$ aux bornes de $I_n$ pour décider.`,
        durationMinutes: 24,
        exercises: [
          {
            id: "vab1-l3-e1",
            question: "L'intervalle de fluctuation asymptotique est centré sur :",
            type: "mcq",
            options: [
              { id: "A", text: "La fréquence observée $f$" },
              { id: "B", text: "La proportion théorique $p$" },
              { id: "C", text: "La taille de l'échantillon $n$" },
              { id: "D", text: "L'espérance $np$" },
            ],
            correctId: "B",
            explanation: "L'intervalle de fluctuation est centré sur la proportion théorique $p$, avec une demi-amplitude de $1{,}96\\sqrt{\\frac{p(1-p)}{n}}$.",
            difficulty: "debutant",
          },
          {
            id: "vab1-l3-e2",
            question: "Plus la taille de l'échantillon $n$ augmente, plus l'amplitude de l'intervalle de fluctuation diminue.",
            type: "true_false",
            correctId: "vrai",
            explanation: "Comme l'amplitude dépend de $\\dfrac{1}{\\sqrt n}$, elle diminue quand $n$ augmente : un plus grand échantillon donne une estimation plus précise.",
            difficulty: "debutant",
          },
          {
            id: "vab1-l3-e3",
            question: "Une proportion théorique annoncée est $p=0{,}2$, sur un échantillon de taille $n=900$. Vérifie les conditions d'application de l'intervalle de fluctuation asymptotique, puis calcule l'intervalle $I_n$.",
            type: "open",
            modelAnswer: "**Vérification des conditions :** $n=900\\geqslant30$ ✓ ; $np=900\\times0{,}2=180\\geqslant5$ ✓ ; $n(1-p)=900\\times0{,}8=720\\geqslant5$ ✓. Les trois conditions sont vérifiées.\\n\\n**Calcul de l'écart-type relatif :**\\n$$\\sqrt{\\dfrac{p(1-p)}{n}} = \\sqrt{\\dfrac{0{,}2\\times0{,}8}{900}} = \\sqrt{\\dfrac{0{,}16}{900}} = \\sqrt{0{,}0001\\overline{7}}\\approx 0{,}01333$$\\n\\n**Calcul de l'intervalle :**\\n$$I_n = [0{,}2 - 1{,}96\\times0{,}01333\\,;\\ 0{,}2+1{,}96\\times0{,}01333]$$\\n\\n$$I_n \\approx [0{,}2 - 0{,}0261\\,;\\ 0{,}2+0{,}0261] = [0{,}1739\\,;\\ 0{,}2261]$$\\n\\n$$\\boxed{I_n \\approx [0{,}174\\,;\\ 0{,}226]}$$",
            explanation: "On commence systématiquement par vérifier les trois conditions d'application avant de calculer l'intervalle, en suivant scrupuleusement la formule du cours.",
            difficulty: "intermediaire",
          },
          {
            id: "vab1-l3-e4",
            question: "Un fabricant affirme que $95\\%$ de ses produits sont conformes ($p=0{,}95$). Sur un échantillon de $n=500$ produits, on observe $465$ produits conformes. Calcule la fréquence observée $f$, vérifie les conditions d'application, calcule l'intervalle de fluctuation $I_n$, et conclus si l'affirmation du fabricant semble crédible.",
            type: "open",
            modelAnswer: "**Fréquence observée :**\\n$$f = \\dfrac{465}{500} = 0{,}93$$\\n\\n**Vérification des conditions :** $n=500\\geqslant30$ ✓ ; $np=500\\times0{,}95=475\\geqslant5$ ✓ ; $n(1-p)=500\\times0{,}05=25\\geqslant5$ ✓. Conditions vérifiées.\\n\\n**Calcul de l'intervalle :**\\n$$\\sqrt{\\dfrac{p(1-p)}{n}} = \\sqrt{\\dfrac{0{,}95\\times0{,}05}{500}} = \\sqrt{\\dfrac{0{,}0475}{500}} = \\sqrt{0{,}000095} \\approx 0{,}00975$$\\n\\n$$I_n \\approx [0{,}95-1{,}96\\times0{,}00975\\,;\\ 0{,}95+1{,}96\\times0{,}00975]$$\\n\\n$$I_n \\approx [0{,}95-0{,}0191\\,;\\ 0{,}95+0{,}0191] = [0{,}9309\\,;\\ 0{,}9691]$$\\n\\n**Conclusion :** la fréquence observée $f=0{,}93$ n'appartient pas à l'intervalle $[0{,}9309\\,;\\ 0{,}9691]$ car $0{,}93 < 0{,}9309$. On peut donc **rejeter** l'affirmation du fabricant au seuil de $95\\%$ : la proportion réelle de produits conformes semble inférieure à $95\\%$.\\n\\n$$\\boxed{f=0{,}93 \\notin I_n \\approx [0{,}931\\,;\\ 0{,}969],\\ \\text{l'affirmation du fabricant est remise en cause}}$$",
            explanation: "On suit la méthode complète : calcul de la fréquence observée, vérification des conditions, calcul de l'intervalle, puis comparaison de $f$ aux bornes pour prendre une décision statistique.",
            difficulty: "expert",
          },
          {
            id: "vab1-l3-e5",
            question: "Pour appliquer l'intervalle de fluctuation asymptotique au seuil de $95\\%$, quelles conditions doivent être vérifiées sur la taille de l'échantillon $n$ et la proportion $p$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$n \\geqslant 10$ seulement" },
              { id: "B", text: "$n \\geqslant 30$, $np \\geqslant 5$ et $n(1-p)\\geqslant5$" },
              { id: "C", text: "$p = 0{,}5$ obligatoirement" },
              { id: "D", text: "Aucune condition n'est nécessaire" },
            ],
            correctId: "B",
            explanation: "Les trois conditions usuelles pour l'intervalle de fluctuation asymptotique sont $n\\geqslant30$, $np\\geqslant5$ et $n(1-p)\\geqslant5$.",
            difficulty: "intermediaire",
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
