import { motion } from "motion/react";

const ColorChange = () => {
  return (
    <motion.div
      className="box"
      animate={{
        backgroundColor: [
          "#FF5733",
          "#33FF57",
          "#3357FF",
          "#F3FF33",
          "#FF33A8",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
export default ColorChange;
