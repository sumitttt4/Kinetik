"use client";
import { ReactNode } from "react";
import { motion, Variants } from "motion/react";
import React from "react";

export type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: React.ElementType;
  asChild?: React.ElementType;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 8 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { filter: "blur(4px)" },
    visible: { filter: "blur(0px)" },
  },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 8 },
    visible: { filter: "blur(0px)", y: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 350, damping: 25 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 8 },
    },
  },
};

const mergeVariants = (
  defaultVariants: Variants,
  customVariants: Partial<Variants> = {},
): Variants => {
  return {
    hidden: {
      ...defaultVariants.hidden,
      ...customVariants.hidden,
    },
    visible: {
      ...defaultVariants.visible,
      ...customVariants.visible,
    },
  };
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset = "fade",
  as: Component = "div",
}: AnimatedGroupProps) {
  const MotionContainer = motion[Component as keyof typeof motion] as typeof motion.div;
  const MotionChild = motion.div;

  const presetVariant = preset ? presetVariants[preset] : {};
  const itemVariants = variants?.item
    ? mergeVariants(defaultItemVariants, variants.item)
    : mergeVariants(defaultItemVariants, presetVariant);

  const containerVariants = variants?.container || defaultContainerVariants;

  return (
    <MotionContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>
          {child}
        </MotionChild>
      ))}
    </MotionContainer>
  );
}

export { AnimatedGroup };
