'use client';

import * as React from 'react';
import Footer1 from '@/components/footer-section-1';

interface PatternRendererProps {
  patternId: string;
  customVals?: Record<string, string | number>;
  className?: string;
  showLabels?: boolean;
  showCorners?: boolean;
  showCrosshair?: boolean;
  animate?: boolean;
  isThumbnail?: boolean;
}

export function PatternRenderer({
  patternId,
  className = '',
  isThumbnail = false,
}: PatternRendererProps) {

  // ═══════════════════════════════════════════════════════
  // MICRO-THUMBNAIL VECTOR SCHEMATICS (Pixel-Perfect Cards)
  // ═══════════════════════════════════════════════════════
  if (isThumbnail) {
    switch (patternId) {
      case 'enterprise-hero':
        return (
          <div className="absolute inset-0 bg-black text-white p-2 flex flex-col justify-center items-center text-center select-none overflow-hidden">
            <div className="w-full h-full border border-[#FF6B35]/50 rounded p-2 flex flex-col items-center justify-center space-y-1 relative">
              <span className="text-[6px] font-mono text-[#FF6B35] bg-[#FF6B35]/10 px-1 rounded">V1.0 RELEASE</span>
              <div className="text-[9px] font-bold tracking-tight text-white leading-none">Production UI <span className="text-[#FF6B35]">Patterns</span></div>
              <div className="h-1 w-12 bg-neutral-700 rounded-full" />
              <div className="h-2.5 w-10 bg-[#FF6B35] rounded text-[6px] font-mono text-white flex items-center justify-center font-bold">Start</div>
            </div>
          </div>
        );

      case 'api-docs-hero':
        return (
          <div className="absolute inset-0 bg-black text-white p-2 flex flex-col justify-center items-center select-none overflow-hidden font-mono">
            <div className="w-full border border-neutral-800 rounded bg-neutral-950 p-2 space-y-1 text-left">
              <div className="flex justify-between text-[6px] text-neutral-500"><span>API v2.1</span><span className="text-emerald-400">200 OK</span></div>
              <div className="text-[7px] text-emerald-400 font-bold">$ curl -X POST /v1/extract</div>
              <div className="text-[6px] text-neutral-500 truncate">-H &quot;Authorization: Bearer...&quot;</div>
            </div>
          </div>
        );

      case 'technical-feature-grid':
        return (
          <div className="absolute inset-0 bg-black text-white p-2 flex flex-col justify-center select-none overflow-hidden">
            <div className="grid grid-cols-3 gap-1 w-full text-center font-mono">
              {[1, 2, 3].map((num) => (
                <div key={num} className="border border-neutral-800 rounded p-1 space-y-1 bg-neutral-950">
                  <span className="text-[6px] text-[#FF6B35] font-bold">[0{num}]</span>
                  <div className="h-1 w-full bg-neutral-700 rounded" />
                </div>
              ))}
            </div>
          </div>
        );

      case 'editorial-pricing':
      case 'notebook-lines':
        return (
          <div className="absolute inset-0 bg-[#2563EB] text-white p-2 flex items-center justify-between select-none overflow-hidden">
            <div className="space-y-1 text-left max-w-[65%]">
              <span className="text-[5px] font-mono text-emerald-300 bg-emerald-950/60 px-1 rounded">PLAYBOOK</span>
              <div className="text-[8px] font-bold leading-tight">Pricing AI Products</div>
              <div className="h-2 w-10 bg-[#ccff00] text-black rounded text-[5px] font-bold flex items-center justify-center">Ebook</div>
            </div>
            <div className="w-8 h-10 bg-white rounded border-2 border-emerald-400 transform rotate-3 flex items-center justify-center text-[8px]">🦤</div>
          </div>
        );

      case 'dashboard-header':
        return (
          <div className="absolute inset-0 bg-[#080B10] text-white p-2 flex flex-col justify-center select-none overflow-hidden font-mono">
            <div className="flex justify-between text-[6px] text-neutral-500 mb-1"><span>TELEMETRY</span><span className="text-emerald-400">● LIVE</span></div>
            <div className="grid grid-cols-3 gap-1">
              <div className="border border-neutral-800 rounded p-1 bg-neutral-900/40"><span className="text-[8px] font-bold">99.9%</span></div>
              <div className="border border-neutral-800 rounded p-1 bg-neutral-900/40"><span className="text-[8px] font-bold">124ms</span></div>
              <div className="border border-neutral-800 rounded p-1 bg-neutral-900/40"><span className="text-[8px] font-bold">1.4M</span></div>
            </div>
          </div>
        );

      case 'social-proof':
      case 'logo-wall':
        return (
          <div className="absolute inset-0 bg-white dark:bg-black text-neutral-900 dark:text-white p-2 flex flex-col justify-between select-none overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500/30" />
            <div className="text-[8px] font-bold text-center mt-1">Customer Stories</div>
            <div className="flex justify-around text-[6px] font-bold text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 pt-1">
              <span>Apex</span><span>Vortex</span><span>Pulse</span>
            </div>
          </div>
        );

      case 'testimonials-grid':
        return (
          <div className="absolute inset-0 bg-neutral-100 dark:bg-black p-2 flex items-center justify-center select-none overflow-hidden">
            <div className="grid grid-cols-3 gap-1 w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded p-1 space-y-1">
                  <div className="w-3 h-3 rounded bg-purple-600 text-white text-[5px] flex items-center justify-center font-bold">U{i}</div>
                  <div className="h-1 w-full bg-neutral-300 dark:bg-neutral-700 rounded" />
                </div>
              ))}
            </div>
          </div>
        );

      case 'cta-section':
        return (
          <div className="absolute inset-0 bg-black text-white p-2 flex flex-col items-center justify-center text-center select-none overflow-hidden">
            <div className="text-[9px] font-bold">Ready to ship?</div>
            <div className="mt-1 h-3 px-2 bg-[#FF6B35] text-white text-[6px] font-bold rounded flex items-center justify-center">Get Started</div>
          </div>
        );

      case 'production-footer':
      case 'enterprise-footer':
      case 'solace-footer':
        return (
          <div className="absolute inset-0 bg-[#0B0B0C] text-neutral-400 p-2 flex flex-col justify-between font-mono text-[6px] select-none overflow-hidden">
            <div className="flex justify-between text-white font-bold border-b border-neutral-800 pb-1">
              <span className="text-[#FF6B35]">Solace UI</span>
              <span className="text-emerald-400">● Operational</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[5px] text-neutral-500">
              <div>Products</div><div>Solutions</div><div>Terms</div>
            </div>
            <div className="flex justify-between items-center text-[5px] border-t border-neutral-800 pt-1 text-neutral-600">
              <span>© 2026 SolaceUI</span>
            </div>
          </div>
        );

      case 'case-study-cards':
        return (
          <div className="absolute inset-0 bg-black text-white p-2 flex flex-col justify-center select-none overflow-hidden">
            <div className="grid grid-cols-2 gap-1 font-mono">
              <div className="border border-neutral-800 rounded p-1 bg-neutral-950"><span className="text-[9px] font-bold text-[#FF6B35]">10x</span></div>
              <div className="border border-neutral-800 rounded p-1 bg-neutral-950"><span className="text-[9px] font-bold text-[#FF6B35]">99.9%</span></div>
            </div>
          </div>
        );

      case 'app-download-banner':
        return (
          <div className="absolute inset-0 bg-white text-black p-2 flex items-center justify-between select-none overflow-hidden">
            <div className="space-y-1 text-left max-w-[60%]">
              <div className="text-[7px] font-bold leading-none">Run Business on Go</div>
              <div className="flex gap-0.5"><div className="h-2 w-6 bg-neutral-900 rounded text-[4px] text-white flex items-center justify-center">App</div></div>
            </div>
            <div className="w-8 h-10 border border-neutral-300 rounded bg-white p-0.5 shadow flex flex-col justify-between">
              <span className="text-[4px] font-bold text-emerald-600">$270k</span>
            </div>
          </div>
        );

      case 'community-discord-banner':
        return (
          <div className="absolute inset-0 bg-white dark:bg-black p-2 flex items-center justify-center select-none overflow-hidden">
            <div className="w-full bg-[#5865F2] text-white py-1.5 px-2 rounded text-[7px] font-bold text-center flex items-center justify-center gap-1">
              <span>👾</span><span>Discord Community</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 bg-neutral-900 text-neutral-400 p-2 flex items-center justify-center text-[8px] font-mono">
            {patternId}
          </div>
        );
    }
  }

  // ═══════════════════════════════════════════════════════
  // FULL PRODUCTION SECTION CANVASES
  // ═══════════════════════════════════════════════════════
  const renderPattern = () => {
    switch (patternId) {

      // ── 1. ENTERPRISE HERO ──
      case 'enterprise-hero':
        return (
          <div className="absolute inset-0 w-full h-full bg-black text-white flex flex-col overflow-hidden select-none">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 100%' }} />
            <div className="absolute inset-y-0 left-0 w-8 border-r border-neutral-800 pointer-events-none opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 7px)' }} />
            <div className="absolute inset-y-0 right-0 w-8 border-l border-neutral-800 pointer-events-none opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 7px)' }} />
            <div className="absolute top-3 left-12 right-12 flex justify-between font-mono text-[8px] text-neutral-500 pointer-events-none z-10">
              <span>[ FRAME 01 — HERO ]</span>
              <span>KNTK.V1</span>
            </div>
            <div className="absolute top-1/2 left-9 -translate-y-1/2 text-xs font-light text-[#FF6B35] pointer-events-none">+</div>
            <div className="absolute top-1/2 right-9 -translate-y-1/2 text-xs font-light text-[#FF6B35] pointer-events-none">+</div>

            <div className="relative flex-1 flex items-center justify-center p-8 z-10">
              <div className="relative w-full max-w-lg border border-[#FF6B35]/60 bg-neutral-950/80 p-8 rounded-lg text-center space-y-5 shadow-2xl">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#FF6B35] border border-black" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6B35] border border-black" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#FF6B35] border border-black" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FF6B35] border border-black" />

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-[8px] font-mono text-[#FF6B35]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
                  OPEN SOURCE · V1.0
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.08] text-white">
                  Production UI <span className="text-[#FF6B35]">Patterns</span>
                </h1>

                <p className="text-neutral-400 text-xs max-w-sm mx-auto leading-relaxed">
                  Copy the invisible design systems behind modern SaaS websites. Browse, customize, and ship.
                </p>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button className="bg-[#FF6B35] text-white hover:bg-[#e05a2a] px-5 py-2 rounded text-[11px] font-mono font-bold transition-colors">
                    Browse Patterns →
                  </button>
                  <button className="border border-neutral-800 bg-black hover:bg-white/5 text-white px-4 py-2 rounded text-[11px] font-mono font-medium transition-colors">
                    GitHub ↗
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-900" />
          </div>
        );

      // ── 2. TECHNICAL FEATURE GRID ──
      case 'technical-feature-grid':
        return (
          <div className="absolute inset-0 w-full h-full bg-black text-white flex flex-col overflow-hidden select-none">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 100%' }} />

            <div className="relative flex-1 flex flex-col justify-center px-10 py-8 space-y-8 z-10">
              <div className="space-y-2 text-left">
                <span className="text-[9px] font-mono text-[#FF6B35] font-bold tracking-widest uppercase border border-[#FF6B35]/30 px-2 py-0.5 rounded bg-[#FF6B35]/5">
                  INSIDE THE PIPELINE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pt-1">
                  Three steps. Zero friction.
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-8 relative">
                <div className="hidden sm:block absolute inset-y-0 left-1/3 w-px bg-neutral-800" />
                <div className="hidden sm:block absolute inset-y-0 left-2/3 w-px bg-neutral-800" />

                {[
                  { step: '01', title: 'SOURCE', desc: 'You send the BOM. We source the parts and verify them. Domestic supply, no mystery components.', icon: '❖' },
                  { step: '02', title: 'PROCESS', desc: 'We assemble on a line we own and run. Fast, because nothing leaves the building.', icon: '⧉' },
                  { step: '03', title: 'PROOF', desc: 'Every board hits the X-ray. Nothing ships unscanned. We flag defects before they reach you.', icon: '⊠' },
                ].map((item) => (
                  <div key={item.step} className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <div className="relative w-10 h-10 border border-neutral-800 bg-neutral-950 flex items-center justify-center">
                        <span className="absolute -top-1.5 -left-1.5 text-[9px] text-[#FF6B35] leading-none">+</span>
                        <span className="absolute -top-1.5 -right-1.5 text-[9px] text-[#FF6B35] leading-none">+</span>
                        <span className="absolute -bottom-1.5 -left-1.5 text-[9px] text-[#FF6B35] leading-none">+</span>
                        <span className="absolute -bottom-1.5 -right-1.5 text-[9px] text-[#FF6B35] leading-none">+</span>
                        <span className="text-sm text-neutral-300">{item.icon}</span>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono font-bold">[ {item.step} ]</span>
                    </div>
                    <h3 className="text-xs font-bold tracking-wider uppercase font-mono text-white">{item.title}</h3>
                    <p className="text-[10px] text-neutral-400 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-900" />
          </div>
        );

      // ── 3. API DOCUMENTATION HERO ──
      case 'api-docs-hero':
        return (
          <div className="absolute inset-0 w-full h-full bg-black text-white flex flex-col overflow-hidden select-none">
            <div className="absolute top-3 left-6 right-6 flex justify-between font-mono text-[8px] text-neutral-600 pointer-events-none z-10">
              <span>API REFERENCE v2.1</span>
              <span>REST · GRAPHQL</span>
            </div>
            <div className="relative flex-1 flex flex-col items-center justify-center text-center px-8 space-y-6 z-10">
              <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">Developer Platform</span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-md">
                One API call.<br />Complete context.
              </h1>
              <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
                Extract structured data from any webpage. Built for AI agents and automation pipelines.
              </p>
              <div className="w-full max-w-md text-left">
                <div className="bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="h-7 border-b border-neutral-800 bg-neutral-900/60 px-3 flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-neutral-700" />
                    <div className="h-2 w-2 rounded-full bg-neutral-700" />
                    <div className="h-2 w-2 rounded-full bg-neutral-700" />
                    <span className="ml-2 text-[8px] font-mono text-neutral-500">Terminal</span>
                  </div>
                  <div className="p-3.5 font-mono text-[11px] space-y-1">
                    <div><span className="text-neutral-500">$</span> <span className="text-emerald-400">curl</span> <span className="text-neutral-300">-X POST https://api.kinetik.dev/v1/extract \</span></div>
                    <div className="pl-4 text-neutral-500">-H &quot;Authorization: Bearer kntk_live_...&quot; \</div>
                    <div className="pl-4 text-neutral-500">-d &apos;&#123;&quot;url&quot;: &quot;https://example.com&quot;&#125;&apos;</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 py-2 pl-4">
                  <div className="h-5 w-px bg-neutral-800" />
                  <div className="h-px w-3 bg-neutral-800" />
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[9px] font-mono text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    200 OK · 124ms
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ── 4. EDITORIAL PRICING ──
      case 'editorial-pricing':
      case 'notebook-lines':
        return (
          <div className="absolute inset-0 w-full h-full p-6 flex flex-col md:flex-row items-center justify-between gap-6 z-10 bg-[#2563EB] text-white overflow-hidden select-none">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '24px 100%' }} />

            <div className="space-y-4 text-left max-w-md relative z-10">
              <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-900/40 border border-emerald-400/30">
                FREE PLAYBOOK
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight font-sans">
                The Definitive Guide to Pricing AI Products
              </h2>
              <p className="text-xs text-blue-100 leading-relaxed font-sans">
                Literally. A free, data-backed framework for pricing your product at every stage.
              </p>
              <button className="px-5 py-2.5 bg-[#ccff00] text-black font-extrabold rounded-lg text-xs hover:bg-[#b5e600] transition-colors shadow-lg font-sans">
                Read the Ebook
              </button>
            </div>

            <div className="shrink-0 w-44 h-56 bg-white text-neutral-900 rounded-lg p-4 shadow-2xl border-4 border-emerald-500 transform rotate-2 hover:rotate-0 transition-transform flex flex-col justify-between text-left relative z-10">
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold leading-tight text-emerald-700">Pricing In The AI Age</h4>
                <p className="text-[8px] text-neutral-500">The Definitive Guide to Monetizing Products</p>
              </div>
              <div className="h-24 bg-emerald-50 rounded border border-emerald-200 p-2 flex items-center justify-center">
                <span className="text-2xl text-emerald-600">🦤</span>
              </div>
              <span className="text-[7px] font-mono text-neutral-400 uppercase">JULY 2026 EDITION</span>
            </div>
          </div>
        );

      // ── 5. DASHBOARD HEADER ──
      case 'dashboard-header':
        return (
          <div className="absolute inset-0 w-full h-full bg-[#080B10] text-white flex flex-col overflow-hidden select-none">
            <div className="absolute top-3 left-5 right-5 flex justify-between font-mono text-[8px] text-neutral-600 pointer-events-none z-10">
              <span>[ DASHBOARD — KNTK.SYS ]</span>
              <span>[ REGION: US-EAST-1 ]</span>
            </div>
            <div className="relative flex-1 flex flex-col justify-center px-6 py-8 z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1 text-left">
                  <h2 className="text-lg font-bold tracking-tight">System Overview</h2>
                  <p className="text-[10px] text-neutral-500 font-mono">Real-time infrastructure telemetry</p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[9px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  All systems operational
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: '99.99%', label: 'Uptime SLA', trend: '+0.01%' },
                  { value: '124ms', label: 'P99 Latency', trend: '-12ms' },
                  { value: '1.42M', label: 'Requests/sec', trend: '+8.3%' },
                  { value: '0', label: 'Active Incidents', trend: '—' },
                ].map((metric) => (
                  <div key={metric.label} className="border border-neutral-800/80 rounded-lg p-3.5 bg-neutral-900/40 space-y-1 text-left">
                    <span className="text-xl font-bold tracking-tight">{metric.value}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-neutral-500 font-mono">{metric.label}</span>
                      <span className="text-[8px] text-emerald-500 font-mono">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-800" />
          </div>
        );

      // ── 6. SOCIAL PROOF ──
      case 'social-proof':
      case 'logo-wall':
        return (
          <div className="absolute inset-0 w-full h-full p-6 bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col justify-between text-center select-none z-10 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 1px)', backgroundSize: '32px 100%' }} />

            <div className="absolute top-0 left-0 w-12 h-12 flex flex-wrap pointer-events-none opacity-80">
              <div className="w-6 h-6 bg-blue-500/30" />
              <div className="w-6 h-6 bg-blue-500/10" />
              <div className="w-6 h-6 bg-blue-500/10" />
              <div className="w-6 h-6 bg-blue-500/20" />
            </div>
            <div className="absolute top-0 right-0 w-12 h-12 flex flex-wrap pointer-events-none opacity-80">
              <div className="w-6 h-6 bg-blue-500/10" />
              <div className="w-6 h-6 bg-blue-500/30" />
              <div className="w-6 h-6 bg-blue-500/20" />
              <div className="w-6 h-6 bg-blue-500/10" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto pt-6 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans">
                Case Studies &amp; Success Stories Of Customers
              </h2>
              <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
                Learn how builders use Kinetik to sell globally, handle billing, tax, and compliance, and scale faster.
              </p>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-5 pb-2 relative z-10 space-y-3">
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Trusted by 50,000+ builders and founders worldwide</span>
              <div className="flex items-center justify-around font-bold text-xs text-neutral-700 dark:text-neutral-300 font-sans tracking-tight">
                <span>⊕ Apex Labs</span>
                <span>⚡ Vortex</span>
                <span>❖ Pulse Data</span>
                <span>⬢ Nexus AI</span>
                <span>Horizon(π)</span>
              </div>
            </div>
          </div>
        );

      // ── 7. TESTIMONIALS GRID ──
      case 'testimonials-grid':
        return (
          <div className="absolute inset-0 w-full h-full p-4 bg-neutral-100 dark:bg-black text-neutral-900 dark:text-white z-10 overflow-y-auto select-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10 max-w-4xl mx-auto text-left">
              {[
                { name: 'ALEX RIVERA', title: 'Founder @ Apex AI', quote: '"As soon as you type in the email, we use the API to collect information about your brand and different logos. Saves us a lot of time."', color: 'bg-purple-600' },
                { name: 'SARAH CHEN', title: 'Engineering Manager @ Pulse', quote: '"Onboarding couldn\'t be simpler. Self-serve sign-up gives you an API key immediately, the documentation is thorough, and we were integrating within 10 minutes."', color: 'bg-neutral-800' },
                { name: 'MARCUS VANCE', title: 'CPTO @ Vortex', quote: '"Getting started is very simple. API docs are great and sign-up is self serve, with an API key generated immediately."', color: 'bg-[#FF6B35]' },
              ].map((t) => (
                <div key={t.name} className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl space-y-3 shadow-sm flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg ${t.color} text-white font-bold flex items-center justify-center text-xs`}>
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-[9px] font-bold uppercase tracking-wider font-mono">{t.name}</h4>
                        <p className="text-[8px] text-neutral-500">{t.title}</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">{t.quote}</p>
                  </div>
                  <button className="w-full py-1 border border-neutral-200 dark:border-neutral-800 rounded-full text-[9px] font-mono font-bold text-neutral-600 dark:text-neutral-400 hover:border-[#FF6B35]">
                    Read the case study ↗
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // ── 8. CTA SECTION ──
      case 'cta-section':
        return (
          <div className="absolute inset-0 w-full h-full bg-black text-white flex flex-col overflow-hidden select-none">
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#FF6B35]/40" />
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#FF6B35]/40" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#FF6B35]/40" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#FF6B35]/40" />
            <div className="relative flex-1 flex flex-col items-center justify-center text-center px-8 space-y-5 z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to ship?</h2>
              <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
                Start building with production patterns today. Free forever for open source.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button className="px-6 py-2.5 bg-[#FF6B35] text-white text-[11px] font-bold rounded hover:bg-[#e55f30] transition-colors">
                  Get Started Free →
                </button>
                <button className="px-5 py-2.5 border border-neutral-800 text-[11px] font-semibold rounded text-neutral-300 hover:border-neutral-700 transition-colors">
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        );

      // ── 9. PRODUCTION FOOTER ──
      case 'production-footer':
      case 'enterprise-footer':
        return (
          <div className="absolute inset-0 w-full h-full bg-[#0B0B0C] text-neutral-400 flex flex-col font-mono text-xs overflow-hidden select-none">
            <div className="absolute inset-0 border border-dashed border-neutral-800 m-3 pointer-events-none" />

            <div className="relative flex-1 flex flex-col justify-between px-6 py-5 z-10">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 bg-[#FF6B35] text-white font-bold text-[9px] rounded">K</span>
                    <span className="text-xs font-bold text-white font-sans">Kinetik Cloud</span>
                  </div>
                  <span className="text-[9px] text-neutral-500">The #1 API infrastructure for web applications.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-neutral-600">SOC 2 Type II Certified</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/30 text-[8px] text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                    All systems operational
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 py-4 text-[10px]">
                <div className="space-y-1.5 text-left">
                  <span className="font-bold text-white uppercase text-[9px] tracking-wider font-sans">Data</span>
                  {['Crawler API', 'Scrape HTML', 'URL to Markdown', 'Scrape Images', 'Logo API'].map(item => (
                    <p key={item} className="hover:text-white cursor-pointer transition-colors">{item}</p>
                  ))}
                </div>
                <div className="space-y-1.5 text-left">
                  <span className="font-bold text-white uppercase text-[9px] tracking-wider font-sans">Links</span>
                  {['Documentation', 'Changelog', 'Trust Center', 'Pricing', 'Blog'].map(item => (
                    <p key={item} className="hover:text-white cursor-pointer transition-colors">{item}</p>
                  ))}
                </div>
                <div className="space-y-1.5 text-left">
                  <span className="font-bold text-white uppercase text-[9px] tracking-wider font-sans">Integrations</span>
                  {['TypeScript SDK', 'Python SDK', 'Ruby SDK', 'Go SDK', 'MCP'].map(item => (
                    <p key={item} className="hover:text-white cursor-pointer transition-colors">{item}</p>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-neutral-800 pt-3 text-[9px] text-neutral-500">
                <span>© 2026 Kinetik.dev</span>
                <span>Built with ❤ in San Francisco</span>
                <div className="flex gap-3">
                  <span className="hover:text-white cursor-pointer">Terms</span>
                  <span className="hover:text-white cursor-pointer">DPA</span>
                  <span className="hover:text-white cursor-pointer">Privacy</span>
                </div>
              </div>
            </div>
          </div>
        );

      // ── 10. CASE STUDY CARDS ──
      case 'case-study-cards':
        return (
          <div className="absolute inset-0 w-full h-full bg-black text-white flex flex-col overflow-hidden select-none">
            <div className="relative flex-1 flex flex-col justify-center px-6 py-6 z-10">
              <div className="space-y-1 text-left mb-6">
                <span className="text-[9px] font-mono text-[#FF6B35] font-bold tracking-widest uppercase">RESULTS</span>
                <h2 className="text-2xl font-bold tracking-tight">Built for impact</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: '10x', label: 'Faster Shipping', quote: '"Kinetik let us ship our entire SaaS redesign in 2 days instead of 2 weeks."', author: 'VP Engineering, Apex Systems', tag: 'VELOCITY' },
                  { metric: '99.9%', label: 'Design Consistency', quote: '"Every section now follows the same invisible grid. Our product finally feels cohesive."', author: 'Head of Design, Vortex Flow', tag: 'QUALITY' },
                  { metric: '47%', label: 'Less CSS', quote: '"We deleted half our custom CSS. Kinetik patterns replaced it all with better structure."', author: 'Staff Engineer, Pulse Cloud', tag: 'EFFICIENCY' },
                  { metric: '< 2hr', label: 'Integration Time', quote: '"Copy, paste, customize. We had production-ready sections in under two hours."', author: 'CTO, Horizon AI', tag: 'SPEED' },
                ].map((card) => (
                  <div key={card.metric} className="border border-neutral-800/80 rounded-lg p-4 bg-neutral-950 space-y-2.5 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#FF6B35]">{card.metric}</span>
                      <span className="text-[8px] font-mono text-neutral-500 tracking-wider">{card.tag}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-neutral-200 block">{card.label}</span>
                    <div className="h-px bg-neutral-900" />
                    <p className="text-[10px] text-neutral-400 leading-relaxed italic">{card.quote}</p>
                    <span className="text-[8px] font-mono text-neutral-500">— {card.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ── 11. APP DOWNLOAD BANNER ──
      case 'app-download-banner':
        return (
          <div className="absolute inset-0 w-full h-full bg-white text-black flex flex-col justify-center p-6 overflow-hidden select-none">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 1px)', backgroundSize: '32px 100%' }} />

            <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-500 rounded-xl p-6 bg-white shadow-xl text-left">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 border border-white" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 border border-white" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 border border-white" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 border border-white" />

              <div className="space-y-5 max-w-md">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-neutral-900 font-sans">
                  Run Your Business on the Go.<br />Download Our App Now
                </h2>
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button className="px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors flex items-center gap-2 text-[10px] font-semibold text-neutral-700">
                    <span className="text-xs">⤓</span>
                    <div>
                      <span className="block text-[7px] text-neutral-400 font-mono uppercase leading-none">Download The</span>
                      <span className="font-bold">Desktop App</span>
                    </div>
                  </button>
                  <button className="px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors flex items-center gap-2 text-[10px] font-semibold text-neutral-700">
                    <span className="text-xs"></span>
                    <div>
                      <span className="block text-[7px] text-neutral-400 font-mono uppercase leading-none">Download on the</span>
                      <span className="font-bold">App Store</span>
                    </div>
                  </button>
                  <button className="px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors flex items-center gap-2 text-[10px] font-semibold text-neutral-700">
                    <span className="text-xs">▶</span>
                    <div>
                      <span className="block text-[7px] text-neutral-400 font-mono uppercase leading-none">GET IT ON</span>
                      <span className="font-bold">Google Play</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative w-72 h-44 shrink-0 flex items-center justify-center">
                <div className="w-56 h-36 border border-neutral-300 rounded-lg bg-white shadow-xl overflow-hidden p-2 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-1">
                    <span className="text-[7px] font-mono text-neutral-400">Total Revenue</span>
                    <span className="text-[8px] font-bold text-emerald-600">↑ 14%</span>
                  </div>
                  <div className="text-sm font-extrabold text-neutral-900">$270,202.31</div>
                  <div className="h-16 bg-neutral-50 rounded border border-neutral-100 p-1 flex items-center justify-center">
                    <div className="w-full h-full border-b border-r border-emerald-400/40 opacity-40 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.1)_50%,transparent_75%)]" />
                  </div>
                </div>

                <div className="absolute right-1 -bottom-1 w-28 h-40 border-2 border-neutral-900 rounded-2xl bg-black text-white p-2 shadow-2xl flex flex-col justify-between transform rotate-1">
                  <div className="w-8 h-1 bg-neutral-800 rounded-full mx-auto" />
                  <div className="space-y-1 text-left px-1">
                    <div className="w-5 h-5 rounded-md bg-[#FF6B35] text-white flex items-center justify-center font-bold text-[8px]">⚡</div>
                    <h5 className="text-[8px] font-bold">Flow Payments</h5>
                    <p className="text-[6px] text-neutral-400">Global Infrastructure Made Simple</p>
                  </div>
                  <div className="h-12 bg-neutral-900 rounded-lg p-1 text-[6px] text-neutral-400 font-mono">
                    What&apos;s New &gt; Version 1.5.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ── 12. COMMUNITY DISCORD BANNER ──
      case 'community-discord-banner':
        return (
          <div className="absolute inset-0 w-full h-full bg-white dark:bg-black flex items-center justify-center p-6 select-none">
            <a href="#" className="w-full max-w-3xl bg-[#5865F2] hover:bg-[#4752C4] text-white py-3.5 px-6 rounded-lg flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold transition-colors shadow-md">
              <span className="text-base leading-none">👾</span>
              <span>Join the Kinetik developer community on Discord</span>
            </a>
          </div>
        );

      // ── 13. SOLACE UI FOOTER ──
      case 'solace-footer':
        return (
          <div className="absolute inset-0 w-full h-full bg-white dark:bg-black flex items-center justify-center overflow-y-auto">
            <Footer1 />
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 w-full h-full bg-black text-white flex items-center justify-center">
            <span className="relative text-sm font-mono text-neutral-500 z-10">Pattern not found</span>
          </div>
        );
    }
  };

  return (
    <div className={`w-full h-full absolute inset-0 overflow-hidden ${className}`}>
      {renderPattern()}
    </div>
  );
}
