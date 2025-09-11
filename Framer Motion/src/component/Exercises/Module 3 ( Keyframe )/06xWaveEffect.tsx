import { motion } from "motion/react";

const WaveEffect = () => {
  const boxes = Array.from({ length: 6 });

  return (
    <div className="flex space-x-3">
      {boxes.map((_, i) => (
        <motion.div
          key={i}
          className="box"
          animate={{ y: [0, -50, 0, 50, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};
export default WaveEffect;
