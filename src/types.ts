export interface Project {
  id: string;
  name: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  features: string[];
  impact: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'AI/ML' | 'Web' | 'UI/UX';
  imageUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  board?: string;
  duration: string;
  grade: string;
  coursework?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  highlight?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  category: string;
  emoji: string;
  description: string;
}
