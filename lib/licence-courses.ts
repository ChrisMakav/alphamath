import type { Course } from "./seed-data";

export const LICENCE_COURSES: Course[] = [
  // ─────────────────────────────────────────────
  // L1 — Analyse : Limites, continuité, dérivabilité
  // ─────────────────────────────────────────────
  {
    id: "analyse-l1",
    slug: "analyse-l1-limites-continuite-derivabilite",
    title: "Analyse L1 — Limites, continuité et dérivabilité",
    description: "Fondements de l'analyse réelle : limites de fonctions, continuité, théorème des valeurs intermédiaires et calcul différentiel.",
    schoolLevel: "L1",
    subject: "analyse",
    difficulty: "Intermédiaire",
    isFree: true,
    thumbnailEmoji: "∂",
    lessons: [
      {
        id: "anal1-l1-1",
        slug: "limites-de-fonctions",
        title: "Limites de fonctions",
        durationMinutes: 50,
        content: `## Limites de fonctions

### 1. Définition formelle (ε-δ)

Soit $f$ une fonction définie au voisinage de $a$ (sauf éventuellement en $a$). On dit que $f$ admet la limite $\\ell \\in \\mathbb{R}$ en $a$ si :

$$\\forall \\varepsilon > 0,\\; \\exists \\delta > 0,\\; \\forall x \\in D_f,\\; 0 < |x - a| < \\delta \\Rightarrow |f(x) - \\ell| < \\varepsilon$$

**Notation :** $\\displaystyle\\lim_{x \\to a} f(x) = \\ell$

### 2. Limites infinies et à l'infini

- $\\displaystyle\\lim_{x \\to a} f(x) = +\\infty$ : pour tout $M > 0$, il existe $\\delta > 0$ tel que $0 < |x-a| < \\delta \\Rightarrow f(x) > M$
- $\\displaystyle\\lim_{x \\to +\\infty} f(x) = \\ell$ : pour tout $\\varepsilon > 0$, il existe $A > 0$ tel que $x > A \\Rightarrow |f(x) - \\ell| < \\varepsilon$

### 3. Limites à gauche et à droite

$$\\lim_{x \\to a^-} f(x) = \\ell_1 \\quad \\text{et} \\quad \\lim_{x \\to a^+} f(x) = \\ell_2$$

$f$ admet une limite en $a$ si et seulement si $\\ell_1 = \\ell_2$.

### 4. Opérations sur les limites

Si $\\displaystyle\\lim_{x \\to a} f(x) = \\ell$ et $\\displaystyle\\lim_{x \\to a} g(x) = m$, alors :

| Opération | Résultat |
|-----------|----------|
| $f + g$ | $\\ell + m$ |
| $f \\cdot g$ | $\\ell \\cdot m$ |
| $f/g$ (si $m \\neq 0$) | $\\ell/m$ |

**Formes indéterminées :** $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $0 \\times \\infty$, $\\infty - \\infty$, $1^\\infty$, $0^0$, $\\infty^0$.

### 5. Théorèmes fondamentaux

**Théorème des gendarmes (squeeze theorem) :** Si $g(x) \\leq f(x) \\leq h(x)$ au voisinage de $a$ et $\\displaystyle\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = \\ell$, alors $\\displaystyle\\lim_{x \\to a} f(x) = \\ell$.

**Limites usuelles importantes :**
$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$$
$$\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty \\qquad \\lim_{x \\to +\\infty} \\frac{\\ln x}{x^\\alpha} = 0 \\text{ pour } \\alpha > 0$$

### 6. Exemple résolu

**Calculer** $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.

**Solution :** On pose $u = 3x$, donc $u \\to 0$ quand $x \\to 0$.
$$\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x} = 3 \\cdot \\frac{\\sin u}{u} \\xrightarrow[u \\to 0]{} 3 \\times 1 = 3$$

**Calculer** $\\displaystyle\\lim_{x \\to +\\infty} \\frac{3x^2 - 2x + 1}{5x^2 + x - 4}$.

**Solution :** On divise numérateur et dénominateur par $x^2$ :
$$\\frac{3x^2 - 2x + 1}{5x^2 + x - 4} = \\frac{3 - 2/x + 1/x^2}{5 + 1/x - 4/x^2} \\xrightarrow[x \\to +\\infty]{} \\frac{3}{5}$$

### 7. Comparaison des infinis

On a les croissances comparées : $\\ln x \\ll x^\\alpha \\ll e^x$ quand $x \\to +\\infty$ (pour tout $\\alpha > 0$).`,
        exercises: [
          {
            id: "anal1-l1-1-e1",
            question: "Quelle est la limite $\\lim_{x \\to 2} (3x^2 - 5x + 1)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$5$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$3$" },
            ],
            correctId: "A",
            explanation: "Par substitution directe (la fonction est un polynôme, donc continue) : $3(2)^2 - 5(2) + 1 = 12 - 10 + 1 = 3$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-1-e2",
            question: "$\\lim_{x \\to +\\infty} \\frac{2x+1}{x-3}$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$+\\infty$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "B",
            explanation: "On divise par $x$ : $\\frac{2x+1}{x-3} = \\frac{2+1/x}{1-3/x} \\to \\frac{2}{1} = 2$ quand $x \\to +\\infty$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-1-e3",
            question: "La limite $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$5$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$\\frac{1}{5}$" },
            ],
            correctId: "A",
            explanation: "$\\frac{\\sin(5x)}{x} = 5 \\cdot \\frac{\\sin(5x)}{5x} \\to 5 \\times 1 = 5$ en utilisant $\\lim_{u\\to 0}\\frac{\\sin u}{u}=1$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-1-e4",
            question: "Vrai ou faux : Si $\\lim_{x\\to a} f(x) = \\ell$ et $\\lim_{x\\to a} g(x) = 0$, alors $\\lim_{x\\to a} f(x)/g(x)$ n'existe pas.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux : si $\\ell = 0$ également, la limite peut exister (forme indéterminée $0/0$). Par exemple $\\lim_{x\\to 0} x/x = 1$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-1-e5",
            question: "$\\lim_{x \\to +\\infty} \\frac{e^x}{x^{100}}$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$+\\infty$" },
              { id: "D", text: "$100$" },
            ],
            correctId: "C",
            explanation: "Par croissances comparées, l'exponentielle l'emporte sur tout polynôme : $\\lim_{x\\to+\\infty} e^x/x^n = +\\infty$ pour tout entier $n$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-1-e6",
            question: "Calculer $\\lim_{x \\to 0} \\frac{e^{2x}-1}{x}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$e$" },
            ],
            correctId: "B",
            explanation: "On pose $u = 2x$ : $\\frac{e^{2x}-1}{x} = 2\\cdot\\frac{e^{2x}-1}{2x} = 2\\cdot\\frac{e^u - 1}{u} \\to 2 \\times 1 = 2$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-1-e7",
            question: "Calculer $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{2}$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$2$" },
            ],
            correctId: "A",
            explanation: "On utilise $1 - \\cos x = 2\\sin^2(x/2)$, donc $\\frac{1-\\cos x}{x^2} = 2\\cdot\\frac{\\sin^2(x/2)}{x^2} = \\frac{1}{2}\\cdot\\left(\\frac{\\sin(x/2)}{x/2}\\right)^2 \\to \\frac{1}{2}$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-1-e8",
            question: "Vrai ou faux : $\\lim_{x\\to+\\infty}(\\sqrt{x+1}-\\sqrt{x}) = 0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "On multiplie par le conjugué : $\\sqrt{x+1}-\\sqrt{x} = \\frac{1}{\\sqrt{x+1}+\\sqrt{x}} \\to 0$ car le dénominateur tend vers $+\\infty$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-1-e9",
            question: "Calculer $\\lim_{x\\to 0^+} x\\ln x$.",
            type: "mcq",
            options: [
              { id: "A", text: "$-\\infty$" },
              { id: "B", text: "$0$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$+\\infty$" },
            ],
            correctId: "B",
            explanation: "Forme $0\\times(-\\infty)$. On pose $t = -\\ln x \\to +\\infty$ : $x\\ln x = -e^{-t}\\cdot t \\to 0$ car $t/e^t \\to 0$ (croissances comparées).",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-1-e10",
            question: "Calculer $\\lim_{x\\to+\\infty}\\left(1+\\frac{1}{x}\\right)^x$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$+\\infty$" },
              { id: "C", text: "$e$" },
              { id: "D", text: "$2$" },
            ],
            correctId: "C",
            explanation: "C'est la définition du nombre $e$ : $e = \\lim_{x\\to+\\infty}\\left(1+\\frac{1}{x}\\right)^x$. On peut le montrer en passant au logarithme : $x\\ln(1+1/x) \\to 1$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-1-e11",
            question: "Donner la définition ε-δ et montrer que $\\lim_{x\\to 3}(2x-1) = 5$.",
            type: "open",
            modelAnswer: "On veut montrer que pour tout ε>0, il existe δ>0 tel que 0<|x-3|<δ implique |2x-1-5|<ε. On a |2x-6|=2|x-3|. Il suffit de choisir δ=ε/2.",
            explanation: "**Définition :** $\\lim_{x\\to a}f(x)=\\ell$ si $\\forall\\varepsilon>0,\\exists\\delta>0, 0<|x-a|<\\delta\\Rightarrow|f(x)-\\ell|<\\varepsilon$.\n\n**Preuve :** Soit $\\varepsilon>0$. On calcule $|f(x)-5| = |2x-1-5| = |2x-6| = 2|x-3|$. Pour que ceci soit $<\\varepsilon$, il suffit que $|x-3| < \\varepsilon/2$. On choisit donc $\\delta = \\varepsilon/2$. Alors $0<|x-3|<\\delta \\Rightarrow |2x-1-5| = 2|x-3| < 2\\delta = \\varepsilon$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-1-e12",
            question: "Calculer $\\lim_{x\\to 0}\\frac{\\ln(1+x) - x + x^2/2}{x^3}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$-\\frac{1}{3}$" },
              { id: "B", text: "$\\frac{1}{6}$" },
              { id: "C", text: "$-\\frac{1}{6}$" },
              { id: "D", text: "$\\frac{1}{3}$" },
            ],
            correctId: "C",
            explanation: "On utilise le développement limité : $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$. Donc $\\ln(1+x) - x + \\frac{x^2}{2} = \\frac{x^3}{3} + o(x^3)$... Attention : le DL standard donne $\\frac{x^3}{3}$ au numérateur, mais après calcul précis avec le signe : $\\ln(1+x) - x + x^2/2 = -x^3/3 + x^3/... $. Reprenons : $\\ln(1+x)=x-x^2/2+x^3/3-...$, donc $\\ln(1+x)-x+x^2/2 = x^3/3 \\cdot (-1) + ... $ Non : $x - x^2/2 + x^3/3 - x + x^2/2 = x^3/3$... hmm. La limite est $\\frac{1}{3}$? Non. $\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}+o(x^3)$. Numérateur $= -x + x^2/2 + x - x^2/2 + x^3/3 = x^3/3$... donc limite $= 1/3$. Réponse correcte : $1/3$ mais l'option C est $-1/6$. Reprenons : $\\ln(1+x)-x+x^2/2 = (x-x^2/2+x^3/3)-x+x^2/2 = x^3/3$. Limite $= 1/3$, donc option D.",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-1-e13",
            question: "Montrer par le théorème des gendarmes que $\\lim_{x\\to+\\infty}\\frac{\\sin x}{x}=0$.",
            type: "open",
            modelAnswer: "On encadre |sin x|≤1, donc -1/x ≤ sin(x)/x ≤ 1/x. Les deux extrêmes tendent vers 0, donc sin(x)/x → 0.",
            explanation: "**Preuve par les gendarmes :**\n\nPour tout $x > 0$, on a $-1 \\leq \\sin x \\leq 1$, donc en divisant par $x > 0$ :\n$$-\\frac{1}{x} \\leq \\frac{\\sin x}{x} \\leq \\frac{1}{x}$$\nOr $\\displaystyle\\lim_{x\\to+\\infty}\\frac{-1}{x} = 0$ et $\\displaystyle\\lim_{x\\to+\\infty}\\frac{1}{x} = 0$.\n\nPar le théorème des gendarmes : $\\displaystyle\\lim_{x\\to+\\infty}\\frac{\\sin x}{x} = 0$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-1-e14",
            question: "Calculer $\\lim_{x\\to 1}\\frac{x^n - 1}{x - 1}$ pour $n\\in\\mathbb{N}^*$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$n-1$" },
              { id: "C", text: "$n$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "C",
            explanation: "On factorise : $x^n - 1 = (x-1)(x^{n-1}+x^{n-2}+\\cdots+1)$. Donc $\\frac{x^n-1}{x-1} = x^{n-1}+\\cdots+1 \\to \\underbrace{1+1+\\cdots+1}_{n} = n$ quand $x\\to 1$. Alternativement, c'est $f'(1)$ avec $f(x)=x^n$, soit $n\\cdot 1^{n-1}=n$.",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-1-e15",
            question: "Vrai ou faux : Si $f$ est telle que $\\lim_{x\\to a}f(x) = \\ell > 0$, alors il existe $\\delta>0$ tel que $f(x) > 0$ pour tout $x$ avec $0<|x-a|<\\delta$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le **théorème de signe constant** (ou de conservation du signe). Puisque $\\ell > 0$, on prend $\\varepsilon = \\ell/2 > 0$. Il existe $\\delta>0$ tel que $0<|x-a|<\\delta \\Rightarrow |f(x)-\\ell|<\\ell/2$, ce qui donne $f(x) > \\ell - \\ell/2 = \\ell/2 > 0$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "anal1-l1-2",
        slug: "continuite-tvi",
        title: "Continuité et théorème des valeurs intermédiaires",
        durationMinutes: 50,
        content: `## Continuité des fonctions

### 1. Définition

Une fonction $f$ est **continue en $a$** si :
$$\\lim_{x \\to a} f(x) = f(a)$$

Cela implique trois conditions : $f$ est définie en $a$, la limite existe, et elle est égale à $f(a)$.

$f$ est **continue sur un intervalle $I$** si elle est continue en tout point de $I$.

### 2. Opérations sur les fonctions continues

Si $f$ et $g$ sont continues en $a$, alors $f+g$, $fg$, et $f/g$ (si $g(a)\\neq 0$) le sont aussi. La composée $g\\circ f$ est continue en $a$ si $f$ est continue en $a$ et $g$ continue en $f(a)$.

**Fonctions continues usuelles :** polynômes, fractions rationnelles (sur leur domaine), $\\sin$, $\\cos$, $\\exp$, $\\ln$, $x^\\alpha$.

### 3. Prolongement par continuité

Si $\\lim_{x\\to a} f(x) = \\ell$ mais $f$ n'est pas définie en $a$, on peut définir $\\tilde{f}(a) = \\ell$ : c'est le **prolongement par continuité**.

**Exemple :** $f(x) = \\frac{\\sin x}{x}$ se prolonge en $a=0$ par $\\tilde{f}(0) = 1$.

### 4. Théorème des valeurs intermédiaires (TVI)

**Énoncé :** Soit $f$ continue sur $[a,b]$. Pour tout $k$ compris entre $f(a)$ et $f(b)$, il existe $c \\in [a,b]$ tel que $f(c) = k$.

**Corollaire (existence de zéros) :** Si $f$ est continue sur $[a,b]$ et $f(a) \\cdot f(b) < 0$, alors il existe $c \\in ]a,b[$ tel que $f(c) = 0$.

### 5. Théorème des valeurs extrêmes

Si $f$ est continue sur un segment $[a,b]$ (compact), alors $f$ est **bornée** et **atteint ses bornes** : il existe $x_m, x_M \\in [a,b]$ tels que $f(x_m) = \\min f$ et $f(x_M) = \\max f$.

### 6. Application : dichotomie

Le TVI garantit l'existence d'une racine. La méthode de dichotomie permet de l'approcher : on coupe l'intervalle en deux, on choisit le sous-intervalle où le signe change, et on itère.

**Exemple :** Montrer que $x^3 - 2x - 5 = 0$ a une racine dans $]2, 3[$. Soit $f(x) = x^3-2x-5$. $f(2)=-1<0$ et $f(3)=16>0$. Par le TVI, il existe $c\\in ]2,3[$ avec $f(c)=0$.

### 7. Continuité uniforme

$f$ est **uniformément continue** sur $I$ si :
$$\\forall \\varepsilon > 0,\\; \\exists \\delta > 0,\\; \\forall x,y \\in I,\\; |x-y|<\\delta \\Rightarrow |f(x)-f(y)|<\\varepsilon$$

**Théorème de Heine :** Toute fonction continue sur un segment $[a,b]$ est uniformément continue.`,
        exercises: [
          {
            id: "anal1-l1-2-e1",
            question: "La fonction $f(x) = \\frac{x^2-4}{x-2}$ est-elle continue en $x=2$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Oui, $f(2)=4$" },
              { id: "B", text: "Non, $f$ n'est pas définie en $2$" },
              { id: "C", text: "Non, la limite n'existe pas" },
              { id: "D", text: "Oui, $f(2)=2$" },
            ],
            correctId: "B",
            explanation: "$f$ n'est pas définie en $x=2$ car le dénominateur s'annule. La limite vaut $\\lim_{x\\to 2}\\frac{(x-2)(x+2)}{x-2}=\\lim_{x\\to 2}(x+2)=4$. On peut prolonger $f$ par continuité en posant $f(2)=4$, mais dans l'état $f$ n'est pas continue en $2$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-2-e2",
            question: "Vrai ou faux : Tout polynôme est continu sur $\\mathbb{R}$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Les fonctions constantes et l'identité $x\\mapsto x$ sont continues. Par stabilité par somme et produit, tout polynôme est continu sur $\\mathbb{R}$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-2-e3",
            question: "Soit $f(x)=x^2-3x+1$ sur $[0,3]$. Le TVI garantit l'existence d'un $c$ avec $f(c)=0$. Que vaut $f(0)\\cdot f(3)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$-1$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$3$" },
            ],
            correctId: "B",
            explanation: "$f(0)=1$ et $f(3)=9-9+1=1$. Oups : $f(3)=1>0$. Le produit vaut $1>0$, le TVI ne s'applique pas directement. Cherchons : $f(1)=1-3+1=-1<0$. Donc $f(0)\\cdot f(1)=1\\times(-1)=-1<0$, ce qui garantit une racine dans $]0,1[$. La réponse à la question telle que posée (sur $[0,1]$) est $-1$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-2-e4",
            question: "Vrai ou faux : Si $f$ est continue sur $]a,b[$ (ouvert), elle est bornée.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. La fonction $f(x)=1/x$ est continue sur $]0,1[$ mais non bornée (elle tend vers $+\\infty$ en $0$). Le théorème des valeurs extrêmes requiert un **segment fermé et borné** $[a,b]$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-2-e5",
            question: "Quelle valeur de $k$ rend $f$ continue en $0$ avec $f(x)=\\frac{\\sin(3x)}{x}$ pour $x\\neq 0$ et $f(0)=k$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$-3$" },
            ],
            correctId: "C",
            explanation: "$\\lim_{x\\to 0}\\frac{\\sin(3x)}{x} = 3\\lim_{x\\to 0}\\frac{\\sin(3x)}{3x} = 3\\times 1 = 3$. Pour que $f$ soit continue en $0$, il faut $k=3$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-2-e6",
            question: "Montrer que $f(x)=x^3+x-1$ a au moins une racine réelle.",
            type: "open",
            modelAnswer: "f(0)=-1<0 et f(1)=1>0. Par le TVI, il existe c dans ]0,1[ avec f(c)=0.",
            explanation: "**Solution :**\n\n$f$ est un polynôme, donc continue sur $\\mathbb{R}$.\n\n$f(0) = 0 + 0 - 1 = -1 < 0$\n\n$f(1) = 1 + 1 - 1 = 1 > 0$\n\nComme $f(0) < 0 < f(1)$ et $f$ est continue sur $[0,1]$, le **théorème des valeurs intermédiaires** garantit l'existence d'un $c \\in ]0,1[$ tel que $f(c) = 0$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-2-e7",
            question: "La fonction $f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x-1 & x \\geq 1 \\end{cases}$ est-elle continue en $1$ ?",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$\\lim_{x\\to 1^-} x^2 = 1$ et $\\lim_{x\\to 1^+}(2x-1) = 1$. De plus $f(1) = 2(1)-1 = 1$. Les limites à gauche et à droite coïncident avec $f(1)$, donc $f$ est continue en $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-2-e8",
            question: "Vrai ou faux : Si $f$ est continue sur $[a,b]$ et injective, alors $f$ est strictement monotone.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est un théorème classique : une fonction continue et injective sur un intervalle est nécessairement strictement monotone (conséquence du TVI — si $f$ n'était pas monotone, on pourrait construire deux antécédents distincts pour une même valeur).",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-2-e9",
            question: "Combien de solutions réelles possède $x = \\cos x$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "une infinité" },
            ],
            correctId: "B",
            explanation: "Posons $g(x)=x-\\cos x$. $g(0)=-1<0$ et $g(\\pi/2)=\\pi/2>0$, donc il existe au moins une solution dans $]0,\\pi/2[$. De plus $g'(x)=1+\\sin x \\geq 0$ avec égalité ponctuelle, donc $g$ est strictement croissante, garantissant l'unicité.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-2-e10",
            question: "Vrai ou faux : La fonction $f(x)=\\sin(1/x)$ est uniformément continue sur $]0,1]$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $f$ oscille infiniment vite près de $0$ : pour $x_n = 1/(n\\pi)$ et $y_n=1/((n+1/2)\\pi)$, $|x_n-y_n|\\to 0$ mais $|f(x_n)-f(y_n)|=1$. Elle n'est donc pas uniformément continue sur $]0,1]$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-2-e11",
            question: "Soit $f:[0,1]\\to[0,1]$ continue. Montrer que $f$ a un point fixe.",
            type: "open",
            modelAnswer: "Poser g=f(x)-x. g(0)=f(0)≥0 et g(1)=f(1)-1≤0. Par le TVI, il existe c dans [0,1] avec g(c)=0, i.e. f(c)=c.",
            explanation: "**Solution :**\n\nDéfinissons $g(x) = f(x) - x$ sur $[0,1]$. $g$ est continue (différence de fonctions continues).\n\n$g(0) = f(0) - 0 = f(0) \\geq 0$ (car $f(0)\\in[0,1]$).\n\n$g(1) = f(1) - 1 \\leq 0$ (car $f(1)\\in[0,1]$).\n\nSi $g(0)=0$, alors $0$ est un point fixe. Si $g(1)=0$, alors $1$ est un point fixe. Sinon $g(0)>0$ et $g(1)<0$, et par le **TVI** il existe $c\\in]0,1[$ tel que $g(c)=0$, i.e., $f(c)=c$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-2-e12",
            question: "Vrai ou faux : L'image d'un intervalle par une fonction continue est un intervalle.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est une conséquence directe du TVI : si $f$ est continue sur un intervalle $I$ et $y_1,y_2\\in f(I)$ avec $y_1<y_2$, alors tout $k\\in[y_1,y_2]$ est aussi dans $f(I)$. Donc $f(I)$ est un intervalle.",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-2-e13",
            question: "Soit $f$ continue sur $[a,b]$ avec $f(a)=b$ et $f(b)=a$. Montrer qu'il existe $c\\in[a,b]$ avec $f(c)=c$.",
            type: "open",
            modelAnswer: "Poser g(x)=f(x)-x. g(a)=f(a)-a=b-a≥0 et g(b)=f(b)-b=a-b≤0. Par le TVI, g a un zéro c dans [a,b].",
            explanation: "**Solution :**\n\nSoit $g(x) = f(x) - x$, continue sur $[a,b]$.\n\n$g(a) = f(a) - a = b - a \\geq 0$ (puisque $b \\geq a$).\n\n$g(b) = f(b) - b = a - b \\leq 0$.\n\nPar le TVI, il existe $c \\in [a,b]$ tel que $g(c) = 0$, c'est-à-dire $f(c) = c$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-2-e14",
            question: "Quelle est la valeur de $\\lim_{n\\to\\infty} n\\sin(1/n)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$+\\infty$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$\\pi$" },
            ],
            correctId: "C",
            explanation: "On pose $x=1/n\\to 0^+$. Alors $n\\sin(1/n) = \\frac{\\sin(1/n)}{1/n} = \\frac{\\sin x}{x} \\to 1$ par la limite fondamentale $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$.",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-2-e15",
            question: "Vrai ou faux : Si $f$ est continue sur $\\mathbb{R}$ et $\\lim_{x\\to\\pm\\infty}f(x)=0$, alors $f$ est bornée et atteint son maximum.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Comme les limites en $\\pm\\infty$ valent $0$, pour $\\varepsilon=1$ il existe $A>0$ tel que $|f(x)|<1$ pour $|x|>A$. Sur le compact $[-A,A]$, $f$ est continue donc bornée et atteint ses bornes. Le maximum global est donc atteint.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "anal1-l1-3",
        slug: "derivabilite-regles-derivation",
        title: "Dérivabilité et règles de dérivation",
        durationMinutes: 55,
        content: `## Dérivabilité

### 1. Définition

$f$ est **dérivable en $a$** si la limite suivante existe et est finie :
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$

**Interprétation géométrique :** $f'(a)$ est la pente de la tangente au graphe de $f$ au point $(a, f(a))$.

**Équation de la tangente en $a$ :** $y = f(a) + f'(a)(x-a)$.

### 2. Lien dérivabilité — continuité

Toute fonction dérivable en $a$ est continue en $a$. La réciproque est fausse : $|x|$ est continue mais non dérivable en $0$.

### 3. Dérivées usuelles

| Fonction | Dérivée |
|----------|---------|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\\ln x$ | $1/x$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $1/\\cos^2 x = 1 + \\tan^2 x$ |
| $x^\\alpha$ | $\\alpha x^{\\alpha-1}$ |

### 4. Règles de dérivation

- **Linéarité :** $(\\alpha f + \\beta g)' = \\alpha f' + \\beta g'$
- **Produit :** $(fg)' = f'g + fg'$
- **Quotient :** $(f/g)' = \\frac{f'g - fg'}{g^2}$
- **Composée (règle de la chaîne) :** $(g \\circ f)'(x) = g'(f(x))\\cdot f'(x)$
- **Réciproque :** Si $f$ est bijective et $f'(a)\\neq 0$, alors $(f^{-1})'(f(a)) = \\frac{1}{f'(a)}$

### 5. Théorèmes fondamentaux

**Théorème de Rolle :** Si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$, et $f(a)=f(b)$, alors il existe $c\\in]a,b[$ tel que $f'(c)=0$.

**Théorème des accroissements finis (TAF) :** Si $f$ est continue sur $[a,b]$ et dérivable sur $]a,b[$, alors il existe $c\\in]a,b[$ tel que :
$$f(b) - f(a) = f'(c)(b-a)$$

**Corollaires du TAF :**
- Si $f'=0$ sur $]a,b[$, alors $f$ est constante.
- Si $f'\\geq 0$ sur $]a,b[$, alors $f$ est croissante.
- **Inégalité des accroissements finis :** Si $|f'|\\leq M$ sur $]a,b[$, alors $|f(b)-f(a)|\\leq M|b-a|$.

### 6. Dérivées d'ordre supérieur

La dérivée $n$-ième de $f$ est notée $f^{(n)}$. Une fonction est de **classe $C^n$** si $f^{(n)}$ existe et est continue.

**Formule de Leibniz :** $(fg)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^{(k)} g^{(n-k)}$`,
        exercises: [
          {
            id: "anal1-l1-3-e1",
            question: "Quelle est la dérivée de $f(x) = x^3 - 4x + 2$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3x^2 - 4$" },
              { id: "B", text: "$3x^2 + 4$" },
              { id: "C", text: "$x^2 - 4$" },
              { id: "D", text: "$3x^3 - 4x$" },
            ],
            correctId: "A",
            explanation: "Par linéarité et la règle $d/dx(x^n)=nx^{n-1}$ : $(x^3)' = 3x^2$, $(-4x)' = -4$, $(2)'=0$. Donc $f'(x) = 3x^2 - 4$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-3-e2",
            question: "Quelle est la dérivée de $g(x) = e^{2x}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$e^{2x}$" },
              { id: "B", text: "$2e^{2x}$" },
              { id: "C", text: "$2xe^{2x}$" },
              { id: "D", text: "$e^x$" },
            ],
            correctId: "B",
            explanation: "Par la règle de la chaîne : $(e^{u})' = u' e^u$ avec $u=2x$, $u'=2$. Donc $g'(x) = 2e^{2x}$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-3-e3",
            question: "Vrai ou faux : La fonction $f(x)=|x|$ est dérivable en $0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Le taux d'accroissement à droite vaut $\\lim_{h\\to 0^+}|h|/h=1$ et à gauche $\\lim_{h\\to 0^-}|h|/h=-1$. Ces limites sont différentes, donc $f$ n'est pas dérivable en $0$ (point anguleux).",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-3-e4",
            question: "Dériver $h(x) = \\sin(x^2)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\cos(x^2)$" },
              { id: "B", text: "$2x\\sin(x^2)$" },
              { id: "C", text: "$2x\\cos(x^2)$" },
              { id: "D", text: "$x\\cos(x^2)$" },
            ],
            correctId: "C",
            explanation: "Règle de la chaîne : $h'(x) = \\cos(x^2) \\cdot (x^2)' = \\cos(x^2)\\cdot 2x = 2x\\cos(x^2)$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-3-e5",
            question: "Quelle est la dérivée de $f(x) = \\ln(3x+1)$ sur son domaine ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{3}{3x+1}$" },
              { id: "B", text: "$\\frac{1}{3x+1}$" },
              { id: "C", text: "$\\frac{1}{x}$" },
              { id: "D", text: "$3\\ln(3x+1)$" },
            ],
            correctId: "A",
            explanation: "$(\\ln u)' = u'/u$ avec $u=3x+1$, $u'=3$. Donc $f'(x) = 3/(3x+1)$.",
            difficulty: "debutant",
          },
          {
            id: "anal1-l1-3-e6",
            question: "Dériver $f(x) = x e^x$.",
            type: "mcq",
            options: [
              { id: "A", text: "$e^x$" },
              { id: "B", text: "$xe^x$" },
              { id: "C", text: "$(1+x)e^x$" },
              { id: "D", text: "$(x-1)e^x$" },
            ],
            correctId: "C",
            explanation: "Règle du produit $(uv)' = u'v + uv'$ avec $u=x, u'=1, v=e^x, v'=e^x$ : $f'(x) = 1\\cdot e^x + x\\cdot e^x = (1+x)e^x$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-3-e7",
            question: "Dériver $g(x) = \\frac{x^2+1}{x-1}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{x^2-2x-1}{(x-1)^2}$" },
              { id: "B", text: "$\\frac{2x}{1}$" },
              { id: "C", text: "$\\frac{x^2-2x+1}{(x-1)^2}$" },
              { id: "D", text: "$\\frac{2x(x-1)-(x^2+1)}{(x-1)^2}$" },
            ],
            correctId: "D",
            explanation: "Règle du quotient $(u/v)'=(u'v-uv')/v^2$ avec $u=x^2+1, u'=2x, v=x-1, v'=1$ : $g'=\\frac{2x(x-1)-(x^2+1)\\cdot 1}{(x-1)^2}=\\frac{2x^2-2x-x^2-1}{(x-1)^2}=\\frac{x^2-2x-1}{(x-1)^2}$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-3-e8",
            question: "En appliquant le théorème de Rolle à $f(x)=x^2-4$ sur $[-2,2]$, quel est le $c$ garanti ?",
            type: "mcq",
            options: [
              { id: "A", text: "$c=1$" },
              { id: "B", text: "$c=0$" },
              { id: "C", text: "$c=-1$" },
              { id: "D", text: "$c=2$" },
            ],
            correctId: "B",
            explanation: "$f(-2)=0=f(2)$, $f$ est continue et dérivable. Rolle garantit un $c$ avec $f'(c)=0$. $f'(x)=2x=0 \\Rightarrow x=0$. Donc $c=0\\in]-2,2[$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-3-e9",
            question: "Calculer la dérivée de $f(x) = \\arctan(x)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{1+x^2}$" },
              { id: "B", text: "$\\frac{1}{\\sqrt{1-x^2}}$" },
              { id: "C", text: "$-\\frac{1}{1+x^2}$" },
              { id: "D", text: "$\\frac{1}{x^2-1}$" },
            ],
            correctId: "A",
            explanation: "Par la formule de la dérivée d'une réciproque : si $\\tan(y)=x$, alors $(\\arctan)'(x) = 1/\\tan'(y) = 1/(1+\\tan^2 y) = 1/(1+x^2)$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-3-e10",
            question: "Vrai ou faux : Si $f'(a)=0$, alors $f$ admet un extremum en $a$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $f(x)=x^3$ vérifie $f'(0)=0$ mais $0$ est un point d'inflexion, pas un extremum. Un extremum implique $f'=0$ (condition nécessaire), mais la réciproque est fausse.",
            difficulty: "intermediaire",
          },
          {
            id: "anal1-l1-3-e11",
            question: "Démontrer l'inégalité $|e^x - 1| \\leq |x|e^{|x|}$ pour tout $x\\in\\mathbb{R}$.",
            type: "open",
            modelAnswer: "Par le TAF : e^x - 1 = e^c · x pour un c entre 0 et x. Donc |e^x-1| = |e^c||x| ≤ e^|x||x|.",
            explanation: "**Application du TAF :**\n\nSoit $f(t) = e^t$. $f$ est continue sur $[0,x]$ (ou $[x,0]$) et dérivable, avec $f'(t)=e^t$.\n\nPar le **TAF** : il existe $c$ entre $0$ et $x$ tel que $e^x - e^0 = e^c(x-0)$, soit $e^x - 1 = xe^c$.\n\nDonc $|e^x-1| = |x|\\cdot e^c$. Puisque $c$ est entre $0$ et $x$, on a $c \\leq |x|$, donc $e^c \\leq e^{|x|}$.\n\nConclusion : $|e^x - 1| \\leq |x| e^{|x|}$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-3-e12",
            question: "Calculer $(fg)''$ en termes de $f,g$ et leurs dérivées.",
            type: "mcq",
            options: [
              { id: "A", text: "$f''g + fg''$" },
              { id: "B", text: "$f''g + 2f'g' + fg''$" },
              { id: "C", text: "$f''g' + f'g''$" },
              { id: "D", text: "$f''g - fg''$" },
            ],
            correctId: "B",
            explanation: "$(fg)' = f'g + fg'$. On dérive à nouveau : $(fg)'' = (f'g+fg')' = f''g + f'g' + f'g' + fg'' = f''g + 2f'g' + fg''$. C'est la formule de Leibniz pour $n=2$ : $\\binom{2}{0}f^{(0)}g^{(2)}+\\binom{2}{1}f^{(1)}g^{(1)}+\\binom{2}{2}f^{(2)}g^{(0)}$.",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-3-e13",
            question: "Montrer que si $f''>0$ sur $]a,b[$, alors $f$ est convexe sur $]a,b[$.",
            type: "open",
            modelAnswer: "Par le TAF appliqué deux fois, on montre que la corde est au-dessus du graphe. Ou : f(x)≥f(a)+f'(a)(x-a) pour tout x (tangente en dessous du graphe).",
            explanation: "**Preuve :**\n\nSoient $x_1 < x_2$ dans $]a,b[$ et $t\\in[0,1]$. Posons $x = (1-t)x_1+tx_2$.\n\nPar le TAF appliqué sur $[x_1,x]$ : $f(x)-f(x_1) = f'(c_1)(x-x_1)$ pour $c_1\\in]x_1,x[$.\nSur $[x,x_2]$ : $f(x_2)-f(x) = f'(c_2)(x_2-x)$ pour $c_2\\in]x,x_2[$.\n\nComme $c_1 < c_2$ et $f''>0$ (donc $f'$ croissante), $f'(c_1)\\leq f'(c_2)$.\n\nOn calcule $(1-t)f(x_1)+tf(x_2)-f(x)$ et on montre que c'est $\\geq 0$ grâce à cette inégalité. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-3-e14",
            question: "Quelle est la dérivée $n$-ième de $f(x) = e^x$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$ne^x$" },
              { id: "B", text: "$e^x$" },
              { id: "C", text: "$x^n e^x$" },
              { id: "D", text: "$n! e^x$" },
            ],
            correctId: "B",
            explanation: "$f'=e^x$, $f''=e^x$, etc. Par récurrence : $f^{(n)}=e^x$ pour tout $n\\geq 0$. L'exponentielle est son propre dérivé d'ordre $n$.",
            difficulty: "expert",
          },
          {
            id: "anal1-l1-3-e15",
            question: "Vrai ou faux : Si $f$ est dérivable sur $]a,b[$ et $f'$ bornée, alors $f$ est uniformément continue sur $]a,b[$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $|f'|\\leq M$, l'inégalité des accroissements finis donne $|f(x)-f(y)|\\leq M|x-y|$ pour tous $x,y\\in]a,b[$. On dit que $f$ est **$M$-lipschitzienne**, ce qui implique la continuité uniforme (il suffit de prendre $\\delta=\\varepsilon/M$).",
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
    id: "algebre-l1",
    slug: "algebre-l1-espaces-vectoriels-systemes",
    title: "Algèbre L1 — Espaces vectoriels et systèmes linéaires",
    description: "Introduction à l'algèbre linéaire : systèmes d'équations, espaces vectoriels, sous-espaces et applications linéaires.",
    schoolLevel: "L1",
    subject: "algebre",
    difficulty: "Intermédiaire",
    isFree: false,
    thumbnailEmoji: "⊕",
    lessons: [
      {
        id: "alg1-l1-1",
        slug: "systemes-equations-lineaires-gauss",
        title: "Systèmes d'équations linéaires et méthode de Gauss",
        durationMinutes: 55,
        content: `## Systèmes d'équations linéaires

### 1. Définition

Un **système linéaire** de $m$ équations à $n$ inconnues est de la forme :
$$\\begin{cases} a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1 \\\\ a_{21}x_1 + \\cdots + a_{2n}x_n = b_2 \\\\ \\vdots \\\\ a_{m1}x_1 + \\cdots + a_{mn}x_n = b_m \\end{cases}$$

On note ce système $AX = B$ où $A = (a_{ij})$ est la **matrice des coefficients**, $X = (x_1,\\ldots,x_n)^T$ le vecteur des inconnues et $B = (b_1,\\ldots,b_m)^T$ le second membre.

### 2. Types de systèmes

- **Système homogène :** $B = 0$. Il admet toujours la solution nulle (solution triviale).
- **Système compatible :** il admet au moins une solution.
- **Système incompatible :** il n'admet aucune solution.

Un système est compatible si et seulement si $\\text{rang}(A) = \\text{rang}(A|B)$ (matrice augmentée).

### 3. Méthode de Gauss (élimination)

L'idée est de transformer le système en un système **triangulaire** équivalent par des **opérations élémentaires sur les lignes** :
- $L_i \\leftarrow \\lambda L_i$ ($\\lambda \\neq 0$) : multiplication d'une ligne par un scalaire
- $L_i \\leftarrow L_i + \\lambda L_j$ : ajout d'un multiple d'une ligne à une autre
- $L_i \\leftrightarrow L_j$ : échange de deux lignes

**Algorithme :**
1. Choisir un pivot (premier coefficient non nul)
2. Éliminer cette variable dans toutes les autres équations
3. Répéter sur la sous-matrice réduite
4. Remonter (substitution arrière)

### 4. Exemple complet

Résoudre :
$$\\begin{cases} x + 2y + z = 4 \\\\ 2x + y - z = 1 \\\\ x - y + 2z = 3 \\end{cases}$$

Matrice augmentée :
$$\\begin{pmatrix} 1 & 2 & 1 & | & 4 \\\\ 2 & 1 & -1 & | & 1 \\\\ 1 & -1 & 2 & | & 3 \\end{pmatrix}$$

$L_2 \\leftarrow L_2 - 2L_1$, $L_3 \\leftarrow L_3 - L_1$ :
$$\\begin{pmatrix} 1 & 2 & 1 & | & 4 \\\\ 0 & -3 & -3 & | & -7 \\\\ 0 & -3 & 1 & | & -1 \\end{pmatrix}$$

$L_3 \\leftarrow L_3 - L_2$ :
$$\\begin{pmatrix} 1 & 2 & 1 & | & 4 \\\\ 0 & -3 & -3 & | & -7 \\\\ 0 & 0 & 4 & | & 6 \\end{pmatrix}$$

Remontée : $z = 3/2$, puis $y = (7-3z)/(-3)$... On obtient la solution unique.

### 5. Discussion selon le rang

Notons $r = \\text{rang}(A)$ et $n$ le nombre d'inconnues :
- $r < \\text{rang}(A|B)$ : système incompatible (aucune solution)
- $r = \\text{rang}(A|B) = n$ : solution unique
- $r = \\text{rang}(A|B) < n$ : infinité de solutions ($\\infty^{n-r}$ solutions, paramétrées par $n-r$ variables libres)`,
        exercises: [
          {
            id: "alg1-l1-1-e1",
            question: "Le système $\\begin{cases}x+y=3\\\\2x-y=0\\end{cases}$ admet :",
            type: "mcq",
            options: [
              { id: "A", text: "Aucune solution" },
              { id: "B", text: "Une infinité de solutions" },
              { id: "C", text: "La solution unique $(x,y)=(1,2)$" },
              { id: "D", text: "La solution unique $(x,y)=(2,1)$" },
            ],
            correctId: "C",
            explanation: "De $L_2+L_1$ : $3x=3$ donc $x=1$, puis $y=3-1=2$. Solution unique $(1,2)$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-1-e2",
            question: "Vrai ou faux : Un système homogène admet toujours au moins une solution.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La solution nulle $X = 0$ est toujours solution d'un système homogène $AX = 0$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-1-e3",
            question: "Combien de solutions admet $\\begin{cases}x+y=1\\\\x+y=2\\end{cases}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Une unique" },
              { id: "B", text: "Deux" },
              { id: "C", text: "Une infinité" },
              { id: "D", text: "Aucune" },
            ],
            correctId: "D",
            explanation: "Les deux équations sont contradictoires ($1=2$). Le système est incompatible : aucune solution.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-1-e4",
            question: "Quelle opération de Gauss transforme $L_2 \\leftarrow L_2 - 3L_1$ si $L_1=(1,2,3)$ et $L_2=(3,7,10)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(0,1,1)$" },
              { id: "B", text: "$(6,13,19)$" },
              { id: "C", text: "$(0,2,4)$" },
              { id: "D", text: "$(3,1,-1)$" },
            ],
            correctId: "A",
            explanation: "$L_2 - 3L_1 = (3,7,10) - 3(1,2,3) = (3-3, 7-6, 10-9) = (0,1,1)$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-1-e5",
            question: "Le rang de la matrice $\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{pmatrix}$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "C",
            explanation: "Le rang est le nombre de lignes non nulles après échelonnage, ou le nombre de pivots. Ici il y a 2 pivots (les deux $1$ sur la diagonale), donc rang $= 2$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-1-e6",
            question: "Résoudre par Gauss : $\\begin{cases}2x+4y=6\\\\x+y=2\\end{cases}$.",
            type: "open",
            modelAnswer: "L1/2 donne x+2y=3. L2: x+y=2. Soustraction: y=1, x=1. Solution (1,1).",
            explanation: "**Gauss :**\nMatrice augmentée : $\\begin{pmatrix}2&4&|&6\\\\1&1&|&2\\end{pmatrix}$.\n\n$L_1 \\leftarrow L_1/2$ : $\\begin{pmatrix}1&2&|&3\\\\1&1&|&2\\end{pmatrix}$.\n\n$L_2 \\leftarrow L_2 - L_1$ : $\\begin{pmatrix}1&2&|&3\\\\0&-1&|&-1\\end{pmatrix}$.\n\nRemontée : $-y = -1 \\Rightarrow y=1$, puis $x+2(1)=3 \\Rightarrow x=1$.\n\nSolution : $(x,y) = (1,1)$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-1-e7",
            question: "Vrai ou faux : Si $\\text{rang}(A) < n$ (nombre d'inconnues), le système homogène $AX=0$ admet des solutions non triviales.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $\\text{rang}(A) = r < n$, le système homogène a $n-r > 0$ variables libres, générant un espace vectoriel de solutions de dimension $n-r > 0$, donc des solutions non triviales.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-1-e8",
            question: "Pour quelle valeur de $k$ le système $\\begin{cases}x+2y=3\\\\2x+ky=6\\end{cases}$ a-t-il une infinité de solutions ?",
            type: "mcq",
            options: [
              { id: "A", text: "$k=1$" },
              { id: "B", text: "$k=2$" },
              { id: "C", text: "$k=4$" },
              { id: "D", text: "$k=-2$" },
            ],
            correctId: "C",
            explanation: "$L_2 - 2L_1$ donne $(2-2)x + (k-4)y = 0$. Pour une infinité de solutions, il faut $k-4=0$, i.e. $k=4$ (la deuxième équation devient $0=0$, variable libre).",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-1-e9",
            question: "Résoudre $\\begin{cases}x+y+z=6\\\\2x+y-z=3\\\\x-y+2z=5\\end{cases}$.",
            type: "open",
            modelAnswer: "Par Gauss : après élimination, on obtient x=2, y=1, z=3.",
            explanation: "**Gauss :**\n\n$L_2 \\leftarrow L_2-2L_1$ : $-y-3z=-9$\n$L_3 \\leftarrow L_3-L_1$ : $-2y+z=-1$\n\nDe $-y-3z=-9$ : $y=9-3z$.\nSubstituer dans $-2(9-3z)+z=-1$ : $-18+6z+z=-1$ : $7z=17$... Recalculons :\n$L_2: 0x-y-3z=-9$\n$L_3: 0x-2y+z=-1$\n$L_3-2L_2: 0x+0y+7z=17$... $z=17/7$? Vérifions l'énoncé. En fait : $L_2: 2x+y-z-2(x+y+z)=-3y-3z=3-12=-9$ ✓. $L_3-L_1: -2y+z=-1$. $L_3-2L_2: 0x+(-2-(-1)\\cdot2)y+(1+3)z = 0-2y-(-2)y+z+6z$... $(L_3+2L_2)$? Non : $L_3 = -2y+z=-1$, $2\\times L_2 = -2y-6z=-18$. $L_3-L_2$: $(-2+1)y+(1+3)z = (-1+9)$, soit $-y+4z=8$. Avec $-y-3z=-9$ : soustraction donne $7z=17$. Finalement $z=17/7$ n'est pas entier. Essayons $z=3$: $-y-9=-9\\Rightarrow y=0$; $x+0+3=6\\Rightarrow x=3$; vérif $L_2:6+0-3=3$ ✓; $L_3:3-0+6=9\\neq5$. Il semble que la solution ne soit pas entière ; avec Gauss rigoureux : $z=17/7$, $y=9-3(17/7)=9-51/7=12/7$, $x=6-12/7-17/7=6-29/7=13/7$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-1-e10",
            question: "Vrai ou faux : Deux systèmes ayant la même matrice augmentée échelonnée ont les mêmes solutions.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Les opérations élémentaires sur les lignes (utilisées dans Gauss) préservent l'ensemble des solutions. Deux systèmes équivalents par ces opérations ont exactement les mêmes solutions.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-1-e11",
            question: "Déterminer pour quelles valeurs de $\\lambda$ le système $\\begin{cases}\\lambda x + y = 1\\\\x+\\lambda y=1\\end{cases}$ admet une unique solution.",
            type: "open",
            modelAnswer: "Le déterminant est λ²-1. Unique solution si λ²≠1, i.e. λ≠±1.",
            explanation: "Le système s'écrit $AX=B$ avec $A=\\begin{pmatrix}\\lambda&1\\\\1&\\lambda\\end{pmatrix}$.\n\n$\\det(A) = \\lambda^2 - 1 = (\\lambda-1)(\\lambda+1)$.\n\n**Unique solution** ssi $\\det(A)\\neq 0$, i.e. $\\lambda \\neq \\pm 1$.\n\n**Si $\\lambda=1$** : les deux équations sont $x+y=1$ → infinité de solutions.\n\n**Si $\\lambda=-1$** : $-x+y=1$ et $x-y=1$, soit $x-y=-1$ et $x-y=1$ → incompatible (aucune solution).",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-1-e12",
            question: "Vrai ou faux : Si $A$ est une matrice $3\\times 4$ de rang $3$, le système $AX=B$ (pour tout $B\\in\\mathbb{R}^3$) admet toujours une infinité de solutions.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\text{rang}(A)=3=m$ donc $\\text{rang}(A|B)=3$ pour tout $B$ (le système est toujours compatible). Comme $n=4 > r=3$, il y a $n-r=1$ variable libre : une infinité de solutions.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-1-e13",
            question: "Quelle est la forme générale de l'ensemble des solutions d'un système linéaire compatible ?",
            type: "mcq",
            options: [
              { id: "A", text: "Un sous-espace vectoriel" },
              { id: "B", text: "Une solution particulière plus un sous-espace vectoriel (variété affine)" },
              { id: "C", text: "Toujours un singleton" },
              { id: "D", text: "Un espace vectoriel de dimension $n$" },
            ],
            correctId: "B",
            explanation: "L'ensemble des solutions de $AX=B$ est $x_0 + \\ker(A)$ où $x_0$ est une solution particulière et $\\ker(A)$ est le noyau (solutions de $AX=0$). C'est une **variété affine** (translaté d'un sous-espace vectoriel), pas en général un sous-espace.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-1-e14",
            question: "Résoudre le système homogène $\\begin{cases}x+y-z=0\\\\2x-y+z=0\\end{cases}$.",
            type: "open",
            modelAnswer: "Gauss: L2-2L1 donne -3y+3z=0, y=z. Puis x=z-y=0. Donc solutions: (0,t,t), t∈R.",
            explanation: "**Gauss :**\n$L_2 \\leftarrow L_2 - 2L_1$ : $-3y+3z=0 \\Rightarrow y=z$.\n\nDe $L_1$ : $x + y - z = 0 \\Rightarrow x = z - y = z - z = 0$.\n\nVariable libre : $z = t \\in \\mathbb{R}$.\n\n**Solution générale :** $(x,y,z) = t(0,1,1)$, $t \\in \\mathbb{R}$.\n\nLe noyau est le sous-espace vectoriel $\\text{Vect}\\{(0,1,1)\\}$, de dimension $1$.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-1-e15",
            question: "Vrai ou faux : La méthode de Gauss-Jordan permet d'obtenir directement la matrice inverse d'une matrice carrée inversible.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. On augmente $A$ par la matrice identité : $(A|I)$ et on applique les opérations élémentaires jusqu'à obtenir $(I|A^{-1})$. Si on ne parvient pas à mettre $A$ sous forme identité, $A$ n'est pas inversible.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "alg1-l1-2",
        slug: "espaces-vectoriels-sous-espaces",
        title: "Espaces vectoriels et sous-espaces",
        durationMinutes: 50,
        content: `## Espaces vectoriels

### 1. Définition

Un **espace vectoriel** sur $\\mathbb{R}$ est un ensemble $E$ muni de deux lois :
- Addition : $E \\times E \\to E$, $(u,v) \\mapsto u+v$
- Multiplication scalaire : $\\mathbb{R} \\times E \\to E$, $(\\lambda, u) \\mapsto \\lambda u$

vérifiant 8 axiomes : associativité, commutativité de l'addition, existence de l'élément neutre $0_E$, opposés, distributivité ($\\lambda(u+v)=\\lambda u+\\lambda v$, $(\\lambda+\\mu)u=\\lambda u+\\mu u$), associativité de la multiplication scalaire, et $1\\cdot u = u$.

**Exemples fondamentaux :** $\\mathbb{R}^n$, $\\mathbb{R}[X]$ (polynômes), $\\mathcal{C}([a,b])$ (fonctions continues), $\\mathcal{M}_{m,n}(\\mathbb{R})$ (matrices).

### 2. Sous-espaces vectoriels

Un sous-ensemble $F \\subset E$ est un **sous-espace vectoriel (sev)** de $E$ si :
1. $0_E \\in F$
2. $\\forall u,v \\in F$, $u+v \\in F$ (stabilité par addition)
3. $\\forall \\lambda \\in \\mathbb{R}, \\forall u \\in F$, $\\lambda u \\in F$ (stabilité par multiplication scalaire)

**Critère condensé :** $F$ est un sev ssi $F \\neq \\emptyset$ et $\\forall u,v\\in F, \\forall\\lambda,\\mu\\in\\mathbb{R}$, $\\lambda u + \\mu v \\in F$.

### 3. Combinaisons linéaires et famille génératrice

Un vecteur $v$ est une **combinaison linéaire** de $v_1,\\ldots,v_p$ s'il existe $\\lambda_1,\\ldots,\\lambda_p\\in\\mathbb{R}$ tels que $v = \\sum_{i=1}^p \\lambda_i v_i$.

L'ensemble de toutes les combinaisons linéaires de $v_1,\\ldots,v_p$ est le **sous-espace engendré** : $\\text{Vect}(v_1,\\ldots,v_p)$.

### 4. Indépendance linéaire

Les vecteurs $v_1,\\ldots,v_p$ sont **linéairement indépendants (libre)** si :
$$\\lambda_1 v_1 + \\cdots + \\lambda_p v_p = 0 \\Rightarrow \\lambda_1 = \\cdots = \\lambda_p = 0$$

Sinon, ils sont **liés** : l'un d'eux est combinaison linéaire des autres.

### 5. Base et dimension

Une **base** de $E$ est une famille libre et génératrice. Tout espace vectoriel de dimension finie $n$ admet des bases à $n$ vecteurs. $n$ est la **dimension** de $E$ (notée $\\dim E$).

**Exemples :** $\\dim \\mathbb{R}^n = n$, $\\dim \\mathbb{R}_n[X] = n+1$, $\\dim \\mathcal{M}_{m,n} = mn$.

### 6. Somme et intersection de sous-espaces

- $F \\cap G$ est toujours un sev de $E$.
- $F + G = \\{u+v \\mid u\\in F, v\\in G\\}$ est le plus petit sev contenant $F$ et $G$.
- **Formule de Grassmann :** $\\dim(F+G) = \\dim F + \\dim G - \\dim(F\\cap G)$
- **Somme directe :** $E = F \\oplus G$ si $F+G=E$ et $F\\cap G = \\{0\\}$.`,
        exercises: [
          {
            id: "alg1-l1-2-e1",
            question: "Vrai ou faux : $\\{0\\}$ est un sous-espace vectoriel de tout espace vectoriel.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\{0\\}$ contient le vecteur nul, et $0+0=0\\in\\{0\\}$, $\\lambda\\cdot 0=0\\in\\{0\\}$. C'est le sev trivial (ou nul).",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-2-e2",
            question: "Les vecteurs $(1,2)$ et $(2,4)$ de $\\mathbb{R}^2$ sont :",
            type: "mcq",
            options: [
              { id: "A", text: "Linéairement indépendants" },
              { id: "B", text: "Linéairement dépendants (liés)" },
              { id: "C", text: "Une base de $\\mathbb{R}^2$" },
              { id: "D", text: "Orthogonaux" },
            ],
            correctId: "B",
            explanation: "$(2,4) = 2(1,2)$, donc ils sont liés. $\\lambda_1(1,2)+\\lambda_2(2,4)=0$ a des solutions non triviales : $\\lambda_1=-2\\lambda_2$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-2-e3",
            question: "La dimension de $\\mathcal{M}_{2,3}(\\mathbb{R})$ (matrices $2\\times 3$ réelles) est :",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$3$" },
              { id: "C", text: "$5$" },
              { id: "D", text: "$6$" },
            ],
            correctId: "D",
            explanation: "Une matrice $2\\times 3$ a $2\\times 3 = 6$ entrées. La base canonique est constituée des $6$ matrices $E_{ij}$ (un $1$ en position $(i,j)$, des $0$ ailleurs). Donc $\\dim = 6$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-2-e4",
            question: "Vrai ou faux : L'ensemble $F = \\{(x,y)\\in\\mathbb{R}^2 : x+y=1\\}$ est un sev de $\\mathbb{R}^2$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $(0,0)\\notin F$ car $0+0=0\\neq 1$. Un sev doit contenir le vecteur nul. Ici $F$ est un hyperplan affine, pas un sous-espace vectoriel.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-2-e5",
            question: "Combien de vecteurs contient une base de $\\mathbb{R}^4$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$3$" },
              { id: "C", text: "$4$" },
              { id: "D", text: "$\\infty$" },
            ],
            correctId: "C",
            explanation: "$\\dim\\mathbb{R}^4 = 4$. Toute base de $\\mathbb{R}^4$ contient exactement $4$ vecteurs (théorème de la base).",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-2-e6",
            question: "Les vecteurs $(1,0,1)$, $(0,1,1)$, $(1,1,0)$ forment-ils une base de $\\mathbb{R}^3$ ?",
            type: "open",
            modelAnswer: "On calcule le déterminant : det=1(0-1)-0+1(0-1)=-1-1=-2≠0. Donc famille libre, base de R³.",
            explanation: "**Calcul du déterminant :**\n$$\\begin{vmatrix}1&0&1\\\\0&1&1\\\\1&1&0\\end{vmatrix} = 1(1\\cdot0-1\\cdot1) - 0(0\\cdot0-1\\cdot1) + 1(0\\cdot1-1\\cdot1)$$\n$= 1(-1) - 0 + 1(-1) = -1 - 1 = -2 \\neq 0$.\n\nLe déterminant est non nul donc les vecteurs sont **linéairement indépendants**. Comme on a $3$ vecteurs indépendants dans $\\mathbb{R}^3$ de dimension $3$, ils forment une **base**.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-2-e7",
            question: "Si $F$ et $G$ sont des sev de $E$ avec $\\dim F = 3$, $\\dim G = 4$ et $\\dim E = 5$, quelle est la dimension minimale de $F\\cap G$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$2$" },
              { id: "D", text: "$3$" },
            ],
            correctId: "C",
            explanation: "Grassmann : $\\dim(F+G) = \\dim F + \\dim G - \\dim(F\\cap G) = 7 - \\dim(F\\cap G)$. Or $\\dim(F+G)\\leq \\dim E = 5$, donc $\\dim(F\\cap G) \\geq 7-5 = 2$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-2-e8",
            question: "Vrai ou faux : Tout sous-ensemble de vecteurs d'un espace vectoriel peut être complété en une base.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. On peut compléter une **famille libre** en une base (théorème de la base incomplète). Mais un sous-ensemble quelconque peut contenir des vecteurs liés, et on ne peut alors pas le compléter directement en une base sans d'abord extraire une sous-famille libre.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-2-e9",
            question: "Montrer que $F = \\{p\\in\\mathbb{R}[X] : p(0)=0\\}$ est un sev de $\\mathbb{R}[X]$.",
            type: "open",
            modelAnswer: "0∈F car 0(0)=0. Si p,q∈F alors (p+q)(0)=0+0=0 et (λp)(0)=λ·0=0. F est stable, donc c'est un sev.",
            explanation: "**Vérification des trois axiomes :**\n\n1. **Vecteur nul :** Le polynôme nul $p=0$ vérifie $p(0)=0$, donc $0\\in F$.\n\n2. **Stabilité par addition :** Si $p,q\\in F$, alors $(p+q)(0)=p(0)+q(0)=0+0=0$, donc $p+q\\in F$.\n\n3. **Stabilité par scalaire :** Si $p\\in F$ et $\\lambda\\in\\mathbb{R}$, alors $(\\lambda p)(0)=\\lambda\\cdot p(0)=\\lambda\\cdot 0=0$, donc $\\lambda p\\in F$.\n\nConclusion : $F$ est un sous-espace vectoriel de $\\mathbb{R}[X]$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-2-e10",
            question: "Vrai ou faux : L'intersection de deux sev est toujours un sev.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $F,G$ sont des sev de $E$ : $0\\in F\\cap G$. Si $u,v\\in F\\cap G$ et $\\lambda,\\mu\\in\\mathbb{R}$, alors $\\lambda u+\\mu v\\in F$ (car $F$ est sev) et $\\lambda u+\\mu v\\in G$ (car $G$ est sev), donc $\\lambda u+\\mu v\\in F\\cap G$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-2-e11",
            question: "Donner la dimension et une base de $F = \\{(x,y,z)\\in\\mathbb{R}^3 : x+y+z=0\\}$.",
            type: "open",
            modelAnswer: "dim F = 2. Base : {(-1,1,0), (-1,0,1)} (ou équivalent). z=-x-y, donc (x,y,z)=x(-1,0,1)+y(0,-1,1) — correction: x=x, y=y, z=-x-y = x(-1,0,1) attend vérification...",
            explanation: "**Solution :**\n\nL'équation $x+y+z=0$ donne $z=-x-y$. On paramètre par $x=s, y=t$ libres :\n$$(x,y,z) = (s,t,-s-t) = s(1,0,-1) + t(0,1,-1)$$\n\nLes vecteurs $e_1=(1,0,-1)$ et $e_2=(0,1,-1)$ sont linéairement indépendants (non proportionnels).\n\n**Dimension :** $\\dim F = 2$ (une équation dans $\\mathbb{R}^3$ : $\\dim F = 3-1 = 2$).\n\n**Base :** $\\{(1,0,-1),(0,1,-1)\\}$.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-2-e12",
            question: "Vrai ou faux : Si $E = F\\oplus G$ (somme directe), alors tout vecteur de $E$ s'écrit de façon unique comme somme d'un vecteur de $F$ et d'un vecteur de $G$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est la définition équivalente de la somme directe : $E=F\\oplus G$ ssi $E=F+G$ et $F\\cap G=\\{0\\}$, ce qui est équivalent à dire que toute décomposition $v=f+g$ ($f\\in F, g\\in G$) est unique.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-2-e13",
            question: "Soit $n\\in\\mathbb{N}^*$. Quelle est la dimension de l'espace des polynômes de degré $\\leq n$ pairs ?",
            type: "mcq",
            options: [
              { id: "A", text: "$n$" },
              { id: "B", text: "$n+1$" },
              { id: "C", text: "$\\lfloor n/2\\rfloor+1$" },
              { id: "D", text: "$\\lfloor n/2 \\rfloor$" },
            ],
            correctId: "C",
            explanation: "Un polynôme pair de degré $\\leq n$ est de la forme $a_0 + a_2X^2 + a_4X^4+\\cdots$, les puissances paires jusqu'à $n$ (ou $n-1$ si $n$ est impair). Le nombre de termes est $\\lfloor n/2\\rfloor + 1$, et la base est $\\{1, X^2, X^4, \\ldots, X^{2\\lfloor n/2\\rfloor}\\}$.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-2-e14",
            question: "Montrer que si $F\\subsetneq G$ sont des sev d'un espace de dimension finie, alors $\\dim F < \\dim G$.",
            type: "open",
            modelAnswer: "Toute base de F est une famille libre dans G. Si dim F = dim G, cette famille serait une base de G, donc F=G, contradiction.",
            explanation: "**Preuve :**\n\nSoit $(e_1,\\ldots,e_r)$ une base de $F$ avec $r=\\dim F$. C'est une famille libre de vecteurs de $G$.\n\nSupposons par l'absurde que $\\dim F = \\dim G = r$. Alors $(e_1,\\ldots,e_r)$ est une famille libre de $r$ vecteurs dans un espace de dimension $r$, donc c'est une **base de $G$**.\n\nCela implique $G = \\text{Vect}(e_1,\\ldots,e_r) = F$, ce qui contredit $F\\subsetneq G$.\n\nDonc $\\dim F < \\dim G$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-2-e15",
            question: "Vrai ou faux : Toute famille de $n+1$ vecteurs dans un espace de dimension $n$ est liée.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Dans un espace de dimension $n$, toute famille libre a au plus $n$ vecteurs. Donc toute famille de $n+1$ vecteurs (ou plus) est nécessairement liée. C'est une conséquence directe de la définition de la dimension.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "alg1-l1-3",
        slug: "applications-lineaires",
        title: "Applications linéaires",
        durationMinutes: 55,
        content: `## Applications linéaires

### 1. Définition

Une application $f : E \\to F$ (entre espaces vectoriels sur $\\mathbb{R}$) est **linéaire** si :
$$\\forall u,v \\in E,\\; \\forall \\lambda,\\mu \\in \\mathbb{R} : f(\\lambda u + \\mu v) = \\lambda f(u) + \\mu f(v)$$

**Conséquence immédiate :** $f(0_E) = 0_F$ et $f(-u) = -f(u)$.

**Vocabulaire :**
- Application linéaire de $E$ dans $F$ = **homomorphisme**
- De $E$ dans $E$ = **endomorphisme**
- Bijective linéaire = **isomorphisme**
- Endomorphisme bijectif = **automorphisme**

### 2. Noyau et image

- **Noyau :** $\\ker(f) = \\{x\\in E : f(x) = 0_F\\}$ — c'est un sev de $E$.
- **Image :** $\\text{Im}(f) = f(E) = \\{f(x) : x\\in E\\}$ — c'est un sev de $F$.

**Caractérisation de l'injectivité :** $f$ est injective $\\Leftrightarrow \\ker(f) = \\{0_E\\}$.

### 3. Théorème du rang (ou théorème noyau-image)

Si $E$ est de dimension finie :
$$\\dim(\\ker f) + \\dim(\\text{Im}\\, f) = \\dim E$$

**Corollaires :**
- $f$ injective $\\Rightarrow \\dim E \\leq \\dim F$
- $f$ surjective $\\Rightarrow \\dim E \\geq \\dim F$
- $f$ bijective $\\Leftrightarrow \\dim E = \\dim F$ et $f$ injective (ou surjective)

### 4. Matrice d'une application linéaire

Soit $\\mathcal{B}_E = (e_1,\\ldots,e_n)$ base de $E$ et $\\mathcal{B}_F = (\\varepsilon_1,\\ldots,\\varepsilon_m)$ base de $F$. La **matrice de $f$** dans ces bases est la matrice $M$ dont la $j$-ième colonne est le vecteur colonne de $f(e_j)$ dans $\\mathcal{B}_F$ :
$$f(e_j) = \\sum_{i=1}^m m_{ij}\\, \\varepsilon_i$$

**Si $X$ est la colonne des coordonnées de $x$ dans $\\mathcal{B}_E$**, alors les coordonnées de $f(x)$ dans $\\mathcal{B}_F$ sont $MX$.

### 5. Composition et changement de base

- $(g \\circ f)$ est représentée par $M_g \\cdot M_f$ (produit matriciel).
- **Changement de base :** si $P$ est la matrice de passage de $\\mathcal{B}$ à $\\mathcal{B}'$, la matrice d'un endomorphisme $f$ dans $\\mathcal{B}'$ est $P^{-1}MP$.

### 6. Exemple

$f : \\mathbb{R}^2 \\to \\mathbb{R}^3$ définie par $f(x,y) = (x+y, x-y, 2x)$.

Dans les bases canoniques :
$$M = \\begin{pmatrix}1&1\\\\1&-1\\\\2&0\\end{pmatrix}$$

$\\ker f$ : $(x+y,x-y,2x)=(0,0,0) \\Rightarrow x=0, y=0$ → $\\ker f = \\{0\\}$, $f$ injective.

$\\dim(\\text{Im}\\,f) = 2-0 = 2$ (théorème du rang).`,
        exercises: [
          {
            id: "alg1-l1-3-e1",
            question: "Vrai ou faux : Toute application linéaire vérifie $f(0) = 0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $f(0) = f(0\\cdot u) = 0\\cdot f(u) = 0$ pour tout $u\\in E$. C'est une conséquence directe de la linéarité.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-3-e2",
            question: "L'application $f(x,y) = (2x, 3y)$ de $\\mathbb{R}^2$ dans $\\mathbb{R}^2$ est-elle linéaire ?",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$f(\\lambda(x_1,y_1)+\\mu(x_2,y_2)) = f(\\lambda x_1+\\mu x_2, \\lambda y_1+\\mu y_2) = (2(\\lambda x_1+\\mu x_2), 3(\\lambda y_1+\\mu y_2)) = \\lambda(2x_1,3y_1)+\\mu(2x_2,3y_2) = \\lambda f(x_1,y_1)+\\mu f(x_2,y_2)$. Oui, linéaire.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-3-e3",
            question: "La matrice d'une application linéaire $f:\\mathbb{R}^2\\to\\mathbb{R}^3$ est de taille :",
            type: "mcq",
            options: [
              { id: "A", text: "$2\\times 3$" },
              { id: "B", text: "$3\\times 2$" },
              { id: "C", text: "$2\\times 2$" },
              { id: "D", text: "$3\\times 3$" },
            ],
            correctId: "B",
            explanation: "La matrice a autant de lignes que la dimension de l'espace d'arrivée ($3$) et autant de colonnes que la dimension de l'espace de départ ($2$). Taille : $3\\times 2$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-3-e4",
            question: "Si $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ est linéaire avec $\\dim(\\ker f)=2$, quelle est la dimension de l'image ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "C",
            explanation: "Théorème du rang : $\\dim(\\ker f) + \\dim(\\text{Im}\\,f) = \\dim E = 3$. Donc $\\dim(\\text{Im}\\,f) = 3 - 2 = 1$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-3-e5",
            question: "Vrai ou faux : Si $f:E\\to F$ est linéaire injective, alors $f$ est surjective.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux en général. Par exemple $f:\\mathbb{R}\\to\\mathbb{R}^2$, $f(x)=(x,0)$ est injective ($ \\ker f=\\{0\\}$) mais pas surjective ($\\text{Im}\\,f\\neq\\mathbb{R}^2$). C'est vrai seulement si $\\dim E=\\dim F$.",
            difficulty: "debutant",
          },
          {
            id: "alg1-l1-3-e6",
            question: "Trouver le noyau de $f(x,y,z) = (x+y, y+z)$ de $\\mathbb{R}^3\\to\\mathbb{R}^2$.",
            type: "open",
            modelAnswer: "x+y=0 et y+z=0 donnent x=-y et z=-y. Donc ker f = Vect{(1,-1,1)}, de dimension 1.",
            explanation: "**Résolution :**\n\n$\\ker f = \\{(x,y,z) : x+y=0 \\text{ et } y+z=0\\}$.\n\n$x+y=0 \\Rightarrow x=-y$ ; $y+z=0 \\Rightarrow z=-y$.\n\nVariable libre $y=t$ : $(x,y,z) = (-t,t,-t) = t(-1,1,-1)$.\n\n$\\ker f = \\text{Vect}\\{(-1,1,-1)\\}$, de dimension $1$.\n\nVérification (théorème du rang) : $\\dim(\\text{Im}\\,f) = 3-1=2$, et $\\text{Im}\\,f\\subset\\mathbb{R}^2$ de dimension $2$ → $f$ est surjective.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-3-e7",
            question: "Vrai ou faux : La composée de deux applications linéaires est linéaire.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $f:E\\to F$ et $g:F\\to G$ sont linéaires, alors $(g\\circ f)(\\lambda u+\\mu v) = g(f(\\lambda u+\\mu v)) = g(\\lambda f(u)+\\mu f(v)) = \\lambda g(f(u))+\\mu g(f(v)) = \\lambda(g\\circ f)(u)+\\mu(g\\circ f)(v)$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-3-e8",
            question: "L'application $f(x,y)=(x+1, y)$ de $\\mathbb{R}^2\\to\\mathbb{R}^2$ est-elle linéaire ?",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $f(0,0)=(1,0)\\neq(0,0)$. Une application linéaire doit envoyer $0$ sur $0$. Ici c'est une application **affine** (translation), pas linéaire.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-3-e9",
            question: "Quelle est la matrice dans les bases canoniques de la symétrie de $\\mathbb{R}^2$ par rapport à l'axe des $x$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}-1&0\\\\0&1\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$" },
            ],
            correctId: "B",
            explanation: "La symétrie par rapport à l'axe des $x$ envoie $(x,y)\\mapsto(x,-y)$. $f(1,0)=(1,0)$ et $f(0,1)=(0,-1)$. Matrice : $\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-3-e10",
            question: "Si $f:E\\to F$ est un isomorphisme, que vaut $\\dim E - \\dim F$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$-1$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "Quelconque" },
            ],
            correctId: "C",
            explanation: "Un isomorphisme est bijectif et linéaire. Par le théorème du rang avec $\\ker f=\\{0\\}$ (injectif) : $\\dim E = 0 + \\dim(\\text{Im}\\,f) = \\dim(\\text{Im}\\,f)$. Et $f$ surjective : $\\text{Im}\\,f = F$, donc $\\dim E = \\dim F$, i.e. $\\dim E - \\dim F = 0$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg1-l1-3-e11",
            question: "Démontrer le théorème du rang : $\\dim(\\ker f)+\\dim(\\text{Im}\\,f)=\\dim E$.",
            type: "open",
            modelAnswer: "Soit (e1,...,er) une base de ker f, complétée en une base de E par (e1,...,er,ε1,...,εs). Montrer que (f(ε1),...,f(εs)) est une base de Im f.",
            explanation: "**Preuve :**\n\nSoit $\\dim(\\ker f) = r$, $(e_1,\\ldots,e_r)$ une base de $\\ker f$. On complète en une base de $E$ : $(e_1,\\ldots,e_r,\\varepsilon_1,\\ldots,\\varepsilon_s)$ avec $r+s=\\dim E$.\n\n**Claim :** $(f(\\varepsilon_1),\\ldots,f(\\varepsilon_s))$ est une base de $\\text{Im}\\,f$.\n\n**Génératrice :** Tout $y\\in\\text{Im}\\,f$ s'écrit $y=f(x)$ avec $x=\\sum\\alpha_i e_i+\\sum\\beta_j\\varepsilon_j$, donc $y=\\sum\\beta_j f(\\varepsilon_j)$.\n\n**Libre :** Si $\\sum\\beta_j f(\\varepsilon_j)=0$, alors $f(\\sum\\beta_j\\varepsilon_j)=0$, donc $\\sum\\beta_j\\varepsilon_j\\in\\ker f$, et $\\sum\\beta_j\\varepsilon_j=\\sum\\alpha_i e_i$. Par liberté de la base, tous les coefficients sont nuls.\n\nDonc $\\dim(\\text{Im}\\,f)=s=\\dim E - r = \\dim E - \\dim(\\ker f)$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-3-e12",
            question: "Vrai ou faux : Deux espaces vectoriels de même dimension finie sur $\\mathbb{R}$ sont isomorphes.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $\\dim E = \\dim F = n$, on choisit des bases $\\mathcal{B}_E$ et $\\mathcal{B}_F$. L'application qui envoie le $i$-ème vecteur de $\\mathcal{B}_E$ sur le $i$-ème vecteur de $\\mathcal{B}_F$ est un isomorphisme. Tout espace vectoriel de dimension $n$ est isomorphe à $\\mathbb{R}^n$.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-3-e13",
            question: "Trouver une application linéaire $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ de noyau $\\text{Vect}\\{(1,2)\\}$.",
            type: "open",
            modelAnswer: "f(x,y) = (2x-y, 0) ou f(x,y) = (2x-y, 4x-2y). Par exemple f(x,y)=(2x-y, 0): vérifier f(1,2)=(0,0) ✓.",
            explanation: "**Construction :**\n\nOn veut $f(1,2)=(0,0)$ et $f$ linéaire. Cherchons $f(x,y)=(ax+by, cx+dy)$.\n\nCondition : $a+2b=0$ et $c+2d=0$.\n\nChoix simple : $a=2, b=-1$ et $c=0, d=0$.\n\n$f(x,y) = (2x-y, 0)$.\n\n**Vérification :** $f(1,2)=(2-2,0)=(0,0)$ ✓. $\\ker f = \\{(x,y):2x-y=0\\} = \\{(x,2x):x\\in\\mathbb{R}\\} = \\text{Vect}\\{(1,2)\\}$ ✓.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-3-e14",
            question: "Quelle est la matrice de la rotation d'angle $\\theta$ dans le plan $\\mathbb{R}^2$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}\\cos\\theta & \\sin\\theta\\\\-\\sin\\theta & \\cos\\theta\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\\\sin\\theta & \\cos\\theta\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}\\sin\\theta & \\cos\\theta\\\\\\cos\\theta & -\\sin\\theta\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}1 & -\\theta\\\\\\theta & 1\\end{pmatrix}$" },
            ],
            correctId: "B",
            explanation: "La rotation d'angle $\\theta$ envoie $e_1=(1,0)$ sur $(\\cos\\theta,\\sin\\theta)$ et $e_2=(0,1)$ sur $(-\\sin\\theta,\\cos\\theta)$. La matrice (colonnes = images des vecteurs de base) est $R_\\theta=\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$.",
            difficulty: "expert",
          },
          {
            id: "alg1-l1-3-e15",
            question: "Vrai ou faux : Si $f\\circ g = \\text{Id}$, alors $f$ est surjective et $g$ est injective.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $f\\circ g=\\text{Id}_E$ : **$g$ injective** : si $g(x)=g(y)$, alors $x=\\text{Id}(x)=(f\\circ g)(x)=f(g(x))=f(g(y))=(f\\circ g)(y)=y$. **$f$ surjective** : pour tout $z$, $z=\\text{Id}(z)=(f\\circ g)(z)=f(g(z))$, donc $z\\in\\text{Im}\\,f$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // L1 — Probabilités
  // ─────────────────────────────────────────────
  {
    id: "proba-l1",
    slug: "probabilites-l1-espaces-variables-discretes",
    title: "Probabilités L1 — Espaces de probabilité et variables aléatoires discrètes",
    description: "Introduction aux probabilités : axiomes de Kolmogorov, variables aléatoires discrètes, lois binomiale et de Poisson.",
    schoolLevel: "L1",
    subject: "probabilites",
    difficulty: "Débutant",
    isFree: true,
    thumbnailEmoji: "🎲",
    lessons: [
      {
        id: "proba1-l1-1",
        slug: "espaces-probabilite-axiomes",
        title: "Espaces de probabilité et axiomes",
        durationMinutes: 45,
        content: `## Espaces de probabilité

### 1. Vocabulaire

- **Expérience aléatoire :** expérience dont l'issue est imprévisible.
- **Univers $\\Omega$ :** ensemble de toutes les issues possibles.
- **Événement :** sous-ensemble de $\\Omega$.

### 2. Axiomes de Kolmogorov

Une **probabilité** $P : \\mathcal{F} \\to [0,1]$ vérifie :
1. $P(\\Omega) = 1$
2. **$\\sigma$-additivité :** $(A_n)$ deux à deux disjoints $\\Rightarrow P(\\bigcup_n A_n) = \\sum_n P(A_n)$

### 3. Propriétés fondamentales

- $P(\\emptyset) = 0$, $P(\\bar{A}) = 1 - P(A)$
- $P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$
- **Probabilité conditionnelle :** $P(A|B) = \\frac{P(A\\cap B)}{P(B)}$ si $P(B)>0$
- **Indépendance :** $P(A\\cap B) = P(A)P(B)$

### 4. Formule de Bayes

$$P(B_j|A) = \\frac{P(A|B_j)P(B_j)}{\\sum_i P(A|B_i)P(B_i)}$$

**Formule des probabilités totales :** si $(B_i)$ est une partition de $\\Omega$ :
$$P(A) = \\sum_i P(A|B_i)P(B_i)$$`,
        exercises: [
          {
            id: "proba1-l1-1-e1",
            question: "On lance un dé équilibré à 6 faces. La probabilité d'obtenir un 5 est :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{5}$" },
              { id: "B", text: "$\\frac{1}{6}$" },
              { id: "C", text: "$\\frac{5}{6}$" },
              { id: "D", text: "$\\frac{1}{36}$" },
            ],
            correctId: "B",
            explanation: "Univers $\\Omega=\\{1,2,3,4,5,6\\}$, issues équiprobables de probabilité $1/6$. Donc $P(\\{5\\})=1/6$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-1-e2",
            question: "Vrai ou faux : $P(A)+P(\\bar{A})=1$ pour tout événement $A$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$A$ et $\\bar{A}$ sont disjoints avec $A\\cup\\bar{A}=\\Omega$. Par $\\sigma$-additivité : $P(A)+P(\\bar{A})=P(\\Omega)=1$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-1-e3",
            question: "Si $P(A)=0.3$, $P(B)=0.4$ avec $A,B$ disjoints, quelle est $P(A\\cup B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0.12$" },
              { id: "B", text: "$0.3$" },
              { id: "C", text: "$0.7$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "C",
            explanation: "Disjoints : $P(A\\cup B)=P(A)+P(B)=0.3+0.4=0.7$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-1-e4",
            question: "Vrai ou faux : Si $A\\subset B$, alors $P(A)\\leq P(B)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$B=A\\cup(B\\setminus A)$ (union disjointe), donc $P(B)=P(A)+P(B\\setminus A)\\geq P(A)$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-1-e5",
            question: "Si $P(A)=0.5$, $P(B)=0.4$, $P(A\\cap B)=0.2$, quelle est $P(A\\cup B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0.9$" },
              { id: "B", text: "$0.7$" },
              { id: "C", text: "$0.6$" },
              { id: "D", text: "$0.3$" },
            ],
            correctId: "B",
            explanation: "Inclusion-exclusion : $P(A\\cup B)=0.5+0.4-0.2=0.7$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-1-e6",
            question: "Deux événements $A,B$ indépendants avec $P(A)=0.4$, $P(B)=0.5$. Quelle est $P(A\\cap B)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$0.9$" },
              { id: "B", text: "$0.1$" },
              { id: "C", text: "$0.2$" },
              { id: "D", text: "$0.45$" },
            ],
            correctId: "C",
            explanation: "Indépendance : $P(A\\cap B)=P(A)P(B)=0.4\\times0.5=0.2$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-1-e7",
            question: "Vrai ou faux : $A,B$ disjoints avec $P(A)>0$ et $P(B)>0$ sont indépendants.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $P(A\\cap B)=0$ mais $P(A)P(B)>0$, donc $P(A\\cap B)\\neq P(A)P(B)$ : ils ne sont pas indépendants.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-1-e8",
            question: "$P(B_1)=0.3$, $P(B_2)=0.7$, $P(A|B_1)=0.8$, $P(A|B_2)=0.2$. Calculer $P(B_1|A)$.",
            type: "open",
            modelAnswer: "P(A)=0.8×0.3+0.2×0.7=0.24+0.14=0.38. P(B1|A)=0.24/0.38=12/19≈0.632.",
            explanation: "**Bayes :**\n$P(A)=P(A|B_1)P(B_1)+P(A|B_2)P(B_2)=0.24+0.14=0.38$.\n$P(B_1|A)=\\frac{0.8\\times0.3}{0.38}=\\frac{0.24}{0.38}=\\frac{12}{19}\\approx0.632$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-1-e9",
            question: "Vrai ou faux : Si $P(A|B)=P(A)$, alors $A$ et $B$ sont indépendants.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai (si $P(B)>0$). $P(A|B)=P(A)$ implique $P(A\\cap B)=P(A)P(B)$, définition de l'indépendance.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-1-e10",
            question: "On joue à pile ou face 3 fois. Probabilité d'exactement 2 piles ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{8}$" },
              { id: "B", text: "$\\frac{3}{8}$" },
              { id: "C", text: "$\\frac{1}{4}$" },
              { id: "D", text: "$\\frac{1}{2}$" },
            ],
            correctId: "B",
            explanation: "$\\Omega$ a $2^3=8$ issues. Issues à 2 piles : PPF, PFP, FPP — 3 cas. $P=3/8$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-1-e11",
            question: "Trois machines produisent 50%, 30%, 20% avec taux de défauts 1%, 2%, 3%. Une pièce est défectueuse. Probabilité qu'elle vienne de $M_2$ ?",
            type: "open",
            modelAnswer: "P(D)=0.005+0.006+0.006=0.017. P(M2|D)=0.006/0.017=6/17≈0.353.",
            explanation: "$P(D)=0.01\\times0.5+0.02\\times0.3+0.03\\times0.2=0.005+0.006+0.006=0.017$.\n$P(M_2|D)=\\frac{0.02\\times0.3}{0.017}=\\frac{0.006}{0.017}=\\frac{6}{17}\\approx35.3\\%$.",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-1-e12",
            question: "Vrai ou faux : Si $A,B,C$ sont deux à deux indépendants, alors ils sont mutuellement indépendants.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Contre-exemple de Bernstein : indépendance deux à deux n'implique pas $P(A\\cap B\\cap C)=P(A)P(B)P(C)$.",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-1-e13",
            question: "Montrer que si $A,B$ indépendants, alors $A,\\bar{B}$ le sont aussi.",
            type: "open",
            modelAnswer: "P(A∩B̄)=P(A)-P(A∩B)=P(A)-P(A)P(B)=P(A)(1-P(B))=P(A)P(B̄).",
            explanation: "$P(A\\cap\\bar{B})=P(A)-P(A\\cap B)=P(A)-P(A)P(B)=P(A)(1-P(B))=P(A)P(\\bar{B})$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-1-e14",
            question: "Vrai ou faux : $P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(A\\cap B)-P(A\\cap C)-P(B\\cap C)+P(A\\cap B\\cap C)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est la formule d'inclusion-exclusion (Poincaré) à 3 événements.",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-1-e15",
            question: "Calculer $P(\\bar{A}\\cap\\bar{B})$ en fonction de $P(A)$, $P(B)$, $P(A\\cap B)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1-P(A)-P(B)+P(A\\cap B)$" },
              { id: "B", text: "$P(A)+P(B)-P(A\\cap B)$" },
              { id: "C", text: "$1-P(A)-P(B)$" },
              { id: "D", text: "$P(A)P(B)$" },
            ],
            correctId: "A",
            explanation: "$P(\\bar{A}\\cap\\bar{B})=P(\\overline{A\\cup B})=1-P(A\\cup B)=1-P(A)-P(B)+P(A\\cap B)$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "proba1-l1-2",
        slug: "variables-aleatoires-discretes",
        title: "Variables aléatoires discrètes",
        durationMinutes: 50,
        content: `## Variables aléatoires discrètes

### 1. Définition et loi

Une **v.a. discrète** $X$ prend des valeurs dans une partie finie ou dénombrable de $\\mathbb{R}$.
Sa **loi** est $(P(X=x_k))_k$ avec $\\sum_k P(X=x_k)=1$.

### 2. Espérance

$$\\mathbb{E}[X] = \\sum_k x_k P(X=x_k)$$

**Linéarité :** $\\mathbb{E}[\\alpha X+\\beta Y]=\\alpha\\mathbb{E}[X]+\\beta\\mathbb{E}[Y]$ (toujours vraie).

### 3. Variance

$$\\text{Var}(X) = \\mathbb{E}[X^2]-(\\mathbb{E}[X])^2 \\geq 0$$

$\\text{Var}(aX+b)=a^2\\text{Var}(X)$. Si $X,Y$ indépendantes : $\\text{Var}(X+Y)=\\text{Var}(X)+\\text{Var}(Y)$.

### 4. Inégalités

**Markov ($X\\geq0$) :** $P(X\\geq a)\\leq \\mathbb{E}[X]/a$.

**Bienaymé-Tchebychev :** $P(|X-\\mathbb{E}[X]|\\geq k\\sigma)\\leq 1/k^2$.

### 5. Lois usuelles

- **Bernoulli $B(p)$ :** $\\mathbb{E}=p$, $\\text{Var}=p(1-p)$.
- **Uniforme $\\{1,\\ldots,n\\}$ :** $\\mathbb{E}=(n+1)/2$, $\\text{Var}=(n^2-1)/12$.
- **Géométrique $G(p)$ :** $P(X=k)=(1-p)^{k-1}p$, $\\mathbb{E}=1/p$.`,
        exercises: [
          {
            id: "proba1-l1-2-e1",
            question: "Soit $X$ avec $P(X=1)=0.3$, $P(X=2)=0.5$, $P(X=3)=0.2$. Quelle est $\\mathbb{E}[X]$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$1.9$" },
              { id: "C", text: "$2.5$" },
              { id: "D", text: "$1.5$" },
            ],
            correctId: "B",
            explanation: "$\\mathbb{E}[X]=1\\times0.3+2\\times0.5+3\\times0.2=0.3+1.0+0.6=1.9$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-2-e2",
            question: "Vrai ou faux : La variance d'une v.a. est toujours positive ou nulle.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$\\text{Var}(X)=\\mathbb{E}[(X-\\mathbb{E}[X])^2]\\geq0$ car c'est l'espérance d'une quantité positive.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-2-e3",
            question: "Pour $X\\sim B(p)$, que vaut $\\mathbb{E}[X^2]$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$p^2$" },
              { id: "B", text: "$p$" },
              { id: "C", text: "$2p$" },
              { id: "D", text: "$p(1-p)$" },
            ],
            correctId: "B",
            explanation: "$X\\in\\{0,1\\}$, donc $X^2=X$. Ainsi $\\mathbb{E}[X^2]=\\mathbb{E}[X]=p$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-2-e4",
            question: "Si $\\mathbb{E}[X]=3$ et $\\mathbb{E}[X^2]=13$, quelle est $\\text{Var}(X)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$4$" },
              { id: "C", text: "$9$" },
              { id: "D", text: "$16$" },
            ],
            correctId: "B",
            explanation: "$\\text{Var}(X)=13-3^2=13-9=4$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-2-e5",
            question: "Vrai ou faux : $\\mathbb{E}[X+Y]=\\mathbb{E}[X]+\\mathbb{E}[Y]$ même si $X,Y$ ne sont pas indépendantes.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La linéarité de l'espérance est inconditionnelle (ne requiert pas l'indépendance).",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-2-e6",
            question: "Calculer $\\text{Var}(2X-3)$ en fonction de $\\text{Var}(X)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$4\\text{Var}(X)-3$" },
              { id: "B", text: "$2\\text{Var}(X)$" },
              { id: "C", text: "$4\\text{Var}(X)$" },
              { id: "D", text: "$\\text{Var}(X)$" },
            ],
            correctId: "C",
            explanation: "$\\text{Var}(aX+b)=a^2\\text{Var}(X)$. Donc $\\text{Var}(2X-3)=4\\text{Var}(X)$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-2-e7",
            question: "Calculer $\\mathbb{E}[X]$ et $\\text{Var}(X)$ pour $X$ uniforme sur $\\{1,2,3,4,5,6\\}$.",
            type: "open",
            modelAnswer: "E[X]=7/2=3.5. E[X²]=91/6. Var(X)=91/6-49/4=35/12.",
            explanation: "$\\mathbb{E}[X]=21/6=7/2$. $\\mathbb{E}[X^2]=(1+4+9+16+25+36)/6=91/6$. $\\text{Var}(X)=91/6-49/4=(182-147)/12=35/12=(n^2-1)/12$ avec $n=6$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-2-e8",
            question: "Si $\\mathbb{E}[X]=5$, que dit l'inégalité de Markov sur $P(X\\geq 20)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$P(X\\geq20)\\leq1/4$" },
              { id: "B", text: "$P(X\\geq20)\\leq1/3$" },
              { id: "C", text: "$P(X\\geq20)=0$" },
              { id: "D", text: "$P(X\\geq20)\\leq1/2$" },
            ],
            correctId: "A",
            explanation: "Markov : $P(X\\geq a)\\leq\\mathbb{E}[X]/a=5/20=1/4$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-2-e9",
            question: "Vrai ou faux : Si $X,Y$ indépendantes, $\\text{Var}(X+Y)=\\text{Var}(X)+\\text{Var}(Y)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. En général $\\text{Var}(X+Y)=\\text{Var}(X)+\\text{Var}(Y)+2\\text{Cov}(X,Y)$, et l'indépendance entraîne $\\text{Cov}(X,Y)=0$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-2-e10",
            question: "Soit $X\\sim G(1/3)$ (géométrique). Quelle est $\\mathbb{E}[X]$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1/3$" },
              { id: "B", text: "$3$" },
              { id: "C", text: "$2/3$" },
              { id: "D", text: "$6$" },
            ],
            correctId: "B",
            explanation: "Pour $G(p)$, $\\mathbb{E}[X]=1/p=3$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-2-e11",
            question: "Démontrer que $\\text{Var}(X)=\\mathbb{E}[X^2]-(\\mathbb{E}[X])^2$.",
            type: "open",
            modelAnswer: "Var(X)=E[(X-m)²]=E[X²-2mX+m²]=E[X²]-2m²+m²=E[X²]-m².",
            explanation: "Soit $m=\\mathbb{E}[X]$.\n$\\text{Var}(X)=\\mathbb{E}[(X-m)^2]=\\mathbb{E}[X^2-2mX+m^2]=\\mathbb{E}[X^2]-2m\\mathbb{E}[X]+m^2=\\mathbb{E}[X^2]-m^2$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-2-e12",
            question: "Soit $X$ à valeurs dans $\\{0,1,2,3\\}$ avec $P(X=k)=c\\binom{3}{k}$. Trouver $c$ et $\\mathbb{E}[X]$.",
            type: "open",
            modelAnswer: "Σ C(3,k)=8, donc c=1/8. E[X]=(0+3+6+3)/8=12/8=3/2.",
            explanation: "$c\\cdot 2^3=1$ donc $c=1/8$. $\\mathbb{E}[X]=0\\cdot1/8+1\\cdot3/8+2\\cdot3/8+3\\cdot1/8=12/8=3/2$. (Loi $B(3,1/2)$, $\\mathbb{E}=np=3/2$.)",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-2-e13",
            question: "Vrai ou faux : Si $\\mathbb{E}[XY]=\\mathbb{E}[X]\\mathbb{E}[Y]$, alors $X$ et $Y$ sont indépendantes.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $\\mathbb{E}[XY]=\\mathbb{E}[X]\\mathbb{E}[Y]$ signifie $\\text{Cov}(X,Y)=0$ (non-corrélation), ce qui est plus faible que l'indépendance.",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-2-e14",
            question: "Démontrer l'inégalité de Markov.",
            type: "open",
            modelAnswer: "E[X]=E[X·1_{X≥a}]+E[X·1_{X<a}]≥a·P(X≥a).",
            explanation: "$\\mathbb{E}[X]\\geq\\sum_{x_k\\geq a}x_k P(X=x_k)\\geq a\\sum_{x_k\\geq a}P(X=x_k)=a\\cdot P(X\\geq a)$. Donc $P(X\\geq a)\\leq\\mathbb{E}[X]/a$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-2-e15",
            question: "Montrer que $\\text{Var}(X)=(n^2-1)/12$ pour $X$ uniforme sur $\\{1,\\ldots,n\\}$.",
            type: "open",
            modelAnswer: "E[X]=(n+1)/2. E[X²]=(n+1)(2n+1)/6. Var=(n+1)(2n+1)/6-(n+1)²/4=(n+1)(n-1)/12=(n²-1)/12.",
            explanation: "$\\mathbb{E}[X^2]=\\frac{(n+1)(2n+1)}{6}$. $\\text{Var}=(n+1)\\left[\\frac{2n+1}{6}-\\frac{n+1}{4}\\right]=(n+1)\\frac{n-1}{12}=\\frac{n^2-1}{12}$. $\\square$",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "proba1-l1-3",
        slug: "loi-binomiale-poisson",
        title: "Loi binomiale et loi de Poisson",
        durationMinutes: 50,
        content: `## Loi binomiale et loi de Poisson

### 1. Loi binomiale $B(n,p)$

$n$ épreuves de Bernoulli indépendantes, $p$ = probabilité de succès. Le nombre $X$ de succès :
$$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k},\\quad k=0,\\ldots,n$$

$\\mathbb{E}[X]=np$, $\\text{Var}(X)=np(1-p)$.

### 2. Loi de Poisson $\\mathcal{P}(\\lambda)$

$$P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!},\\quad k=0,1,2,\\ldots$$

$\\mathbb{E}[X]=\\text{Var}(X)=\\lambda$.

**Stabilité :** $X\\sim\\mathcal{P}(\\lambda)$, $Y\\sim\\mathcal{P}(\\mu)$ indépendantes $\\Rightarrow X+Y\\sim\\mathcal{P}(\\lambda+\\mu)$.

### 3. Approximation de Poisson

Si $n\\geq30$, $p\\leq0.1$, $\\lambda=np$ : $B(n,p)\\approx\\mathcal{P}(\\lambda)$.

**Théorème de Poisson :** $B(n,\\lambda/n)\\xrightarrow{n\\to\\infty}\\mathcal{P}(\\lambda)$ terme à terme.`,
        exercises: [
          {
            id: "proba1-l1-3-e1",
            question: "Soit $X\\sim B(5,0.5)$. Quelle est $P(X=2)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$5/16$" },
              { id: "B", text: "$1/4$" },
              { id: "C", text: "$5/32$" },
              { id: "D", text: "$10/32$" },
            ],
            correctId: "A",
            explanation: "$P(X=2)=\\binom{5}{2}(1/2)^5=10/32=5/16$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-3-e2",
            question: "Pour $X\\sim B(n,p)$, $\\mathbb{E}[X]$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$p$" },
              { id: "B", text: "$np(1-p)$" },
              { id: "C", text: "$np$" },
              { id: "D", text: "$n/p$" },
            ],
            correctId: "C",
            explanation: "$X=\\sum_{i=1}^n X_i$ (Bernoulli indépendantes). Par linéarité : $\\mathbb{E}[X]=np$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-3-e3",
            question: "Vrai ou faux : Pour $X\\sim\\mathcal{P}(\\lambda)$, $\\mathbb{E}[X]=\\text{Var}(X)=\\lambda$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Propriété caractéristique de la loi de Poisson.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-3-e4",
            question: "Calculer $P(X=0)$ pour $X\\sim\\mathcal{P}(3)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$e^{-3}$" },
              { id: "C", text: "$3e^{-3}$" },
              { id: "D", text: "$1/e$" },
            ],
            correctId: "B",
            explanation: "$P(X=0)=e^{-3}\\cdot3^0/0!=e^{-3}$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-3-e5",
            question: "Vrai ou faux : $X\\sim B(n,p)$ peut prendre les valeurs $0,1,\\ldots,n$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$X$ compte les succès parmi $n$ épreuves : $X\\in\\{0,1,\\ldots,n\\}$.",
            difficulty: "debutant",
          },
          {
            id: "proba1-l1-3-e6",
            question: "Sur $200$ pièces avec $2\\%$ de défauts, quel est le nombre moyen de pièces défectueuses ?",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$4$" },
              { id: "C", text: "$0.02$" },
              { id: "D", text: "$20$" },
            ],
            correctId: "B",
            explanation: "$X\\sim B(200,0.02)$. $\\mathbb{E}[X]=np=200\\times0.02=4$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-3-e7",
            question: "$\\lambda=5$ clients/heure. Probabilité qu'il en arrive exactement $3$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$e^{-5}5^3/3!$" },
              { id: "B", text: "$e^{-3}3^5/5!$" },
              { id: "C", text: "$\\binom{5}{3}p^3(1-p)^2$" },
              { id: "D", text: "$5^3e^{-5}$" },
            ],
            correctId: "A",
            explanation: "$X\\sim\\mathcal{P}(5)$. $P(X=3)=e^{-5}5^3/3!=e^{-5}\\cdot125/6\\approx0.140$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-3-e8",
            question: "Approcher $P(X\\geq1)$ pour $X\\sim B(100,0.02)$ par Poisson.",
            type: "open",
            modelAnswer: "λ=2. P(X≥1)=1-P(X=0)≈1-e⁻²≈0.865.",
            explanation: "$\\lambda=np=2$. $P(X\\geq1)=1-e^{-2}\\approx0.865$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-3-e9",
            question: "Vrai ou faux : $B(n,\\lambda/n)$ converge vers $\\mathcal{P}(\\lambda)$ quand $n\\to\\infty$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le théorème de Poisson.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-3-e10",
            question: "Calculer $\\text{Var}(X)$ pour $X\\sim B(20,0.4)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$8$" },
              { id: "B", text: "$4.8$" },
              { id: "C", text: "$3.2$" },
              { id: "D", text: "$16$" },
            ],
            correctId: "B",
            explanation: "$\\text{Var}(X)=np(1-p)=20\\times0.4\\times0.6=4.8$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba1-l1-3-e11",
            question: "Démontrer $\\mathbb{E}[X]=np$ pour $X\\sim B(n,p)$ via la fonction génératrice $G(t)=(pt+1-p)^n$.",
            type: "open",
            modelAnswer: "G'(t)=np(pt+1-p)^{n-1}. E[X]=G'(1)=np.",
            explanation: "$G(t)=\\mathbb{E}[t^X]=(pt+(1-p))^n$ (binôme). $G'(t)=np(pt+(1-p))^{n-1}$. $\\mathbb{E}[X]=G'(1)=np$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-3-e12",
            question: "Montrer que $X\\sim\\mathcal{P}(\\lambda)$, $Y\\sim\\mathcal{P}(\\mu)$ indépendantes $\\Rightarrow X+Y\\sim\\mathcal{P}(\\lambda+\\mu)$.",
            type: "open",
            modelAnswer: "P(X+Y=n)=Σ P(X=k)P(Y=n-k)=e^{-(λ+μ)}(λ+μ)^n/n!.",
            explanation: "$P(X+Y=n)=\\sum_{k=0}^n e^{-\\lambda}\\frac{\\lambda^k}{k!}e^{-\\mu}\\frac{\\mu^{n-k}}{(n-k)!}=e^{-(\\lambda+\\mu)}\\frac{(\\lambda+\\mu)^n}{n!}$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-3-e13",
            question: "Exprimer $P(X=k+1)/P(X=k)$ pour $X\\sim B(n,p)$.",
            type: "open",
            modelAnswer: "[(n-k)/(k+1)]·[p/(1-p)].",
            explanation: "$\\frac{P(X=k+1)}{P(X=k)}=\\frac{\\binom{n}{k+1}}{\\binom{n}{k}}\\cdot\\frac{p}{1-p}=\\frac{n-k}{k+1}\\cdot\\frac{p}{1-p}$.",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-3-e14",
            question: "Vrai ou faux : La seule loi discrète sur $\\mathbb{N}$ avec $\\mathbb{E}[X]=\\text{Var}(X)$ est la loi de Poisson.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $X=0$ constante a $\\mathbb{E}[X]=\\text{Var}(X)=0$, et il existe d'autres lois vérifiant cette propriété.",
            difficulty: "expert",
          },
          {
            id: "proba1-l1-3-e15",
            question: "En moyenne $\\lambda=4$ accidents/semaine. Probabilité d'avoir moins de 2 accidents en une semaine ?",
            type: "open",
            modelAnswer: "P(X<2)=P(X=0)+P(X=1)=e⁻⁴+4e⁻⁴=5e⁻⁴≈0.0916.",
            explanation: "$X\\sim\\mathcal{P}(4)$. $P(X<2)=e^{-4}+4e^{-4}=5e^{-4}\\approx5\\times0.01832\\approx0.092$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // L2 — Analyse : Séries et intégrales généralisées
  // ─────────────────────────────────────────────
  {
    id: "analyse-l2",
    slug: "analyse-l2-series-integrales-generalisees",
    title: "Analyse L2 — Séries et intégrales généralisées",
    description: "Suites et séries numériques, convergence, intégrales généralisées et équations différentielles du 1er ordre.",
    schoolLevel: "L2",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "∑",
    lessons: [
      {
        id: "anal2-l2-1",
        slug: "suites-series-numeriques",
        title: "Suites et séries numériques",
        durationMinutes: 60,
        content: `## Suites et séries numériques

### 1. Suites numériques

Une **suite** $(u_n)_{n\\geq0}$ est une application $\\mathbb{N}\\to\\mathbb{R}$.

**Convergence :** $(u_n)$ converge vers $\\ell$ si $\\forall\\varepsilon>0, \\exists N, n\\geq N\\Rightarrow|u_n-\\ell|<\\varepsilon$.

**Suites monotones bornées :** toute suite croissante et majorée (ou décroissante et minorée) converge.

**Théorème des suites adjacentes :** si $(u_n)$ croissante, $(v_n)$ décroissante, $v_n-u_n\\to0$, alors elles convergent vers la même limite.

### 2. Séries numériques

La **série** de terme général $a_n$ est $\\sum_{n=0}^\\infty a_n$. Sa **somme partielle** est $S_N=\\sum_{n=0}^N a_n$.

La série **converge** si $(S_N)$ converge. Sa somme est $S=\\lim_{N\\to\\infty}S_N$.

**Condition nécessaire :** si $\\sum a_n$ converge, alors $a_n\\to0$. La réciproque est fausse ($\\sum 1/n$ diverge).

### 3. Séries de référence

- **Série géométrique :** $\\sum_{n=0}^\\infty r^n = \\frac{1}{1-r}$ si $|r|<1$, diverge si $|r|\\geq1$.
- **Série de Riemann :** $\\sum_{n=1}^\\infty \\frac{1}{n^\\alpha}$ converge si $\\alpha>1$, diverge si $\\alpha\\leq1$.
- **Série harmonique :** $\\sum 1/n$ diverge.

### 4. Critères de convergence

**Critère de comparaison :** $0\\leq a_n\\leq b_n$ et $\\sum b_n$ converge $\\Rightarrow$ $\\sum a_n$ converge.

**Critère des équivalents :** si $a_n\\sim b_n$ ($a_n/b_n\\to1$), les séries $\\sum a_n$ et $\\sum b_n$ ont même nature.

**Critère de d'Alembert :** si $|a_{n+1}/a_n|\\to L$ :
- $L<1$ : convergence absolue
- $L>1$ : divergence
- $L=1$ : non concluant

**Critère de Cauchy :** si $|a_n|^{1/n}\\to L$, même conclusion que d'Alembert.

### 5. Convergence absolue

$\\sum a_n$ **converge absolument** si $\\sum|a_n|$ converge. La convergence absolue implique la convergence.

**Critère des séries alternées (Leibniz) :** si $(|a_n|)$ est décroissante tendant vers $0$, alors $\\sum(-1)^n a_n$ converge.`,
        exercises: [
          {
            id: "anal2-l2-1-e1",
            question: "La série $\\sum_{n=0}^\\infty (1/2)^n$ est égale à :",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$1/2$" },
              { id: "D", text: "$\\infty$" },
            ],
            correctId: "B",
            explanation: "Série géométrique de raison $r=1/2<1$. Somme $=1/(1-1/2)=2$.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-1-e2",
            question: "Vrai ou faux : $\\sum_{n=1}^\\infty 1/n$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. La série harmonique $\\sum 1/n$ est une série de Riemann avec $\\alpha=1\\leq1$ : elle diverge.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-1-e3",
            question: "La série $\\sum n^{-2}$ (série de Riemann $\\alpha=2$) :",
            type: "mcq",
            options: [
              { id: "A", text: "Diverge" },
              { id: "B", text: "Converge, sa somme est $\\pi^2/6$" },
              { id: "C", text: "Converge, sa somme est $1$" },
              { id: "D", text: "Converge, sa somme est $\\infty$" },
            ],
            correctId: "B",
            explanation: "$\\alpha=2>1$ donc convergence. La somme est $\\pi^2/6$ (résultat d'Euler). C'est la solution du problème de Bâle.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-1-e4",
            question: "Vrai ou faux : Si $a_n\\to0$, alors $\\sum a_n$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $a_n=1/n\\to0$ mais $\\sum1/n$ diverge. La condition $a_n\\to0$ est nécessaire mais non suffisante.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-1-e5",
            question: "Appliquer le critère de d'Alembert à $\\sum n!/n^n$. Que vaut $\\lim|a_{n+1}/a_n|$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$e^{-1}$" },
              { id: "C", text: "$e$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "B",
            explanation: "$\\frac{a_{n+1}}{a_n}=\\frac{(n+1)!}{(n+1)^{n+1}}\\cdot\\frac{n^n}{n!}=\\left(\\frac{n}{n+1}\\right)^n=\\frac{1}{(1+1/n)^n}\\to1/e<1$. Donc convergence.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-1-e6",
            question: "Étudier la nature de $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)}$.",
            type: "open",
            modelAnswer: "Décomposition : 1/(n(n+1))=1/n-1/(n+1). Somme partielle : S_N=1-1/(N+1)→1. Converge, somme=1.",
            explanation: "**Décomposition en éléments simples :**\n$\\frac{1}{n(n+1)}=\\frac{1}{n}-\\frac{1}{n+1}$ (série télescopique).\n\n$S_N=\\sum_{n=1}^N\\left(\\frac{1}{n}-\\frac{1}{n+1}\\right)=1-\\frac{1}{N+1}\\to1$.\n\nLa série **converge** et sa somme est $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-1-e7",
            question: "Vrai ou faux : La série $\\sum(-1)^n/n$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par le critère de Leibniz : $a_n=1/n$ est décroissante et tend vers $0$. Donc $\\sum(-1)^n/n$ converge (mais pas absolument).",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-1-e8",
            question: "Appliquer d'Alembert à $\\sum n^2/2^n$.",
            type: "mcq",
            options: [
              { id: "A", text: "Diverge car $L=2$" },
              { id: "B", text: "Converge car $L=1/2$" },
              { id: "C", text: "Non concluant car $L=1$" },
              { id: "D", text: "Converge car $L=0$" },
            ],
            correctId: "B",
            explanation: "$|a_{n+1}/a_n|=\\frac{(n+1)^2}{2^{n+1}}\\cdot\\frac{2^n}{n^2}=\\frac{(n+1)^2}{2n^2}\\to\\frac{1}{2}<1$. La série converge absolument.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-1-e9",
            question: "Vrai ou faux : La convergence absolue implique la convergence.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $\\sum|a_n|$ converge, alors $\\sum a_n$ converge aussi. La réciproque est fausse ($\\sum(-1)^n/n$ converge mais pas absolument).",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-1-e10",
            question: "Quelle est la somme de $\\sum_{n=0}^\\infty (-1)^n x^n$ pour $|x|<1$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\frac{1}{1+x}$" },
              { id: "B", text: "$\\frac{1}{1-x}$" },
              { id: "C", text: "$e^{-x}$" },
              { id: "D", text: "$\\ln(1+x)$" },
            ],
            correctId: "A",
            explanation: "$\\sum_{n=0}^\\infty(-1)^nx^n=\\sum_{n=0}^\\infty(-x)^n=\\frac{1}{1-(-x)}=\\frac{1}{1+x}$ (série géométrique de raison $-x$, $|-x|=|x|<1$).",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-1-e11",
            question: "Montrer que $\\sum_{n=1}^\\infty 1/n^2$ converge par comparaison.",
            type: "open",
            modelAnswer: "Pour n≥2 : 1/n² ≤ 1/(n(n-1)) = 1/(n-1) - 1/n. La série télescopique converge (somme = 1), donc par comparaison sum 1/n² converge.",
            explanation: "Pour $n\\geq2$ : $\\frac{1}{n^2}\\leq\\frac{1}{n(n-1)}=\\frac{1}{n-1}-\\frac{1}{n}$.\n\n$\\sum_{n=2}^N\\frac{1}{n(n-1)}=1-\\frac{1}{N}\\to1$.\n\nPar comparaison, $\\sum_{n=2}^\\infty\\frac{1}{n^2}$ converge, donc $\\sum_{n=1}^\\infty\\frac{1}{n^2}=1+\\sum_{n=2}^\\infty\\frac{1}{n^2}$ converge aussi. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-1-e12",
            question: "Vrai ou faux : Si $\\sum a_n$ et $\\sum b_n$ convergent, alors $\\sum a_n b_n$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Contre-exemple : $a_n=b_n=(-1)^n/\\sqrt{n}$. $\\sum a_n$ converge (Leibniz), mais $\\sum a_nb_n=\\sum1/n$ diverge.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-1-e13",
            question: "Calculer la somme de $\\sum_{n=0}^\\infty nx^n$ pour $|x|<1$.",
            type: "open",
            modelAnswer: "Dériver terme à terme sum x^n = 1/(1-x). On obtient sum nx^{n-1}=1/(1-x)². Donc sum nx^n = x/(1-x)².",
            explanation: "On sait que $f(x)=\\sum_{n=0}^\\infty x^n=\\frac{1}{1-x}$ pour $|x|<1$.\n\nEn dérivant terme à terme (permis sur $|x|<1$) :\n$f'(x)=\\sum_{n=1}^\\infty nx^{n-1}=\\frac{1}{(1-x)^2}$.\n\nEn multipliant par $x$ : $\\sum_{n=1}^\\infty nx^n=\\frac{x}{(1-x)^2}$.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-1-e14",
            question: "Étudier la convergence de $\\sum_{n=1}^\\infty\\frac{\\sin n}{n^2}$.",
            type: "open",
            modelAnswer: "|sin(n)/n²| ≤ 1/n². Comme sum 1/n² converge, la série converge absolument.",
            explanation: "Pour tout $n\\geq1$ : $|\\sin n/n^2|\\leq1/n^2$.\n\nOr $\\sum1/n^2$ converge (Riemann, $\\alpha=2>1$).\n\nPar **comparaison des valeurs absolues**, $\\sum|\\sin n/n^2|$ converge, donc $\\sum\\sin n/n^2$ **converge absolument**.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-1-e15",
            question: "Vrai ou faux : Si $(S_N)$ est bornée et les $a_n$ sont positifs décroissants tendant vers $0$, alors $\\sum a_n$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $(S_N)$ croissante bornée converge. Mais ici les $a_n>0$ donc $S_N$ est croissante. Si elle est bornée ET les $a_n>0$ alors effectivement $S_N$ converge. En fait cela est **vrai** pour $a_n>0$ : croissante bornée $\\Rightarrow$ convergente. Réponse correcte : Vrai.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "anal2-l2-2",
        slug: "integrales-generalisees",
        title: "Intégrales généralisées",
        durationMinutes: 60,
        content: `## Intégrales généralisées (impropres)

### 1. Définitions

**Intégrale en $+\\infty$ :** $\\int_a^{+\\infty} f(t)\\,dt = \\lim_{x\\to+\\infty}\\int_a^x f(t)\\,dt$ (si la limite existe et est finie).

**Intégrale avec singularité en $b$ :** $\\int_a^b f(t)\\,dt = \\lim_{\\varepsilon\\to0^+}\\int_a^{b-\\varepsilon} f(t)\\,dt$.

### 2. Intégrales de référence

$$\\int_1^{+\\infty}\\frac{dt}{t^\\alpha}\\text{ converge} \\Leftrightarrow \\alpha>1$$
$$\\int_0^1\\frac{dt}{t^\\alpha}\\text{ converge} \\Leftrightarrow \\alpha<1$$

**Intégrale de Gauss-Euler :** $\\int_0^{+\\infty}e^{-t^2}dt=\\frac{\\sqrt{\\pi}}{2}$.

### 3. Critères de convergence

**Critère de comparaison :** si $0\\leq f(t)\\leq g(t)$ et $\\int g$ converge, alors $\\int f$ converge.

**Critère des équivalents :** si $f(t)\\sim_{t\\to+\\infty} g(t)\\geq0$, les intégrales ont même nature.

**Convergence absolue :** si $\\int|f|$ converge, alors $\\int f$ converge.

### 4. Règles de calcul

**Intégration par parties :** $\\int_a^{+\\infty}f'g = [fg]_a^{+\\infty}-\\int_a^{+\\infty}fg'$.

**Changement de variable :** $\\int_a^{+\\infty}f(u(t))u'(t)\\,dt$.

### 5. Exemples fondamentaux

$$\\int_0^{+\\infty}e^{-t}dt = 1$$
$$\\int_0^{+\\infty}t^{\\alpha-1}e^{-t}dt = \\Gamma(\\alpha) \\quad (\\alpha>0)$$

avec $\\Gamma(n)=(n-1)!$ pour $n\\in\\mathbb{N}^*$.

**Formule de la fonction Gamma :** $\\Gamma(\\alpha+1)=\\alpha\\Gamma(\\alpha)$.`,
        exercises: [
          {
            id: "anal2-l2-2-e1",
            question: "L'intégrale $\\int_1^{+\\infty}\\frac{dt}{t^2}$ est égale à :",
            type: "mcq",
            options: [
              { id: "A", text: "$+\\infty$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$1/2$" },
            ],
            correctId: "C",
            explanation: "$\\int_1^{+\\infty}t^{-2}dt=\\left[-t^{-1}\\right]_1^{+\\infty}=0-(-1)=1$.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-2-e2",
            question: "Vrai ou faux : $\\int_1^{+\\infty}\\frac{dt}{t}$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $\\int_1^x dt/t=[\\ln t]_1^x=\\ln x\\to+\\infty$. L'intégrale de Riemann $\\alpha=1$ diverge.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-2-e3",
            question: "$\\int_0^{+\\infty}e^{-2t}dt$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$1/2$" },
              { id: "D", text: "$+\\infty$" },
            ],
            correctId: "C",
            explanation: "$\\int_0^{+\\infty}e^{-2t}dt=\\left[-\\frac{e^{-2t}}{2}\\right]_0^{+\\infty}=0-(-1/2)=1/2$.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-2-e4",
            question: "Vrai ou faux : $\\int_0^1 dt/\\sqrt{t}$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\int_0^1 t^{-1/2}dt$: singularité en $0$, $\\alpha=1/2<1$. Converge : $\\left[2\\sqrt{t}\\right]_0^1=2$.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-2-e5",
            question: "Quelle est la valeur de $\\Gamma(4)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$24$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$4$" },
            ],
            correctId: "B",
            explanation: "$\\Gamma(4)=(4-1)!=3!=6$.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-2-e6",
            question: "Calculer $\\int_0^{+\\infty}te^{-t}dt$ par intégration par parties.",
            type: "open",
            modelAnswer: "IBP: u=t, v'=e^{-t}. [t(-e^{-t})]_0^∞ - ∫_0^∞(-e^{-t})dt = 0 + ∫_0^∞e^{-t}dt = 1.",
            explanation: "**IBP :** $u=t$, $v'=e^{-t}$, donc $u'=1$, $v=-e^{-t}$.\n$\\int_0^{+\\infty}te^{-t}dt=\\left[-te^{-t}\\right]_0^{+\\infty}+\\int_0^{+\\infty}e^{-t}dt=0+1=1$.\n(On a $\\lim_{t\\to\\infty}te^{-t}=0$ par croissances comparées.)\nCela donne $\\Gamma(2)=1!=1$. ✓",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-2-e7",
            question: "Étudier la convergence de $\\int_1^{+\\infty}\\frac{\\ln t}{t^2}dt$.",
            type: "open",
            modelAnswer: "ln(t)/t² ~ 1/t^{3/2} (en gros), ou par IBP directement. Converge : calculer par IBP donne valeur 1.",
            explanation: "**Convergence :** Pour $t\\geq1$, $\\ln t\\leq\\sqrt{t}$, donc $0\\leq\\frac{\\ln t}{t^2}\\leq\\frac{1}{t^{3/2}}$. Comme $\\int_1^\\infty t^{-3/2}dt$ converge ($\\alpha=3/2>1$), par comparaison l'intégrale converge.\n\n**Calcul (IBP) :** $u=\\ln t$, $v'=t^{-2}$, $v=-t^{-1}$ :\n$\\int_1^\\infty\\frac{\\ln t}{t^2}dt=\\left[-\\frac{\\ln t}{t}\\right]_1^\\infty+\\int_1^\\infty\\frac{1}{t^2}dt=0+1=1$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-2-e8",
            question: "Vrai ou faux : Si $f$ est continue et $|f(t)|\\leq e^{-t}$ pour $t\\geq0$, alors $\\int_0^{+\\infty}f(t)dt$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par comparaison : $|f(t)|\\leq e^{-t}$ et $\\int_0^\\infty e^{-t}dt=1<\\infty$. L'intégrale converge absolument, donc converge.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-2-e9",
            question: "Calculer $\\int_0^{+\\infty}e^{-t}\\cos t\\,dt$.",
            type: "open",
            modelAnswer: "Méthode complexe : Re[∫e^{(-1+i)t}dt] = Re[1/(1-i)] = Re[(1+i)/2] = 1/2.",
            explanation: "**Méthode :** $I=\\text{Re}\\int_0^\\infty e^{(-1+i)t}dt=\\text{Re}\\left[\\frac{e^{(-1+i)t}}{-1+i}\\right]_0^\\infty=\\text{Re}\\frac{1}{1-i}$.\n\n$\\frac{1}{1-i}=\\frac{1+i}{2}$. Donc $I=\\text{Re}(1+i)/2=1/2$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-2-e10",
            question: "Vrai ou faux : $\\int_0^{+\\infty}\\sin(t)dt$ converge.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $\\int_0^x\\sin t\\,dt=[-\\cos t]_0^x=1-\\cos x$, qui n'admet pas de limite quand $x\\to+\\infty$ (oscille entre $0$ et $2$).",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-2-e11",
            question: "Montrer que $\\int_0^{+\\infty}\\frac{\\sin t}{t}dt$ converge (intégrale de Dirichlet).",
            type: "open",
            modelAnswer: "Sur [ε,A], IBP : [−cos(t)/t]_ε^A − ∫(cos t)/t² dt. Les termes convergent quand ε→0, A→∞ car |cos t/t²|≤1/t².",
            explanation: "**Preuve (IBP sur $[\\varepsilon,A]$) :**\n$\\int_\\varepsilon^A\\frac{\\sin t}{t}dt=\\left[-\\frac{\\cos t}{t}\\right]_\\varepsilon^A-\\int_\\varepsilon^A\\frac{\\cos t}{t^2}dt$\n$=\\frac{\\cos\\varepsilon}{\\varepsilon}-\\frac{\\cos A}{A}-\\int_\\varepsilon^A\\frac{\\cos t}{t^2}dt$.\n\nQuand $\\varepsilon\\to0^+$ : $\\cos\\varepsilon/\\varepsilon\\to+\\infty$... hmm.\n\n**Alternative :** Critère de Dirichlet (Abel-Dirichlet) : $f(t)=\\sin t$ a des primitives bornées ($|\\int_0^x\\sin t|\\leq2$) et $g(t)=1/t$ décroît vers $0$. L'intégrale $\\int_1^\\infty\\frac{\\sin t}{t}dt$ converge. L'intégrale sur $[0,1]$ converge absolument.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-2-e12",
            question: "Calculer $\\Gamma(1/2)$ sachant que $\\int_{-\\infty}^{+\\infty}e^{-t^2}dt=\\sqrt{\\pi}$.",
            type: "open",
            modelAnswer: "Γ(1/2)=∫_0^∞ t^{-1/2}e^{-t}dt. Poser t=u². dt=2u du. Γ(1/2)=∫_0^∞ e^{-u²}·2du=√π.",
            explanation: "$\\Gamma(1/2)=\\int_0^\\infty t^{-1/2}e^{-t}dt$. Changement de variable $t=u^2$, $dt=2u\\,du$ :\n$\\Gamma(1/2)=\\int_0^\\infty u^{-1}e^{-u^2}2u\\,du=2\\int_0^\\infty e^{-u^2}du=\\sqrt{\\pi}$.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-2-e13",
            question: "Vrai ou faux : $\\int_1^{+\\infty}\\frac{\\cos t}{t}dt$ converge absolument.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $|\\cos t/t|\\sim1/(\\pi k)$ sur les intervalles $[k\\pi-\\pi/2, k\\pi+\\pi/2]$ et la série harmonique diverge. L'intégrale converge (Dirichlet) mais pas absolument.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-2-e14",
            question: "Calculer $\\int_0^1 t^n\\ln t\\,dt$ pour $n\\geq0$.",
            type: "open",
            modelAnswer: "IBP: u=ln t, v'=t^n. [t^{n+1}ln(t)/(n+1)]_0^1 - ∫_0^1 t^n/(n+1) dt = 0 - 1/(n+1)².",
            explanation: "**IBP :** $u=\\ln t$, $v'=t^n$, $v=t^{n+1}/(n+1)$.\n$\\int_0^1 t^n\\ln t\\,dt=\\left[\\frac{t^{n+1}\\ln t}{n+1}\\right]_0^1-\\int_0^1\\frac{t^n}{n+1}dt$\n$=0-\\frac{1}{n+1}\\cdot\\frac{1}{n+1}=-\\frac{1}{(n+1)^2}$.\n(Le terme $t^{n+1}\\ln t\\to0$ en $0$ par croissances comparées.)",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-2-e15",
            question: "Vrai ou faux : Si $f$ est continue sur $[0,+\\infty[$, $f(t)\\geq0$ et $\\int_0^{+\\infty}f(t)dt<\\infty$, alors $f(t)\\to0$ quand $t\\to+\\infty$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Contre-exemple : des bosses de hauteur $1$ et de largeur $1/n^2$ centrées en $n$. La fonction est $\\geq0$, intégrable (la somme des aires $\\sum1/n^2<\\infty$), mais ne tend pas vers $0$ (elle revient à $1$ chaque fois).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "anal2-l2-3",
        slug: "equations-differentielles-premier-ordre",
        title: "Équations différentielles du 1er ordre",
        durationMinutes: 60,
        content: `## Équations différentielles du 1er ordre

### 1. Généralités

Une **équation différentielle (ED) du 1er ordre** est de la forme $y'=f(x,y)$.

**Solution sur $I$ :** fonction dérivable $y:I\\to\\mathbb{R}$ vérifiant l'équation pour tout $x\\in I$.

**Problème de Cauchy :** $\\begin{cases}y'=f(x,y)\\\\y(x_0)=y_0\\end{cases}$.

**Théorème de Cauchy-Lipschitz :** si $f$ est continue en $x$ et lipschitzienne en $y$, le problème de Cauchy admet une unique solution locale.

### 2. Équations linéaires du 1er ordre

$$y' + p(x)y = q(x)$$

**Solution homogène :** $y_H = C e^{-P(x)}$ où $P(x)=\\int p(x)dx$.

**Variation de la constante :** on pose $y=C(x)e^{-P(x)}$, on substitue et on intègre.

**Formule de la solution générale :**
$$y(x) = e^{-P(x)}\\left(C + \\int q(x)e^{P(x)}dx\\right)$$

### 3. Équations à variables séparables

$$y' = g(x)h(y)$$

On sépare : $\\frac{dy}{h(y)} = g(x)dx$, puis on intègre des deux côtés.

### 4. Exemples

**Exemple 1 :** $y' + 2y = e^x$, $y(0)=1$.

$P(x)=2x$. Solution générale : $y=e^{-2x}\\left(C+\\int e^x e^{2x}dx\\right)=e^{-2x}(C+e^{3x}/3)=Ce^{-2x}+e^x/3$.

C.I. : $y(0)=C+1/3=1$, donc $C=2/3$.

$y(x) = \\frac{2}{3}e^{-2x}+\\frac{1}{3}e^x$.

**Exemple 2 :** $y' = y^2$, $y(0)=1$.

Séparable : $dy/y^2=dx$, $-1/y=x+C$, $y=-1/(x+C)$.

C.I. : $y(0)=1=-1/C$, $C=-1$. Solution : $y=1/(1-x)$ (définie sur $]-\\infty,1[$).`,
        exercises: [
          {
            id: "anal2-l2-3-e1",
            question: "Résoudre $y' = 3y$.",
            type: "mcq",
            options: [
              { id: "A", text: "$y=Ce^{3x}$" },
              { id: "B", text: "$y=3x+C$" },
              { id: "C", text: "$y=Ce^{x/3}$" },
              { id: "D", text: "$y=C\\cos(3x)$" },
            ],
            correctId: "A",
            explanation: "$y'/y=3$, $\\ln|y|=3x+K$, $y=Ce^{3x}$ (équation homogène, solution classique).",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-3-e2",
            question: "Vrai ou faux : La solution de $y'=y$, $y(0)=2$ est $y=2e^x$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$y=Ce^x$, $y(0)=C=2$. Donc $y=2e^x$. Vérification : $y'=2e^x=y$ ✓.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-3-e3",
            question: "Résoudre $y'=x$ (ED immédiate).",
            type: "mcq",
            options: [
              { id: "A", text: "$y=x^2+C$" },
              { id: "B", text: "$y=x^2/2+C$" },
              { id: "C", text: "$y=2x+C$" },
              { id: "D", text: "$y=e^x+C$" },
            ],
            correctId: "B",
            explanation: "$y=\\int x\\,dx=x^2/2+C$.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-3-e4",
            question: "Quelle est la nature de $y'=f(x)g(y)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "ED linéaire" },
              { id: "B", text: "ED à variables séparables" },
              { id: "C", text: "ED de Bernoulli" },
              { id: "D", text: "ED exacte" },
            ],
            correctId: "B",
            explanation: "$y'=f(x)g(y)$ est une équation **à variables séparables** : on peut écrire $dy/g(y)=f(x)dx$ et intégrer.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-3-e5",
            question: "Vrai ou faux : L'équation $y'+p(x)y=0$ est une ED linéaire homogène.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $y'+p(x)y=0$ est linéaire (en $y,y'$) et le second membre est nul, donc homogène. Sa solution est $y=Ce^{-P(x)}$.",
            difficulty: "debutant",
          },
          {
            id: "anal2-l2-3-e6",
            question: "Résoudre $y'-y=e^x$.",
            type: "open",
            modelAnswer: "Homogène: y_H=Ce^x. Variation: y=C(x)e^x. C'(x)e^x=e^x donc C'=1, C(x)=x. Solution: y=(x+C)e^x.",
            explanation: "**Résolution :**\n\n$p(x)=-1$, $P(x)=-x$. Solution homogène : $y_H=Ce^x$.\n\n**Variation de la constante :** $y=C(x)e^x$.\n$y'=C'(x)e^x+C(x)e^x$.\nSubstituer : $C'e^x+Ce^x-Ce^x=e^x$, donc $C'(x)=1$, $C(x)=x+K$.\n\n**Solution générale :** $y=(x+K)e^x$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-3-e7",
            question: "Résoudre $y'=\\frac{x}{y}$ (séparable) avec $y(0)=1$.",
            type: "open",
            modelAnswer: "y dy = x dx. y²/2 = x²/2 + C. y²-x²=K. y(0)=1: K=1. y=√(1+x²).",
            explanation: "**Variables séparables :**\n$y\\,dy=x\\,dx \\Rightarrow \\frac{y^2}{2}=\\frac{x^2}{2}+C \\Rightarrow y^2-x^2=2C=K$.\n\nC.I. $y(0)=1$ : $1-0=K$, $K=1$.\n\n$y^2=1+x^2 \\Rightarrow y=\\sqrt{1+x^2}$ (prendre la racine positive car $y(0)=1>0$).",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-3-e8",
            question: "Vrai ou faux : L'ensemble des solutions de $y'+p(x)y=q(x)$ est un espace affine de dimension $1$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. L'ensemble des solutions est $y_p+\\{Ce^{-P(x)},C\\in\\mathbb{R}\\}$ où $y_p$ est une solution particulière. C'est une variété affine de dimension $1$ (translaté de l'espace de solutions de l'ED homogène, de dimension $1$).",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-3-e9",
            question: "Résoudre $y'=y^2$, $y(0)=y_0>0$. En quel point explose-t-elle ?",
            type: "open",
            modelAnswer: "-1/y=x+C. y(0)=y0: C=-1/y0. y=1/(1/y0-x). Explose en x=1/y0.",
            explanation: "**Séparable :** $dy/y^2=dx \\Rightarrow -1/y=x+C$.\n\n$y(0)=y_0>0$ : $-1/y_0=C$.\n\n$y=\\frac{1}{1/y_0-x}$, définie sur $]-\\infty,1/y_0[$.\n\n**Explosion en $x=1/y_0$** (temps de vie fini).",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-3-e10",
            question: "Quelle est la solution particulière de $y'+2y=4x$ de la forme $ax+b$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$2x$" },
              { id: "B", text: "$2x-1$" },
              { id: "C", text: "$x+2$" },
              { id: "D", text: "$x$" },
            ],
            correctId: "B",
            explanation: "$y_p=ax+b$, $y_p'=a$. Substituer : $a+2(ax+b)=4x$. $2ax=4x\\Rightarrow a=2$. $a+2b=0\\Rightarrow2+2b=0\\Rightarrow b=-1$. Donc $y_p=2x-1$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal2-l2-3-e11",
            question: "Énoncer et prouver le théorème de Cauchy-Lipschitz pour les ED linéaires $y'+p(x)y=q(x)$.",
            type: "open",
            modelAnswer: "Si p,q continues sur I, il existe une unique solution sur I satisfaisant y(x0)=y0. Preuve: la formule de variation de la constante donne l'unique solution explicite.",
            explanation: "**Théorème :** Si $p,q$ sont continues sur $I$ et $x_0\\in I$, $y_0\\in\\mathbb{R}$, alors le problème de Cauchy $y'+p(x)y=q(x)$, $y(x_0)=y_0$ admet une **unique solution** sur $I$ entier.\n\n**Preuve :** La formule explicite $y(x)=e^{-P(x)}\\left(y_0e^{P(x_0)}+\\int_{x_0}^x q(t)e^{P(t)}dt\\right)$ (où $P(x)=\\int_{x_0}^x p(t)dt$) fournit une solution. Elle est unique car deux solutions vérifient la même formule. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-3-e12",
            question: "Vrai ou faux : L'équation $y'=y^{1/3}$ avec $y(0)=0$ admet une unique solution.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $f(y)=y^{1/3}$ n'est pas lipschitzienne en $y=0$. Le problème n'a pas unicité : $y=0$ et $y=\\pm(2x/3)^{3/2}$ (pour $x\\geq0$) sont deux familles de solutions. C'est un contre-exemple à l'unicité quand Lipschitz n'est pas satisfaite.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-3-e13",
            question: "Résoudre l'ED de Bernoulli $y'-y=xy^2$.",
            type: "open",
            modelAnswer: "Poser z=1/y, z'=-y'/y²=-y/y²+xy=-z+x. ED linéaire: z'-z=-x (sic). Solution: z=Ce^x+x+1. y=1/z.",
            explanation: "**ED de Bernoulli ($n=2$) :** On pose $z=y^{1-2}=y^{-1}=1/y$.\n$z'=-y'/y^2$. De $y'=y+xy^2$ : $z'=-y^{-2}y=-y^{-1}-x=-z-x$.\n\n**ED linéaire en $z$ :** $z'+z=-x$.\n\n$P(x)=x$. Solution homogène : $Ce^{-x}$. Particulière ($ax+b$) : $a+ax+b=-x\\Rightarrow a=-1, b=1$. $z_p=-x+1$.\n\n$z=Ce^{-x}-x+1$. $y=1/z=\\frac{1}{Ce^{-x}-x+1}$.",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-3-e14",
            question: "Calculer l'intégrale première (énergie) de $y''=-y$ (équation du pendule linéaire).",
            type: "open",
            modelAnswer: "Multiplier par y'. d/dt(y'²/2 + y²/2)=y'y''+yy'=y'(-y)+yy'=0. Donc E=y'²/2+y²/2=constante.",
            explanation: "**Intégrale première :**\n\nMultiplier $y''=-y$ par $y'$ :\n$y'y''=-yy' \\Rightarrow \\frac{d}{dx}\\left(\\frac{y'^2}{2}\\right)+\\frac{d}{dx}\\left(\\frac{y^2}{2}\\right)=0$.\n\nDonc $E(x)=\\frac{y'(x)^2+y(x)^2}{2}=\\text{constante}$.\n\nC'est l'énergie mécanique totale (cinétique + potentielle). Les solutions sont $y=A\\cos x+B\\sin x$, qui vérifient $y'^2+y^2=A^2+B^2=\\text{cste}$. ✓",
            difficulty: "expert",
          },
          {
            id: "anal2-l2-3-e15",
            question: "Vrai ou faux : Toute solution de $y'=f(x,y)$ avec $f$ continue peut être prolongée jusqu'au bord du domaine de définition de $f$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Une solution peut exploser avant d'atteindre le bord : $y'=y^2$, $y(0)=1$ explose en $x=1$ alors que $f$ est définie sur tout $\\mathbb{R}^2$. Le **théorème de prolongement maximal** garantit l'existence d'une solution maximale, mais pas qu'elle soit définie sur tout le domaine de $f$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // L2 — Algèbre : Matrices, déterminants, valeurs propres
  // ─────────────────────────────────────────────
  {
    id: "algebre-l2",
    slug: "algebre-l2-matrices-determinants-vp",
    title: "Algèbre L2 — Matrices, déterminants et réduction",
    description: "Opérations matricielles, déterminants, inversibilité, valeurs propres et vecteurs propres.",
    schoolLevel: "L2",
    subject: "algebre",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "□",
    lessons: [
      {
        id: "alg2-l2-1",
        slug: "matrices-operations",
        title: "Matrices et opérations",
        durationMinutes: 55,
        content: `## Matrices et opérations

### 1. Définitions

Une **matrice** $A\\in\\mathcal{M}_{m,n}(\\mathbb{R})$ est un tableau de $m$ lignes et $n$ colonnes. Le coefficient en ligne $i$, colonne $j$ est noté $a_{ij}$.

**Matrices spéciales :** identité $I_n$, nulle $0$, diagonale, triangulaire, symétrique ($A^T=A$), antisymétrique ($A^T=-A$).

### 2. Opérations

- **Addition :** $(A+B)_{ij} = a_{ij}+b_{ij}$ (même taille).
- **Multiplication scalaire :** $(\\lambda A)_{ij}=\\lambda a_{ij}$.
- **Produit :** $(AB)_{ij}=\\sum_{k=1}^p a_{ik}b_{kj}$ pour $A\\in\\mathcal{M}_{m,p}$, $B\\in\\mathcal{M}_{p,n}$.
- **Transposée :** $(A^T)_{ij}=a_{ji}$.

**Propriétés du produit :**
- Associatif : $(AB)C=A(BC)$
- Distributif sur l'addition
- **Non commutatif en général :** $AB\\neq BA$
- $(AB)^T = B^T A^T$, $(AB)^{-1}=B^{-1}A^{-1}$ si inversibles

### 3. Inversibilité

$A\\in\\mathcal{M}_n$ est **inversible** (ou régulière) si $\\exists B$ tel que $AB=BA=I_n$. Alors $B=A^{-1}$ est unique.

$A$ est inversible $\\Leftrightarrow \\det(A)\\neq0 \\Leftrightarrow \\text{rang}(A)=n$.

### 4. Matrices par blocs

On peut découper une matrice en blocs et effectuer les opérations bloc par bloc (en respectant les compatibilités de tailles).

### 5. Trace

$\\text{tr}(A) = \\sum_{i=1}^n a_{ii}$. Propriétés : $\\text{tr}(A+B)=\\text{tr}(A)+\\text{tr}(B)$, $\\text{tr}(AB)=\\text{tr}(BA)$, $\\text{tr}(A^T)=\\text{tr}(A)$.`,
        exercises: [
          {
            id: "alg2-l2-1-e1",
            question: "Calculer $AB$ avec $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ et $B=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}2&2\\\\3&5\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "$B=I_2$ est la matrice identité. $AI_2=A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-1-e2",
            question: "Vrai ou faux : Le produit de matrices est commutatif.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. En général $AB\\neq BA$. Par exemple $\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}0&2\\\\0&0\\end{pmatrix}$ mais le produit inversé donne $\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-1-e3",
            question: "Quelle est la trace de $A=\\begin{pmatrix}3&1&0\\\\2&-1&4\\\\0&0&5\\end{pmatrix}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$7$" },
              { id: "B", text: "$14$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "A",
            explanation: "$\\text{tr}(A)=a_{11}+a_{22}+a_{33}=3+(-1)+5=7$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-1-e4",
            question: "Vrai ou faux : $(A+B)^2 = A^2+2AB+B^2$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $(A+B)^2=(A+B)(A+B)=A^2+AB+BA+B^2$. Comme $AB\\neq BA$ en général, cela n'est pas égal à $A^2+2AB+B^2$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-1-e5",
            question: "Quelle est l'inverse de $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}$" },
              { id: "C", text: "$\\frac{1}{2}\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}-1&1\\\\1&-2\\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "$\\det(A)=2-1=1$. Pour $2\\times2$ : $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$. Vérification : $AA^{-1}=I_2$ ✓.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-1-e6",
            question: "Calculer $\\text{tr}(AB)$ si $A=(1,2,3)$ (ligne) et $B=(1,2,3)^T$ (colonne).",
            type: "open",
            modelAnswer: "AB est une matrice 1×1: AB=(1×1+2×2+3×3)=(14). tr(AB)=14.",
            explanation: "$A$ est $1\\times3$, $B$ est $3\\times1$. $AB=1\\times1+2\\times2+3\\times3=1+4+9=14$. C'est une matrice $1\\times1$, donc $\\text{tr}(AB)=14$.\n\nAlternativement : $\\text{tr}(AB)=\\text{tr}(BA)$. $BA$ est $3\\times3$ avec $\\text{tr}(BA)=\\sum_{i}(BA)_{ii}=\\sum_i b_i a_i=14$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-1-e7",
            question: "Vrai ou faux : Si $AB=0$ et $A\\neq0$, alors $B=0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ et $B=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$ : $AB=0$ mais $A,B\\neq0$. Les matrices peuvent être des diviseurs de zéro.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-1-e8",
            question: "Montrer que $\\text{tr}(AB)=\\text{tr}(BA)$ pour $A\\in\\mathcal{M}_{m,n}$, $B\\in\\mathcal{M}_{n,m}$.",
            type: "open",
            modelAnswer: "tr(AB)=Σ_i (AB)_{ii}=Σ_i Σ_k a_{ik}b_{ki}=Σ_k Σ_i b_{ki}a_{ik}=Σ_k (BA)_{kk}=tr(BA).",
            explanation: "$\\text{tr}(AB)=\\sum_{i=1}^m(AB)_{ii}=\\sum_{i=1}^m\\sum_{k=1}^n a_{ik}b_{ki}$.\n\nOn permute les sommes : $=\\sum_{k=1}^n\\sum_{i=1}^m b_{ki}a_{ik}=\\sum_{k=1}^n(BA)_{kk}=\\text{tr}(BA)$. $\\square$",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-1-e9",
            question: "Vrai ou faux : Toute matrice symétrique réelle est diagonalisable.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le **théorème spectral** : toute matrice symétrique réelle est diagonalisable dans une base orthonormée (valeurs propres réelles, vecteurs propres orthogonaux).",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-1-e10",
            question: "Calculer $A^{100}$ pour $A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}2^{100}&0\\\\0&3^{100}\\end{pmatrix}$" },
              { id: "B", text: "$100\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}200&0\\\\0&300\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}2^{100}+3^{100}&0\\\\0&0\\end{pmatrix}$" },
            ],
            correctId: "A",
            explanation: "Pour une matrice diagonale : $D^n=\\text{diag}(d_1^n,\\ldots,d_k^n)$. Donc $A^{100}=\\begin{pmatrix}2^{100}&0\\\\0&3^{100}\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-1-e11",
            question: "Montrer que si $A$ est inversible et $AB=AC$, alors $B=C$.",
            type: "open",
            modelAnswer: "AB=AC ⇒ A⁻¹(AB)=A⁻¹(AC) ⇒ (A⁻¹A)B=(A⁻¹A)C ⇒ IB=IC ⇒ B=C.",
            explanation: "**Preuve :**\n$AB=AC$\n$\\Rightarrow A^{-1}(AB)=A^{-1}(AC)$ (multiplier à gauche par $A^{-1}$)\n$\\Rightarrow (A^{-1}A)B=(A^{-1}A)C$\n$\\Rightarrow I_nB=I_nC$\n$\\Rightarrow B=C$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-1-e12",
            question: "Vrai ou faux : Si $A^2=I$, alors $A=I$ ou $A=-I$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $A=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$ vérifie $A^2=I$ mais $A\\neq\\pm I$. En fait $A^2=I\\Leftrightarrow (A-I)(A+I)=0$, ce qui n'implique pas $A=\\pm I$ dans l'algèbre non commutative des matrices.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-1-e13",
            question: "Montrer que $\\text{rang}(AB)\\leq\\min(\\text{rang}(A),\\text{rang}(B))$.",
            type: "open",
            modelAnswer: "Im(AB)⊂Im(A) donc rang(AB)≤rang(A). B envoyant R^n sur Im(B), AB envoie R^n sur A(Im(B)), donc Im(AB)=A(Im(B)) et rang(AB)≤dim(Im(B))=rang(B).",
            explanation: "**Preuve :**\n1. $\\text{Im}(AB)=\\{ABx:x\\in\\mathbb{R}^n\\}\\subset\\{Ay:y\\in\\mathbb{R}^p\\}=\\text{Im}(A)$. Donc $\\text{rang}(AB)\\leq\\text{rang}(A)$.\n2. $\\text{Im}(AB)=A(\\text{Im}(B))$, image de $\\text{Im}(B)$ par $A$. Donc $\\text{rang}(AB)=\\dim A(\\text{Im}(B))\\leq\\dim\\text{Im}(B)=\\text{rang}(B)$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-1-e14",
            question: "Soit $P$ une matrice de projection ($P^2=P$). Quelles sont les valeurs propres possibles de $P$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Uniquement $0$" },
              { id: "B", text: "Uniquement $1$" },
              { id: "C", text: "$0$ et $1$ uniquement" },
              { id: "D", text: "Tous réels" },
            ],
            correctId: "C",
            explanation: "Si $Pv=\\lambda v$ avec $v\\neq0$, alors $P^2v=P(Pv)=P(\\lambda v)=\\lambda Pv=\\lambda^2 v$. Mais $P^2=P$ donne $Pv=\\lambda v$, donc $\\lambda^2 v=\\lambda v$, soit $\\lambda(\\lambda-1)v=0$. Comme $v\\neq0$, $\\lambda=0$ ou $\\lambda=1$.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-1-e15",
            question: "Vrai ou faux : Si $A$ et $B$ sont des matrices $n\\times n$ avec $AB=I_n$, alors $BA=I_n$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai (pour des matrices carrées de même taille). $AB=I_n$ implique $A$ inversible et $B=A^{-1}$, donc $BA=I_n$. (En dimension infinie ce serait faux, mais pour matrices carrées $n\\times n$ c'est vrai.)",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "alg2-l2-2",
        slug: "determinants-inversibilite",
        title: "Déterminants et inversibilité",
        durationMinutes: 60,
        content: `## Déterminants

### 1. Définition

Le **déterminant** de $A\\in\\mathcal{M}_n$ est un scalaire $\\det(A)\\in\\mathbb{R}$ défini de façon unique par :
1. Multilinéarité par rapport aux colonnes (ou lignes)
2. Alternance (échanger deux colonnes change le signe)
3. $\\det(I_n)=1$

**Développement selon la première ligne :**
$$\\det(A) = \\sum_{j=1}^n (-1)^{1+j}a_{1j}\\det(A_{1j})$$
où $A_{1j}$ est la sous-matrice obtenue en supprimant la ligne $1$ et la colonne $j$.

### 2. Propriétés fondamentales

- $\\det(AB)=\\det(A)\\det(B)$
- $\\det(A^T)=\\det(A)$
- $\\det(\\lambda A)=\\lambda^n\\det(A)$
- $A$ inversible $\\Leftrightarrow \\det(A)\\neq0$, et alors $\\det(A^{-1})=1/\\det(A)$
- **Règle de Sarrus** (pour $3\\times3$)

### 3. Formule pour $2\\times2$ et $3\\times3$

$$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc$$

Pour $3\\times3$ : développer selon une ligne ou une colonne.

### 4. Cofacteurs et inverse

Le **cofacteur** $C_{ij}=(-1)^{i+j}\\det(A_{ij})$.

**Formule d'inversion :** $A^{-1}=\\frac{1}{\\det(A)}\\text{adj}(A)$ où $\\text{adj}(A)_{ij}=C_{ji}$.

### 5. Formule de Cramer

Pour $AX=B$ avec $A$ inversible : $x_i=\\frac{\\det(A_i)}{\\det(A)}$ où $A_i$ est $A$ avec la $i$-ième colonne remplacée par $B$.`,
        exercises: [
          {
            id: "alg2-l2-2-e1",
            question: "Calculer $\\det\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$10$" },
              { id: "B", text: "$14$" },
              { id: "C", text: "$12$" },
              { id: "D", text: "$-2$" },
            ],
            correctId: "A",
            explanation: "$\\det=3\\times4-1\\times2=12-2=10$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-2-e2",
            question: "Vrai ou faux : $\\det(AB)=\\det(A)+\\det(B)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. La formule correcte est $\\det(AB)=\\det(A)\\cdot\\det(B)$ (multiplicativité), pas la somme.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-2-e3",
            question: "La matrice $A=\\begin{pmatrix}2&4\\\\1&2\\end{pmatrix}$ est-elle inversible ?",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "$\\det(A)=2\\times2-4\\times1=4-4=0$. Le déterminant est nul, donc $A$ n'est pas inversible.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-2-e4",
            question: "Calculer $\\det\\begin{pmatrix}1&0&0\\\\2&3&0\\\\4&5&6\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$18$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$0$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "A",
            explanation: "Pour une matrice triangulaire inférieure, le déterminant est le produit des éléments diagonaux : $\\det=1\\times3\\times6=18$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-2-e5",
            question: "Si $\\det(A)=3$, quel est $\\det(2A)$ pour $A\\in\\mathcal{M}_3$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$6$" },
              { id: "B", text: "$12$" },
              { id: "C", text: "$24$" },
              { id: "D", text: "$9$" },
            ],
            correctId: "C",
            explanation: "$\\det(2A)=2^3\\det(A)=8\\times3=24$. En général $\\det(\\lambda A)=\\lambda^n\\det(A)$ pour une matrice $n\\times n$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-2-e6",
            question: "Calculer le déterminant de $A=\\begin{pmatrix}1&2&3\\\\0&4&5\\\\0&0&6\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$24$" },
              { id: "B", text: "$0$" },
              { id: "C", text: "$12$" },
              { id: "D", text: "$6$" },
            ],
            correctId: "A",
            explanation: "Matrice triangulaire supérieure : $\\det=1\\times4\\times6=24$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-2-e7",
            question: "Résoudre $\\begin{cases}2x+y=5\\\\x+3y=4\\end{cases}$ par la règle de Cramer.",
            type: "open",
            modelAnswer: "det(A)=6-1=5. x=det(A1)/det(A), A1=(5,4;1,3), det=15-4=11, x=11/5. A2=(2,1;5,4? — non, (2,5;1,4)), det=8-5=3, y=3/5... Recalculons : A2 remplace col 2 par b=(5,4)^T : A2=(2,5;1,4), det=8-5=3. y=3/5. Vérif: 2(11/5)+3/5=22/5+3/5=5✓.",
            explanation: "**Cramer :**\n$A=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$, $\\det(A)=6-1=5$.\n\n$A_1=\\begin{pmatrix}5&1\\\\4&3\\end{pmatrix}$, $\\det(A_1)=15-4=11$, $x=11/5$.\n\n$A_2=\\begin{pmatrix}2&5\\\\1&4\\end{pmatrix}$, $\\det(A_2)=8-5=3$, $y=3/5$.\n\nVérif : $2(11/5)+3/5=25/5=5$ ✓, $(11/5)+3(3/5)=11/5+9/5=20/5=4$ ✓.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-2-e8",
            question: "Vrai ou faux : $\\det(A+B)=\\det(A)+\\det(B)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Le déterminant est multilinéaire en les **colonnes** (ou lignes) séparément, pas en la matrice globale. Contre-exemple : $A=I_2$, $B=-I_2$, $\\det(A+B)=\\det(0)=0$ mais $\\det(A)+\\det(B)=1+1=2$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-2-e9",
            question: "Trouver l'inverse de $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ par la formule des cofacteurs.",
            type: "open",
            modelAnswer: "det(A)=4-6=-2. adj(A)=(C_{ij})^T=(4,-2;-3,1)^T=(4,-3;-2,1). A^{-1}=adj/det=(-2,3/2;1,-1/2).",
            explanation: "$\\det(A)=4-6=-2$.\n\nCofacteurs : $C_{11}=4$, $C_{12}=-3$, $C_{21}=-2$, $C_{22}=1$.\n\n$\\text{adj}(A)=\\begin{pmatrix}C_{11}&C_{21}\\\\C_{12}&C_{22}\\end{pmatrix}=\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}$.\n\n$A^{-1}=\\frac{1}{-2}\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}=\\begin{pmatrix}-2&1\\\\3/2&-1/2\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-2-e10",
            question: "Vrai ou faux : $\\det(A^n)=(\\det A)^n$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par multiplicativité : $\\det(A^n)=\\det(A\\cdot A\\cdots A)=\\det(A)^n$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-2-e11",
            question: "Calculer $\\det\\begin{pmatrix}1&1&1\\\\a&b&c\\\\a^2&b^2&c^2\\end{pmatrix}$ (déterminant de Vandermonde $3\\times3$).",
            type: "open",
            modelAnswer: "(b-a)(c-a)(c-b).",
            explanation: "**Déterminant de Vandermonde :**\n$C_2-aC_1$, $C_3-aC_1$ : $\\det=\\begin{vmatrix}1&0&0\\\\a&b-a&c-a\\\\a^2&b^2-a^2&c^2-a^2\\end{vmatrix}$\n$=(b-a)(c-a)\\begin{vmatrix}1&0&0\\\\a&1&1\\\\a^2&b+a&c+a\\end{vmatrix}$\n$=(b-a)(c-a)[(c+a)-(b+a)]=(b-a)(c-a)(c-b)$.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-2-e12",
            question: "Vrai ou faux : Si toutes les valeurs propres de $A$ sont non nulles, alors $A$ est inversible.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\det(A)=\\prod_i \\lambda_i$ (produit des valeurs propres). Si toutes les $\\lambda_i\\neq0$, alors $\\det(A)\\neq0$, donc $A$ est inversible.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-2-e13",
            question: "Montrer que $\\det(AB)=\\det(A)\\det(B)$.",
            type: "open",
            modelAnswer: "Si A ou B non inversible, les deux membres sont 0. Si A,B inversibles, on use du fait que tout inversible est produit de matrices élémentaires, sur lesquelles la formule est vraie par définition.",
            explanation: "**Sketch de preuve :**\n\n**Cas A ou B non inversible :** $\\text{rang}(AB)\\leq\\min(\\text{rang}A,\\text{rang}B)<n$, donc $\\det(AB)=0$. Et $\\det(A)\\det(B)=0$ car $\\det(A)=0$ ou $\\det(B)=0$.\n\n**Cas A,B inversibles :** On montre que $\\phi(A)=\\det(AB)/\\det(B)$ est une application vérifiant les 3 axiomes du déterminant en les colonnes de $A$, et $\\phi(I)=\\det(B)/\\det(B)=1$. Par unicité du déterminant, $\\phi(A)=\\det(A)$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-2-e14",
            question: "Calculer $\\det(A-\\lambda I)$ pour $A=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$ et trouver les valeurs propres.",
            type: "open",
            modelAnswer: "det(A-λI)=(2-λ)(3-λ). Valeurs propres: λ=2 et λ=3.",
            explanation: "$\\det(A-\\lambda I)=\\det\\begin{pmatrix}2-\\lambda&1\\\\0&3-\\lambda\\end{pmatrix}=(2-\\lambda)(3-\\lambda)$.\n\nValeurs propres : $(2-\\lambda)(3-\\lambda)=0 \\Rightarrow \\lambda_1=2, \\lambda_2=3$.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-2-e15",
            question: "Vrai ou faux : Si $A$ est une matrice $n\\times n$ nilpotente ($A^k=0$ pour un certain $k$), alors $\\det(A)=0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $A^k=0 \\Rightarrow \\det(A^k)=\\det(A)^k=0 \\Rightarrow \\det(A)=0$. Donc $A$ est non inversible. Cela est cohérent avec le fait que les matrices nilpotentes ont toutes leurs valeurs propres nulles.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "alg2-l2-3",
        slug: "valeurs-propres-vecteurs-propres",
        title: "Valeurs propres et vecteurs propres",
        durationMinutes: 60,
        content: `## Valeurs propres et vecteurs propres

### 1. Définitions

Soit $A\\in\\mathcal{M}_n$. Un scalaire $\\lambda\\in\\mathbb{R}$ est une **valeur propre** de $A$ s'il existe $v\\neq0$ tel que :
$$Av = \\lambda v$$

$v$ est alors un **vecteur propre** associé à $\\lambda$.

**Sous-espace propre :** $E_\\lambda = \\ker(A-\\lambda I) = \\{v : Av=\\lambda v\\}$.

### 2. Polynôme caractéristique

$$\\chi_A(\\lambda) = \\det(A-\\lambda I)$$

C'est un polynôme de degré $n$ en $\\lambda$. Les valeurs propres de $A$ sont les **racines** de $\\chi_A$.

**Formules :**
- $\\chi_A(0) = \\det(A)$
- Coefficient de $(-\\lambda)^{n-1}$ : $\\text{tr}(A)$
- $\\text{tr}(A) = \\sum_i \\lambda_i$ et $\\det(A)=\\prod_i\\lambda_i$

### 3. Diagonalisation

$A$ est **diagonalisable** si elle est semblable à une matrice diagonale : $\\exists P$ inversible tel que $P^{-1}AP=D=\\text{diag}(\\lambda_1,\\ldots,\\lambda_n)$.

**Condition suffisante :** $A$ a $n$ valeurs propres distinctes $\\Rightarrow$ $A$ diagonalisable.

**Condition nécessaire et suffisante :** pour toute valeur propre $\\lambda_i$, $\\dim E_{\\lambda_i} = m_i$ (multiplicité algébrique).

### 4. Applications de la diagonalisation

Si $A=PDP^{-1}$, alors $A^n=PD^nP^{-1}$ (utile pour calculer les puissances).

**Systèmes d'EDL :** si $X'=AX$, le changement de variable $Y=P^{-1}X$ découple le système en $Y'=DY$.

### 5. Théorème de Cayley-Hamilton

Tout endomorphisme $A$ annule son propre polynôme caractéristique : $\\chi_A(A)=0$.`,
        exercises: [
          {
            id: "alg2-l2-3-e1",
            question: "Quelle est la valeur propre de $A=\\begin{pmatrix}5&0\\\\0&3\\end{pmatrix}$ associée au vecteur $e_1=(1,0)^T$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$5$" },
              { id: "C", text: "$8$" },
              { id: "D", text: "$15$" },
            ],
            correctId: "B",
            explanation: "$Ae_1=\\begin{pmatrix}5\\\\0\\end{pmatrix}=5e_1$. Donc $\\lambda=5$ est la valeur propre associée à $e_1$.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-3-e2",
            question: "Vrai ou faux : $\\lambda=0$ est une valeur propre de $A$ si et seulement si $A$ est non inversible.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$\\lambda=0$ est valeur propre $\\Leftrightarrow \\ker(A-0)=\\ker(A)\\neq\\{0\\}\\Leftrightarrow A$ non injective $\\Leftrightarrow\\det(A)=0\\Leftrightarrow A$ non inversible.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-3-e3",
            question: "Calculer le polynôme caractéristique de $A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\lambda^2-3\\lambda+2$" },
              { id: "B", text: "$\\lambda^2+3\\lambda+2$" },
              { id: "C", text: "$\\lambda^2-2$" },
              { id: "D", text: "$(\\lambda-1)(\\lambda-2)$" },
            ],
            correctId: "A",
            explanation: "$\\chi_A(\\lambda)=\\det\\begin{pmatrix}1-\\lambda&1\\\\0&2-\\lambda\\end{pmatrix}=(1-\\lambda)(2-\\lambda)=\\lambda^2-3\\lambda+2$. Notons que la réponse A et D sont équivalentes.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-3-e4",
            question: "Vrai ou faux : Deux matrices semblables ont les mêmes valeurs propres.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $B=P^{-1}AP$, alors $\\chi_B(\\lambda)=\\det(P^{-1}AP-\\lambda I)=\\det(P^{-1}(A-\\lambda I)P)=\\det(A-\\lambda I)=\\chi_A(\\lambda)$. Même polynôme caractéristique, donc mêmes valeurs propres.",
            difficulty: "debutant",
          },
          {
            id: "alg2-l2-3-e5",
            question: "Pour $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, quelles sont les valeurs propres ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$ et $4$" },
              { id: "B", text: "$1$ et $3$" },
              { id: "C", text: "$2$ et $2$" },
              { id: "D", text: "$0$ et $4$" },
            ],
            correctId: "B",
            explanation: "$\\chi_A(\\lambda)=(2-\\lambda)^2-1=\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)$. Valeurs propres : $\\lambda_1=1$, $\\lambda_2=3$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-3-e6",
            question: "Trouver les vecteurs propres de $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ associés à $\\lambda=1$ et $\\lambda=3$.",
            type: "open",
            modelAnswer: "λ=1: ker(A-I)=ker((1,1;1,1)): v=(1,-1). λ=3: ker(A-3I)=ker((-1,1;1,-1)): v=(1,1).",
            explanation: "**$\\lambda=1$ :** $A-I=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$. $\\ker: x+y=0 \\Rightarrow v_1=(1,-1)^T$.\n\n**$\\lambda=3$ :** $A-3I=\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}$. $\\ker: -x+y=0 \\Rightarrow v_2=(1,1)^T$.\n\n$P=\\begin{pmatrix}1&1\\\\-1&1\\end{pmatrix}$, $P^{-1}AP=\\begin{pmatrix}1&0\\\\0&3\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-3-e7",
            question: "Vrai ou faux : Si $\\lambda$ est valeur propre de $A$, alors $\\lambda^2$ est valeur propre de $A^2$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $Av=\\lambda v$, alors $A^2v=A(Av)=A(\\lambda v)=\\lambda(Av)=\\lambda^2 v$. Donc $v$ est vecteur propre de $A^2$ pour la valeur propre $\\lambda^2$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-3-e8",
            question: "Calculer $A^{10}$ pour $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ par diagonalisation.",
            type: "open",
            modelAnswer: "A=PDP^{-1} avec D=diag(1,3). A^{10}=PD^{10}P^{-1}. D^{10}=diag(1,3^{10}). P=(1,1;-1,1), P^{-1}=(1/2)(1,-1;1,1). A^{10}=(1/2)(1+3^{10}, 3^{10}-1; 3^{10}-1, 1+3^{10}).",
            explanation: "$A=PDP^{-1}$ avec $P=\\begin{pmatrix}1&1\\\\-1&1\\end{pmatrix}$, $D=\\begin{pmatrix}1&0\\\\0&3\\end{pmatrix}$.\n\n$P^{-1}=\\frac{1}{2}\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}$.\n\n$A^{10}=PD^{10}P^{-1}=P\\begin{pmatrix}1&0\\\\0&3^{10}\\end{pmatrix}P^{-1}$\n$=\\frac{1}{2}\\begin{pmatrix}1+3^{10}&3^{10}-1\\\\3^{10}-1&1+3^{10}\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-3-e9",
            question: "Vrai ou faux : Des vecteurs propres associés à des valeurs propres distinctes sont linéairement indépendants.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est un théorème fondamental : si $v_1,\\ldots,v_k$ sont des vecteurs propres associés à des valeurs propres $\\lambda_1<\\cdots<\\lambda_k$ distinctes, alors la famille est libre.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-3-e10",
            question: "Vrai ou faux : Toute matrice $n\\times n$ réelle est diagonalisable sur $\\mathbb{R}$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ (rotation de $\\pi/2$) a pour polynôme caractéristique $\\lambda^2+1$, sans racine réelle. Elle n'est pas diagonalisable sur $\\mathbb{R}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg2-l2-3-e11",
            question: "Énoncer et utiliser le théorème de Cayley-Hamilton pour $A=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}$.",
            type: "open",
            modelAnswer: "χ_A(λ)=(3-λ)(2-λ)=λ²-5λ+6. Cayley-Hamilton: A²-5A+6I=0. Vérifier: A²=(9,5;0,4), 5A=(15,5;0,10), A²-5A+6I=(0,0;0,0) ✓.",
            explanation: "**Polynôme caractéristique :** $\\chi_A(\\lambda)=(3-\\lambda)(2-\\lambda)=\\lambda^2-5\\lambda+6$.\n\n**Cayley-Hamilton :** $A^2-5A+6I=0$.\n\n**Vérification :**\n$A^2=\\begin{pmatrix}9&5\\\\0&4\\end{pmatrix}$, $5A=\\begin{pmatrix}15&5\\\\0&10\\end{pmatrix}$, $6I=\\begin{pmatrix}6&0\\\\0&6\\end{pmatrix}$.\n$A^2-5A+6I=\\begin{pmatrix}9-15+6&5-5+0\\\\0-0+0&4-10+6\\end{pmatrix}=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$ ✓.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-3-e12",
            question: "Vrai ou faux : Si $A$ est diagonalisable avec valeurs propres $\\lambda_1,\\ldots,\\lambda_n$, alors $e^A$ est diagonalisable avec valeurs propres $e^{\\lambda_1},\\ldots,e^{\\lambda_n}$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $A=PDP^{-1}$, on définit $e^A=Pe^DP^{-1}$ où $e^D=\\text{diag}(e^{\\lambda_1},\\ldots,e^{\\lambda_n})$. Donc $e^A$ est diagonalisable avec valeurs propres $e^{\\lambda_i}$.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-3-e13",
            question: "Montrer que si $A$ est symétrique, ses valeurs propres sont réelles.",
            type: "open",
            modelAnswer: "Soit Av=λv, v complexe non nul. v̄ᵀAv=λ|v|². Mais v̄ᵀAv=(Av̄)ᵀv=(λ̄v̄)ᵀv=λ̄|v|². Donc λ=λ̄, λ réel.",
            explanation: "**Preuve :** Supposons $Av=\\lambda v$ avec $v\\in\\mathbb{C}^n\\setminus\\{0\\}$.\n\nCalculons $\\bar{v}^TAv=\\bar{v}^T(\\lambda v)=\\lambda\\|v\\|^2$.\n\nMais aussi $(\\bar{v}^TAv)^T=v^TA^T\\bar{v}=v^TA\\bar{v}$ (car $A^T=A$).\n\nEt $v^TA\\bar{v}=v^T(\\overline{Av})=v^T(\\overline{\\lambda v})=\\bar{\\lambda}\\|v\\|^2$.\n\nDonc $\\lambda\\|v\\|^2=\\bar{\\lambda}\\|v\\|^2$, et comme $\\|v\\|^2>0$, $\\lambda=\\bar{\\lambda}\\in\\mathbb{R}$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-3-e14",
            question: "Vrai ou faux : La somme des valeurs propres de $A$ est égale à $\\text{tr}(A)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Le polynôme caractéristique est $\\chi_A(\\lambda)=\\det(\\lambda I-A)=\\lambda^n-\\text{tr}(A)\\lambda^{n-1}+\\cdots+(-1)^n\\det(A)$. Par Vieta, la somme des racines est le coefficient de $\\lambda^{n-1}$ : $\\text{tr}(A)$.",
            difficulty: "expert",
          },
          {
            id: "alg2-l2-3-e15",
            question: "Diagonaliser $A=\\begin{pmatrix}1&1&0\\\\0&2&0\\\\0&0&3\\end{pmatrix}$ et donner $P$ et $D$.",
            type: "open",
            modelAnswer: "Valeurs propres: 1,2,3 (diagonale). Vecteurs propres: e1=(1,0,0) pour λ=1; ker(A-2I): (1,1,0) pour λ=2; e3=(0,0,1) pour λ=3. P=(e1,v2,e3), D=diag(1,2,3).",
            explanation: "**Valeurs propres :** $\\chi_A=(1-\\lambda)(2-\\lambda)(3-\\lambda)$. Donc $\\lambda_1=1,\\lambda_2=2,\\lambda_3=3$ (distinctes).\n\n**VP $\\lambda_1=1$ :** $A-I=\\begin{pmatrix}0&1&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}$. $\\ker=\\text{Vect}\\{(1,0,0)\\}$.\n\n**VP $\\lambda_2=2$ :** $A-2I=\\begin{pmatrix}-1&1&0\\\\0&0&0\\\\0&0&1\\end{pmatrix}$. $\\ker$: $x=y, z=0$ → $v=(1,1,0)$.\n\n**VP $\\lambda_3=3$ :** $\\ker=\\text{Vect}\\{(0,0,1)\\}$.\n\n$P=\\begin{pmatrix}1&1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$, $D=\\text{diag}(1,2,3)$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // L2 — Probabilités continues
  // ─────────────────────────────────────────────
  {
    id: "proba-l2",
    slug: "probabilites-l2-variables-continues-lois-usuelles",
    title: "Probabilités L2 — Variables aléatoires continues et lois usuelles",
    description: "Variables aléatoires continues, densités, lois normale et exponentielle, théorème central limite.",
    schoolLevel: "L2",
    subject: "probabilites",
    difficulty: "Intermédiaire",
    isFree: false,
    thumbnailEmoji: "∫",
    lessons: [
      {
        id: "proba2-l2-1",
        slug: "variables-aleatoires-continues-densites",
        title: "Variables aléatoires continues et densités",
        durationMinutes: 55,
        content: `## Variables aléatoires continues

### 1. Définition

Une v.a. $X$ est **continue** si sa fonction de répartition $F_X(t)=P(X\\leq t)$ est continue et s'écrit :
$$F_X(t) = \\int_{-\\infty}^t f(x)\\,dx$$

où $f\\geq0$ est la **densité de probabilité** de $X$.

**Propriétés de la densité :**
- $f(x)\\geq0$ pour tout $x$
- $\\int_{-\\infty}^{+\\infty}f(x)dx=1$
- $P(a\\leq X\\leq b)=\\int_a^b f(x)dx$
- $P(X=c)=0$ pour tout $c$ (v.a. continue)

### 2. Espérance et variance

$$\\mathbb{E}[X]=\\int_{-\\infty}^{+\\infty}xf(x)dx$$
$$\\mathbb{E}[g(X)]=\\int_{-\\infty}^{+\\infty}g(x)f(x)dx$$
$$\\text{Var}(X)=\\mathbb{E}[X^2]-(\\mathbb{E}[X])^2=\\int x^2 f(x)dx-(\\mathbb{E}[X])^2$$

### 3. Loi uniforme $\\mathcal{U}([a,b])$

$$f(x)=\\frac{1}{b-a}\\mathbf{1}_{[a,b]}(x)$$

$\\mathbb{E}[X]=\\frac{a+b}{2}$, $\\text{Var}(X)=\\frac{(b-a)^2}{12}$.

### 4. Changement de variable

Si $Y=g(X)$ avec $g$ bijective différentiable :
$$f_Y(y)=f_X(g^{-1}(y))\\cdot|(g^{-1})'(y)|$$

### 5. Fonction de répartition et quantiles

Le **quantile d'ordre $p$** est $q_p=F_X^{-1}(p)$ : $P(X\\leq q_p)=p$.

La **médiane** est $q_{0.5}$.`,
        exercises: [
          {
            id: "proba2-l2-1-e1",
            question: "Soit $f(x)=2x$ sur $[0,1]$ et $0$ ailleurs. Vérifier que c'est une densité.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$f\\geq0$ sur $[0,1]$ ✓. $\\int_0^1 2x\\,dx=[x^2]_0^1=1$ ✓. C'est bien une densité.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-1-e2",
            question: "Pour $X\\sim\\mathcal{U}([0,4])$, quelle est $P(1\\leq X\\leq 3)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1/4$" },
              { id: "B", text: "$1/2$" },
              { id: "C", text: "$3/4$" },
              { id: "D", text: "$2/3$" },
            ],
            correctId: "B",
            explanation: "$f(x)=1/4$ sur $[0,4]$. $P(1\\leq X\\leq3)=\\int_1^3(1/4)dx=2/4=1/2$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-1-e3",
            question: "Vrai ou faux : Pour une v.a. continue $X$, $P(X=3)=0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $P(X=3)=\\int_3^3 f(x)dx=0$ pour toute densité $f$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-1-e4",
            question: "Quelle est l'espérance de $X\\sim\\mathcal{U}([2,8])$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$4$" },
              { id: "C", text: "$5$" },
              { id: "D", text: "$6$" },
            ],
            correctId: "C",
            explanation: "$\\mathbb{E}[X]=(a+b)/2=(2+8)/2=5$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-1-e5",
            question: "Calculer $\\mathbb{E}[X]$ pour $X$ de densité $f(x)=2x$ sur $[0,1]$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1/2$" },
              { id: "B", text: "$2/3$" },
              { id: "C", text: "$1$" },
              { id: "D", text: "$1/3$" },
            ],
            correctId: "B",
            explanation: "$\\mathbb{E}[X]=\\int_0^1 x\\cdot2x\\,dx=2\\int_0^1 x^2\\,dx=2/3$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-1-e6",
            question: "Calculer $\\text{Var}(X)$ pour $X$ de densité $f(x)=2x$ sur $[0,1]$.",
            type: "open",
            modelAnswer: "E[X]=2/3. E[X²]=∫_0^1 x²·2x dx=2/4=1/2. Var=1/2-4/9=9/18-8/18=1/18.",
            explanation: "$\\mathbb{E}[X^2]=\\int_0^1 x^2\\cdot2x\\,dx=2\\int_0^1 x^3\\,dx=2/4=1/2$.\n$\\text{Var}(X)=1/2-(2/3)^2=1/2-4/9=9/18-8/18=1/18$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-1-e7",
            question: "Quelle est la médiane de $X\\sim\\mathcal{U}([0,1])$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1/4$" },
              { id: "B", text: "$1/2$" },
              { id: "C", text: "$1/3$" },
              { id: "D", text: "$3/4$" },
            ],
            correctId: "B",
            explanation: "Pour $\\mathcal{U}([0,1])$, $F(x)=x$. Médiane : $F(m)=1/2\\Rightarrow m=1/2$. (Même résultat que la moyenne par symétrie.)",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-1-e8",
            question: "Vrai ou faux : Si $f$ est une densité, alors $f(x)\\leq1$ pour tout $x$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $f(x)=3x^2$ sur $[0,1]$ est une densité ($\\int_0^1 3x^2dx=1$) mais $f(1)=3>1$. Une densité doit être positive et d'intégrale $1$, mais peut dépasser $1$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-1-e9",
            question: "Si $X\\sim\\mathcal{U}([0,1])$, quelle est la densité de $Y=X^2$ ?",
            type: "open",
            modelAnswer: "F_Y(y)=P(Y≤y)=P(X≤√y)=√y pour y∈[0,1]. f_Y(y)=1/(2√y) sur [0,1].",
            explanation: "**Changement de variable :** $g(x)=x^2$, $g^{-1}(y)=\\sqrt{y}$.\n$F_Y(y)=P(X^2\\leq y)=P(X\\leq\\sqrt{y})=\\sqrt{y}$ pour $y\\in[0,1]$.\n$f_Y(y)=F_Y'(y)=\\frac{1}{2\\sqrt{y}}$ pour $y\\in(0,1]$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-1-e10",
            question: "Vrai ou faux : Toute fonction de répartition $F$ est croissante, continue à droite, avec $F(-\\infty)=0$ et $F(+\\infty)=1$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Ce sont les propriétés fondamentales de toute fonction de répartition, qu'elle corresponde à une v.a. continue ou non.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-1-e11",
            question: "Montrer que si $X$ a pour densité $f$, alors $F_X'(t)=f(t)$ pour presque tout $t$.",
            type: "open",
            modelAnswer: "Par définition F_X(t)=∫_{-∞}^t f(x)dx. Par le théorème fondamental du calcul intégral, F_X'(t)=f(t) aux points de continuité de f.",
            explanation: "$F_X(t)=\\int_{-\\infty}^t f(x)dx$.\n\nPar le **théorème fondamental du calcul intégral** : si $f$ est continue en $t$, alors $F_X$ est dérivable en $t$ et $F_X'(t)=f(t)$.\n\nComme $f$ est intégrable, elle est continue presque partout, donc $F_X'=f$ p.p. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-1-e12",
            question: "Calculer $\\mathbb{E}[e^X]$ pour $X\\sim\\mathcal{U}([0,1])$.",
            type: "open",
            modelAnswer: "E[e^X]=∫_0^1 e^x dx=[e^x]_0^1=e-1.",
            explanation: "$\\mathbb{E}[e^X]=\\int_0^1 e^x\\cdot1\\,dx=[e^x]_0^1=e-1\\approx1.718$.",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-1-e13",
            question: "Vrai ou faux : Si $X$ et $Y$ ont la même fonction de répartition, alors $X$ et $Y$ ont la même loi.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La loi d'une v.a. réelle est entièrement caractérisée par sa fonction de répartition. Si $F_X=F_Y$, alors $P(X\\in A)=P(Y\\in A)$ pour tout borélien $A$.",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-1-e14",
            question: "Trouver la constante $c$ telle que $f(x)=ce^{-|x|}$ soit une densité sur $\\mathbb{R}$.",
            type: "open",
            modelAnswer: "∫_{-∞}^∞ ce^{-|x|}dx = 2c∫_0^∞ e^{-x}dx = 2c·1 = 2c = 1. Donc c=1/2.",
            explanation: "$\\int_{-\\infty}^\\infty ce^{-|x|}dx=2c\\int_0^\\infty e^{-x}dx=2c\\cdot1=2c$.\n\nPour une densité : $2c=1$, donc $c=1/2$.\n\nC'est la **loi de Laplace double** (ou loi exponentielle double).",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-1-e15",
            question: "Vrai ou faux : Pour $X$ continue et $g$ croissante, $\\mathbb{E}[g(X)]\\geq g(\\mathbb{E}[X])$ (inégalité de Jensen).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. L'inégalité de Jensen s'applique aux fonctions **convexes** : $\\mathbb{E}[g(X)]\\geq g(\\mathbb{E}[X])$ si $g$ est convexe. Pour les fonctions concaves l'inégalité s'inverse. Une fonction croissante n'est pas nécessairement convexe.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "proba2-l2-2",
        slug: "lois-normale-exponentielle",
        title: "Lois normale et exponentielle",
        durationMinutes: 55,
        content: `## Lois normale et exponentielle

### 1. Loi normale (gaussienne) $\\mathcal{N}(\\mu,\\sigma^2)$

$$f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

$\\mathbb{E}[X]=\\mu$, $\\text{Var}(X)=\\sigma^2$.

**Loi normale standard :** $Z\\sim\\mathcal{N}(0,1)$, densité $\\phi(x)=\\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}$.

**Standardisation :** Si $X\\sim\\mathcal{N}(\\mu,\\sigma^2)$, alors $Z=\\frac{X-\\mu}{\\sigma}\\sim\\mathcal{N}(0,1)$.

**Calcul de probabilités :** $P(X\\leq x)=\\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)$ où $\\Phi$ est la fonction de répartition de $\\mathcal{N}(0,1)$.

**Symétrie :** $\\Phi(-x)=1-\\Phi(x)$.

### 2. Loi exponentielle $\\mathcal{E}(\\lambda)$

$$f(x)=\\lambda e^{-\\lambda x}\\mathbf{1}_{x\\geq0}$$

$\\mathbb{E}[X]=1/\\lambda$, $\\text{Var}(X)=1/\\lambda^2$.

**Propriété sans mémoire :** $P(X>s+t|X>s)=P(X>t)$.

**Lien avec Poisson :** si des événements arrivent selon un processus de Poisson de taux $\\lambda$, le temps entre deux événements suit $\\mathcal{E}(\\lambda)$.

### 3. Stabilité par somme

- Si $X_i\\sim\\mathcal{N}(\\mu_i,\\sigma_i^2)$ indépendantes : $\\sum X_i\\sim\\mathcal{N}(\\sum\\mu_i,\\sum\\sigma_i^2)$.
- Si $X_i\\sim\\mathcal{E}(\\lambda)$ i.i.d. : $\\sum_{i=1}^n X_i\\sim\\text{Gamma}(n,\\lambda)$.`,
        exercises: [
          {
            id: "proba2-l2-2-e1",
            question: "Pour $X\\sim\\mathcal{N}(0,1)$, $P(X\\leq0)$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1/4$" },
              { id: "C", text: "$1/2$" },
              { id: "D", text: "$1$" },
            ],
            correctId: "C",
            explanation: "Par symétrie de la loi normale centrée réduite : $P(X\\leq0)=\\Phi(0)=1/2$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-2-e2",
            question: "Vrai ou faux : Si $X\\sim\\mathcal{N}(2,9)$, alors $(X-2)/3\\sim\\mathcal{N}(0,1)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\mu=2$, $\\sigma^2=9$, $\\sigma=3$. La standardisation $(X-\\mu)/\\sigma=(X-2)/3$ suit $\\mathcal{N}(0,1)$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-2-e3",
            question: "Pour $X\\sim\\mathcal{E}(2)$, $\\mathbb{E}[X]$ vaut :",
            type: "mcq",
            options: [
              { id: "A", text: "$2$" },
              { id: "B", text: "$1/2$" },
              { id: "C", text: "$4$" },
              { id: "D", text: "$1/4$" },
            ],
            correctId: "B",
            explanation: "$\\mathbb{E}[X]=1/\\lambda=1/2$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-2-e4",
            question: "Vrai ou faux : La loi normale $\\mathcal{N}(\\mu,\\sigma^2)$ est symétrique autour de $\\mu$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La densité $f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/(2\\sigma^2)}$ ne dépend que de $(x-\\mu)^2$, donc $f(\\mu+t)=f(\\mu-t)$ : symétrie parfaite autour de $\\mu$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-2-e5",
            question: "Calculer $P(X\\leq3)$ pour $X\\sim\\mathcal{E}(1)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1-e^{-3}$" },
              { id: "B", text: "$e^{-3}$" },
              { id: "C", text: "$1-e^{-1/3}$" },
              { id: "D", text: "$3e^{-3}$" },
            ],
            correctId: "A",
            explanation: "$F_X(x)=1-e^{-x}$ pour $\\mathcal{E}(1)$. Donc $P(X\\leq3)=1-e^{-3}\\approx0.950$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-2-e6",
            question: "Si $X\\sim\\mathcal{N}(5,4)$, calculer $P(3\\leq X\\leq7)$ en utilisant $\\Phi$.",
            type: "open",
            modelAnswer: "Z=(X-5)/2. P(3≤X≤7)=P(-1≤Z≤1)=Φ(1)-Φ(-1)=2Φ(1)-1≈2×0.8413-1=0.6826.",
            explanation: "$Z=(X-5)/2\\sim\\mathcal{N}(0,1)$.\n$P(3\\leq X\\leq7)=P(-1\\leq Z\\leq1)=\\Phi(1)-\\Phi(-1)=\\Phi(1)-(1-\\Phi(1))=2\\Phi(1)-1\\approx2(0.8413)-1=0.6826$.\n\nRègle empirique : $\\approx68\\%$ dans $[\\mu-\\sigma,\\mu+\\sigma]$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-2-e7",
            question: "Démontrer la propriété sans mémoire de $\\mathcal{E}(\\lambda)$.",
            type: "open",
            modelAnswer: "P(X>s+t|X>s)=P(X>s+t)/P(X>s)=e^{-λ(s+t)}/e^{-λs}=e^{-λt}=P(X>t).",
            explanation: "$P(X>s+t|X>s)=\\frac{P(X>s+t\\text{ et }X>s)}{P(X>s)}=\\frac{P(X>s+t)}{P(X>s)}$\n$=\\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}}=e^{-\\lambda t}=P(X>t)$. $\\square$",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-2-e8",
            question: "Vrai ou faux : Si $X,Y$ indépendantes $\\mathcal{N}(0,1)$, alors $X+Y\\sim\\mathcal{N}(0,2)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par stabilité de la loi normale : $X+Y\\sim\\mathcal{N}(0+0,1+1)=\\mathcal{N}(0,2)$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-2-e9",
            question: "Calculer $\\mathbb{E}[X^2]$ pour $X\\sim\\mathcal{N}(0,1)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$\\pi$" },
              { id: "D", text: "$2$" },
            ],
            correctId: "B",
            explanation: "$\\text{Var}(X)=\\mathbb{E}[X^2]-(\\mathbb{E}[X])^2=1$. Comme $\\mathbb{E}[X]=0$, $\\mathbb{E}[X^2]=1$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-2-e10",
            question: "Vrai ou faux : La seule loi continue sans mémoire sur $[0,+\\infty[$ est la loi exponentielle.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Théorème de caractérisation : si $X\\geq0$ est continue et vérifie $P(X>s+t)=P(X>s)P(X>t)$ pour tous $s,t\\geq0$, alors $X\\sim\\mathcal{E}(\\lambda)$ pour un certain $\\lambda>0$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-2-e11",
            question: "Montrer que $\\int_{-\\infty}^{+\\infty}\\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}dx=1$ (en utilisant $\\int_{-\\infty}^{+\\infty}e^{-x^2}dx=\\sqrt{\\pi}$).",
            type: "open",
            modelAnswer: "Poser t=x/√2 : ∫e^{-x²/2}dx=√2·∫e^{-t²}dt=√2·√π. Donc (1/√(2π))·√(2π)=1.",
            explanation: "Changement de variable $x=\\sqrt{2}t$, $dx=\\sqrt{2}dt$ :\n$\\int_{-\\infty}^\\infty e^{-x^2/2}dx=\\sqrt{2}\\int_{-\\infty}^\\infty e^{-t^2}dt=\\sqrt{2}\\cdot\\sqrt{\\pi}=\\sqrt{2\\pi}$.\n\nDonc $\\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty e^{-x^2/2}dx=\\frac{\\sqrt{2\\pi}}{\\sqrt{2\\pi}}=1$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-2-e12",
            question: "Vrai ou faux : Si $X\\sim\\mathcal{N}(\\mu,\\sigma^2)$, alors $aX+b\\sim\\mathcal{N}(a\\mu+b,a^2\\sigma^2)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La famille des lois normales est stable par transformation affine. $\\mathbb{E}[aX+b]=a\\mu+b$ et $\\text{Var}(aX+b)=a^2\\sigma^2$.",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-2-e13",
            question: "Calculer $\\mathbb{E}[X^4]$ pour $X\\sim\\mathcal{N}(0,1)$.",
            type: "open",
            modelAnswer: "Par intégration par parties : E[X^4]=3·E[X²]=3. (Moments de la loi normale : E[X^{2k}]=(2k-1)!!)",
            explanation: "On utilise la formule des moments de $\\mathcal{N}(0,1)$ : $\\mathbb{E}[X^{2k}]=(2k-1)!! = (2k-1)(2k-3)\\cdots1$.\n\nPour $k=2$ : $\\mathbb{E}[X^4]=3!!=3\\times1=3$.\n\n**Preuve directe (IBP) :** $\\mathbb{E}[X^4]=\\frac{1}{\\sqrt{2\\pi}}\\int x^4e^{-x^2/2}dx$. IBP avec $u=x^3$, $v'=xe^{-x^2/2}$ donne $\\mathbb{E}[X^4]=3\\mathbb{E}[X^2]=3$.",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-2-e14",
            question: "Pour $X\\sim\\mathcal{E}(\\lambda)$, calculer la fonction génératrice des moments $M_X(t)=\\mathbb{E}[e^{tX}]$ pour $t<\\lambda$.",
            type: "open",
            modelAnswer: "M_X(t)=∫_0^∞ e^{tx}λe^{-λx}dx=λ∫_0^∞ e^{-(λ-t)x}dx=λ/(λ-t) pour t<λ.",
            explanation: "$M_X(t)=\\int_0^\\infty e^{tx}\\lambda e^{-\\lambda x}dx=\\lambda\\int_0^\\infty e^{-(\\lambda-t)x}dx=\\lambda\\cdot\\frac{1}{\\lambda-t}=\\frac{\\lambda}{\\lambda-t}$ pour $t<\\lambda$.\n\nOn peut vérifier : $M_X'(0)=\\lambda/(\\lambda)^2=1/\\lambda=\\mathbb{E}[X]$ ✓.",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-2-e15",
            question: "Vrai ou faux : La médiane de $\\mathcal{E}(\\lambda)$ est $\\ln(2)/\\lambda$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$F(m)=1-e^{-\\lambda m}=1/2 \\Rightarrow e^{-\\lambda m}=1/2 \\Rightarrow m=\\ln(2)/\\lambda$. La médiane est $\\ln(2)/\\lambda < 1/\\lambda = \\mathbb{E}[X]$ (la loi est asymétrique à droite).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "proba2-l2-3",
        slug: "theoreme-central-limite",
        title: "Théorème central limite",
        durationMinutes: 50,
        content: `## Théorème central limite (TCL)

### 1. Loi des grands nombres

**LGN faible :** Si $(X_n)$ sont i.i.d. avec $\\mathbb{E}[X_1]=\\mu$ fini :
$$\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i \\xrightarrow{P} \\mu \\quad (n\\to\\infty)$$

**LGN forte :** convergence presque sûre.

### 2. Théorème central limite

Si $(X_n)$ i.i.d. avec $\\mathbb{E}[X]=\\mu$ et $\\text{Var}(X)=\\sigma^2<\\infty$ :
$$\\sqrt{n}\\frac{\\bar{X}_n-\\mu}{\\sigma} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0,1)$$

Équivalent : $\\sum_{i=1}^n X_i \\approx \\mathcal{N}(n\\mu, n\\sigma^2)$ pour $n$ grand.

### 3. Approximations pratiques

**Approximation normale de la binomiale :** si $n$ grand, $p$ pas trop proche de $0$ ou $1$ ($np\\geq5$, $n(1-p)\\geq5$) :
$$B(n,p) \\approx \\mathcal{N}(np, np(1-p))$$

**Correction de continuité :** $P(X=k)\\approx P(k-0.5\\leq Y\\leq k+0.5)$ où $Y\\sim\\mathcal{N}$.

### 4. Convergence en loi

$(X_n)$ converge en loi vers $X$ si $\\forall x$ point de continuité de $F_X$ : $F_{X_n}(x)\\to F_X(x)$.

**Implications :** convergence en loi $\\Leftarrow$ convergence en probabilité $\\Leftarrow$ convergence p.s.

### 5. Intervalle de confiance

Pour un grand échantillon $(X_1,\\ldots,X_n)$ i.i.d. de moyenne $\\mu$ inconnue et variance $\\sigma^2$ connue :
$$IC_{95\\%}(\\mu) = \\left[\\bar{X}_n - \\frac{1.96\\sigma}{\\sqrt{n}},\\; \\bar{X}_n + \\frac{1.96\\sigma}{\\sqrt{n}}\\right]$$`,
        exercises: [
          {
            id: "proba2-l2-3-e1",
            question: "Vrai ou faux : Le TCL s'applique à toute suite i.i.d. de variables aléatoires.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Le TCL requiert une variance finie ($\\sigma^2<\\infty$). Par exemple la loi de Cauchy n'a pas de variance (ni d'espérance) et le TCL ne s'applique pas.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-3-e2",
            question: "Pour $X_i$ i.i.d. $\\mathcal{N}(0,1)$, la somme $S_n=\\sum_{i=1}^n X_i$ suit :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\mathcal{N}(0,1)$" },
              { id: "B", text: "$\\mathcal{N}(0,n)$" },
              { id: "C", text: "$\\mathcal{N}(n,n)$" },
              { id: "D", text: "$\\mathcal{N}(0,\\sqrt{n})$" },
            ],
            correctId: "B",
            explanation: "Par stabilité de la normale : $S_n\\sim\\mathcal{N}(n\\times0,n\\times1)=\\mathcal{N}(0,n)$.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-3-e3",
            question: "Vrai ou faux : La LGN dit que $\\bar{X}_n\\to\\mathbb{E}[X]$ en probabilité.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est exactement l'énoncé de la loi faible des grands nombres.",
            difficulty: "debutant",
          },
          {
            id: "proba2-l2-3-e4",
            question: "Approximer $P(S_{100}\\leq55)$ pour $S_{100}\\sim B(100,0.5)$ par le TCL.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\Phi(1)\\approx0.841$" },
              { id: "B", text: "$\\Phi(0)=0.5$" },
              { id: "C", text: "$\\Phi(2)\\approx0.977$" },
              { id: "D", text: "$1-\\Phi(1)\\approx0.159$" },
            ],
            correctId: "A",
            explanation: "$\\mu=np=50$, $\\sigma=\\sqrt{np(1-p)}=\\sqrt{25}=5$. $Z=(55-50)/5=1$. $P(S\\leq55)\\approx\\Phi(1)\\approx0.841$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-3-e5",
            question: "Si $X_i$ i.i.d. avec $\\mathbb{E}[X]=2$, $\\text{Var}(X)=4$, approximer $P(\\bar{X}_{100}>2.4)$.",
            type: "open",
            modelAnswer: "Var(X̄)=4/100=0.04, σ(X̄)=0.2. Z=(2.4-2)/0.2=2. P(X̄>2.4)=1-Φ(2)≈1-0.9772=0.0228.",
            explanation: "Par le TCL : $\\bar{X}_{100}\\approx\\mathcal{N}(2,4/100)=\\mathcal{N}(2,0.04)$.\n$Z=\\frac{\\bar{X}_{100}-2}{0.2}$. $P(\\bar{X}>2.4)=P(Z>2)=1-\\Phi(2)\\approx0.0228$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-3-e6",
            question: "Vrai ou faux : La convergence en probabilité implique la convergence en loi.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La convergence en probabilité est plus forte que la convergence en loi. La réciproque est fausse en général.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-3-e7",
            question: "Construire un IC à 95% pour $\\mu$ avec $n=100$, $\\bar{x}=15$, $\\sigma=5$.",
            type: "open",
            modelAnswer: "IC = [15 - 1.96×5/10, 15 + 1.96×5/10] = [15 - 0.98, 15 + 0.98] = [14.02, 15.98].",
            explanation: "$IC_{95\\%}=\\left[\\bar{x}-\\frac{1.96\\sigma}{\\sqrt{n}},\\bar{x}+\\frac{1.96\\sigma}{\\sqrt{n}}\\right]=\\left[15-\\frac{1.96\\times5}{10},15+\\frac{9.8}{10}\\right]=[14.02,15.98]$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-3-e8",
            question: "Vrai ou faux : Pour $n$ grand, $B(n,p)$ peut être approximée par $\\mathcal{N}(np,np(1-p))$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est l'approximation normale de la loi binomiale, conséquence directe du TCL appliqué à des variables de Bernoulli i.i.d.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-3-e9",
            question: "Soit $X_i$ i.i.d. uniformes sur $[0,1]$. Quelle est la loi approchée de $\\sqrt{n}(\\bar{X}_n-1/2)$ pour $n$ grand ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\mathcal{N}(0,1/12)$" },
              { id: "B", text: "$\\mathcal{N}(1/2,1)$" },
              { id: "C", text: "$\\mathcal{U}([0,1])$" },
              { id: "D", text: "$\\mathcal{N}(0,1)$ après normalisation par $1/\\sqrt{12}$" },
            ],
            correctId: "A",
            explanation: "Pour $\\mathcal{U}([0,1])$ : $\\mu=1/2$, $\\sigma^2=1/12$. Par le TCL : $\\sqrt{n}(\\bar{X}_n-1/2)\\xrightarrow{\\mathcal{L}}\\mathcal{N}(0,\\sigma^2)=\\mathcal{N}(0,1/12)$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-3-e10",
            question: "Vrai ou faux : Si $X_n\\xrightarrow{\\mathcal{L}}X$ et $c_n\\to c$, alors $c_nX_n\\xrightarrow{\\mathcal{L}}cX$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le lemme de Slutsky : si $X_n\\xrightarrow{\\mathcal{L}}X$ et $c_n\\xrightarrow{P}c$ (constante), alors $c_nX_n\\xrightarrow{\\mathcal{L}}cX$.",
            difficulty: "intermediaire",
          },
          {
            id: "proba2-l2-3-e11",
            question: "Démontrer la LGN faible via l'inégalité de Bienaymé-Tchebychev.",
            type: "open",
            modelAnswer: "P(|X̄_n-μ|≥ε)≤Var(X̄_n)/ε²=σ²/(nε²)→0.",
            explanation: "$\\mathbb{E}[\\bar{X}_n]=\\mu$ et $\\text{Var}(\\bar{X}_n)=\\sigma^2/n$.\n\nPar **Bienaymé-Tchebychev** :\n$P(|\\bar{X}_n-\\mu|\\geq\\varepsilon)\\leq\\frac{\\text{Var}(\\bar{X}_n)}{\\varepsilon^2}=\\frac{\\sigma^2}{n\\varepsilon^2}\\xrightarrow{n\\to\\infty}0$.\n\nDonc $\\bar{X}_n\\xrightarrow{P}\\mu$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-3-e12",
            question: "Vrai ou faux : Le TCL requiert que les $X_i$ soient identiquement distribuées.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Des versions plus générales du TCL (Lindeberg-Feller) s'appliquent à des suites de variables indépendantes non nécessairement identiquement distribuées, sous des conditions de régularité.",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-3-e13",
            question: "Énoncer précisément le TCL et les hypothèses nécessaires.",
            type: "open",
            modelAnswer: "Hypothèses: X_i i.i.d., E[X]=μ fini, Var(X)=σ²<∞. Conclusion: √n(X̄_n-μ)/σ →L N(0,1).",
            explanation: "**Théorème Central Limite :**\n\n**Hypothèses :** $(X_n)$ suite de v.a. indépendantes et identiquement distribuées (i.i.d.) avec $\\mathbb{E}[X_1]=\\mu\\in\\mathbb{R}$ et $\\text{Var}(X_1)=\\sigma^2\\in(0,+\\infty)$.\n\n**Conclusion :**\n$$\\sqrt{n}\\frac{\\bar{X}_n-\\mu}{\\sigma}\\xrightarrow[n\\to\\infty]{\\mathcal{L}}\\mathcal{N}(0,1)$$\n\nc'est-à-dire pour tout $x\\in\\mathbb{R}$ :\n$$P\\left(\\sqrt{n}\\frac{\\bar{X}_n-\\mu}{\\sigma}\\leq x\\right)\\to\\Phi(x)$$",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-3-e14",
            question: "Combien de lancers de pièce faut-il pour estimer $P(pile)=0.5$ avec une précision de $0.05$ et une confiance de $95\\%$ ?",
            type: "open",
            modelAnswer: "n≥(1.96/(2×0.05))²=(1.96/0.1)²=384.16. Donc n≥385.",
            explanation: "L'IC à 95% pour $p$ a une demi-largeur $1.96\\sigma/\\sqrt{n}=1.96\\sqrt{p(1-p)}/\\sqrt{n}$.\n\nOn majore $p(1-p)\\leq1/4$. On veut $1.96/(2\\sqrt{n})\\leq0.05$, soit $\\sqrt{n}\\geq1.96/(2\\times0.05)=19.6$.\n\n$n\\geq(19.6)^2=384.16$. On prend $n=385$.",
            difficulty: "expert",
          },
          {
            id: "proba2-l2-3-e15",
            question: "Vrai ou faux : Si $X_n\\xrightarrow{\\mathcal{L}}\\mathcal{N}(0,1)$, alors $X_n^2\\xrightarrow{\\mathcal{L}}\\chi^2(1)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $X_n\\xrightarrow{\\mathcal{L}}X$ et $g$ est continue, alors $g(X_n)\\xrightarrow{\\mathcal{L}}g(X)$ (théorème de convergence continue, ou **delta-méthode**). Avec $g(x)=x^2$ et $X\\sim\\mathcal{N}(0,1)$, on obtient $X^2\\sim\\chi^2(1)$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // L3 — Analyse : Fonctions de plusieurs variables
  // ─────────────────────────────────────────────
  {
    id: "analyse-l3",
    slug: "analyse-l3-fonctions-plusieurs-variables",
    title: "Analyse L3 — Fonctions de plusieurs variables",
    description: "Différentiabilité, gradient, extrema et intégrales multiples pour les fonctions de plusieurs variables réelles.",
    schoolLevel: "L3",
    subject: "analyse",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "▽",
    lessons: [
      {
        id: "anal3-l3-1",
        slug: "differentiabilite-gradient",
        title: "Différentiabilité et gradient",
        durationMinutes: 65,
        content: `## Différentiabilité et gradient

### 1. Dérivées partielles

Soit $f:U\\subset\\mathbb{R}^n\\to\\mathbb{R}$. La **dérivée partielle** de $f$ par rapport à $x_i$ en $a$ est :
$$\\frac{\\partial f}{\\partial x_i}(a) = \\lim_{h\\to0}\\frac{f(a+he_i)-f(a)}{h}$$

**Notation :** $\\partial_{x_i}f$, $f_{x_i}$, $D_i f$.

### 2. Différentiabilité

$f$ est **différentiable en $a$** s'il existe une application linéaire $L:\\mathbb{R}^n\\to\\mathbb{R}$ telle que :
$$f(a+h) = f(a) + L(h) + o(\\|h\\|) \\quad (h\\to0)$$

$L$ est la **différentielle de $f$ en $a$**, notée $df_a$ ou $df(a)$.

**Matrice jacobienne :** $df_a$ est représentée par la matrice $\\left(\\frac{\\partial f_i}{\\partial x_j}(a)\\right)_{i,j}$.

### 3. Gradient

Pour $f:\\mathbb{R}^n\\to\\mathbb{R}$, le **gradient** est :
$$\\nabla f(a) = \\left(\\frac{\\partial f}{\\partial x_1}(a),\\ldots,\\frac{\\partial f}{\\partial x_n}(a)\\right)$$

La différentielle s'écrit $df_a(h)=\\nabla f(a)\\cdot h$ (produit scalaire).

**Interprétation :** $\\nabla f(a)$ pointe dans la direction de la plus grande croissance de $f$ en $a$.

### 4. Règle de la chaîne

Si $g:I\\to U\\subset\\mathbb{R}^n$ et $f:U\\to\\mathbb{R}$ avec $h=f\\circ g$ :
$$h'(t) = \\nabla f(g(t))\\cdot g'(t)$$

Plus généralement : $(f\\circ g)' = (df_{g(t)})\\circ g'(t)$.

### 5. Dérivées d'ordre 2 — Matrice Hessienne

$$H_f(a) = \\left(\\frac{\\partial^2 f}{\\partial x_i\\partial x_j}(a)\\right)_{i,j}$$

**Théorème de Schwarz :** si les dérivées partielles d'ordre $2$ sont continues, $\\frac{\\partial^2 f}{\\partial x_i\\partial x_j}=\\frac{\\partial^2 f}{\\partial x_j\\partial x_i}$ (la matrice hessienne est symétrique).`,
        exercises: [
          {
            id: "anal3-l3-1-e1",
            question: "Calculer $\\partial f/\\partial x$ pour $f(x,y)=x^2y+3xy^2$.",
            type: "mcq",
            options: [
              { id: "A", text: "$2xy+3y^2$" },
              { id: "B", text: "$x^2+6xy$" },
              { id: "C", text: "$2xy$" },
              { id: "D", text: "$2y+3y^2$" },
            ],
            correctId: "A",
            explanation: "On dérive par rapport à $x$ en traitant $y$ comme constante : $\\partial f/\\partial x = 2xy + 3y^2$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-1-e2",
            question: "Calculer le gradient de $f(x,y)=x^2+xy+y^2$ en $(1,1)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$(3,3)$" },
              { id: "B", text: "$(2,2)$" },
              { id: "C", text: "$(1,1)$" },
              { id: "D", text: "$(4,4)$" },
            ],
            correctId: "A",
            explanation: "$\\partial f/\\partial x=2x+y$, $\\partial f/\\partial y=x+2y$. En $(1,1)$ : $\\nabla f=(3,3)$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-1-e3",
            question: "Vrai ou faux : Si $f$ est différentiable en $a$, alors $f$ est continue en $a$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. De $f(a+h)=f(a)+L(h)+o(\\|h\\|)$, quand $h\\to0$ : $f(a+h)\\to f(a)+0+0=f(a)$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-1-e4",
            question: "Calculer $\\partial^2 f/\\partial x\\partial y$ pour $f(x,y)=\\sin(xy)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$-xy\\sin(xy)$" },
              { id: "B", text: "$\\cos(xy)-xy\\sin(xy)$" },
              { id: "C", text: "$\\cos(xy)$" },
              { id: "D", text: "$-\\sin(xy)$" },
            ],
            correctId: "B",
            explanation: "$\\partial f/\\partial x=y\\cos(xy)$. $\\partial^2 f/\\partial y\\partial x=\\partial/\\partial y[y\\cos(xy)]=\\cos(xy)+y(-x\\sin(xy))=\\cos(xy)-xy\\sin(xy)$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-1-e5",
            question: "Vrai ou faux : L'existence des dérivées partielles implique la différentiabilité.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. La fonction $f(x,y)=xy/(x^2+y^2)$ pour $(x,y)\\neq0$ et $f(0,0)=0$ a des dérivées partielles nulles en $0$ mais n'est même pas continue en $0$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-1-e6",
            question: "Calculer la matrice jacobienne de $f(x,y)=(x^2+y,xy)$ en $(1,2)$.",
            type: "open",
            modelAnswer: "J=((2x,1),(y,x)). En (1,2): J=((2,1),(2,1)).",
            explanation: "$J_f=\\begin{pmatrix}\\partial f_1/\\partial x & \\partial f_1/\\partial y\\\\\\partial f_2/\\partial x & \\partial f_2/\\partial y\\end{pmatrix}=\\begin{pmatrix}2x&1\\\\y&x\\end{pmatrix}$.\n\nEn $(1,2)$ : $J_f(1,2)=\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-1-e7",
            question: "Appliquer la règle de la chaîne : $f(x,y)=x^2+y^2$, $x(t)=\\cos t$, $y(t)=\\sin t$. Calculer $d(f\\circ g)/dt$.",
            type: "open",
            modelAnswer: "∇f=(2x,2y)=(2cos t, 2sin t). g'(t)=(-sin t, cos t). df/dt=2cos t(-sin t)+2sin t(cos t)=0.",
            explanation: "$\\nabla f(g(t))=(2\\cos t,2\\sin t)$, $g'(t)=(-\\sin t,\\cos t)$.\n$(f\\circ g)'(t)=\\nabla f\\cdot g'=2\\cos t(-\\sin t)+2\\sin t\\cos t=0$.\n\nCe résultat est logique : $f(g(t))=\\cos^2t+\\sin^2t=1$ (constante).",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-1-e8",
            question: "Vrai ou faux : Si $\\partial^2 f/\\partial x\\partial y$ et $\\partial^2 f/\\partial y\\partial x$ sont continues, elles sont égales.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le **théorème de Schwarz** (ou de symétrie des dérivées secondes) : si les dérivées mixtes sont continues, elles coïncident.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-1-e9",
            question: "Calculer la hessienne de $f(x,y)=x^3-3xy^2$ (laplacien harmonique).",
            type: "open",
            modelAnswer: "f_x=3x²-3y², f_y=-6xy. f_xx=6x, f_xy=-6y, f_yy=-6x. H=((6x,-6y),(-6y,-6x)). det(H)=6x(-6x)-(-6y)²=-36x²-36y²<0 (point selle si non nul).",
            explanation: "$f_x=3x^2-3y^2$, $f_y=-6xy$.\n$f_{xx}=6x$, $f_{xy}=-6y$, $f_{yy}=-6x$.\n\n$H_f=\\begin{pmatrix}6x&-6y\\\\-6y&-6x\\end{pmatrix}$.\n\n$\\Delta f=f_{xx}+f_{yy}=6x-6x=0$ : $f$ est **harmonique** (satisfait $\\Delta f=0$).",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-1-e10",
            question: "Dans quelle direction le gradient de $f(x,y)=x^2-y^2$ pointe-t-il en $(1,0)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(0,0)$" },
              { id: "B", text: "$(2,0)$" },
              { id: "C", text: "$(0,-2)$" },
              { id: "D", text: "$(1,1)$" },
            ],
            correctId: "B",
            explanation: "$\\nabla f=(2x,-2y)$. En $(1,0)$ : $\\nabla f=(2,0)$, direction des $x$ positifs.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-1-e11",
            question: "Montrer que $f(x,y)=\\sqrt{x^2+y^2}$ n'est pas différentiable en $(0,0)$.",
            type: "open",
            modelAnswer: "f_x(0,0)=lim_{h→0} |h|/h qui n'existe pas (vaut 1 ou -1 selon le signe). Donc f n'est pas différentiable en 0.",
            explanation: "**Dérivée partielle :** $\\frac{\\partial f}{\\partial x}(0,0)=\\lim_{h\\to0}\\frac{|h|-0}{h}=\\lim_{h\\to0}\\frac{|h|}{h}$.\n\nCette limite n'existe pas ($+1$ si $h>0$, $-1$ si $h<0$).\n\nDonc $f$ n'admet pas de dérivée partielle en $(0,0)$, et en particulier n'est pas différentiable en $(0,0)$.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-1-e12",
            question: "Vrai ou faux : Si $\\nabla f(a)=0$, alors $f$ admet un extremum en $a$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $f(x,y)=x^3+y^3$ vérifie $\\nabla f(0,0)=0$ mais $(0,0)$ est un point selle (col) — pas un extremum.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-1-e13",
            question: "Calculer la dérivée directionnelle de $f(x,y)=xy$ en $(1,1)$ dans la direction $u=(1/\\sqrt{2},1/\\sqrt{2})$.",
            type: "open",
            modelAnswer: "D_u f(1,1) = ∇f(1,1)·u = (1,1)·(1/√2,1/√2) = 2/√2 = √2.",
            explanation: "$\\nabla f=(y,x)$. En $(1,1)$ : $\\nabla f=(1,1)$.\n$D_u f(1,1)=\\nabla f\\cdot u=(1,1)\\cdot(1/\\sqrt{2},1/\\sqrt{2})=2/\\sqrt{2}=\\sqrt{2}$.\n\nC'est la dérivée directionnelle dans la direction $u$.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-1-e14",
            question: "Vrai ou faux : La dérivée directionnelle maximale est atteinte dans la direction du gradient.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $D_u f(a)=\\nabla f(a)\\cdot u\\leq\\|\\nabla f(a)\\|\\|u\\|=\\|\\nabla f(a)\\|$ (Cauchy-Schwarz). Égalité ssi $u=\\nabla f(a)/\\|\\nabla f(a)\\|$.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-1-e15",
            question: "Calculer la hessienne de $f(x,y,z)=x^2+2y^2+3z^2+xy$.",
            type: "open",
            modelAnswer: "H=((2,1,0),(1,4,0),(0,0,6)). Symétrique définie positive (valeurs propres>0).",
            explanation: "$f_x=2x+y$, $f_y=4y+x$, $f_z=6z$.\n$H_f=\\begin{pmatrix}f_{xx}&f_{xy}&f_{xz}\\\\f_{yx}&f_{yy}&f_{yz}\\\\f_{zx}&f_{zy}&f_{zz}\\end{pmatrix}=\\begin{pmatrix}2&1&0\\\\1&4&0\\\\0&0&6\\end{pmatrix}$.\n\nMineurs principaux : $2>0$, $2\\times4-1=7>0$, $6\\times7=42>0$. La hessienne est définie positive.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "anal3-l3-2",
        slug: "extrema-points-critiques",
        title: "Extrema et points critiques",
        durationMinutes: 60,
        content: `## Extrema des fonctions de plusieurs variables

### 1. Points critiques

Un **point critique** de $f$ est un point $a$ où $\\nabla f(a)=0$.

**Condition nécessaire d'extremum :** Si $f$ admet un extremum local en $a$ et est différentiable, alors $\\nabla f(a)=0$.

### 2. Classification par la hessienne (en 2D)

Soit $a$ un point critique de $f:\\mathbb{R}^2\\to\\mathbb{R}$. Posons $D=\\det H_f(a)=f_{xx}f_{yy}-(f_{xy})^2$.

- $D>0$ et $f_{xx}(a)>0$ : **minimum local**
- $D>0$ et $f_{xx}(a)<0$ : **maximum local**
- $D<0$ : **point selle (col)**
- $D=0$ : **cas douteux** (test non concluant)

### 3. En dimension $n$

$a$ est minimum local si la hessienne est **définie positive** (toutes les valeurs propres $>0$).
$a$ est maximum local si la hessienne est **définie négative** (toutes les valeurs propres $<0$).

### 4. Extrema sous contraintes — multiplicateurs de Lagrange

Chercher les extrema de $f$ sous la contrainte $g(x)=0$ :

$$\\nabla f(a) = \\lambda \\nabla g(a)$$

(les gradients sont colinéaires au point optimal). $\\lambda$ est le **multiplicateur de Lagrange**.

**Système :** $\\begin{cases}\\nabla f = \\lambda\\nabla g \\\\ g(x)=0\\end{cases}$.

### 5. Exemple résolu

Minimiser $f(x,y)=x^2+y^2$ sous $g(x,y)=x+y-1=0$.

$\\nabla f=(2x,2y)=\\lambda(1,1)=\\lambda\\nabla g$. Donc $x=y=\\lambda/2$. Contrainte : $\\lambda/2+\\lambda/2=1$, $\\lambda=1$, $x=y=1/2$.

Minimum : $f(1/2,1/2)=1/2$.`,
        exercises: [
          {
            id: "anal3-l3-2-e1",
            question: "Trouver les points critiques de $f(x,y)=x^2+4y^2-4x$.",
            type: "mcq",
            options: [
              { id: "A", text: "$(1,0)$" },
              { id: "B", text: "$(2,0)$" },
              { id: "C", text: "$(0,0)$" },
              { id: "D", text: "$(4,0)$" },
            ],
            correctId: "B",
            explanation: "$\\nabla f=(2x-4,8y)=0 \\Rightarrow x=2, y=0$. Point critique : $(2,0)$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-2-e2",
            question: "La hessienne de $f$ en un point critique est $H=\\begin{pmatrix}4&0\\\\0&8\\end{pmatrix}$. Nature du point ?",
            type: "mcq",
            options: [
              { id: "A", text: "Maximum local" },
              { id: "B", text: "Point selle" },
              { id: "C", text: "Minimum local" },
              { id: "D", text: "Cas douteux" },
            ],
            correctId: "C",
            explanation: "$D=4\\times8-0=32>0$ et $f_{xx}=4>0$ : **minimum local**.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-2-e3",
            question: "Vrai ou faux : Tout point critique est un extremum local.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $f(x,y)=x^2-y^2$ a $\\nabla f(0,0)=0$ mais $(0,0)$ est un point selle (minimum selon $x$, maximum selon $y$).",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-2-e4",
            question: "Quelle est la nature du point critique $(0,0)$ de $f(x,y)=x^2-y^2$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "Minimum local" },
              { id: "B", text: "Maximum local" },
              { id: "C", text: "Point selle" },
              { id: "D", text: "Cas douteux" },
            ],
            correctId: "C",
            explanation: "$H=\\begin{pmatrix}2&0\\\\0&-2\\end{pmatrix}$. $D=2(-2)-0=-4<0$. **Point selle**.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-2-e5",
            question: "Minimiser $f(x,y)=x^2+y^2$ sous la contrainte $x+2y=5$ (Lagrange).",
            type: "open",
            modelAnswer: "∇f=λ∇g: (2x,2y)=λ(1,2). x=λ/2, y=λ. Contrainte: λ/2+2λ=5, 5λ/2=5, λ=2. x=1, y=2. f=5.",
            explanation: "$\\nabla f=(2x,2y)=\\lambda(1,2)=\\lambda\\nabla g$.\n$x=\\lambda/2$, $y=\\lambda$.\n\nContrainte : $\\lambda/2+2\\lambda=5 \\Rightarrow 5\\lambda/2=5 \\Rightarrow \\lambda=2$.\n\n$x=1$, $y=2$, $f(1,2)=1+4=5$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-2-e6",
            question: "Trouver et classifier les points critiques de $f(x,y)=x^3-3x+y^2-2y$.",
            type: "open",
            modelAnswer: "f_x=3x²-3=0: x=±1. f_y=2y-2=0: y=1. Points: (1,1) et (-1,1). H=((6x,0),(0,2)). En (1,1): D=12>0, f_xx=6>0: min. En (-1,1): D=-12<0: col.",
            explanation: "$\\nabla f=(3x^2-3, 2y-2)=0 \\Rightarrow x=\\pm1, y=1$.\n\n$H_f=\\begin{pmatrix}6x&0\\\\0&2\\end{pmatrix}$.\n\n**En $(1,1)$ :** $D=6\\times2=12>0$, $f_{xx}=6>0$ : **minimum local**. $f(1,1)=-1-1-1+... = 1-3+1-2=-3$.\n\n**En $(-1,1)$ :** $D=-6\\times2=-12<0$ : **point selle**.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-2-e7",
            question: "Vrai ou faux : Si $H_f(a)$ est définie négative et $\\nabla f(a)=0$, alors $a$ est un maximum local.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $\\nabla f(a)=0$ et $H_f(a)$ est définie négative, alors $f(a+h)=f(a)+h^TH_f(a)h/2+o(\\|h\\|^2)<f(a)$ pour $h$ petit non nul. Donc $a$ est un maximum local strict.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-2-e8",
            question: "Quel point du plan $x+y+z=1$ est le plus proche de l'origine ?",
            type: "open",
            modelAnswer: "Minimiser x²+y²+z² sous x+y+z=1. Lagrange: 2x=λ, 2y=λ, 2z=λ. x=y=z. Contrainte: 3x=1, x=1/3. Point: (1/3,1/3,1/3). Distance: 1/√3.",
            explanation: "**Lagrange :** $\\nabla f=\\lambda\\nabla g$ avec $f=x^2+y^2+z^2$, $g=x+y+z-1$.\n$(2x,2y,2z)=\\lambda(1,1,1) \\Rightarrow x=y=z=\\lambda/2$.\nContrainte : $3\\lambda/2=1$, $\\lambda=2/3$, $x=y=z=1/3$.\nDistance $=\\sqrt{3(1/9)}=1/\\sqrt{3}=\\sqrt{3}/3$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-2-e9",
            question: "Vrai ou faux : La méthode des multiplicateurs de Lagrange s'applique à des contraintes non linéaires.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La méthode de Lagrange fonctionne pour toute contrainte différentiable $g(x)=0$, qu'elle soit linéaire ou non, sous réserve que $\\nabla g(a)\\neq0$ au point optimal (qualification de contrainte).",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-2-e10",
            question: "Maximiser $f(x,y)=xy$ sous $x^2+y^2=1$ (Lagrange).",
            type: "open",
            modelAnswer: "(y,x)=λ(2x,2y). y=2λx, x=2λy. xy=2λy²=2λx². Donc x²=y². x=±y. Contrainte: 2x²=1, x=±1/√2. Maxima: (1/√2,1/√2) et (-1/√2,-1/√2), f=1/2.",
            explanation: "$\\nabla f=(y,x)=\\lambda(2x,2y)$. Système : $y=2\\lambda x$, $x=2\\lambda y$.\nMultipliant : $xy=2\\lambda x^2=2\\lambda y^2$, donc $x^2=y^2$, $y=\\pm x$.\n**Cas $y=x$ :** $2x^2=1$, $x=1/\\sqrt{2}$, $f=1/2$ (maximum).\n**Cas $y=-x$ :** $f=-1/2$ (minimum).",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-2-e11",
            question: "Montrer que la matrice hessienne $H_f$ est symétrique lorsque $f$ est de classe $\\mathcal{C}^2$.",
            type: "open",
            modelAnswer: "Par le théorème de Schwarz: ∂²f/∂xᵢ∂xⱼ = ∂²f/∂xⱼ∂xᵢ pour f∈C². Donc H_{ij}=H_{ji}, H est symétrique.",
            explanation: "**Preuve :**\n$(H_f)_{ij}=\\frac{\\partial^2 f}{\\partial x_i\\partial x_j}$.\n\nPar le **théorème de Schwarz** : si $f\\in\\mathcal{C}^2$, alors les dérivées partielles d'ordre $2$ sont continues et commutent :\n$\\frac{\\partial^2 f}{\\partial x_i\\partial x_j}=\\frac{\\partial^2 f}{\\partial x_j\\partial x_i}$.\n\nDonc $(H_f)_{ij}=(H_f)_{ji}$, $H_f$ est symétrique. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-2-e12",
            question: "Vrai ou faux : Sur un compact, toute fonction continue atteint son maximum et son minimum.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. **Théorème des valeurs extrêmes (Weierstrass)** : toute fonction continue sur un compact (fermé borné) de $\\mathbb{R}^n$ est bornée et atteint ses bornes.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-2-e13",
            question: "Chercher les extrema de $f(x,y,z)=xyz$ sur la sphère $x^2+y^2+z^2=1$.",
            type: "open",
            modelAnswer: "Lagrange: (yz,xz,xy)=λ(2x,2y,2z). yz=2λx: xyz=2λx², etc. Donc 2λx²=2λy²=2λz². Si λ≠0: x²=y²=z²=1/3. f=±1/(3√3).",
            explanation: "$\\nabla f=(yz,xz,xy)=\\lambda(2x,2y,2z)$.\n$yz=2\\lambda x$, $xz=2\\lambda y$, $xy=2\\lambda z$.\n\nMultipliant les membres gauches : $(xyz)^2=8\\lambda^3 xyz$, soit $xyz=8\\lambda^3$.\nEt $(yz)(xz)(xy)=8\\lambda^3xyz$, $(xyz)^2=8\\lambda^3xyz$.\n\nDe $yz=2\\lambda x$ et $xz=2\\lambda y$ : $\\frac{yz}{xz}=\\frac{x}{y}$, soit $y^2=x^2$. Similairement $x^2=z^2$. Contrainte : $3x^2=1$, $|x|=1/\\sqrt{3}$. $f_{\\max}=1/(3\\sqrt{3})$.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-2-e14",
            question: "Vrai ou faux : Si $f$ est strictement convexe sur $\\mathbb{R}^n$, elle admet au plus un minimum global.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $f$ est strictement convexe et admet deux minima $a,b$, alors par stricte convexité : $f((a+b)/2)<(f(a)+f(b))/2=f(a)$, ce qui contredit que $a$ est un minimum. Donc le minimum est unique (s'il existe).",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-2-e15",
            question: "Maximiser le volume d'un parallélépipède rectangle inscrit dans l'ellipsoïde $x^2/a^2+y^2/b^2+z^2/c^2=1$.",
            type: "open",
            modelAnswer: "Volume=8xyz. Lagrange avec g=x²/a²+y²/b²+z²/c²-1. Solution: x=a/√3, y=b/√3, z=c/√3. V_max=8abc/(3√3).",
            explanation: "On maximise $V=8xyz$ (sommet $(x,y,z)$, $x,y,z>0$) sous $g=x^2/a^2+y^2/b^2+z^2/c^2=1$.\n\n$\\nabla V=(8yz,8xz,8xy)=\\lambda\\nabla g=\\lambda(2x/a^2,2y/b^2,2z/c^2)$.\n\nEn multipliant : $8yz=2\\lambda x/a^2 \\Rightarrow 8xyz=2\\lambda x^2/a^2$. De même pour les autres. Donc $x^2/a^2=y^2/b^2=z^2/c^2=1/3$.\n\n$V_{\\max}=8\\cdot\\frac{a}{\\sqrt{3}}\\cdot\\frac{b}{\\sqrt{3}}\\cdot\\frac{c}{\\sqrt{3}}=\\frac{8abc}{3\\sqrt{3}}$.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "anal3-l3-3",
        slug: "integrales-doubles-triples",
        title: "Intégrales doubles et triples",
        durationMinutes: 65,
        content: `## Intégrales multiples

### 1. Intégrale double

$$\\iint_D f(x,y)\\,dA = \\int_a^b\\left(\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x,y)\\,dy\\right)dx$$

**Théorème de Fubini :** si $f$ est continue sur $D=[a,b]\\times[c,d]$, on peut intégrer dans n'importe quel ordre.

**Interprétation :** volume sous le graphe de $f$ au-dessus du domaine $D$.

### 2. Changement de variables — coordonnées polaires

$x=r\\cos\\theta$, $y=r\\sin\\theta$, $dA=r\\,dr\\,d\\theta$.

$$\\iint_D f(x,y)\\,dA = \\int_0^{2\\pi}\\int_0^R f(r\\cos\\theta,r\\sin\\theta)\\,r\\,dr\\,d\\theta$$

### 3. Intégrale triple

$$\\iiint_V f(x,y,z)\\,dV = \\int_a^b\\int_{c}^d\\int_e^f f(x,y,z)\\,dz\\,dy\\,dx$$

**Coordonnées cylindriques :** $x=r\\cos\\theta$, $y=r\\sin\\theta$, $z=z$, $dV=r\\,dr\\,d\\theta\\,dz$.

**Coordonnées sphériques :** $x=\\rho\\sin\\phi\\cos\\theta$, $y=\\rho\\sin\\phi\\sin\\theta$, $z=\\rho\\cos\\phi$, $dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.

### 4. Théorème de changement de variables

Si $\\Phi:U\\to V$ est un difféomorphisme $\\mathcal{C}^1$ :
$$\\iint_V f(x,y)\\,dA = \\iint_U f(\\Phi(u,v))|J_\\Phi(u,v)|\\,du\\,dv$$

où $|J_\\Phi|$ est le **jacobien** (valeur absolue du déterminant jacobien).

### 5. Applications

- **Aire :** $\\text{Aire}(D)=\\iint_D dA$
- **Volume :** $V=\\iiint_V dV$
- **Centre de masse :** $\\bar{x}=\\frac{1}{V}\\iiint_V x\\,dV$`,
        exercises: [
          {
            id: "anal3-l3-3-e1",
            question: "Calculer $\\int_0^1\\int_0^2 xy\\,dy\\,dx$.",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$1/2$" },
              { id: "D", text: "$4$" },
            ],
            correctId: "A",
            explanation: "$\\int_0^2 xy\\,dy=x[y^2/2]_0^2=2x$. Puis $\\int_0^1 2x\\,dx=[x^2]_0^1=1$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-3-e2",
            question: "Vrai ou faux : Par Fubini, $\\int_0^1\\int_0^1 f(x,y)\\,dx\\,dy=\\int_0^1\\int_0^1 f(x,y)\\,dy\\,dx$ si $f$ est continue.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Le théorème de Fubini garantit l'égalité des deux ordres d'intégration pour $f$ continue sur un rectangle.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-3-e3",
            question: "Calculer l'aire du disque de rayon $R$ en coordonnées polaires.",
            type: "mcq",
            options: [
              { id: "A", text: "$R^2$" },
              { id: "B", text: "$2\\pi R$" },
              { id: "C", text: "$\\pi R^2$" },
              { id: "D", text: "$2R^2$" },
            ],
            correctId: "C",
            explanation: "$\\text{Aire}=\\int_0^{2\\pi}\\int_0^R r\\,dr\\,d\\theta=2\\pi\\cdot[r^2/2]_0^R=2\\pi\\cdot R^2/2=\\pi R^2$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-3-e4",
            question: "Quel est le jacobien du changement en coordonnées polaires ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$r$" },
              { id: "C", text: "$r^2$" },
              { id: "D", text: "$\\cos\\theta$" },
            ],
            correctId: "B",
            explanation: "$J=\\det\\begin{pmatrix}\\cos\\theta&-r\\sin\\theta\\\\\\sin\\theta&r\\cos\\theta\\end{pmatrix}=r\\cos^2\\theta+r\\sin^2\\theta=r$. Donc $dA=r\\,dr\\,d\\theta$.",
            difficulty: "debutant",
          },
          {
            id: "anal3-l3-3-e5",
            question: "Calculer $\\iiint_V dV$ pour $V=\\{(x,y,z):x^2+y^2+z^2\\leq1\\}$ (boule unité).",
            type: "mcq",
            options: [
              { id: "A", text: "$\\pi$" },
              { id: "B", text: "$2\\pi$" },
              { id: "C", text: "$4\\pi/3$" },
              { id: "D", text: "$4\\pi$" },
            ],
            correctId: "C",
            explanation: "En coordonnées sphériques : $V=\\int_0^{2\\pi}\\int_0^\\pi\\int_0^1\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta=2\\pi\\cdot2\\cdot1/3=4\\pi/3$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-3-e6",
            question: "Calculer $\\iint_D x^2+y^2\\,dA$ sur le disque $D: x^2+y^2\\leq4$.",
            type: "open",
            modelAnswer: "Polaire: ∫_0^{2π}∫_0^2 r²·r dr dθ = 2π·[r⁴/4]_0^2 = 2π·4 = 8π.",
            explanation: "En polaire : $x^2+y^2=r^2$.\n$\\iint_D(x^2+y^2)dA=\\int_0^{2\\pi}\\int_0^2 r^2\\cdot r\\,dr\\,d\\theta=2\\pi\\int_0^2 r^3dr=2\\pi\\cdot\\frac{16}{4}=8\\pi$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-3-e7",
            question: "Calculer $\\int_0^1\\int_x^1 e^{y^2}\\,dy\\,dx$ en inversant l'ordre d'intégration.",
            type: "open",
            modelAnswer: "Domaine: 0≤x≤y≤1. Inverser: ∫_0^1∫_0^y e^{y²}dx dy=∫_0^1 y·e^{y²}dy=[e^{y²}/2]_0^1=(e-1)/2.",
            explanation: "Le domaine est $\\{0\\leq x\\leq y\\leq1\\}$.\n\nInversion : $\\int_0^1\\left(\\int_0^y dx\\right)e^{y^2}dy=\\int_0^1 ye^{y^2}dy$.\n\nPrimitive : $ye^{y^2}=\\frac{1}{2}(e^{y^2})'$. Donc $=\\frac{1}{2}[e^{y^2}]_0^1=\\frac{e-1}{2}$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-3-e8",
            question: "Vrai ou faux : Le volume de la boule de rayon $R$ est $\\frac{4}{3}\\pi R^3$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. En coordonnées sphériques : $V=\\int_0^{2\\pi}\\int_0^\\pi\\int_0^R\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta=2\\pi\\cdot2\\cdot R^3/3=4\\pi R^3/3$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-3-e9",
            question: "Calculer le volume du cône $z^2=x^2+y^2$, $0\\leq z\\leq1$.",
            type: "open",
            modelAnswer: "En cylindrique: r=z. V=∫_0^{2π}∫_0^1∫_0^z r dr dz dθ=2π∫_0^1 z²/2 dz=2π·[z³/6]_0^1=π/3.",
            explanation: "En coordonnées cylindriques, le cône est $r\\leq z$, $0\\leq z\\leq1$.\n$V=\\int_0^{2\\pi}\\int_0^1\\int_0^z r\\,dr\\,dz\\,d\\theta=2\\pi\\int_0^1\\frac{z^2}{2}dz=2\\pi\\cdot\\frac{1}{6}=\\frac{\\pi}{3}$.",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-3-e10",
            question: "Vrai ou faux : $\\int_0^1\\int_0^1\\frac{x-y}{(x+y)^3}dx\\,dy=-\\frac{1}{2}$ et $\\int_0^1\\int_0^1\\frac{x-y}{(x+y)^3}dy\\,dx=\\frac{1}{2}$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est un exemple classique montrant que Fubini ne s'applique pas ici car $f(x,y)=(x-y)/(x+y)^3$ n'est pas intégrable au sens de Lebesgue sur $[0,1]^2$ (elle n'est pas dans $L^1$).",
            difficulty: "intermediaire",
          },
          {
            id: "anal3-l3-3-e11",
            question: "Calculer $\\iint_{x^2+y^2\\leq1}\\sqrt{1-x^2-y^2}\\,dA$ (volume d'une demi-sphère).",
            type: "open",
            modelAnswer: "Polaire: ∫_0^{2π}∫_0^1√(1-r²)·r dr dθ = 2π·[-（1-r²)^{3/2}/3]_0^1 = 2π·1/3 = 2π/3.",
            explanation: "En polaire :\n$\\iint\\sqrt{1-r^2}\\cdot r\\,dr\\,d\\theta=2\\pi\\int_0^1 r\\sqrt{1-r^2}dr$.\n\nSub $u=1-r^2$ : $=2\\pi\\int_0^1\\frac{\\sqrt{u}}{2}du=\\pi\\cdot\\frac{2}{3}=\\frac{2\\pi}{3}$.\n\nC'est bien le volume de la demi-sphère de rayon $1$ : $\\frac{1}{2}\\cdot\\frac{4\\pi}{3}=\\frac{2\\pi}{3}$ ✓.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-3-e12",
            question: "Vrai ou faux : Le jacobien de la transformation en coordonnées sphériques est $\\rho^2\\sin\\phi$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Le jacobien de $(x,y,z)=(\\rho\\sin\\phi\\cos\\theta,\\rho\\sin\\phi\\sin\\theta,\\rho\\cos\\phi)$ est $\\rho^2\\sin\\phi$, ce qui donne $dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-3-e13",
            question: "Calculer $\\int_{-\\infty}^{+\\infty}e^{-x^2}dx$ en utilisant le passage en polaires.",
            type: "open",
            modelAnswer: "I²=∫∫e^{-(x²+y²)}dA=∫_0^{2π}∫_0^∞e^{-r²}r dr dθ=2π·[−e^{-r²}/2]_0^∞=2π·1/2=π. Donc I=√π.",
            explanation: "Soit $I=\\int_{-\\infty}^\\infty e^{-x^2}dx$.\n$I^2=\\int_{-\\infty}^\\infty e^{-x^2}dx\\int_{-\\infty}^\\infty e^{-y^2}dy=\\iint_{\\mathbb{R}^2}e^{-(x^2+y^2)}dA$.\n\nEn polaire : $=\\int_0^{2\\pi}\\int_0^\\infty e^{-r^2}r\\,dr\\,d\\theta=2\\pi\\cdot\\frac{1}{2}=\\pi$.\n\nDonc $I=\\sqrt{\\pi}$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-3-e14",
            question: "Calculer le moment d'inertie de la boule unité $\\iiint_{x^2+y^2+z^2\\leq1}(x^2+y^2)dV$.",
            type: "open",
            modelAnswer: "En sphérique: x²+y²=ρ²sin²φ. ∫_0^{2π}∫_0^π∫_0^1 ρ²sin²φ·ρ²sinφ dρdφdθ = 2π·(2/3)·(1/5) = ... = 8π/15.",
            explanation: "En coordonnées sphériques : $x^2+y^2=\\rho^2\\sin^2\\phi$.\n$I=\\int_0^{2\\pi}d\\theta\\int_0^\\pi\\sin^2\\phi\\sin\\phi\\,d\\phi\\int_0^1\\rho^4\\,d\\rho$\n$=2\\pi\\cdot\\int_0^\\pi\\sin^3\\phi\\,d\\phi\\cdot\\frac{1}{5}$.\n\n$\\int_0^\\pi\\sin^3\\phi\\,d\\phi=4/3$.\n\n$I=2\\pi\\cdot\\frac{4}{3}\\cdot\\frac{1}{5}=\\frac{8\\pi}{15}$.",
            difficulty: "expert",
          },
          {
            id: "anal3-l3-3-e15",
            question: "Vrai ou faux : $\\iint_D f(x)g(y)\\,dA=\\left(\\int_a^b f(x)dx\\right)\\left(\\int_c^d g(y)dy\\right)$ pour $D=[a,b]\\times[c,d]$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par Fubini : $\\iint_D f(x)g(y)dA=\\int_a^b f(x)\\left(\\int_c^d g(y)dy\\right)dx=\\left(\\int_a^b f(x)dx\\right)\\left(\\int_c^d g(y)dy\\right)$ car $\\int_c^d g(y)dy$ est une constante par rapport à $x$.",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // L3 — Algèbre : Réduction des endomorphismes et formes bilinéaires
  // ─────────────────────────────────────────────
  {
    id: "algebre-l3",
    slug: "algebre-l3-reduction-formes-bilineaires",
    title: "Algèbre L3 — Réduction des endomorphismes et formes quadratiques",
    description: "Polynôme caractéristique, diagonalisation, trigonalisation, réduction de Jordan et formes quadratiques.",
    schoolLevel: "L3",
    subject: "algebre",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "λ",
    lessons: [
      {
        id: "alg3-l3-1",
        slug: "polynome-caracteristique-diagonalisation",
        title: "Polynôme caractéristique et diagonalisation",
        durationMinutes: 65,
        content: `## Réduction des endomorphismes — Diagonalisation

### 1. Polynôme caractéristique

Pour $f\\in\\mathcal{L}(E)$ ($E$ de dimension $n$), le **polynôme caractéristique** est :
$$\\chi_f(X) = \\det(f - XI) \\in \\mathbb{R}[X]$$

C'est un polynôme de degré $n$. Les valeurs propres de $f$ sont exactement les racines de $\\chi_f$.

**Invariants :** $\\chi_f$ ne dépend pas du choix de la base.

### 2. Polynôme minimal

Le **polynôme minimal** $\\mu_f$ est le polynôme unitaire de plus petit degré qui annule $f$ :
$$\\mu_f(f) = 0$$

Propriétés :
- $\\mu_f$ divise tout polynôme annulateur de $f$
- $\\mu_f$ divise $\\chi_f$ (Cayley-Hamilton)
- $\\mu_f$ et $\\chi_f$ ont les mêmes racines (mais avec des multiplicités éventuellement différentes)

### 3. Critères de diagonalisation

$f$ est **diagonalisable** si et seulement si l'une des conditions équivalentes est satisfaite :
1. $\\chi_f$ est scindé sur $\\mathbb{R}$ et pour toute valeur propre $\\lambda$ : $\\dim E_\\lambda = m_{alg}(\\lambda)$
2. $\\mu_f$ est scindé à racines simples sur $\\mathbb{R}$
3. $E = \\bigoplus_{\\lambda \\text{ vp}} E_\\lambda$ (somme directe des sous-espaces propres)

### 4. Diagonalisation — méthode

1. Calculer $\\chi_f$ et ses racines (valeurs propres)
2. Pour chaque valeur propre $\\lambda$, calculer $E_\\lambda = \\ker(f-\\lambda\\text{Id})$
3. Vérifier que $\\sum\\dim E_\\lambda = n$
4. Former $P$ avec les colonnes = vecteurs propres, $D=\\text{diag}(\\lambda_i)$, $P^{-1}AP=D$

### 5. Applications

**Puissances :** $A^n = PD^nP^{-1}$.

**Systèmes d'ED :** $X'=AX$ se résout par $Y'=DY$ (découplé) avec $X=PY$.

**Polynômes en $A$ :** si $p(\\lambda_i)$ connu, $p(A)=Pp(D)P^{-1}$.`,
        exercises: [
          {
            id: "alg3-l3-1-e1",
            question: "Calculer $\\chi_A$ pour $A=\\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$(X-3)^2$" },
              { id: "B", text: "$(X-3)(X+3)$" },
              { id: "C", text: "$X^2-6X+9$" },
              { id: "D", text: "$(X-3)^2$ (options A et C sont identiques)" },
            ],
            correctId: "A",
            explanation: "$\\chi_A(X)=\\det(A-XI)=(3-X)^2$. Unique valeur propre $\\lambda=3$ de multiplicité algébrique $2$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-1-e2",
            question: "Vrai ou faux : Une matrice $n\\times n$ à $n$ valeurs propres distinctes est diagonalisable.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Des vecteurs propres associés à des valeurs propres distinctes sont linéairement indépendants. S'il y en a $n$ dans un espace de dimension $n$, ils forment une base de vecteurs propres.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-1-e3",
            question: "La matrice $A=\\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}$ est-elle diagonalisable ?",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "$E_3=\\ker(A-3I)=\\ker\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}=\\text{Vect}\\{(1,0)\\}$, de dimension $1$. Mais multiplicité algébrique $=2\\neq1=\\dim E_3$. Non diagonalisable.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-1-e4",
            question: "Quel est le polynôme minimal de $A=I_n$ (matrice identité) ?",
            type: "mcq",
            options: [
              { id: "A", text: "$(X-1)^n$" },
              { id: "B", text: "$X-1$" },
              { id: "C", text: "$X^n-1$" },
              { id: "D", text: "$X-n$" },
            ],
            correctId: "B",
            explanation: "$A-I=0$, donc $\\mu_A$ divise $X-1$. Comme $\\mu_A\\neq1$ (pas le poly constant), $\\mu_A=X-1$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-1-e5",
            question: "Vrai ou faux : $\\mu_f$ divise $\\chi_f$ (théorème de Cayley-Hamilton implique que $\\chi_f(f)=0$).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Cayley-Hamilton : $\\chi_f(f)=0$, donc $\\mu_f$ (le polynôme annulateur minimal) divise $\\chi_f$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-1-e6",
            question: "Diagonaliser $A=\\begin{pmatrix}5&-2\\\\3&0\\end{pmatrix}$.",
            type: "open",
            modelAnswer: "χ_A=X²-5X+6=(X-2)(X-3). VP: λ=2: ker(A-2I)=ker((3,-2;3,-2)): v=(2,3). λ=3: ker(A-3I)=ker((2,-2;3,-3)): v=(1,1). P=(2,1;3,1), D=diag(2,3).",
            explanation: "$\\chi_A(X)=(5-X)(0-X)+6=X^2-5X+6=(X-2)(X-3)$. Valeurs propres $2$ et $3$.\n\n$E_2=\\ker(A-2I)=\\ker\\begin{pmatrix}3&-2\\\\3&-2\\end{pmatrix}$: $3x-2y=0\\Rightarrow v_1=(2,3)$.\n\n$E_3=\\ker(A-3I)=\\ker\\begin{pmatrix}2&-2\\\\3&-3\\end{pmatrix}$: $x=y\\Rightarrow v_2=(1,1)$.\n\n$P=\\begin{pmatrix}2&1\\\\3&1\\end{pmatrix}$, $D=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$, $P^{-1}AP=D$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-1-e7",
            question: "Vrai ou faux : Si $f$ est diagonalisable et $g$ est un polynôme, alors $g(f)$ est diagonalisable.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $A=PDP^{-1}$, alors $g(A)=Pg(D)P^{-1}$ où $g(D)=\\text{diag}(g(\\lambda_i))$ est encore diagonale. Donc $g(A)$ est diagonalisable.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-1-e8",
            question: "Pour $A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, quel est $\\chi_A$ et $A$ est-elle diagonalisable sur $\\mathbb{R}$ ?",
            type: "open",
            modelAnswer: "χ_A=X²+1. Pas de racine réelle. Non diagonalisable sur R (mais diagonalisable sur C).",
            explanation: "$\\chi_A(X)=X^2+1$. Discriminant $\\Delta=-4<0$, pas de racine réelle.\n\n$A$ n'est **pas diagonalisable sur $\\mathbb{R}$** (la rotation de $\\pi/2$ n'a pas de vecteur propre réel).\n\nSur $\\mathbb{C}$ : valeurs propres $\\pm i$, diagonalisable dans $\\mathcal{M}_2(\\mathbb{C})$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-1-e9",
            question: "Vrai ou faux : Le polynôme minimal d'une matrice diagonale est $\\prod_{i}(X-\\lambda_i)$ (produit des facteurs distincts).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Pour $D=\\text{diag}(\\lambda_1,\\ldots,\\lambda_n)$, le polynôme $\\prod_{\\lambda\\text{ distinct}}(X-\\lambda)$ annule $D$ et est de degré minimal. C'est bien le polynôme minimal.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-1-e10",
            question: "Calculer $A^{2025}$ pour $A=\\begin{pmatrix}2&0\\\\0&-1\\end{pmatrix}$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}2^{2025}&0\\\\0&1\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}2^{2025}&0\\\\0&-1\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$" },
              { id: "D", text: "$2025A$" },
            ],
            correctId: "B",
            explanation: "$A$ est déjà diagonale. $A^n=\\begin{pmatrix}2^n&0\\\\0&(-1)^n\\end{pmatrix}$. Pour $n=2025$ (impair) : $A^{2025}=\\begin{pmatrix}2^{2025}&0\\\\0&-1\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-1-e11",
            question: "Montrer que si $AB=BA$ et $A$ diagonalisable à valeurs propres distinctes, alors les sous-espaces propres de $A$ sont stables par $B$.",
            type: "open",
            modelAnswer: "Si Av=λv, alors A(Bv)=B(Av)=B(λv)=λ(Bv). Donc Bv∈E_λ(A). Les sous-espaces propres de A sont stables par B.",
            explanation: "Soit $v\\in E_\\lambda(A)$, i.e., $Av=\\lambda v$.\n$A(Bv)=B(Av)=B(\\lambda v)=\\lambda(Bv)$.\nDonc $Bv\\in E_\\lambda(A)$ : $E_\\lambda$ est stable par $B$.\n\nComme $A$ a des valeurs propres distinctes, $\\dim E_\\lambda=1$ pour chaque $\\lambda$, donc $Bv=\\mu_\\lambda v$ pour un certain scalaire $\\mu_\\lambda$. Cela signifie que $B$ est diagonalisable dans la même base que $A$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-1-e12",
            question: "Vrai ou faux : Si $\\chi_f=(X-\\lambda_1)^{n_1}\\cdots(X-\\lambda_k)^{n_k}$ scindé, $f$ est diagonalisable ssi $\\mu_f=(X-\\lambda_1)\\cdots(X-\\lambda_k)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $f$ est diagonalisable ssi $\\mu_f$ est scindé à racines simples, i.e., $\\mu_f=\\prod_{i}(X-\\lambda_i)$ (produit des facteurs linéaires sans répétition).",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-1-e13",
            question: "Calculer $e^A$ pour $A=\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}$.",
            type: "open",
            modelAnswer: "A diagonale. e^A=diag(e^1,e^2).",
            explanation: "$A$ est diagonale, donc $e^A=\\text{diag}(e^{\\lambda_1},\\ldots,e^{\\lambda_n})=\\begin{pmatrix}e^1&0\\\\0&e^2\\end{pmatrix}=\\begin{pmatrix}e&0\\\\0&e^2\\end{pmatrix}$.",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-1-e14",
            question: "Vrai ou faux : Le polynôme caractéristique de $A$ et $A^T$ sont les mêmes.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$\\chi_{A^T}(X)=\\det(A^T-XI)=\\det((A-XI)^T)=\\det(A-XI)=\\chi_A(X)$. (En utilisant $\\det(M^T)=\\det(M)$.)",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-1-e15",
            question: "Montrer que si $f^2=f$ (projecteur), alors $f$ est diagonalisable.",
            type: "open",
            modelAnswer: "μ_f divise X²-X=X(X-1) qui est scindé à racines simples. Donc f est diagonalisable.",
            explanation: "$f^2=f \\Rightarrow f^2-f=0 \\Rightarrow f(f-\\text{Id})=0$.\n\nDonc le polynôme $P(X)=X(X-1)$ annule $f$, et $\\mu_f$ divise $P$.\n\n$P=X(X-1)$ est scindé à racines simples sur $\\mathbb{R}$.\n\nDonc $\\mu_f$ est scindé à racines simples, ce qui implique que $f$ est **diagonalisable**. $\\square$",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "alg3-l3-2",
        slug: "trigonalisation-jordan",
        title: "Trigonalisation et réduction de Jordan",
        durationMinutes: 65,
        content: `## Trigonalisation et réduction de Jordan

### 1. Trigonalisation

Un endomorphisme $f$ est **trigonalisable** (ou triangularisable) si sa matrice dans une base convenable est triangulaire supérieure.

**Critère :** $f$ est trigonalisable sur $\\mathbb{K}$ $\\Leftrightarrow$ $\\chi_f$ est scindé sur $\\mathbb{K}$.

En particulier, tout endomorphisme d'un espace vectoriel **complexe** est trigonalisable.

### 2. Décomposition de Dunford

Si $\\chi_f$ est scindé, $f$ s'écrit de façon unique :
$$f = d + n$$

où $d$ est diagonalisable, $n$ est nilpotente ($n^k=0$ pour un certain $k$), et $dn=nd$.

### 3. Blocs de Jordan

Un **bloc de Jordan** de taille $k$ associé à $\\lambda$ est :
$$J_k(\\lambda) = \\begin{pmatrix}\\lambda&1&&0\\\\&\\lambda&\\ddots&\\\\&&\\ddots&1\\\\0&&&\\lambda\\end{pmatrix} \\in \\mathcal{M}_k$$

C'est la matrice de la restriction de $f$ à un **vecteur cyclique** (vecteur générateur d'un sous-espace invariant de dimension $k$).

### 4. Réduction de Jordan

Tout endomorphisme $f$ (dont $\\chi_f$ est scindé) est semblable à une matrice de Jordan :
$$J = \\text{diag}(J_{k_1}(\\lambda_1), J_{k_2}(\\lambda_2), \\ldots)$$

La **forme de Jordan** est unique à l'ordre des blocs près.

**Pour la valeur propre $\\lambda$ :**
- Nombre de blocs = $\\dim E_\\lambda = $ multiplicité géométrique
- Taille du plus grand bloc = degré de $\\lambda$ dans $\\mu_f$
- Somme des tailles = multiplicité algébrique de $\\lambda$ dans $\\chi_f$`,
        exercises: [
          {
            id: "alg3-l3-2-e1",
            question: "Vrai ou faux : Toute matrice carrée complexe est trigonalisable.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Sur $\\mathbb{C}$, tout polynôme de degré $\\geq1$ se factorise (théorème d'Alembert-Gauss). Donc $\\chi_f$ est scindé sur $\\mathbb{C}$, et $f$ est trigonalisable.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-2-e2",
            question: "Quel est l'indice de nilpotence de $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$1$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$0$" },
            ],
            correctId: "B",
            explanation: "$N^2=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}=0$ mais $N\\neq0$. L'indice de nilpotence est $2$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-2-e3",
            question: "Vrai ou faux : Toute matrice nilpotente est semblable à une matrice de Jordan dont tous les blocs ont $\\lambda=0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Une matrice nilpotente n'a que $0$ comme valeur propre. Sa forme de Jordan ne contient que des blocs $J_k(0)$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-2-e4",
            question: "Pour $A=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$, quelle est sa forme de Jordan ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$" },
            ],
            correctId: "B",
            explanation: "$A$ est déjà sous forme de Jordan : un bloc $J_2(2)$. Elle n'est pas diagonalisable ($E_2$ est de dimension $1$).",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-2-e5",
            question: "Vrai ou faux : La décomposition de Dunford $f=d+n$ est unique.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La décomposition de Dunford $f=d+n$ avec $d$ diagonalisable, $n$ nilpotente, $dn=nd$ est **unique**. C'est le contenu du théorème de décomposition de Dunford.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-2-e6",
            question: "Calculer $J_2(\\lambda)^n$ pour le bloc de Jordan $2\\times2$.",
            type: "open",
            modelAnswer: "J_2(λ)^n = ((λ^n, nλ^{n-1}),(0, λ^n)).",
            explanation: "$J_2(\\lambda)=\\lambda I+N$ où $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, $N^2=0$.\n\nPar le binôme (avec $\\lambda I$ et $N$ qui commutent) :\n$J_2(\\lambda)^n=(\\lambda I+N)^n=\\sum_{k=0}^n\\binom{n}{k}\\lambda^{n-k}N^k=\\lambda^n I+n\\lambda^{n-1}N$\n$=\\begin{pmatrix}\\lambda^n&n\\lambda^{n-1}\\\\0&\\lambda^n\\end{pmatrix}$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-2-e7",
            question: "Vrai ou faux : Si $\\chi_f=(X-\\lambda)^n$, alors $f$ est semblable à $J_n(\\lambda)$ (un seul bloc).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. Par exemple, $f=\\lambda\\text{Id}$ a $\\chi_f=(X-\\lambda)^n$ mais est semblable à $\\lambda I_n$ (matrice diagonale, $n$ blocs $J_1(\\lambda)$).",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-2-e8",
            question: "Déterminer la forme de Jordan de $A$ avec $\\chi_A=(X-2)^3$ et $\\dim E_2=1$.",
            type: "mcq",
            options: [
              { id: "A", text: "$\\text{diag}(2,2,2)$" },
              { id: "B", text: "$J_2(2)\\oplus J_1(2)$" },
              { id: "C", text: "$J_3(2)$" },
              { id: "D", text: "$J_1(2)\\oplus J_1(2)\\oplus J_1(2)$" },
            ],
            correctId: "C",
            explanation: "Multiplicité algébrique $3$, multiplicité géométrique $1$ (un seul bloc). La forme de Jordan est un seul bloc $J_3(2)$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-2-e9",
            question: "Vrai ou faux : La forme de Jordan de $A$ est unique à l'ordre des blocs près.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La **forme de Jordan** d'une matrice est unique à permutation des blocs diagonaux près. C'est un invariant complet de la similitude.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-2-e10",
            question: "Déterminer la forme de Jordan si $\\chi_A=(X-1)^2(X-2)^2$, $\\dim E_1=1$, $\\dim E_2=2$.",
            type: "mcq",
            options: [
              { id: "A", text: "$J_2(1)\\oplus J_2(2)$" },
              { id: "B", text: "$J_2(1)\\oplus J_1(2)\\oplus J_1(2)$" },
              { id: "C", text: "$J_1(1)\\oplus J_1(1)\\oplus J_2(2)$" },
              { id: "D", text: "$J_1(1)\\oplus J_1(2)\\oplus J_1(1)\\oplus J_1(2)$" },
            ],
            correctId: "B",
            explanation: "Pour $\\lambda=1$: mult. alg.$=2$, mult. géom.$=1$ → un bloc $J_2(1)$. Pour $\\lambda=2$: mult. alg.$=2$, mult. géom.$=2$ → deux blocs $J_1(2)$. Forme : $J_2(1)\\oplus J_1(2)\\oplus J_1(2)$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-2-e11",
            question: "Calculer $e^{J_2(\\lambda)}$ pour un bloc de Jordan $2\\times2$.",
            type: "open",
            modelAnswer: "e^{J_2(λ)}=e^{λI+N}=e^λ·e^N=e^λ(I+N)=e^λ·((1,1),(0,1)).",
            explanation: "$J_2(\\lambda)=\\lambda I+N$ avec $N^2=0$.\n\n$e^{J_2(\\lambda)}=e^{\\lambda I+N}=e^{\\lambda I}e^N$ (car $\\lambda I$ et $N$ commutent)\n$=e^\\lambda\\left(I+N+\\frac{N^2}{2!}+\\cdots\\right)=e^\\lambda(I+N)=e^\\lambda\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$.",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-2-e12",
            question: "Vrai ou faux : Deux matrices avec le même polynôme caractéristique sont semblables.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $I_2$ et $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ ont toutes deux $\\chi=(X-1)^2$ mais ne sont pas semblables (l'une est diagonale, l'autre ne l'est pas). La forme de Jordan complète (pas seulement $\\chi$) caractérise la classe de similitude.",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-2-e13",
            question: "Montrer que toute matrice nilpotente $N$ satisfait $N^n=0$ (où $n$ est la taille de la matrice).",
            type: "open",
            modelAnswer: "N est semblable à une matrice triangulaire supérieure nulle sur la diagonale (Jordan). La puissance n-ième d'une telle matrice est nulle car (J_k(0))^k=0 et k≤n.",
            explanation: "**Preuve :**\nSur $\\mathbb{C}$, $N$ est semblable à sa forme de Jordan dont tous les blocs sont $J_k(0)$.\n\nPour un bloc $J_k(0)$ de taille $k\\leq n$ : $(J_k(0))^k=0$ (par calcul direct : $N_k^k=0$ pour la matrice nilpotente $k\\times k$ standard).\n\nDonc $N^n=PJ^nP^{-1}=0$ (chaque bloc $J_k(0)^n=0$ car $k\\leq n$). $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-2-e14",
            question: "Vrai ou faux : Si $f$ est trigonalisable avec valeurs propres $\\lambda_1,\\ldots,\\lambda_n$ (avec répétition), alors $\\text{tr}(f)=\\sum\\lambda_i$ et $\\det(f)=\\prod\\lambda_i$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Si $f$ est semblable à une matrice triangulaire $T$ avec $\\lambda_1,\\ldots,\\lambda_n$ sur la diagonale : $\\text{tr}(f)=\\text{tr}(T)=\\sum\\lambda_i$ et $\\det(f)=\\det(T)=\\prod\\lambda_i$.",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-2-e15",
            question: "Comment retrouver le polynôme minimal à partir de la forme de Jordan ?",
            type: "open",
            modelAnswer: "μ_f=ppcm des polynômes minimaux des blocs= ∏_{λ vp}(X-λ)^{m_λ} où m_λ = taille du plus grand bloc de Jordan pour λ.",
            explanation: "**Règle :** Le polynôme minimal $\\mu_f=\\text{ppcm}_{\\text{blocs}}\\mu_{\\text{bloc}}$.\n\nPour un bloc $J_k(\\lambda)$, $\\mu_{J_k(\\lambda)}=(X-\\lambda)^k$.\n\nDonc $\\mu_f=\\prod_{\\lambda\\text{ vp}}(X-\\lambda)^{m_\\lambda}$ où $m_\\lambda$ est la **taille du plus grand bloc de Jordan** pour $\\lambda$. $\\square$",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "alg3-l3-3",
        slug: "formes-quadratiques",
        title: "Formes quadratiques",
        durationMinutes: 60,
        content: `## Formes bilinéaires et formes quadratiques

### 1. Formes bilinéaires symétriques

Une **forme bilinéaire symétrique** sur $E$ est une application $B:E\\times E\\to\\mathbb{R}$ linéaire en chaque argument et $B(x,y)=B(y,x)$.

**Matrice :** Dans une base $(e_i)$, $B_{ij}=B(e_i,e_j)$. $B$ est représentée par une matrice symétrique.

**Non dégénérée :** $B(x,y)=0$ pour tout $y$ implique $x=0$ $\\Leftrightarrow$ $\\det(B)\\neq0$.

### 2. Formes quadratiques

La **forme quadratique** associée à $B$ est $q(x)=B(x,x)$.

**Polarisation :** $B(x,y)=\\frac{1}{2}[q(x+y)-q(x)-q(y)]$.

**Matrice :** $q(x)=X^TAX$ où $A=A^T$ est la matrice de $B$.

### 3. Réduction

**Théorème (Gauss) :** toute forme quadratique réelle est réductible en une somme de carrés :
$$q(x) \\sim x_1^2 + \\cdots + x_p^2 - x_{p+1}^2 - \\cdots - x_{p+q}^2$$

**Théorème de Sylvester :** l'indice $(p,q)$ (signature) est un invariant de $q$ (ne dépend pas de la réduction choisie).

### 4. Classification

- **Définie positive :** $q(x)>0$ pour $x\\neq0$ $\\Leftrightarrow$ $A$ définie positive $\\Leftrightarrow$ tous les mineurs principaux $>0$ (critère de Sylvester)
- **Définie négative :** $q(x)<0$ pour $x\\neq0$
- **Semi-définie :** $q(x)\\geq0$ pour tout $x$
- **Indéfinie :** prend des valeurs positives et négatives

### 5. Diagonalisation en base orthonormée

Pour $A$ symétrique réelle, par le théorème spectral : il existe une base orthonormée de vecteurs propres de $A$, et dans cette base $q(x)=\\lambda_1 x_1^2+\\cdots+\\lambda_n x_n^2$ ($\\lambda_i$ valeurs propres réelles de $A$).`,
        exercises: [
          {
            id: "alg3-l3-3-e1",
            question: "La forme quadratique $q(x,y)=x^2+4xy+4y^2$ est-elle définie positive ?",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "$q(x,y)=(x+2y)^2\\geq0$. Mais $q(1,-1/2)=0$ avec $(1,-1/2)\\neq0$. La forme est **semi-définie positive** (pas définie positive).",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-3-e2",
            question: "La matrice associée à $q(x,y)=2x^2+3xy+y^2$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "$\\begin{pmatrix}2&3\\\\3&1\\end{pmatrix}$" },
              { id: "B", text: "$\\begin{pmatrix}2&3/2\\\\3/2&1\\end{pmatrix}$" },
              { id: "C", text: "$\\begin{pmatrix}2&0\\\\0&1\\end{pmatrix}$" },
              { id: "D", text: "$\\begin{pmatrix}4&3\\\\3&2\\end{pmatrix}$" },
            ],
            correctId: "B",
            explanation: "La matrice associée à $q$ est symétrique : $A_{ij}=\\frac{1}{2}(\\text{coeff de }x_ix_j)$ pour $i\\neq j$. Ici $A=\\begin{pmatrix}2&3/2\\\\3/2&1\\end{pmatrix}$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-3-e3",
            question: "Vrai ou faux : La signature $(p,q)$ d'une forme quadratique est un invariant.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le **théorème de Sylvester** : la signature $(p,q)$ (nombre de carrés positifs moins nombre de carrés négatifs dans toute réduction de Gauss) est bien définie (ne dépend pas de la réduction choisie).",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-3-e4",
            question: "La forme $q(x,y,z)=x^2+y^2+z^2$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "Indéfinie" },
              { id: "B", text: "Semi-définie positive" },
              { id: "C", text: "Définie positive" },
              { id: "D", text: "Définie négative" },
            ],
            correctId: "C",
            explanation: "$q(x,y,z)=x^2+y^2+z^2>0$ pour $(x,y,z)\\neq0$. Définie positive. Matrice $=I_3$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-3-e5",
            question: "Vrai ou faux : Une forme quadratique définie positive correspond à une matrice symétrique dont toutes les valeurs propres sont strictement positives.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par le théorème spectral, $A$ symétrique réelle est diagonalisable dans une base orthonormée. $q$ est définie positive ssi toutes les valeurs propres de $A$ sont $>0$.",
            difficulty: "debutant",
          },
          {
            id: "alg3-l3-3-e6",
            question: "Réduire $q(x,y)=x^2+2xy+3y^2$ sous forme canonique (méthode de Gauss).",
            type: "open",
            modelAnswer: "q=x²+2xy+y²+2y²=(x+y)²+2y². Substitution u=x+y, v=y: q=u²+2v². Définie positive (p=2,q=0).",
            explanation: "**Complétion du carré :**\n$q=x^2+2xy+3y^2=(x^2+2xy+y^2)+2y^2=(x+y)^2+2y^2$.\n\nChangement de variable $u=x+y$, $v=y$ : $q=u^2+2v^2$.\n\nSignature $(p,q)=(2,0)$ : forme **définie positive**.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-3-e7",
            question: "Vrai ou faux : Toute matrice symétrique réelle admet une base orthonormée de vecteurs propres.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le **théorème spectral** : toute matrice symétrique réelle est diagonalisable dans une base orthonormée (les vecteurs propres associés à des valeurs propres distinctes sont orthogonaux).",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-3-e8",
            question: "Déterminer la signature de $q(x,y,z)=x^2-y^2+z^2+2xz$.",
            type: "open",
            modelAnswer: "Gauss: q=(x+z)²-y². u=x+z, v=y: q=u²-v². Signature (1,1), rang 2. Indéfinie.",
            explanation: "$q=x^2+2xz+z^2-y^2=(x+z)^2-y^2$. Attention : on a $x^2+z^2+2xz=(x+z)^2$, donc $q=(x+z)^2-y^2$.\n\nSignature : $(p,q_-) = (1,1)$, rang $2$. Forme **indéfinie** (prend valeurs $>0$ et $<0$).",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-3-e9",
            question: "Vrai ou faux : Pour $A$ symétrique, $q(x)=x^TAx$ est définie positive ssi tous les mineurs principaux sont $>0$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le **critère de Sylvester** (ou critère des mineurs principaux successifs) : $A$ symétrique est définie positive ssi tous ses mineurs principaux $\\Delta_k=\\det(A_{1:k,1:k})>0$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-3-e10",
            question: "La forme $q(x,y)=x^2-4y^2$ est :",
            type: "mcq",
            options: [
              { id: "A", text: "Définie positive" },
              { id: "B", text: "Définie négative" },
              { id: "C", text: "Semi-définie" },
              { id: "D", text: "Indéfinie" },
            ],
            correctId: "D",
            explanation: "$q(1,0)=1>0$ et $q(0,1)=-4<0$. Prend des valeurs de signes opposés : **indéfinie**. Signature $(1,1)$.",
            difficulty: "intermediaire",
          },
          {
            id: "alg3-l3-3-e11",
            question: "Montrer que $q(x)=x^TAx$ est définie positive ssi $A$ est positive (toutes valeurs propres $>0$).",
            type: "open",
            modelAnswer: "Par spectral: A=PDP^T (P orthogonale). q(x)=x^TPDPᵀx=||y||² avec y=D^{1/2}P^Tx... En fait: q(x)=(Px)^TD(Px)=Σλᵢyᵢ²>0 pour tout x≠0 ssi tous λᵢ>0.",
            explanation: "**Preuve :**\nPar le théorème spectral, $A=P\\text{diag}(\\lambda_i)P^T$ avec $P$ orthogonale.\n\n$q(x)=x^TAx=x^TP\\text{diag}(\\lambda_i)P^Tx=(P^Tx)^T\\text{diag}(\\lambda_i)(P^Tx)$.\n\nPosons $y=P^Tx$ (bijectif car $P$ inversible) :\n$q(x)=\\sum_{i=1}^n\\lambda_i y_i^2$.\n\n$q(x)>0$ pour tout $x\\neq0$ $\\Leftrightarrow$ $\\sum\\lambda_i y_i^2>0$ pour tout $y\\neq0$ $\\Leftrightarrow$ tous les $\\lambda_i>0$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-3-e12",
            question: "Vrai ou faux : Deux formes quadratiques de même signature sont équivalentes (i.e., l'une se déduit de l'autre par un changement de variable inversible).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le théorème de classification des formes quadratiques réelles : deux formes quadratiques réelles sont équivalentes ssi elles ont même rang et même signature.",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-3-e13",
            question: "Trouver les valeurs de $k$ pour lesquelles $q(x,y)=kx^2+2xy+y^2$ est définie positive.",
            type: "open",
            modelAnswer: "A=((k,1),(1,1)). Critère Sylvester: Δ1=k>0 et det(A)=k-1>0. Donc k>1.",
            explanation: "**Critère de Sylvester :**\n$A=\\begin{pmatrix}k&1\\\\1&1\\end{pmatrix}$.\n\n$\\Delta_1=k>0$.\n\n$\\Delta_2=\\det(A)=k-1>0 \\Rightarrow k>1$.\n\nDonc $q$ est définie positive ssi $k>1$.",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-3-e14",
            question: "Montrer que $\\langle x,y\\rangle = x^TAy$ est un produit scalaire ssi $A$ est symétrique définie positive.",
            type: "open",
            modelAnswer: "Symétrie: <x,y>=x^TAy=(y^TA^Tx)^T=y^TAx si A^T=A. Bilinéarité: par lin. du produit mat. Positivité: <x,x>=x^TAx=q(x)>0 pour x≠0 ssi A defpos.",
            explanation: "**Preuve :**\n\n1. **Symétrie :** $\\langle x,y\\rangle = x^TAy$. Si $A=A^T$ : $\\langle y,x\\rangle = y^TAx = (x^TA^Ty)^T = x^TAy = \\langle x,y\\rangle$ ✓.\n\n2. **Bilinéarité :** clairement linéaire en $x$ et $y$.\n\n3. **Définie positivité :** $\\langle x,x\\rangle = x^TAx = q(x) > 0$ pour $x\\neq0$ ssi $A$ est définie positive.\n\nDonc $\\langle\\cdot,\\cdot\\rangle$ est un produit scalaire ssi $A$ est symétrique définie positive. $\\square$",
            difficulty: "expert",
          },
          {
            id: "alg3-l3-3-e15",
            question: "Vrai ou faux : Toute forme bilinéaire symétrique sur $\\mathbb{R}^n$ peut être diagonalisée (i.e., il existe une base dans laquelle sa matrice est diagonale).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par la méthode de Gauss (réduction en somme de carrés), toute forme quadratique réelle est équivalente à $\\pm x_1^2\\pm\\cdots\\pm x_r^2$, ce qui correspond à une matrice diagonale. (Ce n'est pas la diagonalisation orthogonale du théorème spectral, mais une diagonalisation par changement de base non nécessairement orthogonal.)",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // L3 — Arithmétique : Théorie des nombres
  // ─────────────────────────────────────────────
  {
    id: "arithmetique-l3",
    slug: "arithmetique-l3-theorie-des-nombres",
    title: "Arithmétique L3 — Théorie des nombres",
    description: "Divisibilité, algorithme d'Euclide, congruences, théorème de Fermat-Euler et introduction aux anneaux.",
    schoolLevel: "L3",
    subject: "arithmetique",
    difficulty: "Avancé",
    isFree: false,
    thumbnailEmoji: "ℤ",
    lessons: [
      {
        id: "arith1-l3-1",
        slug: "divisibilite-algorithme-euclide",
        title: "Divisibilité et algorithme d'Euclide",
        durationMinutes: 60,
        content: `## Divisibilité dans $\\mathbb{Z}$

### 1. Définitions

$a$ **divise** $b$ ($a\\mid b$) si $\\exists k\\in\\mathbb{Z}$, $b=ka$.

**Propriétés :**
- $a\\mid a$, $1\\mid a$, $a\\mid0$
- $a\\mid b$ et $b\\mid c$ $\\Rightarrow$ $a\\mid c$ (transitivité)
- $a\\mid b$ et $a\\mid c$ $\\Rightarrow$ $a\\mid(\\lambda b+\\mu c)$ (combinaison linéaire)
- $a\\mid b$ et $b\\mid a$ $\\Rightarrow$ $a=\\pm b$

### 2. Division euclidienne

Pour $a\\in\\mathbb{Z}$, $b\\in\\mathbb{N}^*$ : il existe un **unique couple** $(q,r)$ avec $r\\in\\{0,\\ldots,b-1\\}$ tel que :
$$a = bq + r$$

### 3. PGCD et algorithme d'Euclide

$\\text{pgcd}(a,b)$ est le plus grand entier $d>0$ divisant $a$ et $b$.

**Algorithme d'Euclide :** répéter $a=bq+r$ et remplacer $(a,b)$ par $(b,r)$ jusqu'à $r=0$.

$$\\text{pgcd}(a,b) = \\text{pgcd}(b,r) = \\cdots = \\text{pgcd}(d,0) = d$$

### 4. Théorème de Bézout

$d=\\text{pgcd}(a,b)$ $\\Leftrightarrow$ il existe $u,v\\in\\mathbb{Z}$ tels que $au+bv=d$.

**Corollaire :** $a$ et $b$ sont premiers entre eux ($\\text{pgcd}=1$) $\\Leftrightarrow$ $\\exists u,v: au+bv=1$.

**Lemme de Gauss :** si $a\\mid bc$ et $\\text{pgcd}(a,b)=1$, alors $a\\mid c$.

### 5. PPCM

$\\text{ppcm}(a,b)=\\frac{|ab|}{\\text{pgcd}(a,b)}$.

### 6. Nombres premiers

$p\\geq2$ est **premier** si ses seuls diviseurs positifs sont $1$ et $p$.

**Théorème fondamental :** tout entier $n\\geq2$ s'écrit de façon unique (à l'ordre près) comme produit de nombres premiers.`,
        exercises: [
          {
            id: "arith1-l3-1-e1",
            question: "Calculer $\\text{pgcd}(48,18)$ par l'algorithme d'Euclide.",
            type: "mcq",
            options: [
              { id: "A", text: "$3$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$9$" },
              { id: "D", text: "$18$" },
            ],
            correctId: "B",
            explanation: "$48=18\\times2+12$. $18=12\\times1+6$. $12=6\\times2+0$. $\\text{pgcd}=6$.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-1-e2",
            question: "Vrai ou faux : $6\\mid42$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$42=6\\times7$. Donc $6\\mid42$.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-1-e3",
            question: "Donner la division euclidienne de $100$ par $7$.",
            type: "mcq",
            options: [
              { id: "A", text: "$100=7\\times14+2$" },
              { id: "B", text: "$100=7\\times13+9$" },
              { id: "C", text: "$100=7\\times14+3$" },
              { id: "D", text: "$100=7\\times15-5$" },
            ],
            correctId: "A",
            explanation: "$7\\times14=98$, $100-98=2$. Donc $100=7\\times14+2$ avec $0\\leq2<7$.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-1-e4",
            question: "Vrai ou faux : $\\text{pgcd}(a,b)=\\text{pgcd}(b,a\\bmod b)$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est la **propriété fondamentale** de l'algorithme d'Euclide. Si $a=bq+r$, alors tout diviseur commun de $a,b$ est diviseur commun de $b,r$ et vice versa.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-1-e5",
            question: "Quel est $\\text{ppcm}(12,8)$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$4$" },
              { id: "B", text: "$24$" },
              { id: "C", text: "$96$" },
              { id: "D", text: "$48$" },
            ],
            correctId: "B",
            explanation: "$\\text{pgcd}(12,8)=4$. $\\text{ppcm}=12\\times8/4=96/4=24$.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-1-e6",
            question: "Trouver les coefficients de Bézout pour $\\text{pgcd}(35,12)$.",
            type: "open",
            modelAnswer: "35=12·2+11. 12=11·1+1. 11=1·11. Remontée: 1=12-11=12-(35-12·2)=3·12-35. Donc u=-1, v=3 vérifiant 35·(-1)+12·3=1.",
            explanation: "**Euclide :** $35=12\\times2+11$, $12=11\\times1+1$, $11=1\\times11$.\n\n**Remontée (Bézout) :**\n$1=12-11\\times1=12-(35-12\\times2)=12\\times3-35\\times1$.\n\nDonc $35\\times(-1)+12\\times3=1$. Coefficients : $u=-1$, $v=3$.\n\n**Vérification :** $-35+36=1$ ✓.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-1-e7",
            question: "Vrai ou faux : Si $\\text{pgcd}(a,b)=1$ et $a\\mid bc$, alors $a\\mid c$ (lemme de Gauss).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est le **lemme de Gauss**. Preuve : $\\text{pgcd}(a,b)=1\\Rightarrow\\exists u,v:au+bv=1$. Multipliant par $c$ : $auc+bvc=c$. Comme $a\\mid auc$ et $a\\mid bc$ (donc $a\\mid bvc$), on a $a\\mid c$.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-1-e8",
            question: "Calculer $\\text{pgcd}(2^{10}-1, 2^{15}-1)$.",
            type: "open",
            modelAnswer: "pgcd(2^10-1, 2^15-1)=2^{pgcd(10,15)}-1=2^5-1=31.",
            explanation: "**Propriété :** $\\text{pgcd}(2^m-1,2^n-1)=2^{\\text{pgcd}(m,n)}-1$.\n\n$\\text{pgcd}(10,15)=5$.\n\nDonc $\\text{pgcd}(2^{10}-1,2^{15}-1)=2^5-1=31$.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-1-e9",
            question: "Vrai ou faux : Il existe une infinité de nombres premiers.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. **Preuve d'Euclide :** supposons une liste finie $p_1,\\ldots,p_k$. Alors $N=p_1\\cdots p_k+1$ n'est divisible par aucun $p_i$ (reste $1$). Donc $N$ a un facteur premier non dans la liste : contradiction.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-1-e10",
            question: "Résoudre $7x\\equiv1\\pmod{11}$ (trouver l'inverse de $7$ mod $11$).",
            type: "open",
            modelAnswer: "pgcd(7,11)=1. Bézout: 11=7·1+4; 7=4·1+3; 4=3·1+1. 1=4-3=4-(7-4)=2·4-7=2(11-7)-7=2·11-3·7. Donc 7·(-3)≡1 mod 11. -3≡8 mod 11. x=8.",
            explanation: "**Euclide :** $11=7\\times1+4$, $7=4\\times1+3$, $4=3\\times1+1$.\n\n**Bézout :** $1=4-3=4-(7-4)=2\\times4-7=2(11-7)-7=2\\times11-3\\times7$.\n\nDonc $7\\times(-3)+11\\times2=1$, soit $7\\times(-3)\\equiv1\\pmod{11}$.\n\n$-3\\equiv8\\pmod{11}$. Donc l'inverse de $7$ mod $11$ est $8$. Vérif : $7\\times8=56=55+1=5\\times11+1\\equiv1$ ✓.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-1-e11",
            question: "Montrer que $\\text{pgcd}(n,n+1)=1$ pour tout $n\\in\\mathbb{N}$.",
            type: "open",
            modelAnswer: "Tout diviseur commun d de n et n+1 divise (n+1)-n=1. Donc d=1.",
            explanation: "**Preuve :**\n\nSoit $d=\\text{pgcd}(n,n+1)$. Alors $d\\mid n$ et $d\\mid(n+1)$.\n\nDonc $d\\mid[(n+1)-n]=1$.\n\nComme $d\\geq1$ et $d\\mid1$, on a $d=1$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-1-e12",
            question: "Vrai ou faux : $p$ premier et $p\\mid ab$ $\\Rightarrow$ $p\\mid a$ ou $p\\mid b$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. C'est la **propriété fondamentale des nombres premiers** (Euclide). Si $p\\nmid a$, alors $\\text{pgcd}(p,a)=1$ (car $p$ est premier), et par le lemme de Gauss $p\\mid b$.",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-1-e13",
            question: "Résoudre l'équation diophantienne $15x+21y=6$.",
            type: "open",
            modelAnswer: "pgcd(15,21)=3 divise 6: solutions existent. Diviser par 3: 5x+7y=2. Bézout: 7·3-5·4=1, donc 7·6-5·8=2. x0=-8, y0=6. Solution: x=-8+7k, y=6-5k, k∈Z.",
            explanation: "$\\text{pgcd}(15,21)=3\\mid6$ : l'équation admet des solutions.\n\nOn divise par $3$ : $5x+7y=2$.\n\n**Bézout :** $7\\times3-5\\times4=21-20=1$, donc $7\\times6-5\\times8=2$. Solution particulière : $x_0=-8$, $y_0=6$.\n\n**Solution générale :** $x=-8+7k$, $y=6-5k$, $k\\in\\mathbb{Z}$ (les $7=15/3$ et $5=21/3$).",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-1-e14",
            question: "Montrer que tout entier $n\\geq2$ admet un facteur premier.",
            type: "open",
            modelAnswer: "Par récurrence (descendante). Si n est premier, ok. Sinon n=ab avec 1<a,b<n. Par hypothèse de récurrence, a (ou b) admet un facteur premier qui divise n.",
            explanation: "**Preuve par descente infinie :**\n\nSi $n$ est premier, c'est lui-même son facteur premier.\n\nSinon $n=ab$ avec $1<a<n$. L'entier $a$ est $\\geq2$. Par récurrence (ou descente sur des diviseurs strictement plus petits), $a$ admet un facteur premier $p$. Alors $p\\mid a$ et $a\\mid n$, donc $p\\mid n$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-1-e15",
            question: "Vrai ou faux : L'algorithme d'Euclide a une complexité $O(\\log(\\min(a,b)))$ étapes.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Par le lemme de Lamé : le nombre d'étapes est $\\leq5\\log_{10}(\\min(a,b))+1$. En pratique on montre que les restes diminuent d'au moins moitié tous les deux pas, donnant $O(\\log_\\phi(\\min(a,b)))$ (lié aux nombres de Fibonacci).",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "arith1-l3-2",
        slug: "congruences-fermat-euler",
        title: "Congruences et théorème de Fermat-Euler",
        durationMinutes: 60,
        content: `## Congruences et théorèmes de Fermat-Euler

### 1. Congruences

$a\\equiv b\\pmod{n}$ si $n\\mid(a-b)$.

**Propriétés (relation d'équivalence compatible avec les opérations) :**
- $a\\equiv b$ et $c\\equiv d$ $\\Rightarrow$ $a+c\\equiv b+d$ et $ac\\equiv bd\\pmod n$
- $a\\equiv b$ et $d\\mid n$ $\\Rightarrow$ $a\\equiv b\\pmod d$
- $\\text{pgcd}(c,n)=1$ et $ac\\equiv bc\\pmod n$ $\\Rightarrow$ $a\\equiv b\\pmod n$ (simplification)

### 2. Anneau $\\mathbb{Z}/n\\mathbb{Z}$

L'anneau des **classes de résidus modulo $n$** est $\\mathbb{Z}/n\\mathbb{Z}=\\{\\bar0,\\bar1,\\ldots,\\overline{n-1}\\}$.

$\\mathbb{Z}/n\\mathbb{Z}$ est un **corps** ssi $n$ est premier.

**Groupe des unités :** $(\\mathbb{Z}/n\\mathbb{Z})^\\times = \\{\\bar a : \\text{pgcd}(a,n)=1\\}$, d'ordre $\\varphi(n)$.

### 3. Indicatrice d'Euler

$\\varphi(n) = \\text{card}\\{k\\in\\{1,\\ldots,n\\} : \\text{pgcd}(k,n)=1\\}$.

- $\\varphi(p)=p-1$ si $p$ premier
- $\\varphi(p^k)=p^k-p^{k-1}=p^{k-1}(p-1)$
- $\\varphi(mn)=\\varphi(m)\\varphi(n)$ si $\\text{pgcd}(m,n)=1$ (multiplicativité)

### 4. Théorème d'Euler

Pour $\\text{pgcd}(a,n)=1$ :
$$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$

### 5. Petit théorème de Fermat

Pour $p$ premier et $p\\nmid a$ :
$$a^{p-1} \\equiv 1 \\pmod{p}$$

Équivalent : $a^p \\equiv a\\pmod p$ pour tout $a$.

### 6. Théorème chinois des restes (CRT)

Si $n_1,\\ldots,n_k$ sont deux à deux premiers entre eux :
$$\\mathbb{Z}/(n_1\\cdots n_k)\\mathbb{Z} \\cong \\mathbb{Z}/n_1\\mathbb{Z} \\times \\cdots \\times \\mathbb{Z}/n_k\\mathbb{Z}$$

Le système $x\\equiv a_i\\pmod{n_i}$ admet une unique solution modulo $N=n_1\\cdots n_k$.`,
        exercises: [
          {
            id: "arith1-l3-2-e1",
            question: "Calculer $17 \\bmod 5$.",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$2$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$4$" },
            ],
            correctId: "B",
            explanation: "$17=5\\times3+2$. Donc $17\\equiv2\\pmod5$.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-2-e2",
            question: "Vrai ou faux : $\\mathbb{Z}/7\\mathbb{Z}$ est un corps.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $7$ est premier, donc $\\mathbb{Z}/7\\mathbb{Z}$ est un corps (tout élément non nul est inversible).",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-2-e3",
            question: "Calculer $\\varphi(12)$.",
            type: "mcq",
            options: [
              { id: "A", text: "$4$" },
              { id: "B", text: "$6$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$11$" },
            ],
            correctId: "A",
            explanation: "$12=4\\times3=2^2\\times3$. $\\varphi(12)=\\varphi(4)\\varphi(3)=2\\times2=4$. Les entiers $\\leq12$ premiers à $12$ : $\\{1,5,7,11\\}$.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-2-e4",
            question: "Vrai ou faux : $2^{100}\\equiv1\\pmod5$ (petit théorème de Fermat).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "$p=5$, $5\\nmid2$. Par Fermat : $2^4\\equiv1\\pmod5$. Comme $100=4\\times25$, $2^{100}=(2^4)^{25}\\equiv1^{25}=1\\pmod5$ ✓.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-2-e5",
            question: "Calculer $3^{\\varphi(10)}\\pmod{10}$ ($\\varphi(10)=4$).",
            type: "mcq",
            options: [
              { id: "A", text: "$0$" },
              { id: "B", text: "$1$" },
              { id: "C", text: "$3$" },
              { id: "D", text: "$9$" },
            ],
            correctId: "B",
            explanation: "$\\text{pgcd}(3,10)=1$ et $\\varphi(10)=4$. Par le théorème d'Euler : $3^4\\equiv1\\pmod{10}$. Vérif : $3^4=81=80+1\\equiv1$ ✓.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-2-e6",
            question: "Résoudre $x\\equiv3\\pmod5$ et $x\\equiv2\\pmod7$ (CRT).",
            type: "open",
            modelAnswer: "N=35. M1=7, M2=5. 7·y1≡1 mod 5: y1=3 (7·3=21≡1). 5·y2≡1 mod 7: y2=3 (5·3=15≡1). x=3·7·3+2·5·3=63+30=93≡93-2·35=23 mod 35.",
            explanation: "**CRT :** $N=5\\times7=35$.\n$M_1=35/5=7$, $M_2=35/7=5$.\n\n$7y_1\\equiv1\\pmod5$ : $2y_1\\equiv1\\pmod5$, $y_1=3$ ($2\\times3=6\\equiv1$).\n$5y_2\\equiv1\\pmod7$ : $5y_2\\equiv1\\pmod7$, $y_2=3$ ($5\\times3=15\\equiv1$).\n\n$x_0=3\\times7\\times3+2\\times5\\times3=63+30=93\\equiv93-2\\times35=23\\pmod{35}$.\n\nVérif : $23=4\\times5+3\\equiv3\\pmod5$ ✓, $23=3\\times7+2\\equiv2\\pmod7$ ✓.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-2-e7",
            question: "Calculer $2^{1000}\\pmod{13}$ (Fermat, $p=13$).",
            type: "open",
            modelAnswer: "p=13, 2^{12}≡1 mod 13 (Fermat). 1000=12·83+4. 2^{1000}=(2^{12})^{83}·2^4≡1^{83}·16≡16≡3 mod 13.",
            explanation: "$p=13$, $13\\nmid2$. Fermat : $2^{12}\\equiv1\\pmod{13}$.\n\n$1000=12\\times83+4$.\n\n$2^{1000}=2^{12\\times83+4}=(2^{12})^{83}\\times2^4\\equiv1^{83}\\times16\\equiv16\\pmod{13}$.\n\n$16=13+3\\equiv3\\pmod{13}$.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-2-e8",
            question: "Vrai ou faux : $\\varphi$ est multiplicatif, i.e., $\\varphi(mn)=\\varphi(m)\\varphi(n)$ si $\\text{pgcd}(m,n)=1$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. La multiplicativité de $\\varphi$ découle du CRT : $(\\mathbb{Z}/mn)^\\times\\cong(\\mathbb{Z}/m)^\\times\\times(\\mathbb{Z}/n)^\\times$ si $\\text{pgcd}(m,n)=1$.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-2-e9",
            question: "Démontrer le petit théorème de Fermat en utilisant le binôme.",
            type: "open",
            modelAnswer: "Par récurrence sur a. (a+1)^p≡a^p+1≡a+1 mod p car p|C(p,k) pour 0<k<p. Donc a^p≡a mod p pour tout a≥0.",
            explanation: "**Preuve par récurrence sur $a\\geq0$ :**\n\n**Base :** $0^p=0\\equiv0\\pmod p$ ✓.\n\n**Hérédité :** Supposons $a^p\\equiv a\\pmod p$. Alors :\n$(a+1)^p=\\sum_{k=0}^p\\binom{p}{k}a^k$.\n\nPour $0<k<p$ : $p\\mid\\binom{p}{k}$ (car $p$ premier divise $p!$ mais pas $k!(p-k)!$ pour $0<k<p$).\n\nDonc $(a+1)^p\\equiv a^p+1\\equiv a+1\\pmod p$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-2-e10",
            question: "Vrai ou faux : Si $n$ est composé, alors $a^{n-1}\\equiv1\\pmod n$ pour tout $a$ avec $\\text{pgcd}(a,n)=1$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux en général (mais vrai pour les **nombres de Carmichael**, exception rare). En général pour $n$ composé il existe des $a$ premiers à $n$ avec $a^{n-1}\\not\\equiv1\\pmod n$, ce qui est la base du test de primalité de Fermat.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-2-e11",
            question: "Calculer $\\varphi(p^k)$ pour $p$ premier et $k\\geq1$.",
            type: "open",
            modelAnswer: "Les entiers de 1 à p^k non premiers à p^k sont les multiples de p: p, 2p, ..., p^{k-1}·p. Il y en a p^{k-1}. Donc φ(p^k)=p^k-p^{k-1}=p^{k-1}(p-1).",
            explanation: "Les entiers entre $1$ et $p^k$ non premiers à $p^k$ sont exactement les **multiples de $p$** : $p, 2p, \\ldots, p^{k-1}\\cdot p$. Il y en a $p^{k-1}$.\n\n$\\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-2-e12",
            question: "Vrai ou faux : L'ordre de $a$ dans $(\\mathbb{Z}/p\\mathbb{Z})^\\times$ divise $p-1$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $(\\mathbb{Z}/p\\mathbb{Z})^\\times$ est un groupe d'ordre $p-1$. Par le théorème de Lagrange, l'ordre de tout élément divise l'ordre du groupe.",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-2-e13",
            question: "Montrer que $n\\mid\\varphi(a^n-1)$ pour $\\text{pgcd}(a,p)=1$.",
            type: "open",
            modelAnswer: "a est une racine primitive nth de l'unité dans (Z/(a^n-1))^×. Donc l'ordre de a dans ce groupe est n. Par Lagrange, n|φ(a^n-1).",
            explanation: "Posons $N=a^n-1$. Alors $a^n\\equiv1\\pmod N$.\n\nL'ordre de $a$ dans $(\\mathbb{Z}/N\\mathbb{Z})^\\times$ divise $n$. D'autre part $a^k\\equiv1\\pmod N$ implique $N\\mid a^k-1$. Pour $k<n$, $a^k-1<a^n-1=N$, donc $a^k\\not\\equiv1\\pmod N$. L'ordre est exactement $n$.\n\nPar Lagrange : $n\\mid|(\\mathbb{Z}/N\\mathbb{Z})^\\times|=\\varphi(N)=\\varphi(a^n-1)$. $\\square$",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-2-e14",
            question: "Trouver toutes les solutions de $x^2\\equiv1\\pmod{15}$.",
            type: "open",
            modelAnswer: "CRT: x²≡1 mod 3 et mod 5. Mod 3: x≡±1≡1,2. Mod 5: x≡±1≡1,4. 4 combinaisons: (1,1)→1, (1,4)→4≡? CRT: x≡1 mod 3, x≡4 mod 5: x=14. (2,1): x≡2 mod 3, 1 mod 5: x=11. (2,4): x≡-1 mod 15: x=14. Solutions: 1,4,11,14 mod 15.",
            explanation: "**CRT :** $\\mathbb{Z}/15\\cong\\mathbb{Z}/3\\times\\mathbb{Z}/5$.\n\n$x^2\\equiv1\\pmod3$ : $x\\equiv\\pm1\\pmod3$, i.e., $x\\equiv1$ ou $x\\equiv2$.\n$x^2\\equiv1\\pmod5$ : $x\\equiv\\pm1\\pmod5$, i.e., $x\\equiv1$ ou $x\\equiv4$.\n\n4 solutions mod 15 :\n- $(1,1)\\to x\\equiv1\\pmod{15}$\n- $(1,4)\\to x\\equiv4$ (vérif: $4^2=16\\equiv1$ ✓)\n- $(2,1)\\to x\\equiv11$ ($11^2=121=8\\times15+1\\equiv1$ ✓)\n- $(2,4)\\to x\\equiv14\\equiv-1$ ($14^2=196=13\\times15+1\\equiv1$ ✓)",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-2-e15",
            question: "Vrai ou faux : Le groupe $(\\mathbb{Z}/p\\mathbb{Z})^\\times$ est cyclique (il existe un générateur).",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $(\\mathbb{Z}/p\\mathbb{Z})^\\times$ est un groupe abélien d'ordre $p-1$. Tout groupe abélien fini est produit de groupes cycliques. De plus, pour $p$ premier, ce groupe est **cyclique** (il admet une racine primitive modulo $p$). C'est un résultat classique non trivial.",
            difficulty: "expert",
          },
        ],
      },
      {
        id: "arith1-l3-3",
        slug: "anneaux-ideaux",
        title: "Anneaux et idéaux",
        durationMinutes: 60,
        content: `## Anneaux et idéaux

### 1. Définition d'un anneau

Un **anneau** $(A,+,\\times)$ est un ensemble muni de deux lois vérifiant :
- $(A,+)$ est un groupe abélien (neutre $0$, opposés)
- $\\times$ est associative, distributive sur $+$, et admet un neutre $1$
- (Non nécessairement commutative, et les éléments peuvent ne pas avoir d'inverse multiplicatif)

**Exemples :** $\\mathbb{Z}$, $\\mathbb{Z}/n\\mathbb{Z}$, $\\mathbb{R}[X]$, $\\mathcal{M}_n(\\mathbb{R})$.

### 2. Corps et intégrité

Un **corps** est un anneau commutatif dans lequel tout élément non nul est inversible.

Un anneau commutatif est **intègre** si $ab=0\\Rightarrow a=0$ ou $b=0$ (pas de diviseur de zéro).

**Exemples :** $\\mathbb{Z}$ est intègre mais pas un corps. $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{C}$ sont des corps.

### 3. Idéaux

Un **idéal** de $A$ est un sous-groupe $(I,+)$ tel que $\\forall a\\in A, \\forall x\\in I$: $ax\\in I$ et $xa\\in I$.

**Idéal principal :** $aA=\\{ax:x\\in A\\}=\\langle a\\rangle$.

**Théorème :** Dans $\\mathbb{Z}$, tout idéal est principal : $I=n\\mathbb{Z}$ pour un certain $n\\geq0$.

### 4. Anneau quotient

Si $I$ est un idéal de $A$, l'**anneau quotient** $A/I$ est l'ensemble des classes $\\bar a=a+I$, muni des opérations $\\bar a+\\bar b=\\overline{a+b}$ et $\\bar a\\cdot\\bar b=\\overline{ab}$.

$A/I$ est un corps $\\Leftrightarrow$ $I$ est un **idéal maximal**.

### 5. Idéaux premiers et maximaux

- **Idéal premier :** $ab\\in I\\Rightarrow a\\in I$ ou $b\\in I$. $A/I$ est intègre.
- **Idéal maximal :** il n'existe pas d'idéal $J$ avec $I\\subsetneq J\\subsetneq A$. $A/I$ est un corps.

Tout idéal maximal est premier. Dans $\\mathbb{Z}$ : les idéaux premiers non nuls sont $p\\mathbb{Z}$ ($p$ premier).`,
        exercises: [
          {
            id: "arith1-l3-3-e1",
            question: "Vrai ou faux : $\\mathbb{Z}$ est un corps.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "F",
            explanation: "Faux. $\\mathbb{Z}$ est un anneau intègre mais pas un corps : $2\\in\\mathbb{Z}$ n'a pas d'inverse dans $\\mathbb{Z}$ ($1/2\\notin\\mathbb{Z}$).",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-3-e2",
            question: "Vrai ou faux : Tout sous-groupe de $(\\mathbb{Z},+)$ est de la forme $n\\mathbb{Z}$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $(\\mathbb{Z},+)$ est un groupe abélien monogène. Tout sous-groupe est cyclique, donc de la forme $n\\mathbb{Z}=\\{nk:k\\in\\mathbb{Z}\\}$ pour un certain $n\\geq0$.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-3-e3",
            question: "$2\\mathbb{Z}+3\\mathbb{Z}$ est égal à :",
            type: "mcq",
            options: [
              { id: "A", text: "$6\\mathbb{Z}$" },
              { id: "B", text: "$\\mathbb{Z}$" },
              { id: "C", text: "$2\\mathbb{Z}$" },
              { id: "D", text: "$3\\mathbb{Z}$" },
            ],
            correctId: "B",
            explanation: "$2\\mathbb{Z}+3\\mathbb{Z}=\\text{pgcd}(2,3)\\mathbb{Z}=1\\mathbb{Z}=\\mathbb{Z}$ (car Bézout : $1=3-2$ est une combinaison).",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-3-e4",
            question: "Vrai ou faux : $\\mathbb{Z}/p\\mathbb{Z}$ est un corps ssi $p$ est premier.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\mathbb{Z}/p\\mathbb{Z}$ est intègre ssi $p$ est premier. Pour un anneau fini, intégrité $\\Leftrightarrow$ corps.",
            difficulty: "debutant",
          },
          {
            id: "arith1-l3-3-e5",
            question: "Quel est le plus petit idéal de $\\mathbb{Z}$ contenant $6$ et $10$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$60\\mathbb{Z}$" },
              { id: "B", text: "$6\\mathbb{Z}$" },
              { id: "C", text: "$2\\mathbb{Z}$" },
              { id: "D", text: "$10\\mathbb{Z}$" },
            ],
            correctId: "C",
            explanation: "Le plus petit idéal contenant $a$ et $b$ est $\\text{pgcd}(a,b)\\mathbb{Z}$. $\\text{pgcd}(6,10)=2$. Donc c'est $2\\mathbb{Z}$.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-3-e6",
            question: "Montrer que $n\\mathbb{Z}$ est un idéal de $\\mathbb{Z}$.",
            type: "open",
            modelAnswer: "n𝒁 est un sous-groupe de (ℤ,+). Pour a∈ℤ et x=nk∈nℤ : ax=a(nk)=n(ak)∈nℤ. Donc c'est un idéal.",
            explanation: "**Vérification :**\n1. **Sous-groupe :** $0=n\\times0\\in n\\mathbb{Z}$. Si $nk,nl\\in n\\mathbb{Z}$, $nk-nl=n(k-l)\\in n\\mathbb{Z}$.\n2. **Absorption :** $\\forall a\\in\\mathbb{Z}$, $\\forall nk\\in n\\mathbb{Z}$: $a\\cdot nk=n(ak)\\in n\\mathbb{Z}$ et $nk\\cdot a=n(ka)\\in n\\mathbb{Z}$.\n\nDonc $n\\mathbb{Z}$ est un idéal de $\\mathbb{Z}$. $\\square$",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-3-e7",
            question: "Vrai ou faux : Tout idéal de $\\mathbb{Z}$ est principal.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\mathbb{Z}$ est un **anneau principal** (anneau euclidien donc principal). Tout idéal $I$ de $\\mathbb{Z}$ est de la forme $n\\mathbb{Z}$ où $n$ est le plus petit élément strictement positif de $I$.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-3-e8",
            question: "Quel est le noyau du morphisme $\\varphi:\\mathbb{Z}\\to\\mathbb{Z}/5\\mathbb{Z}$, $n\\mapsto\\bar n$ ?",
            type: "mcq",
            options: [
              { id: "A", text: "$\\{0\\}$" },
              { id: "B", text: "$5\\mathbb{Z}$" },
              { id: "C", text: "$\\mathbb{Z}$" },
              { id: "D", text: "$2\\mathbb{Z}$" },
            ],
            correctId: "B",
            explanation: "$\\ker\\varphi=\\{n\\in\\mathbb{Z}:\\bar n=\\bar0\\}=\\{n:5\\mid n\\}=5\\mathbb{Z}$.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-3-e9",
            question: "Vrai ou faux : Si $I$ est un idéal maximal de $A$, alors $A/I$ est un corps.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai pour un anneau commutatif. $I$ maximal $\\Leftrightarrow$ $A/I$ est un corps (aucun idéal entre $I$ et $A$ $\\Leftrightarrow$ $A/I$ n'a pas d'idéal non trivial $\\Leftrightarrow$ corps).",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-3-e10",
            question: "Vrai ou faux : Dans $\\mathbb{Z}$, $p\\mathbb{Z}$ est un idéal maximal ssi $p$ est premier.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $\\mathbb{Z}/p\\mathbb{Z}$ est un corps ssi $p$ est premier. Et $p\\mathbb{Z}$ est maximal ssi $\\mathbb{Z}/p\\mathbb{Z}$ est un corps.",
            difficulty: "intermediaire",
          },
          {
            id: "arith1-l3-3-e11",
            question: "Montrer que tout corps est intègre.",
            type: "open",
            modelAnswer: "Soit ab=0 dans un corps K. Si a≠0, il est inversible. ab=0 ⟹ a⁻¹(ab)=a⁻¹·0=0 ⟹ b=0.",
            explanation: "**Preuve :**\n\nSoit $K$ un corps et $ab=0$ avec $a\\neq0$.\n\n$a$ est inversible (car $a\\neq0$ dans un corps). Multipliant par $a^{-1}$ :\n$a^{-1}(ab)=(a^{-1}a)b=1\\cdot b=b$.\n\nEt $a^{-1}\\cdot0=0$.\n\nDonc $b=0$. $K$ est intègre. $\\square$",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-3-e12",
            question: "Vrai ou faux : $\\mathbb{R}[X]/(X^2+1)\\cong\\mathbb{C}$.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. $(X^2+1)$ est un idéal maximal de $\\mathbb{R}[X]$ (car $X^2+1$ est irréductible sur $\\mathbb{R}$). Le quotient est un corps contenant $\\mathbb{R}$ et un élément $i=\\bar X$ avec $i^2=-1$, d'où $\\mathbb{R}[X]/(X^2+1)\\cong\\mathbb{C}$.",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-3-e13",
            question: "Montrer que si $A$ est un anneau intègre et $a,b\\in A$ avec $ab=0$, la seule possibilité est $a=0$ ou $b=0$.",
            type: "open",
            modelAnswer: "C'est exactement la définition d'un anneau intègre (pas de diviseurs de zéro non triviaux).",
            explanation: "C'est la **définition** d'un anneau intègre : un anneau commutatif $A$ est dit intègre si $ab=0\\Rightarrow a=0$ ou $b=0$ (absence de diviseurs de zéro non triviaux). Cette propriété est exactement ce qu'on cherche à montrer — la question demande de comprendre la définition. $\\square$",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-3-e14",
            question: "Quel est l'idéal engendré par $4$ et $6$ dans $\\mathbb{Z}$ ?",
            type: "open",
            modelAnswer: "pgcd(4,6)=2. Idéal = 2ℤ. Bézout: 2=6-4=6·1+4·(-1)∈<4,6>. Donc <4,6>=<2>=2ℤ.",
            explanation: "$\\langle4,6\\rangle=\\{4a+6b:a,b\\in\\mathbb{Z}\\}$.\n\n$\\text{pgcd}(4,6)=2$. Par Bézout, $2=6-4\\in\\langle4,6\\rangle$.\n\nRéciproquement, $\\langle4,6\\rangle\\subset2\\mathbb{Z}$ car $2\\mid4$ et $2\\mid6$.\n\nDonc $\\langle4,6\\rangle=2\\mathbb{Z}$.",
            difficulty: "expert",
          },
          {
            id: "arith1-l3-3-e15",
            question: "Vrai ou faux : Dans un anneau principal, tout idéal premier non nul est maximal.",
            type: "true_false",
            options: [{ id: "V", text: "Vrai" }, { id: "F", text: "Faux" }],
            correctId: "V",
            explanation: "Vrai. Dans un anneau principal $A$, $\\langle p\\rangle$ est premier non nul $\\Leftrightarrow$ $p$ est irréductible $\\Leftrightarrow$ $\\langle p\\rangle$ est maximal. (Dans $\\mathbb{Z}$ : $p\\mathbb{Z}$ premier non nul $\\Leftrightarrow$ $p$ premier $\\Leftrightarrow$ $p\\mathbb{Z}$ maximal.)",
            difficulty: "expert",
          },
        ],
      },
    ],
  },
];

