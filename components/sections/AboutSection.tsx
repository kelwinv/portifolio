import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 font-['Poppins:Bold',sans-serif] text-5xl text-[#0f0d1d]">
          Sobre Mim
        </h2>
        <div className="space-y-6 font-['Poppins:Regular',sans-serif] text-xl leading-relaxed text-[#3e3b53]">
          <ScrollReveal>
            <p>
              Sou Software Engineer Full Stack com mais de 5 anos de experiência
              profissional. Construo produtos web com React, TypeScript e
              Node.js, conectando decisões de engenharia às regras e
              necessidades de quem usa o produto.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Na iFollow, investiguei um dashboard descrito apenas como lento:
              medi a renderização por componente, movi a agregação para o
              back-end e mudei o carregamento para busca assíncrona em stream
              com lazy loading. O tempo caiu de cerca de 5 minutos para cerca de
              2 segundos.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
