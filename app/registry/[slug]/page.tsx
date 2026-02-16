'use client';

import Link from 'next/link';
import { ArrowLeft, Clipboard, Package, Check } from 'lucide-react';
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
  const [realSource, setRealSource] = useState<string | null>(null);
  const [customizerState, setCustomizerState] = useState<CustomizerState>({
    colorName: 'blue',
    colorHex: '#3b82f6',
    shade: 500,
    widthClass: 'max-w-md',
    shadowClass: 'shadow-md',
  });

  if (!item) {
    router.push('/registry');
    return null;
  }

  // Fetch real source code from API
  useEffect(() => {
    fetch(`/api/source/${params.slug}`)
      .then((res) => res.json())
      .then((data) => setRealSource(data.source))
      .catch(() => setRealSource(item.code));
  }, [params.slug, item.code]);

  const displayCode = realSource || item.code;

  const installLine = item.dependencies.length
    ? `pnpm add ${item.dependencies.join(' ')}`
    : 'No additional dependencies required.';

  const preview = previewMap[item.slug];

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
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              <Package className="h-3.5 w-3.5 text-primary" />
              Install
            </div>
            <code className="mt-3 block rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-mono text-foreground">
              {installLine}
            </code>
          </div>

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
