import { useCallback } from "react";
import Order from "./Order";
import { useSelector } from "react-redux";
import edit from "../assets/square-edit.png"
import del from "../assets/trash-delete.png"
export default function Person({ id, name = "", orders = {} }) {
  const items = useSelector(state => state.items);
  const tax = useSelector(state => state.shared.tax);

  const getTotalPrice = useCallback(
    () =>
      Object.entries(orders).reduce(
        (acc, [id, amount]) => acc + amount * items[id].price,
        0
      ) *
      (1 + tax),
    [orders, items, tax]
  );

  return (
    <article className="card">
      <div className="head">
      <header>
        <h3>{name}</h3>
      </header>
      <span>
      <button id="edit">
        <img src={edit} alt="" />
      </button>
      <button id="delete" >
        <img src={del} alt="" />
      </button>
      </span>
      </div>
      <ul>
        {Object.entries(orders).map(([id, amount]) => (
          <Order key={id} id={id} amount={amount} />
        ))}
      </ul>
      
      <footer>
        <h4>Total : {getTotalPrice().toFixed(2)} L.E.</h4>
      </footer>
    </article>
  );
}
