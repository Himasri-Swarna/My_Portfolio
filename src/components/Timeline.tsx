import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, Calendar, Award, Building, Sparkles } from "lucide-react";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "../data";

export default function Timeline() {
  return (
    <section id="experience" className="py-20 relative border-t border-white/5 bg-neutral-950/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Header summary */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            Education &amp; <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-emerald-450 bg-clip-text text-transparent">Professional Internship</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            A parallel journey of her verified technical education in Artificial Intelligence, accompanied by applied industrial internship actions.
          </p>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Industrial Experience */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
              <h3 className="text-white font-sans font-bold text-xl tracking-wide font-sans">Industry Experience</h3>
            </div>

            {EXPERIENCE_DATA.map((exp, expIdx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: expIdx * 0.15 }}
                className="p-6 rounded-3xl bg-[#0a0a0c]/80 border border-white/10 hover:border-neutral-750 shadow-2xl relative overflow-hidden group"
              >
                {/* Purple glowing bubble accent */}
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-purple-500/5 blur-3xl rounded-full" />

                <div className="space-y-4">
                  
                  {/* Job/intern tags */}
                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-base leading-tight group-hover:text-[#00D4FF] transition-colors">{exp.role}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-neutral-450 text-[11px] font-mono font-light">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#00D4FF]">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Bullets layout */}
                  <ul className="space-y-2 mt-4 text-xs sm:text-sm font-light text-neutral-300 font-sans leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start">
                        <span className="text-[#8B5CF6] font-bold text-sm block mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight metrics panel - Bento style */}
                  <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-2">
                    {exp.metrics.map((met, mIdx) => (
                      <div key={mIdx} className="bg-black/60 p-2.5 rounded-xl border border-white/5 text-center space-y-1 font-mono">
                        <span className="block text-xs sm:text-sm font-black text-[#00D4FF]">{met.value}</span>
                        <span className="block text-[8px] text-neutral-500 uppercase tracking-wider leading-tight">{met.label}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Academic Milestones */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-5 h-5 text-[#00D4FF]" />
              <h3 className="text-white font-sans font-bold text-xl tracking-wide font-sans">Academic Roadmap</h3>
            </div>

            <div className="relative border-l border-white/10 ml-4 space-y-6 pl-6">
              {EDUCATION_DATA.map((edu, eduIdx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: eduIdx * 0.15 }}
                  className="relative group space-y-3"
                >
                  
                  {/* Outer bullet indicators */}
                  <div className="absolute -left-[31px] top-2.5 w-4.5 h-4.5 rounded-full bg-black border-2 border-[#00D4FF] flex items-center justify-center group-hover:border-[#8B5CF6] transition-colors z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>

                  <div className="p-6 rounded-3xl bg-[#0a0a0c]/85 border border-white/10 group-hover:border-neutral-750 transition-all backdrop-blur-xl relative">
                    
                    {/* CGPA rating top right label - Bento Pill */}
                    <div className="absolute top-4 right-4 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] text-[#00D4FF] font-mono tracking-wider font-bold group-hover:bg-[#00D4FF]/10 transition-colors">
                      {edu.grade}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest block font-bold">{edu.duration}</span>
                      <h4 className="text-white font-bold text-base leading-snug group-hover:text-[#00D4FF] transition-colors pr-16 font-sans">
                        {edu.degree}
                      </h4>
                      <p className="text-neutral-450 text-[11px] font-light">
                        {edu.school} {edu.board && `(${edu.board})`}
                      </p>
                    </div>

                    {/* Class coursework labels inside bento inner block */}
                    {edu.coursework && (
                      <div className="pt-4 mt-3 border-t border-white/5 space-y-2">
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Relevant Core focus:</span>
                        <div className="flex flex-wrap gap-1">
                          {edu.coursework.map((course) => (
                            <span key={course} className="bg-black/55 text-[9.5px] text-neutral-300 border border-white/5 rounded-lg px-2.5 py-1 font-sans">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
