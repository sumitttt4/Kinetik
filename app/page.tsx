'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { DynamicIsland } from './components/dynamic-island';
import { FluidTabs } from './components/fluid-tabs';
import { InfiniteScrollColumn } from './components/infinite-scroll-column';
import { MagnetButton } from './components/magnet-button';
import { MorphingDialog } from './components/morphing-dialog';
import { CodePanel } from './components/code-panel';
import { FloatingDock } from './components/floating-dock';
import { Navbar } from './components/navbar';
import { registry, type RegistryItem } from '@/lib/registry';

const cards = [
  {
    title: 'Dynamic Island',
    copy: 'Fluid expansion from pill to context-rich notification.',
    span: 'md:col-span-3',
    component: <DynamicIsland />
  },
  {
    title: 'Fluid Tabs',
    copy: 'A spring-driven segmented control with bubblegum stretch.',
    span: 'md:col-span-3',
    component: <FluidTabs />
  },
  {
    title: 'Morphing Dialog',
    copy: 'Card-to-modal transition with seamless element continuity.',
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
  }
];

const trustItems = ['Next.js 14 App Router', 'Framer Motion 11+', 'Tailwind + cn()', 'Strict TypeScript'];

export default function Home() {
  const [selected, setSelected] = useState<RegistryItem | null>(null);

  return (
    <main className="min-h-screen bg-background pb-20 text-foreground transition-colors duration-300">
      <Navbar />
      <section className="kinetik-hero-surface border-b border-border/60 pt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 md:grid-cols-2 md:pb-20 md:pt-8">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Kinetik Protocol
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.06] tracking-tight md:text-6xl">
              Stop building static websites. Start building <span className="text-primary">living interfaces</span>.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              A premium copy-paste registry of physically modeled UI components for teams that want Apple-level fluidity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/registry" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Browse Registry <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#wall-of-value" className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                Explore Components
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_25px_50px_-35px_hsl(var(--foreground)/0.28)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Ship faster with physics</p>
            <div className="mb-6 grid grid-cols-2 gap-3">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground">
                    {item}
                  </div>
                ))}
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <DynamicIsland />
            </div>
          </div>
        </div>
      </section>

      <section id="wall-of-value" className="py-16 md:py-20">
        <div className="mx-auto mb-8 max-w-6xl px-6 md:mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The Wall of Value</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">Five hero components, physically modeled and copy-paste ready.</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-6">
          {cards.map((card) => (
            <article key={card.title} className={`bento-card relative overflow-hidden rounded-3xl p-5 md:p-6 ${card.span}`}>
              <div className="relative z-10">
                <h3 className="text-base font-semibold leading-tight tracking-tight text-foreground md:text-[17px]">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground md:text-sm">{card.copy}</p>
                <div className="mt-5 flex min-h-[164px] items-center justify-center rounded-2xl border border-border bg-muted/40 p-3.5 md:p-4">
                  {card.component}
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(registry.find((item) => item.name === card.title) ?? null)}
                  className="mt-4 inline-flex h-8.5 items-center justify-center rounded-full border border-border bg-background px-3.5 text-[11px] font-semibold uppercase tracking-[0.03em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  View Code
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-6 pb-24 md:mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold tracking-tight">Why Kinetik</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Bring native-feeling motion to the web with physically accurate transitions for layout, size, and position.</p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold tracking-tight">Copy-paste workflow</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Open any card, copy one-file code, install dependencies, and ship in minutes with strict TS support.</p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold tracking-tight">Open source roadmap</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Registry docs, contribution-ready architecture, and scalable component standards for community growth.</p>
          </article>
        </div>
        
        <div className="mt-10 rounded-3xl border border-border bg-card p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Launch checklist</h2>
          <div className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
            <p className="flex items-center rounded-xl border border-border bg-background px-4 py-3 font-medium">1) Add component to registry metadata</p>
            <p className="flex items-center rounded-xl border border-border bg-background px-4 py-3 font-medium">2) Showcase in Wall of Value bento card</p>
            <p className="flex items-center rounded-xl border border-border bg-background px-4 py-3 font-medium">3) Publish docs page under /registry/[slug]</p>
          </div>
        </div>
      </section>

      <FloatingDock />

      <CodePanel item={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </main>
  );
}
