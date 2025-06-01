import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Coffee, Code } from 'lucide-react';

interface AboutMeSectionProps {
  id: string;
}

export default function AboutMeSection({ id }: AboutMeSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <Image
                src="/home/user/studio/images/belly.png"
                alt="Profile Picture"
                data-ai-hint="profile person"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Hello! I&apos;m Bianca Natalie M. Labrador, a Computer Science student at Ateneo de Naga University. I am a passionate and creative developer with a strong interest in game development, UI/UX design, and mobile applications.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="inline-flex items-center bg-secondary text-secondary-foreground px-3 py-1.5 text-sm rounded-full shadow-sm">
                    <Award className="w-4 h-4 mr-2" /> Game Development
                </span>
                <span className="inline-flex items-center bg-secondary text-secondary-foreground px-3 py-1.5 text-sm rounded-full shadow-sm">
                    <Coffee className="w-4 h-4 mr-2" /> UI/UX Design
                </span>
                <span className="inline-flex items-center bg-secondary text-secondary-foreground px-3 py-1.5 text-sm rounded-full shadow-sm">
                    <Code className="w-4 h-4 mr-2" /> Mobile Apps
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
