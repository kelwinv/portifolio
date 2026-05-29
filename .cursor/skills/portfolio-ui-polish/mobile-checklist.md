# Checklist mobile

Usar após implementar nav e ajustes responsivos da skill `portfolio-ui-polish`.

## Breakpoints (Tailwind padrão)

| Token | Largura | Foco |
| ----- | ------- | ---- |
| default | < 640px | Mobile portrait |
| `sm` | 640px | Mobile landscape / phablet |
| `md` | 768px | Tablet — nav desktop pode aparecer |
| `lg` | 1024px | Desktop — hero 2 colunas |

Testar pelo menos **375px** e **768px**.

---

## Header e navegação

- [ ] Header **sticky** visível ao rolar
- [ ] Em `< md`: nav desktop **oculta**; botão hamburger visível
- [ ] Botão menu: área de toque ≥ **44×44px**
- [ ] Drawer/overlay: links para `#sobre`, `#experiencia`, `#projetos`, `#contato`
- [ ] Ao clicar link no drawer: menu **fecha** + scroll suave para seção
- [ ] `aria-expanded` no botão menu
- [ ] `aria-label="Abrir menu"` / `"Fechar menu"`
- [ ] Tecla **Escape** fecha drawer
- [ ] Body não scrolla quando drawer aberto (`overflow-hidden` no body)

---

## Hero

- [ ] Grid **1 coluna** em mobile; 2 colunas em `lg+`
- [ ] Foto abaixo ou acima do texto — ordem legível (texto primeiro recomendado)
- [ ] Decorações não ultrapassam viewport (`overflow-x-hidden` no section se necessário)
- [ ] CTAs empilhados (`flex-col`) em mobile; largura total ou min-width confortável
- [ ] Ícones sociais com área de toque adequada

---

## Experiência ([`ExperienceSection.tsx`](file:///home/kel/www/portifolio/components/sections/ExperienceSection.tsx))

Problema atual: timeline alternada (`md:w-1/2`, `md:text-right`) pode confundir em telas médias.

- [ ] Mobile: **single column**, texto sempre alinhado à esquerda
- [ ] Linha vertical da timeline: visível ou simplificada em mobile
- [ ] Bolinha do timeline não sobrepõe texto
- [ ] Cards com padding `p-6` em mobile se `p-8` apertar

Sugestão de classes:

```tsx
// Mobile: full width, left aligned
className="relative mb-12 w-full md:mb-16 md:w-1/2 ..."
// Esconder alternância em mobile:
className={`... ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8 md:text-left"}`}
```

---

## Projetos pessoais

- [ ] Grid: 1 col → `md:2` → `lg:3` (já parcialmente ok)
- [ ] Botões filtro (Todos/Design/Code): `min-h-[44px]`, wrap em `flex-wrap`
- [ ] Cards "Ver projeto" / "Ver código": stack vertical em telas muito estreitas se necessário

---

## Seções gerais

- [ ] Padding horizontal `px-4` ou `px-6` em mobile se `px-8` for largo demais
- [ ] Títulos `text-4xl` em mobile, `text-5xl` em desktop (evitar overflow)
- [ ] Tabelas inexistentes — ok

---

## Performance mobile

- [ ] Imagens com `sizes` apropriados (hero priority ok)
- [ ] Sem animações pesadas em mobile low-end
- [ ] `prefers-reduced-motion`: animações desligadas — ver [`animation-guidelines.md`](animation-guidelines.md)

---

## Testes automatizados

- [ ] `pnpm test:jest` passa
- [ ] Considerar E2E Cypress: abrir menu mobile + clicar link (se implementado)

Exemplo E2E opcional:

```typescript
cy.viewport(375, 667);
cy.get('[aria-label="Abrir menu"]').click();
cy.contains("Sobre").click();
cy.get("#sobre").should("be.visible");
```

---

## Dispositivos de referência (emulação)

- iPhone SE / 375×667
- iPhone 14 / 390×844
- iPad / 768×1024
