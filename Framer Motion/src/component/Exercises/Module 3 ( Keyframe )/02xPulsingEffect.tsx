import { motion } from "motion/react";

const PulsingEffect = () => {
  return (
    <motion.button
      className="btn"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      I am Pulsing Dadday 💦
    </motion.button>
  );
};
export default PulsingEffect;
