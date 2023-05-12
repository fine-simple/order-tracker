import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
function Modal({ children, onBackdropClick }) {
  const backdropClickHandler = e => {
    if (e.target === e.currentTarget) onBackdropClick();
  };
  return (
    <>
      <div onClick={backdropClickHandler} className={classes.backdrop}>
        <dialog className={classes.modal}>{children}</dialog>
      </div>
    </>
  );
}
export default props =>
  ReactDOM.createPortal(<Modal {...props} />, document.getElementById("modal"));
