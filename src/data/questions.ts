export type Axis =
  | "economie"
  | "social"
  | "environnement"
  | "europe"
  | "securite"
  | "immigration";

export interface Question {
  id: number;
  text: string;
  axis: Axis;
  /** +1 means "agree" pushes toward the first pole, -1 toward the second */
  direction: 1 | -1;
}

export interface AxisInfo {
  id: Axis;
  label: string;
  poleLeft: string;
  poleRight: string;
  color: string;
  emoji: string;
}

export const axes: AxisInfo[] = [
  {
    id: "economie",
    label: "Economie",
    poleLeft: "Interventionnisme",
    poleRight: "Libéralisme",
    color: "#ef4444",
    emoji: "💰",
  },
  {
    id: "social",
    label: "Société",
    poleLeft: "Conservatisme",
    poleRight: "Progressisme",
    color: "#a855f7",
    emoji: "👥",
  },
  {
    id: "environnement",
    label: "Environnement",
    poleLeft: "Productivisme",
    poleRight: "Écologisme",
    color: "#22c55e",
    emoji: "🌍",
  },
  {
    id: "europe",
    label: "Europe",
    poleLeft: "Souverainisme",
    poleRight: "Fédéralisme",
    color: "#3b82f6",
    emoji: "🇪🇺",
  },
  {
    id: "securite",
    label: "Sécurité",
    poleLeft: "Libertaire",
    poleRight: "Autoritaire",
    color: "#f97316",
    emoji: "🛡️",
  },
  {
    id: "immigration",
    label: "Immigration",
    poleLeft: "Ouverture",
    poleRight: "Restriction",
    color: "#06b6d4",
    emoji: "🌐",
  },
];

