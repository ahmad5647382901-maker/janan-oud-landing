"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BottleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start end", "end start"] 
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  
  return (
    <section 
      id="bottle" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center py-32 px-4 md:px-8 bg-gradient-to-b from-luxury-black via-[#0d0d0d] to-luxury-graphite"
    >
      <div className="max-w-4xl mx-auto">
        {/* Premium Content - Text Only */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="space-y-10 text-center"
        >
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight"
            >
              The Bottle
            </motion.h2>
            <div className="w-16 h-px bg-luxury-gold/60 mx-auto" />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-luxury-champagne/90 text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto"
          >
            Crafted with precision and elegance, the JANAN OUD bottle embodies sophistication. 
            Its refined silhouette reflects the depth and character of the fragrance within.
          </motion.p>
          
          {/* Premium Specifications Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
          >
            <div>
              <p className="text-luxury-gold/80 text-xs tracking-[0.15em] uppercase mb-3">Design</p>
              <p className="text-white/70 font-light text-sm">Minimalist luxury</p>
            </div>
            <div>
              <p className="text-luxury-gold/80 text-xs tracking-[0.15em] uppercase mb-3">Finish</p>
              <p className="text-white/70 font-light text-sm">Premium glass</p>
            </div>
            <div>
              <p className="text-luxury-gold/80 text-xs tracking-[0.15em] uppercase mb-3">Accent</p>
              <p className="text-white/70 font-light text-sm">Gold detailing</p>
            </div>
            <div>
              <p className="text-luxury-gold/80 text-xs tracking-[0.15em] uppercase mb-3">Presence</p>
              <p className="text-white/70 font-light text-sm">Commanding</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
