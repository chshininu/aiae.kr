import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PIProfile } from "@/components/PIProfile";
import { ResearchDetail } from "@/components/ResearchDetail";
import { Collaboration } from "@/components/Collaboration";
import { Publications } from "@/components/Publications";
import { JoinUs } from "@/components/JoinUs";
import { Footer } from "@/components/Footer";
import { Popup } from "@/components/Popup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Popup />
      <Nav />
      <main>
        <Hero />
        <PIProfile />
        <ResearchDetail />
        <Collaboration />
        <Publications />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}