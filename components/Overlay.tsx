"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 25% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], ["0%", "-30%"]);
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Section 2: 35% to 60% scroll
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], ["30%", "0%", "0%", "-30%"]);
  
  // Section 3: 70% to 90% scroll
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], ["30%", "0%", "0%", "-30%"]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="fixed inset-0 w-full h-full opacity-[0.03] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Section 1: Left */}
        <motion.div
          style={{ opacity: opacity1, y: y1, scale: scale1 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left pl-0 md:pl-12"
        >
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Available for work</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl lg:text-8xl font-extrabold tracking-tighter text-white leading-tight">
              Creative<br />Developer
            </h1>
            <p className="mt-8 text-lg md:text-xl font-light text-neutral-400 max-w-xl">
              Crafting immersive digital experiences through code, motion, and design.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col justify-center items-start text-left"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              I build <span className="text-neutral-500">digital experiences.</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
              Focusing on high-performance animations, premium interfaces, and flawless interactivity.
            </p>
          </div>
        </motion.div>

        {/* Section 3: Right */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col justify-center items-end text-right"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              Bridging <span className="text-neutral-500">design & engineering.</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
              Creating the bridge between aesthetic vision and technical reality. Zero-G modernism at its core.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
