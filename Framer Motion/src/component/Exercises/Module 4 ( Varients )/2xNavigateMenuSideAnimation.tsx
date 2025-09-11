import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const sidebarVarient = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
  },
};

const NavigationMenu = () => {
  const [isSideBar, setIsSidebar] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-gray-500 flex items-center justify-center">
      <button className="btn" onClick={() => setIsSidebar(!isSideBar)}>
        Open
      </button>

      <AnimatePresence>
        {isSideBar && (
          <motion.div
            className="fixed top-0 left-0 bg-yellow-400 h-screen w-45"
            variants={sidebarVarient}
            initial="hidden"
            animate={isSideBar ? "visible" : "hidden"}
            exit="hidden"
            transition={{
              ease: "linear",
              duration: 0.2,
            }}
          >
            <button className="btn" onClick={() => setIsSidebar(false)}>
              Close
            </button>
            <ul>
              <li>Hello</li>
              <li>Hii</li>
              <li>By</li>
              <li>Why</li>
              <li>But</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default NavigationMenu;
