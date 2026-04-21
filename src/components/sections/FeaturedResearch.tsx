"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, FlaskConical, Github } from "lucide-react";
import Link from "next/link";
import { featuredResearch, featuredResearchSection } from "@/data";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
const researchLinkBtnClass =
  "inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-surface/60 px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-secondary/35 hover:bg-surface-elevated/80 hover:text-secondary";

function FeaturedResearchLinks() {
  const paper = featuredResearch.links.paper.trim();
  const repository = featuredResearch.links.repository.trim();
  if (!paper && !repository) return null;

  const paperIsExternal = /^https?:\/\//i.test(paper);

  return (
    <div className="relative mt-8 flex flex-wrap gap-3" role="group" aria-label="Research resources">
      {paper ? (
        paperIsExternal ? (
          <a
            href={paper}
            target="_blank"
            rel="noopener noreferrer"
            className={researchLinkBtnClass}
          >
            <FileText className="h-4 w-4" aria-hidden />
            View paper (PDF)
          </a>
        ) : (
          <Link href={paper} className={researchLinkBtnClass} target="_blank" rel="noopener noreferrer">
            <FileText className="h-4 w-4" aria-hidden />
            View paper (PDF)
          </Link>
        )
      ) : null}
      {repository ? (
        <a href={repository} target="_blank" rel="noopener noreferrer" className={researchLinkBtnClass}>
          <Github className="h-4 w-4" aria-hidden />
          Repository
        </a>
      ) : null}
    </div>
  );
}

export function FeaturedResearch() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="research"
      ariaLabelledBy="research-heading"
      spacing="lg"
      variant="default"
      bleed
      className="relative"
      sectionClassName="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_55%_at_50%_-10%,rgba(37,99,235,0.14),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(167,139,250,0.08),transparent_50%)]"
        aria-hidden
      />

      <Container>
        <SectionHeading
          eyebrow={featuredResearchSection.eyebrow}
          title={featuredResearchSection.title}
          titleId="research-heading"
          description={featuredResearchSection.description}
        />

        <Reveal delay={0.06}>
          <motion.div
            className="relative mt-12 overflow-hidden rounded-[1.35rem] border border-secondary/25 bg-surface/40 p-px shadow-[0_24px_80px_-32px_rgba(37,99,235,0.45)] backdrop-blur-md"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[1.28rem] bg-gradient-to-br from-primary/18 via-transparent to-accent/12" aria-hidden />
            <div className="relative rounded-[1.28rem] bg-gradient-to-b from-surface-elevated/90 via-surface/95 to-background/98 p-6 sm:p-8 lg:p-10">
              <div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/80 to-transparent"
                aria-hidden
              />
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-accent/10 blur-3xl" aria-hidden />

              <div className="relative flex min-w-0 flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                  <FlaskConical className="h-3.5 w-3.5" aria-hidden />
                  Research highlight
                </div>
                <h3 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-[1.85rem] lg:leading-snug">
                  {featuredResearch.projectTitle}
                </h3>
                <p className="text-sm font-medium text-muted sm:text-base">{featuredResearch.period}</p>
                <ul className="flex list-none flex-wrap gap-2" role="list" aria-label="Topics">
                  {featuredResearch.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="secondary" size="sm" shape="rounded" className="font-normal">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="relative mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {featuredResearch.summary}
              </p>

              <FeaturedResearchLinks />

              <div className="relative mt-10 border-t border-border-subtle/80 pt-8">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Key outcomes</h4>
                <ul className="mt-5 space-y-4" role="list">
                  {featuredResearch.outcomes.map((item, i) =>
                    reduceMotion ? (
                      <li
                        key={i}
                        className="relative pl-5 text-pretty text-sm leading-relaxed text-muted sm:text-base"
                      >
                        <span
                          className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-gradient-to-br from-secondary to-primary"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ) : (
                      <motion.li
                        key={i}
                        className="relative pl-5 text-pretty text-sm leading-relaxed text-muted sm:text-base"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span
                          className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-gradient-to-br from-secondary to-primary"
                          aria-hidden
                        />
                        {item}
                      </motion.li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </Section>
  );
}
