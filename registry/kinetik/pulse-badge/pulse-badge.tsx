'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const statuses = [
  { label: 'Live', color: 'bg-emerald-500', ring: 'ring-emerald-400/40' },
  { label: 'Pending', color: 'bg-amber-500', ring: 'ring-amber-400/40' },
  { label: 'Offline', color: 'bg-red-500', ring: 'ring-red-400/40' },
] as const;

export function PulseBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-5">
      {statuses.map((status) => (
        <div
          key={status.label}
          className="flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            {!shouldReduceMotion && (
              <motion.span
                className={cn(
                  'absolute inset-0 rounded-full opacity-75 ring-4',
                  status.color,
                  status.ring
                )}
                animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0, 0.75] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <span
              className={cn('relative inline-flex h-2.5 w-2.5 rounded-full', status.color)}
            />
          </span>
          {status.label}
        </div>
      ))}
    </div>
  );
}
