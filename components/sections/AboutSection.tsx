import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getYearsOfExperience } from "@/lib/constants";

export function AboutSection() {
  const years = getYearsOfExperience();

  return (
    <section id="sobre" className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 font-['Poppins:Bold',sans-serif] text-5xl text-[#0f0d1d]">
          Sobre Mim
        </h2>
        <div className="space-y-6 font-['Poppins:Regular',sans-serif] text-xl leading-relaxed text-[#3e3b53]">
          <ScrollReveal>
            <p>
              Desenvolvedor Full Stack com{" "}
              <strong>{years}+ anos de experiência</strong> em startups e médias
              empresas (desde 2021), transformando desafios complexos em
              soluções escaláveis. Atuo em front-end e back-end, participando de
              equipes ágeis com foco em qualidade, inovação e redução de custos.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Especializado em{" "}
              <strong>React, Next.js, Node.js e Nest.js</strong>, com entrega em
              cloud (AWS, Docker, Nginx) e APIs REST. Busco impacto de negócio
              real — da otimização operacional à mentoria técnica em times em
              crescimento.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
