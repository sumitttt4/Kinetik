'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';
import { createPortal } from 'react-dom';

type Particle = {
  id: number;
  x: number;
  y: number;
  endX: number;
  endY: number;
  color: string;
  rotation: number;
  scale: number;
  shape: 'square' | 'circle' | 'rect';
};

/* Brand-aligned confetti palette — deep blues, light blues, accents */
const colors = [
  '#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd',
  '#1d4ed8', '#dbeafe', '#f59e0b', '#10b981',
];

export function ConfettiButton() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const burst = useCallback(() => {
    if (shouldReduceMotion) {
      setCount((c) => c + 1);
      return;
    }

    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: Date.now() + i,
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 100,
      y: window.innerHeight / 2,
      endX: (Math.random() - 0.5) * window.innerWidth * 0.8,
      endY: -(Math.random() * window.innerHeight * 0.6 + 100),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 720 - 360,
      scale: Math.random() * 1 + 0.5,
      shape: (['square', 'circle', 'rect'] as const)[Math.floor(Math.random() * 3)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);
    setCount((c) => c + 1);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1500);
  }, [shouldReduceMotion]);

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.button
        type="button"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        onClick={burst}
        className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-shadow hover:shadow-xl hover:shadow-blue-900/30"
      >
        <PartyPopper className="h-4 w-4" />
        Celebrate!
      </motion.button>

      <span className="text-xs text-muted-foreground">
        {count > 0 ? `${count} celebration${count > 1 ? 's' : ''}` : 'Click to celebrate'}
      </span>

      {/* Full-page confetti portal */}
      {mounted && typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ x: p.x, y: p.y, opacity: 1, scale: 0 }}
                animate={{
                  x: p.x + p.endX,
                  y: p.y + p.endY,
                  opacity: 0,
                  scale: p.scale,
                  rotate: p.rotation,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.2, 0.8, 0.4, 1],
                }}
                className="pointer-events-none fixed z-[9999]"
                style={{
                  backgroundColor: p.color,
                  width: p.shape === 'rect' ? 10 : 8,
                  height: p.shape === 'rect' ? 4 : 8,
                  borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'rect' ? 2 : 1,
                }}
              />
            ))}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
