import { useState } from "react";
import type { ChangeEvent, FC } from "react";
import { useSelector } from "../ts/hooks/redux";
import OrderEditor from "./OrderEditor";
import NewOrder from "./NewOrder";
import type { Items } from "../ts/reducers/personSlice/types";

export type OrderPayload = { id: number | string; amount: number };

interface IOrderEditorProps {
  orders: Items;
  setOrders: React.Dispatch<React.SetStateAction<Items>>;
}

const OrdersEditor: FC<IOrderEditorProps> = ({ orders, setOrders }) => {
  const allOrders = useSelector(state => state.items);

  const availableOrders = Object.entries(allOrders).filter(
    ([orderId]) => !Object.keys(orders).includes(orderId.toString())
  );

  const [addNewVisible, setAddNewVisible] = useState(false);
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;

    switch (option) {
      case "undefined":
        break;
      case "add":
        setAddNewVisible(true);
        break;
      default:
        setOrders((prev: Items) => ({ ...prev, [option]: 1 }));
        break;
    }
  };

  const hideAddNew = () => {
    setAddNewVisible(false);
  };

  const addOrder = (id: number) => {
    setOrders(prev => ({ ...prev, [id]: 1 }));
  };

  const changeOrderHandler = ({ id, amount }: OrderPayload) => {
    if (amount < 1) {
      setOrders(prev => {
        const newOrders = { ...prev };
        delete newOrders[id];
        return newOrders;
      });
      return;
    }
    const newOrder = { [id]: amount };
    setOrders(prev => ({ ...prev, ...newOrder }));
  };

  return (
    <fieldset>
      <legend>Orders</legend>
      <ul>
        {Object.entries(orders).map(([id, amount]) => (
          <OrderEditor
            name={allOrders[id].name}
            id={id}
            key={id}
            amount={amount}
            changeOrder={changeOrderHandler}
          />
        ))}
      </ul>
      {addNewVisible && <NewOrder addOrder={addOrder} hideMenu={hideAddNew} />}
      {!addNewVisible && (
        <select id="order" value="undefined" onChange={selectHandler}>
          <option value="undefined" disabled hidden>
            Add Order
          </option>

          {availableOrders.map(([id, { name }]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
          <option value="add">Add New</option>
        </select>
      )}
    </fieldset>
  );
};

export default OrdersEditor;
