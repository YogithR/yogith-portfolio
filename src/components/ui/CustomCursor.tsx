"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [coarsePointer, setCoarsePointer] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const updatePointer = () => setCoarsePointer(media.matches);
    updatePointer();
    media.addEventListener("change", updatePointer);
    return () => media.removeEventListener("change", updatePointer);
  }, []);

  useEffect(() => {
    if (coarsePointer) {
      document.body.classList.remove("cursor-none-enabled");
      return;
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setEnabled(true);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.classList.add("cursor-none-enabled");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("cursor-none-enabled");
    };
  }, [coarsePointer, x, y]);

  if (coarsePointer || !enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[10px] w-[10px] rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[30px] w-[30px] rounded-full border border-[rgba(0,212,255,0.4)]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
