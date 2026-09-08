"use client";  
  
import { motion, useScroll, useTransform, useSpring } from "framer-motion";  
import { useRef } from "react";  
  
const fragranceNotes = {  
  top: ["Raspberry", "Saffron", "Clove Ozone Accord"],  
  heart: ["Lily of the Valley", "Rose", "Jasmine", "Geranium", "Tuberose", "Tea"],  
  base: ["Musk", "Amber", "Agarwood", "Amyris", "Sandalwood", "Vanilla", "Moss", "Leather", "Nagarmotha", "Patchouli"],  
};  
  
const stageLabels = ["TOP", "HEART", "BASE"] as const;  
  
// Deterministic particle data  
const particles = Array.from({ length: 20 }, (_, i) => ({  
  id: i,  
  left: (i * 5) % 100,  
  height: 100 + (i % 10) * 10,  
  duration: 15 + (i % 10),  
  delay: i * 0.5,  
}));  
  
// Progress Stage Indicator Component  
function ProgressStage({   
  label,   
  index,   
  scrollProgress   
}: {   
  label: string;   
  index: number;   
  scrollProgress: any;  
}) {  
  const stageStart = index * 0.33;  
  const stageEnd = (index + 1) * 0.33;  
  const stageOpacity = useTransform(  
    scrollProgress,  
    [stageStart - 0.1, stageStart, stageEnd, stageEnd + 0.1],  
    [0.3, 1, 1, 0.3]  
  );  
    
  return (  
    <motion.div  
      style={{ opacity: stageOpacity }}  
      className="text-center"  
    >  
      <p className="text-amber-400/60 text-xs tracking-[0.2em] uppercase mb-2">  
        {label}  
      </p>  
      <div className="w-px h-8 bg-amber-400/20" />  
    </motion.div>  
  );  
}  
  
// Fragrance Note Component  
function FragranceNote({   
  note,   
  noteIndex,   
  start,   
  scrollProgress   
}: {   
  note: string;   
  noteIndex: number;   
  start: number;   
  scrollProgress: any;  
}) {  
  const noteStart = start + (noteIndex * 0.05);  
  const noteEnd = start + ((noteIndex + 1) * 0.05);  
  const noteOpacity = useTransform(  
    scrollProgress,  
    [noteStart, noteEnd],  
    [0, 1]  
  );  
    
  return (  
    <motion.div  
      style={{ opacity: noteOpacity }}  
      className="text-center"  
    >  
      <div className="flex items-center justify-center space-x-3">  
        <motion.div   
          className="w-1.5 h-1.5 bg-amber-400/60 rounded-full"  
          animate={{  
            scale: [1, 1.2, 1],  
            opacity: [0.6, 1, 0.6]  
          }}  
          transition={{  
            duration: 3,  
            repeat: Infinity,  
            delay: noteIndex * 0.3  
          }}  
        />  
        <p className="text-amber-100/80 text-sm md:text-lg font-light tracking-wide">  
          {note}  
        </p>  
      </div>  
    </motion.div>  
  );  
}  
  
// Fragrance Stage Component  
function FragranceStage({  
  title,  
  notes,  
  index,  
  scrollProgress,  
  subtitle  
}: {  
  title: string;  
  notes: string[];  
  index: number;  
  scrollProgress: any;  
  subtitle: string;  
}) {  
  const start = index * 0.33;  
  const end = (index + 1) * 0.33;  
  const middle = (start + end) / 2;  
    
  const opacity = useTransform(  
    scrollProgress,  
    [start - 0.1, start, middle, end, end + 0.1],  
    [0, 1, 1, 1, 0]  
  );  
    
  const scale = useTransform(  
    scrollProgress,  
    [start - 0.1, start, middle, end, end + 0.1],  
    [0.9, 1, 1, 1, 0.9]  
  );  
    
  const y = useTransform(  
    scrollProgress,  
    [start - 0.1, start, middle, end, end + 0.1],  
    [100, 0, 0, 0, -100]  
  );  
    
  const bgNumberOpacity = useTransform(  
    scrollProgress,  
    [start, middle],  
    [0, 0.15]  
  );  
    
  return (  
    <motion.div  
      style={{ opacity, scale, y }}  
      className="min-h-screen flex flex-col items-center justify-center py-12"  
    >  
      {/* Stage Number */}  
      <motion.div  
        style={{ opacity: bgNumberOpacity }}  
        className="text-amber-400/15 text-[200px] md:text-[400px] font-serif absolute select-none"  
      >  
        0{index + 1}  
      </motion.div>  
        
      {/* Title */}  
      <h3 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 tracking-tight text-center">  
        {title}  
      </h3>  
        
      {/* Subtitle */}  
      <p className="text-amber-400/60 text-sm md:text-base tracking-[0.15em] uppercase mb-12 md:mb-16 text-center">  
        {subtitle}  
      </p>  
        
      {/* Notes */}  
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">  
        {notes.map((note, noteIndex) => (  
          <FragranceNote  
            key={note}  
            note={note}  
            noteIndex={noteIndex}  
            start={start}  
            scrollProgress={scrollProgress}  
          />  
        ))}  
      </div>  
    </motion.div>  
  );  
}  
  
