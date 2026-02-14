'use client';

import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion, motion } from 'framer-motion';
import { useRef, useState } from 'react';

export function MagnetButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  function handleMove(event: React.MouseEvent<HTMLButtonElement>) {
    if (shouldReduceMotion) {
      return;
    }

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.22;
    setPosition({ x, y });
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      onFocus={() => setPosition({ x: 0, y: 0 })}
      className="rounded-full border border-sky-300 bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-18px_rgba(14,165,233,1)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <span className="inline-flex items-center gap-2">
        Launch Component <ArrowUpRight className="h-4 w-4" />
      </span>
    </motion.button>
  );
}
