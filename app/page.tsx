import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CorporateProjectsSection } from "@/components/sections/CorporateProjectsSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { PersonalProjectsSection } from "@/components/sections/PersonalProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <SkillsSection />
      <ExperienceSection />

      <section id="projetos">
        <CorporateProjectsSection />
        <PersonalProjectsSection />
      </section>

      <DifferentialsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
