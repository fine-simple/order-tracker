import Modal from "./Modal/Modal";

export default function AddNew({ hideMenu, person }) {
  return (
    <Modal onBackdropClick={hideMenu}>
      <form className="add-new">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="order">Orders</label>
          <select id="order">
            <option value="1">Apple</option>
            <option value="2">Orange</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" />
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
