import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline" | "accent" | "muted";
  size?: "sm" | "md";
  /** Pill vs soft rectangle (skill chips) */
  shape?: "pill" | "rounded";
};

const variantClass = {
  default: "border-primary/30 bg-primary/15 text-secondary",
  secondary: "border-secondary/25 bg-secondary/10 text-secondary",
  outline: "border-border-subtle bg-transparent text-muted",
  accent: "border-accent/30 bg-accent/10 text-accent",
  muted: "border-border-subtle bg-surface-elevated/80 text-muted",
} as const;

const sizeClass = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-1 text-xs",
} as const;

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  shape = "pill",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border font-medium leading-none tracking-wide",
        shape === "pill" ? "rounded-full" : "rounded-lg",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Compact chip for lists (skills, tech stack). */
export function Tag(props: Omit<BadgeProps, "shape">) {
  return <Badge {...props} shape="rounded" size="sm" variant="muted" />;
}
