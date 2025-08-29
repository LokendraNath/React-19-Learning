import { useContext, type FC } from "react";
import { MyContext } from "./context/MyContext";

export const Counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <div>
      <h1>Counter With Context Api</h1>
      <button onClick={decrement}>Decrement</button>
      <h2>Count: {count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  );
};
