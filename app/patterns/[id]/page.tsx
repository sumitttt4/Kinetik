'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { PATTERNS, getFavorites, toggleFavorite } from '@/lib/store';
import { PatternRenderer } from '@/components/patterns/pattern-renderer';
import { Header } from '@/components/layout/header';
import { Pattern } from '@/types';
import Link from 'next/link';
import { 
  Star,
  Sun,
  Moon,
  Copy,
  Check,
  Play,
  Pause,
  LayoutGrid,
  Sparkles,
  Layers,
  Info,
  BarChart3,
  Trophy,
  PanelBottom,
} from 'lucide-react';
import { Label, Select } from '@/components/ui/elements';

const CATEGORIES = [
  { id: 'heroes', label: 'Heroes', icon: <Sparkles className="h-3.5 w-3.5" /> },
  { id: 'sections', label: 'Sections', icon: <Layers className="h-3.5 w-3.5" /> },
  { id: 'data-display', label: 'Data Display', icon: <BarChart3 className="h-3.5 w-3.5" /> },
  { id: 'social-proof', label: 'Social Proof', icon: <Trophy className="h-3.5 w-3.5" /> },
  { id: 'footers', label: 'Footers', icon: <PanelBottom className="h-3.5 w-3.5" /> },
];

// Map each category to its first pattern for navigation
const CATEGORY_DEFAULTS: Record<string, string> = {
  'heroes': 'enterprise-hero',
  'sections': 'technical-feature-grid',
  'data-display': 'dashboard-header',
  'social-proof': 'social-proof',
  'footers': 'production-footer',
};

interface Props {
  params: Promise<{ id: string }>;
}

