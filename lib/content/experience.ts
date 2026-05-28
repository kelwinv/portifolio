export type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "iFollow",
    role: "Desenvolvedor Full Stack Pleno",
    period: "2023 - Atual",
    achievements: [
      "APIs e jobs em Node.js processando 300+ itens/dia com alertas automatizados a cada 5 minutos",
      "24 tipos de alertas e processamento paralelo para 8 grandes clientes em AWS",
      "Dashboards operacionais web e mobile (React e React Native) para equipe de campo",
      "Deploy e observabilidade com Docker em ambiente de produção",
    ],
    tech: ["Node.js", "React", "AWS Lambda", "MongoDB", "Docker"],
  },
  {
    company: "Grupo Prime",
    role: "Desenvolvedor Full Stack Pleno",
    period: "2022 - 2023",
    achievements: [
      "APIs REST em NestJS e PostgreSQL para sistema de tickets com 2.000 colaboradores",
      "Substituição de SaaS externo com economia de R$ 5 mil/mês",
      "Automação de categorização e relatórios operacionais",
      "Deploy de 8 aplicações com Docker, PM2 e Nginx na AWS EC2",
    ],
    tech: ["NestJS", "Next.js", "PostgreSQL", "AWS EC2", "Python"],
  },
  {
    company: "Enline",
    role: "Desenvolvedor Full Stack Pleno",
    period: "2021 - 2022",
    achievements: [
      "Migração de processos críticos para AWS Lambda com redução de custos",
      "Desenvolvimento de APIs REST escaláveis com Express e TypeScript",
      "Implementação de CI/CD com GitHub Actions e testes automatizados",
      "Arquitetura de microsserviços com mensageria RabbitMQ",
    ],
    tech: ["Express", "React", "MySQL", "AWS", "RabbitMQ"],
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Frontend",
    period: "2020 - 2021",
    achievements: [
      "Criação de interfaces modernas e responsivas para diversos clientes",
      "Integração com APIs REST e tratamento de estados complexos",
      "Otimização de performance e SEO em aplicações Next.js",
      "Experiência com styled-components e design systems",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
