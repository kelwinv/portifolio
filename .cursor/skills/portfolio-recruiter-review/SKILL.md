---
name: portfolio-recruiter-review
description: >-
  Executa 3 avaliações independentes de recrutadores (RH não técnico, tech lead PME,
  recrutador enterprise) sobre o portfólio/site em /home/kel/www/portifolio. Use quando
  o usuário pedir feedback de recrutador, simulação de processo seletivo, ATS, ou teste
  do site.
disable-model-invocation: true
---

# Portfolio Recruiter Review (3 agentes)

## Objetivo

Simular um processo seletivo real com **3 recrutadores independentes**, cada um com vaga, empresa e critérios diferentes, avaliando o material do candidato de forma crítica e honesta.

## Alvo padrão

- Repositório: `/home/kel/www/portifolio` (Next.js)
- Por padrão, avaliar o que o visitante vê hoje (página de manutenção) + evidências do repo declaradas em [`evidence-checklist.md`](evidence-checklist.md)
- **Não** avaliar `portifolio-gerado` a menos que o usuário peça comparação explícita

## Regras globais

1. **Independência:** durante a análise de cada agente, não usar opinião dos outros agentes.
2. **Honestidade:** não suavizar críticas; simular mercado tech 2026 (pleno/sênior).
3. **Não inventar:** se algo não está no site nem nas evidências listadas, marcar como "não evidenciado" e penalizar.
4. **Separar UX vs repo:** distinguir claramente:
   - **UX publicada:** o que aparece em `app/page.tsx` / browser
   - **Repo não publicado:** ex. `projectsApi.ts` sem UI
5. **Browser opcional:** se `pnpm dev` estiver em `http://localhost:3000`, usar snapshot; senão, avaliar por código + metadata.
6. **Tom por agente:** ver arquivos em [`agents/`](agents/).

## Fluxo de execução

### Passo 1 — Coletar evidências

Seguir [`evidence-checklist.md`](evidence-checklist.md) e anotar fatos objetivos (sem julgamento ainda).

### Passo 2 — Agente 1 (RH não técnico)

Ler [`agents/agent-1-non-technical.md`](agents/agent-1-non-technical.md) e produzir relatório usando [`output-template.md`](output-template.md).

Título da seção de saída: `# Avaliação — Agente 1 (RH — Startup B2B)`

### Passo 3 — Agente 2 (Tech Lead PME)

Ler [`agents/agent-2-tech-sme.md`](agents/agent-2-tech-sme.md) e produzir relatório com o mesmo template.

**Não reler** o relatório do Agente 1 durante esta análise.

Título: `# Avaliação — Agente 2 (Tech Lead — Software House)`

### Passo 4 — Agente 3 (Enterprise / ATS)

Ler [`agents/agent-3-enterprise.md`](agents/agent-3-enterprise.md) e produzir relatório com o mesmo template.

**Não reler** relatórios dos Agentes 1 ou 2 durante esta análise.

Título: `# Avaliação — Agente 3 (Enterprise — Fintech)`

### Passo 5 — Síntese comparativa (opcional, após os 3)

Somente depois dos três relatórios, adicionar:

`# Síntese comparativa`

- 3–5 bullets de convergências
- 3–5 bullets de divergências (por que cada perfil reagiria diferente)
- 1 recomendação prioritária para o candidato

## Formato de saída

Cada agente deve seguir **exatamente** as 10 seções de [`output-template.md`](output-template.md).

## Variações de alvo

Se o usuário especificar outro alvo:

| Pedido do usuário   | Ação                                                                |
| ------------------- | ------------------------------------------------------------------- |
| URL em produção     | Avaliar a URL + declarar limitações se não puder inspecionar código |
| `portifolio-gerado` | Trocar evidências para `/home/kel/www/portifolio-gerado/src/`       |
| Após migração       | Reexecutar com `app/page.tsx` completo e seções visíveis            |

## Referências rápidas (paths fixos)

- UI: `/home/kel/www/portifolio/app/page.tsx`
- Metadata: `/home/kel/www/portifolio/app/layout.tsx`
- Estilos: `/home/kel/www/portifolio/app/globals.css`
- Projetos pessoais: `/home/kel/www/portifolio/projectsApi.ts` (renderizados em `PersonalProjectsSection`)
- Testes E2E: `/home/kel/www/portifolio/test/e2e/page/home/home.cy.ts`

## Pipeline de melhoria (após review)

Se o review apontar gaps de conteúdo ou UI, aplicar **nesta ordem**:

1. [`portfolio-fullstack-content`](../portfolio-fullstack-content/SKILL.md) — questionário + copy, cases iFollow/Grupo Prime, curadoria de projetos
2. [`portfolio-ui-polish`](../portfolio-ui-polish/SKILL.md) — hero decorado, mobile nav, animações sutis (paleta atual)
3. **Reexecutar** esta skill (`portfolio-recruiter-review`) com UX = código em `app/page.tsx` para comparar notas

Deploy não faz parte dessas skills; avaliar pelo código local ou URL que o candidato indicar.
