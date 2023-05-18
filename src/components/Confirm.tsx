import Modal from "./Modal/Modal";
import warn from "../assets/icons8-error.gif"
export default function Confirm({ onOk, onCancel, message }) {
  return (
    <div className="m">
      <Modal onBackdropClick={onCancel}>
        <div className="Confirm">
          <span className="warn">
              <p> {message}</p>
              <img src={warn} alt="" />
          </span>
          <span className="btns">  
            <button id="cncl" onClick={onCancel}>Cancel</button>
            <button id="delete" onClick={onOk}>Delete</button>
          </span>
        </div>
        
      </Modal>
    </div>
  );
}
