import {
  buildHeroWavePaths,
  HERO_WAVE_VIEWBOX,
  waistYFromPortrait,
} from "@/lib/hero-wave-paths";

describe("buildHeroWavePaths", () => {
  it("keeps the waist mask edge on the same curve as the panel bottom", () => {
    const waistY = 640;
    const { panelPath, waistMaskPath } = buildHeroWavePaths(waistY);

    expect(panelPath).toContain(`210 ${waistY}`);
    expect(waistMaskPath).toContain(`210 ${waistY}`);
    expect(panelPath).toContain("720");
    expect(waistMaskPath).toContain("720");
  });
});

describe("waistYFromPortrait", () => {
  it("maps portrait waist position into viewBox coordinates", () => {
    const sectionRect = {
      top: 0,
      height: 900,
    } as DOMRect;
    const portraitRect = {
      top: 120,
      height: 500,
    } as DOMRect;

    const waistY = waistYFromPortrait(sectionRect, portraitRect, 0.5);

    expect(waistY).toBeCloseTo(((120 + 250) / 900) * HERO_WAVE_VIEWBOX.h, 1);
  });
});
