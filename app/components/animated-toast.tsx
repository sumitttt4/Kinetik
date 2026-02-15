'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, X, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'warning' | 'info';

type Toast = {
  id: number;
  message: string;
  type: ToastType;
};

const icons: Record<ToastType, React.ElementType> = {
  success: Check,
  error: X,
  warning: AlertTriangle,
  info: Info,
};

const styles: Record<ToastType, string> = {
  success: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  error: 'border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400',
  warning: 'border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  info: 'border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400',
};

const iconBg: Record<ToastType, string> = {
  success: 'bg-emerald-500',
  error: 'bg-red-500',
  warning: 'bg-amber-500',
  info: 'bg-blue-500',
};

export function AnimatedToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const addToast = useCallback((type: ToastType) => {
    const messages: Record<ToastType, string> = {
      success: 'Changes saved successfully',
      error: 'Something went wrong',
      warning: 'Please check your input',
      info: 'New update available',
    };
    const id = Date.now();
    setToasts((prev) => [...prev.slice(-2), { id, message: messages[type], type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {(['success', 'error', 'warning', 'info'] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => addToast(type)}
            className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium capitalize text-foreground transition-colors hover:bg-accent"
          >
            {type}
          </button>
        ))}
      </div>

      <div className="pointer-events-none relative flex min-h-[80px] w-full max-w-xs flex-col items-center gap-2">
        <AnimatePresence mode="sync">
          {toasts.map((toast) => {
            const Icon = icons[toast.type];
            return (
              <motion.div
                key={toast.id}
                layout
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={cn(
                  'pointer-events-auto flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 shadow-lg',
                  styles[toast.type]
                )}
              >
                <span className={cn('flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white', iconBg[toast.type])}>
                  <Icon className="h-3 w-3" />
                </span>
                <span className="flex-1 text-xs font-medium text-foreground">{toast.message}</span>
                <button
                  type="button"
                  onClick={() => dismiss(toast.id)}
                  className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
