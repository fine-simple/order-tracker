import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson } from "../js/reducers/personSlice";
import Modal from "./Modal/Modal";
import OrderEditor from "./OrderEditor";
import NewOrder from "./NewOrder";

export default function AddModify({
  hideMenu,
  id = undefined,
  name = "",
  orders: savedOrders = {},
}) {
  const availableOrders = useSelector(state => state.items);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState({ ...savedOrders });
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
    switch (option) {
      case "undefined":
        break;
      case "add":
        setAddNewVisible(true);
        break;
      default:
        setOrders(prev => ({ ...prev, [option]: 1 }));
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const name = e.target.name.value;

    // validate input
    if (name.trim().length === 0) {
      alert("Please add a Name");
      return;
    }

    const newPerson = {
      id,
      name,
      items: orders,
    };
    dispatch(addPerson(newPerson));
    hideMenu();
  };

  const hideAddNew = () => {
    setAddNewVisible(false);
  };

  const addOrder = id => {
    setOrders(prev => ({ ...prev, [id]: 1 }));
  };

  return (
    <Modal onBackdropClick={hideMenu}>
      <form className="add-new" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            defaultValue={name}
            type="text"
            id="name"
            placeholder="💂John Doe"
            required
          />
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
            {addNewVisible && (
              <NewOrder addOrder={addOrder} hideMenu={hideAddNew} />
            )}
            {!addNewVisible && (
              <select id="order" value="undefined" onChange={selectHandler}>
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
          {(id && "Save") || "Add"}
        </button>
      </form>
    </Modal>
  );
}
