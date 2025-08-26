// import User from "./components/User";

import { Button } from "./components/Button";

export const App = () => {
  return (
    <div>
      {/* <User name="Lokendra Nath" age={20} isVergin={true} /> */}
      <Button
        label="Click"
        onClick={() => console.log("Click")}
        disable={false}
      />
    </div>
  );
};
