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
      <p>
        {name} X{amount}
      </p>
      <div>
        <button type="button" onClick={increaseHandler}>
          ☝
        </button>
        <button type="button" onClick={decreaseHandler}>
          👇
        </button>
      </div>
    </li>
  );
}
