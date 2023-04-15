import { useRef } from "react";
import { addItem } from "../js/reducers/itemSlice";
import { useDispatch } from "react-redux";

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
      <input type="text" id="name" placeholder="Name" ref={nameRef} />
      <input type="number" id="price" placeholder="price" ref={priceRef} />
      <button type="button" onClick={addHandler}>
        ✅
      </button>
      <button type="button" onClick={cancelHandler}>
        ❌
      </button>
    </div>
  );
}
