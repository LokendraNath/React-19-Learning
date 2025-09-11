import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const toolTipVarients = {
  hidden: { y: 0, opacity: 0, scale: 0 },
  visible: { y: 50, opacity: 1, scale: 1 },
};

const Tooltip = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative h-screen w-screen flexC flex-col space-y-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute bg-white text-black py-1 px-3 rounded-lg"
            variants={toolTipVarients}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="hidden"
          >
            <h1>This is Tooltip</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="btn z-10"
        onMouseEnter={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        Click Me
      </button>
    </div>
  );
};
export default Tooltip;
