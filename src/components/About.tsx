import { Button } from "@/components/ui/button";

const About = () => {
  const techStack = [
    "Python", "PyTorch", "LangChain", "Next.js", "AWS", "Docker"
  ];
  return (
    <section id="about" className="py-32 bg-background justify-center items-center">
      <div className="justify-center items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black mb-12 text-center text-foreground text-glow">
            Let's have a look at <br /> my portfolio
          </h2>
          
          <div className="space-y-12 text-center text-muted-foreground">
            <p className="text-2xl">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            
            <p className="text-xl leading-loose">
              I design and implement <span className="text-primary font-bold text-glow">LLM-powered search, automation, and AI systems</span> for growth-stage startups, reducing manual work, accelerating insights, and transforming business operations. My mission is to bridge cutting-edge AI research with real-world impact.
            </p>
            
            {/* <div className="space-y-6 py-25 text-center">
              <p className="text-lg font-semibold text-secondary-foreground">Core Tech Stack</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-6 py-3 text-base font-medium glass-gradient rounded-2xl text-card-foreground hover:scale-105 transition-all duration-300 hover:border-primary/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;