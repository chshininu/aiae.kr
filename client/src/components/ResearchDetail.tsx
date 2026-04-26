import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wind, Target, Activity, Droplet, ShieldCheck, Map } from "lucide-react";
import porousImg from "@/assets/images/theme-porous.png";
import pipelineImg from "@/assets/images/theme-pipeline.png";
import equipmentImg from "@/assets/images/theme-equipment.png";
import stationImg from "@/assets/images/theme-station.png";
import offshoreImg from "@/assets/images/theme-offshore.png";
import hydrogenImg from "@/assets/images/theme-hydrogen.png";
import roadmapImg from "@/assets/images/theme-roadmap.png";

const PILLARS = [
  {
    id: "fundamental-physics",
    title: "Fundamental Flow Physics & Porous Media",
    icon: Wind,
    image: porousImg,
    summary: "From pore-scale geometry to engineering-scale permeability: a physics-based modeling framework.",
    description: "We investigate the fundamental behaviors of non-Darcy flows, anisotropic porous media, and equivalent annulus models. By analyzing permeability, tortuosity, and anisotropy variations across different geometries via pore-scale simulations, we provide the foundational physics required for accurate large-scale engineering.",
    items: [
      "Pore-scale simulation of complex media and streamline distributions",
      "Alternative flow models for anisotropic porous media",
      "Effective and superficial diameter correlations for non-Darcy flow",
      "Permeability & tortuosity variation analysis with porosity change"
    ]
  },
  {
    id: "gas-pipeline",
    title: "Gas Pipeline Networks & System Optimization",
    icon: Map,
    image: pipelineImg,
    summary: "Physics-based pipeline simulation combined with AI correction and demand forecasting.",
    description: "Our core strength lies in large-scale national gas transmission network analysis combined with AI. We integrate MOC-based 1D analysis, SCADA/real-time flow data correction, and deep learning algorithms (LSTM/DNN) for demand forecasting to ensure nationwide supply stability, cost-efficiency, and resilience.",
    items: [
      "MOC-based 1D high-fidelity pipeline network simulation",
      "AI-based natural gas demand forecasting (LSTM/DNN)",
      "SCADA and real-time flow data integration for model correction",
      "Nationwide operational optimization and supply stability"
    ]
  },
  {
    id: "predictive-diagnostics",
    title: "LNG/LH2 Equipment Diagnostics & Predictive Maintenance",
    icon: Activity,
    image: equipmentImg,
    summary: "AI-ready reliability engineering for cryogenic rotating equipment using real operation and synthetic fault data.",
    description: "We tackle the high downtime costs and safety risks of ultra-low temperature, high-pressure equipment. By combining real operational data with co-simulation fault data, we develop LSTM-VAE based anomaly detection, health index scoring, and condition-based maintenance (CBM) for pumps and compressors.",
    items: [
      "Anomaly detection and fault diagnosis for LNG/LH2 pumps & compressors",
      "Integration of real operation data and co-simulation data",
      "LSTM-VAE and advanced AI architectures for predictive maintenance",
      "Health index visualization and Condition-Based Maintenance (CBM)"
    ]
  },
  {
    id: "smart-stations",
    title: "Pressure Regulation Systems & Smart Stations",
    icon: Target,
    image: stationImg,
    summary: "From regulator physics to autonomous station operation: multi-scale modeling for safe gas supply infrastructure.",
    description: "Addressing the modernization of aging supply stations and the challenges of hydrogen blending. We utilize 3D CFD combined with 1D network coupled analysis to diagnose regulator shutoff malfunctions and overpressure events, establishing the foundation for autonomous operation and emergency response.",
    items: [
      "3D CFD + 1D coupled analysis of gas pressure regulation systems",
      "Regulator shutoff malfunction and overpressure safety diagnosis",
      "Digital twin architectures for unmanned, smart supply stations",
      "Autonomous operation logic and emergency response protocols"
    ]
  },
  {
    id: "hydrogen-safety",
    title: "Hydrogen Safety & Long-distance Pipelines",
    icon: ShieldCheck,
    image: hydrogenImg,
    summary: "A digital safety framework for long-distance hydrogen pipelines: sensing, diagnostics, prediction, and autonomous response.",
    description: "Securing the safety of future hydrogen infrastructure is critical. We focus on continuous monitoring for leak detection, hydrogen embrittlement diagnostics, and intelligent pigging concepts. Our digital safety framework utilizes Explainable AI (XAI) for real-time risk prediction.",
    items: [
      "High-pressure hydrogen pipeline leak detection and safety analysis",
      "Hydrogen embrittlement and corrosion diagnostics",
      "Intelligent In-Line Inspection (ILI) pigging concepts and sensor fusion",
      "XAI-driven risk prediction and digital twin safety platforms"
    ]
  },
  {
    id: "offshore-systems",
    title: "Offshore Systems & VR-based Operation",
    icon: Droplet,
    image: offshoreImg,
    summary: "Reverse engineering and digital operation support for offshore gas production systems.",
    description: "We enhance domestic engineering capabilities by developing integrated design, operation, and maintenance solutions for offshore platforms. Our research includes reverse engineering of subsea-to-topside systems, remote operation architectures, and VR-based smart operation platforms.",
    items: [
      "Offshore gas production facility reverse engineering",
      "Subsea-to-topside integrated system modeling",
      "VR-based smart operation and maintenance solutions",
      "Digital twin deployment for remote platform management"
    ]
  }
];

