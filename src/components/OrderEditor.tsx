import type { FC } from "react";
import type { OrderPayload } from "./OrdersEditor";

export interface IOrderEditorProps {
  id: string | number;
  name: string;
  amount: number;
  changeOrder: ({ id, amount }: OrderPayload) => void;
}

const OrderEditor: FC<IOrderEditorProps> = ({
  id,
  name,
  amount,
  changeOrder,
}) => {
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
      <button type="button" id="btn" onClick={decreaseHandler}>
        -
      </button>
      <p>
        {name} x{amount}
      </p>
      <div>
        <button type="button" onClick={increaseHandler}>
          +
        </button>
      </div>
    </li>
  );
};

export default OrderEditor;
