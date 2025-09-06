import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <motion.div
        // animate={{ x: -100, y: "50px" }}
        // animate={{ rotateY: 50 }}
        // animate={{ scaleY: 1.5 }}
        // animate={{ skewY: 23 }}
        className="h-50 w-50 bg-white rounded-lg"
      />
    </div>
  );
};
export default App;
