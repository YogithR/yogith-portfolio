/**
 * Primary in-page destinations — used by Navbar, Footer, and scroll behavior.
 * Keep ids in sync with `<section id="...">` on the home page.
 */
export const NAV_SECTIONS = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "research", label: "Research", href: "#research" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "education", label: "Education", href: "#education" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number]["id"];
