"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

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
  return (
    <Reveal className="w-full" y={12} duration={0.48} delay={0}>
      <div
        className={cn(
          "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
          align === "center" && "items-center text-center",
          className,
        )}
      >
        <div
          translate={lockTranslation ? "no" : undefined}
          className={cn("max-w-2xl", align === "center" && "mx-auto", lockTranslation && "notranslate")}
        >
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={titleId}
            className="text-balance font-semibold tracking-tight text-2xl text-foreground sm:text-3xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-[62ch] text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
