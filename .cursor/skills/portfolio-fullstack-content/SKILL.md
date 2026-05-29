---
name: portfolio-fullstack-content
description: >-
  Melhora copy, posicionamento full stack (ênfase backend/infra), cases corporativos
  (iFollow + Grupo Prime) e curadoria de projetos pessoais no portfólio em
  /home/kel/www/portifolio. Use quando o usuário pedir ajuste de textos, conteúdo,
  ATS full stack, curadoria de projectsApi ou aplicar feedbacks do recruiter review.
disable-model-invocation: true
---

# Portfolio Full Stack Content

## Objetivo

Coletar informações do candidato via **questionário obrigatório**, depois implementar melhorias de conteúdo: hero profissional, posicionamento full stack com ênfase em **backend e infraestrutura**, expansão de 2 cases corporativos e curadoria de projetos pessoais.

## Posicionamento (decisões do candidato)

- **Full stack forte**, sem destacar senioridade
- Ênfase em backend + infra (AWS, APIs REST, microsserviços, Docker, PostgreSQL)
- Tom do hero: **profissional** (sem emojis; CTA substituindo "INICIAR")
- Expandir cases: **iFollow** e **Grupo Prime**
- Curadoria de projetos: guiada por perguntas (3–5 no site)

## Pré-requisitos e ordem

1. Executar **antes** de [`portfolio-ui-polish`](../portfolio-ui-polish/SKILL.md) (copy estável antes de polir layout)
2. Opcional **depois** de ambas: [`portfolio-recruiter-review`](../portfolio-recruiter-review/SKILL.md) para medir melhoria
3. **Deploy fora de escopo** — não instruir deploy nem Vercel

## Regras

1. **Questionário primeiro:** não editar código até o candidato responder [`content-questionnaire.md`](content-questionnaire.md) (ou confirmar defaults documentados abaixo).
2. **Não inventar:** métricas, decisões técnicas e nomes de clientes só com confirmação explícita.
3. **Não alterar UI/layout:** responsabilidade da skill `portfolio-ui-polish` (exceto textos dentro de componentes).
4. **Não adicionar keywords de senioridade** (Senior, leadership, mentoria) a menos que o usuário peça.
5. **Validar ao final:** `pnpm build` e `pnpm test:jest`; atualizar testes se CTAs/textos mudarem.

## Defaults (se o usuário já respondeu na conversa)

| Item | Default acordado |
| ---- | ---------------- |
| Tom hero | Profissional, sem emojis |
| Cases a expandir | iFollow + Grupo Prime |
| Projetos no site | 3–5 curados via questionário |
| Ênfase | Backend + infra |

Registrar no chat quais defaults foram aplicados vs. respostas novas.

## Fluxo de execução

### Passo 1 — Questionário

1. Ler [`content-questionnaire.md`](content-questionnaire.md)
2. Usar `AskQuestion` ou perguntas no chat; aguardar respostas
3. Para curadoria, seguir [`project-curation-guide.md`](project-curation-guide.md)

### Passo 2 — Leitura do estado atual

Paths obrigatórios:

- `/home/kel/www/portifolio/components/sections/HeroSection.tsx`
- `/home/kel/www/portifolio/components/sections/AboutSection.tsx`
- `/home/kel/www/portifolio/app/layout.tsx`
- `/home/kel/www/portifolio/lib/content/corporate-projects.ts`
- `/home/kel/www/portifolio/lib/content/experience.ts`
- `/home/kel/www/portifolio/projectsApi.ts`
- `/home/kel/www/portifolio/test/unit/page/home.test.tsx`
- `/home/kel/www/portifolio/README.md`

### Passo 3 — Implementação

| Área | Ação |
| ---- | ---- |
| Hero | Tom profissional; TypeScript (não Javascript); CTA acordado; elevator pitch backend/infra |
| About + metadata | Keywords full stack: AWS, REST, Docker, CI/CD, microsserviços, PostgreSQL |
| Cases iFollow + Grupo Prime | Expandir com [`case-study-template.md`](case-study-template.md) |
| Projetos pessoais | Curar lista ou adicionar `featured: true`; corrigir links; remover demos mortas |
| Experience | Reforçar bullets backend/infra se respostas indicarem |
| README | Remover menção a "manutenção"; descrever portfólio completo |
| Testes | Atualizar asserts de CTA e headings |

### Passo 4 — Checklist pós-edição

Seguir [`copy-checklist.md`](copy-checklist.md) item a item antes de encerrar.

### Passo 5 — Validação

```bash
cd /home/kel/www/portifolio && pnpm build && pnpm test:jest
```

Reportar falhas e corrigir.

## Mapeamento feedback recruiter review → ação

| Feedback | Ação |
| -------- | ---- |
| Hero informal (emojis, INICIAR) | Hero profissional + novo CTA |
| Javascript vs TypeScript | Unificar TypeScript no hero |
| 14 projetos diluem mensagem | Curadoria 3–5 + link "Mais no GitHub" opcional |
| Link Randomizador → Game-list | Corrigir `github` em `projectsApi.ts` |
| Demo Heroku morta | Remover `project` URL após confirmação |
| Cases superficiais | Expandir iFollow + Grupo Prime |
| README desatualizado | Atualizar README |

## Curadoria técnica (projectsApi)

Opções (escolher uma com o candidato):

1. **Filtrar array** — remover projetos arquivados de `projectsInfo`
2. **Flag `featured`** — adicionar campo; `PersonalProjectsSection` filtra `featured === true`
3. **Seção secundária** — "Mais projetos no GitHub" com link único

Preferir (2) se o candidato quiser manter histórico no repo sem exibir tudo.

## Formato de entrega no chat

1. Resumo das respostas do questionário
2. Lista de arquivos alterados
3. Resultado de build/test
4. Sugestão: "Próximo passo: aplicar `portfolio-ui-polish`"

## Referências

- Questionário: [`content-questionnaire.md`](content-questionnaire.md)
- Curadoria: [`project-curation-guide.md`](project-curation-guide.md)
- Template cases: [`case-study-template.md`](case-study-template.md)
- Checklist: [`copy-checklist.md`](copy-checklist.md)
- Review (baseline): [`../portfolio-recruiter-review/SKILL.md`](../portfolio-recruiter-review/SKILL.md)
- UI (próxima fase): [`../portfolio-ui-polish/SKILL.md`](../portfolio-ui-polish/SKILL.md)
