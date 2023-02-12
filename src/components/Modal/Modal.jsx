import "./Modal.scss";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={closeModal}>X</button>
        <div className="title">
          <h2>Please CONFIRM to proceed...</h2>
        </div>
        <div className="actions">
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
