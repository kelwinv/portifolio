import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

export function DifferentialsSection() {
  const differentials = [
    {
      icon: "🔎",
      title: "Investigo antes de otimizar",
      description:
        "Medi a renderização por componente para localizar o gargalo do dashboard da iFollow antes de mudar sua implementação.",
    },
    {
      icon: "🧭",
      title: "Modelo regras de negócio",
      description:
        "No Cronos, delimitei fluxos e modelei regras de cashflow para ajudar a viabilizar a primeira versão.",
    },
    {
      icon: "🤖",
      title: "Uso IA com contexto e critérios",
      description:
        "No trabalho, explicito contexto, padrões do projeto, critérios de aceite e guardrails antes de implementar com IA.",
    },
  ];

  return (
    <section className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-['Poppins:Bold',sans-serif] text-5xl text-[#0f0d1d]">
          Como trabalho
        </h2>
        <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((diff, index) => (
            <StaggerItem
              key={index}
              className="card-hover rounded-2xl bg-gradient-to-br from-[#ebe8ff] to-[#f5f3ff] p-8 shadow-lg"
            >
              <div className="mb-4 text-5xl">{diff.icon}</div>
              <h3 className="mb-3 font-['Poppins:Bold',sans-serif] text-xl text-[#0f0d1d]">
                {diff.title}
              </h3>
              <p className="font-['Poppins:Regular',sans-serif] text-base text-[#3e3b53]">
                {diff.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
