import { useState } from "react";
import Modal from "./Modal/Modal";
import OrdersEditor from "./OrdersEditor";

export default function AddNew({ hideMenu, person, availableOrders }) {
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
          <input type="text" id="name" />
        </div>
        
        <div className="form-group">
          <OrdersEditor
            availableOrders={availableOrders}
            orders={orders}
            addOrder={addNewOrder}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" />
        </div>
        <button>Add</button>
      </form>
    </Modal>
  );
}
