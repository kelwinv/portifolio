"use client";

import { useEffect, useRef, type RefObject } from "react";

function canUseParallax() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches &&
    window.matchMedia("(pointer: fine)").matches
  );
}

export function useMouseParallax<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el || !canUseParallax()) return;

    const applyTransform = () => {
      const { x, y } = currentRef.current;
      el.style.setProperty("--parallax-x", String(x));
      el.style.setProperty("--parallax-y", String(y));
      frameRef.current = null;
    };

    const tick = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      if (
        Math.abs(target.x - current.x) > 0.001 ||
        Math.abs(target.y - current.y) > 0.001
      ) {
        applyTransform();
        frameRef.current = requestAnimationFrame(tick);
      } else {
        current.x = target.x;
        current.y = target.y;
        applyTransform();
      }
    };

    const scheduleTick = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = (event.clientX - centerX) / (rect.width / 2);
      const normY = (event.clientY - centerY) / (rect.height / 2);

      targetRef.current = {
        x: Math.max(-1, Math.min(1, normX)),
        y: Math.max(-1, Math.min(1, normY)),
      };
      scheduleTick();
    };

    const handleLeave = () => {
      targetRef.current = { x: 0, y: 0 };
      scheduleTick();
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return ref;
}
