"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "AWS Scholars Program Project Badge: Analyze Data using AI",
    organization: "Udacity",
    year: "2026",
    link: "/certificates/Analyze Data using party Rock.png",
  },
  {
    title: "AWS Scholars Program Project Badge: Build Your First AI Productivity App",
    organization: "Udacity",
    year: "2026",
    link: "/certificates/AI Productivity app.png",
  },
  {
    title: "Gemini Certified University Student",
    organization: "Google for Education",
    year: "2026",
    link: "/certificates/Gemini certified Student.png",
  },
  {
    title: "Artificial Intelligence Programmer",
    organization: "Government of Tamil Nadu",
    year: "2026",
    link: "/certificates/TN_Skill_Certificate.png",
  },
  {
    title: "Artificial Intelligence Programmer (Advanced Frameworks)",
    organization: "Government of Tamil Nadu",
    year: "2025",
    link: "/certificates/TN_Skill_Scorecard.png",
  },
  {
    title: "AWS Certified Machine Learning - Specialty",
    organization: "Amazon Web Services (AWS)",
    year: "2025",
    link: "https://www.credly.com/badges/aws-certified-machine-learning-specialty",
  },
  {
    title: "AWS Educate Machine Learning Foundations - Training Badge",
    organization: "Amazon Web Services (AWS)",
    year: "2025",
    link: "https://www.credly.com/badges/1a7564dc-7c3b-44d6-ad0a-c5138174b86d/public_url",
  },
  {
    title: "AWS Educate Introduction to Generative AI - Training Badge",
    organization: "Amazon Web Services (AWS)",
    year: "2025",
    link: "https://www.credly.com/badges/3a6f8576-8c6e-4bcb-b94d-a8751a046acf/public_url",
  },
  {
    title: "AWS Educate Getting Started with Databases - Training Badge",
    organization: "Amazon Web Services (AWS)",
    year: "2025",
    link: "https://www.credly.com/badges/1f20ac2a-db38-4ce9-b872-0f93cdfa6466/public_url",
  },
  {
    title: "AWS AI & ML Scholars Program",
    organization: "Amazon Web Services & Udacity",
    year: "2026",
    link: "#",
    isOngoing: true,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-16 bg-[#000000] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4 font-semibold flex items-center gap-4">
              <span className="w-12 h-[1px] bg-neutral-600 block"></span> Credentials
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Certificates
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between aspect-square"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight leading-tight mb-2 flex items-center gap-3">
                  <span>{cert.title}</span>
                  {cert.isOngoing ? (
                    <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-full">
                      In Progress
                    </span>
                  ) : null}
                </h4>
                <p className="text-sm text-neutral-500 font-medium">{cert.organization}</p>
              </div>

              <div className="flex justify-between items-end mt-8">
                <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">{cert.year}</span>
                {cert.isOngoing ? (
                  <span className="p-3 rounded-xl bg-white/5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 cursor-not-allowed">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                ) : cert.link ? (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
