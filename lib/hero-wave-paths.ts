export const HERO_WAVE_VIEWBOX = { w: 720, h: 900 } as const;

export const HERO_WAIST_RATIO = 0.53;

const DEFAULT_WAIST_Y = 695;

function bottomEndY(waistY: number) {
  return waistY + (HERO_WAVE_VIEWBOX.h - waistY) * 0.25;
}

export function buildHeroWavePaths(waistY = DEFAULT_WAIST_Y) {
  const endY = bottomEndY(waistY);
  const curveDepth = endY - waistY;

  const panelLeftEdge = `M220 0 C180 500 260 500 500 335 C170 ${waistY * 0.67} 290 ${waistY * 0.82} 210 ${waistY}`;
  const panelBottomCurve = `C170 ${waistY + curveDepth * 0.51} 240 ${waistY + curveDepth * 0.9} 720 ${endY}`;

  const panelPath = `${panelLeftEdge} ${panelBottomCurve} L720 ${HERO_WAVE_VIEWBOX.h} L720 0 Z`;

  const waistMaskPath = `M0 ${HERO_WAVE_VIEWBOX.h} L720 ${HERO_WAVE_VIEWBOX.h} L720 ${endY} C240 ${waistY + curveDepth * 0.9} 170 ${waistY + curveDepth * 0.51} 210 ${waistY} L0 ${waistY} Z`;

  return { panelPath, waistMaskPath };
}

export function waistYFromPortrait(
  sectionRect: DOMRect,
  portraitRect: DOMRect,
  ratio = HERO_WAIST_RATIO,
) {
  const waistScreenY = portraitRect.top + portraitRect.height * ratio;
  const normalized = (waistScreenY - sectionRect.top) / sectionRect.height;

  return Math.min(
    HERO_WAVE_VIEWBOX.h * 0.88,
    Math.max(HERO_WAVE_VIEWBOX.h * 0.35, normalized * HERO_WAVE_VIEWBOX.h),
  );
}
