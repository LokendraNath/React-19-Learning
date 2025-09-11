import { motion } from "motion/react";

const BouncingBall = () => {
  return (
    <motion.div
      className="box"
      animate={{ y: [0, -100, 0] }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 1,
        repeat: Infinity,
        repeatType: "loop",
        // type: "spring",
        // stiffness: 100,
      }}
    />
  );
};
export default BouncingBall;
