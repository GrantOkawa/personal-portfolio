import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    //Languages & Frameworks
    {name: "HTML/CSS", level: 95, category: "languages Framworks"},
    {name: "Python", level: 90, category: "languages Framworks"},
    {name: "Java", level: 90, category: "languages Framworks"},
    {name: "Javascript", level: 90, category: "languages Framworks"},
    {name: "SQL", level: 90, category: "languages Framworks"},
    {name: "Node.js", level: 90, category: "languages Framworks"},
    {name: "Express.js", level: 90, category: "languages Framworks"},
    {name: "React", level: 90, category: "languages Framworks"},
    {name: "Angular", level: 90, category: "languages Framworks"},
    {name: "Spring Boot", level: 90, category: "languages Framworks"},
    {name: "Flask", level: 90, category: "languages Framworks"},

    //Databases
    {name: "MySQL", level: 90, category: "databases"},
    {name: "H2", level: 90, category: "databases"},
    {name: "SQLite", level: 90, category: "databases"},
    {name: "MongoDB", level: 90, category: "databases"},

    //Tools & Platforms
    {name: "Git/Github", level: 90, category: "tools Platforms"},
    {name: "Postman", level: 90, category: "tools Platforms"},
    {name: "Figma", level: 90, category: "tools Platforms"},
    {name: "Azure", level: 90, category: "tools Platforms"},
    {name: "Open AI GPT", level: 90, category: "tools Platforms"},

    //Currently Learning
    {name: "docker", level: 90, category: "currently Learning"},
    {name: "Tailwind CSS", level: 90, category: "currently Learning"},
    {name: "AI and Machine Learning", level: 90, category: "currently Learning"},
    {name: ".NET Development in C", level: 90, category: "currently Learning"},
    {name: "Software Design & Implementation ", level: 90, category: "currently Learning"},
    {name: "Data Stuctures & Algorithms in C", level: 90, category: "currently Learning"},
]

const categories = ["all", "languages Framworks", "databases", "tools Platforms", "currently Learning"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};