"use client";

import { motion } from "framer-motion";

const details = [
  ["Brand", "J."],
  ["Product", "JANAN OUD"],
  ["Category", "Citrus, Spicy"],
  ["Sizes", "30ml / 100ml"],
  ["Type", "Eau de Parfum"],
];

export default function DetailsSection() {
  return (
    <section
      id="details"
      className="relative bg-black px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/40">
            Details
          </p>

          <h2 className="text-4xl font-light tracking-wide md:text-6xl">
            Everything
            <br />
            <span className="text-white/50">in its place.</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {details.map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid grid-cols-2 gap-6 py-6 md:grid-cols-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                {label}
              </span>

              <span className="text-sm text-white/75 md:col-span-2 md:text-base">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
