export type PatternCategory = 
  | 'heroes' 
  | 'sections' 
  | 'footers' 
  | 'data-display' 
  | 'social-proof';

export interface PatternControl {
  name: string;
  key: string;
  type: 'slider' | 'color' | 'select' | 'number';
  min?: number;
  max?: number;
  step?: number;
  defaultValue: string | number;
  options?: { value: string; label: string }[];
}

export interface Pattern {
  id: string;
  name: string;
  category: PatternCategory;
  description: string;
  inspiredBy: string;
  tags: string[];
  /** The invisible design primitives composing this production pattern */
  layers: string[];
  performanceNotes: string;
  browserSupport: string;
  controls: PatternControl[];
  codeTemplates: {
    react: string;
    tailwind: string;
    css: string;
    html: string;
  };
}
