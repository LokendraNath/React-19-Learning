import { Suspense } from "react";
import { Todo } from "./component/NEWxFetchData";
// import { FetchTodo } from "./component/OLD-FetchTodo";
// import { NEWxFetchData, Todo } from "./component/NEWxFetchData";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Todo />
    </Suspense>
  );
};
export default App;
