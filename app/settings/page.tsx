'use client';

import * as React from 'react';
import { Header } from '@/components/layout/header';
import { Card } from '@/components/ui/elements';
import { PATTERNS, getFavorites, toggleFavorite } from '@/lib/store';
import { Pattern } from '@/types';
import Link from 'next/link';
import { 
  Star, 
  Trash2, 
  ArrowLeft,
  Sliders
} from 'lucide-react';

export default function SettingsPage() {
  const [favoritesList, setFavoritesList] = React.useState<Pattern[]>([]);

  React.useEffect(() => {
    // Load favorites on mount
    const favIds = getFavorites();
    const favPatterns = PATTERNS.filter(p => favIds.includes(p.id));
    setFavoritesList(favPatterns);
  }, []);

  const handleRemoveFavorite = (id: string) => {
    const list = toggleFavorite(id);
    setFavoritesList(PATTERNS.filter(p => list.includes(p.id)));
  };

  const handleClearAllFavorites = () => {
    if (window.confirm('Are you sure you want to clear all your saved favorites?')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('kinetik_favorites_v1');
      }
      setFavoritesList([]);
      alert('All favorites deleted.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] dark:bg-black dark:text-neutral-400 flex flex-col selection:bg-[#FF6B35]/20 selection:text-[#FF6B35] font-sans antialiased relative transition-colors duration-300">
      
      {/* Noise overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.012] bg-repeat z-[100]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` 
        }} 
      />

      <Header />

      <main className="flex-1 mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8 z-10 text-left">
        {/* Header section */}
        <div className="border-b border-neutral-200 dark:border-neutral-900 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tight text-[#171717] dark:text-white">Your Saved Favorites</h1>
            <p className="text-xs text-[#78716C] dark:text-neutral-500 max-w-xl leading-relaxed">
              Manage your bookmarked visual patterns and layouts for quick customization access.
            </p>
          </div>
          <Link href="/patterns" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#78716C] dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to explorer
          </Link>
        </div>

        {favoritesList.length > 0 ? (
          <div className="space-y-6">
            {/* Clear All button */}
            <div className="flex justify-end">
              <button
                onClick={handleClearAllFavorites}
                className="px-3.5 py-1.5 border border-red-200 dark:border-red-900/60 bg-red-50/20 dark:bg-red-950/20 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-white rounded text-xs font-semibold shadow-sm transition-all"
              >
                Clear All Favorites
              </button>
            </div>

            {/* List of bookmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {favoritesList.map((pattern) => (
                <Card 
                  key={pattern.id}
                  className="p-5 border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black hover:border-neutral-300 dark:hover:border-neutral-800 transition-all flex flex-col justify-between h-48 relative overflow-hidden"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-[#FF6B35] font-mono uppercase tracking-wider bg-[#FF6B35]/5 px-2 py-0.5 rounded border border-[#FF6B35]/15">
                        {pattern.category}
                      </span>
                      <button 
                        onClick={() => handleRemoveFavorite(pattern.id)}
                        className="text-[#78716C] dark:text-neutral-600 hover:text-red-500 transition-colors p-1"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="text-sm font-bold text-[#171717] dark:text-white leading-tight">{pattern.name}</h3>
                    <p className="text-xs text-[#78716C] dark:text-neutral-500 line-clamp-2 leading-relaxed">
                      {pattern.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-900/60 flex items-center justify-between text-[10px] text-[#78716C] dark:text-neutral-500 font-mono">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Sliders className="h-3.5 w-3.5 stroke-[1.5]" /> {pattern.controls.length} knobs
                    </span>
                    <Link href={`/patterns/${pattern.id}`} className="text-[#FF6B35] font-bold flex items-center gap-1 hover:underline">
                      Customize &rarr;
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center border border-dashed border-neutral-200 dark:border-neutral-900 rounded-lg bg-white dark:bg-black space-y-3">
            <Star className="h-8 w-8 text-neutral-400 dark:text-neutral-700 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#171717] dark:text-white">No saved patterns</h3>
              <p className="text-xs text-[#78716C] dark:text-neutral-500">Go to the catalog and bookmark patterns to see them listed here.</p>
            </div>
            <Link
              href="/patterns"
              className="inline-block bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:hover:bg-[#EAEAE2] dark:text-[#171717] px-4 py-2 rounded-md text-xs font-bold shadow transition-all"
            >
              Browse Catalog
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
