import { motion } from "motion/react";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-50 bg-[#060608] overflow-hidden">
      {/* Dynamic Ambient Blur Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#00d4ff]/10 blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[120px]"
      />

      {/* Cyber Tech Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" 
      />

      {/* Radial overlay to make corners deep black */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#050507] via-transparent to-[#050507] opacity-90" />
    </div>
  );
}
