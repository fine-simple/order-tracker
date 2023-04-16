import { useRef } from "react";
import { addItem } from "../js/reducers/itemSlice";
import { useDispatch } from "react-redux";
import done from "../assets/done-v.png"
import x from "../assets/close-x.png"

export default function NewOrder({ hideMenu }) {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const priceRef = useRef();

  const addHandler = () => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;

    // validate input
    if (name.trim().length === 0 || price.trim().length === 0 || price < 0)
      return;

    dispatch(addItem({ name, price }));
    hideMenu();
  };

  const cancelHandler = () => {
    hideMenu();
  };

  return (
    <div className="new-order">
      <span>
        <input type="text" id="name" placeholder="Name" ref={nameRef} required />
        <input type="number" id="price" placeholder="Price" ref={priceRef} required  />
      </span>
      <div className="btns">
      <button type="button" id="ok" onClick={addHandler}>
        <img src={done} alt="" />
      </button>
      <button type="button" id="no" onClick={cancelHandler}>
       <img src={x} alt=""/>
      </button>
      </div>
    </div>
      
  );
}
