import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";
import { skillGroups } from "@/lib/content/skills";

export function SkillsSection() {
  return (
    <section className="bg-[#f5f3ff] px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-['Poppins:Bold',sans-serif] text-4xl text-[#0f0d1d] md:text-5xl">
          Competências Técnicas
        </h2>
        <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <StaggerItem
              key={index}
              className="card-hover rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="mb-6 font-['Poppins:SemiBold',sans-serif] text-2xl text-[#e62e62]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[#ebe8ff] px-4 py-2 font-['Poppins:Medium',sans-serif] text-sm text-[#0f0d1d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
