/*
क्या है:
    Normal flow: आप form submit करते हैं → API call complete होने का इंतजार करते हैं → UI update।
    Optimistic flow: आप UI को तुरंत update कर देते हैं, और अगर API fail हो जाए तो revert कर सकते हैं।
    मतलब: UI fast और smooth लगेगा, user को wait नहीं करना पड़ेगा।
*/

import { useState } from "react";
import { useOptimistic } from "react"; // React 19 feature

interface Todo {
  id: number;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // useOptimistic hook
  const [optimisticTodos, addTodo] = useOptimistic<Todo[], Todo>(
    todos,
    (current, newTodo) => [...current, newTodo]
  );

  const handleAdd = async () => {
    const newTodo = { id: Date.now(), text: "New Task" };

    // UI update immediately
    addTodo(newTodo);

    try {
      // fake API call
      await fakeApiCall(newTodo);
    } catch (err) {
      console.log("API failed, revert UI if needed");
    }
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Fake API function
function fakeApiCall(todo: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // randomly fail for testing
      Math.random() > 0.5 ? resolve("Success") : reject(new Error("Failed"));
    }, 1000);
  });
}
