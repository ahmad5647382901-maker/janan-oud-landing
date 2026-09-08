"use client";

import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import BottleSection from "@/components/sections/BottleSection";
import ScentSection from "@/components/sections/ScentSection";
import DetailsSection from "@/components/sections/DetailsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import DiscoverSection from "@/components/sections/DiscoverSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,130,50,0.12),transparent_45%)]" />

        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-8 pt-20 md:flex-row md:gap-16">

          {/* Bottle */}
          <div className="relative flex w-full max-w-sm items-center justify-center md:max-w-md">
            <Image
              src="/images/Gemini_Generated_Image_pya2wfpya2wfpya2.jpeg"
              alt="JANAN OUD perfume bottle by J."
              width={600}
              height={900}
              priority
              quality={90}
              className="h-auto max-h-[58vh] w-auto max-w-[78vw] object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 78vw, 40vw"
            />
          </div>

          {/* Hero Text */}
          <div className="relative z-20 max-w-xl text-center md:text-left">
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/50">
              J. Fragrances
            </p>

            <h1 className="text-5xl font-light tracking-[0.15em] md:text-7xl lg:text-8xl">
              JANAN OUD
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 md:text-base">
              A signature of presence. Discover an unforgettable fragrance
              crafted for those who leave an impression.
            </p>

            <a
              href="https://www.junaidjamshed.com/products/janan-oud-30ml"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border border-white/20 px-7 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/60 hover:bg-white/5"
            >
              Discover Janan Oud
            </a>
          </div>
        </div>
      </section>

      <BottleSection />
      <ScentSection />
      <DetailsSection />
      <ExperienceSection />
      <DiscoverSection />
    </main>
  );
}
