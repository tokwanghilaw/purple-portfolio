
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Mail, Phone, MessageSquare,} from 'lucide-react'; // Added Instagram, Phone, MessageSquare, Twitter
import { socialLinks, contactDetails } from '@/lib/data';

const iconComponents: { [key: string]: React.ElementType } = {
  Github,
  Linkedin,
  Instagram,
  MessageSquare // For Discord
};

interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8" />
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <Card className="max-w-lg mx-auto bg-card p-8 rounded-lg shadow-xl">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-semibold text-primary text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${contactDetails.email}`} className="text-foreground hover:text-primary transition-colors">
                  {contactDetails.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Mobile</p>
                <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                  {contactDetails.phone}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-center text-muted-foreground mb-4">Connect with me on social media:</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = iconComponents[link.icon];
                  return IconComponent ? (
                    <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all_duration-300 transform hover:scale-110">
                      <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <IconComponent className="h-5 w-5" />
                      </Link>
                    </Button>
                  ) : null;
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
