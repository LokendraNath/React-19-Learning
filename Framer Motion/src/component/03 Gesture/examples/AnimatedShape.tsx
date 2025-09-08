import { motion } from "framer-motion";

const AnimatedShape = () => {
  const boxVariants = {
    initial: {
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 1.3,
      rotate: 10,
      backgroundColor: "#fff",
      transition: { duration: 1, type: "spring", stiffness: 300 },
    },
    click: {
      scale: 0.8,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  };
  return (
    <div>
      <motion.div
        className="w-50 h-50 bg-green-600 rounded-lg"
        variants={boxVariants}
        initial="initial"
        whileHover="hover"
        whileTap="click"
      ></motion.div>
    </div>
  );
};
export default AnimatedShape;
