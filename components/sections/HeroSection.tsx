"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useRef } from "react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroPortrait } from "@/components/sections/HeroPortrait";
import { HeroWaveBackground } from "@/components/sections/HeroWaveBackground";
import { Button } from "@/components/ui/Button";
import { SITE_CONTACT, SITE_LINKS } from "@/lib/constants";
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
              TypeScript · React · Next.js · Node.js · Nest.js
            </p>

            <div className="mt-4 flex flex-col gap-1 font-['Poppins:Regular',sans-serif] text-sm text-[#3e3b53]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {SITE_CONTACT.location}
              </span>
            </div>

            <p className="mt-8 max-w-xl font-['Poppins:Regular',sans-serif] text-lg leading-relaxed text-[#0f0d1d]">
              Full Stack em startups e médias empresas: liderança em equipes
              ágeis, APIs robustas com Node/Nest e produtos web com React e
              Next.js — com foco em inovação e redução de custos em cloud e
              DevOps.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="outline"
                onClick={() => scrollToSection("sobre")}
              >
                Ver trajetória
              </Button>
              <Button
                variant="primary-montserrat"
                href={SITE_LINKS.cv}
                download
              >
                BAIXAR CV
              </Button>
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
