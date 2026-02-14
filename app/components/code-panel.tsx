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
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4" onClick={onClose}>
      <div className="w-full max-w-3xl rounded-2xl border border-sky-200/40 bg-white p-5" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Component</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{item.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          </div>
          <button type="button" className="rounded-full border border-slate-200 p-2" onClick={onClose} aria-label="Close code panel">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
          <p className="font-semibold">Install</p>
          <p>{item.dependencies.length ? `npm install ${item.dependencies.join(' ')}` : 'No additional dependencies required.'}</p>
          <p className="font-semibold">Usage</p>
          <pre className="overflow-x-auto rounded-md border border-slate-200 bg-white p-2 text-[11px]">{item.usage}</pre>
          <p className="font-semibold">Code</p>
          <pre className="max-h-72 overflow-auto rounded-md border border-slate-200 bg-white p-2 text-[11px]">{item.code}</pre>
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-500 px-4 py-2 text-sm font-medium text-white"
        >
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy component'}
        </button>
      </div>
    </div>
  );
}
