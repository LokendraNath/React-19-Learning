import { motion } from "motion/react";
import { useState } from "react";

const toggleSwitchVarient = {
  off: { x: 0 },
  on: {
    x: 110,
  },
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`relative h-30 w-60 p2 rounded-full border-8 border-gray-500  ${
        isOn ? "bg-green-500" : "bg-gray-500"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        className={`absolute left-0 right-0 h-full w-1/2 rounded-full bg-white`}
        variants={toggleSwitchVarient}
        initial="off"
        animate={isOn ? "on" : "off"}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 400,
        }}
      />
    </div>
  );
};
export default ToggleSwitch;
