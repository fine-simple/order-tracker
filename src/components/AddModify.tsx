import { FormEvent, useState } from "react";
import { useDispatch } from "../ts/hooks/redux";
import { addPerson } from "../ts/reducers/personSlice/personSlice";
import Modal from "./Modal/Modal";
import type { FC } from "react";
import OrdersEditor from "./OrdersEditor";
import type { Items } from "../ts/reducers/personSlice/types";

export interface IAddModifyProps {
  hideMenu: () => void;
  id?: string | number;
  name?: string;
  orders?: { [id: number]: number };
}

const AddModify: FC<IAddModifyProps> = ({
  hideMenu,
  id,
  name = "",
  orders: savedOrders = {},
}) => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState<Items>({
    ...savedOrders,
  });
  const [newName, setNewName] = useState<string>(name);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = newName;

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

  return (
    <Modal onBackdropClick={hideMenu}>
      <form className="add-new" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={newName}
            onChange={e => setNewName(e.target.value)}
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <OrdersEditor orders={orders} setOrders={setOrders} />
        </div>
        <button type="submit" className="add">
          {(id && "Save") || "Add"}
        </button>
      </form>
    </Modal>
  );
};

export default AddModify;
