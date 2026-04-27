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
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[linear-gradient(to_right,#00D4FF,#7B2FFF)] shadow-[0_0_10px_rgba(0,212,255,0.5)]"
      style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
    />
  );
}
