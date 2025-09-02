import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-primary">Let's have a look at my portfolio</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            
            <p>
              I design and implement <span className="text-primary font-semibold">LLM-powered search, automation, and AI systems</span> for growth-stage startups, reducing manual work, accelerating insights, and transforming business operations. My mission is to bridge cutting-edge AI research with real-world impact.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="bg-secondary/30 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-secondary-foreground">Web design</span>
              </div>
              <div className="bg-secondary/30 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-secondary-foreground">Mobile App</span>
              </div>
              <div className="bg-secondary/30 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-secondary-foreground">Dashboard</span>
              </div>
              <div className="bg-secondary/30 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-secondary-foreground">Branding</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Contact Information</h3>
              <div className="space-y-2">
                <p><span className="text-primary">📧 Email:</span> jainams471@gmail.com</p>
                <p><span className="text-primary">🔗 LinkedIn:</span> linkedin.com/jainam-shah-aiml-ahmedabad</p>
                <p><span className="text-primary">📄 Resume:</span> <a href="#" className="text-primary hover:underline">View Resume</a></p>
                <p><span className="text-primary">✅ Availability:</span> Freelance, open to conversations</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="btn-primary">All Services</Button>
              <Button variant="outline" className="btn-secondary">View Portfolio</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;