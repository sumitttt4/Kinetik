'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Blocks, Copy, Github, Search, Sparkles, X, Zap } from 'lucide-react';
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
import { AnimatedToast } from './components/animated-toast';
import { SkeletonLoader } from './components/skeleton-loader';
import { HoverCard } from './components/hover-card';
import { AnimatedAccordion } from './components/animated-accordion';
import { CommandPalette } from './components/command-palette';
import { DragReorder } from './components/drag-reorder';
import { AnimatedProgress } from './components/animated-progress';
import { TypewriterText } from './components/typewriter-text';
import { ScrollReveal } from './components/scroll-reveal';
import { ConfettiButton } from './components/confetti-button';
import { registry, type RegistryItem } from '@/lib/registry';
import { ComponentCustomizer, type CustomizerState } from './components/component-customizer';
import { cn } from '@/lib/utils';

const cards = [
  { title: 'Dynamic Island', copy: 'Fluid expansion from pill to notification.', span: 'md:col-span-4', component: <DynamicIsland /> },
  { title: 'Fluid Tabs', copy: 'Spring-driven segmented control.', span: 'md:col-span-2', component: <FluidTabs /> },
  { title: 'Morphing Dialog', copy: 'Shared-element card-to-modal.', span: 'md:col-span-2', component: <MorphingDialog /> },
  { title: 'Magnet Button', copy: 'Pointer-following CTA.', span: 'md:col-span-2', component: <MagnetButton /> },
  { title: 'Infinite Scroll Columns', copy: 'Dual opposing marquees.', span: 'md:col-span-2', component: <InfiniteScrollColumn /> },
  { title: 'Neumorphic Newsletter', copy: 'Soft-UI subscription card.', span: 'md:col-span-4', component: <NewsletterCard /> },
  { title: 'Pulse Badge', copy: 'Status indicators with pulsing rings.', span: 'md:col-span-3', component: <PulseBadge /> },
  { title: 'Shimmer Text', copy: 'Gradient text with shimmer sweep.', span: 'md:col-span-3', component: <ShimmerText /> },
  { title: 'Tilt Card', copy: '3D card following cursor.', span: 'md:col-span-2', component: <TiltCard /> },
  { title: 'Toggle Switch', copy: 'Spring toggle with icon morph.', span: 'md:col-span-2', component: <ToggleSwitch /> },
  { title: 'Ripple Button', copy: 'Click-reactive ripple waves.', span: 'md:col-span-2', component: <RippleButton /> },
  { title: 'Animated Counter', copy: 'Spring number counters.', span: 'md:col-span-3', component: <AnimatedCounter /> },
  { title: 'Breathing Glow', copy: 'Layered blur breathing orbs.', span: 'md:col-span-3', component: <BreathingGlow /> },
  { title: 'Stagger List', copy: 'Staggered enter/exit list.', span: 'md:col-span-3', component: <StaggerList /> },
  { title: 'Flip Card', copy: '3D flip with backface reveal.', span: 'md:col-span-3', component: <FlipCard /> },
  { title: 'Elastic Drawer', copy: 'Spring expandable drawer.', span: 'md:col-span-3', component: <ElasticDrawer /> },
  { title: 'Animated Toast', copy: 'Stackable spring notifications.', span: 'md:col-span-3', component: <AnimatedToast /> },
  { title: 'Skeleton Loader', copy: 'Shimmer loading placeholders.', span: 'md:col-span-2', component: <SkeletonLoader /> },
  { title: 'Hover Card', copy: 'Spring popover on hover.', span: 'md:col-span-2', component: <HoverCard /> },
  { title: 'Animated Accordion', copy: 'Collapsible spring sections.', span: 'md:col-span-2', component: <AnimatedAccordion /> },
  { title: 'Command Palette', copy: 'Spotlight search (⌘K).', span: 'md:col-span-3', component: <CommandPalette /> },
  { title: 'Drag Reorder', copy: 'Sortable drag-and-drop list.', span: 'md:col-span-3', component: <DragReorder /> },
  { title: 'Animated Progress', copy: 'Spring-driven progress bars.', span: 'md:col-span-2', component: <AnimatedProgress /> },
  { title: 'Typewriter Text', copy: 'Auto-typing rotating phrases.', span: 'md:col-span-2', component: <TypewriterText /> },
  { title: 'Scroll Reveal', copy: 'Viewport-triggered animations.', span: 'md:col-span-2', component: <ScrollReveal /> },
  { title: 'Confetti Button', copy: 'Particle burst celebration.', span: 'md:col-span-3', component: <ConfettiButton /> },
];

const features = [
  { icon: Zap, title: 'Spring Physics', description: 'Every animation uses physically accurate spring models. No guessing durations and easing curves.' },
  { icon: Copy, title: 'Copy & Paste', description: 'Each component is a single file. Copy the code, install dependencies, and ship in minutes.' },
  { icon: Blocks, title: 'Composable', description: 'Built on Framer Motion, Tailwind CSS, and strict TypeScript. Fits into any React project.' },
];

