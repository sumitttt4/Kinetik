'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Bell, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function DynamicIsland() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      className="relative mx-auto flex h-14 w-40 items-center justify-center rounded-full border border-white/10 bg-[#070d22] px-4 text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,1)] backdrop-blur-2xl transition-colors hover:bg-[#070d22]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      aria-expanded={open}
      aria-label="Toggle Dynamic Island"
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0, width: 280 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={transition}
            className="flex w-full items-center justify-between gap-3 overflow-hidden"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-sky-500/20 text-sky-400">
                 <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium leading-none tracking-tight text-white">Payment Complete</span>
                <span className="text-[11px] leading-none text-white/50">$84.00 sent to Kinetik</span>
              </div>
            </div>
            <div className="h-8 w-1 rounded-full bg-sky-500/50" />
          </motion.div>
        ) : (
          <motion.div 
            key="collapsed" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.9 }} 
            transition={transition}
            className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-white/90"
          >
            <Bell className="h-4 w-4 text-sky-400" />
            <span>Dynamic Island</span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
