import { useEffect, useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export type SkillCategory = {
  id: number;
  title: string;
  order_index?: number;
};

export type Skill = {
  id: number;
  category_id: number;
  name: string;
  icon_name?: string;
  order_index?: number;
};

const Skills = () => {
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      const [{ data: cats }, { data: sks }] = await Promise.all([
        (supabase as any)
          .from("skill_categories")
          .select("id,title,order_index")
          .order("order_index", { ascending: true }),
        (supabase as any)
          .from("skills")
          .select("id,category_id,name,icon_name,order_index")
          .order("order_index", { ascending: true }),
      ]);
      if (!isMounted) return;
      setCategories((cats as SkillCategory[]) || []);
      setSkills((sks as Skill[]) || []);
      setLoading(false);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const grouped = useMemo(() => {
    const map: Record<number, { title: string; skills: Skill[] }> = {};
    for (const cat of categories) {
      map[cat.id] = { title: cat.title, skills: [] };
    }
    for (const s of skills) {
      if (!map[s.category_id]) continue;
      map[s.category_id].skills.push(s);
    }
    return Object.entries(map).map(([id, v]) => ({ id: Number(id), title: v.title, skills: v.skills }));
  }, [categories, skills]);

  const renderIcon = useMemo(() => {
    return (iconName?: string) => {
      const IconComp = (iconName && (Icons as any)[iconName]) || null;
      return IconComp ? <IconComp className="w-5 h-5" /> : null;
    };
  }, []);

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Skills & Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across AI/ML engineering, full-stack development, and cloud infrastructure, enabling me to build end-to-end AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && grouped.map((category) => (
            <div key={category.id} className="bg-background p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill.id} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full">
                    {renderIcon(skill.icon_name)}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
          {loading && Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-background p-6 rounded-2xl border border-border animate-pulse h-40" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;