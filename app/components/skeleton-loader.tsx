'use client';

import { cn } from '@/lib/utils';
import { useReducedMotion } from 'framer-motion';

function Bone({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        'rounded-lg bg-muted',
        !shouldReduceMotion && 'animate-pulse',
        className
      )}
    />
  );
}

export function SkeletonLoader() {
  return (
    <div className="w-full max-w-xs space-y-4">
      {/* Card skeleton */}
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center gap-3">
          <Bone className="h-10 w-10 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <Bone className="h-3 w-3/4" />
            <Bone className="h-2.5 w-1/2" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Bone className="h-2.5 w-full" />
          <Bone className="h-2.5 w-5/6" />
          <Bone className="h-2.5 w-4/6" />
        </div>
        <div className="mt-4 flex gap-2">
          <Bone className="h-7 w-16 rounded-md" />
          <Bone className="h-7 w-20 rounded-md" />
        </div>
      </div>

      {/* List item skeletons */}
      {[1, 2].map((i) => (
        <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-3">
          <Bone className="h-8 w-8 shrink-0 rounded-lg" />
          <div className="flex-1 space-y-1.5">
            <Bone className="h-2.5 w-2/3" />
            <Bone className="h-2 w-1/3" />
          </div>
          <Bone className="h-5 w-12 rounded-md" />
        </div>
      ))}
    </div>
  );
}
