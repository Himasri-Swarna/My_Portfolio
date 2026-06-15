import React from "react";
import { motion } from "motion/react";
import { Cpu, Terminal, Database, Palette, CheckCircle } from "lucide-react";
import { SKILLS_DATA } from "../data";

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("program")) return <Terminal className="w-4 h-4 text-[#00D4FF]" />;
    if (t.includes("web")) return <Cpu className="w-4 h-4 text-[#8B5CF6]" />;
    if (t.includes("database") || t.includes("backend")) return <Database className="w-4 h-4 text-emerald-400" />;
    return <Palette className="w-4 h-4 text-amber-400" />;
  };

  return (
    <section id="skills" className="py-20 relative border-t border-white/5 bg-neutral-950/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Title details */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-emerald-405 bg-clip-text text-transparent">Competency Matrix</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            An extensive layout of her skill layers, calibrated into active, tested capabilities ready to deploy inside workspace clusters.
          </p>
        </div>

        {/* Categorized Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILLS_DATA.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-3xl bg-[#0a0a0c]/80 border border-white/10 hover:border-neutral-700 shadow-xl backdrop-blur-2xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-white font-bold text-sm font-sans tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Listing inside Category */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-300 font-mono tracking-wide flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00D4FF]" />
                        {skill.name}
                      </span>
                      <span className="text-[#00D4FF] font-mono text-[11px]">{skill.level}% Proficiency</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="h-1.5 w-full bg-black/80 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: sIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-[#00D4FF] via-blue-500 to-[#8B5CF6] rounded-full"
                      />
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Supplementary Personal Attributes & Fluent Dialects styled as matching Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 max-w-6xl mx-auto">
          
          {/* Attributes */}
          <div className="md:col-span-7 bg-[#0a0a0c]/50 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
            <h4 className="text-[#8B5CF6] text-[10px] font-mono font-bold tracking-wider uppercase mb-4">Professional Attributes</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Team Collaboration",
                "Self-Driven Autonomy",
                "Communication Channels",
                "Analytical Philosophy",
                "Clean Code Standards",
                "Agile Standups",
                "Critical Analysis"
              ].map((attr) => (
                <span key={attr} className="bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 px-3 py-2 rounded-xl text-xs font-light font-sans transition-all cursor-default">
                  ✦ {attr}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="md:col-span-5 bg-[#0a0a0c]/50 border border-white/10 p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between">
            <h4 className="text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase mb-4">Communication Dialects</h4>
            <div className="space-y-2.5 font-mono text-[11px]">
              <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-dashed border-white/5">
                <span className="text-neutral-300">English</span>
                <span className="text-emerald-400 text-[10px] uppercase font-bold">Professional Fluency</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-dashed border-white/5">
                <span className="text-neutral-300">Telugu</span>
                <span className="text-[#00D4FF] text-[10px] uppercase font-bold">Native Mastery</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-dashed border-white/5">
                <span className="text-neutral-300">Hindi</span>
                <span className="text-purple-400 text-[10px] uppercase font-bold">Conversational Fluency</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
