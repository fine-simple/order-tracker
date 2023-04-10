import OrderEditor from "./OrderEditor";
import { useSelector, useDispatch } from "react-redux";

export default function OrdersEditor({ orders = {} }) {
  const availableOrders = useSelector(state => state.items);
  const dispatch = useDispatch();
  
  const selectHandler = e => {
    const option = e.target.value;
    if (option === "add") {
    } else {
      addOrder({ id: option, name: availableOrders[option], amount: 1 });
    }
  };

  const changeOrderHandler = ({ id, amount }) => {
    const newOrder = { id, ...orders[id], amount };
    addOrder(newOrder);
  };

  return (
    <>
      <fieldset>
        <legend>Orders</legend>
        <ul>
          {Object.entries(orders).map(([id, name]) => (
            <OrderEditor
              name={orders[id].name}
              id={id}
              key={id}
              amount={orders[id].amount}
              changeOrder={changeOrderHandler}
            />
          ))}
        </ul>
        <select id="order" defaultValue="undefined" onClick={selectHandler}>
          <option value="undefined" disabled hidden>
            Add Order
          </option>
          {Object.keys(availableOrders)
            .filter(key => !orders[key])
            .map(id => (
              <option key={id} value={id}>
                {availableOrders[id].name}
              </option>
            ))}
          <option value="add">Add New</option>
        </select>
      </fieldset>
    </>
  );
}
