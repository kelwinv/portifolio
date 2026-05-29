# Questionário de conteúdo (obrigatório)

**Regra:** o agente deve obter respostas (via `AskQuestion` ou chat) **antes** de editar arquivos. Se o usuário já respondeu na conversa atual, registrar quais itens foram confirmados e perguntar só o que faltar.

---

## Bloco A — Hero e posicionamento

| # | Pergunta | Uso |
| - | -------- | --- |
| A1 | Qual a **frase de elevator pitch** em 1 linha? (ênfase backend/infra) | Hero + metadata |
| A2 | Quais **3 tecnologias** devem aparecer no hero? (ex.: Node.js, AWS, PostgreSQL) | Hero subtitle ou parágrafo |
| A3 | Texto exato do **CTA primário** (substitui "INICIAR") | Ex.: "Ver trajetória", "Conhecer experiência" |
| A4 | Manter botão **BAIXAR CV** com o mesmo label? | Hero + testes |
| A5 | Alguma frase do hero atual deve ser **preservada verbatim**? | Respeitar palavra por palavra se sim |

**Defaults se silêncio:** tom profissional; TypeScript no lugar de Javascript; CTA "Ver trajetória".

---

## Bloco B — Case iFollow

| # | Pergunta | Uso |
| - | -------- | --- |
| B1 | Pode nomear **iFollow** publicamente? | Card corporativo |
| B2 | Descreva o **problema de negócio** em 1–2 frases (linguagem clara) | `problem` |
| B3 | Qual **decisão técnica** você tomou? (ex.: Lambda, filas, MongoDB, alertas cron) | Campo `technicalDecision` ou descrição expandida |
| B4 | Qual **trade-off** aceitou? (custo, prazo, complexidade) | Narrativa de profundidade |
| B5 | Confirma métricas atuais? (300+ itens/dia, 24 alertas, 8 clientes) | Ajustar ou manter |
| B6 | Algo **confidencial** que deve ser omitido ou anonimizado? | Não publicar |

---

## Bloco C — Case Grupo Prime

| # | Pergunta | Uso |
| - | -------- | --- |
| C1 | Pode nomear **Grupo Prime** publicamente? | Card corporativo |
| C2 | Problema de negócio (tickets, ferramenta externa cara) — correto ou ajustar? | `problem` |
| C3 | Decisão técnica principal (NestJS, PostgreSQL, Docker, PM2, Nginx?) | Profundidade |
| C4 | Trade-off relevante | Narrativa |
| C5 | Confirma R$ 5k/mês e 2.000 usuários? | Métricas |
| C6 | Restrições de confidencialidade? | Não publicar |

---

## Bloco D — Curadoria de projetos pessoais

Ver [`project-curation-guide.md`](project-curation-guide.md) para a matriz completa dos 14 projetos.

| # | Pergunta | Uso |
| - | -------- | --- |
| D1 | Quantos projetos ficam **em destaque** no site? (recomendado: 3–5) | Filtro ou flag |
| D2 | Para cada projeto listado no guia: **manter / arquivar / destacar**? | `projectsApi` |
| D3 | Quais demos você sabe que estão **vivas** hoje? | Manter botão "Ver projeto" |
| D4 | URL correta do repo **Randomizador de texto**? (hoje aponta para Game-list) | Corrigir `github` |
| D5 | Projetos arquivados: **remover do array** ou link único "Mais no GitHub"? | UX |

---

## Bloco E — Experiência e about

| # | Pergunta | Uso |
| - | -------- | --- |
| E1 | Algum bullet de experiência deve ser **reescrito** com foco backend/infra? | `experience.ts` |
| E2 | Há conquista recente (últimos 12 meses) **não listada**? | Adicionar se confirmado |
| E3 | Texto "Sobre mim" — manter estrutura atual ou enxugar? | `AboutSection.tsx` |

---

## Bloco F — Metadata e README

| # | Pergunta | Uso |
| - | -------- | --- |
| F1 | Título da aba: manter "Kelwin Vieira \| Desenvolvedor Full Stack"? | `layout.tsx` |
| F2 | Description SEO — frase preferida (máx. ~160 caracteres)? | `layout.tsx` |
| F3 | Atualizar README removendo referência a manutenção — ok? | `README.md` |

---

## Registro de respostas (preencher no chat antes de implementar)

```markdown
## Respostas — portfolio-fullstack-content

- A1 elevator pitch: ...
- A2 techs hero: ...
- A3 CTA: ...
- B3–B4 iFollow decisão/trade-off: ...
- C3–C4 Grupo Prime decisão/trade-off: ...
- D1–D5 curadoria: ...
- Demais: ...
```
