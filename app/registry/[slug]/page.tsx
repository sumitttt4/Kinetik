import { notFound } from 'next/navigation';
import { getRegistryItem } from '@/lib/registry';

export default function RegistryDetailPage({ params }: { params: { slug: string } }) {
  const item = getRegistryItem(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-12 md:px-8">
      <h1 className="text-3xl font-bold text-slate-900">{item.name}</h1>
      <p className="mt-2 text-slate-600">{item.description}</p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-semibold">Install</p>
        <code className="mt-1 block">pnpm add {item.dependencies.join(' ') || 'no extra dependencies required'}</code>
        <p className="mt-4 font-semibold">Usage</p>
        <code className="mt-1 block">{item.usage}</code>
      </div>

      <pre className="mt-6 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-sky-100">{item.code}</pre>
    </main>
  );
}
