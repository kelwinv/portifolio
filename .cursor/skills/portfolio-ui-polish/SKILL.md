---
name: portfolio-ui-polish
description: >-
  Melhora UI/UX do portfólio em /home/kel/www/portifolio: hero com decorações na foto,
  animações sutis, ritmo entre seções, responsivo mobile (header sticky + menu hamburger),
  mantendo paleta roxo/rosa. Inspira-se em figma-conversion.vercel.app/services. Use após
  portfolio-fullstack-content ou quando pedir polish visual, mobile nav ou animações.
disable-model-invocation: true
---

# Portfolio UI Polish

## Objetivo

Melhorar **apresentação visual e usabilidade mobile** sem alterar a estratégia de copy. Manter paleta atual (`#d0cce9`, `#e62e62`, `#0f0d1d`, `#ebe8ff`). Inspirar-se nos **padrões de layout** da [referência visual](https://figma-conversion.vercel.app/services), não na marca/cores dela.

## Pré-requisitos e ordem

1. **Recomendado:** executar [`portfolio-fullstack-content`](../portfolio-fullstack-content/SKILL.md) antes (copy estável)
2. Se o usuário pedir só UI no hero, pode rodar isoladamente — **não reescrever textos**
3. Após ambas skills: opcional [`portfolio-recruiter-review`](../portfolio-recruiter-review/SKILL.md)
4. **Deploy fora de escopo**

## Decisões visuais (defaults do candidato)

| Item       | Escolha                                                          |
| ---------- | ---------------------------------------------------------------- |
| Paleta     | Manter roxo/rosa atual                                           |
| Animações  | Sutis (fade-in scroll, hover, decorações estáticas na foto)      |
| Referência | Layout, ritmo de seções, hero decorado, responsividade           |
| Mobile nav | Sticky header + menu hamburger/drawer (proposta padrão da skill) |

## Regras

1. **Questionário primeiro:** [`visual-questionnaire.md`](visual-questionnaire.md) antes de editar
2. **Não alterar copy** (textos, métricas, nomes) — skill de conteúdo
3. **Sem Framer Motion** por padrão — CSS + hook leve se necessário
4. **`prefers-reduced-motion`:** obrigatório — ver [`animation-guidelines.md`](animation-guidelines.md)
5. **Sem dependências UI pesadas** (Radix sheet completo, etc.) sem aprovação — preferir implementação mínima
6. **Validar:** `pnpm build`, `pnpm test:jest`; Cypress se nav mobile alterar fluxo E2E

## Fluxo de execução

### Passo 1 — Questionário visual

Ler [`visual-questionnaire.md`](visual-questionnaire.md) e [`reference-patterns.md`](reference-patterns.md).

### Passo 2 — Leitura do estado atual

- `/home/kel/www/portifolio/components/sections/HeroSection.tsx`
- `/home/kel/www/portifolio/components/sections/ExperienceSection.tsx`
- `/home/kel/www/portifolio/components/sections/CorporateProjectsSection.tsx`
- `/home/kel/www/portifolio/components/sections/SkillsSection.tsx`
- `/home/kel/www/portifolio/components/sections/DifferentialsSection.tsx`
- `/home/kel/www/portifolio/app/globals.css`
- `/home/kel/www/portifolio/app/page.tsx`

### Passo 3 — Implementação (prioridade)

| Prioridade | Item                                      | Referência                                           |
| ---------- | ----------------------------------------- | ---------------------------------------------------- |
| P0         | Header sticky + hamburger mobile          | [`mobile-checklist.md`](mobile-checklist.md)         |
| P0         | Hero: foto + decorações (blur/formas)     | [`reference-patterns.md`](reference-patterns.md)     |
| P1         | Experience timeline single-column mobile  | `ExperienceSection.tsx`                              |
| P1         | Fade-in sutíl em seções                   | [`animation-guidelines.md`](animation-guidelines.md) |
| P2         | Ritmo vertical / separadores entre seções | globals + seções                                     |
| P2         | Hover refinado em cards                   | Corporate, Skills, Differentials                     |
| P3         | Touch targets ≥ 44px em filtros e CTAs    | `PersonalProjectsSection.tsx`                        |

### Passo 4 — Componentes novos (se necessário)

- `components/layout/SiteHeader.tsx` — sticky, logo, nav desktop, botão menu
- `components/layout/MobileNav.tsx` — overlay/drawer com links #sobre, #experiencia, #projetos, #contato

Extrair nav do Hero se reduzir duplicação; manter IDs de seção existentes.

### Passo 5 — Checklists

- [`mobile-checklist.md`](mobile-checklist.md)
- [`animation-guidelines.md`](animation-guidelines.md)

### Passo 6 — Validação

```bash
cd /home/kel/www/portifolio && pnpm build && pnpm test:jest
```

Testar manualmente ou browser MCP em 375px e 768px se disponível.

## Padrões da referência (resumo)

Ver detalhes em [`reference-patterns.md`](reference-patterns.md):

- Hero assimétrico: conteúdo + imagem com elementos decorativos
- Espaçamento generoso entre blocos
- Cards com hierarquia clara e hover
- Nav sempre acessível (desktop + mobile)

## Restrições técnicas

- Bundle: evitar libs de animação > ~5kb gzip sem necessidade
- Acessibilidade: `aria-expanded`, `aria-label` no menu; foco trap simples no drawer
- Imagens: manter `next/image` com `sizes` corretos
- Fontes: manter Montserrat/Poppins até questionário indicar mudança

## Formato de entrega no chat

1. Respostas do questionário visual
2. Lista de arquivos alterados/criados
3. Screenshots ou descrição do hero mobile (se browser disponível)
4. Resultado build/test
5. Sugestão: reexecutar `portfolio-recruiter-review`

## Referências

- Questionário: [`visual-questionnaire.md`](visual-questionnaire.md)
- Padrões referência: [`reference-patterns.md`](reference-patterns.md)
- Mobile: [`mobile-checklist.md`](mobile-checklist.md)
- Animações: [`animation-guidelines.md`](animation-guidelines.md)
- Conteúdo (fase anterior): [`../portfolio-fullstack-content/SKILL.md`](../portfolio-fullstack-content/SKILL.md)
- Review: [`../portfolio-recruiter-review/SKILL.md`](../portfolio-recruiter-review/SKILL.md)
