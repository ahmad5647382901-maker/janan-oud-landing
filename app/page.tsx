"use client";

import { lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";

const ScentSection = lazy(
() => import("@/components/sections/ScentSection")
);

const FinalRevealSection = lazy(
() => import("@/components/sections/FinalRevealSection")
);

export default function Home() {
const { scrollYProgress } = useScroll();

const heroOpacity = useTransform(
scrollYProgress,
[0, 0.2],
[1, 0]
);

const heroY = useTransform(
scrollYProgress,
[0, 0.2],
[0, -40]
);

return (
<main className="relative min-h-screen overflow-x-hidden bg-black">
<Navigation />

  {/* HERO */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-black">

    <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-950" />

    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

    <motion.div
      style={{
        opacity: heroOpacity,
        y: heroY,
      }}
      className="relative z-10 w-full max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-left"
        >
          <div className="mb-6">
            <span className="font-serif text-5xl md:text-6xl text-amber-400 tracking-[0.2em]">
              J.
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
            JANAN OUD
          </h1>

          <p className="mt-5 text-[10px] md:text-xs text-amber-200/60 tracking-[0.3em] uppercase">
            Eau de Parfum • 30 ML / 100 ML
          </p>

          <p className="mt-6 max-w-md text-sm md:text-base text-amber-100/70 font-light leading-relaxed">
            A fragrance of depth, warmth and character.
          </p>

          <a
            href="#fragrance"
            className="inline-block mt-8 px-8 py-3.5 border border-amber-400/40 text-amber-400 text-[10px] tracking-[0.2em] uppercase hover:bg-amber-400/10 transition-all duration-500"
          >
            Explore the Fragrance
          </a>
        </motion.div>

        {/* HERO BOTTLE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex justify-center"
        >
          <div className="relative w-[72vw] max-w-sm md:max-w-md">

            <div className="absolute inset-0 bg-amber-900/10 blur-3xl" />

            <Image
              src="/images/Gemini_Generated_Image_isrej8isrej8isre.jpeg"
              alt="JANAN OUD perfume bottle by J."
              width={500}
              height={750}
              priority
              quality={95}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 72vw, 35vw"
            />

          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* SCROLL */}
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20">
      <div className="flex flex-col items-center gap-3">
        <div className="w-px h-9 bg-gradient-to-b from-amber-400/60 to-transparent" />

        <span className="text-[8px] text-white/35 tracking-[0.3em] uppercase">
          Scroll
        </span>
      </div>
    </div>

  </section>

  {/* SHORT PRODUCT STORY */}
  <section className="relative min-h-[65vh] flex items-center px-6 py-20 bg-black overflow-hidden">

    <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

    <div className="relative z-10 w-full max-w-5xl mx-auto">

      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* CHARACTER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-amber-400/70 text-[10px] tracking-[0.35em] uppercase mb-5">
            The Character
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight">
            Designed to leave a mark.
          </h2>
        </motion.div>

        {/* PRODUCT DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="text-sm md:text-base text-amber-100/60 font-light leading-7"
        >
          <p>
            JANAN OUD brings together bright citrus freshness,
            warm spices and a deep woody-musky character.
          </p>

          {/* DETAILS */}
          <div className="mt-7 space-y-3">

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-amber-400/60 text-[10px] uppercase tracking-wider">
                Type
              </span>

              <span className="text-white/70">
                Eau de Parfum
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-amber-400/60 text-[10px] uppercase tracking-wider">
                Character
              </span>

              <span className="text-white/70">
                Citrus / Spicy / Woody
              </span>
            </div>

          </div>

          {/* PRICING */}
          <div className="mt-8">
            <p className="text-amber-400/60 text-[9px] tracking-[0.3em] uppercase mb-4">
              Available Sizes
            </p>

            <div className="grid grid-cols-2 gap-3">

              <div className="border border-white/10 px-4 py-4">
                <p className="text-white/45 text-[9px] tracking-[0.2em] uppercase">
                  30 ML
                </p>

                <p className="mt-2 font-serif text-xl text-amber-400">
                  PKR 2,800
                </p>
              </div>

              <div className="border border-amber-400/20 px-4 py-4">
                <p className="text-white/45 text-[9px] tracking-[0.2em] uppercase">
                  100 ML
                </p>

                <p className="mt-2 font-serif text-xl text-amber-400">
                  PKR 7,300
                </p>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </div>
  </section>

  {/* FRAGRANCE + FINAL REVEAL */}
  <Suspense fallback={null}>
    <ScentSection />
    <FinalRevealSection />
  </Suspense>

</main>

);
}
