"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4 font-semibold flex items-center gap-4">
              <span className="w-12 h-[1px] bg-neutral-600 block"></span> Contact
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">
              Let's build something <span className="text-neutral-500 italic">extraordinary</span> together.
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-1">Email Me</p>
                  <a href="mailto:blackhatajith@gmail.com" className="text-xl text-white font-medium hover:text-neutral-200">
                    blackhatajith@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-1">Call Me</p>
                  <a href="tel:+918610926373" className="text-xl text-white font-medium hover:text-neutral-200">
                    +91 8610926373
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl text-white font-medium">Madurai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -z-10" />
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                  />
                </div>

                <button className="w-full py-5 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all duration-300 group shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
