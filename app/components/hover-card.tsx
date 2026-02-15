'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const users = [
  { name: 'Alex Chen', role: 'Design Engineer', avatar: 'AC' },
  { name: 'Sara Kim', role: 'Frontend Lead', avatar: 'SK' },
  { name: 'Max Hall', role: 'Motion Designer', avatar: 'MH' },
];

export function HoverCard() {
  const [active, setActive] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-3">
      {users.map((user, i) => (
        <div
          key={user.name}
          className="relative"
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
        >
          <button
            type="button"
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all',
              active === i
                ? 'border-primary bg-primary text-primary-foreground scale-110'
                : 'border-border bg-card text-muted-foreground hover:border-primary/40'
            )}
          >
            {user.avatar}
          </button>

          <AnimatePresence>
            {active === i && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="absolute left-1/2 top-full z-10 mt-2 w-44 -translate-x-1/2 rounded-xl border border-border bg-card p-3 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{user.name}</p>
                    <p className="text-[10px] text-muted-foreground">{user.role}</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
