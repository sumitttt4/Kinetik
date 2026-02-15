'use client';

import { DynamicIsland } from '@/app/components/dynamic-island';
import { FluidTabs } from '@/app/components/fluid-tabs';
import { MorphingDialog } from '@/app/components/morphing-dialog';
import { MagnetButton } from '@/app/components/magnet-button';
import { InfiniteScrollColumn } from '@/app/components/infinite-scroll-column';
import { FloatingToolbar } from '@/app/components/floating-toolbar';
import { PulseBadge } from '@/app/components/pulse-badge';
import { ShimmerText } from '@/app/components/shimmer-text';
import { TiltCard } from '@/app/components/tilt-card';
import { ToggleSwitch } from '@/app/components/toggle-switch';
import { RippleButton } from '@/app/components/ripple-button';
import { AnimatedCounter } from '@/app/components/animated-counter';
import { BreathingGlow } from '@/app/components/breathing-glow';
import { StaggerList } from '@/app/components/stagger-list';
import { FlipCard } from '@/app/components/flip-card';
import { ElasticDrawer } from '@/app/components/elastic-drawer';
import { AnimatedToast } from '@/app/components/animated-toast';
import { SkeletonLoader } from '@/app/components/skeleton-loader';
import { HoverCard } from '@/app/components/hover-card';
import { AnimatedAccordion } from '@/app/components/animated-accordion';
import { CommandPalette } from '@/app/components/command-palette';
import { DragReorder } from '@/app/components/drag-reorder';
import { AnimatedProgress } from '@/app/components/animated-progress';
import { TypewriterText } from '@/app/components/typewriter-text';
import { ScrollReveal } from '@/app/components/scroll-reveal';
import { ConfettiButton } from '@/app/components/confetti-button';
import { NewsletterCard } from '@/app/components/newsletter-card';

export const previewMap: Record<string, React.ReactNode> = {
  'dynamic-island': <DynamicIsland />,
  'fluid-tabs': <FluidTabs />,
  'morphing-dialog': <MorphingDialog />,
  'magnet-button': <MagnetButton />,
  'infinite-scroll-columns': <InfiniteScrollColumn />,
  'floating-toolbar': <FloatingToolbar />,
  'pulse-badge': <PulseBadge />,
  'shimmer-text': <ShimmerText />,
  'tilt-card': <TiltCard />,
  'toggle-switch': <ToggleSwitch />,
  'ripple-button': <RippleButton />,
  'animated-counter': <AnimatedCounter />,
  'breathing-glow': <BreathingGlow />,
  'stagger-list': <StaggerList />,
  'flip-card': <FlipCard />,
  'elastic-drawer': <ElasticDrawer />,
  'animated-toast': <AnimatedToast />,
  'skeleton-loader': <SkeletonLoader />,
  'hover-card': <HoverCard />,
  'animated-accordion': <AnimatedAccordion />,
  'command-palette': <CommandPalette />,
  'drag-reorder': <DragReorder />,
  'animated-progress': <AnimatedProgress />,
  'typewriter-text': <TypewriterText />,
  'scroll-reveal': <ScrollReveal />,
  'confetti-button': <ConfettiButton />,
  'newsletter-card': <NewsletterCard />,
};
