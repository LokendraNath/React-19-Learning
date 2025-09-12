import { useCounter } from "../store";
import CounterButton from "./1.2xButtons";

const Counter = () => {
  const count = useCounter((state) => state.count);

  return (
    <div>
      <h1>Count {count}</h1>
      <CounterButton />
    </div>
  );
};
export default Counter;
