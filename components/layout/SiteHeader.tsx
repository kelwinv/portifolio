"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { HeroDesktopNav } from "@/components/layout/HeroDesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { useHeaderVisibility } from "@/lib/hooks/useHeaderVisibility";
import { NAV_ITEMS } from "@/lib/navigation";

type SiteHeaderProps = {
  variant?: "hero" | "page";
};

export function SiteHeader({ variant = "hero" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHero = variant === "hero";
  const headerVisible = useHeaderVisibility(menuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-screen rounded-b-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isHero
            ? "bg-[#d0cce9]/20 backdrop-blur-sm"
            : "border-b border-[#ebe8ff] bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Kelwin Vieira" width={44} height={44} />
            <span className="font-['Montserrat:Bold',sans-serif] text-lg font-bold text-[#0f0d1d]">
              Kelwin Vieira
            </span>
          </Link>

          {isHero ? (
            <HeroDesktopNav />
          ) : (
            <nav
              className="z-52 hidden items-center gap-6 font-['Poppins:Regular',sans-serif] text-base md:flex"
              aria-label="Principal"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className="text-[#0f0d1d] transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/projetos"
                className="text-[#e62e62] transition-opacity hover:opacity-70"
              >
                Todos os projetos
              </Link>
            </nav>
          )}

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
