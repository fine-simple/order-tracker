import Modal from "./Modal/Modal";
export function Refresh({onOK , onCancel}){
    return(
        <div className="m">
            <Modal onBackdropClick={onCancel}>
            <div className="Confirm">
          <span className="warn">
              <p> Are you sure you want to delete all orders?</p>
          </span>
          <span className="btns">  
            <button id="cncl" onClick={onCancel}>No</button>
            <button id="delete" onClick={onOk}>Yes</button>
          </span>
        </div>
            
        </Modal>
            
            
        </div>
    );
}