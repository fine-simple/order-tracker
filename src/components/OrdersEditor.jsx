import OrderEditor from "./OrderEditor";

export default function OrdersEditor({
  availableOrders = {},
  orders = {},
  addOrder,
}) {
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
        <select id="order" onClick={selectHandler}>
          <option value="" selected disabled hidden>
            Add Order
          </option>
          {Object.keys(availableOrders)
            .filter(key => !orders[key])
            .map(id => (
              <option key={id} value={id}>
                {availableOrders[id]}
              </option>
            ))}
          <option value="add">Add New</option>
        </select>
      </fieldset>
    </>
  );
}
