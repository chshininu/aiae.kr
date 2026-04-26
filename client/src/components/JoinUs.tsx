import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

export function JoinUs() {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[300px] bg-primary/10 rounded-[100%] blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Join the Next Generation of Fluid & Energy Systems Engineers</h2>
          
          <p className="text-xl text-primary mb-10 max-w-2xl mx-auto font-medium">
            "A lab that brings real industrial systems into the era of AI."
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="glass-panel p-8 rounded-2xl border-white/10">
              <h3 className="text-white font-bold text-xl mb-4 border-b border-white/10 pb-4">We Train Students To:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                  Understand physics deeply
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                  Solve real industrial problems
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                  Build actual digital engineering systems
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-white/10">
              <h3 className="text-white font-bold text-xl mb-4 border-b border-white/10 pb-4">Students Will Experience:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                  CFD + Programming
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                  AI & Machine Learning Modeling
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                  Web/App System Development
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-10 inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase">
            FROM THEORY → IMPLEMENTATION → DEPLOYMENT
          </div>

          <a href="mailto:chshin@inu.ac.kr" className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-lg font-bold transition-all shadow-xl shadow-white/10">
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}