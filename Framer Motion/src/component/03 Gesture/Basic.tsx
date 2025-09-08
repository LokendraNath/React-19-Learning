import { motion } from "framer-motion";

const GestureBasic = () => {
  return (
    <div className="flex items-center flex-col space-y-5">
      {/* While Hover */}
      <motion.div
        className="box"
        whileHover={{ scale: 1.5, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      />

      {/* Tap Effect */}
      <motion.div
        className="box"
        whileTap={{ scale: 0.7, backgroundColor: "darkred" }}
        transition={{ type: "spring", stiffness: 400 }}
      />

      {/* On Drag */}

      <motion.div
        className="box mt-7 mr-15"
        drag
        dragConstraints={{
          top: -30,
          right: 30,
          bottom: -30,
          left: 30,
        }}
        dragTransition={{
          bounceStiffness: 600,
          bounceDamping: 10,
        }}
        whileTap={{ scale: 0.5 }}
      />
    </div>
  );
};
export default GestureBasic;
