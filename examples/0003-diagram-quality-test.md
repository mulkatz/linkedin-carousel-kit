---
theme: default
layout: cover
title: Diagram Quality Test
author: Franz
colorSchema: light
aspectRatio: 1/1
canvasWidth: 1080
exportFilename: diagram-quality-test
mdc: true
defaults:
  layout: center
fonts:
  sans: DM Sans
  serif: Playfair Display
  mono: JetBrains Mono
---

# Diagram Quality Test

Comparing diagrams against brand design system.

---

# Flowchart — Left to Right

```mermaid
graph LR
  A[Idea] --> B{Validate}
  B -->|Worth it| C[Prototype]
  B -->|Not yet| D[Backlog]
  C --> E[Ship MVP]
  E --> F[Iterate]
```

---

# Flowchart — Top Down

```mermaid
graph TD
  A[Problem] --> B[Research]
  B --> C{Solution Clear?}
  C -->|Yes| D[Build]
  C -->|No| E[Explore More]
  E --> B
  D --> F[Test]
  F --> G[Ship]
```

---

# Sequence Diagram

```mermaid
sequenceDiagram
  participant U as User
  participant A as API
  participant D as Database
  U->>A: POST /login
  A->>D: Query user
  D-->>A: User data
  A-->>U: JWT Token
```

---

# Mindmap

```mermaid
mindmap
  root((Stack))
    Frontend
      Vue
      UnoCSS
      Vite
    Backend
      Hono
      Drizzle
      SQLite
    Infra
      Fly.io
      GitHub Actions
```

---

# Pie Chart

```mermaid
pie title Time Allocation
  "Building" : 45
  "Planning" : 20
  "Testing" : 25
  "Meetings" : 10
```

---

# Reference — Card Component

<CardGrid :cols="2">
  <Card title="Clarity" description="Know what you're building before you touch code." />
  <Card title="Speed" description="Ship fast, learn fast. Perfection is the enemy." />
</CardGrid>

---
layout: end
---

# Franz

Diagram quality test complete.

<div style="color: var(--color-accent); font-size: 1.25rem; margin-top: 1.5rem;">Follow along for more.</div>
