import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.img
      src= "/Logo.png"
      alt="Logo Thalita"
      className={`h-8 md:h-10 object-contain ${className}`}
      initial = {{opacity: 0, y: -10}}
      animate = {{opacity: 1, y: 0 }}
      transition={{duration: 0.5}}
      />
  );
};

export default Logo;
