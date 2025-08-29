const EventHandeling = () => {
  const handleMouseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Click", e.currentTarget);
  };
  const handleMouseDiv = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", e.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseDiv}>
      <h1>Step 3 (Event Handeling)</h1>
      <div style={{ border: "1px solid" }}>
        <p>Hey</p>
        <button onClick={handleMouseBtn}>Hover Me Baby</button>
      </div>
    </div>
  );
};
export default EventHandeling;
