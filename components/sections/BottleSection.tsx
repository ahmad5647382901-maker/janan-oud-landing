"use client";

import { motion } from "framer-motion";

export default function BottleSection() {
  return (
    <section
      id="bottle"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/40">
            The Bottle
          </p>

          <h2 className="text-4xl font-light tracking-wide md:text-6xl">
            Designed to
            <br />
            <span className="text-white/50">leave a mark.</span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-8 text-white/55 md:text-base">
            JANAN OUD is presented with a refined silhouette that reflects
            confidence, depth, and timeless character.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center"
        >
          <div className="relative flex h-[420px] w-[260px] items-center justify-center rounded-[3rem] border border-white/10 bg-white/[0.02] shadow-2xl">
            <div className="h-[250px] w-[105px] rounded-[1.5rem] border border-white/10 bg-white/[0.04]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
