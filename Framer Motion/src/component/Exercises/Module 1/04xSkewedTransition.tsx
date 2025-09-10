import { motion } from "motion/react";
import { useState } from "react";

const SkewedTransition = () => {
  const [skew, setSkew] = useState(true);
  return (
    <motion.div
      className="w-50 h-50 bg-blue-600 rounded-lg"
      animate={{ skewX: skew ? 2 : 1 }}
      transition={{ duration: 0.2 }}
      onClick={() => setSkew(!skew)}
    />
  );
};
export default SkewedTransition;
