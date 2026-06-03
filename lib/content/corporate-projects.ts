export type CorporateProject = {
  name: string;
  company?: string;
  description: string;
  stack: string[];
  problem: string;
  result: string;
  technicalDecision?: string;
  tradeOff?: string;
};

export const corporateProjects: CorporateProject[] = [
  {
    name: "Aplicações web e APIs",
    company: "iFollow Brasil",
    description:
      "Desenvolvimento full stack com foco em interfaces responsivas, APIs REST e qualidade via testes automatizados.",
    stack: ["React", "Next.js", "Node.js", "NestJS", "MySQL", "PostgreSQL", "Jest"],
    problem:
      "Necessidade de evoluir produtos web e backends com consistência e cobertura de testes.",
    technicalDecision:
      "React/Next no front, Node/Nest nas APIs e modelagem relacional (MySQL/PostgreSQL) com TDD em Jest.",
    result:
      "Entrega contínua de páginas, APIs e estruturas de dados alinhadas ao time de produto",
  },
  {
    name: "Plataforma interna e deploy",
    company: "Grupo Prime",
    description:
      "Sistemas internos com APIs REST, bancos relacionais e operação em servidores Linux.",
    stack: ["React", "Next.js", "NestJS", "MySQL", "MariaDB", "Docker", "PM2", "Nginx", "Python"],
    problem:
      "Manter várias aplicações em produção com deploy previsível e automações de processo.",
    technicalDecision:
      "Stack React/Next + Nest, bancos MySQL/MariaDB, deploy com Docker, PM2 e Nginx; automações complementares em Python.",
    result:
      "Aplicações em produção com deploy estruturado e testes automatizados (Jest/TDD)",
  },
];
