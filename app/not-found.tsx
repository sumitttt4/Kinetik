'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Compass, ShieldCheck, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 30
} as const;

export default function NotFound() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);

  const rotateY = useTransform(smoothX, [-220, 220], [-8, 8]);
  const rotateX = useTransform(smoothY, [-220, 220], [8, -8]);
  const glowX = useTransform(smoothX, [-220, 220], [25, 75]);
  const glowY = useTransform(smoothY, [-220, 220], [25, 75]);

  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, rgba(59,130,246,0.22), transparent 55%)`;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900 px-4 py-16 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(96,165,250,0.15),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(37,99,235,0.15),transparent_38%)]" />

      <motion.section
        layout
        transition={spring}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          pointerX.set(event.clientX - (rect.left + rect.width / 2));
          pointerY.set(event.clientY - (rect.top + rect.height / 2));
        }}
        onMouseLeave={() => {
          pointerX.set(0);
          pointerY.set(0);
        }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={cn(
          'relative w-full max-w-xl rounded-3xl border border-white/10',
          'bg-slate-900/80 backdrop-blur-xl',
          'shadow-[0_35px_80px_-45px_rgba(2,6,23,0.9),inset_0_1px_0_0_rgba(255,255,255,0.1)]'
        )}
      >
        <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0 rounded-3xl" />

        <div className="relative z-10 p-6 md:p-7">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Error 404</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">Wallet not found</h1>
              <p className="mt-2 text-sm text-slate-300">
                This route drifted off-chain. Reconnect to a valid destination.
              </p>
            </div>
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-slate-800/70"
            >
              <Wallet className="h-5 w-5 text-brand-500" />
            </motion.div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-800/55 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Portfolio value</p>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[11px] text-brand-500">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified
              </span>
            </div>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-white">$0.00</p>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs text-slate-300">
              <span>Address</span>
              <span className="font-medium tracking-tight text-slate-200">0x404...VOID</span>
            </div>
          </div>

          <div className="mt-5 grid gap-2.5 text-sm">
            {['BTC', 'ETH', 'SOL'].map((asset, index) => (
              <motion.div
                key={asset}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: index * 0.05 }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/45 px-3 py-2"
              >
                <span className="font-medium tracking-tight text-slate-200">{asset}</span>
                <span className="text-xs text-brand-500">Unavailable</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={spring}>
              <Link
                href="/"
                aria-label="Go back home"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium tracking-tight text-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <ArrowLeft className="h-4 w-4" /> Back home
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={spring}>
              <Link
                href="/registry"
                aria-label="Explore components"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-brand-500/15 px-4 text-sm font-medium tracking-tight text-brand-500 outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <Compass className="h-4 w-4" /> Explore components
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
