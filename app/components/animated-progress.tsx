'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

function ProgressBar({ value, label, color }: { value: number; label: string; color: string }) {
  const shouldReduceMotion = useReducedMotion();
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const width = useTransform(spring, (v) => `${v}%`);
  const display = useTransform(spring, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    spring.set(shouldReduceMotion ? value : value);
  }, [spring, value, shouldReduceMotion]);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-foreground">{label}</span>
        <motion.span className="text-xs font-semibold tabular-nums text-muted-foreground">
          {display}
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          style={{ width }}
          className={cn('h-full rounded-full', color)}
        />
      </div>
    </div>
  );
}

export function AnimatedProgress() {
  const [values, setValues] = useState([72, 45, 89]);

  const randomize = () => {
    setValues([
      Math.floor(Math.random() * 80) + 20,
      Math.floor(Math.random() * 80) + 20,
      Math.floor(Math.random() * 80) + 20,
    ]);
  };

  return (
    <div className="w-full max-w-xs space-y-4">
      <ProgressBar value={values[0]} label="Design" color="bg-blue-500" />
      <ProgressBar value={values[1]} label="Development" color="bg-indigo-500" />
      <ProgressBar value={values[2]} label="Testing" color="bg-emerald-500" />
      <button
        type="button"
        onClick={randomize}
        className="w-full rounded-lg border border-border bg-background py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        Randomize
      </button>
    </div>
  );
}
