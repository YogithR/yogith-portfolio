"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileDown, FolderKanban, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { hero, personal } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const social = [
  { label: "LinkedIn", href: personal.linkedIn, icon: Linkedin },
  { label: "GitHub", href: personal.github, icon: Github },
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="hero"
      spacing="none"
      variant="default"
      bleed
      sectionClassName="relative overflow-hidden border-b border-border-subtle"
    >
      <HeroBackdrop reduceMotion={!!reduceMotion} />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16 xl:gap-20">
          <HeroCopy reduceMotion={!!reduceMotion} />
          <HeroPortrait reduceMotion={!!reduceMotion} />
        </div>
      </Container>
    </Section>
  );
}

function HeroCopy({ reduceMotion }: { reduceMotion: boolean }) {
  const badge = (
    <p className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur-sm sm:text-xs">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary shadow-[0_0_12px_rgba(56,189,248,0.55)]" />
      {hero.availability}
    </p>
  );

  const heading = (
    <h1 className="text-balance font-semibold tracking-tight text-foreground">
      <span className="block text-4xl sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">{personal.name}</span>
      <span className="mt-3 block max-w-xl text-lg font-normal leading-snug text-muted sm:text-xl">
        {personal.title}
      </span>
    </h1>
  );

  const headline = (
    <p className="max-w-xl bg-gradient-to-br from-foreground via-foreground to-secondary bg-clip-text text-xl font-medium leading-snug tracking-tight text-transparent sm:text-2xl sm:leading-snug">
      {hero.headline}
    </p>
  );

  const summary = (
    <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">{hero.summary}</p>
  );

  const ctas = (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <Button href="#projects" variant="primary" size="lg">
        <FolderKanban className="h-4 w-4" aria-hidden />
        View projects
      </Button>
      <Button href={personal.resumePdfPath} variant="outline" size="lg" download>
        <FileDown className="h-4 w-4" aria-hidden />
        Download résumé
      </Button>
      <Button href="#contact" variant="ghost" size="lg">
        <Mail className="h-4 w-4" aria-hidden />
        Contact me
      </Button>
    </div>
  );

  const profiles = (
    <div className="flex flex-wrap items-center gap-3 border-t border-border-subtle/80 pt-8">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Profiles</span>
      <div className="flex flex-wrap gap-2">
        {social.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-surface/45 px-3.5 py-2 text-sm text-muted backdrop-blur-sm",
              "transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary/35 hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4 text-secondary" aria-hidden />
            {label}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );

  const meta = (
    <p className="text-sm text-muted">
      <span className="text-foreground/90">{personal.location}</span>
      <span className="mx-2 text-border-subtle">·</span>
      <a
        className="underline-offset-4 transition-colors hover:text-secondary hover:underline"
        href={`tel:+1${personal.phone.replace(/\D/g, "")}`}
      >
        {personal.phone}
      </a>
      <span className="mx-2 text-border-subtle">·</span>
      <a
        className="underline-offset-4 transition-colors hover:text-secondary hover:underline"
        href={`mailto:${personal.email}`}
      >
        {personal.email}
      </a>
    </p>
  );

  if (reduceMotion) {
    return (
      <div className="flex flex-col gap-6">
        {badge}
        {heading}
        <div className="mt-2 flex flex-col gap-6">
          {headline}
          {summary}
        </div>
        <div className="mt-2">{ctas}</div>
        {profiles}
        {meta}
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>{badge}</motion.div>
      <motion.div variants={itemVariants}>{heading}</motion.div>
      <motion.div className="mt-2 flex flex-col gap-6" variants={itemVariants}>
        {headline}
        {summary}
      </motion.div>
      <motion.div className="mt-2" variants={itemVariants}>
        {ctas}
      </motion.div>
      <motion.div variants={itemVariants}>{profiles}</motion.div>
      <motion.div variants={itemVariants}>{meta}</motion.div>
    </motion.div>
  );
}

function HeroPortrait({ reduceMotion }: { reduceMotion: boolean }) {
  const caption = (
    <p className="mt-3 text-center text-[11px] leading-relaxed text-muted/90 lg:text-left">
      Photo placeholder — add{" "}
      <code className="rounded bg-surface px-1 py-0.5 font-mono text-[10px] text-secondary">public/images/profile.jpg</code>{" "}
      and set <code className="rounded bg-surface px-1 py-0.5 font-mono text-[10px] text-secondary">personal.profileImage</code>{" "}
      to <code className="rounded bg-surface px-1 py-0.5 font-mono text-[10px] text-secondary">/images/profile.jpg</code> in{" "}
      <code className="rounded bg-surface px-1 py-0.5 font-mono text-[10px] text-secondary">src/data/portfolio.ts</code>. Add your PDF
      résumé as <code className="rounded bg-surface px-1 py-0.5 font-mono text-[10px] text-secondary">public/assets/resume.pdf</code>{" "}
      (or change <code className="rounded bg-surface px-1 py-0.5 font-mono text-[10px] text-secondary">resumePdfPath</code>).
    </p>
  );

  const frame = (
    <>
      <div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/20 opacity-90 blur-3xl"
        aria-hidden
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-subtle bg-surface/60 shadow-[var(--shadow-card)] ring-1 ring-white/[0.06]">
        <Image
          src={personal.profileImage}
          alt={`${personal.name}, professional portrait`}
          fill
          className="object-cover object-top transition duration-[800ms] ease-out hover:scale-[1.03]"
          sizes="(min-width: 1024px) 42vw, 90vw"
          priority
          unoptimized={personal.profileImage.endsWith(".svg")}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </div>
      {caption}
    </>
  );

  if (reduceMotion) {
    return <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">{frame}</div>;
  }

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
    >
      {frame}
    </motion.div>
  );
}

function HeroBackdrop({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-25%,rgba(37,99,235,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_100%_0%,rgba(167,139,250,0.1),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden
      />

      {!reduceMotion ? (
        <>
          <motion.div
            className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-primary/25 blur-[100px]"
            aria-hidden
            animate={{ opacity: [0.45, 0.72, 0.45], scale: [1, 1.06, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-accent/20 blur-[95px]"
            aria-hidden
            animate={{ opacity: [0.35, 0.6, 0.35], scale: [1.03, 1, 1.03] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.div
            className="pointer-events-none absolute left-1/3 top-0 -z-10 h-40 w-40 rounded-full bg-secondary/15 blur-[70px]"
            aria-hidden
            animate={{ opacity: [0.2, 0.45, 0.2], x: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-primary/30 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-accent/25 blur-[95px]"
            aria-hidden
          />
        </>
      )}
    </>
  );
}
