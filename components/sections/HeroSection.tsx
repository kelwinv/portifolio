"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiDocker, SiNodedotjs, SiTypescript } from "react-icons/si";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SITE_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";

const TECH_STACK = [
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiDocker, label: "Docker" },
] as const;

export function HeroSection() {
  return (
    <section className="overflow-x-hidden bg-[#d0cce9] px-4 pt-0 pb-28 text-[#0f0d1d] sm:px-8">
      <SiteHeader variant="hero" />

      <div className="mx-auto max-w-7xl">
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

          <div className="relative">
            <div
              className="animate-float absolute -top-4 -right-2 z-10 hidden rounded-2xl border border-[#e62e62]/20 bg-[#0f0d1d]/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:block"
              aria-hidden
            >
              <div className="flex items-center gap-3">
                {TECH_STACK.map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ebe8ff]/10 text-[#ebe8ff]"
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                ))}
              </div>
            </div>

            <div
              className="animate-float absolute -bottom-6 -left-4 h-24 w-24 rounded-full bg-[#e62e62]/20 blur-2xl"
              aria-hidden
              style={{ animationDelay: "1.5s" }}
            />

            <div className="rounded-[28px] border border-[#ebe8ff]/10 bg-[#0f0d1d]/80 p-2 shadow-xl">
              <Image
                src="/profile.png"
                alt="Kelwin Vieira - Desenvolvedor Full Stack"
                width={720}
                height={720}
                priority
                className="h-auto w-full rounded-[22px] object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>

            <div
              className="mt-4 flex justify-center gap-3 sm:hidden"
              aria-label="Stack principal"
            >
              {TECH_STACK.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f0d1d]/80 text-[#ebe8ff]"
                  title={label}
                >
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
