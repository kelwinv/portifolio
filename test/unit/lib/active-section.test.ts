import { getActiveSectionId } from "@/lib/active-section";

const SECTIONS = [
  { id: "sobre" as const, offsetTop: 800 },
  { id: "experiencia" as const, offsetTop: 2400 },
  { id: "projetos" as const, offsetTop: 3600 },
  { id: "contato" as const, offsetTop: 5200 },
];

const HEADER_OFFSET = 110;

describe("getActiveSectionId", () => {
  it("returns null when above the first section", () => {
    expect(getActiveSectionId(0, SECTIONS, HEADER_OFFSET)).toBeNull();
    expect(getActiveSectionId(500, SECTIONS, HEADER_OFFSET)).toBeNull();
  });

  it("returns sobre when scrolled into the about section", () => {
    expect(getActiveSectionId(700, SECTIONS, HEADER_OFFSET)).toBe("sobre");
  });

  it("keeps sobre active between sobre and experiencia", () => {
    expect(getActiveSectionId(1500, SECTIONS, HEADER_OFFSET)).toBe("sobre");
  });

  it("returns experiencia after its offset crosses the threshold", () => {
    expect(getActiveSectionId(2300, SECTIONS, HEADER_OFFSET)).toBe(
      "experiencia",
    );
  });

  it("returns the last section whose offset was passed", () => {
    expect(getActiveSectionId(5000, SECTIONS, HEADER_OFFSET)).toBe("projetos");
    expect(getActiveSectionId(6000, SECTIONS, HEADER_OFFSET)).toBe("contato");
  });
});
