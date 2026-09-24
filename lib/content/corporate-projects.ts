export type CorporateProject = {
  name: string;
  company?: string;
  description: string;
  stack: string[];
  problem: string;
  result: string;
  technicalDecision?: string;
};

export const corporateProjects: CorporateProject[] = [
  {
    name: "Dashboard de monitoramento",
    company: "iFollow",
    description:
      "Investiguei um dashboard que levava cerca de cinco minutos para carregar e encontrei o gargalo na renderização de grandes volumes de dados.",
    stack: ["React"],
    problem:
      "O front-end recebia dados do dia inteiro e fazia a agregação antes de renderizar os gráficos.",
    technicalDecision:
      "Mudei a agregação para o back-end, passei a buscar dados de forma assíncrona em stream e apliquei lazy loading.",
    result:
      "O carregamento caiu de cerca de 5 minutos para cerca de 2 segundos.",
  },
  {
    name: "Cronos: ordens de serviço e cashflow",
    company: "iFollow",
    description:
      "O produto estava há cerca de três anos sem piloto, enquanto regras de negócio e processos ainda mudavam.",
    stack: [],
    problem:
      "O escopo crescia antes de existir uma versão utilizável para as áreas envolvidas.",
    technicalDecision:
      "No esforço conjunto de definição e entrega, delimitei fluxos e domínios e modelei as regras de cashflow. A equipe cortou comissão da primeira versão para manter o fluxo central.",
    result:
      "A primeira versão foi entregue após três semanas de war room e uma semana de finalização; o piloto completo levou cerca de seis meses.",
  },
  {
    name: "Plataforma interna de tickets",
    company: "Grupo Prime",
    description:
      "Identifiquei a preocupação da diretoria com o custo crescente do SaaS de chamados e propus escopo e prazo para uma alternativa interna.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "Nginx"],
    problem:
      "A ferramenta contratada custava cerca de R$ 5 mil por mês e cobrava à medida que a equipe crescia.",
    technicalDecision:
      "Desenhei o domínio e o fluxo, fiz o protótipo em Figma e implementei interface e alterações no back-end junto a outro desenvolvedor. A diretoria decidiu internalizar.",
    result:
      "Entregamos um MVP em um mês. A empresa desligou o SaaS, que custava aproximadamente R$ 5 mil por mês.",
  },
  {
    name: "Automação de relatórios",
    company: "Grupo Prime",
    description:
      "Automatizei etapas manuais de categorização e geração de relatórios com Python.",
    stack: ["Python"],
    problem: "A rotina exigia trabalho manual recorrente.",
    technicalDecision:
      "Substituí etapas repetitivas por automações de processos.",
    result:
      "A estimativa interna foi de aproximadamente 20 horas poupadas por mês.",
  },
];
