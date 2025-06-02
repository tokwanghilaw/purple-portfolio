
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  repoLink?: string;
  videoLink?: string;
  figmaLink?: string;
  technologies: string[];
}

export const gameDevProjects: Project[] = [
  {
    id: 'gdp1',
    title: 'A Bangketa Story',
    description: 'A captivating retro-style platformer game featuring challenging levels, unique pixel art graphics, and an engaging storyline. Explore vast worlds and conquer mighty foes.',
    imageUrl: 'bangketa.png',
    imageHint: 'arcade',
    videoLink: 'https://youtu.be/_hTlvJ-1Png?si=bjew5PqFfxPJ9RXJ',
    repoLink: 'https://github.com/tokwanghilaw/A-Bangketa-Story',
    technologies: ['Unity', 'C#', 'Aseprite'],
  },
  {
    id: 'gdp2',
    title: 'Corazon: Between Day & Dusk',
    description: 'Corazon: Between Day and Dusk is a 2D-platformer stealth game inspired by Philippine folklore, following Corazon, a manananggal, who leads two lives. By day, she blends into the bustling city; by night, she hunts in the shadows, using her wits and stealth to survive.',
    imageUrl: 'corazon.png',
    imageHint: 'stealth',
    repoLink: 'https://github.com/kaffw/Star-Guardians-FE',
    technologies: ['Unity', 'C#', 'Aseprite'],
  },
  {
    id: 'gdp3',
    title: 'Sapling Sanctuary',
    description: 'Sapling Sanctuary is a 2D platformer life-simulation survival game, set in a post-apocalyptic Philippines',
    imageUrl: 'sapling.png',
    imageHint: 'survival',
    repoLink: 'https://github.com/tokwanghilaw/SaplingSanctuary',
    technologies: ['Unity', 'C#'],
  },
];

export const uiUxDesigns: Project[] = [
  {
    id: 'uip1',
    title: 'NetProbe',
    description: 'A UI/UX design concept for a mobile application that visualizes the signal strength on nearby areas in the form of a heatmap. NetProbe is a project for our UI/UX Design course.',
    imageUrl: 'netprobe.png',
    imageHint: 'mobile app design',
    liveLink: '#',
    technologies: ['Figma', 'User Research', 'Mobile'],
  },
  {
    id: 'uip2',
    title: 'QR-Home',
    description: 'QR-Home is a StartUp concept and an ongoing project. It is a QR code-based tool that provides security for pets and owners, and provides a mobile database for veterinarians to lessen the use of paper-based databases.',
    imageUrl: 'qrhome.png',
    imageHint: 'website design',
    liveLink: '#',
    technologies: ['Figma', 'User Research', 'Web'],
  },
];

export const mobileDevProjects: Project[] = [
  {
    id: 'mdp1',
    title: 'ToDo App',
    description: 'This is a basic to-do app with checklists.',
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
