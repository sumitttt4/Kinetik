'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

export function ToggleSwitch() {
  const [on, setOn] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const spring = shouldReduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 500, damping: 30 };

  return (
    <div className="flex items-center gap-6">
      {/* Minimal toggle */}
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn(!on)}
        className={cn(
          'relative flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          on ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'
        )}
      >
        <motion.span
          layout
          transition={spring}
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md',
            on ? '' : ''
          )}
        >
          <motion.span
            initial={false}
            animate={{ rotate: on ? 180 : 0, scale: on ? 1 : 0.85 }}
            transition={spring}
          >
            {on ? (
              <Moon className="h-3.5 w-3.5 text-primary" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-amber-500" />
            )}
          </motion.span>
        </motion.span>
      </button>

      {/* Label */}
      <span className="text-sm font-medium text-muted-foreground">
        {on ? 'Dark mode' : 'Light mode'}
      </span>
    </div>
  );
}
