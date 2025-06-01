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
    title: 'Pixel Adventure Saga',
    description: 'A captivating retro-style platformer game featuring challenging levels, unique pixel art graphics, and an engaging storyline. Explore vast worlds and conquer mighty foes.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'pixel game',
    liveLink: '#',
    repoLink: '#',
    technologies: ['Unity', 'C#', 'Aseprite'],
  },
  {
    id: 'gdp2',
    title: 'Cosmic Commander',
    description: 'Lead your fleet in this strategic space combat game. Manage resources, research technologies, and outmaneuver your opponents in epic interstellar battles.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'space strategy',
    liveLink: '#',
    repoLink: '#',
    technologies: ['Godot', 'GDScript', 'Blender'],
  },
];

export const uiUxDesigns: Project[] = [
  {
    id: 'uip1',
    title: 'EcoFresh Mobile App',
    description: 'A UI/UX design concept for a mobile application that connects users with local farmers for fresh produce delivery. Focused on intuitive navigation and a clean, inviting aesthetic.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'mobile app design',
    liveLink: '#',
    repoLink: '#',
    technologies: ['Figma', 'Adobe XD', 'User Research'],
  },
  {
    id: 'uip2',
    title: 'Creative Agency Portfolio Site',
    description: 'Redesign of a portfolio website for a creative agency, emphasizing visual storytelling, smooth animations, and a fully responsive layout to showcase their work.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'website design',
    repoLink: '#',
    technologies: ['Sketch', 'Principle', 'HTML/CSS'],
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
    technologies: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: 'mdp2',
    title: 'City Guide Explorer',
    description: 'An Android native application providing curated city guides, offline maps, and AR-based points of interest. Developed using Kotlin and Jetpack Compose.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'travel app',
    repoLink: '#',
    technologies: ['Kotlin', 'Jetpack Compose', 'Google Maps API'],
  },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
];
