import type { AxisResult } from "./scoring";

interface AxisAnalysis {
  title: string;
  description: string;
}

/**
 * Generate human-readable analysis text for each axis based on the score.
 */
export function analyzeAxis(result: AxisResult): AxisAnalysis {
  const { axis, score } = result;

  const analyses: Record<string, { ranges: [number, number, string, string][] }> = {
    economie: {
      ranges: [
        [0, 25, "Interventionniste convaincu", "Vous pensez que l'État doit jouer un rôle central dans l'économie : services publics forts, redistribution des richesses et encadrement des marchés. Vous vous méfiez du libéralisme économique."],
        [25, 45, "Plutôt interventionniste", "Vous êtes favorable à un État protecteur qui régule l'économie et garantit les services publics, tout en acceptant une part de libre entreprise."],
        [45, 55, "Équilibriste économique", "Vous naviguez entre intervention de l'État et liberté économique. Pragmatique, vous jugez au cas par cas selon les secteurs."],
        [55, 75, "Plutôt libéral", "Vous faites confiance au marché et à l'initiative privée pour créer de la richesse. Vous êtes favorable à la baisse des charges et à moins de réglementation."],
        [75, 101, "Libéral assumé", "Vous êtes convaincu que la liberté économique est le meilleur moteur de prospérité. Moins d'État, moins d'impôts, plus d'entrepreneuriat."],
      ],
    },
    social: {
      ranges: [
        [0, 25, "Conservateur affirmé", "Vous êtes attaché aux valeurs traditionnelles, à l'autorité et à un modèle de société éprouvé. Vous estimez que certaines évolutions sociétales vont trop vite."],
        [25, 45, "Plutôt conservateur", "Vous valorisez la stabilité et les repères traditionnels, tout en acceptant certaines évolutions sociétales quand elles font consensus."],
        [45, 55, "Modéré sur les questions de société", "Vous n'êtes ni dans la tradition ni dans l'avant-garde. Vous évaluez chaque sujet de société avec nuance et pragmatisme."],
        [55, 75, "Plutôt progressiste", "Vous êtes ouvert aux évolutions sociétales et favorable à l'extension des droits individuels, tout en restant mesuré."],
        [75, 101, "Progressiste convaincu", "Vous militez pour une société plus ouverte, plus inclusive et plus égalitaire. Les droits individuels et les libertés sont au cœur de vos convictions."],
      ],
    },
    environnement: {
      ranges: [
        [0, 25, "Productiviste assumé", "Vous pensez que la croissance économique et le progrès technologique priment sur les contraintes environnementales. La sobriété n'est pas votre priorité."],
        [25, 45, "Plutôt productiviste", "Vous êtes sensible à l'environnement mais refusez que les contraintes écologiques freinent l'économie et le quotidien des Français."],
        [45, 55, "Écologie pragmatique", "Vous reconnaissez l'urgence climatique mais cherchez un équilibre entre écologie et réalité économique. Le nucléaire ne vous fait pas peur."],
        [55, 75, "Plutôt écologiste", "La transition écologique est une priorité pour vous. Vous acceptez des changements de mode de vie pour préserver la planète."],
        [75, 101, "Écologiste convaincu", "L'environnement est votre combat. Vous êtes prêt à des mesures fortes — même contraignantes — pour limiter le réchauffement climatique et protéger la biodiversité."],
      ],
    },
    europe: {
      ranges: [
        [0, 25, "Souverainiste affirmé", "Vous estimez que la France doit reprendre le contrôle de ses frontières, sa monnaie et ses lois. L'UE a trop de pouvoir sur notre souveraineté."],
        [25, 45, "Plutôt souverainiste", "Vous êtes critique envers l'UE et pensez que la France devrait avoir plus de marge de manœuvre, sans nécessairement quitter l'Union."],
        [45, 55, "Européen pragmatique", "Vous reconnaissez les avantages de l'UE tout en pointant ses limites. Ni europhile béat, ni eurosceptique radical."],
        [55, 75, "Plutôt européen", "Vous croyez au projet européen et souhaitez approfondir la coopération, notamment sur la défense et l'économie."],
        [75, 101, "Fédéraliste convaincu", "Vous rêvez d'une Europe plus intégrée, avec un budget commun, une armée européenne et des décisions prises à la majorité. Plus d'Europe, pas moins."],
      ],
    },
    securite: {
      ranges: [
        [0, 25, "Libertaire affirmé", "Les libertés individuelles sont sacrées à vos yeux. Vous vous méfiez de la surveillance, des lois sécuritaires et du renforcement des pouvoirs policiers."],
        [25, 45, "Plutôt libertaire", "Vous privilégiez la prévention à la répression et êtes vigilant sur les atteintes aux libertés, même au nom de la sécurité."],
        [45, 55, "Équilibre sécurité-libertés", "Vous cherchez un juste milieu entre sécurité et libertés. Pragmatique, vous acceptez certaines mesures sécuritaires si elles sont proportionnées."],
        [55, 75, "Plutôt sécuritaire", "Vous êtes favorable à plus de fermeté : plus de moyens pour la police, des peines plus lourdes et une justice plus rapide."],
        [75, 101, "Sécuritaire convaincu", "La sécurité est votre priorité absolue. Tolérance zéro, peines planchers, moyens massifs pour les forces de l'ordre. L'autorité de l'État doit être restaurée."],
      ],
    },
    immigration: {
      ranges: [
        [0, 25, "Ouverture totale", "Vous êtes favorable à une politique d'accueil généreuse, au droit d'asile élargi et à la libre circulation. L'immigration est une richesse."],
        [25, 45, "Plutôt ouvert", "Vous êtes favorable à l'accueil des réfugiés et à l'intégration, tout en reconnaissant que des limites peuvent être nécessaires."],
        [45, 55, "Position nuancée", "Vous ne tombez dans aucun extrême sur l'immigration. Accueil oui, mais avec des conditions et des moyens d'intégration."],
        [55, 75, "Plutôt restrictif", "Vous estimez que la France doit mieux maîtriser ses flux migratoires et renforcer les conditions d'intégration."],
        [75, 101, "Restrictif assumé", "Vous êtes pour une réduction forte de l'immigration, un contrôle strict des frontières et des conditions d'accès à la nationalité plus exigeantes."],
      ],
    },
  };

  const axisData = analyses[axis];
  if (!axisData) {
    return { title: result.label, description: "" };
  }

  for (const [min, max, title, description] of axisData.ranges) {
    if (score >= min && score < max) {
      return { title, description };
    }
  }

  return { title: result.label, description: "" };
}

