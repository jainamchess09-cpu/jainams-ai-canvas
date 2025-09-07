import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  order_index?: number;
};

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      const { data, error } = await (supabase as any)
        .from("experiences")
        .select("id,title,company,period,description,achievements,order_index")
        .order("order_index", { ascending: true });
      if (!isMounted) return;
      if (error) {
        setExperiences([]);
      } else {
        setExperiences((data as ExperienceItem[]) || []);
      }
      setLoading(false);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loading && experiences.length > 0) {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Timeline line animation
      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Experience items animation
      const items = timelineRef.current?.children;
      if (items) {
        gsap.fromTo(Array.from(items),
          { x: 50, opacity: 0, rotateY: 15 },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  }, [loading, experiences]);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-background transform-gpu perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of building innovative AI solutions and transforming business operations through technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          {/* Experience Items */}
          <div ref={timelineRef} className="space-y-12">
            {!loading && experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="relative md:pl-20 interactive-card magnetic-hover"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.02,
                    x: 10,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                  });
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  
                  {Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-card-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="relative md:pl-20">
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                <div className="bg-card p-8 rounded-2xl border border-border animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;