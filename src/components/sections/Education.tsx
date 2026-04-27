"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { education, educationSection } from "@/data";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function formatPeriod(start: string, end: string) {
  return `${start} – ${end}`;
}

export function Education() {
  const reduceMotion = useReducedMotion();
  return (
    <Section id="education" ariaLabelledBy="education-heading" spacing="lg" variant="default">
      <SectionHeading
        eyebrow={educationSection.eyebrow}
        title={educationSection.title}
        titleId="education-heading"
        description={educationSection.description}
      />

      <ul className="mt-12 grid list-none gap-6 md:grid-cols-2" role="list">
        {education.map((entry, index) => (
          <li key={entry.school}>
            <Reveal delay={index * 0.15} direction="up">
              <motion.div whileHover={reduceMotion ? undefined : { y: -4 }}>
                <Card
                  interactive
                  padding="lg"
                  className="h-full border-border-subtle/90 transition-shadow duration-300 hover:border-[rgba(0,212,255,0.4)]"
                >
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-primary/10 text-secondary">
                      <GraduationCap className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                        {entry.degree}
                      </h3>
                      <p className="mt-2 text-base font-medium text-foreground/95">{entry.school}</p>
                      <p className="mt-3 flex items-start gap-2 text-sm text-muted">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                        {entry.location}
                      </p>
                      <p className="mt-4 text-sm font-medium tabular-nums text-secondary">
                        {formatPeriod(entry.start, entry.end)}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
