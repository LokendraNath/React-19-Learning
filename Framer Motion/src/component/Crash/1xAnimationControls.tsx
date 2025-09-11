import { motion, useAnimationControls } from "motion/react";

const AnimationControl = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("hover");
  };

  return (
    <div className="flexC flex-col space-y-5">
      <button className="btn" onClick={handleClick}>
        Click
      </button>
      <motion.div
        className="box"
        variants={{
          initial: {
            scale: 1,
          },
          hover: {
            scale: 1.4,
          },
        }}
        initial="initial"
        whileHover={controls}
      />
    </div>
  );
};
export default AnimationControl;
