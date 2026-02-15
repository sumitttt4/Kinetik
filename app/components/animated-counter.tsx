'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { TrendingUp, Users, Star } from 'lucide-react';

function Counter({ target, label, icon: Icon }: { target: number; label: string; icon: React.ElementType }) {
  const shouldReduceMotion = useReducedMotion();
  const [triggered, setTriggered] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString()
  );

  useEffect(() => {
    if (!triggered) {
      setTriggered(true);
      spring.set(shouldReduceMotion ? target : target);
    }
  }, [triggered, spring, target, shouldReduceMotion]);

  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-background px-5 py-4 shadow-sm">
      <Icon className="h-4.5 w-4.5 text-primary" />
      <motion.span className="text-2xl font-bold tabular-nums text-foreground">
        {display}
      </motion.span>
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function AnimatedCounter() {
  return (
    <div className="flex items-center gap-4">
      <Counter target={12847} label="Users" icon={Users} />
      <Counter target={4923} label="Stars" icon={Star} />
      <Counter target={99} label="Uptime %" icon={TrendingUp} />
    </div>
  );
}
