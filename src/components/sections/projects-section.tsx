import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, GalleryThumbnails } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectsSectionProps {
  id: string;
  title: string;
  projects: Project[];
  icon?: React.ReactNode;
}

export default function ProjectsSection({ id, title, projects, icon }: ProjectsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 flex items-center justify-center gap-3">
            {icon ? icon : <GalleryThumbnails className="w-8 h-8" />}
            {title}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A collection of my work in {title.toLowerCase()}. Each project reflects my dedication to quality and innovation.
          </p>
        </div>
        
        {projects.length === 0 ? (
          <p className="text-center text-foreground/70">No projects to display in this section yet. Stay tuned!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader>
                  <div className="aspect-[4/3] relative w-full overflow-hidden rounded-t-md">
                    <Image
                      src={`/images/${project.imageUrl}`}
                      alt={project.title}
                      data-ai-hint={project.imageHint}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-2xl font-semibold text-primary mb-2 font-headline">{project.title}</CardTitle>
                  <CardDescription className="text-foreground/90 mb-4 leading-relaxed">{project.description}</CardDescription>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 justify-start pt-4 border-t">
                  {project.liveLink && (
                    <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Repository
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
