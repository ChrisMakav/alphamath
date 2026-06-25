export interface PodcastEpisode {
  slug: string;
  episodeNumber: number;
  title: string;
  summary: string;
  topics: string[];
  readingMinutes: number;
  publishedAt: string; // ISO date
  content: string; // Markdown, rendu via MathContent
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    slug: "structurer-une-revision-efficace",
    episodeNumber: 1,
    title: "Comment structurer une révision efficace avant un contrôle",
    summary:
      "Trois jours avant un contrôle, par où commencer ? L'équipe AlphaMath détaille une méthode concrète pour organiser ses dernières révisions sans paniquer ni se disperser.",
    topics: ["Organisation", "Gestion du temps", "Avant un contrôle"],
    readingMinutes: 5,
    publishedAt: "2026-02-12",
    content: `## Avant toute chose : faire l'inventaire

La première erreur, quand un contrôle approche, est de se remettre à tout réviser depuis le début. Mieux vaut commencer par un inventaire rapide : qu'est-ce qui est déjà solide, qu'est-ce qui reste flou ? Reprendre le cahier de cours et trier les notions en deux colonnes — « je sais refaire sans aide » et « j'ai besoin de revoir » — suffit en général à gagner un temps précieux.

## Prioriser, ne pas tout réviser à égalité

Tout le programme ne se vaut pas pour un contrôle donné. Repérer les notions qui reviennent le plus souvent dans les exercices déjà faits en classe, et celles explicitement annoncées par l'enseignant, permet de concentrer l'effort là où il rapporte le plus.

## J-3, J-2, J-1 : répartir plutôt qu'empiler

- **J-3** : retravailler les notions les plus floues, en reprenant des exercices déjà corrigés.
- **J-2** : s'entraîner sur des exercices nouveaux du même type, en conditions proches du contrôle (sans regarder le cours).
- **J-1** : relire ses fiches de formules, sans en apprendre de nouvelles, et se coucher tôt plutôt que de tenter une dernière session tardive.

## Le jour J

Arriver avec une stratégie de gestion du temps (lire tout le sujet avant de commencer, traiter d'abord les exercices maîtrisés) compte autant que la révision elle-même. Voir notre article sur la [lecture méthodique d'un énoncé](/blog/lire-un-enonce-sans-paniquer) pour aller plus loin sur ce point précis.`,
  },
  {
    slug: "brevet-bac-ce-que-regardent-les-correcteurs",
    episodeNumber: 2,
    title: "Brevet et Bac : ce que les correcteurs regardent vraiment",
    summary:
      "Une bonne réponse mal présentée peut perdre des points, et une réponse incomplète peut en gagner. L'équipe AlphaMath revient sur les attentes réelles des grilles de correction.",
    topics: ["Examens", "Méthodologie de rédaction", "Brevet & Bac"],
    readingMinutes: 4,
    publishedAt: "2026-02-26",
    content: `## La rédaction compte autant que le résultat

Sur la plupart des grilles de correction du Brevet et du Bac, le résultat final ne représente qu'une partie des points disponibles. Une grande partie du barème récompense la **démarche** : avoir identifié la bonne méthode, même si le calcul final comporte une erreur, rapporte presque toujours des points.

## Justifier, même quand « ça semble évident »

Une affirmation correcte mais non justifiée ne rapporte en général aucun point. Écrire explicitement le théorème ou la propriété utilisée (« d'après le théorème de Pythagore », « car la fonction est dérivable sur cet intervalle ») est ce qui distingue une réponse juste d'une réponse juste **et reconnue comme telle** par le correcteur.

## Ne jamais laisser une question blanche

Une réponse partielle — même une simple amorce, un schéma, ou la formule de départ sans le calcul complet — peut rapporter des points partiels. Une copie blanche, elle, en rapporte zéro à coup sûr.

## Soigner la présentation finale

Encadrer ou souligner le résultat final, écrire les unités, et structurer sa copie par question numérotée facilite la tâche du correcteur — et un correcteur qui retrouve facilement l'information cherchée est, en pratique, plus indulgent sur la forme.`,
  },
  {
    slug: "mathematiques-et-anxiete-scolaire",
    episodeNumber: 3,
    title: "Mathématiques et anxiété scolaire : comprendre pour mieux accompagner",
    summary:
      "Pourquoi un contrôle de mathématiques déclenche-t-il autant de stress, même chez de bons élèves ? L'équipe AlphaMath explore les mécanismes de l'anxiété mathématique et les leviers pour la désamorcer.",
    topics: ["Anxiété mathématique", "Psychologie de l'apprentissage", "Parents & enseignants"],
    readingMinutes: 5,
    publishedAt: "2026-03-15",
    content: `## Un phénomène documenté, pas une fatalité individuelle

L'anxiété mathématique est un phénomène largement étudié en psychologie de l'éducation : elle touche des élèves de tous niveaux, y compris ceux qui réussissent bien dans d'autres matières. Elle ne traduit pas un manque de capacité, mais une réaction de stress apprise, souvent renforcée par une mauvaise expérience passée (une mauvaise note marquante, une remarque blessante, une comparaison avec un camarade).

## Pourquoi les mathématiques en particulier ?

Contrairement à d'autres matières, une erreur en mathématiques est souvent perçue comme binaire : juste ou faux, sans nuance intermédiaire. Cette perception — pourtant fausse, puisque la démarche compte énormément — alimente une peur de l'erreur disproportionnée par rapport à l'enjeu réel d'un exercice d'entraînement.

## Ce que les parents et enseignants peuvent observer

Quelques signes qui méritent attention : évitement systématique des devoirs de mathématiques, douleurs physiques (maux de ventre, de tête) les jours de contrôle, ou phrases du type « je suis nul en maths » généralisées à partir d'un seul échec ponctuel.

## Des leviers concrets

Valoriser la démarche plutôt que la seule note, normaliser l'erreur comme étape naturelle de l'apprentissage, et proposer un entraînement régulier en petites doses (voir notre article sur la [méthode des séries](/blog/methode-des-series-pratique-quotidienne)) sont des leviers qui ont montré leur efficacité pour réduire progressivement cette anxiété.

Si l'anxiété devient handicapante au quotidien, en parler à l'enseignant, au conseiller d'orientation ou à un professionnel de santé scolaire reste la démarche la plus indiquée.`,
  },
];

export function getPodcastEpisodeBySlug(slug: string): PodcastEpisode | undefined {
  return PODCAST_EPISODES.find((e) => e.slug === slug);
}
