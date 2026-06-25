export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingMinutes: number;
  publishedAt: string; // ISO date
  content: string; // Markdown + LaTeX, rendu via MathContent
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "vaincre-anxiete-mathematique",
    title: "Vaincre l'anxiété mathématique : 7 stratégies qui fonctionnent vraiment",
    category: "Méthode",
    excerpt:
      "L'anxiété mathématique n'est pas un manque de talent : c'est une réaction apprise, et elle se désapprend. Voici 7 stratégies concrètes pour reprendre confiance face à un exercice.",
    readingMinutes: 6,
    publishedAt: "2026-03-10",
    content: `L'anxiété mathématique touche une grande partie des élèves, et elle n'a rien à voir avec le niveau réel en mathématiques. Des recherches en sciences cognitives montrent qu'elle mobilise les mêmes circuits cérébraux que la douleur physique : face à un exercice, le cerveau réagit comme face à une menace, ce qui réduit la mémoire de travail disponible pour réfléchir. Bonne nouvelle : comme toute réaction apprise, elle peut être désapprise.

## 1. Nommer ce qui se passe

La première étape consiste simplement à reconnaître la sensation : « je sens mon cœur s'accélérer, mes pensées s'emballent ». Mettre des mots sur l'anxiété la rend moins envahissante et permet de revenir plus vite à l'exercice.

## 2. Séparer la difficulté de l'échec

Un exercice difficile n'est pas un exercice échoué. La difficulté est le signal que l'on est en train d'apprendre quelque chose de nouveau, pas la preuve d'une incapacité.

## 3. Commencer par ce qu'on sait

Face à un énoncé qui semble inabordable, il est tentant de rester bloqué sur la première ligne. Mieux vaut lister ce que l'on sait déjà : les données de l'énoncé, les formules qui pourraient s'appliquer, un exemple plus simple du même type. Cela réactive la mémoire de travail au lieu de la saturer.

## 4. Découper le problème

Un grand problème de mathématiques se résout rarement d'un seul bloc. Le découper en sous-questions plus petites (« qu'est-ce que je dois calculer en premier ? ») redonne un sentiment de contrôle.

## 5. S'entraîner par petites doses régulières

Les séances de révision marathon augmentent la fatigue et donc l'anxiété. Des séances courtes et régulières (voir notre article sur la [méthode des séries](/blog/methode-des-series-pratique-quotidienne)) permettent de progresser sans épuiser ses ressources mentales.

## 6. Changer son rapport à l'erreur

> « Une erreur n'est pas la fin du raisonnement, c'est une information sur l'étape suivante. »

Relire une correction en se demandant « à quel moment précis ai-je bifurqué ? » transforme l'erreur en outil de progression plutôt qu'en sanction.

## 7. Préparer le jour de l'évaluation

L'anxiété de performance se prépare aussi en amont : relire ses fiches de formules la veille (sans en apprendre de nouvelles), arriver avec une stratégie de gestion du temps, et commencer par les exercices que l'on maîtrise le mieux pour entrer en confiance.

⚠ Aucune de ces stratégies ne remplace un accompagnement professionnel si l'anxiété devient handicapante au quotidien. Dans ce cas, en parler à un enseignant, un conseiller d'orientation ou un professionnel de santé scolaire est la bonne démarche.`,
  },
  {
    slug: "methode-des-series-pratique-quotidienne",
    title: "La méthode des séries : pourquoi 15 minutes par jour battent 3 heures le dimanche",
    category: "Méthode",
    excerpt:
      "La science de l'apprentissage est claire : répartir sa pratique dans le temps fonctionne mieux qu'une session intensive. Voici pourquoi, et comment construire sa propre série.",
    readingMinutes: 5,
    publishedAt: "2026-03-24",
    content: `Beaucoup d'élèves révisent les mathématiques en une seule grande session, souvent la veille d'un contrôle. C'est pourtant l'une des stratégies les moins efficaces pour la mémorisation à long terme, et la recherche en psychologie cognitive le démontre depuis plusieurs décennies.

## Répétition espacée contre session intensive

Deux phénomènes bien documentés expliquent pourquoi de courtes sessions régulières fonctionnent mieux :

- **L'effet d'espacement** : une notion revue à intervalles croissants (aujourd'hui, puis dans 2 jours, puis dans une semaine) se consolide bien mieux en mémoire à long terme qu'une notion revue plusieurs fois d'affilée le même jour.
- **L'effet d'entrelacement** : alterner entre plusieurs types d'exercices (au lieu d'enchaîner 20 exercices identiques) force le cerveau à se demander « quelle méthode s'applique ici ? », ce qui renforce la compréhension plutôt que la simple mémorisation d'un geste.

## Concrètement, à quoi ressemble une série ?

Une série efficace n'a pas besoin d'être longue :

1. **10 à 15 minutes par jour**, plutôt que 2 heures une fois par semaine.
2. **Un mélange de notions** : une partie de révision (ce qui a déjà été vu), une partie de nouveauté.
3. **Une trace de la régularité** : cocher les jours, suivre une série en cours — le simple fait de visualiser sa régularité renforce la motivation à ne pas la rompre.

## Et si on rate un jour ?

Une série interrompue n'efface pas les progrès déjà faits. L'objectif n'est pas la perfection mais la régularité moyenne : reprendre dès le lendemain compte largement plus que de culpabiliser sur le jour manqué.

Sur AlphaMath, le suivi de série et les points d'expérience quotidiens de votre [tableau de bord](/dashboard) sont conçus exactement pour ça : rendre visible une régularité qui, individuellement, paraît minuscule jour après jour, mais qui change tout sur la durée d'une année scolaire.`,
  },
  {
    slug: "lire-un-enonce-sans-paniquer",
    title: "Comment lire un énoncé de mathématiques sans paniquer : la méthode en 4 étapes",
    category: "Technique d'examen",
    excerpt:
      "Beaucoup de blocages en mathématiques ne viennent pas d'un manque de méthode de calcul, mais d'une mauvaise lecture de l'énoncé. Voici une méthode simple en 4 étapes.",
    readingMinutes: 5,
    publishedAt: "2026-04-02",
    content: `Face à un énoncé long ou inhabituel, le réflexe le plus courant est de se lancer immédiatement dans un calcul, au risque de partir dans une mauvaise direction. Une lecture méthodique en 4 étapes permet d'éviter ce piège.

## Étape 1 — Lire l'énoncé en entier, sans écrire

La première lecture sert uniquement à comprendre le contexte général : de quoi parle ce problème ? Inutile de commencer à poser des calculs dès la première phrase.

## Étape 2 — Lister ce que l'on sait

À la deuxième lecture, on relève toutes les données numériques et toutes les hypothèses, par exemple :

$$f(x) = 2x^2 - 3x + 1, \\quad x \\in \\mathbb{R}$$

Noter chaque donnée au brouillon, même celle qui paraît évidente, évite d'en oublier une en cours de résolution.

## Étape 3 — Identifier précisément la question

« Démontrer que », « calculer », « déterminer pour quelles valeurs de $x$ »... la formulation exacte de la question oriente la méthode à utiliser. Une erreur fréquente est de répondre à une question voisine de celle posée plutôt qu'à la question exacte.

## Étape 4 — Repérer le type de problème

Avant de calculer, se demander : « est-ce que j'ai déjà vu un exercice qui ressemble à celui-ci ? » Reconnaître le type de problème (équation du second degré, étude de fonction, probabilités conditionnelles...) permet de mobiliser directement la bonne méthode au lieu de la chercher en avançant à l'aveugle.

> Un exercice de mathématiques se résout rarement « en lisant en avançant ». Il se résout en comprenant d'abord où l'on doit arriver, puis en construisant le chemin pour y aller.

Cette méthode prend à peine une minute de plus qu'une lecture rapide, mais elle évite la majorité des erreurs de débutant : mauvaise donnée oubliée, mauvaise question traitée, ou méthode mal choisie dès le départ.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
