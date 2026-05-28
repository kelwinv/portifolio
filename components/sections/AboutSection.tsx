export function AboutSection() {
  return (
    <section id="sobre" className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 font-['Poppins:Bold',sans-serif] text-5xl text-[#0f0d1d]">
          Sobre Mim
        </h2>
        <div className="space-y-6 font-['Poppins:Regular',sans-serif] text-xl leading-relaxed text-[#3e3b53]">
          <p>
            Desenvolvedor Full Stack com{" "}
            <strong>mais de 4 anos de experiência</strong> construindo APIs
            REST, serviços em Node.js e infraestrutura em AWS — com entrega
            ponta a ponta, do desenho da solução ao deploy em produção com
            Docker e CI/CD.
          </p>
          <p>
            Atuo com foco em{" "}
            <strong>backend, cloud e impacto de negócio</strong>:
            microsserviços, processamento de dados em escala e interfaces que
            traduzem operações complexas em produto claro para o time e para o
            cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
