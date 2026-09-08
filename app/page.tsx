
"use client";

import { motion } from "framer-motion";

export default function BottleSection() {
  return (
    <section
      id="bottle"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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

          <p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-white/55 md:text-base">
            JANAN OUD is presented with a refined silhouette that reflects
            confidence, depth, and timeless character.
          </p>
        </motion.div>
      </div>
    </section>
    );
}
          
