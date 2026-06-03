import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projetos | Kelwin Vieira",
  description:
    "Portfólio completo de projetos pessoais — full stack, Node.js, React e experimentos de design.",
};

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="page" />
      <main className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#projetos"
            className="inline-flex min-h-11 items-center font-['Poppins:Regular',sans-serif] text-[#3e3b53] transition-colors hover:text-[#e62e62]"
          >
            ← Voltar ao portfólio
          </Link>

          <h1 className="mt-6 font-['Poppins:Bold',sans-serif] text-4xl text-[#0f0d1d] md:text-5xl">
            Todos os projetos
          </h1>
          <p className="mt-4 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg text-[#3e3b53]">
            Coleção completa com filtros por tipo — code, design e full stack.
          </p>

          <div className="mt-10">
            <ProjectsGrid showFilters />
          </div>
        </div>
      </main>
    </div>
  );
}
