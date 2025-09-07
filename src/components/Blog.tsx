import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type BlogListItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  category: string;
  image?: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const categories = ["All", "LLMOps", "Agentic AI", "RAG Systems", "Generative SEO", "AI Strategy", "Automation"];

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      const { data, error } = await (supabase as any)
        .from("blog_posts")
        .select("id,title,excerpt,date,read_time,category,image")
        .order("date", { ascending: false });
      if (!isMounted) return;
      if (error) {
        setPosts([]);
      } else {
        setPosts((data as unknown as BlogListItem[]) || []);
      }
      setLoading(false);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="blog" className="py-16 bg-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Latest Insights</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6 text-sm">
            Sharing knowledge about AI/ML engineering, automation, and building production-ready systems.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
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

        {/* Blog Grid - uniform cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!loading && posts.map((post) => (
            <article key={post.id} className="bg-background rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-32 object-cover" />
              )}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] bg-secondary/30 text-secondary-foreground px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.read_time}
                    </div>
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`} className="text-base font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </Link>
                
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 group text-sm" asChild>
                  <Link to={`/blog/${post.id}`}>
                    Read Article 
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
          {loading && Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-background p-5 h-40 animate-pulse" />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="btn-secondary" size="sm">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;