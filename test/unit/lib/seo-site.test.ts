import {
  createPageMetadata,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL,
} from "@/lib/seo/site";

describe("seo site", () => {
  it("normalizes SITE_URL without trailing slash", () => {
    expect(SITE_URL).toBe("https://kelwin.vercel.app");
    expect(SITE_URL.endsWith("/")).toBe(false);
  });

  it("sets canonical and openGraph url for home", () => {
    const metadata = createPageMetadata({
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      path: "/",
      isHome: true,
    });

    expect(metadata.alternates?.canonical).toBe(SITE_URL);
    expect(metadata.openGraph?.url).toBe(SITE_URL);
    expect(metadata.title).toEqual({
      default: DEFAULT_TITLE,
      template: "%s | Kelwin Vieira",
    });
  });

  it("sets canonical and openGraph url for projetos", () => {
    const metadata = createPageMetadata({
      title: "Projetos",
      description: "Projetos pessoais.",
      path: "/projetos",
    });

    expect(metadata.alternates?.canonical).toBe(`${SITE_URL}/projetos`);
    expect(metadata.openGraph?.url).toBe(`${SITE_URL}/projetos`);
    expect(metadata.openGraph?.title).toBe("Projetos | Kelwin Vieira");
    expect(metadata.twitter?.title).toBe("Projetos | Kelwin Vieira");
    expect(metadata.title).toBe("Projetos");
  });
});
