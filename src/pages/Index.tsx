import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <CaseStudies />
      <Blog />
      <Skills />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-background py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-primary mb-4 md:mb-0">jainam</div>
            <div className="text-muted-foreground text-center md:text-right">
              <p>© 2024 Jainam Shah. All rights reserved.</p>
              <p className="text-sm">AI/ML Engineer & Entrepreneur</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
