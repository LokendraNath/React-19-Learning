import MyProvider from "./components/useContext (CT)/context/MyContext";
import { Counter as CounterComponent } from "./components/useContext (CT)/Counter";

//! Only For Learning IRL We Use MyProvider In main.tsx and Wrap The App.tsx Inside This

const CTxApp = () => {
  return (
    <MyProvider>
      <CounterComponent />
    </MyProvider>
  );
};
export default CTxApp;
