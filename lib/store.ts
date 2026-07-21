import { Pattern } from '@/types';

export const PATTERNS: Pattern[] = [
  // ═══════════════════════════════════════════════════════
  // 1. ENTERPRISE HERO
  // ═══════════════════════════════════════════════════════
  {
    id: 'enterprise-hero',
    name: 'Enterprise Hero',
    category: 'heroes',
    description: 'Production hero section with status badge, headline hierarchy, CTA buttons, grid background, corner brackets, and measurement ruler. The invisible layers make the content feel engineered.',
    inspiredBy: 'Inspired by ProvenMetal and Stripe',
    tags: ['Hero', 'Production', 'Dark', 'Light'],
    layers: [
      'Grid: 24px hairline grid background establishing visual rhythm',
      'Corner Brackets: L-shaped accents framing the section boundaries',
      'Technical Coordinates: Monospaced metadata stamps (version, status)',
      'Radial Glow: Subtle center spotlight drawing focus to headline',
      'Typography Hierarchy: Badge → H1 → Subtitle → CTA system',
      'Spacing System: 8px base unit with consistent vertical rhythm',
      'Section Divider: Bottom border with measurement ticks',
    ],
    performanceNotes: 'CSS-only layers, zero JavaScript overhead.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Grid Size', key: 'gridSize', type: 'slider', min: 16, max: 48, step: 4, defaultValue: 24 },
      { name: 'Grid Opacity', key: 'lineOpacity', type: 'slider', min: 5, max: 40, step: 5, defaultValue: 15 },
      { name: 'Glow Intensity', key: 'glowOpacity', type: 'slider', min: 0, max: 60, step: 5, defaultValue: 25 },
    ],
    codeTemplates: {
      react: `export function EnterpriseHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.08)_0%,transparent_60%)]" />
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-neutral-700" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-neutral-700" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-neutral-700" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-neutral-700" />
      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center py-24 px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 text-[10px] font-mono text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          V1.0 PRODUCTION RELEASE
        </div>
        <h1 className="text-5xl font-bold tracking-tight">
          Production UI Infrastructure
        </h1>
        <p className="text-neutral-400 text-sm max-w-md mx-auto">
          Copy the invisible design systems behind the world's best SaaS products.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="px-5 py-2 bg-white text-black text-xs font-semibold rounded">
            Get Started
          </button>
          <button className="px-5 py-2 border border-neutral-700 text-xs font-semibold rounded text-neutral-300">
            Documentation
          </button>
        </div>
      </div>
      {/* Bottom measurement */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-800" />
    </section>
  );
}`,
      tailwind: `<section class="relative overflow-hidden bg-black text-white">
  <!-- Grid + glow + corners + content -->
</section>`,
      css: `.enterprise-hero { position: relative; overflow: hidden; background: #000; color: #fff; }
.enterprise-hero .grid-bg { position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 24px 24px; }`,
      html: `<section class="enterprise-hero">
  <div class="grid-bg"></div>
  <div class="content">...</div>
</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 2. TECHNICAL FEATURE GRID
  // ═══════════════════════════════════════════════════════
  {
    id: 'technical-feature-grid',
    name: 'Technical Feature Grid',
    category: 'sections',
    description: '3-column feature section with step numbers, icon containers with crosshair accents, vertical guide lines, and grid background. Every element serves the layout.',
    inspiredBy: 'Inspired by ProvenMetal',
    tags: ['Features', 'Production', 'Dark'],
    layers: [
      'Grid: Subtle hatch-line grid establishing column rhythm',
      'Vertical Guides: 1px lines separating the three columns',
      'Crosshair Accents: + marks at corners of icon containers',
      'Step Badges: Monospaced [ 01 ] [ 02 ] [ 03 ] numbering',
      'Typography Hierarchy: Badge → H2 → H3 → Body system',
      'Spacing System: Consistent padding and gap rhythm',
    ],
    performanceNotes: 'CSS grid layout, lightweight.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Grid Size', key: 'gridSize', type: 'slider', min: 16, max: 48, step: 4, defaultValue: 24 },
      { name: 'Grid Opacity', key: 'lineOpacity', type: 'slider', min: 5, max: 30, step: 5, defaultValue: 10 },
    ],
    codeTemplates: {
      react: `export function TechnicalFeatureGrid() {
  return (
    <section className="relative bg-black text-white py-20 px-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#FF6B35] border border-[#FF6B35]/30 px-2 py-0.5 rounded">INSIDE THE PIPELINE</span>
          <h2 className="text-3xl font-bold tracking-tight">Three steps. No surprises.</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Step cards with crosshair icons */}
        </div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-black text-white py-20 px-8">...</section>`,
      css: `.feature-grid { position: relative; background: #000; color: #fff; }`,
      html: `<section class="feature-grid">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 3. API DOCUMENTATION HERO
  // ═══════════════════════════════════════════════════════
  {
    id: 'api-docs-hero',
    name: 'API Documentation Hero',
    category: 'heroes',
    description: 'Code-first hero with live endpoint preview, response status badge, dot grid background, and technical coordinate stamps. Built for developer-facing landing pages.',
    inspiredBy: 'Inspired by Stripe and Resend',
    tags: ['API', 'Developer', 'Dark'],
    layers: [
      'Dot Grid: Subtle dot matrix establishing technical coordinate space',
      'Code Block: Monospaced endpoint preview with syntax structure',
      'Status Badge: Response status indicator (200 OK)',
      'Technical Coordinates: Corner-stamped metadata (API version, endpoint)',
      'Typography Hierarchy: Mono badge → Sans headline → Code block system',
      'Connector Line: Visual flow from request to response',
    ],
    performanceNotes: 'CSS radial-gradient dots, zero overhead.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Dot Spacing', key: 'gridSize', type: 'slider', min: 16, max: 40, step: 4, defaultValue: 20 },
      { name: 'Dot Opacity', key: 'lineOpacity', type: 'slider', min: 5, max: 30, step: 5, defaultValue: 12 },
    ],
    codeTemplates: {
      react: `export function APIDocsHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1.5px,transparent_1.5px)] bg-[size:20px_20px]" />
      <div className="relative max-w-3xl mx-auto py-24 px-6 space-y-8 text-center">
        <span className="font-mono text-[10px] text-neutral-500">API REFERENCE v2.1</span>
        <h1 className="text-4xl font-bold tracking-tight">One API call. Complete context.</h1>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 font-mono text-sm text-left">
          <span className="text-emerald-400">POST</span> /v1/extract
        </div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-black text-white overflow-hidden">...</section>`,
      css: `.api-hero { position: relative; background: #000; overflow: hidden; }`,
      html: `<section class="api-hero">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 4. EDITORIAL PRICING SECTION
  // ═══════════════════════════════════════════════════════
  {
    id: 'editorial-pricing',
    name: 'Editorial Pricing Section',
    category: 'sections',
    description: 'Pricing cards with notebook-line background, editorial typography hierarchy, and section dividers. The ruled-paper texture adds an editorial, intentional feeling.',
    inspiredBy: 'Inspired by modern enterprise SaaS',
    tags: ['Pricing', 'Editorial', 'Light'],
    layers: [
      'Notebook Lines: Horizontal ruling lines at 24px intervals',
      'Margin Rule: Double orange left margin establishing reading column',
      'Section Divider: Top and bottom border with measurement ticks',
      'Typography Hierarchy: Section label → H2 → Price → Feature list',
      'Card System: Bordered cards with consistent internal spacing',
      'Spacing System: Content aligned to the ruled-line grid',
    ],
    performanceNotes: 'CSS gradients only.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Line Spacing', key: 'gridSize', type: 'slider', min: 20, max: 36, step: 2, defaultValue: 24 },
      { name: 'Line Opacity', key: 'lineOpacity', type: 'slider', min: 5, max: 25, step: 5, defaultValue: 10 },
    ],
    codeTemplates: {
      react: `export function EditorialPricing() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:100%_24px]" />
      <div className="absolute inset-y-0 left-20 w-0.5 bg-[#FF6B35]/20" />
      <div className="relative max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold tracking-tight text-black">Simple pricing</h2>
        <div className="grid grid-cols-3 gap-6 mt-12">...</div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-white overflow-hidden">...</section>`,
      css: `.pricing-section { position: relative; background: #fff; overflow: hidden; }`,
      html: `<section class="pricing-section">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 5. DASHBOARD HEADER
  // ═══════════════════════════════════════════════════════
  {
    id: 'dashboard-header',
    name: 'Dashboard Header',
    category: 'data-display',
    description: 'Stats overview bar with blueprint grid background, live status indicators, metric cards, and measurement ticks. Designed for application dashboard headers.',
    inspiredBy: 'Inspired by Supabase and Vercel',
    tags: ['Dashboard', 'Metrics', 'Dark'],
    layers: [
      'Blueprint Grid: Fine technical grid (slate tone) establishing dashboard rhythm',
      'Metric Cards: Bordered stat containers with value + label pairs',
      'Status Indicators: Animated pulse dots showing system health',
      'Measurement Ticks: Bottom ruler with interval marks',
      'Technical Labels: Monospaced metadata (uptime, latency, region)',
      'Section Border: Clean bottom divider separating header from content',
    ],
    performanceNotes: 'Lightweight CSS grid, single animation.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Grid Size', key: 'gridSize', type: 'slider', min: 16, max: 40, step: 4, defaultValue: 20 },
      { name: 'Grid Opacity', key: 'lineOpacity', type: 'slider', min: 5, max: 25, step: 5, defaultValue: 10 },
    ],
    codeTemplates: {
      react: `export function DashboardHeader() {
  return (
    <section className="relative bg-[#080B10] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="relative max-w-5xl mx-auto py-8 px-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-neutral-800 rounded p-4">
            <span className="text-2xl font-bold">99.99%</span>
            <span className="text-xs text-neutral-500 block mt-1">Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-[#080B10] text-white overflow-hidden">...</section>`,
      css: `.dashboard-header { position: relative; background: #080B10; overflow: hidden; }`,
      html: `<section class="dashboard-header">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 6. SOCIAL PROOF SECTION
  // ═══════════════════════════════════════════════════════
  {
    id: 'social-proof',
    name: 'Social Proof Section',
    category: 'social-proof',
    description: 'Logo wall with "Trusted by" headline, corner accent blocks, subtle grid rhythm, and monospaced metadata. The layout makes generic logos feel premium.',
    inspiredBy: 'Inspired by Vercel and Dodo Payments',
    tags: ['Logos', 'Social Proof', 'Light'],
    layers: [
      'Corner Accent Blocks: Blue-tinted blocks at section corners',
      'Grid: Subtle vertical-line grid establishing logo spacing rhythm',
      'Typography Hierarchy: Section headline → Trust metric → Logo row',
      'Section Dividers: Top and bottom borders with tick marks',
      'Monospaced Metadata: "Trusted by 50,000+ builders" counter',
      'Spacing System: Equal distribution of logo placeholders',
    ],
    performanceNotes: 'Pure CSS layout.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Grid Opacity', key: 'lineOpacity', type: 'slider', min: 0, max: 20, step: 5, defaultValue: 8 },
    ],
    codeTemplates: {
      react: `export function SocialProof() {
  return (
    <section className="relative bg-white text-black py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/10" />
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10" />
      <div className="relative max-w-3xl mx-auto text-center space-y-8 px-6">
        <h2 className="text-3xl font-bold tracking-tight">Trusted by the best teams</h2>
        <div className="flex items-center justify-around opacity-50 text-sm font-semibold">
          <span>Stripe</span><span>Vercel</span><span>Linear</span><span>Supabase</span>
        </div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-white text-black py-20 overflow-hidden">...</section>`,
      css: `.social-proof { position: relative; background: #fff; overflow: hidden; }`,
      html: `<section class="social-proof">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 7. TESTIMONIALS GRID
  // ═══════════════════════════════════════════════════════
  {
    id: 'testimonials-grid',
    name: 'Testimonials Grid',
    category: 'social-proof',
    description: 'Masonry testimonial cards with subtle grid background, corner brackets on featured cards, editorial quote typography, and highlighted key phrases.',
    inspiredBy: 'Inspired by Context.dev',
    tags: ['Testimonials', 'Production', 'Light', 'Dark'],
    layers: [
      'Grid: Faint background grid unifying card placement',
      'Card System: Bordered cards with avatar + quote + attribution',
      'Corner Brackets: Subtle L-accents on the featured/larger card',
      'Typography Hierarchy: Name → Title → Quote → Highlight → CTA',
      'Highlight Accents: Key phrases in brand color for scanning',
      'Spacing System: Consistent internal card padding and gap rhythm',
    ],
    performanceNotes: 'CSS grid, lightweight.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Grid Opacity', key: 'lineOpacity', type: 'slider', min: 0, max: 20, step: 5, defaultValue: 6 },
    ],
    codeTemplates: {
      react: `export function TestimonialsGrid() {
  return (
    <section className="relative bg-white dark:bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
          <p className="text-sm">"The cleanest design system I've used."</p>
          <footer className="mt-4 text-xs text-neutral-500">— VP of Engineering</footer>
        </div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-white dark:bg-black py-20 px-6">...</section>`,
      css: `.testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }`,
      html: `<section class="testimonials">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 8. CTA SECTION
  // ═══════════════════════════════════════════════════════
  {
    id: 'cta-section',
    name: 'CTA Section',
    category: 'sections',
    description: 'Call-to-action section with radial glow spotlight, centered headline, action buttons, and measurement divider. The glow draws the eye without dominating.',
    inspiredBy: 'Inspired by Raycast and Vercel',
    tags: ['CTA', 'Production', 'Dark'],
    layers: [
      'Radial Glow: Soft orange spotlight drawing focus to the CTA',
      'Grid: Subtle grid lines providing spatial context',
      'Typography Hierarchy: H2 → Subtitle → Button pair',
      'Measurement Divider: Top border with interval ticks',
      'Corner Brackets: Framing the section boundaries',
      'Spacing System: Generous vertical padding for breathing room',
    ],
    performanceNotes: 'CSS radial-gradient, no JS.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Glow Intensity', key: 'glowOpacity', type: 'slider', min: 5, max: 40, step: 5, defaultValue: 15 },
      { name: 'Grid Opacity', key: 'lineOpacity', type: 'slider', min: 0, max: 20, step: 5, defaultValue: 8 },
    ],
    codeTemplates: {
      react: `export function CTASection() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.12)_0%,transparent_60%)]" />
      <div className="relative max-w-xl mx-auto text-center space-y-6 px-6">
        <h2 className="text-4xl font-bold tracking-tight">Ready to ship?</h2>
        <p className="text-neutral-400 text-sm">Start building with production patterns today.</p>
        <button className="px-6 py-2.5 bg-[#FF6B35] text-white text-xs font-bold rounded">
          Get Started Free
        </button>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-black text-white py-24 overflow-hidden">...</section>`,
      css: `.cta-section { position: relative; background: #000; overflow: hidden; }`,
      html: `<section class="cta-section">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 9. PRODUCTION FOOTER
  // ═══════════════════════════════════════════════════════
  {
    id: 'production-footer',
    name: 'Production Footer',
    category: 'footers',
    description: 'Multi-column enterprise footer with section divider, status badge, technical coordinates, and structured navigation. Every element follows a strict grid.',
    inspiredBy: 'Inspired by Context.dev and Stripe',
    tags: ['Footer', 'Production', 'Dark'],
    layers: [
      'Section Divider: Top border separating footer from content',
      'Column Grid: 3-4 column navigation structure',
      'Status Badge: Live system status indicator',
      'Technical Coordinates: Copyright + build metadata stamps',
      'Typography Hierarchy: Column heading → Link list → Legal text',
      'Spacing System: Consistent column widths and link spacing',
    ],
    performanceNotes: 'Pure CSS layout.',
    browserSupport: 'All modern browsers',
    controls: [],
    codeTemplates: {
      react: `export function ProductionFooter() {
  return (
    <footer className="border-t border-neutral-800 bg-[#0B0B0C] text-neutral-400 py-12 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8 text-xs">
        <div className="space-y-3">
          <span className="text-white font-semibold uppercase text-[10px] tracking-wider">Product</span>
          <a href="#" className="block hover:text-white">Documentation</a>
          <a href="#" className="block hover:text-white">Changelog</a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-neutral-800 flex justify-between text-[10px] text-neutral-600">
        <span>© 2026 Kinetik</span>
        <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> All systems operational</span>
      </div>
    </footer>
  );
}`,
      tailwind: `<footer class="border-t border-neutral-800 bg-[#0B0B0C] text-neutral-400 py-12 px-8">...</footer>`,
      css: `.production-footer { border-top: 1px solid #262626; background: #0B0B0C; }`,
      html: `<footer class="production-footer">...</footer>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 10. CASE STUDY CARDS
  // ═══════════════════════════════════════════════════════
  {
    id: 'case-study-cards',
    name: 'Case Study Cards',
    category: 'data-display',
    description: 'Metric-driven case study cards with blueprint background, large data callouts, technical labels, and structured testimonial quotes. Built for showcasing results.',
    inspiredBy: 'Inspired by Clerk and Stripe',
    tags: ['Case Study', 'Metrics', 'Dark'],
    layers: [
      'Blueprint Grid: Subtle technical grid establishing card rhythm',
      'Card System: Bordered containers with metric + quote + attribution',
      'Data Callouts: Large bold metric numbers (10x, 99.9%, 2 days)',
      'Technical Labels: Monospaced category tags and metadata',
      'Typography Hierarchy: Metric → Quote → Attribution → CTA',
      'Section Divider: Internal card dividers separating content zones',
    ],
    performanceNotes: 'CSS grid, lightweight.',
    browserSupport: 'All modern browsers',
    controls: [
      { name: 'Grid Opacity', key: 'lineOpacity', type: 'slider', min: 0, max: 20, step: 5, defaultValue: 8 },
    ],
    codeTemplates: {
      react: `export function CaseStudyCards() {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="relative max-w-4xl mx-auto grid grid-cols-2 gap-6">
        <div className="border border-neutral-800 rounded-lg p-6 space-y-4">
          <span className="text-3xl font-bold text-[#FF6B35]">10x</span>
          <p className="text-sm text-neutral-400">"Kinetik helped us ship our redesign in 2 days."</p>
          <span className="text-[10px] font-mono text-neutral-600">— VP Engineering, Apex Systems</span>
        </div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-black text-white py-20 px-6">...</section>`,
      css: `.case-studies { position: relative; background: #000; }`,
      html: `<section class="case-studies">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 11. APP DOWNLOAD BANNER
  // ═══════════════════════════════════════════════════════
  {
    id: 'app-download-banner',
    name: 'App Download Banner',
    category: 'sections',
    description: 'Production app download section featuring laptop & mobile device mockup framing, triple platform download buttons (Desktop, App Store, Google Play), and clean vertical guide lines.',
    inspiredBy: 'Inspired by modern SaaS apps',
    tags: ['App', 'Download', 'Mockup', 'Light'],
    layers: [
      'Mockup Frame: Layered laptop dashboard and mobile app device previews',
      'Download System: Triple button pill triggers (Desktop, App Store, Google Play)',
      'Typography Hierarchy: H2 headline → Subtitle → Platform download actions',
      'Vertical Guides: Faint vertical column rails establishing mockup alignment',
      'Framing Border: Clean 1px border container bounded by architectural lines',
    ],
    performanceNotes: 'Pure CSS device framing layout.',
    browserSupport: 'All modern browsers',
    controls: [],
    codeTemplates: {
      react: `export function AppDownloadBanner() {
  return (
    <section className="relative bg-white text-black py-16 px-8 border border-neutral-200 rounded-xl overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-6 text-left max-w-md">
          <h2 className="text-3xl font-bold tracking-tight">Run Your Business on the Go.<br />Download Our App Now</h2>
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 border border-neutral-200 rounded-lg text-xs font-semibold flex items-center gap-2">
              <span>💻</span> Download Desktop App
            </button>
            <button className="px-3 py-2 bg-black text-white rounded-lg text-xs font-semibold flex items-center gap-2">
              <span></span> App Store
            </button>
            <button className="px-3 py-2 border border-neutral-200 rounded-lg text-xs font-semibold flex items-center gap-2">
              <span>▶</span> Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
      tailwind: `<section class="relative bg-white text-black py-16 px-8 border border-neutral-200 rounded-xl overflow-hidden">...</section>`,
      css: `.app-download { position: relative; background: #fff; border: 1px solid #e5e5e5; }`,
      html: `<section class="app-download">...</section>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 12. COMMUNITY DISCORD BANNER
  // ═══════════════════════════════════════════════════════
  {
    id: 'community-discord-banner',
    name: 'Community Discord Banner',
    category: 'social-proof',
    description: 'Vibrant full-width community callout banner with Discord brand icon, high-contrast white text, and full interactive hover state.',
    inspiredBy: 'Inspired by modern SaaS communities',
    tags: ['Community', 'Discord', 'Banner', 'Interactive'],
    layers: [
      'Color Surface: Vibrant indigo/discord solid accent background bar',
      'Icon Indicator: Brand icon marker centered with typography',
      'Callout Text: High-contrast white typography call-to-action',
      'Interactive Surface: Full-width clickable banner with subtle hover glow',
    ],
    performanceNotes: 'Zero GPU load, instant render.',
    browserSupport: 'All modern browsers',
    controls: [],
    codeTemplates: {
      react: `export function CommunityDiscordBanner() {
  return (
    <a href="#" className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-6 flex items-center justify-center gap-2 text-xs font-semibold transition-colors shadow-sm">
      <span className="text-base">👾</span>
      <span>Join the Kinetik developer community on Discord</span>
    </a>
  );
}`,
      tailwind: `<a href="#" class="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-6 flex items-center justify-center gap-2 text-xs font-semibold transition-colors">
  <span>Join the community on Discord</span>
</a>`,
      css: `.discord-banner { width: 100%; background: #5865F2; color: #fff; padding: 12px 24px; display: flex; align-items: center; justify-center; gap: 8px; text-decoration: none; }`,
      html: `<a href="#" class="discord-banner">Join the community on Discord</a>`
    }
  },

  // ═══════════════════════════════════════════════════════
  // 13. SOLACE UI FOOTER
  // ═══════════════════════════════════════════════════════
  {
    id: 'solace-footer',
    name: 'Solace UI Footer',
    category: 'footers',
    description: 'Modern animated footer with brand mark, interactive pill navigation, integrated SocialCloud icon bar, and diagonal hatch accent divider. Crafted with spring physics and responsive press feedback.',
    inspiredBy: 'Inspired by Solace UI and Emil Kowalski motion design',
    tags: ['Footer', 'Solace UI', 'Animated', 'Spring Physics'],
    layers: [
      'Solace Logo: Vector SVG brand mark with smooth entry stagger',
      'Navigation Pills: Interactive spring-scaled nav links with active state',
      'Social Cloud: Integrated icon cloud for brand and community links',
      'Hatch Divider: Hardware-accelerated repeating diagonal divider bar',
      'Typography Hierarchy: Mono nav labels → Brand icon → Copyright stamp',
    ],
    performanceNotes: 'Spring motion with zero main-thread jank.',
    browserSupport: 'All modern browsers',
    controls: [],
    codeTemplates: {
      react: `import Footer1 from "@/components/footer-section-1";

export function SolaceFooterDemo() {
  return <Footer1 />;
}`,
      tailwind: `<footer className="w-full py-12 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border-t border-neutral-200">...</footer>`,
      css: `.solace-footer { width: 100%; padding: 48px 0; background: #000; color: #fff; }`,
      html: `<footer className="solace-footer">...</footer>`
    }
  }
];

const STORAGE_KEY_FAVORITES = 'kinetik_favorites_v1';
const isClient = () => typeof window !== 'undefined';

export function getFavorites(): string[] {
  if (!isClient()) return [];
  const raw = localStorage.getItem(STORAGE_KEY_FAVORITES);
  return raw ? JSON.parse(raw) : [];
}

export function toggleFavorite(id: string): string[] {
  const list = getFavorites();
  const index = list.indexOf(id);
  if (index === -1) {
    list.push(id);
  } else {
    list.splice(index, 1);
  }
  if (isClient()) {
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(list));
  }
  return list;
}
