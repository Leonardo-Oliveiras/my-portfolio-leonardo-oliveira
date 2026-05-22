# Portfolio architecture

Single-page Next.js 16 App Router portfolio. Content in `lib/i18n` + `lib/site.ts`; UI in `components/sections/`. Design rationale: [`docs/DECISIONS.md`](docs/DECISIONS.md).

## Layout

- `app/layout.tsx` — fonts, `ThemeProvider`, `LocaleProvider`, metadata
- `app/page.tsx` — composes sections from `@/components/sections`
- `app/globals.css` — theme tokens, `.section-dark`, animations

## Content

- **`lib/locales/{en,pt,es}.ts`** — all copy per language
- **`lib/i18n.ts`** — `getTranslations(locale, fallback?)` with Strategy fallback; locale metadata
- **`lib/site.ts`** — `siteConfig` typed via `types/site.ts`
- **`types/`** — `PortfolioSection`, `ProjectItem`, `SiteConfig` contracts
- **`config/portfolio-sections.ts`** — hash nav sections (`buildPortfolioNavSections`)
- **`lib/index.ts`** — public API: `getTranslations`, `siteConfig`, `cn`

## Sections

Each section under `components/sections/` may include a colocated `data.ts` for constants (icons, accent maps, animation variants).

## Hooks (`hooks/`)

Client-only logic extracted from section components:

- `useScrolled(threshold)` — scroll past threshold (Navigation header blur)
- `useActiveSection(sectionIds)` — IntersectionObserver viewport tracking
- `useScrollToSection(onAfterScroll?)` — hash / id smooth scroll
- `useMounted()` — client-only gate (theme toggle hydration)
- `locale-context.tsx` — split context: `useLocaleValue`, `useTranslations`, `useSetLocale` (and `useLocale` composite)

`components/locale-provider.tsx` re-exports locale hooks for stable import paths.

## Testing

- **Vitest** + **jsdom** + **Testing Library** (`vitest.config.ts`, `vitest.setup.ts`)
- Unit tests: `hooks/*.test.ts`, `lib/*.test.ts`, `components/locale-provider.test.tsx`
- Run: `npm test` (watch), `npm run test:run` (CI), `npm run test:ui`

## UI

Active shadcn components only: `button`, `badge`, `dropdown-menu` in `components/ui/`.

## Performance

- Critical path: `Navigation`, `HeroSection`, `WhatsAppFloat` (eager in `app/page.tsx`).
- LCP image: `components/hero-profile-image.tsx` (Server Component, `priority` + `fetchPriority="high"`).
- Below fold: `components/below-fold-sections.tsx` lazy-loads sections + Framer Motion (`ssr: false`).
- Navigation header is plain `<header>`; Framer Motion only for mobile menu `AnimatePresence`.
- Brand icons: `components/icons/tech-icons.tsx` (inline SVG).
- Favicon: `app/icon.png`, `app/apple-icon.png`.
- See `PERFORMANCE-CHECKLIST.md` for Lighthouse follow-ups.
