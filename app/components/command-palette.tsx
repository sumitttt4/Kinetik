'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, ArrowRight, X, Zap, Layers, ToggleLeft, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';

const commands = [
  { icon: Zap, label: 'Dynamic Island', category: 'Component' },
  { icon: Layers, label: 'Fluid Tabs', category: 'Component' },
  { icon: MousePointer, label: 'Magnet Button', category: 'Component' },
  { icon: ToggleLeft, label: 'Toggle Switch', category: 'Component' },
  { icon: Search, label: 'Search Documentation', category: 'Action' },
  { icon: ArrowRight, label: 'Browse Registry', category: 'Action' },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(
    () => commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"
      >
        <Search className="h-4 w-4" />
        <span>Quick search...</span>
        <kbd className="ml-2 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="fixed left-1/2 top-[20%] z-50 w-full max-w-md -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
              onKeyDown={handleKeyDown}
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                  placeholder="Search components, actions..."
                  className="h-12 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button type="button" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-64 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="py-6 text-center text-xs text-muted-foreground">No results found.</p>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.label}
                      type="button"
                      onMouseEnter={() => setSelected(i)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                        selected === i ? 'bg-accent text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      <cmd.icon className="h-4 w-4 shrink-0" />
                      <span className="flex-1 text-sm font-medium">{cmd.label}</span>
                      <span className="text-[10px] text-muted-foreground">{cmd.category}</span>
                    </button>
                  ))
                )}
              </div>

              <div className="border-t border-border px-4 py-2 text-[10px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <kbd className="rounded border border-border bg-muted px-1">↑↓</kbd> navigate
                </span>
                <span className="ml-3 inline-flex items-center gap-1">
                  <kbd className="rounded border border-border bg-muted px-1">esc</kbd> close
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
