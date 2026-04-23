"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Brain,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  Layers,
  Plug,
  Wrench,
} from "lucide-react";
import type { SkillCategory } from "@/data";
import { skillCategories, skillsSection } from "@/data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const categoryIcon = (cat: SkillCategory): LucideIcon => {
  const map: Record<string, LucideIcon> = {
    "Programming Languages": Code2,
    "Frontend / UI": Layers,
    "Backend / Integration": Plug,
    "Cloud / DevOps": Cloud,
    "Platforms / Tools": Wrench,
    Databases: Database,
    "Software Engineering Principles": BookOpen,
    "AI / ML": Brain,
    "Biotech / Cheminformatics": FlaskConical,
    Visualization: BarChart3,
  };
  return map[cat.title] ?? Code2;
};

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="skills" ariaLabelledBy="skills-heading" spacing="lg" variant="default">
      <SectionHeading
        eyebrow={skillsSection.eyebrow}
        title={skillsSection.title}
        titleId="skills-heading"
        description={skillsSection.description}
        lockTranslation
      />

      {reduceMotion ? (
        <ul className="mt-12 grid list-none gap-5 md:grid-cols-2 xl:grid-cols-3" role="list">
          {skillCategories.map((category) => (
            <li key={category.title}>
              <SkillCategoryCard category={category} />
            </li>
          ))}
        </ul>
      ) : (
        <motion.ul
          className="mt-12 grid list-none gap-5 md:grid-cols-2 xl:grid-cols-3"
          role="list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
          }}
        >
          {skillCategories.map((category) => (
            <motion.li
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <SkillCategoryCard category={category} />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </Section>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = categoryIcon(category);

  return (
    <Card
      interactive
      padding="lg"
      className="group h-full border-border-subtle/90 transition-shadow duration-300 hover:border-secondary/25 hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.55)]"
    >
      <div className="flex gap-4">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-gradient-to-br from-primary/20 to-transparent text-secondary shadow-[0_0_0_1px_rgba(56,189,248,0.08)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-secondary/30"
          aria-hidden
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold tracking-tight text-foreground">{category.title}</h3>
          <ul className="mt-4 flex list-none flex-wrap gap-2" role="list">
            {category.items.map((item) => (
              <li key={`${category.title}-${item}`} className="max-w-full">
                <Badge
                  shape="rounded"
                  size="sm"
                  variant="muted"
                  className={cn(
                    "max-w-full whitespace-normal border-border-subtle/90 bg-background/30 text-left font-normal leading-snug text-muted",
                    "transition-colors duration-200 group-hover:border-secondary/15 group-hover:text-foreground/90",
                    item.length > 42 && "text-[10px] sm:text-[11px]",
                  )}
                >
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
