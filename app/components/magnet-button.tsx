'use client';

import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
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
    <button
      ref={ref}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      onFocus={() => setPosition({ x: 0, y: 0 })}
      className="rounded-full border border-sky-300 bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-18px_rgba(14,165,233,1)] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <span className="inline-flex items-center gap-2">
        Launch Component <ArrowUpRight className="h-4 w-4" />
      </span>
    </button>
  );
}
