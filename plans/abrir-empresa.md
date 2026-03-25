# Plan: Create /abrir-empresa Sub Landing Page

## Context

Need a new landing page at `/abrir-empresa` targeting Google Ads keywords: "abrir empresa", "abrir CNPJ", "contabilidade para MEI", "abrir microempresa", "regularizar empresa". Same visual design as the main LP, only copy changes. Same form workflow (server action, schema, DB, WhatsApp redirect).

## Approach

Create a new route with page-specific section components. Reuse unchanged components directly.

## Files to Create

### 1. `app/abrir-empresa/page.tsx`

- Same layout structure as `app/page.tsx` (header, sections, footer)
- Page-specific SEO metadata targeting the Google Ads keywords
- Imports page-specific hero, pain-points, solution, faq, contact-form from `components/landing/abrir-empresa/`
- Reuses `SocialProof` and `Experience` from existing components

### 2. `components/landing/abrir-empresa/hero.tsx`

- Same design as existing hero (gradient bg, SVG pattern, 2-col grid, image, ContactFormDialog)
- Copy focused on: "Abra sua empresa sem burocracia" / opening a CNPJ / MEI
- Same CTA button triggering ContactFormDialog

### 3. `components/landing/abrir-empresa/pain-points.tsx`

- Same 3-card blue layout
- Pain points adapted to company formation:
  1. Burocracia complexa (complex paperwork)
  2. Escolha errada de regime tributário (wrong tax regime choice)
  3. Demora e custos ocultos (delays and hidden costs)

### 4. `components/landing/abrir-empresa/solution.tsx`

- Same 2-col layout with benefits list + partner logos
- Benefits adapted: abertura rápida, escolha do regime certo, alvará e licenças, suporte pós-abertura
- Same partner logos grid
- Same ContactFormDialog CTA

### 5. `components/landing/abrir-empresa/faq.tsx`

- Same Accordion component
- Questions about: MEI vs ME vs EPP, documentos necessários, tempo de abertura, custo, regime tributário

### 6. `components/landing/abrir-empresa/contact-form.tsx`

- Same form layout and submission logic as existing ContactForm
- Changed surrounding text (heading/description about company formation)
- Adapted "motivo" dropdown options:
  - Abertura de MEI
  - Abertura de Microempresa (ME)
  - Abertura de Empresa (EPP/LTDA)
  - Regularização de Empresa
  - Alteração Contratual
  - Consultoria Tributária

## Reused As-Is (no changes)a

- `components/landing/social-proof.tsx` - client logos carousel
- `components/landing/experience.tsx` - company history section
- `components/landing/contact-form-dialog.tsx` - modal form (used inside hero & solution)
- `lib/actions/form-actions.ts` - server action
- `lib/schemas/contact-schema.ts` - Zod schema
- All UI components, tracking utilities, DB schema

## Verification

1. `bun dev` and visit `http://localhost:3000/abrir-empresa`
2. Verify all sections render with correct copy
3. Test form submission (both inline and dialog)
4. `bun run lint` and `bun run format` pass
5. `bun run build` succeeds
