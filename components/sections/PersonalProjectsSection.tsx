import Link from "next/link";

import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export function PersonalProjectsSection() {
  return (
    <section id="projetos" className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-['Poppins:Bold',sans-serif] text-4xl text-[#0f0d1d]">
              Projetos pessoais
            </h3>
            <p className="mt-3 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg text-[#3e3b53]">
              Cinco projetos em destaque — APIs, tempo real e produtos full
              stack que construí para estudar e colocar em produção.
            </p>
          </div>

          <Link
            href="/projetos"
            className="inline-flex min-h-11 items-center font-['Poppins:SemiBold',sans-serif] text-[#e62e62] underline-offset-4 transition-opacity hover:underline hover:opacity-80"
          >
            Ver todos os projetos
          </Link>
        </div>

        <ProjectsGrid featuredOnly showFilters={false} />
      </div>
    </section>
  );
}
