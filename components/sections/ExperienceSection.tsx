"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/40">
            The Experience
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-wide md:text-7xl">
            More than a fragrance.
            <br />
            <span className="text-white/45">
              It is a presence.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-8 text-white/55 md:text-base">
            A rich and expressive composition created to accompany moments
            that deserve to be remembered.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
