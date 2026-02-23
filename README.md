# Composable Layout

A flexible system for creating and assembling web pages using composable Layout and Display elements built as web components.

## How It Works

Pages are built from two core primitives:

- **Layout elements** — Structural containers (stack, row, grid) that manage spacing, alignment, and responsive behavior for page sections.
- **Display elements** — Modular content units (text, image, card) that live inside layouts and adapt to their container using container queries.

Layout elements control placement and flow. Display elements own their content and styling. This separation keeps pages consistent while remaining flexible.

Content is authored in **MDX files**, where you use the web components directly with inline props — no intermediate layers or CMS required.

## Project Structure

This is a monorepo with two workspaces:

```
packages/
  components/   → Lit web components (layouts + displays + design tokens)
apps/
  web/          → Astro frontend that renders MDX pages
```

### `@composable-layout/components`

Web components built with [Lit](https://lit.dev):

| Layouts | Displays |
|---------|----------|
| `layout-stack` — vertical stacking | `display-text` — rich text block |
| `layout-row` — grid with column presets (50/50, 33/66, etc.) | `display-image` — image with caption and aspect ratio |
| `layout-grid` — auto-fill responsive grid | `display-card` — card with image, heading, body, CTA |

All components share a design token system for spacing, colors, borders, shadows, and widths.

### `@composable-layout/web`

[Astro](https://astro.build/) frontend with static site generation. Pages are MDX files in `src/content/pages/` that use the layout and display components directly.

Example page (`src/content/pages/example.mdx`):

```mdx
---
title: Example
---

<layout-stack padding="lg" max-width="xl" gap="lg">
  <display-text padding="md">
    ## Hello World

    This is a composable layout.
  </display-text>

  <layout-row columns="50/50" gap="md">
    <display-card heading="First" body="Description" />
    <display-card heading="Second" body="Description" />
  </layout-row>
</layout-stack>
```

## Getting Started

### Prerequisites

- Node.js 18+

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

### Web

```sh
# Build components first (required)
npm run build -w packages/components

# Start the dev server
npm run dev -w apps/web
```

### Adding Pages

Create a new `.mdx` file in `apps/web/src/content/pages/`. The filename becomes the URL path (`about.mdx` → `/about`). Add frontmatter with at least a `title`:

```mdx
---
title: About
seoTitle: About — Composable Layout
seoDescription: Learn more about composable layouts.
---

<layout-stack padding="lg" max-width="xl">
  <display-text padding="md">
    ## About

    Your content here.
  </display-text>
</layout-stack>
```

## Design Principles

- **Separation of concerns** — Layouts handle structure, displays handle content
- **Container queries** — Display elements respond to their container, not the viewport
- **Token-driven consistency** — Shared design tokens enforce visual rhythm across all components
- **Content as components** — MDX pages use web components directly, keeping authoring declarative and simple
