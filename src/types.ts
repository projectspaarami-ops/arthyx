export type PageType = 
  | 'home' 
  | 'saga' 
  | 'about' 
  | 'stories' 
  | 'insights' 
  | 'research' 
  | 'contact' 
  | 'disclaimer' 
  | 'privacy' 
  | 'refund' 
  | 'terms';

export type Theme = 'light' | 'dark';

export interface Stage {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  duration?: string;
  focus: string[];
  learningFormat: string[];
  highlights?: string[];
  modules?: {
    title: string;
    description: string;
  }[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  badge: string;
  experience: string;
  expertise: string[];
  bio: string;
  philosophy: string;
  approach: string;
  certifications?: string[];
  careerHistory?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: 'general' | 'curriculum' | 'format';
}

export interface Testimonial {
  id: string;
  namePlaceholder: string;
  backgroundPlaceholder: string;
  stageCompleted: string;
  quote: string;
  keyShift: string;
  timeframe?: string;
}

export interface VideoStory {
  id: string;
  title: string;
  participant: string;
  background: string;
  duration: string;
  previewThumbnail: string;
  keyTakeaway: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  category: 'Price Action' | 'Risk Management' | 'Market Psychology' | 'Derivatives';
  readTime: string;
  date: string;
  content: string[];
}

export interface FeatureBlock {
  title: string;
  description: string;
  iconName: string;
}

export interface AudienceProfile {
  title: string;
  description: string;
  suitability: string;
  iconName: string;
}
