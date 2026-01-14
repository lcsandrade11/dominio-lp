# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds Next.js App Router entrypoints (`layout.tsx`, `page.tsx`) and global styles (`globals.css`).
- `components/landing/` contains landing page sections (hero, faq, contact-form, etc.).
- `components/ui/` hosts shadcn/ui primitives used across the page.
- `lib/` contains shared logic: `actions/` server actions, `db/` Drizzle schema and migrations (`lib/db/drizzle/`), `hooks/`, `schemas/`, and `utils.ts`.
- `public/` stores static assets, including `public/clients/` and `public/partners/` logo sets.
- `docs/` includes operational guides (see Google Sheets setup).

## Build, Test, and Development Commands
Use Bun for consistency with `bun.lock`:
- `bun dev`: start the dev server at `http://localhost:3000`.
- `bun run build`: create a production build.
- `bun run start`: run the production server.
- `bun run lint`: run Biome checks.
- `bun run format`: format code with Biome.

## Coding Style & Naming Conventions
- TypeScript + React 19 with Next.js server components by default.
- Indentation is 2 spaces; formatting and linting are handled by Biome.
- Use the `@/*` path alias (for example, `@/components/landing/hero`).
- Component files in `components/landing/` use kebab-case and export PascalCase components (for example, `contact-form.tsx` exports `ContactForm`).
- Use `cn()` from `lib/utils.ts` for className merging; add `"use client"` only when needed.

## Testing Guidelines
- No test runner is configured yet. If you add tests, use `*.test.tsx` (or `*.test.ts`) and document the new scripts in `package.json`.
- For now, validate changes with `bun run lint` and local UI checks.

## Commit & Pull Request Guidelines
- Commit history uses short, imperative, sentence-case messages without prefixes (for example, "Add Google Sheets integration for form submissions").
- PRs should include a short summary, testing notes, and screenshots for UI changes, plus any linked issues or context.

## Configuration & Integrations
- Environment variables live in `.env` and should not be committed.
- Google Sheets integration setup is documented in `docs/GOOGLE_SHEETS_SETUP.md`.
- Update Drizzle migrations in `lib/db/drizzle/` when modifying `lib/db/schema.ts`.
