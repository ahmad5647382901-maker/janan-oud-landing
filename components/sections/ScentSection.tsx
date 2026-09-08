"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const fragranceNotes = {
  top: ["Raspberry", "Saffron", "Clove Ozone Accord"],
  heart: [
    "Lily of the Valley",
    "Rose",
    "Jasmine",
    "Geranium",
    "Tuberose",
    "Tea",
  ],
  base: [
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
  ],
};

const stageLabels = ["TOP", "HEART", "BASE"] as const;

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  height: `${90 + (index % 8) * 25}px`,
  duration: 14 + (index % 8),
  delay: index * 0.45,
}));

function ProgressStage({
  label,
  index,
  scrollProgress,
}: {
  label: string;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const start = index / 3;
  const end = (index + 1) / 3;

  const opacity = useTransform(
    scrollProgress,
    [start - 0.08, start, end, end + 0.08],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div style={{ opacity }} className="flex flex-col items-center">
      <span className="text-[10px] tracking-[0.3em] text-amber-300/70">
        {label}
      </span>
      <div className="mt-3 h-8 w-px bg-amber-300/20" />
    </motion.div>
  );
}

function FragranceNote({
  note,
  index,
  stageStart,
  scrollProgress,
}: {
  note: string;
  index: number;
  stageStart: number;
  scrollProgress: MotionValue<number>;
}) {
  const noteStart = stageStart + index * 0.025;
  const noteEnd = noteStart + 0.08;

  const opacity = useTransform(
    scrollProgress,
    [noteStart, noteEnd],
    [0, 1]
  );

  const y = useTransform(
    scrollProgress,
    [noteStart, noteEnd],
    [18, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="flex items-center justify-center gap-3"
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/70 shadow-[0_0_12px_rgba(251,191,36,0.35)]" />
      <span className="text-center text-sm font-light tracking-wide text-amber-50/80 md:text-lg">
        {note}
      </span>
    </motion.div>
  );
}

function FragranceStage({
  title,
  subtitle,
  notes,
  index,
  scrollProgress,
}: {
  title: string;
  subtitle: string;
  notes: string[];
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const start = index / 3;
  const middle = start + 1 / 6;
  const end = (index + 1) / 3;

  const opacity = useTransform(
    scrollProgress,
    [start - 0.08, start, middle, end, end + 0.08],
    [0, 1, 1, 1, 0]
  );

  const scale = useTransform(
    scrollProgress,
    [start - 0.08, start, middle, end, end + 0.08],
    [0.94, 1, 1, 1, 0.94]
  );

  const y = useTransform(
    scrollProgress,
    [start - 0.08, start, middle, end, end + 0.08],
    [35, 0, 0, 0, -35]
  );

  const numberOpacity = useTransform(
    scrollProgress,
    [start, middle, end],
    [0, 0.12, 0]
  );

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-8 pt-28 md:px-12 md:pb-12 md:pt-32"
    >
      <motion.div
        style={{ opacity: numberOpacity }}
        className="pointer-events-none absolute select-none font-serif text-[180px] leading-none text-amber-300 md:text-[360px]"
      >
        0{index + 1}
      </motion.div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <p className="mb-4 text-[10px] tracking-[0.35em] text-amber-300/60 md:text-xs">
          {subtitle}
        </p>

        <h3 className="text-center font-serif text-4xl leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
          {title}
        </h3>

        <div className="mb-10 mt-6 h-px w-16 bg-amber-300/40 md:mb-14 md:mt-8" />

        <div className="grid w-full max-w-3xl grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-3 md:gap-y-7">
          {notes.map((note, noteIndex) => (
            <FragranceNote
              key={note}
              note={note}
              index={noteIndex}
              stageStart={start}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const backgroundOne = useTransform(
    smoothProgress,
    [0, 0.33],
    [1, 0]
  );

  const backgroundTwo = useTransform(
    smoothProgress,
    [0.33, 0.5, 0.66],
    [0, 1, 0]
  );

  const backgroundThree = useTransform(
    smoothProgress,
    [0.66, 1],
    [0, 1]
  );

  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.08, 0.9, 1],
    [1, 0.25, 0.25, 1]
  );

  const progressHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="scent"
      ref={sectionRef}
      className="relative min-h-[300vh] overflow-hidden bg-black md:min-h-[400vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: backgroundOne }}
          className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-neutral-800"
        />

        <motion.div
          style={{ opacity: backgroundTwo }}
          className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/25 to-neutral-950"
        />

        <motion.div
          style={{ opacity: backgroundThree }}
          className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-amber-950/20"
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bottom-[-120px] w-px bg-gradient-to-t from-transparent via-amber-300/20 to-transparent"
              style={{
                left: particle.left,
                height: particle.height,
              }}
              animate={{
                y: [0, -window.innerHeight * 1.2],
                opacity: [0, 0.35, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.header
          style={{ opacity: headerOpacity }}
          className="absolute left-0 right-0 top-0 z-30 px-6 pb-4 pt-8 text-center md:pb-6 md:pt-12"
        >
          <h2 className="font-serif text-3xl tracking-tight text-white md:text-5xl">
            THE FRAGRANCE
          </h2>

          <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/60 md:text-xs">
            Citrus / Spicy
          </p>
        </motion.header>

        <div className="absolute right-5 top-1/2 z-30 -translate-y-1/2 md:right-8">
          <div className="hidden flex-col items-center gap-8 md:flex">
            {stageLabels.map((label, index) => (
              <ProgressStage
                key={label}
                label={label}
                index={index}
                scrollProgress={smoothProgress}
              />
            ))}
          </div>

          <div className="relative h-48 w-px bg-amber-300/20 md:hidden">
            <motion.div
              style={{ height: progressHeight }}
              className="absolute left-0 top-0 w-px bg-amber-300/70"
            />
          </div>
        </div>

        <div className="relative h-full w-full">
          <FragranceStage
            title="TOP NOTES"
            subtitle="The first impression"
            notes={fragranceNotes.top}
            index={0}
            scrollProgress={smoothProgress}
          />

          <FragranceStage
            title="HEART NOTES"
            subtitle="The essence revealed"
            notes={fragranceNotes.heart}
            index={1}
            scrollProgress={smoothProgress}
          />

          <FragranceStage
            title="BASE NOTES"
            subtitle="The lasting memory"
            notes={fragranceNotes.base}
            index={2}
            scrollProgress={smoothProgress}
          />
        </div>
      </div>
    </section>
  );
}
