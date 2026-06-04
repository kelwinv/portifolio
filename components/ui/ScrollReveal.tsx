"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import type { ReactNode } from "react";

import { fadeUp, revealTransition, viewportOnce } from "@/lib/motion/variants";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  ...props
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={variants}
      transition={delay > 0 ? { ...revealTransition, delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
