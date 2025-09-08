import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }} // ✅ CSS inline
      className="cursor-pointer flex items-center justify-center min-h-screen"
    >
      <motion.div
        variants={variants}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }} // ✅ CSS inline
        className="w-64 h-43 bg-yellow-400 rounded-lg shadow-xl relative"
      >
        {/* Front Side */}
        <div
          style={{
            backfaceVisibility: "hidden", // ✅ CSS inline
            transform: "rotateY(0deg)",
          }}
          className="absolute inset-0 bg-red-200 flex items-center justify-center text-xl font-bold"
        >
          Front Side
        </div>

        {/* Back Side */}
        <div
          style={{
            backfaceVisibility: "hidden", // ✅ CSS inline
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 bg-red-800 flex items-center justify-center text-xl font-bold"
        >
          Back Side
        </div>
      </motion.div>

      {/* Agar tum pure page mein CSS add karna chahte ho to ye style tag upar daaldo */}
      <style>
        {`
          .w-64 { width: 16rem; }
          .h-43 { height: 12rem; }
        `}
      </style>
    </div>
  );
};

export default FlipCard;
