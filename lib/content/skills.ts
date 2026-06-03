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
      "HTML/CSS",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "Microsserviços",
      "PHP",
    ],
  },
  {
    title: "Infraestrutura",
    skills: [
      "AWS (S3, ElastiCache, Lambda, EC2)",
      "Docker",
      "Nginx",
      "PM2",
      "Linux",
    ],
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB", "ElastiCache"],
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
