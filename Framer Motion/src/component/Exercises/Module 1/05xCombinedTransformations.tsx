import { motion } from "motion/react";

const CombinedTransformations = () => {
  return (
    <motion.div
      className="box"
      animate={{ x: 200, scale: 1.5, rotate: 365 }}
      transition={{ duration: 1 }}
    />
  );
};
export default CombinedTransformations;
