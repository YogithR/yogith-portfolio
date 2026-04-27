"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { contactSection, personal } from "@/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const linkCardClass =
  "group flex items-center gap-3 rounded-xl border border-border-subtle bg-surface/45 px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary/30 hover:bg-surface-elevated/60";

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) return;

    const body = [`Name: ${name}`, `Reply email: ${email}`, "", message].join("\n");
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    form.reset();
  }

  return (
    <Section id="contact" ariaLabelledBy="contact-heading" spacing="lg" variant="default">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
        <div>
          <SectionHeading
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            titleId="contact-heading"
            description={contactSection.description}
          />
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-base">
              {contactSection.opportunityLine}
            </p>
          </Reveal>

          <ul className="mt-8 flex list-none flex-col gap-3" role="list" aria-label="Direct contact">
              <li>
                <Reveal delay={0} direction="left">
                  <a href={`mailto:${personal.email}`} className={linkCardClass}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted">Email</span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-foreground group-hover:text-secondary">
                        {personal.email}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </a>
                </Reveal>
              </li>
              <li>
                <Reveal delay={0.1} direction="left">
                  <a href={`tel:+1${personal.phone.replace(/\D/g, "")}`} className={linkCardClass}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted">Phone</span>
                      <span className="mt-0.5 block text-sm font-medium text-foreground group-hover:text-secondary">
                        {personal.phone}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </a>
                </Reveal>
              </li>
              <li>
                <Reveal delay={0.2} direction="left">
                  <a
                    href={personal.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCardClass}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                      <Linkedin className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted">LinkedIn</span>
                      <span className="mt-0.5 block truncate text-sm text-foreground group-hover:text-secondary">
                        Profile
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </a>
                </Reveal>
              </li>
              <li>
                <Reveal delay={0.3} direction="left">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCardClass}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                      <Github className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted">GitHub</span>
                      <span className="mt-0.5 block truncate text-sm text-foreground group-hover:text-secondary">
                        {personal.github.replace("https://", "")}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </a>
                </Reveal>
              </li>
            </ul>
        </div>

        <Reveal delay={0.08} direction="right">
          <Card
            interactive={false}
            padding="lg"
            className="border-border-subtle/90 shadow-[var(--shadow-card)] lg:sticky lg:top-[calc(var(--site-header-height)+1.5rem)]"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Send a message</h3>
            <p id="contact-form-hint" className="mt-2 text-sm leading-relaxed text-muted">
              Submitting opens your email app with a pre-filled message—no server storage. You can also email me directly
              at{" "}
              <a className="text-secondary underline-offset-4 hover:underline" href={`mailto:${personal.email}`}>
                {personal.email}
              </a>
              .
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate aria-describedby="contact-form-hint">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Name
                </label>
                <Input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Subject
                </label>
                <Input id="contact-subject" name="subject" type="text" placeholder="Role / collaboration / question" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="A short note on the opportunity or how I can help…"
                  required
                  rows={5}
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" variant="primary" size="lg" className="shimmer-sweep w-full sm:w-auto">
                  <Send className="h-4 w-4" aria-hidden />
                  Compose in email app
                </Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
