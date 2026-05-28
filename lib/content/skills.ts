export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "Microsserviços"],
  },
  {
    title: "Infraestrutura",
    skills: ["AWS Lambda", "EC2", "S3", "Docker", "Nginx", "Linux"],
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ElastiCache"],
  },
  {
    title: "Qualidade & Arquitetura",
    skills: [
      "TDD",
      "Jest",
      "Clean Architecture",
      "SOLID",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Automação",
    skills: ["Python", "Scripts Internos", "RabbitMQ", "API Gateway"],
  },
];
