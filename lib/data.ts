export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & DevOps";
  level: number; // 1-5
}

export const projects: Project[] = [
  {
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "A real-time analytics platform powered by machine learning, featuring interactive charts, predictive insights, and customizable widgets.",
    longDescription:
      "Built a full-stack analytics platform that ingests streaming data and surfaces ML-powered insights. The dashboard features real-time WebSocket updates, drag-and-drop widget customization, and a natural language query interface backed by OpenAI. Deployed on Vercel with a PostgreSQL database on Supabase.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Recharts", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/ai-dashboard.png",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A high-performance online store with server-side rendering, Stripe payments, inventory management, and an admin dashboard.",
    longDescription:
      "Architected a scalable e-commerce solution handling thousands of SKUs. Features include SSR product pages for SEO, Stripe Checkout integration, real-time inventory sync, and a headless CMS for content management. Achieved a 98 Lighthouse performance score.",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Redis", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/ecommerce.png",
    featured: true,
  },
  {
    slug: "devops-cli",
    title: "DevOps CLI Toolkit",
    description:
      "A powerful command-line tool that automates deployment pipelines, infrastructure provisioning, and monitoring setup for cloud environments.",
    longDescription:
      "Developed an open-source CLI tool used by 500+ developers to streamline cloud deployments. Supports AWS, GCP, and Azure with a plugin architecture. Features include one-command Kubernetes cluster setup, automated SSL certificate management, and integrated cost estimation.",
    tags: ["Node.js", "TypeScript", "AWS SDK", "Kubernetes", "Terraform", "Docker"],
    liveUrl: undefined,
    githubUrl: "https://github.com",
    image: "/projects/devops-cli.png",
    featured: true,
  },
  {
    slug: "realtime-collab",
    title: "Real-Time Collaboration Tool",
    description:
      "A Notion-inspired collaborative workspace with live cursors, rich text editing, nested pages, and team permission management.",
    longDescription:
      "Built a collaborative document editor supporting simultaneous editing by multiple users using CRDTs (Conflict-free Replicated Data Types). Features include live cursor presence, comment threads, version history, and granular permission controls. The backend uses Elixir/Phoenix for low-latency WebSocket connections.",
    tags: ["React", "TypeScript", "Elixir", "Phoenix", "CRDTs", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/collab.png",
    featured: false,
  },
  {
    slug: "mobile-fitness",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile app for workout tracking, nutrition logging, and progress visualization with AI-powered coaching suggestions.",
    longDescription:
      "Designed and built a React Native fitness app with offline-first architecture. Integrates with Apple Health and Google Fit for automatic activity sync. The AI coaching feature analyzes workout history and nutrition data to generate personalized training plans.",
    tags: ["React Native", "Expo", "TypeScript", "TensorFlow Lite", "SQLite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/fitness.png",
    featured: false,
  },
  {
    slug: "design-system",
    title: "Open-Source Design System",
    description:
      "A comprehensive component library with 60+ accessible components, dark mode support, and full Storybook documentation.",
    longDescription:
      "Created and maintained an open-source design system adopted by 20+ projects. Built with Radix UI primitives for accessibility, CVA for variant management, and automated visual regression testing with Chromatic. Published to npm with full TypeScript types and tree-shaking support.",
    tags: ["React", "TypeScript", "Radix UI", "Storybook", "CVA", "Chromatic"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/design-system.png",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 5 },
  { name: "Tailwind CSS", category: "Frontend", level: 5 },
  { name: "Framer Motion", category: "Frontend", level: 4 },
  { name: "React Native", category: "Frontend", level: 4 },
  { name: "GraphQL", category: "Frontend", level: 4 },
  { name: "Three.js", category: "Frontend", level: 3 },
  // Backend
  { name: "Node.js", category: "Backend", level: 5 },
  { name: "PostgreSQL", category: "Backend", level: 4 },
  { name: "Prisma", category: "Backend", level: 4 },
  { name: "Redis", category: "Backend", level: 4 },
  { name: "Supabase", category: "Backend", level: 4 },
  { name: "Elixir", category: "Backend", level: 3 },
  { name: "Python", category: "Backend", level: 3 },
  { name: "Rust", category: "Backend", level: 2 },
  // Tools
  { name: "Docker", category: "Tools & DevOps", level: 4 },
  { name: "AWS", category: "Tools & DevOps", level: 4 },
  { name: "Kubernetes", category: "Tools & DevOps", level: 3 },
  { name: "Terraform", category: "Tools & DevOps", level: 3 },
  { name: "GitHub Actions", category: "Tools & DevOps", level: 4 },
  { name: "Vercel", category: "Tools & DevOps", level: 5 },
  { name: "Figma", category: "Tools & DevOps", level: 4 },
  { name: "Datadog", category: "Tools & DevOps", level: 3 },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "alex@example.com",
};

export const personalInfo = {
  name: "Alex Rivera",
  title: "Full-Stack Engineer",
  tagline: "I build fast, accessible, and beautiful web experiences.",
  bio: "Hey, I'm Alex — a full-stack engineer with 6+ years of experience crafting products that people love. I specialize in React/Next.js on the frontend and Node.js/PostgreSQL on the backend, with a strong eye for design and performance. I've shipped products used by hundreds of thousands of users at startups and scale-ups across fintech, e-commerce, and developer tooling.",
  bio2: "When I'm not coding, you'll find me contributing to open source, writing about web performance on my blog, or exploring mountain trails with my camera.",
  location: "San Francisco, CA",
  available: true,
};
