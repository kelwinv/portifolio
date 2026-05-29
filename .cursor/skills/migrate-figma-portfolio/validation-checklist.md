# Checklist de validação (portifolio-gerado → portifolio)

Use este checklist para avaliar o estado do `portifolio-gerado` e orientar o plano de migração para `/home/kel/www/portifolio`.

## Status atual (baseado na validação)

### OK

- **Estrutura de seções e ordem**: `HomePage` + 8 seções em `/home/kel/www/portifolio-gerado/src/app/App.tsx`.
- **Conteúdo PT-BR e foco recrutador**: texto forte, métricas e timeline com empresas reais (iFollow, Grupo Prime, Enline, Freelancer).
- **Seções abaixo do hero responsivas**: grids com `md:` / `lg:` nas seções (ex.: `/home/kel/www/portifolio-gerado/src/app/components/ProjectsSection.tsx`).
- **Paleta base compatível**: cores e tipografia casam com tokens já presentes em `/home/kel/www/portifolio/app/globals.css`.
- **Âncoras principais**: `#sobre`, `#experiencia`, `#projetos`, `#contato`.

### Parcial

- **Hero (HomePage Figma)**: existe e está visualmente completo, mas usa layout absoluto e dimensões fixas em `/home/kel/www/portifolio-gerado/src/imports/HomePage.tsx`. Deve ser reescrito responsivo em Next.
- **Projetos “destaque”**: existem 6 cards com stack/problema/resultado em `/home/kel/www/portifolio-gerado/src/app/components/ProjectsSection.tsx`, porém os botões não têm navegação real.
- **Dados hardcoded**: listas e conteúdos estão em TSX. Para manutenção no Next, é recomendável extrair para módulos em `/home/kel/www/portifolio/lib/content/`.

### Pendente

- **Identidade (nome/alt/footer)**: `Vitor Miranda` aparece em `/home/kel/www/portifolio-gerado/src/app/components/ContactSection.tsx` e alt da imagem em `HomePage.tsx`. Precisa virar Kelwin.
- **Links reais**: placeholders no hero e contato:
  - `https://linkedin.com`, `https://github.com`, `mailto:contato@exemplo.com`
  - Referência correta: `/home/kel/www/portifolio/app/page.tsx`.
- **Imagem do perfil**: `figma:asset/...png` em `HomePage.tsx` precisa ser substituído por asset real em `public/`.
- **CV**: botão “BAIXAR CV” está em `alert()`; falta PDF e wiring.
- **Assets do projectsApi**: `/home/kel/www/portifolio/projectsApi.ts` referencia `public/img/*` que não existe no repo atual; precisa restaurar imagens ou ajustar.
- **Animações sutis de impacto**: o brief sugere animação nos números, mas não há implementação no gerado.
- **Verificação de build do gerado**: não há `tsconfig`/lockfile no repo gerado; a migração deve validar build e garantir que nada dependa do runtime do Figma Make.

### Não migrar (a menos que o usuário peça)

- **Kit shadcn completo do template**: `/home/kel/www/portifolio-gerado/src/app/components/ui/*` (peso e superfície grande).
- **Dependências do template** que não agregam ao portfólio (ex.: MUI, react-router, recharts) declaradas em `/home/kel/www/portifolio-gerado/package.json`.

## Uso no plano

No plano, copiar os itens deste checklist e explicar:

- O que será migrado “como está”
- O que será reescrito/adaptado (principalmente o hero)
- O que precisa de decisões/inputs (assets, CV, links, projetos híbridos)
