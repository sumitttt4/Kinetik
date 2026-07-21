'use client';

import * as React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import Footer1 from '@/components/footer-section-1';
import { PatternRenderer } from '@/components/patterns/pattern-renderer';
import { PATTERNS } from '@/lib/store';
import { Card } from '@/components/ui/elements';
import { useTheme } from 'next-themes';
import { 
  ArrowRight,
  ExternalLink,
  Copy,
  Layers,
  Sliders,
  ArrowUpRight,
  Search,
  Clipboard,
  MousePointerClick,
} from 'lucide-react';

export default function Home() {
  const featuredPatterns = PATTERNS.slice(0, 6);
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#171717] dark:bg-black dark:text-neutral-400 flex flex-col selection:bg-[#FF6B35]/20 selection:text-[#FF6B35] font-sans antialiased relative overflow-x-hidden transition-colors duration-300">
      
      {/* ── Subtle Noise Canvas Overlay ── */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.012] bg-repeat z-[100]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />



      {/* ── MAIN CONTENT CONTAINER (Bounded by ProvenMetal Side Rails) ── */}
      <div className="relative w-full max-w-[1240px] mx-auto border-x border-neutral-200/80 dark:border-neutral-900 flex flex-col flex-1 z-10 bg-white dark:bg-black">
        
        <Header />
        
        {/* ── ProvenMetal Diagonal Hatch Side Rail Strips (Left & Right) ── */}
        <div 
          className="absolute inset-y-0 left-0 w-8 sm:w-10 border-r border-neutral-200/80 dark:border-neutral-900 pointer-events-none z-20 opacity-60 dark:opacity-40"
          style={{
            backgroundImage: mounted && theme === 'dark'
              ? 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 7px)'
              : 'repeating-linear-gradient(-45deg, rgba(0,0,0,0.15) 0, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 7px)',
          }}
        />
        <div 
          className="absolute inset-y-0 right-0 w-8 sm:w-10 border-l border-neutral-200/80 dark:border-neutral-900 pointer-events-none z-20 opacity-60 dark:opacity-40"
          style={{
            backgroundImage: mounted && theme === 'dark'
              ? 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 7px)'
              : 'repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 7px)',
          }}
        />



        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HERO SECTION                                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-16 md:py-24 border-b border-neutral-200/80 dark:border-neutral-900/80 overflow-hidden z-10">
          
          {/* ProvenMetal Corner L-Brackets in Orange (#FF6B35) */}
          <div className="absolute top-4 left-12 w-4 h-4 border-t-2 border-l-2 border-[#FF6B35] pointer-events-none" />
          <div className="absolute top-4 right-12 w-4 h-4 border-t-2 border-r-2 border-[#FF6B35] pointer-events-none" />
          <div className="absolute bottom-4 left-12 w-4 h-4 border-b-2 border-l-2 border-[#FF6B35] pointer-events-none" />
          <div className="absolute bottom-4 right-12 w-4 h-4 border-b-2 border-r-2 border-[#FF6B35] pointer-events-none" />

          {/* Edge Crosshair Markers (+) */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 text-sm font-light text-[#FF6B35] select-none pointer-events-none hidden sm:block">+</div>
          <div className="absolute top-1/2 right-10 -translate-y-1/2 text-sm font-light text-[#FF6B35] select-none pointer-events-none hidden sm:block">+</div>

          {/* Minimal Engineering Markers */}
          <span className="absolute top-4 left-20 text-[8px] font-mono text-neutral-400 dark:text-neutral-600 pointer-events-none select-none">00:00</span>
          <span className="absolute top-4 right-20 text-[8px] font-mono text-neutral-400 dark:text-neutral-600 pointer-events-none select-none">KNTK.V1</span>

          {/* Centered Hero Content Block */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center flex flex-col items-center space-y-6 relative z-10">
            
            {/* Supporting Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-white/5 text-[8px] font-mono text-neutral-500 dark:text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
              <span>OPEN SOURCE · V1.0</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-white leading-[1.04]">
              Production UI <span className="text-[#FF6B35]">Patterns</span>
            </h1>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-[#78716C] dark:text-neutral-400 max-w-md leading-relaxed">
              Copy the invisible design systems behind modern SaaS websites. Browse, customize, and ship.
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[9px] font-mono text-neutral-500 dark:text-neutral-400 pt-1">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-black">
                <Copy className="h-2.5 w-2.5 text-[#FF6B35]" /> One-click copy
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-black">
                <Layers className="h-2.5 w-2.5 text-[#FF6B35]" /> React + CSS
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-black">
                <Sliders className="h-2.5 w-2.5 text-[#FF6B35]" /> Customizable
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href="/patterns/enterprise-hero"
                className="bg-[#FF6B35] text-white hover:bg-[#e05a2a] px-5 h-[36px] rounded text-xs font-mono font-bold transition-all duration-160 ease-out active:scale-[0.97] flex items-center gap-1.5 shadow-sm"
              >
                Browse Patterns <ArrowRight className="h-3 w-3" />
              </Link>
              <a
                href="https://github.com/sumitttt4/Kinetik"
                target="_blank"
                rel="noreferrer"
                className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-white/5 text-[#171717] dark:text-white px-4 h-[36px] rounded text-xs font-mono font-medium transition-all duration-160 ease-out active:scale-[0.97] flex items-center gap-1.5"
              >
                GitHub <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </div>

          </div>
        </section>

        {/* ── PROVENMETAL SECTION DIVIDER BAR ── */}
        <div className="border-b border-neutral-200/80 dark:border-neutral-900 bg-white dark:bg-black py-2.5 px-12 flex items-center justify-between text-[9px] font-mono text-neutral-500 z-20">
          <div className="px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/80 text-[#171717] dark:text-white font-bold tracking-wider">
            BUILT FOR SPEED
          </div>
          <div className="flex items-center gap-4 text-neutral-400 dark:text-neutral-600">
            <span>[01]</span>
            <span className="text-[#FF6B35] font-bold">✶</span>
            <span>[02]</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HOW IT WORKS — ProvenMetal Pipeline System                  */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-neutral-200/80 dark:border-neutral-900/80 py-12 md:py-16 relative z-10">
          <div className="px-12 sm:px-14 space-y-10 text-left">
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono font-bold text-[#FF6B35] uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#FF6B35]/20 bg-[#FF6B35]/5">
                INSIDE THE PIPELINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] dark:text-white">
                Three steps. Zero friction.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Vertical Guide lines between columns */}
              <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-neutral-200/60 dark:bg-neutral-800/80 pointer-events-none" />
              <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-neutral-200/60 dark:bg-neutral-800/80 pointer-events-none" />

              {/* Step 1 */}
              <div className="space-y-4 relative md:pr-6">
                <div className="flex items-center justify-between">
                  <div className="relative w-9 h-9 border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                    <span className="absolute -top-1 -left-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -top-1 -right-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -bottom-1 -left-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -bottom-1 -right-1 text-[8px] text-[#FF6B35]">+</span>
                    <Search className="h-4 w-4 text-[#FF6B35]" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-bold">[ 01 ]</span>
                </div>
                <h3 className="text-sm font-bold text-[#171717] dark:text-white tracking-widest uppercase font-mono">BROWSE</h3>
                <p className="text-xs text-[#78716C] dark:text-neutral-400 leading-relaxed font-sans">
                  Search through curated grid systems, background effects, dividers, and decorations used by modern SaaS products.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 relative md:px-4">
                <div className="flex items-center justify-between">
                  <div className="relative w-9 h-9 border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                    <span className="absolute -top-1 -left-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -top-1 -right-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -bottom-1 -left-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -bottom-1 -right-1 text-[8px] text-[#FF6B35]">+</span>
                    <MousePointerClick className="h-4 w-4 text-[#FF6B35]" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-bold">[ 02 ]</span>
                </div>
                <h3 className="text-sm font-bold text-[#171717] dark:text-white tracking-widest uppercase font-mono">CUSTOMIZE</h3>
                <p className="text-xs text-[#78716C] dark:text-neutral-400 leading-relaxed font-sans">
                  Adjust grid size, opacity, colors, and animation speed in real-time with instant live feedback.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 relative md:pl-6">
                <div className="flex items-center justify-between">
                  <div className="relative w-9 h-9 border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                    <span className="absolute -top-1 -left-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -top-1 -right-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -bottom-1 -left-1 text-[8px] text-[#FF6B35]">+</span>
                    <span className="absolute -bottom-1 -right-1 text-[8px] text-[#FF6B35]">+</span>
                    <Clipboard className="h-4 w-4 text-[#FF6B35]" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-bold">[ 03 ]</span>
                </div>
                <h3 className="text-sm font-bold text-[#171717] dark:text-white tracking-widest uppercase font-mono">COPY</h3>
                <p className="text-xs text-[#78716C] dark:text-neutral-400 leading-relaxed font-sans">
                  One-click copy as React, Tailwind CSS, or raw CSS. Drop it directly into your codebase and ship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* EXPLORE PATTERNS                                           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="px-12 sm:px-14 py-12 md:py-14 space-y-8 z-10 relative">
          <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-neutral-900 pb-3 text-left">
            <h2 className="text-base font-bold text-[#171717] dark:text-white tracking-tight">Explore Patterns</h2>
            <Link href="/patterns/enterprise-hero" className="text-xs font-mono text-neutral-500 hover:text-[#171717] dark:hover:text-white inline-flex items-center gap-1 transition-colors">
              View all &rarr;
            </Link>
          </div>

          {/* Catalog pattern cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredPatterns.map((pattern) => (
              <Link key={pattern.id} href={`/patterns/${pattern.id}`}>
                <Card className="group border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-black hover:border-[#FF6B35]/60 transition-all duration-200 ease-out active:scale-[0.98] p-0 h-64 flex flex-col justify-between cursor-pointer relative overflow-hidden rounded-md">
                  
                  {/* Live pattern preview thumbnail */}
                  <div className="h-32 relative overflow-hidden bg-white dark:bg-black border-b border-neutral-200/60 dark:border-neutral-900">
                    <PatternRenderer
                      patternId={pattern.id}
                      className="absolute inset-0"
                      animate={false}
                      isThumbnail={true}
                    />
                  </div>

                  {/* Pattern metadata */}
                  <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-bold text-[#171717] dark:text-white group-hover:text-[#FF6B35] transition-colors">{pattern.name}</h3>
                        {pattern.tags.includes('Animated') && (
                          <span className="text-[7px] font-mono text-white bg-[#FF6B35] px-1 py-0.2 rounded">Live</span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#78716C] dark:text-neutral-500 line-clamp-2 leading-relaxed">
                        {pattern.description}
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-900 flex items-center justify-between text-[9px] font-mono">
                      <span className="text-[#78716C] dark:text-neutral-500 uppercase">{pattern.category.replace('-', ' ')}</span>
                      <span className="text-[#171717] dark:text-neutral-400 group-hover:text-[#FF6B35] transition-colors inline-flex items-center gap-0.5">
                        Customize <ArrowUpRight className="h-2.5 w-2.5" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SOLACE UI FOOTER SECTION                                   */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Footer1 />

      </div>

    </div>
  );
}
