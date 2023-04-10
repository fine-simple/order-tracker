import Order from "./Order";

export default function Person({ name = "", orders = {}, onClick, tax = 0 }) {
  const getTotalPrice = () =>
    Object.values(orders).reduce(
      (acc, { amount, price }) => acc + amount * price,
      0
    ) *
    (1 + tax);

  return (
    <article className="card"  onClick={onClick}>
      <header>
        <h3>{name}</h3>
      </header>
      <ul>
        {Object.entries(orders).map(([id, { name, amount }]) => (
          <Order key={id} id={id} name={name} amount={amount} />
        ))}
      </ul>
      <footer>
        <h4>Total : {getTotalPrice().toFixed(2)} L.E.</h4>
      </footer>
    </article>
  );
}
