export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readTime: string;
  category: string;
  featured?: boolean;
  content?: string;
  image?: string;
};

import searchEngineImg from "@/assets/project-search-engine.jpg";
import aiTutorImg from "@/assets/project-ai-tutor.jpg";
import geoOptimizationImg from "@/assets/project-geo-optimization.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Production-Ready LLMOps Pipelines: A Complete Guide",
    excerpt:
      "Learn how to create scalable, robust LLMOps pipelines that can handle production workloads with monitoring, versioning, and automated deployment.",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "LLMOps",
    featured: true,
    content:
      "We cover data versioning, prompt tracking, evaluation loops, and continuous delivery for LLM systems...",
    image: searchEngineImg,
  },
  {
    id: 2,
    title: "Multi-Agent AI Systems: The Future of Intelligent Automation",
    excerpt:
      "Exploring how multi-agent architectures are revolutionizing business automation and creating more sophisticated AI solutions.",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "Agentic AI",
    content: "From coordinator agents to tool routing, learn patterns for reliable multi-agent systems...",
    image: aiTutorImg,
  },
  {
    id: 3,
    title: "Optimizing RAG Architectures for Better Search Relevance",
    excerpt:
      "Deep dive into retrieval-augmented generation techniques and how to optimize them for domain-specific applications.",
    date: "2024-02-05",
    readTime: "10 min read",
    category: "RAG Systems",
    content: "Index selection, chunking strategies, query rewriting, and evaluation of RAG systems...",
    image: geoOptimizationImg,
  },
  {
    id: 4,
    title: "Generative AI for SEO: Transforming Content Strategy",
    excerpt:
      "How generative AI is changing SEO strategies and content creation for better search engine visibility and user engagement.",
    date: "2024-01-28",
    readTime: "7 min read",
    category: "Generative SEO",
    image: searchEngineImg,
  },
  {
    id: 5,
    title: "AI Product Strategy: From Research to Market Success",
    excerpt:
      "A comprehensive framework for turning AI research into successful products that solve real business problems.",
    date: "2024-01-20",
    readTime: "12 min read",
    category: "AI Strategy",
    image: aiTutorImg,
  },
  {
    id: 6,
    title: "Automation Best Practices: Building Reliable AI Workflows",
    excerpt:
      "Essential practices for creating automated workflows that are maintainable, scalable, and reliable in production environments.",
    date: "2024-01-15",
    readTime: "9 min read",
    category: "Automation",
    image: geoOptimizationImg,
  },
];

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

