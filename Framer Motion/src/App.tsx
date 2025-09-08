// import Basics from "./component/Basics";
// import PulpButton from "./component/PulpButton";

import DraggableBox from "./component/05 useMotionValue + useSpring/UseTransform";
import UseTransform from "./component/05 useMotionValue + useSpring/UseTransform";

// import RangeSlider from "./component/05 useMotionValue + useSpring/1xUseMotionValue";

// import UseMotionValue1 from "./component/05 useMotionValue/1xUseMotionValue";
// import UseMotionValue from "./component/05 useMotionValue/1xUseMotionValue";

// import AnimatedGallary from "./component/04 StaggerAnimation/Examples/AnimatedGallary";
// import StaggerAnimation from "./component/04 StaggerAnimation/Examples/Basic";

// import AnimatedShape from "./component/03 Gesture/examples/AnimatedShape";
// import ImageGallary from "./component/03 Gesture/examples/ImageGallary";
// import StaggerAnimation from "./component/04 StaggerAnimation/Examples/Basic";

// import GestureBasic from "./component/03 Gesture/Basic";
// import AnimatedCard from "./component/03 Gesture/examples/AnimatedCard";

// import LoaderBounce from "./component/03xBouncingLoader";
// import HideShowBox from "./component/02 Varients";
// import FlipCard from "./component/02 Varients/examples/FlipCard";
// import Varients from "./component/04xVarient";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#030031]">
      {/* <Basics /> */}

      {/* <PulpButton />
       */}

      {/* <LoaderBounce /> */}

      {/* 02 Varient */}
      {/* <HideShowBox /> */}
      {/* <FlipCard /> */}

      {/* 03 Gestures */}
      {/* <GestureBasic /> */}
      {/* <AnimatedCard /> */}
      {/* <ImageGallary /> */}
      {/* <AnimatedShape /> */}

      {/* 04 Stagger Animation */}
      {/* <AnimatedGallary /> */}

      {/* 05 useMotionValue/ useSpring */}
      {/* <RangeSlider /> */}
      <DraggableBox />
    </div>
  );
};
export default App;
