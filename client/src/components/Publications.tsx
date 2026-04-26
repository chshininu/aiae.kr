import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import cfdEquationImg from "@/assets/images/theme-cfd-equation.png";

const CATEGORIES = ["All", "Fundamental Flow Physics", "AI & Digital Twin Applications", "Engineering Projects"];

const PUBLICATIONS = [
  // Fundamental Flow Physics
  {
    id: 1,
    title: "Alternative flow model of anisotropic porous media",
    authors: "Shin, C.",
    journal: "Journal of Natural Gas Science and Engineering (Q1, IF: 5.90, JCR: 11%)",
    year: 2022,
    category: "Fundamental Flow Physics",
    link: "https://doi.org/10.1016/j.jngse.2022.104829"
  },
  {
    id: 2,
    title: "Application of the effective diameters of porous media to the non-Darcy flow analyses",
    authors: "Shin, C.",
    journal: "Scientific Reports (Q1, IF: 5.85, JCR: 10%)",
    year: 2022,
    category: "Fundamental Flow Physics",
    link: "https://doi.org/10.1038/s41598-022-08135-x"
  },
  {
    id: 3,
    title: "Permeability variation analysis using the superficial diameter correlation with porosity change",
    authors: "Shin, C.",
    journal: "Physics of Fluids (Q1, IF: 4.98, JCR: 4%)",
    year: 2021,
    category: "Fundamental Flow Physics",
    link: "https://doi.org/10.1063/5.0046996"
  },
  {
    id: 4,
    title: "Permeability variations by changes in geometrical conditions",
    authors: "Shin, C.",
    journal: "Physics of Fluids (Q1, IF: 4.98, JCR: 4%)",
    year: 2019,
    category: "Fundamental Flow Physics",
    link: "https://doi.org/10.1063/1.5072768"
  },
  {
    id: 5,
    title: "Tortuosity correction of Kozeny’s hydraulic diameter of a porous medium",
    authors: "Shin, C.",
    journal: "Physics of Fluids (Q1, IF: 4.98, JCR: 4%)",
    year: 2017,
    category: "Fundamental Flow Physics",
    link: "https://doi.org/10.1063/1.4975560"
  },
  {
    id: 6,
    title: "A numerical study on the transient aspects of porous flows and the applicability of Darcy’s friction flow relation",
    authors: "Shin, C.",
    journal: "Journal of Mechanical Science and Technology",
    year: 2018,
    category: "Fundamental Flow Physics",
    link: "https://doi.org/10.1007/s12206-018-0316-4"
  },
  {
    id: 7,
    title: "Permeability estimations and frictional flow features passing through porous media comprised of structured microbeads",
    authors: "Shin, C.",
    journal: "AIP Advances",
    year: 2017,
    category: "Fundamental Flow Physics",
    link: "https://doi.org/10.1063/1.5017983"
  },
  // AI & Digital Twin Applications
  {
    id: 14,
    title: "A numerical investigation of hydrogen blending effects on pressure regulators and compressors in natural gas pipeline networks",
    authors: "Park, C. J., Ji, S. J., Lee, Y., Shin, C. H., Park, S. G.",
    journal: "International Journal of Hydrogen Energy (Q1, IF: 10.19, JCR: 7%)",
    year: 2026,
    category: "AI & Digital Twin Applications",
    link: "https://doi.org/10.1016/j.ijhydene.2026.154475"
  },
  {
    id: 11,
    title: "ANN-based selection of fracturing fluids in shale gas reservoirs",
    authors: "Kim, C., Kim, Y., Shin, C., Lee, J.",
    journal: "Environmental Earth Sciences",
    year: 2017,
    category: "AI & Digital Twin Applications",
    link: "#"
  },
  // Engineering Projects
  {
    id: 8,
    title: "Optimal design of gas-lift systems considering fluid composition in subsea oil reservoirs",
    authors: "Kim, Y., Shin, C., Lee, J.",
    journal: "Journal of the Korean Institute of Gas",
    year: 2018,
    category: "Engineering Projects",
    link: "#"
  },
  {
    id: 10,
    title: "Prediction of shale prospectivity from seismically-derived reservoir and completion qualities: Application to a shale-gas field, Horn River Basin, Canada",
    authors: "Mo, C., Lee, G., Jeoung, T., et al., Shin, C.",
    journal: "Journal of Applied Geophysics",
    year: 2018,
    category: "Engineering Projects",
    link: "https://www.sciencedirect.com/science/article/pii/S092698511630444X"
  }
];

export function Publications() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPubs = PUBLICATIONS.filter(pub => 
    activeCategory === "All" || pub.category === activeCategory
  );

  return (
    <section id="publications" className="py-24 bg-card/50 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none mix-blend-screen hidden lg:block" style={{ backgroundImage: `url(${cfdEquationImg})`, backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to left, black, transparent)' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Representative Publications</h2>
            <p className="text-muted-foreground max-w-3xl mb-4">
              Our academic output is deeply connected to real-world industrial impact. We start by uncovering fundamental physics—such as non-Darcy flow and permeability variation in porous media—and extend these foundational insights to develop high-fidelity models. These validated frameworks then serve as the core engine for digital twins, predictive AI diagnostics, and autonomous operation across LNG plants, smart stations, and hydrogen infrastructure.
            </p>
            <div className="flex gap-4 mt-4 text-sm">
              <a href="https://orcid.org/0000-0002-5976-2128" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                <ExternalLink className="w-3 h-3" /> ORCID: 0000-0002-5976-2128
              </a>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">Web of Science ResearcherID: HGE-1300-2022</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-primary-foreground box-glow' 
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredPubs.map(pub => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={pub.id}
                className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors group flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h4>
                  <div className="text-sm text-muted-foreground mb-1">
                    {pub.authors}
                  </div>
                  <div className="text-sm text-primary/80 italic mt-1 leading-relaxed">
                    {pub.journal.includes("(Q1") ? (
                      <span className="font-bold text-primary">{pub.journal}</span>
                    ) : (
                      pub.journal
                    )}, {pub.year}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3 mt-4 md:mt-0">
                  <span className="text-xs py-1 px-3 rounded-full border border-white/10 bg-white/5 whitespace-nowrap">
                    {pub.category}
                  </span>
                  {pub.link !== "#" && (
                    <a href={pub.link} className="p-2 rounded-md hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
