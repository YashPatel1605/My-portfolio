import type { LucideIcon } from "lucide-react";
import {
  BellRing,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  MapPinned,
  MessageCircle,
  PanelsTopLeft,
  Smartphone,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Yash Patel",
  role: "React Native Developer",
  headline: "Web & Mobile Application Development",
  email: "patelyash9712@gmail.com",
  phone: "+91 7041099374",
  phoneHref: "tel:+917041099374",
  resumeHref: "/assets/yash-patel-resume.pdf",
  videoHref: "/assets/react-native-developer-video.mp4",
  summary:
    "React Native Developer with 2.5 years of experience shipping 6+ production mobile applications across safety, community, and social-impact domains. I specialize in real-time features, live location tracking, push notifications, chat, Firebase, WebSocket/Socket.io, React.js, Next.js, and n8n automation.",
  shortSummary:
    "I build production-ready mobile and web applications with real-time features, scalable UI, Firebase workflows, and automation that helps teams move faster.",
};

export const highlights = [
  { value: "2.5+", label: "Years Experience" },
  { value: "6+", label: "Production Apps" },
  { value: "1,000+", label: "End Users Served" },
  { value: "5+", label: "n8n Workflows" },
];

export const skills = [
  {
    title: "Mobile & Web",
    icon: Smartphone,
    items: ["React Native", "React.js", "Next.js", "Redux", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    items: ["Node.js", "Express.js", "REST APIs", "CRUD", "Authentication", "Routing"],
  },
  {
    title: "Realtime Systems",
    icon: MessageCircle,
    items: ["Firebase Realtime DB", "Firestore", "WebSocket", "Socket.io", "Push Notifications"],
  },
  {
    title: "Tools & Automation",
    icon: Workflow,
    items: ["n8n", "Strapi", "Git", "GitHub", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Applied AI",
    icon: Bot,
    items: ["LangChain", "Workflow Automation", "API Integration"],
  },
];

export const experience = {
  company: "Shiv Shakti Softech",
  title: "Web/Mobile Application Developer",
  period: "Jan 2024 - August 2026",
  points: [
    "Built and shipped 6+ cross-platform mobile and web applications using React Native, React.js, and Next.js across e-commerce, community, and social-impact domains, serving 1,000+ end users.",
    "Engineered real-time push notification and chat systems using Firebase and WebSocket/Socket.io across 3 production apps.",
    "Built continuous background location tracking with Firebase Realtime Database and Background Geolocation Tracker, delivering live updates to an admin dashboard at 6-second intervals.",
    "Designed 5+ n8n automation workflows integrated with push notification triggers to automate business processes and improve user engagement.",
  ],
};

export type Project = {
  name: string;
  category: string;
  platform: string;
  period?: string;
  status?: string;
  summary: string;
  impact: string[];
  tech: string[];
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    name: "Karzame",
    category: "Virtual Safety Application",
    platform: "Android",
    period: "July 2024 - December 2025",
    status: "Live",
    summary:
      "A real-time safety tracking application for Nigeria that monitors users during journeys and shares live location with an admin dashboard.",
    impact: [
      "Integrated Firebase Realtime Database with Background Geolocation Tracker.",
      "Delivered location updates every 6 seconds for journey monitoring.",
      "Configured automated push notifications for unexpected delays.",
    ],
    tech: ["React Native", "Firebase Realtime DB", "Background Location", "Push Notifications"],
    icon: MapPinned,
  },
  {
    name: "OaVana",
    category: "Green Initiative Mobile App",
    platform: "Android & iOS",
    period: "3 Months",
    status: "Live",
    summary:
      "A social-impact app where users complete daily environmental pledges to earn tokens and points.",
    impact: [
      "Developed daily random pledges and referral rewards.",
      "Built leaderboard, token management, and user profile flows.",
      "Planned team challenges and token marketplace features.",
    ],
    tech: ["React Native", "Firebase", "Gamification", "Rewards"],
    icon: BellRing,
  },
  {
    name: "Apna Mandal",
    category: "Community Management",
    platform: "Android & iOS",
    period: "6 Months",
    status: "Live",
    summary:
      "A community management app that helps social organizations collaborate through one digital platform.",
    impact: [
      "Digitized events, social projects, posts, and donation workflows.",
      "Supported community organizations previously operating manually.",
      "Built cross-platform app flows for Android and iOS.",
    ],
    tech: ["React Native", "Node.js", "Express.js", "Firebase"],
    icon: BriefcaseBusiness,
  },
  {
    name: "Setu App",
    category: "Devotional Content Platform",
    platform: "Android",
    summary:
      "A devotional and spiritual mobile app with personalized deity-based content and daily highlights.",
    impact: [
      "Added curated content for news, articles, bhajans, aarti, quizzes, and shlokas.",
      "Built temple information, event posts, and personalized daily highlights.",
      "Kept content discovery simple for recurring daily engagement.",
    ],
    tech: ["React Native", "Firebase", "Content Feeds", "Personalization"],
    icon: PanelsTopLeft,
  },
  {
    name: "Artisan App",
    category: "Rozgar App",
    platform: "Android",
    summary:
      "A dual-flow local hiring platform where artisans list services and users browse local jobs.",
    impact: [
      "Built artisan skill listings, local job browsing, and application workflows.",
      "Integrated real-time chat between users and artisans.",
      "Supported local-area job coordination and communication.",
    ],
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    icon: MessageCircle,
  },
];

export const services = [
  "React Native applications",
  "Responsive web applications",
  "Realtime chat and location tracking",
  "Firebase and REST API integration",
  "n8n workflow automation",
  "Headless CMS builds with Strapi",
];

export const education = {
  icon: GraduationCap,
  school: "Gujarat Technological University",
  degree: "Bachelor of Engineering (B.E.) in Computer Science",
  period: "2020 - 2024",
  cgpa: "8.33",
};
