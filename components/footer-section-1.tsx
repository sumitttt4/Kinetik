"use client";

import React from "react";
import Link from "next/link";
import { Activity } from "lucide-react";
import { SocialCloud } from "@/components/social-cloud";
import { motion, Variants } from "motion/react";

export default function Footer1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 320,
        damping: 24,
      },
    },
  };

  return (
    <footer className="w-full py-12 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border-t border-neutral-200/80 dark:border-neutral-900 overflow-hidden relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        variants={containerVariants}
        className="container mx-auto px-4 flex flex-col items-center gap-10 mb-12 relative z-10"
      >
        {/* Kinetik Brand Logo */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group-hover:border-[#FF6B35] transition-colors">
              <Activity className="h-4.5 w-4.5 text-[#FF6B35]" />
            </div>
            <span className="font-mono font-extrabold text-base tracking-widest text-[#171717] dark:text-white uppercase">
              KINETIK
            </span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-mono tracking-wider font-semibold relative z-10"
        >
          {[
            { label: "Explorer", href: "/patterns" },
            { label: "Enterprise Hero", href: "/patterns/enterprise-hero" },
            { label: "Documentation", href: "https://github.com/sumitttt4/Kinetik#readme" },
            { label: "GitHub", href: "https://github.com/sumitttt4/Kinetik" },
            { label: "License", href: "https://github.com/sumitttt4/Kinetik/blob/main/LICENSE" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative px-3 py-1.5 rounded-md group text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-160 ease-out active:scale-[0.97]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.span
                className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 rounded-md -z-0"
                initial={{ scale: 0.95, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* Social Cloud */}
        <motion.div variants={itemVariants}>
          <SocialCloud className="text-neutral-800 dark:text-neutral-200" />
        </motion.div>
      </motion.div>

      {/* Decorative Diagonal Hatch Divider */}
      <motion.div
        className="w-full h-10 border-y border-neutral-200 dark:border-neutral-800 opacity-20 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
        style={{ backgroundSize: "10px 10px" }}
        initial={{ backgroundPositionX: "0%" }}
        whileInView={{ backgroundPositionX: "100%" }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 20,
        }}
      />

      {/* Copyright */}
      <motion.div
        className="container mx-auto px-4 mt-6 text-center text-[10px] font-mono text-neutral-500 dark:text-neutral-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <p>&copy; {new Date().getFullYear()} Kinetik. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
