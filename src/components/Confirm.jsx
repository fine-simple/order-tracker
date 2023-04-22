import Modal from "./Modal/Modal";

export default function Confirm({ onOk, onCancel, message }) {
  return (
    <Modal onBackdropClick={onCancel}>
      <div>
        <p>{message}</p>
        <button onClick={onOk}>OK</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </Modal>
  );
}
