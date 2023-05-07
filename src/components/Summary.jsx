import { useCallback, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTax } from "../js/reducers/sharedSlice";

export default function Summary({}) {
  const dispatch = useDispatch();

  const taxInputId = useId();
  const tax = useSelector(state => state.shared.tax);
  const persons = useSelector(state => state.persons);
  const availableItems = useSelector(state => state.items);
  const changeTax = tax => dispatch(setTax(tax));

  const subTotal = useCallback(
    () =>
      Object.values(persons).reduce(
        (acc, { items }) =>
          Object.entries(items).reduce(
            (acc, [id, amount]) => acc + availableItems[id].price * amount,
            0
          ) + acc,
        0
      ),
    [persons]
  );

  const taxChangeHandler = e => {
    changeTax(e.target.value / 100);
  };

  const total = subTotal() * (1 + tax);

  return (
    <article className="artcl">
      <h2>Summary</h2>
      <h4>Sub-total: {subTotal()}</h4>
      <div className="flex">
        <label htmlFor="tax">Tax</label>
        <input
          id={taxInputId}
          onChange={taxChangeHandler}
          className="tax"
          name="tax"
          type="number"
          placeholder="e.g., 14%"
        />
        <span> %</span>
      </div>
      <p>Total: {total.toFixed(2)}</p>
    </article>
  );
}
