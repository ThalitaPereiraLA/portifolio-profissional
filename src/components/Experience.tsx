import { motion } from "framer-motion";
import { Briefcase, BookOpen, Award, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

const experiences = [
 
  {
    type: "work",
    title: "Estagiária de Analista de dados e automatizações",
    company: "Sefaz/AL",
    period: "2025 - 2026",
    description: "Atuo no tratamento, organização e análise de dados, transformando informações brutas em relatórios claros e acionáveis. Desenvolvo dashboards e visualizações, automatizo processos repetitivos para aumentar a eficiência e apoio na tomada de decisões estratégicas com base em dados precisos.",
    technologies: ["PowerBi", "Python", "DAX"],
  },
];

const courses = [
  {
    title: "Bacharelado em Ciência da Computação",
    institution: "Afya Centro Universitário UNIMA - AL (2023 - 2027) (em andamento)",
    year: "2023",
    certificate: true,
  },

  {
    title: "Formação Node.js",
    institution: "Udemy",
    year: "2025",
    certificate: true,
  },


];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Carreira
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Experiência & Cursos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Minha jornada profissional e formação contínua
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience Column */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Experiência Profissional</h3>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative pl-8 pb-6 border-l-2 border-border last:border-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="card-elevated rounded-xl p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{exp.title}</h4>
                    <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses Column */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen size={20} className="text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Cursos & Certificações</h3>
            </motion.div>

            <div className="space-y-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  className="card-elevated rounded-xl p-5 hover:shadow-elevated transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{course.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {course.institution} • {course.year}
                      </p>
                    </div>
                    {course.certificate && (
                      <div className="flex-shrink-0">
                        <div className="p-2 rounded-lg bg-champagne/50">
                          <Award size={16} className="text-burgundy" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
