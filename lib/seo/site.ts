import type { Metadata } from "next";

import { SITE_LINKS } from "@/lib/constants";

export const SITE_URL = SITE_LINKS.portfolio.replace(/\/$/, "");

export const SITE_NAME = "Kelwin Vieira";

export const DEFAULT_TITLE = "Kelwin Vieira | Desenvolvedor Full Stack";

export const DEFAULT_DESCRIPTION =
  "Desenvolvedor Full Stack em React, Next.js, Node.js e Nest.js — startups, equipes ágeis, AWS, Docker e APIs REST.";

export const PROFILE_IMAGE_PATH = "/profile.webp";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: "/" | `/${string}`;
  isHome?: boolean;
};

function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

function fullPageTitle(options: CreatePageMetadataOptions): string {
  if (options.isHome) return options.title;
  return `${options.title} | ${SITE_NAME}`;
}

export function createPageMetadata(
  options: CreatePageMetadataOptions,
): Metadata {
  const { title, description, path, isHome = false } = options;
  const url = absoluteUrl(path);
  const ogTitle = fullPageTitle(options);

  return {
    metadataBase: new URL(SITE_URL),
    title: isHome ? { default: title, template: `%s | ${SITE_NAME}` } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title: ogTitle,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
