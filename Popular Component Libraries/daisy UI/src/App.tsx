const App = () => {
  return (
    <div>
      <button className="btn btn-dash">Default</button>
      <button className="btn btn-dash btn-primary">Primary</button>
      <button className="btn btn-dash btn-secondary">Secondary</button>
      <button className="btn btn-dash btn-accent">Accent</button>
      <button className="btn btn-dash btn-info">Info</button>
      <button className="btn btn-dash btn-success">Success</button>
      <button className="btn btn-dash btn-warning">Warning</button>
      <button className="btn btn-dash btn-error">Error</button>
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Lawde Sone Dena</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};
export default App;
