import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";
import { ArrowRight, Activity, Database, Zap } from "lucide-react";

const KEYWORDS = [
  { label: "CFD", link: "#fundamental-physics" },
  { label: "Multiphase Flow", link: "#smart-stations" },
  { label: "Porous Media", link: "#fundamental-physics" },
  { label: "Energy Systems", link: "#gas-pipeline" },
  { label: "Digital Twin", link: "#offshore-systems" },
  { label: "AI Diagnostics", link: "#predictive-diagnostics" }
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="AI, Fluid Mechanics & Energy Systems" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-Aided Fluid & Energy Systems Engineering, AIAE
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-bold font-display leading-[1.3] md:leading-[1.1] tracking-tight mb-8"
          >
            Bridging Classical<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary whitespace-nowrap">Fluid & Energy Systems</span><br />
            <span className="whitespace-nowrap">with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Artificial Intelligence</span></span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mb-4 leading-relaxed font-sans"
          >
            Advancing national-scale energy infrastructure through physics-informed AI. At Incheon National University, the AIAE Lab integrates rigorous computational fluid dynamics (CFD), pipeline network simulation, and machine learning. We solve critical industrial challenges—from LNG and hydrogen safety to predictive diagnostics and digital twin platforms—translating first-principles fluid mechanics into autonomous, real-world engineering solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-10 text-white/90 p-6 border-l-4 border-primary bg-primary/5 rounded-r-2xl max-w-3xl backdrop-blur-sm"
          >
            <p className="font-sans font-bold text-xl md:text-2xl mb-4 text-white tracking-tight flex items-center gap-2">
              AI 응용 유체·에너지 시스템 연구실 <span className="font-display font-medium text-primary/90 text-lg md:text-xl tracking-normal mt-0.5">(AIAE Lab)</span>
            </p>
            <p className="mb-3 leading-[1.8] font-sans text-white/90 tracking-tight break-keep text-base md:text-lg">
              전통적인 유체역학과 인공지능을 융합하여, 에너지 설비와 유체 시스템의 예측·진단·최적화를 실현합니다.
            </p>
            <p className="text-sm md:text-base text-white/60 font-sans leading-[1.8] tracking-tight break-keep">
              전산유체역학(CFD), 다공질 유동, 그리고 AI 기반 디지털 트윈 기술을 바탕으로 저온·고압 유체의 수송 및 저장 시스템, LNG, 수소, 배관망 등 실제 산업 인프라 문제를 해결하는 연구를 수행합니다.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {KEYWORDS.map((word, i) => (
              <a 
                key={i} 
                href={word.link}
                className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white/80 text-sm font-medium tracking-wide hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all cursor-pointer block"
              >
                {word.label}
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#research" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-medium transition-all box-glow">
              Research
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#collaboration" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-lg text-white font-medium transition-all">
              Collaboration
            </a>
            <a href="#join" className="text-muted-foreground hover:text-white font-medium transition-colors ml-2">
              Join Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}