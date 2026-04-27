"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Optional slot for actions (e.g. button) on large screens */
  action?: ReactNode;
  className?: string;
  titleId?: string;
  /** Set when copy must stay literal English (stops auto-translate from changing the word "resume"). */
  lockTranslation?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  titleId,
  lockTranslation = false,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.2 });

  return (
    <div
      ref={rootRef}
      className={cn(
        "flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "items-center text-center",
        className,
      )}
    >
        <div
          translate={lockTranslation ? "no" : undefined}
          className={cn("max-w-2xl", align === "center" && "mx-auto", lockTranslation && "notranslate")}
        >
          {eyebrow ? (
            <motion.p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              animate={reduceMotion ? {} : inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.45, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <div className="overflow-hidden">
            <motion.h2
              id={titleId}
              className="text-balance font-semibold tracking-tight text-2xl text-foreground sm:text-3xl"
              initial={reduceMotion ? false : { y: "100%" }}
              animate={reduceMotion ? {} : inView ? { y: "0%" } : { y: "100%" }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h2>
          </div>
          {description ? (
            <motion.p
              className="mt-3 max-w-[62ch] text-pretty text-base leading-relaxed text-muted sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {description}
            </motion.p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
