# Contributing to Kinetik

Thank you for your interest in contributing to Kinetik! This guide will help you get started.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Adding a Component](#adding-a-component)
- [Coding Standards](#coding-standards)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/Kinetik.git
   cd Kinetik
   ```
3. **Install** dependencies:
   ```bash
   pnpm install
   ```
4. **Create a branch** for your work:
   ```bash
   git checkout -b feat/my-component
   ```
5. **Start** the dev server:
   ```bash
   pnpm dev
   ```

## Development Workflow

```
fork → clone → branch → code → test → commit → push → PR
```

- Always work on a feature branch, never commit directly to `main`
- Keep PRs focused — one component or fix per PR
- Run `pnpm build` before submitting to ensure zero errors
- Run `pnpm lint` to check for code style issues

## Adding a Component

Kinetik components follow a strict single-file architecture. Here is the checklist for adding a new component:

### 1. Create the component file

```
app/components/my-component.tsx
```

Every component must:

- Start with `'use client';` directive
- Export a single named function component
- Use the shared `cn()` utility from `@/lib/utils`
- Use `kinetikSpring` from `@/lib/motion` for spring animations
- Respect `useReducedMotion()` for accessibility
- Work in both light and dark mode
- Be fully keyboard navigable
- Include proper `aria-*` attributes

### 2. Register the component

Add metadata to `lib/registry.ts`:

```ts
{
  name: 'My Component',
  slug: 'my-component',
  description: 'A brief description of what it does.',
  category: 'hero' | 'motion' | 'input',
  dependencies: ['framer-motion', 'lucide-react'],
  usage: "import { MyComponent } from '@/app/components/my-component';",
  code: `'use client';\n\nexport function MyComponent() {\n  // source\n}`
}
```

### 3. Add to the showcase (optional)

If your component is a hero feature, add it to the `cards` array in `app/page.tsx`.

### 4. Test

- Verify it renders in both light and dark mode
- Test keyboard navigation (Tab, Enter, Escape)
- Test with `prefers-reduced-motion: reduce`
- Run `pnpm build` to verify zero type errors

## Coding Standards

### TypeScript

- **Strict mode** — No `any` types, no `@ts-ignore`
- Use `type` imports where applicable
- Prefer `interface` for component prop types
- Export only what is needed

### Styling

- Tailwind CSS utility classes only — no CSS modules or inline styles
- Use design tokens from `globals.css` (e.g., `bg-background`, `text-foreground`)
- Use `cn()` for conditional class merging
- Prefer semantic color tokens over hardcoded values

### Animation

- Use Framer Motion for all animations
- Use `kinetikSpring` for spring transitions
- Avoid arbitrary `duration` values — spring physics should drive timing
- Always provide `useReducedMotion()` fallbacks

### File Naming

- Components: `kebab-case.tsx` (e.g., `dynamic-island.tsx`)
- Utilities: `kebab-case.ts` (e.g., `motion.ts`)

## Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]
```

### Types

| Type | Usage |
| --- | --- |
| `feat` | New component or feature |
| `fix` | Bug fix |
| `docs` | Documentation only changes |
| `style` | Code style (formatting, semicolons) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or correcting tests |
| `chore` | Build process, CI, or auxiliary tool changes |

### Examples

```
feat(dynamic-island): add payment notification state
fix(magnet-button): correct spring physics on mobile
docs: update component table in README
```

## Pull Request Process

1. **Update documentation** — If your change adds a component, update the README component table
2. **Fill out the PR template** — Describe what changed and why
3. **Pass CI** — Ensure `pnpm build` and `pnpm lint` pass
4. **Request review** — Tag a maintainer for review
5. **Squash and merge** — PRs are squash-merged to keep history clean

### PR Title Format

Use the same convention as commits:

```
feat(fluid-tabs): add swipe gesture support
```

## Questions?

Open a [Discussion](https://github.com/sumitttt4/Kinetik/discussions) or reach out on an issue.

Thank you for helping make Kinetik better! 🎉
