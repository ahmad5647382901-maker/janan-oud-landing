"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import LoadingScreen from "@/components/ui/LoadingScreen";

const BottleSection = lazy(() => import("@/components/sections/BottleSection"));
const ScentSection = lazy(() => import("@/components/sections/ScentSection"));
const DetailsSection = lazy(() => import("@/components/sections/DetailsSection"));
const ExperienceSection = lazy(() => import("@/components/sections/ExperienceSection"));
const DiscoverSection = lazy(() => import("@/components/sections/DiscoverSection"));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -100]);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Navigation />
      
      {/* Premium Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Deep Luxury Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-800" />
        
        {/* Subtle Atmospheric Glow Behind Bottle */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-transparent" />
        
        {/* Ambient Haze Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        {/* Product Image Layer - JANAN OUD Bottle */}
        <motion.div 
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="relative w-full max-w-2xl md:max-w-3xl h-full flex items-center justify-center p-6 md:p-12">
            {/* Subtle glow behind bottle */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent blur-3xl" />
            
            {/* Main Product Image */}
            <div className="relative z-10">
              <Image
                src="/images/Gemini_Generated_Image_isrej8isrej8isre.jpeg"
                alt="JANAN OUD perfume bottle by J."
                width={700}
                height={1050}
                className="object-contain drop-shadow-2xl"
                priority
                quality={95}
                sizes="(max-width: 768px) 85vw, 45vw"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Premium Typography Layer */}
        <div className="relative z-20 text-center px-6 md:px-8 max-w-5xl mx-auto">
          {/* Brand Mark */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="text-5xl md:text-7xl lg:text-8xl font-serif text-amber-400 tracking-[0.2em]">
              J.
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 tracking-tight leading-none"
          >
            JANAN OUD
          </motion.h1>
          
          {/* Category Line */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs md:text-sm text-amber-200/70 font-light tracking-[0.25em] uppercase mb-4"
          >
            Eau de Parfum • 30 ML / 100 ML
          </motion.p>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-amber-100/80 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            A fragrance of depth, warmth and character.
          </motion.p>
          
          {/* Premium CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <a
              href="#discover"
              className="inline-block px-10 py-3.5 border border-amber-400/40 text-amber-400 text-xs tracking-[0.15em] uppercase hover:bg-amber-400/10 transition-all duration-500"
            >
              Discover the Fragrance
            </a>
          </motion.div>
        </div>
        
        {/* Sophisticated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="w-px h-10 bg-gradient-to-b from-amber-400/60 to-transparent" />
            <span className="text-[9px] text-amber-100/50 tracking-[0.2em] uppercase">Scroll</span>
          </div>
        </motion.div>
      </section>

      {/* Existing Content Sections - UNCHANGED */}
      <Suspense fallback={<LoadingScreen />}>
        <BottleSection />
        <ScentSection />
        <DetailsSection />
        <ExperienceSection />
        <DiscoverSection />
      </Suspense>
    </main>
  );
            }
