"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

import { HERO_WAIST_RATIO, waistYFromPortrait } from "@/lib/hero-wave-paths";

const DEFAULT_WAIST_Y = 695;

export function useHeroWaistAlign(
  sectionRef: RefObject<HTMLElement | null>,
  portraitRef: RefObject<HTMLElement | null>,
) {
  const [waistY, setWaistY] = useState(DEFAULT_WAIST_Y);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const portrait = portraitRef.current;
    if (!section || !portrait) return;

    const measure = () => {
      const sectionRect = section.getBoundingClientRect();
      const portraitRect = portrait.getBoundingClientRect();

      if (sectionRect.height === 0 || portraitRect.height === 0) return;

      setWaistY(
        waistYFromPortrait(sectionRect, portraitRect, HERO_WAIST_RATIO),
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(section);
    observer.observe(portrait);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [sectionRef, portraitRef]);

  return waistY;
}
