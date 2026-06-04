"use client";

import { CorporateProjectCard } from "@/components/sections/CorporateProjectCard";
import { MarqueeCarousel } from "@/components/ui/MarqueeCarousel";
import { corporateProjects } from "@/lib/content/corporate-projects";

export function CorporateProjectsSection() {
  return (
    <section
      id="destaques"
      className="overflow-x-hidden bg-gradient-to-br from-[#0f0d1d] to-[#16132a] py-28"
    >
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-8">
        <h3 className="text-center font-['Poppins:Bold',sans-serif] text-4xl text-white">
          Destaques corporativos
        </h3>
      </div>

      <MarqueeCarousel
        ariaLabel="Destaques corporativos"
        duration={50}
        className="w-screen max-w-[100vw]"
      >
        {corporateProjects.map((project) => (
          <CorporateProjectCard key={project.name} project={project} />
        ))}
      </MarqueeCarousel>
    </section>
  );
}
