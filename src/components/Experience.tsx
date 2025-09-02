const Experience = () => {
  const experiences = [
    {
      title: "Founder / AI Architect",
      company: "AI Startup Projects",
      period: "2023 - Present",
      description: "Leading the development of production-grade generative AI solutions for SaaS, B2B, and B2C applications. Built multi-agent AI systems and LLMOps pipelines.",
      achievements: [
        "Reduced manual workflow time by 70% through AI automation",
        "Built 15+ LLM-powered applications",
        "Served clients across 7+ countries"
      ]
    },
    {
      title: "Freelance AI/ML Engineer",
      company: "Various Startups",
      period: "2021 - 2023",
      description: "Specialized in implementing AI-powered search, automation, and optimization systems for growth-stage startups.",
      achievements: [
        "Delivered 750+ projects successfully",
        "Improved business insights delivery by 60%",
        "Maintained 98% client satisfaction rate"
      ]
    },
    {
      title: "SaaS Contributor",
      company: "Multiple SaaS Companies",
      period: "2020 - 2021",
      description: "Contributed to various SaaS platforms, focusing on AI integration, automation features, and user experience improvements.",
      achievements: [
        "Integrated AI features in 20+ SaaS platforms",
        "Improved user engagement by 45%",
        "Reduced customer support queries by 35%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of building innovative AI solutions and transforming business operations through technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-card-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;