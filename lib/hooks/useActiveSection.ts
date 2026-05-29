"use client";

import { useCallback, useEffect, useState } from "react";

import { getActiveSectionId } from "@/lib/active-section";
import {
  isNavSectionId,
  SECTION_IDS,
  type NavSectionId,
} from "@/lib/navigation";

const HEADER_OFFSET = 110;

function readHashSection(): NavSectionId | null {
  if (typeof window === "undefined") return null;
  const id = window.location.hash.replace(/^#/, "");
  return isNavSectionId(id) ? id : null;
}

function measureSections(): { id: NavSectionId; offsetTop: number }[] {
  return SECTION_IDS.flatMap((id) => {
    const el = document.getElementById(id);
    if (!el) return [];
    return [{ id, offsetTop: el.offsetTop }];
  });
}

function updateHash(activeId: NavSectionId | null) {
  const desiredHash = activeId ? `#${activeId}` : "";
  if (window.location.hash === desiredHash) return;

  const base = `${window.location.pathname}${window.location.search}`;
  history.replaceState(null, "", activeId ? `${base}#${activeId}` : base);
}

export function useActiveSection(enabled: boolean) {
  const [activeId, setActiveId] = useState<NavSectionId | null>(null);

  const computeActive = useCallback(() => {
    const sections = measureSections();
    if (sections.length === 0) return null;
    return getActiveSectionId(window.scrollY, sections, HEADER_OFFSET);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const fromHash = readHashSection();
    const initial = computeActive() ?? fromHash;
    setActiveId(initial);

    const onScroll = () => {
      const next = computeActive();
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const onHashChange = () => {
      const fromHash = readHashSection();
      if (fromHash) setActiveId(fromHash);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [enabled, computeActive]);

  useEffect(() => {
    if (!enabled) return;
    updateHash(activeId);
  }, [enabled, activeId]);

  const setActive = useCallback((id: NavSectionId) => {
    setActiveId(id);
  }, []);

  return { activeId, setActiveId: setActive };
}
