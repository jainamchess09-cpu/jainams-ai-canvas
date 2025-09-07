import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { useEffect, useMemo, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type ServiceItem = {
  id: number;
  icon_name?: string; // e.g., Palette, BarChart3, Smartphone
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  order_index?: number;
};

const Services = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      const { data, error } = await (supabase as any)
        .from("services")
        .select("id,icon_name,title,subtitle,description,link,order_index")
        .order("order_index", { ascending: true });
      if (!isMounted) return;
      if (error) {
        setServices([]);
      } else {
        setServices((data as ServiceItem[]) || []);
      }
      setLoading(false);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loading && services.length > 0) {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Service cards animation with 3D effects
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
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Parallax effect
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
  }, [loading, services]);

  const renderIcon = useMemo(() => {
    return (iconName?: string) => {
      const IconComp = (iconName && (Icons as any)[iconName]) || Icons.Square;
      return <IconComp className="w-8 h-8" />;
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-background transform-gpu perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Service</p>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            WHAT I'M OFFERING
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {!loading && services.map((service) => (
            <div 
              key={service.id} 
              className="bg-card p-8 rounded-2xl border border-border interactive-card magnetic-hover"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                
                gsap.to(e.currentTarget, {
                  rotateY: x * 20,
                  rotateX: -y * 20,
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
              <div className="text-primary mb-6">
                {renderIcon(service.icon_name)}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                {service.link && (
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More →
                  </Button>
                )}
              </div>
            </div>
          ))}
          {loading && Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl border border-border animate-pulse h-48" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;