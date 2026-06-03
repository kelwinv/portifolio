export function DifferentialsSection() {
  const differentials = [
    {
      icon: "🏗️",
      title: "Arquitetura limpa e código manutenível",
      description: "Clean Architecture, SOLID e boas práticas",
    },
    {
      icon: "⚡",
      title: "Entrega rápida sem sacrificar qualidade",
      description: "Foco em MVP e iteração contínua",
    },
    {
      icon: "💡",
      title: "Visão de produto e negócio",
      description: "Entendimento do impacto além do código",
    },
    {
      icon: "💰",
      title: "Experiência com otimização de custos",
      description: "Infraestrutura eficiente e escalável",
    },
    {
      icon: "🔧",
      title: "Do frontend à infraestrutura",
      description: "Capacidade de atuar em toda a stack",
    },
    {
      icon: "🤝",
      title: "Boa comunicação com time e stakeholders",
      description: "Colaboração e alinhamento constante",
    },
  ];

  return (
    <section className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-['Poppins:Bold',sans-serif] text-5xl text-[#0f0d1d]">
          Diferenciais
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((diff, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
