import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/ThalitaPereiraLA", 
    label: "GitHub",
    hoverColor: "hover:bg-foreground hover:text-background"
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com/thalidoobee", 
    label: "Instagram",
    hoverColor: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white"
  },
  { 
    icon: Mail, 
    href: "mailto:contatothalitaa@gmail.com", 
    label: "Email",
    hoverColor: "hover:bg-primary hover:text-primary-foreground"
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Top Section */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Logo className="mx-auto mb-4" />
            <p className="text-muted-foreground max-w-md mx-auto">
              Desenvolvedora Web apaixonada por criar experiências digitais memoráveis. 
              Vamos construir algo incrível juntos?
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl bg-card border border-border transition-all duration-300 shadow-soft ${social.hoverColor}`}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="flex items-center gap-1">
                Feito por Thalita Pereira
              </p>
              <p className="font-medium">
                © 2026 • Thalita Pereira
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
