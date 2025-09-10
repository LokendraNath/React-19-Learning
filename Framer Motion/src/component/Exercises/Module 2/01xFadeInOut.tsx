import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FadeInOut = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex items-center justify-center flex-col space-y-5">
      <button
        className="py-2 px-4 bg-green-500 rounded-lg text-white font-bold z-10"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -50, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello Ji
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default FadeInOut;
