// import CpApp from "./ContainerOrPresentationlPattern/CpApp";

import ChApp from "./Costom Hook Pattern/ChApp";

const App = () => {
  return (
    <div className="bg-blue-950 flex items-center text-center flex-col h-screen">
      <h1 className="text-3xl text-white mb-5">Design Pattern Example</h1>
      {/* Container / Presentation Pattern */}
      {/* <CpApp /> */}

      {/* Costom Hook Pattern */}
      <ChApp />
    </div>
  );
};
export default App;
