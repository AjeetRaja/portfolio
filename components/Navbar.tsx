"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-white/20 to-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
            <span>CREATIVE DEV</span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            className="px-6 py-2.5 rounded-full border border-white/20 text-sm font-medium text-neutral-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#C59B6D] via-[#A27B5C] to-[#86654B] text-sm font-semibold text-white tracking-[0.04em] hover:brightness-110 transition-all duration-300 shadow-[0_12px_30px_rgba(197,155,109,0.22)]"
          >
            <span>Let's Talk</span>
            <MessageSquare size={16} className="shrink-0" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 border border-white/20 rounded-full text-white font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#C59B6D] via-[#A27B5C] to-[#86654B] text-lg font-semibold text-white tracking-[0.02em] hover:brightness-110 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <MessageSquare size={18} className="shrink-0" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
