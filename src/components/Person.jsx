import { useCallback, useId, useState } from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { removePerson } from "../js/reducers/personSlice";
import edit from "../assets/square-edit.png";
import del from "../assets/trash-delete.png";
import AddModify from "./AddModify";

export default function Person({ id, name = "", orders = {} }) {
  const dispatch = useDispatch();
  const [editVisible, setEditVisible] = useState(false);
  const items = useSelector(state => state.items);
  const tax = useSelector(state => state.shared.tax);
  const editId = useId();
  const deleteId = useId();

  const getTotalPrice = useCallback(
    () =>
      Object.entries(orders).reduce(
        (acc, [id, amount]) => acc + amount * items[id].price,
        0
      ) *
      (1 + tax),
    [orders, items, tax]
  );

  const editClickedHandler = e => {
    setEditVisible(true);
  };
  const hideMenu = () => {
    setEditVisible(false);
  };

  const deleteClickedHandler = e => {
    dispatch(removePerson(id));
  };

  return (
    <>
      {editVisible && <AddModify id={id} name={name} orders={orders} hideMenu={hideMenu} />}
      <article className="card">
        <div className="head">
          <header>
            <h3>{name}</h3>
          </header>
          <span>
            <button id={editId} onClick={editClickedHandler}>
              <img src={edit} alt="edit" />
            </button>
            <button id={deleteId} onClick={deleteClickedHandler}>
              <img src={del} alt="delete" />
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
    </>
  );
}
