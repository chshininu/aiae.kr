import { motion } from "framer-motion";
import { Network, Factory, Activity, ShieldAlert, Cpu, Route, Ship, Zap } from "lucide-react";
import imgGasNetwork from "@/assets/images/collab-map.png";
import imgDigitalTwin from "@/assets/images/collab-lng-dashboard.png";
import imgHydrogenSafety from "@/assets/images/collab-consortia.png";
import imgSmartStation from "@/assets/images/collab-station-field.png";
import imgOffshore from "@/assets/images/collab-offshore-sim.png";
import imgMultiEnergy from "@/assets/images/collab-roadmap.png";

const COLLABORATIONS = [
  {
    id: "lng-lh2-safety",
    title: "LNG & Liquid Hydrogen Plant Digital Twins",
    summary: "Advancing predictive maintenance for critical rotating equipment.",
    description: "In collaboration with major plant engineering firms and government research institutes, we provide the core diagnostic engines for next-generation plant digital twins. Rather than generic anomaly detection, we develop physics-informed LSTM-VAE architectures specifically tailored for the thermodynamic complexities of cryogenic pumps and BOG compressors operating in LNG and LH2 terminals.",
    roles: [
      "Integrating AI architectures into plant-level digital twins",
      "Translating cryogenic flow physics into diagnostic parameters",
      "Collaborating on national predictive maintenance platforms"
    ],
    icon: Factory,
    image: imgDigitalTwin
  },
  {
    id: "hydrogen-platforms",
    title: "High-Pressure Hydrogen Pipeline Safety Consortia",
    summary: "Developing multi-institutional risk assessment platforms for H2 transition.",
    description: "As the industry transitions to a hydrogen economy, we play a specialized role in multi-institutional R&D consortia addressing hydrogen embrittlement and high-pressure transport safety. We provide the critical fluid-structural analysis and AI-based leak detection algorithms that inform national safety standards and sensing deployment strategies for future hydrogen blending networks.",
    roles: [
      "Developing algorithms for national H2 pipeline safety standards",
      "Providing fluid-structural expertise for embrittlement diagnostics",
      "Integration with multi-agency intelligent pigging R&D"
    ],
    icon: ShieldAlert,
    image: imgHydrogenSafety
  },
  {
    id: "gas-infrastructure",
    title: "Urban & Regional Pipeline Network Optimization",
    summary: "Ensuring operational stability for city-scale gas, oil, and hydrogen pipeline systems.",
    description: "We bridge the gap between demand forecasting and the physical realities of complex regional pipeline networks. Our role involves translating AI-driven demand predictions into dynamic, physics-compliant network simulations to prevent supply bottlenecks and optimize station operations across urban energy grids and smart cities.",
    roles: [
      "Partnering with energy providers to optimize regional distribution",
      "Deploying AI models for localized energy load prediction",
      "Bridging urban demand forecasting with hydraulic network constraints"
    ],
    icon: Route,
    image: imgGasNetwork
  },
  {
    id: "smart-stations",
    title: "Autonomous Pressure Regulation Stations",
    summary: "Driving the transition toward unmanned, fail-safe urban supply nodes.",
    description: "Working alongside urban gas distributors and utility companies, we engineer the intelligence required for unmanned 'Smart Stations.' Our specific contribution is the development of real-time 1D-3D coupled digital twins that diagnose regulator malfunctions and prevent overpressure events, enabling utility operators to transition from scheduled manual inspections to autonomous, condition-based operations.",
    roles: [
      "Engineering AI diagnostics for urban gas distributors",
      "Developing 1D-3D coupled digital twins for smart stations",
      "Enabling the transition from manual to autonomous inspection"
    ],
    icon: Cpu,
    image: imgSmartStation
  },
  {
    id: "offshore-support",
    title: "Offshore Facility Reverse Engineering & Simulation",
    summary: "Delivering high-fidelity modeling for complex offshore operations.",
    description: "In the specialized domain of offshore gas production, we partner with maritime engineering consortia and operators to tackle brownfield challenges. Our lab delivers subsea-to-topside integrated multi-phase flow simulations and reverse-engineered operational models, serving as the computational backbone for operator training simulators (OTS) and VR-based safety platforms.",
    roles: [
      "Serving as the computational core for maritime engineering consortia",
      "Providing subsea-to-topside multi-phase flow models",
      "Developing backend physics for VR operator training simulators"
    ],
    icon: Ship,
    image: imgOffshore
  },
  {
    id: "future-infrastructure",
    title: "Strategic Energy R&D and Multi-Energy Systems",
    summary: "Shaping the technical roadmap for future energy infrastructure.",
    description: "Leveraging extensive senior R&D experience in the natural gas sector, our PI and lab actively participate in national R&D planning committees. We collaborate on the conceptual design and feasibility analysis of future integrated infrastructures, including Carbon Capture and Storage (CCS) networks and multi-energy hubs, ensuring future policies are grounded in rigorous fluid and thermodynamic principles.",
    roles: [
      "Participating in national R&D planning and feasibility studies",
      "Conceptual engineering for future CCS network platforms",
      "Ensuring policy frameworks align with thermodynamic constraints"
    ],
    icon: Zap,
    image: imgMultiEnergy
  }
];

export function Collaboration() {
  return (
    <section id="collaboration" className="py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-end">
          <div className="max-w-3xl flex-1">
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary"></span>
              National R&D and Strategic Partnerships
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-[1.2] tracking-tight mb-6">
              Collaborative Platforms for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Industrial Flow & Energy Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              The AIAE Lab bridges the gap between academic research and national-scale deployment. We actively collaborate with government agencies, public utilities, and industry leaders to translate physics-informed AI into operational safety, digital twins, and strategic infrastructure platforms.
            </p>
          </div>
          
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                { title: "Government", desc: "National R&D Agencies", icon: Activity },
                { title: "Institutions", desc: "Research Institutes", icon: Factory },
                { title: "Utilities", desc: "Energy & Gas Providers", icon: Network },
                { title: "Engineering", desc: "Plant & Systems", icon: Cpu },
              ].map((app, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-4 rounded-xl text-center border border-white/10 hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2 text-primary">
                    <app.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-xs mb-0.5 text-white">{app.title}</h4>
                  <p className="text-[10px] text-muted-foreground">{app.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLABORATIONS.map((collab, i) => (
            <motion.div 
              key={collab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <collab.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-primary transition-colors">
                {collab.title}
              </h3>
              
              <p className="text-primary font-medium text-sm mb-4">
                {collab.summary}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {collab.description}
              </p>
              
              <div className="rounded-xl overflow-hidden mb-6 h-40 relative group-hover:shadow-lg transition-shadow border border-white/5">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={collab.image} 
                  alt={collab.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              
              <div className="pt-6 border-t border-white/10 mt-auto">
                <ul className="space-y-3">
                  {collab.roles.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-primary text-lg leading-none mt-0.5">▹</span>
                      <span className="leading-tight">{role}</span>
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
