import type { NavSectionId } from "@/lib/navigation";

export type SectionOffset = {
  id: NavSectionId;
  offsetTop: number;
};

export function getActiveSectionId(
  scrollY: number,
  sections: SectionOffset[],
  headerOffset: number,
): NavSectionId | null {
  const scrollPos = scrollY + headerOffset;
  let active: NavSectionId | null = null;

  for (const section of sections) {
    if (section.offsetTop <= scrollPos) {
      active = section.id;
    }
  }

  return active;
}
