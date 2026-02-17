'use client';

import { useReducedMotion, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layers } from 'lucide-react';

export function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div style={{ perspective: 600 }} className="flex items-center justify-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={shouldReduceMotion ? {} : { rotateX, rotateY }}
        className="relative w-56 rounded-2xl border border-border bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-lg dark:from-slate-800 dark:to-slate-900"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Layers className="h-5 w-5 text-primary" />
        </div>
        <p className="text-sm font-semibold text-foreground">3D Perspective</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Move your cursor across the card to see it respond in 3D space.
        </p>
      </motion.div>
    </div>
  );
}
