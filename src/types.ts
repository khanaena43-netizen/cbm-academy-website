export interface CourseModule {
  id: string;
  number: number;
  title: string;
  description: string;
  skills: string[];
  tools: string[];
  deliverable: string;
}

export interface CourseData {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  duration: string;
  format: string;
  batchSize: string;
  topics: string[];
  tools: { name: string; category: string; icon?: string }[];
  highlights: string[];
}

export interface TrustStat {
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface WhyChooseUsCard {
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface AIWorkflowStep {
  category: string;
  traditional: string;
  aiWorkflow: string;
  toolUsed: string;
  impact: string;
}

export interface LearningProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  outcome: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Tools & AI' | 'Career & Admission';
}

export interface TestimonialItem {
  id: string;
  batch: string;
  role: string;
  focus: string;
  quote: string;
  isPlaceholder: boolean;
  avatarSeed: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
  preferredBatch?: string;
}

export interface CareerPath {
  title: string;
  salaryRange: string;
  keySkills: string[];
  responsibilities: string;
  demand: string;
}
