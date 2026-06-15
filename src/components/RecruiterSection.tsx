import React from "react";
import { motion } from "motion/react";
import { Sparkles, Code2, Heart, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function RecruiterSection() {
  const HIGHLIGHTS = [
    {
      title: "Core AI & Web Synthesis",
      concept: "Technical Expertise",
      summary: "Combines academic specializing in Artificial Intelligence with custom API scripting, delivering real web products featuring real-world intelligence.",
      proof: "Architected 'JanVaani', a multilingual voice assistant integration using OpenAI & ElevenLabs to assist rural populations without internet.",
      icon: <Code2 className="w-5 h-5 text-[#00D4FF]" />,
      badge: "OpenAI State Finalist",
      colSpan: "md:col-span-2"
    },
    {
      title: "Rapid Learning Mindset",
      concept: "Learning & Adaptability",
      summary: "Thrives on high-velocity learning, mastering cutting-edge cloud parameters and algorithmic sprints in compressed timeframes.",
      proof: "Committed-to & completed Google Cloud GenAI Specialization with 24 skill badges, and NxtCode 7 Under 7 challenge.",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      badge: "24 Google Cloud Badges",
      colSpan: "md:col-span-1"
    },
    {
      title: "High-Agency Organizing Leader",
      concept: "Leadership Qualities",
      summary: "Exhibits leadership by taking project ownership, organizing collaborative environments, and presenting prototypes to industry experts.",
      proof: "AIPT Club Core Member: Directed 5-student hackathon team to Top 5 finish, and hosted regional coding events for 100+ participants.",
      icon: <ArrowUpRight className="w-5 h-5 text-purple-450" />,
      badge: "Club Core & Hack Lead",
      colSpan: "md:col-span-1"
    },
    {
      title: "Design-to-Production Native",
      concept: "Problem-Solving Ability",
      summary: "Excels in translating complex technical specifications into human-accessible, clean interfaces with verified product improvements.",
      proof: "Redesigned the Ola booking workflow, yielding a 30% navigation efficiency gain and +15% usability score enhancement.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      badge: "SUS Usability Score +15%",
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section id="why-hire-me" className="py-20 relative border-t border-white/5 bg-[#050505]/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/5 border border-[#00D4FF]/25 text-xs font-mono text-[#00D4FF] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiter Evaluation Portal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            Why Hire <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-emerald-450 bg-clip-text text-transparent">Himasri Swarna?</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            A comprehensive analytical layout of her competitive advantages, combining top-tier academics with collaborative high-agency production.
          </p>
        </div>

        {/* Bento Grid layout containing 4 asymmetrical items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {HIGHLIGHTS.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-[#0a0a0c]/80 border border-white/10 rounded-3xl hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-xl ${col.colSpan}`}
            >
              <div className="space-y-4">
                
                {/* Header card details */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-[#00D4FF]/5 group-hover:border-[#00D4FF]/30 transition-colors">
                      {col.icon}
                    </div>
                    <div>
                      <span className="text-[9px] text-[#00D4FF] font-mono tracking-widest uppercase block mb-0.5">{col.concept}</span>
                      <h3 className="text-white font-bold text-sm tracking-tight group-hover:text-[#00D4FF] transition-colors">{col.title}</h3>
                    </div>
                  </div>
                  <span className="text-[9.5px] font-mono bg-neutral-950/80 border border-neutral-900 px-2.5 py-1 rounded text-neutral-400 group-hover:text-white shrink-0">
                    {col.badge}
                  </span>
                </div>

                {/* Summary descriptive details */}
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  {col.summary}
                </p>

                {/* Solid proof block styled nicely inside bento background */}
                <div className="pt-3 border-t border-neutral-900">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Direct Case Proof:</span>
                  <p className="text-[11px] text-neutral-400 italic bg-[#050505]/45 p-2.5 rounded-xl border border-neutral-900/60 leading-relaxed font-sans">
                    "{col.proof}"
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Resume Fit Indicators styled as a clean Bento Card panel row */}
        <div className="mt-4 max-w-5xl mx-auto bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h4 className="text-white text-xs font-bold tracking-wider font-mono uppercase text-[#8B5CF6]">Interactive Fit Summary Metrics</h4>
            <p className="text-neutral-400 text-xs font-light">Direct metrics compiled from verifyable state challenges, academic scoring indices and institutional audits.</p>
          </div>
          
          <div className="flex flex-wrap gap-3 font-mono text-xs w-full md:w-auto">
            <div className="bg-[#050505] border border-neutral-900 px-4.5 py-3 rounded-2xl text-center flex-1 md:flex-none md:min-w-[110px]">
              <span className="block text-xl font-bold text-[#00D4FF]">8.32</span>
              <span className="text-[8px] text-neutral-500 uppercase tracking-wider block mt-0.5">B.Tech CGPA</span>
            </div>
            
            <div className="bg-[#050505] border border-neutral-900 px-4.5 py-3 rounded-2xl text-center flex-1 md:flex-none md:min-w-[110px]">
              <span className="block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]">24</span>
              <span className="text-[8px] text-neutral-500 uppercase tracking-wider block mt-0.5">GenAI Badges</span>
            </div>
            
            <div className="bg-[#050505] border border-neutral-900 px-4.5 py-3 rounded-2xl text-center flex-1 md:flex-none md:min-w-[110px]">
              <span className="block text-xl font-bold text-emerald-400">93.8%</span>
              <span className="text-[8px] text-neutral-500 uppercase tracking-wider block mt-0.5">Inter Score</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
