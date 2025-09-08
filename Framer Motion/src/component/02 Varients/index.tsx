import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  //! Varients
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.2 },
};

const HideShowBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="py-2 px-4 bg-blue-400"
      >
        Show Btn
      </button>
      <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 1 }}
      ></motion.div>
    </>
  );
};
export default HideShowBox;
