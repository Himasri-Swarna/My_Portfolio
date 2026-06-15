import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, FileText, Sparkles, MapPin, Mail, Phone, Upload, Github, Linkedin, Award, Cpu, Star } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

// Typewriter hook/helper inner component
function TypewriterHeader() {
  const roles = [
    "AI Specialist",
    "Frontend Developer",
    "Backend & REST API Builder",
    "UI/UX Interface Architect",
    "State Hackathon Finalist"
  ];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const target = roles[currentRoleIdx];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(target.substring(0, currentText.length + 1));
        setTypingSpeed(75);
      }, typingSpeed);

      if (currentText === target) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(target.substring(0, currentText.length - 1));
        setTypingSpeed(45);
      }, typingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  return (
    <span className="text-[#00D4FF] inline-block font-mono border-r-2 border-[#00D4FF] animate-pulse">
      {currentText || "\u00A0"}
    </span>
  );
}

interface HeroProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
  onScrollToAssistant: () => void;
}

export default function Hero({ onScrollToProjects, onScrollToContact, onScrollToAssistant }: HeroProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  const triggerUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-neutral-950/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Bento Card 1: MAIN HERO CARD (Spans 1 to 3 columns, and 2 rows on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-[#0c0c0e] to-[#14151b] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl group min-h-[420px]"
          >
            {/* Ambient cyan glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00D4FF]/10 rounded-full blur-[90px] group-hover:bg-[#00D4FF]/20 transition-all duration-705" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-[90px]" />

            <div className="relative space-y-6">
              {/* Hiring Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs tracking-wider uppercase font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
                <span>Open for Internship &amp; Full-Time Enlistments</span>
              </div>

              {/* Title Header */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tighter text-white leading-[1.1]">
                TALENTED ENG. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00D4FF] to-[#8B5CF6]">
                  {PORTFOLIO_OWNER.name}
                </span>
              </h1>

              {/* Specializations and introduction description */}
              <div className="space-y-4">
                <p className="text-lg font-medium text-neutral-300 flex flex-wrap items-center gap-2">
                  <span>Specializing in</span> <TypewriterHeader />
                </p>
                
                <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl font-sans">
                  {PORTFOLIO_OWNER.aboutMe} Currently pursuing my B.Tech in Computer Science and Engineering with a major focus on Artificial Intelligence at <span className="text-[#00D4FF] font-medium border-b border-[#00D4FF]/30">Vignan's Institute</span>.
                </p>
              </div>
            </div>

            {/* Action CTAs at bottom of main Bento card */}
            <div className="flex flex-wrap items-center gap-3 pt-8 relative z-10">
              <button 
                onClick={onScrollToProjects}
                className="px-5 py-3 rounded-xl bg-[#00D4FF] text-black font-bold text-xs tracking-tight uppercase hover:bg-white transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,212,255,0.2)]"
              >
                <span>Projects Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onScrollToAssistant}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono text-xs tracking-tight transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Ask My AI Twin</span>
                <Sparkles className="w-4.5 h-4.5 text-[#8B5CF6]" />
              </button>

              <button
                onClick={handlePrintResume}
                className="px-4.5 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ml-auto sm:ml-0"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Save/Print PDF</span>
              </button>
            </div>
          </motion.div>

          {/* Bento Card 2: PORTRAIT & UPLOAD PORTAL (Spans 1 column on right, stays 2 rows tall) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 bg-[#0d0d10] border border-white/10 rounded-3xl p-4 flex flex-col justify-between relative overflow-hidden group min-h-[360px] md:h-full"
          >
            {/* Spinning background gradients on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/10 via-transparent to-[#8B5CF6]/10 opacity-40 group-hover:opacity-75 transition-opacity duration-705 pointer-events-none" />

            {/* Profile Frame Content */}
            <div className="w-full h-full rounded-2xl bg-[#050505]/80 overflow-hidden relative flex flex-col justify-between p-3 border border-neutral-900 group">
              
              {uploadedImage ? (
                <div className="relative w-full h-full min-h-[220px]">
                  <img 
                    src={uploadedImage} 
                    alt={PORTFOLIO_OWNER.name} 
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                </div>
              ) : (
                <div className="w-full flex-1 flex flex-col items-center justify-center text-center p-4 py-8 space-y-4">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#00D4FF]/40 animate-spin" style={{ animationDuration: "15s" }} />
                    <div className="absolute inset-1.5 rounded-full border border-double border-[#8B5CF6]/40 animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }} />
                    <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#00D4FF]/20 to-[#8B5CF6]/20 flex items-center justify-center backdrop-blur-sm border border-neutral-800">
                      <span className="text-sm font-mono font-bold text-white tracking-widest">YHS</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-xs tracking-wide">Y. HIMASRI SWARNA</h3>
                    <p className="text-[10px] text-[#00D4FF] font-mono leading-none">B.Tech Undergrad</p>
                    <p className="text-[9px] text-neutral-500 font-mono">Visakhapatnam, IN</p>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400 font-mono">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                    <span>Representative Active</span>
                  </div>
                </div>
              )}

              {/* Floating micro indicators inside portrait bottom */}
              <div className="z-10 mt-3 pt-3 border-t border-neutral-900 flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span>GPA: 8.32/10</span>
                <span>JNTU-GV BOARD</span>
              </div>

              {/* Upload portal overlay */}
              <div 
                onClick={triggerUploadClick}
                className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer text-white z-20 p-4 text-center"
              >
                <Upload className="w-7 h-7 text-[#00D4FF] animate-bounce" />
                <p className="text-xs font-mono font-bold">
                  {uploadedImage ? "Replace Portrait" : "Upload Headshot"}
                </p>
                <p className="text-[9px] text-neutral-400 max-w-[170px] leading-snug">
                  Click to select the resume profile JPG/PNG to populate this bento slot.
                </p>
              </div>
            </div>

            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
          </motion.div>

          {/* Bento Card 3: CORE TARGET DATA METRICS (Spans 2 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-[#050505]/40 border border-white/10 rounded-3xl p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">Quick Credentials</span>
                <span className="text-[9px] font-mono text-emerald-400">VERIFIED</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-neutral-400 font-mono uppercase">College CGPA</span>
                  <p className="text-2xl font-black text-white mt-1">8.32</p>
                  <span className="text-[9px] text-neutral-500 font-mono block">CSE + AI Focus</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-neutral-400 font-mono uppercase">Inter Board</span>
                  <p className="text-2xl font-black text-[#00D4FF] mt-1">93.8%</p>
                  <span className="text-[9px] text-neutral-500 font-mono block">Passed in 2022</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-neutral-400 font-mono">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" /> Visakhapatnam, AP</span>
              <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-500" /> SSC Score: 10.0 GPA</span>
            </div>
          </motion.div>

          {/* Bento Card 4: CORE TECH STACK DIALS (Spans 1 column on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="md:col-span-1 bg-[#050505]/40 border border-white/10 rounded-3xl p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[9px] font-mono uppercase tracking-widest text-[#8B5CF6] mb-3">Active Toolkit</h3>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "React.js", "MySQL", "GPT API", "Figma", "HTML5/CSS"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] text-neutral-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5">
              <span className="text-[9px] text-neutral-500 block font-mono">HACKATHONS ATTAINED</span>
              <span className="text-xs text-white font-medium block">Tech Innovator Finalist ✦</span>
            </div>
          </motion.div>

          {/* Bento Card 5: QUICK CONTACT / LET'S CONNECT (Spans 1 column, solid neon aesthetic) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="md:col-span-1 bg-[#00D4FF] hover:bg-[#00b0ff] rounded-3xl p-5 flex flex-col justify-between text-black transition-colors"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-[9px] font-black uppercase tracking-widest text-black/60 font-mono">Contact Nodes</h3>
              <Star className="w-3.5 h-3.5 text-black" />
            </div>

            <div className="space-y-1.5 mt-4">
              <p className="text-sm font-black leading-tight overflow-hidden text-ellipsis select-all">
                {PORTFOLIO_OWNER.email}
              </p>
              <p className="text-[11px] font-bold tracking-tight opacity-80">
                {PORTFOLIO_OWNER.phone}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-black/10 text-[9px] font-mono">
              <a href={PORTFOLIO_OWNER.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-0.5 hover:underline font-bold">
                <Linkedin className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a href={PORTFOLIO_OWNER.github} target="_blank" rel="noreferrer" className="flex items-center gap-0.5 hover:underline font-bold">
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
