//? useTransform Framer Motion का एक powerful hook है जो एक motion value को दूसरे value में transform करने के काम आता है।

import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "motion/react";

const DraggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useTransform(x,[inputRangeStart,InputRangeEnd],[OutputRangeStart,OutputRangeEnd])

  const backgroundColor = useTransform(x, [-100, 100], ["#ff0000", "#00f00"]);

  return (
    <motion.div
      className="w-40 h-40 flex items-center justify-center cursor-pointer bg-blue-500 rounded-2xl shadow-2xl"
      drag
      dragConstraints={{
        top: -200,
        bottom: 200,
        left: -200,
        right: 200,
      }}
      style={{ x, y, backgroundColor }}
    >
      <span>Drag Me Baby</span>
    </motion.div>
  );
};
export default DraggableBox;
