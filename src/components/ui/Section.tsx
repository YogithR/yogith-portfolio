import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  /** Match the `id` of the primary heading inside the section (e.g. from `SectionHeading`). */
  ariaLabelledBy?: string;
  children: ReactNode;
  className?: string;
  /** Applied to the outer `<section>` */
  sectionClassName?: string;
  /** When true, children are not wrapped in `Container` (full-bleed layouts). */
  bleed?: boolean;
  /** Vertical padding preset */
  spacing?: "none" | "sm" | "md" | "lg";
  /** Alternate background treatment for zebra rhythm */
  variant?: "default" | "muted";
};

const spacingClass = {
  none: "",
  sm: "py-12 sm:py-16",
  /** Balanced vertical rhythm: slightly more air on tablet+ */
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-28",
} as const;

export function Section({
  id,
  ariaLabelledBy,
  children,
  className,
  sectionClassName,
  bleed,
  spacing = "md",
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      data-section={id}
      className={cn(
        "scroll-mt-[var(--site-header-height)] border-b border-border-subtle last:border-b-0",
        variant === "muted" && "bg-[radial-gradient(ellipse_80%_50%_at_50%_-30%,rgba(37,99,235,0.06),transparent)]",
        spacingClass[spacing],
        sectionClassName,
      )}
    >
      {bleed ? (
        <div className={cn(className)}>{children}</div>
      ) : (
        <Container className={cn(className)}>{children}</Container>
      )}
    </section>
  );
}
