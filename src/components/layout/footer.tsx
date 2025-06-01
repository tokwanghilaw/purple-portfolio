import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const iconComponents: { [key: string]: React.ElementType } = {
  Github,
  Linkedin,
  Twitter,
};


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => {
            const IconComponent = iconComponents[link.icon];
            return IconComponent ? (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground hover:text-primary transition-colors">
                <IconComponent className="h-6 w-6" />
              </Link>
            ) : null;
          })}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Profolio. All rights reserved.
        </p>
         <p className="text-xs mt-2">
          Designed with creativity by Your Name.
        </p>
      </div>
    </footer>
  );
}
