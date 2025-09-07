import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const testimonials = [
    {
      name: "Stephanie",
      rating: 5,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
      name: "Jainam",
      rating: 5,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Form animation
    gsap.fromTo(formRef.current,
      { x: -80, opacity: 0, rotateY: -15 },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Testimonials animation
    gsap.fromTo(testimonialsRef.current,
      { x: 80, opacity: 0, rotateY: 15 },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effect
    gsap.to(sectionRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-card transform-gpu perspective-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Form */}
          <div 
            ref={formRef}
            className="interactive-card p-8 rounded-3xl glass-gradient"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Let's talk</h2>
            <p className="text-muted-foreground mb-8">
              Are you interested in working together?
            </p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Message</label>
                <Textarea 
                  placeholder="Type your message"
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Right Side - Testimonials & Info */}
          <div ref={testimonialsRef} className="space-y-8">
            
            {/* Lorem Section */}
            <div className="bg-background p-6 rounded-2xl border border-border">
              <p className="text-muted-foreground">
                Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
              </p>
            </div>
            
            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-background p-6 rounded-2xl border border-border interactive-card magnetic-hover"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.02,
                      rotateY: 5,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      rotateY: 0,
                      duration: 0.5,
                      ease: "elastic.out(1, 0.3)"
                    });
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">G</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;