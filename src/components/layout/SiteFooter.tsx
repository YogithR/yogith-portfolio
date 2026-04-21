import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { NAV_SECTIONS } from "@/config/navigation";
import { personal } from "@/data";
import { Container } from "@/components/ui/Container";

const social = [
  { label: "LinkedIn", href: personal.linkedIn, icon: Linkedin },
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
] as const;

const quickLinks = NAV_SECTIONS.filter((s) => s.id !== "hero");

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border-subtle bg-[linear-gradient(180deg,rgba(11,17,32,0.4),rgba(11,17,32,0.95))]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent"
        aria-hidden
      />
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-tight text-foreground">{personal.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{personal.title}</p>
            <p className="mt-4 text-xs text-muted/90">{personal.location}</p>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              On this page
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="rounded-md px-1 py-0.5 text-sm text-muted transition-colors duration-200 hover:bg-surface/50 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {social.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 rounded-md px-1 py-0.5 text-sm text-muted transition-colors duration-200 hover:bg-surface/40 hover:text-secondary"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-secondary/90" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8">
          <p className="text-xs text-muted">
            © {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
