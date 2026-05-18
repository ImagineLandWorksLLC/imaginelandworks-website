# Imagine Land Works — Website

Marketing site for **Imagine Land Works**, a land clearing and excavation company based in Lakeland, FL. Built with [Astro 6](https://astro.build), Tailwind CSS v4, and DaisyUI v5. Deployed on Netlify.

---

## Local Development

```sh
npm install
npm run dev       # http://localhost:4321 (file-watching uses polling for WSL2 compatibility)
npm run build     # Production build → ./dist/
npm run preview   # Preview the production build locally
```

---

## Project Structure

```
src/
├── assets/
│   ├── css/app.css        # Tailwind + DaisyUI config, custom theme tokens
│   └── icons/             # SVG icon files
├── components/            # Astro components
│   └── services/          # Service-page-specific components
├── data/                  # Typed data files (contact, services, metrics, etc.)
├── layouts/
│   ├── BaseLayout.astro   # HTML shell + SEO + global styles
│   ├── DefaultLayout.astro  # NavBar + main + NavFooter
│   ├── BookingLayout.astro  # NavBar + main (used by /book)
│   └── LegalLayout.astro  # Sticky TOC sidebar (privacy, terms)
└── pages/
    ├── index.mdx
    ├── about.mdx
    ├── contact.mdx
    ├── book.astro         # Jobber work-request embed
    ├── services/
    │   ├── index.mdx
    │   └── [slug].astro   # Dynamic routes from src/data/serviceSections.ts
    ├── privacy.mdx
    └── terms.mdx

public/
├── fonts/                 # Self-hosted Oswald + Poppins
└── images/
    └── services/          # ← Drop service photos here (see "Adding Service Images")
```

---

## Deployment — Netlify

The site is deployed on Netlify. `netlify.toml` at the project root configures everything automatically:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 22
- **Staging/preview noindex:** set automatically via `PUBLIC_NOINDEX=true` on all non-production contexts

### First-time setup

1. Connect the GitHub repo to a Netlify site.
2. No environment variables need to be set — `netlify.toml` handles everything.

### Indexing

| Context | Robots |
|---|---|
| `npm run dev` (local) | `noindex, nofollow` — automatic, via `import.meta.env.DEV` |
| Netlify (any deploy) | `index, follow` — production builds always indexable |

---

## SEO

Every page's `<title>`, meta description, canonical URL, Open Graph, and robots tag flow through `src/components/SEO.astro`.

Pages set these via MDX frontmatter:

```mdx
---
title: "Page Title"
description: "Page description for search snippets."
layout: "@layouts/DefaultLayout.astro"
---
```

Use `noindex: true` in frontmatter to suppress indexing for a specific page (already set on `/privacy` and `/terms`).

---

## Adding Service Images

The `/services` page currently shows placeholder boxes. Once the client provides photos:

1. Add images to `public/images/services/` (e.g. `land-clearing.jpg`). Landscape ratio, ~1200×800 px recommended.
2. Add an `image` field to the matching entry in `src/data/serviceSections.ts`:

```ts
{
  anchor: "land-clearing",
  image: "/images/services/land-clearing.jpg",
  // ...
}
```

The `ServiceSection` component will automatically render the `<img>` instead of the placeholder.

---

## Key Data Files

| File | What it controls |
|---|---|
| `src/data/contact.ts` | Phone, email, address, social links, Jobber embed IDs, founding year |
| `src/data/serviceSections.ts` | All service content + SEO titles/descriptions + image paths |
| `src/data/metrics.ts` | "By the Numbers" stats on the homepage |
| `src/data/reviews.ts` | Testimonials |
| `src/data/faqs.ts` | FAQ section |
| `src/data/serviceArea.ts` | Service area cities |
