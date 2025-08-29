import { useReducer } from "react";
import { reducer, type CounterState } from "./CounterReducer";

const initialState: CounterState = { count: 0 };

export const RDTxCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
