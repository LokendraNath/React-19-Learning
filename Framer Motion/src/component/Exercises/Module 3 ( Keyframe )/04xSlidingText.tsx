import { motion } from "motion/react";

const SlidingText = () => {
  return (
    <motion.h1
      initial={{ y: -100, opacity: 0, scale: 0.7 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      Hello Ji
    </motion.h1>
  );
};
export default SlidingText;
