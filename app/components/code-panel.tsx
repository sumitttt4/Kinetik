'use client';

import { useState } from 'react';
import { Check, Clipboard, Package, X } from 'lucide-react';
import type { RegistryItem } from '@/lib/registry';

type CodePanelProps = {
  open: boolean;
  item: RegistryItem | null;
  onClose: () => void;
};

export function CodePanel({ open, item, onClose }: CodePanelProps) {
  const [copied, setCopied] = useState(false);

  if (!open || !item) {
    return null;
  }

  async function copyCode() {
    if (!item) return;
    await navigator.clipboard.writeText(item.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-xl border border-border bg-card p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold tracking-tight text-foreground">{item.name}</h3>
              <span className="rounded-md border border-primary/15 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {item.category}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-3">
          {item.dependencies.length > 0 && (
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground">
                <Package className="h-3.5 w-3.5 text-primary" /> Install
              </div>
              <code className="mt-2 block font-mono text-xs text-muted-foreground">
                npm install {item.dependencies.join(' ')}
              </code>
            </div>
          )}

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Usage</p>
            <pre className="mt-2 overflow-x-auto font-mono text-xs text-muted-foreground">
              {item.usage}
            </pre>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Source</p>
            <pre className="mt-2 max-h-64 overflow-auto font-mono text-xs text-muted-foreground">
              {item.code}
            </pre>
          </div>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={copyCode}
          className="mt-5 inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          {copied ? 'Copied!' : 'Copy code'}
        </button>
      </div>
    </div>
  );
}
