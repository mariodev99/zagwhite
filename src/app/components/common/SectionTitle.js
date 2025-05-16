import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-10 lg:mb-16"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.h2>
  );
}
