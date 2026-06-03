"use client";

import type { ReactNode, RefObject } from "react";
import { useMemo } from "react";

import { buildHeroWavePaths, HERO_WAVE_VIEWBOX } from "@/lib/hero-wave-paths";
import { useHeroWaistAlign } from "@/lib/hooks/useHeroWaistAlign";

const HERO_BG = "#d0cce9";
const HERO_PANEL = "#0f0d1d";

const WRAPPER_CLASS =
  "pointer-events-none absolute top-0 right-0 hidden h-full w-[54%] min-w-[420px] lg:block";

function WaveLayer({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={`${WRAPPER_CLASS} ${className}`} aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${HERO_WAVE_VIEWBOX.w} ${HERO_WAVE_VIEWBOX.h}`}
        preserveAspectRatio="none"
      >
        {children}
      </svg>
    </div>
  );
}

type HeroWaveBackgroundProps = {
  sectionRef: RefObject<HTMLElement | null>;
  portraitRef: RefObject<HTMLElement | null>;
};

export function HeroWaveBackground({
  sectionRef,
  portraitRef,
}: HeroWaveBackgroundProps) {
  const waistY = useHeroWaistAlign(sectionRef, portraitRef);
  const { panelPath, waistMaskPath } = useMemo(
    () => buildHeroWavePaths(waistY),
    [waistY],
  );

  return (
    <>
      <WaveLayer className="z-0">
        <path fill={HERO_PANEL} d={panelPath} />
      </WaveLayer>

      <WaveLayer className="z-20">
        <path fill={HERO_BG} d={waistMaskPath} />
      </WaveLayer>
    </>
  );
}
