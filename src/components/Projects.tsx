import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Sparkles, Code, Check, Layers, ChevronDown, ChevronUp } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI/ML' | 'UI/UX'>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const toggleExpandProject = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 relative border-t border-white/5 bg-neutral-950/40">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Title elements */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D4FF]/5 border border-[#00D4FF]/25 text-xs font-mono text-[#00D4FF] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Demonstrated Engineering Repositories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-emerald-405 bg-clip-text text-transparent">Creative Case Studies</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            A portfolio of her developed models and interfaces, featuring complex logical pipelines and human interface engineering with quantifiable outcomes.
          </p>
        </div>

        {/* Filter Navigation Tabs - Pill styled */}
        <div className="flex justify-center items-center gap-2.5 mb-10">
          {(['All', 'AI/ML', 'UI/UX'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedProjectId(null); // Reset detail expansion for consistency
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wide transition-all cursor-pointer select-none pointer-events-auto border ${
                activeCategory === cat
                  ? "bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  : "bg-white/5 text-neutral-400 border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento-style Grid containing the projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedProjectId === project.id;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-white/10 bg-[#0a0a0c]/80 hover:border-neutral-700 transition-all shadow-xl flex flex-col justify-between overflow-hidden relative group"
                >
                  
                  {/* Decorative gradient strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${
                    project.category === 'AI/ML' ? 'from-[#00D4FF] to-blue-500' : 'from-[#8B5CF6] to-pink-500'
                  }`} />

                  {/* Hyper-realistic Project Thumbnail Illustration */}
                  {project.imageUrl && (
                    <div className="h-44 w-full relative overflow-hidden bg-neutral-950 border-b border-white/5 select-none pointer-events-none">
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-[#0a0a0c]/20" />
                    </div>
                  )}

                  {/* Body elements container */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase bg-black/60 border border-white/10 px-2.5 py-1 rounded-lg text-[#00D4FF] font-bold">
                          {project.category}
                        </span>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-500 hover:text-white transition-colors"
                          >
                            <Github className="w-4.5 h-4.5" />
                          </a>
                        )}
                      </div>

                      <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#00D4FF] transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-neutral-300 text-xs sm:text-sm font-light font-sans leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-neutral-400 font-mono">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded-lg text-neutral-500 font-mono">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Collapsible Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/5 bg-black/40 px-6 py-4 space-y-4 text-xs font-sans overflow-hidden"
                      >
                        {/* Problem statement */}
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 tracking-wider block uppercase mb-1">Critical Challenge Solved:</span>
                          <p className="text-neutral-300 font-light leading-relaxed bg-[#050505]/40 p-2.5 rounded-xl border border-white/5 italic">
                            "{project.problemSolved}"
                          </p>
                        </div>

                        {/* Core features list */}
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 tracking-wider block uppercase mb-1.5">Model Implementations:</span>
                          <ul className="space-y-1">
                            {project.features.map((feat, fIdx) => (
                              <li key={fIdx} className="text-neutral-300 flex items-start gap-1.5 font-light leading-snug">
                                <span className="text-emerald-400 font-bold block mt-0.5">✓</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact results */}
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 tracking-wider block uppercase mb-1">Measurable Output Results:</span>
                          <div className="space-y-1.5 font-mono text-[10px]">
                            {project.impact.map((imp, iIdx) => (
                              <div key={iIdx} className="p-1 px-2.5 bg-black/40 border border-white/5 rounded-xl text-[#00D4FF] flex items-center gap-1.5 leading-snug">
                                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                <span>{imp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Full stack tech list */}
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 tracking-wider block uppercase mb-1">Complete Tech Inventory:</span>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((t) => (
                              <span key={t} className="bg-[#050505] px-2 py-0.5 rounded text-[9.5px] text-neutral-400 font-mono border border-white/5">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Actions Bar Footer */}
                  <div className="p-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpandProject(project.id)}
                      className="text-xs text-neutral-400 hover:text-white font-mono flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span className="font-bold">{isExpanded ? "Collapse Details" : "Inspect Key Architecture"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-[#00D4FF]" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#00D4FF] hover:text-[#00b0ff] transition-all hover:underline"
                      >
                        <span>GitHub Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
