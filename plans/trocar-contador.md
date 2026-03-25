# Plan: Create /trocar-contador Sub Landing Page

## Context

Need a new landing page at `/trocar-contador` targeting Google Ads keywords: "trocar de contador", "mudar de contabilidade", "trocar de escritório contábil", "insatisfeito com contador". Same visual design as the main LP, only copy changes. Same form workflow (server action, schema, DB, WhatsApp redirect).

## Approach

Create a new route with page-specific section components. Reuse unchanged components directly. Follow the exact same pattern used for `/abrir-empresa`.

## Files to Create

### 1. `app/trocar-contador/page.tsx`

- Same layout structure as `app/page.tsx` (header, sections, footer)
- Page-specific SEO metadata targeting the Google Ads keywords
- Imports page-specific hero, pain-points, solution, faq, contact-form from `components/landing/trocar-contador/`
- Reuses `SocialProof` and `Experience` from existing components
- Header CTA text: "Trocar de Contador"

### 2. `components/landing/trocar-contador/hero.tsx`

- Same design as existing hero (gradient bg, SVG pattern, 2-col grid, image, ContactFormDialog)
- Copy focused on: "Troque de Contador sem Dor de Cabeça" / migração contábil segura
- Subheadline about: tired of bad service, errors, lack of proactivity — switch easily
- Same CTA button triggering ContactFormDialog

### 3. `components/landing/trocar-contador/pain-points.tsx`

- Same 3-card blue layout
- Pain points adapted to switching accountants:
  1. Falta de atenção e suporte (neglect, unanswered calls, delayed responses)
  2. Erros e atrasos nas obrigações (missed deadlines, wrong filings, penalties)
  3. Zero proatividade e planejamento (no tax planning, no growth advice, purely reactive)

### 4. `components/landing/trocar-contador/solution.tsx`

- Same 2-col layout with benefits list + partner logos
- Benefits adapted: migração sem burocracia, atendimento próximo e dedicado, compliance em dia, planejamento tributário proativo
- Same partner logos grid
- Same ContactFormDialog CTA

### 5. `components/landing/trocar-contador/faq.tsx`

- Same Accordion component
- Questions about: como funciona a troca de contador, preciso avisar meu contador atual, quanto tempo leva a migração, vou perder dados/histórico, tem custo para trocar, o que acontece com minhas obrigações pendentes

### 6. `components/landing/trocar-contador/contact-form.tsx`

- Same form layout and submission logic as existing ContactForm
- Changed surrounding text (heading/description about switching accountants)
- Heading: "Pronto para mudar de contador?"
- Description about: talk to our team, we handle the entire migration process
- Card title: "Solicitar Migração"
- Adapted "motivo" dropdown label: "Motivo da Troca"
- Adapted dropdown options:
  - Insatisfação com atendimento
  - Erros recorrentes na contabilidade
  - Falta de planejamento tributário
  - Custos altos do contador atual
  - Migração de escritório contábil
  - Outro motivo

## Reused As-Is (no changes)

- `components/landing/social-proof.tsx` - client logos carousel
- `components/landing/experience.tsx` - company history section
- `components/landing/contact-form-dialog.tsx` - modal form (used inside hero & solution)
- `lib/actions/form-actions.ts` - server action
- `lib/schemas/contact-schema.ts` - Zod schema
- All UI components, tracking utilities, DB schema

## Verification

1. `bun dev` and visit `http://localhost:3000/trocar-contador`
2. Verify all sections render with correct copy
3. Test form submission (both inline and dialog)
4. `bun run lint` and `bun run format` pass
5. `bun run build` succeeds
