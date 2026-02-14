<p align="center">
  <img src="public/kinetik-logo.svg" width="60" alt="Kinetik" />
</p>

<h1 align="center">Kinetik</h1>

<p align="center">
  A copy-paste registry of physically modeled UI components for React.<br/>
  Spring physics · Framer Motion · Tailwind CSS · Strict TypeScript
</p>

<p align="center">
  <a href="https://kinetik.vercel.app">Live Demo</a> ·
  <a href="#components">Components</a> ·
  <a href="#getting-started">Get Started</a> ·
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

<p align="center">
  <a href="https://github.com/sumitttt4/Kinetik/stargazers"><img src="https://img.shields.io/github/stars/sumitttt4/Kinetik?style=flat&color=3b82f6" alt="Stars" /></a>
  <a href="https://github.com/sumitttt4/Kinetik/blob/main/LICENSE"><img src="https://img.shields.io/github/license/sumitttt4/Kinetik?color=3b82f6" alt="License" /></a>
  <a href="https://github.com/sumitttt4/Kinetik/issues"><img src="https://img.shields.io/github/issues/sumitttt4/Kinetik?color=3b82f6" alt="Issues" /></a>
  <a href="https://github.com/sumitttt4/Kinetik/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/sumitttt4/Kinetik/ci.yml?branch=main&label=CI" alt="CI" /></a>
</p>

---

## Why Kinetik?

Most component libraries give you static boxes with hover states. Kinetik gives you **living interfaces** — components driven by real spring physics that feel like native apps.

- **Physics-first** — Every animation uses spring dynamics (`stiffness`, `damping`, `mass`), not arbitrary durations
- **Copy-paste workflow** — No `npm install kinetik`. Open the registry, copy one file, ship
- **Strict TypeScript** — Full type safety with zero `any` escapes
- **Accessible** — `prefers-reduced-motion` respected, keyboard navigable, proper ARIA
- **Dark mode** — Every component works flawlessly in both light and dark themes
- **Tiny footprint** — Each component is a single self-contained file

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Language | TypeScript 5 (strict mode) |
| Package Manager | pnpm |

## Components

| Component | Category | Description |
| --- | --- | --- |
| **Dynamic Island** | Hero | Fluid expansion from a compact pill into contextual status content |
| **Fluid Tabs** | Input | Segmented control with spring-driven active background motion |
| **Morphing Dialog** | Hero | Shared-element transition from card preview to expanded modal |
| **Magnet Button** | Input | Pointer-reactive button with subtle magnetic attraction |
| **Infinite Scroll Columns** | Motion | Opposing marquee columns for testimonials and visual loops |
| **Floating Toolbar** | Motion | Minimalist navigation pill with layout transitions |
| **Neumorphic Newsletter** | Input | Soft-UI subscription card with recessed inputs and spring states |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+ (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sumitttt4/Kinetik.git
cd Kinetik

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the showcase.

### Using a Component

Kinetik is a **registry**, not an npm package. To use a component:

1. Browse the [component registry](https://kinetik.vercel.app/registry)
2. Copy the source file into your project (e.g. `components/dynamic-island.tsx`)
3. Install peer dependencies listed on the component page
4. Import and use:

```tsx
import { DynamicIsland } from '@/components/dynamic-island';

export default function Page() {
  return <DynamicIsland />;
}
```

### Shared Utilities

Components use a shared `cn()` utility and spring config:

```ts
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```ts
// lib/motion.ts
export const kinetikSpring = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.8,
} as const;
```

## Project Structure

```
├── app/
│   ├── components/       # All UI components (one file each)
│   ├── registry/         # Registry browse + detail pages
│   ├── globals.css       # Design tokens (CSS variables)
│   ├── layout.tsx        # Root layout with ThemeProvider
│   ├── page.tsx          # Landing page showcase
│   └── not-found.tsx     # Custom 404
├── components/           # Shared providers (theme-provider, mode-toggle)
├── .github/              # Issue templates, CI, CODEOWNERS, funding
├── lib/
│   ├── motion.ts         # Global spring physics config
│   ├── registry.ts       # Component metadata registry
│   └── utils.ts          # cn() helper
├── public/               # Static assets
├── tailwind.config.ts    # Design system tokens
└── package.json
```

## Design System

Kinetik uses a carefully tuned design language:

| Token | Light | Dark |
| --- | --- | --- |
| Background | `slate-50` | `#070d22` (Deep Navy) |
| Foreground | `slate-900` | `slate-50` |
| Primary | `#3b82f6` (Brand Blue) | `#3b82f6` |
| Border | `slate-200` | `white/10` |

**Spring Physics** — All components share a global spring config:
- `stiffness: 300` — Snappy response
- `damping: 30` — Controlled deceleration
- `mass: 0.8` — Subtle perceived weight

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a PR.

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
- [Support](SUPPORT.md)
- [Governance](GOVERNANCE.md)

## Open Source Health

This repository includes key community and governance files expected by serious OSS programs:

- `README`, `LICENSE`, `CONTRIBUTING`, `CODE_OF_CONDUCT`, `SECURITY`, `CHANGELOG`
- Issue templates + pull request template
- CI workflow (lint + build on push/PR)
- CODEOWNERS + funding configuration

## Deployment

Kinetik is built for Vercel. Deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsumitttt4%2FKinetik)

Or deploy manually:

```bash
pnpm build
pnpm start
```

## Roadmap

- [ ] CLI tool for component installation (`npx kinetik add dynamic-island`)
- [ ] Component playground with live prop editing
- [ ] Motion presets library (bounce, elastic, inertia)
- [ ] Storybook integration
- [ ] Automated visual regression tests
- [ ] Component performance benchmarks
- [ ] Vue/Svelte ports

## Sponsors

If Kinetik helps you build better interfaces, consider supporting the project:

<a href="https://buymeacoffee.com/sumitsharmq">
  <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee" />
</a>

## License

[MIT](LICENSE) © Sumit Sharma

---

<p align="center">
  Built with spring physics and shipped on <a href="https://vercel.com">Vercel</a>.
</p>
