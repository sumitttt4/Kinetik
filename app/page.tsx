'use client';

import Link from 'next/link';
import { useState } from 'react';
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

const steps = ['Install component dependency list', 'Copy one-file component source', 'Ship with physics-ready defaults'];

export default function Home() {
  const [selected, setSelected] = useState<RegistryItem | null>(null);

  return (
    <main className="min-h-screen pb-20">
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:px-8">
        <p className="inline-flex rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Kinetik Protocol
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
          Stop building static websites. Start building living interfaces.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          A copy-paste registry of physically modeled UI components for app teams that want Apple-style fluidity on the web.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/registry" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            Browse Registry
          </Link>
          <a href="#quickstart" className="rounded-full border border-sky-300 bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
            Quickstart
          </a>
        </div>
      </section>

      <div className="skew-divider h-12 bg-slate-950" />

      <section className="bg-slate-950 py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-6 md:px-8">
          {cards.map((card) => (
            <article key={card.title} className={`bento-card rounded-2xl p-5 ${card.span}`}>
              <h2 className="text-base font-semibold text-slate-900">{card.title}</h2>
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

      <section className="mx-auto mt-12 grid max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold text-slate-900">Why Kinetik</h3>
          <p className="mt-2 text-sm text-slate-600">Physically modeled motion, strict TypeScript ergonomics, and copy-paste delivery for fast teams.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold text-slate-900">Built with</h3>
          <p className="mt-2 text-sm text-slate-600">Next.js 14, Framer Motion, Tailwind CSS, Lucide React, TypeScript, pnpm.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold text-slate-900">Community</h3>
          <p className="mt-2 text-sm text-slate-600">Open-source friendly registry structure, ready for component contributions.</p>
        </article>
      </section>

      <section id="quickstart" className="mx-auto mt-8 max-w-6xl px-4 md:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_24px_60px_-40px_rgba(2,6,23,0.75)] backdrop-blur-xl">
          <h2 className="text-xl font-bold text-slate-900">Getting started</h2>
          <ol className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-3">
            {steps.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CodePanel item={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </main>
  );
}
