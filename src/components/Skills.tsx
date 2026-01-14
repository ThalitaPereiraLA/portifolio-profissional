import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "React", level: 30 },
      { name: "TypeScript", level: 40 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Back-end & Banco de Dados",
    skills: [
      { name: "Node.js", level: 40 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 100 },
      { name: "Fast API", level: 80 },
      { name: "SQLAlchemy", level: 30 },
    ],
  },
  {
    title: "Ferramentas & Outros",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 55 },
      { name: "Vercel", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Competências
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tecnologias e ferramentas que domino no dia a dia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card-elevated rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.5 }}
            >
              <h3 className="font-serif text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-rose-gold"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
