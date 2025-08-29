import { useRef } from "react";

export const FocusInput = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  function handleFocus() {
    nameRef.current?.focus();
  }

  return (
    <div>
      <h1>Step 1 (Focus Input)</h1>
      <input
        ref={nameRef}
        type="text"
        placeholder="Click the Button to Focus On me"
      />
      <button onClick={handleFocus}>Write</button>
    </div>
  );
};
