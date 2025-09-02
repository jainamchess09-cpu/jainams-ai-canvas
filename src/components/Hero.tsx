import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import jainamPortrait from "@/assets/jainam-portrait.jpg";

const Hero = () => {
  const techStack = [
    "Python", "PyTorch", "LangChain", "Next.js", "AWS", "Docker"
  ];

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-7xl lg:text-8xl font-black text-foreground animate-glow">
                Hi! Jainam
              </h1>
              <div className="w-32 h-2 bg-gradient-to-r from-primary to-neon-glow rounded-full premium-glow"></div>
              <div className="typewriter text-3xl lg:text-4xl font-bold text-primary">
                AI/ML Engineer & Entrepreneur
              </div>
              <p className="text-xl text-secondary-foreground max-w-2xl leading-relaxed">
                Building production-grade generative AI solutions for SaaS, B2B, and B2C.
                Designing user-friendly interfaces and seamless user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="btn-primary text-xl">
                Let's Talk <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" className="btn-secondary text-xl">
                Download CV <Download className="ml-3 h-6 w-6" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-neon-glow border-4 border-background premium-glow"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-glow to-primary border-4 border-background premium-glow"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-neon-glow border-4 border-background premium-glow"></div>
              </div>
              <span className="text-lg text-muted-foreground font-medium">Trusted by 50+ Clients</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="mailto:jainams471@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Mail className="h-7 w-7" />
              </a>
              <a href="https://linkedin.com/jainam-shah-aiml-ahmedabad" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="h-7 w-7" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <p className="text-lg font-semibold text-secondary-foreground">Core Tech Stack</p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-6 py-3 text-base font-medium glass-gradient rounded-2xl text-card-foreground hover:scale-105 transition-all duration-300 hover:border-primary/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative lg:justify-self-end">
            <div className="relative z-10">
              <div className="relative">
                <img 
                  src={jainamPortrait} 
                  alt="Jainam Shah - AI/ML Engineer" 
                  className="w-full max-w-lg mx-auto rounded-3xl premium-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl pointer-events-none"></div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute top-12 -right-8 lg:right-12">
              <div className="stat-card w-40">
                <div className="stat-number">07+</div>
                <div className="stat-label">Years experience</div>
              </div>
            </div>
            
            <div className="absolute bottom-12 -left-8 lg:left-12">
              <div className="stat-card w-40">
                <div className="stat-number">750+</div>
                <div className="stat-label">Projects delivered</div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-12">
              <div className="stat-card w-40">
                <div className="stat-number">07+</div>
                <div className="stat-label">Countries served</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse premium-glow"></div>
            <div className="absolute -bottom-8 right-1/4 w-6 h-6 bg-neon-glow rounded-full animate-pulse premium-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;