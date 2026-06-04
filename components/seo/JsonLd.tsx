import { SITE_LINKS } from "@/lib/constants";
import {
  DEFAULT_DESCRIPTION,
  PROFILE_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/site";

export function JsonLd() {
  const profileImage = `${SITE_URL}${PROFILE_IMAGE_PATH}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: SITE_NAME,
        jobTitle: "Desenvolvedor Full Stack",
        url: SITE_URL,
        image: profileImage,
        description: DEFAULT_DESCRIPTION,
        sameAs: [SITE_LINKS.github, SITE_LINKS.linkedin],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Osasco",
          addressRegion: "São Paulo",
          addressCountry: "BR",
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "pt-BR",
        description: DEFAULT_DESCRIPTION,
        publisher: {
          "@type": "Person",
          name: SITE_NAME,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
