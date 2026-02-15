'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronUp, Settings, Palette, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { kinetikSpring } from '@/lib/motion';

const options = [
  { icon: Settings, label: 'Settings' },
  { icon: Palette, label: 'Theme' },
  { icon: Volume2, label: 'Sound' },
];

export function ElasticDrawer() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const transition = shouldReduceMotion ? { duration: 0 } : kinetikSpring;

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Drawer content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
            animate={{ height: 'auto', opacity: 1, filter: 'blur(0px)' }}
            exit={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
            transition={transition}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 pb-2">
              {options.map((opt, i) => (
                <motion.button
                  key={opt.label}
                  type="button"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...transition,
                    delay: shouldReduceMotion ? 0 : i * 0.06,
                  }}
                  className="flex w-48 items-center gap-3 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <opt.icon className="h-4 w-4 text-muted-foreground" />
                  {opt.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <motion.button
        type="button"
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        )}
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={transition}
          className="inline-flex"
        >
          <ChevronUp className="h-4 w-4" />
        </motion.span>
        {open ? 'Close' : 'Quick Actions'}
      </motion.button>
    </div>
  );
}
