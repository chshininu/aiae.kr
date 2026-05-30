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
          className="max-w-5xl mx-auto"
        >
          {/* 텍스트 안내 영역 */}
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Join the Next Generation of Fluid & Energy Systems Engineers</h2>
            
            <p className="text-xl text-primary mb-10 max-w-2xl mx-auto font-medium">
              "A lab that brings real industrial systems into the era of AI."
            </p>

            <div className="mb-10 inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase">
              PASSIONATE RESEARCHERS ALWAYS WELCOME
            </div>

            <div className="max-w-xl mx-auto mb-10 text-muted-foreground text-lg leading-relaxed">
              <p className="mb-6">
                AIAE Lab is constantly looking for highly motivated students who want to build the future of fluid and energy systems through physics and AI.
              </p>
              <p className="text-white font-medium">
                연구실에 관심있는 분들은 언제든 이메일(<a href="#" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:chshin` + `@` + `inu.ac.kr`;
                }} className="text-primary hover:underline">chshin@inu.ac.kr</a>)로 자유롭게 연락해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}