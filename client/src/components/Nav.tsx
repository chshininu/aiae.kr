import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiaeLogoImg from "@/assets/images/aiae-logo.png";

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group cursor-pointer" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <div className="w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
            <img src={aiaeLogoImg} alt="AIAE Lab Logo" className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg leading-tight tracking-wide text-glow">AIAE Lab</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">AI-Aided Fluid & Energy Systems Eng.</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#pi" className="text-muted-foreground hover:text-white transition-colors">About PI</a>
          <a href="#research" className="text-muted-foreground hover:text-white transition-colors">Research</a>
          <a href="#collaboration" className="text-muted-foreground hover:text-white transition-colors">Collaboration</a>
          <a href="#publications" className="text-muted-foreground hover:text-white transition-colors">Publications</a>
          <a href="#join" className="border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md transition-colors ml-4">
            Join Us
          </a>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
