import Countdown from "./container/CountDown";
import Stopwatch from "./container/StopWatch";

const ChApp = () => {
  return (
    <>
      <h2>Custom Hook Design Pattern</h2>
      <Stopwatch />
      <Countdown initialSeconds={60} />
    </>
  );
};
export default ChApp;
