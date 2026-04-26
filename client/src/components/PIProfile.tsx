import { motion } from "framer-motion";
import piProfileImg from "@/assets/images/pi-profile.png";

export function PIProfile() {
  return (
    <section id="pi" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase mb-12">
          <span className="w-8 h-px bg-primary"></span>
          Principal Investigator
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 lg:w-1/4"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-panel p-2">
              <img src={piProfileImg} alt="Prof. Chang Hoon Shin" className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-display font-bold text-white">Chang Hoon Shin</h3>
              <p className="text-primary mb-4">Professor / Lab Director</p>
              <p className="text-sm text-muted-foreground">Department of Mechanical Engineering<br/>Incheon National University</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 lg:w-3/4"
          >
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">A National-Level Expert in Energy Systems</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over 20 years of experience at a major national energy corporation as Chief Research Engineer and Research Center leadership, Dr. Shin brings deep industry expertise in LNG terminals, hydrogen systems, pipeline networks, and fluid machinery. He has planned and led national R&D programs with large-scale budgets and holds extensive global experience across major international energy projects.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Flagship Research Programs
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AI-based fault diagnosis for LNG & hydrogen plant equipment</li>
                    <li>• Digital twin-based real-time risk prediction systems</li>
                    <li>• AI-driven gas demand forecasting & supply optimization</li>
                    <li>• Smart hydrogen / natural gas station systems</li>
                    <li>• AI-based pipeline defect detection (ILI data + object detection)</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs text-primary font-medium">
                    * National-scale R&D projects with direct application to operational infrastructure.
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-primary/20">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Education Philosophy
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Understand physics deeply</li>
                    <li>• Solve real industrial problems</li>
                    <li>• Build actual digital engineering systems</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs text-primary font-medium">
                    * Students will experience: CFD + programming, AI modeling, Web/App system development. From theory → implementation → deployment.
                  </div>
                </div>
              </div>

              {/* Detailed academic & career history */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Professional Experience</h4>
                    <ul className="space-y-4">
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                        <div className="text-sm font-medium text-white">Incheon National University</div>
                        <div className="text-xs text-primary mb-1">Professor, Dept. of Mechanical Engineering</div>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-white/30 before:rounded-full">
                        <div className="text-sm font-medium text-white/80">National Energy Corporation (20+ years)</div>
                        <div className="text-xs text-muted-foreground mb-1">Chief Research Engineer, Head of R&D Center</div>
                        <p className="text-xs text-muted-foreground/70 leading-relaxed mt-1">
                          Led strategic national R&D projects covering LNG terminals, national gas pipeline networks, hydrogen infrastructure, and offshore plant engineering.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Strategic Advisory & Leadership</h4>
                    <ul className="space-y-4 text-sm">
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/60 before:rounded-full">
                        <div className="font-medium text-white/90">National R&D Technology Appraisal Boards</div>
                        <div className="text-xs text-muted-foreground">Top Expert & Steering Committee Member (Energy Resources, Infrastructure, Science & Tech)</div>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/60 before:rounded-full">
                        <div className="font-medium text-white/90">Major Academic & Engineering Societies</div>
                        <div className="text-xs text-muted-foreground">Executive Director & Board Member (Mechanical Engineering, Gas, Computational Fluids, Petroleum)</div>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/60 before:rounded-full">
                        <div className="font-medium text-white/90">National Competency Standards (NCS)</div>
                        <div className="text-xs text-muted-foreground">Expert Evaluator</div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Major R&D Project Planning & Leadership</h4>
                    <ul className="space-y-4 text-sm">
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                        <div className="font-bold text-primary">Reverse Engineering for Offshore & Shale Gas Facilities</div>
                        <div className="text-xs text-white/90">Principal Investigator (National R&D, 2013-2020)</div>
                        <p className="text-xs text-muted-foreground mt-1">Led a massive national R&D initiative that fundamentally advanced Korea's technological independence in offshore energy infrastructure.</p>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-400/60 before:rounded-full">
                        <div className="font-medium text-white/90">AI-Integrated Smart Stations & H2 Pipeline Networks</div>
                        <div className="text-xs text-primary/80">Chairman, National R&D Preliminary Planning Committee</div>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-400/60 before:rounded-full">
                        <div className="font-medium text-white/90">AI-Driven Anomaly Diagnosis for LNG/LH2 Plants</div>
                        <div className="text-xs text-muted-foreground">Principal Investigator (National R&D, 2025-2028)</div>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-400/60 before:rounded-full">
                        <div className="font-medium text-white/90">High-Speed Pipeline Defect Detection (AI & ILI Data)</div>
                        <div className="text-xs text-muted-foreground">Principal Investigator (Public Utility, 2024-2025)</div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Key Awards & Honors</h4>
                    <ul className="space-y-4 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500/80 mt-0.5">🏆</span>
                        <div>
                          <div className="font-medium text-white/90">Minister's Commendation for Meritorious Service</div>
                          <div className="text-xs text-muted-foreground">Ministry of Trade, Industry and Energy</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500/80 mt-0.5">🏆</span>
                        <div>
                          <div className="font-medium text-white/90">Top 100 Outstanding National R&D Achievements</div>
                          <div className="text-xs text-muted-foreground">Ministry of Science and ICT (2018)</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500/80 mt-0.5">🏆</span>
                        <div>
                          <div className="font-medium text-white/90">100 Technologies and Leaders of the Future</div>
                          <div className="text-xs text-muted-foreground">National Academy of Engineering of Korea (2020)</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
