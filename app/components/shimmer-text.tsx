'use client';

import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ShimmerText() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-4">
      <h3
        className={cn(
          'bg-clip-text text-2xl font-bold tracking-tight text-transparent',
          'bg-[length:200%_100%] bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800 dark:from-slate-200 dark:via-slate-500 dark:to-slate-200',
          !shouldReduceMotion && 'animate-[shimmer_3s_ease-in-out_infinite]'
        )}
      >
        Premium Quality
      </h3>
      <p
        className={cn(
          'bg-clip-text text-sm font-semibold tracking-widest uppercase text-transparent',
          'bg-[length:200%_100%] bg-gradient-to-r from-blue-600 via-sky-300 to-blue-600 dark:from-blue-400 dark:via-sky-200 dark:to-blue-400',
          !shouldReduceMotion && 'animate-[shimmer_2.5s_ease-in-out_infinite_0.3s]'
        )}
      >
        Loading experience
      </p>
    </div>
  );
}
