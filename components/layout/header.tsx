'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, Activity } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <header className="border-b border-neutral-200/80 dark:border-neutral-900/80 bg-white/95 dark:bg-black/95 sticky top-0 z-50 transition-all backdrop-blur-md relative">
      {/* Subtle top red hairline accent rule */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B35]/40 to-transparent pointer-events-none" />

      <div className="w-full px-12 sm:px-14">
        <div className="flex h-14 items-center justify-between">
          
          {/* Logo and Brand (ProvenMetal Technical Typography) */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group-hover:border-[#FF6B35] transition-colors">
                <Activity className="h-4 w-4 text-[#FF6B35]" />
              </div>
              <span className="font-mono font-extrabold text-sm tracking-widest text-[#171717] dark:text-white uppercase">
                KINETIK
              </span>
            </Link>

            {/* Navigation links (Uppercase Monospace Tracking) */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/patterns"
                className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${
                  isActive('/patterns') 
                    ? 'text-[#FF6B35] font-bold' 
                    : 'text-[#78716C] dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                PATTERNS
              </Link>
              <Link
                href="/settings"
                className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${
                  isActive('/settings') 
                    ? 'text-[#FF6B35] font-bold' 
                    : 'text-[#78716C] dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                FAVORITES
              </Link>
              <a
                href="https://github.com/sumitttt4/Kinetik"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-mono tracking-widest uppercase text-[#78716C] dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors"
              >
                GITHUB
              </a>
            </nav>
          </div>

          {/* Right Section: Theme Toggle & ProvenMetal Style High-Impact CTA */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 text-[#78716C] dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </button>
            )}

            {/* ProvenMetal Style Red Accent CTA Button with Corner Brackets */}
            <Link
              href="/patterns"
              className="relative group bg-[#FF6B35] hover:bg-[#e05a2a] text-white px-4 py-2 text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-150 flex items-center gap-1.5 shadow-sm rounded-none"
            >
              {/* Corner marks */}
              <span className="absolute -top-1 -left-1 text-[8px] text-[#FF6B35] group-hover:text-white pointer-events-none">┌</span>
              <span className="absolute -top-1 -right-1 text-[8px] text-[#FF6B35] group-hover:text-white pointer-events-none">┐</span>
              <span className="absolute -bottom-1 -left-1 text-[8px] text-[#FF6B35] group-hover:text-white pointer-events-none">└</span>
              <span className="absolute -bottom-1 -right-1 text-[8px] text-[#FF6B35] group-hover:text-white pointer-events-none">┘</span>
              
              <span>↗ BROWSE PATTERNS</span>
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
}
