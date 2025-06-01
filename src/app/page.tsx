import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutMeSection from '@/components/sections/about-me-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';
import { gameDevProjects, uiUxDesigns, mobileDevProjects } from '@/lib/data';
import { Gamepad2, Palette, Smartphone } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AboutMeSection id="about" />
        <ProjectsSection 
          id="game-dev" 
          title="Game Development Projects" 
          projects={gameDevProjects}
          icon={<Gamepad2 className="w-8 h-8 text-primary" />}
        />
        <ProjectsSection 
          id="ui-ux" 
          title="UI/UX Design Projects" 
          projects={uiUxDesigns}
          icon={<Palette className="w-8 h-8 text-primary" />}
        />
        <ProjectsSection 
          id="mobile-dev" 
          title="Mobile Development Projects" 
          projects={mobileDevProjects}
          icon={<Smartphone className="w-8 h-8 text-primary" />}
        />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
