import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation with parallax
    gsap.fromTo(titleRef.current, 
      { y: 100, opacity: 0, rotateX: 45 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Text animations with stagger
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Interactive hover effects for the entire section
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(sectionRef.current, {
        rotateY: x * 2,
        rotateX: -y * 2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(sectionRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      });
    };

    sectionRef.current?.addEventListener('mousemove', handleMouseMove);
    sectionRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
      sectionRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const techStack = [
    "Python", "PyTorch", "LangChain", "Next.js", "AWS", "Docker"
  ];
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 bg-background justify-center items-center perspective-1000 transform-gpu"
    >
      <div className="justify-center items-center">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-5xl lg:text-6xl font-black mb-12 text-center text-foreground text-glow"
          >
            Let's have a look at <br /> my portfolio
          </h2>
          
          <div className="space-y-12 text-center text-muted-foreground">
            <p 
              ref={(el) => textRefs.current[0] = el}
              className="text-2xl interactive-card p-8 rounded-3xl glass-gradient"
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            
            <p 
              ref={(el) => textRefs.current[1] = el}
              className="text-xl leading-loose interactive-card p-8 rounded-3xl glass-gradient"
            >
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