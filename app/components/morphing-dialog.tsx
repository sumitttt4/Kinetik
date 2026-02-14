'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

export function MorphingDialog() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const spring = useMemo(() => (shouldReduceMotion ? { duration: 0 } : { type: 'spring', bounce: 0.25, duration: 0.5 }), [shouldReduceMotion]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
      if (event.key === 'Tab' && open && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (focusables.length === 0) {
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <motion.div layoutId="morph-image" transition={spring} className="h-28 rounded-xl bg-gradient-to-br from-sky-400 to-slate-950" />
        <div className="mt-3 space-y-1">
          <p className="text-sm font-semibold text-slate-900">Morphing Dialog</p>
          <p className="text-xs text-slate-600">Tap to expand this card into a full modal.</p>
        </div>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={spring}
              className="w-full max-w-2xl rounded-3xl border border-sky-200/40 bg-white p-5"
              role="dialog"
              aria-modal="true"
              aria-label="Morphing dialog preview"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-slate-200 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <motion.div layoutId="morph-image" transition={spring} className="h-52 rounded-2xl bg-gradient-to-br from-sky-400 to-slate-950" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Physical expansion, zero jump cuts.</h3>
              <p className="mt-2 text-sm text-slate-600">
                The same visual element lifts and scales into context, creating continuity between list and detail views.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
