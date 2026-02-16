'use client';

import Link from 'next/link';
import { Github, Heart, Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/app/components/ui/button';

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
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Kinetik Logo" className="h-8 w-8" />
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">
              Kinetik
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/registry"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Components
            </Link>
            <Link
              href="/changelog"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Changelog
            </Link>
            {onCmdK && (
              <Button
                variant="outline"
                className="relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                onClick={onCmdK}
              >
                <span className="hidden lg:inline-flex">Search...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
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
              className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
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
