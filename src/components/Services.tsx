import { Button } from "@/components/ui/button";
import { Palette, BarChart3, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      subtitle: "User Interface & User Experience Design",
      description: "Creating intuitive and beautiful interfaces that enhance user engagement and satisfaction.",
      link: "#"
    },
    {
      id: 2,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Graphic Design",
      subtitle: "Creative & Visual Design",
      description: "Developing compelling visual content and branding materials for digital and print media.",
      link: "#"
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Marketing",
      subtitle: "Online Marketing & Brand Promotion",
      description: "Strategic digital marketing campaigns to boost your online presence and drive growth.",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Service</p>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            WHAT I'M<br />OFFERING
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
          <Button className="btn-secondary">All Services</Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;