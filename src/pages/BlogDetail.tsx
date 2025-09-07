import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type BlogDetail = {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  read_time: string;
  category: string;
  image?: string;
};

const BlogDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const [post, setPost] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id,title,excerpt,content,date,read_time,category,image")
        .eq("id", id)
        .single();
      if (!isMounted) return;
      if (error) {
        setPost(null);
      } else {
        setPost((data as unknown as BlogDetail) || null);
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-2xl border border-border bg-background p-10 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/">← Back</Link>
          </Button>
        </div>

        <div className="mb-3 text-xs bg-secondary/30 text-secondary-foreground px-2 py-1 rounded inline-block">
          {post.category}
        </div>

        <h1 className="text-3xl font-bold text-card-foreground mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.read_time}
          </div>
        </div>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl border border-border mb-6"
          />
        )}

        <p className="text-muted-foreground text-lg leading-relaxed mb-6">{post.excerpt}</p>

        {post.content && (
          <div className="prose prose-invert max-w-none">
            <p>{post.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;

