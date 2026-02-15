'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  {
    title: 'What is Kinetik?',
    content: 'Kinetik is a curated registry of physics-driven, copy-paste UI components built with Framer Motion, Tailwind CSS, and TypeScript.',
  },
  {
    title: 'How do I install a component?',
    content: 'Copy the component source code, paste it into your project, and install any listed dependencies with npm or pnpm.',
  },
  {
    title: 'Are components accessible?',
    content: 'Yes. Every component respects prefers-reduced-motion, includes ARIA attributes, and supports keyboard navigation.',
  },
];

export function AnimatedAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-sm space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="rounded-xl border border-border bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.title}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 20 }}
                className="shrink-0 text-muted-foreground"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className={cn('border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground')}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
