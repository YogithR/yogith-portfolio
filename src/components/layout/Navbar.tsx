"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "@/config/navigation";
import { personal } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navIds = NAV_SECTIONS.map((s) => s.id);

function BrandMark({ scrolled, reduce }: { scrolled: boolean; reduce: boolean }) {
  const logoSrc = typeof personal.brandLogo === "string" ? personal.brandLogo.trim() : "";

  const mark =
    logoSrc.length > 0 ? (
      <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-surface/40 ring-1 ring-border-subtle/80">
        <Image
          src={logoSrc}
          alt=""
          width={32}
          height={32}
          className="h-full w-full object-cover object-center"
          priority
          sizes="32px"
          unoptimized={logoSrc.endsWith(".svg")}
        />
      </span>
    ) : (
      <span className="h-2 w-2 shrink-0 rounded-full bg-secondary shadow-[0_0_14px_rgba(56,189,248,0.55)]" />
    );

  if (reduce) {
    return <span className="inline-flex shrink-0 items-center">{mark}</span>;
  }

  return (
    <motion.span
      className="inline-flex shrink-0 items-center"
      initial={false}
      animate={{ scale: scrolled ? 1 : 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
    >
      {mark}
    </motion.span>
  );
}

export function Navbar() {
  const activeId = useActiveSection(navIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <motion.header
      initial={false}
      animate={
        scrolled
          ? {
              backgroundColor: "rgba(6,11,24,0.85)",
              borderBottomColor: "rgba(0,212,255,0.15)",
              boxShadow: "0 8px 36px -18px rgba(0,0,0,0.65), 0 1px 0 rgba(0,212,255,0.18)",
            }
          : {
              backgroundColor: "rgba(6,11,24,0.55)",
              borderBottomColor: "rgba(148,163,184,0)",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            }
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md supports-[backdrop-filter]:bg-background/70",
        scrolled
          ? "supports-[backdrop-filter]:bg-[rgba(6,11,24,0.78)]"
          : "supports-[backdrop-filter]:bg-background/40",
      )}
    >
      <Container className="flex h-[var(--site-header-height)] items-center justify-between gap-4">
        <Link
          href="#hero"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <BrandMark scrolled={scrolled} reduce={Boolean(reduce)} />
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
                      className="absolute inset-x-2 bottom-1 z-0 h-[2px] rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"
                      aria-hidden
                    />
                  ) : (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-x-2 bottom-1 z-0 h-[2px] rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
    </motion.header>
  );
}
