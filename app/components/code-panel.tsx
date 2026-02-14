'use client';

import { useState } from 'react';
import { Check, Clipboard, X } from 'lucide-react';
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
    if (!item) {
      return;
    }
    await navigator.clipboard.writeText(item.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Component</p>
            <h3 className="mt-1 text-xl font-bold text-foreground">{item.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          </div>
          <button type="button" className="rounded-full border border-border p-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={onClose} aria-label="Close code panel">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 space-y-2 rounded-xl border border-border bg-muted/50 p-3 text-xs text-foreground">
          <p className="font-semibold text-foreground">Install</p>
          <p className="font-mono">{item.dependencies.length ? `npm install ${item.dependencies.join(' ')}` : 'No additional dependencies required.'}</p>
          <p className="font-semibold text-foreground">Usage</p>
          <pre className="overflow-x-auto rounded-md border border-border bg-background p-2 text-[11px] font-mono">{item.usage}</pre>
          <p className="font-semibold text-foreground">Code</p>
          <pre className="max-h-72 overflow-auto rounded-md border border-border bg-background p-2 text-[11px] font-mono">{item.code}</pre>
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy component'}
        </button>
      </div>
    </div>
  );
}
