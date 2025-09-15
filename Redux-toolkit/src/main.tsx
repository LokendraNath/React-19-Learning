import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
// import { store } from "./Simple Counter/app/store.ts";
import { Provider } from "react-redux";
import { store } from "./RTK Query/App/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
