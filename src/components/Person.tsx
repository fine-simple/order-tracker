import { useCallback, useId, useState } from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { removePerson } from "../js/reducers/personSlice";
import edit from "../assets/ed.svg";
import del from "../assets/del.svg";
import AddModify from "./AddModify";
import Confirm from "./Confirm";
import { Card, CardHeader } from "@mui/material";
import AccordionModify from "./AccordionModify";

export default function Person({ id, name = "", orders = {} }) {
  const [editVisible, setEditVisible] = useState(false);
  const items = useSelector((state) => state.items);
  const tax = useSelector((state) => state.shared.tax);

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

  return (
    <>
      {editVisible && (
        <AddModify id={id} name={name} orders={orders} hideMenu={hideMenu} />
      )}
      <AccordionModify
        title={name}
        summary={`${getTotalPrice().toFixed(2)} L.E.`}
        onEdit={editClickedHandler}
      >
        <ul>
          {Object.entries(orders).map(([id, amount]) => (
            <Order key={id} id={id} amount={amount} />
          ))}
        </ul>
      </AccordionModify>
    </>
  );
}
