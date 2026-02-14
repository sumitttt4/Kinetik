'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { registry } from '@/lib/registry';

export default function RegistryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(
    () =>
      registry.filter(
        (item) =>
          (category === 'all' || item.category === category) &&
          item.name.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-12 md:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Component Registry</h1>
      <p className="mt-2 text-slate-600">Searchable component catalog for copy-paste usage.</p>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search component"
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
          <option value="all">All</option>
          <option value="hero">Hero</option>
          <option value="motion">Motion</option>
          <option value="input">Input</option>
        </select>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <Link key={item.slug} href={`/registry/${item.slug}`} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">{item.name}</p>
            <p className="mt-1 text-xs text-slate-600">{item.description}</p>
            <span className="mt-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[11px] text-sky-700">{item.category}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
