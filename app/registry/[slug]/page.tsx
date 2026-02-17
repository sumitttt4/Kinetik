'use client';

import Link from 'next/link';
import { ArrowLeft, Clipboard, Package, Check, Terminal } from 'lucide-react';
import { getRegistryItem } from '@/lib/registry';
import { previewMap } from '@/lib/preview-map';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ComponentCustomizer, type CustomizerState } from '@/app/components/component-customizer';
import { cn } from '@/lib/utils';

export default function RegistryDetailPage({ params }: { params: { slug: string } }) {
  const item = getRegistryItem(params.slug);
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);
  const [realSource, setRealSource] = useState<string | null>(null);
  const [customizerState, setCustomizerState] = useState<CustomizerState>({
    colorName: 'blue',
    colorHex: '#3b82f6',
    shade: 500,
    widthClass: 'max-w-md',
    shadowClass: 'shadow-md',
  });

  // Fetch real source code from API
  useEffect(() => {
    if (!item) return;
    fetch(`/api/source/${params.slug}`)
      .then((res) => res.json())
      .then((data) => setRealSource(data.source))
      .catch(() => setRealSource(item.code));
  }, [params.slug, item]);

  if (!item) {
    router.push('/registry');
    return null;
  }

  const displayCode = realSource || item.code;

  const cliCommand = `npx shadcn@latest add https://kinetik.dev/r/${item.slug}.json`;

  const installLine = item.dependencies.length
    ? `npm add ${item.dependencies.join(' ')}`
    : 'No additional dependencies required.';

  const preview = previewMap[item.slug];

  async function copyCli() {
    await navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 1500);
  }

  async function copyCode() {
    if (!displayCode) return;
    await navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-12 md:pt-16">
        {/* Breadcrumb */}
        <Link
          href="/registry"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Registry
        </Link>

        {/* Header */}
        <div className="mt-8 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{item.name}</h1>
              <span className="rounded-md border border-primary/15 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {item.category}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>

        {/* ─── Customizer Toolbar ─── */}
        <div className="mt-8">
          <ComponentCustomizer onChange={setCustomizerState} />
        </div>

        {/* ─── Live Preview ─── */}
        {preview && (
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Live Preview
            </p>
            <div
              className={cn(
                'mx-auto flex min-h-[200px] items-center justify-center rounded-xl border border-border bg-muted/30 p-6 transition-all duration-300',
                customizerState.widthClass,
                customizerState.shadowClass
              )}
              style={{
                '--custom-primary': customizerState.colorHex,
              } as React.CSSProperties}
            >
              {preview}
            </div>
          </div>
        )}

        {/* ─── Install / Usage / Source ─── */}
        <div className="mt-6 space-y-4">
          {/* CLI Install (Primary) */}
          <div className="rounded-xl border-2 border-primary/20 bg-card p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                Install via CLI
              </div>
              <button
                type="button"
                onClick={copyCli}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {copiedCli ? <Check className="h-3 w-3" /> : <Clipboard className="h-3 w-3" />}
                {copiedCli ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <code className="mt-3 block rounded-lg border border-primary/10 bg-primary/5 px-4 py-2.5 text-xs font-mono text-foreground">
              {cliCommand}
            </code>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Requires <a href="https://ui.shadcn.com/docs/cli" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">shadcn CLI</a>. Auto-installs deps and copies the component into your project.
            </p>
          </div>

          {/* Manual Install (Secondary) */}
          {item.dependencies.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                <Package className="h-3.5 w-3.5 text-primary" />
                Manual Install
              </div>
              <code className="mt-3 block rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-mono text-foreground">
                {installLine}
              </code>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Then copy the source code below into your project.
              </p>
            </div>
          )}

          {/* Usage */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              <Clipboard className="h-3.5 w-3.5 text-primary" />
              Usage
            </div>
            <code className="mt-3 block rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-mono text-foreground">
              {item.usage}
            </code>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Source</p>
              <button
                type="button"
                onClick={copyCode}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {copied ? <Check className="h-3 w-3" /> : <Clipboard className="h-3 w-3" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="mt-3 max-h-96 overflow-auto rounded-lg border border-border bg-background p-4 text-xs font-mono text-foreground">
              {displayCode}
            </pre>
          </div>
        </div>

        {/* Dependencies list */}
        {item.dependencies.length > 0 && (
          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Dependencies
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.dependencies.map((dep) => (
                <span
                  key={dep}
                  className="rounded-lg border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {dep}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
