'use client';

import Link from 'next/link';
import { Github, Heart, Twitter } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Components', href: '/registry' },
    { label: 'Documentation', href: '/registry' },
    { label: 'Changelog', href: '#' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/sumitttt4/Kinetik' },
    { label: 'Contributing', href: 'https://github.com/sumitttt4/Kinetik' },
    { label: 'Sponsor', href: 'https://buymeacoffee.com/sumitsharmq' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-primary">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-[15px] font-bold tracking-tight text-foreground">
                Kinetik
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Motion primitives for the modern web. Copy-paste, physics-driven
              components built with Framer Motion and Tailwind CSS.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Link
                href="https://github.com/sumitttt4/Kinetik"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://buymeacoffee.com/sumitsharmq"
                target="_blank"
                rel="noreferrer"
                aria-label="Sponsor"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-pink-500"
              >
                <Heart className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Product
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Community
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>MIT License. Built with Next.js, Framer Motion & Tailwind CSS.</p>
          <p>Designed by Kinetik contributors.</p>
        </div>
      </div>
    </footer>
  );
}
