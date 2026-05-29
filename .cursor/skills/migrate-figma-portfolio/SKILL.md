---
name: migrate-figma-portfolio
description: >-
  Elabora um plano faseado para migrar o portfólio de /home/kel/www/portifolio-gerado
  (Vite/Figma Make) para /home/kel/www/portifolio (Next.js App Router), preservando
  CI/testes e adotando estratégia híbrida de projetos (destaques corporativos + projectsApi).
  Use quando o usuário pedir um plano de migração, portar o layout do portifolio-gerado,
  substituir a página de manutenção, ou integrar seções do portifolio-gerado no portifolio.
disable-model-invocation: true
---

# Migrate Figma Portfolio (plan-only)

## Objetivo

Produzir **somente um plano** (sem implementar) para levar a “nova versão” do portfólio em `/home/kel/www/portifolio-gerado` para o repositório atual `/home/kel/www/portifolio`.

## Regras

- Este skill é **plan-only**. Não editar arquivos do app, não rodar comandos, não criar commits/PRs.
- Sempre trabalhar com **caminhos absolutos** quando referenciar arquivos.
- Assumir **estratégia híbrida de projetos**:
  - Destaques corporativos (6 cards) vindos do `portifolio-gerado`.
  - Grid de projetos reais vindo de `/home/kel/www/portifolio/projectsApi.ts`.
- Nunca migrar o kit completo de template (ex.: `portifolio-gerado/src/app/components/ui/*`) sem o usuário pedir explicitamente.

## Leitura obrigatória (antes de escrever o plano)

### Portifolio atual (Next.js)

- `/home/kel/www/portifolio/app/page.tsx`
- `/home/kel/www/portifolio/app/layout.tsx`
- `/home/kel/www/portifolio/app/globals.css`
- `/home/kel/www/portifolio/projectsApi.ts`
- `/home/kel/www/portifolio/test/unit/page/home.test.tsx`
- `/home/kel/www/portifolio/test/e2e/page/home/home.cy.ts`
- `/home/kel/www/portifolio/.github/workflows/linting.yaml`
- `/home/kel/www/portifolio/.github/workflows/test.yaml`

### Portifolio gerado (Vite/Figma Make)

- `/home/kel/www/portifolio-gerado/src/app/App.tsx`
- `/home/kel/www/portifolio-gerado/src/imports/HomePage.tsx`
- `/home/kel/www/portifolio-gerado/src/imports/svg-tz0nhikpu7.ts`
- `/home/kel/www/portifolio-gerado/src/app/components/AboutSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/ImpactSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/SkillsSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/ExperienceSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/ProjectsSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/DifferentialsSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/EducationSection.tsx`
- `/home/kel/www/portifolio-gerado/src/app/components/ContactSection.tsx`

## Checklist (executar como parte do plano)

Usar o checklist em [`validation-checklist.md`](validation-checklist.md) para classificar itens em:

- **OK**: pode migrar “como está” com ajustes mínimos.
- **Parcial**: exige adaptação (ex.: responsividade, dados).
- **Pendente**: precisa ser construído/definido na migração (ex.: assets, links, CV).
- **Não migrar**: não entra no escopo (ex.: deps/template).

## Saída obrigatória (template)

Entregar o plano usando exatamente esta estrutura.

```markdown
# Plano de migração: portifolio-gerado → portifolio

## Resumo executivo

## Estado atual (checklist)

- OK:
- Parcial:
- Pendente:
- Não migrar:

## Arquitetura alvo (Next.js)

## Mapeamento (origem → destino)

## Fases

### Fase 0 — Pré-requisitos

### Fase 1 — Fundação (layout, tema, assets)

### Fase 2 — Seções reutilizáveis

### Fase 3 — Hero responsivo

### Fase 4 — Projetos híbridos

### Fase 5 — Conteúdo e links reais

### Fase 6 — Testes e CI

### Fase 7 — Go-live e limpeza

## Fora de escopo

## Riscos e mitigações

## Test plan
```

## Diretrizes de conteúdo (para evitar regressões)

- Identidade: manter **Kelwin** (não “Vitor Miranda”).
- Links reais: usar email/GitHub/LinkedIn que já estão em `/home/kel/www/portifolio/app/page.tsx`.
- Botões: evitar `<button>` sem ação para navegação externa; preferir `<a>`/`next/link` no Next.
- Hero: **não** portar `HomePage.tsx` literalmente (layout absoluto / `figma:asset`); reescrever responsivo e substituir a imagem por asset real em `public/`.

## Fases detalhadas (referência)

Para detalhamento de fases, riscos e critérios de aceite, usar [`migration-phases.md`](migration-phases.md).