export default function ScentSection() {  
  const sectionRef = useRef<HTMLElement>(null);  
  const { scrollYProgress } = useScroll({   
    target: sectionRef,   
    offset: ["start start", "end end"]   
  });  
    
  // Smooth spring for progress  
  const smoothProgress = useSpring(scrollYProgress, {  
    stiffness: 100,  
    damping: 30,  
    restDelta: 0.001  
  });  
    
  // Background atmosphere transforms  
  const bgOpacity1 = useTransform(smoothProgress, [0, 0.33], [1, 0]);  
  const bgOpacity2 = useTransform(smoothProgress, [0.33, 0.66], [0, 1, 0]);  
  const bgOpacity3 = useTransform(smoothProgress, [0.66, 1], [0, 1]);  
    
  // Progress indicator position  
  const progressY = useTransform(smoothProgress, [0, 1], [0, 100]);  
  const progressPercent = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);  
    
  // Header transforms  
  const headerOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]);  
  const headerY = useTransform(smoothProgress, [0, 0.1], [0, -50]);  
    
  return (  
    <section   
      id="scent"   
      ref={sectionRef}   
      className="relative min-h-[300vh] md:min-h-[400vh] bg-black overflow-hidden"  
    >  
      {/* Sticky Container */}  
      <div className="sticky top-0 h-screen overflow-hidden">  
          
        {/* Atmospheric Background Layers */}  
        <motion.div   
          style={{ opacity: bgOpacity1 }}  
          className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-800 transition-opacity duration-1000"  
        />  
        <motion.div   
          style={{ opacity: bgOpacity2 }}  
          className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/20 to-neutral-900 transition-opacity duration-1000"  
        />  
        <motion.div   
          style={{ opacity: bgOpacity3 }}  
          className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-amber-950/10 transition-opacity duration-1000"  
        />  
          
        {/* Subtle Atmospheric Particles */}  
        <div className="absolute inset-0 overflow-hidden">  
          {particles.map((particle) => (  
            <motion.div  
              key={particle.id}  
              className="absolute w-px bg-gradient-to-b from-transparent via-amber-400/10 to-transparent"  
              style={{  
                left: `${particle.left}%`,  
                height: `${particle.height}px`,  
              }}  
              animate={{  
                y: [0, -150],  
                opacity: [0, 0.3, 0],  
              }}  
              transition={{  
                duration: particle.duration,  
                repeat: Infinity,  
                ease: "linear",  
                delay: particle.delay,  
              }}  
            />  
          ))}  
        </div>  
          
        {/* Progress Indicator - Desktop */}  
        <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-30">  
          <div className="flex flex-col items-center space-y-8">  
            {stageLabels.map((label, index) => (  
              <ProgressStage  
                key={label}  
                label={label}  
                index={index}  
                scrollProgress={smoothProgress}  
              />  
            ))}  
          </div>  
        </div>  
          
        {/* Progress Indicator - Mobile */}  
        <motion.div   
          style={{ y: progressY }}  
          className="md:hidden absolute right-4 top-8 z-30"  
        >  
          <div className="w-px h-64 bg-amber-400/20 relative">  
            <motion.div  
              className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-amber-400/60"  
              style={{ height: progressPercent }}  
            />  
          </div>  
        </motion.div>  
          
        {/* Content Container */}  
        <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-12">  
          <div className="max-w-6xl mx-auto w-full">  
              
            {/* Stage 1: TOP NOTES */}  
            <FragranceStage  
              title="TOP NOTES"  
              notes={fragranceNotes.top}  
              index={0}  
              scrollProgress={smoothProgress}  
              subtitle="The first impression"  
            />  
              
            {/* Stage 2: HEART NOTES */}  
            <FragranceStage  
              title="HEART NOTES"  
              notes={fragranceNotes.heart}  
              index={1}  
              scrollProgress={smoothProgress}  
              subtitle="The essence revealed"  
            />  
              
            {/* Stage 3: BASE NOTES */}  
            <FragranceStage  
              title="BASE NOTES"  
              notes={fragranceNotes.base}  
              index={2}  
              scrollProgress={smoothProgress}  
              subtitle="The lasting memory"  
            />  
              
          </div>  
        </div>  
          
        {/* Section Header - Always Visible */}  
        <motion.div   
          style={{  
            opacity: headerOpacity,  
            y: headerY  
          }}  
          className="absolute top-0 left-0 right-0 z-30 text-center py-8 md:py-12 px-6"  
        >  
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">  
            THE FRAGRANCE  
          </h2>  
          <p className="text-amber-400/60 text-xs tracking-[0.2em] uppercase mt-2">  
            Citrus / Spicy  
          </p>  
        </motion.div>  
          
      </div>  
    </section>  
  );  
}  
