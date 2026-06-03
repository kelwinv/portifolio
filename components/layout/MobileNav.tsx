"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/navigation";
import { scrollToSection } from "@/lib/scroll";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  useHomeLinks?: boolean;
};

export function MobileNav({ open, onClose, useHomeLinks }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleNav = (id: string) => {
    onClose();
    scrollToSection(id);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#0f0d1d]/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={onClose}
      />

      <aside
        id="mobile-nav-drawer"
        className={`fixed top-0 left-0 z-50 flex h-full w-[min(100%,20rem)] flex-col bg-[#0f0d1d] px-6 py-8 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-['Montserrat:Bold',sans-serif] text-lg font-bold text-[#ebe8ff]">
            Menu
          </span>
          <Button
            variant="icon-inverse"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return useHomeLinks ? (
              <Button
                key={item.id}
                variant="nav-mobile"
                href={`/#${item.id}`}
                onClick={onClose}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.id}
                variant="nav-mobile"
                onClick={() => handleNav(item.id)}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                {item.label}
              </Button>
            );
          })}
          <Button variant="nav-accent" href="/projetos" onClick={onClose}>
            Todos os projetos
          </Button>
        </nav>
      </aside>
    </>
  );
}
