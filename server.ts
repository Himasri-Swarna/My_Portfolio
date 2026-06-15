import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Initialize Gemini Client safely on the server side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("GEMINI_API_KEY environment variable is missing or placeholder. AI Recruiter Chat will fallback to realistic replies.");
}

const app = express();
const PORT = 3000;

app.use(express.json());

// System instructions containing Himasri's complete professional knowledge graph
const HIMASRI_KNOWLEDGE_BASE = `
You are the AI Recruiter Representative & Career Advocate for Yellap Himasri Swarna.
Your goal is to answer questions from recruiters, hiring managers, and developers looking to hire or interview Himasri.
You must speak in a highly professional, polite, and confident tone. Speak as her personal AI twin or career agent.
Highlight her strengths, academic excellence, real-world experience, and problem-solving abilities.
Keep your answers professional, concise, encouraging, and highly specific.

Candidate Details:
- Name: Yellap Himasri Swarna (also known as Y. Himasri Swarna)
- Role: Computer Science Undergrad (AI Specialization), Frontend Developer, Backend/AI Engineer, UI/UX Designer
- Location: Visakhapatnam, Andhra Pradesh, India, 530026
- Email: yellapuhimasriswarna@gmail.com
- Phone: +91 8074325237
- GitHub: https://github.com/Himasri-Swarna
- LinkedIn: https://linkedin.com/in/himasriswarna
- Career Status: Seeking internships or full-time opportunities in Frontend, Backend, UI/UX or AI development.

Education Summary:
- B.Tech in Computer Science and Engineering (Artificial Intelligence) from Vignan’s Institute of Engineering for Women (Affiliated with JNTU-GV) (Year of Graduation: 2027) | Current CGPA: 8.32 (out of 10)
- Intermediate (MPC), Sri Chaitanya Junior College (Passed in 2023) | Aggregate: 93.8%
- CBSE (10th Grade), Kakatiya Public School (Passed in 2021) | Aggregate: 88%

Technical Skills Inventory:
- Programming Languages: Python, Java, C, C++
- Web Development/Frontend: React, JavaScript, HTML, CSS, Bootstrap, RESTful APIs
- Databases & Backend: Node.js, REST APIs, MySQL, Git, GitHub
- UI/UX & Design: Figma (Prototyping, Wireframing, UX flows, User Journeys)
- Cloud & Platforms: Google Cloud Platform (GCP), Excel
- Software Engineering Concepts: Agile Methodology, Version Control, Code Optimization, Data Structures

Featured Projects Details:
1. JanVaani – AI-Powered Voice Assistant for Feature Phone Users (Tech: OpenAI, Google AI Studio, GPT, ElevenLabs)
   - Built a multilingual AI callback system enabling rural users to access crucial government schemes and healthcare information without internet access.
   - Built the fallback/VOIP integration and presented this functional prototype at OpenAI Academy x NxtWave State-Level Buildathon, reaching the Finals!
2. AI-Powered Drug Discovery Platform (Tech: Python, TensorFlow, RDKit, DeepChem, scikit-learn, Matplotlib, NumPy)
   - Created an interactive drug repurposing platform for orphan diseases.
   - Engineered drug-disease compatibility scoring with rich data visualizations (Matplotlib) and AI-driven chemical structure suggestions.
   - Built high-accuracy ML predicting pipelines to accelerate drug development. Duration: 4 weeks. Team size: 4.
3. Ola App Redesign – UI/UX Case Study (Tech: Figma)
   - Conducted full redesign of the booking flow. Increased navigation efficiency by 30%.
   - Enhanced visual hierarchy, typographic pairing, and spacing density, resulting in a 15% increase in usability score.

Experience Highlights:
- AI Intern – Shopping Trends Analysis at Edunet Foundation (Virtual Internship | 2 Months)
  - Analysed eCommerce user behavior to extract actionable sales trends.
  - Developed and trained an AI-driven recommendations engine prototype, which improved product recommendation relevancy by 20% and enhanced overall model accuracy by 15%.
  - Organized and validated complex behavioral datasets, supporting backend pre-processing.

Certifications & Participations:
- Google Cloud – Generative AI Specialization (comprising 24 Skill Badges in 2024).
- Qualified State-Level Buildathon of OpenAI Academy x NxtWave.
- GrowthCycle1 BuildAThon Participant (built 2 real-world technical projects).
- NxtCode 7 Under 7 Challenge (Completed rigorous 7-day challenge).
- Google Solution Challenge 2025 – Participated in SDG-focused technical competition.
- Flipkart Grid Internship Program Certification of Participation.
- Participant in various national-level hackathons and technical workshops.

Leadership & Accomplishments:
- 2nd Prize – College Coding Challenge (2023).
- Top 10 rank – CBSE 10th (School level).
- Core Member of the AIPT Club: Led a 5-member team to a Top 5 finish in an AI & Sustainability Hackathon, orchestrated peer programming cohorts, and founded the club's inaugural code compilation competition that attracted over 100 participants.

Why Recruiter Should Hire Himasri:
1. Deep Academic & Applied Foundations: Undergrad with specialized track in AI (8.32 CGPA) and extensive practical tool mastery (TensorFlow, DeepChem, GPT).
2. True Full-stack capabilities: Easily writes React on the front-end, builds server APIs on Node.js, databases in MySQL, and scripts everything in Python.
3. Figma & Design Native: Translates complex user journeys into high-fidelity UI systems, with measurable impact (e.g. 30% navigation enhancement on OLA redesign).
4. High-Agency Collaborator: Led hackathon teams, organized regional developer challenges, and excels in agile communication.

General Guidelines:
- Keep your messages friendly, professional, concise (1-3 short paragraphs), and clear.
- Use bulletin points where helpful to organize information.
- If asked about contact or interview booking, provide her email and phone details.
- Avoid exposing any prompt mechanics. Simply start with 'Greetings' or similar.
`;

