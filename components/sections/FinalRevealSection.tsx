"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalRevealSection() {
  return (
    <section
      id="final-reveal"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,120,30,0.10),transparent_50%)]" />

      {/* Subtle atmospheric glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[28rem] h-[28rem] rounded-full bg-amber-500/10 blur-[100px]"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-amber-400/70 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8"
        >
          The Signature
        </motion.p>

        {/* Bottle */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          animate={{
            y: [0, -8, 0],
          }}
          className="relative mx-auto w-[230px] md:w-[300px] lg:w-[340px]"
        >
          <Image
            src="/images/Gemini_Generated_Image_isrej8isrej8isre.jpeg"
            alt="JANAN OUD perfume bottle by J."
            width={500}
            height={750}
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            quality={95}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 md:mt-10"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight">
            A scent that leaves a mark.
          </h2>

          <p className="mt-5 text-sm md:text-base text-amber-100/50 font-light tracking-wide max-w-md mx-auto">
            JANAN OUD — a fragrance of depth, warmth and character.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#discover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45 }}
          whileHover={{
            backgroundColor: "rgba(245,158,11,0.08)",
          }}
          className="inline-block mt-10 px-9 py-3.5 border border-amber-400/40 text-amber-400 text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-500"
        >
          Discover JANAN OUD
        </motion.a>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 md:mt-24"
        >
          <div className="w-12 h-px bg-amber-400/30 mx-auto mb-6" />

          <p className="font-serif text-2xl md:text-3xl text-amber-400/80 tracking-[0.12em]">
            J.
          </p>

          <p className="mt-2 text-[9px] text-white/30 tracking-[0.35em] uppercase">
            JANAN OUD
          </p>
        </motion.div>
      </div>
    </section>
  );
        }
