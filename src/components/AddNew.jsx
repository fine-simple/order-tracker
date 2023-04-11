import { useState } from "react";
import Modal from "./Modal/Modal";
import OrdersEditor from "./OrdersEditor";
import { useSelector } from "react-redux";

export default function AddNew({ hideMenu }) {
  const availableOrders = useSelector(state => state.items);
  const [orders, setOrders] = useState({});

  const addNewOrder = order => {
    setOrders({
      ...orders,
      [order.id]: { name: order.name, amount: order.amount },
    });
  };

  return (
    <Modal onBackdropClick={hideMenu}>
      <form className="add-new">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  placeholder="Your Name"/>
        </div>

        <div className="form-group">
          <OrdersEditor
            orders={orders}
            addOrder={addNewOrder}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price"  placeholder="Item Price"/>
        </div>
        <button className="add">Add</button>
      </form>
    </Modal>
  );
}
