'use client';

import Link from 'next/link';
import { Github, Heart, Search } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-border/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#070d22]/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative grid h-6 w-6 place-items-center rounded-full border border-foreground/20 bg-foreground/[0.04]">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="absolute inset-1 rounded-full border border-foreground/15" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">Kinetik</span>
          </Link>

          <nav className="hidden items-center gap-4 md:flex">
            <Link href="/registry" className="text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground">
              Docs
            </Link>
            <Link href="/registry" className="text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground">
              Components
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-9 items-center gap-2 rounded-lg border border-border bg-background/75 px-3 text-sm text-muted-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-colors hover:text-foreground md:inline-flex"
          >
            <Search className="h-4 w-4" />
            <span>Search docs...</span>
            <span className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">⌘K</span>
          </button>

          <Link
            href="https://github.com/sumitttt4/Kinetik"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center rounded-lg border border-border bg-background/80 text-sm md:inline-flex"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 text-foreground transition-colors hover:text-primary">
              <Github className="h-4 w-4" />
              <span className="font-medium tracking-tight">Star</span>
            </span>
            <span className="h-5 w-px bg-border" />
            <span className="px-2.5 text-xs font-semibold text-muted-foreground">1.2k</span>
          </Link>

          <button
            type="button"
            aria-label="Sponsor"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/75 text-muted-foreground transition-colors hover:text-pink-500"
          >
            <Heart className="h-4 w-4" />
          </button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
