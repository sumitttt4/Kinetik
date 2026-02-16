'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Palette, Maximize2, Sun } from 'lucide-react';

/* ─── Tailwind Color Palette ─── */
const COLORS = [
    { name: 'slate', hex: '#64748b', shades: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617' } },
    { name: 'gray', hex: '#6b7280', shades: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827', 950: '#030712' } },
    { name: 'zinc', hex: '#71717a', shades: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b' } },
    { name: 'red', hex: '#ef4444', shades: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a' } },
    { name: 'orange', hex: '#f97316', shades: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12', 950: '#431407' } },
    { name: 'amber', hex: '#f59e0b', shades: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f', 950: '#451a03' } },
    { name: 'yellow', hex: '#eab308', shades: { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12', 950: '#422006' } },
    { name: 'lime', hex: '#84cc16', shades: { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314', 950: '#1a2e05' } },
    { name: 'green', hex: '#22c55e', shades: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' } },
    { name: 'emerald', hex: '#10b981', shades: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', 950: '#022c22' } },
    { name: 'teal', hex: '#14b8a6', shades: { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e' } },
    { name: 'cyan', hex: '#06b6d4', shades: { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63', 950: '#083344' } },
    { name: 'sky', hex: '#0ea5e9', shades: { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e', 950: '#082f49' } },
    { name: 'blue', hex: '#3b82f6', shades: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' } },
    { name: 'indigo', hex: '#6366f1', shades: { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b' } },
    { name: 'violet', hex: '#8b5cf6', shades: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065' } },
    { name: 'purple', hex: '#a855f7', shades: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764' } },
    { name: 'fuchsia', hex: '#d946ef', shades: { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75', 950: '#4a044e' } },
    { name: 'pink', hex: '#ec4899', shades: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#500724' } },
    { name: 'rose', hex: '#f43f5e', shades: { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337', 950: '#4c0519' } },
] as const;

const WIDTH_OPTIONS = [
    { label: 'sm', value: 'max-w-xs' },
    { label: 'md', value: 'max-w-md' },
    { label: 'lg', value: 'max-w-lg' },
    { label: 'full', value: 'max-w-full' },
] as const;

const SHADOW_OPTIONS = [
    { label: 'none', value: 'shadow-none' },
    { label: 'sm', value: 'shadow-sm' },
    { label: 'md', value: 'shadow-md' },
    { label: 'lg', value: 'shadow-lg' },
    { label: 'xl', value: 'shadow-xl' },
    { label: '2xl', value: 'shadow-2xl' },
] as const;

export type CustomizerState = {
    colorName: string;
    colorHex: string;
    shade: number;
    widthClass: string;
    shadowClass: string;
};

type Props = {
    onChange: (state: CustomizerState) => void;
};

export function ComponentCustomizer({ onChange }: Props) {
    const [selectedColor, setSelectedColor] = useState('blue');
    const [selectedShade, setSelectedShade] = useState<number>(500);
    const [expandedColor, setExpandedColor] = useState<string | null>(null);
    const [width, setWidth] = useState('max-w-md');
    const [shadow, setShadow] = useState('shadow-md');

    const getColor = (name: string) => COLORS.find((c) => c.name === name)!;

    const emitChange = (colorName: string, shade: number, w: string, s: string) => {
        const color = getColor(colorName);
        const hex = color.shades[shade as keyof typeof color.shades] || color.hex;
        onChange({ colorName, colorHex: hex, shade, widthClass: w, shadowClass: s });
    };

    const handleColorClick = (name: string) => {
        if (expandedColor === name) {
            setExpandedColor(null);
        } else {
            setExpandedColor(name);
        }
        setSelectedColor(name);
        setSelectedShade(500);
        emitChange(name, 500, width, shadow);
    };

    const handleShadeClick = (name: string, shade: number) => {
        setSelectedColor(name);
        setSelectedShade(shade);
        emitChange(name, shade, width, shadow);
    };

    const handleWidthChange = (value: string) => {
        setWidth(value);
        emitChange(selectedColor, selectedShade, value, shadow);
    };

    const handleShadowChange = (value: string) => {
        setShadow(value);
        emitChange(selectedColor, selectedShade, width, value);
    };

    return (
        <div className="rounded-xl border border-border bg-card p-4 space-y-4">
            {/* Color Palette */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Palette className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Color
                    </span>
                    <span className="ml-auto rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                        {selectedColor}-{selectedShade}
                    </span>
                </div>
                {/* Main swatches */}
                <div className="flex flex-wrap gap-1.5">
                    {COLORS.map((color) => (
                        <button
                            key={color.name}
                            type="button"
                            onClick={() => handleColorClick(color.name)}
                            title={color.name}
                            className={cn(
                                'h-7 w-7 rounded-lg border-2 transition-all hover:scale-110',
                                selectedColor === color.name
                                    ? 'border-foreground ring-2 ring-foreground/20 scale-110'
                                    : 'border-transparent'
                            )}
                            style={{ backgroundColor: color.hex }}
                        />
                    ))}
                </div>
                {/* Expanded shade row */}
                {expandedColor && (
                    <div className="mt-3 flex items-center gap-1 overflow-x-auto pb-1">
                        <span className="mr-2 shrink-0 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            {expandedColor}
                        </span>
                        {Object.entries(getColor(expandedColor).shades).map(([shade, hex]) => (
                            <button
                                key={shade}
                                type="button"
                                onClick={() => handleShadeClick(expandedColor, Number(shade))}
                                title={`${expandedColor}-${shade}`}
                                className={cn(
                                    'h-6 w-6 shrink-0 rounded-md border-2 transition-all hover:scale-110',
                                    selectedColor === expandedColor && selectedShade === Number(shade)
                                        ? 'border-foreground ring-2 ring-foreground/20 scale-110'
                                        : 'border-transparent'
                                )}
                                style={{ backgroundColor: hex }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Width + Shadow — Stacked */}
            <div className="space-y-4 pt-2 border-t border-border/50">
                {/* Width */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Maximize2 className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Width
                        </span>
                    </div>
                    <div className="flex w-full gap-1 rounded-lg border border-border bg-muted/30 p-1">
                        {WIDTH_OPTIONS.map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => handleWidthChange(opt.value)}
                                className={cn(
                                    'flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-all',
                                    width === opt.value
                                        ? 'bg-background text-foreground shadow-sm ring-1 ring-border'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                                )}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Shadow */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Sun className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Shadow
                        </span>
                    </div>
                    <div className="flex w-full gap-1 rounded-lg border border-border bg-muted/30 p-1">
                        {SHADOW_OPTIONS.map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => handleShadowChange(opt.value)}
                                className={cn(
                                    'flex-1 rounded-md px-1 py-1.5 text-[10px] font-medium transition-all',
                                    shadow === opt.value
                                        ? 'bg-background text-foreground shadow-sm ring-1 ring-border'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                                )}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