export function ResearchDetail() {
  return (
    <section id="research" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        {/* About The Lab Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary"></span>
            About The Lab
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-[1.4] tracking-tight mb-8 break-keep text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
            Engineering the Future of Flow Systems & Energy Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-sans tracking-tight">
            We do not just train AI models; we engineer physical systems. Backed by over two decades of senior industrial R&D experience at KOGAS, the AIAE Lab bridges the gap between theoretical flow science and real-world energy infrastructure operations.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8 font-sans">
            Our philosophy is rooted in "Physics-Informed, AI-Accelerated Engineering." We believe that true operational excellence in complex energy systems—such as gas transmission networks, LNG/LH2 plants, and pressure regulation stations—requires a deep understanding of fluid dynamics and porous media. By combining high-fidelity multi-physics modeling with advanced AI diagnostics and digital twins, we transition industrial facilities from reactive maintenance to autonomous safety and predictive optimization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-primary font-bold mb-3 flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                <span className="leading-tight">Physics-based modeling</span>
              </div>
              <p className="text-sm text-white/70">Advanced CFD and complex porous media flow simulations.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-primary font-bold mb-3 flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                <span className="leading-tight">Data-driven AI techniques</span>
              </div>
              <p className="text-sm text-white/70">Machine learning applied to physical energy systems.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-primary font-bold mb-3 flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                <span className="leading-tight">Digital system implementation</span>
              </div>
              <p className="text-sm text-white/70">Real-time digital twins and predictive maintenance.</p>
            </div>
          </div>
        </motion.div>

        <div className="mb-24">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary"></span>
            Research Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Integrated Research Vision</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Our research is not a collection of isolated topics. It is a coherent progression from uncovering fundamental fluid mechanics to deploying AI-driven autonomous safety systems for national infrastructure.
          </p>
          
          <div className="glass-panel p-2 rounded-2xl mb-12">
            <img src={roadmapImg} alt="Integrated Research Roadmap" className="w-full rounded-xl opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between relative">
            <div className="absolute top-4 left-4 w-1 h-[calc(100%-32px)] md:w-[calc(100%-32px)] md:h-1 bg-white/10 md:top-1/2 md:-translate-y-1/2 md:left-4 z-0"></div>
            
            {[
              "Fundamental Flow Physics",
              "Validated Modeling Frameworks",
              "Industrial System Interpretation",
              "Digital Twin Integration",
              "AI Diagnostics & Prediction",
              "Autonomous Optimization"
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-row md:flex-col items-center gap-4 w-full md:w-auto bg-background/50 md:bg-transparent p-2 md:p-0 rounded-lg"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-[0_0_15px_rgba(0,180,216,0.5)] shrink-0">
                  {i + 1}
                </div>
                <div className="text-left md:text-center text-sm md:text-base font-medium text-white/90 md:max-w-[120px] leading-tight">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary"></span>
            Research Framework
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Core Focus Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              id={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel rounded-2xl overflow-hidden group border border-white/5 hover:border-primary/30 transition-all duration-300 relative scroll-mt-24`}
            >
              <div className="h-64 overflow-hidden relative">
                {pillar.highlight && (
                  <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                    {pillar.highlight}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              
              <div className="p-8 relative z-20 -mt-20">
                <div className="w-14 h-14 rounded-xl bg-card border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-primary transition-colors">{pillar.title}</h3>
                
                {pillar.summary && (
                  <p className="text-white/90 font-medium mb-3 text-sm">{pillar.summary}</p>
                )}
                {pillar.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pillar.description}</p>
                )}
                
                <ul className="space-y-4">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}