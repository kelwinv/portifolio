"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { NAV_ITEMS, type NavSectionId } from "@/lib/navigation";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { scrollToSection } from "@/lib/scroll";

type IndicatorStyle = {
  width: number;
  translateX: number;
  visible: boolean;
};

const INITIAL_INDICATOR: IndicatorStyle = {
  width: 0,
  translateX: 0,
  visible: false,
};

export function HeroDesktopNav() {
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef(new Map<NavSectionId, HTMLButtonElement>());
  const { activeId, setActiveId } = useActiveSection(true);
  const [indicator, setIndicator] = useState<IndicatorStyle>(INITIAL_INDICATOR);

  const setItemRef = useCallback(
    (id: NavSectionId) => (el: HTMLButtonElement | null) => {
      if (el) itemRefs.current.set(id, el);
      else itemRefs.current.delete(id);
    },
    [],
  );

  const updateIndicator = useCallback(() => {
    const nav = navRef.current;
    if (!nav || !activeId) {
      setIndicator((prev) => (prev.visible ? { ...INITIAL_INDICATOR } : prev));
      return;
    }

    const button = itemRefs.current.get(activeId);
    if (!button) return;

    const navRect = nav.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    setIndicator({
      width: btnRect.width,
      translateX: btnRect.left - navRect.left,
      visible: true,
    });
  }, [activeId]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const observer = new ResizeObserver(() => updateIndicator());
    observer.observe(nav);
    return () => observer.disconnect();
  }, [updateIndicator]);

  const handleClick = (id: NavSectionId) => {
    setActiveId(id);
    scrollToSection(id);
  };

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center gap-6 font-['Poppins:Regular',sans-serif] text-base md:flex"
      aria-label="Principal"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            ref={setItemRef(item.id)}
            type="button"
            onClick={() => handleClick(item.id)}
            aria-current={isActive ? "true" : undefined}
            className={`relative py-1 transition-colors duration-300 motion-reduce:transition-none ${
              isActive
                ? "text-[#e62e62]"
                : "text-[#0f0d1d] hover:text-[#e62e62]/70"
            } ${activeId === null ? "text-[#f5f3ff]" : ""}`}
          >
            {item.label}
          </button>
        );
      })}

      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-[#e62e62] transition-[transform,width,opacity] duration-300 ease-out motion-reduce:transition-none ${
          indicator.visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: indicator.width,
          transform: `translateX(${indicator.translateX}px)`,
        }}
      />
    </nav>
  );
}
