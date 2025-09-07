import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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

  const renderIcon = useMemo(() => {
    return (iconName?: string) => {
      const IconComp = (iconName && (Icons as any)[iconName]) || Icons.Square;
      return <IconComp className="w-8 h-8" />;
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Service</p>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            WHAT I'M OFFERING
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {!loading && services.map((service) => (
            <div key={service.id} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group">
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