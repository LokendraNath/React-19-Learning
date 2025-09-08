import { motion, useSpring } from "framer-motion";
import type { ChangeEvent } from "react";

const RangeSlider = () => {
  const scale = useSpring(1);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.button className="box" style={{ scale }} />
      <div className="mt-[6]">
        <input
          type="range"
          className="mt-10"
          min={0.5}
          max={5}
          step={0.1}
          name="range"
          id="range"
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
export default RangeSlider;
