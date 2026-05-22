# 🌐 Personal Portfolio

A modern, multilingual developer portfolio built with **Next.js 16**, focused on performance, clean architecture, and maintainability.

Designed as a fast, scalable single-page application with smooth interactions, localized content, and a modular component structure.

---

## ✨ Features

- ⚡ Built with **Next.js 16 App Router**
- 🌍 Internationalization (`EN`, `PT`, `ES`)
- 🎨 Dark / Light theme support
- 📱 Fully responsive layout
- 🧩 Modular section architecture
- 🚀 Performance-first rendering strategy
- 🎞️ Lightweight animations with Framer Motion
- 🧠 Clean separation between content, UI, and logic
- 🔍 SEO-ready metadata and optimized assets
- 🧪 Unit tests with Vitest and Testing Library

---

## 🏗️ Architecture

The project follows a **content-driven architecture**, where translations, metadata, and external links are isolated from UI components.

```txt
app/          # Routes, layout, global styles
components/   # Sections, UI primitives, icons
hooks/        # Client-side behavior (scroll, locale, mount)
lib/          # i18n, site config, utilities
types/        # Shared contracts (sections, projects, site)
config/       # Portfolio section descriptors
docs/         # Architecture decision records
```

For deeper detail, see [`ARCHITECTURE.md`](ARCHITECTURE.md) and [`docs/DECISIONS.md`](docs/DECISIONS.md).

---

## 📂 Project Structure

```txt
app/
├── layout.tsx              # Global layout, providers, metadata
├── page.tsx                # Main page composition
├── globals.css             # Theme tokens, animations, utilities
├── icon.png                # Favicon
└── apple-icon.png          # Apple touch icon

components/
├── sections/               # Portfolio sections (+ colocated data.ts)
├── ui/                     # shadcn/ui (button, badge, dropdown-menu)
├── icons/                  # Inline SVG tech icons
├── below-fold-sections.tsx # Lazy-loaded sections
├── navigation.tsx
├── locale-provider.tsx     # Re-exports locale hooks
└── hero-profile-image.tsx  # LCP-optimized profile image

hooks/
├── use-scrolled.ts
├── use-active-section.ts
├── use-scroll-to-section.ts
├── use-mounted.ts
├── locale-context.tsx      # Split locale context + selectors
└── index.ts                # Public hook API

lib/
├── i18n.ts                 # Translation catalog + fallback strategy
├── site.ts                 # External links & resume paths
├── utils.ts                # cn() class merge helper
├── index.ts                # Public lib API
└── locales/
    ├── en.ts
    ├── pt.ts
    └── es.ts

types/
├── section.ts              # PortfolioSection contracts
├── project.ts              # ProjectItem shape
└── site.ts                 # SiteConfig type

config/
├── portfolio-nav-sections.ts   # Hash nav (labels from i18n)
└── portfolio-sections.ts       # Full section + component map
```

---

## 🌍 Internationalization

All textual content is centralized inside:

```txt
lib/locales/
```

Each locale exports structured copy used throughout the application. Resolution goes through `getTranslations(locale, fallback?)` in `lib/i18n.ts`, with an explicit **Strategy** fallback (`default-locale` or `key-passthrough`).

### Supported Languages

- English
- Portuguese
- Spanish

Locale state lives in `LocaleProvider` with slice hooks: `useTranslations()`, `useLocaleValue()`, and `useSetLocale()`.

---

## 🧩 Sections

Each UI section lives inside:

```txt
components/sections/
```

Sections may include a colocated `data.ts` file for:

- animation variants
- icon mappings
- accent color maps
- static configuration

This keeps components clean and presentation-focused.

---

## 🪝 Custom Hooks

Reusable client-side logic is abstracted into dedicated hooks.

| Hook | Purpose |
| --- | --- |
| `useScrolled(threshold)` | Detect scroll position (header blur) |
| `useActiveSection(sectionIds)` | Track visible section via IntersectionObserver |
| `useScrollToSection(onAfterScroll?)` | Smooth section navigation |
| `useMounted()` | Prevent hydration mismatch (theme toggle) |
| `useTranslations()` | Subscribe to copy only |
| `useLocaleValue()` / `useSetLocale()` | Locale slice selectors |

---

## 🎨 UI System

The UI layer uses a minimal subset of **shadcn/ui** components:

- `button`
- `badge`
- `dropdown-menu`

Styling is powered by:

- Tailwind CSS v4
- CSS custom properties
- utility-based animations

---

## 🚀 Performance Optimizations

Performance was treated as a first-class concern from the beginning.

### Critical Rendering Path

Eager-loaded components:

- `Navigation`
- `HeroSection`
- `WhatsAppFloat`

### Lazy-loaded Below Fold

Sections below the viewport are dynamically imported to reduce initial bundle size.

```txt
components/below-fold-sections.tsx
```

### Image Optimization

The hero profile image is:

- server-rendered
- prioritized for LCP
- fetched with high priority

### Animation Strategy

Framer Motion is only used where it adds meaningful UX value.

Examples:

- mobile navigation transitions
- section reveals

---

## 🛠️ Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **shadcn/ui**
- **Vitest** + **Testing Library**

---

## 📈 Lighthouse & Optimization

Additional performance notes and optimization follow-ups can be found in:

```txt
PERFORMANCE-CHECKLIST.md
```

---

## 📬 Contact

Feel free to connect or reach out through the links available in:

```txt
lib/site.ts
```

---

## 🚀 Running Locally

```bash
# install dependencies
npm install

# start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build

```bash
npm run build
npm run start
```

---

## 🧪 Tests

```bash
# watch mode
npm test

# single run (CI)
npm run test:run

# Vitest UI
npm run test:ui
```

```bash
npm run lint
```

---

## 📄 License

This project is open source.
