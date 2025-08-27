import { useState } from "react";
import STExUserProfile from "./components/STExUserProfile";
import STExTodo from "./components/STExTodo";

const STE = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      {/* <h1>Counter</h1>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <STExUserProfile /> */}

      <STExTodo />
    </div>
  );
};
export default STE;
