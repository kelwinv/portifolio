export const CAREER_START_YEAR = 2021;

export const SITE_LINKS = {
  email: "mailto:kelwin.v.goncalves@gmail.com",
  github: "https://github.com/kelwinv",
  linkedin: "https://linkedin.com/in/kelwinv",
  linkedinRecommendations:
    "https://www.linkedin.com/in/kelwinv/details/recommendations/",
  portfolio: "https://kelwin.vercel.app/",
  cv: "/cv/kelwin.vieira.pdf",
} as const;

export const SITE_CONTACT = {
  location: "Osasco, São Paulo",
} as const;

export function getYearsOfExperience(fromYear = CAREER_START_YEAR): number {
  const currentYear = new Date().getFullYear();
  return Math.max(1, currentYear - fromYear);
}
