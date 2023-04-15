import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson } from "../js/reducers/personSlice";
import Modal from "./Modal/Modal";
import OrderEditor from "./OrderEditor";
import NewOrder from "./NewOrder";

export default function AddNew({ hideMenu }) {
  const availableOrders = useSelector(state => state.items);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState({});
  const [addNewVisible, setAddNewVisible] = useState(false);

  const changeOrderHandler = ({ id, amount }) => {
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

  const selectHandler = e => {
    const option = e.target.value;
    if (option === "add") {
      setAddNewVisible(true);
    } else {
      setOrders(prev => ({ ...prev, [option]: 1 }));
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const newPerson = {
      name,
      items: orders,
    };
    dispatch(addPerson(newPerson));
  };

  const hideAddNew = () => {
    setAddNewVisible(false);
  };

  return (
    <Modal onBackdropClick={hideMenu}>
      <form className="add-new" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <fieldset>
            <legend>Orders</legend>
            <ul>
              {Object.entries(orders).map(([id, amount]) => (
                <OrderEditor
                  name={availableOrders[id].name}
                  id={id}
                  key={id}
                  amount={amount}
                  changeOrder={changeOrderHandler}
                />
              ))}
            </ul>
            {addNewVisible && <NewOrder hideMenu={hideAddNew} />}
            {!addNewVisible && (
              <select
                id="order"
                defaultValue="undefined"
                onClick={selectHandler}
              >
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
            )}
          </fieldset>
        </div>
        <button type="submit" className="add">
          Add
        </button>
      </form>
    </Modal>
  );
}
