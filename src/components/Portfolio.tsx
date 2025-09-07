import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    if (!loading && projects.length > 0) {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Staggered cards animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(Array.from(cards),
          { y: 100, opacity: 0, rotateX: 45, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Parallax effect for the entire section
      gsap.to(sectionRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  }, [loading, projects]);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="bg-background justify-center items-center py-32 transform-gpu perspective-1000"
    >
      <div className="max-w-6xl mx-auto justify-center items-center">
        {/* Header */}
        <div ref={headerRef} className="flex justify-center mb-12 text-center">
          <div className="mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-primary">Let's have a look at my portfolio</h2>
            <p className="text-muted-foreground">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!loading && projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group interactive-card magnetic-hover"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                
                gsap.to(e.currentTarget, {
                  rotateY: x * 15,
                  rotateX: -y * 15,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  rotateY: 0,
                  rotateX: 0,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.3)"
                });
              }}
            >
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