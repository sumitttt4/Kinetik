'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Bell, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';

export function DynamicIsland() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const spring = useMemo(() => (shouldReduceMotion ? { duration: 0 } : { type: 'spring', bounce: 0.25, duration: 0.5 }), [shouldReduceMotion]);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      className="relative mx-auto flex h-14 w-40 items-center justify-center rounded-full border border-white/40 bg-slate-950 px-4 text-white shadow-[0_16px_60px_-26px_rgba(14,165,233,0.75)] backdrop-blur-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      aria-expanded={open}
      aria-label="Toggle Dynamic Island"
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 6, width: 160 }}
            animate={{ opacity: 1, y: 0, width: 280 }}
            exit={{ opacity: 0, y: -5, width: 160 }}
            transition={spring}
            className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2"
          >
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="h-4 w-4 text-sky-300" />
              <div className="text-xs leading-tight">
                <p className="font-semibold">Payment Complete</p>
                <p className="text-white/70">$84.00 sent to Kinetik</p>
              </div>
            </div>
            <span className="h-2 w-2 rounded-full bg-sky-400" />
          </motion.div>
        ) : (
          <motion.div key="collapsed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={spring} className="flex items-center gap-2 text-sm">
            <Bell className="h-4 w-4 text-sky-300" />
            Dynamic Island
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
