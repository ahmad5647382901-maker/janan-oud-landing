"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    label: "TOP",
    title: "TOP NOTES",
    notes: ["Raspberry", "Saffron", "Clove Ozone Accord"],
  },
  {
    number: "02",
    label: "HEART",
    title: "HEART NOTES",
    notes: [
      "Lily of the Valley",
      "Rose",
      "Jasmine",
      "Geranium",
      "Tuberose",
      "Tea",
    ],
  },
  {
    number: "03",
    label: "BASE",
    title: "BASE NOTES",
    notes: [
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
  },
];

export default function ScentSection() {
  return (
    <section
      id="fragrance"
      className="relative bg-black text-white"
    >
      {/* Section Introduction */}
      <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-950" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,120,30,0.08),transparent_55%)]" />

        <div className="relative z-10 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-amber-400/70 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-5"
          >
            The Olfactory Journey
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight"
          >
            THE FRAGRANCE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-5 text-xs md:text-sm text-amber-100/50 tracking-[0.25em] uppercase"
          >
            Citrus • Spicy • Woody • Musky
          </motion.p>

          <div className="w-16 h-px bg-amber-400/40 mx-auto mt-10" />
        </div>
      </div>

      {/* Fragrance Stages */}
      {stages.map((stage, index) => (
        <div
          key={stage.number}
          className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-10 py-24"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,120,30,0.06),transparent_55%)]" />

          {/* Large Background Number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-serif text-[15rem] md:text-[24rem] lg:text-[30rem] leading-none text-amber-400/[0.035] select-none">
              {stage.number}
            </span>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 w-full max-w-6xl mx-auto"
          >
            <div className="mb-8 md:mb-12">
              <p className="text-amber-400/70 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-4">
                {stage.number} / {stage.label}
              </p>

              <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
                {stage.title}
              </h3>
            </div>

            <div className="w-12 md:w-16 h-px bg-amber-400/40 mb-10 md:mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-4xl">
              {stage.notes.map((note) => (
                <motion.div
                  key={note}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center border-b border-white/10 pb-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 mr-4 shrink-0" />

                  <span className="text-sm md:text-base lg:text-lg text-amber-50/80 font-light tracking-wide">
                    {note}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stage Indicator */}
            <div className="flex items-center gap-3 mt-12 md:mt-16">
              {stages.map((item, itemIndex) => (
                <div
                  key={item.number}
                  className={`h-px transition-all duration-500 ${
                    itemIndex === index
                      ? "w-12 bg-amber-400/70"
                      : "w-5 bg-white/15"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
              }
