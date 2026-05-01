import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import aiaeLogoImg from "@/assets/images/aiae-logo.png";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group cursor-pointer" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          closeMenu();
        }}>
          <div className="w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
            <img src={aiaeLogoImg} alt="AIAE Lab Logo" className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg leading-tight tracking-wide text-glow">AIAE Lab</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">AI-Aided Fluid & Energy Systems Eng.</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#pi" className="text-muted-foreground hover:text-white transition-colors">About PI</a>
          <a href="#research" className="text-muted-foreground hover:text-white transition-colors">Research</a>
          <a href="#collaboration" className="text-muted-foreground hover:text-white transition-colors">Collaboration</a>
          <a href="#publications" className="text-muted-foreground hover:text-white transition-colors">Publications</a>
          <a href="#join" className="border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md transition-colors ml-4">
            Join Us
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#080c16]/95 backdrop-blur-xl border-y border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <a href="#pi" className="text-white/80 hover:text-white py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>About PI</a>
          <a href="#research" className="text-white/80 hover:text-white py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>Research</a>
          <a href="#collaboration" className="text-white/80 hover:text-white py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>Collaboration</a>
          <a href="#publications" className="text-white/80 hover:text-white py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>Publications</a>
          <div className="mt-4 pt-2">
            <a href="#join" className="block w-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-4 py-3 rounded-lg transition-colors text-center text-base font-bold" onClick={closeMenu}>
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
