'use client';

import { useState } from 'react';
import { Check, Clipboard, X } from 'lucide-react';
import type { RegistryItem } from '@/lib/registry';

export function CodePanel({ item, open, onClose }: { item: RegistryItem | null; open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  if (!open || !item) {
    return null;
  }

  async function copyCode() {
    await navigator.clipboard.writeText(item.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4" onClick={onClose}>
      <div className="w-full max-w-3xl rounded-2xl border border-sky-200/40 bg-white p-5" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>
          <button type="button" className="rounded-full border border-slate-200 p-2" onClick={onClose} aria-label="Close code panel">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
          <p className="font-semibold">Install</p>
          <code>pnpm add {item.dependencies.join(' ') || 'no extra dependencies required'}</code>
          <p className="pt-2 font-semibold">Usage</p>
          <code>{item.usage}</code>
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs text-sky-100">
          <pre>{item.code}</pre>
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
