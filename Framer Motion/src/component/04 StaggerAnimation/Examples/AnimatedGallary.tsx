import { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const parentVariets = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const childVarients = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const AnimatedGallary = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="px-5">
      <motion.button
        className="py-1 px-5 bg-blue-600 text-lg rounded-lg text-white font-bold mb-5"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ scale: 0.8 }}
      >
        {isVisible ? "Hide Images" : "Show Image"}
      </motion.button>

      <motion.div
        className="flex"
        variants={parentVariets}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {galleryImages.map((image, index) => (
          <motion.img
            src={image}
            alt={`Image ${index + 1}`}
            key={index}
            variants={childVarients}
            className="ml-5 w-[200px] rounded-xl"
          />
        ))}
      </motion.div>
    </div>
  );
};
export default AnimatedGallary;
