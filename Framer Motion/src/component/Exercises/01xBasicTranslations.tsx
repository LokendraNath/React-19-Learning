import { motion } from "motion/react";

const BasicTranslations = () => {
  return (
    <motion.div
      className="box"
      initial={{ x: -200 }}
      animate={{ x: 200 }}
      transition={{ duration: 3 }}
    />
  );
};
export default BasicTranslations;
