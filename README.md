<p align="center">
  <img src="public/kinetik-logo.svg" width="60" alt="Kinetik" />
</p>

<h1 align="center">Kinetik</h1>

<p align="center">
  A copy-paste registry of production UI patterns and physically modeled components for React.<br/>
  Spring physics · Motion 12 · Tailwind CSS · Next.js 15 · TypeScript
</p>

<p align="center">
  <a href="https://kinetik-kohl.vercel.app">Live Demo</a> ·
  <a href="#patterns">Patterns</a> ·
  <a href="#getting-started">Get Started</a> ·
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

<p align="center">
  <a href="https://github.com/sumitttt4/Kinetik/stargazers"><img src="https://img.shields.io/github/stars/sumitttt4/Kinetik?style=flat&color=FF6B35" alt="Stars" /></a>
  <a href="https://github.com/sumitttt4/Kinetik/blob/main/LICENSE"><img src="https://img.shields.io/github/license/sumitttt4/Kinetik?color=FF6B35" alt="License" /></a>
  <a href="https://github.com/sumitttt4/Kinetik/issues"><img src="https://img.shields.io/github/issues/sumitttt4/Kinetik?color=FF6B35" alt="Issues" /></a>
  <a href="https://github.com/sumitttt4/Kinetik/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/sumitttt4/Kinetik/ci.yml?branch=main&label=CI" alt="CI" /></a>
</p>

---

## Why Kinetik?

Most component libraries give you static boxes with basic hover states. Kinetik gives you **engineered UI patterns** — component systems driven by real spring physics, hardware acceleration, and Emil Kowalski's motion craft principles.

- **Physics-first Motion** — Driven by spring dynamics (`stiffness`, `damping`), custom cubic-bezier curves, and sub-300ms responsive timing
- **Copy-paste Workflow** — Zero dependency lock-in. Browse patterns, copy component source, drop into your codebase and ship
- **shadcn/ui Compatible** — Native support for `npx shadcn@latest` registry commands
- **Strict TypeScript** — Clean typing across Next.js 15 App Router dynamic routes
- **Accessible & Gated** — `prefers-reduced-motion` honored, touch device hover gating, and WCAG AA contrast compliance
- **Dark Mode Native** — Designed to look stunning in both light and dark themes

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| React | [React 19](https://react.dev) |
| Motion | [Motion 12](https://motion.dev) (`motion/react`) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + `tailwindcss-animate` |
| Icons | [Lucide React](https://lucide.dev) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Language | TypeScript 5 (Strict Mode) |
| Package Manager | `npm` |

---

## Pattern Registry

| Pattern | Category | Description |
| --- | --- | --- |
| **Enterprise Hero** | Heroes | Production hero section with status badge, headline hierarchy, CTA buttons, grid background, and corner L-brackets |
| **Technical Feature Grid** | Sections | 3-column pipeline feature section with monospaced step counters and corner crosshair accents |
| **API Documentation Hero** | Heroes | Code-first hero with live endpoint preview, response status badge, and dot matrix coordinate system |
| **Solace UI Footer** | Footers | Modern animated footer with brand mark, interactive pill navigation, integrated SocialCloud icon bar, and diagonal hatch divider |
| **Editorial Pricing** | Sections | Ruled notebook paper pricing layout with editorial typography and section dividers |
| **Dashboard Header** | Data Display | Blueprint grid telemetry header with live status indicators and latency stat cards |
| **Social Proof Wall** | Social Proof | Customer story logo wall with framing accent blocks and monospaced metadata |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/sumitttt4/Kinetik.git
cd Kinetik

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Using shadcn CLI

Kinetik components are compatible with the `shadcn` CLI:

```bash
# Add Solace UI components directly via shadcn CLI
npx shadcn@latest add @solaceui/hero-section-1
npx shadcn@latest add @solaceui/footer-section-1
```

---

## Project Structure

```
├── app/                      # Next.js 15 App Router
│   ├── patterns/             # Pattern catalog & customizer playground
│   │   ├── [id]/             # Dynamic pattern detail customizer
│   │   └── page.tsx          # Pattern explorer grid
│   ├── settings/             # User preferences & saved favorites
│   ├── globals.css           # Design system CSS tokens & theme variables
│   ├── layout.tsx            # Root layout with ThemeProvider
│   └── page.tsx              # Kinetik landing showcase
├── components/               # High-craft React & Motion components
│   ├── layout/               # Header, navigation, and structure
│   ├── patterns/             # Live pattern renderer system
│   ├── ui/                   # Core primitives (Button, Card, Input)
│   ├── animated-group.tsx    # Staggered entry animation container
│   ├── circular-gallery.tsx  # WebGL circular 3D carousel
│   ├── footer-section-1.tsx  # Solace UI animated footer
│   ├── hero-section-1.tsx    # Solace UI hero section
│   ├── social-cloud.tsx      # Interactive social media icon cloud
│   └── text-effect.tsx       # Kinetic typography text reveal engine
├── lib/                      # Pattern store, utilities, and helper functions
│   ├── store.ts              # Pattern definitions & local favorites persistence
│   └── utils.ts              # cn() Tailwind class merger
├── .github/                  # GitHub Actions CI workflow & health guidelines
├── public/                   # Static vectors, logos & registry manifests
└── package.json
```

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Build optimized production bundle |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint check |

---

## Contributing

Contributions are welcome! Please review our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

- [Security Policy](SECURITY.md)
- [Support](SUPPORT.md)
- [Governance](GOVERNANCE.md)

---

## License

[MIT](LICENSE) © Sumit Sharma
