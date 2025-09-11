import { motion } from "motion/react";

const BgChange = () => {
  return (
    <motion.div
      className="h-screen w-screen bg-white flex items-center justify-center"
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
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <h1>Hello</h1>
    </motion.div>
  );
};
export default BgChange;
