"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "@/config/navigation";
import { personal } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navIds = NAV_SECTIONS.map((s) => s.id);

export function Navbar() {
  const activeId = useActiveSection(navIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-border-subtle bg-background/85 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.55)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background/55 backdrop-blur-md supports-[backdrop-filter]:bg-background/40",
      )}
    >
      <Container className="flex h-[var(--site-header-height)] items-center justify-between gap-4">
        <Link
          href="#hero"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          {!reduce ? (
            <motion.span
              className="h-2 w-2 shrink-0 rounded-full bg-secondary shadow-[0_0_14px_rgba(56,189,248,0.55)]"
              initial={false}
              animate={{ scale: scrolled ? 1 : 1.06 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
            />
          ) : (
            <span className="h-2 w-2 shrink-0 rounded-full bg-secondary shadow-[0_0_14px_rgba(56,189,248,0.55)]" />
          )}
          <span className="truncate text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-secondary">
            {personal.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_SECTIONS.map((item) => {
            const active = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "group relative rounded-lg px-3 py-2 text-sm transition-colors duration-200",
                  active ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {active ? (
                  reduce ? (
                    <span
                      className="absolute inset-0 z-0 rounded-lg bg-primary/15 ring-1 ring-primary/25"
                      aria-hidden
                    />
                  ) : (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 z-0 rounded-lg bg-primary/15 ring-1 ring-primary/25"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      aria-hidden
                    />
                  )
                ) : (
                  <span
                    className="pointer-events-none absolute inset-x-1.5 bottom-1.5 z-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    aria-hidden
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-border-subtle bg-surface/60 p-2.5 text-foreground backdrop-blur transition-colors hover:border-secondary/30 hover:bg-surface-elevated/80 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border-subtle bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_SECTIONS.map((item) => {
              const active = activeId === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-primary/15 text-foreground ring-1 ring-primary/25"
                      : "text-muted hover:bg-surface hover:text-foreground",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
