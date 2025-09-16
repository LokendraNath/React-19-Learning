import UserContainer from "./containers/UserContainer";

const CpApp = () => {
  return (
    <div>
      <h1 className="text-2xl mb-5 ">
        Exmpale 1 {`->`} Users (Container / Presentation Pattern)
      </h1>
      <UserContainer />
    </div>
  );
};
export default CpApp;
