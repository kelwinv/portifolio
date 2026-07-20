# AGENTS.md

## Cursor Cloud specific instructions

This is a single product: a **Next.js 15 (App Router, TypeScript) personal portfolio** site, package-managed with **pnpm**. There is no backend, database, or external service — the only service to run is the Next.js dev server. Standard commands live in `package.json` `scripts`; the notes below cover only non-obvious caveats.

### Toolchain / Node version (important)

- The project requires **Node 24.x** (`package.json` `engines`, `.nvmrc` = `lts/krypton`). Node 24 is installed via `nvm` and set as the nvm default.
- The base image ships a `/exec-daemon/node` (Node 22) that appears earlier in `PATH` and would otherwise shadow nvm. To fix this durably, `~/.bashrc` prepends the nvm default Node bin to `PATH`. So **always run commands in a login/interactive shell** (e.g. `bash -lc '...'`) so Node 24 + `pnpm` resolve correctly. A non-login shell may fall back to Node 22 and lack `pnpm`.
- `pnpm` (v10, matching CI) is provided via `corepack` on the Node 24 toolchain.

### Running the app

- Dev server: `pnpm dev` (Next.js dev with Turbopack) → serves `http://localhost:3000`. Routes: `/` and `/projetos`.
- Production preview: `pnpm build` then `pnpm start`.

### Lint / test

- ESLint: `pnpm lint:eslint:check`; Prettier: `pnpm lint:prettier:check` (autofix: `pnpm lint:prettier:fix`).
- Unit tests (Jest): `pnpm test:jest`.
- E2E (Cypress, optional): `pnpm test:cy` auto-boots the dev server via `start-server-and-test`. Cypress requires Chrome + Linux X11/GTK libs and is not needed for normal development; treat it as optional.

### Notes

- No `.env` files or secrets are required to run or test the app.
- Remote images are only allowlisted from `github.com/kelwinv/**` (`next.config.ts`); other remote image hosts will fail Next image optimization.
