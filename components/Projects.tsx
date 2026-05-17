"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web App",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Fintech Dashboard",
    category: "SaaS",
    image: "/projects/fintech.png",
  },
  {
    title: "AI Image Generator",
    category: "Experiment",
    image: "/projects/ai.png",
  },
  {
    title: "Web3 NFT Marketplace",
    category: "Crypto",
    image: "/projects/nft.png",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4 font-semibold flex items-center gap-4">
            <span className="w-12 h-[1px] bg-neutral-600 block"></span> Selected Work
          </h3>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Recent Projects
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col gap-6 cursor-pointer h-full"
          >
            {/* Unified Glass-morphism card container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-700 group-hover:border-white/25 group-hover:bg-white/[0.06]">
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.02]"
              />
              
              {/* Overlay shadow for image depth */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-700 z-0 mix-blend-multiply" />
            </div>

            <div className="flex flex-col gap-4 flex-grow">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs font-medium text-neutral-500 mb-2 tracking-widest uppercase">
                    {project.category}
                  </p>
                  <h4 className="text-2xl font-semibold text-white tracking-tight group-hover:text-neutral-100 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h4>
                </div>
                <div className="p-3 rounded-lg bg-white/5 text-white backdrop-blur-sm border border-white/10 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:bg-white/10 group-hover:border-white/25 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
              
              <div className="h-[1px] w-full bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
