'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { registry } from '@/lib/registry';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { cn } from '@/lib/utils';

const categories = ['all', 'hero', 'motion', 'input', 'feedback', 'overlay'] as const;

export default function RegistryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');

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
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:pt-36">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Registry
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Component Library
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Browse {registry.length} production-ready animated components.
            Copy the code and drop it into your project.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components..."
              className="h-10 w-full rounded-xl border border-input bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-1 rounded-xl border border-border bg-card p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors',
                  category === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/registry/${item.slug}`}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-md border border-primary/15 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {item.category}
                </span>
                {item.dependencies.length > 0 && (
                  <span className="text-[10px] text-muted-foreground">
                    {item.dependencies.length} dep{item.dependencies.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">No components match your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
