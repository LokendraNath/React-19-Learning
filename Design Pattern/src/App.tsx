import CpApp from "./ContainerOrPresentationlPattern/CpApp";

const App = () => {
  return (
    <div className="bg-blue-950 flex items-center text-center flex-col h-screen">
      <h1 className="text-3xl text-white mb-5">Design Pattern Example</h1>
      {/* Users (Container / Presentation Pattern) */}
      <CpApp />
    </div>
  );
};
export default App;
