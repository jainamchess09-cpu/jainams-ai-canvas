import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <h2 className="text-5xl lg:text-6xl font-black mb-12 text-foreground text-premium-glow">
            Let's have a look at my portfolio
          </h2>
          
          <div className="space-y-12 text-xl text-muted-foreground leading-relaxed">
            <p className="text-2xl">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            
            <p className="text-xl leading-loose">
              I design and implement <span className="text-primary font-bold text-glow">LLM-powered search, automation, and AI systems</span> for growth-stage startups, reducing manual work, accelerating insights, and transforming business operations. My mission is to bridge cutting-edge AI research with real-world impact.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
              <div className="premium-card text-center">
                <span className="text-lg font-bold text-primary">Web design</span>
              </div>
              <div className="premium-card text-center">
                <span className="text-lg font-bold text-primary">Mobile App</span>
              </div>
              <div className="premium-card text-center">
                <span className="text-lg font-bold text-primary">Dashboard</span>
              </div>
              <div className="premium-card text-center">
                <span className="text-lg font-bold text-primary">Branding</span>
              </div>
            </div>
            
            <div className="premium-card p-12">
              <h3 className="text-3xl font-bold mb-8 text-primary text-glow">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <p><span className="text-primary font-semibold">📧 Email:</span> jainams471@gmail.com</p>
                <p><span className="text-primary font-semibold">🔗 LinkedIn:</span> linkedin.com/jainam-shah-aiml-ahmedabad</p>
                <p><span className="text-primary font-semibold">📄 Resume:</span> <a href="#" className="text-primary hover:text-neon-glow hover:underline transition-all duration-300">View Resume</a></p>
                <p><span className="text-primary font-semibold">✅ Availability:</span> Freelance, open to conversations</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 pt-12">
              <Button className="btn-primary text-xl">All Services</Button>
              <Button variant="outline" className="btn-secondary text-xl">View Portfolio</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;