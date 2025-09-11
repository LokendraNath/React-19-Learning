import { motion } from "motion/react";
import { useState } from "react";

const framerMotionConcepts = [
  {
    title: "Variants",
    description:
      "Variants allow you to define multiple animation states (like initial, hover, tap, exit) and reuse them across motion components to orchestrate animations in a consistent way.",
  },
  {
    title: "AnimatePresence",
    description:
      "Component that helps animate components entering and exiting the React component tree, e.g. fade-in when mounted, fade-out when unmounted.",
  },
  {
    title: "Layout Animations",
    description:
      "Using the `layout` prop (or `layoutId`) to smoothly animate between different layouts, e.g. when items move or resize in a list.",
  },
  {
    title: "Gesture Props (whileHover, whileTap, etc.)",
    description:
      "Props which allow animations triggered by user gestures like hover, tap or drag, enabling interactive UI effects.",
  },
  {
    title: "Transition Types",
    description:
      "Different transition types (e.g. tween, spring, inertia) and their parameters (like duration, stiffness, damping) to control how animations flow and feel.",
  },
];

const Accordian = () => {
  const [openIndex, setOpnIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpnIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-10 space-y-3 text-white">
      {framerMotionConcepts.map((ele, index) => (
        <div
          key={index}
          className="p-3 flex max-w-sm items-start justify-start flex-col border-b-2 border-white"
        >
          <div className="flex items-center justify-between w-full px-10">
            <h1 className=" text-xl">
              {index + 1}: {ele.title}
            </h1>
            <button
              className="cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              👇
            </button>
          </div>
          <motion.div
            className="overflow-hidden flex items-center flex-col justify-center text-center mt-3"
            // initial={{ y: -50, opacity: 0.7 }}
            // animate={{ y: 0, opacity: 1 }}
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{ele.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default Accordian;
