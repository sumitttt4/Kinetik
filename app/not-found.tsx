'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Compass } from 'lucide-react';

const spring = { type: 'spring', stiffness: 400, damping: 30 } as const;

export default function NotFound() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);

  const rotateY = useTransform(smoothX, [-220, 220], [-6, 6]);
  const rotateX = useTransform(smoothY, [-220, 220], [6, -6]);
  const glowX = useTransform(smoothX, [-220, 220], [25, 75]);
  const glowY = useTransform(smoothY, [-220, 220], [25, 75]);

  const glow = useMotionTemplate`radial-gradient(400px circle at ${glowX}% ${glowY}%, hsl(var(--primary) / 0.12), transparent 55%)`;

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="kinetik-dots pointer-events-none absolute inset-0 opacity-50" />

      <motion.section
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={spring}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          pointerX.set(e.clientX - (rect.left + rect.width / 2));
          pointerY.set(e.clientY - (rect.top + rect.height / 2));
        }}
        onMouseLeave={() => {
          pointerX.set(0);
          pointerY.set(0);
        }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full max-w-md rounded-3xl border border-border bg-card shadow-xl"
      >
        <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0 rounded-3xl" />

        <div className="relative z-10 p-8 text-center md:p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Compass className="h-7 w-7 text-primary" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Error 404
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Page not found
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={spring}>
              <Link
                href="/"
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ArrowLeft className="h-4 w-4" /> Back home
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={spring}>
              <Link
                href="/registry"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Compass className="h-4 w-4" /> Browse registry
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
