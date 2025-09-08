import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{
        top: -50,
        bottom: -50,
        right: 50,
        left: 50,
      }}
      dragElastic={0.2}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/7727/production/_103330503_musk3.jpg.webp"
        alt="Elone Bewda"
        className="w-full h-50 object-cover"
      />
      <div className="p-3">
        <h1 className="text-2xl font-semibold pb-3">
          Even now X is called Twitter
        </h1>
        <p className="text-gray-500 mb-3">
          ChatGPT said: Even though the platform is officially called X, people
          still call it Twitter because the old name is deeply rooted in
          culture, habit, and recognition.
        </p>
        <button className="py-2 px-4 bg-blue-600  font-semibold rounded-lg text-white hover:bg-blue-500 transition">
          Learn More {">"}
        </button>
      </div>
    </motion.div>
  );
};
export default AnimatedCard;
