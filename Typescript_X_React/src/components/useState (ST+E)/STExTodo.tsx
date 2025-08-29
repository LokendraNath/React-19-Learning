import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  complete: boolean;
}

const STExTodo = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todo.length + 1,
      task,
      complete: false,
    };
    setTodo((prev) => [...prev, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => addTodo("New Task")}>Add Todo</button>

      <ul>
        {todo.map((t) => (
          <li key={t.id}>
            {t.task} {t.complete ? "(Complete)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default STExTodo;
