import { motion } from "framer-motion";

const parentVerients = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, //! Main (bachhe ke bich delay)
    },
  },
};

const childVerients = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 800,
    },
  },
};

const StaggerAnimation = () => {
  return (
    <motion.div variants={parentVerients} initial="hidden" animate="visible">
      {[...Array(5)].map((_, index) => (
        <motion.div className="box mb-3" key={index} variants={childVerients} />
      ))}
    </motion.div>
  );
};
export default StaggerAnimation;
