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
    name: "Rastreamento e Transporte",
    company: "iFollow",
    description:
      "Sistema de monitoramento em tempo real com processamento diário de centenas de itens e alertas automatizados para operações críticas.",
    stack: [
      "Node.js",
      "MongoDB",
      "AWS Lambda",
      "React",
      "React Native",
      "Docker",
    ],
    problem:
      "Falta de visibilidade operacional sobre entregas e atrasos; equipes reagiam manualmente.",
    technicalDecision:
      "Processamento com Node.js e jobs agendados (alertas a cada 5 min), MongoDB para volume flexível e AWS Lambda para cargas pontuais; dashboards React e React Native para equipe de campo.",
    tradeOff:
      "Complexidade de múltiplos tipos de alerta vs. resposta rápida — priorizou cobertura de 24 cenários antes de unificar regras.",
    result: "300+ itens/dia · 24 tipos de alertas · 8 grandes clientes",
  },
  {
    name: "Sistema de Tickets Interno",
    company: "Grupo Prime",
    description:
      "Plataforma interna de chamados com automação de categorização e relatórios, substituindo ferramenta SaaS externa.",
    stack: ["NestJS", "React", "PostgreSQL", "AWS EC2", "Docker"],
    problem:
      "Dependência de ferramenta de terceiros cara e limitada para cerca de 2.000 colaboradores.",
    technicalDecision:
      "NestJS + PostgreSQL para regras de negócio e relatórios; deploy de 8 aplicações com Docker, PM2 e Nginx em AWS EC2; integrações via APIs REST.",
    tradeOff:
      "Tempo de desenvolvimento interno vs. economia recorrente — aceitou MVP iterativo antes de paridade total com a ferramenta anterior.",
    result: "R$ 5k/mês economizados · 2.000 usuários atendidos",
  },
  {
    name: "Dashboard Operacional Multi-Plataforma",
    description: "Painéis web e mobile para gestão de operações em tempo real",
    stack: ["React", "React Native", "Express", "MySQL"],
    problem: "Equipes sem acesso mobile aos dados críticos",
    result: "Redução de 40% no tempo de resposta operacional",
  },
  {
    name: "Migração para AWS com Microsserviços",
    description:
      "Arquitetura escalável com processamento paralelo e alta disponibilidade",
    stack: ["AWS Lambda", "API Gateway", "RabbitMQ", "Docker"],
    problem: "Monolito custoso e difícil de escalar",
    result: "Redução de 30% nos custos de infraestrutura",
  },
  {
    name: "Automação de Relatórios",
    description:
      "Pipeline automatizado de extração, processamento e envio de relatórios",
    stack: ["Python", "Node.js", "PostgreSQL", "Cron"],
    problem: "Geração manual demorada e sujeita a erros",
    result: "Economia de 20 horas/mês de trabalho manual",
  },
  {
    name: "API de Alta Disponibilidade",
    description: "REST API escalável com cache, retry logic e monitoramento",
    stack: ["NestJS", "ElastiCache", "Docker", "Nginx"],
    problem: "API legada com timeouts e baixa performance",
    result: "99.9% de uptime + redução de 70% no tempo de resposta",
  },
];
