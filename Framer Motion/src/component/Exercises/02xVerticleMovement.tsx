import { motion } from "motion/react";

const VerticalMovement = () => {
  return (
    <motion.div
      className="box"
      animate={{ y: [200, -200, 200] }}
      transition={{
        repeat: Infinity,
        ease: "easeOut",
        type: "spring",
        duration: 1,
      }}
    />
  );
};
export default VerticalMovement;