export default function PatternCustomizerPage({ params }: Props) {
  const resolvedParams = React.use(params);
  const patternId = resolvedParams.id;

  const { theme, setTheme } = useTheme();
  const [pattern, setPattern] = React.useState<Pattern | null>(null);
  const searchQuery = '';
  const [activeRightTab, setActiveRightTab] = React.useState<'customize' | 'layers'>('layers');
  const [activeCodeTab, setActiveCodeTab] = React.useState<'react' | 'html' | 'css' | 'tailwind'>('react');
  
  const [customVals, setCustomVals] = React.useState<Record<string, string | number>>({});
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [copiedText, setCopiedText] = React.useState(false);
  const [isFavorited, setIsFavorited] = React.useState(false);

  React.useEffect(() => {
    if (!patternId) return;
    const item = PATTERNS.find(p => p.id === patternId);
    if (item) {
      setPattern(item);
      const defaults: Record<string, string | number> = {};
      item.controls.forEach(c => { defaults[c.key] = c.defaultValue; });
      setCustomVals(defaults);
      const favorites = getFavorites();
      setIsFavorited(favorites.includes(item.id));
    }
  }, [patternId]);

  if (!pattern) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center font-mono text-neutral-400">
        <span className="text-sm font-semibold mb-4">Pattern not found</span>
        <Link href="/" className="text-xs text-[#FF6B35] hover:underline">Back home</Link>
      </div>
    );
  }

  const selectPatternById = (id: string) => {
    const item = PATTERNS.find(p => p.id === id);
    if (item) {
      setPattern(item);
      const defaults: Record<string, string | number> = {};
      item.controls.forEach(c => { defaults[c.key] = c.defaultValue; });
      setCustomVals(defaults);
      const favorites = getFavorites();
      setIsFavorited(favorites.includes(item.id));
      window.history.pushState({}, '', `/patterns/${id}`);
    }
  };

  const handleControlChange = (key: string, value: string | number) => {
    setCustomVals(prev => ({ ...prev, [key]: value }));
  };

  const handleToggleFavorite = () => {
    const list = toggleFavorite(pattern.id);
    setIsFavorited(list.includes(pattern.id));
  };

  const getDynamicCode = () => {
    return pattern.codeTemplates[activeCodeTab];
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getDynamicCode());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const filteredSidebarPatterns = PATTERNS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-[#171717] dark:bg-black dark:text-neutral-400 flex flex-col selection:bg-[#FF6B35]/20 selection:text-[#FF6B35] font-sans antialiased relative overflow-x-hidden transition-colors duration-300">
      
      {/* Noise overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.012] bg-repeat z-[100]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative w-full max-w-[1240px] mx-auto border-x border-neutral-200/80 dark:border-neutral-900 flex flex-col flex-1 z-10 bg-white dark:bg-black min-h-screen">
        <Header />

        {/* ═══ MAIN LAYOUT ═══ */}
        <div className="flex-1 flex flex-col md:flex-row w-full relative items-stretch">
        
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-52 border-r border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black shrink-0 p-4 space-y-6 flex flex-col justify-between transition-colors">
          <div className="space-y-5">
            <div className="space-y-0.5">
              <span className="block text-[8px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-wider font-mono px-2 mb-1.5 text-left">PATTERNS</span>
              <Link href="/patterns" className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] font-semibold bg-neutral-100 dark:bg-white/5 text-[#171717] dark:text-white">
                <LayoutGrid className="h-3.5 w-3.5 text-[#FF6B35]" /> All Patterns
              </Link>
            </div>

            <div className="space-y-0.5">
              <span className="block text-[8px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-wider font-mono px-2 mb-1.5 text-left">CATEGORIES</span>
              {CATEGORIES.map((cat) => {
                const isSelected = pattern.category === cat.id;
                return (
                  <button 
                    key={cat.id} 
                    onClick={() => {
                      const targetId = CATEGORY_DEFAULTS[cat.id] || PATTERNS[0].id;
                      selectPatternById(targetId);
                    }}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] font-semibold transition-colors ${
                      isSelected ? 'bg-neutral-100 dark:bg-white/5 text-[#FF6B35] font-bold' : 'text-neutral-500 hover:text-[#171717] dark:hover:text-neutral-300'
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Pattern list within current category */}
            <div className="space-y-0.5">
              <span className="block text-[8px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-wider font-mono px-2 mb-1.5 text-left">
                {pattern.category.toUpperCase().replace('-', ' ')}
              </span>
              {PATTERNS.filter(p => p.category === pattern.category).map((p) => (
                <button
                  key={p.id}
                  onClick={() => selectPatternById(p.id)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] font-semibold transition-colors text-left ${
                    p.id === pattern.id ? 'bg-neutral-100 dark:bg-white/5 text-[#171717] dark:text-white' : 'text-neutral-500 hover:text-[#171717] dark:hover:text-neutral-300'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] shrink-0" />
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CANVAS */}
        <main className="flex-1 bg-white dark:bg-black p-5 lg:p-6 space-y-5 flex flex-col justify-between min-w-0 transition-colors">
          <div className="space-y-5">
            {/* Breadcrumb + title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-900 pb-4">
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-400 dark:text-neutral-600">
                  <Link href="/" className="hover:text-[#FF6B35]">Home</Link>
                  <span>&gt;</span>
                  <span>{pattern.category.toUpperCase().replace('-', ' ')}</span>
                  <span>&gt;</span>
                  <span className="text-[#171717] dark:text-neutral-400">{pattern.name}</span>
                </div>
                <h1 className="text-xl font-bold text-[#171717] dark:text-white tracking-tight">{pattern.name}</h1>
                <p className="text-[11px] text-neutral-500 leading-relaxed max-w-lg">{pattern.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={handleToggleFavorite}
                  className={`px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-900 text-[11px] font-semibold flex items-center gap-1.5 transition-colors ${
                    isFavorited ? 'text-[#FF6B35] bg-[#FF6B35]/5 border-[#FF6B35]/30' : 'text-neutral-500 hover:text-[#171717] dark:hover:text-white'
                  }`}>
                  <Star className={`h-3.5 w-3.5 ${isFavorited ? 'fill-current' : ''}`} /> Favorite
                </button>
                <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-600">{pattern.inspiredBy}</span>
              </div>
            </div>

            {/* ═══ LIVE CANVAS — Full Production Section Preview ═══ */}
            <div className="relative w-full h-[480px] rounded-xl border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black overflow-hidden">
              <PatternRenderer
                patternId={pattern.id}
                customVals={customVals}
                className="absolute inset-0 w-full h-full"
                animate={isPlaying}
              />

              {/* Bottom controls bar */}
              <div className="absolute bottom-0 left-0 right-0 h-7 border-t border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-between px-3 z-20">
                <span className="text-[8px] font-mono text-neutral-400 dark:text-neutral-600">
                  {pattern.id} · {pattern.layers.length} layers
                </span>
                <div className="flex items-center gap-1">
                  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-1 rounded text-neutral-400 dark:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors">
                    {theme === 'dark' ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
                  </button>
                  <div className="w-px h-3 bg-neutral-200 dark:bg-neutral-800 mx-0.5" />
                  <button onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded text-neutral-400 dark:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors">
                    {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related patterns */}
          <div className="space-y-3 text-left pt-4 border-t border-neutral-200 dark:border-neutral-900">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">More Patterns</span>
              <Link href="/" className="text-[9px] font-mono text-neutral-400 dark:text-neutral-600 hover:text-[#FF6B35]">View all &rarr;</Link>
            </div>
            <div className="flex gap-3 flex-wrap pb-2">
              {filteredSidebarPatterns.filter(p => p.id !== pattern.id).map((p) => (
                <button key={p.id} onClick={() => selectPatternById(p.id)} className="shrink-0 w-36 text-left">
                  <div className="border border-neutral-200 dark:border-neutral-900 hover:border-[#FF6B35] rounded-md bg-white dark:bg-black overflow-hidden cursor-pointer transition-colors text-left">
                    <div className="h-16 relative bg-white dark:bg-black">
                      <PatternRenderer
                        patternId={p.id}
                        className="absolute inset-0"
                        animate={false}
                        isThumbnail={true}
                      />
                    </div>
                    <div className="p-2">
                      <h4 className="text-[9px] font-bold text-[#171717] dark:text-white truncate leading-tight">{p.name}</h4>
                      <span className="text-[7px] font-mono text-neutral-400 dark:text-neutral-600 uppercase">{p.category.replace('-', ' ')}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full md:w-72 border-l border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black shrink-0 p-4 space-y-5 flex flex-col justify-start transition-colors">
          
          {/* Tab switcher */}
          <div className="flex border-b border-neutral-200 dark:border-neutral-900 pb-0.5 text-[11px] font-semibold">
            <button onClick={() => setActiveRightTab('layers')}
              className={`pb-2 pr-5 border-b-2 transition-colors relative -bottom-[1px] ${
                activeRightTab === 'layers' ? 'border-[#FF6B35] text-[#171717] dark:text-white' : 'border-transparent text-neutral-400'
              }`}>
              How it works
            </button>
            <button onClick={() => setActiveRightTab('customize')}
              className={`pb-2 border-b-2 transition-colors relative -bottom-[1px] ${
                activeRightTab === 'customize' ? 'border-[#FF6B35] text-[#171717] dark:text-white' : 'border-transparent text-neutral-400'
              }`}>
              Customize
            </button>
          </div>

          {activeRightTab === 'customize' ? (
            <div className="space-y-4 text-left">
              {/* Dynamic controls */}
              {pattern.controls.length > 0 ? (
                pattern.controls.map((ctrl) => (
                  <div key={ctrl.key} className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <Label htmlFor={ctrl.key} className="font-semibold text-neutral-600 dark:text-neutral-400 uppercase text-[10px] tracking-wider">{ctrl.name}</Label>
                      <span className="font-mono text-[10px] text-[#FF6B35] font-bold">
                        {customVals[ctrl.key] !== undefined ? customVals[ctrl.key] : ctrl.defaultValue}
                        {ctrl.key.includes('Size') || ctrl.key === 'marginLeft' ? 'px' : ctrl.key.includes('Opacity') || ctrl.key.includes('opacity') ? '%' : ''}
                      </span>
                    </div>
                    {ctrl.type === 'slider' && (
                      <input
                        id={ctrl.key}
                        type="range"
                        min={ctrl.min}
                        max={ctrl.max}
                        step={ctrl.step}
                        value={customVals[ctrl.key] !== undefined ? customVals[ctrl.key] : ctrl.defaultValue}
                        onChange={(e) => handleControlChange(ctrl.key, Number(e.target.value))}
                        className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded appearance-none cursor-pointer accent-[#FF6B35]"
                      />
                    )}
                    {ctrl.type === 'select' && (
                      <Select
                        id={ctrl.key}
                        options={ctrl.options || []}
                        value={customVals[ctrl.key] !== undefined ? customVals[ctrl.key] : ctrl.defaultValue}
                        onChange={(e) => handleControlChange(ctrl.key, e.target.value)}
                        className="bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 text-[11px] font-semibold h-8 rounded text-[#171717] dark:text-white"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-[10px] text-neutral-500 font-mono">No customizable controls for this pattern.</p>
              )}
            </div>
          ) : (
            <div className="space-y-3 text-[11px] text-left leading-relaxed text-neutral-500">
              <div className="flex items-center gap-1.5 text-[#171717] dark:text-white font-bold border-b border-neutral-200 dark:border-neutral-900 pb-2">
                <Info className="h-4 w-4 text-[#FF6B35]" /> Design Layers
              </div>
              <p className="text-[10px] text-neutral-500 leading-relaxed">
                This pattern is composed of {pattern.layers.length} invisible design layers working together. None dominate — they make the content feel expensive.
              </p>
              <div className="relative border-l border-neutral-200 dark:border-neutral-800 pl-4 space-y-3">
                {pattern.layers.map((layer, idx) => {
                  const [layerName, ...rest] = layer.split(':');
                  const layerDesc = rest.join(':').trim();
                  return (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[18.5px] top-1 h-2 w-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black" />
                      <span className="block font-mono text-[8px] text-[#FF6B35] uppercase font-bold">{layerName}</span>
                      <p className="mt-0.5 text-neutral-600 dark:text-neutral-400 text-[10px]">{layerDesc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-900 text-[9px] font-mono text-neutral-500 space-y-1">
                <div className="flex justify-between"><span>Performance:</span><span className="text-[#171717] dark:text-neutral-400 text-right max-w-[140px] truncate">{pattern.performanceNotes}</span></div>
                <div className="flex justify-between"><span>Browser:</span><span className="text-[#171717] dark:text-neutral-400 text-right max-w-[140px] truncate">{pattern.browserSupport}</span></div>
              </div>
            </div>
          )}

          {/* Code exporter */}
          <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-900 flex-1 flex flex-col justify-end">
            <div className="flex border-b border-neutral-200 dark:border-neutral-900 text-[10px] font-mono">
              {(['react', 'html', 'css', 'tailwind'] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveCodeTab(tab)}
                  className={`pb-1.5 pr-3 border-b-2 capitalize transition-colors relative -bottom-[1px] ${
                    activeCodeTab === tab ? 'border-[#FF6B35] text-[#171717] dark:text-white font-bold' : 'border-transparent text-neutral-400 hover:text-[#171717] dark:hover:text-white'
                  }`}>
                  {tab === 'react' ? 'React' : tab === 'html' ? 'HTML' : tab === 'css' ? 'CSS' : 'Tailwind'}
                </button>
              ))}
            </div>

            <div className="relative bg-white dark:bg-black border border-neutral-200 dark:border-neutral-900 rounded-md p-3 min-h-[140px] max-h-[200px] font-mono text-[9px] text-left overflow-hidden">
              <div className="whitespace-pre text-[#FF6B35] leading-relaxed overflow-hidden">
                {getDynamicCode()}
              </div>
              <button onClick={handleCopyCode}
                className="absolute top-2 right-2 p-1 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-white/5 border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-[#FF6B35] rounded transition-colors">
                {copiedText ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
);
}
