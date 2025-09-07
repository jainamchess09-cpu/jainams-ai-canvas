import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Users } from "lucide-react";

const Contact = () => {
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

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Form */}
          <div>
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
          <div className="space-y-8">
            
            {/* Lorem Section */}
            <div className="bg-background p-6 rounded-2xl border border-border">
              <p className="text-muted-foreground">
                Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
              </p>
            </div>
            
            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-background p-6 rounded-2xl border border-border">
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