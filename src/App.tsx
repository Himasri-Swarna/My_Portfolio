import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowUp, Menu, X, Sparkles, Clock, Globe } from "lucide-react";

// Sub-component Imports
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import RecruiterSection from "./components/RecruiterSection";
import AIAssistant from "./components/AIAssistant";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import AchievementsGrid from "./components/AchievementsGrid";
import ContactForm from "./components/ContactForm";

import { PORTFOLIO_OWNER } from "./data";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Track scroll progress for the top active bar indicators
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };

    const updateClock = () => {
      // Dynamic local/UTC time display for the footer clock
      const now = new Date();
      setCurrentTime(now.toLocaleString("en-US", { hour12: false }));
    };

    window.addEventListener("scroll", handleScroll);
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // Account for the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Welcome", id: "welcome" },
    { label: "Why Hire Me", id: "why-hire-me" },
    { label: "AI Representative", id: "ai-agent" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Story Line", id: "experience" },
    { label: "Honors", id: "credentials" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <div id="welcome" className="relative min-h-screen text-white font-sans antialiased bg-[#050508] selection:bg-[#00D4FF]/35 selection:text-white">
      
      {/* Background Ambience particles */}
      <ParticleBackground />

      {/* Top scroll progress indicator thread */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-emerald-400 z-50 origin-left" 
        style={{ scaleX }}
      />

      {/* Main Header navigation bar */}
      <header className={`fixed left-4 right-4 z-40 transition-all duration-300 max-w-6xl mx-auto rounded-full border ${
        isScrolled 
          ? "top-3 py-2 bg-[#050508]/85 border-white/10 backdrop-blur-xl shadow-2xl px-5" 
          : "top-4 py-3 bg-white/5 border-white/10 px-5 backdrop-blur-md"
      }`}>
        <div className="mx-auto flex items-center justify-between">
          
          {/* Logo Name */}
          <button 
            onClick={() => scrollToSection("welcome")}
            className="flex items-center gap-2 text-left group font-mono"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] p-[1.5px] group-hover:rotate-6 transition-all duration-300">
              <div className="w-full h-full rounded-lg bg-black flex items-center justify-center font-bold text-xs text-white">
                YS
              </div>
            </div>
            <div className="space-y-0.5">
              <h1 className="text-white font-bold text-sm leading-none tracking-wide group-hover:text-[#00D4FF] transition-colors">
                HIMASRI SWARNA
              </h1>
              <span className="text-[9px] text-[#00D4FF] block leading-none tracking-widest uppercase">
                AI Engineering Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link bar */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-900/60 transition-all cursor-pointer pointer-events-auto"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Hire actions element */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("ai-agent")}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-[#00D4FF] text-xs font-mono border border-neutral-800 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Agent</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4.5 py-2 rounded-xl bg-gradient-to-tr from-[#00D4FF] to-blue-500 hover:brightness-110 text-black text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.15)]"
            >
              Hire Competence
            </button>
          </div>

          {/* Mobile responsive toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[74px] left-4 right-4 z-30 bg-[#07070a]/95 border border-white/10 backdrop-blur-2xl xl:hidden overflow-hidden py-6 rounded-3xl shadow-2xl"
          >
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left py-2 px-4 rounded-xl text-sm font-mono text-neutral-300 hover:text-[#00D4FF] hover:bg-neutral-900/50 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-neutral-900 my-2" />
              <div className="grid grid-cols-2 gap-3 px-4">
                <button
                  onClick={() => scrollToSection("ai-agent")}
                  className="py-3 px-4 rounded-xl bg-neutral-900 text-center text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 cursor-pointer"
                >
                  Consult AI agent
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-blue-500 text-center text-xs font-semibold text-black cursor-pointer"
                >
                  Hire Her
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Core Section Stream Blocks */}
      <main className="relative pt-[70px]">
        
        {/* HERO SECTION */}
        <Hero 
          onScrollToProjects={() => scrollToSection("projects")}
          onScrollToContact={() => scrollToSection("contact")}
          onScrollToAssistant={() => scrollToSection("ai-agent")}
        />

        {/* WHY HIRE ME EVALUATION PORTAL */}
        <RecruiterSection />

        {/* GEMINI AI TWIN REPRESENTATIVE AGENT CHAT */}
        <AIAssistant />

        {/* DETAILED ROADMAP SKILLS MATRIX */}
        <Skills />

        {/* DESIGNED PORTFOLIO PROJECTS PANEL */}
        <Projects />

        {/* EDUCATION & INDUSTRYTIMELINE ROADMAP */}
        <Timeline />

        {/* AUDITED BADGES & COLLEGE HONORS ACCOLADES */}
        <AchievementsGrid />

        {/* TRANSACTIONAL INTEREST contact FORM */}
        <ContactForm />

      </main>

      {/* Footer information desk */}
      <footer className="bg-black border-t border-neutral-900/70 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center font-bold text-[10px] text-black">
                YS
              </div>
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">Y.Himasri Swarna</span>
            </div>
            <p className="text-neutral-500 text-xs font-sans font-light leading-relaxed">
              Seeking collaborative software opportunities in Frontend development, Backend APIs or AI pipeline integration.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-center text-neutral-500 font-mono text-[10px] space-y-2">
            <div className="flex items-center gap-1.5 justify-start md:justify-center">
              <Clock className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
              <span>Platform Clock: {currentTime}</span>
            </div>
            <div className="flex items-center gap-1.5 justify-start md:justify-center">
              <Globe className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Location Context: Visakhapatnam, IN</span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end gap-5 text-[11px] font-mono text-neutral-500">
            <a href={PORTFOLIO_OWNER.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={PORTFOLIO_OWNER.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="hover:text-white transition-colors">Email</a>
          </div>

        </div>

        {/* Self copyright disclosure */}
        <div className="container mx-auto px-4 lg:px-8 pt-8 mt-8 border-t border-neutral-950 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-600">
          <span>&copy; {new Date().getFullYear()} Y.Himasri Swarna. Audited Digital Portfolio. All rights reserved.</span>
          <span className="text-neutral-700">Created as an Elite AI-Supported Developer Representation</span>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xl flex items-center justify-center cursor-pointer pointer-events-auto transition-transform active:scale-95 shadow-xl hover:border-[#00D4FF]/30"
          >
            <ArrowUp className="w-5 h-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
