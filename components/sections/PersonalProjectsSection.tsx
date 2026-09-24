import Link from "next/link";

const currentProjects = [
  {
    name: "Órium",
    description:
      "Buscador de vagas que explora ingestão em massa e correspondência entre oportunidades e perfis. Estou estudando uma combinação de regras, embeddings e LLMs; ainda não medi a precisão do match.",
    stack: "IA aplicada · embeddings · LLMs",
  },
  {
    name: "Massas Insanas",
    description:
      "Sistema offline em desenvolvimento para uma operação real de alimentação. Modelei estoque por validade, compras, custos, precificação e vendas, com importação assistida de arquivos e conferência das regras financeiras contra uma planilha de referência.",
    stack: "React · TypeScript · Node.js · SQLite",
  },
];

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
              Produtos em desenvolvimento a partir de problemas concretos.
            </p>
          </div>
          <Link
            href="/projetos"
            className="inline-flex min-h-11 items-center font-['Poppins:SemiBold',sans-serif] text-[#e62e62] underline-offset-4 transition-opacity hover:underline hover:opacity-80"
          >
            Ver projetos de estudo
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {currentProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-[#ebe8ff] bg-[#f5f3ff] p-8"
            >
              <p className="font-['Poppins:SemiBold',sans-serif] text-sm tracking-wide text-[#e62e62] uppercase">
                Projeto em desenvolvimento
              </p>
              <h4 className="mt-3 font-['Poppins:Bold',sans-serif] text-2xl text-[#0f0d1d]">
                {project.name}
              </h4>
              <p className="mt-4 font-['Poppins:Regular',sans-serif] text-base leading-relaxed text-[#3e3b53]">
                {project.description}
              </p>
              <p className="mt-5 font-['Poppins:Medium',sans-serif] text-sm text-[#0f0d1d]">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
