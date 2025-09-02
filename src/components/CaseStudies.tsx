const CaseStudies = () => {
  const caseStudies = [
    {
      title: "LLM-powered Workflow Automation",
      client: "SaaS Startup",
      problem: "Manual data processing was consuming 40+ hours weekly, creating bottlenecks in customer onboarding and reducing team productivity.",
      solution: "Implemented multi-agent AI system with LangChain and GPT-4 to automate document processing, data extraction, and workflow orchestration.",
      outcome: "Reduced manual work by 85%, improved onboarding time from 5 days to 4 hours, and increased team capacity by 300%.",
      technologies: ["Python", "LangChain", "GPT-4", "AWS Lambda", "PostgreSQL"],
      metrics: {
        timeReduction: "85%",
        costSavings: "$50K/year",
        efficiency: "300%"
      }
    },
    {
      title: "Generative Customer Support Bot",
      client: "E-commerce Platform", 
      problem: "High support ticket volume (500+ daily) with 60% being repetitive queries, causing customer wait times of 2+ hours.",
      solution: "Built conversational AI using RAG architecture with company knowledge base, integrated with existing support tools and escalation workflows.",
      outcome: "Resolved 80% of queries automatically, reduced average response time to 30 seconds, improved customer satisfaction by 45%.",
      technologies: ["OpenAI API", "Pinecone", "Next.js", "Supabase", "Webhooks"],
      metrics: {
        automation: "80%",
        responseTime: "30s",
        satisfaction: "45%"
      }
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world AI implementations that drove measurable business impact and transformed operations.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 md:p-12 border border-border">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                        Case Study {index + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{study.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">{study.title}</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Problem
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2 flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Outcome
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-sm bg-secondary/30 text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-semibold text-card-foreground">Key Metrics</h4>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="bg-background p-6 rounded-2xl border border-border text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                    <h5 className="font-medium text-card-foreground mb-2">Business Impact</h5>
                    <p className="text-sm text-muted-foreground">
                      This implementation transformed {study.client.toLowerCase()} operations, 
                      enabling scalable growth and improved customer experience through AI automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;