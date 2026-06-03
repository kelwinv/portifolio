# Checklist de evidências (coleta objetiva)

Use este arquivo **antes** de julgar. Registre apenas fatos observáveis.

## Alvo padrão

`/home/kel/www/portifolio` — site Next.js em produção local ou deploy.

## Evidência primária (o que o visitante vê)

| Fonte              | Path / URL                                 | O que extrair                                                        |
| ------------------ | ------------------------------------------ | -------------------------------------------------------------------- |
| Página principal   | `/home/kel/www/portifolio/app/page.tsx`    | Títulos, copy, links (email, GitHub, LinkedIn, site antigo), imagens |
| Metadata / SEO     | `/home/kel/www/portifolio/app/layout.tsx`  | `title`, `description`, `lang`                                       |
| Estilos / branding | `/home/kel/www/portifolio/app/globals.css` | Paleta, fontes, classes `.title` / `.subtitle`                       |
| Browser (opcional) | `http://localhost:3000/`                   | Primeira dobra, responsividade, tempo de entendimento (~30s)         |

### Fatos conhecidos no estado atual (baseline — portfólio migrado)

- Título metadata: "Kelwin Vieira \| Desenvolvedor Full Stack"
- Seções visíveis: Hero, Sobre, Impacto, Skills, Experiência, Projetos (corporativos + pessoais), Diferenciais, Formação, Contato
- Contatos: `kelwin.v.goncalves@gmail.com`, GitHub `kelwinv`, LinkedIn `kelwinv`, CV `/cv/kelwin.vieira.pdf`
- Projetos pessoais: 14 entradas em `projectsApi.ts` (curadoria recomendada via `portfolio-fullstack-content`)
- **Nota:** URL pública pode divergir do código até deploy; declarar qual UX foi avaliada

## Evidência secundária (repo — não confundir com UX)

| Fonte                | Path                                                     | O que extrair                                         | Como usar no relatório                                           |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
| Catálogo de projetos | `/home/kel/www/portifolio/projectsApi.ts`                | Quantidade, nomes, stacks (`tecs`), links GitHub/demo | "Existe no código, **não aparece no site**"                      |
| README               | `/home/kel/www/portifolio/README.md`                     | Stack declarada vs realidade                          | Inconsistências (ex.: styled-components vs Tailwind)             |
| Testes               | `/home/kel/www/portifolio/test/unit/page/home.test.tsx`  | O que o projeto testa hoje                            | Indica expectativa de página de manutenção                       |
| E2E                  | `/home/kel/www/portifolio/test/e2e/page/home/home.cy.ts` | Link "Site antigo" testado                            | Maturidade de QA do estado atual                                 |
| CI                   | `/home/kel/www/portifolio/.github/workflows/`            | Lint + Jest + Cypress                                 | Mencionar só se agente técnico/corporativo e se relevante à vaga |

## Evidência terciária (opcional)

- Site antigo (se acessível): `https://portifolio-git-main-kelwinv.vercel.app` — comparar com manutenção
- Deploy atual: `https://kelwin.vercel.app` — pode refletir manutenção

## Separação obrigatória no relatório

Para cada afirmação, classificar:

- **[UX]** — visível na página sem abrir o código
- **[Repo]** — só quem inspeciona o repositório veria
- **[Não evidenciado]** — não aparece em nenhuma fonte

## Perguntas de triagem (30 segundos — Agente 1)

Responder com base só em **[UX]**:

1. Quem é o candidato?
2. O que ele faz (cargo/stack)?
3. Por que contratá-lo?
4. Onde ver trabalho anterior?
5. Como entrar em contato?

Se alguma resposta for "não dá para saber", penalizar Clareza e Credibilidade.

## Keywords ATS (Agente 3)

Comparar texto visível em `page.tsx` + metadata de `layout.tsx` contra lista da vaga em `agents/agent-3-enterprise.md`.

Registrar: **match**, **parcial**, **ausente** — sem inventar keywords no currículo.
