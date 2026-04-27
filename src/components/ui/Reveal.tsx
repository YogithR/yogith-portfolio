"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right" | "none";
  amount?: number;
};

const easeReveal = [0.25, 0.46, 0.45, 0.94] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  amount = 0.15,
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const hidden =
    direction === "up"
      ? { opacity: 0, y: 30 }
      : direction === "left"
        ? { opacity: 0, x: -40 }
        : direction === "right"
          ? { opacity: 0, x: 40 }
          : { opacity: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : hidden}
      transition={{ duration, delay, ease: easeReveal }}
    >
      {children}
    </motion.div>
  );
}

/** @deprecated Use `Reveal` — alias kept for existing imports. */
export const FadeIn = Reveal;
