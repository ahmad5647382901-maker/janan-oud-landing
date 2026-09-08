"use client";

import { motion } from "framer-motion";

export default function DiscoverSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black px-6 py-28 text-center md:py-40">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/40">
            Discover JANAN OUD
          </p>

          <h2 className="text-4xl font-light tracking-wide md:text-7xl">
            Leave an
            <br />
            <span className="text-white/45">impression.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-white/55 md:text-base">
            Step into the world of JANAN OUD and discover a fragrance with
            character, depth, and distinction.
          </p>

          <a
            href="https://www.junaidjamshed.com/products/janan-oud-30ml"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full border border-white/20 px-7 py-3 text-xs uppercase tracking-[0.25em] text-white/80 transition hover:border-white/50 hover:text-white"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
}
