"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";

import { scrollToSection } from "@/lib/scroll";

const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
] as const;

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
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-[#ebe8ff] transition-colors hover:bg-white/10"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) =>
            useHomeLinks ? (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={onClose}
                className="min-h-11 rounded-lg px-4 py-3 font-['Poppins:Regular',sans-serif] text-lg text-[#ebe8ff] transition-colors hover:bg-white/10"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className="min-h-11 rounded-lg px-4 py-3 text-left font-['Poppins:Regular',sans-serif] text-lg text-[#ebe8ff] transition-colors hover:bg-white/10"
              >
                {item.label}
              </button>
            ),
          )}
          <Link
            href="/projetos"
            onClick={onClose}
            className="mt-4 min-h-11 rounded-lg px-4 py-3 font-['Poppins:SemiBold',sans-serif] text-lg text-[#e62e62] transition-colors hover:bg-white/10"
          >
            Todos os projetos
          </Link>
        </nav>
      </aside>
    </>
  );
}
