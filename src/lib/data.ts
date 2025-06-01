
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  repoLink?: string;
  technologies: string[];
}

export const gameDevProjects: Project[] = [
  {
    id: 'gdp1',
    title: 'A Bangketa Story',
    description: 'A captivating retro-style platformer game featuring challenging levels, unique pixel art graphics, and an engaging storyline. Explore vast worlds and conquer mighty foes.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'pixel game',
    videoLink: 'https://youtu.be/_hTlvJ-1Png?si=bjew5PqFfxPJ9RXJ',
    repoLink: 'https://github.com/tokwanghilaw/A-Bangketa-Story',
    technologies: ['Unity', 'C#', 'Aseprite'],
  },
  {
    id: 'gdp2',
    title: 'Corazon: Between Day & Dusk',
    description: 'Lead your fleet in this strategic space combat game. Manage resources, research technologies, and outmaneuver your opponents in epic interstellar battles.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'space strategy',
    repoLink: 'https://github.com/kaffw/Star-Guardians-FE',
    technologies: ['Unity', 'C#', 'Aseprite'],
  },
  {
    id: 'gdp3',
    title: 'Sapling Sanctuary',
    description: 'Lead your fleet in this strategic space combat game. Manage resources, research technologies, and outmaneuver your opponents in epic interstellar battles.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'space strategy',
    repoLink: 'https://github.com/tokwanghilaw/SaplingSanctuary',
    technologies: ['Unity', 'C#', 'Aseprite'],
  },
];

export const uiUxDesigns: Project[] = [
  {
    id: 'uip1',
    title: 'NetProbe',
    description: 'A UI/UX design concept for a mobile application that connects users with local farmers for fresh produce delivery. Focused on intuitive navigation and a clean, inviting aesthetic.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'mobile app design',
    liveLink: '#',
    technologies: ['Figma', 'User Research'],
  },
  {
    id: 'uip2',
    title: 'QR-Home',
    description: 'Redesign of a portfolio website for a creative agency, emphasizing visual storytelling, smooth animations, and a fully responsive layout to showcase their work.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'website design',
    liveLink: '#',
    technologies: ['Figma', 'User Research'],
  },
];

export const mobileDevProjects: Project[] = [
  {
    id: 'mdp1',
    title: 'QuickTask Manager',
    description: 'A cross-platform mobile app for task management, built with React Native. Features include offline support, cloud sync, and customizable notifications.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'mobile productivity',
    liveLink: '#',
    repoLink: '#',
    technologies: ['Flutter', 'Firebase'],
  },
];

export const contactDetails = {
  email: 'bnlabrador@gbox.adnu.edu.ph',
  phone: '(+63) 947-558-1744',
  name: 'Bianca Natalie M. Labrador'
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/tokwanghilaw', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bianca-natalie-labrador/', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/bianca.wav', icon: 'Instagram' },
  { name: 'Discord', url: 'https://discordapp.com/users/tokwanghilaw', icon: 'MessageSquare' }, // Using MessageSquare as a generic chat icon for Discord
];
