export default function OrderEditor({ id, name, amount, changeOrder }) {
  const increaseHandler = () => {
    changeOrder({ id, amount: amount + 1 });
  };

  const decreaseHandler = () => {
    if (amount > 0) {
      changeOrder({ id, amount: amount - 1 });
    }
  };

  return (
    <li className="order-edit">
      <button type="button" id="btnminus" onClick={decreaseHandler}>
          -
        </button>
      <p className="border-1">
        {name} x{amount}
      </p>
      <div>
    
        <button type="button" onClick={increaseHandler}>
          +
        </button>
      </div>
    </li>
    
  );
}
