"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, Send, Mail } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const iconComponents: { [key: string]: React.ElementType } = {
  Github,
  Linkedin,
  Twitter,
};

interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent (Simulated)",
      description: "Thank you for your message! This is a demo and your message has not been actually sent.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8" />
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background/70 focus:bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70 focus:bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." rows={5} {...field} className="bg-background/70 focus:bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </Form>

          <div className="mt-12 text-center">
            <p className="text-foreground/80 mb-4">Or connect with me on social media:</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => {
                const IconComponent = iconComponents[link.icon];
                return IconComponent ? (
                  <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  </Button>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
