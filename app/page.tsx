import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CorporateProjectsSection } from "@/components/sections/CorporateProjectsSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { PersonalProjectsSection } from "@/components/sections/PersonalProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CorporateProjectsSection />
      <SkillsSection />
      <ExperienceSection />

      <RecommendationsSection />
      <PersonalProjectsSection />

      <DifferentialsSection />
      <EducationSection />
      <LanguagesSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
