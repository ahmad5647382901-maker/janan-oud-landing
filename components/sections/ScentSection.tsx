"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "TOP NOTES",
    notes: ["Raspberry", "Saffron", "Clove Ozone Accord"],
  },
  {
    number: "02",
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
      {/* Heading */}
      <div className="px-6 pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-amber-400/70 text-[10px] tracking-[0.4em] uppercase mb-4"
        >
          The Olfactory Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl text-white"
        >
          THE FRAGRANCE
        </motion.h2>

        <p className="mt-4 text-[10px] text-amber-100/40 tracking-[0.25em] uppercase">
          Citrus • Spicy • Woody • Musky
        </p>
      </div>

      {/* Notes */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.05,
            }}
            className="relative py-14 md:py-20 border-b border-white/10 last:border-b-0"
          >
            <span className="absolute right-0 top-10 md:top-14 font-serif text-7xl md:text-9xl text-amber-400/[0.035] select-none">
              {stage.number}
            </span>

            <div className="relative z-10">
              <p className="text-amber-400/60 text-[9px] tracking-[0.35em] uppercase mb-3">
                {stage.number}
              </p>

              <h3 className="font-serif text-3xl md:text-5xl text-white mb-8">
                {stage.title}
              </h3>

              <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-4xl">
                {stage.notes.map((note) => (
                  <div
                    key={note}
                    className="flex items-center"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-400/60 mr-3" />

                    <span className="text-sm md:text-base text-amber-50/65 font-light">
                      {note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
