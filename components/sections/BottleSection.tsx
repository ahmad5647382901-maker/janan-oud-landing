"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
      className="relative min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-8 bg-gradient-to-b from-black via-neutral-900 to-neutral-800 overflow-hidden"
    >
      {/* Subtle Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-transparent" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Two-Column Editorial Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* LEFT: Typography Content */}
          <motion.div
            style={{ opacity, y }}
            className="order-1 md:order-1 text-left"
          >
            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 md:mb-8 tracking-tight leading-none"
            >
              THE BOTTLE
            </motion.h2>
            
            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-amber-100/70 font-light leading-relaxed tracking-wide mb-10 md:mb-12 max-w-md"
            >
              Designed to leave a mark.
            </motion.p>
            
            {/* Elegant Divider */}
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px bg-amber-400/40 mb-10 md:mb-12"
            />
            
            {/* Editorial Product Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-3 md:space-y-4"
            >
              <div className="flex justify-between items-center py-2 border-b border-amber-400/20">
                <p className="text-amber-400/80 text-xs tracking-[0.15em] uppercase">Product</p>
                <p className="text-white/80 text-sm font-light">JANAN OUD</p>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-400/20">
                <p className="text-amber-400/80 text-xs tracking-[0.15em] uppercase">Type</p>
                <p className="text-white/80 text-sm font-light">Eau de Parfum</p>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-400/20">
                <p className="text-amber-400/80 text-xs tracking-[0.15em] uppercase">Sizes</p>
                <p className="text-white/80 text-sm font-light">30 ML / 100 ML</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-amber-400/80 text-xs tracking-[0.15em] uppercase">Category</p>
                <p className="text-white/80 text-sm font-light">Citrus / Spicy</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* RIGHT: Bottle Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Subtle glow behind bottle */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent blur-2xl" />
              
              {/* Main Product Image */}
              <Image
                src="/images/Gemini_Generated_Image_isrej8isrej8isre.jpeg"
                alt="JANAN OUD perfume bottle by J."
                width={500}
                height={750}
                className="object-contain drop-shadow-2xl mx-auto relative z-10"
                quality={95}
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              
              {/* Editorial Product Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center mt-8 md:mt-10"
              >
                <p className="text-amber-400/80 text-xs tracking-[0.25em] uppercase mb-2">
                  JANAN OUD
                </p>
                <p className="text-amber-100/60 text-[10px] tracking-[0.2em] uppercase">
                  Eau de Parfum • 30 ML / 100 ML
                </p>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
    }
