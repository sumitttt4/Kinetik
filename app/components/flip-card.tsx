'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Eye, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const spring = shouldReduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 260, damping: 25 };

  return (
    <div
      className="relative h-48 w-56 cursor-pointer"
      style={{ perspective: 800 }}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      aria-label={flipped ? 'Show front of card' : 'Flip card to see details'}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={spring}
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md dark:from-slate-800 dark:to-slate-900',
          )}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm font-semibold text-foreground">Preview</p>
          <p className="text-[11px] text-muted-foreground">Click to flip</p>
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-md dark:from-primary/10 dark:to-primary/5',
          )}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20">
            <Code2 className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm font-semibold text-foreground">Source Code</p>
          <p className="text-center text-[11px] text-muted-foreground">
            Single-file, copy-paste ready with full type safety.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
