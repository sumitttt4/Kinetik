export type RegistryItem = {
  name: string;
  slug: string;
  description: string;
  category: 'hero' | 'motion' | 'input' | 'feedback' | 'overlay';
  dependencies: string[];
  usage: string;
  code: string;
};

export const registry: RegistryItem[] = [
  {
    name: 'Dynamic Island',
    slug: 'dynamic-island',
    description: 'Fluid expansion from a compact pill into contextual status content.',
    category: 'hero',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { DynamicIsland } from '@/app/components/dynamic-island';",
    code: `'use client';\n\nexport function DynamicIsland() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Fluid Tabs',
    slug: 'fluid-tabs',
    description: 'Segmented control with spring-driven active background motion.',
    category: 'input',
    dependencies: ['framer-motion'],
    usage: "import { FluidTabs } from '@/app/components/fluid-tabs';",
    code: `'use client';\n\nexport function FluidTabs() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Morphing Dialog',
    slug: 'morphing-dialog',
    description: 'Shared-element transition from card preview to expanded modal.',
    category: 'hero',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { MorphingDialog } from '@/app/components/morphing-dialog';",
    code: `'use client';\n\nexport function MorphingDialog() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Magnet Button',
    slug: 'magnet-button',
    description: 'Pointer-reactive button with subtle magnetic attraction.',
    category: 'input',
    dependencies: ['lucide-react'],
    usage: "import { MagnetButton } from '@/app/components/magnet-button';",
    code: `'use client';\n\nexport function MagnetButton() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Infinite Scroll Columns',
    slug: 'infinite-scroll-columns',
    description: 'Opposing marquee columns for testimonials and visual loops.',
    category: 'motion',
    dependencies: [],
    usage: "import { InfiniteScrollColumn } from '@/app/components/infinite-scroll-column';",
    code: `'use client';\n\nexport function InfiniteScrollColumn() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Floating Toolbar',
    slug: 'floating-toolbar',
    description: 'Minimalist navigation pill with precise layout transitions.',
    category: 'motion',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { FloatingToolbar } from '@/app/components/floating-toolbar';",
    code: `'use client';\n\nexport function FloatingToolbar() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Pulse Badge',
    slug: 'pulse-badge',
    description: 'Status indicators with animated pulsing rings and glow.',
    category: 'input',
    dependencies: ['framer-motion'],
    usage: "import { PulseBadge } from '@/app/components/pulse-badge';",
    code: `'use client';\n\nexport function PulseBadge() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Shimmer Text',
    slug: 'shimmer-text',
    description: 'Text with a sweeping gradient shimmer effect.',
    category: 'motion',
    dependencies: ['framer-motion'],
    usage: "import { ShimmerText } from '@/app/components/shimmer-text';",
    code: `'use client';\n\nexport function ShimmerText() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Tilt Card',
    slug: 'tilt-card',
    description: '3D perspective card that responds to cursor position.',
    category: 'hero',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { TiltCard } from '@/app/components/tilt-card';",
    code: `'use client';\n\nexport function TiltCard() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Toggle Switch',
    slug: 'toggle-switch',
    description: 'Spring-animated toggle with icon morph transitions.',
    category: 'input',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { ToggleSwitch } from '@/app/components/toggle-switch';",
    code: `'use client';\n\nexport function ToggleSwitch() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Ripple Button',
    slug: 'ripple-button',
    description: 'Click-reactive button with expanding ripple waves.',
    category: 'input',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { RippleButton } from '@/app/components/ripple-button';",
    code: `'use client';\n\nexport function RippleButton() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Animated Counter',
    slug: 'animated-counter',
    description: 'Spring-driven number counters that animate on mount.',
    category: 'motion',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { AnimatedCounter } from '@/app/components/animated-counter';",
    code: `'use client';\n\nexport function AnimatedCounter() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Breathing Glow',
    slug: 'breathing-glow',
    description: 'Pulsing glow orbs with layered blur breathing effect.',
    category: 'motion',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { BreathingGlow } from '@/app/components/breathing-glow';",
    code: `'use client';\n\nexport function BreathingGlow() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Stagger List',
    slug: 'stagger-list',
    description: 'Animated task list with staggered enter and exit transitions.',
    category: 'hero',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { StaggerList } from '@/app/components/stagger-list';",
    code: `'use client';\n\nexport function StaggerList() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Flip Card',
    slug: 'flip-card',
    description: '3D card flip with spring physics and backface reveal.',
    category: 'hero',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { FlipCard } from '@/app/components/flip-card';",
    code: `'use client';\n\nexport function FlipCard() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Elastic Drawer',
    slug: 'elastic-drawer',
    description: 'Spring-powered expandable drawer with staggered items.',
    category: 'input',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { ElasticDrawer } from '@/app/components/elastic-drawer';",
    code: `'use client';\n\nexport function ElasticDrawer() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Animated Toast',
    slug: 'animated-toast',
    description: 'Stackable toast notifications with spring enter/exit and swipe dismiss.',
    category: 'feedback',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { AnimatedToast } from '@/app/components/animated-toast';",
    code: `'use client';\n\nexport function AnimatedToast() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Skeleton Loader',
    slug: 'skeleton-loader',
    description: 'Animated placeholder shimmer for loading states.',
    category: 'feedback',
    dependencies: ['framer-motion'],
    usage: "import { SkeletonLoader } from '@/app/components/skeleton-loader';",
    code: `'use client';\n\nexport function SkeletonLoader() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Hover Card',
    slug: 'hover-card',
    description: 'Spring-animated popover card that appears on hover.',
    category: 'overlay',
    dependencies: ['framer-motion'],
    usage: "import { HoverCard } from '@/app/components/hover-card';",
    code: `'use client';\n\nexport function HoverCard() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Animated Accordion',
    slug: 'animated-accordion',
    description: 'Collapsible FAQ sections with spring height transitions.',
    category: 'input',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { AnimatedAccordion } from '@/app/components/animated-accordion';",
    code: `'use client';\n\nexport function AnimatedAccordion() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Command Palette',
    slug: 'command-palette',
    description: 'Spotlight-style search modal with keyboard navigation.',
    category: 'overlay',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { CommandPalette } from '@/app/components/command-palette';",
    code: `'use client';\n\nexport function CommandPalette() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Drag Reorder',
    slug: 'drag-reorder',
    description: 'Sortable list with drag-and-drop layout animations.',
    category: 'input',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { DragReorder } from '@/app/components/drag-reorder';",
    code: `'use client';\n\nexport function DragReorder() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Animated Progress',
    slug: 'animated-progress',
    description: 'Spring-driven progress bars that animate to target values.',
    category: 'feedback',
    dependencies: ['framer-motion'],
    usage: "import { AnimatedProgress } from '@/app/components/animated-progress';",
    code: `'use client';\n\nexport function AnimatedProgress() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Typewriter Text',
    slug: 'typewriter-text',
    description: 'Text that types and deletes itself through rotating phrases.',
    category: 'motion',
    dependencies: ['framer-motion'],
    usage: "import { TypewriterText } from '@/app/components/typewriter-text';",
    code: `'use client';\n\nexport function TypewriterText() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Scroll Reveal',
    slug: 'scroll-reveal',
    description: 'Elements that animate in as they enter the viewport.',
    category: 'motion',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { ScrollReveal } from '@/app/components/scroll-reveal';",
    code: `'use client';\n\nexport function ScrollReveal() {\n  // copy from registry component source\n}`
  },
  {
    name: 'Confetti Button',
    slug: 'confetti-button',
    description: 'Button with particle burst celebration effect on click.',
    category: 'feedback',
    dependencies: ['framer-motion', 'lucide-react'],
    usage: "import { ConfettiButton } from '@/app/components/confetti-button';",
    code: `'use client';\n\nexport function ConfettiButton() {\n  // copy from registry component source\n}`
  }
];

export function getRegistryItem(slug: string) {
  return registry.find((item) => item.slug === slug);
}
