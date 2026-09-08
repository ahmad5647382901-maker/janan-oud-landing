"use client";

import { motion } from "framer-motion";

const stages = [
{
number: "01",
title: "TOP NOTES",
subtitle: "The first impression",
notes: ["Raspberry", "Saffron", "Clove Ozone Accord"],
},
{
number: "02",
title: "HEART NOTES",
subtitle: "The character unfolds",
notes: [
"Lily of the Valley",
"Rose",
"Jasmine",
"Geranium",
"Tuberose",
"Tea",
],
},
{
number: "03",
title: "BASE NOTES",
subtitle: "What remains",
notes: [
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
},
];

export default function ScentSection() {
return (
<section
id="fragrance"
className="relative bg-black text-white overflow-hidden"
>
{/* SECTION HEADING */}
<div className="relative px-6 pt-24 pb-14 md:pt-32 md:pb-20 text-center">
<motion.div
initial={{ opacity: 0, scaleX: 0 }}
whileInView={{ opacity: 1, scaleX: 1 }}
transition={{
duration: 1.2,
ease: [0.16, 1, 0.3, 1],
}}
viewport={{ amount: 0.3 }}
className="mx-auto mb-7 h-px w-12 bg-amber-400/40 origin-center"
/>

    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ amount: 0.3 }}
      className="text-amber-400/70 text-[10px] tracking-[0.4em] uppercase mb-4"
    >
      The Olfactory Journey
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ amount: 0.3 }}
      className="font-serif text-5xl md:text-7xl text-white tracking-tight"
    >
      THE FRAGRANCE
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
      viewport={{ amount: 0.3 }}
      className="mt-4 text-[10px] text-amber-100/40 tracking-[0.25em] uppercase"
    >
      Citrus • Spicy • Woody • Musky
    </motion.p>
  </div>

  {/* NOTES */}
  <div className="relative max-w-5xl mx-auto px-6 pb-20 md:pb-28">
    {stages.map((stage, index) => (
      <motion.div
        key={stage.number}
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.05,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{
          amount: 0.2,
        }}
        className="relative py-14 md:py-20 border-b border-white/10 last:border-b-0"
      >
        {/* SUBTLE CINEMATIC GLOW */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.25,
          }}
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-amber-500/[0.025] blur-3xl pointer-events-none"
        />

        {/* BACKGROUND NUMBER */}
        <motion.span
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{
            amount: 0.2,
          }}
          className="absolute right-0 top-8 md:top-12 font-serif text-7xl md:text-9xl text-amber-400/[0.035] select-none"
        >
          {stage.number}
        </motion.span>

        <div className="relative z-10">

          {/* SMALL LINE */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: "2.5rem",
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{
              amount: 0.2,
            }}
            className="h-px bg-amber-400/40 mb-6"
          />

          {/* NUMBER */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            viewport={{
              amount: 0.2,
            }}
            className="text-amber-400/60 text-[9px] tracking-[0.35em] uppercase mb-3"
          >
            {stage.number}
          </motion.p>

          {/* TITLE */}
          <motion.h3
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{
              amount: 0.2,
            }}
            className="font-serif text-3xl md:text-5xl text-white mb-2"
          >
            {stage.title}
          </motion.h3>

          {/* SUBTITLE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{
              amount: 0.2,
            }}
            className="text-[10px] text-white/30 tracking-[0.15em] uppercase mb-8"
          >
            {stage.subtitle}
          </motion.p>

          {/* NOTES */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-4xl">
            {stage.notes.map((note, noteIndex) => (
              <motion.div
                key={note}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.35 + noteIndex * 0.035,
                  ease: "easeOut",
                }}
                viewport={{
                  amount: 0.15,
                }}
                className="flex items-center"
              >
                <motion.span
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.4 + noteIndex * 0.035,
                  }}
                  viewport={{
                    amount: 0.15,
                  }}
                  className="w-1 h-1 rounded-full bg-amber-400/60 mr-3"
                />

                <span className="text-sm md:text-base text-amber-50/65 font-light">
                  {note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

);
                }
