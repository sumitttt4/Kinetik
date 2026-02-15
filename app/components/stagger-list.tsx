'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const initialItems = [
  { id: 1, text: 'Design system tokens', done: true },
  { id: 2, text: 'Spring physics config', done: false },
  { id: 3, text: 'Accessibility audit', done: false },
];

export function StaggerList() {
  const [items, setItems] = useState(initialItems);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const add = () => {
    const labels = ['Dark mode support', 'Motion tokens', 'Layout animations', 'Exit transitions'];
    const text = labels[items.length % labels.length];
    setItems((prev) => [...prev, { id: Date.now(), text, done: false }]);
  };

  const remove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const variant = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: -12, filter: 'blur(4px)' },
        animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, x: 12, filter: 'blur(4px)' },
      };

  return (
    <div className="w-full max-w-xs space-y-2">
      <AnimatePresence mode="popLayout" initial={false}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            {...variant}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-background px-3.5 py-2.5 shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className={cn(
                'flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                item.done
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background'
              )}
            >
              {item.done && <Check className="h-3 w-3" />}
            </button>
            <span
              className={cn(
                'flex-1 text-sm font-medium transition-colors',
                item.done
                  ? 'text-muted-foreground line-through'
                  : 'text-foreground'
              )}
            >
              {item.text}
            </span>
            <button
              type="button"
              onClick={() => remove(item.id)}
              className="text-muted-foreground/50 transition-colors hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.button
        type="button"
        whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
        onClick={add}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-border py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Plus className="h-3.5 w-3.5" /> Add task
      </motion.button>
    </div>
  );
}
