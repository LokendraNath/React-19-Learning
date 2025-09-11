import { motion } from "motion/react";

const fadeInVarient = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};

const FadeInCompo = () => {
  return (
    <motion.div
      className="box"
      variants={fadeInVarient}
      initial="hidden"
      animate="visible"
    />
  );
};
export default FadeInCompo;
