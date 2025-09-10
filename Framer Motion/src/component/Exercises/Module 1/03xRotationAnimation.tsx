import { motion } from "motion/react";

const RotationAnimation = () => {
  return (
    <motion.img
      src="https://images.unsplash.com/photo-1756992293716-b843700b5ab0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      className=" w-100 h-100"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    />
  );
};
export default RotationAnimation;
