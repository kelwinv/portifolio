# Checklist de copy (pós-edição)

Marcar cada item antes de encerrar a skill `portfolio-fullstack-content`.

## Hero ([`HeroSection.tsx`](file:///home/kel/www/portifolio/components/sections/HeroSection.tsx))

- [ ] Sem emojis (✨ etc.)
- [ ] CTA primário não é "INICIAR" — usa texto acordado no questionário
- [ ] "TypeScript" (não "Javascript" isolado) onde stack é citada
- [ ] Elevator pitch menciona **backend e/ou infra** (AWS, APIs, etc.)
- [ ] Tom profissional, sem frases genéricas tipo "desenvolvedor confiável" sem substituto melhor
- [ ] Links sociais e CV intactos e corretos

## About ([`AboutSection.tsx`](file:///home/kel/www/portifolio/components/sections/AboutSection.tsx))

- [ ] Alinhado ao hero (mesma narrativa full stack)
- [ ] Menciona entrega de valor / sistemas escaláveis / APIs se aplicável
- [ ] Sem claims de senioridade não solicitados

## Metadata ([`app/layout.tsx`](file:///home/kel/www/portifolio/app/layout.tsx))

- [ ] `title` coerente com posicionamento Full Stack
- [ ] `description` ≤ ~160 caracteres, inclui keywords: APIs, AWS ou cloud, TypeScript ou Node
- [ ] `lang="pt-BR"` mantido

## Experiência ([`lib/content/experience.ts`](file:///home/kel/www/portifolio/lib/content/experience.ts))

- [ ] Bullets com métricas onde possível
- [ ] Stacks backend/infra visíveis (Node, AWS, Docker, PostgreSQL, etc.)
- [ ] Sem inventar conquistas não confirmadas

## Cases corporativos ([`lib/content/corporate-projects.ts`](file:///home/kel/www/portifolio/lib/content/corporate-projects.ts))

- [ ] iFollow expandido (decisão técnica + trade-off se acordado)
- [ ] Grupo Prime expandido (decisão técnica + trade-off se acordado)
- [ ] Métricas confirmadas pelo candidato
- [ ] Confidencialidade respeitada

## Projetos pessoais ([`projectsApi.ts`](file:///home/kel/www/portifolio/projectsApi.ts))

- [ ] 3–5 projetos em destaque (ou filtro equivalente)
- [ ] Link Randomizador corrigido (se aplicável)
- [ ] Demos mortas removidas ou URLs atualizadas
- [ ] Descrições revisadas (ortografia, clareza mínima)
- [ ] Link "Mais no GitHub" se projetos arquivados

## README ([`README.md`](file:///home/kel/www/portifolio/README.md))

- [ ] Sem menção a "página de manutenção" ou baseline antiga
- [ ] Descreve portfólio completo e stack atual
- [ ] Índice de skills atualizado (se alterado nesta sessão)

## Testes ([`test/unit/page/home.test.tsx`](file:///home/kel/www/portifolio/test/unit/page/home.test.tsx))

- [ ] Asserts atualizados para novo texto do CTA
- [ ] Headings principais ainda cobertos
- [ ] `pnpm test:jest` passa

## Build

- [ ] `pnpm build` passa

## O que esta skill NÃO deve ter alterado

- [ ] Layout visual, animações, menu mobile (skill `portfolio-ui-polish`)
- [ ] Deploy ou config Vercel

## Próximo passo sugerido ao candidato

> Aplicar `portfolio-ui-polish` para hero decorado, mobile nav e animações sutis.  
> Opcional: reexecutar `portfolio-recruiter-review` para comparar notas.
