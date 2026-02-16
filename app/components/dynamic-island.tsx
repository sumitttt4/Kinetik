'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Bell, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function DynamicIsland() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <motion.button
      type="button"
      layout
      onClick={() => setOpen((value) => !value)}
      className="relative mx-auto flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#070d22] text-white shadow-2xl transition-colors hover:bg-[#070d22]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      style={{ borderRadius: 28 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      animate={{
        width: open ? 300 : 160,
        height: open ? 80 : 56
      }}
      aria-expanded={open}
      aria-label="Toggle Dynamic Island"
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex w-full items-center justify-between gap-4 px-4"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/20 text-primary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium leading-none tracking-tight text-white">Payment Received</span>
                <span className="text-xs text-white/60">$84.00 from Apple Inc.</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 px-4 text-sm font-medium tracking-tight text-white/90"
          >
            <Bell className="h-4 w-4 text-primary" />
            <span>Dynamic Island</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
