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
  }
];

export function getRegistryItem(slug: string) {
  return registry.find((item) => item.slug === slug);
}