const stats = [
  { value: '26', label: 'Components' },
  { value: '0', label: 'Dependencies*' },
  { value: '100%', label: 'TypeScript' },
  { value: 'A11y', label: 'Accessible' },
];

const contributors = [
  { name: 'Sumit Sharma', initials: 'SS', role: 'Creator' },
  { name: 'Open Source', initials: 'OS', role: 'Community' },
  { name: 'You?', initials: '??', role: 'Contribute' },
];

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<RegistryItem | null>(null);
  const [cmdkOpen, setCmdkOpen] = useState(false);
  const [customizerState, setCustomizerState] = useState<CustomizerState>({
    colorName: 'blue',
    colorHex: '#3b82f6',
    shade: 500,
    widthClass: 'max-w-md',
    shadowClass: 'shadow-md',
  });

  const [previewMode, setPreviewMode] = useState<'buttons' | 'cards' | 'inputs' | 'navigation' | 'feedback' | 'data'>('buttons');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setCmdkOpen(true);
    }
    if (e.key === 'Escape') {
      setCmdkOpen(false);
    }
  }, []);

  useEffect(() => {
    // Force scroll to top on load to ensure Hero is displayed
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onCmdK={() => setCmdkOpen(true)} />

      {/* ─── Global ⌘K Modal ─── */}
      {cmdkOpen && (
        <div className="fixed inset-0 z-[80] grid place-items-start justify-center pt-[18vh] bg-background/60 backdrop-blur-sm" onClick={() => setCmdkOpen(false)}>
          <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <CmdKInner onClose={() => setCmdkOpen(false)} />
          </div>
        </div>
      )}

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-border/40 pt-32 md:pt-40">
        {/* ─── Ambient Background Glows ─── */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] mix-blend-screen opacity-50 filter" />
        <div className="pointer-events-none absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[80px] mix-blend-screen opacity-30 filter" />

        {/* ─── Geometric Background Overlay (Teak-style) ─── */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <radialGradient id="grad1" cx="0%" cy="0%" r="70%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--background)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="grad2" cx="100%" cy="100%" r="70%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--background)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M0 0C250 0 400 200 400 500S200 1000 0 1000V0Z" fill="url(#grad1)" />
            <path d="M1000 1000C750 1000 600 800 600 500S800 0 1000 0V1000Z" fill="url(#grad2)" />
            <circle cx="50" cy="50" r="400" fill="url(#grad1)" filter="blur(80px)" />
            <circle cx="950" cy="950" r="400" fill="url(#grad2)" filter="blur(80px)" />
          </svg>
        </div>

        <div className="kinetik-grain absolute inset-0 opacity-20" />
        <div className="kinetik-dots pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {registry.length} animated components
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
              <Link href="/registry" className="kinetik-glow-btn inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Browse Components <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#components" className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                See Examples
              </a>
            </div>
          </FadeIn>

          {/* ─── Hero Customizer Playground ─── */}
          <FadeIn delay={0.1}>
            <div className="mt-16 rounded-2xl border border-border bg-card/80 p-6 md:p-8 backdrop-blur-sm">
              {/* Section Header */}
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    Interactive Playground
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pick a color and see it live across components
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={previewMode}
                    onChange={(e) => setPreviewMode(e.target.value as typeof previewMode)}
                    className="h-9 rounded-lg border border-border bg-background px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="buttons">Buttons</option>
                    <option value="cards">Cards</option>
                    <option value="inputs">Inputs</option>
                    <option value="navigation">Navigation</option>
                    <option value="feedback">Feedback</option>
                    <option value="data">Data Display</option>
                  </select>
                  <span className="hidden rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-[11px] text-muted-foreground md:inline-flex">
                    {customizerState.colorName}-{customizerState.shade}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-8 lg:flex-row">
                {/* Left — Customizer Controls */}
                <div className="w-full lg:w-[340px] shrink-0">
                  <ComponentCustomizer onChange={setCustomizerState} />
                </div>

                {/* Right — Live Preview Showcase */}
                <div className="relative flex min-h-[500px] flex-1 flex-col justify-center rounded-2xl border border-border/50 bg-background/50 p-8 shadow-sm backdrop-blur-sm">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />

                  {/* ─── BUTTONS MODE ─── */}
                  {previewMode === 'buttons' && (
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-wrap items-center justify-center gap-6">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn("rounded-xl px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl", customizerState.shadowClass)}
                          style={{ backgroundColor: customizerState.colorHex }}
                        >
                          Primary Action
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-xl border-2 px-8 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                          style={{ borderColor: customizerState.colorHex, color: customizerState.colorHex }}
                        >
                          Secondary
                        </motion.button>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-8">
                        <MagnetButton />
                        <RippleButton />
                        <ConfettiButton />
                      </div>
                    </div>
                  )}

                  {/* ─── CARDS MODE ─── */}
                  {previewMode === 'cards' && (
                    <div className="grid gap-6 sm:grid-cols-2">
                      <TiltCard />
                      <HoverCard />
                      <div className="col-span-full flex justify-center">
                        <FlipCard />
                      </div>
                    </div>
                  )}

                  {/* ─── INPUTS MODE ─── */}
                  {previewMode === 'inputs' && (
                    <div className="mx-auto w-full max-w-md space-y-6 rounded-2xl border border-border bg-card p-8 shadow-lg">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Notification Preferences</label>
                          <div className="flex items-center justify-between rounded-lg border border-border p-3">
                            <span className="text-sm">Email Updates</span>
                            <ToggleSwitch />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Search</label>
                          <div className="relative">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                              className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm outline-none transition-all focus:ring-2"
                              placeholder="Search..."
                              style={{ '--tw-ring-color': customizerState.colorHex } as React.CSSProperties}
                            />
                          </div>
                        </div>
                        <button
                          className="w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                          style={{ backgroundColor: customizerState.colorHex }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ─── NAVIGATION MODE ─── */}
                  {previewMode === 'navigation' && (
                    <div className="flex flex-col gap-12">
                      <div className="w-full">
                        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Fluid Tabs</p>
                        <FluidTabs />
                      </div>
                      <div className="w-full">
                        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Breadcrumbs (Static)</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <span className="hover:text-foreground">Home</span>
                          <span className="opacity-50">/</span>
                          <span className="hover:text-foreground">Settings</span>
                          <span className="opacity-50">/</span>
                          <span className="font-medium text-foreground" style={{ color: customizerState.colorHex }}>Profile</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─── FEEDBACK MODE ─── */}
                  {previewMode === 'feedback' && (
                    <div className="flex flex-col items-center gap-12">
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Dynamic Island</p>
                        <DynamicIsland />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status Pulse</p>
                        <PulseBadge />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Breathing Glow</p>
                        <BreathingGlow />
                      </div>
                    </div>
                  )}

                  {/* ─── DATA MODE ─── */}
                  {previewMode === 'data' && (
                    <div className="flex flex-col items-center gap-12">
                      <div className="w-full max-w-sm">
                        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Animated Progress</p>
                        <AnimatedProgress />
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Users</p>
                          <div className="text-4xl font-bold tracking-tight" style={{ color: customizerState.colorHex }}>
                            <AnimatedCounter value={1205} />
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Revenue</p>
                          <div className="text-4xl font-bold tracking-tight" style={{ color: customizerState.colorHex }}>
                            $<AnimatedCounter value={8400} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-sm md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 bg-card px-6 py-5">
                  <span className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</span>
                  <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="kinetik-waves relative border-b border-border/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why Kinetik</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Motion should feel effortless</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Stop hand-tuning keyframes. Every Kinetik component uses physically accurate spring models that feel native.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <article className="group h-full rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Component Grid ─── */}
      <section id="components" className="kinetik-geometric relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Registry</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Component Library</h2>
                <p className="mt-3 max-w-lg text-sm text-muted-foreground md:text-base">
                  {cards.length} production-ready components. Each one is a single file with zero external dependencies beyond Framer Motion.
                </p>
              </div>
              <Link href="/registry" className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                View All <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-6">
            {cards.map((card) => (
              <article key={card.title} className={`bento-card group relative overflow-hidden rounded-xl p-5 ${card.span}`}>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-foreground">{card.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{card.copy}</p>
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

      {/* ─── Contributors ─── */}
      <section className="kinetik-circles relative border-t border-border/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Community</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built by the community</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              Kinetik is open source. Contributions, ideas, and feedback are always welcome.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mx-auto mt-12 flex max-w-md flex-wrap items-center justify-center gap-4">
              {contributors.map((c) => (
                <div key={c.name} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {c.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.name}</p>
                    <p className="text-[11px] text-muted-foreground">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Link
                href="https://github.com/sumitttt4/Kinetik"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <Github className="h-4 w-4" /> Contribute on GitHub
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="kinetik-diagonal relative border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <FadeIn>
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-10 text-center md:p-16">
              <div className="kinetik-lines pointer-events-none absolute inset-0 opacity-60" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to ship <span className="kinetik-gradient-text">living UI</span>?
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  Browse the full registry, copy any component, and have it running in your project in under a minute.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link href="/registry" className="kinetik-glow-btn inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="https://github.com/sumitttt4/Kinetik" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <CodePanel item={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </main>
  );
}

/* ─── Inline ⌘K Search ─── */
function CmdKInner({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');

  const filtered = registry.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center gap-3 border-b border-border px-4">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search components..."
          className="h-12 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
        />
        <button type="button" onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="max-h-72 overflow-y-auto p-2">
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-xs text-muted-foreground">No results found.</p>
        ) : (
          filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/registry/${item.slug}`}
              onClick={onClose}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span>{item.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{item.category}</span>
            </Link>
          ))
        )}
      </div>
      <div className="border-t border-border px-4 py-2 text-[10px] text-muted-foreground">
        <kbd className="rounded border border-border bg-muted px-1">esc</kbd> to close
      </div>
    </>
  );
}
