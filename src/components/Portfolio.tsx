import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import searchEngineImg from "@/assets/project-search-engine.jpg";
import aiTutorImg from "@/assets/project-ai-tutor.jpg";
import geoOptimizationImg from "@/assets/project-geo-optimization.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Real Estate UI Design",
      category: "Web design",
      description: "Real Estate UI Design using modern web technologies and user-friendly interfaces for property management.",
      image: searchEngineImg,
      tags: ["UI/UX", "Web Design", "Real Estate"]
    },
    {
      id: 2,
      title: "Food delivery - Mobile app",
      category: "Mobile App",
      description: "Complete food delivery mobile application with real-time tracking, payment integration, and modern UI design.",
      image: aiTutorImg,
      tags: ["Mobile", "React Native", "Food Tech"]
    },
    {
      id: 3,
      title: "Beauty Product eCommerce App",
      category: "E-commerce",
      description: "Beautiful eCommerce application for beauty products with advanced filtering and seamless checkout experience.",
      image: geoOptimizationImg,
      tags: ["E-commerce", "Beauty", "Shopping"]
    },
    {
      id: 4,
      title: "Dashboard Sales Analytics",
      category: "Dashboard",
      description: "Sales analytics dashboard with real-time data visualization and comprehensive reporting features.",
      image: searchEngineImg,
      tags: ["Analytics", "Dashboard", "Sales"]
    },
    {
      id: 5,
      title: "Travel Mobile App",
      category: "Mobile App",
      description: "Travel mobile application with booking features, itinerary planning, and location-based recommendations.",
      image: aiTutorImg,
      tags: ["Travel", "Mobile", "Booking"]
    },
    {
      id: 6,
      title: "BookNoid - Receipt Generator",
      category: "Web App",
      description: "Automated receipt generation system with customizable templates and integration capabilities.",
      image: geoOptimizationImg,
      tags: ["Automation", "Receipt", "Business"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-primary">Let's have a look at my portfolio</h2>
            <p className="text-muted-foreground max-w-2xl">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
          </div>
          <Button className="btn-secondary">View More</Button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="btn-primary w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-card-foreground">{project.title}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary/30 text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;