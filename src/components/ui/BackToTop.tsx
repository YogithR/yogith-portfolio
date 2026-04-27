"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(0,212,255,0.45)] bg-[rgba(0,212,255,0.1)] text-[#00D4FF] backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.82, y: 8 }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          exit={reduceMotion ? {} : { opacity: 0, scale: 0.82, y: 8 }}
          transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        >
          <ArrowUp className="h-5 w-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
