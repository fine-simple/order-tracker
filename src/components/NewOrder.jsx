import { useRef } from "react";
import { addItem } from "../js/reducers/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import done from "../assets/check.svg";
import x from "../assets/cross.svg";

export default function NewOrder({ hideMenu, addOrder }) {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const priceRef = useRef();
  const items = useSelector(state => state.items);

  const addHandler = async () => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;

    // validate input
    if (name.trim().length === 0 || price.trim().length === 0 || price < 0)
      return;
    const id = Date.now();
    dispatch(addItem({ id, name, price }));
    addOrder(id);
    hideMenu();
  };

  const cancelHandler = () => {
    hideMenu();
  };

  return (
    <div className="new-order">
      <span>
        <input
          type="text"
          id="name"
          placeholder="Order"
          ref={nameRef}
          required
        />
        <input
          type="number"
          id="price"
          placeholder="Price"
          ref={priceRef}
          required
        />
      </span>
      <div className="btn">
        <button type="button" id="ok" onClick={addHandler}>
          <img src={done} alt="" />
        </button>
        <button type="button" id="no" onClick={cancelHandler}>
          <img src={x} alt="" />
        </button>
      </div>
    </div>
  );
}
