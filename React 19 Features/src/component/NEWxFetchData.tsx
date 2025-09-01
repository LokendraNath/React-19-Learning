import { use } from "react";

export function Todo() {
  const todo = use(
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? "Done ✅" : "Pending ⏳"}</p>
    </div>
  );
}
