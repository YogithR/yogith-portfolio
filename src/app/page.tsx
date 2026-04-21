import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { FeaturedResearch } from "@/components/sections/FeaturedResearch";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { ResumeCTA } from "@/components/sections/ResumeCTA";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedResearch />
      <Projects />
      <Education />
      <ResumeCTA />
      <Contact />
    </>
  );
}
