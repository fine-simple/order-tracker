import { useMemo, useState } from "react";
import Order from "./Order";
import { useDispatch, useSelector } from "../ts/hooks/redux";
import AccordionModify from "./AccordionModify";
import type { FC } from "react";
import type { IAccordionModifyProps } from "./AccordionModify";
import { Dialog } from "@mui/material";
import AddModify from "./AddModify";
interface IProps
  extends Omit<IAccordionModifyProps, "id" | "title" | "children"> {
  id: string | number;
  name: string;
  orders?: { [id: number]: number };
}

const Person: FC<IProps> = ({ id, name = "", orders = {}, ...props }) => {
  const [editVisible, setEditVisible] = useState(false);
  const items = useSelector(state => state.items);
  const tax = useSelector(state => state.shared.tax);

  const getTotalPrice = useMemo(
    () =>
      Object.entries(orders).reduce(
        (acc, [id, amount]) => acc + amount * items[id].price,
        0
      ) *
      (1 + tax),
    [orders, items, tax]
  );

  const editClickedHandler = () => {
    setEditVisible(true);
  };

  const hideMenu = () => {
    setEditVisible(false);
  };

  return (
    <>
      <Dialog open={editVisible} onClose={hideMenu}>
        <AddModify id={id} name={name} orders={orders} onSave={hideMenu} />
      </Dialog>
      <AccordionModify
        title={name}
        summary={`${getTotalPrice.toFixed(2)} L.E.`}
        onEdit={editClickedHandler}
        {...props}
      >
        <ul>
          {Object.entries(orders).map(([id, amount]) => (
            <Order key={id} id={id} amount={amount} />
          ))}
        </ul>
      </AccordionModify>
    </>
  );
};

export default Person;
