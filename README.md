<div align="center">

# linkedin-carousel-kit

**Markdown to LinkedIn carousel slides.**
Write your content, get a polished PDF carousel.

Built with [Slidev](https://sli.dev) and a warm, professional design system
inspired by earthy tones and clean typography.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/mulkatz/linkedin-carousel-kit?style=flat-square)](https://github.com/mulkatz/linkedin-carousel-kit/releases)
[![Slidev](https://img.shields.io/badge/built%20with-Slidev-4EC5D4?style=flat-square)](https://sli.dev)

</div>

---

## What you get

- **1:1 aspect ratio** (1080x1080) optimized for LinkedIn carousels
- **Design system** with Playfair Display headlines, DM Sans body text, and copper accents
- **Pre-built slide types** — Cover, Content, Center/Statement, End/CTA
- **Vue components** — `<Card>`, `<Stat>`, `<IconText>`, `<CardGrid>` with brand styling
- **Mermaid diagrams** — natively supported, automatically branded
- **Slide counter** — automatic, hidden on cover and end slides
- **Multi-format export** — PDF, PNG (2x retina), PPTX

## Quick start

```bash
git clone https://github.com/mulkatz/linkedin-carousel-kit.git
cd linkedin-carousel-kit
nvm use          # Node 22 (see .nvmrc)
npm install
npm run setup    # install Playwright for PDF/PNG export
```

Edit `slides.md` with your content, then:

```bash
# Preview in browser
npm run dev

# Export as PDF carousel
npm run export

# Export as PNG slides (2x retina, 2160x2160)
npm run export:png

# Export as PowerPoint
npm run export:pptx
```

Upload the generated PDF to LinkedIn as a document post.

## Writing slides

Each slide is separated by `---` in the markdown file. Use frontmatter for slide-level config:

```markdown
---
layout: center
---

# Your centered statement here.

With a **bold accent** on the key point.
```

### Available layouts

| Layout | Use for |
|--------|---------|
| `cover` | First slide — big headline, bottom-aligned |
| *(default)* | Standard content — headline + body/list |
| `center` | Key takeaways, strong statements |
| `section` | Section dividers, centered |
| `end` | Last slide — name, bio, CTA |

### Components

Reusable Vue components with brand styling. No hardcoded colors — everything uses CSS variables.

**Card** for step-by-step or feature lists:

```html
<Card title="Card Title" description="Card description here" />
```

**CardGrid** to arrange multiple cards:

```html
<CardGrid :cols="2">
  <Card title="First" description="Description" />
  <Card title="Second" description="Description" />
</CardGrid>
```

**Stat** for numbers that pop:

```html
<Stat value="42" label="things accomplished" />
```

**IconText** for tool/stack lists:

```html
<IconText icon="🔧" title="Tool Name" description="What it does" />
```

### MDC inline syntax

With `mdc: true` in frontmatter (enabled by default in the template), you can style inline text:

```markdown
This is a [key point]{style="color: var(--color-accent)"} in the text.
```

### Mermaid diagrams

Mermaid diagrams are supported natively and automatically styled to match the brand. Just use a `mermaid` code block:

````markdown
---
layout: center
---

# Process Overview

```mermaid
graph LR
  A[Input] --> B{Decision}
  B -->|Yes| C[Result A]
  B -->|No| D[Result B]
```
````

Supported diagram types: flowcharts, sequence diagrams, mindmaps, pie charts. See [BRAND-STYLE-GUIDE.md](./BRAND-STYLE-GUIDE.md#mermaid-diagramme) for guidelines.

## Export

| Command | Format | Output |
|---------|--------|--------|
| `npm run export` | PDF | Single file, ready for LinkedIn upload |
| `npm run export:png` | PNG | Individual slides at 2x resolution (2160x2160) |
| `npm run export:pptx` | PPTX | PowerPoint with slides as images |

The output filename is controlled by `exportFilename` in your slide's frontmatter.

> **Note**: Export requires Playwright. Run `npm run setup` once after install to download the Chromium browser.

## Design system

### Colors

| Name | Hex | CSS Variable | Role |
|------|-----|-------------|------|
| Sand 50 | `#FAF8F5` | `--color-bg` | Slide background |
| Sand 100 | `#F0EBE3` | `--color-surface` | Card background |
| Sand 200 | `#D4C5B0` | `--color-border` | Borders |
| Sand 800 | `#2C2416` | `--color-text` | Body text |
| Sand 900 | `#1A1714` | `--color-heading` | Headlines |
| Copper | `#C68B59` | `--color-accent` | Accent — bold text, numbers, CTAs |

### Typography

| Font | Role |
|------|------|
| **Playfair Display** | Headlines (serif, elegant) |
| **DM Sans** | Body text, UI (clean, modern) |
| **JetBrains Mono** | Code snippets |

### Rules

- Max 3 colors per slide (background + text + accent)
- Copper for accents only — never as background or body text
- No pure black (`#000`) or pure white (`#FFF`)
- Headlines always Playfair Display (serif)
- Body always DM Sans (sans-serif)
- At least 30% whitespace per slide

See [BRAND-STYLE-GUIDE.md](./BRAND-STYLE-GUIDE.md) for the full specification.

## Customizing

### Change the accent color

Edit the CSS variables in `styles/base.css` and update `uno.config.ts` to match.

### Change fonts

Update the Google Fonts link in `index.html` and the font families in `styles/base.css` and `uno.config.ts`.

### Add new slide types

Create Vue components in `layouts/` following the [Slidev custom layouts](https://sli.dev/guide/custom-layouts) documentation.

## Project structure

```
linkedin-carousel-kit/
├── slides.md              <- Your slide content (edit this)
├── template.md            <- Slide template for new posts
├── global-bottom.vue      <- Slide counter (auto-hidden on cover/end)
├── index.html             <- Google Fonts loading
├── uno.config.ts          <- UnoCSS theme (colors, fonts, shortcuts)
├── setup/mermaid.ts       <- Mermaid brand theming (auto-loaded by Slidev)
├── styles/                <- Global CSS (variables, typography, layouts)
│   ├── base.css           <- CSS variables, slide base styles
│   ├── typography.css     <- Headings, body, lists, code, blockquotes
│   ├── layouts.css        <- Layout-specific overrides (cover, center, end…)
│   └── index.ts           <- CSS entry point
├── components/            <- Reusable Vue components
│   ├── Card.vue           <- Card with title + description
│   ├── CardGrid.vue       <- Grid wrapper for cards (1 or 2 columns)
│   ├── Stat.vue           <- Big number + label
│   └── IconText.vue       <- Emoji/icon + title + description
├── layouts/               <- Custom layout overrides
│   ├── cover.vue          <- Clean cover (no my-auto wrapper)
│   ├── center.vue         <- Clean center (no grid/place-content-center)
│   ├── default.vue        <- Clean default passthrough
│   ├── section.vue        <- Clean section (no grid wrapper)
│   └── end.vue            <- Clean end (no bg-black/text-white)
├── examples/              <- Example carousels for reference
├── public/                <- Static assets (images, etc.)
├── BRAND-STYLE-GUIDE.md   <- Full design specification
└── package.json
```

## Workflow

1. Write your post text first (clarity before design)
2. Copy `template.md` to `slides.md` (or start from the default starter)
3. Break your content into slides — one key point per slide
4. `npm run dev` — preview and iterate
5. Export: `npm run export` for PDF, `npm run export:png` for images
6. Upload to LinkedIn as a document post

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE)
