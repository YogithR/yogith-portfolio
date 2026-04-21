"use client";

import {
  Briefcase,
  Cloud,
  Download,
  FileText,
  FlaskConical,
  GraduationCap,
  Github,
  Linkedin,
} from "lucide-react";
import { personal, resumeCtaSection, resumeQuickHighlights } from "@/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const highlightIcons = [GraduationCap, Briefcase, Cloud, FlaskConical] as const;

export function ResumeCTA() {
  return (
    <Section id="resume" ariaLabelledBy="resume-heading" spacing="lg" variant="muted">
      <SectionHeading
        eyebrow={resumeCtaSection.eyebrow}
        title={resumeCtaSection.title}
        titleId="resume-heading"
        description={resumeCtaSection.description}
        lockTranslation
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {resumeQuickHighlights.map((item, index) => {
          const Icon = highlightIcons[index] ?? FileText;
          return (
            <Reveal key={item.label} delay={0.05 * index}>
              <Card
                interactive
                padding="md"
                className="group h-full border-border-subtle/90 bg-surface/40 hover:border-secondary/25"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-background/50 text-secondary",
                      "transition-colors duration-200 group-hover:border-secondary/30 group-hover:bg-primary/10",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {item.label}
                    </p>
                    <p className="mt-2 font-semibold leading-snug tracking-tight text-foreground">
                      {item.headline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.supporting}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-2xl border border-border-subtle bg-gradient-to-br from-surface-elevated/80 via-surface/60 to-background/90 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm sm:flex-row sm:items-center sm:px-8 sm:py-7">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Full resume</p>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
              Download a single PDF with consolidated experience, education, and skills—easy to share with recruiters and hiring managers.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href={personal.resumePdfPath} variant="primary" size="lg" download>
              <Download className="h-4 w-4" aria-hidden />
              Download resume
            </Button>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <Button href={personal.github} variant="ghost" size="lg" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </Button>
              <Button href={personal.linkedIn} variant="ghost" size="lg" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
