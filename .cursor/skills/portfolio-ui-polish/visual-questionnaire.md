# Questionário visual (obrigatório)

Obter respostas **antes** de editar componentes ou CSS. Complementa defaults já acordados (paleta roxo/rosa, animações sutis).

---

## Bloco V1 — Hero e decorações

| # | Pergunta | Opções / notas |
| - | -------- | -------------- |
| V1 | Estilo das **decorações** ao redor da foto? | Círculos/blur CSS · Borda gradiente · Badge flutuante com ícones de stack · Combinação |
| V2 | Foto de perfil: manter moldura escura atual (`rounded-[32px] bg-[#0f0d1d]`) ou suavizar? | Manter · Suavizar · Substituir por anel gradiente rosa |
| V3 | Elementos decorativos: **estáticos** ou **micro-animação** (ex.: float lento)? | Estáticos (default) · Float sutil |

---

## Bloco V2 — Tipografia e ritmo

| # | Pergunta | Opções |
| - | -------- | ------ |
| V4 | Fontes Montserrat/Poppins via classes Tailwind — **manter** ou migrar para stack do projeto? | Manter · Simplificar (font-sans system) |
| V5 | Seções que mais incomodam no **mobile** hoje? | Hero · Timeline experiência · Grid projetos · Filtros · Outra |
| V6 | Aumentar **espaçamento vertical** entre seções (mais ar na referência)? | Sim moderado · Sim forte · Manter atual |

---

## Bloco V3 — Navegação mobile

| # | Pergunta | Default da skill |
| - | -------- | ---------------- |
| V7 | Padrão de nav mobile | **Sticky header + hamburger + drawer** (confirmar ou ajustar) |
| V8 | Drawer: lateral esquerda ou **fullscreen** overlay? | Lateral (default) · Fullscreen |
| V9 | Fechar menu ao clicar em link? | Sim (default) |

---

## Bloco V4 — Animações

| # | Pergunta | Default |
| - | -------- | ------- |
| V10 | Fade-in ao scroll: **IntersectionObserver** leve ou só CSS? | IO leve (default) · Só CSS |
| V11 | Quais seções animam entrada? | Todas abaixo do fold · Só hero + impacto · Hero + projetos |
| V12 | Intensidade hover em cards | Leve (default) · Moderada |

---

## Bloco V5 — Escopo desta execução

| # | Pergunta | Opções |
| - | -------- | ------ |
| V13 | Escopo | Hero + nav mobile · Hero + nav + experience mobile · Pass completo (todas seções checklist) |
| V14 | Alguma seção **não deve ser alterada** visualmente? | Listar |

---

## Registro (preencher no chat)

```markdown
## Respostas — portfolio-ui-polish

- V1 decorações: ...
- V7–V9 nav: ...
- V10–V11 animações: ...
- V13 escopo: ...
```

## Confirmação explícita

Antes de implementar, confirmar:

> Não vou alterar textos/copy nesta fase — apenas layout, CSS e comportamento visual.
