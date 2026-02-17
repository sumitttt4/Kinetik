'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const phrases = [
  'Build interfaces that feel alive.',
  'Ship with spring physics.',
  'Copy, paste, animate.',
  'Motion made simple.',
];

export function TypewriterText() {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const current = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (shouldReduceMotion) {
      setCharIndex(current.length);
      return;
    }

    if (!isDeleting) {
      if (charIndex < current.length) {
        setCharIndex((c) => c + 1);
      } else {
        setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setPhraseIndex((p) => (p + 1) % phrases.length);
      }
    }
  }, [charIndex, isDeleting, current, shouldReduceMotion]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 70;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center text-lg font-semibold tracking-tight text-foreground md:text-xl">
        <span>{current.slice(0, charIndex)}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          className={cn(
            'ml-0.5 inline-block h-5 w-0.5 bg-primary',
            shouldReduceMotion && 'opacity-100'
          )}
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Phrase {phraseIndex + 1} of {phrases.length}
      </p>
    </div>
  );
}
