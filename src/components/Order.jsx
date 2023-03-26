export default function Order({ id, name, amount }) {
  return (
    <li>
      {name} x {amount}
    </li>
  );
}
