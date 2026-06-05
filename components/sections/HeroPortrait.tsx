"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { SiDocker, SiNodedotjs, SiTypescript } from "react-icons/si";

import { useMouseParallax } from "@/lib/hooks/useMouseParallax";

function TechIcon({
  Icon,
  label,
  className,
}: {
  Icon: typeof SiTypescript;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ebe8ff]/15 bg-[#0f0d1d]/85 text-[#ebe8ff] shadow-lg backdrop-blur-sm ${className ?? ""}`}
      title={label}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

function ParallaxLayer({
  strength,
  className,
  children,
}: {
  strength: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`parallax-layer pointer-events-none absolute inset-0 ${className ?? ""}`}
      style={{ "--parallax-strength": strength } as CSSProperties}
      aria-hidden
    >
      {children}
    </div>
  );
}

export function HeroPortrait() {
  const containerRef = useMouseParallax<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      className="hero-portrait relative mx-auto aspect-[3/4] w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]"
    >
      <ParallaxLayer strength={3} className="z-0">
        <div className="absolute -top-6 -left-8 h-40 w-40 rounded-full bg-[#e62e62]/35 blur-3xl" />
        <div className="absolute top-1/4 -right-10 h-36 w-36 rounded-full bg-[#0f0d1d]/25 blur-3xl" />
        <div className="absolute -bottom-4 left-1/4 h-32 w-32 rounded-full bg-[#e62e62]/20 blur-2xl" />
        <div
          className="absolute top-[12%] left-1/2 h-[55%] w-[85%] -translate-x-1/2 bg-[#ebe8ff]/40"
          style={{ borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer strength={5} className="z-10">
        <div className="animate-float-slow absolute top-[18%] -left-2">
          <TechIcon Icon={SiNodedotjs} label="Node.js" />
        </div>
        <div className="animate-float-delayed absolute top-[28%] -right-1">
          <TechIcon Icon={SiDocker} label="Docker" />
        </div>
      </ParallaxLayer>

      <div className="relative z-20 flex h-full items-end justify-center px-2 pb-2">
        <Image
          src="/profile.webp"
          alt="Kelwin Vieira - Desenvolvedor Full Stack"
          width={720}
          height={720}
          priority
          className="h-full w-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(15,13,29,0.25)]"
          sizes="(min-width: 1024px) 380px, 90vw"
        />
      </div>

      <ParallaxLayer strength={8} className="z-30">
        <div className="animate-float absolute top-[8%] right-0">
          <TechIcon Icon={SiTypescript} label="TypeScript" />
        </div>

        <div className="animate-float-delayed absolute bottom-[22%] -left-3 rounded-2xl border border-[#e62e62]/25 bg-[#0f0d1d]/90 px-3 py-2 shadow-lg backdrop-blur-sm">
          <p className="font-['Montserrat:SemiBold',sans-serif] text-xs font-semibold text-[#ebe8ff]">
            Full Stack
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[10px] text-[#ebe8ff]/70">
            React · Next · Node
          </p>
        </div>

        <Sparkles className="absolute top-[42%] left-[6%] h-5 w-5 text-[#e62e62]" />
        <Sparkles className="absolute top-[14%] left-[28%] h-4 w-4 text-[#0f0d1d]/40" />
        <Sparkles className="absolute right-[12%] bottom-[38%] h-4 w-4 text-[#e62e62]/80" />
      </ParallaxLayer>
    </div>
  );
}
