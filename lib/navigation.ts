import { Briefcase, Folder, Mail, Sparkles, User } from "lucide-react";

export const NAV_ITEMS = [
  { id: "sobre", label: "Sobre", icon: User },
  { id: "destaques", label: "Destaques", icon: Sparkles },
  { id: "experiencia", label: "Experiência", icon: Briefcase },
  { id: "projetos", label: "Projetos", icon: Folder },
  { id: "contato", label: "Contato", icon: Mail },
] as const;

export type NavSectionId = (typeof NAV_ITEMS)[number]["id"];

export const SECTION_IDS: NavSectionId[] = NAV_ITEMS.map((item) => item.id);

export function isNavSectionId(id: string): id is NavSectionId {
  return SECTION_IDS.includes(id as NavSectionId);
}
