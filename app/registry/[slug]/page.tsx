import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clipboard, Package } from 'lucide-react';
import { getRegistryItem, registry } from '@/lib/registry';

export function generateStaticParams() {
  return registry.map((item) => ({ slug: item.slug }));
}

export default function RegistryDetailPage({ params }: { params: { slug: string } }) {
  const item = getRegistryItem(params.slug);

  if (!item) {
    notFound();
  }

  const installLine = item.dependencies.length
    ? `pnpm add ${item.dependencies.join(' ')}`
    : 'No additional dependencies required.';

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

        {/* Install */}
        <div className="mt-8 space-y-4">
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
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Source</p>
            <pre className="mt-3 max-h-96 overflow-auto rounded-lg border border-border bg-background p-4 text-xs font-mono text-foreground">
              {item.code}
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
