"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { MobileNav } from "@/components/layout/MobileNav";
import { scrollToSection } from "@/lib/scroll";

const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
] as const;

type SiteHeaderProps = {
  variant?: "hero" | "page";
};

export function SiteHeader({ variant = "hero" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHero = variant === "hero";

  return (
    <>
      <header
        className={`sticky top-0 z-50 ${
          isHero
            ? "bg-[#d0cce9]/95 backdrop-blur-sm"
            : "border-b border-[#ebe8ff] bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Kelwin Vieira" width={44} height={44} />
            <span
              className={`font-['Montserrat:Bold',sans-serif] text-lg font-bold ${
                isHero ? "text-[#0f0d1d]" : "text-[#0f0d1d]"
              }`}
            >
              Kelwin Vieira
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 font-['Poppins:Regular',sans-serif] text-base md:flex"
            aria-label="Principal"
          >
            {NAV_ITEMS.map((item) =>
              isHero ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#0f0d1d] transition-opacity hover:opacity-70"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className="text-[#0f0d1d] transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ),
            )}
            {!isHero && (
              <Link
                href="/projetos"
                className="text-[#e62e62] transition-opacity hover:opacity-70"
              >
                Todos os projetos
              </Link>
            )}
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-black/5 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-[#0f0d1d]" />
          </button>
        </div>
      </header>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        useHomeLinks={!isHero}
      />
    </>
  );
}
