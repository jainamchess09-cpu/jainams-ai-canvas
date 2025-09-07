import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type ProjectDetailRecord = {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  tags?: string[];
  content?: string;
};

const ProjectDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const [project, setProject] = useState<ProjectDetailRecord | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      const { data, error } = await (supabase as any)
        .from("projects")
        .select("id,title,category,description,image,tags,content")
        .eq("id", id)
        .single();
      if (!isMounted) return;
      if (error) {
        setProject(null);
      } else {
        const record = data as unknown as ProjectDetailRecord;
        record.tags = (record.tags ?? []) as string[];
        setProject(record);
      }
      setLoading(false);
    })();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-2xl border border-border bg-background p-10 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/">← Back</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl border border-border"
              />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-card-foreground mb-2">{project.title}</h1>
            <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full inline-block mb-4">
              {project.category}
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            {project.content && (
              <p className="text-sm leading-relaxed text-card-foreground/90 whitespace-pre-line">
                {project.content}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-6">
              {(project.tags || []).map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-secondary/30 text-secondary-foreground rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

