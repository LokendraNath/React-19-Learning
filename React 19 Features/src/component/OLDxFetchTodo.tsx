import { useEffect, useState } from "react";

interface Todo {
  title: string;
}
export const FetchTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Todo[] = await response.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <p>Loading ....</p>;
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.title}>{todo.title}</div>
      ))}
    </div>
  );
};
