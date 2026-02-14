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
import { ModeToggle } from '@/components/mode-toggle';  // Add import
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

  // Simple Navbar component for reusability if needed, but inline is fine here for now
  const Navbar = () => (
    <nav className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
       <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
         <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
         </div>
         Kinetik
       </div>
       <div className="flex items-center gap-4">
          <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </Link>
          <ModeToggle />
       </div>
    </nav>
  );

  return (
    <main className="min-h-screen pb-20 bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <section className="kinetik-hero-surface border-b border-border/40 pt-32 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Kinetik Protocol
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
              Stop building static websites. Start building <span className="text-primary">living interfaces.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              A premium copy-paste registry of physically modeled UI components for teams that want Apple-level fluidity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/registry" className="inline-flex h-12 items-center gap-2 rounded-full instagram-gradient px-8 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-95 bg-primary hover:bg-primary/90">
                Browse Registry <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#wall-of-value" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-bold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                Explore Components
              </a>
            </div>
          </div>

          <div className="relative isolate">
             <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl dark:from-primary/10 dark:to-secondary/10" />
            <div className="rounded-3xl border border-border bg-card/50 p-6 shadow-2xl backdrop-blur-md">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Ship faster with physics</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-background/50 px-4 py-3 text-xs font-medium text-foreground">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-border bg-background p-4 shadow-sm">
                <DynamicIsland />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="skew-divider h-12 bg-foreground" /> 

      <section id="wall-of-value" className="bg-foreground py-24 text-background">
        <div className="mx-auto mb-12 max-w-6xl px-6">
          <h2 className="text-4xl font-black md:text-5xl">The Wall of Value</h2>
          <p className="mt-4 text-lg text-background/70">Five hero components, physically modeled and copy-paste ready.</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-6">
          {cards.map((card) => (
            <article key={card.title} className={`bento-card relative overflow-hidden rounded-3xl p-6 ${card.span} border-white/10 bg-white/5`}>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-background">{card.title}</h3>
                <p className="mt-2 text-sm text-background/70">{card.copy}</p>
                <div className="mt-8 flex min-h-[160px] items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-4">
                    {/* Wrap components in a light-theme context locally if they aren't dark-mode ready, or ensure they adapt */}
                    <div className="text-foreground dark:text-foreground">
                       {card.component}
                    </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(registry.find((item) => item.name === card.title) ?? null)}
                  className="mt-6 inline-flex h-9 items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 text-xs font-bold text-background transition-colors hover:bg-white/20"
                >
                  View Code
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 pb-24 max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-bold">Why Kinetik</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Bring native-feeling motion to the web with physically accurate transitions for layout, size, and position.</p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-bold">Copy-paste workflow</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Open any card, copy one-file code, install dependencies, and ship in minutes with strict TS support.</p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-bold">Open source roadmap</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Registry docs, contribution-ready architecture, and scalable component standards for community growth.</p>
          </article>
        </div>
        
        <div className="mt-12 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl font-bold">Launch checklist</h2>
          <div className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
            <p className="flex items-center rounded-xl border border-border bg-background px-4 py-3 font-medium">1) Add component to registry metadata</p>
            <p className="flex items-center rounded-xl border border-border bg-background px-4 py-3 font-medium">2) Showcase in Wall of Value bento card</p>
            <p className="flex items-center rounded-xl border border-border bg-background px-4 py-3 font-medium">3) Publish docs page under /registry/[slug]</p>
          </div>
        </div>
      </section>

      <CodePanel item={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </main>
  );
}
