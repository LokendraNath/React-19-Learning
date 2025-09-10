import { motion } from "motion/react";

const ResponsiveAni = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.button
        className="py-2 px-4 rounded-lg bg-green-500 sm:bg-yellow-500 md:bg-purple-600 lg:bg-red-600"
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 400 }}
      >
        Hello
      </motion.button>
    </div>
  );
};
export default ResponsiveAni;
