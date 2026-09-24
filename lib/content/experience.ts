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
    role: "Desenvolvedor Full Stack Pleno",
    period: "jun. 2025 – ago. 2026",
    location: "São Paulo, Brasil",
    achievements: [
      "Reduzi o carregamento de um dashboard de cerca de 5 minutos para cerca de 2 segundos ao mover a agregação para o back-end, buscar dados em stream e aplicar lazy loading.",
      "Modelei regras de cashflow e delimitei fluxos e domínios do Cronos durante a definição e entrega da primeira versão do produto.",
      "Usei Claude, Codex, OpenSpec e Specification-Driven Development no trabalho, com contexto, regras e critérios de aceite explícitos.",
    ],
    tech: [
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "RabbitMQ",
      "Terraform",
      "Jest",
    ],
  },
  {
    company: "Grupo Prime",
    role: "Desenvolvedor Full Stack",
    period: "set. 2023 – mai. 2025 · pleno desde jan. 2024",
    location: "Barueri, São Paulo, Brasil",
    achievements: [
      "Propus uma alternativa interna ao SaaS de chamados, que custava cerca de R$ 5 mil por mês. A diretoria decidiu internalizar; implementei interface e back-end com outro desenvolvedor e a empresa desligou o SaaS.",
      "Automatizei processos de categorização e relatórios em Python, com estimativa interna de aproximadamente 20 horas manuais poupadas por mês.",
      "Implantei e sustentei 8 aplicações em AWS EC2 com Docker, PM2 e Nginx.",
    ],
    tech: [
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "Docker",
      "PM2",
      "Nginx",
      "Python",
      "Kubernetes",
    ],
  },
  {
    company: "ENLINE",
    role: "Desenvolvedor Full Stack",
    period: "jul. 2021 – ago. 2023 · pleno desde mai. 2022",
    location: "Barueri, São Paulo",
    achievements: [
      "Estruturei um fluxo de entrada de dados elétricos por arquivo em S3, API ou serviço instalado no cliente; uma Lambda em Python padronizava os dados e registrava erros.",
      "Construí o serviço inicial de alertas no Discord com informações para reproduzir falhas sem depender de reclamações de clientes.",
      "Identifiquei cálculos repetidos dentro de loops e movi operações base para fora deles na Lambda de processamento. Outra pessoa separou o processamento por cliente; as duas mudanças encerraram os estouros do limite de execução.",
      "Trabalhei em interfaces React e traduzi para Python regras de processamento definidas por especialistas.",
    ],
    tech: [
      "React",
      "Python",
      "Node.js",
      "AWS Lambda",
      "S3",
      "MongoDB",
      "Redux",
    ],
  },
  {
    company: "Freelance",
    role: "Desenvolvedor web",
    period: "jan. 2020 – jul. 2021",
    location: "Osasco, São Paulo, Brasil",
    achievements: [
      "Construí landing pages e interfaces responsivas com JavaScript, HTML e CSS.",
      "Mantive APIs e integrações em Node.js e Express para clientes variados.",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Express", "Node.js"],
  },
];
