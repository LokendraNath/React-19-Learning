import { motion } from "motion/react";

const RotateOnDrag = () => {
  return (
    <motion.div
      className="box"
      drag="x"
      onDrag={(e, info) => {
        // console.log(info.point.x, info.point.y);
        console.log("offset:", info.offset);
        console.log("Velocity:", info.velocity);
      }}
    />
  );
};

export default RotateOnDrag;
