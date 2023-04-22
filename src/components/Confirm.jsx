import Modal from "./Modal/Modal";

export default function Confirm({ onOk, onCancel, message }) {
  return (
    <div className="m">
      <Modal onBackdropClick={onCancel}>
        <div className="Confirm">
        <span>
          <p>{message}</p>
          </span>
          <span className="btns">
          <button id="yes" onClick={onOk}>Delete</button>
          <button id="cancel" onClick={onCancel}>Cancel</button>
          </span>
        </div>
      </Modal>
    </div>
  );
}
