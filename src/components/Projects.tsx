import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Dashboard de Gestão/Executivo",
    description:
      "Dashboard moderno para gestão de convênios e contratos da SEFAZ/AL com análises em tempo real e interface intuitiva.",
    image: "/sefaz.jpg",
    technologies: ["Python", "PowerBi", "DAX", "M", "Python / R"],
    stars: null,
    forks: null,
    featured: true,
    githubUrl: null, // ← privado, sem link
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Aplicação web feita para apoiar jovens no cuidado da saúde mental. Reúne exercícios interativos, check-in emocional, frases SOS, vídeos do YouTube e locais de apoio, em uma interface simples e acolhedora.",
    image: "/Mente em equilíbrio.png",
    technologies: ["Typescript", "Tailwind CSS", "Framer Motion", "React 19", "React Router DOM", "Vite"],
    stars: null,
    forks: null,
    githubUrl: "https://github.com/ThalitaPereiraLA/projeto-bem-estar-jovem",
    featured: true,
  },
  {
    title: "Aplicativo Web Composerly",
    description:
      "Aplicativo web de testes voltado para aprendizado de partituras musicais, fiz contribuições nos testes, no front e no back-end.",
    image: "/musical.jpeg",
    technologies: ["PHP", "JavaScript", "SQL", "Blade / InertiaJS", "React", "Vite"],
    stars: null,
    forks: null,
    githubUrl: "https://github.com/Rafhaeliggor/composerly",
    featured: false,
  },
  {
    title: "Sistema de Otimização de Rede de Entregas",
    description:
      "Contribuição na implementação de um sistema de otimização para redes de entrega urbanas, modelando a infraestrutura logística como um grafo direcionado.",
    image: "/rota.jpg",
    technologies: ["FastAPI", "JavaScript", "pytest", "JWT", "OpenStreetMap"],
    stars: null,
    forks: null,
    githubUrl: "https://github.com/slocksert/delivery_system",
    featured: true,
  },
  {
    title: "Make4U - Plataforma de Reviews de Maquiagem",
    description: "Aplicativo web completo para reviews de produtos de maquiagem, com login, sistema de likes, categorias detalhadas e interface moderna.",
    image: "/make.webp",
    technologies: ["Uvicorn", "FastAPI", "Jinja2", "pydantic", "Tailwind", "SQLAlchemy"],
    stars: null,
    forks: null,
    githubUrl: "https://github.com/ThalitaPereiraLA/make4U",
    featured: false,
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Ferramenta frontend moderna desenvolvida em React + TypeScript, utilizando TailwindCSS para estilização responsiva e Framer Motion para animações suaves.",
    image: "/thalitaimg.png",
    technologies: ["JavaScript (ES6+)", "TypeScript", "HTML / JSX", "CSS / TailwindCSS"],
    stars: null,
    forks: null,
    githubUrl: "https://github.com/ThalitaPereiraLA/portifolio-profissional",
    featured: false,
  },
];

// Componente auxiliar para o conteúdo do card
const ProjectCardContent = ({ project }) => (
  <>
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {project.featured && (
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-primary-foreground">Destaque</Badge>
        </div>
      )}
      {project.githubUrl && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-primary-foreground font-medium flex items-center gap-2">
            Ver no GitHub <ExternalLink size={16} />
          </span>
        </div>
      )}
    </div>

    <div className="p-6">
      <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs font-medium">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Star size={14} />
          {project.stars}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={14} />
          {project.forks}
        </span>
      </div>
    </div>
  </>
);

const Projects = () => {
  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Meus Projetos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e relevantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group card-elevated rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: project.githubUrl ? -5 : 0 }} // só anima se tiver github
            >
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ProjectCardContent project={project} />
                </a>
              ) : (
                <div className="block cursor-default">
                  <ProjectCardContent project={project} />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-burgundy text-primary-foreground rounded-full"
            asChild
          >
            <a
              href="https://github.com/?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              Ver Todos os Projetos
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
