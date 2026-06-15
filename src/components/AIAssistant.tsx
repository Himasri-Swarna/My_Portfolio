import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Bot, User, Trash2, HelpCircle } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Greetings! I am Himasri Swarna's AI representative twin, fine-tuned with her actual skill records, project history, and career goals. You can query me about her capabilities, project details, internship, or book an interview!"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  // Suggested prompt list for fast recruitment queries
  const SUGGESTED_PROMPTS = [
    { label: "Why hire Himasri?", query: "Why should we hire Himasri Swarna? Tell me her top value propositions." },
    { label: "Tell me about JanVaani", query: "Can you describe the JanVaani project, its technology stack, and its impact?" },
    { label: "Her AI Internship", query: "What did Himasri work on during her AI internship with Edunet Foundation?" },
    { label: "What is her B.Tech GPA?", query: "What are her educational qualifications, college name, and current B.Tech CGPA?" },
    { label: "Show contact details", query: "How can I contact Himasri for a job interview or internship offer?" }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isGenerating) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsGenerating(true);

    // Format chat history
    const historyPayload = messages
      .filter((m) => m.id !== "welcome")
      .reduce((acc: { question: string; answer: string }[], curr, index, arr) => {
        if (curr.sender === "user" && arr[index + 1]?.sender === "ai") {
          acc.push({
            question: curr.text,
            answer: arr[index + 1].text
          });
        }
        return acc;
      }, []);

    try {
      const response = await fetch("/api/recruiter-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      if (!response.ok) {
        throw new Error("Failed to consult Gemini backend.");
      }

      const data = await response.json();
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: data.reply || "I apologize, but I encountered an error. You can reach Himasri directly at yellapuhimasriswarna@gmail.com."
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I am having trouble connecting to her knowledge base. However, her resume records indicate she specializes in CSE (AI) with a CGPA of 8.32, has built JanVaani, and can be contacted directly at yellapuhimasriswarna@gmail.com or +91 8074325237."
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsGenerating(false);
    }
  };

  const clearChatHistory = () => {
    setMessages([
      {
        id: "welcome",
        sender: "ai",
        text: "Chat cleared! Ask me anything about Himasri's technical competency, leadership traits, or project architectures."
      }
    ]);
  };

  // Helper to format custom bold and lists manually in simple UI blocks
  const renderMessageContent = (txt: string) => {
    // Basic formatting for markdown bold (**) and bullet points
    const lines = txt.split("\n");
    return lines.map((line, idx) => {
      let isBullet = line.trim().startsWith("*") || line.trim().startsWith("-");
      let content = isBullet ? line.trim().substring(1).trim() : line;

      // Scan for **bold** text and split
      const parts = content.split("src/").join("").split("**");
      const formattedParts = parts.map((part, pIdx) => {
        if (pIdx % 2 === 1) {
          return <strong key={pIdx} className="font-semibold text-[#00D4FF]">{part}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={idx} className="list-disc ml-5 text-neutral-300 text-xs md:text-sm leading-relaxed mb-1 font-light">
            {formattedParts}
          </li>
        );
      }

      return (
        <p key={idx} className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-2 font-light font-sans">
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <section id="ai-agent" className="py-20 relative border-t border-neutral-900 bg-neutral-950/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Title details */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/20 text-xs font-mono text-purple-400 mb-3">
            <Bot className="w-3.5 h-3.5 animate-bounce" />
            <span>AI Twin Representative Core</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            Consult Her <span className="bg-gradient-to-r from-[#00D4FF] to-emerald-400 bg-clip-text text-transparent">AI Representative</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            Ask complex queries, explore technical stack limits, and evaluate job-role integrations directly with Himasri's dynamic knowledge agent.
          </p>
        </div>

        {/* Chat Interface Console Box */}
        <div className="w-full rounded-3xl border border-white/10 bg-[#08080c]/90 backdrop-blur-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Preset Prompts Sidebar */}
          <div className="lg:col-span-4 p-5 bg-black/60 border-b lg:border-b-0 lg:border-r border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <HelpCircle className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold">Fast Inquiries</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed font-light font-sans">
              Click any recommended topic to instantly trigger the Gemini prompt response:
            </p>

            <div className="flex flex-wrap lg:flex-nowrap lg:flex-col gap-2.5 pt-2">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt.query)}
                  disabled={isGenerating}
                  className="px-3.5 py-2 rounded-xl text-left text-xs bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all cursor-pointer font-light leading-snug w-full truncate"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-900/80 flex items-center justify-between">
              <span className="text-[10px] text-neutral-600 font-mono">Model: Gemini 3.5 Flash</span>
              <button 
                onClick={clearChatHistory}
                className="inline-flex items-center gap-1.5 text-[10px] text-red-400/80 hover:text-red-400 font-mono transition-colors pointer-events-auto cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Reset Chat</span>
              </button>
            </div>
          </div>

          {/* Core Chat Stream Box */}
          <div className="lg:col-span-8 flex flex-col h-[400px] sm:h-[450px] relative">
            
            {/* Stream View */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-neutral-900">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {/* Bot avatar symbol */}
                    {msg.sender === "ai" && (
                      <div className="w-7 h-7 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] flex-shrink-0 mt-0.5">
                        <Bot className="w-4.5 h-4.5" />
                      </div>
                    )}

                    <div className={`p-4 rounded-2xl max-w-[85%] border shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#00D4FF]/15 to-blue-500/10 border-[#00D4FF]/25 text-white"
                        : "bg-neutral-900/50 border-neutral-900 text-neutral-100"
                    }`}>
                      {/* Formatted body */}
                      {renderMessageContent(msg.text)}
                    </div>

                    {/* User profile symbol */}
                    {msg.sender === "user" && (
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loader signal */}
              {isGenerating && (
                <div className="flex items-start gap-3 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] flex-shrink-0 mt-0.5">
                    <Bot className="w-4.5 h-4.5 animate-pulse" />
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-900 text-neutral-400 text-xs md:text-sm font-sans font-light italic flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-ping" />
                    <span>Himasri's representative compiling response records...</span>
                  </div>
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            {/* Input action desk */}
            <div className="p-4 bg-black/60 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputText)}
                placeholder="Ask her AI representative (e.g. Tell me about her Python skills)"
                disabled={isGenerating}
                className="flex-1 bg-neutral-900/40 text-white placeholder-neutral-500 text-xs sm:text-sm px-4 py-3 rounded-xl border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none transition-all"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                disabled={!inputText.trim() || isGenerating}
                className="w-10 h-10 p-2 bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 flex items-center justify-center rounded-xl text-black transition-all cursor-pointer flex-shrink-0 pointer-events-auto"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
