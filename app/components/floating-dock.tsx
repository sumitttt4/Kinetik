'use client';

import Link from 'next/link';
import { AnimatePresence, MotionValue, motion, useAnimationControls, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Bell, Compass, FolderKanban, House, Layers2, type LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { kinetikSpring } from '@/lib/motion';
import { cn } from '@/lib/utils';

const spring = kinetikSpring;

const BASE_ICON_SIZE = 42;
const MAX_ICON_BOOST = 32;
const SIGMA = 88;

type DockItem = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

const defaultItems: DockItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: House },
  { id: 'registry', label: 'Registry', href: '/registry', icon: FolderKanban },
  { id: 'layers', label: 'Layouts', href: '/registry', icon: Layers2 },
  { id: 'explore', label: 'Explore', href: '/registry', icon: Compass },
  { id: 'updates', label: 'Updates', href: '/registry', icon: Bell }
];

function gaussian(distance: number, sigma: number) {
  return Math.exp(-(distance * distance) / (2 * sigma * sigma));
}

function DockIcon({ item, mouseX }: { item: DockItem; mouseX: MotionValue<number> }) {
  const iconRef = useRef<HTMLAnchorElement | null>(null);
  const [centerX, setCenterX] = useState(0);
  const [hovered, setHovered] = useState(false);
  const bounceControls = useAnimationControls();

  useEffect(() => {
    const node = iconRef.current;
    if (!node) {
      return;
    }

    const updateCenter = () => {
      const rect = node.getBoundingClientRect();
      setCenterX(rect.left + rect.width / 2);
    };

    updateCenter();

    const observer = new ResizeObserver(updateCenter);
    observer.observe(node);
    window.addEventListener('resize', updateCenter);
    window.addEventListener('scroll', updateCenter, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateCenter);
      window.removeEventListener('scroll', updateCenter);
    };
  }, []);

  const dynamicSize = useTransform(mouseX, (value) => {
    if (!Number.isFinite(value)) {
      return BASE_ICON_SIZE;
    }

    const distance = value - centerX;
    return BASE_ICON_SIZE + MAX_ICON_BOOST * gaussian(distance, SIGMA);
  });

  const width = useSpring(dynamicSize, spring);
  const scale = useTransform(width, [BASE_ICON_SIZE, BASE_ICON_SIZE + MAX_ICON_BOOST], [1, 1.36]);
  const yOffset = useTransform(width, [BASE_ICON_SIZE, BASE_ICON_SIZE + MAX_ICON_BOOST], [0, -8]);
  const glow = useTransform(width, [BASE_ICON_SIZE, BASE_ICON_SIZE + MAX_ICON_BOOST], [0.14, 0.42]);
  const boxShadow = useMotionTemplate`inset 0 1px 0 0 rgba(255,255,255,0.14), 0 12px 30px -18px rgba(2,6,23,0.9), 0 0 0 1px rgba(255,255,255,${glow})`;

  return (
    <motion.div layout transition={spring} className="relative flex items-end justify-center">
      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={spring}
            className="absolute -top-11 whitespace-nowrap rounded-full border border-white/20 bg-[#070d22]/90 px-3 py-1 text-[11px] font-medium tracking-tight text-white"
          >
            {item.label}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layout
        transition={spring}
        animate={bounceControls}
        style={{ width, height: width, scale, y: yOffset, boxShadow }}
        className={cn(
          'relative rounded-2xl border border-white/10',
          'bg-[#070d22]/80 backdrop-blur-xl',
          'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_12px_30px_-18px_rgba(2,6,23,0.9)]'
        )}
      >
        <Link
          ref={iconRef}
          href={item.href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() =>
            bounceControls.start({
              y: [0, -12, 0],
              transition: spring
            })
          }
          className={cn(
            'group relative flex h-full w-full items-center justify-center rounded-2xl',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30'
          )}
        >
          <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={spring} className="grid place-items-center">
            <item.icon className="h-5 w-5 text-white/90" strokeWidth={2} />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function FloatingDock({ items = defaultItems }: { items?: DockItem[] }) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={spring}
        onMouseMove={(event) => mouseX.set(event.clientX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
      >
        <motion.div
          layout
          transition={spring}
          className={cn(
            'pointer-events-auto flex items-end gap-2 rounded-[1.35rem] border border-white/10 p-2.5 md:gap-2.5',
            'bg-[#070d22]/80 backdrop-blur-xl',
            'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_24px_50px_-30px_rgba(2,6,23,1)]'
          )}
        >
          {items.map((item) => (
            <DockIcon key={item.id} item={item} mouseX={mouseX} />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
