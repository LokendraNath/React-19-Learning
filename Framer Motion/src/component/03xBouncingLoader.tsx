import { easeInOut, motion } from "framer-motion";

const LoaderBounce = () => {
  return (
    <div className="flex items-center justify-center space-x-3">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="w-5 h-5 bg-blue-300 rounded-full"
          animate={{
            y: ["0px", "-20px", "0px"],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};
export default LoaderBounce;
