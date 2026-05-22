# Architecture decision log

Short ADRs for intentional choices in this portfolio. Status reflects the current codebase, not future experiments.

## ADR-001: Custom i18n module over next-intl

**Status**: Accepted

**Context**: The site is a single page with three complete locale objects (EN, PT, ES). Copy lives in TypeScript files, not JSON or a CMS. We need type-safe access to nested keys and instant locale switching without route segments.

**Decision**: Keep a small `lib/i18n.ts` catalog (`getTranslations`, locale metadata) and per-locale files under `lib/locales/`. Fallback behavior is explicit via a Strategy-style `FallbackStrategy` (`default-locale` vs `key-passthrough`).

**Consequences**: No middleware or `[locale]` routing to maintain. Adding a language means a new locale file and union entry. We own parity checks (see `lib/i18n.test.ts`) instead of relying on next-intl tooling.

---

## ADR-002: Client-side locale swap over URL-based locale routing

**Status**: Accepted

**Context**: Navigation is hash-based (`#about`, `#projects`). Users switch language from the header/footer without changing the URL path. SEO targets one canonical URL for the portfolio.

**Decision**: Store locale in `LocaleProvider` React state, update `document.documentElement.lang`, and swap the `t` object via split context selectors (`useTranslations`, `useLocaleValue`, `useSetLocale`).

**Consequences**: Locale is not shareable via URL query. No SSR per locale; acceptable for a static marketing page. Simpler deployment (one route). Re-renders are scoped by context slice to avoid unnecessary section updates.

---

## ADR-003: Framer Motion lazy-loaded below the fold

**Status**: Accepted

**Context**: Lighthouse and LCP depend on a fast hero path. Most sections use `whileInView` animations, which pull in Framer Motion. The hero profile image must paint without waiting on animation JS.

**Decision**: Eager-load `Navigation`, `HeroSection`, and `WhatsAppFloat` in `app/page.tsx`. Load all other sections through `below-fold-sections.tsx` with `next/dynamic` and `ssr: false`, plus skeleton placeholders.

**Consequences**: Below-fold HTML is client-rendered; acceptable for a portfolio. Initial JS bundle excludes most Motion usage. Navigation mobile menu still uses `AnimatePresence` on the critical path by design.

---

## ADR-004: No CMS — TypeScript locale files as source of truth

**Status**: Accepted

**Context**: Content changes infrequently and is owned by the author. A CMS would add hosting, preview flows, and schema drift for a single static deploy.

**Decision**: Author copy in `lib/locales/{en,pt,es}.ts`. Structural contracts (`ProjectItem`, `SiteConfig`, `PortfolioSection`) live in `types/` and are enforced with `satisfies` where applicable.

**Consequences**: Copy updates require a deploy and PR review. Strong typing and unit tests catch missing keys across locales. No non-engineer editing without a future CMS ADR.

---

## ADR-005: Explicit public API via barrel exports

**Status**: Accepted

**Context**: The repo mixes app routes, hooks, lib helpers, and many section files. Importing deeply increases coupling and makes refactors noisy.

**Decision**: Expose a narrow surface through `lib/index.ts` (`getTranslations`, `siteConfig`, `cn`), named exports in `hooks/index.ts` and `components/sections/index.ts`, and `config/portfolio-sections.ts` for nav/section contracts.

**Consequences**: Internal modules (`lib/contact-link`, locale files, hook implementation files) stay private by convention. Consumers import from barrels or documented config paths.
