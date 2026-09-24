import { CorporateProjectCard } from "@/components/sections/CorporateProjectCard";
import { corporateProjects } from "@/lib/content/corporate-projects";

export function CorporateProjectsSection() {
  return (
    <section
      id="destaques"
      className="bg-gradient-to-br from-[#0f0d1d] to-[#16132a] px-4 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h3 className="font-['Poppins:Bold',sans-serif] text-4xl text-white">
            Casos de produto
          </h3>
          <p className="mt-4 font-['Poppins:Regular',sans-serif] text-lg text-[#d0cce9]">
            Problemas que investiguei, decisões que tomei e resultados
            verificáveis.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {corporateProjects.map((project) => (
            <CorporateProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
