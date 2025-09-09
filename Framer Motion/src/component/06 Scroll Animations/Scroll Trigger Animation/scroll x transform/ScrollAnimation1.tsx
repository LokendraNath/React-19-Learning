import { useScroll, useTransform, motion } from "motion/react";

const ScrollAnimation1 = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, 0]);
  const borderRadius = useTransform(scrollY, [0, 700], ["0%", "40%"]);

  return (
    <div className="relative h-screen">
      <motion.img
        src="https://images.unsplash.com/photo-1756992293716-b843700b5ab0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Chutiya Img"
        style={{ scale, borderRadius }}
        className="w-full h-screen object-cover absolute inset-0 h-full "
      />
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Scroll To Animate</h1>
      </div>
      <div className="h-[200vh] w-full flex items-center justify-center">
        <h2 className="text-black">Hello Ji</h2>
      </div>
    </div>
  );
};
export default ScrollAnimation1;