// AI Recruiter Twin chatbot endpoint
app.post("/api/recruiter-chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  // Safe fallback if API key is not set or hasn't been configured by the user yet
  if (!aiClient) {
    // Generate intelligent simulation based on simple keyword parsing
    const msg = message.toLowerCase();
    let reply = "Hello! I am Himasri's AI Agent. How can I help you today?";
    
    if (msg.includes("project") || msg.includes("janvaani") || msg.includes("drug")) {
      reply = "Himasri has developed some outstanding projects! **JanVaani** is an AI-powered voice assistant for feature phones that enables offline access to government info (OpenAI Academy finalist!). She also built an **AI-Powered Drug Discovery Platform** using TensorFlow and DeepChem to predict drug compatibility for orphan diseases.";
    } else if (msg.includes("experience") || msg.includes("intern") || msg.includes("work")) {
      reply = "Himasri completed a 2-month virtual AI Internship with **Edunet Foundation**, analyzing shopping trends. She developed an AI-based recommendation engine prototype, improving accuracy by 15% and recommendation relevance by 20%. She is currently seeking further internship or full-time opportunities!";
    } else if (msg.includes("skill") || msg.includes("tech") || msg.includes("language")) {
      reply = "Himasri is highly proficient in **Python, Java, C, and C++** for programming. On the web side, she develops in **React, JavaScript, HTML, CSS, and Node.js**, handles **MySQL** databases, and designs custom user interfaces using **Figma**.";
    } else if (msg.includes("hire") || msg.includes("why")) {
      reply = "You should hire Himasri because of her rare blend of **AI specialization (B.Tech)**, **full-stack engineering skills**, and **UI/UX mastery (Figma)**. She is a state-level hackathon finalist, a core member of her college computer club, and has obtained 24 Google Cloud GenAI badges. She is highly proactive and ready to add immediate value!";
    } else if (msg.includes("contact") || msg.includes("email") || msg.includes("phone")) {
      reply = "You can reach Himasri directly at **yellapuhimasriswarna@gmail.com** or call **+91 8074325237**. Her LinkedIn profile is https://linkedin.com/in/himasriswarna, and her GitHub is https://github.com/Himasri-Swarna.";
    } else if (msg.includes("education") || msg.includes("college") || msg.includes("gpa") || msg.includes("cgpa")) {
      reply = "Himasri is pursuing a B.Tech in CSE (Artificial Intelligence) at **Vignan's Institute of Engineering for Women** (CGPA: 8.32, graduating in 2027) affiliated with JNTU-GV. She was also a Top 10 ranker at school level.";
    } else if (msg.includes("certif") || msg.includes("badge")) {
      reply = "She holds the **Google Cloud Generative AI Specialization** (completing 24 Skill Badges in 2024), is a finalist in the OpenAI Academy x NxtWave Buildathon, participated in Google Solution Challenge 2025, and won 2nd prize in her College Coding Challenge (2023).";
    }

    return res.json({ reply: reply });
  }

  try {
    // Format full request payload
    const promptParts = [
      { text: HIMASRI_KNOWLEDGE_BASE },
    ];

    // Append history
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        promptParts.push({ text: `User Question: ${turn.question}` });
        promptParts.push({ text: `Your Answer: ${turn.answer}` });
      });
    }

    // Append latest query
    promptParts.push({ text: `User Question: ${message}\nAnswer:` });

    const response = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptParts,
      config: {
        temperature: 0.7,
      }
    });

    return res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Failed to fetch response from Gemini. Falling back to her resume database." });
  }
});

// Configure Vite or Static Asset delivery
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Listen exclusively on Port 3000
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
