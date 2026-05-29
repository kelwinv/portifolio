# Template — expansão de cases corporativos

Usar para **iFollow** e **Grupo Prime** ao editar [`lib/content/corporate-projects.ts`](file:///home/kel/www/portifolio/lib/content/corporate-projects.ts).

## Estrutura de dados sugerida

Estender o tipo existente (ou campos opcionais) para profundidade sem quebrar o layout:

```typescript
export type CorporateProject = {
  name: string;
  description: string;
  stack: string[];
  problem: string;
  result: string;
  /** Opcional — preencher após questionário */
  technicalDecision?: string;
  tradeOff?: string;
  company?: string; // se anonimizar, usar "Empresa de logística" etc.
};
```

## Template de preenchimento (copiar por case)

### Case: _______________

**Empresa (público):**  
**Nome do sistema (card):**  

**Problema (2–3 frases):**  
- Contexto de negócio  
- Dor operacional ou de custo  

**Decisão técnica (2–4 frases):**  
- O que foi escolhido (stack, arquitetura, padrão)  
- Por que essa opção (escala, custo, time existente)  

**Trade-off (1–2 frases):**  
- O que foi sacrificado ou adiado  
- O que ganhou em troca  

**Resultado (métricas confirmadas):**  
- Número 1  
- Número 2  

**Stack (tags):**  

**Confidencial — não publicar:**  

---

## Exemplo iFollow (rascunho — validar com candidato)

| Campo | Conteúdo sugerido |
| ----- | ----------------- |
| name | Rastreamento e Transporte |
| description | Sistema de monitoramento em tempo real com processamento diário de centenas de itens e alertas automatizados para operações críticas. |
| problem | Falta de visibilidade operacional sobre entregas e atrasos; equipes reagiam manualmente. |
| technicalDecision | Processamento com Node.js e jobs agendados (alertas a cada 5 min), MongoDB para volume flexível, AWS Lambda para cargas pontuais; dashboards React e React Native para equipe de campo. |
| tradeOff | Complexidade operacional de múltiplos tipos de alerta vs. resposta rápida ao cliente — priorizou cobertura de 24 cenários antes de unificar regras. |
| result | 300+ itens rastreados/dia; 24 tipos de alertas; processamento paralelo para 8 grandes clientes. |
| stack | Node.js, MongoDB, AWS Lambda, React, React Native, Docker |

---

## Exemplo Grupo Prime (rascunho — validar com candidato)

| Campo | Conteúdo sugerido |
| ----- | ----------------- |
| name | Sistema de Tickets Interno |
| description | Plataforma interna de chamados com automação de categorização e relatórios, substituindo ferramenta SaaS externa. |
| problem | Dependência de ferramenta de terceiros cara e limitada para ~2.000 colaboradores. |
| technicalDecision | NestJS + PostgreSQL para regras de negócio e relatórios; deploy de 8 apps com Docker, PM2 e Nginx em AWS EC2; integrações via APIs REST. |
| tradeOff | Tempo de desenvolvimento interno vs. economia recorrente — aceitou MVP iterativo antes de paridade total com ferramenta anterior. |
| result | Economia de R$ 5k/mês; 2.000 usuários atendidos; automação de categorização e relatórios. |
| stack | NestJS, Next.js, PostgreSQL, AWS EC2, Docker, Python |

---

## Renderização no componente

Em [`CorporateProjectsSection.tsx`](file:///home/kel/www/portifolio/components/sections/CorporateProjectsSection.tsx), se `technicalDecision` existir, exibir bloco:

```tsx
{project.technicalDecision && (
  <div>
    <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-sm text-[#e62e62]">
      Decisão técnica
    </p>
    <p className="font-['Poppins:Regular',sans-serif] text-sm text-[#d0cce9]">
      {project.technicalDecision}
    </p>
  </div>
)}
```

Mesmo padrão para `tradeOff` se preenchido.

## Regras

- Não publicar nomes de clientes finais se o candidato pedir anonimização
- Métricas só com confirmação (questionário blocos B e C)
- Manter cards escaneáveis — cada bloco novo ≤ 4 frases
