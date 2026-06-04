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
    name: "Sistema de Monitoramento de alertas",
    description:
      "Sistema de monitoramento de alertas eletricos e meteorológico com processamento de dados em tempo real e alertas automatizados para operações críticas.",
    stack: ["Node.js", "React", "MongoDB", "RabbitMQ", "AWS Lambda", "Docker"],
    problem:
      "Impossibilidade de monitorar alertas de forma centralizada e eficiente.",
    technicalDecision:
      "Processamento com Node.js e jobs agendados (alertas a cada 5 min), MongoDB para volume flexível e AWS Lambda para cargas pontuais; dashboards React e React Native para equipe de campo.",
    tradeOff:
      "Complexidade de múltiplos tipos de alerta vs. resposta rápida — priorizou cobertura de 24 cenários antes de unificar regras. - Complexidade de dados de clientes com envio diferentes",
    result: "300+ itens/dia · 24 tipos de alertas · 8 grandes clientes",
  },
  {
    name: "Otimização de 	Dashboard",
    description:
      "Dashboard de monitoramento de alertas com baixa performance e dificuldade de manutenção, cerca de 5 minutos para carregar os dados",
    stack: ["React", "React Native", "Express", "MySQL"],
    problem:
      "Dashboard com baixa performance e dificuldade de manutenção, cerca de 5 minutos para carregar os dados",
    technicalDecision:
      "Otimização de queries e indexação, uso de cache, e melhoria na performance do dashboard",
    tradeOff: "Tempo de desenvolvimento vs. custo de manutenção",
    result:
      "Tempo de carregamento reduzido para 2 segundos, uma melhoria de 99,3% no tempo de resposta",
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
    name: "Sistema de OS com Cashflow",
    company: "iFollow",
    description:
      "Sistema de OS com Cashflow para gestão de projetos e financeiro, com integração com sistema de financeiro da empresa",
    stack: [
      "nestjs",
      "nextjs",
      "postgresql",
      "docker",
      "rabbitmq",
      "jest",
      "azure",
      "typescript",
      "socket.io",
    ],
    problem:
      "OS manuais com pouca integrações com sistemas terceiros por conta da complexidade unica do workflow interno da empresa",
    technicalDecision:
      "Sistema de OS com Cashflow para gestão de projetos e financeiro, com integração com sistema de financeiro da empresa",
    result:
      "Um MVP que resultou em mais rastreabilidade e transparência no processo de execução de OS e mais agilidade na gestão de projetos",
  },
  {
    name: "Sistema de Tickets Interno",
    company: "GRUPO PRIME",
    description:
      "Plataforma interna de chamados com automação de categorização e relatórios, substituindo ferramenta SaaS externa.",
    stack: ["NestJS", "React", "PostgreSQL", "Nginx", "PM2", "Docker"],
    problem:
      "Dependência de ferramenta de terceiros cara e limitada para cerca de 2.000 colaboradores.",
    technicalDecision:
      "NestJS + PostgreSQL para regras de negócio e relatórios; deploy de 8 aplicações com Docker, PM2 e Nginx em AWS EC2; integrações via APIs REST.",
    tradeOff:
      "Tempo de desenvolvimento interno vs. economia recorrente — aceitou MVP iterativo antes de paridade total com a ferramenta anterior.",
    result: "R$ 5k/mês economizados · 2.000 usuários atendidos",
  },
  {
    name: "Microserviços para Fluxo de Tratamento de Dados",
    company: "Enline",
    description:
      "Pipeline de ingestão, normalização e distribuição de dados eletricos e geográficos, com processamento assíncrono e operação contínua.",
    stack: ["Node.js", "React", "MongoDB", "RabbitMQ", "AWS Lambda", "Docker"],
    problem:
      "Informações chegavam de múltiplas origens, em formatos e cadências diferentes, sem um fluxo unificado — gerando inconsistência, retrabalho e risco em janelas críticas de operação.",
    technicalDecision:
      "Microsserviços desacoplados por filas (ingestão, validação, enriquecimento e publicação); MongoDB para esquemas variáveis por origem; AWS Lambda para picos; Docker para deploy; React para monitoramento operacional.",
    tradeOff:
      "Evolução e resiliência por etapa vs. maior complexidade operacional (observabilidade, contratos entre serviços e deploy coordenado).",
    result:
      "Fluxo estável em operação contínua, com integrações desacopladas e menos dependência de tratamento manual entre fontes.",
  },
];
