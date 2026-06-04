# Diretrizes de animação (sutis)

Nível acordado: **sutil** — reveal ao scroll, hover suave, decorações estáticas na foto (micro-float opcional no hero).

## Princípios

1. Animações **reforçam hierarquia**, não distraem
2. Duração curta: **200–400ms** para hover/tap; **450–550ms** para reveal
3. Respeitar **`prefers-reduced-motion`** via `useReducedMotion()` do Motion
4. Animar só **opacity** e **transform** (GPU-friendly)
5. Evitar animar `width`, `height`, `top`, `left` — usar `transform`

---

## Motion — reveal ao scroll

Pacote: `motion` (`import { motion } from "motion/react"`).

**Variantes compartilhadas:** [`lib/motion/variants.ts`](../../../lib/motion/variants.ts)

**Componentes:**

- [`ScrollReveal`](../../../components/ui/ScrollReveal.tsx) — item único (`whileInView`, `once`)
- [`StaggerReveal`](../../../components/ui/StaggerReveal.tsx) + `StaggerItem` — grids e listas com stagger (~80ms)

Uso em seção (Server Component pode importar os wrappers client):

```tsx
<StaggerReveal className="grid ...">
  {items.map((item) => (
    <StaggerItem key={item.id} className="card-hover ...">
      ...
    </StaggerItem>
  ))}
</StaggerReveal>
```

Timeline (zigzag): `ScrollReveal` com `slideFromLeft` / `slideFromRight`.

Filtros dinâmicos (ex.: projetos): `AnimatePresence` + `StaggerItem animatePresence` com variantes `exit`.

---

## Hover em cards

CSS em `globals.css` (`.card-hover`) para elevação geral.

Motion pontual onde faz sentido:

- Cards do marquee corporativo: `whileHover={{ y: -2 }}`
- Botões `primary` / `filter`: `whileTap={{ scale: 0.98 }}`

---

## Micro-float na decoração do hero

CSS `@keyframes float` em `globals.css` — só elementos decorativos `aria-hidden`.

---

## Menu mobile

[`MobileNav`](../../../components/layout/MobileNav.tsx): `AnimatePresence` + spring no drawer; fallback CSS quando `useReducedMotion()`.

---

## Nav desktop (hero)

[`HeroDesktopNav`](../../../components/layout/HeroDesktopNav.tsx): `layoutId="hero-nav-indicator"` entre itens ativos; fallback com indicador `transform`/`width` em reduced motion.

---

## Scroll suave

Util [`lib/scroll.ts`](../../../lib/scroll.ts) — `behavior: "auto"` quando reduced motion.

---

## Marquee

[`MarqueeCarousel`](../../../components/ui/MarqueeCarousel.tsx) já usa Motion + pausa em reduced motion.

---

## O que evitar

- Parallax pesado além do hero atual
- Autoplay de vídeo/GIF sem controle
- Múltiplas animações simultâneas na primeira dobra
- Blink ou pulse agressivo em CTAs
- Reveal no scroll em conteúdo sempre visível (ex.: marquee infinito)

---

## Checklist pré-merge

- [ ] `prefers-reduced-motion` testado (DevTools → Rendering)
- [ ] Nenhum layout shift (CLS) ao animar entrada
- [ ] Lighthouse mobile: animações não degradam LCP do hero (`priority` na foto)
