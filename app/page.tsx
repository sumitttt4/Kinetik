'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Blocks, Copy, Sparkles, Zap } from 'lucide-react';
import { DynamicIsland } from './components/dynamic-island';
import { FluidTabs } from './components/fluid-tabs';
import { InfiniteScrollColumn } from './components/infinite-scroll-column';
import { MagnetButton } from './components/magnet-button';
import { MorphingDialog } from './components/morphing-dialog';
import { CodePanel } from './components/code-panel';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { NewsletterCard } from './components/newsletter-card';
import { PulseBadge } from './components/pulse-badge';
import { ShimmerText } from './components/shimmer-text';
import { TiltCard } from './components/tilt-card';
import { ToggleSwitch } from './components/toggle-switch';
import { RippleButton } from './components/ripple-button';
import { AnimatedCounter } from './components/animated-counter';
import { BreathingGlow } from './components/breathing-glow';
import { StaggerList } from './components/stagger-list';
import { FlipCard } from './components/flip-card';
import { ElasticDrawer } from './components/elastic-drawer';
import { registry, type RegistryItem } from '@/lib/registry';

const cards = [
  {
    title: 'Dynamic Island',
    copy: 'Fluid expansion from pill to context-rich notification.',
    span: 'md:col-span-4',
    component: <DynamicIsland />
  },
  {
    title: 'Fluid Tabs',
    copy: 'Spring-driven segmented control with layout animations.',
    span: 'md:col-span-2',
    component: <FluidTabs />
  },
  {
    title: 'Morphing Dialog',
    copy: 'Card-to-modal with seamless shared-element transitions.',
    span: 'md:col-span-2',
    component: <MorphingDialog />
  },
  {
    title: 'Magnet Button',
    copy: 'Pointer-following CTA with subtle perceived mass.',
    span: 'md:col-span-2',
    component: <MagnetButton />
  },
  {
    title: 'Infinite Scroll Columns',
    copy: 'Dual opposing marquees with smooth transform loops.',
    span: 'md:col-span-2',
    component: <InfiniteScrollColumn />
  },
  {
    title: 'Neumorphic Newsletter',
    copy: 'Soft-UI subscription card with recessed inputs and spring interactions.',
    span: 'md:col-span-4',
    component: <NewsletterCard />
  },
  {
    title: 'Pulse Badge',
    copy: 'Status indicators with animated pulsing rings.',
    span: 'md:col-span-3',
    component: <PulseBadge />
  },
  {
    title: 'Shimmer Text',
    copy: 'Gradient text with a sweeping shimmer effect.',
    span: 'md:col-span-3',
    component: <ShimmerText />
  },
  {
    title: 'Tilt Card',
    copy: '3D perspective card that follows cursor position.',
    span: 'md:col-span-2',
    component: <TiltCard />
  },
  {
    title: 'Toggle Switch',
    copy: 'Spring-animated toggle with icon transitions.',
    span: 'md:col-span-2',
    component: <ToggleSwitch />
  },
  {
    title: 'Ripple Button',
    copy: 'Click-reactive button with expanding ripple waves.',
    span: 'md:col-span-2',
    component: <RippleButton />
  },
  {
    title: 'Animated Counter',
    copy: 'Spring-driven number counters that animate on mount.',
    span: 'md:col-span-3',
    component: <AnimatedCounter />
  },
  {
    title: 'Breathing Glow',
    copy: 'Pulsing glow orbs with layered blur breathing effect.',
    span: 'md:col-span-3',
    component: <BreathingGlow />
  },
  {
    title: 'Stagger List',
    copy: 'Animated task list with staggered enter/exit transitions.',
    span: 'md:col-span-3',
    component: <StaggerList />
  },
  {
    title: 'Flip Card',
    copy: '3D card flip with spring physics and backface reveal.',
    span: 'md:col-span-3',
    component: <FlipCard />
  },
  {
    title: 'Elastic Drawer',
    copy: 'Spring-powered expandable drawer with staggered items.',
    span: 'md:col-span-3',
    component: <ElasticDrawer />
  }
];

const features = [
  {
    icon: Zap,
    title: 'Spring Physics',
    description: 'Every animation uses physically accurate spring models. No more guessing durations and easing curves.',
  },
  {
    icon: Copy,
    title: 'Copy & Paste',
    description: 'Each component is a single file. Copy the code, install dependencies, and ship in minutes.',
  },
  {
    icon: Blocks,
    title: 'Composable',
    description: 'Built on Framer Motion, Tailwind CSS, and strict TypeScript. Fits into any React project.',
  },
];

const stats = [
  { value: '16', label: 'Components' },
  { value: '0', label: 'Dependencies*' },
  { value: '100%', label: 'TypeScript' },
  { value: 'A11y', label: 'Accessible' },
];

export default function Home() {
  const [selected, setSelected] = useState<RegistryItem | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="kinetik-hero-surface kinetik-grain relative overflow-hidden border-b border-border/40 pt-32 md:pt-40">
        <div className="kinetik-dots pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Open-source motion library
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Build interfaces that{' '}
              <span className="kinetik-gradient-text">feel alive</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A curated registry of physics-driven, copy-paste UI components.
              Framer Motion + Tailwind CSS + TypeScript.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/registry"
                className="kinetik-glow-btn inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Browse Components
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#components"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                See Examples
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-sm md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 bg-card px-6 py-5">
                <span className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</span>
                <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="border-b border-border/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why Kinetik
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Motion should feel effortless
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Stop hand-tuning keyframes. Every Kinetik component uses physically accurate spring models
              that feel native across all devices.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Component Grid ─── */}
      <section id="components" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Registry
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Component Library
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground md:text-base">
                {cards.length} production-ready components. Each one is a single file with zero
                external dependencies beyond Framer Motion.
              </p>
            </div>
            <Link
              href="/registry"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-6">
            {cards.map((card) => (
              <article
                key={card.title}
                className={`bento-card group relative overflow-hidden rounded-2xl p-5 ${card.span}`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {card.copy}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(registry.find((item) => item.name === card.title) ?? null)}
                      className="shrink-0 rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground opacity-0 transition-all hover:bg-accent hover:text-foreground group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Code
                    </button>
                  </div>
                  <div className="mt-4 flex min-h-[156px] items-center justify-center rounded-xl border border-border bg-muted/30 p-3">
                    {card.component}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
            <div className="kinetik-dots pointer-events-none absolute inset-0 opacity-50" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to ship <span className="kinetik-gradient-text">living UI</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Browse the full registry, copy any component, and have it running
                in your project in under a minute.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/registry"
                  className="kinetik-glow-btn inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/sumitttt4/Kinetik"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Star on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CodePanel item={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </main>
  );
}
