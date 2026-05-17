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
                <a href="https://x.com/rajahajay21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <path d="M19 5L9 15M9 9L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5L15 15M15 9L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  X.com
                </a>
                <a href="https://www.linkedin.com/in/ajeet-kumar-4124752b3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 10.5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 8.5H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12.5 17V12.5C12.5 11.3954 13.3954 10.5 14.5 10.5H15.5C16.6046 10.5 17.5 11.3954 17.5 12.5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 17H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/AjeetRaja/portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                    <path d="M12 2C7.589 2 4 5.589 4 10C4 13.688 6.219 16.781 9.297 17.891C9.797 17.969 10.031 17.656 10.031 17.391C10.031 17.156 10.016 16.438 10.008 15.453C7 16.016 6.266 14.266 6.266 14.266C5.781 13.078 5.047 12.75 5.047 12.75C4.031 12.109 5.094 12.125 5.094 12.125C6.188 12.203 6.75 13.266 6.75 13.266C7.719 15.063 9.375 14.594 10.031 14.313C10.109 13.594 10.391 13.078 10.719 12.797C8.25 12.516 5.672 11.656 5.672 8.047C5.672 7.094 6 6.344 6.625 5.766C6.547 5.484 6.25 4.641 6.703 3.328C6.703 3.328 7.438 3.031 10.016 4.641C10.734 4.422 11.484 4.313 12.234 4.313C12.984 4.313 13.734 4.422 14.453 4.641C17.031 3.031 17.766 3.328 17.766 3.328C18.219 4.641 17.922 5.484 17.844 5.766C18.469 6.344 18.797 7.094 18.797 8.047C18.797 11.672 16.203 12.516 13.734 12.797C14.172 13.172 14.578 13.953 14.578 15.203C14.578 17.047 14.563 18.469 14.563 18.922C14.563 19.188 14.797 19.516 15.297 19.422C18.391 18.281 20.578 15.188 20.578 10C20.578 5.589 16.984 2 12 2Z" fill="currentColor"/>
                  </svg>
                  GitHub
                </a>
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
