import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  plusFive,
} from "../app/feature/counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(plusFive())}>5+</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
export default Counter;
