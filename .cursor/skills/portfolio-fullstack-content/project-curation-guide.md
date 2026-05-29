# Guia de curadoria — projetos pessoais

Objetivo: reduzir ruído (feedback recruiter: 14 projetos diluem a mensagem) mantendo só o que representa o nível **atual** do candidato full stack (backend/infra + entrega).

## Critérios de decisão

Para cada projeto, classificar:

| Classificação | Significado | Ação no site |
| ------------- | ----------- | ------------ |
| **Destacar** | Representa bem full stack ou backend; demo viva ou código sólido | Exibir no grid principal |
| **Manter** | Ok mostrar, mas não é destaque | Exibir se sobrar vaga (< 5 total) |
| **Arquivar** | Bootcamp antigo, CSS challenge, demo morta, link errado | Remover do grid ou só GitHub geral |

## Perguntas por projeto (usar com o candidato)

1. Este projeto ainda representa seu **nível atual**? (sim / parcial / não)
2. A **demo** funciona hoje? (sim / não / só código)
3. O projeto mostra **backend ou infra**, não só UI? (sim / não)
4. Você se sentiria confortável **explicando em entrevista**? (sim / não)

## Inventário atual (`projectsApi.ts`)

| # | Nome | GitHub | Demo | Notas para triagem |
| - | ---- | ------ | ---- | ------------------ |
| 1 | hollowKnight site | kelwinv/hollow-knight-scss | GitHub Pages | Design/CSS; provável arquivar |
| 2 | nlw04-node | kelwinv/nlw04-node | — | Backend NLW; considerar se ainda relevante |
| 3 | moveit | kelwinv/moveit | nextmoveit.vercel.app | Next.js; candidato a destacar |
| 4 | dev list | kelwinv/dev-list | dev-list.vercel.app | Full stack UI; avaliar vs dev-list-server |
| 5 | dev list server | kelwinv/dev-list-server | — | **Backend + PostgreSQL**; forte para full stack |
| 6 | chat com socket.io | kelwinv/chat-com-socket.io | — | Real-time Node; candidato a destacar |
| 7 | among Us css | kelwinv/amongUs-css-drawing | GitHub Pages | CSS challenge; provável arquivar |
| 8 | Ecoleta | kelwinv/NLW-Booster | — | NLW full stack |
| 9 | be the hero | kelwinv/semanaOminiStack11 | — | NLW full stack |
| 10 | Game List | kelwinv/Game-list | — | TypeScript + PostgreSQL |
| 11 | Randomizador de texto | kelwinv/Game-list (**link errado**) | Heroku (verificar) | **Corrigir github**; demo provavelmente morta |
| 12 | Happy | kelwinv/NextLevelWeek3 | — | NLW3 |
| 13 | Proffy | kelwinv/nextlevelweek02 | — | NLW2 |
| 14 | letmeask | kelwinv/nlw06-letmeask | Firebase hosting | React + Firebase |

## Recomendação inicial (agente — não aplicar sem confirmação)

Sugestão de **5 destacados** para perfil backend/infra full stack:

1. **dev list server** — Node + PostgreSQL
2. **chat com socket.io** — tempo real + Node
3. **moveit** — Next.js em produção
4. **letmeask** — demo viva
5. **Game List** ou **dev list** (escolher um; evitar duplicar "dev list")

Arquivar ou mover para "Mais no GitHub": hollowKnight, among Us css, Randomizador (até corrigir), NLWs redundantes se limite for 5.

## Implementação técnica

### Opção A — Campo `featured`

```typescript
export type projectInfoType = {
  // ...campos existentes
  featured?: boolean;
};
```

Em `PersonalProjectsSection.tsx`, filtrar `projectsInfo.filter(p => p.featured !== false)` ou só `featured === true`.

### Opção B — Array separado

Exportar `featuredProjects` e `archivedProjects` de `projectsApi.ts`.

### Opção C — Remover do array

Simples; perde histórico no código (não recomendado se candidato quer manter repo completo).

## Link "Mais no GitHub"

Se projetos forem arquivados mas não removidos:

```tsx
<p className="mt-8 text-center">
  <a href="https://github.com/kelwinv?tab=repositories">
    Ver mais projetos no GitHub
  </a>
</p>
```

## Validação de demos (quando possível)

Tentar HEAD request ou fetch nas URLs `project:` antes de manter botão "Ver projeto". Se falhar, perguntar ao candidato: remover demo ou atualizar URL.

URLs com demo hoje no código:

- https://kelwinv.github.io/hollow-knight-scss
- https://nextmoveit.vercel.app
- https://dev-list.vercel.app
- https://kelwinv.github.io/amongUs-css-drawing/
- https://randomizador-de-texto.herokuapp.com/ (suspeita: legado)
- https://nlw06letmeask.web.app
