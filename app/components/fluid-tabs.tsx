'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = ['Preview', 'Code', 'Usage'];

export function FluidTabs() {
  const [active, setActive] = useState('Preview');
  const shouldReduceMotion = useReducedMotion();

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const currentIndex = tabs.indexOf(active);
    if (event.key === 'ArrowRight') {
      setActive(tabs[(currentIndex + 1) % tabs.length]);
    }
    if (event.key === 'ArrowLeft') {
      setActive(tabs[(currentIndex - 1 + tabs.length) % tabs.length]);
    }
  }

  return (
    <div role="tablist" aria-label="Fluid tabs" onKeyDown={handleKeyDown} className="mx-auto flex w-full max-w-sm rounded-full border border-border bg-muted/50 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={active === tab}
          tabIndex={active === tab ? 0 : -1}
          type="button"
          onClick={() => setActive(tab)}
          className={cn(
            'relative z-10 flex-1 rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            active === tab ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {active === tab && (
            <motion.span
              layoutId="active-tab"
              className="absolute inset-0 -z-10 rounded-full bg-white shadow"
              transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', bounce: 0.25, duration: 0.45 }}
              initial={shouldReduceMotion ? false : { scaleX: 0.85 }}
              animate={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 1 }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
}
