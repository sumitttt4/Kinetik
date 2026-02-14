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
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Component Registry</h1>
      <p className="mt-2 text-sm text-muted-foreground md:text-base">Searchable component catalog for copy-paste usage.</p>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search component"
          className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="all">All</option>
          <option value="hero">Hero</option>
          <option value="motion">Motion</option>
          <option value="input">Input</option>
        </select>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <Link key={item.slug} href={`/registry/${item.slug}`} className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-accent/40">
            <p className="text-base font-semibold tracking-tight text-foreground">{item.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            <span className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-primary">{item.category}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
