'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
};

const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444'];

export function ConfettiButton() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const burst = useCallback(() => {
    if (shouldReduceMotion) {
      setCount((c) => c + 1);
      return;
    }

    const newParticles: Particle[] = Array.from({ length: 16 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 200,
      y: -(Math.random() * 120 + 40),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
    }));

    setParticles((prev) => [...prev, ...newParticles]);
    setCount((c) => c + 1);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1000);
  }, [shouldReduceMotion]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <motion.button
          type="button"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
          onClick={burst}
          className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-shadow hover:shadow-xl hover:shadow-violet-500/30"
        >
          <PartyPopper className="h-4 w-4" />
          Celebrate!
        </motion.button>

        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{
                x: p.x,
                y: p.y,
                opacity: 0,
                scale: p.scale,
                rotate: p.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 rounded-sm"
              style={{ backgroundColor: p.color }}
            />
          ))}
        </AnimatePresence>
      </div>

      <span className="text-xs text-muted-foreground">
        {count > 0 ? `${count} celebration${count > 1 ? 's' : ''}` : 'Click to celebrate'}
      </span>
    </div>
  );
}
