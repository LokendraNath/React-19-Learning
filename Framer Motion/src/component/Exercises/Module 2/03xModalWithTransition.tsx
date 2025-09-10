import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ModalWithTrans = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button className="btn" onClick={() => setIsOpen(!isOpen)}>
        Open Modle
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center flex-col px-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="bg-white text-black p-10 rounded-lg flex flex-col items-center justify-between h-40"
              initial={{ y: "-100vh" }}
              onClick={(e) => e.stopPropagation()}
              animate={{ y: "0vh" }}
              exit={{ y: "100vh" }}
            >
              <p>Lorem ipsum dolor sit amet Lorem</p>
              <button
                className="py-2 px-4 bg-red-600 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                Close Modle
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ModalWithTrans;
