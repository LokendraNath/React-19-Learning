import { motion } from "motion/react";
import { useRef } from "react";

const DraggableBox = () => {
  const containerConstrain = useRef(null);

  return (
    <div className="bg-white h-screen w-screen flexC" ref={containerConstrain}>
      <motion.div
        className="box"
        drag
        dragConstraints={containerConstrain}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </div>
  );
};
export default DraggableBox;
