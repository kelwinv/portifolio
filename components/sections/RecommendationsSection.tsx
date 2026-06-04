import Link from "next/link";

import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";
import { recommendations } from "@/lib/content/recommendations";
import { SITE_LINKS } from "@/lib/constants";

export function RecommendationsSection() {
  return (
    <section
      id="recomendacoes"
      className="bg-gradient-to-br from-[#0f0d1d] to-[#16132a] px-4 py-28 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center font-['Poppins:Bold',sans-serif] text-4xl text-white md:text-5xl">
          Recomendações
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center font-['Poppins:Regular',sans-serif] text-base text-[#d0cce9] md:text-lg">
          O que colegas e parceiros de trabalho destacam no LinkedIn
        </p>

        <StaggerReveal className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {recommendations.map((rec) => (
            <StaggerItem
              key={rec.author}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[#e62e62]/50 hover:bg-white/10"
            >
              <p className="flex-grow font-['Poppins:Regular',sans-serif] text-base leading-relaxed text-[#ebe8ff] md:text-lg">
                &ldquo;{rec.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-6">
                {rec.linkedinUrl ? (
                  <Link
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Poppins:Bold',sans-serif] text-lg text-[#e62e62] transition-opacity hover:opacity-80"
                  >
                    {rec.author}
                  </Link>
                ) : (
                  <cite className="font-['Poppins:Bold',sans-serif] text-lg text-[#e62e62] not-italic">
                    {rec.author}
                  </cite>
                )}
                {rec.role && (
                  <p className="mt-1 font-['Poppins:Regular',sans-serif] text-sm text-[#d0cce9]">
                    {rec.role}
                  </p>
                )}
              </footer>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <p className="mt-12 text-center">
          <Link
            href={SITE_LINKS.linkedinRecommendations}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Poppins:Regular',sans-serif] text-base text-[#d0cce9] underline-offset-4 transition-colors hover:text-[#e62e62] hover:underline"
          >
            Ver todas no LinkedIn
          </Link>
        </p>
      </div>
    </section>
  );
}
