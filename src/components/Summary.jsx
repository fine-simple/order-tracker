import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTax } from "../js/reducers/sharedSlice";

export default function Summary({}) {
  const dispatch = useDispatch();

  const taxInputId = useId();
  const tax = useSelector(state => state.shared.tax);
  const persons = useSelector(state => state.persons);
  const changeTax = tax => dispatch(setTax(tax));

  const subTotal = Object.values(persons).reduce(
    (acc, orders) =>
      Object.values(orders).reduce(
        (acc, order) => acc + order.price * order.amount,
        0
      ) + acc,
    0
  );

  const taxChangeHandler = e => {
    changeTax(e.target.value / 100);
  };

  const total = subTotal * (1 + tax);

  return (
    <article className="artcl">
      <h2>Summary</h2>
      <h4>Sub-total: {subTotal}</h4>
      <div className="flex">
      <input
        id={taxInputId}
        onChange={taxChangeHandler}
        className="tax"
        name="tax"
        type="number"
        placeholder="Tax"
      />
      <span> %</span>
      </div>
      <h5>Total: {total.toFixed(2)}</h5>
    </article>
  );
}
