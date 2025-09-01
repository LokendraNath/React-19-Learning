import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-blue-950"}`}>
      <h1
        className={`text-2xl font-bold ${
          theme === "light" ? "text-blue-800" : "text-white"
        }  `}
      >
        Hello MuderFucker
      </h1>
      <button
        onClick={toggleTheme}
        className="bg-blue-600 text-white px-2 font-bold rounded-xl"
      >
        {theme === "light" ? "Turn Dark Mode" : "Turn Light Mode"}
      </button>
    </div>
  );
};
export default App;
