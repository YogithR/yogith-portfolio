"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Layers, School } from "lucide-react";
import Image from "next/image";
import { about } from "@/data";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const statIcons = [GraduationCap, School, Layers] as const;

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="about"
      ariaLabelledBy="about-heading"
      spacing="lg"
      variant="muted"
    >
      <SectionHeading
        eyebrow={about.eyebrow}
        title={about.title}
        titleId="about-heading"
        description={about.description}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,320px))] lg:items-start lg:gap-12 xl:gap-14">
        <div className="space-y-6">
          {about.paragraphs.map((text, i) => (
            <Reveal key={i} delay={0.08 * i} direction="up">
              <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0} direction="right" className="lg:pt-1">
          <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/40 shadow-[var(--shadow-card)]">
            <motion.div
              className="relative aspect-[16/10] w-full"
              initial={reduceMotion ? false : { opacity: 0.88, scale: 1.045 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={about.accentImage}
                alt="Campus photo"
                fill
                className="object-cover object-center transition duration-700 ease-out hover:scale-[1.04]"
                sizes="(min-width: 1024px) 320px, 100vw"
                unoptimized={about.accentImage.endsWith(".svg")}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {about.stats.map((stat, index) => (
          <li key={stat.label}>
            <Reveal delay={0.1 * index} direction="up">
              <StatCard stat={stat} index={index} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof about.stats)[number];
  index: number;
}) {
  const Icon = statIcons[index] ?? Layers;
  return (
    <Card
      interactive
      padding="md"
      className={cn("h-full border-border-subtle/90", index === 1 && "sm:border-secondary/20")}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-secondary">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{stat.label}</p>
          <p className="mt-1.5 font-semibold leading-snug tracking-tight text-foreground">{stat.value}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{stat.detail}</p>
        </div>
      </div>
    </Card>
  );
}
