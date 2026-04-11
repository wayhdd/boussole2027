import type { Axis } from "../data/questions";
import { questions, axes } from "../data/questions";
import { politicians } from "../data/politicians";
import type { Politician } from "../data/politicians";

/** Answer values: 1 = Pas du tout d'accord ... 5 = Tout à fait d'accord */
export type AnswerValue = 1 | 2 | 3 | 4 | 5;
export type Answers = Record<number, AnswerValue>;

export interface AxisResult {
  axis: Axis;
  label: string;
  poleLeft: string;
  poleRight: string;
  /** 0 = fully left pole, 100 = fully right pole */
  score: number;
  color: string;
  emoji: string;
}

/**
 * Compute results from user answers.
 * Each answer is mapped to a -2..+2 scale relative to the axis direction,
 * then normalized to 0..100 per axis.
 */
export function computeResults(answers: Answers): AxisResult[] {
  const axisScores: Record<Axis, { total: number; count: number }> = {} as any;

  for (const a of axes) {
    axisScores[a.id] = { total: 0, count: 0 };
  }

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;

    // Convert 1-5 Likert to -2..+2
    const normalized = answer - 3; // -2, -1, 0, 1, 2
    // Apply direction: positive moves toward right pole
    const directed = normalized * q.direction;

    axisScores[q.axis].total += directed;
    axisScores[q.axis].count += 1;
  }

  return axes.map((a) => {
    const { total, count } = axisScores[a.id];
    // Average is in -2..+2, map to 0..100
    const avg = count > 0 ? total / count : 0;
    const score = Math.round(((avg + 2) / 4) * 100);

    return {
      axis: a.id,
      label: a.label,
      poleLeft: a.poleLeft,
      poleRight: a.poleRight,
      score: Math.max(0, Math.min(100, score)),
      color: a.color,
      emoji: a.emoji,
    };
  });
}

/**
 * Encode results as a compact URL-safe string for sharing.
 * Format: comma-separated scores (0-100) in axis order.
 */
export function encodeResults(results: AxisResult[]): string {
  return results.map((r) => r.score).join(",");
}

/**
 * Decode results from a URL parameter string.
 */
export function decodeResults(encoded: string): AxisResult[] | null {
  const parts = encoded.split(",").map(Number);
  if (parts.length !== axes.length || parts.some(isNaN)) return null;

  return axes.map((a, i) => ({
    axis: a.id,
    label: a.label,
    poleLeft: a.poleLeft,
    poleRight: a.poleRight,
    score: Math.max(0, Math.min(100, parts[i])),
    color: a.color,
    emoji: a.emoji,
  }));
}

export interface PoliticianMatch {
  politician: Politician;
  /** 0-100 compatibility percentage */
  compatibility: number;
}

/**
 * Match user results against politician profiles.
 * Uses inverse Euclidean distance normalized to 0-100%.
 */
export function matchPoliticians(results: AxisResult[]): PoliticianMatch[] {
  const userScores: Record<Axis, number> = {} as any;
  for (const r of results) {
    userScores[r.axis] = r.score;
  }

  const matches = politicians.map((p) => {
    // Euclidean distance across all axes (max possible ~245 for 6 axes with 0-100 range)
    let sumSq = 0;
    for (const a of axes) {
      const diff = userScores[a.id] - p.scores[a.id];
      sumSq += diff * diff;
    }
    const distance = Math.sqrt(sumSq);
    const maxDistance = Math.sqrt(6 * 100 * 100); // ~244.9
    const compatibility = Math.round((1 - distance / maxDistance) * 100);

    return {
      politician: p,
      compatibility: Math.max(0, Math.min(100, compatibility)),
    };
  });

  return matches.sort((a, b) => b.compatibility - a.compatibility);
}
