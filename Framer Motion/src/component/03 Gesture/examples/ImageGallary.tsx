import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1756992293716-b843700b5ab0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Random Shit 1",
  },
  {
    src: "https://images.unsplash.com/photo-1727773377765-04d5bd488f44?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Random Shit 2",
  },
  {
    src: "https://images.unsplash.com/photo-1675627452900-9d2430c69959?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Random Shit 3",
  },
];

const ImageGallary = () => {
  return (
    <div className="w-full flex px-3">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative m-2 overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <img src={image.src} alt={image.caption} className="w-full h-auto" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-white cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-200"
            whileHover={{ opacity: 1 }}
          >
            <p>{image.caption}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
export default ImageGallary;
