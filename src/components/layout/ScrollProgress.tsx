"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 26,
    mass: 0.22,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-secondary to-accent"
      style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
    />
  );
}
