import type { Axis } from "./questions";

export interface Politician {
  id: string;
  name: string;
  party: string;
  partyShort: string;
  color: string;
  /** Scores on each axis (0-100, same scale as user results) */
  scores: Record<Axis, number>;
}

/**
 * Political profiles of major French political figures.
 * Scores are editorial estimates based on public positions and voting records.
 * 0 = fully left pole, 100 = fully right pole of each axis.
 */
export const politicians: Politician[] = [
  {
    id: "melenchon",
    name: "Jean-Luc Mélenchon",
    party: "La France Insoumise",
    partyShort: "LFI",
    color: "#cc2443",
    scores: {
      economie: 10,
      social: 88,
      environnement: 82,
      europe: 22,
      securite: 18,
      immigration: 12,
    },
  },
  {
    id: "roussel",
    name: "Fabien Roussel",
    party: "Parti Communiste Français",
    partyShort: "PCF",
    color: "#dd0000",
    scores: {
      economie: 12,
      social: 55,
      environnement: 42,
      europe: 30,
      securite: 45,
      immigration: 40,
    },
  },
  {
    id: "glucksmann",
    name: "Raphaël Glucksmann",
    party: "Place Publique / PS",
    partyShort: "PP-PS",
    color: "#ff8080",
    scores: {
      economie: 30,
      social: 82,
      environnement: 78,
      europe: 90,
      securite: 32,
      immigration: 28,
    },
  },
  {
    id: "toussaint",
    name: "Marine Tondelier",
    party: "Europe Écologie Les Verts",
    partyShort: "EELV",
    color: "#00c000",
    scores: {
      economie: 22,
      social: 90,
      environnement: 95,
      europe: 75,
      securite: 20,
      immigration: 15,
    },
  },
  {
    id: "bayrou",
    name: "François Bayrou",
    party: "Mouvement Démocrate",
    partyShort: "MoDem",
    color: "#ff9900",
    scores: {
      economie: 60,
      social: 58,
      environnement: 48,
      europe: 78,
      securite: 52,
      immigration: 50,
    },
  },
  {
    id: "philippe",
    name: "Édouard Philippe",
    party: "Horizons",
    partyShort: "HOR",
    color: "#0098d4",
    scores: {
      economie: 72,
      social: 62,
      environnement: 45,
      europe: 80,
      securite: 62,
      immigration: 58,
    },
  },
  {
    id: "wauquiez",
    name: "Laurent Wauquiez",
    party: "Les Républicains",
    partyShort: "LR",
    color: "#0066cc",
    scores: {
      economie: 75,
      social: 28,
      environnement: 25,
      europe: 42,
      securite: 78,
      immigration: 78,
    },
  },
  {
    id: "bardella",
    name: "Jordan Bardella",
    party: "Rassemblement National",
    partyShort: "RN",
    color: "#0d2f6b",
    scores: {
      economie: 38,
      social: 18,
      environnement: 22,
      europe: 15,
      securite: 88,
      immigration: 90,
    },
  },
  {
    id: "lepen",
    name: "Marine Le Pen",
    party: "Rassemblement National",
    partyShort: "RN",
    color: "#1a3a7a",
    scores: {
      economie: 35,
      social: 20,
      environnement: 25,
      europe: 18,
      securite: 85,
      immigration: 88,
    },
  },
  {
    id: "lisnard",
    name: "David Lisnard",
    party: "Nouvelle Énergie pour la France",
    partyShort: "NEF",
    color: "#2563eb",
    scores: {
      economie: 82,
      social: 35,
      environnement: 30,
      europe: 55,
      securite: 70,
      immigration: 72,
    },
  },
  {
    id: "zemmour",
    name: "Éric Zemmour",
    party: "Reconquête",
    partyShort: "R!",
    color: "#1a1a2e",
    scores: {
      economie: 65,
      social: 8,
      environnement: 12,
      europe: 10,
      securite: 95,
      immigration: 95,
    },
  },
];
