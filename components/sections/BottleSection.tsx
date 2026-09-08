"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BottleSection() {
  return (
    <section
      id="bottle"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
          >
            <Image
              src="/images/JananOud_1_5be0e8a1-1c3c-462e-9266-04a3ead26d3e.jpg"
              alt="JANAN OUD perfume bottle by J."
              width={500}
              height={750}
              quality={90}
              className="h-auto max-h-[520px] w-auto max-w-[75vw] object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 75vw, 35vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