/**
 * Generate a canvas-based shareable card image.
 * Returns a data URL (PNG).
 */
export function generateShareCard(
  results: AxisResult[],
  topMatchName: string,
  topMatchParty: string,
  topMatchPct: number,
  topMatchColor: string
): string {
  const W = 1200;
  const H = 630;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#4f46e5");
  bg.addColorStop(0.5, "#6366f1");
  bg.addColorStop(1, "#818cf8");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Decorative circles
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(100, 80, 200, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W - 100, H - 80, 250, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Branding
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = "600 18px Inter, system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("BOUSSOLE2027.COM", 50, 50);

  // "Mon candidat le plus proche"
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.font = "500 20px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("MON CANDIDAT LE PLUS PROCHE", W / 2, 100);

  // Top match name
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 52px Inter, system-ui, sans-serif";
  ctx.fillText(topMatchName, W / 2, 165);

  // Party
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = "500 22px Inter, system-ui, sans-serif";
  ctx.fillText(topMatchParty, W / 2, 200);

  // Compatibility badge
  const badgeW = 220;
  const badgeH = 55;
  const badgeX = W / 2 - badgeW / 2;
  const badgeY = 220;
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.beginPath();
  ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 30);
  ctx.fill();
  ctx.fillStyle = "#fbbf24";
  ctx.font = "800 28px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`${topMatchPct}%`, W / 2 - 30, badgeY + 37);
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.font = "500 18px Inter, system-ui, sans-serif";
  ctx.fillText("compatible", W / 2 + 50, badgeY + 37);

  // Radar chart (mini version)
  const radarCx = 200;
  const radarCy = 440;
  const radarR = 100;
  const n = results.length;

  // Grid
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 3; ring++) {
    const r = (radarR / 3) * ring;
    ctx.beginPath();
    ctx.arc(radarCx, radarCy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Data polygon
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (results[i].score / 100) * radarR;
    const x = radarCx + Math.cos(angle) * r;
    const y = radarCy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.fill();
  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Points + labels
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (results[i].score / 100) * radarR;
    const x = radarCx + Math.cos(angle) * r;
    const y = radarCy + Math.sin(angle) * r;

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fbbf24";
    ctx.fill();

    // Label
    const lx = radarCx + Math.cos(angle) * (radarR + 20);
    const ly = radarCy + Math.sin(angle) * (radarR + 20);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.font = "500 12px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(results[i].label, lx, ly);
  }

  // Axis bars (right side)
  const barsX = 420;
  const barsY = 330;
  const barW = 700;
  const barH = 14;
  const barGap = 42;

  results.forEach((r, i) => {
    const y = barsY + i * barGap;

    // Label
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.font = "600 14px Inter, system-ui, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`${r.emoji} ${r.label}`, barsX, y);

    // Score
    ctx.textAlign = "right";
    ctx.fillStyle = "#fbbf24";
    ctx.font = "700 14px Inter, system-ui, sans-serif";
    ctx.fillText(`${r.score}%`, barsX + barW, y);

    // Bar background
    const barStartX = barsX + 140;
    const actualBarW = barW - 190;
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.beginPath();
    ctx.roundRect(barStartX, y + 8, actualBarW, barH, 7);
    ctx.fill();

    // Bar fill
    ctx.fillStyle = r.color;
    ctx.beginPath();
    ctx.roundRect(barStartX, y + 8, actualBarW * (r.score / 100), barH, 7);
    ctx.fill();

    // Poles
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "400 10px Inter, system-ui, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(r.poleLeft, barStartX, y + 35);
    ctx.textAlign = "right";
    ctx.fillText(r.poleRight, barStartX + actualBarW, y + 35);
  });

  // Footer CTA
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "500 16px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Faites le test sur boussole2027.com", W / 2, H - 25);

  return canvas.toDataURL("image/png");
}
