// import TypeApp from "./Type-App";
import { RTxApp } from "./RTxApp";

export const App = () => {
  return (
    <div>
      {/* Props Define
      <User name="Lokendra Nath" age={20} isVergin={true} /> */}
      {/*  Basic Button Declaration
      <Button
        label="Click"
        onClick={() => console.log("Click")}
        disable={false}
      /> */}

      {/* Type-Safe RC */}
      {/* <TypeApp /> */}

      {/* Reusable Types */}
      <RTxApp />
    </div>
  );
};
