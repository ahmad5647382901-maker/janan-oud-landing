"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
    >
      <a
        href="#top"
        className="text-sm font-medium tracking-[0.35em] text-white"
      >
        J.
      </a>

      <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-white/60 md:flex">
        <a href="#bottle" className="transition hover:text-white">
          The Bottle
        </a>
        <a href="#scent" className="transition hover:text-white">
          The Scent
        </a>
        <a href="#details" className="transition hover:text-white">
          Details
        </a>
      </div>

      <a
        href="https://www.junaidjamshed.com/products/janan-oud-30ml"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:border-white/50 hover:text-white"
      >
        Discover
      </a>
    </motion.nav>
  );
}
