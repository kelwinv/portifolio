export const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
] as const;

export type NavSectionId = (typeof NAV_ITEMS)[number]["id"];

export const SECTION_IDS: NavSectionId[] = NAV_ITEMS.map((item) => item.id);

export function isNavSectionId(id: string): id is NavSectionId {
  return SECTION_IDS.includes(id as NavSectionId);
}
