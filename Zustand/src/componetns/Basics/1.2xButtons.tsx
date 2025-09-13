import { useCounter } from "../../store/counterStore";

const CounterButton = () => {
  //Combine
  const { increment, decrement, reset, plusFive } = useCounter();

  // or Individuals
  /*
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  const reset = useCounter((state) => state.reset);
  const plusFive = useCounter((state) => state.plusFive);
*/
  return (
    <>
      <button className="btn bg-red-500" onClick={decrement}>
        Decrement
      </button>
      <button className="btn bg-yellow-500" onClick={plusFive}>
        Plus Five
      </button>
      <button className="btn bg-green-500" onClick={increment}>
        Increment
      </button>
      <button className="btn bg-green-500" onClick={reset}>
        Reset
      </button>
    </>
  );
};
export default CounterButton;
