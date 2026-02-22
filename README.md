# Composable Layout

A flexible system that empowers non-technical users—primarily marketing and content teams—to independently create, assemble, and update web pages using composable Layout and Display elements.

## How It Works

Pages are built from two core primitives:

- **Layout elements** — Structural containers (stack, row, grid) that manage spacing, alignment, and responsive behavior for page sections.
- **Display elements** — Modular content units (text, image, card) that live inside layouts and adapt to their container using container queries.

Layout elements control placement and flow. Display elements own their content and styling. This separation keeps pages consistent while remaining flexible.

## Project Structure

This is a monorepo with three workspaces:

```
packages/
  components/   → Lit web components (layouts + displays + design tokens)
  studio/       → Sanity CMS schemas for page building
apps/
  web/          → Astro frontend that renders pages from Sanity
```

### `@composable-layout/components`

Web components built with [Lit](https://lit.dev):

| Layouts | Displays |
|---------|----------|
| `layout-stack` — vertical stacking | `display-text` — rich text block |
| `layout-row` — grid with column presets (50/50, 33/66, etc.) | `display-image` — image with caption and aspect ratio |
| `layout-grid` — auto-fill responsive grid | `display-card` — card with image, heading, body, CTA |

All components share a design token system for spacing, colors, borders, shadows, and widths.

### `@composable-layout/studio`

[Sanity](https://www.sanity.io/) CMS configuration with schemas for pages, layout sections, display items, and style properties. Allows content teams to visually compose pages by selecting layouts, inserting displays, and adjusting styles.

### `@composable-layout/web`

[Astro](https://astro.build/) frontend with static site generation. Fetches page data from Sanity and renders it using the component library via `@astrojs/lit`.

## Getting Started

### Prerequisites

- Node.js 18+
- A [Sanity](https://www.sanity.io/) project (for CMS functionality)

### Install

```sh
npm install
```

### Components

```sh
# Build the component library
npm run build -w packages/components

# Run tests
npm test -w packages/components

# Watch mode
npm run dev -w packages/components
```

### Studio

Add your Sanity project ID in `packages/studio/sanity.config.ts`, then:

```sh
npm run dev -w packages/studio
```

### Web

Create a `.env` file in `apps/web/` with your Sanity credentials, then:

```sh
npm run dev -w apps/web
```

## Design Principles

- **Separation of concerns** — Layouts handle structure, displays handle content
- **Container queries** — Display elements respond to their container, not the viewport
- **Token-driven consistency** — Shared design tokens enforce visual rhythm across all components
- **CMS-first** — Every layout and display property is editable in Sanity
