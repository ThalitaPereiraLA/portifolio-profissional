import { motion } from "framer-motion";
import { GraduationCap, Heart, Rocket, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="/FotoProfissa.jpg"
                alt="Thalita Pereira - Desenvolvedora Web"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-champagne/60 blur-2xl -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blush/50 blur-2xl -z-10"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Minha Trajetória
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou <span className="text-foreground font-semibold">Thalita Pereira</span>, 
                uma desenvolvedora web apaixonada por criar experiências digitais que fazem a 
                diferença. Atualmente curso <span className="text-foreground font-medium">Ciência 
                da Computação</span>, onde aprofundo meus conhecimentos em algoritmos, estruturas 
                de dados e engenharia de software.
              </p>

              <p>
                Minha jornada na programação começou com curiosidade — queria entender como funcionavam o HTML e CSS das páginas de dramas asiáticos que eu assistia. Aos 13 anos, comecei a criar capas e personalizações para equipes de legendagem, e foi meu primeiro contato com design e código. O que começou como diversão se transformou em paixão, e hoje dedico meus dias a transformar ideias em soluções completas, tanto no frontend, criando interfaces bonitas e funcionais, quanto no backend, estruturando sistemas e bancos de dados que fazem tudo funcionar.
              </p>

              <p>
                Acredito que o desenvolvimento web é uma forma de arte. Cada projeto é uma oportunidade de resolver problemas reais e entregar soluções que sejam bonitas, funcionais e tecnicamente robustas. Hoje me considero uma desenvolvedora full-stack, motivada a aprender e criar cada vez mais, transformando ideias em projetos concretos que unem criatividade, lógica e tecnologia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: GraduationCap, text: "Ciência da Computação" },
                { icon: MapPin, text: "Brasil" },
                { icon: Rocket, text: "Sempre Evoluindo" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
