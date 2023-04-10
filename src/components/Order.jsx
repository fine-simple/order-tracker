import { useSelector } from "react-redux";

export default function Order({ id, amount }) {
  const name = useSelector(state => state.items[id].name);
  return (
    <li>
      {name} x {amount}
    </li>
  );
}
