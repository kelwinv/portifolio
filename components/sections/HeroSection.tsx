"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroPortrait } from "@/components/sections/HeroPortrait";
import { HeroWaveBackground } from "@/components/sections/HeroWaveBackground";
import { SITE_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden bg-[#d0cce9] px-4 pt-0 pb-28 text-[#0f0d1d] sm:px-8"
    >
      <HeroWaveBackground sectionRef={sectionRef} portraitRef={portraitRef} />

      <SiteHeader variant="hero" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-['Montserrat:Bold',sans-serif] text-5xl leading-tight font-bold text-[#e62e62]">
              Kelwin Vieira
            </h1>
            <p className="mt-3 font-['Montserrat:Medium',sans-serif] text-xl text-[#3e3b53]">
              Desenvolvedor Full Stack
            </p>
            <p className="mt-2 font-['Poppins:Medium',sans-serif] text-base tracking-wide text-[#3e3b53]">
              TypeScript · Node.js · Docker
            </p>

            <p className="mt-10 max-w-xl font-['Poppins:Regular',sans-serif] text-lg leading-relaxed text-[#0f0d1d]">
              Full Stack com forte atuação em backend, cloud e entrega de
              features ponta a ponta — do desenho de APIs REST à operação em
              produção com Node.js, Docker e AWS.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("sobre")}
                className="min-h-11 rounded-xl border-2 border-[#e62e62] px-8 py-3 font-['Montserrat:Bold',sans-serif] font-bold text-[#e62e62] transition-colors hover:bg-[#ffe8f0]"
              >
                Ver trajetória
              </button>
              <Link
                href={SITE_LINKS.cv}
                download
                className="flex min-h-11 items-center justify-center rounded-xl bg-[#e62e62] px-8 py-3 text-center font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#ebe8ff] transition-colors hover:bg-[#d12755]"
              >
                BAIXAR CV
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href={SITE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href={SITE_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="GitHub"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href={SITE_LINKS.email}
                className="transition-opacity hover:opacity-70"
                aria-label="Email"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>

          <div
            ref={portraitRef}
            className="relative z-10 hidden lg:flex lg:justify-center"
          >
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
