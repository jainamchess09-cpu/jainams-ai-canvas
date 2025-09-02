const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & AI",
      skills: ["Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain", "Scikit-learn"]
    },
    {
      title: "AI Systems",
      skills: ["Multi-agent AI", "LLMOps", "MLOps", "RAG pipelines", "Vector Databases", "Prompt Engineering"]
    },
    {
      title: "Frontend Development",
      skills: ["Next.js", "React", "TailwindCSS", "TypeScript", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Serverless"]
    },
    {
      title: "Databases",
      skills: ["Pinecone", "Weaviate", "Milvus", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Specialties",
      skills: ["Automation", "Semantic Search", "Generative Content", "API Development", "System Architecture", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Skills & Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across AI/ML engineering, full-stack development, and cloud infrastructure, enabling me to build end-to-end AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-background p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;