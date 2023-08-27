import { useCallback, useId, useMemo } from "react";
import type { ChangeEvent } from "react";
import { useSelector, useDispatch } from "../ts/hooks/redux";
import { setTax, setExpenses } from "../ts/reducers/sharedSlice/sharedSlice";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import type { FC } from "react";

const Summary: FC = () => {
  const dispatch = useDispatch();

  const taxInputId = useId();
  const expensesInputId = useId();
  const tax = useSelector(state => state.shared.tax);
  const persons = useSelector(state => state.persons);
  const availableItems = useSelector(state => state.items);
  const changeTax = useCallback(
    (tax: number) => dispatch(setTax(tax)),
    [dispatch]
  );
  const expenses = useSelector(state => state.shared.expenses);
  const changeExpenses = useCallback(
    (expenses: number) => dispatch(setExpenses(expenses)),
    [dispatch]
  );

  const subTotal = useMemo(
    () =>
      Object.values(persons).reduce(
        (acc, { items }) =>
          Object.entries(items).reduce(
            (acc, [id, amount]) => acc + availableItems[id].price * amount,
            0
          ) + acc,
        0
      ),
    [persons, availableItems]
  );

  const taxChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value) || 0;
      changeTax(value / 100);
    },
    [changeTax]
  );

  const changeExpensesHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value) || 0;
      changeExpenses(value);
    },
    [changeExpenses]
  );

  const total = useMemo(() => subTotal * (1 + tax) + expenses, [subTotal, tax, expenses]);

  return (
    <Card>
      <CardHeader title="Summary" />
      <CardContent>
        <Typography variant="h6">Sub-total: {subTotal}</Typography>
      </CardContent>
      <CardContent>
        <TextField
          id={taxInputId}
          label="Tax"
          placeholder="e.g. 14%"
          type="number"
          value={(tax && (tax * 100).toFixed(0)) || ""}
          onChange={taxChangeHandler}
        />
      </CardContent>
      <CardContent>
        <TextField
          id={expensesInputId}
          label="Expenses"
          placeholder="e.g. 10"
          type="number"
          value={expenses || ""}
          onChange={changeExpensesHandler}
        />
      </CardContent>
      <CardContent>
        <Typography variant="h6">Total: {total.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
};

export default Summary;
