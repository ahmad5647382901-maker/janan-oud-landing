"use client";

import { motion } from "framer-motion";

export default function FinalRevealSection() {
  return (
    <section
      id="final-reveal"
      className="relative min-h-[70vh] flex items-center justify-center px-6 py-24 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 rounded-full bg-amber-500/10 blur-[100px]"
      />

      <div className="relative z-10 text-center max-w-3xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-amber-400/60 text-[10px] tracking-[0.4em] uppercase mb-6"
        >
          JANAN OUD
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white"
        >
          A scent that leaves a mark.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-5 text-sm text-amber-100/45 font-light"
        >
          Depth. Warmth. Character.
        </motion.p>

        <motion.a
          href="#fragrance"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-block mt-9 px-9 py-3.5 border border-amber-400/40 text-amber-400 text-[10px] tracking-[0.2em] uppercase hover:bg-amber-400/10 transition-all duration-500"
        >
          Explore Again
        </motion.a>

        <div className="mt-20">
          <div className="w-10 h-px bg-amber-400/30 mx-auto mb-5" />

          <p className="font-serif text-2xl text-amber-400/70">
            J.
          </p>

          <p className="mt-2 text-[8px] text-white/25 tracking-[0.35em] uppercase">
            JANAN OUD
          </p>
        </div>

      </div>
    </section>
  );
}
