"use client";

import { useRef } from "react";
import Navbar from "../components/Navbar";
import ScrollyCanvas from "../components/ScrollyCanvas";
import Overlay from "../components/Overlay";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const educationEntries = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    fieldOfStudy: "Electrical and Electronics Engineering",
    institution: "Velammal College of Engineering and Technology",
    location: "Madurai, Tamil Nadu",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative w-full bg-[#000000] selection:bg-white/20 overflow-x-hidden">
      <Navbar />
      
      {/* Home Section - Auto height with scroll space for animation */}
      <section 
        id="home" 
        ref={containerRef}
        className="relative w-full h-[120vh] pb-0 mb-0"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          <ScrollyCanvas containerRef={containerRef} />
          <Overlay containerRef={containerRef} />
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-20 bg-[#000000] py-8 -mt-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-lg md:text-xl leading-8 text-neutral-300 font-sans tracking-tight">
            I bridge the gap between complex AI capabilities and intuitive web interfaces, building production-ready applications that scale.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative z-20 bg-[#000000] py-12 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold">Education</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">Academic Qualification</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {educationEntries.map((item, index) => (
              <article
                key={index}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition duration-500 hover:border-white/20 hover:bg-white/10"
              >
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 font-medium">Degree</p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">{item.degree}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-neutral-200">{item.fieldOfStudy}</p>
                    <p className="text-base text-neutral-400">{item.institution}</p>
                    <p className="text-sm text-neutral-500">{item.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner Section */}
      <section className="relative z-20 bg-[#000000] border-t border-white/5 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 overflow-hidden py-4">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-[#000000]" />
            <div className="relative">
              <div className="marquee-track inline-flex items-center gap-8 text-sm md:text-base font-medium uppercase tracking-[0.28em] text-neutral-500">
                <span>AI Agents</span>
                <span>•</span>
                <span>LLM Orchestration</span>
                <span>•</span>
                <span>Fullstack Development</span>
                <span>•</span>
                <span>Node.js</span>
                <span>•</span>
                <span>React</span>
                <span>•</span>
                <span>Python</span>
                <span>•</span>
                <span>AI Agents</span>
                <span>•</span>
                <span>LLM Orchestration</span>
                <span>•</span>
                <span>Fullstack Development</span>
                <span>•</span>
                <span>Node.js</span>
                <span>•</span>
                <span>React</span>
                <span>•</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section - Start immediately after Home */}
      <section 
        id="projects" 
        className="relative z-20 bg-[#000000] pt-8 pb-20 border-t border-white/5"
      >
        <Projects />
      </section>

      <Certificates />
      <Contact />

      <footer className="relative z-20 bg-[#000000] py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-2xl font-bold tracking-tighter text-white">CREATIVE DEV</div>
              <p className="text-neutral-500 text-sm max-w-xs text-center md:text-left">
                Pushing the boundaries of digital interactions through code and design.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Social</p>
                <a href="https://x.com/rajahajay21" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">X.com</a>
                <a href="https://www.linkedin.com/in/ajeet-kumar-4124752b3/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/AjeetRaja/portfolio" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-600 text-xs font-medium tracking-wide uppercase">
              © {new Date().getFullYear()} CREATIVE DEVELOPER. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
