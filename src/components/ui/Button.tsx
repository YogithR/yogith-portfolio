import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex touch-manipulation items-center justify-center gap-2 rounded-xl font-medium transition-[transform,box-shadow,background-color,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-primary text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:bg-primary/92 active:translate-y-0",
  ghost:
    "border border-border-subtle bg-surface/60 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-secondary/35 hover:bg-surface-elevated/85 active:translate-y-0",
  subtle:
    "bg-primary-soft text-secondary hover:-translate-y-0.5 hover:bg-primary/22 active:translate-y-0",
  outline:
    "border border-border-subtle bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface/40 active:translate-y-0",
} as const;

const sizes = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
} as const;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type ButtonAsLink = Common &
  { href: string } & Omit<ComponentProps<typeof Link>, "className" | "children" | "size">;

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "className" | "children" | "size"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, className, variant = "primary", size = "md", ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = rest as ComponentProps<"button">;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
