import { useCallback, useId, useState } from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { removePerson } from "../js/reducers/personSlice";
import edit from "../assets/ed.svg";
import del from "../assets/del.svg";
import AddModify from "./AddModify";
import Confirm from "./Confirm";
import { Card, CardHeader } from "@mui/material";

export default function Person({ id, name = "", orders = {} }) {
  const dispatch = useDispatch();
  const [editVisible, setEditVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const items = useSelector((state) => state.items);
  const tax = useSelector((state) => state.shared.tax);
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

  const editClickedHandler = (e) => {
    setEditVisible(true);
  };
  const hideMenu = () => {
    setEditVisible(false);
  };

  const deleteClickedHandler = (e) => {
    setConfirmVisible(true);
  };

  const deletePersonHandler = () => {
    dispatch(removePerson(id));
  };

  return (
    <>
      {editVisible && (
        <AddModify id={id} name={name} orders={orders} hideMenu={hideMenu} />
      )}
      {confirmVisible && (
        <Confirm
          onOk={deletePersonHandler}
          onCancel={() => setConfirmVisible(false)}
          message="Are you sure you want to delete this person?"
        />
      )}
      <Card>
        <CardHeader component="header" title={ <h3>{name}</h3> } subheader={<span>
            <button id={editId} onClick={editClickedHandler} className="mod">
              <img src={edit} alt="edit" />
            </button>
            <button
              id={deleteId}
              onClick={deleteClickedHandler}
              className="mod"
            >
              <img src={del} alt="delete" />
            </button>
          </span> } />
          
        <ul>
          {Object.entries(orders).map(([id, amount]) => (
            <Order key={id} id={id} amount={amount} />
          ))}
        </ul>

        <footer>
          <h4>Total : {getTotalPrice().toFixed(2)} L.E.</h4>
        </footer>
      </Card>
    </>
  );
}
