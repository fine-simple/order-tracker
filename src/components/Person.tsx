import { useCallback, useState } from "react";
import Order from "./Order";
import { useSelector } from "../ts/hooks/redux";
import AddModify from "./AddModify";
import AccordionModify from "./AccordionModify";
import type { FC } from "react";

interface IProps {
  id: string | number;
  name?: string;
  orders?: { [id: number]: number };
}

const Person: FC<IProps> = ({ id, name = "", orders = {} }) => {
  const [editVisible, setEditVisible] = useState(false);
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

  const editClickedHandler = () => {
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
};

export default Person;
