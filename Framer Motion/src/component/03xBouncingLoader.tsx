import { easeInOut, motion } from "framer-motion";

const LoaderBounce = () => {
  return (
    <div className="flex items-center justify-center space-x-3">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="w-5 h-5 bg-blue-300 rounded-full"
          animate={{
            // y: ["0px", "-20px", "0px"],
            scaleY: [1, 3, 1],
          }}
          transition={{
            duration: 0.6,
            ease: easeInOut,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  );
};
export default LoaderBounce;
