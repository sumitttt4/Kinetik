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
        className="group relative w-full overflow-hidden rounded-2xl border border-border bg-card p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <motion.div layoutId="morph-image" transition={spring} className="h-28 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600" />
        <div className="mt-3 space-y-1">
          <p className="text-sm font-semibold text-foreground">Morphing Dialog</p>
          <p className="text-xs text-muted-foreground">Tap to expand this card into a full modal.</p>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={spring}
              className="w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Morphing dialog preview"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-border bg-muted/50 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <motion.div layoutId="morph-image" transition={spring} className="h-52 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" />
              <h3 className="mt-6 text-xl font-bold text-foreground">Physical expansion, zero jump cuts.</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                The same visual element lifts and scales into context, creating continuity between list and detail views.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
