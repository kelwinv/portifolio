# Padrões da referência visual

Referência: [figma-conversion.vercel.app/services](https://figma-conversion.vercel.app/services)

**Importante:** copiar **padrões de composição**, não marca, copy nem paleta da referência. O portfólio mantém identidade roxo/rosa (`#d0cce9`, `#e62e62`, `#0f0d1d`, `#ebe8ff`, `#f5f3ff`).

---

## O que extrair da referência

| Padrão | Descrição | Adaptação no portfólio |
| ------ | --------- | ---------------------- |
| Hero split | Texto à esquerda, visual à direita com personagem/ilustração | Grid `lg:grid-cols-2` já existe; enriquecer lado da foto |
| Decorações no hero | Formas, blobs ou elementos atrás da imagem principal | `absolute` divs com `blur-3xl`, círculos `rounded-full`, opacidade baixa |
| Hierarquia tipográfica | Título grande, subtítulo, parágrafo de apoio, CTAs separados | Manter h1 rosa; revisar spacing `mt-*` |
| Ritmo vertical | Muito whitespace entre seções | `py-24` → `py-28` ou `py-32` onde couber; opcional `border-t border-[#ebe8ff]/50` |
| Cards em grid | Cards uniformes, hover sutil, título + corpo + ação | Corporate, Skills, Differentials, projetos pessoais |
| Header fixo | Nav sempre visível ao rolar | `sticky top-0 z-50 backdrop-blur bg-[#d0cce9]/90` |
| CTA contrastante | Botão primário sólido + secundário outline | Já usa rosa `#e62e62`; manter |
| Footer enxuto | Links + copyright | `ContactSection` — alinhar padding com seções acima |

---

## Hero — decorações na foto (implementação sugerida)

Estrutura wrapper `relative` ao redor da coluna da imagem:

```tsx
<div className="relative">
  {/* Decoração — canto superior direito */}
  <div
    aria-hidden
    className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-[#e62e62]/20 blur-2xl"
  />
  {/* Decoração — canto inferior esquerdo */}
  <div
    aria-hidden
    className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#0f0d1d]/10 blur-3xl"
  />
  {/* Anel opcional */}
  <div
    aria-hidden
    className="absolute -inset-4 rounded-[40px] border border-[#e62e62]/20"
  />
  {/* Moldura + Image existente */}
  <div className="relative rounded-[32px] bg-[#0f0d1d] p-3">...</div>
</div>
```

Regras:

- Todos decorativos com `aria-hidden`
- Não bloquear clique em CTAs
- Em mobile, reduzir tamanho dos blobs (`h-24`) para não overflow horizontal

---

## Ritmo entre seções

Alternância atual (ok): claro → escuro (impacto) → claro → ...

Melhorias opcionais:

- Seção clara após escura: leve `shadow-inner` ou gradiente de 1px no topo
- Títulos de seção: margin-bottom consistente `mb-12` ou `mb-16`

---

## Cards — hover unificado

Classe utilitária em `globals.css`:

```css
@layer utilities {
  .card-hover {
    @apply transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl;
  }
}
```

Aplicar em cards de Skills, Differentials, projetos pessoais (não exagerar translate — 2px max).

---

## Header sticky (extrair do Hero)

Mover `<header>` para `SiteHeader.tsx`:

- `sticky top-0 z-50`
- `backdrop-blur-md bg-[#d0cce9]/85 border-b border-[#0f0d1d]/5`
- Desktop: links como hoje
- Mobile: ícone Menu (lucide `Menu` / `X`) + drawer

---

## O que NÃO copiar

- Logo/marca "PEBISNIS ULUNG"
- Copy genérico de consultoria
- Paleta laranja/neutra da referência
- Ilustrações de personagem cartoon (usar foto real do candidato)

---

## Validação visual

Checklist rápido pós-implementação:

- [ ] Hero legível em 375px width
- [ ] Decorações não causam scroll horizontal
- [ ] Contraste texto/fundo WCAG AA nas seções escuras
- [ ] Nav mobile abre/fecha com teclado (Esc fecha drawer)
