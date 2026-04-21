"use client";

import { MapPin } from "lucide-react";
import { experience, experienceSection } from "@/data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

function formatRange(start: string, end: string) {
  return `${start} – ${end}`;
}

export function Experience() {
  return (
    <Section id="experience" ariaLabelledBy="experience-heading" spacing="lg" variant="muted">
      <SectionHeading
        eyebrow={experienceSection.eyebrow}
        title={experienceSection.title}
        titleId="experience-heading"
        description={experienceSection.description}
      />

      <div className="relative mt-14 max-w-3xl">
        <div
          className="pointer-events-none absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-secondary/50 via-border-subtle to-border-subtle md:left-[19px]"
          aria-hidden
        />

        <ol className="relative space-y-10 md:space-y-12" aria-label="Work history">
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.start}`} className="relative pl-11 md:pl-14">
              <span
                className={cn(
                  "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-surface-elevated shadow-[0_0_0_4px_rgba(11,17,32,0.9)] md:top-0.5 md:h-10 md:w-10",
                  "ring-1 ring-secondary/40",
                )}
                aria-hidden
              >
                <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_12px_rgba(56,189,248,0.45)]" />
              </span>

              <Reveal delay={0.08 * index}>
                <Card
                  interactive
                  padding="lg"
                  className="border-border-subtle/90 transition-shadow duration-300 hover:border-secondary/20"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-secondary">{formatRange(job.start, job.end)}</p>
                  </div>
                  <p className="mt-1 text-base font-medium text-foreground/95">{job.company}</p>
                  <p className="mt-2 flex flex-wrap items-center gap-1.5 text-sm text-muted">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                    {job.location}
                  </p>

                  {job.tags.length > 0 ? (
                    <ul className="mt-4 flex list-none flex-wrap gap-2" role="list" aria-label="Focus areas">
                      {job.tags.map((tag) => (
                        <li key={tag}>
                          <Badge shape="rounded" size="sm" variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <ul className="mt-5 space-y-3 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                    {job.highlights.map((line, hi) => (
                      <li key={`${job.company}-${hi}`} className="relative pl-4">
                        <span
                          className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-secondary/70"
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
