import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Lift + border glow on hover */
  interactive?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddingClass = {
  none: "p-0",
  sm: "p-4 sm:p-5",
  md: "p-5 sm:p-6",
  lg: "p-6 sm:p-8",
} as const;

export function Card({
  children,
  className,
  interactive = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/50 shadow-[var(--shadow-card)] backdrop-blur-sm",
        paddingClass[padding],
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1 hover:border-secondary/25 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] active:translate-y-0",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/15 to-accent/5 blur-3xl"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </div>
  );
}
