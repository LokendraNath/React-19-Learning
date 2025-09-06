import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <motion.div
        //! Transformation
        // animate={{ x: -100, y: "50px" }}
        // animate={{ rotateY: 50 }}
        // animate={{ scaleY: 1.5 }}
        // animate={{ skewY: 23 }}

        //! Transitions
        /*
        initial={{ y: 0 }}
        animate={{ y: 215 }}
        // transition={{ delay: 3 }}
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        */

        //! Keyframes
        animate={{
          // scale: [1, 2, 1, 3, 1, 4, 1, 5],
          rotate: [0, 300, 0],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{ duration: 4, delay: 1 }}
        className="h-20 w-20 bg-white rounded-lg"
      />
    </div>
  );
};
export default App;
