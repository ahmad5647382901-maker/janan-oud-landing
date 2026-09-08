"use client";

import { motion } from "framer-motion";

const notes = {
  top: ["Raspberry", "Saffron", "Clove Ozone Accord"],
  heart: [
    "Lily of the Valley",
    "Rose",
    "Jasmine",
    "Geranium",
    "Tuberose",
    "Tea",
  ],
  base: [
    "Musk",
    "Amber",
    "Agarwood",
    "Amyris",
    "Sandalwood",
    "Vanilla",
    "Moss",
    "Leather",
    "Nagarmotha",
    "Patchouli",
  ],
};

function NoteGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border-t border-white/10 pt-6">
      <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/40">
        {title}
      </p>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/65"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ScentSection() {
  return (
    <section
      id="scent"
      className="relative bg-[#080808] px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/40">
            The Scent
          </p>

          <h2 className="text-4xl font-light tracking-wide md:text-6xl">
            A composition
            <br />
            <span className="text-white/50">with depth.</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          <NoteGroup title="Top Notes" items={notes.top} />
          <NoteGroup title="Heart Notes" items={notes.heart} />
          <NoteGroup title="Base Notes" items={notes.base} />
        </div>
      </div>
    </section>
  );
        
