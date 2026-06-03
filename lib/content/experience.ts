export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "iFollow Brasil",
    role: "Desenvolvedor Full Stack",
    period: "jun. 2025 – Atual",
    location: "São Paulo, Brasil",
    achievements: [
      "Criação e manutenção de páginas web responsivas com React.js e Next.js",
      "Criação de APIs REST com Node.js e Nest.js",
      "Modelagem e criação de estrutura de bancos (MySQL, PostgreSQL)",
      "Testes automatizados com Jest, usando metodologias como TDD",
    ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "MySQL",
      "PostgreSQL",
      "Jest",
    ],
  },
  {
    company: "Grupo Prime",
    role: "Desenvolvedor Full Stack Pleno",
    period: "jan. 2024 – mai. 2025",
    location: "Barueri, São Paulo, Brasil",
    achievements: [
      "Criação e manutenção de páginas web responsivas com React.js e Next.js",
      "Criação de APIs REST com Node.js e Nest.js",
      "Modelagem e criação de estrutura de bancos (MySQL, MariaDB)",
      "Deploy e estruturação de várias aplicações em servidores Linux com PM2, Docker e Nginx",
      "Testes automatizados com Jest, usando metodologias como TDD",
      "Automações de processos com Python",
    ],
    tech: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "PM2",
      "Nginx",
      "Python",
    ],
  },
  {
    company: "Grupo Prime",
    role: "Desenvolvedor Full Stack Júnior",
    period: "set. 2023 – jan. 2024",
    location: "Barueri, São Paulo, Brasil",
    achievements: [
      "Criação e manutenção de páginas web responsivas com React.js e Next.js",
      "Criação de APIs REST com Node.js e Nest.js",
      "Modelagem e criação de estrutura de bancos (MySQL, MariaDB)",
      "Testes automatizados com Jest, usando metodologias como TDD",
    ],
    tech: ["React", "Next.js", "NestJS", "Node.js", "MySQL", "Jest"],
  },
  {
    company: "ENLINE",
    role: "Desenvolvedor Full Stack Pleno",
    period: "jul. 2021 – ago. 2023",
    location: "Barueri, SP",
    achievements: [
      "Soluções web e mobile para otimizar custos de transmissão de energia sob demanda em startup global",
      "Desafios de front-end, banco de dados e microsserviços com AWS, Python, TypeScript, MongoDB, PostgreSQL, S3, ElastiCache, React e Next.js",
      "Redução de tempos de processamento, eficiência e manutenção com código limpo e testes automatizados",
      "Treinamento e liderança de equipe que cresceu de 8 para 18 membros",
    ],
    tech: [
      "AWS",
      "Python",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "S3",
      "ElastiCache",
      "React",
      "Next.js",
    ],
  },
  {
    company: "Freelance",
    role: "Freelancer",
    period: "jan. 2020 – jul. 2021",
    location: "Osasco, São Paulo, Brasil",
    achievements: [
      "Landing pages e páginas de conversão com JavaScript, HTML e CSS",
      "Design responsivo e mobile first em dispositivos móveis e desktops",
      "Manutenção de APIs com Express no ambiente Node.js",
      "Trabalho independente com desafios variados e aprendizado contínuo",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Express", "Node.js"],
  },
];
