import { notFound } from 'next/navigation';
import { getRegistryItem } from '@/lib/registry';

export default function RegistryDetailPage({ params }: { params: { slug: string } }) {
  const item = getRegistryItem(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-12 md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{item.name}</h1>
      <p className="mt-2 text-sm text-muted-foreground md:text-base">{item.description}</p>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm text-foreground">
        <p className="font-semibold tracking-tight">Install</p>
        <code className="mt-1 block rounded-md border border-border bg-background px-3 py-2 text-xs">pnpm add {item.dependencies.join(' ') || 'no extra dependencies required'}</code>
        <p className="mt-4 font-semibold tracking-tight">Usage</p>
        <code className="mt-1 block rounded-md border border-border bg-background px-3 py-2 text-xs">{item.usage}</code>
      </div>

      <pre className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card p-4 text-xs text-foreground">{item.code}</pre>
    </main>
  );
}
