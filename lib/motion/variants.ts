export const easeOut = [0.22, 1, 0.36, 1] as const;

export const revealTransition = {
  duration: 0.5,
  ease: easeOut,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
} as const;

export const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
} as const;

export const slideFromLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition,
  },
} as const;

export const slideFromRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition,
  },
} as const;

export const viewportOnce = {
  once: true,
  margin: "0px 0px -8% 0px" as const,
};
