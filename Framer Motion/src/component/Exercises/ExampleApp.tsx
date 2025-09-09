import BasicTranslations from "./01xBasicTranslations";
import VerticalMovement from "./02xVerticleMovement";
import RotationAnimation from "./03xRotationAnimation";
import SkewedTransition from "./04xSkewedTransition";
import CombinedTransformations from "./05xCombinedTransformations";

const ExampleApp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <BasicTranslations /> */}
      {/* <VerticalMovement /> */}
      {/* <RotationAnimation /> */}
      {/* <SkewedTransition /> */}
      <CombinedTransformations />
    </div>
  );
};
export default ExampleApp;
