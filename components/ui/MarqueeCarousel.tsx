"use client";

import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import {
  Children,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type MarqueeCarouselProps = {
  ariaLabel: string;
  children: ReactNode;
  duration?: number;
  className?: string;
};

function wrapMarqueeX(value: number, halfWidth: number): number {
  if (halfWidth <= 0) return value;
  let wrapped = value % halfWidth;
  if (wrapped > 0) wrapped -= halfWidth;
  return wrapped;
}

export function MarqueeCarousel({
  ariaLabel,
  children,
  duration = 50,
  className,
}: MarqueeCarouselProps) {
  const items = Children.toArray(children);
  const slideCount = items.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [halfWidth, setHalfWidth] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const measureTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setHalfWidth(track.scrollWidth / 2);
  }, []);

  useEffect(() => {
    measureTrack();
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(measureTrack);
    observer.observe(track);
    return () => observer.disconnect();
  }, [measureTrack, slideCount]);

  useAnimationFrame((_, delta) => {
    if (reducedMotion || paused || isDragging || halfWidth <= 0) return;

    const pixelsPerMs = halfWidth / (duration * 1000);
    const next = wrapMarqueeX(x.get() - pixelsPerMs * delta, halfWidth);
    x.set(next);
  });

  const handleDragEnd = () => {
    setIsDragging(false);
    if (halfWidth > 0) {
      x.set(wrapMarqueeX(x.get(), halfWidth));
    }
  };

  if (slideCount === 0) return null;

  const duplicatedItems = [...items, ...items];
  const autoScrollActive = !reducedMotion && !paused && !isDragging;

  if (reducedMotion) {
    return (
      <div
        className={cn(
          "overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          className,
        )}
        aria-label={ariaLabel}
      >
        <div ref={trackRef} className="flex w-max gap-6">
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("relative w-full", className)}
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setIsDragging(false);
      }}
    >
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className={cn(
            "flex w-max cursor-grab gap-6 active:cursor-grabbing",
            isDragging && "cursor-grabbing",
          )}
          style={{ x }}
          drag="x"
          dragConstraints={
            halfWidth > 0 ? { left: -halfWidth, right: 0 } : undefined
          }
          dragElastic={0.08}
          dragMomentum
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          aria-live={autoScrollActive ? "off" : "polite"}
        >
          {duplicatedItems.map((item, index) => (
            <div key={`marquee-${index % slideCount}-${index}`}>{item}</div>
          ))}
        </motion.div>
      </div>

      <p className="mt-4 text-center font-['Poppins:Regular',sans-serif] text-xs text-[#d0cce9]/60">
        Arraste para explorar · passe o mouse para pausar
      </p>
    </div>
  );
}
