'use client';

import Link from 'next/link';
import { Github, Heart, Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onCmdK?: () => void;
}

export function Navbar({ onCmdK }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[70]">
      <div className="mx-auto max-w-6xl px-4 pt-4 md:px-6">
        <nav className="flex h-14 items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 shadow-sm backdrop-blur-xl dark:border-border/40 dark:bg-background/60">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-primary">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="text-[15px] font-bold tracking-tight text-foreground">
              Kinetik
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/registry"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Components
            </Link>
            <Link
              href="/changelog"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Changelog
            </Link>
            {onCmdK && (
              <button
                type="button"
                onClick={onCmdK}
                className="ml-1 flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Search…
                <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium">⌘K</kbd>
              </button>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            <Link
              href="https://github.com/sumitttt4/Kinetik"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://buymeacoffee.com/sumitsharmq"
              target="_blank"
              rel="noreferrer"
              aria-label="Sponsor"
              className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
            >
              <Heart className="h-4 w-4" />
            </Link>
            <div className="hidden h-4 w-px bg-border md:block" />
            <ModeToggle />

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            'mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-200 md:hidden',
            mobileOpen ? 'max-h-60 py-3 opacity-100' : 'max-h-0 border-transparent py-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-1 px-3">
            <Link
              href="/registry"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Components
            </Link>
            <Link
              href="/changelog"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Changelog
            </Link>
            <div className="my-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-3 py-1">
              <Link
                href="https://github.com/sumitttt4/Kinetik"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
