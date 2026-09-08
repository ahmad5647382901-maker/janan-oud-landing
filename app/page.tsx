"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import LoadingScreen from "@/components/ui/LoadingScreen";
import BottleSection from "@/components/sections/BottleSection";
import ScentSection from "@/components/sections/ScentSection";
import DetailsSection from "@/components/sections/DetailsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import DiscoverSection from "@/components/sections/DiscoverSection";

const Hero3D = dynamic(() => import("@/components/3d/Hero3D"), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="relative h-screen overflow-hidden">
        <Hero3D usePlaceholder={true} />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/50">
              J. Fragrances
            </p>

            <h1 className="text-5xl font-light tracking-[0.15em] md:text-8xl">
              JANAN OUD
            </h1>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/60 md:text-base">
              A signature of presence. Discover an unforgettable fragrance
              crafted for those who leave an impression.
            </p>
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
