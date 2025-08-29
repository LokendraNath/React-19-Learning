import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

export type CounterState = { count: number };
type IncrementAction = { type: "INCREMENT" };
type DecrementAction = { type: "DECREMENT" };

export type CounterAction = IncrementAction | DecrementAction;

// eslint-disable-next-line react-refresh/only-export-components
export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>useReducer Example</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </div>
  );
};
