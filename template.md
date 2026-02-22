---
theme: default
layout: cover
title: "[TITLE]"
author: Franz
colorSchema: light
aspectRatio: 1/1
canvasWidth: 1080
exportFilename: "[ID]-[kebab-case-title]"
fonts:
  sans: DM Sans
  serif: Playfair Display
  mono: JetBrains Mono
---

# [Cover-Headline — stärkste Aussage]

[Subtitle — kurz, muted]

---
layout: center
---

# [Content-Slide]

[Body-Text]

---
layout: center
---

<!-- Optional: Diagramm-Slide — nur wenn ein Prozess/Flow visualisiert werden soll -->

# [Diagramm-Headline]

```mermaid
graph LR
  A[Step 1] --> B[Step 2]
  B --> C[Step 3]
```

---
layout: end
---

# Franz

[Takeaway oder abschließender Gedanke]

<div class="mt-6 text-[#C68B59] text-xl">Follow along for more.</div>

<style>
  :root {
    --slidev-th-color: #FAF8F5;
  }

  .slidev-layout {
    background-color: #FAF8F5 !important;
    color: #2C2416 !important;
    font-family: 'DM Sans', system-ui, sans-serif !important;
    font-size: 1.4rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    padding: 4.5rem !important;
    position: relative !important;
  }

  .slidev-layout::before {
    content: '';
    position: absolute;
    top: 0;
    left: 4.5rem;
    right: 4.5rem;
    height: 3px;
    background: linear-gradient(90deg, #C68B59, transparent);
  }

  .slidev-layout h1 {
    color: #1A1714 !important;
    font-family: 'Playfair Display', serif !important;
    font-weight: 700 !important;
    font-size: 3rem !important;
    letter-spacing: -0.03em !important;
    line-height: 1.15 !important;
    margin-bottom: 1.25rem !important;
  }

  .slidev-layout p {
    font-size: 1.4rem !important;
    line-height: 1.65 !important;
  }

  .slidev-layout strong {
    color: #C68B59 !important;
    font-weight: 600 !important;
  }

  .slidev-layout.cover {
    justify-content: flex-end !important;
    padding-bottom: 5.5rem !important;
  }

  .slidev-layout.cover h1 {
    font-size: 3.6rem !important;
    line-height: 1.1 !important;
  }

  .slidev-layout.cover p {
    color: #6B5436 !important;
    font-size: 1.5rem !important;
  }

  .slidev-layout.center {
    align-items: center !important;
    text-align: center !important;
    padding: 5rem !important;
  }

  .slidev-layout.center h1 {
    font-size: 2.6rem !important;
    max-width: 90% !important;
    line-height: 1.3 !important;
  }

  .slidev-layout.end {
    align-items: center !important;
    text-align: center !important;
  }

  .slidev-layout.end::before { display: none; }

  .slidev-layout.end::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 4.5rem;
    right: 4.5rem;
    height: 4px;
    background: #C68B59;
  }
</style>
