import { Project, Experience, EducationItem, SkillCategory, Certification, Achievement } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Y.Himasri Swarna",
  shortName: "Himasri Swarna",
  title: "AI Specialist & Software Engineer",
  headline: "Building Intelligent Systems & Human-Centric UI/UX Interfaces",
  email: "yellapuhimasriswarna@gmail.com",
  phone: "+91 8074325237",
  location: "Visakhapatnam, Andhra Pradesh, India 530026",
  github: "https://github.com/Himasri-Swarna",
  linkedin: "https://linkedin.com/in/himasriswarna",
  aboutMe: "I am a highly motivated Computer Science Undergraduate specializing in Artificial Intelligence with a deep-seated passion for designing and implementing advanced intelligent systems, predictive models, and highly functional human-centric user experiences. As an active software builder, state-level hackathon finalist, and Google Cloud Generative AI expert, I thrive on writing clean code to bridge complex mathematical backend architectures with beautiful, highly accessible frontends.",
  personalAttributes: [
    "AI/ML Pipelines",
    "Human-Centric UI/UX Design",
    "Agile Collaboration",
    "Rapid High-Agency Learning",
    "Problem Solving",
    "Competitive Coding"
  ],
  languages: [
    { name: "English", fluency: "Professional Fluency" },
    { name: "Telugu", fluency: "Native Speakership" },
    { name: "Hindi", fluency: "Conversational Fluency" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "janvaani",
    name: "JanVaani – AI-Powered Voice Assistant for Feature Phones",
    description: "A state-of-the-art multilingual voice automation system that bypasses modern internet constraints, enabling Indian rural populations to query vital civic facilities, healthcare directories, and safety protocols solely via simple voice telephony.",
    problemSolved: "Rural Indian phone owners with no stable internet access or smartphone interface are unable to read or lookup complex welfare, local government, or diagnostic health documentation.",
    technologies: ["OpenAI API", "Google AI Studio", "GPT-4o", "ElevenLabs (TTS/Speech)", "REST APIs"],
    features: [
      "Seamless callback VOIP gateway triggers without cellular internet requirements",
      "Robust multilingual dialect comprehension (translates and replies in native languages)",
      "Low-latency response compilation via pipeline streaming"
    ],
    impact: [
      "Finalist at OpenAI Academy x NxtWave State-Level Buildathon",
      "Showcased key local-language offline accessibility to state regulators & advisors"
    ],
    githubUrl: "https://github.com/Himasri-Swarna",
    category: "AI/ML",
    imageUrl: "https://files.catbox.moe/xjq6vu.png"
  },
  {
    id: "drug-discovery",
    name: "AI-Powered Drug Discovery & Repurposing Platform",
    description: "An interactive automated drug screening and molecular matching system designed to expedite orphan disease medical treatments by testing compatible pharmaceutical formulas against targeting protein schemas.",
    problemSolved: "Traditional pharmaceutical screening processes are slow, manual, and cost-prohibitive, leaving rare orphan diseases without funded drug development research pathways.",
    technologies: ["Python", "TensorFlow", "RDKit", "DeepChem", "scikit-learn", "Matplotlib", "NumPy"],
    features: [
      "Real-time drug-disease compatibility indexing and scoring metrics",
      "Dynamic data-driven visualization charts representing molecular structures",
      "AI-driven chemical modification suggestions to optimise binding affinities"
    ],
    impact: [
      "Preloaded deep model parameters delivering rapid similarity searches",
      "Engineered machine learning pipelines that process validation in under 4 weeks"
    ],
    githubUrl: "https://github.com/Himasri-Swarna",
    category: "AI/ML",
    imageUrl: "https://files.catbox.moe/kdrxxs.png"
  },
  {
    id: "ola-redesign",
    name: "Ola Application Redesign – Premium UI/UX Case Study",
    description: "An exhaustive aesthetic and flow restructuring of India's biggest ridesharing mobile client, focusing on driver-passenger connection nodes, checkout steps and digital map layout.",
    problemSolved: "High cognitive load, crowded screens, and complex multi-layered menus inside the traditional hailing interface led to cart abandonment and delayed ride selections.",
    technologies: ["Figma", "User Journey Mapping", "Grid Typography", "Interactions Prototyping"],
    features: [
      "Restructured single-tap cab confirmation wireframing and user pathways",
      "Incorporated high-contrast UI details to improve accessibility in low-lit outdoor conditions",
      "Refined checkout modules with beautiful, fluid card components"
    ],
    impact: [
      "Improvised booking workflow path, boosting navigation speed by 30%",
      "Achieved a 15% increase in verified System Usability Scale (SUS) scores"
    ],
    category: "UI/UX",
    imageUrl: "https://files.catbox.moe/063i6k.png"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "edunet",
    role: "AI Intern – Shopping Trends Analysis",
    company: "Edunet Foundation (Virtual)",
    duration: "2 Months",
    location: "Remote / Corporate Office",
    bullets: [
      "Synthesized and parsed unstructured ecommerce behavioral datasets to discover latent buying triggers and shopping sequences.",
      "Engineered an artificial intelligent validation recommendation pipeline prototype, analyzing clickstreams to direct item suggestions.",
      "Optimized recommendation relevance score, accelerating model deployment accuracy pipelines."
    ],
    metrics: [
      { label: "Recommendation Relevance", value: "+20%" },
      { label: "Model Optimization", value: "15% Higher Accuracy" },
      { label: "Data Pipeline Growth", value: "Offline Analytics Ready" }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
    school: "Vignan's Institute of Engineering for Women",
    board: "JNTU-GV, Andhra Pradesh",
    duration: "2023 - 2027",
    grade: "8.32 CGPA",
    coursework: ["Machine Learning & Neural Nets", "Data Structures & Algorithms", "Database Management Systems (MySQL)", "Web Development & API Integration", "UI/UX Interface Design Concepts"]
  },
  {
    id: "inter",
    degree: "Intermediate (MPC Coursework)",
    school: "Sri Chaitanya Junior College",
    board: "State Board of Andhra Pradesh",
    duration: "2021 - 2023",
    grade: "93.8% Aggregate",
    coursework: ["Advanced Mathematics", "Physics", "Chemistry"]
  },
  {
    id: "cbse",
    degree: "CBSE (10th Standard Matriculation)",
    school: "Kakatiya Public School",
    board: "Central Board of Secondary Education (CBSE)",
    duration: "2020 - 2021",
    grade: "88% Aggregate",
    coursework: ["Science & Math Foundations", "English Literature & Communication"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "Java", level: 82 }
    ]
  },
  {
    title: "Web Development (Frontend & API)",
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Bootstrap / Tailwind CSS", level: 92 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    title: "Databases & Backend Infrastructure",
    skills: [
      { name: "Node.js (Express)", level: 80 },
      { name: "MySQL", level: 86 },
      { name: "Git & Version Control", level: 88 },
      { name: "Google Cloud Platform", level: 75 },
      { name: "VS Code & Developer Ecosystem", level: 92 }
    ]
  },
  {
    title: "Design & Product Management",
    skills: [
      { name: "Figma (Prototyping & Wireframing)", level: 95 },
      { name: "User Journey & Experience Mapping", level: 90 },
      { name: "Agile Development Methodologies", level: 85 },
      { name: "Code Optimization", level: 82 }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "Google Cloud – Generative AI Specialization",
    issuer: "Google Cloud (Accompanied by 24 Official Skill Badges)",
    date: "2024",
    highlight: true
  },
  {
    name: "OpenAI Academy x NxtWave State-Level Buildathon – Qualified State Finalist",
    issuer: "OpenAI Academy (Recognized for JanVaani Core Innovation)",
    date: "2024",
    highlight: true
  },
  {
    name: "GrowthCycle1 BuildAThon – Built & Verified 2 Real-World Tech Projects",
    issuer: "GrowthCycle",
    date: "2024"
  },
  {
    name: "NxtCode 7 Under 7 Challenge – Rigorous 7-Day Agile Programming Sprint",
    issuer: "NxtCode Group",
    date: "2024"
  },
  {
    name: "Google Solution Challenge 2025 Participant (SDG-Focused Tech Competition)",
    issuer: "Google Developer Groups",
    date: "2025",
    highlight: true
  },
  {
    name: "Flipkart Grid Internship Program (National Technical Contest & Assessment)",
    issuer: "Flipkart Engineering Team",
    date: "2024"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "openai-final",
    title: "State Finalist Medalist",
    organization: "OpenAI Academy & NxtWave",
    category: "Hackathons",
    emoji: "🏆",
    description: "Recognized as a State finalist for creating JanVaani UI, a voice assistant overcoming telecom barriers for feature-phone users."
  },
  {
    id: "code-2nd",
    title: "2nd Place Winner",
    organization: "College-Level Technical Coding Challenge",
    category: "Coding Competitions",
    emoji: "💻",
    description: "Won 2nd prize in college-wide algorithmic challenge solving speed, efficiency, and scale problems with optimized C++ routines."
  },
  {
    id: "cbse-top10",
    title: "Top 10 School Ranking",
    organization: "Kakatiya Public School (CBSE)",
    category: "Academics",
    emoji: "⭐️",
    description: "Ranked inside top 10 candidates overall in 10th grade CBSE matriculations with high performance metrics in STEM content."
  },
  {
    id: "club-leader",
    title: "Core Leader & Organizer",
    organization: "AIPT Club (Artificial Intelligence & Prototyping Tech)",
    category: "Leadership",
    emoji: "🤝",
    description: "Directed a group of 5 builders to Top 5 placing in regional ESG hackathons and hosted her college's first coding tournament (100+ competitors)."
  }
];
