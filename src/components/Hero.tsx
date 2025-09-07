import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import jainamPortrait from "@/assets/jainam-portrait.jpg";
import { useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls, MeshDistortMaterial, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// 3D Components
const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box args={[0.5, 0.5, 0.5]} position={position}>
        <MeshDistortMaterial
          color="hsl(156, 100%, 50%)"
          distort={0.2}
          speed={2}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
    </Float>
  );
};

const HeroSphere = () => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1.5, 64, 64]} position={[3, 0, -2]}>
        <MeshDistortMaterial
          color="hsl(156, 100%, 40%)"
          distort={0.4}
          speed={1.5}
          transparent
          opacity={0.3}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

const CodeRain = () => {
  const count = 50;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = Math.random() * 20 - 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="hsl(156, 100%, 60%)"
        size={0.05}
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);
  const secondaryButtonRef = useRef<HTMLButtonElement>(null);
  const backgroundBlobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax background animation
    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top", 
        scrub: true
      }
    });

    // Interactive magnetic effect for buttons
    const buttons = [primaryButtonRef.current, secondaryButtonRef.current].filter(Boolean);
    buttons.forEach((button) => {
      if (!button) return;
      
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });

    // Image animation
    if (imageRef.current) {
      // Set initial state
      gsap.set(imageRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        scale: 0.9,
        opacity: 0
      });

      // Animate to final state
      gsap.to(imageRef.current, {
        clipPath: "circle(100% at 50% 50%)",
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3 // Small delay for better visual impact
      });
    }

    // Text animations
    const textElements = [nameRef.current, titleRef.current, descriptionRef.current].filter(Boolean);
    
    if (textElements.length > 0) {
      // Set initial state for all text elements
      gsap.set(textElements, {
        opacity: 0,
        y: 40
      });

      // Animate text elements with stagger
      gsap.to(textElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.1 // Small delay to start after image begins
      });
    }

    // Button hover animations
    const setupButtonAnimations = (buttonRef: React.RefObject<HTMLButtonElement>) => {
      if (!buttonRef.current) return;

      const button = buttonRef.current;

      // Hover enter animation
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      };

      // Hover leave animation
      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      };

      // Click animation
      const handleClick = () => {
        gsap.to(button, {
          scale: 0.95,
          duration: 0.15,
          ease: "back.out(1.7)",
          onComplete: () => {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.15,
              ease: "back.out(1.7)"
            });
          }
        });
      };

      // Add event listeners
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
      button.addEventListener('click', handleClick);

      // Cleanup function
      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
        button.removeEventListener('click', handleClick);
      };
    };

    // Setup animations for both buttons
    const cleanupPrimary = setupButtonAnimations(primaryButtonRef);
    const cleanupSecondary = setupButtonAnimations(secondaryButtonRef);

    // Background blob animation
    if (backgroundBlobRef.current) {
      gsap.to(backgroundBlobRef.current, {
        background: "radial-gradient(circle at 30% 70%, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.1) 30%, transparent 70%)",
        duration: 6,
        ease: "none",
        repeat: -1,
        yoyo: true
      });

      // Also animate the position for more dynamic effect
      gsap.to(backgroundBlobRef.current, {
        x: "20px",
        y: "-10px",
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true
      });
    }

    // Cleanup on unmount
    return () => {
      cleanupPrimary?.();
      cleanupSecondary?.();
    };
  }, []);

  return (
    <section id="home" className="hero-section min-h-screen hero-gradient flex items-center pt-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg floating-element"></div>
      
      {/* 3D Background Scene */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="hsl(156, 100%, 50%)" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="hsl(280, 100%, 50%)" />
            <directionalLight position={[5, 5, 5]} intensity={0.5} color="hsl(156, 100%, 70%)" />
            
            <HeroSphere />
            <FloatingCube position={[-4, 2, -1]} />
            <FloatingCube position={[4, -2, -3]} />
            <FloatingCube position={[-2, -3, -2]} />
            <CodeRain />
            
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={0.3}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-20">
        <div className="grid-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 ref={nameRef} className="text-4xl lg:text-7xl font-black text-foreground">
                Jainam Shah
              </h1>
              <div className="w-32 h-2 bg-gradient-to-r from-primary  rounded-full"></div>
              <div ref={titleRef} className="typewriter text-3xl lg:text-4xl font-bold text-primary">
                AI/ML Engineer & Entrepreneur
              </div>
              <p ref={descriptionRef} className="text-xl text-secondary-foreground max-w-2xl leading-relaxed">
                Building production-grade generative AI solutions for SaaS, B2B, and B2C.
                Designing user-friendly interfaces and seamless user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button ref={primaryButtonRef} className="btn-primary text-xl">
                Let's Talk <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button ref={secondaryButtonRef} variant="outline" className="btn-secondary text-xl">
                Download CV <Download className="ml-3 h-6 w-6" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-neon-glow border-4 border-background "></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-glow to-primary border-4 border-background "></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-neon-glow border-4 border-background "></div>
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
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative lg:justify-self-end">
            {/* Animated Background Blob */}
            <div 
              ref={backgroundBlobRef}
              className="absolute inset-0 w-full h-full rounded-3xl opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.08) 30%, transparent 70%)",
                filter: "blur(40px)"
              }}
            />
            
            <div className="relative z-10">
              <div className="relative">
                <img 
                  ref={imageRef}
                  src={jainamPortrait} 
                  alt="Jainam Shah - AI/ML Engineer" 
                  className="w-full max-w-lg mx-auto rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl pointer-events-none"></div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            {/* <div className="absolute top-12 -right-8 lg:right-12">
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
            </div> */}

            {/* Floating Elements */}
            {/* <div className="absolute -top-8 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse "></div>
            <div className="absolute -bottom-8 right-1/4 w-6 h-6 bg-neon-glow rounded-full animate-pulse "></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;