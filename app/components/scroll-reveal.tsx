'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Eye, Sparkles, Zap } from 'lucide-react';

const cards = [
  { icon: Eye, label: 'Observe', desc: 'Detects viewport entry' },
  { icon: Sparkles, label: 'Animate', desc: 'Spring-based reveal' },
  { icon: Zap, label: 'Perform', desc: 'GPU-accelerated' },
];

export function ScrollReveal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: shouldReduceMotion ? 0 : i * 0.12,
          }}
          className="flex w-full items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <card.icon className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{card.label}</p>
            <p className="text-[11px] text-muted-foreground">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
