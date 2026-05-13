# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321 (uses polling for WSL2 compatibility)
npm run build     # Build production site to ./dist/
npm run preview   # Preview the production build locally
```

There are no lint or test commands configured.

## Architecture

This is an **Astro 6** static site for Imagine Land Works (a Lakeland, FL land clearing and excavation business). Pages are primarily `.mdx` files; UI is built with Astro components.

### Layout hierarchy

```
BaseLayout.astro       ← <html> shell, loads global CSS, SEO component
  DefaultLayout.astro  ← NavBar + <main> slot + NavFooter (used by most pages)
  LegalLayout.astro    ← NavBar + sticky TOC sidebar + back-to-top + NavFooter (privacy, terms)
```

Pages declare their layout in MDX frontmatter:
```mdx
---
title: "Page Title"
description: "..."
layout: "@layouts/DefaultLayout.astro"
---
```

### Styling

- **Tailwind CSS v4** loaded via `@tailwindcss/vite` plugin (not PostCSS).
- **DaisyUI v5** loaded via `@plugin "daisyui"` in `src/assets/css/app.css`.
- Custom DaisyUI theme `imagine-landworks` is defined in `app.css` — always use its semantic tokens (`--color-primary`, `--color-secondary`, `--color-accent`, etc.) rather than hardcoded colors.
- Fonts are self-hosted in `public/fonts/`: **Oswald 700** (headings, `font-heading`) and **Poppins 400** (body, `font-body`).

### Path aliases (tsconfig.json)

| Alias | Resolves to |
|---|---|
| `@components/*` | `src/components/*` |
| `@assets/*` | `src/assets/*` |
| `@layouts/*` | `src/layouts/*` |

### SEO

Every page's metadata flows through `SEO.astro`, which handles `<title>`, meta description, canonical URL, robots, Open Graph, and Twitter Card. The `PageFrontmatter` interface exported from `SEO.astro` is the shared type used across all layouts and pages.

### Icons

FontAwesome icons (`@fortawesome/free-solid-svg-icons`) are used without a React/SVG component library. The pattern is to import icon definitions and manually construct the SVG string in Astro component script blocks (see `ServicesOverview.astro`).

### External integrations

- **Jobber** — booking/work-request form embedded via `JobberForm.astro`. The form is injected by a third-party script from `d3ey4dbjkt2f6s.cloudfront.net` using a `clienthub_id`. Used on the home page and `/book`.
- **Sitemap** — generated automatically by `@astrojs/sitemap` at build time; `site` is set to `https://imaginelandworks.com` in `astro.config.mjs`.
