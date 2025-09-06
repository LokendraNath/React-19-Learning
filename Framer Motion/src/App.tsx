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
        initial={{ y: 0 }}
        animate={{ y: 215 }}
        // transition={{ delay: 3 }}
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        className="h-30 w-30 bg-white rounded-full"
      />
    </div>
  );
};
export default App;
