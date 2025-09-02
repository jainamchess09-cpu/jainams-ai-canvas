import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Production-Ready LLMOps Pipelines: A Complete Guide",
      excerpt: "Learn how to create scalable, robust LLMOps pipelines that can handle production workloads with monitoring, versioning, and automated deployment.",
      date: "2024-02-15",
      readTime: "8 min read",
      category: "LLMOps",
      featured: true
    },
    {
      id: 2,
      title: "Multi-Agent AI Systems: The Future of Intelligent Automation",
      excerpt: "Exploring how multi-agent architectures are revolutionizing business automation and creating more sophisticated AI solutions.",
      date: "2024-02-10",
      readTime: "6 min read",
      category: "Agentic AI"
    },
    {
      id: 3,
      title: "Optimizing RAG Architectures for Better Search Relevance",
      excerpt: "Deep dive into retrieval-augmented generation techniques and how to optimize them for domain-specific applications.",
      date: "2024-02-05",
      readTime: "10 min read",
      category: "RAG Systems"
    },
    {
      id: 4,
      title: "Generative AI for SEO: Transforming Content Strategy",
      excerpt: "How generative AI is changing SEO strategies and content creation for better search engine visibility and user engagement.",
      date: "2024-01-28",
      readTime: "7 min read",
      category: "Generative SEO"
    },
    {
      id: 5,
      title: "AI Product Strategy: From Research to Market Success",
      excerpt: "A comprehensive framework for turning AI research into successful products that solve real business problems.",
      date: "2024-01-20",
      readTime: "12 min read",
      category: "AI Strategy"
    },
    {
      id: 6,
      title: "Automation Best Practices: Building Reliable AI Workflows",
      excerpt: "Essential practices for creating automated workflows that are maintainable, scalable, and reliable in production environments.",
      date: "2024-01-15",
      readTime: "9 min read",
      category: "Automation"
    }
  ];

  const categories = ["All", "LLMOps", "Agentic AI", "RAG Systems", "Generative SEO", "AI Strategy", "Automation"];

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Sharing knowledge about AI/ML engineering, automation, and building production-ready systems.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="btn-secondary text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-16">
            <div className="bg-background rounded-3xl p-8 md:p-12 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
                <span className="text-xs text-muted-foreground">
                  {blogPosts.find(post => post.featured)?.category}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-card-foreground mb-4">
                {blogPosts.find(post => post.featured)?.title}
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {blogPosts.find(post => post.featured)?.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts.find(post => post.featured)?.date || '').toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts.find(post => post.featured)?.readTime}
                  </div>
                </div>
                
                <Button className="btn-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-background rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-secondary/30 text-secondary-foreground px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 group">
                  Read Article 
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-secondary">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;