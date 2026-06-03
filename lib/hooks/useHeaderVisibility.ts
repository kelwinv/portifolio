"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_DELTA = 8;
const TOP_THRESHOLD = 16;

export function useHeaderVisibility(forceVisible = false) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      return;
    }

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY <= TOP_THRESHOLD) {
        setVisible(true);
      } else if (diff > SCROLL_DELTA) {
        setVisible(false);
      } else if (diff < -SCROLL_DELTA) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceVisible]);

  return visible;
}
