"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalRevealSection() {
  return (
    <section
      id="final-reveal"
      className="relative min-h-[75vh] flex items-center justify-center px-6 py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

      {/* Subtle amber atmosphere */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [0.95, 1.04, 0.95],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-amber-500/10 blur-[90px]"
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-amber-400/60 text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-5"
        >
          The Signature
        </motion.p>

        {/* Small final bottle */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto w-[150px] md:w-[190px]"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/Gemini_Generated_Image_isrej8isrej8isre.jpeg"
              alt="JANAN OUD perfume bottle"
              width={500}
              height={750}
              quality={95}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
            A scent that leaves a mark.
          </h2>

          <p className="mt-4 text-xs md:text-sm text-amber-100/40 font-light tracking-wide">
            Depth. Warmth. Character.
          </p>

          <a
            href="#fragrance"
            className="inline-block mt-7 px-8 py-3 border border-amber-400/40 text-amber-400 text-[9px] tracking-[0.2em] uppercase hover:bg-amber-400/10 transition-all duration-500"
          >
            Explore JANAN OUD
          </a>
        </motion.div>

        <div className="mt-14 md:mt-16">
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
