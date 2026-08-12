import {
  CourseData,
  CourseModule,
  TrustStat,
  WhyChooseUsCard,
  AIWorkflowStep,
  LearningProcessStep,
  FAQItem,
  TestimonialItem,
  CareerPath,
} from '../types';

export const HERO_IMAGE_PATH = '/src/assets/images/cbm_hero_graphic_1786528676517.jpg';
export const AI_WORKFLOW_IMAGE_PATH = '/src/assets/images/cbm_ai_workflow_1786528696418.jpg';

export const ACADEMY_INFO = {
  name: 'CBM Academy',
  tagline: 'AI-Integrated Digital Marketing Academy',
  location: 'Okhla, New Delhi - 110020, India',
  fullAddress: 'CBM Academy Campus, Near Okhla Phase 3, New Delhi - 110020',
  phone: '+91 98188 00000',
  email: 'info@cbmacademy.in',
  admissionsEmail: 'admissions@cbmacademy.in',
  hours: 'Monday to Saturday: 9:30 AM – 6:30 PM',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.632943187123!2d77.26252925!3d28.5500472!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c41030e463%3A0xe6bf4d96c9c824c0!2sOkhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const TRUST_STATS: TrustStat[] = [
  {
    title: 'Practical Learning',
    subtitle: 'Hands-on Execution',
    description: 'Work directly on real brand scenarios, active ad accounts, and live site builds.',
    highlight: 'Real Projects',
    iconName: 'Laptop',
  },
  {
    title: 'AI Integrated',
    subtitle: '2026 Workflows',
    description: 'Master ChatGPT, Claude, Midjourney, and AI ad automation from Day 1.',
    highlight: 'Modern AI Tools',
    iconName: 'Cpu',
  },
  {
    title: 'Career Focused',
    subtitle: 'Outcome Driven',
    description: 'Build a tangible portfolio, freelance readiness, and industry interview preparation.',
    highlight: 'Portfolio-Ready',
    iconName: 'Briefcase',
  },
  {
    title: 'Limited Batch',
    subtitle: 'Personal Mentorship',
    description: 'Small, focused batches ensuring one-on-one feedback and trainer interaction.',
    highlight: 'Max 15 Students/Batch',
    iconName: 'Users',
  },
];

export const MAIN_COURSE: CourseData = {
  id: 'pro-digital-marketing-ai',
  title: 'Pro Digital Marketing Course with AI Integration',
  badge: 'Flagship Master Program',
  tagline: 'Master modern performance marketing, search, social, AI automation, and live campaign optimization.',
  description:
    'A comprehensive, 100% practical program designed to transform students, freshers, freelancers, business owners, and working professionals into elite digital marketing practitioners equipped with modern AI capabilities.',
  duration: '3 Months Intensive + 1 Month Practical Project Lab',
  format: 'In-Campus Classroom (Okhla, New Delhi) & Interactive Hybrid',
  batchSize: 'Limited to 12-15 Students per Batch',
  topics: [
    'Digital Marketing Fundamentals',
    'Search Engine Optimization (SEO)',
    'Google Ads (Search, Display, Shopping, Video)',
    'Meta Ads (Facebook & Instagram Performance)',
    'Social Media Marketing & Brand Building',
    'Canva & AI Graphic Design',
    'WordPress Web Development (No-Code)',
    'Google Analytics 4 (GA4) & Data Tracking',
    'AI Tools & Prompt Engineering',
    'Marketing Automation & Email Systems',
    'E-commerce & Shopify Marketing',
    'Live Capstone Client Projects',
  ],
  tools: [
    { name: 'Google Ads', category: 'Paid Search & Video' },
    { name: 'Meta Ads Manager', category: 'Social Paid Media' },
    { name: 'ChatGPT & Claude', category: 'AI Copywriting & Strategy' },
    { name: 'Google Analytics 4', category: 'Data & Measurement' },
    { name: 'WordPress', category: 'CMS & Site Building' },
    { name: 'Semrush / Ahrefs', category: 'SEO Keyword Research' },
    { name: 'Canva Pro & Midjourney', category: 'AI Visual Design' },
    { name: 'Zapier / Make', category: 'Marketing Automation' },
    { name: 'Mailchimp', category: 'Email Marketing' },
    { name: 'Shopify', category: 'E-commerce Store Management' },
  ],
  highlights: [
    '12 Comprehensive Industry-Aligned Modules',
    '10+ Real Practical Assignments & Live Capstone Project',
    'AI-First Marketing Workflows (ChatGPT, Claude, Canva AI)',
    'Live Ad Budget Campaign Simulation & Performance Analytics',
    'Dedicated Mentorship & Portfolio Building Guidance',
  ],
};

export const CURRICULUM_MODULES: CourseModule[] = [
  {
    id: 'module-1',
    number: 1,
    title: 'Digital Marketing Fundamentals',
    description:
      'Understand market research, buyer personas, funnel architecture (TOFU/MOFU/BOFU), and customer acquisition strategies.',
    skills: ['Buyer Persona Mapping', 'Competitor Research', 'Marketing Funnel Design', 'Brand Positioning'],
    tools: ['Google Trends', 'SimilarWeb', 'ChatGPT Market Research'],
    deliverable: 'Complete Marketing Strategy & Persona Map for a real business niche.',
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Search Engine Optimization (SEO)',
    description:
      'Master On-Page, Off-Page, Technical SEO, Keyword Intent Analysis, Local SEO (Google Business Profile), and Content Architecture.',
    skills: ['Keyword Research', 'Technical Site Audit', 'On-Page Optimization', 'Local SEO & Backlink Building'],
    tools: ['Semrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'ChatGPT for SEO'],
    deliverable: 'Complete SEO Audit Report and Content Optimization Plan for a live website.',
  },
  {
    id: 'module-3',
    number: 3,
    title: 'WordPress Web Development',
    description:
      'Build responsive, high-converting websites without writing complex code. Learn landing page optimization, speed tuning, and security.',
    skills: ['WordPress Setup & Theme Customization', 'Elementor Page Builder', 'Landing Page UX', 'Site Speed Optimization'],
    tools: ['WordPress CMS', 'Elementor Pro', 'Yoast/RankMath', 'WP Rocket'],
    deliverable: 'A fully functional, mobile-responsive business website built from scratch.',
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Google Ads & Search Marketing',
    description:
      'Plan, execute, and scale Google Search, Display, Shopping, and YouTube Ads with conversion tracking and smart bidding.',
    skills: ['Campaign Setup', 'Negative Keyword Strategy', 'Quality Score Optimization', 'PMAX & YouTube Campaigns'],
    tools: ['Google Ads Keyword Planner', 'Google Tag Manager', 'Google Merchant Center'],
    deliverable: 'Live Google Search Ad campaign setup with ad copy variants and conversion tags.',
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Meta Ads (Facebook & Instagram)',
    description:
      'Design high-ROAS Meta ad campaigns. Learn audience targeting, custom lookalikes, creative testing matrix, and pixel setup.',
    skills: ['Meta Pixel & Conversions API', 'A/B Creative Testing', 'Lookalike Audiences', 'Retargeting Funnels'],
    tools: ['Meta Business Suite', 'Meta Ads Manager', 'CapCut', 'AdSpy'],
    deliverable: 'Comprehensive Meta Ad Strategy with 3 creative variations and funnel targeting.',
  },
  {
    id: 'module-6',
    number: 6,
    title: 'Social Media Marketing',
    description:
      'Build organic brand presence on Instagram, LinkedIn, and YouTube. Learn content calendar creation, community growth, and viral hooks.',
    skills: ['Content Calendar Strategy', 'Reels & Short-form Strategy', 'LinkedIn B2B Positioning', 'Community Engagement'],
    tools: ['Buffer / Hootsuite', 'Notion', 'ChatGPT Content Generators'],
    deliverable: '30-Day Content Matrix with reel scripts, captions, and hashtag strategy.',
  },
  {
    id: 'module-7',
    number: 7,
    title: 'Canva & AI Graphic Design',
    description:
      'Create eye-catching marketing creatives, ad banners, carousels, infographics, and short video reels using Canva and AI graphic tools.',
    skills: ['Visual Design Principles', 'Ad Banner Composition', 'Brand Kit Creation', 'AI Generative Fill'],
    tools: ['Canva Pro', 'Midjourney / DALL-E', 'Remove.bg', 'Photoroom'],
    deliverable: 'Full Set of 10 Marketing Banner Creatives for Social & Paid Campaigns.',
  },
  {
    id: 'module-8',
    number: 8,
    title: 'Google Analytics 4 (GA4)',
    description:
      'Track user behavior, measure conversion events, analyze attribution models, and create custom reporting dashboards.',
    skills: ['GA4 Property Setup', 'Custom Event Tracking', 'UTM Parameter Strategy', 'Looker Studio Dashboards'],
    tools: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio'],
    deliverable: 'Custom Looker Studio Performance Dashboard linked to live analytics data.',
  },
  {
    id: 'module-9',
    number: 9,
    title: 'AI Tools & Prompt Engineering',
    description:
      'Supercharge marketing output 5x using advanced prompt engineering for research, copywriting, strategy, and asset generation.',
    skills: ['Prompt Engineering Frameworks', 'AI Content Workflows', 'Custom GPTs & Prompts', 'AI Strategy Generation'],
    tools: ['ChatGPT Plus', 'Claude AI', 'Perplexity AI', 'Gemini'],
    deliverable: 'Custom AI Prompt Library tailored for digital marketing campaigns.',
  },
  {
    id: 'module-10',
    number: 10,
    title: 'Marketing Automation & Email Systems',
    description:
      'Automate repetitive tasks, setup automated lead nurture email sequences, and connect marketing tools seamlessly.',
    skills: ['Lead Magnet Funnels', 'Drip Email Campaigns', 'Workflow Triggering', 'CRM Integration'],
    tools: ['Zapier / Make', 'Mailchimp / Brevo', 'HubSpot Free CRM'],
    deliverable: 'Automated Lead Nurture Workflow connecting landing page to email sequences.',
  },
  {
    id: 'module-11',
    number: 11,
    title: 'E-commerce & Shopify Marketing',
    description:
      'Learn product research, Shopify store customization, conversion rate optimization (CRO), and cart recovery strategies.',
    skills: ['Shopify Management', 'Product Page CRO', 'Abandoned Cart Recovery', 'E-commerce Performance Ads'],
    tools: ['Shopify', 'Klaviyo', 'Hotjar'],
    deliverable: 'E-commerce Store Optimization Roadmap and Cart Recovery Email Strategy.',
  },
  {
    id: 'module-12',
    number: 12,
    title: 'Practical Capstone Projects',
    description:
      'Synthesize all learnings into an end-to-end practical client strategy project. Present portfolio work to mentors and industry experts.',
    skills: ['Full Funnel Execution', 'Client Presentation', 'Performance Reporting', 'Portfolio Assembly'],
    tools: ['All Industry Tools Mastered'],
    deliverable: 'Comprehensive Digital Marketing Portfolio ready for job interviews or freelance pitches.',
  },
];

export const WHY_CHOOSE_CBM: WhyChooseUsCard[] = [
  {
    title: 'AI-Integrated Learning',
    description: 'Learn how modern AI tools are fundamentally transforming digital marketing workflows, speed, and creative quality.',
    iconName: 'Sparkles',
    badge: '2026 Ready',
  },
  {
    title: 'Practical Projects',
    description: 'No boring theory. Work on real practical assignments, active tool interfaces, and portfolio-grade deliverables.',
    iconName: 'Layers',
    badge: '100% Practical',
  },
  {
    title: 'Modern Curriculum',
    description: 'Constantly updated content covering SEO, GA4, Meta Ads, Google Ads, and AI systems relevant to today’s industry.',
    iconName: 'BookOpen',
    badge: 'Updated Weekly',
  },
  {
    title: 'Small Batch Learning',
    description: 'Strict limit of 12-15 students per batch ensuring dedicated attention, direct feedback, and active interaction.',
    iconName: 'Users',
    badge: 'Max 15 Seats',
  },
  {
    title: 'Experienced Trainers',
    description: 'Learn directly from seasoned digital marketers and AI practitioners with proven real-world campaign experience.',
    iconName: 'Award',
    badge: 'Industry Mentors',
  },
  {
    title: 'Career Guidance',
    description: 'Receive structured guidance for portfolio development, resume formatting, freelance readiness, and interview skills.',
    iconName: 'TrendingUp',
    badge: 'Outcome Oriented',
  },
];

export const AI_WORKFLOWS: AIWorkflowStep[] = [
  {
    category: 'Research',
    traditional: 'Hours spent manually reviewing competitor websites & search results.',
    aiWorkflow: 'AI-assisted audience persona synthesis & deep competitor insights in minutes.',
    toolUsed: 'Perplexity & ChatGPT Strategy Prompts',
    impact: '80% Faster Market Discovery',
  },
  {
    category: 'Content',
    traditional: 'Writing ad copy & blog articles from scratch with slow revision cycles.',
    aiWorkflow: 'AI-assisted copywriting variants tailored to exact audience psychographics.',
    toolUsed: 'Claude & Custom Copy Generators',
    impact: '10x Content Output',
  },
  {
    category: 'SEO',
    traditional: 'Manual keyword clustering and slow content outline drafting.',
    aiWorkflow: 'AI-assisted keyword intent mapping & automated structured schema creation.',
    toolUsed: 'ChatGPT SEO Plugins & Ahrefs AI',
    impact: 'Deep Semantic Search Alignment',
  },
  {
    category: 'Creative Design',
    traditional: 'Waiting days for visual designers to output social media banner variations.',
    aiWorkflow: 'AI-assisted image generation and rapid Canva template adaptation in minutes.',
    toolUsed: 'Canva Magic Studio & Midjourney',
    impact: 'Instant Visual Testing',
  },
  {
    category: 'Ad Campaign Analysis',
    traditional: 'Sifting through raw CSV spreadsheets to spot underperforming ad creatives.',
    aiWorkflow: 'AI-assisted data analysis & automated performance anomaly diagnostics.',
    toolUsed: 'GA4 AI Insights & ChatGPT Data Analyst',
    impact: 'Faster High-ROAS Decisions',
  },
  {
    category: 'Workflow Automation',
    traditional: 'Manually copy-pasting leads from ad platforms into spreadsheets and emails.',
    aiWorkflow: 'AI-powered instant webhook triggers, automated email nurture, and CRM sync.',
    toolUsed: 'Zapier & Make Automation Loops',
    impact: 'Zero Manual Lead Decay',
  },
];

export const LEARNING_PROCESS: LearningProcessStep[] = [
  {
    step: 'Step 01',
    number: '01',
    title: 'Learn',
    description: 'Understand core marketing frameworks, platform algorithms, strategy, and modern AI mechanics through interactive sessions.',
    outcome: 'Deep conceptual foundation & tool familiarity',
    iconName: 'Lightbulb',
  },
  {
    step: 'Step 02',
    number: '02',
    title: 'Practice',
    description: 'Execute hands-on exercises directly inside real ad managers, SEO suites, WordPress dashboards, and AI generator tools.',
    outcome: 'Tactical execution confidence without guesswork',
    iconName: 'Wrench',
  },
  {
    step: 'Step 03',
    number: '03',
    title: 'Build',
    description: 'Develop tangible assets: build a live website, launch ad campaigns, design visual creatives, and configure GA4 tracking.',
    outcome: 'Tangible, interview-ready portfolio assets',
    iconName: 'FolderPlus',
  },
  {
    step: 'Step 04',
    number: '04',
    title: 'Apply',
    description: 'Leverage your newly acquired skills and portfolio for freelance projects, business growth, or job opportunities.',
    outcome: 'Real-world career momentum & client readiness',
    iconName: 'Rocket',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    batch: 'Batch 2026 Graduate',
    role: 'Digital Marketing Trainee',
    focus: 'Performance Ads & AI Copywriting',
    quote: 'Student testimonial will be added here. (CBM Academy focuses on authentic student feedback after course completion).',
    isPlaceholder: true,
    avatarSeed: 'alex',
  },
  {
    id: 'test-2',
    batch: 'Batch 2026 Graduate',
    role: 'Freelance Marketer',
    focus: 'SEO & WordPress Web Build',
    quote: 'Student testimonial will be added here. (CBM Academy focuses on authentic student feedback after course completion).',
    isPlaceholder: true,
    avatarSeed: 'sarah',
  },
  {
    id: 'test-3',
    batch: 'Batch 2026 Graduate',
    role: 'Business Owner',
    focus: 'Meta Ads & E-Commerce Lead Generation',
    quote: 'Student testimonial will be added here. (CBM Academy focuses on authentic student feedback after course completion).',
    isPlaceholder: true,
    avatarSeed: 'rahul',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is taught at CBM Academy?',
    answer:
      'CBM Academy provides a comprehensive, 100% practical Digital Marketing & AI master program covering 12 core modules: Digital Marketing Fundamentals, SEO, WordPress Site Development, Google Ads, Meta Ads (Facebook/Instagram), Social Media Marketing, Canva & AI Graphic Design, Google Analytics 4 (GA4), AI Tools & Prompt Engineering, Marketing Automation, E-commerce, and Live Practical Projects.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'Is the course practical?',
    answer:
      'Yes, 100%. The curriculum at CBM Academy is built around hands-on execution. Instead of theoretical lectures, students work directly inside Google Ads Manager, Meta Business Suite, WordPress, Semrush, Google Analytics, Canva, and AI tools, completing assignments and real client project scenarios.',
    category: 'Curriculum',
  },
  {
    id: 'faq-3',
    question: 'Is AI included in the curriculum?',
    answer:
      'Absolutely. AI integration is at the heart of our curriculum. Students learn how to use ChatGPT, Claude, Midjourney, Canva AI, and automated AI marketing workflows to speed up research, copywriting, design, and campaign analysis.',
    category: 'Tools & AI',
  },
  {
    id: 'faq-4',
    question: 'Is this suitable for beginners?',
    answer:
      'Yes. Our program starts from fundamental digital concepts before advancing into performance marketing and AI workflows. No prior coding or marketing experience is required — only basic computer literacy and a desire to learn.',
    category: 'General',
  },
  {
    id: 'faq-5',
    question: 'What tools will students learn?',
    answer:
      'Students gain hands-on proficiency with Google Ads, Meta Ads Manager, Google Analytics 4, Google Search Console, WordPress, Elementor, Semrush, Canva Pro, ChatGPT, Claude, Zapier, Mailchimp, and Shopify.',
    category: 'Tools & AI',
  },
  {
    id: 'faq-6',
    question: 'Is WordPress included?',
    answer:
      'Yes. Module 3 is dedicated to WordPress web development without code. You will learn to domain setup, hosting, Elementor page building, speed optimization, and landing page UX.',
    category: 'Curriculum',
  },
  {
    id: 'faq-7',
    question: 'Are SEO and paid advertising included?',
    answer:
      'Yes! We cover both organic growth (On-Page, Off-Page, Technical & Local SEO) and paid acquisition (Google Search/Display/Shopping/YouTube Ads & Meta Performance Ads) in extensive detail.',
    category: 'Curriculum',
  },
  {
    id: 'faq-8',
    question: 'How does the admission/counselling process work?',
    answer:
      'You can submit an enquiry form or click "Talk to a Counsellor". Our academic advisor will contact you to discuss your career goals, explain batch schedules, assess your requirements, and help you select the right batch.',
    category: 'Career & Admission',
  },
  {
    id: 'faq-9',
    question: 'Where is CBM Academy located?',
    answer:
      'CBM Academy is located in Okhla, New Delhi (Pin Code: 110020), easily accessible via Delhi Metro (Violet Line - Okhla / Govindpuri / NSIC Okhla stations).',
    category: 'General',
  },
  {
    id: 'faq-10',
    question: 'How can I contact CBM Academy?',
    answer:
      'You can submit an enquiry on our website, call us at +91 98188 00000, or email admissions@cbmacademy.in. You can also visit our campus in Okhla, New Delhi during working hours (Mon-Sat, 9:30 AM – 6:30 PM).',
    category: 'General',
  },
];

export const CAREER_PATHS: CareerPath[] = [
  {
    title: 'Digital Marketing Specialist',
    salaryRange: '₹3.5L – ₹6.5L / yr',
    keySkills: ['SEO', 'Google Ads', 'Meta Ads', 'GA4 Analytics'],
    responsibilities: 'Manage end-to-end digital marketing campaigns for brands and agencies.',
    demand: 'High',
  },
  {
    title: 'SEO & Content Strategist',
    salaryRange: '₹3.8L – ₹7.0L / yr',
    keySkills: ['Technical SEO', 'Keyword Intent', 'AI Content Workflows', 'Ahrefs'],
    responsibilities: 'Drive organic search traffic, conduct site audits, and scale search visibility.',
    demand: 'Very High',
  },
  {
    title: 'Performance Marketing Manager',
    salaryRange: '₹4.5L – ₹9.0L / yr',
    keySkills: ['Meta Ads', 'Google Ads', 'ROAS Optimization', 'Media Buying'],
    responsibilities: 'Manage paid advertising budgets, scale acquisition campaigns, and optimize ROAS.',
    demand: 'High Growth',
  },
  {
    title: 'AI Marketing & Freelance Practitioner',
    salaryRange: '₹40K – ₹1.5L+ / month',
    keySkills: ['AI Automation', 'Client Management', 'WordPress', 'Funnel Design'],
    responsibilities: 'Provide freelance digital marketing services to international and domestic clients.',
    demand: 'Expanding',
  },
];
