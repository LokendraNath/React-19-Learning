// import AnimatedCard from "./WhileInViewProp";

import UseScroll from "./useScroll";

const ScrollTriggerAnimation = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mb-4 text-white">
        Scroll Down To See The Animation
      </h1>
      <div className="h-screen"></div>
      {/* WhileInView Prop */}
      {/* <AnimatedCard /> */}

      {/* UseScroll Hook */}
      <UseScroll />
    </div>
  );
};
export default ScrollTriggerAnimation;
