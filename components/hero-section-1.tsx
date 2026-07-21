"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/text-effect";
import { AnimatedGroup } from "@/components/animated-group";
import CircularGallery from "@/components/circular-gallery";
import { Variants } from "motion/react";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
      y: 8,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  },
};

export default function HeroSection1() {
  const defaultItems = [
    {
      image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Behance-screen.png`,
      text: "Behance",
    },
    {
      image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Notion-screen.png`,
      text: "Notion",
    },
    {
      image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774806/One-screen.png`,
      text: "One",
    },
    {
      image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774807/Reddit-nj7hwh.png`,
      text: "Reddit",
    },
    {
      image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Behance-screen.png`,
      text: "Behance",
    },
    {
      image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Notion-screen.png`,
      text: "Notion",
    },
  ];

  return (
    <>
      <main className="z-10">
        <section>
          <div className="relative overflow-hidden pt-2 md:pt-4">
            {/* Constrained content for the hero text */}
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-all duration-200 ease-out active:scale-[0.98] dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Exclusive Curated UI Designs
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full transition-colors duration-200">
                      <div className="flex w-12 -translate-x-1/2 transition-transform duration-200 ease-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 dark:text-white text-black" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 dark:text-white text-black" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-6xl dark:text-white text-black md:text-7xl lg:mt-16 xl:text-[5.25rem] "
                >
                  The Ultimate Library of Curated UI Designs
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.2}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg dark:text-white/60 text-black"
                >
                  Explore hundreds of beautifully crafted user interfaces from
                  top designers around the world. Choose our handpicked gallery
                  of modern UI inspiration.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.04,
                          delayChildren: 0.35,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div key={1} className="">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-md px-5 text-base dark:bg-white bg-black transition-transform duration-160 ease-out active:scale-[0.97]"
                    >
                      <Link href="#link">
                        <span className="text-nowra dark:text-black text-white">
                          Browse Designs
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-md px-5 bg-foreground/10 transition-transform duration-160 ease-out active:scale-[0.97]"
                  >
                    <Link href="#link">
                      <span className="text-nowrap dark:text-white text-black">
                        Submit Your Work
                      </span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <div className="mt-12 w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
              <CircularGallery
                items={defaultItems}
                bend={-9}
                textColor="#ffffff"
                borderRadius={0.03}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
