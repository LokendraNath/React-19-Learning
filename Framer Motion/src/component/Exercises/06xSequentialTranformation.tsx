import { motion } from "motion/react";

const SequentialTrans = () => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          className="box"
          animate={{ x: -100 }}
          transition={{ duration: 0.5, delay: i * 1 }}
        />
      ))}
    </div>
  );
};
export default SequentialTrans;
