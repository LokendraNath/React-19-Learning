// import TypeApp from "./Type-App";
// import { RTxApp } from "./RTxApp";
// import Counter from "./components/STxCounter";
// import STE from "./STE";
// import STExTodo from "./components/STExTodo";

import CTxApp from "./CTxApp";

// import CTxApp, { Counter } from "./CTxApp";
// import { ContactForm } from "./components/useRef (RFE + E)/RFEExContactForm";
// import EventHandeling from "./components/useRef (RFE + E)/RFEExEventHandling";
// import { FocusInput } from "./components/useRef (RFE + E)/RFEExFocusInput";

// import { Form } from "./components/RFExForm";

// import STExTodo from "./components/STExTodo";

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
      {/* ========== Type-Safe RC ============*/}
      {/* <TypeApp /> */}
      {/* ========== Reusable Types ========== */}
      {/* <RTxApp /> */}
      {/* ========== useState Types ========== */}
      {/* <Counter /> */}
      {/* ========== useState Types Exercise ========== */}
      {/* <STE /> 
      <STExTodo /> */}
      {/* ========== useRef, Form , Event ==========*/}
      {/* <Form /> Basic Form */}
      {/* ========== useRef, Form , Event Exercise ==========*/}
      {/* <FocusInput />
      <ContactForm />
      <EventHandeling /> */}
      {/* ========== useContext Api ==========*/}
      <CTxApp />
    </div>
  );
};
