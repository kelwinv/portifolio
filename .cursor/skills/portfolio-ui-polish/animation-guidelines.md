# Diretrizes de animação (sutis)

Nível acordado: **sutil** — fade-in ao scroll, hover suave, decorações estáticas na foto (micro-float opcional se candidato confirmar).

## Princípios

1. Animações **reforçam hierarquia**, não distraem
2. Duração curta: **200–400ms** para hover; **400–600ms** para fade-in
3. Respeitar **`prefers-reduced-motion: reduce`**
4. Preferir **CSS** e **transform/opacity** (GPU-friendly)
5. Evitar animar `width`, `height`, `top`, `left` — usar `transform`

---

## Fade-in ao scroll (IntersectionObserver)

Hook mínimo (criar em `lib/hooks/useFadeInOnScroll.ts` se não existir):

```typescript
"use client";

import { useEffect, useRef, useState } from "react";

export function useFadeInOnScroll(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
```

Uso em seção:

```tsx
const { ref, visible } = useFadeInOnScroll();
<section
  ref={ref}
  className={`transition-all duration-500 ${
    visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  }`}
>
```

Alternativa **só CSS** (sem IO): `@keyframes fadeInUp` em `globals.css` com `animation-fill-mode: both` — menos controle de "once".

---

## Hover em cards

```css
@layer utilities {
  .card-hover {
    @apply transition-[transform,box-shadow] duration-300 ease-out;
  }
  .card-hover:hover {
    @apply -translate-y-0.5 shadow-xl;
  }
  @media (prefers-reduced-motion: reduce) {
    .card-hover:hover {
      transform: none;
    }
  }
}
```

---

## Micro-float na decoração do hero (opcional)

Somente se V3 do questionário = "float sutil":

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .animate-float {
    animation: none;
  }
}
```

Aplicar só em elementos `aria-hidden` decorativos.

---

## Menu mobile — transição drawer

```css
.drawer-enter {
  @apply translate-x-0 opacity-100 transition-transform duration-300 ease-out;
}
.drawer-exit {
  @apply -translate-x-full opacity-0;
}
```

Ou toggle classes Tailwind `translate-x-0` / `-translate-x-full` no painel.

---

## Scroll suave

Já usado no Hero (`scrollIntoView({ behavior: "smooth" })`). Com reduced motion:

```typescript
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
};
```

Centralizar em util compartilhada se header e hero usarem scroll.

---

## O que evitar

- Parallax pesado
- Framer Motion (salvo pedido explícito)
- Autoplay de vídeo/GIF sem controle
- Múltiplas animações simultâneas na primeira dobra
- Blink ou pulse agressivo em CTAs

---

## Checklist pré-merge

- [ ] `prefers-reduced-motion` testado (DevTools → Rendering)
- [ ] Nenhum layout shift (CLS) ao animar entrada
- [ ] Lighthouse mobile: animações não degradam LCP do hero (`priority` na foto)
