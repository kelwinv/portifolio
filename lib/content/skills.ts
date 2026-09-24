export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Produto web",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Design systems",
      "Dashboards",
      "SEO",
    ],
  },
  {
    title: "APIs e dados",
    skills: [
      "Node.js",
      "NestJS",
      "Python",
      "REST",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "RabbitMQ",
    ],
  },
  {
    title: "Entrega e IA aplicada",
    skills: [
      "AWS",
      "Docker",
      "Terraform",
      "Jest",
      "TDD",
      "OpenSpec",
      "Claude",
      "Codex",
    ],
  },
];
