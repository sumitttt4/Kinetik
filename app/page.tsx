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
    <main className="min-h-screen pb-20">
      <section className="kinetik-hero-surface border-b border-sky-100/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-16 md:grid-cols-2 md:px-8 md:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              <Sparkles className="h-3.5 w-3.5" /> Kinetik Protocol
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Stop building static websites. Start building living interfaces.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
              A premium copy-paste registry of physically modeled UI components for teams that want Apple-level fluidity, not generic transitions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/registry" className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white">
                Browse Registry <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#wall-of-value" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900">
                Explore Components
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-sky-100 bg-white/75 p-5 shadow-[0_30px_80px_-48px_rgba(2,6,23,0.65)] backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Ship faster with physics</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {trustItems.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
              <DynamicIsland />
            </div>
          </div>
        </div>
      </section>

      <div className="skew-divider h-10 bg-slate-950" />

      <section id="wall-of-value" className="bg-slate-950 py-14">
        <div className="mx-auto mb-6 max-w-6xl px-4 md:px-8">
          <h2 className="text-2xl font-black text-white md:text-3xl">The Wall of Value</h2>
          <p className="mt-2 text-sm text-slate-300">Five hero components, physically modeled and copy-paste ready.</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-6 md:px-8">
          {cards.map((card) => (
            <article key={card.title} className={`bento-card rounded-2xl p-5 ${card.span}`}>
              <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{card.copy}</p>
              <div className="mt-5 flex min-h-36 items-center justify-center rounded-2xl border border-sky-100 bg-white/70 p-3">{card.component}</div>
              <button
                type="button"
                onClick={() => setSelected(registry.find((item) => item.name === card.title) ?? null)}
                className="mt-4 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700"
              >
                View Code
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-slate-900">Why Kinetik</h3>
            <p className="mt-2 text-sm text-slate-600">Bring native-feeling motion to the web with physically accurate transitions for layout, size, and position.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-slate-900">Copy-paste workflow</h3>
            <p className="mt-2 text-sm text-slate-600">Open any card, copy one-file code, install dependencies, and ship in minutes with strict TS support.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-slate-900">Open source roadmap</h3>
            <p className="mt-2 text-sm text-slate-600">Registry docs, contribution-ready architecture, and scalable component standards for community growth.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 md:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(2,6,23,0.75)] backdrop-blur-xl">
          <h2 className="text-xl font-bold text-slate-900">Launch checklist</h2>
          <div className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-3">
            <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">1) Add component to registry metadata</p>
            <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">2) Showcase in Wall of Value bento card</p>
            <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">3) Publish docs page under /registry/[slug]</p>
          </div>
        </div>
      </section>

      <CodePanel item={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </main>
  );
}
