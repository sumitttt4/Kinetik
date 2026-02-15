'use client';

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { Sparkles, Palette, Blocks, Zap } from 'lucide-react';

const releases = [
  {
    version: '0.3.0',
    date: 'Feb 2026',
    title: 'Interaction & Feedback Pack',
    icon: Zap,
    items: [
      'Added Animated Toast with stackable spring notifications',
      'Added Skeleton Loader for loading state placeholders',
      'Added Hover Card with spring-animated popover',
      'Added Animated Accordion with collapsible spring transitions',
      'Added Command Palette (⌘K) with keyboard navigation',
      'Added Drag Reorder list with layout animations',
      'Added Animated Progress bars with spring physics',
      'Added Typewriter Text with rotating phrases',
      'Added Scroll Reveal with viewport-triggered animations',
      'Added Confetti Button with particle burst effects',
      'Live preview on all registry detail pages',
      'Changelog page',
      'Contributors section on homepage',
      'Scroll animations on homepage sections',
    ],
  },
  {
    version: '0.2.0',
    date: 'Feb 2026',
    title: 'Brand Identity & UI Redesign',
    icon: Palette,
    items: [
      'Complete visual overhaul with zinc-based color system',
      'New hero with dot grid, grain texture, and gradient text',
      'Floating glass navbar with mobile menu',
      'Footer with brand, links, and social',
      'Redesigned registry with search and category filters',
      'Redesigned 404 page with 3D tilt effect',
      'Improved code panel modal',
    ],
  },
  {
    version: '0.1.0',
    date: 'Feb 2026',
    title: 'Initial Release',
    icon: Blocks,
    items: [
      'Launched with 16 animated components',
      'Dynamic Island, Fluid Tabs, Morphing Dialog',
      'Magnet Button, Floating Toolbar, Infinite Scroll Columns',
      'Neumorphic Newsletter, Pulse Badge, Shimmer Text',
      'Tilt Card, Toggle Switch, Ripple Button',
      'Animated Counter, Breathing Glow, Stagger List',
      'Flip Card, Elastic Drawer',
      'Registry system with searchable catalog',
      'Dark/light mode support',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:pt-36">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Changelog
          </p>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          What&apos;s new in Kinetik
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          All notable changes, new components, and improvements.
        </p>

        {/* Timeline */}
        <div className="mt-12 space-y-12">
          {releases.map((release, ri) => (
            <article key={release.version} className="relative pl-8">
              {/* Timeline line */}
              {ri < releases.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
              )}

              {/* Dot */}
              <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card">
                <release.icon className="h-3 w-3 text-primary" />
              </div>

              {/* Content */}
              <div className="flex items-baseline gap-3">
                <span className="rounded-md border border-primary/15 bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                  v{release.version}
                </span>
                <span className="text-xs text-muted-foreground">{release.date}</span>
              </div>

              <h2 className="mt-3 text-lg font-semibold tracking-tight">
                {release.title}
              </h2>

              <ul className="mt-3 space-y-1.5">
                {release.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
