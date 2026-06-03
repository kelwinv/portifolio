# Fases de migração (portifolio-gerado → portifolio)

Este arquivo detalha as fases que o plano (emitido pelo skill) deve propor. Ele existe para manter consistência: **mesmas fases, mesmos critérios de aceite, mesmos riscos**.

## Premissas

- Destino: `/home/kel/www/portifolio` (Next.js 15, App Router, Tailwind v4, Jest + Cypress + GH Actions).
- Origem: `/home/kel/www/portifolio-gerado` (Vite + React, hero exportado do Figma Make).
- Projetos: **híbrido** (destaques corporativos + grid do `projectsApi.ts`).
- Objetivo da migração: substituir a página de manutenção por um portfólio completo, mantendo o padrão de qualidade do repo atual.

## Fase 0 — Pré-requisitos (validação e inventário)

**Objetivo:** reduzir risco antes de portar UI.

**Ações (no plano):**

- Inventariar seções e dados no gerado:
  - `/home/kel/www/portifolio-gerado/src/app/App.tsx`
  - `/home/kel/www/portifolio-gerado/src/app/components/*Section.tsx`
  - `/home/kel/www/portifolio-gerado/src/imports/HomePage.tsx`
- Inventariar constraints do Next:
  - `/home/kel/www/portifolio/app/layout.tsx`, `/home/kel/www/portifolio/app/page.tsx`, `/home/kel/www/portifolio/app/globals.css`
  - testes e CI em `/home/kel/www/portifolio/test/` e `/home/kel/www/portifolio/.github/workflows/`
- Rodar checklist: `validation-checklist.md`.

**Aceite:**

- Checklist preenchido no plano (OK/Parcial/Pendente/Não migrar).
- Lista explícita de placeholders (nome, links, CV, assets, botões sem ação).

## Fase 1 — Fundação (layout, tema, assets base)

**Objetivo:** preparar estrutura de pastas e tokens para receber seções.

**Ações (no plano):**

- Definir arquitetura alvo (pastas) e separar responsabilidades:
  - composição em `app/page.tsx`
  - seções em `components/sections/`
  - conteúdo em `lib/content/`
  - links e constantes em `lib/constants.ts`
  - assets em `public/`
- Garantir que `app/globals.css` suporte as classes necessárias (fontes/tokens).

**Aceite:**

- Estrutura alvo clara e mínima (sem duplicar frameworks).
- Tokens e fontes definidos uma vez (sem `font-['Poppins:Bold'...]` espalhado).

## Fase 2 — Seções reutilizáveis (baixo risco)

**Objetivo:** portar rapidamente o “miolo” do portfólio, sem hero.

**Origem (gerado):**

- `/home/kel/www/portifolio-gerado/src/app/components/AboutSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/ImpactSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/SkillsSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/ExperienceSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/DifferentialsSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/EducationSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/ContactSection.tsx`

**Ações (no plano):**

- Portar componentes com mínimo de rework (ajustes de import, `className`, `id`).
- Extrair arrays hardcoded para `lib/content/*` (para facilitar ajustes de conteúdo/links).
- Substituir placeholders de identidade/links ao portar.

**Aceite:**

- Render no Next com âncoras funcionando (`#sobre`, `#experiencia`, `#projetos`, `#contato`).
- Conteúdo já com identidade e links reais (sem “Vitor Miranda” nem `contato@exemplo.com`).

## Fase 3 — Hero responsivo (alto risco)

**Objetivo:** reconstruir o hero do Figma para um layout responsivo e portável.

**Origem (gerado):**

- `/home/kel/www/portifolio-gerado/src/imports/HomePage.tsx`
- `/home/kel/www/portifolio-gerado/src/imports/svg-tz0nhikpu7.ts`

**Riscos principais:**

- Layout absoluto e dimensões fixas (quebra em mobile).
- `figma:asset/...` não existe no Next.

**Ações (no plano):**

- Não portar o TSX do Figma “as-is”.
- Recriar hero com `flex`/`grid`, com breakpoints, mantendo identidade visual.
- Substituir foto por asset real em `public/` usando `next/image`.
- Recriar navegação do header/CTA com `next/link` e `scrollIntoView`.

**Aceite:**

- Hero funcional em mobile/tablet/desktop.
- Lighthouse/UX aceitáveis (sem layout shift grosseiro por imagem).
- Sem dependências do runtime Figma.

## Fase 4 — Projetos híbridos

**Objetivo:** unir “destaques corporativos” com os projetos reais do repo.

**Origem (gerado):**

- Destaques corporativos: `/home/kel/www/portifolio-gerado/src/app/components/ProjectsSection.tsx`

**Origem (atual):**

- Projetos reais: `/home/kel/www/portifolio/projectsApi.ts`

**Ações (no plano):**

- Separar em duas subseções:
  - **Destaques corporativos** (6 cards com problema/resultado/stack).
  - **Projetos pessoais** (grid vindo de `projectsApi.ts` com links GitHub/demo).
- Resolver assets do `projectsApi.ts`:
  - restaurar `public/img/*` ou trocar por URLs válidas.
- Transformar botões em links reais (“Ver Projeto”, “Ver Código”).

**Aceite:**

- Sem botões “mortos”.
- Imagens carregando corretamente.
- Conteúdo e links coerentes (sem placeholders).

## Fase 5 — Conteúdo e links reais (conversão)

**Objetivo:** garantir que o portfólio final esteja 100% “publicável” e orientado a recrutador.

**Ações (no plano):**

- Centralizar links (email/GitHub/LinkedIn) e reutilizar do `/home/kel/www/portifolio/app/page.tsx`.
- Ajustar rodapé/alt/title/metadata para Kelwin.
- CV:
  - definir `public/cv/kelwin.pdf` (ou similar) e link no CTA.
- Opcional: adicionar microcopy em CTAs e “open in new tab” consistente.

**Aceite:**

- Zero `alert()`/placeholder de link.
- Metadata e alt text consistentes com identidade.

## Fase 6 — Testes e CI

**Objetivo:** atualizar a suíte do repo atual para refletir a nova UI.

**Origem (atual):**

- Unit: `/home/kel/www/portifolio/test/unit/page/home.test.tsx`
- E2E: `/home/kel/www/portifolio/test/e2e/page/home/home.cy.ts`
- Workflows: `/home/kel/www/portifolio/.github/workflows/test.yaml`, `/home/kel/www/portifolio/.github/workflows/linting.yaml`

**Ações (no plano):**

- Ajustar testes para:
  - existência das seções principais
  - links principais corretos
  - navegação por âncora (E2E)
- Garantir que CI continue rodando `pnpm build` + `pnpm start` para Cypress.

**Aceite:**

- CI verde sem “tests asserting maintenance page”.

## Fase 7 — Go-live e limpeza

**Objetivo:** remover manutenção e consolidar documentação.

**Ações (no plano):**

- Remover copy de manutenção em `/home/kel/www/portifolio/app/page.tsx`.
- Atualizar README para refletir stack real (Tailwind, Next 15) e remover menções antigas.
- Garantir que não houve adição desnecessária de deps do template.

**Aceite:**

- Página principal é o portfólio completo.
- README coerente.
