import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type ProjectListItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  tags?: string[];
};

const Portfolio = () => {
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      const { data, error } = await (supabase as any)
        .from("projects")
        .select("id,title,category,description,image,tags")
        .order("id", { ascending: true });
      if (!isMounted) return;
      if (error) {
        setProjects([]);
      } else {
        setProjects((data as unknown as ProjectListItem[]) || []);
      }
      setLoading(false);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="projects" className="bg-background justify-center items-center py-32">
      <div className="max-w-6xl mx-auto justify-center items-center">
        {/* Header */}
        <div className="flex justify-center mb-12 text-center">
          <div className="mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-primary">Let's have a look at my portfolio</h2>
            <p className="text-muted-foreground">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!loading && projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                {project.image && (
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="btn-primary w-full" asChild>
                      <Link to={`/projects/${project.id}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link to={`/projects/${project.id}`} className="font-semibold text-base text-card-foreground hover:text-primary">
                    {project.title}
                  </Link>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {(project.tags || []).map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 bg-secondary/30 text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {loading && Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-background h-40 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;