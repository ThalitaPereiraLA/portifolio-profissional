import { motion } from "framer-motion";
import { 
  BookOpen, 
  Music, 
  Camera, 
  Coffee, 
  Plane, 
  Palette,
  Gamepad2,
  Heart
} from "lucide-react";

const interests = [
  {
    icon: BookOpen,
    title: "Leitura",
    description: "Adoro ler romance e fantasia, mas também adoro um Junji Ito.",
  },
  {
    icon: Music,
    title: "Música",
    description: "Playlist de K-pop e Indie sempre tocando.",
  },
  {
    icon: Camera,
    title: "Fotografia",
    description: "Adoro tirar fotos de paisagens e de pessoas que eu amo!",
  },
  {
    icon: Plane,
    title: "Viagens",
    description: "Conhecer novos lugares e culturas é o meu sonho!",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Explorar tendências de UI/UX e criar interfaces bonitas me fascina",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Adoro jogar um Valorant, TFT e Lol, mas ás vezes gosto de algo menos estressante",
  },
];

const Interests = () => {
  return (
    <section id="interesses" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Além do Código
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Interesses & Hobbies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            O que me inspira e mantém equilibrada fora do trabalho
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="group card-elevated rounded-2xl p-6 text-center hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <interest.icon size={26} />
              </motion.div>
              <h3 className="font-serif text-lg font-semibold mb-2">
                {interest.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