export const questions: Question[] = [
  // --- Économie (5 questions) ---
  {
    id: 1,
    text: "L'État devrait nationaliser les secteurs stratégiques comme l'énergie et les transports.",
    axis: "economie",
    direction: -1,
  },
  {
    id: 2,
    text: "Baisser les charges des entreprises est le meilleur moyen de créer de l'emploi.",
    axis: "economie",
    direction: 1,
  },
  {
    id: 3,
    text: "Le SMIC devrait être significativement augmenté, même si cela pèse sur les entreprises.",
    axis: "economie",
    direction: -1,
  },
  {
    id: 4,
    text: "La concurrence libre et non faussée profite à l'ensemble de la société.",
    axis: "economie",
    direction: 1,
  },
  {
    id: 5,
    text: "Les services publics doivent rester gratuits ou à prix très bas, même si cela augmente les impôts.",
    axis: "economie",
    direction: -1,
  },

  // --- Société (5 questions) ---
  {
    id: 6,
    text: "La PMA et la GPA devraient être accessibles à toutes et tous sans restriction.",
    axis: "social",
    direction: 1,
  },
  {
    id: 7,
    text: "Les valeurs traditionnelles et familiales sont le ciment de la société.",
    axis: "social",
    direction: -1,
  },
  {
    id: 8,
    text: "L'écriture inclusive est une avancée nécessaire pour l'égalité.",
    axis: "social",
    direction: 1,
  },
  {
    id: 9,
    text: "La légalisation du cannabis serait bénéfique pour la société française.",
    axis: "social",
    direction: 1,
  },
  {
    id: 10,
    text: "L'école devrait davantage transmettre le respect de l'autorité et de la discipline.",
    axis: "social",
    direction: -1,
  },

  // --- Environnement (5 questions) ---
  {
    id: 11,
    text: "La croissance économique doit être limitée pour protéger l'environnement.",
    axis: "environnement",
    direction: 1,
  },
  {
    id: 12,
    text: "Le nucléaire est indispensable pour la transition énergétique.",
    axis: "environnement",
    direction: -1,
  },
  {
    id: 13,
    text: "Il faut interdire les vols intérieurs quand une alternative en train existe en moins de 4h.",
    axis: "environnement",
    direction: 1,
  },
  {
    id: 14,
    text: "Les normes environnementales pénalisent trop les entreprises françaises.",
    axis: "environnement",
    direction: -1,
  },
  {
    id: 15,
    text: "La consommation de viande devrait être réduite, y compris via des mesures politiques.",
    axis: "environnement",
    direction: 1,
  },

  // --- Europe (5 questions) ---
  {
    id: 16,
    text: "La France devrait approfondir l'intégration européenne, y compris sur le plan fiscal.",
    axis: "europe",
    direction: 1,
  },
  {
    id: 17,
    text: "La France devrait pouvoir déroger aux règles de l'UE quand ses intérêts vitaux sont en jeu.",
    axis: "europe",
    direction: -1,
  },
  {
    id: 18,
    text: "Une armée européenne commune serait une bonne chose.",
    axis: "europe",
    direction: 1,
  },
  {
    id: 19,
    text: "L'euro a été globalement néfaste pour l'économie française.",
    axis: "europe",
    direction: -1,
  },
  {
    id: 20,
    text: "Les décisions importantes en Europe devraient être prises à la majorité plutôt qu'à l'unanimité.",
    axis: "europe",
    direction: 1,
  },

  // --- Sécurité (5 questions) ---
  {
    id: 21,
    text: "La vidéosurveillance dans les espaces publics est nécessaire pour la sécurité.",
    axis: "securite",
    direction: 1,
  },
  {
    id: 22,
    text: "Les libertés individuelles ne devraient jamais être sacrifiées au nom de la sécurité.",
    axis: "securite",
    direction: -1,
  },
  {
    id: 23,
    text: "Les peines de prison devraient être plus longues et plus sévères.",
    axis: "securite",
    direction: 1,
  },
  {
    id: 24,
    text: "La police devrait avoir plus de moyens et plus de pouvoirs.",
    axis: "securite",
    direction: 1,
  },
  {
    id: 25,
    text: "La prévention est plus efficace que la répression pour lutter contre la délinquance.",
    axis: "securite",
    direction: -1,
  },

  // --- Immigration (5 questions) ---
  {
    id: 26,
    text: "La France accueille trop d'immigrés par rapport à ses capacités d'intégration.",
    axis: "immigration",
    direction: 1,
  },
  {
    id: 27,
    text: "L'immigration est une chance pour l'économie et la culture française.",
    axis: "immigration",
    direction: -1,
  },
  {
    id: 28,
    text: "Le droit du sol devrait être remis en question.",
    axis: "immigration",
    direction: 1,
  },
  {
    id: 29,
    text: "Les sans-papiers qui travaillent en France devraient pouvoir être régularisés.",
    axis: "immigration",
    direction: -1,
  },
  {
    id: 30,
    text: "Les frontières de l'espace Schengen doivent être renforcées.",
    axis: "immigration",
    direction: 1,
  },

  // --- Économie (3 questions supplémentaires) ---
  {
    id: 31,
    text: "L'âge de départ à la retraite devrait être repoussé pour équilibrer les comptes.",
    axis: "economie",
    direction: 1,
  },
  {
    id: 32,
    text: "Un impôt sur la fortune est indispensable pour réduire les inégalités.",
    axis: "economie",
    direction: -1,
  },
  {
    id: 33,
    text: "Le marché régule mieux l'économie que l'État.",
    axis: "economie",
    direction: 1,
  },

  // --- Société (3 questions supplémentaires) ---
  {
    id: 34,
    text: "La laïcité doit être appliquée de manière plus stricte dans l'espace public.",
    axis: "social",
    direction: -1,
  },
  {
    id: 35,
    text: "Les quotas de diversité dans les entreprises sont une mesure juste.",
    axis: "social",
    direction: 1,
  },
  {
    id: 36,
    text: "Le modèle familial traditionnel doit être davantage soutenu par l'État.",
    axis: "social",
    direction: -1,
  },

  // --- Environnement (2 questions supplémentaires) ---
  {
    id: 37,
    text: "Il faudrait taxer davantage les produits importés ayant une forte empreinte carbone.",
    axis: "environnement",
    direction: 1,
  },
  {
    id: 38,
    text: "L'agriculture intensive est nécessaire pour nourrir la population.",
    axis: "environnement",
    direction: -1,
  },

  // --- Europe (2 questions supplémentaires) ---
  {
    id: 39,
    text: "La France devrait contribuer davantage au budget européen pour soutenir les pays membres en difficulté.",
    axis: "europe",
    direction: 1,
  },
  {
    id: 40,
    text: "Les traités de libre-échange négociés par l'UE menacent notre souveraineté économique.",
    axis: "europe",
    direction: -1,
  },

  // --- Sécurité (3 questions supplémentaires) ---
  {
    id: 41,
    text: "Le renseignement devrait pouvoir surveiller les communications en ligne pour prévenir le terrorisme.",
    axis: "securite",
    direction: 1,
  },
  {
    id: 42,
    text: "Les mineurs délinquants devraient être jugés comme des adultes pour les crimes graves.",
    axis: "securite",
    direction: 1,
  },
  {
    id: 43,
    text: "La réinsertion des détenus devrait être la priorité de notre système pénal.",
    axis: "securite",
    direction: -1,
  },

  // --- Immigration (2 questions supplémentaires) ---
  {
    id: 44,
    text: "L'apprentissage du français devrait être obligatoire et vérifié pour tout titre de séjour.",
    axis: "immigration",
    direction: 1,
  },
  {
    id: 45,
    text: "La France a un devoir moral d'accueillir les réfugiés qui fuient les guerres.",
    axis: "immigration",
    direction: -1,
  },
];
