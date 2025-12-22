import { motion } from 'framer-motion';
import coupleImg from "../assets/images/couple.jfif";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4 text-white relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${coupleImg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      />
      
      {/* Animated Overlay Shimmer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          repeatDelay: 2
        }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight"
          style={{ fontFamily: "'Bid', serif" }}  // ✅ DIRECT CSS
          variants={floatVariants}
          whileHover={{ scale: 1.05 }}
        >
          Nayana & Mohan
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl lg:text-4xl font-light italic drop-shadow-xl"
          style={{ fontFamily: "'Kug', serif" }}  // ✅ DIRECT CSS
          variants={itemVariants}
          whileHover={{ scale: 1.02, color: "#f0f0f0" }}
        >
          26 January 2025
        </motion.p>
      </motion.div>
    </section>
  );
}


