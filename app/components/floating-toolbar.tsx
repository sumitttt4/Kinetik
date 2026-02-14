'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Folder, Layers, Compass, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { id: 'opt1', icon: Home, label: 'Home' },
  { id: 'opt2', icon: Folder, label: 'Projects' },
  { id: 'opt3', icon: Layers, label: 'Stack' },
  { id: 'opt4', icon: Compass, label: 'Explore' },
  { id: 'opt5', icon: Bell, label: 'Notifications' },
];

export function FloatingToolbar() {
  const [active, setActive] = useState('opt1');
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-50/50 p-8 dark:bg-transparent transition-colors duration-300">
      <div className="relative flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-2 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
        {items.map((item) => {
          const isActive = active === item.id;
          const isHovered = hovered === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
                isActive ? "text-slate-50 dark:text-slate-900" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              )}
            >
              {/* Active Background - Morphing Pill */}
              {isActive && (
                <motion.div
                  layoutId="toolbar-active"
                  className="absolute inset-0 rounded-full bg-slate-900 dark:bg-slate-100"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}

              {/* Hover Background - Subtle scale */}
              {isHovered && !isActive && (
                <motion.div
                  layoutId="toolbar-hover"
                  className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                />
              )}

              {/* Icon */}
              <span className="relative z-10">
                 <item.icon className="h-5 w-5" />
              </span>
              
              {/* Tooltip (Optional, keeping it minimal as requested "less animation") */}
            </button>
          );
        })}
      </div>
    </div>
  );
}
