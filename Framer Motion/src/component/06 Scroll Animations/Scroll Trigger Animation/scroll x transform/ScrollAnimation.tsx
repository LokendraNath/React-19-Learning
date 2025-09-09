import { motion, useScroll, useTransform } from "motion/react";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();

  //Jab scroll 0px hai → scale = 1 (normal size).
  // Jab scroll 400px hai → scale = 1.5 (50% bada).
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);

  // Jab scroll 0px hai → opacity = 1 (fully visible).
  // Jab scroll 300px hai → opacity = 0 (invisible).
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        className="bg-green-400 h-20 w-20 rounded-xl"
        style={{ scale, opacity }}
      />
      <div
        className="h-[500vh] w-full
      "
      ></div>
    </div>
  );
};
export default ScrollAnimation;
