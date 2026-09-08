"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

type OpacityRange = [number[], number[]];

type FragranceStageProps = {
  stage: "top" | "heart" | "base";
  title: string;
  notes: string[];
  scrollProgress: MotionValue<number>;
  opacityRange: OpacityRange;
  bgRange: OpacityRange;
};

const particles = [
  { left: "8%", delay: 0, duration: 7, size: 2 },
  { left: "18%", delay: 1.5, duration: 8, size: 3 },
  { left: "31%", delay: 0.8, duration: 6, size: 2 },
  { left: "46%", delay: 2, duration: 9, size: 2 },
  { left: "61%", delay: 1, duration: 7, size: 3 },
  { left: "74%", delay: 2.5, duration: 8, size: 2 },
  { left: "88%", delay: 0.5, duration: 6.5, size: 2 },
];

function FragranceStage({
  stage,
  title,
  notes,
  scrollProgress,
  opacityRange,
  bgRange,
}: FragranceStageProps) {
  const opacity = useTransform(
    scrollProgress,
    opacityRange[0],
    opacityRange[1]
  );

  const bgNumberOpacity = useTransform(
    scrollProgress,
    bgRange[0],
    bgRange[1]
  );

  const number =
    stage === "top" ? "01" : stage === "heart" ? "02" : "03";

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center px-6 md:px-10"
    >
      <motion.div
        style={{ opacity: bgNumberOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="font-serif text-[15rem] md:text-[25rem] lg:text-[32rem] leading-none text-amber-400/[0.04] select-none">
          {number}
        </span>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12">
          <p className="text-amber-400/70 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-4">
            {number} / {stage}
          </p>

          <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight">
            {title}
          </h3>
        </div>

        <div className="w-12 md:w-16 h-px bg-amber-400/40 mb-8 md:mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 md:gap-y-7 max-w-3xl">
          {notes.map((note) => (
            <div
              key={note}
              className="flex items-center border-b border-white/10 pb-4"
            >
              <span className="w-1 h-1 rounded-full bg-amber-400/70 mr-4 shrink-0" />

              <span className="text-sm md:text-base lg:text-lg text-amber-50/80 font-light tracking-wide">
                {note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AmbientParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-amber-200/30"
          style={{
            left: particle.left,
            bottom: "-10px",
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -150],
            opacity: [0, 0.45, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function ProgressIndicator({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const progressWidth = useTransform(
    scrollProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const progressOpacity = useTransform(
    scrollProgress,
    [0, 0.03, 0.97, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity: progressOpacity }}
      className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-30 w-32 md:w-48"
    >
      <div className="relative h-px bg-white/10 overflow-hidden">
        <motion.div
          style={{ width: progressWidth }}
          className="absolute left-0 top-0 h-px bg-amber-400/70"
        />
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-[8px] text-white/30 tracking-[0.2em] uppercase">
          Top
        </span>
        <span className="text-[8px] text-white/30 tracking-[0.2em] uppercase">
          Heart
        </span>
        <span className="text-[8px] text-white/30 tracking-[0.2em] uppercase">
          Base
        </span>
      </div>
    </motion.div>
  );
}

export default function ScentSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0]
  );

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.12],
    [0, -30]
  );

  const topNotes = [
    "Raspberry",
    "Saffron",
    "Clove Ozone Accord",
  ];

  const heartNotes = [
    "Lily of the Valley",
    "Rose",
    "Jasmine",
    "Geranium",
    "Tuberose",
    "Tea",
  ];

  const baseNotes = [
    "Musk",
    "Amber",
    "Agarwood",
    "Amyris",
    "Sandalwood",
    "Vanilla",
    "Moss",
    "Leather",
    "Nagarmotha",
    "Patchouli",
  ];

  return (
    <section
      id="fragrance"
      ref={sectionRef}
      className="relative min-h-[300vh] md:min-h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-b from-neutral-900 via-black to-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-black" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,120,30,0.06),transparent_55%)]" />

        <AmbientParticles />

        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-10 md:top-16 left-0 right-0 z-20 px-6 md:px-10 text-center"
        >
          <p className="text-amber-400/70 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">
            The Olfactory Journey
          </p>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight">
            THE FRAGRANCE
          </h2>

          <p className="mt-4 text-xs md:text-sm text-amber-100/50 tracking-[0.25em] uppercase">
            Citrus • Spicy • Woody • Musky
          </p>
        </motion.div>

        <div className="absolute inset-0">
          <FragranceStage
            stage="top"
            title="TOP NOTES"
            notes={topNotes}
            scrollProgress={scrollYProgress}
            opacityRange={[
              [0, 0.28, 0.38, 1],
              [1, 1, 0, 0],
            ]}
            bgRange={[
              [0, 0.28],
              [0.15, 0],
            ]}
          />

          <FragranceStage
            stage="heart"
            title="HEART NOTES"
            notes={heartNotes}
            scrollProgress={scrollYProgress}
            opacityRange={[
              [0, 0.28, 0.38, 0.62, 0.72, 1],
              [0, 0, 1, 1, 0, 0],
            ]}
            bgRange={[
              [0.28, 0.5],
              [0, 0.15],
            ]}
          />

          <FragranceStage
            stage="base"
            title="BASE NOTES"
            notes={baseNotes}
            scrollProgress={scrollYProgress}
            opacityRange={[
              [0, 0.62, 0.72, 1],
              [0, 0, 1, 1],
            ]}
            bgRange={[
              [0.62, 0.8],
              [0, 0.15],
            ]}
          />
        </div>

        <ProgressIndicator scrollProgress={scrollYProgress} />

        <div className="absolute bottom-8 md:bottom-10 right-6 md:right-10 z-20 hidden md:block">
          <span className="text-[9px] text-white/25 tracking-[0.3em] uppercase">
            JANAN OUD
          </span>
        </div>
      </div>
    </section>
  );
          }
