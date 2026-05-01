import { Mail, MapPin, Globe } from "lucide-react";
import aiaeLogoImg from "@/assets/images/aiae-logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden">
                <img src={aiaeLogoImg} alt="AIAE Lab Logo" className="w-full h-full" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg leading-tight tracking-wide">AIAE Lab</h2>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              AI-Aided Fluid & Energy Systems Engineering Laboratory at Incheon National University.<br />
              From simulation to intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#pi" className="text-muted-foreground hover:text-primary transition-colors text-sm">About PI</a></li>
              <li><a href="#research" className="text-muted-foreground hover:text-primary transition-colors text-sm">Research</a></li>
              <li><a href="#collaboration" className="text-muted-foreground hover:text-primary transition-colors text-sm">Collaboration</a></li>
              <li><a href="#publications" className="text-muted-foreground hover:text-primary transition-colors text-sm">Publications</a></li>
              <li><a href="#join" className="text-muted-foreground hover:text-primary transition-colors text-sm">Join Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  Department of Mechanical Engineering<br />
                  Incheon National University<br />
                  Incheon, South Korea
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:chshin@inu.ac.kr" className="hover:text-primary transition-colors">
                  chshin@inu.ac.kr
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Globe className="w-5 h-5 text-primary shrink-0" />
<a href="/" className="hover:text-primary transition-colors">
  aiae.kr
</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AIAE Lab, Incheon National University. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
