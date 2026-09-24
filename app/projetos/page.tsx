import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { createPageMetadata } from "@/lib/seo/site";

export const metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Projetos pessoais e de estudo com JavaScript, React, Node.js e CSS.",
  path: "/projetos",
});

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
            Projetos pessoais desenvolvidos em cursos e estudos independentes.
            Filtre por interface visual ou código.
          </p>

          <div className="mt-10">
            <ProjectsGrid showFilters />
          </div>
        </div>
      </main>
    </div>
  );
}
