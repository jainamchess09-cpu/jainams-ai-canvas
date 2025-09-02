import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import jainamPortrait from "@/assets/jainam-portrait.jpg";

const Hero = () => {
  const techStack = [
    "Python", "PyTorch", "LangChain", "Next.js", "AWS", "Docker"
  ];

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary text-glow">
                Hi! Jainam
              </h1>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-xl text-secondary-foreground">
                AI/ML Engineer & Entrepreneur
              </p>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Building production-grade generative AI solutions for SaaS, B2B, and B2C.
                Designing user-friendly interfaces and seamless user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary"></div>
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary"></div>
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary"></div>
              </div>
              <span className="text-sm text-muted-foreground">Trusted by 50+ Clients</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="mailto:jainams471@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/jainam-shah-aiml-ahmedabad" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-secondary-foreground">Core Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm bg-card border border-border rounded-full text-card-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={jainamPortrait} 
                alt="Jainam Shah - AI/ML Engineer" 
                className="w-full max-w-md mx-auto lg:max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute top-8 -right-4 lg:right-8 bg-card/90 backdrop-blur-sm p-4 rounded-2xl border border-border">
              <div className="stat-card">
                <div className="stat-number">07+</div>
                <div className="stat-label">Years of experience</div>
              </div>
            </div>
            
            <div className="absolute bottom-8 -left-4 lg:left-8 bg-card/90 backdrop-blur-sm p-4 rounded-2xl border border-border">
              <div className="stat-card">
                <div className="stat-number">750+</div>
                <div className="stat-label">Projects delivered</div>
              </div>
            </div>

            <div className="absolute top-1/2 right-0 lg:-right-8 bg-card/90 backdrop-blur-sm p-4 rounded-2xl border border-border">
              <div className="stat-card">
                <div className="stat-number">07+</div>
                <div className="stat-label">Countries served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;