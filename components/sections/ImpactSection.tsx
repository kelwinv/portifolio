import { buildImpactMetrics } from "@/lib/content/impact-metrics";
import { getYearsOfExperience } from "@/lib/constants";

export function ImpactSection() {
  const impactMetrics = buildImpactMetrics(getYearsOfExperience());

  return (
    <section className="bg-gradient-to-br from-[#0f0d1d] to-[#16132a] px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-['Poppins:Bold',sans-serif] text-4xl text-white md:text-5xl">
          Números de Impacto
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#e62e62]/50 hover:bg-white/10"
            >
              <div className="mb-3 font-['Montserrat:Bold',sans-serif] text-6xl text-[#e62e62]">
                {metric.value}
              </div>
              <div className="font-['Poppins:Regular',sans-serif] text-lg text-[#d0cce9]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
