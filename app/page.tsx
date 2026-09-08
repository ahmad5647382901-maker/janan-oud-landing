"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import LoadingScreen from "@/components/ui/LoadingScreen";

const BottleSection = lazy(
  () => import("@/components/sections/BottleSection")
);

const ScentSection = lazy(
  () => import("@/components/sections/ScentSection")
);

const DetailsSection = lazy(
  () => import("@/components/sections/DetailsSection")
);

const ExperienceSection = lazy(
  () => import("@/components/sections/ExperienceSection")
);

const DiscoverSection = lazy(
  () => import("@/components/sections/DiscoverSection")
);

const FinalRevealSection = lazy(
  () => import("@/components/sections/FinalRevealSection")
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1, 0]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -80]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-800" />

        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center"
          style={{
            opacity: heroOpacity,
            y: heroY,
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">

            {/* HERO TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-left order-1 md:order-1"
            >
              <div className="mb-6 md:mb-8">
                <span className="text-4xl md:text-6xl lg:text-7xl font-serif text-amber-400 tracking-[0.2em]">
                  J.
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 md:mb-6 tracking-tight leading-none">
                JANAN OUD
              </h1>

              <p className="text-xs md:text-sm text-amber-200/70 font-light tracking-[0.25em] uppercase mb-4 md:mb-6">
                Eau de Parfum • 30 ML / 100 ML
              </p>

              <p className="text-sm md:text-base text-amber-100/80 font-light leading-relaxed tracking-wide mb-8 md:mb-10 max-w-md">
                A fragrance of depth, warmth and character.
              </p>

              <a
                href="#discover"
                className="inline-block px-10 py-3.5 border border-amber-400/40 text-amber-400 text-xs tracking-[0.15em] uppercase hover:bg-amber-400/10 transition-all duration-500"
              >
                Discover the Fragrance
              </a>
            </motion.div>

            {/* HERO BOTTLE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center justify-center order-2 md:order-2 mt-8 md:mt-0"
            >
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">

                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent blur-2xl" />

                <Image
                  src="/images/Gemini_Generated_Image_isrej8isrej8isre.jpeg"
                  alt="JANAN OUD perfume bottle by J."
                  width={500}
                  height={750}
                  className="object-contain drop-shadow-2xl mx-auto relative z-10"
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 70vw, 35vw"
                />

              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 1.2,
          }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center space-y-3">

            <div className="w-px h-10 bg-gradient-to-b from-amber-400/60 to-transparent" />

            <span className="text-[9px] text-amber-100/50 tracking-[0.2em] uppercase">
              Scroll
            </span>

          </div>
        </motion.div>
      </section>

      {/* ALL SECTIONS */}
      <Suspense fallback={<LoadingScreen />}>

        <BottleSection />

        <ScentSection />

        <DetailsSection />

        <ExperienceSection />

        <DiscoverSection />

        {/* FINAL CINEMATIC REVEAL */}
        <FinalRevealSection />

      </Suspense>
    </main>
  );
}
