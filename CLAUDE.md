# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page for "Domínio Soluções BPO | Tax Consult" - a Brazilian tax consulting and BPO (Business Process Outsourcing) company. The project is built with modern React 19, TypeScript, and uses Tailwind CSS v4 for styling.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
bun dev

# Production build
bun run build

# Start production server
bun run start

# Lint/check code with Biome
bun run lint

# Format code with Biome
bun run format
```

## Tech Stack & Configuration

- **Framework**: Next.js 16 with App Router (no pages directory)
- **React**: Version 19.2.1 with React Compiler enabled (next.config.ts)
- **Package Manager**: Bun (note: bun.lock present)
- **Linting & Formatting**: Biome (not ESLint/Prettier)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Language**: Portuguese (pt-BR)

## Architecture

### Component Structure

The landing page follows a modular component architecture:

**Main Layout**: `app/page.tsx` orchestrates the entire landing page as sections:
1. Header (inline) - Fixed header with logo and CTA
2. `<Hero />` - Main hero section with headline and image
3. `<SocialProof />` - Client logos and testimonials
4. `<PainPoints />` - Problem identification section
5. `<Solution />` - Solution presentation
6. `<FAQ />` - Frequently asked questions
7. `<ContactForm />` - Lead capture form
8. Footer (inline) - Simple copyright footer

**Component Organization**:
- `components/landing/` - Page sections (hero, faq, contact-form, etc.)
- `components/ui/` - Reusable shadcn/ui components (button, card, accordion, input, label, textarea)
- `lib/utils.ts` - Single utility: `cn()` function for className merging

### Path Aliases

TypeScript and shadcn are configured with these aliases (tsconfig.json & components.json):
- `@/*` maps to project root
- `@/components` - all components
- `@/lib` - utilities
- `@/hooks` - React hooks (directory may not exist yet)

### Styling Approach

- Tailwind CSS v4 with PostCSS
- Color scheme: Blue (#3b5998, #1a2b4b) and Slate grays
- Custom animations from `tw-animate-css` package
- Uses CSS variables for theming (baseColor: zinc)
- Font: Jost from Google Fonts (loaded in layout.tsx)

### shadcn/ui Configuration

- Style: "new-york"
- RSC: Enabled (React Server Components)
- Icon Library: lucide-react
- Components installed: accordion, button, card, input, label, textarea

## Code Quality Standards

**Biome Configuration**:
- 2-space indentation
- Auto-organizes imports on save
- Next.js and React recommended rules enabled
- Unknown at-rules allowed (for Tailwind v4 compatibility)
- Git-aware (respects .gitignore)

**Important**: Always use `bun run lint` and `bun run format` before committing. Biome replaces both ESLint and Prettier in this project.

## Client Assets

Logo and client images are in `/public`:
- Main logo: `/dominio-e1758593003362-980x1024.png` (used in hero section)
- Client logos: coad-educacao.webp, condortravel.webp, couto-baptista.webp, diario-comercial.webp, epe.webp, galperti.webp, gem.webp, ggbe.webp, luz-publicidade.webp, offshore-reparos-navais.webp, osm-thome.webp, zmax-group.webp

## Key Implementation Patterns

1. **Server Components by Default**: All components are React Server Components unless "use client" is specified
2. **Component Composition**: Landing sections are self-contained and imported into app/page.tsx
3. **Styling Pattern**: Use `cn()` utility from `@/lib/utils` for conditional className merging
4. **Form Handling**: Forms should be client components with proper validation
5. **Image Optimization**: Use Next.js `<Image>` component for optimization (currently using `<img>` tags - consider upgrading)

## Business Context

The landing page targets Brazilian business owners experiencing:
- High tax burdens (up to 15% overpayment)
- Complex bureaucracy
- Manual/inefficient processes

The value proposition emphasizes:
- Digital transformation
- Process automation
- Tax optimization
- Security and compliance
