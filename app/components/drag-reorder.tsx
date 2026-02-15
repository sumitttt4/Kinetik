'use client';

import { useState } from 'react';
import { Reorder, useReducedMotion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

const initial = [
  { id: '1', label: 'Design tokens' },
  { id: '2', label: 'Spring config' },
  { id: '3', label: 'Layout system' },
  { id: '4', label: 'Accessibility' },
];

export function DragReorder() {
  const [items, setItems] = useState(initial);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-xs">
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="space-y-2"
      >
        {items.map((item, i) => (
          <Reorder.Item
            key={item.id}
            value={item}
            whileDrag={shouldReduceMotion ? {} : { scale: 1.03, boxShadow: '0 8px 25px -8px rgba(0,0,0,0.2)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="flex cursor-grab items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-2.5 active:cursor-grabbing"
          >
            <GripVertical className="h-4 w-4 shrink-0 text-muted-foreground/50" />
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold text-primary">
              {i + 1}
            </span>
            <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <p className="mt-3 text-center text-[10px] text-muted-foreground">
        Drag items to reorder
      </p>
    </div>
  );
}
