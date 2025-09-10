import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useState } from "react";

const sidebarVarient = {
  hidden: { x: "-100%" },
  visible: {
    x: "0%",
  },
  exit: { x: "-100%" },
};

const SliderSideBar = () => {
  const [isSidebar, setIsSideBar] = useState(false);

  return (
    <div className="relative bg-green-500 min-h-screen w-full flex items-center justify-center">
      <AnimatePresence>
        {isSidebar && (
          <motion.aside
            key="sidebar"
            className={`fixed top-0 left-0 p-4 bg-red-500 h-full w-50 ${
              isSidebar ? "" : "-translate-x-full"
            }`}
            variants={sidebarVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </motion.aside>
        )}
      </AnimatePresence>

      <button
        className="bg-yellow-400 py-2 px-3"
        onClick={() => setIsSideBar(!isSidebar)}
      >
        Toggle Sidebar
      </button>
    </div>
  );
};
export default SliderSideBar;
