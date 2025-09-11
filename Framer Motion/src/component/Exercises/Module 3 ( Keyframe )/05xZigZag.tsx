import { motion } from "motion/react";

const ZigZag = () => {
  return (
    <motion.div
      className="box"
      animate={{ x: [0, 200, 0, -200, 0], y: [0, 200, 0, 200, 0] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        // type: "spring",
        // stiffness: 200,
      }}
    />
  );
};
export default ZigZag;
