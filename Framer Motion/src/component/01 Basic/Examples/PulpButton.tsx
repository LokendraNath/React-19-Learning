import { motion } from "framer-motion";

const PulpButton = () => {
  return (
    <motion.button
      className="py-1 px-3 text-white bg-blue-500 font-bold outline-none rounded-lg"
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#4464AD", "#A4B0F5", "#4464AD"],
      }}
      transition={{ duration: 1, ease: "easeInOut", repeat: 1 }}
    >
      Click Me
    </motion.button>
  );
};
export default PulpButton;
