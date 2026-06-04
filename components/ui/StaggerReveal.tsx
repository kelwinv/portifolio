"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import type { ReactNode } from "react";

import {
  fadeUpItem,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion/variants";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

export function StaggerReveal({
  children,
  className,
  ...props
}: StaggerRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemElement = "div" | "article";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: StaggerItemElement;
  /** Enable enter/exit when used inside AnimatePresence */
  animatePresence?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "variants">;

const staggerItemComponents = {
  div: motion.div,
  article: motion.article,
} as const;

export function StaggerItem({
  children,
  className,
  variants = fadeUpItem,
  as = "div",
  animatePresence = false,
  ...props
}: StaggerItemProps) {
  const MotionComponent = staggerItemComponents[as];

  return (
    <MotionComponent
      className={className}
      variants={variants}
      {...(animatePresence
        ? { initial: "hidden", animate: "visible", exit: "exit" }
        : {})}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
