'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Fingerprint } from 'lucide-react';

export function BreathingGlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex items-center justify-center gap-8">
      {/* Glow orb */}
      <div className="relative flex items-center justify-center">
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute h-20 w-20 rounded-full bg-primary/20 blur-xl"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute h-14 w-14 rounded-full bg-primary/30 blur-md"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.25, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
            />
          </>
        )}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg shadow-primary/10"
        >
          <Fingerprint className="h-6 w-6 text-primary" />
        </motion.div>
      </div>

      {/* Breathing ring */}
      <div className="relative flex items-center justify-center">
        {!shouldReduceMotion && (
          <motion.div
            className="absolute h-16 w-16 rounded-full border-2 border-emerald-400/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20">
          <span className="text-sm font-bold text-white">AI</span>
        </div>
      </div>
    </div>
  );
}
