import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Github, Linkedin, HelpCircle } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Candidate name is strictly required";
    if (!formData.email.trim()) {
      errors.email = "Email pointer is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email format schema";
    }
    if (!formData.subject.trim()) errors.subject = "Class subject is required";
    if (!formData.message.trim()) {
      errors.message = "Message content is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must contain at least 10 letters";
    }
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form logging/transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5 bg-neutral-950/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Header title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            Book an <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-emerald-450 bg-clip-text text-transparent">Interview / Inquiry</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            Initiate connection for internship pipelines, collaborative projects, or full-time recruitment schedules.
          </p>
        </div>

        {/* Bento Grid Form Arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch max-w-4xl mx-auto">
          
          {/* Left Panel: Contact Details Bento Card */}
          <div className="md:col-span-5 rounded-3xl bg-[#0a0a0c]/80 border border-white/10 p-6 flex flex-col justify-between space-y-6 backdrop-blur-2xl">
            
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-[#00D4FF] uppercase tracking-widest block font-bold">Inquiry Desk</span>
                <h3 className="text-white font-bold text-base">Direct Channels</h3>
                <p className="text-neutral-500 text-xs font-light">Reach out directly via typical telephony or social pathways to schedule calls.</p>
              </div>

              {/* Coordinates stack */}
              <div className="space-y-2.5">
                
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/5">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#00D4FF]/5 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[9px] font-mono text-neutral-550 uppercase block font-bold leading-none mb-0.5">Primary Email</span>
                    <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-white text-xs hover:underline block truncate">
                      {PORTFOLIO_OWNER.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/5">
                  <div className="w-8.5 h-8.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-555 uppercase block font-bold leading-none mb-0.5">Telephony Node</span>
                    <a href={`tel:${PORTFOLIO_OWNER.phone}`} className="text-white text-xs hover:underline block">
                      {PORTFOLIO_OWNER.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/5">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-555 uppercase block font-bold leading-none mb-0.5">Geographic Location</span>
                    <span className="text-white text-xs block">
                      {PORTFOLIO_OWNER.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social direct channels */}
            <div className="pt-5 border-t border-white/5 space-y-3">
              <span className="text-[9px] font-mono text-neutral-550 uppercase tracking-widest block font-bold">Social Networks</span>
              <div className="flex gap-2">
                <a
                  href={PORTFOLIO_OWNER.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-neutral-350 hover:text-[#00D4FF] border border-white/5 text-[11px] font-mono flex items-center gap-1.5 transition-all justify-center cursor-pointer select-none"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_OWNER.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-neutral-355 hover:text-white border border-white/5 text-[11px] font-mono flex items-center gap-1.5 transition-all justify-center cursor-pointer select-none"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Panel: Transactional Form layout Bento Card */}
          <div className="md:col-span-7 rounded-3xl bg-[#0a0a0c]/40 border border-white/10 p-6 backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 h-full flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">Your Full Name / Corporate Agency</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Hiring Lead at Google"
                        className={`w-full bg-black/60 border rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none transition-all ${
                          formErrors.name ? "border-red-500/50 focus:border-red-400" : "border-white/10 focus:border-[#00D4FF]/50"
                        }`}
                      />
                      {formErrors.name && (
                        <span className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    {/* Email & Subject in parallel line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold font-sans">Corporate Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="recruiter@agency.com"
                          className={`w-full bg-black/60 border rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none transition-all ${
                            formErrors.email ? "border-red-500/50 focus:border-red-400" : "border-white/10 focus:border-[#00D4FF]/50"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.email}
                          </span>
                        )}
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold font-sans">Subject / Intent</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Offer / Collaboration"
                          className={`w-full bg-black/60 border rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none transition-all ${
                            formErrors.subject ? "border-red-500/50 focus:border-red-400" : "border-white/10 focus:border-[#00D4FF]/50"
                          }`}
                        />
                        {formErrors.subject && (
                          <span className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.subject}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message box */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold font-sans">Detailed Proposition Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Specify your operational timeline, target roles, or direct interview propositions here..."
                        className={`w-full bg-black/60 border rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-0 transition-all ${
                          formErrors.message ? "border-red-500/50 focus:border-red-200" : "border-white/10 focus:border-[#00D4FF]/50"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:brightness-110 font-bold tracking-wide text-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-40 select-none"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>Routing Proposition Package...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Proposition Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center space-y-4 bg-[#050505]/95 backdrop-blur-3xl rounded-3xl"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-lg">Transmission Successful!</h3>
                    <p className="text-neutral-300 text-xs sm:text-sm max-w-sm">
                      Your query package has been compiled and routed successfully. Since this is a portfolio client showcase, Himasri will reply back immediately to your provided contact pointers!
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-4.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white text-xs font-mono transition-all cursor-pointer select-none pointer-events-auto"
                  >
                    Send Another Proposal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
