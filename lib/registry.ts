export type RegistryItem = {
  name: string;
  slug: string;
  description: string;
  category: 'hero' | 'motion' | 'input';
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
  }
];

export function getRegistryItem(slug: string) {
  return registry.find((item) => item.slug === slug);
}
