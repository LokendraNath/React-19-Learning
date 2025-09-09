import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-start mt-[30rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          className="bg-white rounded-lg p-5 shadow-lg text-center"
          initial={{ scale: 1, opacity: 1 }}
          whileInView={{
            scale: 1.3,
            opacity: 1,
            y: -200,
          }}
        >
          <h2 className="text-3xl font-bold mb-2 text-blue-500">
            Namaskar Dosto !!!
          </h2>
          <p className="text-gray-500">
            Modi ye , modi vo , modi kyo , Modi Ji
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default AnimatedCard;
