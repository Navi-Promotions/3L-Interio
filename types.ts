export type ViewType = 'home' | 'about' | 'services' | 'why-us' | 'projects' | 'contact';

export interface NavProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, sectionId?: string) => void;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon?: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  projectType: string;
  location: string;
  quote: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}