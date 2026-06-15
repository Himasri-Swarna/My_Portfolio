import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ShieldCheck, Star, Users, Flag, Trophy, BookOpen } from "lucide-react";
import { CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from "../data";

export default function AchievementsGrid() {
  const [activeTab, setActiveTab] = useState<'certifications' | 'accomplishments'>('certifications');

  return (
    <section id="credentials" className="py-20 relative border-t border-white/5 bg-[#050505]/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Header title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            Credentials &amp; <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-emerald-450 bg-clip-text text-transparent">Key Honors</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            An audited catalog of certifications, hackathon placings, leadership alignments, and industry participation badges.
          </p>
        </div>

        {/* Tab Selection Filter shaped as modern Bento Capsule */}
        <div className="flex justify-center items-center gap-2.5 mb-10 p-1.5 rounded-full bg-white/5 border border-white/10 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex-1 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'certifications'
                ? "bg-gradient-to-tr from-[#00D4FF]/10 to-[#8B5CF6]/15 border border-[#00D4FF]/40 text-[#00D4FF] shadow-lg"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Certifications ({CERTIFICATIONS_DATA.length})
          </button>
          
          <button
            onClick={() => setActiveTab('accomplishments')}
            className={`flex-1 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'accomplishments'
                ? "bg-gradient-to-tr from-[#00D4FF]/10 to-[#8B5CF6]/15 border border-[#8B5CF6]/40 text-purple-400 shadow-lg"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Club &amp; Awards ({ACHIEVEMENTS_DATA.length})
          </button>
        </div>

        {/* Core Layout Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'certifications' ? (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {CERTIFICATIONS_DATA.map((cert, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-3xl border transition-all ${
                    cert.highlight 
                      ? "bg-gradient-to-b from-[#00D4FF]/5 to-[#0a0a0c]/80 border-[#00D4FF]/30 shadow-md shadow-[#00D4FF]/5" 
                      : "bg-[#0a0a0c]/80 border-white/10 hover:border-neutral-700"
                  }`}
                >
                  <div className="space-y-4">
                    
                    {/* Badge sign */}
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-black/60 border border-white/5 flex items-center justify-center">
                        <ShieldCheck className={`w-5 h-5 ${cert.highlight ? "text-[#00D4FF]" : "text-neutral-400"}`} />
                      </div>
                      <span className="text-[10px] font-mono bg-black/60 text-neutral-400 border border-white/5 px-2.5 py-1 rounded-lg">
                        {cert.date}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-white font-bold text-sm leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-neutral-400 text-xs font-light font-sans">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.highlight && (
                      <div className="inline-flex items-center gap-1.5 text-[9px] font-mono text-[#00D4FF] bg-[#00D4FF]/5 px-2.5 py-1 rounded-lg border border-[#00D4FF]/20 uppercase tracking-wide">
                        <Star className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                        <span>Pre-vetted Course Badge</span>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="accomplishments"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div
                  key={ach.id}
                  className="p-6 rounded-3xl bg-[#0a0a0c]/80 border border-white/10 hover:border-neutral-700"
                >
                  <div className="flex gap-4 items-start">
                    
                    {/* Large display index emoji */}
                    <div className="w-12 h-12 rounded-2xl bg-black/80 border border-white/5 flex items-center justify-center text-xl flex-shrink-0">
                      {ach.emoji}
                    </div>

                    <div className="space-y-2 flex-grow">
                      
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <div>
                          <span className="text-[9px] font-mono text-[#8B5CF6] uppercase tracking-wider block font-bold">{ach.category}</span>
                          <h4 className="text-white font-bold text-sm sm:text-base leading-snug font-sans">{ach.title}</h4>
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-black/60 border border-white/5 text-neutral-400">
                          {ach.organization}
                        </span>
                      </div>

                      <p className="text-neutral-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                        {ach.description}
                      </p>

                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
