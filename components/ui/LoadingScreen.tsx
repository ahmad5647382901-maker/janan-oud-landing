"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="mb-4 text-xs uppercase tracking-[0.5em] text-white/50">
          J.
        </div>

        <div className="h-px w-24 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-white/60"
          />
        </div>

        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
          Loading Experience
        </p>
      </motion.div>
    </div>
  );
}
