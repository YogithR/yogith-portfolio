"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectsSection } from "@/data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function Projects() {
  const reduceMotion = useReducedMotion();
  const featured = projects.find((p) => p.featured);
  const grid = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" ariaLabelledBy="projects-heading" spacing="lg" variant="muted">
      <SectionHeading
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        titleId="projects-heading"
        description={projectsSection.description}
      />

      <div className="mt-12 space-y-8 lg:space-y-10">
        {featured ? <FeaturedProjectCard project={featured} reduceMotion={!!reduceMotion} /> : null}

        <motion.ul
          className="grid list-none gap-6 md:grid-cols-2 xl:grid-cols-3"
          role="list"
          aria-label="Additional projects"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {grid.map((project, index) => (
            <motion.li
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.54, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Reveal delay={index * 0.02} y={14} duration={0.5}>
                <ProjectCard project={project} compact />
              </Reveal>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}

function FeaturedProjectCard({
  project,
  reduceMotion,
}: {
  project: (typeof projects)[number];
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.25rem] border border-secondary/25 bg-surface/45 shadow-[0_28px_90px_-40px_rgba(37,99,235,0.55)] backdrop-blur-sm"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/10 opacity-90" aria-hidden />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-stretch lg:gap-10">
        <ProjectImage project={project} className="aspect-[16/10] lg:aspect-auto lg:min-h-[280px]" />
        <div className="flex flex-col px-6 pb-8 pt-2 sm:px-8 lg:py-8 lg:pr-10">
          <span className="mb-3 inline-flex w-fit items-center rounded-full border border-secondary/35 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
            Featured project
          </span>
          <h3 className="text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-muted">{project.period}</p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">{project.summary}</p>
          <TechRow tech={project.tech} className="mt-5" />
          <Highlights items={project.highlights} className="mt-6" />
          <ProjectLinks project={project} className="mt-8" />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  compact,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  return (
    <div>
      <Card
        interactive
        padding="none"
        className="group flex h-full flex-col overflow-hidden border-border-subtle/90 transition-shadow duration-300 hover:border-secondary/25 hover:shadow-[0_22px_55px_-32px_rgba(0,0,0,0.65)]"
      >
        <ProjectImage project={project} className="aspect-[16/10] shrink-0" />
        <div className={cn("flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6", compact && "pt-4")}>
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">{project.name}</h3>
          <p className="mt-1.5 text-xs font-medium text-muted sm:text-sm">{project.period}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
          <TechRow tech={project.tech} className="mt-4" limit={compact ? 6 : undefined} />
          <Highlights items={project.highlights} className="mt-4" compact />
          <div className="mt-auto pt-5">
            <ProjectLinks project={project} />
          </div>
        </div>
      </Card>
    </div>
  );
}

function ProjectImage({ project, className }: { project: (typeof projects)[number]; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative overflow-hidden bg-surface/60", className)}
      initial={reduceMotion ? false : { opacity: 0.86, scale: 1.05 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={project.imageSrc}
        alt=""
        fill
        className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(min-width: 1024px) 50vw, 100vw"
        unoptimized={project.imageSrc.endsWith(".svg")}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-80 lg:opacity-60" />
      <p className="sr-only">
        Screenshot placeholder. Replace the file at {project.imageSrc} or point imageSrc to your asset in
        src/data/portfolio.ts.
      </p>
    </motion.div>
  );
}

function TechRow({
  tech,
  className,
  limit,
}: {
  tech: readonly string[];
  className?: string;
  limit?: number;
}) {
  const show = limit ? tech.slice(0, limit) : tech;
  const rest = limit && tech.length > limit ? tech.length - limit : 0;
  return (
    <ul className={cn("flex list-none flex-wrap gap-2", className)} role="list" aria-label="Technologies">
      {show.map((t) => (
        <li key={t}>
          <Badge variant="secondary" size="sm" shape="rounded" className="font-normal">
            {t}
          </Badge>
        </li>
      ))}
      {rest > 0 ? (
        <li>
          <span className="text-xs text-muted">+{rest} more</span>
        </li>
      ) : null}
    </ul>
  );
}

function Highlights({
  items,
  className,
  compact,
}: {
  items: readonly string[];
  className?: string;
  compact?: boolean;
}) {
  const list = compact ? items.slice(0, 2) : items;
  return (
    <div className={className}>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">Highlights</h4>
      <ul className="mt-3 space-y-2.5" role="list">
        {list.map((line, i) => (
          <li key={i} className="relative pl-4 text-sm leading-relaxed text-muted">
            <span className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-secondary/80" aria-hidden />
            {line}
          </li>
        ))}
      </ul>
      {compact && items.length > 2 ? (
        <p translate="no" className="notranslate mt-2 text-xs text-muted/90">
          +{items.length - 2} more in full resume
        </p>
      ) : null}
    </div>
  );
}

function ProjectLinks({ project, className }: { project: (typeof projects)[number]; className?: string }) {
  const demo = project.links?.demo;
  const repo = project.links?.repository;
  const hasDemo = Boolean(demo?.trim());
  const hasRepo = Boolean(repo?.trim());

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {hasDemo ? (
        <Link
          href={demo!}
          target="_blank"
          rel="noopener noreferrer"
          className={linkBtnClass}
        >
          <ExternalLink className="h-4 w-4" aria-hidden />
          Live demo
        </Link>
      ) : (
        <span className={placeholderBtnClass} title="Add projects[].links.demo in src/data/portfolio.ts when available">
          <ExternalLink className="h-4 w-4 opacity-50" aria-hidden />
          Demo
        </span>
      )}
      {hasRepo ? (
        <Link href={repo!} target="_blank" rel="noopener noreferrer" className={linkBtnClass}>
          <Github className="h-4 w-4" aria-hidden />
          Repository
        </Link>
      ) : (
        <span
          className={placeholderBtnClass}
          title="Add projects[].links.repository in src/data/portfolio.ts when available"
        >
          <Github className="h-4 w-4 opacity-50" aria-hidden />
          Repository
        </span>
      )}
    </div>
  );
}

const linkBtnClass =
  "inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-surface/60 px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-secondary/35 hover:bg-surface-elevated/80 hover:text-secondary";

const placeholderBtnClass =
  "inline-flex cursor-default items-center gap-2 rounded-xl border border-dashed border-border-subtle/80 bg-transparent px-3.5 py-2 text-xs font-medium text-muted/80 select-none";
