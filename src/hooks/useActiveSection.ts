"use client";

import { useCallback, useEffect, useState } from "react";

const HEADER_SLOP = 96;

/**
 * Highlights the nav item for the section whose top has most recently passed the header band.
 * Works with smooth scrolling and variable section heights.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "hero");

  const compute = useCallback(() => {
    let current = sectionIds[0] ?? "hero";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= HEADER_SLOP) current = id;
    }
    setActiveId(current);
  }, [sectionIds]);

  useEffect(() => {
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute, { passive: true });
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [compute]);

  return activeId;
}
