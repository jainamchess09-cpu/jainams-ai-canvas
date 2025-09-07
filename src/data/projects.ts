export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  content?: string;
  repoUrl?: string;
  demoUrl?: string;
};

import searchEngineImg from "@/assets/project-search-engine.jpg";
import aiTutorImg from "@/assets/project-ai-tutor.jpg";
import geoOptimizationImg from "@/assets/project-geo-optimization.jpg";

export const projects: Project[] = [
  {
    id: 1,
    title: "Real Estate UI Design",
    category: "Web design",
    description:
      "Real Estate UI Design using modern web technologies and user-friendly interfaces for property management.",
    image: searchEngineImg,
    tags: ["UI/UX", "Web Design", "Real Estate"],
    content:
      "This project focuses on crafting an intuitive property discovery and management experience with responsive layouts, accessible components, and a clean information hierarchy.",
  },
  {
    id: 2,
    title: "Food delivery - Mobile app",
    category: "Mobile App",
    description:
      "Complete food delivery mobile application with real-time tracking, payment integration, and modern UI design.",
    image: aiTutorImg,
    tags: ["Mobile", "React Native", "Food Tech"],
    content:
      "A cross-platform app with live order tracking, secure checkout, and an onboarding flow optimized for conversions.",
  },
  {
    id: 3,
    title: "Beauty Product eCommerce App",
    category: "E-commerce",
    description:
      "Beautiful eCommerce application for beauty products with advanced filtering and seamless checkout experience.",
    image: geoOptimizationImg,
    tags: ["E-commerce", "Beauty", "Shopping"],
    content:
      "End-to-end eCommerce experience including catalog, search, filters, cart, and payment with focus on performance.",
  },
  {
    id: 4,
    title: "Dashboard Sales Analytics",
    category: "Dashboard",
    description:
      "Sales analytics dashboard with real-time data visualization and comprehensive reporting features.",
    image: searchEngineImg,
    tags: ["Analytics", "Dashboard", "Sales"],
    content:
      "Interactive charts, cohort analysis, and role-based access to insights for sales teams.",
  },
  {
    id: 5,
    title: "Travel Mobile App",
    category: "Mobile App",
    description:
      "Travel mobile application with booking features, itinerary planning, and location-based recommendations.",
    image: aiTutorImg,
    tags: ["Travel", "Mobile", "Booking"],
    content:
      "Itinerary builder, bookings, and offline-first maps for seamless travel planning.",
  },
  {
    id: 6,
    title: "BookNoid - Receipt Generator",
    category: "Web App",
    description:
      "Automated receipt generation system with customizable templates and integration capabilities.",
    image: geoOptimizationImg,
    tags: ["Automation", "Receipt", "Business"],
    content:
      "Template-driven PDF generation, audit trail, and export options for finance workflows.",
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

